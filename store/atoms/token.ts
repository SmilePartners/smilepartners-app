import { atomWithStorage, createJSONStorage, unwrap } from 'jotai/utils';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialCustomer = {
  firstName: '',
  lastName: '',
  birthDate: '',
  numberPhone: '',
  email: '',
  model: '',
  color: '',
  ordonnance: '',
  mutuelle: '',
  rightEye: '',
  leftEye: '',
  leftHeight: '',
  rightHeight: ''
}

const tokenStorage = createJSONStorage(() => AsyncStorage)
const clientStorage = createJSONStorage(() => AsyncStorage)

const asyncTokenAtom = atomWithStorage('token', '', tokenStorage)
export const tokenAtom = unwrap(asyncTokenAtom, (prev) => prev ?? '')

const asyncCustomerAtom = atomWithStorage('client', initialCustomer, clientStorage)
export const customerAtom = unwrap(asyncCustomerAtom, (prev) => prev ?? initialCustomer)
