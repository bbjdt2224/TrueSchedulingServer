import db from '../../database/models/index';
import * as Sequelize from 'sequelize';

 class EventsController {

    getEvents(req, res) {
        db.events.findAll({
            where: {
                groupId: req.params.id
            }
        }).then(events => {
            res.send(events);
        });
    }

    addEvent(req, res) {
        db.events.create({
            datetime: req.body.datetime,
            title: req.body.title,
            description: req.body.description,
            groupId: req.body.groupId,
            creator: req.session.passport.user.id
        }).then(success => res.send(success));
    }

    deleteEvent(req, res) {
        db.events.findOne({
            where: {
                id: req.params.id
            }
        });
    }

}

export default new EventsController();

