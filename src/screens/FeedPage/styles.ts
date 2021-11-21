import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const HeaderLogo = styled.View`
  height: ${RFValue(90)}px;
  justify-content: flex-end;
  background-color: ${({theme}) => theme.colors.text};
  border: 1px solid #C3C3C3;
`;

export const ContainerHeaderLogo = styled.View`
  flex-direction: row;
  align-items: center;
  margin: ${RFPercentage(0)}px ${RFPercentage(2)}px;
`;

export const ImageLogo = styled.Image`
  width: ${RFValue(60)}px;
  height: ${RFValue(60)}px;
  margin-right: ${RFPercentage(2)}px;
`;

export const TitleSchoolHeader = styled.Text`
  color: ${({theme}) => theme.colors.primary};
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const ScroolFeed = styled.ScrollView.attrs({
  showsVerticalScrollIndicator: false,
})`
`;

export const FeedCard = styled.View`
  margin-top: ${RFPercentage(1)}px;
  background-color: ${({theme}) => theme.colors.text};
`;

export const FeedHeaderCard = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: ${RFPercentage(0)}px ${RFPercentage(2)}px;
`;

export const FeedHeaderImageContainer = styled.View`
  flex-direction: row;
  width: 80%;
  justify-content: flex-start;
  align-items: center;
  margin: ${RFPercentage(1.5)}px ${RFPercentage(0)}px;
`;

export const FeedHeaderImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: ${RFValue(25)}px;
  margin-right: ${RFPercentage(1)}px;
`;

export const FeedContainerAutor = styled.View``;

export const FeedTitleSchool = styled.Text`
  color: #C3C3C3;
  font-size: ${RFValue(20)}px;
  font-weight: bold;
`;

export const FeedText = styled.Text`
  color: #C3C3C3;
  font-size: ${RFValue(10)}px;
`;

export const FeedImageCenter = styled.Image`
  width: 100%;
  height: ${RFValue(250)}px;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const FeedFooterNavigation = styled.View`
  height: 70px;
  flex-direction: row;
  background-color: #F0F2F5;
`;