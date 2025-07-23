import { renderHook, waitFor } from '@testing-library/react-native';
import axios from 'axios';
import useUfoSightings from '../useUfoSightings';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('useUfoSightings', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should fetch and return sightings data successfully', async () => {
    mockedAxios.get.mockResolvedValueOnce({
      data: [{ date: '01/01/2025', sightings: 10 }],
    });

    const { result } = renderHook(() => useUfoSightings());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.data).toEqual([{ date: '01/01/2025', sightings: 10 }]);
    expect(result.current.error).toBeNull();
  });

  it('Should handle fetch error', async () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation(() => {});

    mockedAxios.get.mockRejectedValueOnce(new Error('Network error'));

    const { result } = renderHook(() => useUfoSightings());

    await waitFor(() => expect(result.current.loading).toBe(false));

    expect(result.current.error).toBe('Failed to fetch sightings');
    expect(result.current.data).toEqual([]);

    errorSpy.mockRestore(); 
  });
});
