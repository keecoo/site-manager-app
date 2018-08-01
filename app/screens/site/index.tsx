import * as React from "react";
import { Image, View, Platform } from "react-native";
import styles from "./styles";
import { Card, CardItem, Container, Item, Content, Left, Button, Icon, Header, Body, Title, Text, List, ListItem, Thumbnail, Right } from "native-base";

//import styles from "./styles";
export interface Props {
	data: any;
	goBack(): void;
	goToAnimal(item: any): void;
}
export interface State { }
export default class SiteScreen extends React.Component<Props> {
	render() {
		return (

			<Container style={styles.container}>
				<Header>
					<Left>
						<Button transparent onPress={() => this.props.goBack()}>
							<Icon
								active
								name="arrow-back"
							/>
						</Button>
					</Left>
					<Body>
						<Title>Site</Title>
					</Body>
					<Right>
					</Right>
				</Header>
				<Content>
					<Card>
						<CardItem cardBody>
							<View style={{ flex: 1, flexDirection: 'column' }}>
								<View style={{ flex: 1 }}>
									<Image style={{ height: 240, alignSelf: "stretch" }} source={{ uri: this.props.data.getSiteInfo.image_url }} />
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ alignSelf: "stretch" }}>{this.props.data.getSiteInfo.site_name}</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ alignSelf: "stretch" }}>
										{this.props.data.getSiteInfo.description}
									</Text>
								</View>
							</View>
						</CardItem>
					</Card>
					<Title>Animals</Title>
					<Card>

						<CardItem>
							<List>
								{this.props.data.getSiteInfo.animals.items.map((item: any, i: number) => (
									<ListItem style={{ alignSelf: "stretch" }}
										key={i}
										onPress={() => this.props.goToAnimal(item)}>
										<Thumbnail square small source={{ uri: item.image_url }} />
										<Text style={{ alignSelf: "stretch" }}>{item.animal_name}</Text>
									</ListItem>
								))}
							</List>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
