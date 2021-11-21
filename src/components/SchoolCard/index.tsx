import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  IconImage,
  WrapperIconDetails,
  SchoolDetails,
  NameSchool,
  UrlSchool,
  IconForward,
} from './styles';
import { RootStackParamList } from '../../routes/stack.routes';

type schoolScreenProp = StackNavigationProp<RootStackParamList, 'Schools'>;

interface Props {
  iconImg: string;
  nameSchool: string;
  urlSchool: string;
  token: string;
}

export function SchoolCard({ iconImg, nameSchool, urlSchool, token }: Props) {

  const navigation = useNavigation<schoolScreenProp>();

  function handleNavigationNextPage() {
    navigation.navigate('LoadingPage', { 
      imageUrl: iconImg,
      contexto: urlSchool,
      token: token,
      nameSchool: nameSchool,
    });
  }

  return (
    <Container>
      <WrapperIconDetails>
        <IconImage source={{
          uri: iconImg
        }} />
        <SchoolDetails>
          <NameSchool>{nameSchool}</NameSchool>
          <UrlSchool>{urlSchool}</UrlSchool>
        </SchoolDetails>
      </WrapperIconDetails>

      <IconForward onPress={handleNavigationNextPage}>
        <MaterialIcons 
          name="arrow-forward-ios"
          size={22}
          color={'#C3C3C3'}
        />
      </IconForward>
    </Container>
  );
}