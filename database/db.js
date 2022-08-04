/*Chamando o mongoose*/
const mongoose = require("mongoose");

/*Fazendo a conexão ao banco de dados*/
const connectToDb = () => {
  mongoose
    .connect(
      "mongodb+srv://Root:adm@todolist.1pm29.mongodb.net/?retryWrites=true&w=majority",
      {
        /*Para que não haja erro de url no mongo db*/
        useNewUrlParser: true,
        useUnifiedTopology: true,
      
      }
    )
    .then(() => console.log("Banco de dados Conectado!"))
    .catch((err) => console.log(err));
};

module.exports = connectToDb;
