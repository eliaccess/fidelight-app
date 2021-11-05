/**
 *
 * API for Cities
 *
 */

import { CitiesSearchAPIResponse, FetchPropsPayload } from './types';

export async function fetchCities(
  payload: FetchPropsPayload,
): Promise<CitiesSearchAPIResponse | Error> {
  const { query } = payload;

  const url = `https://geo.api.gouv.fr/communes/?nom=${query}`;

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const data = await response.json();

  return { data };
}
