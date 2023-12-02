import React from 'react';
import { Text, TextProps, StyleSheet } from 'react-native';

type RegularTextSize = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';
type TitleSize = 'XS' | 'SM' | 'MD' | 'LG' | 'XL';


interface TypographyProps extends TextProps {
    children: React.ReactNode;
}

const regularTextStyles = StyleSheet.create({
    XS: { fontSize: 12 },
    SM: { fontSize: 14 },
    MD: {
        fontFamily: 'Ubuntu_400Regular',
        fontSize: 16,
        lineHeight: 26,
    },
    LG: { fontSize: 18 },
    XL: { fontSize: 20 },
});

const titleStyle = StyleSheet.create({
    XS: { fontSize: 12 },
    SM: { fontSize: 14 },
    MD: {
        fontWeight: 'bold',
        fontFamily: 'Ubuntu_700Bold',
        fontSize: 32,
    },
    LG: { fontSize: 18 },
    XL: { fontSize: 20 },
});

const createTextComponent = (size: RegularTextSize) => {
    return ({ style, ...props }: TypographyProps) => (
        <Text style={[regularTextStyles[size], style]} {...props} />
    );
};

const createTitleComponent = (size: TitleSize) => {
    return ({ style, ...props }: TypographyProps) => (
        <Text style={[titleStyle[size], style]} {...props} />
    );
};

export const RegularText = {
    XS: createTextComponent('XS'),
    SM: createTextComponent('SM'),
    MD: createTextComponent('MD'),
    LG: createTextComponent('LG'),
    XL: createTextComponent('XL'),
};

export const Title = {
    XS: createTitleComponent('XS'),
    SM: createTitleComponent('SM'),
    MD: createTitleComponent('MD'),
    LG: createTitleComponent('LG'),
    XL: createTitleComponent('XL'),
}
