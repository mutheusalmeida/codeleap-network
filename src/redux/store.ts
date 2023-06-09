import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user-slice'
import postsReducer from './slices/posts-slice'
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import { persistReducer, persistStore } from 'redux-persist'
import thunk from 'redux-thunk'
import { UserSliceType } from 'user'
import { PostsSiceType } from 'posts'

const persistConfig = {
  key: 'auth',
  storage,
  stateReconciler: autoMergeLevel2,
}

const persistPostsConfig = {
  key: 'posts',
  storage,
  stateReconciler: autoMergeLevel2,
}

const persistedUserReducer = persistReducer<UserSliceType>(persistConfig, userReducer)
const persistedPostsReducer = persistReducer<PostsSiceType>(persistPostsConfig, postsReducer)

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    posts: persistedPostsReducer,
  },
  middleware: [thunk],
  devTools: true,
})

export const persistor = persistStore(store)
export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
