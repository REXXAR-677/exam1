export const initialState = { items: [] };

export const itemsReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.ACTION_ADD:
      state.items = action.payload.items
      break;
    case ACTION_TYPES.ACTION_REMOVE:
      state.items = [...state.items, action.payload.items]
      break;
  }
};

export const ACTION_TYPES = {
  ACTION_ADD: "ADD",
  ACTION_REMOVE: "REMOVE"
}