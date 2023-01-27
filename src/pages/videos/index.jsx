import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";

import one from "./img/1.svg";
import two from "./img/2.svg";
import three from "./img/3.svg";
import four from "./img/4.svg";
import five from "./img/5.svg";
import six from "./img/6.svg";
import seven from "./img/7.svg";
import eight from "./img/8.svg";
import nine from "./img/9.svg";
import ten from "./img/10.svg";
import { NavLink } from "react-router-dom";

function srcset(image, width, height, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${width * cols}&h=${height * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${width * cols}&h=${
      height * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function CustomImageList() {
  return (
    <ImageList rowHeight={200} gap={1}>
      {itemData.map((item) => {
        const cols = item.featured ? 2 : 1;
        const rows = item.featured ? 2 : 1;

        return (
          <ImageListItem
            className="overflow-hidden "
            key={item.img}
            cols={cols}
            rows={rows}
          >
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              className="hover:scale-[1.05] transition ease-in-out delay-150"
            />
            <a href={item.url}>
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "red", width: "100px" }}
                    aria-label={`star ${item.title}`}
                  >
                    <OndemandVideoIcon sx={{ color: "red", width: "200px" }} />
                  </IconButton>
                }
                actionPosition="left"
              />
            </a>
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}

const itemData = [
  {
    img: one,
    title: "1-mavzu:  Axborot texnologiyalarining asosiy tshunchalari ",
    url: "https://mover.uz/watch/c3QF8jfH?list=NwkmgJCl",
    featured: true,
  },
  {
    img: two,
    title: "2-mavzu:  Axborot kommunikatsiya texnologiyalari va tizimlari",
    url: "https://mover.uz/watch/b16nLpkC?list=NwkmgJCl",
  },
  {
    img: three,
    title: "3-mavzu:  Operatsion tizimlar",
    url: "https://mover.uz/watch/zsJrelEX",
  },
  {
    img: four,
    title: "4-mavzu:  Internet texnologiylari va ularning rivojlanishi",
    url: "https://mover.uz/watch/cvQMlV6S?list=NwkmgJCl",
    featured: true,
  },
  {
    img: five,
    title: "5-mavzu:  Algoritm tushunchasi va ularning turlari",
    url: "https://mover.uz/watch/vICRYwlk?list=NwkmgJCl",
  },
  {
    img: six,
    title: "6-mavzu:  Dasturlash tizimlari va ularning turlari",
    url: "https://mover.uz/watch/vtTYMMj",
  },
  {
    img: seven,
    title: "7-mavzu:  C dasturlash tilining asosiy tushnchalari va strukturasi",
    url: "https://mover.uz/watch/TnIdC2J0?list=NwkmgJCl",
  },
  {
    img: eight,
    title: "8-mavzu:  C dasturlash tilida chiziqli algoritmlar",
    url: "https://mover.uz/watch/VWWWc20f?list=NwkmgJCl",
  },
  {
    img: nine,
    title: "9-mavzu: C dasturlash tilida tarmoqlanuvchi algoritmlar",
    url: "https://mover.uz/watch/0PRoA8Mm?list=NwkmgJCl",
  },
  {
    img: ten,
    title: "10x-mavzu:  C dasturlash tilida takrorlanuvchi algoritmlar",
    url: "https://mover.uz/watch/faquA9AW",
  },
];
