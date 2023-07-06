const mongoose  = require('mongoose');
const Schema = mongoose.Schema;

const ProductsSchema = new Schema({
    name: {
        type: String
    },
    category: {
        type: String 
    }
});

module.exports = mongoose.model('Products', ProductsSchema);