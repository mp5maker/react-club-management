const routes = {
  root: {
    path: '/',
    label: 'ROOT',
  },
  home: {
    path: '/home',
    label: 'HOME',
  },
  schedule: {
    path: '/schedule',
    label: 'SCHEDULE',
  },
  addMember: {
    path: '/add-member',
    label: 'ADD_MEMBER',
  },
  editMember: {
    rawPath: '/edit-member',
    path: '/edit-member/:id',
    label: 'EDIT_MEMBER'
  }
}

export default routes
