import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { useCallback } from "react";
import Icon from 'react-native-vector-icons/Feather';

import { useAuth } from "../../hooks/auth";

import { 
  Container,
  Header,
  BackButton,
  HeaderTitle,
  UserAvatar
} from "./styles";

interface RouteParms {
  providerId: string;
}

const CreateAppointment: React.FC = () => {
  const route = useRoute();
  const { user } = useAuth();
  const { goBack } = useNavigation();
  
  const { providerId } = route.params as RouteParms;
  
  const navigateBack = useCallback(() => {
    goBack();
  }, [goBack])

  return (
    <Container>
      <Header>
        <BackButton onPress={navigateBack}>
          <Icon name="chevron-left" size={24} color="#999591" />
        </BackButton>

        <HeaderTitle>Cabeleireiros</HeaderTitle>

        <UserAvatar source={{ uri: user.avatar_url }} />
      </Header>
    </Container>
  );
};

export default CreateAppointment;