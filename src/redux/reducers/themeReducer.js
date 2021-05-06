import types from '../types';

const initialState ={
    themeColor: "#28328c",
    themeColor2:"#14bef0"
}

const themeReducer =(state=initialState , action)=>{
    switch(action.type){
        case types.SWITCH_THEME:{
           const newTheme = action.payload
            return{
                ...state,themeColor:newTheme
            }
        }

        default:
            return state;
    }
}
export default themeReducer;

