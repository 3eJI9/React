import {combineReducers} from "redux";

import catsReducer from "./Slices/cat.slice";
import dogsReducer from "./Slices/dog.slice";
import {configureStore} from "@reduxjs/toolkit";

const rootReducer = combineReducers ({
    cats: catsReducer,
    dogs: dogsReducer,
}
)


export const store = configureStore({
    reducer:rootReducer,
})