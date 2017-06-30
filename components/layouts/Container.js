import React from 'react';
import styled from "styled-components/native";
import PropTypes from "prop-types";
import { ScrollView } from "react-native";

const PADDING = 17;

const ViewContainer = styled.View`
  paddingHorizontal: ${PADDING};
  paddingVertical: ${PADDING};
`;

export default function Container({ isScrollView, ...props }) {
  if (isScrollView) {
    return <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{
        paddingHorizontal: PADDING,
        paddingVertical: PADDING
      }}
    >
      {props.children}
    </ScrollView>;
    return;
  }
  return <ViewContainer>{props.children}</ViewContainer>;
}
Container.propTypes = {
  isScrollView: PropTypes.bool
}
