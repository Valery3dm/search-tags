import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { actionCreators } from '../store/ducks/ngwidgets';

import { SearchPanelStyle } from '../styled';

const SearchPanel = () => {
  const dispatch = useDispatch();
  const inputItem = useSelector(state => state.inputItem);
  const itemsList = useSelector(state => state.itemsList);

  const fetchItemsAction = () => new Promise(resolve => {
    resolve (
      dispatch(actionCreators.fetchItemsAction())
    )
  });

  const setThreeLastAction = inputItem => new Promise(resolve => {
    inputItem !== "" ?
    resolve (
      dispatch(actionCreators.setThreeLastAction(inputItem))
    ) : resolve (
      inputItem
    )
  });

  const setIsLoaded = (inputItem) => new Promise(resolve => {
    inputItem !== "" ?
      resolve (
        dispatch(actionCreators.setIsLoaded(true))
      ) : resolve (
        dispatch(actionCreators.setIsLoaded(false))
      )
  });

  const setViewList = () => {
    const filteredList = itemsList.filter(
      item => item.tags.toLowerCase().includes(inputItem.toLowerCase()) === true
    );

    return new Promise(resolve => {
      resolve (
        dispatch(actionCreators.setViewList(filteredList))
      )
    })
  };

  const handleOnChangeInputItemAction = inputItem => dispatch(
    actionCreators.setInputItemAction(inputItem)
  );

  const handleSetTags = async inputItem => {
    const fetchItems = await fetchItemsAction();
    const setThreeLast = await setThreeLastAction(inputItem);
    const isLoaded = await setIsLoaded(inputItem);
    const viewList = await setViewList();

    return (
      fetchItems,
      setThreeLast,
      viewList,
      isLoaded
    )
  };

  return (
    <SearchPanelStyle>
      <FormControl
        placeholder="type your tag here"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => handleOnChangeInputItemAction(e.target.value)}
        value={inputItem}
      />
      <InputGroup.Append>
        <Link to={`/${inputItem}`}>
            <Button
              variant="outline-secondary"
              onClick={() => handleSetTags(inputItem)}>
                Search
            </Button>
          </Link>
      </InputGroup.Append>
    </SearchPanelStyle>
  )
};

export default SearchPanel;
