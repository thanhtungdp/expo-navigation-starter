import React from "react";
import { Icon } from "components/elements";
import { valueForIos } from "utils";

const ICON_SIZE_ANDROID = 20;
const ICON_SIZE_IOS = 25;

const News = {
  title: "Học hành",
  tabBarLabel: "Học hành",
  tabBarIcon: ({ tintColor }) => (
    <Icon
      color={tintColor}
      name="speech"
      size={valueForIos(ICON_SIZE_IOS, ICON_SIZE_ANDROID)}
      simpleLineIcon
    />
  )
};

const Products = {
	title: "Sản phẩm",
	tabBarLabel: "Sản phẩm",
	tabBarIcon: ({ tintColor }) => (
		<Icon
			color={tintColor}
			name="home"
			size={valueForIos(ICON_SIZE_IOS, ICON_SIZE_ANDROID)}
			simpleLineIcon
		/>
	)
};

const RequestClient = {
	title: "Yêu cầu",
	tabBarLabel: "Yêu cầu",
	tabBarIcon: ({ tintColor }) => (
		<Icon
			color={tintColor}
			name="star"
			size={valueForIos(ICON_SIZE_IOS, ICON_SIZE_ANDROID)}
			simpleLineIcon
		/>
	)
};

const Setting = {
	title: "Cài đặt",
	tabBarLabel: "Cài đặt",
	tabBarIcon: ({ tintColor }) => (
		<Icon
			color={tintColor}
			name="settings"
			size={valueForIos(ICON_SIZE_IOS, ICON_SIZE_ANDROID)}
			simpleLineIcon
		/>
	)
};

export default {
  News,
	Products,
	RequestClient,
	Setting
};
