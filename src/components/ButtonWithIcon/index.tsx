import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

import {
  WrapperContainer,
  Container,
  IconButton,
  Title,
} from './styles';

interface Props extends RectButtonProps{
  title: string;
  onPress: () => void;
}

export function ButtonWithIcon({title, onPress, ...rest}: Props) {
  return (
    <WrapperContainer>
      <IconButton>
        <FontAwesome5 
          name="mobile-alt"
          size={30}
          color={'white'}
        />
      </IconButton>
      
      <Container onPress={onPress} {...rest}>
        <Title>{title}</Title>
      </Container>
    </WrapperContainer>
  );
}