import * as React from "react";
import { View, FlatList } from "react-native";
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
            <Title>Sites</Title>
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
          <FlatList<any>
            data={this.props.data.getUserInfo.siteInfo ? this.props.data.getUserInfo.siteInfo.items : []}
            renderItem={({item}) =>   (
            <ListItem
                style={styles.li}
                key={item.key}
                onPress={() => this.props.goToSite(item)}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Thumbnail square small source={{ uri: item.image_url }} />
                  <Text style={styles.liText} >{item.site_name}</Text>
                  <Icon
                    style={{ position: 'absolute', right: 0 }}
                    active
                    name='arrow-forward'
                  />
                </View>
              </ListItem>

            )}
          />
        </Content>
      </Container>
    );
  }
}

export default HomeScreen;
