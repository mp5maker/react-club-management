# React Club Management

- Please use yarn for this app
- Node Version v14.18.0
- NPM Version 6.14.15

## How the project is setup

- Backend => Node + Typescript
- Frontend => Create React App with typescript template
- camelCasing mostly used in frontend typescript
- kebab-casing used to represent the folder except the utilities folder
- snake-casing used to represent fake schema (fake database)

## Starting the App

> Please run the commands from the root directory [Do not need to go to frontend or backend directory]
> Frontend runs in PORT:3000
> Backend runs in PORT:4000
> Database runs in PORT:5000 [Fake Database]

```shell
yarn install
yarn start
```

## Some Considerations [Due to time limitations]

- Avoided using Material-UI or styled components (styling has been done using scss)
- Avoided using raw webpack, instead create-react-app was used
- Apologize if there are any wrong translations for Lithuanian word
- External Libraries used for calendar, didn't had the time to make it
- Supports for Internet Explorer 11 or prior Safari 14.1. (Please use the modern browsers)
- Datebase has been mocked using (json-server)
- Avoided using paginations/scroll-to-more, search and filter using the mock database (json-server)
- Schedules can be added in the overlapping time of the same date
- Code could have been optimized and refactored
- Only one member can schedule for club management at a time
- Some server status code might be missing
- ORM or Raw SQL has been avoided