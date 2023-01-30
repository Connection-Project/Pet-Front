import styled from "styled-components";
import Board from "../components/Board";

const BoderBox = styled.div`
  /* border: 1px solid rgb(209 213 219); */
  box-shadow: 2px 2px 2px rgb(209 213 219);
  background-color: white;
  border-radius: 5px;
  color: rgb(107 114 128);
  font-size: 13px;
  padding: 13px 0;
  width: 18%;
  text-align: center;
  margin-right: 12px;
  &:last-child {
    margin: 0;
  }
`;

const Post = styled.div`
  border: 1px solid gray;
  width: 50%;
  margin-top: 20px;
  background-color: white;
`;

const Solid = styled.div`
  border-top: 1px solid gray;
  &:first-child {
    border-right: 1px solid gray;
  }
`;

const Comunity = () => {
  return (
    <div className="pt-16 flex flex-col items-center bg-gray-100">
      <div className="flex w-full justify-center mt-5 mb-5">
        <BoderBox>일상생활</BoderBox>
        <BoderBox>정보공유</BoderBox>
        <BoderBox>궁금해요</BoderBox>
      </div>
      <Board />
      <Board />
      <Board />
      <Board />
    </div>
  );
};

export default Comunity;
