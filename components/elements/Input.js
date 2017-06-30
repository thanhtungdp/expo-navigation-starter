import React, { PropTypes } from 'react'
import styled from 'styled-components/native'
import Label from './TextFont'
import InputLine from './InputLine'

const View = styled.View``
const Clearfix = styled.View`
  ${props => `height: ${props.height};`}
`

export default function Input ({ label, clearfixHeight, ...props }) {
  return (
    <View>
      <Label>
        {label}
      </Label>
      {clearfixHeight ? <Clearfix height={clearfixHeight} /> : null}
      <InputLine {...props} />
    </View>
  )
}
Input.propTypes = {
  label: PropTypes.string,
  clearfixHeight: PropTypes.number,
  ...InputLine.propTypes
}
