import React, { Component, useState, useEffect } from 'react';
import {StyleSheet, Text, View, FlatList } from 'react-native';

export const HomeScreen = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const recipes = require('../db.json').recipes;
        setRecipes(recipes);
    })

     return (
         <FlatList
            data={recipes}
            renderItem={({item}) => <Text>{item.recipeName}</Text>}
            keyExtractor={item => item.id}
        /> 
    )
}