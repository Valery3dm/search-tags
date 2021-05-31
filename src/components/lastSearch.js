import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actionCreators from '../store/actionCreators/item';

import { LastItemSearch, ButtonStyled, LastThreeItemSearch } from '../styled';

const LastSearch = ({ listOfThreeLastItems }) => {

  const dispatch = useDispatch();
  const itemsList = useSelector(state => state.itemsList);

  const setInputItemAction = item => new Promise(resolve =>
    resolve (
      dispatch(actionCreators.setInputItemAction(item))
    )
  )

  const setViewList = item => {
    const filteredList = itemsList.filter(
      (el) => el.tags.toLowerCase().includes(item.toLowerCase()) === true
    )
    return new Promise(resolve => {
      resolve (
        dispatch(actionCreators.setViewList(filteredList))
      )
    })
  }

  const setIsLoaded = () => new Promise(resolve => {
      resolve (
        dispatch(actionCreators.setIsLoaded(true))
      ) 
  });
  
  const handleSetTags = async item => {
    return (
      await setViewList(item),
      await setInputItemAction(item),
      await setIsLoaded()
    )
  };

  const viewTags = listOfThreeLastItems.map((item, idx) => (
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
