import React, { useState } from 'react';
import { Button, Image, View, Modal, TouchableOpacity, Text } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RegularText } from './Typography';
import colors from '../../utils/colors';
import { Feather } from '@expo/vector-icons';

export default function ImagePickerComponent({ title, onChange, onBlur, value }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      onChange(result.uri);
      setSelectedImage(result.uri);
      setModalVisible(false);
    }
  };

  const takePhoto = async () => {
    const cameraPermission = await ImagePicker.requestCameraPermissionsAsync();

    if (cameraPermission.status === 'granted') {
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        onChange(result.uri);
        setSelectedImage(result.uri);
        setModalVisible(false);
      }
    } else {
      alert('Camera permission is required!');
    }
  };

  return (
    <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
      <RegularText.MD style={{ fontFamily: 'Ubuntu_500Medium', marginBottom: 10 }}>
        {title}
      </RegularText.MD>
      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: colors.grey,
          borderRadius: 25,
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 10,
          height: 140,
        }}
        onPress={() => {
          setModalVisible(true);
        }}>
        {selectedImage ? (
          <Image
            source={{ uri: selectedImage }}
            style={{ width: '90%', height: 100, borderRadius: 25 }}
          />
        ) : (
          <Feather name="camera" size={60} color={colors.secondary} />
        )}
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <View
            style={{
              margin: 20,
              backgroundColor: 'white',
              borderRadius: 20,
              padding: 35,
              alignItems: 'center',
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 4,
              elevation: 5,
            }}>
            <Button title="Choisir une photo dans la galerie" onPress={pickImage} />
            <Button title="Prendre une photo" onPress={takePhoto} />
            <Button
              title="Cancel"
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            />
          </View>
        </View>
      </Modal>
    </View>
  );
}
