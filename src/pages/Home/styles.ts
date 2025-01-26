import styled from 'styled-components'
import { colors } from '../../styles/GlobalStyle'

export const Section = styled.section`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  img {
    max-width: 30rem;
    padding-left: 12rem;
    padding-top: 10rem;
  }
  div{
    align-items: center;
    display: flex;
  }
  .proximas{
    color: ${colors.primary};
  }
`
