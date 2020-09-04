import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';

import IonIcons from 'react-native-vector-icons/Ionicons';

const LoginScreen = ({navigation}) => {
  const [state, setState] = useState({
    name: '',
  });

  const continueHandle = () => {
    navigation.navigate('Chat', {name: state.name});
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle} />
      <View style={{marginTop: 64}}>
        <Image
          source={require('../assets/images/chat.png')}
          style={styles.imageTop}
        />
      </View>
      <View style={{marginHorizontal: 32}}>
        <Text style={styles.header}>Username</Text>
        <TextInput
          style={styles.input}
          placeholder="DesignIntoCode"
          value={state.name}
          onChangeText={(text) => setState({...state, name: text})}
        />
        <View style={{alignItems: 'flex-end', marginTop: 64}}>
          <TouchableOpacity
            style={styles.continue}
            onPress={() => {
              continueHandle();
            }}>
            <IonIcons name="md-arrow-forward" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F5F7',
  },
  circle: {
    width: 500,
    height: 500,
    borderRadius: 500 / 2,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -120,
    top: -20,
  },
  imageTop: {
    marginTop: 50,
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
  header: {
    fontWeight: '800',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 32,
  },
  input: {
    marginTop: 32,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: '600',
  },
  continue: {
    width: 70,
    height: 70,
    borderRadius: 70 / 2,
    backgroundColor: '#9075E3',
    alignItems: "center",
    justifyContent: "center",
  },
});
