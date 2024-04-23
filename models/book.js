import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Book = sequelize.define('Book', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title_am: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title_en: {
        type: DataTypes.STRING,
        allowNull: false
    },
    title_ru: {
        type: DataTypes.STRING,
        allowNull: false
    },
    author: {
        type: DataTypes.STRING,
        allowNull: false
    },
    short_description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    voice: {
        type: DataTypes.STRING,
        allowNull: false
    },
    text: {
        type: DataTypes.JSON,
        allowNull: false
    },
    level: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dificulty: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    words: {
        type: DataTypes.JSON,
        allowNull: true
    },
    ganre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    page: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    img: {
        type: DataTypes.STRING,
        allowNull: false
    }
});
await sequelize.sync();

export default Book;
