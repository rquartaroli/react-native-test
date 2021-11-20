import React, { useState } from 'react';
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

export function SignIn() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const { signIn } = useAuth();

  async function handleSignIn() {
    signIn(user, password);
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
              // secureTextEntry={true}
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