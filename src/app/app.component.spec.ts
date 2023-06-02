import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { Router } from '@angular/router';

describe('AppComponent', () => {
  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  const fakeRouter = jasmine.createSpyObj(['navigate']);

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        {provide: Router, useValue: fakeRouter}
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call goToDashboard and then router.navigate with special parameter by click on btn Dashboard', () => {
    const btn = fixture.debugElement.query(By.css('.btn-dashboard'));
    const spy = spyOn(app, 'goToDashboard').and.callThrough();
    btn.triggerEventHandler('click');
    expect(spy).toHaveBeenCalled();
    expect(fakeRouter.navigate).toHaveBeenCalledWith(['/dashboard']);
  });

  it('should call goToHeroes and then router.navigate with special parameter by click on btn Heroes', () => {
    const btn = fixture.debugElement.query(By.css('.btn-heroes'));
    const spy = spyOn(app, 'goToHeroes').and.callThrough();
    btn.triggerEventHandler('click');
    expect(spy).toHaveBeenCalled();
    expect(fakeRouter.navigate).toHaveBeenCalledWith(['/heroes']);
  });

});
