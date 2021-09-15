/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import IconArrow from 'react-native-vector-icons/Entypo';
import {Menu, MenuItem} from 'react-native-material-menu';
import {Container, AnchorText} from './styles';
import {StyleSheet} from 'react-native';

export default ({orderBy = '', onSetOrderBy = null}) => {
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const onItemPress = value => {
    onSetOrderBy(value);
    setVisible(false);
  };

  return (
    <Container>
      <Menu
        style={{backgroundColor: '#202a36'}}
        visible={visible}
        anchor={
          <AnchorText onPress={showMenu}>
            {orderBy}
            {'   '}
            <IconArrow name="chevron-down" size={20} color="#00d172" />
          </AnchorText>
        }
        onRequestClose={hideMenu}>
        <MenuItem
          textStyle={styles.menuItem}
          onPress={() => onItemPress('Menor Preço')}>
          Menor Preço
        </MenuItem>
        <MenuItem
          textStyle={styles.menuItem}
          onPress={() => onItemPress('Maior Preço')}>
          Maior Preço
        </MenuItem>
        <MenuItem
          textStyle={styles.menuItem}
          onPress={() => onItemPress('Ordenar')}>
          Padrão
        </MenuItem>
      </Menu>
    </Container>
  );
};

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'center',
    color: '#d1d1d1',
    fontFamily: 'Roboto-Regular',
    fontSize: 16,
  },
});
