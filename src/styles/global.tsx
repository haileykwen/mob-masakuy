import { StatusBar } from "react-native";
import { Dimensions } from "react-native";
import Colors from "./colors";

const GlobalStyle = {
    paddingPrimary: 24,
    paddingSecondary: 19,
    paddingTertiary: 16,

    H1: 22,
    H2: 17,
    H3: 15,

    P1: 17,
    P2: 15,
    P3: 12,

    LH1: 32,
    LH2: 27,
    LH3: 25,

    LP1: 27,
    LP2: 25,
    LP3: 12.5,

    fullWidth: Dimensions.get('window').width,
    fullHeight: Dimensions.get('window').height,
    statusBarHeight: StatusBar.currentHeight === undefined ? 24 : StatusBar.currentHeight,

    radiusPrimary: 32,

    fontPrimaryThin: 'Inter-Thin',
    fontPrimaryExtraLight: 'Inter-ExtraLight',
    fontPrimaryLight: 'Inter-Light',
    fontPrimaryRegular: 'Inter-Regular',
    fontPrimaryMedium: 'Inter-Medium',
    fontPrimarySemiBold: 'Inter-SemiBold',
    fontPrimaryBold: 'Inter-Bold',
    fontPrimaryExtraBold: 'Inter-ExtraBold',
    fontPrimaryBlack: 'Inter-Black',

    scrollView: {
        backgroundColor: Colors.white
    }
}

export default GlobalStyle;