import * as S from './styles'

type SpinnerProps = {
  width: number
  height: number
  color: string
}

export const Spinner = ({ width, height, color }: SpinnerProps) => {
  return (
    <S.SpinnerWrapper
      width={width}
      height={height}
      viewBox='0 0 50 50'
    >
      <circle
        stroke={color}
        cx='25'
        cy='25'
        r='20'
        fill='none'
        strokeWidth='5'
      />
    </S.SpinnerWrapper>
  )
}
