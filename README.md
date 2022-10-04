# React with GraphQL

## Requirements

- node version 14 or up

## Configuration

- Create .env file on root of the project and set your personal token in .env file, if you dont have personal token, follow this link to generate a new one: 
  https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token


## Run app
- npm install
- npm start

#### Run test cases:
- npm run test

## Notes

The project is builded on ReactJS using apollo and graphQL libraries to make the queresy to github api.

This project is a simple example to consum graphQL endpoints from github.

In this case use to seart topics, there is a search input on the header on when you can type someting and the app trigger a query to github seacrhing related topicts on the parameter you passed on the search input. Also on each card result you can click and it will serach related tipic about the clicked card  

## Areas to improve
  
  -  Right now when you click on some card result, it expand and show a simple list with related topics, we can improve this implementing routing to redirect to new screen and present the information on better formant and more friendly for the user

 - Other point can be paginate the results and implement infinite scroll to preserve good performance on the app

 - Redux implementation, this can be used if the app use routing, if the app change of pages and return to main save the last query or last data pulled from api

 - e2e testing, can be Cypress or something similar to test the functionality
  