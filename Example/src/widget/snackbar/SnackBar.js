import React from 'react'
import RootSiblings from 'react-native-root-siblings'
import SnackView from "./SnackView"
import {SnackBarDefaultOpt, SnackBarDuration, SnackBarPosition,SnackBarInOutDuration} from "../data/Constants";

let rootSiblings = undefined
let liftCycleManage = undefined
export default class SnackBar {

    static duration = SnackBarDuration
    static position = SnackBarPosition

    static show = (snackBarOpts) => {

        const data = snackBarOpts.data
        if (typeof data !== 'string' || data.length <= 0) {
            return
        }

        snackBarOpts = Object.assign({},SnackBarDefaultOpt,snackBarOpts)

        SnackBar.hide();

        rootSiblings = new RootSiblings(
            <SnackView {...snackBarOpts}/>
        )

        if (snackBarOpts.duration !== SnackBarDuration.INDEFINITE) {
            liftCycleManage = setTimeout(()=>{
                SnackBar.hide()
            }, snackBarOpts.duration+SnackBarInOutDuration*2)
        }
    }

    static hide = () => {
        if (liftCycleManage) {
            clearTimeout(liftCycleManage)
            liftCycleManage = undefined
        }
        if (rootSiblings) {
            rootSiblings.destroy()
            rootSiblings = undefined
        }
    }

}

