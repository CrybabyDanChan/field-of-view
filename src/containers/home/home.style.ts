import styled from 'styled-components';

const HomeWrapper = styled.div`
    .home {
      display: grid;
      grid-template: repeat(3, 1fr) / repeat(2, 1fr);
      gap: 40px;
      justify-items: center;
      align-items: center;
      
      &__item {
        width: 100%;
        height: 100%;
      }
    }
`;

export default HomeWrapper;
