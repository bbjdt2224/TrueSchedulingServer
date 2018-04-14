import * as express from 'express';

import EventsController from './events.controller';

export default (app: express.Express): void => {

    app.route('/api/event/:id')
        .get(EventsController.getEvents);

    app.route('/api/event')
        .post(EventsController.addEvent);

    app.route('/api/deleteEvent')
        .post(EventsController.deleteEvent);

};
