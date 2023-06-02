import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';
import { HeroService } from 'src/app/hero.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { EMPTY, of } from 'rxjs';
import { By } from '@angular/platform-browser';
import { AppRoutingModule } from 'src/app/app-routing.module';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const fakeHeroService = jasmine.createSpyObj(['getHeroes']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardComponent ],
      providers: [
                 {provide: HeroService, useValue: fakeHeroService}
      ],
      imports: [AppRoutingModule]
    })
    .compileComponents();
    fakeHeroService.getHeroes.and.returnValue(EMPTY);
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call method search with parameter when data input and heroes should be filtered', () => {
    component.heroes = [
        {id: 1, name: 'Nata'},
        {id: 2, name: 'Natadata'}
    ]
    const elem = fixture.debugElement.query(By.css('.searchInput'));
    elem.nativeElement.value = 'data';
    const spy = spyOn(component, 'search').and.callThrough();
    elem.triggerEventHandler('input');
    expect(spy).toHaveBeenCalledWith('data');
    
    expect(component.heroesFiltered).toEqual([{id: 2, name: 'Natadata'}]);
  });

  it('should show heroesTop', () => {
    component.heroesTop = [
        {id: 1, name: 'Nata'},
        {id: 2, name: 'Alexey'}
    ];
    fixture.detectChanges();
    const hero = fixture.debugElement.query(By.css('.hero1'));
    const heroMainHeroes = fixture.debugElement.query(By.css('.mainHeroes'));
    console.log('hero', hero);
    console.log('heroMainHeroes', heroMainHeroes);
    
    expect(hero.nativeElement.textContent).toEqual('Nata')
  });

});
