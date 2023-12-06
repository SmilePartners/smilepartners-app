import React from 'react'
import { StyleSheet, View } from 'react-native'
import { RegularText, Title } from '../../../components/atoms/Typography'
import { colors } from '../../../utils/colors'
import { Header } from '../../../components/atoms/Header'
import GenericInput from '../../../components/atoms/GenericInput'
import GenericButton from '../../../components/atoms/GenericButton'
import { useForm, Controller } from 'react-hook-form'
import useKeyboard from '../../../hooks/useKeyBoard'
import { useAtom } from 'jotai'
import { customerAtom } from '../../../store/atoms/token'

const Documents = ({ navigation }) => {
  const [customer, setCustomer] = useAtom(customerAtom)

  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: customer.firstName,
      lastName: customer.lastName,
      birthDate: customer.birthDate
    }
  })

  const onSubmit = async (data) => {
    setCustomer({ ...data, ...customer })
  }

  const keyboardIsVisible = useKeyboard()

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
        <View style={[styles.bottomContainer, keyboardIsVisible && { height: '95%' }]}>
          <Controller
            control={control}
            rules={{
              required: true
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <RegularText.SM>dfsd</RegularText.SM>
            )}
            name="firstName"
          />
          <Controller
            control={control}
            rules={{
              required: true
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
          <View style={{ marginTop: 'auto', width: '100%' }}>
            <GenericButton
              onPress={handleSubmit(onSubmit)}
              textStyle={{ color: colors.white }}
              style={{
                marginTop: 25,
                marginBottom: 10,
                backgroundColor: colors.secondary,
                width: '100%'
              }}
              title="Suivant"
            />
          </View>
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    backgroundColor: colors.primary
  },
  header: {
    justifyContent: 'center',
    height: '25%',
    paddingHorizontal: 30
  },
  bottomContainer: {
    alignItems: 'center',
    height: '75%',
    backgroundColor: colors.white,
    paddingVertical: 40,
    paddingHorizontal: 30,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45
  },
  forgotPassword: {
    marginLeft: 'auto',
    marginRight: 10,
    fontFamily: 'Ubuntu_500Medium'
  },
  socialContainer: {
    marginTop: 'auto'
  }
})

export default Documents
