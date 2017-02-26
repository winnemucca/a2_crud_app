import { CaffeineAppPage } from './app.po';

describe('caffeine-app App', () => {
  let page: CaffeineAppPage;

  beforeEach(() => {
    page = new CaffeineAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
