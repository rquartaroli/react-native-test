import styled from 'styled-components/native';
import { BorderlessButton, RectButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export const WrapperContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFPercentage(0)}px ${RFPercentage(1)}px;
  border: 1px solid white;
`;

export const Container = styled(RectButton)`
  width: 100%;
  padding: ${RFPercentage(1.5)}px ${RFPercentage(0)}px;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border-radius: 4px;
`;

export const IconButton = styled(BorderlessButton)`
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  margin-right: ${RFPercentage(1.5)}px;
`;