/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/Cleveroad/CRAndroidMBootAnimationView
*************************************************************************************/
import { View } from "ui/core/view";
import { Color } from "color";
import { Page } from "ui/page";
import { Frame, AndroidFrame } from "ui/frame";
import * as app from "application";
declare var android, com: any;

interface DialogOptions {
    backgroundColor: string,
    firstColor: string,
    secondColor: string,
    thirdColor: string,
    fourthColor: string,
    speedCoefficient: number
}

export class MarshmallowLoader extends View {
    private _androidViewId: number;
    private _android: com.cleveroad.androidmanimation.LoadingAnimationView;

    get android(): any {
        return this._android;
    }

    get _nativeView(): any {
        return this._android;
    }

    public _createUI() {
        let LoadingAnimationView = com.cleveroad.androidmanimation.LoadingAnimationView;
        this._android = new LoadingAnimationView(this._context);

        if (!this._androidViewId) {
            this._androidViewId = android.view.View.generateViewId();
        }
        this._android.setId(this._androidViewId);

    }

    public startAnimation() {
        this._android.startAnimation();
    }

    public pauseAnimation() {
        this._android.pauseAnimation();
    }

    public stopAnimation() {
        this._android.stopAnimation();
    }


    // public showDialog(DialogOptions) {
    //     let fragMgr = app.android.startActivity || app.android.foregroundActivity;
    //     let AnimationDialogFragment = com.cleveroad.androidmanimation.AnimationDialogFragment;
    //     let fragment = new AnimationDialogFragment.Builder()
    //         .setBackgroundColor(new Color(DialogOptions.backgroundColor).android)
    //         .setFirstColor(new Color(DialogOptions.firstColor).android)
    //         .setSecondColor(new Color(DialogOptions.secondColor).android)
    //         .setThirdColor(new Color(DialogOptions.thirdColor).android)
    //         .setFourthColor(new Color(DialogOptions.fourthColor).android)
    //         .setSpeedCoefficient(DialogOptions.speedCoefficient)
    //         .build();
    //     fragment.show(fragMgr.getFragmentManager(), "Animation");
    // }


}