import * as React from "react";
import { Image, View } from "react-native";
import {
    Card,
    CardItem,
    Container,
    Item,
    Content,
    Left,
    Button,
    Text,
    Header,
    Body,
    Title,
    Input,
    Right,
    Label
} from "native-base";
import styles from "./styles";

export interface Props {
    data: any;
    goBack(): void;
    goToAnimal(item: any): void;
}
export interface State {
    siteName: string;
    description: string;
    imageUrl: string;
}
export default class SiteEditScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
        if (this.props.data.getUserInfo != null) {
            this.state = {
                siteName: this.props.data.getUserInfo.first_name,
                description: this.props.data.getUserInfo.last_name,
                imageUrl: this.props.data.getUserInfo.phone,
            };
        }
        else {
            this.state = {
                siteName: "",
                description: "",
                imageUrl: "",
            };

        }
    }
    render() {
        return (

            <Container style={styles.container}>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.goBack()}>
                            <Text>Cancel</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Title>Edit Site</Title>
                    </Body>
                    <Right>
                        <Button transparent onPress={() => this.props.goBack()}>
                            <Text>Update</Text>
                        </Button>
                    </Right>
                </Header>
                <Content>
                    <Card>
                        <CardItem cardBody>
                            <View style={{ flex: 1, flexDirection: 'column' }}>
                                <View style={{ flex: 1 }}>
                                    <Image style={{ height: 240, alignSelf: "stretch" }} source={{ uri: this.state.imageUrl }} />
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Item floatingLabel regular>
                                        <Label>Site Name</Label>
                                        <Input onChangeText={(text) => this.setState({ siteName: text })} value={this.state.siteName} />
                                    </Item>
                                </View>
                                <View style={{ flex: 1 }}>
                                    <Item floatingLabel regular>
                                        <Label>Description</Label>
                                        <Input onChangeText={(text) => this.setState({ description: text })} value={this.state.description} />
                                    </Item>
                                </View>
                            </View>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
        );
    }
}
