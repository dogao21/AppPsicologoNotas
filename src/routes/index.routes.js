import { Router } from "express";
import Task from "../models/Task";

const router = Router();
//Enviar la task a index
router.get("/", async (req, res) => {
  const tasks = await Task.find().lean();
  console.log(tasks);

  res.render("index", { tasks: tasks });
});
//Ruta para adherir una task
router.post("/tasks/add", async (req, res) => {
  try {
    const task = Task(req.body);

    const taskSaves = await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
});

router.get("/about", (req, res) => {
  res.render("about");
});

//editar una task
router.get("/edit/:id", async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/edit/:id", async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
});

router.get("/delete/:id", async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  res.redirect("/");
});

router.get("/toggledone/:id", async (req, res) => {
  const { id } = req.params;
});

export default router;
