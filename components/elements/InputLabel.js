import React, { PropTypes } from 'react'
import styled from 'styled-components/native'
import Label from './TextFont'
import InputLine from './InputLine'
import Colors from '../../themes/colors'

const View = styled.View``
const LabelStyle = styled.View`
  flex-direction: row;
  justify-content: space-between;
  ${props => (props.paddingWidth ? `
    padding-left: ${props.paddingWidth};
    padding-right: ${props.paddingWidth};
  ` : '')};
`
const LabelRightHelper = styled.TouchableOpacity`
  
`

const Clearfix = styled.View`
  ${props => `height: ${props.height};`}
`

export default function Input ({
  label,
  labelLeft = 0,
  clearfixHeight,
  helperText,
  onPressHelper,
  ...props
}) {
  return (
    <View>
      <LabelStyle paddingWidth={labelLeft}>
        <Label>
          {label}
        </Label>
        {helperText ? <LabelRightHelper onPress={onPressHelper}>
          <Label color={Colors.primary}>{helperText}</Label>
        </LabelRightHelper> : null}
      </LabelStyle>
      {clearfixHeight ? <Clearfix height={clearfixHeight} /> : null}
      <InputLine {...props} paddingHorizontal={labelLeft || 0} />
    </View>
  )
}
Input.propTypes = {
  label: PropTypes.string,
  labelLeft: PropTypes.number,
  clearfixHeight: PropTypes.number,
  helperText: PropTypes.string,
  onPressHelper: PropTypes.func,
  ...InputLine.propTypes
}
