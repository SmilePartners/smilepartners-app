import React, { useContext } from "react";
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

const Login = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "lorenzohiver1@gmail.com",
      password: "Lorenzo199!",
    },
  });

  const { login, error, isLoading } = useAuth();

  const onSubmit = async (data) => {
    login(data)
  };

  const keyboardIsVisible = useKeyboard()

  return (
    <>
      <Header navigation={navigation} />
      <View style={styles.container}>
        <View style={[styles.header, keyboardIsVisible && { height: '5%' }]}>
          {!keyboardIsVisible && (          
            <>
          <Title.MD style={{ marginBottom: 10 }}>Se connecter</Title.MD>
          <RegularText.MD>
            Utilisez les identifiants que vous avez saisis lors de la création
            de votre compte.
          </RegularText.MD>
          </>
          )}

        </View>
        <View style={[styles.bottomContainer, keyboardIsVisible && { height: '95%' }]}>
          <Controller
            control={control}
            rules={{
              required: true,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Veuillez entrer un email valide.",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="at-sign"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Email"
                inputMode="email"
                error={errors.email}
                errorMessage={errors.email?.message}
              />
            )}
            name="email"
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <GenericInput
                icon="key"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholder="Mot de passe"
                error={errors.password}
                errorMessage={errors.password?.message}
                secureTextEntry={true}
              />
            )}
            name="password"
          />
          <RegularText.SM style={styles.forgotPassword}>
            Mot de passe oublié ?
          </RegularText.SM>
          <GenericButton
            onPress={handleSubmit(onSubmit)}
            textStyle={{ color: colors.white }}
            style={{
              marginTop: 25,
              marginBottom: 10,
              backgroundColor: colors.secondary,
              width: "100%",
            }}
            title="Se connecter"
            disable={isLoading}
          />
          {error && (
            <RegularText.SM style={{ color: 'red' }}>Vos identifiants sont incorrects, veuillez réessayer.</RegularText.SM>
          )}
          <View style={styles.socialContainer}>
            <SocialButton type="google" title="Se connecter avec Google" />
            <SocialButton type="fb" title="Se connecter avec Facebook" />
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

export default Login;
