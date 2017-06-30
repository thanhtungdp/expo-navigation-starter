import React from 'react'
import styled from 'styled-components/native'
import {ActivityIndicator} from 'react-native'

const View = styled.View`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  background-color: #rgba(0,0,0,.3);
  justify-content: center;
  align-items: center;
`

export default function FullscreenLoading () {
  return <View>
    <ActivityIndicator />
  </View>
}
