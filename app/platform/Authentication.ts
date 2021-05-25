import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager,
} from 'react-native-fbsdk';
import firebaseAuth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { appleAuth } from '@invertase/react-native-apple-authentication';

import configs from 'configs';
// import { Platform } from 'react-native';
import { Log, Warn } from './Logger';

type AuthenticationResponse = {
  token?: string;
  data?: {
    name?: string;
    email?: string;
    provider: string;
    userId: string;
    profilePicture?: string;
    emailVerified?: boolean;
    phoneNumber?: string | undefined | null;
    providerUuid?: string;
  };
  error?: boolean;
};

// const { settings } = firebaseAuth();
// settings.setAutoRetrievedSmsCodeForPhoneNumber('+93343122402', '111111');

export async function facebookAuthentication(): Promise<
  AuthenticationResponse['data']
> {
  // eslint-disable-next-line no-async-promise-executor
  return new Promise(async (resolve, reject) => {
    try {
      const { isCancelled } = await LoginManager.logInWithPermissions(
        configs.FACEBOOK_PERMISSIONS,
      );
      if (isCancelled) {
        reject(Error('Cancelled'));
      }

      const data = await AccessToken.getCurrentAccessToken();
      if (!(data && data.accessToken)) {
        reject(data);
      }
      const responseCallback = (error, result) => {
        if (error) {
          reject(error);
        }
        const user = {
          name: result.name,
          email: result.email,
          provider: 'facebook',
          userId: result.id,
          profilePicture: `https://graph.facebook.com/${result.id}/picture?type=large`,
        };
        resolve(user);
      };

      const profileRequestConfig = {
        httpMethod: 'GET',
        version: 'v8.0',
        parameters: {
          fields: {
            string: 'id, name, email, first_name, last_name',
          },
        },
        accessToken: data.accessToken,
      };

      const profileRequest = new GraphRequest(
        '/me',
        profileRequestConfig,
        responseCallback,
      );
      new GraphRequestManager().addRequest(profileRequest).start();
      LoginManager.logOut();
    } catch (err) {
      reject(err);
    }
  });
}

let isGoogleSigninConfigured = false;
export async function googleAuthentication(): Promise<AuthenticationResponse> {
  if (!isGoogleSigninConfigured) {
    GoogleSignin.configure({
      webClientId: configs.GOOGLE_WEB_CLIENT_ID,
    });
    isGoogleSigninConfigured = true;
  }

  try {
    await GoogleSignin.hasPlayServices();
    if (await GoogleSignin.isSignedIn()) {
      GoogleSignin.signOut();
    }
    const googleResp = await GoogleSignin.signIn();
    const { idToken } = googleResp;
    Log({ googleResp });
    const googleCredential =
      firebaseAuth.GoogleAuthProvider.credential(idToken);
    await firebaseAuth().signInWithCredential(googleCredential);

    return new Promise((res, rej) => {
      let unsubscribe;
      const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
        try {
          unsubscribe();
          GoogleSignin.signOut();
        } catch (e) {
          Warn(e);
        }
        if (!user || !user?.providerId) {
          rej(Error('Something went wrong'));
        }
        Log({ user, googleCredential });
        res({
          token: googleCredential.token,
          data: {
            name: user?.displayName || 'User',
            email: user?.email || `${user?.providerId}@google.com`,
            provider: 'google',
            userId: googleResp.user.id || user?.uid || 'uid',
            providerUuid: googleResp.user.id || user?.uid || 'uid',
            profilePicture: user?.photoURL || '',
            phoneNumber: user?.phoneNumber,
            emailVerified: true,
          },
        });
      };
      unsubscribe = firebaseAuth().onAuthStateChanged(onAuthStateChanged);
    });
  } catch (e) {
    Warn(e);
    throw e;
    // return {
    //   error: true,
    // };
  }
}

// let codeConfirmation;

// export async function sendCodeToPhoneNumber(payload: {
//   phone: string;
//   onAutoVerification?: () => void;
// }): Promise<{
//   msg: string;
// }> {
//   if (configs.MOCK_PHONE_VERIFICATION) {
//     setTimeout(() => {
//       if (payload.onAutoVerification) {
//         payload.onAutoVerification();
//       }
//     }, 2000);
//     return new Promise((res, _rej) => {
//       res({
//         msg: 'code sended successfully',
//       });
//     });
//   }
// try {
//   return new Promise((res, rej) => {
//     firebaseAuth()
//       .verifyPhoneNumber(payload.phone)
//       .on('state_changed', (phoneAuthSnapshot) => {
//         Log('Snapshot state: ', phoneAuthSnapshot);
//         if (phoneAuthSnapshot.state === 'sent') {
//           res({
//             msg: 'code sended successfully',
//           });
//         }
//         if (phoneAuthSnapshot.error) {
//           rej(phoneAuthSnapshot.error);
//         }
//         if (
//           phoneAuthSnapshot.state === 'verified' &&
//           payload.onAutoVerification
//         ) {
//           payload.onAutoVerification();
//         }
//       });
//   });
// } catch (e) {
//   Warn(e);
//   throw e;
// }

//   try {
//     if (payload.onAutoVerification) {
//       const onAuthStateChanged = (user: FirebaseAuthTypes.User | null) => {
//         if (user?.phoneNumber === payload.phone && payload.onAutoVerification) {
//           Log('onAuthStateChanged', { user });
//           payload.onAutoVerification();
//           try {
//             unsubscribe();
//           } catch (e) {
//             Warn(e);
//           }
//         }
//       };
//       let unsubscribe = firebaseAuth().onAuthStateChanged(onAuthStateChanged);
//     }
//     codeConfirmation = await firebaseAuth().signInWithPhoneNumber(
//       payload.phone,
//     );

//     return new Promise((res, _rej) => {
//       if (codeConfirmation) {
//         res({
//           msg: 'code sended successfully',
//         });
//       }
//     });
//   } catch (e) {
//     Warn(e);
//     throw e;
//   }
// }

// export async function confirmCode(code): Promise<AuthenticationResponse> {
//   try {
//     await codeConfirmation.confirm(code);
//     return new Promise((res, _rej) => {
//       res({
//         // @ts-ignore
//         msg: 'code Verified',
//       });
//     });
//   } catch (e) {
//     Warn(e);
//     throw e;
//   }
// }

// export async function appleAuthentication(): Promise<
//   AuthenticationResponse['data']
// > {
//   // performs login request
//   const appleAuthRequestResponse = await appleAuth.performRequest({
//     requestedOperation: appleAuth.Operation.LOGIN,
//     requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
//   });

//   // get current authentication state for user
//   // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
//   const credentialState = await appleAuth.getCredentialStateForUser(
//     appleAuthRequestResponse.user,
//   );

//   // use credentialState response to ensure the user is authenticated
//   if (credentialState === appleAuth.State.AUTHORIZED) {
//     return {
//       name: appleAuthRequestResponse?.fullName?.givenName
//         ? `${appleAuthRequestResponse.fullName.givenName} ${appleAuthRequestResponse.fullName.familyName}`
//         : 'Name',
//       email:
//         appleAuthRequestResponse.email ||
//         `${appleAuthRequestResponse.user}@apple.com`,
//       emailVerified: true,
//       provider: 'apple',
//       userId: appleAuthRequestResponse.user,
//     };
//   }
//   throw Error('Revoked');
// }

// export const APPLE_LOGIN_ALLOWED =
//   Platform.OS === 'ios' && appleAuth.isSupported;
