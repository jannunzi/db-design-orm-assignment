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

export const updateRecord = (table, newRecord) =>
  fetch(`${URL}/${table}`, {
    method: 'PUT',
    body: JSON.stringify(newRecord),
    headers: {
      'content-type': 'application/json'
    }
  });

// TODO: export all functions as the API to this service
export default {
  findAllRecords, findRecordById, removeRecord, createRecord, updateRecord
}
