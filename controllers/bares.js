const db = require('../models/db')

function getBares(req, res){
    res.json(db.bares.find())
}

function getBar(req, res){
    const itemId = req.params.id;
    const items = db.bares.find({ id: itemId });
    if (items.length) {
       res.json(items);
    } else {
       res.json({ message: `item ${itemId} doesn't exist` })
    }
}

function addBar(req, res){
    const item = req.body;
    console.log('Adding new item: ', item);
        // add new item to db
    const bar = db.bares.save(item);
        // return updated list
    res.json(bar);
}

function deleteBar(req, res){
    const itemId = req.params.id;
    console.log("Delete item with id: ", itemId);
 
    db.bares.remove({ id: itemId });
 
    res.json(db.bares.find());    
}

function editBar(req, res){
    const itemId = req.params.id;
    const item = req.body;
    console.log("Editing item: ", itemId, " to be ", item);
 
    db.bares.update({ id: itemId }, item);
 
    res.json(db.bares.find());
 
}

module.exports = { getBares, getBar, addBar, deleteBar, editBar}