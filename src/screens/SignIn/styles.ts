import styled from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.View`
  height: 100%;
  justify-content: space-between;
  padding: ${RFPercentage(6)}px ${RFPercentage(3)}px;
`;

export const WrapperHeaderHelp = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const IconBack = styled(BorderlessButton)``;

export const IconHelp = styled(BorderlessButton)``;

export const WrapperLogin = styled.View``;

export const TextInfo = styled.Text`
  color: ${({theme}) => theme.colors.text};
  margin-bottom: ${RFPercentage(4)}px;
`;

export const DivUser = styled.View`
  flex-direction: row;
  padding: ${RFPercentage(1)}px;
  border: 1px solid white;
`;

export const InputUser = styled.TextInput`
  flex: 1;
  padding: ${RFPercentage(0)}px ${RFPercentage(1.5)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const DivPassword = styled.View`
  flex-direction: row;
  padding: ${RFPercentage(1)}px;
  border: 1px solid white;
`;

export const InputPassword = styled.TextInput`
  flex: 1;
  padding: ${RFPercentage(0)}px ${RFPercentage(1.5)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const IconInput = styled(BorderlessButton)`
`;

export const Hr = styled.View`
  height: 100%;
  margin: ${RFPercentage(0)}px ${RFPercentage(2)}px;
  border: 1px solid white;
`;

export const WrapperPrivacyPolicy = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: ${RFPercentage(2)}px;
`;