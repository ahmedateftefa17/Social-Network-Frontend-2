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
  view(res, 'groups.index');
})

/**
 * @Method: GET
 * @Functionality: Show Create User
 *
 */
router.get('/create', (req, res, next) => {
  view(res, 'groups.create');
});


router.get('/:id', (req, res, next) => {
  const id = req.params.id;
  view(res, 'groups.groupPosts', {id: id});
})



module.exports = router;
