import test from '../pageObjects/pageFixture';

function isMobileProject() {
  return test.info().project.name.toLowerCase().includes('mobile');
}

export default { isMobile: isMobileProject };
