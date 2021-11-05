// TODO: declare URL where server listens for HTTP requests
const URL = "http://localhost:8080/api";

export const findAllRecords = (table) =>
  fetch(`${URL}/${table}`)
    .then(response => response.json());

export const findRecordById = (table, id) =>
  fetch(`${URL}/${table}/${id}`)
    .then(response => response.json());

export const removeRecord = (table, id) =>
  fetch(`${URL}/${table}/${id}/remove`);

export const createRecord = (table) =>
  fetch(`${URL}/${table}/create`);

// TODO: update a user by their ID
export const update = (id, user) => {}

// TODO: export all functions as the API to this service
export default {
  findAllRecords, findRecordById, removeRecord, createRecord, update
}
