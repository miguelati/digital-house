jest.mock('react-query', () => ({
  useQuery: jest.fn(() => ({isLoading: false, data: []})),
}));
