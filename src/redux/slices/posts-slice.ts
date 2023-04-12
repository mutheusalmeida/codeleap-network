import { postsService } from '@/services/posts-service'
import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreatePostType, PostType, UpdatePostType } from 'posts'

type ExtraReducerType = 'string' | 'number' | 'symbol' | 'any'

const initialState: { posts: PostType[] } = {
  posts: [],
}

export const getPosts = createAsyncThunk(
  'posts/get',
  async () => {
    const res = await postsService.getPosts()

    return res.data
  },
)

export const createPost = createAsyncThunk(
  'posts/create',
  async ({ username, title, content }: CreatePostType) => {
    const res = await postsService.createPost({ username, title, content })

    return res.data
  },
)

export const updatePost = createAsyncThunk(
  'posts/update',
  async ({ id, data }: { id: string, data: UpdatePostType }) => {
    const res = await postsService.updatePost(id, data)

    return res.data
  },
)

export const deletePost = createAsyncThunk(
  'posts/delete',
  async ({ id }: { id: string }) => {
    await postsService.deletePost(id)

    return { id }
  },
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled as unknown as ExtraReducerType]: (state, action: PayloadAction<{ results: PostType[]}>) => {
      state.posts = [...action.payload.results]
    },
    [createPost.fulfilled as unknown as ExtraReducerType]: (_state, action: PayloadAction<CreatePostType>) => {
      console.log(action.payload)
    },
    [updatePost.fulfilled as unknown as ExtraReducerType]: (state, action: PayloadAction<{ id: number, data: UpdatePostType}>) => {
      const index = state.posts.findIndex(({ id }) => id === action.payload.id)

      state.posts[index] = {
        ...state.posts[index],
        ...action.payload.data,
      }
    },
    [deletePost.fulfilled as unknown as ExtraReducerType]: (state, action: PayloadAction<{ id: number }>) => {
      const index = state.posts.findIndex(({ id }) => id === action.payload.id)

      state.posts.splice(index, 1)
    },
  },
})

export default postsSlice.reducer
