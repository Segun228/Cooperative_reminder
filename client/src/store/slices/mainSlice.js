import { createSlice } from "@reduxjs/toolkit";

const mainSlice = createSlice({
    name: 'main',
    initialState: {
        email: "segunperkele@gmail.com",
        userID: 1,
        username: "Nestor",
        habits: [
            {
                id: 1,
                user_id: 1,
                name: "My first habit",
                description: "You need to be really concentrated damn it",
                frequency:"daily",  
                remind_time: "11:12:34",
                timezone: 'UTC',
                start_date: Date("2024-05-06"),
                created_at: "2024-05-06 11:12:34",
                updated_at: "2024-05-06 11:12:34",
            }
        ],
    },
    reducers:{
        setEmail(state, action){
            state.email = action.payload?.email
        },


        setHabits(state, action){
            state.habits = action?.payload?.habits
        },


        addHabbit(state, action){
            state.habits.join(action?.payload?.habit)
        },


        handleReset(state){
            state.email = ""
            state.username = ""
            state.habits = []
        }
    }
}
)

export const { 

} = mainSlice.actions;

export const mainReducer = mainSlice.reducer;