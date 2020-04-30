import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
} from 'react-native'
import StatusBarView from "../components/StatusBarView";
import SnackBar from "../widget/snackbar/SnackBar";
import Toast from "../widget/toast/Toast";

const main_color = '#3aafff'

const snackBar1 = {
    data: 'Sow nothing, reap nothing',
    position: SnackBar.position.TOP,
    backgroundColor: '#ffcb06',
    textColor: '#ffffff',
}

const snackBar2 = {
    data: 'Sow nothing, reap nothing',
    position: SnackBar.position.TOP,
    duration: SnackBar.duration.INDEFINITE,
    backgroundColor: '#7a38ff',
    textColor: '#1bffce',

}

const snackBar3 = {
    data: 'Sow nothing, reap nothing',
    position: SnackBar.position.BOTTOM,
    backgroundColor: '#ff8a14',
    textColor: '#ffffff',
}

const snackBar4 = {
    data: 'Please check the network first.',
    position: SnackBar.position.BOTTOM,
    duration: SnackBar.duration.LONG,
    textColor: '#ff490b',
    backgroundColor: '#050405',
    actionText: 'Sure',
    height: 64,
    actionTextColor: '#ff490b',
    onActionHide: (isSlideHide) => {
        Toast.show({data:isSlideHide ? 'Sliding hide' : 'Click to hide'})
    },
}

const snackBar5 = {
    data: 'Hello World',
    position: SnackBar.position.TOP,
    duration: SnackBar.duration.INDEFINITE,
    textColor: '#000',
    backgroundColor: '#3aafff',
    height: 48,
    actionText: 'YES',
    actionTextColor: '#000',
    onActionHide: (isSlideHide) => {
        Toast.show({data:isSlideHide ? 'Sliding hide' : 'Click to hide'})
    },
}

export default class SnackBarPage extends Component{

    render() {
        return (
            <SafeAreaView style={styles.safe_container}>
                <StatusBarView backgroundColor={main_color}/>
                <View style={styles.container}>
                    <View style={styles.header} >
                        <TouchableOpacity style={styles.header_back} onPress={()=>{this.props.navigation.goBack()}}>
                            <Text style={[styles.btn_text,{fontSize: 18}]}>{'Back'}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.btn_text,{fontSize: 18}]}>{'SnackBar'}</Text>
                    </View>
                    <View style={styles.item}>
                        {this._renderBtnView('Top SHORT', snackBar1)}
                        {this._renderBtnView('Top INDEFINITE', snackBar2)}
                        {this._renderBtnView('Bottom LONG',snackBar3)}
                    </View>
                    <View style={styles.item}>
                        {this._renderBtnView('Button Top INDEFINITE',snackBar5)}
                        {this._renderBtnView('Button Bottom LONG',snackBar4)}
                    </View>
                </View>
            </SafeAreaView>
        )
    }

    _renderBtnView = (btnText,snackBarOpts) => {
        return (
            <TouchableOpacity
                style={styles.btn_view}
                onPress={()=>{
                    SnackBar.show(snackBarOpts)
                }}
            >
                <Text style={styles.btn_text}>{btnText}</Text>
            </TouchableOpacity>
        )
    }

}

const styles = StyleSheet.create({
    safe_container: {
        flex: 1,
        backgroundColor: main_color
    },
    container: {
        flex: 1,
        backgroundColor: '#e0e0e0'
    },
    header: {
        height: 44,
        backgroundColor: main_color,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 40
    },
    header_back: {
        color: 14,
        marginLeft: 5,
        height: 44,
        justifyContent: 'center',
        paddingLeft: 5,
        paddingRight: 5,
        position: 'absolute',
        top: 0,
        left: 0
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    btn_view: {
        height: 36,
        backgroundColor: main_color,
        borderRadius: 2,
        paddingLeft: 10,
        paddingRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    btn_text: {
        fontSize: 14,
        color: '#fff'
    }
})
