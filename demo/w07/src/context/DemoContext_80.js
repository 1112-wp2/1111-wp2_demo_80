import React, { useContext, useReducer, useEffect} from 'react';
import DemoReducer_80 from './DemoReducer_80';
import { supabase } from '../db/clientSupabase';

const initialState = {
    pName: 'Pocheng Chu',
    pId: '208410380',
    blogs: []
}

const DemoContext_80 = React.createContext();

const DemoProvider_80 = ({children}) => {
    const [state, dispatch] = useReducer(DemoReducer_80, initialState);
    const fetchBlogDataFromSupabase = async () => {
        try {
          let { data, error } = await supabase.from('card_80').select('*')
    
          console.log('data', data);
          dispatch({ type: 'GET_BLOGS_SUPABASE_SUCCUSS', payload: data});
        //   setData(data);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchBlogDataFromSupabase();
      }, []);
    
    return(
        <DemoContext_80.Provider value={{...state}}>
            {children}
        </DemoContext_80.Provider>
    )
}
const useDemoContext_80 = () => {
    return useContext(DemoContext_80);
}

export { DemoProvider_80, useDemoContext_80 }
