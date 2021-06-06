const apiClient = {
  getHomes: () => {
    return fetch(
      "http://run.mocky.io/v3/62de12a6-dce1-4b9c-a34c-c77e275df98a"
    ).then((response) => response.json());
  },
  bookHome: (home, checkIn, checkOut) => {
    return fetch(
      "https://run.mocky.io/v3/d9961065-30df-491c-8001-e6c415316632"
    ).then((response) => response.json());
    // return Promise.resolve();
  },
};

export default apiClient;
