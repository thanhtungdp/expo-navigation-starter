import React, { Component, PropTypes } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'

export default class Icon extends Component {
  static propTypes = {
    fontAwesome: PropTypes.bool,
    simpleLineIcon: PropTypes.bool
  };

  static defaultProps = {
    fontAwesome: true
  };

  render () {
    let WrapComponent = FontAwesome
    if (this.props.simpleLineIcon) WrapComponent = SimpleLineIcons
    return <WrapComponent {...this.props} />
  }
}
