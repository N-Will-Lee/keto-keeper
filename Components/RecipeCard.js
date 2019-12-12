import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FormatRecipe, getRecipeParts } from '../api';

const styles = StyleSheet.create({

})

export const RecipeCard = ({ recipe }) => {
    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <Text style={styles.name}>{recipe.recipeName}</Text>
                <Text style={styles.netCarbs}>{recipe.netCarbs}</Text>
            </View>
        </View>
    )
}