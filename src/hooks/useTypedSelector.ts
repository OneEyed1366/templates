import { RootState } from '../store';
import { TypedUseSelectorHook, useSelector } from 'react-redux';

export default function useTypedSelector(): TypedUseSelectorHook<RootState> {
  return useSelector;
}
