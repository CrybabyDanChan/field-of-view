import styled from 'styled-components';

const ResultWrapper = styled.div`
  width: 100%;
  height: 100%;
  
    .result {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      
      &__word {
        font-style: normal;
        font-weight: 900;
        font-size: 60px;
        line-height: 70px;
        color: #371548;
      }
    }
`;

export default ResultWrapper;
