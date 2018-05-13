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
  view(res, 'users.index');
})

/**
 * @Method: GET
 * @Functionality: Show Create User
 *
 */
router.get('/create', (req, res, next) => {
  view(res, 'users.create');
});

/**
 * @Method: Get
 * @Functionality: Show Login User
 *
 */
router.get('/login', (req, res, next) => {
  view(res, 'users.login');
})

/**
 * @Method: GET
 * @Functionality : Show User By ID
 *
 */
router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  view(res, 'users.show', {id: id});
})

/**
 * @Method: Get
 * @Functionality : Show Update User
 *
 */
router.get('/:id/edit', (req, res, next) => {
  const id = req.params.id;
  view(res, 'users.edit', {id: id});
})


module.exports = router;
