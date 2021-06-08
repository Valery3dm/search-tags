import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';

import { SearchPanelStyle } from '../styled';
import { ItemsState } from '../store/types/item';
import { useActions } from '../hooks/useAction';

const SearchPanel: React.FC = () => {
  const {
    setIsLoaded,
    fetchItemsAction,
    setThreeLastAction,
    setInputItemAction,
    setEmtyItemList
  } = useActions();

  const { inputItem } = useSelector((state: ItemsState) => state);

  const onFetchItemsAction = () => new Promise(resolve => resolve(fetchItemsAction()));

  const onSetThreeLastAction = (inputItem: string) => new Promise(resolve => {
    inputItem !== '' ?
    resolve (
      setThreeLastAction(inputItem)
    ) : resolve (
      inputItem
    )
  });

  const onSetIsLoaded = (inputItem: string) => new Promise(resolve => {
    inputItem !== '' ?
      resolve (
        setIsLoaded(true)
      ) : resolve (
        setIsLoaded(false)
      )
  });

  const handleOnChangeInputItemAction = (inputItem: string) => setInputItemAction(inputItem);
  
  const onSetEmtyItemList = (arr: any[]) => new Promise(resolve => resolve(setEmtyItemList(arr)));

  const handleSetTags = async (inputItem: string) => {
    await onSetEmtyItemList([]);
    await onFetchItemsAction();
    await onSetThreeLastAction(inputItem);
    await onSetIsLoaded(inputItem);
  };

  return (
    <SearchPanelStyle>
      <FormControl
        placeholder="type your tag here"
        aria-label="Recipient's username"
        aria-describedby="basic-addon2"
        onChange={e => handleOnChangeInputItemAction(e.target.value)}
        onKeyPress={(e: any) => e.key === 'Enter' && handleSetTags(inputItem)}
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
