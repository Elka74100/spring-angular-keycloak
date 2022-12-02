import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import { homeApiSlice } from '../features/home/homeApiSlice';
import  tokenReducer  from '../features/home/tokenSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [homeApiSlice.reducerPath]: homeApiSlice.reducer,
    token: tokenReducer,
  },
  middleware: getDefaultMiddleware =>
  getDefaultMiddleware().concat(homeApiSlice.middleware),
  devTools: true
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
