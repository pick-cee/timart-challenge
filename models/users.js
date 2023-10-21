module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define('users', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        username: Sequelize.STRING,
        email: Sequelize.STRING,

    })

    return Users
}
