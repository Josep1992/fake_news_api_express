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
- localhost:5000/api/fakesites/articles/:id

```
will return the articles associated to websites id.
if **id** does not exist will return error message and 400 status code.

```

- localhost:5000/api/fakesites/category/: **category** = will return array of sites according to the url parameter example:

```
  localhost:5000/api/fakesites/category/clickbait
  if **category** does not exist will return error message and 400 status code.

```

Fake Sites JSON Template is from [aligajani/fake-news-detector](https://github.com/aligajani/fake-news-detector)
