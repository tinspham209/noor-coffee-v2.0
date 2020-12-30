# Project: NOOR Coffee Website v2.0

### Date: Dec - 2020 to present

### Functions

- Introduction
- List of products / View Single Product
- Blogs / View Single Blog
- Display store in Maps
- Scan QR Code to delivery on Grab & Loship
- Membership form
- Feedback form
- About us

### Screenshot

<img src="" alt="is-developing"/>

### Releases

- https://noordn.cf

### Plan Of Action

### Next Steps:

### Bugs:

- Logo Img on `navbar` & `footer` has margin on IOS devices
- Img on SinglePost on IOS devices has broken
- Components is NOT re-usable

### Directory Structure

```
.
├── .gitignore
├── package.json
├── package-lock.json
├── README.md
├── deploy-firebase
├── .firebaserc
├── firebase.json
├── public
└── src
```

For the project to build, these must exist with exact filenames:

- `public/index.html` is the page template
- `src/index.js` is the entry point
- `src/GlobalStyles.js` is the Global Styles
- `src/App.js` is the Router

## Installation Guide

### Tech-Stack

- React Hooks
- react-router-dom
- redux-toolkit
- @sanity.io
- Firebase
- styled-components
- Material-UI
- react-icons
- leaflet
- react-lazy-load-image-component
- react-scroll
- img design from https://undraw.co/

### Production

- Clone this project

```
git clone https://github.com/tinspham209/noor-coffee
```

- Install dependencies

```
npm install
```

- Start the server

```
npm start
```

### Development

- Clone this project
- Install dependencies

```
npm install
```

- Start packager

```
npm start
```

### Components function:

### How to name a folder and a file

- Folder name: - Ex: `InfoSection`
- Component file name: should be -- Ex: `InfoSection.jsx`
- Style component file name: should be -- Ex: `InfoSection.elements.js`

### How to import and export module?

- Import:

```js
//import every thing
import * as React from "react";
import * as ReactDOM from "react-dom";

//for default export
import InfoSection from "./InfoSection";

//for named export
import { InfoSec, InfoRow } from "./InfoSection.elements";
```

### How to style for each component?

- Create a styled-component file. Ex: `InfoSection.elements.js`
- Import to `jsx` file

```js
// InfoSection.jsx

import { InfoSec, InfoRow } from "./InfoSection.elements";
```
