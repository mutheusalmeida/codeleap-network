import { AnyAction } from '@reduxjs/toolkit'
import { Dispatch } from 'react'
import { useDispatch } from 'react-redux'

export const useAppDispatch: () => Dispatch<AnyAction | any> = useDispatch
