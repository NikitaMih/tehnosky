import type {AxiosInstance} from "axios";
import type { TypedUseSelectorHook } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';
import { useSelector } from "react-redux";
import { reducer as parametersReducer } from "../store/reducers/parametersReducer";
import { api } from "../api";

const extraArgument: ThunkExtraArg = {
  api: api
};

export const store = configureStore({
  reducer: {
    parameters: parametersReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    thunk: {
      extraArgument
    },
    serializableCheck: false,
  })
});

export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export type AppDispatch = typeof store.dispatch;

export type ThunkExtraArg = {
  api: AxiosInstance;
};

export type ThunkConfig<T> = {
  rejectValue: T;
  extra: ThunkExtraArg;
  state: RootState;
};

