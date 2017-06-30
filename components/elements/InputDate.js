import React, { Component, PropTypes } from "react";
import { DatePickerIOS, DatePickerAndroid, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import InputLine from "./InputLine";
import TextFont from "./TextFont";
import {valueForIos} from "../../utils";
import moment from "moment";

const View = styled.View``;

export default class InputDate extends Component {
  static propTypes = {
    label: PropTypes.string,
    value: PropTypes.any,
    onChange: PropTypes.func
  };

  onPressDateAndroid = async () => {
    try {
      const { action, year, month, day } = await DatePickerAndroid.open({
        date: new Date()
      });
      if (action !== DatePickerAndroid.dismissedAction) {
        this.props.onChange(new Date(year, month, day));
        // Selected year, month (0-11), day
      }
    } catch ({ code, message }) {
      console.warn("Cannot open date picker", message);
    }
  };

  renderForAndroid() {
    const dateFormat = this.props.value
      ? moment(this.props.value).format("DD/MM/YYYY")
      : "";
    return <TouchableOpacity onPress={this.onPressDateAndroid}>
      <InputLine value={dateFormat} editable={false} />
    </TouchableOpacity>;
  }

  renderForIos() {
    return (
      <DatePickerIOS
        mode="date"
        date={this.props.value}
        onDateChange={this.props.onChange}
      />
    );
  }

  render() {
    return (
      <View>
        {this.props.label ? <TextFont>{this.props.label}</TextFont> : null}
        {valueForIos(this.renderForIos(), this.renderForAndroid())}
      </View>
    );
  }
}
