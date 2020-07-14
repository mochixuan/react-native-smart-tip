# react-native-smart-tip
React-native smart tip, including Toast、Modal、SnackBar

![GitHub license](https://img.shields.io/badge/license-MIT-green.svg)
[![npm](https://img.shields.io/npm/v/react-native-smart-tip.svg?style=flat)](https://npmjs.com/package/react-native-smart-tip)

### 2020.5 
1. Add property isShowShadow to WSnackBar and WToast
2. Add sliding hide function for WSnackBar

### 2020.3 Show Toast above Modal (Compatible with Android and iOS)

![](https://user-gold-cdn.xitu.io/2020/3/8/170b855830588e41?w=300&h=500&f=gif&s=489177)

```
import { ModalShowToastView } from 'react-native-smart-tip'

getToastInstance = (toastInstance) => {
    this.toastInstance = toastInstance;
}

<Modal>
	<View>
		<ModalShowToastView toastInstance={this.getToastInstance} />
	</View>
</Modal>

this.toastInstance({data: 'toast'})

```

### 2019.7 Remove the method in the componentWillMount method. Compatible with future React 17 versions, React-Native@0.6 version.

### Installation
```bash
yarn add react-native-smart-tip
or
npm i react-native-smart-tip --save 
```

![](https://raw.githubusercontent.com/mochixuan/react-native-smart-tip/master/img/main.jpg)

### Features

##### Toast

![](https://github.com/mochixuan/react-native-smart-tip/blob/master/img/toast.gif?raw=true)

##### SnackBar
![](https://github.com/mochixuan/react-native-smart-tip/blob/master/img/snackbar.gif?raw=true)

##### Modal
![](https://github.com/mochixuan/react-native-smart-tip/blob/master/img/modal.gif?raw=true)

##### Show tips on Modal 
> Tip: Modal shows that modal can only be used on Android [issue](https://github.com/facebook/react-native/issues/3445)

![](https://github.com/mochixuan/react-native-smart-tip/blob/master/img/modal1.gif?raw=true)

### Usage

##### WToast
```
import {WToast} from 'react-native-smart-tip'

// Base 
show = () => {
	WToast.show({data: 'hello world'})
}

// Other
show = () => {
	const toastOpts = {
	    data: 'Success',
	    textColor: '#ffffff',
	    backgroundColor: '#444444',
	    duration: WToast.duration.LONG, //1.SHORT 2.LONG
	    position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
	    icon: <Image source={require('../data/img/success.png')} style={{width: 32,height: 32,resizeMode: 'contain'}}/>
	}
	
	WToast.show(toastOpts)
}

```
##### WToast API
 Props |	Type	  | Required	 | Default    | Description
-------| -------- | -------- | ----------- | -----------
data     | String  | true     | ' '| Displayed content
duration | Number | false | WToast.duration.SHORT | The duration of the toast
position | Number   | false  | WToast.position.BOTTOM | Displayed position
inEasing | Easing   | false  | Easing.elastic(1)| Admission animation
textColor| String | false |'white'| font color
backgroundColor| String | false | 'black' | background color
icon | Component | fasse | undefined | Image to be displayed
isShowShadow | boolean | false | true | Shadow effect
---

##### WSnackBar
```
import {WSnackBar} from 'react-native-smart-tip'

// Base 
show = () => {
	WSnackBar.show({data: 'hello world'})
}

// Other
show = () => {
	const snackBarOpts = {
	    data: 'Please check the network first.',
	    position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
	    duration: WSnackBar.duration.LONG, //1.SHORT 2.LONG 3.INDEFINITE
	    textColor: '#ff490b',
	    backgroundColor: '#050405',
	    actionText: 'Sure',
	    actionTextColor: '#ff490b',
	    onActionHide: (isSlideHide)=>{
	    	// Click Action
	    },
	}
	
	WSnackBar.show(snackBarOpts)
}

```

##### WSnackBar API
 Props |	Type	  | Required	 | Default    | Description
-------| -------- | -------- | ----------- | -----------
data     | String  | true     | ' '| Displayed content
statusBarHeight | Number | false | -1 | Prevent Android statusBar
height | Number | false | 44 | Height to display
duration | Number | false | WSnackBar.duration.SHORT | The duration of the toast
position | Number   | false  | WSnackBar.position.BOTTOM | Displayed position
inEasing | Easing   | false  | Easing.linear| Admission animation
textColor| String | false |'white'| font color
backgroundColor| String | false | 'black' | background color
actionText | String | false | undefined | action text
actionTextColor | String | false | 'white' | action text color
isAllowSlideExit|boolean | false | true | Whether to run sliding hide
onActionHide | Function | false |  undefined | listener click
isShowShadow | boolean | false | true | Shadow effect
numberOfLines|number| false | 1 | Maximum number of rows
---

##### WModal 
```
import {WModal} from 'react-native-smart-tip'

// Base 
show = () => {
	WModal.show({data: 'hello world'})
}

// Other
show = () => {
	const modalOpts = {
	    data: 'Loading',
	    textColor: '#fff',
	    backgroundColor: '#444444',
	    position: WModal.position.CENTER,
	    icon: <ActivityIndicator color='#fff' size={'large'}/>
	}
	
	WModal.show(modalOpts)
}

```
##### WToast API
 Props |	Type	  | Required	 | Default    | Description
-------| -------- | -------- | ----------- | -----------
data     | String  | true     | ' '| Displayed content
position | Number   | false  | WToast.position.BOTTOM | Displayed position
inEasing | Easing   | false  | Easing.elastic(1)| Admission animation
textColor| String | false |'white'| font color
backgroundColor| String | false | 'black' | background color
icon | Component | fasse | undefined | Image to be displayed
onRequestClose|Function|false| undefined| Android Back

##### MIT Licensed
