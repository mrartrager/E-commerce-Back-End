const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  // be sure to include its associated Products
  // can this be a async await? 
 Category.findAll({
    include: [
      Product
    ]
  }).then((categoryAll) => res.status(200).json(categoryAll))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err)
  })
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  console.log(req.params.id)
Category.findByPk(req.params.id, {
  include: [
    Product
  ],
}).then((category) => res.status(200).json(category))
.catch((err) => {
  console.log(err);
  res.status(400).json(err)
})
});

router.post('/', (req, res) => {
  console.log(req.body)
  // create a new category
  Category.create(req.body)
  .then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err)
  })
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then((category) => res.status(200).json(category))
  .catch((err) => {
    console.log(err);
    res.status(400).json(err)
  })
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
 // could be destroy and not delete
  Category.destroy({
    where: {
      id: req.params.id
    }
  }).then((response) => res.status(200).json(response))
  .catch((err) => {
   console.log(err);
   res.status(400).json(err)
  })
});

module.exports = router;
