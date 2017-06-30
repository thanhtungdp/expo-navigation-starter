import styled from "styled-components/native";
import PropTypes from "prop-types";
import Fonts from "../../themes/fonts";
import Colors from "../../themes/colors";

const TextFont = styled.Text`
  ${props => (props.type ? Fonts.style[props.type] : "")};
  color: ${props => props.color};
  ${props => (props.marginTop ? `margin-top: ${props.marginTop};` : "")}
  ${props => (props.fontSize ? `fontSize: ${props.fontSize};` : "")}
  ${props => (props.fontWeight ? `fontWeight: ${props.fontWeight};` : "")}
  ${props => (props.textAlign ? `textAlign: ${props.textAlign};` : "")}
`;
TextFont.propTypes = {
  type: PropTypes.string,
  color: PropTypes.string,
  marginTop: PropTypes.number,
  fontSize: PropTypes.number,
  fontWeight: PropTypes.any
};
TextFont.defaultProps = {
  type: "normal",
  color: Colors.textColor
};

export default TextFont;
