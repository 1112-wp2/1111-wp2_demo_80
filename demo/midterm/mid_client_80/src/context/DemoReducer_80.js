const DemoReducer_80 = (state, action) => {
  if (action.type === 'GET_BLOGS_SUPABASE_SUCCESS') {
    return { ...state, blogs: action.payload };
  }

  if (action.type === 'GET_PRODUCTS_NODE_SUCCESS') {
    return {
      ...state,
      data1: action.payload.data1,
      data2: action.payload.data2,
    };
  }

  if (action.type === 'GET_MENU_NODE_SUCCESS') {
    return {
      ...state,
      menu: action.payload,
    };
  }

  if (action.type === 'CHANGE_MENU_FILTER') {
    const filter = action.payload === 'all' ? '' : action.payload;
    return {
      ...state,
      menu_filter: filter,
    };
  }
};

export default DemoReducer_80;
