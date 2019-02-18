Fake News site Express Api

Install Dependencies

```
npm install or yarn install
```

Start Server

```
- Server will start on port: 5000
yarn start or npm start (**The server will start using nodemon)
```

Endpoints

HTTP METHOD GET:

- localhost:5000/api/fakesites = will return array of fakeNEWS websites
- localhost:5000/api/fakesites/id/:**id**

```
will return specific fakeNews Site
if **id** does not exist will return error message and 400 status code.

```

- localhost:5000/api/fakesites/category/:**category** = will return array of sites according to the url parameter example:

```
  localhost:5000/api/fakesites/category/clickbait
  if **category** does not exist will return error message and 400 status code.

```
