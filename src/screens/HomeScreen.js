import React from 'react';
import {
  StyleSheet,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Linking,
  ImageBackground,
} from 'react-native';

import { Fonts, Colors } from '../constants';
import Button from '../components/Button';
import {
  Text,
  Title,
} from '../components/StyledText';

export default function HomeScreen({ isExtended, setIsExtended }) {
  const rnsUrl = 'http://netsolution.co.kr/';
  const handleClick = () => {
    Linking.canOpenURL(rnsUrl).then(supported => {
      if (supported) {
        Linking.openURL(rnsUrl);
      } else {
        console.log("Don't know how to open URI: " + rnsUrl);
      }
    });
  };

  return (
    <ImageBackground
      style={styles.bgImage}
      source={require('../../assets/images/background.png')}
    >
      <View style={styles.section}>
        <Text size={20} white>NET SOLUTION</Text>
      </View>
      <View style={styles.section}>
        <Text color="#19e7f7" size={15}>WEARABLE LIVE CAMERA</Text>
        <Text size={30} bold white style={styles.title}>Live Streaming 
</Text>
      </View>
      <View style={[styles.section, styles.sectionLarge]}>
        <Text color="#19e7f7" hCenter size={15} style={styles.description}> By YOUTUBE & FACEBOOK</Text>
        <View style={styles.priceContainer}>
          <View style={{ flexDirection: 'row' }}>
            <Text white bold size={50} style={styles.price}>{isExtended ? '$1299.95' : '$949.95'}</Text>
          </View>
          <TouchableOpacity style={styles.priceLink} onPress={() => isExtended ? setIsExtended(false) : setIsExtended(true)}>
            <Text white size={14}>{isExtended ? 'Full HD Camera' : 'HD Camera'}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.section}>
        <Button
          style={{ alignSelf: 'stretch' }}
          primary
          rounded
          bgColor="#FF1358"
          caption="Purchase now"
          onPress={handleClick}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  bgImage: {
    flex: 1,
  },
  section: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sectionLarge: {
    flex: 2,
    justifyContent: 'space-around',
  },
  sectionHeader: {
    marginBottom: 8,
  },
  priceContainer: {
    alignItems: 'center',
  },
  description: {
    padding: 15,
    lineHeight: 25,
  },
  titleDescription: {
    color: '#19e7f7',
    textAlign: 'center',
    fontFamily: Fonts.primaryRegular,
    fontSize: 15,
  },
  title: {
    marginTop: 30,
  },
  price: {
    marginBottom: 5,
  },
  priceLink: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.primary,
  },
});
