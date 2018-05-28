# README (WIP)

This is a repository designed to showcase various e2e automation frameworks written against the same application under test.  

# STARTING THE APP SERVER

Requires nodeJS to run

```
yarn install (or npm install)
yarn dev (or npm run dev)
Navigate to http://locahost:3030
```

Each framework example folder will contain a README with detailed instructions on how to run it as well as highlighted benefits of the framework


# SERVER API
 
 `/api/todos/delete`
 * **Method**: `DELETE`
 * **Description**: Will remove all existing todos from `db.json`

 `/api/todos/bulkload`
 * **Method**: `POST`
 * **Description**: Seeds `db.json` with a passed in array of todos in valid format in the body of the request
 * **Sample Todos array format**
 ```js
[
  {
    id: 1, 
    name: 'First Todo',
    isComplete: false
  },
  {
    id: 2,
    name: 'Second Todo',
    isComplete: true
  },
  ...
]
```
 