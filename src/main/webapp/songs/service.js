// TODO: declare URL where server listens for HTTP requests
const URL = "http://localhost:8080/api";

// TODO: retrieve all users from the server
export const findAll = (table) =>
  fetch(`${URL}/${table}`)
    .then(response => response.json())

// TODO: retrieve a single user by their ID
export const findById = (table, id) =>
  fetch(`${URL}/${table}/${id}`)
    .then(response => response.json())

// TODO: delete a user by their ID
export const remove = () => {}

// TODO: create a new user
export const create = (user) => {}

// TODO: update a user by their ID
export const update = (id, user) => {}

// TODO: export all functions as the API to this service
export default {
  findAll, findById, remove, create, update
}
