import axios from 'axios';
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// 기본으로 관리되는 state 초기값
let initialState = {
    list : [],
    loadStatus : '',
}

export const loadList = createAsyncThunk(
    'todoSlice/loadList',
    async () => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return res.data;
    }
)

export const todoSlice = createSlice({
    name:'todoSlice',
    initialState,
    reducers: {
        addList: (state, action) => ({
            ...state,
            list : [action.payload, ...state.list]
        }),
        removeList: (state, action) => ({
            ...state,
            list: state.list.filter(product => product.id !== action.payload),
        }),
    },
    // createAsyncThunk를 통해 관리되는 API 호출 상태별 작업들
    extraReducers: (builder) => {
        // 대기중
        builder.addCase(loadList.pending, (state) => {
            state.loadStatus = "loading";
        })
        // 완료
        builder.addCase(loadList.fulfilled, (state, {payload}) => {
            state.loadStatus = "success";
            state.list = payload;
        })
        // 거부
        builder.addCase(loadList.rejected, (state) => {
            state.loadStatus = "fail";
        })
    }
});

export const { addList, removeList } = todoSlice.actions;
export default todoSlice.reducer;