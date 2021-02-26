# Mithril

Mithril is a responsive single-page web application for browsing, purchasing, and providing feedback on stylish modern clothing. 

Check out the deployed app [here](http://glacial-dawn-48786.herokuapp.com/)!

## Table of Contents

- [Usage](#Usage)
- [Technologies](#technologies)
- [Installation](#installation)
- [Team Members](#team-members)
- [Roadmap](#roadmap)
- [License](#license)

## Usage

![Product mockup](docs/readme/product.png)

![Questions and Reviews](docs/readme/questionsandreviews.png)

![Front-end Performance](docs/readme/performance.png)

## Technologies

<table>
  <tr>
    <th>Front-End</th>
    <th>Back-End</th>
    <th>Hosting</th>
  </tr>
  <tr>
    <td>![React](https://miro.medium.com/max/1280/1*vbCQ6KH6c6TrWNNEYF9PDw.png)</td>
    <td>![MongoDB](https://camo.githubusercontent.com/e34da2e8843d492d1b021fb733a9825912e1cb65/68747470733a2f2f627574746572636d732e636f6d2f7374617469632f696d616765732f746563685f62616e6e6572732f457870726573734a532e706e67)</td>
    <td>![Heroku](https://cdn.freebiesupply.com/logos/thumbs/2x/heroku-logo.png)</td>
  </tr>
</table>

## Installation

After forking the repo and cloning to local machine, follow these steps to install.

1. Run `npm install` to download dependencies.
2. You will need to set up a `.env` configuration file with a private GITHUB Authentication Token in the following form in your root directory.

```js
TOKEN = YOUR_KEY_HERE;
```
### Development

- Run `npm run start` to bundle the current files and watch for changes.
- Run `npm run server` to spin up the server and watch for files changes.

### Deployment

- Run `npm build` to bundle the client code.
- Run `npm start` to start up the server.
- You may now access your app at `http://localhost:3000`.

## Team Members

- [Daniel He](https://github.com/daniel-he-dev)
- [Matthew Budiman](https://github.com/mattBman23)
- [Jason Fleming](https://github.com/jfleming9357)
- [Cayla Cardiff](https://github.com/cayla-c)

## Roadmap

- Robust test suites, including integration and E2E testing
- Standardization and minification of CSS styles
- Continuous Integration/Deployment
- Additional user features

## License

MIT License
