/* eslint-disable prettier/prettier */
import {View, Text, Image} from 'react-native';
import React from 'react';
import {CardProps} from './CardProp';
import styles from '../../styles/mainStyle';

const Card = (props: CardProps) => {
  return (
    <View>
      <Text style={styles.text1}>{props.title}</Text>
      <Image style={styles.anh} source={props.imgUrl} />
    </View>
  );
};

export default Card;
