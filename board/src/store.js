import { combineReducers, createStore } from "redux";

const POST = [
  {
    id: 1,
    title:
      "오사카여행 [1일차] : 라피트 열차 / 에어비앤비 / 도톤보리 / 이치란라멘",
    content: "너무 즐거운 여행 1일차 ^0^",
    date: "2017.02.19",
    hour: "23:48",
  },
  {
    id: 2,
    title: "오사카여행 [2일차] : 오사카성 / 햅파이브 / 우메다 공중정원",
    content: "너무 즐거운 여행 2일차 ^0^",
    date: "2017.02.20",
    hour: "20:15",
  },
  {
    id: 3,
    title: "오사카여행 [3일차] : 교토여행 / 청수사 / 기모노",
    content: "너무 즐거운 여행 3일차 ^0^",
    date: "2017.02.21",
    hour: "14:23",
  },
  {
    id: 4,
    title: "오사카여행 [4일차] : 유니버셜 스튜디오 재팬",
    content: "너무 즐거운 여행 4일차 ^0^",
    date: "2017.02.22",
    hour: "13:09",
  },
  {
    id: 5,
    title: "과거회상",
    content: "어려지고싶당",
    date: "2022.05.24",
    hour: "15:27",
  },
];

const SETCOLOR = {
  font: "black",
  skin: "#f6f6f6",
};

let now = new Date();
let year = now.getFullYear();
let month = now.getMonth() + 1;
let day = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();

month = month < 10 ? `0${month}` : { month };

let date = `${year}.${month}.${day}`;
let hour = `${hours}:${minutes}`;

const postreducer = (state = POST, action) => {
  switch (action.type) {
    case "UPLOAD":
      return (state = [
        ...state,
        {
          id: action.id,
          title: action.title,
          content: action.title,
          date: date,
          hour: hour,
        },
      ]);

    case "MODIFY":
      return state
        .filter((ele) => ele.id.toString() !== action.id)
        .concat([
          {
            id: action.id,
            title: action.title,
            content: action.content,
            date: date,
            hour: hour,
          },
        ]);
    case "DELETE":
      return state.filter((ele) => ele.id.toString() !== action.id);
    default:
      return state;
  }
};

const setreducer = (state = SETCOLOR, action) => {
  switch (action.type) {
    case "FONT-CHANGE":
      return {
        ...state,
        font: action.font,
      };
    case "SKIN-CHANGE":
      return {
        ...state,
        skin: action.skin,
      };
    default:
      return state;
  }
};
const store = createStore(
  combineReducers({
    post: postreducer,
    setting: setreducer,
  })
);

export default store;
