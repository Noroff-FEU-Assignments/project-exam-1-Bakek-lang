import { makeApiCall } from "../api/fetch";
const url =
  "http://code-corner.henrikbakke.no/wp-json/wp/v2/posts?acf_format=standard";

let data = makeApiCall(url);

console.log(data);

// Make function to get categories from api, loop through and see how many posts has each of the tag
