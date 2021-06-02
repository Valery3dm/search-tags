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
  const { setIsLoaded,
          setViewList,
          fetchItemsAction,
          setThreeLastAction,
          setInputItemAction } = useActions();
  const { itemsList, inputItem } = useSelector((state: ItemsState) => state)

  const onFetchItemsAction = () => new Promise(resolve => {
    resolve (
      fetchItemsAction()
    )
  });

  const onSetThreeLastAction = (inputItem: string) => new Promise(resolve => {
    inputItem !== "" ?
    resolve (
      setThreeLastAction(inputItem)
    ) : resolve (
      inputItem
    )
  });

  const onSetIsLoaded = (inputItem: string) => new Promise(resolve => {
    inputItem !== "" ?
      resolve (
        setIsLoaded(true)
      ) : resolve (
        setIsLoaded(false)
      )
  });

  const onSetViewList = () => {
    const filteredList: object[] = itemsList.filter(
      (item: any) => item.tags.toLowerCase().includes(inputItem.toLowerCase()) === true
    );

    return new Promise(resolve => {
      resolve (
        setViewList(filteredList)
      )
    })
  };

  const handleOnChangeInputItemAction = (inputItem: string) => setInputItemAction(inputItem)

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
