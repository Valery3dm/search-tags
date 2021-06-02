import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useActions } from '../hooks/useAction';
import { useTypedSelector } from '../hooks/useTypedSelector';

import { RootState } from '../store/ducks';
import { ItemsState } from '../store/types/item';

import { LastItemSearch, ButtonStyled, LastThreeItemSearch } from '../styled';

interface Props {
  listOfThreeLastItems: string[];
}

const LastSearch: React.FC<Props> = ({ listOfThreeLastItems }) => {  
  const dispatch = useDispatch();
  const state = useTypedSelector<ItemsState>((state: RootState) => state.item);
  const { setViewList, setIsLoaded, setInputItemAction } = useActions();

  const onSetInputItemAction = (item: any) => new Promise(resolve =>
    resolve (
      dispatch(setInputItemAction(item))
    )
  )

  const onSetViewList = (item: any) => {
    const filteredList: any = state.itemsList.filter(
      (el: any) => el.tags.toLowerCase().includes(item.toLowerCase()) === true
    )
    return new Promise(resolve => {
      resolve (
        dispatch(setViewList(filteredList))
      )
    })
  }

  const onSetIsLoaded = () => {
    const valueOfLoad: any = true;
    return new Promise(resolve => {
      resolve (
        dispatch(setIsLoaded(valueOfLoad))
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
