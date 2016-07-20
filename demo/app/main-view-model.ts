import { Observable } from 'data/observable';
import { Page } from 'ui/page';
import { topmost } from "ui/frame";
import { MarshmallowLoader } from 'nativescript-marshmallow-loader';

export class HelloWorldModel extends Observable {
  private _marshmallow: MarshmallowLoader;

  constructor(page: Page) {
    super();

    let p: Page = page;
    // this._marshmallow = <MarshmallowLoader>topmost().getViewById('marshmallow');
    this._marshmallow = <MarshmallowLoader>p.getViewById('marshmallow');
    console.log('this._marshmallow: ' + this._marshmallow);
  }


  public playIt() {
    this._marshmallow.startAnimation();
  }

  public pauseIt() {
    this._marshmallow.pauseAnimation();
  }

  public stopIt() {
    this._marshmallow.stopAnimation();
  }


}