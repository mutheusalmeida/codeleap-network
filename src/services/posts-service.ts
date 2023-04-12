import { CreatePostType, UpdatePostType } from 'posts'
import { codeleapApi } from './api'

export const postsService = {
  getPosts: () => {
    return codeleapApi.get('/')
  },
  createPost: (data: CreatePostType) => {
    return codeleapApi.post('/', data)
  },
  updatePost: (id: number, data: UpdatePostType) => {
    return codeleapApi.patch(`/${id}`, data)
  },
  deletePost: (id: number) => {
    return codeleapApi.patch(`/${id}`)
  },
}
