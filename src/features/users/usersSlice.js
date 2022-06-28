import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as usersApi from '../../api/usersApi'

const initialState = []

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
    const { data } = await usersApi.get()
    return data;
})

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder.addCase(fetchUsers.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default usersSlice.reducer