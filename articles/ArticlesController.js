const express = require('express');
const router = express.Router();
const Category = require('../categories/Category');
const Article = require('../articles/Article');
const slugify = require('slugify');

router.get('/admin/articles', (req, res) => {
    Article.findAll({
        //Busca por categorias
        include: [{model: Category}]
    }).then(articles => {
        res.render("admin/articles/index", {articles});
    })
});

router.get('/admin/articles/new', (req, res) => {
    Category.findAll().then(categories => {
        res.render('admin/articles/new',{categories});
    })
});

router.post("/articles/save", (req, res) => {
    const title = req.body.title;
    const body = req.body.body;
    const category = req.body.category;

    Article.create({
        title: title,
        slug: slugify(title),
        body: body,
        categoryId: category
    }).then(() => {
        res.redirect('/admin/articles');
    });

})

router.get("/admin/articles/edit/:id", (req, res) => {
    const id = req.params.id;

    if(isNaN(id)){
        res.redirect("/admin/articles");
    }

    /* Pesquisar por id */
    Article.findByPk(id).then(article => {
        if(article != undefined){

            Category.findAll().then(categories => {
                res.render("admin/articles/edit", {
                    article: article,
                    categories: categories
                });
            });

        }else{
            res.redirect("/admin/articles");
        }
    }).catch(err => {
        console.log(err);
        res.redirect("/admin/articles");
    });
});

router.post("/articles/delete", (req, res) => {
    var id = req.body.id;
    if(id != undefined){
        if(!isNaN(id)){
            //deletar uma categoria
              Article.destroy({
                  where: {
                      id: id
                  }
              }).then(() => {
                  res.redirect("/admin/articles");
              })
        }else{
            res.redirect("/admin/articles");
        }
    }else{
        res.redirect("/admin/articles");
    }
});

module.exports = router;