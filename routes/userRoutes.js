const { getTopUsers, createUser, createOrder, getUser, getuserOrders } = require('../controllers/users')
const { validateUserInput, validateOrderInput } = require('../middleware/validationMiddleware')

const router = require('express').Router()

router.get('/top-users', getTopUsers)
router.get('/user/:userID', getUser)
router.get('/user/order/:userID', getuserOrders)
router.post('/create-user', validateUserInput, createUser)
router.post('/create-order', validateOrderInput, createOrder)

module.exports = router