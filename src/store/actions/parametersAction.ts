import { createAsyncThunk } from "@reduxjs/toolkit";
import type { AxiosResponse } from "axios";
import { Endpoints, api, combineUrl } from "../../api";
import { ActionType } from "../../shared/types/enum";

export const getParameters = createAsyncThunk(ActionType.GET_PARAMETERS, async () => {
  try {
    const url = combineUrl(Endpoints.PARAMETERS);
    const { data }: AxiosResponse = await api.get(url);
    return data;
  } catch (error) {
    throw new Error('err');
  }
});

export const createParameter = createAsyncThunk<
any,
any
>
(ActionType.CREATE_PARAMETER, async (parameter, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;
  try {
    const url = combineUrl(Endpoints.PARAMETERS);
    const { data }: AxiosResponse = await api.post(url, {
      parameter,
    });
    dispatch(getParameters());
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const changeParameter = createAsyncThunk<
any,
any
>
(ActionType.PUT_PARAMETERS, async (props, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;
  const { id, parameter } = props;
  try {
    const url = combineUrl(Endpoints.PARAMETERS, [`/${id}`]);
    const { data }: AxiosResponse = await api.put(url, {
      parameter,
    });
    dispatch(getParameters());
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteParameter = createAsyncThunk<
any,
any
>
(ActionType.DELETE_PARAMETERS, async (id, thunkAPI) => {
  const { rejectWithValue, dispatch } = thunkAPI;
  try {
    const url = combineUrl(Endpoints.PARAMETERS, [`/${id}`]);
    const { data }: AxiosResponse = await api.delete(url);
    dispatch(getParameters());
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const getParameterById = createAsyncThunk<
any,
any
>
(ActionType.GET_ID_PARAMETER, async (id) => {
  try {
    const url = combineUrl(Endpoints.PARAMETERS, [`/${id}`]);
    const { data }: AxiosResponse = await api.get(url);
    return data;
  } catch (error) {
    throw new Error('err');
  }
});


