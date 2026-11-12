import { authorizedTest as test } from '../../fixtures/app.fixture';

test('Authorized user sees validation error for empty required address fields', async ({
  homePage,
  checkoutPage,
}) => {
  await homePage.open();
  await homePage.addFirstCatToCart();
  await homePage.gotoCheckoutFromCart();
  await checkoutPage.submitWithoutAddress();
  await checkoutPage.assertValidationError('Пожалуйста, заполните обязательные поля адреса.');
});
