import Nav from "./Nav";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const ViewContainer = styled.div`
  height: 300px;
  margin: 50px auto 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 60px;
`;

const ViewTitile = styled.div`
  height: 50px;
  font-weight: bold;
`;

const ViewContent = styled.div`
  height: 220px;
`;

const Btn = styled.button`
  width: 100px;
  height: 40px;
  font-family: "NanumGothic-Bold";
  float: right;
  margin 20px ${(props) => props.rightmargin};
`;

const View = () => {
  const params = useParams();
  const postcon = useSelector((state) => state);

  const viewdetail = postcon.map((ele) => {
    if (params.id === ele.id.toString()) {
      return (
        <ViewContainer key={ele.id}>
          <ViewTitile>{ele.title}</ViewTitile>
          <ViewContent>{ele.content}</ViewContent>
          <strong>등록일자 :</strong> {ele.date} <strong>시간 </strong>
          {ele.hour}
          <Btn rightmargin="0">삭제</Btn>
          <Btn rightmargin="10px">수정 </Btn>
        </ViewContainer>
      );
    }
  });
  return (
    <>
      <Nav />
      {viewdetail}
    </>
  );
};

export default View;
