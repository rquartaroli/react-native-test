import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import {
  Container,
  IconImage,
  WrapperIconDetails,
  SchoolDetails,
  NameSchool,
  UrlSchool,
  IconForward,
} from './styles';

interface Props {
  iconImg: string;
  nameSchool: string;
  urlSchool: string;
}

export function SchoolCard({iconImg, nameSchool, urlSchool}: Props) {
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

      <IconForward>
        <MaterialIcons 
          name="arrow-forward-ios"
          size={22}
          color={'#C3C3C3'}
        />
      </IconForward>
    </Container>
  );
}