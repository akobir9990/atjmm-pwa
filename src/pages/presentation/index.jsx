import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { TelegramIcon, TelegramShareButton } from "react-share";
import { Box } from "@mui/system";

export default function BasicCard() {
  const items = [
    { id: 1, path: "https://t.me/atjmmmm/2" },
    { id: 2, path: "https://t.me/atjmmmm/4" },
    { id: 3, path: "https://t.me/atjmmmm/5" },
    { id: 4, path: "https://t.me/atjmmmm/6" },
    { id: 5, path: "https://t.me/atjmmmm/7" },
    { id: 6, path: "https://t.me/atjmmmm/8" },
    { id: 7, path: "https://t.me/atjmmmm/9" },
    { id: 8, path: "https://t.me/atjmmmm/10" },
    { id: 9, path: "https://t.me/atjmmmm/11" },
    { id: 10, path: "https://t.me/atjmmmm/12" },
  ];
  return (
    <Card sx={{ minWidth: 275 }}>
      {items.map((item) => (
        <Box key={item.id} className="border-[1px] border-[solid] border-[grey] my-4 rounded-md shadow-inner">
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {item.id}-ma'ruza
            </Typography>
            <Typography variant="h5" component="div">
              Axborot texnologiyalarining asosiy tushunchalari
            </Typography>
          </CardContent>
          <CardActions>
            <Button variant="outlined" size="small">
              ochish
            </Button>

            <TelegramShareButton url={item.path}>
              <TelegramIcon className="rounded w-8"></TelegramIcon>
            </TelegramShareButton>
          </CardActions>
        </Box>
      ))}
    </Card>
  );
}
