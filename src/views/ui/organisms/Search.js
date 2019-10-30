import React from 'react';
import styled from 'styled-components';
import { SearchIcon } from 'assets/icons';
import { useTheme } from '@material-ui/core/styles';

const SearchWrapper = styled.div`
  position: relative;

  svg {
    position: absolute;
    top: 12px;
    left: 12px;
    z-index: 900;
  }
`;

const SearchInput = styled.input`
  border: 0;
  position: relative;
  font-size: 1.06rem;
  font-weight: 500;
  padding: 14px 12px 14px 47px;
  color: #333333;
  background-color: #ffffff;
  letter-spacing: -0.1px;
  text-align: left;
  color: #333333;
  line-height: 1.25;
  width: 100%;
  height: 100%;
  margin: 0;
  transition: 0.15s linear;
  border: 1px solid #ddd;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  appearance: none;
`;

const Search = () => {
  const theme = useTheme();

  return (
    <SearchWrapper>
      <SearchIcon fill={theme.palette.secondary.main} />
      <SearchInput type="text" placeholder="Search..." disabled />
    </SearchWrapper>
  );
};

export default Search;
