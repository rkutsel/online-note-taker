### MIT License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Online Note Taker

## Description

A simple online note taker app deployed in heroku cloud. It can add/delete your notes and store your notes permanently unless deleted.

## User Story

```
AS A small business owner
I WANT to be able to write and save notes
SO THAT I can organize my thoughts and keep track of tasks I need to complete
```

## Acceptance Criteria

```
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column
```

## Local Installation Instructions

> NOTE: Make sure you have `Node.JS ~v16.14.2` and `NPM ~8.5.0` installed. You can quickly check this by running `node -v` for Node.JS and `npm -v` for NPM in your terminal.

Once the above is confirmed, you can go ahead and clone the repo and install the dependencies by running `npm i` in your terminal. I recommend you install them locally. You should run and get somewhat similar output like the one bellow:

```bash
>npm i

added 57 packages, and audited 58 packages in 1s

17 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Usage with Examples

From the root directory start the server by running

```bash
npm start
```

OR

```bash
node server
```

You should expect to see a similar output on a successful start

```bash
❯ node server
App listening at http://localhost:3001
```

Once the server is up and running open up your browser and go to http://localhost:3001 that will take you to the main page from where you can start using the note taker app.
