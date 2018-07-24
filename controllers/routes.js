var models = require('../models');
var sequelizeConnection = models.sequelize;

//Create dummy API route with data to pass to react server
app.get('/api/customers', (req, res) => {
    const customers = [
        {id: 1, firstName: "Tom", lastName: "Cariello"},
        {id: 2, firstName: "Bob", lastName: "Smith"},
        {id: 3, firstName: "Raechel", lastName: "Lutz"},
        {id: 4, firstName: "Jimbo", lastName: "Jones"},
    ];
    res.json(customers);
});

//Actual API to the database to gather the trophies
app.get('/api/trophy', (req, res) => {
  models.Activities.findAll({})
  .then(function(data) {
    res.json(data);
  })
});