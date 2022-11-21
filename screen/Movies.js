import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import styled from "styled-components/native";
import Swiper from "react-native-web-swiper";
import { makeImage } from "../utils";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");
const API_KEY = "f882c4f175c45fbc509f65e1fcfca202";
const Container = styled.ScrollView``;

const Loader = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BgImg = styled.Image`
  flex: 1;
`;

const Movies = ({ navigation: { navigate } }) => {
  const [loading, setLoding] = useState(true);
  const [nowPlaying, setNowPlaying] = useState([]);
  const getNowPlaying = async () => {
    const { results } = await (
      await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`
      )
    ).json();
    setNowPlaying(results);
    setLoding(false);
    console.log(nowPlaying);
  };
  useEffect(() => {
    getNowPlaying();
  }, []);
  return loading ? (
    <Loader>
      <ActivityIndicator size="large" />
    </Loader>
  ) : (
    <Container>
      <Swiper
        controlsEnabled={false}
        timeout={2}
        loop={true}
        containerStyle={{ width: "100%", height: SCREEN_HEIGHT / 4 }}
      >
        {nowPlaying.map((movie, index) => (
          <View key={movie.id}>
            <BgImg source={{ uri: makeImage(movie.backdrop_path) }} />
          </View>
        ))}
      </Swiper>
    </Container>
  );
};

export default Movies;
