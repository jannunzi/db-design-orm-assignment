export const schema = {
  table: {
    name: 'songs',
    label: 'Song'
  },
  fields: [
    {name: 'id', label: 'Song ID', readonly: true},
    {name: 'title', label: 'Song Title'},
  ]
};