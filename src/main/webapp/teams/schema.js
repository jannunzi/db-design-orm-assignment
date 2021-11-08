export const schema = {
  table: {
    name: 'teams',
    label: 'Team'
  },
  fields: [
    {name: 'id', label: 'Team ID', readonly: true},
    {name: 'name', label: 'Team Name'},
    {name: 'members', label: 'Team Members', references: 'members'}
  ],
  references: [
    {name: 'members', label: 'Members', references: 'members'}
  ]
};