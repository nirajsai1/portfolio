import { configureStore,createSlice,createAction } from "@reduxjs/toolkit";


const modeSlice = createSlice({
    name:'mode',
    initialState:{toggle:false},
    reducers:{
        toggleButton(state){
           state.toggle = !state.toggle
        }
    }
})


const store = configureStore({
    reducer:{data:modeSlice.reducer}
})

export const modeAction = modeSlice.actions
export default store;