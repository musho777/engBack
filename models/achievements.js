import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Achievements = sequelize.define('Achievements', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    }
});
await sequelize.sync();

export default Achievements;
