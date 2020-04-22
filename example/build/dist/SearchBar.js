"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const React = tslib_1.__importStar(require("react"));
const react_native_1 = require("react-native");
/**
 * ? Local Imports
 */
const SearchBar_style_1 = tslib_1.__importStar(require("./SearchBar.style"));
const SearchIcon_1 = tslib_1.__importDefault(require("./components/SearchIcon/SearchIcon"));
const SearchCancel_1 = tslib_1.__importDefault(require("./components/SearchCancel/SearchCancel"));
const SearchTextInput_1 = tslib_1.__importDefault(require("./components/SearchTextInput/SearchTextInput"));
let textInputRef = null;
class SearchBar extends React.Component {
    constructor() {
        super(...arguments);
        this.textInput = null;
    }
    render() {
        const { onPress, fontSize, iconName, iconType, iconSize, iconColor, fontColor, autoFocus, shadowColor, placeholder, onPressCancel, iconComponent, noExtraMargin, onPressToFocus, textInputValue, cancelIconName, cancelIconType, cancelIconSize, cancelIconColor, cancelComponent, textInputDisable, textInputComponent, cancelIconComponent, cancelButtonDisable, } = this.props;
        return (<react_native_1.TouchableOpacity onPress={() => {
            onPressToFocus ? textInputRef.focus() : onPress();
        }} style={[
            SearchBar_style_1.default.center,
            SearchBar_style_1.container(this.props),
            SearchBar_style_1.ifIPhoneXHeader(noExtraMargin),
            SearchBar_style_1._shadowStyle(shadowColor),
        ]}>
        <react_native_1.View style={SearchBar_style_1.default.containerGlue}>
          <react_native_1.View style={SearchBar_style_1.default.searchStyle}>
            <SearchIcon_1.default iconName={iconName} iconType={iconType} iconSize={iconSize} iconColor={iconColor} iconComponent={iconComponent}/>
            <SearchTextInput_1.default fontSize={fontSize} fontColor={fontColor} placeholder={placeholder} textInputDisable={textInputDisable} textInputComponent={textInputComponent ||
            (!textInputDisable && (<react_native_1.View style={SearchBar_style_1.default.textInputContainer}>
                    <react_native_1.TextInput autoFocus={autoFocus} value={textInputValue} placeholder={placeholder} placeholderTextColor={fontColor} style={[SearchBar_style_1.textInputStyle(fontSize, fontColor)]} ref={(c) => {
                this.textInput = c;
                textInputRef = c;
            }} {...this.props}/>
                  </react_native_1.View>))}/>
          </react_native_1.View>
          <SearchCancel_1.default cancelIconName={cancelIconName} cancelIconType={cancelIconType} cancelIconSize={cancelIconSize} cancelIconColor={cancelIconColor} cancelComponent={cancelComponent} cancelIconComponent={cancelIconComponent} cancelButtonDisable={cancelButtonDisable} onPressCancel={() => {
            if (onPressCancel) {
                if (this.textInput)
                    this.textInput.clear();
                onPressCancel();
            }
            else {
                if (this.textInput)
                    this.textInput.clear();
            }
        }}/>
        </react_native_1.View>
      </react_native_1.TouchableOpacity>);
    }
}
exports.default = SearchBar;
