import { guestTest as test } from '../../../fixtures/app.fixture';

test('Home page with items has correct view', async ({ homePage }) => {
  await homePage.setApiEmptyCart();
  await homePage.open();
  await homePage.assertCorrectPageViewWithItems();
});

test('Detail modal has correct view', async ({ homePage }) => {
  await homePage.setApiEmptyCart();
  await homePage.open();
  await homePage.openItemDetailModal();
  await homePage.assertCorrectPageViewWithOpenDetailModal();
});

test('Empty cart drawer has correct view', async ({ homePage }) => {
  await homePage.setApiEmptyCart();
  await homePage.open();
  await homePage.openCart();
  await homePage.assertCorrectPageViewWithOpenCartEmptyDrawer();
});

test('Cart drawer with one item has correct view', async ({ homePage }) => {
  await homePage.setApiCartOneItem();
  await homePage.open();
  await homePage.openCart();
  await homePage.assertCorrectPageViewWithOpenCartDrawerWithOneItem();
});
