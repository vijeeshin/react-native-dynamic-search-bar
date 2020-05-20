import { Platform, ViewStyle, StyleSheet } from "react-native";
import {
  ScreenWidth,
  isIPhoneXFamily
} from "@freakycoder/react-native-helpers";

interface Style {
  center: ViewStyle;
  searchStyle: ViewStyle;
  containerGlue: ViewStyle;
  textInputContainer: ViewStyle;
}

export function container(props: any) {
  const {
    height = 55,
    width = ScreenWidth ,
    backgroundColor = "#20BEC6",
    borderRadius = 0
  } = props;

  return {
    width: width,
    height: height,
    borderRadius,
    backgroundColor,
    paddingLeft: 8,
    paddingRight: 8,
    paddingTop:8,
    paddingBottom:8,
  };
}

export function textInputStyle(
  fontSize: number = 13,
  fontColor: string = "#b3b6c3"
) {
  return {
    ...Platform.select({
      android: {
        padding: 0,
        margin: 0,
        borderWidth: 0
      },
      ios: {
        bottom: 1
      }
    }),
    marginLeft: 24,
    color: fontColor,
    fontSize: fontSize,
    width: ScreenWidth * 0.7
  };
}

export function _shadowStyle(shadowColor: string = "#757575") {
  return {
    ...Platform.select({
      ios: {
        shadowColor,
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { width: 2, height: 1 }
      },
      android: { elevation: 0 }
    })
  };
}

export function ifIPhoneXHeader(noExtraMargin: boolean) {
  if (noExtraMargin) return { marginTop: 16 };
  return {
    marginTop: isIPhoneXFamily() ? 44 : 16
  };
}

export default StyleSheet.create<Style>({
  containerGlue: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth:1,
    borderColor:"#20BEC6",
    backgroundColor:"#FFF",
    padding:5
  },
  searchStyle: {
    top: 2,
    flex: 1,
    flexDirection: "row"
  },
  textInputContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  center: {
    alignSelf: "center",
    alignContent: "center"
  }
});
