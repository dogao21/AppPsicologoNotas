import { Router } from "express";
import {
  renderTask,
  createTask,
  renderEditTask,
  editTask,
  deleteTask,
  toggleTask,
} from "../controllers/task.controller";

const router = Router();
//Enviar la task a index
router.get("/", renderTask);

//Ruta para adherir una task
router.post("/tasks/add", createTask);

//editar una task
router.get("/tasks/:id/toggleDone", toggleTask);

router.get("/tasks/:id/edit", renderEditTask);

router.post("/tasks/:id/edit", editTask);

router.get("/tasks/:id/delete", deleteTask);

export default router;
