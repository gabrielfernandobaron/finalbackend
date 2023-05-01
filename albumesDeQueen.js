const mongoose = require('mongoose');


const Schema = mongoose.Schema;
const albumesDeQueenShema = new Schema({
    nombredealbum:{
        type: String,
        required: true
    },
    discografia:{
        type: String,
        required: true
    },
    aniodepublicacion:{
        type: Number,
        required: true
    },
    cantidadDecopiasvendidas:{
        type: Number,
        required: true
    },
    precio:{
        type: Number,
        required: true
    },
    img:{
        type: String,
        required: true
    },
    Stockentiendas:{
        type: Boolean,
        default: false
    }
});

const albumesDeQueens = mongoose.model('albumesDeQueens', albumesDeQueenShema);
module.exports = {albumesDeQueens}
