import { Page } from '@playwright/test';
import { oneOrder, emptyOrders } from '../../mockData/orders';

export class OrdersApi {
  constructor(private page: Page) {
    this.page = page;
  }

  async setOrdersWithOneItem() {
    await this.page.route('**/api/orders', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(oneOrder),
      });
    });
  }

  async setEmptyOrders() {
    await this.page.route('**/api/orders', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(emptyOrders),
      });
    });
  }
}
