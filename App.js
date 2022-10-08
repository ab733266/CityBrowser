import { StyleSheet, View, Image } from 'react-native';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import * as WebBrowser from 'expo-web-browser';
import Button from './Button';

const art = require('./assets/art.png');
const mile = require('./assets/mile.png');
const pier = require('./assets/pier.png');
const water = require('./assets/water.png');
const willis = require('./assets/willis.png');

const artLink = 'https://www.artic.edu/';
const mileLink = 'https://www.themagnificentmile.com/';
const pierLink = 'https://navypier.org/';
const waterLink = 'https://www.chicago.gov/city/en/depts/dca/supp_info/city_gallery_in_thehistoricwatertower.html';
const willisLink = 'https://www.willistower.com/';

function handleButtonPress(button) {
  WebBrowser.openBrowserAsync(button);
}

function ArtInstituteOfChicago() {
  return (
    <View style={styles.container}>
      <Image source={art} style={styles.photos} />
      <Button info style={styles.button} onPress={() => handleButtonPress(artLink)}>
          More Information
      </Button>
    </View>
  );
}

function MagnificentMile() {
  return (
    <View style={styles.container}>
      <Image source={mile} style={styles.photos} />
      <Button info style={styles.button} onPress={() => handleButtonPress(mileLink)}>
          More Information
      </Button>
    </View>
  );
}

function NavyPier() {
  return (
    <View style={styles.container}>
      <Image source={pier} style={styles.photos} />
      <Button info style={styles.button} onPress={() => handleButtonPress(pierLink)}>
          More Information
      </Button>
    </View>
  );
}

function WaterTower() {
  return (
    <View style={styles.container}>
      <Image source={water} style={styles.photos} />
      <Button info style={styles.button} onPress={() => handleButtonPress(waterLink)}>
          More Information
      </Button>
    </View>
  );
}

function WillisTower() {
  return (
    <View style={styles.container}>
      <Image source={willis} style={styles.photos} />
      <Button info style={styles.button} onPress={() => handleButtonPress(willisLink)}>
          More Information
      </Button>
    </View>
  );
}

const Drawer = createDrawerNavigator();

export default function App() {
  
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name='Art Institute of Chicago'
          component={ArtInstituteOfChicago}
        />
        <Drawer.Screen
          name='Magnificent Mile'
          component={MagnificentMile}
        />
        <Drawer.Screen
          name='Navy Pier'
          component={NavyPier}
        />
        <Drawer.Screen
          name='Water Tower'
          component={WaterTower}
        />
        <Drawer.Screen
          name='Willis Tower'
          component={WillisTower}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  photos: {
    width: 240,
    height: 360
  },
  button: {
    margin: 10,
  },
});
