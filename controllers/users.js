const db = require('../models')


exports.getTopUsers = async (req, res) => {
    try {
        const results = await db.sequelize.query(`
        SELECT U.username, COUNT(O.id) AS order_count
        FROM Users U
        JOIN Orders O ON U.id = O.userID
        GROUP BY U.id
        ORDER BY order_count DESC
        LIMIT 10;
      `, {
            type: db.Sequelize.QueryTypes.SELECT,
        });

        return res.status(200).json({ results });
    } catch (error) {
        return res.status(500).send('Error:', error)
    }
}

exports.createUser = async (req, res) => {
    const { username, email } = req.body
    const user = await db.users.create({
        username,
        email
    })
    return res.status(201).json(user)
}

exports.createOrder = async (req, res) => {

    const { userID, totalAmount } = req.body
    const order = await db.orders.create({
        userID,
        totalAmount,
        orderDate: Date.now()
    })
    return res.status(201).json({ order })
}

exports.getUser = async (req, res) => {
    const userId = req.params.userID
    const user = await db.users.findByPk(userId)
    return res.status(200).json(user)
}

exports.getuserOrders = async (req, res) => {
    const userId = req.params.userID
    const user = await db.users.findByPk(userId);
    const orders = await user.getOrders()

    return res.status(200).json(orders)
}