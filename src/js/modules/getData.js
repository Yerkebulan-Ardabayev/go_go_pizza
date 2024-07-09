import { hideLoader, showLoader } from "./loader";

export const getData = async (url) => {
  showLoader();
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed you fetch!!!!');
    }

    return await response.json();
  } catch (error) {
    console.error(`Error fetching pizza: ${error}`);
    return [];
  } finally {
    hideLoader();
  }
};
