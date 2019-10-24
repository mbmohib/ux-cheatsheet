import React from 'react';
import styled, { css } from 'styled-components';
import { spacing, sizing } from '@material-ui/system';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

const ButtonWrapper = styled.div`
  ${props =>
    props.loading &&
    css`
      position: relative;
      display: flex;
      justify-content: ${({ justify }) => (justify ? justify : 'center')};
      align-items: center;
    `}
`;

const CircularProgressWrapper = styled(CircularProgress)`
  && {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -12px;
    margin-left: -12px;
  }
`;

const StyledButton = styled(({ minWidth, justify, loading, ...rest }) => (
  <Button {...rest} />
))`
  box-shadow: none;
  padding: 12px 30px 9px;
  min-width: ${props => props.minWidth + 'px'};

  ${({ size }) =>
    size === 'small' &&
    css`
      padding: 6px 18px 3px;
    `}

  ${({ variant }) =>
    variant === 'text' &&
    css`
      margin-left: -30px;
      display: inline-block;

      :after {
        content: '';
        display: block;
        width: 0;
        height: 2px;
        background: ${props => props.theme.palette.primary.main + '90'};
        transition: width 0.3s;
      }

      :hover {
        background-color: transparent !important;

        :after {
          width: 100%;
        }
      }
    `}

  ${sizing};
  ${spacing};
`;

const ButtonExtended = ({ justify, minWidth = 100, loading, ...rest }) => {
  return (
    <ButtonWrapper justify={justify} loading={loading}>
      <StyledButton minWidth={minWidth} loading={loading} {...rest} />
      {loading && <CircularProgressWrapper size={24} />}
    </ButtonWrapper>
  );
};

export default ButtonExtended;
