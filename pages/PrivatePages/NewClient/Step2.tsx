import React, { useContext, useEffect } from "react";
import { StyleSheet, Animated, View } from "react-native";
import { RegularText, Title } from "../../../components/atoms/Typography";
import { colors } from "../../../utils/colors";
import { Header } from "../../../components/atoms/Header";
import GenericInput from "../../../components/atoms/GenericInput";
import GenericButton from "../../../components/atoms/GenericButton";
import { useForm, Controller } from "react-hook-form";
import useKeyboard from "../../../hooks/useKeyBoard";
import { useAtom } from "jotai";
import { customerAtom, tokenAtom } from "../../../store/atoms/token";

const NewClientStep2 = ({ navigation }) => {
    const [customer, setCustomer] = useAtom(customerAtom)

    const validatePhoneNumber = (value) => {
        if (!value) return 'Numéro de téléphone requis';
        if (!/^(06|07)\d{8}$/.test(value)) return 'Numéro de téléphone invalide (doit commencer par 06 ou 07 et contenir 10 chiffres)';
        return true;
      };
      
      const validateEmail = (value) => {
        if (!value) return 'Email requis';
        if (!/^\S+@\S+\.\S+$/.test(value)) return 'Format de l\'email invalide';
        return true;
      };
    
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      numberPhone: customer.numberPhone,
      email: customer.email,
    },
  });

  const onSubmit = async (data) => {
    setCustomer({...customer, ...data})
    navigation.navigate('choose-glasses')
  };

  const keyboardIsVisible = useKeyboard()

  return (
    <>
      <Header navigation={navigation} onlyLogo />
      <View style={styles.container}>
        <View style={[styles.header, keyboardIsVisible && { height: '5%' }]}>
          {!keyboardIsVisible && (
            <>
          <Title.MD style={{ marginBottom: 10 }}>Nouveau client</Title.MD>
          <RegularText.MD>
            Pour commencer, saisissez les informations
            personnels du client.
          </RegularText.MD>
          </>
          )}

        </View>
        <View style={[styles.bottomContainer, keyboardIsVisible && { height: '95%' }]}>
          <Controller
            control={control}
            rules={{
              required: true,
              validate: validatePhoneNumber
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="smartphone"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Mobile du client"
                error={errors.numberPhone}
                errorMessage={errors.numberPhone?.message}
              />
            )}
            name="numberPhone"
          />
                    <Controller
            control={control}
            rules={{
              required: true,
              validate: validateEmail
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="mail"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email du client"
                error={errors.email}
                errorMessage={errors.email?.message}
              />
            )}
            name="email"
          />
          <View style={{ marginTop: 'auto', width: '100%' }}>
          <GenericButton
            onPress={handleSubmit(onSubmit)}
            textStyle={{ color: colors.white }}
            style={{
              marginTop: 25,
              marginBottom: 10,
              backgroundColor: colors.secondary,
              width: "100%",
            }}
            title="Étape suivante"
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
    height: "100%",
    backgroundColor: colors.primary,
  },
  header: {
    justifyContent: "center",
    height: "25%",
    paddingHorizontal: 30,
  },
  bottomContainer: {
    alignItems: "center",
    height: "75%",
    backgroundColor: colors.white,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
  },
  forgotPassword: {
    marginLeft: "auto",
    marginRight: 10,
    fontFamily: "Ubuntu_500Medium",
  },
  socialContainer: {
    marginTop: "auto",
  },
});

export default NewClientStep2;
