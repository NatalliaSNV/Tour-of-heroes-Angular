import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './details.component';
import { HeroService } from 'src/app/hero.service';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Hero } from 'src/app/hero.interface';
import { Location } from '@angular/common';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  const fakeActivatedRoute = {
    params: 1,
    data: {
        subscribe() {
          return of();
        }
      }
  }

  const fakeHeroService = jasmine.createSpyObj(['updateHero']);
  const fakeLocation = jasmine.createSpyObj(['back']);


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],   
      providers: [{ provide: HeroService, useValue: fakeHeroService },
                { provide: ActivatedRoute, useValue: fakeActivatedRoute },
                {provide: Location, useValue: fakeLocation}
      ],
      imports: [FormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should update hero by click on button save', () => {
    component.hero = {} as Hero;
    const elem = fixture.debugElement.query(By.css('.btn-save'));
    const spy = spyOn(component, 'save').and.callThrough();
    fakeHeroService.updateHero.and.returnValue(EMPTY);
    elem.triggerEventHandler('click');
    expect(spy).toHaveBeenCalled();
    expect(fakeHeroService.updateHero).toHaveBeenCalled();
  });

  it('should call function goBack and then location.back by click on button back', () => {
    const elem = fixture.debugElement.query(By.css('.btn-back'));
    const spy1 = spyOn(component, 'goBack').and.callThrough();
    elem.triggerEventHandler('click');
    expect(spy1).toHaveBeenCalled();
    expect(fakeLocation.back).toHaveBeenCalled();
  });

  it('should contain in template hero name', () => {
    component.hero = {
        name: 'Nata',
        id: 3
    };
    fixture.detectChanges();
    const h2 = fixture.debugElement.query(By.css('h2'));
    expect(h2.nativeElement.textContent).toContain('NATA')
  });

  it('should contain in template hero id', () => {
    component.hero = {
        name: 'Nata',
        id: 5
    };
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p'));
    expect(p.nativeElement.textContent).toBe('id: 5');
  });


});
