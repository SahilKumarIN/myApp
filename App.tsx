import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  ScrollView,
  ToastAndroid
} from 'react-native';
import FlatCard from "./components/FlatCard";

function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 4,
          marginHorizontal: 10,
          marginVertical: 4,
          flexDirection: "row-reverse",
          borderBottomColor: "grey",
          borderBottomWidth: 2,
          position: "relative",
          zIndex: 99999,
          top: 0
        }}>
          <Text
            selectable
            onPress={() => {
              ToastAndroid.show("Hello All Pressed", ToastAndroid.SHORT);
            }}
            style={{
              color: "black",
              fontSize: 30,
            }}
          >
            Sahil Kumar
          </Text>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 50
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1683009427041-d810728a7cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8"
            }}
          />
        </View>
        <View
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <View
            style={{
              borderRadius: 8,
              borderBlockColor: "black",
              borderWidth: 2,
              width: 375,
              height: 300,
              overflow: "hidden",
              elevation: 10,
              shadowColor: 'red',
              shadowOffset: {
                width: 1,
                height: 1
              },
              shadowRadius: 40
            }}>

            <Image 
              source={{
                uri: "https://krsahil.tech/Assets/Sahil%20Kumar.png"
              }}

            style={{
              width: 375,
              height: 300,
              overflow: "hidden",
              
            }}
              

            />


          </View>
        </View>

        <FlatCard />
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;