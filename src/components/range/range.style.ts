import styled from 'styled-components';

const RangeWrapper = styled.div`
  width: 100%;
  height: 100%;

  .range {
    display: block;
    width: 100%;
    height: 100%;
    padding: 32px 84px;
    background: #FFFFFF;
    box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 48.2498px;

    &__title {
      font-style: normal;
      font-weight: bold;
      font-size: 48.2498px;
      line-height: 57px;
      text-align: center;
    }

    &__option {
      &-container {
        margin-top: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      &-item {
        font-style: normal;
        font-weight: bold;
        font-size: 38.5998px;
        line-height: 45px;
        cursor: pointer;
      }
    }

    &__input {
      width: 100%;
      height: 23px;
      margin-top: 26px;
      -webkit-appearance: none;

      &:focus {
        outline: none;
      }

      &::-webkit-slider-runnable-track {
        height: 23px;
        background: #FDD207;
        border-radius: 15px;
      }

      &::-webkit-slider-thumb {
        width: 44px;
        height: 44px;
        border-radius: 50%;
        -webkit-appearance: none;
        background: #000000;
        cursor: pointer;
        border: 12.5px solid #FDD207;
        margin-top: -8px;
      }
    }
  }
`;

export default RangeWrapper;
