# SmolifyRepo
```
In the internet slang of DoggoLingo, smol is an affectionate way of saying someone or something is small in size—so cute you just want to squeeze ’em.

~ Dictionary.com
```

## Architecture
### Frontend - React
- user interface
- communicates with backend via POST http requests
### Backend - NestJS
- handles hashing of URLs
- stores and retrieves hashes from DB
### Database - [Level](https://github.com/Level/level)
- key-value store

## Local Development
NodeJS version: 16.17.0

Clone repository
> git clone https://github.com/lihaan/Smolify

### Frontend
Install dependencies
> cd smolify-web
> npm install

Start development server (on port 3000)
> npm start

### Backend
Install dependencies 
> cd smolify // from repository root
> npm install

Start development server (on port 8000)
> npm run start:dev

## Assumptions / Decisions
### Standalone apps
Based on the provided requirements of having a frontend + backend, with each using different frameworks, I decided to have two standalone apps. This will be easier to manage code/business logic within each app, without worrying that a change in one will break something in the other.

### Frontend structure
I was able to quickly set this up, building upon the scaffold provide by the Create React App. The code structure is rather simple, with the user interface being managed by `App.js` while `convert.js` and `redirect.js` handles the POST http requests to the backend server. Within `App.js`, I utilised React hooks to manage the state of the input and output links, as well as some styling properties.

### Backend structure
Although this is my first time using NestJS, I had some experience working with backend APIs and tried to maintain code modularity between services and controllers. Controllers are used only for opening routes and receiving/formatting inputs + outputs, while services are the ones providing business logic and connecting to external sources ie. the database. I also abstracted the `hashLink()` function into its own `common.ts` file, which is intended to store commonly-used helper functions. Though I did not make much use of it, I felt that `hash()` still belongs there, abstracted away from the services as it is a transformation function with a single clear purpose and responsibility.

### Database
I thought of using SQLite but stumbled upon Levels and felt that it fit my use case very well: I can lookup the actual link by its hash. It is much easier and quicker to use as well, which is vital as I'm on limited time.

### Deployment
I faced many issues during this process. I wanted to deploy the two separate apps on the same IP address but on different ports, in order to avoid any possible issues with cross-domain communication, as well as to minimise the number of "host machines" I would have to manage. I decided to try out Google Cloud since I have more experience with its cloud console (and now that Heroku no longer has a free tier), but ran into several issues with the Cloud Build Api. Namely, bugs with the billing account, the need to enable IAM permissions, the lack of support for the api in asia-southeast-1, and the lack of clear/concise documentation (with regards to my deployment requirements). I decided to go with the manual approach of starting a VM instance (equivalent of AWS ec2 instance), and using tmux to open several instances of the SSH terminal and serving production builds of both the frontend and backend. It's troublesome to maintain especially if there are new updates to the app, but it is something that is much easier to get working.