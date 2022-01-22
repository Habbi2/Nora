"use strict";
const todos = require("../models/todos");
var express = require("express");
var router = express.Router();
module.exports = router;

// escriban sus rutas acá
// siéntanse libres de dividir entre archivos si lo necesitan
router.get("/", (req, res) => {
  const list = todos.listPeople();
  res.status(200).send(list);
});

router.get("/:name/tasks", (req, res) => {
  const name = req.params.name;
  const status = req.query.status;
  const list = todos.list(name);
  if (list) {
    let bool;
    if (status === "complete") {
      bool = false;
    }
    if (status === "active") {
      bool = true;
    }
    for (let i = 0; i < list.length; i++) {
      if (list[i].complete === bool) list.splice(i, 1);
    }
    res.status(200).send(list);
  }
  res.sendStatus(404);
});

router.post("/:name/tasks", (req, res) => {
  const name = req.params.name;
  const content = req.body;
  const parameters = Object.keys(content);
  if (
    (parameters[0] === "content" && parameters[1] === "complete") ||
    parameters[1] === undefined
  ) {
    const add = todos.add(name, content);
    res.status(201).send(add);
  }
  res.sendStatus(400);
});

router.put("/:name/tasks/:index", (req, res) => {
  const name = req.params.name;
  const index = req.params.index;
  const complete = todos.complete(name, index);
  res.status(200).send(complete);
});

router.delete("/:name/tasks/:index", (req, res) => {
  const name = req.params.name;
  const index = req.params.index;
  const remove = todos.remove(name, index);
  res.status(204).send(remove);
});
