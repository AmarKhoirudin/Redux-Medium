import {CHANGED_NAME, GET_DATA } from "../types";


const initialState = {
  data: [
    {
      title: "Develop a To-Do List APP in Vanilla Javascript",
      deskripsi:
        "Today we will be building a very simple To-Do List app using pure javascript, you can check it out live here. A good practice exercise for…",
      gambar:
        "https://miro.medium.com/fit/c/1366/638/1*VTKsiByHMcWDIxpFawp4fg.png",
      pembuat: "Dominic Fraser",
      id: 1
    },
    {
      title:
        "How we built a survey app from scratch using ReactJS at SnackNation (1/2)",
      deskripsi:
        "“Where do I start?…” This is probably the most recurrent question when it comes to implementing a react project. Components are cool to…",
      gambar: "https://miro.medium.com/max/5495/1*qBTI5LXEqE0CeEqrcET5Fg.jpeg",
      pembuat: "Kori D. Miller",
      id: 2
    },
    {
      title: "Why you should use REACT native to program your app?",
      deskripsi:
        "At first, like most people, I was skeptical of using Facebook’s React . Demos of the extension of React Java Script programming language…",
      gambar: "https://miro.medium.com/max/1000/1*GkR93AAlILkmE_3QQf88Ug.png",
      pembuat: "Christina cheeseman",
      id: 3
    },
    {
      title: "Let’s build a full stack MongoDB, React, Node and Express (MERN) app",
      deskripsi: "Let’s learn how to connect a database, get and post data and return it all to our browser!",
      gambar: "https://miro.medium.com/max/699/1*pMUHe42kIC3wNbdfu8oeFw.png",
      pembuat: "Jelo Rivera",
      id: 4
    },
    {
      title: "Statistical Sentiment Analysis for Survey Data using Python",
      deskripsi: "Statistical Sentiment Analysis for Survey Data using Python",
      gambar: "https://miro.medium.com/fit/c/7360/4912/0*u2vcer-FNjwxxnJ2",
      pembuat: "Dilan Jayasekara",
      id: 5
    }
  ]
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGED_NAME:
      return { ...state, data: action.payload }
      case GET_DATA :
        return {}
    default:
      return state;
  }
};
