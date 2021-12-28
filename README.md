# Auth0 with Vite/React and Hummingbird

Demo project for authentication with Auth0 with Vite/React and a
Hummingbird/Swift API. You can read the full article here:
https://zentered.co/articles/auth0-with-vite-react-swift/

To run the api, you need Swift installed. You can read everything about the
installation and setup in the
[Getting Started with Swift](https://www.swift.org/getting-started/) guide.

## Installation

API:

```
cd hummingbird-jwt
cp .env.example .env
make install
```

Web:

```
cd vite
cp .env.example .env
npm i --legacy-peer-deps
```

Add your auth0 variables to `.env`.

React18 dependencies are still beta, so they don't resolve properly. Use the
_force_.

## Usage

API:

```
cd hummingbird-jwt
make start
```

Web:

```
cd vite
npm run dev
```
