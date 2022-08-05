const Task = require("../models/Task");

const getAllTasks = async (req, res, next) => {
  try {
    const tasksList = await Task.find();
    return res.render("index", {tasksList});
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

//Criando uma função assincrona
const createTask = async (req, res) => {
  const task = req.body;
  //Se não tiver nada faça =
  if (!task.task) {
    return res.redirect("/"); // Recarregar a pagina!
  }

  //Tente cadastrar o isso no banco!
  try {
    await Task.create(task); //Espere o task criar o task
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllTasks,
  createTask,
};
