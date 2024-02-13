const url =
  "https://code-corner.henrikbakke.no/wp-json/wp/v2/posts?acf_format=standard&per_page=50";

export async function makeApiCall() {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Could not fetch API");
    }
    const data = await response.json();

    console.log(data);

    return data;
  } catch (error) {
    throw error;
  }
}
