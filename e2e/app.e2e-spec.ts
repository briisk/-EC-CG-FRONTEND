import { EccgPage } from './app.po';

describe('eccg App', function() {
  let page: EccgPage;

  beforeEach(() => {
    page = new EccgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ecc works!');
  });
});
