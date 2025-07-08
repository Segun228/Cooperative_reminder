const selectSelf = (state) => {
    return {
        email: state.main?.email,
        userID: state.main?.userID,
        username: state.main?.username,
        habits: state.main?.habits,
    }
}