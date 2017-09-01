import { renderToString } from 'react-dom/server';
import React from 'react';
import "../shared/main.scss";
export default (renderMe ) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, minimum-scale=1.0">
    <link rel="stylesheet" href="/static/main.css" />
    <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.min.css" />
  </head>
  <body>
  <div id="app">${renderToString(renderMe)}</div>
  <script src="/static/client.js"></script>
  </body>
</html>
`;
