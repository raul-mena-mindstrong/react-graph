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

In this case use to seart topics, there is a search input on the header on when you can type someting and the app trigger a query to github seacrhing related topicts on the parameter you passed on the search input. Also on each card result you can click and it show related topics about that result.

