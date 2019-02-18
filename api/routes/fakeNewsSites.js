const router = require('express').Router();
const json = require('../../db/fakeNewsSites.json');
const chalk = require('chalk');
const log = console;

router.get('/', (req, res, next) => res.json(json.fakeNewsSites));

router.get('/id/:id', async (req, res, next) => {
  const { id } = req.params;
  try {
    const fake_site = await getSingleSite(id, json.fakeNewsSites);
    fake_site !== undefined ? res.json(fake_site) : res.status(400).json({ message: `Mate the id:${id} just vanished!` });
  } catch (err) {
    log.error(chalk.bold.red(err));
  }
});

router.get('/category/:category', async (req, res, next) => {
  const { category } = req.params;
  try {
    const byCategories = await filterByCategory(category, json.fakeNewsSites);
    byCategories.length !== 0 ? res.json(byCategories) : res.status(400).json({ message: `Mate wrong category` });
  } catch (err) {
    log.error(chalk.bold.red(err));
  }
});

function getSingleSite(id, arr) {
  let single_site;
  return new Promise((resolve) => {
    arr.filter((val) => {
      if (val.id == id) {
        single_site = val;
      }
    });
    resolve(single_site);
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
