
export const schema = {
  tables: [
    {
      name: 'actors',
      label: 'Actor',
      labelPlural: 'Actors',
      fields: [
        {name: 'id', label: 'Actor ID', readonly: true},
        {name: 'firstName', label: 'First Name'},
        {name: 'lastName', label: 'Last Name'},
        {name: 'name', label: 'Actor Name'},
      ],
      relations: [
        {name: 'movies', label: `Actor's Movies`, references: 'movies'}
      ],
      list: {
        id: { show: false },
        firstName: { show: true },
        lastName: { show: true },
        name: { show: true },
      }
    },
    {
      name: 'movies',
      label: 'Movie',
      labelPlural: 'Movies',
      fields: [
        {name: 'id', label: 'Movie ID', readonly: true},
        {name: 'rating', label: 'Rating'},
        {name: 'title', label: 'Title'},
        {name: 'director', label: 'Director'},
        {name: 'name', label: 'Movie Name'},
      ],
      relations: [
        {name: 'actors', label: `Movie's Actors`, references: 'actors'}
      ],
      list: {
        id: { show: false },
        rating: { show: true },
        title: { show: true },
        director: { show: true },
        name: { show: true },
      }
    }
  ]
};