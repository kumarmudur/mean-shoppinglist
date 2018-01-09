const express = require('express');
const router = express.Router();

const Item = require('../model//shopingItem');

//retrieving data from database
router.get('/items', (req, res, next) => {
    Item.find((err, items) => {
        if (err) {
            res.json(err);
        } else {
            res.json(items);
        }
    });
});

//inserting new data
router.post('/item', (req, res, next) => {
    let newShoppingItem = new Item({
        itemName: req.body.itemName,
        itemQuantity: req.body.itemQuantity,
        itemBought: req.body.itemBought
    });
    newShoppingItem.save((err, item) => {
        if (err) {
            res.json(err);
        } else {
            res.json({ msg: 'Item has been added successfully'});
        }
    });
});

//updating the data
router.put('/item/:id', (req, res, next) => {
    Item.findOneAndUpdate({ _id: req.params.id}, {
        $set: {
            itemName: req.body.itemName,
            itemQuantity: req.body.itemQuantity,
            itemBought: req.body.itemBought
        }
    }, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});

//deleting the data
router.delete('/item/:id', (req, res, nex) => {
    Item.remove({ _id: req.params.id}, (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }   
    });
});

module.exports = router;