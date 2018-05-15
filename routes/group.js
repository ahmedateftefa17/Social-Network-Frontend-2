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



module.exports = router;
