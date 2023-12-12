import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { RegularText, Title } from '../../../components/atoms/Typography';
import { colors } from '../../../utils/colors';
import { Header } from '../../../components/atoms/Header';
import GenericInput from '../../../components/atoms/GenericInput';
import GenericButton from '../../../components/atoms/GenericButton';
import { useForm, Controller } from 'react-hook-form';
import useKeyboard from '../../../hooks/useKeyBoard';
import { useAtom } from 'jotai';
import { customerAtom } from '../../../store/atoms/token';
import ImagePickerComponent from '../../../components/atoms/ImagePickComponent';

const Documents = ({ navigation }) => {
  const [customer, setCustomer] = useAtom(customerAtom);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      ordonnance: '',
      mutuelle: '',
    },
  });

  const onSubmit = async (data) => {
    setCustomer({ ...data, ...customer });
    navigation.navigate('verification');
  };

  const keyboardIsVisible = useKeyboard();

  return (
    <>
      <Header navigation={navigation} onlyLogo />
      <View style={styles.container}>
        <View style={[styles.header, keyboardIsVisible && { height: '5%' }]}>
          {!keyboardIsVisible && (
            <>
              <Title.MD style={{ marginBottom: 10 }}>Documents</Title.MD>
              <RegularText.MD>
                Veuillez demander les documents écrits ci-dessous au client.
              </RegularText.MD>
            </>
          )}
        </View>
        <ScrollView
          style={styles.bottomContainer}
          contentContainerStyle={[styles.bottomContainer, keyboardIsVisible && { height: '95%' }]}
          showsVerticalScrollIndicator={false}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ImagePickerComponent
                title="Ordonnance"
                onBlur={onBlur}
                value={value}
                onChange={onChange}
              />
            )}
            name="ordonnance"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <ImagePickerComponent
                title="Carte mutuelle / C2S"
                onBlur={onBlur}
                value={value}
                onChange={onChange}
              />
            )}
            name="mutuelle"
          />
        </ScrollView>
        <View
          style={{
            marginTop: 'auto',
            width: '100%',
            backgroundColor: colors.white,
            paddingHorizontal: 30,
            paddingBottom: 45,
          }}>
          <RegularText.SM style={{ textAlign: 'center', marginBottom: 10 }}>
            Veillez à prendre les documents dans leur intégralité
          </RegularText.SM>
          <GenericButton
            onPress={handleSubmit(onSubmit)}
            textStyle={{ color: colors.white }}
            style={{
              marginBottom: 10,
              backgroundColor: colors.secondary,
              width: '100%',
            }}
            title="Suivant"
          />
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
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
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

export default Documents;
