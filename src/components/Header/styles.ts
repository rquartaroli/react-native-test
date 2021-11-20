import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFValue(90)}px;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFPercentage(0)}px ${RFPercentage(3)}px;
  margin-bottom: ${RFPercentage(1.5)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const IconBack = styled(BorderlessButton)`
  margin-right: ${RFPercentage(1)}px;
`;

export const TitleHeader = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;