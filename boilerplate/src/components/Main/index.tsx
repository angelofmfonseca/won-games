import * as S from './styles'

const Main = ({
  title = 'Won Games',
  description = 'An e-commerce project for games build with Typescript, React, Next and Styled-Components'
}) => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="logo" />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration src="/img/hero-illustration.svg" alt="main image" />
  </S.Wrapper>
)

export default Main
