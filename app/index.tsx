import { Redirect } from 'expo-router';
import React from 'react';
import { StyleSheet } from 'react-native';

const MoviesApp = () => {
  return <Redirect href={'/home'} />;
};

export default MoviesApp;

const styles = StyleSheet.create({});
