## About the Project

The app is based on this figma design by AFEX Nigeria:
https://www.figma.com/file/gYuJ7Xt3oGPCXe6i089zlD/AFEX-Front-End-Task-(Order-Book)

## Development

The project was writen in TypeScript. \
App State was manage using Redux/Redux-toolkit State Management library

## App Functionality

Login and Registration was implemented using the api endpoints available in the API DOCUMENTATION: https://documenter.getpostman.com/view/5026317/UzQyr4C2 ./

ORDER BOOK: wss://comx-sand-api.afexnigeria.com/stream/trades ./
Note: The Table data (in Order Book page) is returned from the above Web Socket Endpoint.

## Project setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
