import ProductList from '@/components/ProductList';
import React from 'react';

const Products = async ({
	searchParams,
}: {
	searchParams: Promise<{ category: string }>;
}) => {
	const category = (await searchParams).category;
	return (
		<div>
			<ProductList category={category} params='products' />
		</div>
	);
};

export default Products;
