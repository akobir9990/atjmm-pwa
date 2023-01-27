import React from "react";
import { Box, Container, ImageListItem } from "@mui/material";
import abdullayev from "../../assets/images/abdullayev.jpg";
import "./style.css";

function index() {
  return (
    <Container>
      <Box>
        <Box
          sx={{
            height: "100vh",
            textAlign: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <p className="title">
            Axborot texnologiyalari va jarayonlarni matematik modellashtirish
            fanidan
            <b>
              <i> web darslik</i>
            </b>
          </p>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <h1>Muallif</h1>
        </Box>
        <Box
          sx={{
            width: "100%",
            padding: "20px 10px 200px 10px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ImageListItem
            sx={{
              width: "200px",
              height: "200px",
              paddingRight: "20px",
              borderRadius: "20px",
            }}
          >
            <img
              className="image"
              src={abdullayev}
              alt="Abdullayev Zafar Sayfutdinovich"
            />
          </ImageListItem>
          <div
            sx={{
              paddingLeft: "20px",
            }}
          >
            <h1>Abdullayev Zafar Sayfutdinovich</h1>
            <h2>fizika-matematika fanlari nomzodi Dotsent</h2>
            <p>abdullaeevv.zafar@gmail.com</p>
          </div>
        </Box>
      </Box>
    </Container>
  );
}

export default index;
