import { postsService } from '@/services/posts-service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreatePostType, GetPostsType, PostType, PostsSiceType, UpdatePostType } from 'posts'

type PostsErrorType = {
  message: string;
}

const initialState: PostsSiceType = {
  posts: [],
  isLoading: false,
}

export const getPosts = createAsyncThunk<GetPostsType, void, { rejectValue: PostsErrorType }>(
  'posts/get',
  async (_, thunkApi) => {
    const res = await postsService.getPosts()

    if (res.status !== 200) {
      return thunkApi.rejectWithValue({
        message: 'Failed to fetch posts',
      })
    }

    return res.data as GetPostsType
  },
)

export const createPost = createAsyncThunk<PostType, CreatePostType>(
  'posts/create',
  async ({ username, title, content }) => {
    const res = await postsService.createPost({ username, title, content })

    return res.data as PostType
  },
)

export const updatePost = createAsyncThunk<{ id: number, data: UpdatePostType }, { id: number, data: UpdatePostType }>(
  'posts/update',
  async ({ id, data }) => {
    const res = await postsService.updatePost(id, data)

    return res.data as { id: number, data: UpdatePostType }
  },
)

export const deletePost = createAsyncThunk(
  'posts/delete',
  async ({ id }: { id: number }) => {
    await postsService.deletePost(id)

    return { id }
  },
)

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload.results]
    })

    builder.addCase(createPost.pending, (state, _action) => {
      state.isLoading = true
    })

    builder.addCase(createPost.fulfilled, (state, _action) => {
      state.isLoading = false
    })

    builder.addCase(updatePost.fulfilled, (state, action) => {
      const index = state.posts.findIndex(({ id }) => id === action.payload.id)

      state.posts[index] = {
        ...state.posts[index],
        ...action.payload.data,
      }
    })

    builder.addCase(deletePost.fulfilled, (state, action) => {
      const index = state.posts.findIndex(({ id }) => id === action.payload.id)

      state.posts.splice(index, 1)
    })
  },
})

export default postsSlice.reducer
