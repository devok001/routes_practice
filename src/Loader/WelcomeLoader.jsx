import Cookies from "js-cookie";

export default async function WelcomeLoader() {

  const token = Cookies.get("jwt");

  console.log(token);
  const response = await fetch("http://localhost:8080/welcome", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer${token}`,
    },
  });

  console.log(response.json);

  if (!response.ok) {
    throw new Error("Failed to fetch data from GitHub");
  }
  
  const data = await response.json(); // Correctly call .json() method
  return data;
}
