import * as React from "react";
import { View, FlatList } from "react-native";
import MapView from 'react-native-maps';
import styles from "./styles";
import {
	Card,
	CardItem,
	Container,
	Content,
	Left,
	Button,
	Icon,
	Header,
	Body,
	Title,
	Text,
	ListItem,
	Thumbnail,
	Right
} from "native-base";

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
								{/* <View style={{ flex: 1 }}>
									<Image style={{ height: 240, alignSelf: "stretch" }} source={{ uri: this.props.data.getSiteInfo.image_url }} />
								</View> */}
								<MapView style={{ flex: 1, height: 200, width: 400 }}
									initialRegion={this.props.data.getSiteInfo.location}
								>
									<MapView.Marker.Animated
										ref={marker => { this.marker = marker }}
										coordinate={this.props.data.getSiteInfo.location}
									/>
								</MapView>
								<View style={{ flex: 1 }}>
									<Title style={{ alignSelf: "stretch" }}>{this.props.data.getSiteInfo.site_name}</Title>
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
					<Card style={{ flex: 1 }}>
						<CardItem style={{ flex: 1 }}>
							<FlatList<any> style={{ flex: 1 }}
								data={this.props.data.getSiteInfo.animals.items}
								renderItem={({item}) =>   (
									<ListItem
										key={item.key}
										onPress={() => this.props.goToAnimal(item)}>
										{/* <Thumbnail square small source={{ uri: item.image_url }} /> */}
										<Thumbnail square small source={{ uri: "https://www.w3schools.com/howto/img_forest.jpg" }} />
										<Text style={styles.liText}>{item.animal_name}</Text>
										<Icon
											style={{ position: 'absolute', right: 0 }}
											active
											name='arrow-forward'
										/>
									</ListItem>
								)}
							/>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}
