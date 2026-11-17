import { guestTest as test } from '../../../fixtures/app.fixture';

test('Cart page empty state', async ({ cartPage }) => {
  await cartPage.setupApiEmptyCart();
  await cartPage.open();
  await cartPage.assertHasCorrectEmptyView();
});

test('Cart page with one item', async ({ cartPage }) => {
  await cartPage.setupApiCartWithOneItem();
  await cartPage.open();
  await cartPage.assertHasCorrectViewWithOneItem();
});
