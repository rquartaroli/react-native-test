import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import {
  Container,
  WrapperIconNotification,
  IconNotification,
  IconNumberNotification,
  IconFooter,
  IconTitle,
  IconNotificationTransparent,
} from './styles';

interface Props {
  numberNotification: string;
  nameIcon: any;
  titleNotification: string;
  isActive?: boolean;
}

export function IconNavigation({numberNotification, nameIcon, titleNotification, isActive = false}: Props) {
  return (
    <Container>
      {numberNotification != ''
      ?
        <WrapperIconNotification>
          <IconNotification>
            <IconNumberNotification>{numberNotification}</IconNumberNotification>
          </IconNotification>
        </WrapperIconNotification>
      :
        <WrapperIconNotification>
          <IconNotificationTransparent>
            <IconNumberNotification>{numberNotification}</IconNumberNotification>
          </IconNotificationTransparent>
        </WrapperIconNotification>
      }
      
      <IconFooter>
        <AntDesign 
          name={nameIcon}
          size={30}
          color={'#C3C3C3'}
        />
      </IconFooter>

      <IconTitle>{titleNotification}</IconTitle>
    </Container>
  );
}