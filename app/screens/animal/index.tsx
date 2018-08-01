import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Header, Body, Title, Text, View } from "native-base";

//import styles from "./styles";
export interface Props {
	data: any
	navigation: any
}
export interface State { }
class AnimalScreen extends React.Component<Props> {
	render() {
		return (
			<Container>
				<Header style={{ height: 200 }}>
					<Body style={{ alignItems: "center" }}>
						<Title>Animal</Title>
						<View padder>
							<Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
						</View>
					</Body>
				</Header>
				<Content>
				</Content>
			</Container>
		);
	}
}

export default AnimalScreen;
