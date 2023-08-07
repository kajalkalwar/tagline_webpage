import {
  TabInterface,
  CardListInterface,
  TestimonialsInterface,
} from "./interface";
import dollar from "../Assets/dollar.png";
import profile1 from "../Assets/profile1.png";
import profile2 from "../Assets/profile2.png";
import profile3 from "../Assets/profile3.png";
import profile4 from "../Assets/profile4.png";
import HomeIcon from "@mui/icons-material/Home";
import profilePhoto from "../Assets/profilePhoto.png";
import profilePhoto2 from "../Assets/profilePhoto2.png";
import profilePhoto3 from "../Assets/profilePhoto3.png";
export const tabContent: TabInterface[] = [
  {
    id: "1",
    label: <HomeIcon />,
    title: "Tagline Content Line Goes Here",
    para:
      "Company  provides lenders, businesses with actionable credit intelligence on private entities they need to improve trust and increase their lending and trading activity.",
    pic1: dollar,
    pic2: profile1,
    btn: "View Solutions",
  },
  {
    id: "2",
    label: "CEea elit quis",
    title: "Tagline Content Are Available Here",
    para:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam? Sunt modi, atque nisi harum error nostrum veritatis ea rerum repellendus perspiciatis.Sunt modi, atque nisi harum error nostrum veritatis ea rerum repellendus perspiciatis.",
    pic1: dollar,
    pic2: profile2,
    btn: "View Solutions",
  },
  {
    id: "3",
    label: "Eea elit quis",
    title: "Tagline Content ",
    para:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt modi, atque nisi harum error nostrum veritatis ea rerum repellendus perspiciatis.",
    pic1: dollar,
    pic2: profile3,
    btn: "View Solutions",
  },
  {
    id: "4",
    label: "Eea elit quis",
    title: "Tagline Content Line Are Here",
    para:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur recusandae, rem dolorum eos doloremque hic.",
    pic1: dollar,
    pic2: profile4,
    btn: "View Solutions",
  },
];

export const CardData: CardListInterface[] = [
  {
    id: "1",
    paragraph:
      "Eea elit quis exercitation culpaea elit quis exercitation culpaea quis exercitation culpa",
    btn: "Read More",
    color: "#077F8D",
  },
  {
    id: "2",
    paragraph:
      "Company: ea elit quis exercitation culpa ea elit quis culpa",
    btn: "Read More",
    color: "#A74170",
  },
  {
    id: "3",
    paragraph:
      "Eea elit quis exercitation culpaea elit quis exercitation culpaea ",
    btn: "Read More",
    color: "#077F8D",
  },
  {
    id: "4",
    paragraph:
      "Eea elit quis exercitation culpaea elit quis exercitation culpaea elit quis exercitation culpa",
    btn: "Read More",
    color: " #333A42",
  },
  {
    id: "5",
    paragraph:
      "Eea elit quis exercitation culpaea elit quis exercitation culpaea quis exercitation .",
    btn: "Read More",
    color: "#077F8D",
  },
  {
    id: "6",
    paragraph:
      "Company: ea elit quis exercitation culpa ea elit quis exercitation culpa",
    btn: "Read More",
    color: "#A74170",
  },
  {
    id: "7",
    paragraph:
      "Eea elit quis exercitation culpaea elit quis exercitation culpaea elit quis exercitation culpa",
    btn: "Read More",
    color: "#077F8D",
  },
  {
    id: "8",
    paragraph:
      "Eea elit quis exercitation culpaea exercitation culpaea elit quis exercitation culpa",
    btn: "Read More",
    color: " #333A42",
  },
];

export const TestimonialsData: TestimonialsInterface[] = [
  {
    id: "1",
    photo: profilePhoto,
    name: "- Lorem ipsum",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget non purus cursus mauris et nullam lorem. Facilisi nisl, aliquam dui suspendisse id vitae in. Aenean elementum ipsum viverra purus.",
  },
  {
    id: "2",
    photo: profilePhoto2,
    name: "- Lorem ipsum",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget non purus cursus mauris et nullam lorem. Facilisi nisl.”",
  },
  {
    id: "3",
    photo: profilePhoto,
    name: "- Lorem ipsum",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget non purus cursus mauris et nullam lorem. Facilisi nisl, aliquam dui suspendisse id vitae in.",
  },
  {
    id: "4",
    photo: profilePhoto3,
    name: "- Lorem ipsum",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames elementum urna, libero, et aliquam convallis quis. Urna sagittis, eget non purus cursus mauris et nullam lorem. Facilisi nisl,  Aenean elementum ipsum viverra purus.",
  },
  {
    id: "5",
    photo: profilePhoto,
    name: "- Lorem ipsum",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Urna sagittis, eget non purus cursus mauris et nullam lorem. Facilisi nisl, aliquam dui suspendisse id vitae in. Aenean elementum ipsum viverra purus.",
  },
  {
    id: "5",
    photo: profilePhoto2,
    name: "- Lorem ipsum",
    para:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fames elementum urna, libero, et aliquam convallis quis. Urna sagittis, Facilisi nisl, aliquam dui suspendisse id vitae in. Aenean elementum ipsum viverra purus.",
  },
];
