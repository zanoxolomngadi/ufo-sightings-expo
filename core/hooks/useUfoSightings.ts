import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://my-json-server.typicode.com/Louis-Procode/ufo-Sightings/ufoSightings';

export default function useUfoSightings() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(API_URL);
        setData(res.data);
        setError(null);
      } catch (err: any) {
        console.error(err);
        setError('Failed to fetch sightings');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
}
