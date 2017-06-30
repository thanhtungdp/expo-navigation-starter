import React, { Component, PropTypes } from 'react'
import styled from 'styled-components/native'
import TextFont from './TextFont'
import Colors from '../../themes/colors'

const Touch = styled.TouchableOpacity`
  background-color: transparent;
`

export default function ButtonTransparent ({
  fontSize = 17,
  children,
  color = Colors.primary,
  onPress
}) {
  return (
    <Touch onPress={onPress}>
      <TextFont fontSize={fontSize} style={{backgroundColor: 'transparent'}} color={color}>{children}</TextFont>
    </Touch>
  )
}
ButtonTransparent.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func
}
