import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesComponent } from './heroes.component';
import { HeroService } from 'src/app/hero.service';
import { EMPTY } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  const fakeHeroService = jasmine.createSpyObj(['getHeroes', 'addHero', 'deleteHero']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroesComponent ],
      providers: [
        {provide: HeroService, useValue: fakeHeroService}
      ],
      imports: [AppRoutingModule]
    })
    .compileComponents();
    fakeHeroService.getHeroes.and.returnValue(EMPTY);

    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call addHero with parameter by click on button Add hero and then call heroService.addHero', () => {
    const btnAdd = fixture.debugElement.query(By.css('.btn-add'));
    const spy = spyOn(component, 'addHero').and.callThrough();
    fakeHeroService.addHero.and.returnValue(EMPTY)
    component.inputAddHero.nativeElement.value = 'Nata';
    fixture.detectChanges();
    btnAdd.triggerEventHandler('click');
    expect(spy).toHaveBeenCalledWith('Nata');
    expect(fakeHeroService.addHero).toHaveBeenCalled();
  });

  it('should call deleteHero with parameter by click on button X and then call heroService.deleteHero and delete this hero in array heroes', () => {
    component.heroes = [
        {
            id: 1,
            name: 'Pety'
        },
        {
            id: 2,
            name: 'Slava'
        }
    ];
    fixture.detectChanges();
    const btnDel = fixture.debugElement.query(By.css(`.btn-delete${component.heroes[0].id}`));
    const spy = spyOn(component, 'deleteHero').and.callThrough();
    
    fakeHeroService.deleteHero.and.returnValue(EMPTY)
    btnDel.triggerEventHandler('click');
    expect(spy).toHaveBeenCalledWith({
        id: 1,
        name: 'Pety'
    });
    expect(fakeHeroService.deleteHero).toHaveBeenCalled();
    expect(component.heroes).toEqual([{
        id: 2,
        name: 'Slava'
    }])
  });

});
