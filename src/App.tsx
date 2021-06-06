import React from 'react';
import { useSelector } from 'react-redux';

import { ItemsState } from './store/types/item';
import { LastSearch, PreLoader, Cards, SearchPanel } from './components';

import { AppStyled } from './styled';

const App: React.FC = () => {
 
  const {
    itemsList,
    isLoaded,
    listOfThreeLastItems
  } = useSelector((state: ItemsState) => state);

  return (
    <AppStyled>
      <SearchPanel />
      <LastSearch listOfThreeLastItems={listOfThreeLastItems} />
      {isLoaded ? (
        <Cards itemsList={itemsList}/>
      ) : (
        <PreLoader/>
      )}
    </AppStyled>
  );
};

export default App;
