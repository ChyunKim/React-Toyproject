import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import styled from "styled-components";
import Nav from "./components/Nav";
import Write from "./components/Write";
import Setting from "./components/Setting";

const PostBtn = styled.button`
  width: 100px;
  height: 40px;
  float: right;
  margin: 60px 70px;
  border: none;
  font-family: "NanumGothic-Bold";
`;

const Board = () => {
  return (
    <>
      <Nav />
      <Link to="/write">
        <PostBtn>작성</PostBtn>
      </Link>
    </>
  );
};
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
