import React, { Component, PropTypes } from 'react'
import { Modal } from 'react-native'
import styled from 'styled-components/native'
import TextFont from './TextFont'
import Clearfix from './Clearfix'


const ModalContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`

export default class ModalSuccess extends Component {
  static propTypes = {
    alert: PropTypes.string,
    isShow: PropTypes.bool
  };

  render () {
    return (
      <Modal visible={this.props.isShow} animationType='fade'>
        <ModalContainer>
          <Clearfix height={16} />
          <TextFont textAlign='center'>{this.props.alert}</TextFont>
        </ModalContainer>
      </Modal>
    )
  }
}
