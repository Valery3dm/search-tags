import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { ItemsState } from '../store/types/item';

import { LastItemSearch, ButtonStyled, LastThreeItemSearch } from '../styled';

interface Props {
  listOfThreeLastItems: string[];
}

const LastSearch: React.FC<Props> = ({ listOfThreeLastItems }) => {  
  const { setViewList, setIsLoaded, setInputItemAction } = useActions();
  const itemsList = useSelector((state: ItemsState) => state.itemsList)

  const onSetInputItemAction = (item: string) => new Promise(resolve =>
    resolve (
      setInputItemAction(item)
    )
  )

  const onSetViewList = (item: string) => {
    const filteredList: object[] = itemsList.filter(
      (el: any) => el.tags.toLowerCase().includes(item.toLowerCase()) === true
    )
    return new Promise(resolve => {
      resolve (
        setViewList(filteredList)
      )
    })
  }

  const onSetIsLoaded = () => {
    return new Promise(resolve => {
      resolve (
        setIsLoaded(true)
      ) 
    })
  
  }

  const handleSetTags = async (item: string)=> {
    return (
      await onSetViewList(item),
      await onSetInputItemAction(item),
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
      <div>Last search:</div>
      <div>
        <LastThreeItemSearch>{viewTags}</LastThreeItemSearch>
      </div>
    </LastItemSearch>
  )
};

export default LastSearch;
