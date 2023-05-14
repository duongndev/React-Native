import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';
import Card from './components/Card/Card';
import styles from './styles/mainStyle';

let imgUrl = {
  uri: 'https://i.pinimg.com/736x/eb/58/cc/eb58cc5cfecde2911c1bd9bb8df69ce7.jpg',
};

const App = () => {
  const [showCard, setShowCard] = useState(false);
  const changeShowCard = () => {
    setShowCard(!showCard);
  };
  return (
    <View>
      <Card title={'anh dep'} imgUrl={imgUrl} />
      <Text style={styles.container}>Hello</Text>
      {showCard ? <Card title={'anh dep'} imgUrl={imgUrl} /> : null}
      <Button title="Hide/show" onPress={changeShowCard} />
    </View>
  );
};
export default App;
