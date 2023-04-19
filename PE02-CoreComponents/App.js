import React from 'react';
import { View, Text, Image, ScrollView, TextInput, StyleSheet } from 'react-native';
import { ImageAssets } from './assets/index';

const App = () => {
  return (
    <ScrollView>
      <View>
        <Image 
          source={ImageAssets.icon}
          style={{
            height: 250,
            width: 250,
            padding: 40,
            margin: 40
          }}/>
      </View>
      <Text>Which course did you like?</Text>
      <TextInput
        style={{
          height: 40,
          width: 300,
          borderColor: 'gray',
          borderWidth: 1,
          margin: 10
        }}
        defaultValue="ex. CS624"
      />
      <View>
        <Text style = {styles.title}>
          Core Requirements {'\n'}(24 Credits)
        </Text>
      </View>
      <View>
        <Text>CS 504 Software Engineering</Text>
        <Text>CS 506 Programming for Computing</Text>
        <Text>CS 519 Cloud Computing Overview</Text>
        <Text>CS 533 Computer Architecture</Text>
        <Text>CS 547 Secure Systems and Programs</Text>
        <Text>CS 622 Discrete Math and Algorithms for Computing</Text>
        <Text>DS 510 Artificial Intelligence for Data Science</Text>
        <Text>DS 620 Machine Learning & Deep Learning</Text>
      </View>
      <View>
        <Text style = {styles.title}>Depth of Study {'\n'}(6 Credits)</Text>
      </View>
      <View>
        <Text>CS 624 Full-Stack Development - Mobile App</Text>
        <Text>CS 628 Full-Stack Development - Web App</Text>
      </View>
      <View>
        <Text style = {styles.title}>Capstone Course {'\n'}(3 Credits)</Text>
      </View>
      <View>
        <Text>CS 687 Computer Science Capstone</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  title: {
    marginTop: 20,
    paddingVertical: 8,
    backgroundColor: 'yellow',
    color: 'black',
    textAlign: 'left',
    fontSize: 45,
    fontWeight: 'bold',
  },
});


export default App
