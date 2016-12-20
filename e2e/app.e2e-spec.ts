import { BOOSTERPROJECTPage } from './app.po';

describe('booster-project App', function() {
  let page: BOOSTERPROJECTPage;

  beforeEach(() => {
    page = new BOOSTERPROJECTPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
