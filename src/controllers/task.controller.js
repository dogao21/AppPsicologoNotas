import Task from "../models/Task";

//Aqui estan definidas constantes para enviar a las rutas
//basicamente es para ordenar el codigo y que no este todo en los archivos de la carpeta routes

export const renderTask = async (req, res) => {
  const tasks = await Task.find().lean();
  console.log(tasks);

  res.render("index", { tasks: tasks });
};

export const createTask = async (req, res) => {
  try {
    const task = Task(req.body);

    const taskSaves = await task.save();

    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

export const renderEditTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id).lean();

    res.render("edit", { task: task });
  } catch (error) {
    console.log(error.message);
  }
};

export const editTask = async (req, res) => {
  const { id } = req.params;
  await Task.findByIdAndUpdate(id, req.body);
  res.redirect("/");
};

export const deleteTask = async (req, res) => {
  const { id } = req.params;

  await Task.findByIdAndDelete(id);
  res.redirect("/");
};

export const toggleTask = async (req, res) => {
  const { id } = req.params;

  const task = await Task.findById(id);

  task.done = !task.done;

  await task.save();

  res.redirect("/");
};
