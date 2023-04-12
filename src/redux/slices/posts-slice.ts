import { postsService } from '@/services/posts-service'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { CreatePostType, GetPostsType, PostType, PostsSiceType, UpdatePostType } from 'posts'

type PostsErrorType = {
  message: string;
}

const initialState: PostsSiceType = {
  posts: [],
  status: 'idle',
  error: null,
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
    builder.addCase(getPosts.pending, (state, _action) => {
      state.status = 'loading'
      state.error = null
    })

    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = [...action.payload.results]
      state.status = 'idle'
    })

    builder.addCase(getPosts.rejected, (state, { payload }) => {
      if (payload) state.error = payload.message

      state.status = 'idle'
    })

    builder.addCase(createPost.pending, (state, _action) => {
      state.status = 'creating'
    })

    builder.addCase(createPost.fulfilled, (state, { payload }) => {
      state.posts = [payload, ...state.posts]
      state.status = 'idle'
    })

    builder.addCase(createPost.rejected, (state, _action) => {
      state.status = 'idle'
    })

    builder.addCase(updatePost.pending, (state, _action) => {
      state.status = 'editing'
    })

    builder.addCase(updatePost.fulfilled, (state, { payload }) => {
      state.posts = state.posts.map(post => {
        if (post.id === payload.id) {
          return {
            ...post,
            ...payload,
          }
        }

        return post
      })

      state.status = 'idle'
    })

    builder.addCase(updatePost.rejected, (state, _action) => {
      state.status = 'idle'
    })

    builder.addCase(deletePost.pending, (state, _action) => {
      state.status = 'deleting'
    })

    builder.addCase(deletePost.fulfilled, (state, { payload }) => {
      state.posts = state.posts.filter(post => post.id !== payload.id)
      state.status = 'idle'
    })

    builder.addCase(deletePost.rejected, (state, _action) => {
      state.status = 'idle'
    })
  },
})

export default postsSlice.reducer
