<div align="center">
  <h1>Lynxx Image View</h1>
</div>

<p align="center">
  Lynxx Image View is a project that consumes <a href="https://portal-tb.lynxx.co/doc/test/api.html" target="_blank">Portal-TB Image API</a>
</p>

## Quick Start

Fork the project and enter this commands in your terminal

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/lynxx-image-view.git
cd lynxx-image-view
yarn
yarn dev
```

You will need `Node v8.11.0+` installed

Otherwise, just clone it or download the project as a ZIP

By default it runs on port `4200`

So you can then check in your browser at http://localhost:4200

## Routes

| Route           | Description                                                                                |
| --------------- | ------------------------------------------------------------------------------------------ |
| /               | First page, landing page example that contains a list of all available images from the API |
| /favorite-views | Second page, shows a list of the favorite views                                            |
| /image/:id      | Third page, shows one image in full screen, with it's name                                 |
| /\*             | Page not found                                                                             |

## Tests

### Jest

Right now there are only a few unit tests and only for the `src/components` folder

#### Cypress (E2E)

No tests at the moment

## Production

To build the project to production, run `yarn build` in the root folder
