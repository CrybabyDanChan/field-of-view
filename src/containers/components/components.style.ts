import styled from 'styled-components';

const ComponentsWrapper = styled.div`
    .components {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      &__title {
        margin: 0;
        font-style: normal;
        font-weight: bold;
        font-size: 64px;
        line-height: 75px;
      }
    }
`;

export default ComponentsWrapper;
