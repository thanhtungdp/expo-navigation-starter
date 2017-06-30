import React, { PropTypes } from 'react'
import { TouchableOpacity } from 'react-native'
import Navbar from './Navbar'
import Icon from '../elements/Icon'

const IconClose = ({ onPress, iconName = 'arrow-left' }) => (
  <TouchableOpacity onPress={onPress}>
    <Icon color='#fff' size={20} name={iconName} simpleLineIcon />
  </TouchableOpacity>
)

export default function NavbarBack ({
  iconName,
  onBack,
  ...props
}) {
  return (
    <Navbar
      backgroundColor='transparent'
      left={<IconClose iconName={iconName} onPress={onBack} />}
      {...props}
    />
  )
}
NavbarBack.propTypes = {
  onBack: PropTypes.func,
  iconName: PropTypes.string
}
