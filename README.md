# Micro-medium-api
> Microservice for fetching the latest posts of Medium.

[![Travis][travis-badge]][travis]
[![Codecov Status][codecov-badge]][codecov]
[![Github Tag][githubTag-badge]][githubTag]
[![Docker Automated build][dockerhub-auto-badge]][dockerhub]
[![Docker Build Status][dockerhub-badge]][dockerhub]

[![Dependency Status][dependency-badge]][dependency]
[![devDependency Status][devDependency-badge]][devDependency]
[![peerDependency Status][peerDependency-badge]][peerDependency]
[![Greenkeeper badge][greenkeeper-badge]][greenkeeper]
[![license][license-badge]][license]

## How To Use

### a. Deploy to Now.sh

> One click deploys to △ now

[![Deploy to now](https://deploy.now.sh/static/button.svg)](https://deploy.now.sh/?repo=https://github.com/evenchange4/micro-medium-api&env=ORIGIN)

### b. Binary executable file

Download from GitHub [latest release](https://github.com/evenchange4/micro-medium-api/releases/latest).

```
$ ORIGIN=$YOUR_DOMAIN ./micro-medium-api-macos $PORT
```

> Note: You can run it without Node.js installed.

### c. Docker image

Pull from [dockerhub][dockerhub].

```
$ docker pull evenchange4/micro-medium-api:latest
$ docker run --rm -it \
  -p $PORT:3000 \
  -e "ORIGIN=YOUR_DOMAIN" \
  evenchange4/micro-medium-api:latest
```

## API

### Environment variables

| **ENV**   | **Required**  | **Default**  | **Description** |
| --------- | --------- | --------- | --------- |
| `ORIGIN`  |  | `*` | Setup `access-control-allow-origin` for CORS. |

### CLI arguments

| **Argument** | **Required**  | **Default**  | **Description** |
| --------- | --------- | --------- | --------- |
| First  |  | `3000` | PORT |

### URL pathname

| *Method** | *Pathname** | **Description** |
| --------- | --------- | --------- |
| GET | `/@:username/posts` | Latest posts |

### URL query parameters

| **Query**   | **Required**  | **Default**  | **Description** |
| --------- | --------- | --------- | --------- |
| `limit`  |  | `10` | Medium API |
| `type`  |  |  | A simple array returned if set the value to `simple`. |

## Demo

https://micro-medium-api.now.sh/@evenchange4/posts?limit=100&type=simple

> Note: You should deploy your own service for production usage.

## Technology Stacks

- [Micro](https://github.com/zeit/micro): Asynchronous HTTP microservices.
- [Micro-router](https://github.com/pedronauck/micro-router): A tiny and functional router for Zeit's Micro.
- [Dockerhub][dockerhub]: Automatically deploy docker image.
- [Now.sh](https://zeit.co/now): Realtime global deployments
- [Pkg](https://github.com/zeit/pkg): Package your Node.js project into an executable
- Travis: CI

## Developer Guide

### Requirements

-   node >= 8.2.1
-   npm >= 5.3.0
-   yarn >= 0.27.5

```
$ git clone https://github.com/evenchange4/micro-medium-api.git
$ yarn install --pure-lockfile

$ yarn run dev # dev server
$ yarn start   # prod server
$ yarn run pkg # output binary files
```

### Test

```
$ yarn run format
$ yarn run eslint
$ yarn run test:watch
```

### Docker

```
$ docker build -t mirco-medium-api .

# Push to dockerhub
$ git push
```

## CONTRIBUTING

*   ⇄ Pull requests and ★ Stars are always welcome.
*   For bugs and feature requests, please create an issue.
*   Pull requests must be accompanied by passing automated tests (`$ yarn run test`).

## [CHANGELOG](CHANGELOG.md)

## [LICENSE](LICENSE)

MIT: [http://michaelhsu.mit-license.org](http://michaelhsu.mit-license.org)

[travis-badge]: https://img.shields.io/travis/evenchange4/micro-medium-api/master.svg?style=flat-square
[travis]: https://travis-ci.org/evenchange4/micro-medium-api
[codecov-badge]: https://img.shields.io/codecov/c/github/evenchange4/micro-medium-api.svg?style=flat-square
[codecov]: https://codecov.io/github/evenchange4/micro-medium-api?branch=master
[dependency-badge]: https://david-dm.org/evenchange4/micro-medium-api.svg?style=flat-square
[dependency]: https://david-dm.org/evenchange4/micro-medium-api
[devDependency-badge]: https://david-dm.org/evenchange4/micro-medium-api/dev-status.svg?style=flat-square
[devDependency]: https://david-dm.org/evenchange4/micro-medium-api#info=devDependencies
[peerDependency-badge]: https://david-dm.org/evenchange4/micro-medium-api/peer-status.svg?style=flat-square
[peerDependency]: https://david-dm.org/evenchange4/micro-medium-api#info=peerDependencies
[githubTag-badge]: https://img.shields.io/github/tag/evenchange4/micro-medium-api.svg?style=flat-square
[githubTag]: ./CHANGELOG.md
[license-badge]: https://img.shields.io/github/license/evenchange4/micro-medium-api.svg?style=flat-square
[license]: http://michaelhsu.mit-license.org/
[greenkeeper-badge]: https://badges.greenkeeper.io/evenchange4/micro-medium-api.svg
[greenkeeper]: https://greenkeeper.io/
[dockerhub-auto-badge]: https://img.shields.io/docker/automated/evenchange4/micro-medium-api.svg
[dockerhub-badge]: https://img.shields.io/docker/build/evenchange4/micro-medium-api.svg
[dockerhub]: https://hub.docker.com/r/evenchange4/micro-medium-api/
