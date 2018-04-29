import { Router } from 'express';
import * as Mongo from 'mongodb';

// Declare router variable
let router: Router;

export default () => {
    /**
     * Variable declaration for express router
     */
    router = Router();

    /**
     * Connection to Mongo database hosted with mLab
     */
    Mongo.connect('mongodb://kody:kodybentley@ds261429.mlab.com:61429/data', (err, client) => {
        if (err) {
            console.log('DB ERROR', err);
        } else {
            console.log('Sucessfully connected to DB');
            /**
             * Declaration of database variable
             */
            let db = client.db('data');
            /**
             * Find all items in collection mock data and push to array
             */
            db.collection('mockData').find({}).toArray((err, result) => {
                if (err) {
                    console.log('ERROR IN FIND', err);
                } else {
                    /**
                     * Use router functionality to send the result via JSON when page is loaded
                     */
                    router.get('/', (req, res) => {
                        res.status(200).json(result);
                        console.log('inside post')
                    });
                }
            });
        }
    });

    return router;
}