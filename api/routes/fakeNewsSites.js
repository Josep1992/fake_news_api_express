const router = require('express').Router();
const json_Sites = require('../../db/fakeNewsSites.json');
const json_Articles = require('../../db/articles.json');
const chalk = require('chalk');

router.get('/', (req, res, next) => {
  try {
    res.json(json_Sites.fakeNewsSites);
  } catch (error) {
    res.status(400).json({ message: 'Data not found, please try again in a few minutes.' });
  }
});

router.get('/articles/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await getSiteArticles(id, json_Articles.fake_articles);
    article !== undefined ? res.status(200).json(article) : res.status(400).json({ message: `Mate the id:${id} just vanished!` });
  } catch (err) {
    res.status(500) && console.error(chalk.bold.red(err));
  }
});

router.get('/category/:category', async (req, res, next) => {
  const { category } = req.params;
  try {
    const byCategories = await filterByCategory(category, json_Sites.fakeNewsSites);
    byCategories.length !== 0 ? res.status(200).json(byCategories) : res.status(400).json({ message: `Mate wrong category` });
  } catch (err) {
    res.status(500) && console.error(chalk.bold.red(err));
  }
});

function getSiteArticles(id, arr) {
  let articles;
  return new Promise((resolve) => {
    arr.filter((val) => {
      if (val.id == id) {
        articles = val;
      }
    });
    resolve(articles);
  });
}

function filterByCategory(category, arr) {
  let byCat = [];
  return new Promise((resolve) => {
    arr.filter((val) => {
      if (val.category == category) {
        byCat.push(val);
      }
    });
    resolve(byCat);
  });
}

module.exports = router;
