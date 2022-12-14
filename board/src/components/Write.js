import Nav from "./Nav";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { useState } from "react";

const WriteContainer = styled.div`
  height: 300px;
  margin: 50px auto 0;
  background-color: white;
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 60px;
`;

const Titlewrap = styled.div`
  height: 20%;
  display: flex;
  align-items: center;
`;
const Title = styled.h3`
  width: 15%;
  margin: 0;
`;
const TitleInput = styled.input`
  width: 90%;
  height: 30px;
  margin-left: auto;
`;
const UploadBtn = styled.button`
  width: 100px;
  height: 40px;
  font-family: "NanumGothic-Bold";
  float: right;
  margin 20px 0;
`;

const Content = styled.textarea`
  width: 100%;
  height: 70%;
  font-size: 15px;
`;

const Write = () => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.post.map((ele) => ele.id));
  const post = useSelector((state) => state.post);
  const params = useParams();

  const [input, setInput] = useState({
    title: "",
    content: "",
  });

  const { title, content } = input;

  const eventInput = (e) => {
    const { value, name } = e.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  useEffect(() => {
    if (params.id) {
      post.forEach((ele) => {
        if (params.id === ele.id.toString()) {
          setInput({
            title: ele.title,
            content: ele.content,
          });
        }
      });
    }
  }, []);

  const eventUpload = (e) => {
    if (title && content) {
      if (!params.id) {
        dispatch({
          type: "UPLOAD",
          id: Number(id[id.length - 1]) + 1,
          title: title,
          content: content,
        });
      } else {
        dispatch({
          type: "MODIFY",
          id: params.id,
          title: title,
          content: content,
        });
      }
    } else {
      e.preventDefault();
      title || alert("게시글 제목은 필수!");
    }
  };

  return (
    <>
      <Nav />
      <WriteContainer>
        <Titlewrap>
          <Title>게시물 제목</Title>
          <TitleInput
            value={title}
            name="title"
            type="text"
            onChange={eventInput}
          ></TitleInput>
        </Titlewrap>
        <Content
          value={content}
          name="content"
          placeholder="게시글 내용 작성"
          onChange={eventInput}
        ></Content>
        <Link to="/">
          <UploadBtn onClick={eventUpload}>등록</UploadBtn>
        </Link>
      </WriteContainer>
    </>
  );
};
export default Write;
