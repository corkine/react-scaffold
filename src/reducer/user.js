import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        username: null,
        resultMessage: null,
        noAuth: false
    },
    reducers: {
        set: (state, {payload: {user, msg}}) => {
            console.log(user, msg);
            state.username = user;
            state.resultMessage = msg;
            state.noAuth = false;
        },
        logout: (state) => {
            state.username = null;
            state.resultMessage = "退出成功";
            state.noAuth = true;
        },
        recover: (state) => {
            const data = JSON.parse(localStorage.getItem('user') ?? "{}")
            if (data.user && data.pass) {
                state.username = data.user;
                state.resultMessage = "登陆成功";
                state.noAuth = false;
            } else {
                state.noAuth = true;
            }
        }
    },
})

export const { set, logout, recover } = userSlice.actions

export const login = (user,pass) => async (dispatch) => {
    localStorage.setItem('user', JSON.stringify({user: user, pass: pass}));
    dispatch(set({user: user, msg: "登陆成功"}));
    return user;
}

export const userSelector = (state) => state.user
export default userSlice.reducer