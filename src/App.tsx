import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ItemsState } from './store/types/item';
import { LastSearch, PreLoader, Cards, SearchPanel } from './components';
import { useActions } from './hooks/useAction';

import { AppStyled } from './styled';

const App: React.FC = () => {
 
  const {
    itemsList,
    isLoaded,
    listOfThreeLastItems
  } = useSelector((state: ItemsState) => state);

  const { fetchItemsAction, setPage } = useActions();

  let { page } = useSelector((state: ItemsState) => state);

  const handlerPage = () => new Promise(res => res(setPage(++page)));
  const handleFetch = () => new Promise(res => res(fetchItemsAction()))

  useEffect(() => {
    const scrollHandler = async (e: any) => {
      if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) {
        await handlerPage();
        await handleFetch();
      }
    }
    document.addEventListener('scroll', scrollHandler);
    return function() {
      document.removeEventListener('scroll', scrollHandler);
    }
  },[]);

  

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
