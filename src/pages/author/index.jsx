import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import abdullayev from "../../assets/images/abdullayev.png";

export default function MediaCard() {
  return (
    <Card className="flex flex-col p-7 items-center sm:flex-row my-7">
      <div>
        <img
          className=" max-w-[300px]"
          src={abdullayev}
          alt="Abdullayev Zafar Sayfutdinovich"
        />
      </div>

      <CardContent className="">
        <h1 className="text-[30px] font-bold">
          Abdullayev Zafar Sayfutdinovich
        </h1>
        <h2 className="text-[20px]">
          Axborot texnologiyalari kafedrasi mudiri matematika fizika fanlari
          nomzodi dotsent
        </h2>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
