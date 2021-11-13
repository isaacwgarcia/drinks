import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { getDrinksbyName } from "../components/lib/api";
import Carrousel from "../components/Carrousel";
import { useAppContext } from "../components/state/AppContext";
import { useDispatchContext } from "../components/state/AppContext";
export default function Home() {
  const [drink, setDrink] = useState({
    name: "",
  });

  const dispatch_app = useDispatchContext();

  const [data, setData] = useState(false);
  var lista;
  var drinks;

  async function searchResults(drink: string) {
    const result = await getDrinksbyName(drink);

    drinks = result.list_of_drinks.drinks;

    dispatch_app({
      type: "LOAD",
      payload: drinks,
    });

    setData(true);

    return lista;
  }

  const updateField = (e) => {
    setDrink({
      ...drink,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",

          flexDirection: "column",
          alignItems: "center",
          zIndex: "1",
          height: "100vh",
          background: "#F7F7F7",
        }}
      >
        <Box
          sx={{
            marginTop: "5vh",
            marginBottom: "5vh",
          }}
        >
          {" "}
          Tell us what you have in mind and we will give you options to drink
        </Box>
        <Box
          sx={{
            marginBottom: "5vh",
          }}
        >
          <Input
            name="name"
            id="input_name"
            value={drink.name || ""}
            onChange={updateField}
          />

          <Button onClick={() => searchResults(drink.name)}>Search</Button>
        </Box>
        <Box
          sx={{
            width: "70vw",
          }}
        >
          {data ? <Carrousel /> : <></>}
        </Box>
      </Box>
    </>
  );
}
