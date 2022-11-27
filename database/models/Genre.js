const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Genre'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };

    let config = {
        tableName: 'genres',
        timestamps: false
    }
    
    let Genre = sequelize.define(alias, cols, config)

    Genre.associate = (models) => {
        Genre.hasMany(models.Movie, { // um genero pode ter muitos filmes
            as: 'movies',
            foreignKey: 'genre_id'
        }) 

    }

    return Genre
}