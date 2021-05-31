import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { LastSearch } from './components';
import { SearchPanel } from './components';
import { Cards } from './components';
import { PreLoader } from './components';

import { actionCreators } from './store/ducks/ngwidgets';

import { AppStyled } from './styled';

const App = () => {
  const dispatch = useDispatch();
  const viewList = useSelector(state => state.viewList);
  const listOfThreeLastItems = useSelector(state => state.listOfThreeLastItems);
  const isLoaded = useSelector(state => state.isLoaded);

  useEffect(() => {
    dispatch(actionCreators.fetchItemsAction());
  }, [dispatch]);

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
