import React,{Component} from 'react'
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    Image,
    ActivityIndicator,
    TextInput
} from 'react-native'
import StatusBarView from "../components/StatusBarView";
import Toast from '../widget/toast/Toast'

const main_color = '#3aafff'

const toast1 = {
    data: 'Sow nothing, reap nothing',
    backgroundColor: '#666666',
    position: Toast.position.TOP
}

const toast2 = {
    data: '1. Sow nothing, reap nothing。\n2. Sow nothing, reap nothing。\n 3. Sow nothing reap nothing。 \n4. Sow nothing, reap nothing。 \n5.Sow nothing, reap nothing。\n6. Sow nothing, reap nothing。\n7. Sow nothing, reap nothing。 \n8. Sow nothing reap nothing。 \n9. Sow nothing, reap nothing。 \n10.Sow nothing, reap nothing。',
    textColor: '#fff',
    backgroundColor: main_color,
    position: Toast.position.CENTER
}

const toast3 = {
    data: 'Hello World'
}

const toast4 = {
    data: 'Success',
    textColor: '#ffffff',
    backgroundColor: '#444444',
    position: Toast.position.TOP,
    icon: <Image source={require('../data/img/success.png')} style={{width: 32,height: 32,resizeMode: 'contain'}}/>
}

const toast5 = {
    data: 'Loading',
    textColor: '#fff',
    backgroundColor: '#444444',
    position: Toast.position.CENTER,
    duration: Toast.duration.LONG,
    icon: <ActivityIndicator color='#fff' size={'large'}/>
}

const toast6 = {
    data: 'Very Good',
    textColor: '#E5ECFF',
    backgroundColor: '#444',
    position: Toast.position.BOTTOM,
    icon: <Image source={require('../data/img/like.png')} style={{width: 32,height: 32,resizeMode: 'contain'}}/>,
}

export default class SmartToastPage extends Component{

    render() {
        return (
            <SafeAreaView style={styles.safe_container}>
                <StatusBarView backgroundColor={main_color}/>
                <View style={styles.container}>
                    <View style={styles.header} >
                        <TouchableOpacity style={styles.header_back} onPress={()=>{this.props.navigation.goBack()}}>
                            <Text style={[styles.btn_text,{fontSize: 18}]}>{'Back'}</Text>
                        </TouchableOpacity>
                        <Text style={[styles.btn_text,{fontSize: 18}]}>{'Toast'}</Text>
                    </View>
                    <View style={styles.item}>
                        {this._renderBtnView('Base Top',toast1)}
                        {this._renderBtnView('Base Center',toast2)}
                        {this._renderBtnView('Base Bottom',toast3)}
                    </View>
                    <View style={styles.item}>
                        {this._renderBtnView('Icon Top',toast4)}
                        {this._renderBtnView('Icon Center',toast5)}
                        {this._renderBtnView('Icon Bottom',toast6)}
                    </View>
                    <TextInput/>
                </View>
            </SafeAreaView>
        )
    }

    _renderBtnView = (btnText,toastOpts) => {
        return (
            <TouchableOpacity
                style={styles.btn_view}
                onPress={()=>{this.show(toastOpts)}}
            >
                <Text style={styles.btn_text}>{btnText}</Text>
            </TouchableOpacity>
        )
    }

    show = (toastOpts) => {
        Toast.show(toastOpts)
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
