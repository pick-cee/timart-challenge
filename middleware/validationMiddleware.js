const { body } = require('express-validator')

const validateUserInput = [
    body('username').isString().trim().notEmpty(),
    body('email').isEmail()
]

const validateOrderInput = [
    body('userID').isInt(),
    body('totalAmount').isInt(),
];

module.exports = {
    validateUserInput,
    validateOrderInput
}