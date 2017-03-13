import { PortalWebAngularjsPage } from './app.po';

describe('dating-web-js App', () => {
  let page: PortalWebAngularjsPage;

  beforeEach(() => {
    page = new PortalWebAngularjsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
