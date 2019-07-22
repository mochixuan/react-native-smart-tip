// Type definitions for react-native-smart-tip 1.1
// Project: https://github.com/mochixuan/react-native-smart-tip#readme
// Definitions by: taoqf <https://github.com/taoqf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import { ReactNode } from 'react';
import { Animated } from 'react-native';

export namespace WToast {
	function show(option: ToastOpts): void;
	function hide(): void;
	enum position {
		TOP = 1,
		CENTER = 0,
		BOTTOM = -1
	}

	enum duration {
		LONG = 3500,
		SHORT = 2000
	}

	interface ToastOpts {
		data: string;
		duration?: duration | number;
		position?: position | number;
		inEasing?: (value: number) => number;
		textColor?: string;
		backgroundColor?: string;
		icon?: ReactNode;
	}
}

export namespace WSnackBar {
	function show(option: SnackBarOpts): void;
	function hide(): void;
	interface SnackBarOpts {
		data: string;
		statusBarHeight?: number;
		height?: number;
		duration?: duration | number;
		position?: position | number;
		inEasing?: (value: number) => number;
		textColor?: string;
		backgroundColor?: string;
		actionText?: string;
		actionTextColor?: string;
		actionClick?: () => void;
	}

	enum position {
		TOP = 1,
		BOTTOM = -1
	}

	enum duration {
		LONG = 3500,
		SHORT = 2000,
		INDEFINITE = -1
	}
}

export namespace WModal {
	function show(option: ModalOpts): void;
	function hide(): void;
	enum position {
		TOP = 1,
		CENTER = 0,
		BOTTOM = -1
	}
	interface ModalOpts {
		data: string;
		position?: WToast.position | number;
		inEasing?: (value: number) => number;
		textColor?: string;
		backgroundColor?: string;
		icon?: ReactNode;
		onRequestClose?: () => void;
	}
}
