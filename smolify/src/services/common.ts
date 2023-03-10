export function hashLink(url, max_links) {
  // hash url to shorter string
  console.log(url);
  let hash = 0;
  for (let i = 0; i < url.length; i++) {
    hash += url.charCodeAt(i);
  }
  hash %= max_links;
  const shortenedLink = hash.toString(16);
  console.log(shortenedLink);
  return shortenedLink;
}
