# vuejs-playlist

## Project setup
```
npm install
```


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

### Lints and fixes files
For fixing lint auto error both vue and express side
```
npm run lint:all
```
For checking only lint errors
```
npm run lint:check
```
for fixing only out of vue link error
```
npm run lintFix
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
