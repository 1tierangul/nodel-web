import { NodelWebPage } from './app.po';

describe('nodel-web App', () => {
  let page: NodelWebPage;

  beforeEach(() => {
    page = new NodelWebPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
