import {StatusBar} from "react-native";

export const shadow_style_top = {
    elevation: 2,

    shadowOffset:{ width: 0, height: 1},
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowRadius:1,
}

export const shadow_style_bottom = {
    elevation: 2,

    shadowOffset:{ width:0, height: -1 },
    shadowColor:'black',
    shadowOpacity:0.2,
    shadowRadius:1,
}

export const statusBarHeight = StatusBar.currentHeight || 0
