import React from 'react';
import { useRoute } from '@react-navigation/core';

import {
  Container,
  HeaderLogo,
  ContainerHeaderLogo,
  ImageLogo,
  TitleSchoolHeader,
  ScroolFeed,
  FeedCard,
  FeedHeaderCard,
  FeedHeaderImageContainer,
  FeedHeaderImage,
  FeedContainerAutor,
  FeedTitleSchool,
  FeedText,
  FeedImageCenter,
  FeedFooterNavigation,
} from './styles';
import { useAuth } from '../../hooks/auth';
import { IconNavigation } from '../../components/IconNavigation';

interface Params {
  imageUrl: string;
  nameSchool: string;
}

export function FeedPage() {
  const route = useRoute();
  const { imageUrl, nameSchool } = route.params as Params;

  const { feed } = useAuth();

  // const nameSchool = 'Provisório';
  // const imageUrl = 'https://eem-teste.s3.amazonaws.com/exemplo.escolaemmovimento.com.br/Documentos/6793_d9c776ee-52bb-4a36-92bb-9a1a5bdc4ecf.jpg?AWSAccessKeyId=AKIAJYOFO2QSKGWNZYXA&Expires=1893702677&Signature=h2AHpIgGGuaNO2iSmCfFPgwr7wc%3D';

  return (
    <Container>
      <HeaderLogo>
        <ContainerHeaderLogo>
          <ImageLogo source={{
            uri: imageUrl
          }} />
          <TitleSchoolHeader>{nameSchool}</TitleSchoolHeader>
        </ContainerHeaderLogo>
      </HeaderLogo>

      <ScroolFeed>
        {feed.map((feedItem) => 
          <FeedCard key={feedItem.idMensagem}>
            <FeedHeaderCard>
              <FeedHeaderImageContainer>
                <FeedHeaderImage source={{
                  uri: feedItem.urlPublica ? feedItem.urlPublica : imageUrl
                }} />
                <FeedContainerAutor>
                  <FeedTitleSchool>{feedItem.sumario}</FeedTitleSchool>
                  <FeedText>Por: {feedItem.remetente}</FeedText>
                </FeedContainerAutor>
              </FeedHeaderImageContainer>
              
              <FeedText>{feedItem.data}</FeedText>
            </FeedHeaderCard>

            {feedItem.urlPublica 
            &&
              <FeedImageCenter source={{
                uri: feedItem.urlPublica
              }} style={{ resizeMode: 'contain' }} />
            }
            

          </FeedCard>
        )}
        
      </ScroolFeed>
      <FeedFooterNavigation>
        <IconNavigation 
          numberNotification="" 
          nameIcon="car"
          titleNotification="Notícias"
        />
        <IconNavigation 
          numberNotification="8" 
          nameIcon="car"
          titleNotification="Escrever"
        />
        <IconNavigation 
          numberNotification="6" 
          nameIcon="car"
          titleNotification="Menu"
        />
        <IconNavigation 
          numberNotification="" 
          nameIcon="car"
          titleNotification="Chegando"
        />
        <IconNavigation 
          numberNotification="93" 
          nameIcon="car"
          titleNotification="Perfil"
        />
      </FeedFooterNavigation>

    </Container>
  );
}