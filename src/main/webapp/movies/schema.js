export const schema = {
  table: {
    name: 'movies',
    label: 'Movie'
  },
  fields: [
    {name: 'id', label: 'Movie ID', readonly: true},
    {name: 'title', label: 'Movie Title'},
    {name: 'director', label: 'Movie Director'},
  ]
};