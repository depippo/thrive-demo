export default (state = [], action) => {

  switch (action.type) {

    case 'MARK_READ':
      return Object.assign({}, state, {
        pants: true
      })

    default: 
      return state;

  }
}