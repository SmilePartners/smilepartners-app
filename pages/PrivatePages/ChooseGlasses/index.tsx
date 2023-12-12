import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RegularText, Title } from '../../../components/atoms/Typography';
import { colors } from '../../../utils/colors';
import { Header } from '../../../components/atoms/Header';
import GenericButton from '../../../components/atoms/GenericButton';
import { useForm, Controller } from 'react-hook-form';
import useKeyboard from '../../../hooks/useKeyBoard';
import { useAtom } from 'jotai';
import { customerAtom } from '../../../store/atoms/token';
import SelectInput from '../../../components/atoms/SelectInput';

const ChooseGlasses = ({ navigation }) => {
  const [customer, setCustomer] = useAtom(customerAtom);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      model: '',
      color: '',
    },
  });

  const onSubmit = async (data) => {
    await setCustomer({ ...customer, ...data });
    navigation.navigate('documents');
  };

  const keyboardIsVisible = useKeyboard();

  return (
    <>
      <Header navigation={navigation} onlyLogo />
      <View style={styles.container}>
        <View style={[styles.header, keyboardIsVisible && { height: '5%' }]}>
          {!keyboardIsVisible && (
            <>
              <Title.MD style={{ marginBottom: 10 }}>Choix de la monture</Title.MD>
              <RegularText.MD>
                Aidez votre client à sélectionner sa monture. Proposez lui d’essayer celles qui sont
                à son goût.
              </RegularText.MD>
            </>
          )}
        </View>
        <View style={[styles.bottomContainer, keyboardIsVisible && { height: '95%' }]}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectInput
                icon="eye"
                selectedValue={watch('model')}
                items={[
                  { label: 'testtt', value: 'testtt' },
                  { label: 'test', value: 'test' },
                ]}
                onBlur={onBlur}
                onValueChange={onChange}
                value={value}
                placeholder="Sélectionner la monture"
                error={errors.model}
                errorMessage={errors.model?.message}
              />
            )}
            name="model"
          />

          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <SelectInput
                icon="circle"
                selectedValue={watch('color')}
                items={[
                  { label: 'rouge', value: 'red' },
                  { label: 'noir', value: 'black' },
                ]}
                onBlur={onBlur}
                onValueChange={onChange}
                value={value}
                placeholder="Sélectionner la couleur"
                error={errors.model}
                errorMessage={errors.model?.message}
              />
            )}
            name="color"
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
              title="Valider la monture"
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
});

export default ChooseGlasses;
