import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";

import * as parametersAction from "../store/actions/parametersAction";
import { actions as parametersReducer } from "../store/reducers/parametersReducer";

export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(
    () =>
      bindActionCreators(
        {
          ...parametersAction,
          ...parametersReducer,
        },
        dispatch,
      ),
    [dispatch],
  );
};
