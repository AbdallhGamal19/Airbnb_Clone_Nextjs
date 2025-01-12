export const getExplore = async () => {
  try {
    const res = (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/4G1G`)
    ).json();

    return res;
  } catch (error) {
    console.log(error);
  }
};
export const getLiveData = async () => {
  try {
    const res = (
      await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/VHHT`)
    ).json();
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getSearchResult = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/b/5NPS`);
    const searchResultData = await res.json();
    console.log(searchResultData);

    return searchResultData;
  } catch (error) {
    console.error("Failed to fetch search results:", error);
    throw error;
  }
};
