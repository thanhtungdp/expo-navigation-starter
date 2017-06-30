import styled from 'styled-components/native'

export default styled.View`
  flex: 1;
  background-color:  ${props => (props.backgroundColor ? props.backgroundColor : '#fff')}
`
