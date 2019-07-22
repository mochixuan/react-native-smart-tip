import { WToast, WSnackBar, WModal } from 'react-native-smart-tip';
import * as React from 'react';
import { Image, ActivityIndicator } from 'react-native';

////////////////////////////////////////////////////////////////////////
// WToast
// Base
WToast.show({ data: 'hello world' });

// Other
const toastOpts = {
	data: 'Success',
	textColor: '#ffffff',
	backgroundColor: '#444444',
	duration: WToast.duration.LONG, // 1.SHORT 2.LONG
	position: WToast.position.TOP, // 1.TOP 2.CENTER 3.BOTTOM
	icon: <Image source={require('../data/img/success.png')} style={{ width: 32, height: 32, resizeMode: 'contain' }} />
};

WToast.show(toastOpts);
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// WSnackBar
// Base
WSnackBar.show({ data: 'hello world' });

// Other
const snackBarOpts = {
	data: 'Please check the network first.',
	position: WSnackBar.position.BOTTOM, // 1.TOP 2.CENTER 3.BOTTOM
	duration: WSnackBar.duration.LONG, // 1.SHORT 2.LONG 3.INDEFINITE
	textColor: '#ff490b',
	backgroundColor: '#050405',
	actionText: 'Sure',
	actionTextColor: '#ff490b',
	actionClick: () => {
		// Click Action
	},
};

WSnackBar.show(snackBarOpts);
////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////
// WModal
// Base
WModal.show({ data: 'hello world' });

// Other
const modalOpts = {
	data: 'Loading',
	textColor: '#fff',
	backgroundColor: '#444444',
	position: WModal.position.CENTER,
	icon: <ActivityIndicator color='#fff' size={'large'} />
};

WModal.show(modalOpts);
////////////////////////////////////////////////////////////////////////
