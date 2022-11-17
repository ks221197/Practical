## Description

This project contains login related APIs, in which two module included which are <a href="https://github.com/ks221197/Practical/tree/master/src/user" target="_blank">User</a> and <a href="https://github.com/ks221197/Practical/tree/master/src/auth" target="_blank">Auth</a> modules.

### Database
Import <a href="https://github.com/ks221197/Practical/blob/master/171122-task.sql" target="_blank">sql dump</a> file.

### File details
<a href="https://github.com/ks221197/Practical/tree/master/src/filters/httpException.filter.ts" target="">httpException.filter.ts</a>

- For custom exception handler in-order to changes error response format

<a href="https://github.com/ks221197/Practical/tree/master/src/exceptions/httpException.ts" target="">httpException.ts</a>

- Work as more like interface by extending javascript error constructor

<a href="https://github.com/ks221197/Practical/tree/master/src/pipes/validation/validation.pipe.ts" target="_blank">validation.pipe.ts</a>

- Validation pipe for request data validation and will return single error message with bad request http status

<a href="https://github.com/ks221197/Practical/tree/master/src/config/config.service.ts" target="_blank">config.service.ts</a>

- Contains database connection configuration

## Installation

```bash
$ npm install
```

## Running the app

```bash
$ npm run start:dev
```

### Swagger 
<a href="http://[::1]:3000/api#/" target="_blank">http://[::1]:3000/api#/</a>

### Postman collection
<a href="https://github.com/ks221197/Practical/blob/master/task171122.postman_collection.json" target="_blank">postman_collection.json</a>
