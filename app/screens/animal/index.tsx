import * as React from "react";
import {
	View,
	Image,
	Text
} from "react-native";
import {
	Container,
	Content,
	Header,
	Body,
	Title,
	Left,
	Button,
	Icon,
	Right,
	Card,
	CardItem
} from "native-base";
import Moment from 'moment';
import styles from "./styles";

//import styles from "./styles";
export interface Props {
	data: any
	navigation: any
	goBack(): void
}
export interface State { }
class AnimalScreen extends React.Component<Props> {
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
						<Title>Animal</Title>
					</Body>
					<Right>
					</Right>
				</Header>
				<Content>
					<Card>
						<CardItem cardBody>
							<View style={{ flex: 1, flexDirection: 'column' }}>
								<View style={{ flex: 1 }}>
									<Image style={{ height: 240, alignSelf: "stretch" }} source={{ uri: this.props.data.getAnimal.image_url }} />
								</View>
								<View style={{ flex: 1 }}>
									<Title style={{ alignSelf: "stretch" }}>{this.props.data.getAnimal.animal_name}</Title>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ alignSelf: "stretch" }}>
										{this.props.data.getAnimal.breed}
									</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ alignSelf: "stretch" }}>
										{this.props.data.getAnimal.status}
									</Text>
								</View>
								<View style={{ flex: 1 }}>
									<Text style={{ alignSelf: "stretch" }}>
										{Moment(this.props.data.getAnimal.status_date).fromNow()}
									</Text>
								</View>

							</View>
						</CardItem>
					</Card>
				</Content>
			</Container>
		);
	}
}

export default AnimalScreen;
