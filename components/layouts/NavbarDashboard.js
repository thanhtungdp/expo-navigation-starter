import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import Navbar from './Navbar'
import Icon from '../elements/Icon'
import TextFont from '../elements/TextFont'
import TextPrice from '../elements/TextPrice'

const IconClose = ({ onPress, iconName = 'arrow-left' }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon color='#fff' size={20} name={iconName} simpleLineIcon />
  </TouchableOpacity>
)

const IconRight = ({ onPress, iconName = 'arrow-left' }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon color='#fff' size={20} name={iconName} simpleLineIcon />
  </TouchableOpacity>
)

const TitleWrapper = styled.View`
  align-items: center;
`
const TitleAmount = ({ amount }) => (
  <TitleWrapper>
    <TextFont fontSize={13} color='#fff'>Số dư</TextFont>
    <TextPrice fontSize={18} fontWeight='600' color='#fff'>{amount}</TextPrice>
  </TitleWrapper>
)

export default function NavbarDashboard ({
  iconBack,
  isBack,
  onBack,
  iconRight,
  isRight,
  onRight,
  amount,
  ...props
}) {
  return (
    <Navbar
      backgroundColor='transparent'
      title={<TitleAmount amount={amount} />}
      isTitleText={false}
      left={isBack ? <IconClose iconName={iconBack} onPress={onBack} /> : null}
      right={isRight ? <IconRight iconName={iconRight} onPress={onRight} /> : null}
      {...props}
    />
  )
}
NavbarDashboard.propTypes = {
  isBack: PropTypes.bool,
  iconBack: PropTypes.string,
  onBack: PropTypes.func,
  isRight: PropTypes.bool,
  iconRight: PropTypes.string,
  onRight: PropTypes.func,
  amount: PropTypes.number
}
