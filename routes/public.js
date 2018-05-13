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
  public
} = require('../controllers/helpers/helpers');


/**
 * @Method : GET
 * @Funtionality : Fetch public file
 *
 */
router.get('/:type/:folder/:file', (req, res, next) => {
  const type   = req.params.type;
  const folder = req.params.folder;
  const file    = req.params.file;
  public(res, type, folder, file);
})


module.exports = router;
