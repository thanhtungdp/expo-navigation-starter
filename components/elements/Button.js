import React, { Component, PropTypes } from "react";
import styled from "styled-components/native";
import TextFont from "./TextFont";
import Colors from "../../themes/colors";

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${props => props.backgroundColor};
  padding: 15 0;
`;

export default function ButtonTransparent({
  fontSize = 17,
  children,
  backgroundColor = Colors.primary,
  color = "#ffffff",
  onPress
}) {
  return (
    <ButtonWrapper backgroundColor={backgroundColor} onPress={onPress}>
      <TextFont
        fontSize={fontSize}
        style={{ backgroundColor: "transparent" }}
        color={color}
      >
        {children}
      </TextFont>
    </ButtonWrapper>
  );
}
ButtonTransparent.propTypes = {
  fontSize: PropTypes.number,
  color: PropTypes.string,
  onPress: PropTypes.func
};
