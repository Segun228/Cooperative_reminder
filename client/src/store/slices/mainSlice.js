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
            state.habits = action?.payload
        },


        addHabit(state, action) {
            state.habits.push(action.payload);
        },

        editHabit(state, action) {
            const newHabit = action.payload;
            state.habits = state.habits.map(habit =>
                habit.id === newHabit?.id ? newHabit : habit
            );
        },

        deleteHabit(state, action) {
            const habitId = action.payload;
            state.habits = state.habits.filter(habit => habit.id !== habitId);
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
    addHabit,
    editHabit,
    deleteHabit,
    handleLogoutClean,
    setUserInfo
} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;