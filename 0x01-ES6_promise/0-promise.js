function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    const success = true; // Change to false to simulate failure
    if (success) {
      resolve("API response data");
    } else {
      reject(new Error("Failed to fetch data from API"));
    }
  });
}
