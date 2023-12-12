import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, StyleSheet, Platform } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Picker } from '@react-native-picker/picker';
import colors from '../../utils/colors';

const SelectInput = ({ icon, error, errorMessage, selectedValue, onValueChange, items, placeholder, ...rest }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [displayValue, setDisplayValue] = useState('');

  const handleValueChange = (itemValue, itemIndex) => {
      if(itemValue === 'placeholder') {
        return
      }
      setDisplayValue(items[itemIndex - 1].label)
      onValueChange(itemValue)
      setModalVisible(false)
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, error && styles.errorInput]}>
          {icon && <Feather color={colors.secondary} name={icon} size={24} style={styles.icon} />}
          <Text style={styles.input}>{displayValue || placeholder}</Text>
        <Feather color={colors.secondary} name={'chevron-down'} size={24} style={styles.icon} />

        </View>
      </TouchableWithoutFeedback>
      {error && <Text style={styles.errorText}>{errorMessage}</Text>}

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
      <Feather name="x" size={24} color="black" style={styles.closeIcon} />
    </TouchableWithoutFeedback>
          <Picker
            selectedValue={selectedValue}
            onValueChange={handleValueChange}
            style={styles.picker}
            placeholder='testdgs'
          >
            <Picker.Item label={placeholder} value={'placeholder'} />
            {items.map((item, index) => (
              <Picker.Item key={index} label={item.label} value={item.value} />
            ))}
          </Picker>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderRadius: 90,
    paddingHorizontal: 25,
    paddingVertical: Platform.OS === 'android' ? 0 : 10,
    backgroundColor: colors.grey,
    borderWidth: 1,
    borderColor: colors.grey,
  },
  closeIcon: {
    position: 'absolute',
    top: 30,
    right: 30,
    zIndex: 1, 
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 5,
    color: colors.secondary,
    fontFamily: 'Ubuntu_400Regular',
  },
  modalView: {
    marginTop: 22,
    backgroundColor: 'white',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: '100%',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  picker: {
    width: '100%',
  },
  errorInput: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 5,
    marginLeft: 10,
  },
});

export default SelectInput;
