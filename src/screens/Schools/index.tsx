import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { Header } from '../../components/Header';
import { SchoolCard } from '../../components/SchoolCard';
import { useAuth } from '../../hooks/auth';

import {
  Container,
  BackgroundSearch,
  SchoolScroll,
  DivSearch,
  IconSearch,
  InputSearch,
} from './styles';

export function Schools() {
  const [searchSchool, setSearchSchool] = useState('');
  const { school } = useAuth();

  return (
    <Container>
      <Header />
      <BackgroundSearch>
        <DivSearch>
          <IconSearch>
            <MaterialIcons 
              name="search"
              size={25}
              color={'#C3C3C3'}
            />
          </IconSearch>

          <InputSearch
            placeholder="Busca"
            autoCapitalize="none"
            autoCorrect={false}
            placeholderTextColor="#C3C3C3"
            onChangeText={setSearchSchool}
            value={searchSchool}
          />
        </DivSearch>
      </BackgroundSearch>

      <SchoolScroll>
        {school.map(cardSchool => 
          <SchoolCard 
            key={cardSchool.contexto}
            iconImg={cardSchool.urlLogoContexto}
            nameSchool={cardSchool.nomeAplicacao}
            urlSchool={cardSchool.contexto}
            token={cardSchool.token}
          />
        )}
      </SchoolScroll>
    </Container>
  );
}