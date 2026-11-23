import { APIRequestContext } from '@playwright/test';

export class CleanupAPI {
  constructor(
    private request: APIRequestContext,
    private apiUrl: string = 'http://localhost:3001/api',
  ) {
    this.request = request;
  }

  async deleteOrdersByEmail(email: string) {
    const response = await this.request.delete(`${this.apiUrl}/orders/by-email`, {
      data: { email },
    });

    if (!response.ok()) {
      throw new Error(`Orders cleanup failed: ${response.status()}`);
    }
  }

  async deleteUserByEmail(email: string) {
    const response = await this.request.delete(`${this.apiUrl}/users/by-email`, {
      data: { email: email },
    });

    if (!response.ok()) {
      throw new Error(`User cleanup failed: ${response.status()}`);
    }
  }
}
