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
      
      &__item {
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
        color: #2B3172;
      }
      
      &__link {
        cursor: pointer;
      }
      
      &__img {
        width: 337.75px;
        height: 134.71px;
      }
    }
`;

export default HeaderWrapper;
