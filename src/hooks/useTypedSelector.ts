import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { RootState } from '../store/ducks';

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
