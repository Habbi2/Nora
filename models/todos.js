"use strict";

/*
 * El objetivo es hacer un TO DO LIST:
 *   vas a tener que agregarle tareas a distintas personas y
 *   configurar propiedades de esas tareas.
 *
 *    (\
 *    \'\
 *     \'\     __________
 *     / '|   ()_________)
 *     \ '/    \ ~~~~~~~~ \
 *      \       \ ~~~~~~   \
 *      ==).      \__________\
 *     (__)       ()__________)
 */

var tasks = {}; // acá vamos a guardar nuestras personas y tareas

module.exports = {
  reset: function () {
    tasks = {}; // esta función ya esta armada :D
  },
  // ==== COMPLETEN LAS SIGUIENTES FUNCIONES (vean los test de `model.js`) =====
  listPeople: function () {
    // devuelve un arreglo de personas con tareas
    let array = Object.keys(tasks);
    return array;
  },
  add: function (name, task) {
    // guarda una tarea para una persona en particular
    const object = task;
    if (!object.complete) object.complete = false;
    tasks[name]
      ? (tasks[name] = [...tasks[name], object])
      : (tasks[name] = [object]);
    return object;
  },
  // etc.
  list: function (name) {
    return tasks[name];
  },
  complete: function (name, number) {
    tasks[name][number].complete = true;
  },
  remove: function (name, number) {
    tasks[name].splice(number, 1);
  },
};
