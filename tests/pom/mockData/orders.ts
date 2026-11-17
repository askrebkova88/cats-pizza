export const oneOrder = {
  orders: [
    {
      id: 'order-1',
      ownerType: 'user',
      ownerId: 'user-2',
      userId: 'user-2',
      guestSessionId: null,
      items: [
        {
          id: 'cat-2',
          name: 'Пепперони',
          basePrice: 4200,
          price: 4200,
          options: {
            furType: 'Средняя',
            activityLevel: 'Игровой',
            extras: [],
          },
          quantity: 1,
        },
      ],
      totalPrice: 4200,
      customer: {
        city: 'Самара',
        street: 'Рабочая',
        house: '13',
        apartment: '1',
        comment: 'Комментарий',
        payment: 'card',
      },
      createdAt: '2026-11-16T13:00:00.763Z',
    },
  ],
};

export const emptyOrders = {
  orders: [],
};
