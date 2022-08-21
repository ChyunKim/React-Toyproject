import Nav from "./Nav";
import styled from "styled-components";
import { useDispatch } from "react-redux";

const ColorBox = styled.div`
  height: 200px;
  margin: 10px 60px;
  display: felx;
  align-items: center;
`;
const ChooseTitle = styled.h3`
  width: 100px;
`;
const Boxwrap = styled.div`
  margin: 20px;
  text-align: center;
`;
const BoxColor = styled.div`
  width: 55px;
  height: 55px;
  background-color: ${(props) => {
    return props.color;
  }};
`;

const SETTING = () => {
  const dispatch = useDispatch();

  const ChageFontColor = (e) => {
    const color = e.target.id;
    dispatch({ type: "FONT-CHANGE", font: color });
  };

  const ChageSkinColor = (e) => {
    const color = e.target.id;
    dispatch({ type: "SKIN-CHANGE", skin: color });
  };
  return (
    <>
      <Nav />
      <ColorBox>
        <ChooseTitle>Choose Logo Color</ChooseTitle>
        <Boxwrap>
          <BoxColor id="red" color="red" onClick={ChageFontColor} />
          RED
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Blue" color="Blue" onClick={ChageFontColor} />
          Blue
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Green" color="Green" onClick={ChageFontColor} />
          Green
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Orange" color="Orange" onClick={ChageFontColor} />
          Orange
        </Boxwrap>
        <Boxwrap>
          <BoxColor id=" HotPink" color="HotPink" onClick={ChageFontColor} />
          HotPink
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="purple" color="purple" onClick={ChageFontColor} />
          Purple
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Brown" color="Brown" onClick={ChageFontColor} />
          Brown
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Black" color="Black" onClick={ChageFontColor} />
          Black
        </Boxwrap>
      </ColorBox>
      <ColorBox>
        <ChooseTitle>Navbar Skin Color</ChooseTitle>
        <Boxwrap>
          <BoxColor id="red" color="red" onClick={ChageSkinColor} />
          RED
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Blue" color="Blue" onClick={ChageSkinColor} />
          Blue
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Green" color="Green" onClick={ChageSkinColor} />
          Green
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Orange" color="Orange" onClick={ChageSkinColor} />
          Orange
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="HotPink" color="HotPink" onClick={ChageSkinColor} />
          HotPink
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="purple" color="purple" onClick={ChageSkinColor} />
          Purple
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="Brown" color="Brown" onClick={ChageSkinColor} />
          Brown
        </Boxwrap>
        <Boxwrap>
          <BoxColor id="#f6f6f6" color="WHITE" onClick={ChageSkinColor} />
          NONE
        </Boxwrap>
      </ColorBox>
    </>
  );
};

export default SETTING;
