import { test } from '../../fixtures/app.fixture';
import { CleanupAPI } from '../api/CleanupAPI';
import { testUsers, testAddress } from '../data/testData';

test.describe('Orders', () => {
  test.describe.configure({ mode: 'serial' });

  test.afterEach(async ({ request }) => {
    const cleanupAPI = new CleanupAPI(request);
    await cleanupAPI.deleteOrdersByEmail(testUsers.existing.email);
  });

  // оформление заказа для неавторизованного пользователя
  test('Make order with login in checkout', async ({ homePage, checkoutPage, ordersPage }) => {
    await homePage.open();
    await homePage.addFirstCatToCart();
    await homePage.gotoCheckoutFromCart();
    await checkoutPage.signInInCheckout(testUsers.existing.email, testUsers.existing.password);
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await ordersPage.open();
    await ordersPage.assertHasOrder();
  });

  // оформление заказа для авторизованного пользователя
  test('Make order after login', async ({ homePage, authPage, checkoutPage, ordersPage }) => {
    await homePage.open();
    await authPage.signIn(testUsers.existing.email, testUsers.existing.password);
    await homePage.addFirstCatToCart();
    await homePage.gotoCheckoutFromCart();
    await checkoutPage.fillAddress(testAddress);
    await checkoutPage.submit();
    await ordersPage.open();
    await ordersPage.assertHasOrder();
  });
});
