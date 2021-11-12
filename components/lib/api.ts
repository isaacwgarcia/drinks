import { APIConnection } from "../../stepzen/stepzenTypes";

async function fetchAPI(query: any, { variables }: APIConnection = {}) {
  const headers = {
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(`${process.env.STEPZEN_API_URL}`, {
    method: "POST",
    headers,
    body: JSON.stringify({
      query,
      variables,
    }),
  });

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return json.data;
}

export async function getDrinksbyName(name: any) {
  try {
    const data = await fetchAPI(
      `   
      query MyQuery {
            list_of_drinks(name: "${name}") {
                drinks {
                  strDrinkThumb
                  idDrink
                  strDrink
                }
              }}
    `
    );

    return data;
  } catch (e) {
    return e.message;
  }
}
