import { Component, VERSION } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public likedGames: string[] = [];
  ngVersion = VERSION.full;

  constructor(public translate: TranslateService) {
    translate.addLangs(['en']);
    translate.setDefaultLang('en');
    this.likedGames = this.getLikedGames();
    
  }
  getLikedGames(): string[] {
    const likedGames = localStorage.getItem('likedGames');
    return JSON.parse(likedGames || '[]');
  }

  clearLikedGames() {
    this.likedGames = [];
    localStorage.removeItem('likedGames');
  }

  removeLikedGame(game: string) {
    const likedGames = this.getLikedGames();
    const index = likedGames.indexOf(game);
    if (index > -1) {
      likedGames.splice(index, 1);
    }
    localStorage.setItem('likedGames', JSON.stringify(likedGames));
    this.likedGames = likedGames;
  }
}
