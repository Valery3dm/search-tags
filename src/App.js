import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LastSearch } from './components';
import { SearchPanel } from './components';
import { Cards } from './components';
import { PreLoader } from './components';

import { duck } from './store/ducks/widgets';

import { AppStyled } from './styled';

const App = () => {
  const dispatch = useDispatch();
  const itemsList = useSelector(state => state.itemsList);
  const listOfThreeLastItems = useSelector(state => state.listOfThreeLastItems);
  const searchedItem = useSelector(state => state.searchedItem);
  const isLoaded = useSelector(state => state.isLoaded);

  useEffect(() => {
    const fetchItemsAction = () => dispatch(duck.actionCreators.fetchItemsAction());
    const setIsLoaded = () => dispatch(duck.actionCreators.setIsLoaded(true));
    fetchItemsAction();
    setIsLoaded();
  }, [dispatch]);

  const viewList = searchedItem.length !== 0 ? searchedItem : itemsList

  return (
    <AppStyled>
      <SearchPanel />
      <LastSearch listOfThreeLastItems={listOfThreeLastItems} />
      {isLoaded ? (
              <Cards viewList={viewList}/>
      ) : (
              <PreLoader />
      )}
    </AppStyled>
  );
};

export default App;
