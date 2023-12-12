import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RegularText, Title } from '../../../components/atoms/Typography';
import { colors } from '../../../utils/colors';
import { Header } from '../../../components/atoms/Header';
import GenericInput from '../../../components/atoms/GenericInput';
import GenericButton from '../../../components/atoms/GenericButton';
import { useForm, Controller } from 'react-hook-form';
import useKeyboard from '../../../hooks/useKeyBoard';
import { useAtom } from 'jotai';
import { customerAtom } from '../../../store/atoms/token';
import BouncyCheckboxGroup, { type ICheckboxButton } from 'react-native-bouncy-checkbox-group';

const Verification = ({ navigation }) => {
  const [customer, setCustomer] = useAtom(customerAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      secu: customer.secu,
      secuKey: customer.secuKey,
      vision: customer.vision,
    },
  });

  const onSubmit = async (data) => {
    setCustomer({ ...data, ...customer });
    // navigation.navigate('new-client-step2');
  };

  const keyboardIsVisible = useKeyboard();

  console.log(customer);

  return (
    <>
      <Header navigation={navigation} onlyLogo />
      <View style={styles.container}>
        <View style={[styles.header, keyboardIsVisible && { height: '5%' }]}>
          {!keyboardIsVisible && (
            <>
              <Title.MD style={{ marginBottom: 10 }}>Vérification</Title.MD>
              <RegularText.MD>
                Vérifiez les informations saisies dans les écrans précédents.
              </RegularText.MD>
            </>
          )}
        </View>
        <View style={[styles.bottomContainer, keyboardIsVisible && { height: '95%' }]}>
          <RegularText.MD style={styles.checkboxLabel}>
            Sélectionnez le type de vision du client
          </RegularText.MD>
          <Controller
            control={control}
            rules={{ required: false }}
            render={({ field: { onChange, value } }) => (
              <BouncyCheckboxGroup
                style={{ width: '100%', justifyContent: 'center' }}
                data={[
                  {
                    id: 0,
                    text: 'Loin',
                  },
                  {
                    id: 1,
                    text: 'Près',
                  },
                  {
                    id: 2,
                    text: 'Progressif',
                  },
                ]}
                onChange={(selectedItem: ICheckboxButton) => {
                  onChange(selectedItem);
                }}
              />
            )}
            name="vue"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              validate: (value) => {
                const isValidLength = value.length === 13 || value.length === 15;
                const isNumeric = /^\d+$/.test(value);
                return (
                  (isValidLength && isNumeric) ||
                  'Le numéro doit contenir uniquement des chiffres et être de 13 ou 15 caractères.'
                );
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="heart"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                inputMode="numeric"
                placeholder="Numéro de sécurité sociale"
                error={errors.secu}
                errorMessage={errors.secu?.message}
              />
            )}
            name="secu"
          />
          <Controller
            control={control}
            rules={{
              required: false,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="key"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="CPAM de la ville du client"
                error={errors.secuKey}
                errorMessage={errors.secuKey?.message}
              />
            )}
            name="secuKey"
          />
          <View style={{ marginTop: 'auto', width: '100%' }}>
            <GenericButton
              onPress={handleSubmit(onSubmit)}
              textStyle={{ color: colors.white }}
              style={{
                marginTop: 25,
                marginBottom: 10,
                backgroundColor: colors.secondary,
                width: '100%',
              }}
              title="Suivant"
            />
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.primary,
  },
  header: {
    justifyContent: 'center',
    height: '25%',
    paddingHorizontal: 30,
  },
  bottomContainer: {
    alignItems: 'center',
    height: '75%',
    backgroundColor: colors.white,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  forgotPassword: {
    marginLeft: 'auto',
    marginRight: 10,
    fontFamily: 'Ubuntu_500Medium',
  },
  socialContainer: {
    marginTop: 'auto',
  },
  checkboxLabel: {
    marginRight: 'auto',
  },
  checkBoxContainer: {},
});

export default Verification;
