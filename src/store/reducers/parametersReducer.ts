import { createSlice, PayloadAction, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { ParametersState, parameter } from '../../models/parameters.type';
import { getParameterById, getParameters } from '../actions/parametersAction';

const initialState: ParametersState = {
  parameters: [],
  parametersFilter: [],
  detailCard: {    
    id: '',
    parameter: {
      title: '',
      type: '',
      value: '', 
    }
  },
  error: false,
  loading: false,
}

export const parametersReducer = createSlice({
  name: 'parameters',
  initialState,
  reducers: {
    setParameters: (state: ParametersState, action: PayloadAction<parameter[]>) => {
      state.parametersFilter = action.payload;
    },
    setError: (state: ParametersState, action: PayloadAction<boolean>) => {
      state.error = action.payload;
    }
  },
  extraReducers: (builder: ActionReducerMapBuilder<ParametersState>) => {
    builder
      .addCase(getParameters.rejected, (state: ParametersState) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getParameters.pending, (state: ParametersState) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getParameters.fulfilled, (state: ParametersState, { payload }: PayloadAction<parameter[]>) => {
        state.loading = false;
        state.parameters = payload;
        state.parametersFilter = payload;
      })
      .addCase(getParameterById.rejected, (state: ParametersState) => {
        state.error = true;
        state.loading = false;
      })
      .addCase(getParameterById.pending, (state: ParametersState) => {
        state.loading = true;
        state.error = false;
      })
      .addCase(getParameterById.fulfilled, (state: ParametersState, { payload }: PayloadAction<parameter>) => {
        state.loading = false;
        state.detailCard = payload;
      });
  }
});

export const { reducer, actions } = parametersReducer;