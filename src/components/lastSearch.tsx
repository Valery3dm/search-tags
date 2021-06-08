import React from 'react';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useAction';

import { LastItemSearch, ButtonStyled, LastThreeItemSearch } from '../styled';

interface Props {
  listOfThreeLastItems: string[];
};

const LastSearch: React.FC<Props> = ({ listOfThreeLastItems }) => {  
  const {
    fetchItemsAction,
    setIsLoaded,
    setInputItemAction,
    setEmtyItemList
  } = useActions();

  const onSetInputItemAction = (item: string) => new Promise(resolve =>
    resolve (
      setInputItemAction(item)
    )
  );

  const onSetIsLoaded = () => {
    return new Promise(resolve => {
      resolve (
        setIsLoaded(true)
      ) 
    })
  };

  const onFetchItemsAction = () => new Promise(resolve => resolve(fetchItemsAction()));

  const onSetEmtyItemList = (arr: any[]) => new Promise(resolve => resolve(setEmtyItemList(arr)));

  const handleSetTags = async (item: string)=> {
    return (
      await onSetInputItemAction(item),
      await onSetEmtyItemList([]),
      await onFetchItemsAction(),
      await onSetIsLoaded()
    )
  };

  const viewTags = listOfThreeLastItems.map((item: string, idx: number) => (
    <li key={idx}>
      <Link to={`/${item}`}>
        <ButtonStyled variant="outline-dark" onClick={() => handleSetTags(item)}>
            {item}
        </ButtonStyled>
      </Link>
    </li>
  ));

  return (
    <LastItemSearch>
      <div>
        <LastThreeItemSearch>{viewTags}</LastThreeItemSearch>
      </div>
    </LastItemSearch>
  );
};

export default LastSearch;
