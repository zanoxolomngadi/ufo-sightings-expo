
import { useQuery } from '@tanstack/react-query';
import { api } from '../services/api';



type UfoSighting = {
date: string,
sightings: number
}


async function fetchSightings(): Promise<UfoSighting[]> {
  const res = await api.get<UfoSighting[]>('', {
    signal: AbortSignal.timeout?.(10_000),
  });

   return res.data;
}

export default function useUfoSightings() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['ufoSightingsData'],
     queryFn: fetchSightings
  })


   return { data: data ?? [], loading: isLoading, error };
}
