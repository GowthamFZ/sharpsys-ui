const API_URL_BLOG = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT_BLOG;
const API_URL_CAREER = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT_CAREER;
const API_URL_CAREER_HEADER = <string>process.env.NEXT_PUBLIC_WORDPRESS_API_ENDPOINT_CAREER_HEADER;

export async function fetchAPI(
  query = "",
  reqType = "",
) {
  const headers = { "Content-Type": "application/json" };
  let res;
  if (reqType === 'BLOG') {
    res = await fetch(API_URL_BLOG, {
      headers,
      method: "POST",
      body: JSON.stringify({
        query,
      }),
    });

  } else if (reqType === 'CAREER') {
    res = await fetch(API_URL_CAREER);
  } else {
    res = await fetch(API_URL_CAREER_HEADER);
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API");
  }
  return reqType === 'BLOG' ? json.data : json;
}
