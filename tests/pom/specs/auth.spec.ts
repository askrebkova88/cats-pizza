import { test } from '../../fixtures/app.fixture';
import { CleanupAPI } from '../api/CleanupAPI';
import { testUsers } from '../data/testData';

test.describe('Auth', () => {
  let createdUserEmail: string | null = null;

  test.afterAll(async ({ request }) => {
    if (!createdUserEmail) return;

    const cleanupAPI = new CleanupAPI(request);
    cleanupAPI.deleteUserByEmail(createdUserEmail);

    createdUserEmail = null;
  });

  // авторизация
  test('Sign In', async ({ homePage, authPage }) => {
    await homePage.open();
    await authPage.signIn(testUsers.existing.email, testUsers.existing.password);
    await authPage.assertSignedIn();
  });

  // регистрация
  test('Sign Up', async ({ homePage, authPage }) => {
    createdUserEmail = `${Date.now()}@test.com`;

    await homePage.open();
    await authPage.signUp('Anna', createdUserEmail, testUsers.existing.password);
    await authPage.assertSignedIn();
  });
});
