import { createSelector } from 'reselect';

const selectHabits = state => state.main.habits;
const selectHabitId = (_, id) => id;

const SelectHabitById = createSelector(
    [selectHabits, selectHabitId],
    (habits, id) => habits.find(habit => habit.id == id)
);

export default SelectHabitById;