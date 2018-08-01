import * as React from "react";
import { Text, Container, List, ListItem, Content } from "native-base";
import { NavigationActions } from "react-navigation";

export interface Props {
	navigation: any;
	routes: any;
}
export default class Sidebar extends React.Component<Props> {
	render() {
		return (
			<Container>
				<Content>
					<List
						style={{ marginTop: 40 }}
						dataArray={this.props.routes}
						renderRow={data => {
							return (
								<ListItem
									button
									onPress={() => {
										data.func();
										this.props.navigation.navigate(data.route)
									}}
								>
									<Text>{data.caption}</Text>
								</ListItem>
							);
						}}
					/>
				</Content>
			</Container>
		);
	}
}
