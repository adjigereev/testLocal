import {configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./slice/post.slice";


const reducer = {
    postReduce: postReducer

}

export const store = configureStore({
    reducer,
})