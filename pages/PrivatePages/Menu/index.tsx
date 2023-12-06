import React from 'react'
import { RegularText } from "../../../components/atoms/Typography"
import { Header } from '../../../components/atoms/Header'
import colors from '../../../utils/colors'
import NavBar from '../../../components/atoms/NavBar'
import { useAtom } from 'jotai'
import { tokenAtom } from '../../../store/atoms/token'
import { Pressable } from 'react-native'


const Menu = ({ navigation }) => {
    const [, setToken] = useAtom(tokenAtom)

    return (
        <>
            <Header backgroundStyle={{ backgroundColor: colors.grey }} onlyLogo navigation={navigation} />
            <Pressable onPress={() => setToken('')}>
            <RegularText.MD>logout</RegularText.MD>
            </Pressable>

            <NavBar />
        </>
    )
}

export default Menu