import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: ${RFPercentage(0.5)}px;
  margin-bottom: ${RFPercentage(0.5)}px;
`;

export const IconImage = styled.Image`
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
  margin-right: ${RFPercentage(2)}px;
`;

export const WrapperIconDetails = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const SchoolDetails = styled.View``;

export const NameSchool = styled.Text`
  color: #C3C3C3;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const UrlSchool = styled.Text`
  color: #C3C3C3;
  font-size: ${RFValue(14)}px;
`;

export const IconForward = styled(BorderlessButton)`
  margin-right: ${RFPercentage(1)}px;
`;