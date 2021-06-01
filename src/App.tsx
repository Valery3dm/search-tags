import React, { useEffect } from 'react';

import { LastSearch } from './components';
import { SearchPanel } from './components';
import { Cards } from './components';
import { PreLoader } from './components';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';
import { RootState } from './store/ducks';

import { AppStyled } from './styled';

const App: React.FC = () => {
  const { viewList, listOfThreeLastItems, isLoaded } = useTypedSelector((state: RootState) => state.item);
  const { fetchItemsAction } = useActions();

  useEffect(() => {
    fetchItemsAction();
  }, [fetchItemsAction]);

  return (
    <AppStyled>
      <SearchPanel />
      <LastSearch listOfThreeLastItems={listOfThreeLastItems} />
      {isLoaded ? (
              <Cards viewList={viewList}/>
      ) : (
              <PreLoader/>
      )}
    </AppStyled>
  );
};

export default App;
