# vuejs-playlist

## Project setup

Install dependencies
```
npm install
```
Set the env variable `Blog` to `blogStaging`

### Compiles and hot-reloads for development
Serves the SPA on port 8080

```
npm run serve
```

### Run the backend for development
Start the backend on port 8081
```
npm run start:dev
```

### Run the backend for development
Start both the backend and frontend on port 8080/8081
```
npm run all
```

To kill the server, if it is still running in background:
```
sudo kill -9 `sudo lsof -t -i:8081`
```
### Compiles and minifies for production
```
npm run build
```

## Test mode
#### before testing you must check tests/requestsMocks.js
* uncommente '"const factory = require('./factory.js')"'
* commentes all passThrough mocks ex: '"mock.onGet(articleRegex).passThrough()"' and uncommentes reply mocks ex: '"mock.onGet(articleRegex).reply(200, factory.article)"'

### Start the end2end test
end2end tests is running backend on port 8082 automatically
```
npm run test:e2e
```

To run only specific tests, for example the `"--test tests/tests_e2e/tests/new.js"` tests :

```
npm run test:e2e --test tests/tests_e2e/tests/new.js

```

### Start the test server
Start the backend in test mode, on port 8083
```
npm run start:test
```

### Unit tests
Unit tests need a running backend on port 8083 (for the backend api tests)
```
npm run test:unit
```

To run only specific tests, for example the `"Articles API"` tests :

```
npm run test:unit -- -g "Articles API"
```

To run both unit and e2e tests (don't forget to run Unit tests port 8083 '"npm run test:unit"' before launching all test) :

```
npm run test:all
```

### Lints and fixes files

For fixing lint auto error both vue and express side
```
npm run lint:all
```
For checking only lint errors
```
npm run lint
```
for fixing only out of vue link error
```
npm run lint:fix
```
### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
