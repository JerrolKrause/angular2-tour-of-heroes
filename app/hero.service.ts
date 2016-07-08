import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock-heroes'


@Injectable()
export class HeroService {
    getHeroes() {
        //return HEROES;
        //Fake a promise
        return Promise.resolve(HEROES);
    }

    //Simulate slow promise return
    getHeroesSlowly() {
        return new Promise < Hero[] > (resolve =>
            setTimeout(() => resolve(HEROES), 5000) // 2 seconds
        );
    }
}
