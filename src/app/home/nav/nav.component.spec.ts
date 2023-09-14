import { NavComponent } from './nav.component';

describe('NavComponent', () => {
  let component: NavComponent;
  let routerMock = {
    navigate:jasmine.createSpy('navigate')
  };

  beforeEach(() => {
    component = new NavComponent(routerMock as any);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
