import { Page } from '@playwright/test';
import { cats } from '../../mockData/cats';

export class CatsApi {
  constructor(private page: Page) {
    this.page = page;
  }

  async setCatsItem() {
    await this.page.route('**/api/cats', async (route) => {
      await route.fulfill({
        status: 200,
        contentType: 'application/json',
        body: JSON.stringify(cats),
      });
    });
  }
}
