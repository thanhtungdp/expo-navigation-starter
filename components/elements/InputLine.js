import React from "react";
import styled from "styled-components/native";
import Colors from "../../themes/colors";
import { valueForIos } from "../../utils";

const InputContainer = styled.View``;

const InputStyle = styled.TextInput`
  height: ${valueForIos(20, 40)};
  color: ${Colors.primary};
  font-size: 17;
  ${props => (props.paddingHorizontal ? `paddingHorizontal: ${props.paddingHorizontal}` : null)}
`;

const Line = styled.View`
  margin-top: ${valueForIos(10, 0)};
  height: 1;
  backgroundColor: ${props => props.color};
`;

export default function InputLine({
  paddingHorizontal,
  lineColor = Colors.primary,
  ...props
}) {
  return (
    <InputContainer>
      <InputStyle
        innerRef={props.innerRef}
        underlineColorAndroid="transparent"
        paddingHorizontal={paddingHorizontal}
        {...props}
      />
      <Line color={lineColor} />
    </InputContainer>
  );
}
