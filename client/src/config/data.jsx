import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillYoutube,
} from "react-icons/ai";
import { FaBloggerB, FaFacebookSquare } from "react-icons/fa";
import { RiUser3Fill } from "react-icons/ri";
import { SiBuymeacoffee } from "react-icons/si";

//for hero page data
export const data = {
  links: {
    github: {
      name: "github",
      url: "https://github.com/utsavbhattarai007",
      label: "github.com/",
    },
    linkedin: {
      name: "linkedin",
      url: "https://www.linkedin.com/in/utsavbhattarai007/",
      label: "linkedin.com/in/",
    },
    twitter: {
      name: "twitter",
      url: "https://twitter.com/utsavbhattarai7",
      label: "twitter.com/",
    },
    instagram: {
      name: "instagram",
      url: "https://www.instagram.com/utsavbhattarai007/",
      label: "instagram.com/",
    },
    youtube: {
      name: "youtube",
      url: "",
      label: "youtube.com/",
    },
    portfolio: {
      name: "portfolio",
      url: "https://utsavbhattarai.info.np",
      label: "Portfolio",
    },
    buymeacoffee: {
      name: "buymeacoffee",
      url: "https://www.buymeacoffee.com/utsavbhattarai",
      label: "buymeacoffee.com/",
    },
    blog: {
      name: "blog",
      url: "https://blog.utsavbhattarai.info.np",
      label: "Blog",
    },
  },
};

export const user = {
  name: "utsavbhattarai",
  links: [
    {
      name: "github",
      url: "https://github.com/utsavbhattarai007",
      label: "github.com/",
    },
    {
      name: "linkedin",
      url: "https://www.linkedin.com/in/utsavbhattarai007/",
      label: "linkedin.com/in/",
    },
    {
      name: "twitter",
      url: "https://twitter.com/utsavbhattarai7",
      label: "twitter.com/",
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/utsavbhattarai007/",
      label: "instagram.com/",
    },
    {
      name: "youtube",
      url: "",
      label: "youtube.com/",
    },
    {
      name: "portfolio",
      url: "https://utsavbhattarai.info.np",
      label: "Portfolio",
    },
    {
      name: "facebook",
      url: "https://facebook.com/utsavbhattarai007",
      label: "Facebook",
    },
    {
      name: "buymeacoffee",
      url: "https://www.buymeacoffee.com/utsavbhattarai",
      label: "buymeacoffee.com/",
    },
    {
      name: "blog",
      url: "https://blog.utsavbhattarai.info.np",
      label: "Blog",
    },
  ],
  customization: {
    transition: "fromtop",
    border_radius: "6",
    bg_color: "#00000",
    bg_img: "/bg/bg5.jpg",
  },
};

//For input mapping
export const links = [
  {
    name: "github",
    label: "github.com/",
  },
  {
    name: "linkedin",
    label: "linkedin.com/in/",
  },
  {
    name: "twitter",
    label: "twitter.com/",
  },
  {
    name: "instagram",
    label: "instagram.com/",
  },
  {
    name: "youtube",
    label: "youtube.com/",
  },
  {
    name: "buymeacoffee",
    label: "buymeacoffee.com/",
  },
  {
    name: "facebook",
    label: "facebook.com/",
  },
  {
    name: "blog",
    label: "Blog",
  },
  {
    name: "portfolio",
    label: "Portfolio",
  },
];

//for icon and color mapping in portfolio
export const link = {
  github: {
    color: "#2D2C2D",
    icon: <AiFillGithub />,
  },
  linkedin: {
    color: "#0A66C2",
    icon: <AiFillLinkedin />,
  },
  facebook: {
    color: "#3B5998",
    icon: <FaFacebookSquare />,
  },
  twitter: {
    color: "#1DA1F2",
    icon: <AiFillTwitterCircle />,
  },
  instagram: {
    color: "#E4405F",
    icon: <AiFillInstagram />,
  },
  youtube: {
    color: "#FF0000",
    icon: <AiFillYoutube />,
  },
  portfolio: {
    color: "#F15412",
    icon: <RiUser3Fill />,
  },
  buymeacoffee: {
    color: "#FF813F",
    icon: <SiBuymeacoffee />,
  },
  blog: {
    color: "#2962FF",
    icon: <FaBloggerB />,
  },
};

//For background image of portfolio
export const bg = [
  {
    name: "bg1",
    src: "/bg/bg1.jpg",
  },
  {
    name: "bg2",
    src: "/bg/bg2.jpg",
  },
  {
    name: "bg3",
    src: "/bg/bg3.jpg",
  },
  {
    name: "bg4",
    src: "/bg/bg4.jpg",
  },
  {
    name: "bg5",
    src: "/bg/bg5.jpg",
  },
  {
    name: "bg6",
    src: "/bg/bg7.jpg",
  },
  {
    name: "bg7",
    src: "/bg/bg7.jpg",
  },
];

//For transition
export const transition = [
  {
    label: "From left",
  },
  {
    label: "From right",
  },
  {
    label: "From top",
  },
  {
    label: "From bottom",
  },
  {
    label: "Fade in",
  },
  {
    label: "Scale up",
  },
];

{
  /* <Input
            label="github.com/"
            value={link.github}
            placeholder={"Username"}
            name="github"
            onChange={handleLinks}
          />
          <Input
            label="twitter.com/"
            value={link.twitter}
            placeholder={"Username"}
            name="twitter"
            onChange={handleLinks}
          />
          <Input
            label="linkedin.com/in/"
            placeholder={"Username"}
            value={link.linkedin}
            name="linkedin"
            onChange={handleLinks}
          />
          <Input
            label="instagram.com/"
            placeholder={"Username"}
            value={link.instagram}
            name="instagram"
            onChange={handleLinks}
          />
          <Input
            label="youtube.com/"
            value={link.youtube}
            placeholder={"Username"}
            name="youtube"
            onChange={handleLinks}
          />
          <Input
            label="buymeacoffee.com/"
            placeholder={"Username"}
            value={link.buymeacoffee}
            name="buymeacoffee"
            onChange={handleLinks}
          />
          <Input
            label={"Blog"}
            value={link.blog}
            placeholder={"Blog URL"}
            name={"blog"}
            onChange={handleLinks}
          />
          <Input
            label={"Portfolio"}
            placeholder={"Portfolio URL"}
            name={"portfolio"}
            onChange={handleLinks}
          /> */
}
