const express = require("express")
const ToDoListModel = require("../model/toDoList")
const router = express.Router();


router.post("/create", async (req, res) => {
    const newOrder = new ToDoListModel(req.body)
    try {
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get("/list", async (req, res) => {
    try {
        let list = await ToDoListModel.find()
            .exec();
        res.status(201).json(list);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.post("/update/status/:id", async (req, res) => {
    try {
        const toDoListId = req.params.id;

        const toDoList = await ToDoListModel.findById(toDoListId);

        if (!toDoList) {
            return res.status(404).json({ error: 'toDoList not found' });
        }
        toDoList.status = req.body.status;
        const updatedToDoList = await toDoList.save();

        res.status(200).json(updatedToDoList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not update the toDoList status' });
    }
});

router.post("/update/:id", async (req, res) => {
    try {
        const toDoListId = req.params.id;

        let toDoList = await ToDoListModel.findById(toDoListId);

        if (!toDoList) {
            return res.status(404).json({ error: 'toDoList not found' });
        }
        toDoList.title = req.body.title;
        toDoList.description = req.body.description;
        toDoList.dueDate = req.body.dueDate;
        const updatedToDoList = await toDoList.save();

        res.status(200).json(updatedToDoList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Could not update the toDoList' });
    }
});

module.exports = router