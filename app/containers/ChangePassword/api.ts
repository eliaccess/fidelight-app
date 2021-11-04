/**
 *
 * API for ChangePassword
 *
 */
import service from 'services/fidelight';
import { ChangePasswordAPIResponse, SubmitPropsPayload } from './types';

export function submit(
  payload: SubmitPropsPayload,
): Promise<ChangePasswordAPIResponse | Error> {
  const body = {
    oldPassword: payload.currentPassword,
    newPassword: payload.newPassword,
  };

  return service({
    method: 'POST',
    url: '/v1/user/password/',
    body,
  });
}
