import { Injectable } from '@nestjs/common';
import { Level } from 'level';
import { hashLink } from './common';

@Injectable()
export class ConvertService {
  MAX_HASH_LENGTH = 10;
  max_links = parseInt('F'.repeat(this.MAX_HASH_LENGTH), 16);
  db = new Level('hashLink_db', { valueEncoding: 'json' });

  convert(link): string {
    let url = null;

    // check validity of url
    try {
      url = new URL(link).href;
    } catch (err) {
      console.log(err);
      return JSON.stringify('');
    }

    const shortenedLink = hashLink(url, this.max_links);

    // store shortened link
    this.db.put(shortenedLink, link, (err) => {
      console.warn('stored', err);
    });

    this.db.get(shortenedLink, (err, value) => {
      console.log('retrieved', value);
    });

    return JSON.stringify(shortenedLink);
  }

  redirect(hash): Promise<string> {
    return this.db.get(hash).then((value) => {
      console.log("retrieved", value);
      return JSON.stringify(value);
    });
  }
}
