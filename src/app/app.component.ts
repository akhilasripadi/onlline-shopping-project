import { Component, Renderer2 } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'online-shopping ';
  public messageSplitRegex: RegExp;
  errorTypeIcons: { [key: string]: string } = {
    success: 'icon-success',
    info: 'icon-info',
    warn: 'icon-warn',
    error: 'icon-error'
  };

  constructor(
    public primeNGConfig: PrimeNGConfig,
    private renderer: Renderer2
  ) {
    this.messageSplitRegex = new RegExp(/(?<=\#)/);
  }

  removeHashcharacter(msg: string) {
    return msg.replace(/#$/, '');
  }
}
