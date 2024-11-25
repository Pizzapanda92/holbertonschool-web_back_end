import { uploadPhoto, createUser } from './utils.js';

export default function handleProfileSignup() {
  Promise.all([uploadPhoto(), createUser()])
    .then(([photoResult, userResult]) => {
      console.log(photoResult.body, userResult.firstName, userResult.lastName);
    })
    .catch(() => {
      console.error('Signup system offline');
    });
}
