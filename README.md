# cinema-client

A react web application that shows recent popular movies, using tMDB api.
Currently, it's possible to remove and edit movies.

Was built in one weekend, I tried my best but feel free to offer advice :)


## App environments

Staging:
`https://cinema-client-stg.herokuapp.com/
`

Production:
`https://cinema-client-prod.herokuapp.com/
`

## Things to note here:

* Reusable shared components (Input, Button, Modal)
* Use of TypeScript
* Use of React hooks
* Continuous Deployment - Automatic deploys to heroku
* Use of env variables for easy configuration
* Pre-commit & pre-push hooks (lint, ts check, unit-tests)
* Write unit tests in bug-prone areas (will increase coverage & add coverage enforcement)
* State management (redux, redux-saga, selectors)
* Use of material-ui
* Use of i18n - string files, easier for switching languages later on
* Use of color themes


## Things to add:

Don't exist due to costs of premium in heroku:

* CI (but travis file exists)
* SSL cert

* Increase test coverage
