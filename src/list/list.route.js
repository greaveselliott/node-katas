import {
    createListItem,
    readListItem,
    updateListItem,
    deleteListItem,
    readList
} from './list.controller';

const ListRoutes = (app) => {
    app.route('/list')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, readList)
        .post(createListItem);

    app.route('/list/:id')
        .get(readListItem)
        .put(updateListItem)
        .delete(deleteListItem);
};

export default ListRoutes;