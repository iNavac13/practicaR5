import React, { Component } from "react";
import { Router, Scene, Actions } from "react-native-router-flux";
import LoginView from "./src/LoginView";
import HomeView from './src/HomeView';
import ArtistDetailView from "./src/ArtistDetailView";

const scenes = Actions.create(
  <scene key="root">
    <Scene key="login" component={LoginView} hideNavBar />
    <Scene key="home" component={HomeView} initial={true} hideNavBar />
    <Scene key="artistDetail" component={ArtistDetailView} hideNavBar />

  </scene>
);

export default class App extends Component<Props>{
  render(){
    return <Router scenes={scenes}/>
  }
}