import { Page } from '@playwright/test';
import { cartWithOneItem, emptyCart } from '../../mockData/cart';

export class CartApi {
  constructor(private page: Page) {
    this.page = page;
  }

  async setCartWithOneItem() {
    await this.page.route('**/api/cart', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(cartWithOneItem),
      });
    });
  }

  async setEmptyCart() {
    await this.page.route('**/api/cart', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(emptyCart),
      });
    });
  }
}
