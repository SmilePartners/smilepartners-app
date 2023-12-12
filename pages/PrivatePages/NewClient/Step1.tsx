import React, { useContext, useEffect } from "react";
import { StyleSheet, Animated, View } from "react-native";
import { RegularText, Title } from "../../../components/atoms/Typography";
import { colors } from "../../../utils/colors";
import { Header } from "../../../components/atoms/Header";
import GenericInput from "../../../components/atoms/GenericInput";
import GenericButton from "../../../components/atoms/GenericButton";
import { useForm, Controller } from "react-hook-form";
import SocialButton from "../../../components/atoms/SocialButton";
import { useAuth } from "../../../hooks/useLogin/useLogin";
import useKeyboard from "../../../hooks/useKeyBoard";
import { useAtom } from "jotai";
import { customerAtom, tokenAtom } from "../../../store/atoms/token";

const NewClientStep1 = ({ navigation }) => {
    const [customer, setCustomer] = useAtom(customerAtom)

    const validateName = (value) => {
      if (!value || value.length < 2) return 'Le nom doit être au moins de 2 caractères';
      if (/\d/.test(value)) return 'Le nom ne doit pas contenir de chiffres';
      return true;
    };

    const validateBirthDate = (value) => {
      const regex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/\d{4}$/;
      return regex.test(value) || 'Date de naissance invalide (format JJ/MM/YYYY)';
    };
    
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      birthDate: customer.birthDate 
    },
  });

  const onSubmit = async (data) => {
    setCustomer({...data, ...customer})
    navigation.navigate('new-client-step2')
  };

  const keyboardIsVisible = useKeyboard()

  console.log(customer)

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
              validate: validateName
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="user-plus"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Prénom du client"
                error={errors.firstName}
                errorMessage={errors.firstName?.message}
              />
            )}
            name="firstName"
          />
                    <Controller
            control={control}
            rules={{
              required: true,
              validate: validateName
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="user-plus"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Nom du client"
                error={errors.lastName}
                errorMessage={errors.lastName?.message}
              />
            )}
            name="lastName"
          />
          <Controller
            control={control}
            rules={{
              required: true,
              validate: validateBirthDate
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="calendar"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Date de naissance du client"
                error={errors.birthDate}
                errorMessage={errors.birthDate?.message}
              />
            )}
            name="birthDate"
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

export default NewClientStep1;
