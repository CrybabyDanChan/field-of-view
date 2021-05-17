import styled from 'styled-components';

const AppLayoutWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  .app-layout {
      width: 100%;
      height: 100%;
      display: grid;
      grid-template-rows: auto 1fr;
      row-gap: 150px;
      padding: 86px 54px;
    }
`;

export default AppLayoutWrapper;
