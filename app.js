//import { Client } from "@googlemaps/google-maps-services-js";
require("dotenv").config();

const { Client } = require("@googlemaps/google-maps-services-js");

const cliente = new Client({});

// cliente
//   .elevation({
//     params: {
//       locations: [{ lat: 45, lng: -110 }],
//       key: process.env.APIKEY,
//     },
//     timeout: 1000, // milliseconds
//   })
//   .then((r) => {
//     console.log(r.data.results[0].elevation);
//   })
//   .catch((e) => {
//     console.log(e.response.data.error_message);
//   });

cliente
  .findPlaceFromText({
    params: {
      fields: "cucha cucha",
      key: process.env.APIKEY,
    },
    timeout: 1000, // milliseconds
  })
  .then((r) => {
    console.log(r.data.results[0].elevation);
  })
  .catch((e) => {
    console.log(e.response.data.error_message);
  });
