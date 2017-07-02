import { UdemyExercicePage } from './app.po';

describe('udemy-exercice App', () => {
  let page: UdemyExercicePage;

  beforeEach(() => {
    page = new UdemyExercicePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
