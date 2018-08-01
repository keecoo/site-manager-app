import * as React from "react";
import { Image } from "react-native";
import { Card, Button, Container, Content, Header, Body, Title, Icon, Form, Input, Item, Label, Right, Left } from "native-base";
import SaveButton from "./save-button";

//import styles from "./styles";
export interface Props {
	data: any;
	navigation: any;
	toggleDrawer(): void;
}
export interface State {
	phone: string;
	firstName: string;
	lastName: string;
}
class ProfileScreen extends React.Component<Props, State> {
	constructor(props: any) {
		super(props);
		this.state = {
			firstName: this.props.data.getUserInfo.first_name,
			lastName: this.props.data.getUserInfo.last_name,
			phone: this.props.data.getUserInfo.phone,
		};
	}

	render() {
		return (
			<Container>
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
					<Body style={{ flex: 1, alignItems: 'center' }}>
						<Title>Profile</Title>
					</Body>
					<Right style={{ flex: 1 }}>
						<SaveButton phone={this.state.phone} first_name={this.state.firstName} last_name={this.state.lastName} />
					</Right>
				</Header>
				<Content>
					<Form>
						<Card>
							<Image source={{ uri: "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659652_1280.png" }}
								style={{ width: 180, height: 180 }}
							/>
						</Card>
						<Card>
							<Item floatingLabel regular>
								<Label>First Name</Label>
								<Input onChangeText={(text) => this.setState({ firstName: text })} value={this.state.firstName} />
							</Item>
							<Item floatingLabel regular>
								<Label>Last Name</Label>
								<Input onChangeText={(text) => this.setState({ lastName: text })} value={this.state.lastName} />
							</Item>
							<Item floatingLabel regular>
								<Label>Phone</Label>
								<Input onChangeText={(text) => this.setState({ phone: text })} value={this.state.phone} />
							</Item>
						</Card>
					</Form>
				</Content>
			</Container>
		);
	}
}

export default ProfileScreen;
