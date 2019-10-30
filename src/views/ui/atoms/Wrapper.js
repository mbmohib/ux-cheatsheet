import styled, { css } from 'styled-components';
import { palette, spacing, sizing, borders } from '@material-ui/system';

const Wrapper = styled.div`
  transition: all 0.3s;

  ${props =>
    props.flex &&
    css`
      display: flex;
      flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
      justify-content: ${props =>
        props.justify ? props.justify : 'flex-start'};
      flex-direction: ${props => (props.direction ? props.direction : 'row')};
    `}
  
  ${({ grow }) =>
    grow &&
    css`
      flex-grow: 1;
    `}

  ${props =>
    props.flex && props.align
      ? css`
          align-items: ${props.align};
        `
      : props.align
      ? css`
          text-align: ${props.align};
        `
      : ''};

  ${props =>
    props.bgImage &&
    css`
      background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3)),
        url(${props.bgImage});
      background-size: cover;
      background-repeat: no-repeat;
    `}

    ${props =>
      props.shadow && props.shadow === 1
        ? css`
            box-shadow: 0 8px 16px 0 rgba(51, 51, 51, 0.08);
          `
        : ''}

    ${props =>
      props.hover === 1 &&
      css`
        cursor: pointer;
        :hover {
          box-shadow: 0 8px 16px 0 rgba(51, 51, 51, 0.08);
        }
      `}

    ${props =>
      props.hover === 2 &&
      css`
        cursor: pointer;
        :hover {
          box-shadow: 0 16px 32px 0 rgba(51, 51, 51, 0.24);
        }
      `}

  ${spacing};
  ${palette};
  ${sizing};
  ${borders};
`;

export default Wrapper;
