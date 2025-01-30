import { ActionMethod } from "../App";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/root/root.store";

// Custom hook
const useDispatchAction = () => {
  const dispatch: AppDispatch = useDispatch();

  const dispatchAction = <T extends string,  P = any>(
    actionMethod: () => ActionMethod<T, P>
  ) =>
    dispatch(actionMethod());

  return dispatchAction;
};

export { useDispatchAction };
