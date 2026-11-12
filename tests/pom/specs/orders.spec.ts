import { authorizedTest as test } from '../../fixtures/app.fixture';
import { CleanupAPI } from '../api/CleanupAPI';
import { testUsers, testAddress } from '../data/testData';

test.describe('Orders', () => {
  test.describe.configure({ mode: 'serial' });

  test.afterEach(async ({ request }) => {
    const cleanupAPI = new CleanupAPI(request);
    await cleanupAPI.deleteOrdersByEmail(testUsers.existing.email);
  });

  // оформление заказа для авторизованного пользователя
  test('Authorized user makes order withoutn manual login', async ({
    homePage,
    checkoutPage,
    ordersPage,
  }) => {
    await homePage.open();
    await homePage.addFirstCatToCart();
    await homePage.gotoCheckoutFromCart();
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await ordersPage.open();
    await ordersPage.assertHasOrder();
  });
});
