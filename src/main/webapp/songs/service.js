// TODO: declare URL where server listens for HTTP requests
const URL = "http://localhost:8080/api";

export const findAll = (table) =>
  fetch(`${URL}/${table}`)
    .then(response => response.json())

export const findById = (table, id) =>
  fetch(`${URL}/${table}/${id}`)
    .then(response => response.json())

export const remove = (table, id) =>
  fetch(`${URL}/${table}/${id}/remove`);

// TODO: create a new user
export const create = (user) => {}

// TODO: update a user by their ID
export const update = (id, user) => {}

// TODO: export all functions as the API to this service
export default {
  findAll, findById, remove, create, update
}
