import {
    createListItem,
    readList,
    updateListItem,
    deleteListItem
} from './list.controller';

const routes = (app) => {
    app.route('/list')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, readList)
        .post(createListItem);

    app.route('/list/:listItemId')
        .put(updateListItem)
        .delete(deleteListItem);
};

export default routes;