const addFavourite = payload => ({
  type: 'ADD_LIST',
  payload,
})

const removeFavourite = id => ({
  type: 'REMOVE_LIST',
  id,
})

export { addFavourite, removeFavourite }
