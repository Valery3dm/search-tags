import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { LastSearch } from './components';
import { SearchPanel } from './components';
import { Cards } from './components';
import { PreLoader } from './components';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';
import { RootState } from './store/ducks';
import { ItemsState } from './store/types/item';

import { AppStyled } from './styled';

const App: React.FC = () => {
  const dispatch = useDispatch()
  const { fetchItemsAction } = useActions();

  useEffect(() => {
    dispatch(fetchItemsAction());
  }, [dispatch, fetchItemsAction]);

  const state = useTypedSelector<ItemsState>((state: RootState) => state.item);

  return (
    <AppStyled>
      <SearchPanel />
      <LastSearch listOfThreeLastItems={state === undefined ? [] : state.listOfThreeLastItems} />
      {state === undefined ? [] : state.isLoaded ? (
              <Cards viewList={state === undefined ? [] : state.viewList}/>
      ) : (
              <PreLoader/>
      )}
    </AppStyled>
  );
};

export default App;
