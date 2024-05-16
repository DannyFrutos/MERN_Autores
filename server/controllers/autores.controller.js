const Autores = require("../models/autores.model");

module.exports.findAllAutores = (req, res) => {
  Autores.find()
    .then(allDaAutores => res.json({ autores: allDaAutores }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.findOneSingleAutores = (req, res) => {
  Autores.findOne({ _id: req.params.id })
    .then(oneSingleAutores => res.json({ autores: oneSingleAutores }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewAutores = (req, res) => {
  Autores.create(req.body)
    .then(newlyCreatedAutores => res.json({ autores: newlyCreatedAutores }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.updateExistingAutores = (req, res) => {
  Autores.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updatedAutores => res.json({ autores: updatedAutores }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteAnExistingAutores = (req, res) => {
  Autores.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};
