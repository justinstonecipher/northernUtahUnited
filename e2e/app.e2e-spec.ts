import { NorthernUtahUnitedPage } from './app.po';

describe('northern-utah-united App', function() {
  let page: NorthernUtahUnitedPage;

  beforeEach(() => {
    page = new NorthernUtahUnitedPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
