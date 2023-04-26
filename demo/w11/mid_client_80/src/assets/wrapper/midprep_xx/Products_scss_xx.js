import styled from 'styled-components';

const Wrapper = styled.div`
  .shop-page {
    padding-top: 7rem;
    width: 90%;
    margin: auto;
  }
  .collection-page {
    display: flex;
    flex-direction: column;

    .title {
      font-size: 38px;
      margin: 15px auto;
    }

    .items {
      // display: flex;
      // justify-content: flex-start;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }

  .collection-item {
    width: 22vw;
    display: flex;
    flex-direction: column;
    height: 300px;
    align-items: center;
    position: relative;
    margin-bottom: 25px;

    .image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center center;
      margin-bottom: 5px;
    }

    .custom-button {
      width: 80%;
      position: absolute;
      top: 205px;
      display: none;
      opacity: 0.7;
      padding: 10px 10px;
      font-size: 20px;
      font-weight: bold;

      &:hover {
        background-color: #000;
        color: white;
      }
    }

    &:hover {
      .image {
        opacity: 0.8;
      }

      .custom-button {
        opacity: 0.85;
        display: block;
      }
    }
  }

  .collection-footer {
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .collection-overview {
    display: flex;
    flex-direction: column;
  }

  .collection-preview {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;

    .title {
      font-size: 20px;
      margin-bottom: 25px;
    }

    .preview {
      // display: flex;
      // justify-content: space-around;
      // flex-wrap: wrap;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
    }
  }
`;

export default Wrapper;
