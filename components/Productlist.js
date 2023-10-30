import * as React from 'react';
import { FlatList } from 'react-native';
import { products } from './Product';
import ProductCard from './ProductCard';

export default function ProductCard() {
  return <FlatList data={products}
  keyExtractor={(products) =>products.id }
  renderItem={({ item }) => <ProductCard {...item} />}
  contentContainerStyle={{ paddingHorizontal: 20 }} />;
}