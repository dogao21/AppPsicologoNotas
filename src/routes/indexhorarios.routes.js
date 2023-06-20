import { Router } from "express";
import Horario from "../models/Horario";

const router = Router();
//Enviar horario a index
router.get("/indexhorarios", async (req, res) => {
  const horarios = await Horario.find().lean();
  console.log(horarios);

  res.render("indexhorarios", { horarios: horarios });
});
//Ruta para adherir una task
router.post("/horarios/add", async (req, res) => {
  try {
    const horarios = Horario(req.body);

    const horarioSaves = await horarios.save();

    res.redirect("/indexhorarios");
  } catch (error) {
    console.log(error);
  }
});

//editar un horario
router.get("/edithorarios/:id", async (req, res) => {
  try {
    const horarios = await Horario.findById(req.params.id).lean();

    res.render("edithorarios", { horarios: horarios });
  } catch (error) {
    console.log(error.message);
  }
});

router.post("/edithorarios/:id", async (req, res) => {
  const { id } = req.params;

  await Horario.findByIdAndUpdate(id, req.body);
  res.redirect("/indexhorarios");
});

router.get("/deletehorario/:id", async (req, res) => {
  const { id } = req.params;

  await Horario.findByIdAndDelete(id);
  res.redirect("/indexhorarios");
});

export default router;
