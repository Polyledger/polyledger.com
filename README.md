# Polyledger.com

> The official Polyledger website, hosted on GitHub pages.

<kbd><img src="https://github.com/polyledger/polyledger.com/blob/master/screenshot.png"></kbd>

## Development

Clone from GitHub

```
$ git clone git@github.com:polyledger/polyledger.com.git && cd polyledger.com
```

Install the NPM modules

```
$ npm i
```

Run [gulp](https://gulpjs.com/)

```
$ gulp
```

## Deployment

Use subtree push to send `/dist` to the `gh-pages` branch.

```
git subtree push --prefix dist origin gh-pages
```