# React date-range app

In this repo, I will develop a date-range field wrapper on top of [airbnb/react-dates](https://github.com/airbnb/react-dates).

---

## yarn commands

```
yarn start
  Starts the development server.

yarn run build
  Bundles the app into static files for production.

yarn test
  Starts the test runner.

yarn run eject
  Removes this tool and copies build dependencies, configuration files
  and scripts into the app directory. If you do this, you can’t go back!
```

---

## Install react-dates
- [airbnb/react-dates](https://github.com/airbnb/react-dates)

```
(export PKG=react-dates; sudo npm info "$PKG" peerDependencies --json | command sed 's/[\{\},]//g ; s/: /@/g; s/ *//g' | xargs sudo npm install --save "$PKG";)
```
