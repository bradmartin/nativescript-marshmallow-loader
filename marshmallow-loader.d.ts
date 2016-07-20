/**
 * Contains the MarshmallowLoader class, which represents an Android animation for Marshmallow loading.
 */

declare module "nativescript-marshmallow-loader" {
    import { Property } from "ui/core/dependency-observable";
    import { View } from "ui/core/view";

    /**
     * Represents a MarshmallowLoader View component.
     */
    export class MarshmallowLoader extends View {

        /**
         * Gets the native [android widget](https://github.com/Cleveroad/CRAndroidMBootAnimationView) that represents the user interface for this component. Valid only when running on Android OS.
         */
        android: any /* com.cleveroad.androidmanimation.LoadingAnimationView */;

        /**
         * Start the animation.
         */
        startAnimation();

        /**
         * Pause the animation.
         */
        pauseAnimation();

        /**
         * Stop the animation and resets to beginning.
         */
        stopAnimation();

        /**
         * Display the loading animation in a dialog.
         */
        // showDialog(DialogOptions);

    }

    // export interface DialogOptions {
    //     backgroundColor: string,
    //     firstColor: string,
    //     secondColor: string,
    //     thirdColor: string,
    //     fourthColor: string,
    //     speedCoefficient: number
    // }

}