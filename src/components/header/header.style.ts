import styled from 'styled-components';

const HeaderWrapper = styled.div`
    .header {
      width: 100%;
      display: grid;
      grid-auto-columns: 1fr;
      justify-content: space-between;
      justify-items: center;
      align-items: center;
      grid-auto-flow: column;
      
      &__menu {
        display: flex;
        justify-content: space-between;
        align-items: center;
        column-gap: 15px;
        
        a {
          text-decoration: none;
        }
      }
    }
`;

export default HeaderWrapper;
