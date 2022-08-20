import { createStore } from "redux";

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

const postreducer = (state = POST, action) => {
  switch (action.type) {
    case "UPLOAD":
      return (state = state.concat({
        id: action.id,
        title: action.title,
        content: action.content,
        date: action.date,
        hour: action.hour,
      }));
    default:
      return state;
  }
};

const store = createStore(postreducer);

export default store;