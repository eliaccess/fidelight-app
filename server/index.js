const path = require('path');
const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;

// app.use(bodyParser.json());
// console.info('a[[');
app.use(express.json()); // Used to parse JSON bodies

const SERVICE_URL = 'http://localhost:4000';

const USE_BACKEND = false;

const filesPath = path.resolve(__dirname, './mock/');
const files = fs.readdirSync(filesPath);

const endpoints = [];
const defaultHeaders = {
  'Content-Type': 'application/json',
};

files.forEach((file) => {
  if (file.indexOf('.json') > -1) {
    const currentFilePath = `${filesPath}/${file}`;
    const endpoint = JSON.parse(
      // @ts-ignore
      fs.readFileSync(currentFilePath),
    );
    console.info(`🥁 Endpoint : http://localhost:${port}${endpoint.apiURL}`);

    if (endpoint.method === 'GET') {
      app.get(endpoint.apiURL, async (req, res) => {
        if (endpoint.deployed && USE_BACKEND) {
          try {
            const headers = {
              ...defaultHeaders,
            };
            if (req.headers.authorization) {
              headers.Authorization = `${req.headers.authorization}`;
            }
            const resp = await fetch(`${SERVICE_URL}${req.originalUrl}`, {
              headers,
              method: 'GET',
            });
            res.send(await resp.json());
          } catch (e) {
            res.status(404).send('');
          }
          return;
        }
        setTimeout(() => res.send(endpoint.resp), 2000);
      });
    }
    if (endpoint.method === 'POST') {
      app.post(endpoint.apiURL, async (req, res) => {
        if (endpoint.deployed && USE_BACKEND) {
          try {
            const headers = {
              ...defaultHeaders,
            };
            if (req.headers.authorization) {
              headers.Authorization = `${req.headers.authorization} `;
            }
            const resp = await fetch(`${SERVICE_URL}${req.originalUrl}`, {
              headers,
              method: 'POST',
              body: JSON.stringify(req.body),
            });
            res.send(await resp.json());
          } catch (e) {
            res.status(404).send('');
          }
          return;
        }
        setTimeout(() => res.send(endpoint.resp), 2000);
      });
    }
    endpoints.push(endpoint.apiURL);
  }
});

app.listen(port, () => {
  console.info(`Mock server started on http://localhost:${port}`);
});
