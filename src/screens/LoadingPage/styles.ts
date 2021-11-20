import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.text};
`;

export const ImageLogo = styled.Image`
  width: ${RFValue(250)}px;
  height: ${RFValue(250)}px;
  margin-bottom: ${RFPercentage(8)}px;
`;