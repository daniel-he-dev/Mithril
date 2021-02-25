# Mithril

Mithril is a responsive single-page web application for browsing, purchasing, and providing feedback on stylish modern clothing. The site is hosted on AWS and has a React-based front-end. 

[Check out the deployed app here!]()

## Table of Contents

- [Installation & Usage](#installation--usage)
- [Team Members](#team-members)
- [Roadmap](#roadmap)
- [License](#license)


## Technologies

<table>
  <tr>
    <th>Front-End</th>
    <th>Back-End</th>
    <th>Hosting</th>
  </tr>
  <tr>
    <td>![](https://miro.medium.com/max/1280/1*vbCQ6KH6c6TrWNNEYF9PDw.png)</td>
    <td>![](https://camo.githubusercontent.com/e34da2e8843d492d1b021fb733a9825912e1cb65/68747470733a2f2f627574746572636d732e636f6d2f7374617469632f696d616765732f746563685f62616e6e6572732f457870726573734a532e706e67)</td>
    <td>![](https://cdn.freebiesupply.com/logos/thumbs/2x/heroku-logo.png)</td>
  </tr>
</table>

## Installation & Usage

After forking the repo and cloning to local machine, follow these steps to install.

1. Run `npm install` to download dependencies.
2. You will need to set up a `.env` configuration file with a private GITHUB Authentication Token in the following form in your root directory.

```js
TOKEN = YOUR_KEY_HERE;
```

3. Please provide your own SSL encryption key and certificate files or follow this [link](https://stackoverflow.com/questions/10175812/how-to-create-a-self-signed-certificate-with-openssl) to produce your own. Please name them `key.pem` and `cert.pem` in your root directory.

## Usage

Follow below directions for testing, development, and production.

### Development

- Run `npm run start` to bundle the current files and watch for changes.
- Run `npm run server` to spin up the server and watch for files changes.

### Deployment

- Run `npm run build` to bundle the files once.
- Run `node server.js` to start up the server

## Team Members

- [Matthew Budiman](https://github.com/mattBman23)
- [Jason Fleming](https://github.com/jfleming9357)
- [Cayla Cardiff](https://github.com/cayla-c)
- [Daniel He](https://github.com/daniel-he-dev)

## Roadmap

- Robust test suites, including integration and E2E testing
- Standardization and minification of CSS styles
- Continuous Integration/Deployment
- Additional user features

## License

MIT License
