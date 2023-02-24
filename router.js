const express = require ('express')
const router = express.Router()
const pool = require ('./queries')




//dynamic routing
router.get("/film", (req, res) => {

         pool.query('SELECT * FROM film ', (err,result)=>{
        if(err){
            throw err;
        } else{
            res.send(result.rows)
        }
    })
})

router.get("/film/:id", (req, res) => {

         pool.query('SELECT * FROM film WHERE film_id = $1 ',[req.params.id], (err,result)=>{
        if(err){
            throw err;
        } else{
            res.send(result.rows)
        }
    })
})

router.get("/category", (req, res) => {

         pool.query('SELECT * FROM category ', (err,result)=>{
        if(err){
            throw err;
        } else{
            res.send(result.rows)
        }
    })
})


router.get("/category/:id", (req, res) => {
    
    pool.query('SELECT * FROM film INNER JOIN film_category ON film.film_id = film_category.film_id INNER JOIN category ON category.category_id = film_category.category_id WHERE category.category_id = $1',[req.params.id], (err,result)=>{
        if(err){
            throw err;
        } else{
            res.send(result.rows)
        }
    })
})




module.exports = router;