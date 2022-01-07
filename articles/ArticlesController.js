const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const slugify = require('slugify');

router.get("/articles", (req, res) => {
    res.send("Rota de artigos");
});

router.get("/admin/articles/new", (req, res) => {
    Category.findAll().then(categories => {
        res.render("admin/articles/new", {categories: categories})
    })
});

router.post('/articles/save', (req, res) => {
    var title = req.body.title;
    var body = req.body.body;
    var category = req.body.category

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        //chave estrangeira que faz referencia a um elemento de uma tabela
        categoryId: category
    })
})

module.exports = router;