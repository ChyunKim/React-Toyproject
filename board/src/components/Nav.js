import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderDiv = styled.div`
  height: 40px;
  font-family: "Rajdhani";
  padding: 30px 50px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  color: ${(props) => props.font};
  background-color: ${(props) => props.skin};
`;

const NavList = styled.div`
  list-style: none;
  font-size: 22px;
  margin-left: auto;
`;

const ListItem = styled.li`
  display: inline-block;
  margin-left: 70px;
  :hover {
    transform: scale(1.15);
    transition: 0.2s;
  }
`;

const Nav = () => {
  const setting = useSelector((state) => state.setting);

  return (
    <>
      <HeaderDiv font={setting.font} skin={setting.skin}>
        <h1>BLOG</h1>
        <NavList>
          <Link to="/">
            <ListItem>Board</ListItem>
          </Link>
          <Link to="/write">
            <ListItem>Write</ListItem>
          </Link>
          <Link to="/setting">
            <ListItem>SETTING</ListItem>
          </Link>
        </NavList>
      </HeaderDiv>
    </>
  );
};
export default Nav;
