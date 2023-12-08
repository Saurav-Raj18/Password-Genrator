import React, { useState } from 'react'
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Formik } from 'formik';
//Form validation
import *as Yup from 'yup'
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

//validation of password
const PasswordShema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, "Password must have at least 8 characters")
    .max(16, "Password must have at least 16 characters")
    .required('Length is required')
})

const App = () => {
  const [password, setpassword] = useState('');
  const [passwordGenrated, ispasswordGenerated] = useState(false);
  const [lowerCase, setlowerCase] = useState(false);
  const [upperCase, setupperCase] = useState(false);
  const [symbols, setsymbols] = useState(false);
  const [numbers, setnumbers] = useState(false);

  const generatePassword = (passwordLength: number) => {
    const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercase = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()-_=+[{]}|;:,<.>/?';
    let characters = ''
    if (uppercase) {
      for (let i = 0; i < uppercase.length; i++) {
        characters += uppercase[i];
      }
    }
    if (lowercase) {
      for (let i = 0; i < lowercase.length; i++) {
        characters += lowercase[i];
      }
    }
    if (numbers) {
      for (let i = 0; i < numbers.length; i++) {
        characters += numbers[i];
      }
    }
    if (symbols) {
      for (let i = 0; i < symbols.length; i++) {
        characters += symbols[i];
      }
    }
    const passwordResult = createPassword(passwordLength, characters);
    setpassword(passwordResult);
    ispasswordGenerated(!passwordGenrated);
  }

  const createPassword = (passwordLength: number, characters: string) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  }

  const resetPassword = () => {
    setlowerCase(false);
    setupperCase(false);
    setnumbers(false);
    setpassword('');
    setsymbols(false);
    ispasswordGenerated(false);
  }
  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={[styles.formContainer]}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{ passwordLength: '' }}
            validationSchema={PasswordShema}
            onSubmit={values => {
              // console.log(values);
              generatePassword(+values.passwordLength)
            }}
          >
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {
                      touched.passwordLength && errors.passwordLength && (
                        <Text style={styles.errorText}>
                          {errors.passwordLength}
                        </Text>
                      )
                    }

                  </View>
                  <TextInput style={styles.inputStyle}
                    value={values.passwordLength}
                    onChangeText={handleChange('passwordLength')}
                    placeholder='EX.8'
                    keyboardType='number-pad'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Lowercase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={lowerCase}
                    onPress={() => setlowerCase(!lowerCase)}
                    fillColor='#29AB87'
                  />
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include UpperCase</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={upperCase}
                    onPress={() => setupperCase(!upperCase)}
                    fillColor='#FED85D'
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={numbers}
                    onPress={() => setnumbers(!numbers)}
                    fillColor="#C9A0DC"
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Symbols</Text>
                  <BouncyCheckbox
                    disableBuiltInState
                    isChecked={symbols}
                    onPress={() => setsymbols(!symbols)}
                    fillColor="#FC80A5"
                  />
                </View >

                <View style={styles.formActions}>
                  <TouchableOpacity style={styles.primaryBtn} onPress={handleSubmit}>
                    <Text style={styles.primaryBtnTxt}>Generate Password</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => {
                    handleReset();
                    resetPassword();
                  }} style={styles.secondaryBtn}><Text style={styles.secondaryBtnTxt}>Reset</Text></TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
        </View>
        {passwordGenrated? (
          <View style={[styles.card, styles.cardElevated]}>
            <Text style={styles.subTitle}>Result:</Text>
            <Text style={styles.description}>Long Press to copy</Text>
            <Text selectable={true} style={styles.generatedPassword}>{password}</Text>
          </View>
        ) : null}

      </SafeAreaView>
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    // backgroundColor: 'pink'
  },
  formContainer: {
    margin: 8,
    padding: 8,
    // backgroundColor:'green',
    //alignItems: 'center',
    //justifyContent: 'center'
  },
  title: {
    fontSize: 32,
    fontWeight: '600',
    marginBottom: 15,
    // backgroundColor:'blue',
    padding: 5
  },
  subTitle: {
    fontSize: 26,
    fontWeight: '600',
    marginBottom: 2,
  },
  description: {
    color: '#758283',
    marginBottom: 8,
  },
  heading: {
    fontSize: 15,
  },
  inputWrapper: {
    marginBottom: 15,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    // backgroundColor:'yellow'
  },
  inputColumn: {
    flexDirection: 'column',
    // backgroundColor: 'purple'
  },
  inputStyle: {
    padding: 8,
    width: '30%',
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#16213e',
  },
  errorText: {
    fontSize: 12,
    color: '#ff0d10',
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  primaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#5DA3FA',
  },
  primaryBtnTxt: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700',
  },
  secondaryBtn: {
    width: 120,
    padding: 10,
    borderRadius: 8,
    marginHorizontal: 8,
    backgroundColor: '#CAD5E2',
  },
  secondaryBtnTxt: {
    color: 'red',
    textAlign: 'center',
    fontWeight: '700',
  },
  card: {
    padding: 12,
    borderRadius: 6,
    marginHorizontal: 12,
  },
  cardElevated: {
    backgroundColor: '#ffffff',
    elevation: 1,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  generatedPassword: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 12,
    color: 'black'
  },
})