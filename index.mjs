import path from "path";
import process from "process";
import { google, sheets_v4 } from "googleapis";

// If modifying these scopes, delete token.json.
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets.readonly"];
const CREDENTIALS_PATH = path.join(process.cwd(), "creds.json");

const auth = new google.auth.GoogleAuth({
  keyFile: CREDENTIALS_PATH,
  scopes: SCOPES,
});

const sheets = new sheets_v4.Sheets({ auth });

const response = sheets.spreadsheets.values.get({
  spreadsheetId: "1ATMUHMtWP5u5z4C8wT3sng4yPkG0be4E4xunLJW37sQ",
  range: "A2:B",
});
response.then((res) => {
  console.info(res.data);
});

// Output:
// {
//   range: "'Class Data'!A2:B1000",
//   majorDimension: 'ROWS',
//   values: [
//     [ 'Hello', 'World' ],
//     [ 'Hello 1', 'World 1' ],
//     [ 'Hello 2', 'World 2' ],
//     [ 'Hello 3', 'World 3' ],
//     [ 'Hello 4', 'World 4' ],
//     [ 'Hello 5', 'World 5' ],
//     [ 'Hello 6', 'World 6' ],
//     [ 'Hello 7', 'World 7' ],
//     [ 'Hello 8', 'World 8' ],
//     [ 'Hello 9', 'World 9' ]
//   ]
// }
