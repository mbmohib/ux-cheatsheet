import styled from 'styled-components';

const HeaderStyle = styled.div`
  height: 100px;
  position: fixed;
  width: 100%;
  z-index: 10;
  border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.palette.background.paper};
`;

export default HeaderStyle;
