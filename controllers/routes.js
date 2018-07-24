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