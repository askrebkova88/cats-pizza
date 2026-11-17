import { guestTest as test } from '../../../fixtures/app.fixture';

test('Orders page empty state', async ({ ordersPage }) => {
  await ordersPage.setupApiEmptyOrders();
  await ordersPage.openPage();
  await ordersPage.assertHasCorrectPageViewEmptyOrdersList();
});

test('Orders page with one item', async ({ ordersPage }) => {
  await ordersPage.setupApiOrdersWithOneItem();
  await ordersPage.openPage();
  await ordersPage.assertHasCorrectPageViewWithOneOrder();
});
