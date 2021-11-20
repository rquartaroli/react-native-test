import { RectButton } from 'react-native-gesture-handler';
import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
  flex: 1;
  align-items: center;
`;

export const Title = styled.Text`
  color: ${({theme}) => theme.colors.text};
`;