import anakinImg from "../../assets/imgs/anakin.jpg";
import anakinAvatarImg from "../../assets/imgs/anakin-avatar.webp";

import obiwanImg from "../../assets/imgs/obiwan.jpg";
import obiwanAvatarImg from "../../assets/imgs/obiwan-avatar.png";

import babyyodaImg from "../../assets/imgs/babyyoda.jpg";
import babyyodaAvatarImg from "../../assets/imgs/babyyoda-avatar.jpg";

export const SCENE_CHANGE_TIME = 500000;

export const SCENE_LIST = [
  {
    id: "ankn",
    frameText: "You Underestimate My Power!",
    frameImg: anakinImg,
    notificationData: {
      title: "Anakin Skywalker",
      body: "You underestimate my power!",
      icon: anakinAvatarImg,
    },
  },
  {
    id: "obwn",
    frameText: "Hello there!",
    frameImg: obiwanImg,
    notificationData: {
      title: "Obi-Wan Kenobi",
      body: "Hello there!",
      icon: obiwanAvatarImg,
    },
  },
  {
    id: "bbyd",
    frameText: "I'm hungry!",
    frameImg: babyyodaImg,
    notificationData: {
      title: "Grogu",
      body: "I'm hungry!",
      icon: babyyodaAvatarImg,
    },
  },
];
