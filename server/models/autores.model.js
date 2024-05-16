const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const AutorSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: [3, 'El nombre debe tener al menos 3 caracteres'],
    required: true,
  },
});

AutorSchema.plugin(uniqueValidator);

const AutorModel = mongoose.model("Autor", AutorSchema);

module.exports = AutorModel;
