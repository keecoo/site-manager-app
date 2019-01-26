import * as React from "react";
import { Text, Container, ListItem, Content } from "native-base";
import { FlatList } from "react-native";

export interface Props {
	navigation: any;
	routes: any;
}
export default class Sidebar extends React.Component<Props> {
	render() {
		return (
			<Container>
				<Content>
					<FlatList<any>
						style={{ marginTop: 40 }}
						data={this.props.routes}
						renderItem={({item}) => {
							return (
								<ListItem
									button
									onPress={() => {
										item.func();
										this.props.navigation.navigate(item.route)
									}}
								>
									<Text>{item.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
