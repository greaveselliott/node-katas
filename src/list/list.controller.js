import mongoose from 'mongoose';
import { ListSchema } from './list.model';

const List = mongoose.model('List', ListSchema);

// Create list item
export const createListItem = (req, res) => {
    let ListItem = new List(req.body);

    ListItem.save((err, listItem) => {
        if (err) {
            res.send(err);
        }
        res.json(listItem);
    });
}

// Read list item
export const readListItem = (req, res) => {
    List.findById(req.params.id, (err, listItem) => {
        if (err) {
            res.send(err);
        }
        res.json(listItem);
    });
}

// Update list item
export const updateListItem = (req, res) => {
    List.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err, listItem) => {
        if (err) {
            res.send(err);
        }
        res.json(listItem);
    });
}

// Delete list item
export const deleteListItem = (req, res) => {
    List.remove({_id: req.params.id}, (err, listItem) => {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted list item'});
    });
}


// Get lists
export const readList = (req, res) => {
    List.find({}, (err, listItem) => {
        if (err) {
            res.send(err);
        }
        res.json(listItem);
    });
}
