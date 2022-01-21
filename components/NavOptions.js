import { useNavigation } from "@react-navigation/core";
import React from "react";
import {
	FlatList,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
	Image,
} from "react-native";
import { Icon } from "react-native-elements/dist/icons/Icon";
import { useSelector } from "react-redux";

import tw from "tailwind-react-native-classnames";
import { selectOrigin } from "../slices/navSlice";

const data = [
	{
		id: "123",
		title: "Get a ride",
		url: "https://links.papareact.com/3pn",
		screen: "MapScreen",
	},
	{
		id: "456",
		title: "Order food",
		url: "https://links.papareact.com/28w",
		screen: "EatsScreen",
	},
];

const NavOptions = () => {
	const navigation = useNavigation();
	const origin = useSelector(selectOrigin);

	return (
		<FlatList
			data={data}
			horizontal
			keyExtractor={(item) => item.id}
			renderItem={({ item }) => (
				<TouchableOpacity
					onPress={() => navigation.navigate(item.screen)}
					disabled={!origin}
					style={tw`
                    p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40 rounded-lg
                `}>
					<View style={tw`${!origin && "opacity-20"}`}>
						<Image
							style={{ width: 120, height: 120, resizeMode: "contain" }}
							source={{
								url: item.url,
							}}
						/>
					</View>
					<Text
						style={tw`
                        mt-2 text-lg font-semibold 
                    `}>
						{item.title}
					</Text>
					<Icon
						style={tw`
                        p-2 rounded-full bg-black w-10 mt-4 
                    `}
						type='antdesign'
						color='white'
						name='arrowright'
					/>
				</TouchableOpacity>
			)}
		/>
	);
};

export default NavOptions;

const styles = StyleSheet.create({});
