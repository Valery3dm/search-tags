import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { SearchPanelStyle } from '../styled';
import { RootState } from '../store/ducks';
import { ItemsState } from '../store/types/item';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

const SearchPanel: React.FC = () => {
  const dispatch = useDispatch();
  const state = useTypedSelector<ItemsState>((state: RootState) => state.item);
  const { setViewList, setIsLoaded, setInputItemAction, fetchItemsAction, setThreeLastAction } = useActions();

  const onFetchItemsAction = () => new Promise(resolve => {
    resolve (
      dispatch(fetchItemsAction())
    )
  });

  const onSetThreeLastAction = (inputItem: any) => new Promise(resolve => {
    inputItem !== "" ?
    resolve (
      dispatch(setThreeLastAction(inputItem))
    ) : resolve (
      inputItem
    )
  });

  const onSetIsLoaded = (inputItem: any) => new Promise(resolve => {
    const valueOfLoadSuccess: any = true;
    const valueOfLoadFail: any = false;
    inputItem !== "" ?
      resolve (
        dispatch(setIsLoaded(valueOfLoadSuccess))
      ) : resolve (
        dispatch(setIsLoaded(valueOfLoadFail))
      )
  });

  const onSetViewList = () => {
    const filteredList: any = state.itemsList.filter(
      (item: any) => item.tags.toLowerCase().includes(state?.inputItem.toLowerCase()) === true
    );

    return new Promise(resolve => {
      resolve (
        dispatch(setViewList(filteredList))
      )
    })
  };

  const handleOnChangeInputItemAction = (inputItem: any) => dispatch(
    setInputItemAction(inputItem)
  );

  const handleSetTags = async (inputItem: string) => {
    await onFetchItemsAction();
    await onSetThreeLastAction(inputItem);
    await onSetIsLoaded(inputItem);
    await onSetViewList();
  };

  return (
    <SearchPanelStyle>
      <FormControl
        placeholder="type your tag here"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => handleOnChangeInputItemAction(e.target.value)}
        value={state?.inputItem}
      />
      <InputGroup.Append>
        <Link to={`/${state?.inputItem}`}>
            <Button
              variant="outline-secondary"
              onClick={() => handleSetTags(state?.inputItem)}>
                Search
            </Button>
          </Link>
      </InputGroup.Append>
    </SearchPanelStyle>
  )
};

export default SearchPanel;
