const mongoose = require('mongoose');

// define the person schema

const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['spicy','sweet','sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        default: false
    },
    ingridients: {
        type: [String],
        default: [],
    },
});

//create person model
const MenuItem = mongoose.model('MenuItem',menuItemSchema);
module.exports = MenuItem;