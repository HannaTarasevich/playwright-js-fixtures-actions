import test from '../pageObjects/pageFixture';

function isMobile() {
  return test.info().project.name.toLowerCase().includes('mobile');
}

async function acceptCookies(page) {
  const cookieConsent = {
    name: 'cookie_consent',
    value: 'functionality_storage.analytics_storage.ad_storage.personalization_storage',
    domain: '.jetbrains.com',
    path: '/',
    expires: Math.floor(Date.now() / 1000) + 365 * 24 * 60 * 60, // 1 year from now
    httpOnly: false,
    secure: false,
    sameSite: 'Lax',
  };

  await page.context().addCookies([cookieConsent]);
}

export { isMobile, acceptCookies };
