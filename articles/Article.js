const Sequelize = require('sequelize');
const conn = require('../database/database');
const Category = require('../categories/Category');


const Article = conn.define('articles', {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug:{
        type: Sequelize.STRING,
        allowNull: false
    }, body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
})

Category.hasMany(Article); // Uma tem muitos
Article.belongsTo(Category);// Uma pertence  a um

/*Article.sync({force: true})*/

module.exports = Article;