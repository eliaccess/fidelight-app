/**
 *
 * API for RecentSelectedCities
 *
 */

import LocalStorage from 'platform/LocalStorage';

import {
  RecentSelectCityItem,
  RecentSelectedCitiesAPIResponse,
  SubmitAPIResponse,
  SubmitPayload,
} from './types';

const LOCAL_STORAGE_KEY = 'RecentSelectedCities';

export async function fetch(): Promise<
  RecentSelectedCitiesAPIResponse | Error
> {
  const data = await LocalStorage.getItem(LOCAL_STORAGE_KEY);
  if (data) {
    return data;
  }
  // @ts-ignore
  return [];
}

export async function submit(
  payload: SubmitPayload,
): Promise<SubmitAPIResponse | Error> {
  let updated: RecentSelectCityItem[] = [];
  const current: any = await fetch();

  if (!current) {
    updated.push(payload.data);
  } else {
    updated = [
      payload.data,
      ...(current || []).filter((city) => city.name !== payload.data.name),
    ];
  }

  LocalStorage.setItem(LOCAL_STORAGE_KEY, updated);
  // @ts-ignore
  return { data: updated };
}
