const router = require('express').Router();
const json = require('../../db/articles.json');
const chalk = require('chalk');
const log = console;

router.get('/', (req, res, next) => res.json(json.articles));

router.get('/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const article = await getSingleArticle(id, json.articles);
    if (article !== undefined) {
      res.json(article);
    } else {
      throw new Error(`id:${id} not found.`);
    }
  } catch (err) {
    log.error(chalk.bold.red(err));
  }
});

function getSingleArticle(id, arr) {
  let single_article;
  return new Promise((resolve) => {
    arr.filter((val) => {
      if (val.id == id) {
        single_article = val;
      }
    });
    resolve(single_article);
  });
}

module.exports = router;
