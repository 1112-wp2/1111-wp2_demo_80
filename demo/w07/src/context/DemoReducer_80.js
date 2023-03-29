const DemoReducer_80 = (state, action) => {
    if(action.type === 'GET_BLOGS_SUPABASE_SUCCUSS') {
        return {...state, blogs: action.payload}
    }
}


export default DemoReducer_80;