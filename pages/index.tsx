import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useState } from "react";
import { getDrinksbyName } from "../components/lib/api";

export default function Home() {
  const [drink, setDrink] = useState({
    name: "",
  });

  async function searchResults(drink: string) {
    const result = await getDrinksbyName(drink);
  }

  const updateField = (e) => {
    setDrink({
      ...drink,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: "1",
        marginTop: "20vh",
      }}
      color="black"
    >
      <Box>
        <Input
          name="name"
          id="input_name"
          value={drink.name || ""}
          onChange={updateField}
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <Button onClick={() => searchResults(drink.name)}>Search</Button>
      </Box>
    </Box>
  );
}
