# Natural Languge Processing on News Articles

## Project Description:

This project uses an Natural Language Processing librarry (Meaning Cloud) to run sentiment analisis over news articles available on the internet.

## Dependencies:

**This project uses the following dependencies:**

- Express
- Axios
- Cors
- Detenv
- Jest
- Babel Loader with various plugins
- Webpack with various plugins
- Css loader
- Sass loader

## References:

- The regex expression that is used for checking url validity is authored by eyelidlessness on this [Stackoverflow](https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url) article.

## Important Files

### 1- Server:

- **articleController.js:** Responsible for fetching the analisis result from meaningCloud api.
- **index.js:** Contains all the serverside code.

### 2- Client:

#### - **/js:**

- **formHandler.js:** Contains the input handler for the form on the website.
- **urlChecker.js:** Responsible for checking url validity using two different ways.
- **unitTests.spec.js:**: Contains unit tests for both the Form handler and the URL checker.

#### - **/styles:**

This folder contains all the styles used throughout the project.

#### - **/views:**

Contains the index.html file.

#### - **index.js:** Contains all the imports that are exported statically though webpack.

### 3- Root Ditectory:

#### - **.babelrc:** Contains the configuration for the Babel Loader

#### - **webpack.dev.js:** Contains the configuration for the webpack development mode

#### - **webpack.prod.js:** Contains the configuration for the webpack production mode

#### - **package.json:** Contains all the dependencies and scripts that are configured to run with this project

## 4- Scripts

- **Generate Production Environment:** `npm run build-prod`
- **Generate Development Environment:** `npm run serve-client`
- **Start Development Server:** `npm start`
- **Run Unit Tests:** `npm run test`
