
export const schema = {
  tables: [
    {
      name: 'employees',
      label: 'Employee',
      labelPlural: 'Employees',
      fields: [
        {name: 'id', label: 'Employee ID', readonly: true},
        {name: 'firstName', label: 'First Name'},
        {name: 'lastName', label: 'Last Name'},
      ],
      relations: [
        {name: 'projects', label: `Employees' Projects`, references: 'projects'}
      ],
      list: {
        id: { show: false },
        firstName: { show: true },
        lastName: { show: true },
        projectName: { show: true },
        employeeName: { show: true },
      },
      manyToMany: {
        employeeName: true
      }
    },
    {
      name: 'projects',
      label: 'Project',
      labelPlural: 'projects',
      fields: [
        {name: 'id', label: 'Project ID', readonly: true},
        {name: 'name', label: 'Name'},
      ],
      relations: [
        {name: 'employees', label: `Project's Employees`, references: 'employees',
          fields: [
              'employeeName'
          ]}
      ],
      list: {
        id: { show: false },
        name: { show: true },
        projectName: { show: true },
        employeeName: { show: true },
      },
      manyToMany: {
        projectName: true
      }
    }
  ]
};