import { uploadPhoto, createUser } from './utils.js';

export function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log('Body:', photoResponse.body);
      console.log('First Name:', userResponse.firstName);
      console.log('Last Name:', userResponse.lastName);
    })
    .catch(error => {
      console.error('Signup system offline');
    });
}
