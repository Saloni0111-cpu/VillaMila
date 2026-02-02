import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ExploreComponent } from './explore/explore.component';
import { AvailableComponent } from './available/available.component';
import { WhyUsComponent } from './why-us/why-us.component';
  import { CollectionComponent } from './collection/collection.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HeroComponent, ExploreComponent, AvailableComponent, WhyUsComponent, CollectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'VillaMila';
}
