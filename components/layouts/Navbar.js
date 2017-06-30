import React, { PureComponent, PropTypes } from 'react'
import styled from 'styled-components/native'
import Colors from '../../themes/colors'
import {valueForIos} from '../../utils'

import TextFont from '../elements/TextFont'

const NavbarWrapper = styled.View`
  background-color: ${Colors.navbarColor.background};
  height: ${valueForIos(82, 60)};
  padding-top: ${valueForIos(20, 0)};
  paddingHorizontal: 15;
`

const NavbarContainer = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: row;
`

const LeftComponent = styled.View`
  width: 50;
  background-color: transparent;
`

const RightComponent = styled.View`
  width: 50;
  align-items: flex-end;
  background-color: transparent;
`

const CenterComponent = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  background-color: transparent;
`

export default class Navbar extends PureComponent {
  static propTypes = {
    left: PropTypes.any,
    right: PropTypes.any,
    backgroundColor: PropTypes.any,
    textColor: PropTypes.any,
    title: PropTypes.any,
    isTitleText: PropTypes.bool
  };
  static defaultProps = {
    backgroundColor: '#ffffff',
    textColor: '#fff',
    isTitleText: true
  };

  render () {
    return (
      <NavbarWrapper
        colors={[Colors.navbarBgTop, Colors.navbarBgBottom]}
        backgroundColor={this.props.backgroundColor}
      >
        <NavbarContainer>
          <LeftComponent>{this.props.left}</LeftComponent>
          <CenterComponent>
            {this.props.isTitleText &&
              <TextFont
                color={this.props.textColor}
                fontSize={18}
                fontWeight='500'
              >
                {this.props.title}
              </TextFont>}
            {!this.props.isTitleText ? this.props.title : null}
          </CenterComponent>
          <RightComponent>{this.props.right}</RightComponent>
        </NavbarContainer>
      </NavbarWrapper>
    )
  }
}
