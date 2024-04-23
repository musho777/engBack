import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Words = sequelize.define('Words', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    img: {
        type: DataTypes.STRING,
        allowNull: true
    },
    express: {
        type: DataTypes.STRING,
        allowNull: false
    },
    voice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    translation_am: {
        type: DataTypes.STRING,
        allowNull: true
    },
    translation_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    translation_ru: {
        type: DataTypes.STRING,
        allowNull: false
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false
    },
});
await sequelize.sync();

export default Words;
