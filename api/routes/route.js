'use strict';

module.exports = function(app) {
    var controller = require('../controllers/controller');
/* 
    var tasksPath = '/tasks';
    app.get(tasksPath,controller.list_all_tasks);
    app.post(tasksPath,controller.create_a_task);

    var taksPathWithId = '/tasks/:taskId';
    app.get(taksPathWithId,controller.read_a_task);
    app.put(taksPathWithId,controller.update_a_task);
    app.delete(taksPathWithId,controller.delete_a_task);    */
    app.route('/tasks')
    .get(controller.list_all_tasks)
    .post(controller.create_a_task);


  app.route('/tasks/:taskId')
    .get(controller.read_a_task)
    .put(controller.update_a_task)
    .delete(controller.delete_a_task);
};