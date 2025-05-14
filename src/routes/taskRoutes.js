const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');

router.get("/tasks", taskController.getAll);
router.post("/tasks", taskController.create);
router.put("/tasks/:id", taskController.update)
router.delete("/tasks/:id", taskController.remove);
modelu.exports = routes;