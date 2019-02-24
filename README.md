Fake News site Express Api with React Client

Install Dependencies

```
npm install or yarn install
```

Start Server

```
- Server will start on port: 5000
yarn start or npm start (**The server will start using nodemon)
```

Start Server and Client

```
yarn dev or npm run dev
```

Endpoints

HTTP METHOD GET:

```
- localhost:5000/api/fakesites = will return array of fakeNEWS websites.
- localhost:5000/api/fakesites/articles/:id = will return articles from the corresponding news site.
- localhost:5000/api/fakesites/category/:category = will return array of sites according to the url parameter category:

Errors
if(!id )return error message and 400 status code.
if(!category )return error message and 400 status code.


```

Fake Sites JSON Template is from [aligajani/fake-news-detector](https://github.com/aligajani/fake-news-detector)
