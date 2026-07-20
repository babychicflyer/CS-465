const Trip = require('../models/travlr');

// GET all trips
const travel = async (req, res) => {
    const trips = await Trip.find({});
    res.render('travel', { title: 'Travlr Getaways', trips });
};

module.exports = {
    travel
};