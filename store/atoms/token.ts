import { atomWithStorage, createJSONStorage, unwrap } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage'

const tokenStorage = createJSONStorage(() => AsyncStorage);
const clientStorage = createJSONStorage(() => AsyncStorage);

const asyncTokenAtom = atomWithStorage('token', '', tokenStorage);
export const tokenAtom = unwrap(asyncTokenAtom, (prev) => prev ?? '');

const asyncCustomerAtom = atomWithStorage('client', {
    firstName: '',
    lastName: '',
    birthDate: '',
    numberPhone: '',
    email: ''
}, clientStorage)

export const customerAtom = unwrap(asyncCustomerAtom, (prev) => prev ?? {
    firstName: '',
    lastName: '',
    birthDate: '',
    numberPhone: '',
    email: ''
})

