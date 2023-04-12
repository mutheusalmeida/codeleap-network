declare module 'modal' {
  export type ModalState = {
    readonly isOpen: boolean;
    setOpen(isOpen: boolean): void;
    open(): void;
    close(): void;
    toggle(): void;
}
}

declare module 'button' {
  export type ButtonStyleType = {
    bgColor?: string
    btnStyle?: 'primary' | 'secondary' | 'icon-only'
    textCase?: 'uppercase' | 'capitalize'
    width?: string
    height?: string
  }
}

declare module 'user' {
  export type UserType = {
    username: undefined | string
    isAuthenticated: boolean
  }

  export type UserSliceType = {
    user: UserType
  }
}

declare module 'posts' {
  export type PostType = {
    id: number
    username: string
    created_datetime: Date
    title: string
    content: string
  }

  export type GetPostsType = PostType[]

  export type CreatePostType = Omit<PostType, 'id' | 'created_datetime'>

  export type UpdatePostType = Omit<CreatePostType, 'username'>
}
