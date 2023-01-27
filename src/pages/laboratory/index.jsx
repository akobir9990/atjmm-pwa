import "./style.css";
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
            sx={{ margin: "5px", overflow: "hidden" }}
            key={item.img}
            cols={cols}
            rows={rows}
            className="item"
          >
            <img
              {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
            />
            <a href={item.url}>
              {" "}
              <ImageListItemBar
                sx={{
                  background:
                    "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
                    "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
                }}
                title={item.title}
                position="top"
                actionIcon={
                  <IconButton
                    sx={{ color: "red" }}
                    aria-label={`star ${item.title}`}
                  >
                    <OndemandVideoIcon />
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
    url: "https://mover.uz/watch/2gReOP0E",
    img: one,
    title: "1-mavzu:  Axborot texnologiyalarining asosiy tshunchalari ",
    author: "@bkristastucchio",
    featured: true,
  },
  {
    url: "https://mover.uz/watch/8mF3VkvQ",
    img: two,
    title: "2-mavzu:  Axborot kommunikatsiya texnologiyalari va tizimlari",
    author: "@rollelflex_graphy726",
  },
  {
    url: "https://mover.uz/watch/ytRb3DPH",
    img: three,
    title: "3-mavzu:  Operatsion tizimlar",
    author: "@helloimnik",
  },
  {
    url: "https://mover.uz/watch/czZFcpum",
    img: four,
    title: "4-mavzu:  Internet texnologiylari va ularning rivojlanishi",
    author: "@nolanissac",
    featured: true,
  },
  {
    url: "https://mover.uz/watch/XtuvFhzS",
    img: five,
    title: "5-mavzu:  Algoritm tushunchasi va ularning turlari",
    author: "@hjrc33",
  },
  {
    url: "https://mover.uz/watch/1NqaeKio",
    img: six,
    title: "6-mavzu:  Dasturlash tizimlari va ularning turlari",
    author: "@arwinneil",
  },
  {
    url: "https://mover.uz/watch/cNJu9l3",
    img: seven,
    title: "7-mavzu:  C dasturlash tilining asosiy tushnchalari va strukturasi",
    author: "@tjdragotta",
  },
  {
    url: "https://mover.uz/watch/gkBArC2r",
    img: eight,
    title: "8-mavzu:  C dasturlash tilida chiziqli algoritmlar",
    author: "@katie_wasserman",
  },
];
