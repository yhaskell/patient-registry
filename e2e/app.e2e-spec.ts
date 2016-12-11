import { PatientRegistryPage } from './app.po';

describe('patient-registry App', function() {
  let page: PatientRegistryPage;

  beforeEach(() => {
    page = new PatientRegistryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
