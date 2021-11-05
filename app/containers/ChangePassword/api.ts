/**
 *
 * API for ChangePassword
 *
 */
import service from 'services/fidelight';
import { ChangePasswordAPIResponse, SubmitPropsPayload } from './types';

export async function submit(
  payload: SubmitPropsPayload,
): Promise<ChangePasswordAPIResponse | Error> {
  const body = {
    oldPassword: payload.currentPassword,
    newPassword: payload.newPassword,
  };

  const resp = await service({
    method: 'PUT',
    url: '/v1/user/password/',
    body,
  });

  return {
    // @ts-ignore
    message: resp.msg,
  };
}
