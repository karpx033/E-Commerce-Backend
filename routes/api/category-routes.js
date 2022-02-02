const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  // find all categories
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
  // be sure to include its associated Products
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}],
    })
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', (req, res) => {
  // create a new category
  try {
    const createdCategory = await Category.create({
      category_name: req.body.category_name,
    })
    res.json(createdCategory)
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try {
    const updatedCategory = await Category.update ({
      category_name: req.body.category_name;
    },
    {
      where: {
        id: req.params.id,
      },
    }
    )
    res.json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try {
    const deletedCategory = await Category.destroy ({
      where: {
        id: req.params.id,
      },
    })
    res.json(deletedBook);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
