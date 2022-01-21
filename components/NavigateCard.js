import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/core";
const NavigateCard = () => {
	const dispatch = useDispatch();
	const navigation = useNavigation;

	return (
		<SafeAreaView style={tw`bg-white flex-1`}>
			<Text style={tw`text-center py-5 text-xl `}>Good Morning, Frederic</Text>
			<View style={tw`border-t border-gray-200 flex-shrink`}>
				<View>
					<GooglePlacesAutocomplete
						styles={{
							container: {
								flex: 0,
								paddingTop: 20,
								backgroundColor: "white",
							},
							textInput: {
								fontSize: 18,
								backgroundColor: "#f7f7f7",
								borderRadius: 5,
							},
							textInputContainer: {
								paddingHorizontal: 20,
								paddingBottom: 0,
							},
						}}
						placeholder='Where to ?'
						nearbyPlacesAPI='GooglePlacesSearch'
						debounce={400}
						fetchDetails={true}
						returnKeyType={"search"}
						enablePoweredByContainer={false}
						minLength={2}
						query={{
							key: GOOGLE_MAPS_APIKEY,
							language: "en",
						}}
						onPress={(data, details = null) => {
							dispatch(
								setDestination({
									location: details.geometry.location,
									description: data.description,
								})
							);
							navigation.navigate("RideOptionsCard");
						}}
					/>
				</View>
			</View>
		</SafeAreaView>
	);
};

export default NavigateCard;
