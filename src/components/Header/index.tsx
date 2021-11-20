import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  Content,
  IconBack,
  TitleHeader,
} from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <IconBack>
          <MaterialIcons 
            name="arrow-back-ios"
            size={30}
            color={'white'}
          />
        </IconBack>
        <TitleHeader>Selecione a sessão principal</TitleHeader>
      </Content>
    </Container>
  );
}