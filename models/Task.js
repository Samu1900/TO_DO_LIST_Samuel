const mongoose = require("mongoose");

//UMA TABELA COM OS DADOS
const TaskSchema = new mongoose.Schema({
  //CRIANDO OBJETOS
  task: {
    type: String,
    required: true,
  },
  //verificar se a minha tarefa foi feita ou não
  check: {
    type: Boolean,
    require: true,
  },
  //Vai pegar a data atual do servidor
  date: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Task", TaskSchema);
