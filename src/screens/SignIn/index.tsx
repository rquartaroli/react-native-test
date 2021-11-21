import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { StackNavigationProp } from '@react-navigation/stack';

import { 
  Feather, 
  MaterialIcons, 
  SimpleLineIcons,
  Ionicons,
} from '@expo/vector-icons';

import {
  Container,
  Content,
  WrapperHeaderHelp,
  IconBack,
  IconHelp,
  WrapperLogin,
  TextInfo,
  DivUser,
  IconInput,
  DivPassword,
  InputUser,
  InputPassword,
  WrapperPrivacyPolicy,
  Hr,
} from './styles';
import { Button } from '../../components/Button';
import { ButtonHref } from '../../components/ButtonHref';
import { ButtonWithIcon } from '../../components/ButtonWithIcon';
import { useAuth } from '../../hooks/auth';
import { RootStackParamList } from '../../routes/stack.routes';

type signInScreenProp = StackNavigationProp<RootStackParamList, 'SignIn'>;

export function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<signInScreenProp>();

  const { signIn } = useAuth();

  async function handleSignIn() {
    await signIn(user, password);
    navigation.navigate('Schools');
  }

  return (
    <Container>
      <Content>
        <WrapperHeaderHelp>
          <IconBack>
            <MaterialIcons 
              name="arrow-back-ios"
              size={30}
              color={'white'}
            />
          </IconBack>

          <IconHelp>
            <Feather 
              name="help-circle"
              size={30}
              color={'white'}
            />
          </IconHelp>
        </WrapperHeaderHelp>

        <WrapperLogin>
          <TextInfo>Informe o usuário e a senha encaminhados pela escola</TextInfo>
          <DivUser>
            <IconInput>
              <SimpleLineIcons 
                name="user"
                size={30}
                color={'white'}
              />
            </IconInput>

            <InputUser 
              placeholder="Usuário"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#FFF"
              onChangeText={setUser}
              value={user}
            />
          </DivUser>

          <DivPassword>
            <IconInput>
              <Ionicons 
                name="ios-key-outline"
                size={30}
                color={'white'}
              />
            </IconInput>

            <InputPassword 
              placeholder="Senha"
              autoCapitalize="none"
              autoCorrect={false}
              placeholderTextColor="#FFF"
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </DivPassword>

          <Button title="Entrar" onPress={handleSignIn} />

          <WrapperPrivacyPolicy>
            <ButtonHref title="Esqueci a minha senha" onPress={() => {}} />
            <Hr />
            <ButtonHref title="Política de Privacidade" onPress={() => {}} />
          </WrapperPrivacyPolicy>
        </WrapperLogin>

        <ButtonWithIcon title="Entrar com celular" onPress={() => {}} />
      </Content>
    </Container>
  );
}