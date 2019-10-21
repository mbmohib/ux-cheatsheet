import styled, { css } from 'styled-components';
import { palette, spacing, sizing } from '@material-ui/system';

const Wrapper = styled.div`
  ${props =>
    props.flex &&
    css`
      display: flex;
      flex-wrap: ${props => (props.noWrap ? 'nowrap' : 'wrap')};
      justify-content: ${props =>
        props.justify ? props.justify : 'flex-start'};
      flex-direction: ${props => (props.direction ? props.direction : 'row')};
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

  ${spacing};
  ${palette};
  ${sizing};
`;

export default Wrapper;
