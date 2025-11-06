// Create a new router
const express = require("express");
const router = express.Router();

// Define our data
var shopData = {shopName: "Drink Up", 
    productCategories:["Beer", "Wine", "Soft Drinks", "Hot Drinks"],
    shop: [
        {
            name: "Goldsmiths Campus",
            manager: "John Smiths",
            address: "Goldsmiths University, New Cross"
        },
        {
            name: "Central London",
            manager: "Alex James",
            address: "520 Main Road"
        },

    ]};
// Handle the main routes
router.get("/about", (req, res) => {
    res.render("about.ejs", shopData)
}); 

router.get("/search", (req, res) => {
    res.render("search.ejs", shopData)
}); 

router.get('/',function(req,res){
    res.render('index.ejs', shopData)
});

router.get('/search_result', function (req, res) {
    // search in the database
    res.send("You searched for " + req.query.search_text + " in " + req.query.category);
});

router.get("/register", (req,res) => {
    res.render("register.ejs",  shopData); 
}); 
 
router.post("/registered", (req,res) => { 
  res.send(' Hello '+ req.body.first + ' '+ req.body.last +' you are now registered! We will send an email to you at ' + req.body.email);    
}); 

router.get("/survey", (req,res) => {
    res.render("survey.ejs",  shopData); 
}); 

router.post("/survey-response", (req,res) =>{
    const firstName = req.body.firstname;
    const lastName = req.body.lastname;
    const email = req.body.email;
    const age = req.body.age;
    const drinkCategory = req.body.drinkCategory;
    const isStudent = req.body.isStudent === 'Yes' ? 'Yes':'No'

    res.render("survey-response.ejs",{
        shopName: shopData.shopName,
        firstName: firstName,
        lastName: lastName,
        email: email,
        age: age,
        drinkCategory: drinkCategory,
        isStudent: isStudent

    });
});

// Export the router object so index.js can access it
module.exports = router;
