import poeTrade from "../api/poeTrade";

async function searchHeadhunter(league) {
  // Set the trade query parameter for a basic Headhunter search
  const query = {
    status: {
      option: "online",
    },
    name: "Headhunter",
    type: "Leather Belt",
    stats: [
      {
        type: "and",
        filters: [],
      },
    ],
    filters: {
      trade_filters: {
        disabled: false,
        filters: {
          price: {
            option: "exa",
          },
        },
      },
    },
  };
  const sort = {
    price: "asc",
  };
  const res = await poeTrade.post("/search/" + league, { query, sort });
  return res;
}

export async function getHeadhunterListings(league) {
  // First get the headhunter listing codes
  const res = await searchHeadhunter(league);
  // Set the first 10 codes as our query for the trade fetch
  // poe trade api paginates fetches items 10 per fetch
  const codes = res.data.result.slice(0, 10).join();
  // Use these codes to get the Headhunter listings
  return await poeTrade.get("/fetch/" + codes);
}

export function getAverageItemCost(items, league) {
  // Create new array of item costs (in ex)
  const prices = items.map((item) => {
    return item.listing.price.currency === "exalted"
      ? item.listing.price.amount
      : convertCurrency(
          item.listing.price.amount,
          item.listing.price.currency,
          "exalted",
          league
        );
  });
  prices.forEach((value) => {
    console.log(value);
  });
}

export async function convertCurrency(amount, current, target, league) {
  // Search to buy 1 of the target currency with 1 of the current currency
  const query = {
    exchange: {
      status: { option: "online" },
      have: ["alt"],
      want: ["exalted"],
    },
  };
  const res = await poeTrade.post("/exchange/" + league, query);
  console.log(res);
}
