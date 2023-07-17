/*************************/
/*** Import used modules */
const express = require('express')
const rogerCtrl = require('../controllers/roger')

/***************************/
/*** Get Expresss's router */
let router = express.Router()

/*********************************************/
/*** Middleware to log date for each request */
router.use( (req, res, next) => {
    const event = new Date()
    console.log('Roger Time:', event.toString())
    next()
})


/************************************/
/*** Routes for roger resource */

router.get('/', rogerCtrl.getAllRogers)

router.get('/:id', rogerCtrl.getRoger)

router.put('', rogerCtrl.addRoger)

router.patch('/:id', rogerCtrl.updateRoger)
    
router.delete('/:id', rogerCtrl.deleteRoger)

module.exports = router