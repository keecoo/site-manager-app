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
import SaveButton from "./save-button";

export interface Props {
    data: any;
    goBack(): void;
}
export interface State {
    siteName: string;
    description: string;
    imageUrl: string;
}
export default class SiteEditScreen extends React.Component<Props, State> {
    constructor(props: any) {
        super(props);
            this.state = {
            siteName: "",
            description: "",
            imageUrl: "",        
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
                        <SaveButton site_name={this.state.siteName} description={this.state.description} image_url={this.state.imageUrl} />
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
