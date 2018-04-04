"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../../database/models/index");
class GroupsController {
    getAllUserGroups(req, res) {
        index_1.default.groupRelation.findAll({
            where: {
                userId: req.session.passport.user.id
            },
            include: [
                index_1.default.groups
            ]
        }).then(groups => {
            res.send(groups);
        });
    }
    createGroup(req, res) {
        index_1.default.groups.create({
            groupName: req.body.groupName,
            groupCode: req.body.groupCode,
            creatorId: req.session.passport.user.id
        }).then(success => {
            index_1.default.groupRelation.create({
                userId: req.session.passport.user.id,
                groupId: success.id
            }).then(success => { res.send(success); }, fail => { res.send(fail); });
        }, fail => { res.send(fail); });
    }
    checkCode(req, res) {
        index_1.default.groups.findOne({
            where: {
                groupCode: req.body.code
            }
        }).then(group => {
            if (group) {
                res.send(false);
            }
            else {
                res.send(true);
            }
        });
    }
    join(req, res) {
        index_1.default.groups.findOne({
            where: {
                groupCode: req.body.code
            }
        }).then(group => {
            if (group) {
                index_1.default.groupRelation.findOne({
                    where: {
                        userId: req.session.passport.user.id,
                        groupId: group.id
                    }
                }).then(relation => {
                    console.log(relation);
                    if (!relation) {
                        index_1.default.groupRelation.create({
                            userId: req.session.passport.user.id,
                            groupId: group.id
                        }).then(relateion => res.send(relateion));
                    }
                    else {
                        res.send({ message: 'fail' });
                    }
                });
            }
            else {
                res.send({ message: 'fail' });
            }
        });
    }
}
exports.default = new GroupsController();
