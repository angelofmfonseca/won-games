import media from 'styled-media-query'
import styled, { css } from 'styled-components'

export const Wrapper = styled.main`
  position: relative;
  ${media.greaterThan('medium')`
    box-shadow: 0 0.4rem 0.5rem 0 rgba(0, 0, 0, 0.2);
  `}
`

type ImageProps = {
  src: string
}

export const Image = styled.div<ImageProps>`
  ${({ src }) => css`
    width: 100%;
    height: 23rem;
    background-image: url(${src});
    background-position: center center;
    background-size: cover;
    ${media.greaterThan('medium')`
      height: 58rem;
    `}
  `}
`

export const Caption = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.small};
    background-color: rgba(0, 0, 0, 0.7);
    ${media.greaterThan('medium')`
      position: absolute;
      bottom: 0;
      left: 0;
      padding: ${theme.spacings.large};
      border-radius: 0 0 ${theme.border.radius} ${theme.border.radius};
    `}
  `}
`

export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.normal};
    margin-bottom: ${theme.spacings.xsmall};
    strong {
      color: ${theme.colors.primary};
      font-weight: ${theme.font.bold};
    }
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
    `}
  `}
`