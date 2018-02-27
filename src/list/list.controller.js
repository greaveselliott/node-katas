import mongoose from 'mongoose';
import { ListSchema } from './list.model';

const List = mongoose.model('List', ListSchema);

// Add list item
export const createListItem = (req, res) => {
    let ListItem = new List(req.body);

    ListItem.save((err, listItem) => {
        if (err) {
            res.send(err);
        }
        res.json(listItem);
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

// Edit list item
export const updateListItem = (req, res) => {

}

// Delete list item
export const deleteListItem = (req, res) => {
    List.remove({ _id: req.params})
}