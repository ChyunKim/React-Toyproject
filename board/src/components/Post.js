import styled from "styled-components";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const ListContainer = styled.div`
  height: 250px;
  margin: 60px;
  padding-bottom: 30px;
`;

const ListUl = styled.ul`
  list-style: none;
  padding: 10px;
`;

const ListItem = styled.li`
  margin: 10px 0;
`;

const Post = (props) => {
  const [post, setPost] = useState([]);
  const list = useSelector((state) => state);

  useEffect(() => {
    setPost(list);
  }, [list]);

  const postList = post.map((ele) => {
    return (
      <Link to={`/view/${ele.id}`} key={ele.id}>
        <ListItem>
          {ele.date} || {ele.title}
        </ListItem>
      </Link>
    );
  });
  return (
    <ListContainer>
      <h4>{props.header}</h4>
      <ListUl>{postList.reverse()}</ListUl>
    </ListContainer>
  );
};

export default Post;
