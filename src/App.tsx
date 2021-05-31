import React, { useEffect } from 'react';

import { LastSearch } from './components';
import { SearchPanel } from './components';
import { Cards } from './components';
import { PreLoader } from './components';
import { useActions } from './hooks/useAction';
import { useTypedSelector } from './hooks/useTypedSelector';

import { AppStyled } from './styled';

const App = () => {
  const { viewList, listOfThreeLastItems, isLoaded } = useTypedSelector(state => state.item);
  const { fetchItemsAction } = useActions()

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
