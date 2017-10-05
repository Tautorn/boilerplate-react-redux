export const types = {
  SUBMTI: 'SHOES/SUBMTI',
  LIST_SHOES: 'SHOES/LIST_SHOES',
  LOAD_SHOES: 'SHOES/LOAD_SHOES',
  LOADED_SHOES: 'SHOES/LOADED_SHOES',
  UPDATE_FIELD_FORM: 'SHOES/UPDATE_FIELD_FORM'
}

export const actions = {
  submit: form => ({ type: types.SUBMIT, form }),
  listShoes: data => ({ type: types.LIST_SHOES, data }),
  updateFieldForm: data => ({ type: types.UPDATE_FIELD_FORM, data }),
  loadedShoes: res => ({ type: types.LOADED_SHOES, res }),
  loadShoes: () => ({ type: types.LOAD_SHOES })
}
