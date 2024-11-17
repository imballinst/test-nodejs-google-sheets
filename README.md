# test-nodejs-google-sheets

https://docs.google.com/spreadsheets/d/1ATMUHMtWP5u5z4C8wT3sng4yPkG0be4E4xunLJW37sQ/edit?gid=0#gid=0

## Running

Before running, ensure that you have followed the guide here: https://github.com/googleapis/google-api-nodejs-client?tab=readme-ov-file#service-account-credentials. Then, change this part accordingly:

```js
const response = sheets.spreadsheets.values.get({
  spreadsheetId: "1ATMUHMtWP5u5z4C8wT3sng4yPkG0be4E4xunLJW37sQ",
  range: "A2:B",
});
```

After that, run:

```shell
yarn
node index.mjs
```
