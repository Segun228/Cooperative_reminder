import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        userID: null,
        username: "",
        telegramID: null,
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


        handleLogoutClean(state){
            state.username = ""
            state.habits = []
            state.userID = null
            state.telegramID = null
        },


        setUserInfo(state, action){
            state.userID = action?.payload?.id
            state.username = action?.payload?.username
            state.telegramID = action?.payload?.telegram_id || null
        }
    }
}
)

export const { 
    setHabits,
    addHabbit,
    handleLogoutClean,
    setUserInfo
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;