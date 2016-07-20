/***************************************************************************************
* Made for the {N} community by Brad Martin @BradWayneMartin
* https://twitter.com/BradWayneMartin
* https://github.com/bradmartin
* http://bradmartin.net
* Open Source Lib : https://github.com/Cleveroad/CRAndroidMBootAnimationView
*************************************************************************************/
import { View } from "ui/core/view";

declare var android, com: any;

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


}