declare module 'modal' {
  export type ModalRefType = {
    close: () => void
    open: () => void
    isOpen: boolean
  }
}

declare module 'base-button' {
  export type BaseButtonStyleType = {
    bgColor?: string
    btnStyle?: 'primary' | 'secondary'
    textCase?: 'uppercase' | 'capitalize'
  }
}
