import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('engdb', "root", 'musho2001', {
    host: 'localhost',
    dialect: 'mysql'
});

export default sequelize;
