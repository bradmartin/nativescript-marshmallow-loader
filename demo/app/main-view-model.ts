import { Observable } from 'data/observable';
import { Page } from 'ui/page';
import { topmost } from "ui/frame";
import { MarshmallowLoader } from 'nativescript-marshmallow-loader';

export class HelloWorldModel extends Observable {
  private _marshmallow: MarshmallowLoader;

  constructor(mainPage: Page) {
    super();

    let page: Page = mainPage;
    this._marshmallow = <MarshmallowLoader>page.getViewById('marshmallow');
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

  // public showAnimationDialog() {
  //   let marsh = new MarshmallowLoader();
  //   marsh.showDialog(
  //     {
  //       backgroundColor: '#555',
  //       firstColor: '#3489db',
  //       secondColor: '#ff4801',
  //       thirdColor: '#dedede',
  //       fourthColor: '#336699',
  //       speedCoefficient: 2
  //     });
  // }


}