module.exports = (sequelize, Sequelize) => {
    const Orders = sequelize.define('orders', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        orderDate: Sequelize.DATE,
        totalAmount: Sequelize.INTEGER,

    })

    return Orders
}
