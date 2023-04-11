declare module 'modal' {
  export type ModalState = {
    readonly isOpen: boolean;
    setOpen(isOpen: boolean): void;
    open(): void;
    close(): void;
    toggle(): void;
}
}

declare module 'base-button' {
  export type BaseButtonStyleType = {
    bgColor?: string
    btnStyle?: 'primary' | 'secondary'
    textCase?: 'uppercase' | 'capitalize'
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
