import React from "react";
import { Paper, Button } from "@mui/material";
import dynamic from "next/dynamic";
import Box from "@mui/material/Box";
import Image from "next/image";

import { useAppContext } from "../components/state/AppContext";

export default function Carrousel() {
  const context_app = useAppContext();

  const CarrouselNoSSR = dynamic(() => import("react-material-ui-carousel"), {
    ssr: false,
  });
  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
  ];

  return (
    <CarrouselNoSSR>
      {context_app.drinks.map((item, i) => (
        <Paper key={i}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              zIndex: "1",
              background: "white",
            }}
          >
            <Box>
              <h2>{context_app.drinks[i].strDrink}</h2>{" "}
            </Box>

            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                zIndex: "1",
                background: "white",
              }}
            >
              <Image
                src={context_app.drinks[i].strDrinkThumb}
                width={300}
                height={300}
              />
            </Box>
          </Box>
        </Paper>
      ))}
    </CarrouselNoSSR>
  );
}
