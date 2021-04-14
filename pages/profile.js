import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const Account = ({ route, navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16
            }}>
          </Text>
          <Button
            onPress={() => navigation.navigate('Home')}
            title="Go to the Home Page"
            color="#57068c"

          />
          <Button
            title="LOGOUT"
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Login',
                  },
                ],
              })
            }
            color="#57068c"
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default Account;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
