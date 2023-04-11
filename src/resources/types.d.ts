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
