const db = require('../models/db')

function getBeers(req, res){
    res.json(db.cervezas.find())
}

function getBeer(req, res){
    const itemId = req.params.id;
    const items = db.cervezas.find({ id: itemId });
    if (items.length) {
       res.json(items);
    } else {
       res.json({ message: `item ${itemId} doesn't exist` })
    }
}

function addBeer(req, res){
 const item = req.body;
    console.log('Adding new item: ', item);
        // add new item to db
    const cerveza = db.cervezas.save(item);
        // return updated list
    res.json(cerveza);
}

function deleteBeer(req, res){
    const itemId = req.params.id;
    console.log("Delete item with id: ", itemId);
 
    db.cervezas.remove({ id: itemId });
 
    res.json(db.cervezas.find());    
}

function editBeer(req, res){
    const itemId = req.params.id;
    const item = req.body;
    console.log("Editing item: ", itemId, " to be ", item);
 
    db.cervezas.update({ id: itemId }, item);
 
    res.json(db.cervezas.find());
}

module.exports = { getBeers, getBeer, addBeer, deleteBeer, editBeer}