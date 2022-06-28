import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import * as postsApi from '../../api/postsApi'

const initialState = {
    posts: [],
    status: 'idle',
    error: null,
}

export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const { data } = await postsApi.get()
    return data;
})

export const createPost = createAsyncThunk('posts/createPost', async post => {
    const { data } = await postsApi.add(post)
    return data
})

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        // postAdded: {
        //     reducer(state, action) {
        //         state.push(action.payload)
        //     },
        //     prepare(title, content, userId) {
        //         return {
        //             payload: {
        //                 id: nanoid(),
        //                 date: new Date().toISOString(),
        //                 title,
        //                 content,
        //                 user: userId,
        //                 reactions: {
        //                     thumbsUp: 0,
        //                     hooray: 0,
        //                     heart: 0,
        //                     rocket: 0,
        //                     eyes: 0,
        //                 },
        //             }
        //         }
        //     },
        // },
        postUpdate(state, action) {
            const { postId, title, body } = action.payload
            const existingPost = state.posts.find(post => post.id === postId)
            if (existingPost) {
                existingPost.title = title
                existingPost.body = body
            }
        },
    },
    extraReducers(builder) {
        builder
            .addCase(fetchPosts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.posts = action.payload
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(createPost.fulfilled, (state, action) => {
                state.posts.push(action.payload)
            })
    }
})

export const { postUpdate, reactionAdded } = postsSlice.actions
export default postsSlice.reducer

export const selectAllPosts = state => state.posts.posts
export const selectPostById = (state, postId) =>
    state.posts.posts.find((post) => post.id.toString() === postId)

