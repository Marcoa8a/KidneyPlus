import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import OpenSettings from 'react-native-open-settings';

const Settings = () => {
    const openPhoneSettings = () => {
        OpenSettings.openSettings();
    };

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity onPress={openPhoneSettings}>
                <Text>Abrir Configuración del Celular</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Settings;