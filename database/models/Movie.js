const { DataTypes } = require("sequelize");

module.exports = (sequelize, dataTypes) => {
    
    let alias = 'Movies'

    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: dataTypes.STRING
        },
        awards: {
            type: dataTypes.INTEGER
        },
        rating: {
            type: dataTypes.DOUBLE
        },
        length: {
            type: dataTypes.INTEGER
        },
        genre_id:{
            type: dataTypes.INTEGER
        },
        relsease_date:{
            type: dataTypes.DATE
        }
    };

    let config = {
        tableName: 'movies',
        timestamps: false
    }
    
    let Movie = sequelize.define(alias, cols, config)

    Movie.associate = (models) => {
        Movie.belongsTo(models.Genre, { // um filme tem um genero
            as: 'genre',
            foreignKey: 'genre_id',
           
        });

        Movie.belongsToMany(models.Actor, { // um filme pertece a muitos atores
            as: 'actor',
            through: 'actor_movie',
            foreignKey: 'movie_id',
            otherKey: 'actor_id',
            timestamps: false
        })     

    }

    return Movie
}