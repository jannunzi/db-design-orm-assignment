
export const schema = {
  tables: [
    {
      name: 'teams',
      label: 'Team',
      labelPlural: 'Teams',
      fields: [
        {name: 'id', label: 'Team ID', readonly: true},
        {name: 'name', label: 'Team Name'}
      ],
      relations: [
        {name: 'members', label: 'Team Members', references: 'members'}
      ],
      list: {
        id: { show: false },
        name: { show: true },
      }
    },
    {
      name: 'members',
      label: 'Member',
      labelPlural: 'Members',
      fields: [
        {name: 'id', label: 'Member ID', readonly: true},
        {name: 'name', label: 'Member Name'}
      ],
      list: {
        id: { show: false },
        name: { show: true },
      }
    }
  ]
};