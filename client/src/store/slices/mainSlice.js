import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        userID: null,
        username: "",
        habits: [

        ],
    },
    reducers:{
        setHabits(state, action){
            state.habits = action?.payload?.habits
        },


        addHabbit(state, action){
            state.habits.join(action?.payload?.habit)
        },


        handleReset(state){
            state.username = ""
            state.habits = []
        },


        setUserInfo(state, action){
            state.userID = action?.payload?.id
            state.username = action?.payload?.username
        }
    }
}
)

export const { 
    setHabits,
    addHabbit,
    handleReset,
    setUserInfo
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;