/**
 *
 * Main Modules
 *
 */
const router = require('express').Router();


/**
 *
 *
 *
 */
const {
  view
} = require('../controllers/helpers/helpers');


/**
 * @Method : GET
 * @Funtionality : Show All Users
 *
 */

router.get('/all', (req, res, next) => {
  view(res, 'posts.index');
})

/**
 * @Method: GET
 * @Functionality: Show Create User
 *
 */
router.get('/create', (req, res, next) => {
  view(res, 'posts.create');
});


/**
 * @Method: GET
 * @Functionality : Show User By ID
 *
 */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  view(res, 'posts.show', {id: id});
})

/**
 * @Method: Get
 * @Functionality : Show Update User
 *
 */
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  view(res, 'posts.edit', {id: id});
})


module.exports = router;
