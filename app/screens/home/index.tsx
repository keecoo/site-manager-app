import * as React from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  List,
  ListItem,
  Thumbnail
} from "native-base";

import styles from "./styles";
export interface Props {
  navigation: any;
  data: any;
  toggleDrawer(): void;
  goToSite(item: any): void;
  editSite(): void;
}
export interface State { }
class HomeScreen extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent>
              <Icon
                active
                name="menu"
                onPress={() => this.props.toggleDrawer()}
              />
            </Button>
          </Left>
          <Body>
            <Title>User Sites</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon
                active
                name="add"
                onPress={() => this.props.editSite()}
              />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            {this.props.data.getUserInfo.siteInfo.items.map((item: any, i: number) => (
              <ListItem
                style={styles.li}
                key={i}
                onPress={() => this.props.goToSite(item)}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Thumbnail square small source={{ uri: item.image_url }} />
                  <Text style={styles.liText} >{item.site_name}</Text>
                  <Icon
                    style={{ position: 'absolute', right: 0 }}
                    active
                    name="ios-arrow-forward-outline"
                  />
                </View>
              </ListItem>

            ))}
          </List>
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
