import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    post: [],
    image: []
}

export const getElement = createAsyncThunk('post', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const json = await response.json()
    return json
})
export const getImage = createAsyncThunk('images', async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    const json = await response.json()
    return json
})

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getElement.fulfilled, (state, action) => {
            state.post = action.payload
        })
        builder.addCase(getImage.fulfilled,(state,action)=>{
            state.image = action.payload
        })
    }
})
export const postReducer = postSlice.reducer


