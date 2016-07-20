import { EventData } from 'data/observable';
import { Page } from 'ui/page';
import { HelloWorldModel } from './main-view-model';
import { Color } from "color";
import { isAndroid, device } from "platform";
import * as app from "application";

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: EventData) {
    // Get the event sender
    let page = <Page>args.object;

    page.bindingContext = new HelloWorldModel(page);

    if (isAndroid && device.sdkVersion >= "21") {
        var window = app.android.startActivity.getWindow();
        window.setStatusBarColor(new Color("#336699").android);
    }

}