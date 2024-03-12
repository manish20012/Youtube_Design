import { createSlice } from "@reduxjs/toolkit";
import { message_count } from "./contants";


const chatSlice = createSlice({
    name:"chat",
    initialState:{
        messages:[],
    },

    reducers: {
        addMessage:(state , action) =>{
            state.messages.splice(message_count, 1)
            state.messages.push(action.payload);
        },
    },
});

export  const {addMessage} = chatSlice.actions;
export default chatSlice.reducer;