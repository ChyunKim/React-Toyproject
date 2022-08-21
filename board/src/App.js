import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import Write from "./components/Write";
import View from "./components/View";
import Setting from "./components/Setting";
import Nav from "./components/Nav";
import styled from "styled-components";
import Post from "./components/Post";

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
      <Post header="게시글" />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Board />} />
        <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/view/:id" element={<View />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
