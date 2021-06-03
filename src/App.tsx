import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useActions } from './hooks/useAction';

import { LastSearch } from './components';
import { SearchPanel } from './components';
import { Cards } from './components';
import { PreLoader } from './components';
import { ItemsState } from './store/types/item';

import { AppStyled } from './styled';

const App: React.FC = () => {
 
  const { viewList,
          isLoaded,
          listOfThreeLastItems } = useSelector((state: ItemsState) => state);

  const { fetchItemsAction } = useActions();

  useEffect(() => {
    fetchItemsAction();
  },[]);

  return (
    <AppStyled>
      <SearchPanel />
      <div className="app">load</div>
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
