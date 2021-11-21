import React, { useEffect } from 'react';
import { ActivityIndicator } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import {
  Container,
  ImageLogo,
} from './styles';
import { RootStackParamList } from '../../routes/stack.routes';
import { useAuth } from '../../hooks/auth';

interface Params {
  imageUrl: string;
  contexto: string;
  token: string;
  nameSchool: string;
}

type loadingScreenProp = StackNavigationProp<RootStackParamList, 'LoadingPage'>;

export function LoadingPage() {
  const navigation = useNavigation<loadingScreenProp>();
  const route = useRoute();
  const { imageUrl, contexto, token, nameSchool } = route.params as Params;
  const { chargeSchool } = useAuth();

  useEffect(() => {
    async function fetchChargeSchool() {
      await chargeSchool(contexto, token);

      navigation.navigate('FeedPage',{
        imageUrl: imageUrl,
        nameSchool: nameSchool,
      });
    }
    fetchChargeSchool();
    
  },[]);

  return (
    <Container>
      <ImageLogo 
        source={{
          uri: imageUrl
        }}
      />

      <ActivityIndicator 
        color={'#C3C3C3'}
        size="large"
      />
    </Container>
  );
}
