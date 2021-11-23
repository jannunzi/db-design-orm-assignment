export const schema = {
  table: {
    name: 'teams',
    label: 'Team'
  },
  fields: [
    {name: 'id', label: 'Team ID', readonly: true},
    {name: 'name', label: 'Team Name'}
  ],
  relations: [
    {name: 'members', label: 'Team Members', references: 'members'}
  ]
};