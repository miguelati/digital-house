jest.mock('axios', () => {
  const mAxiosInstance = {get: jest.fn(() => Promise.resolve({data: []}))};
  return {
    create: jest.fn(() => mAxiosInstance),
  };
});
