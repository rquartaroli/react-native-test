import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(RectButton)`
  width: 100%;
  margin-top: ${RFPercentage(4)}px;
  padding: ${RFPercentage(1.5)}px ${RFPercentage(0)}px;
  justify-content: center;
  align-items: center;

  background-color: ${({theme}) => theme.colors.text};
  border-radius: 4px;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.primary_light};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;