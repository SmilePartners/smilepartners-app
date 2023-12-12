import React from 'react'
import { RegularText } from '../../../components/atoms/Typography'
import { Header } from '../../../components/atoms/Header'
import colors from '../../../utils/colors'
import NavBar from '../../../components/atoms/NavBar'
import { useAtom } from 'jotai'
import { tokenAtom } from '../../../store/atoms/token'

const Home = ({ navigation }) => {
  const [token] = useAtom(tokenAtom)

  console.log('ici', token)
  return (
        <>
            <Header backgroundStyle={{ backgroundColor: colors.grey }} onlyLogo navigation={navigation} />
            <RegularText.MD>code: {token}</RegularText.MD>
            <NavBar />
        </>
  )
}

export default Home
