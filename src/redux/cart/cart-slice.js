import { createSlice, current } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      return [
        ...current(state),
        {
          ...action.payload,
          daysSelected: 0,
          dateRange: { start: '', end: '' },
          orderPrice: 0,
        },
      ];
    },
    deleteFromCart: (state, action) => {
      return current(state).filter(tool => tool.toolId !== action.payload);
    },
    updateOrder: (state, action) => {
      const { toolId, formattedDate } = action.payload;

      if (
        formattedDate === 0 &&
        current(state).find(tool => tool.toolId === toolId).daysSelected === 0
      )
        return;

      if (formattedDate === 0) {
        const updatedOrder = current(state).map(tool => {
          if (tool.toolId === toolId)
            return {
              ...tool,
              daysSelected: 0,
              dateRange: { start: '', end: '' },
              orderPrice: 0,
            };
          return tool;
        });

        return updatedOrder;
      }

      const { daysSelected, dateRange } = formattedDate;

      const updatedOrder = current(state).map(tool => {
        if (tool.toolId === toolId)
          return {
            ...tool,
            daysSelected,
            dateRange,
            orderPrice: tool.price * daysSelected,
          };
        return tool;
      });

      return updatedOrder;
    },
  },
});

export const { addToCart, deleteFromCart, updateOrder } = cartSlice.actions;

export default cartSlice.reducer;
