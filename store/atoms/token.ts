import { atomWithStorage } from 'jotai/utils';

export const tokenAtom = atomWithStorage('token', '');

export const customerAtom = atomWithStorage('token', {
    firstName: '',
    lastName: '',
    birthDate: '',
})
