import React from 'react'
import { render as rtlRender } from '@testing-library/react'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'

// As a basic setup, import your same slice reducers
import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'

const customRender = (
    ui,
    {
        initialState = {},
        store = configureStore({ reducer: { posts: postsReducer, users: usersReducer } }),
        ...renderOptions
    }
) => {
    function Wrapper({ children }) {
        return (
            <Provider store={store}>{children}</Provider>
        );
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
// re-export everything
export * from "@testing-library/react";
// override render method
export { customRender as render };