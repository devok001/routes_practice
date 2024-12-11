import axiosInstance from "../config";

export default async function githubLoader() {
  try {
    const response = await axiosInstance.get("/devok001");
    console.log(response.data); // Log the data
    return response.data; // Return the data
  } catch (error) {
    console.error("Failed to fetch data from GitHub:", error);
    throw error; // Rethrow the error to handle it elsewhere
  }
}
