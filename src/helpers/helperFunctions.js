/**
 * Fetches JSON data from the specified path.
 *
 * @param {string} path - Path to the JSON data
 * @returns {Promise<Object | null>} Resolves with the JSON data or null on error
 */
export const fetchData = async (path) => {
  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    return null;
  }
};
