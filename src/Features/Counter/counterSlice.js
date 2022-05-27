const { createSlice } = require('@reduxjs/toolkit');

const counterSlice = createSlice({
    name: 'counter', //name cua no
    initialState: 0, // Giá trị khởi tạo
    reducer: {
        // Tat ca nhung aciton

        increase(state) {
            return state + 1;
        },
        decrease(state) {
            return state - 1;
        },
    },
});

const { actions, reducer } = counterSlice;
export const { increase, decrease } = actions; // named export
export default reducer; // default export
