import {StyleSheet, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, TextInput, Gap, Button, Select} from '../../components';
import {useForm, showMessage} from '../../utils';
import {useSelector, useDispatch} from 'react-redux';
import Axios from 'axios';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Jakarta',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector(state => state);

  const onSubmit = () => {
    console.log('form', form);
    const data = {
      ...registerReducer,
      ...form,
    };
    console.log('data register', data);
    dispatch({type: 'SET_LOADING', value: true});
    Axios.post('http://foodmarket-backend.buildwithangga.id/api/register', data)
      .then(res => {
        console.log('data success : ', res.data);

        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('file', photoReducer);

          Axios.post(
            'http://foodmarket-backend.buildwithangga.id/api/user/photo',
            photoForUpload,
            {
              headers: {
                Authorization: `${res.data.data.token_type} ${res.data.data.access_token}`,
                'Content-Type': 'multipart/form-data',
              },
            },
          )
            .then(resUpload => {
              console.log('success upload :', resUpload);
            })
            .catch(err => {
              showMessage('Upload Photo Tidak Berhasil');
            });
        }

        dispatch({type: 'SET_LOADING', value: false});
        showToast('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch(err => {
        console.log('sign up error : ', err.response.data.message);
        dispatch({type: 'SET_LOADING', value: false});
        showToast(err?.response?.data?.message);
      });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Address"
          subtitle="Make sure it’s valid"
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label="Phone No."
            placeholder="Type your phone number"
            value={form.phoneNumber}
            onChangeText={value => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label="Address"
            placeholder="Type your address"
            value={form.address}
            onChangeText={value => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label="House No."
            placeholder="Type your house number"
            value={form.houseNumber}
            onChangeText={value => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={value => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text="Continue" onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: '#E5E5E5'},
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
