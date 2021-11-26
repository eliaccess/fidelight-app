/**
 *
 * API for RecentViewedEntities
 *
 */

import LocalStorage from 'platform/LocalStorage';
import { EntityDetailItemTypes } from 'types/EntityItemTypes';

import {
  RecentViewedEntitiesAPIResponse,
  SubmitAPIResponse,
  SubmitPayload,
} from './types';

const LOCAL_STORAGE_KEY = 'RecentViewedEntities';

export async function fetch(): Promise<
  RecentViewedEntitiesAPIResponse | Error
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
  let updated: EntityDetailItemTypes[] = [];
  const current: any = await fetch();
  if (!current) {
    updated.push(payload.data);
  } else {
    updated = [
      payload.data,
      ...(current || []).filter((entity) => entity.id !== payload.data.id),
    ];
  }
  LocalStorage.setItem(LOCAL_STORAGE_KEY, updated);
  // @ts-ignore
  return { data: updated };
}
