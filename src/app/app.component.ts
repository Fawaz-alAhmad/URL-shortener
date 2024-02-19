import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
}

// public shortenURL(longURL: string): void {
//   this.shortnerService.getShortURL(longURL).subscribe((goTinyResponse: GoTinyResponse[]) => {
//     if (goTinyResponse.length) {
//       this.shortURL = goTiny + '/' + goTinyResponse[0].code;
//     }
//   })
// }
