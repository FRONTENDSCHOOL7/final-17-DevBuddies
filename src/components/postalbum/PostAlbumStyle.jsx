import styled from "styled-components";
import layer from "../../assets/images/iccon-img-layers.png";

// section 3

export const AlbumImg = styled.div`
  background: #fff;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  grid-gap: 10px;
  max-height: 500px;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  img {
    width: 228px;
    height: 228px;
  }
  div {
    margin-top: 16px;
  }
`;
