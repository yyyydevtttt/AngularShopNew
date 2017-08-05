import { AngularShopNewPage } from './app.po';

describe('angular-shop-new App', () => {
  let page: AngularShopNewPage;

  beforeEach(() => {
    page = new AngularShopNewPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
