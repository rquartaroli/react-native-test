import styled from 'styled-components/native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { BorderlessButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  background-color: transparent;
  align-items: center;
  margin: ${RFPercentage(0)}px ${RFPercentage(3)}px;
`;

export const WrapperIconNotification = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const IconNotification = styled.View`
  width: ${RFValue(20)}px;
  height: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(1)}px;
  margin-left: ${RFPercentage(2)}px;
  background-color: ${({theme}) => theme.colors.notification};
  border-radius: ${RFValue(10)}px;
  z-index: 2;
`;

export const IconNotificationTransparent = styled.View`
  width: ${RFValue(20)}px;
  justify-content: center;
  align-items: center;
  margin-top: ${RFPercentage(1)}px;
  background-color: transparent;
  border-radius: ${RFValue(10)}px;
  z-index: 2;
`;

export const IconNumberNotification = styled.Text`
  align-items: flex-end;
  color: ${({theme}) => theme.colors.text};
`;

export const IconFooter = styled(BorderlessButton)`
  margin-top: -${RFPercentage(2)}px;
`;

export const IconTitle = styled.Text`
  color: #C3C3C3;
  font-size: ${RFValue(10)}px;
`;