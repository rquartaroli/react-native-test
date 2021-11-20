import { BorderlessButton } from 'react-native-gesture-handler';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const BackgroundSearch = styled.View`
  height: ${RFValue(60)}px;
  justify-content: center;
  background-color: #C3C3C3;
`;

export const SchoolScroll = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
  padding: ${RFPercentage(0)}px ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(1)}px;
`;

export const DivSearch = styled.View`
  flex-direction: row;
  height: ${RFValue(40)}px;
  margin: ${RFPercentage(2)}px;
  background-color: ${({theme}) => theme.colors.text};
  border-radius: 10px;
`;

export const IconSearch = styled(BorderlessButton)`
  margin: ${RFPercentage(1)}px;
`;

export const InputSearch = styled.TextInput`
  flex: 1;
  color: #C3C3C3;
  font-size: ${RFValue(18)}px;
`;
