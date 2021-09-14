/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import IconArrow from 'react-native-vector-icons/Entypo';
import {Menu, MenuItem} from 'react-native-material-menu';
import {Container, AnchorText} from './styles';

export default () => {
  const [SelectedFilter, setSelectedFilter] = useState('Filtros');
  const [visible, setVisible] = useState(false);

  const hideMenu = () => setVisible(false);

  const showMenu = () => setVisible(true);

  const onItemPress = value => {
    setSelectedFilter(value);
    setVisible(false);
  };

  return (
    <Container>
      <Menu
        style={{backgroundColor: '#202a36'}}
        visible={visible}
        anchor={
          <AnchorText onPress={showMenu}>
            {SelectedFilter}
            {'   '}
            <IconArrow name="chevron-down" size={20} color="#00d172" />
          </AnchorText>
        }
        onRequestClose={hideMenu}>
        <MenuItem
          textStyle={{color: '#d1d1d1'}}
          onPress={() => onItemPress('Menor Preço')}>
          Menor Preço
        </MenuItem>
        <MenuItem
          textStyle={{color: '#d1d1d1'}}
          onPress={() => onItemPress('Maior Preço')}>
          Maior Preço
        </MenuItem>
      </Menu>
    </Container>
  );
};
