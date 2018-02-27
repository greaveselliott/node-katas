import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ListSchema =  new Schema({
    text: {
        type: String,
        required: 'Enter some text for this list item.'
    },
    created_date: {
       type: Date,
       default: Date.now 
    }
});