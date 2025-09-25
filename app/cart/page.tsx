import { Suspense } from 'react';
import CartPageSuspense from './cart';

const CartPage = () => {
	return (
		<Suspense fallback={<div>Loading cart...</div>}>
			<CartPageSuspense />
		</Suspense>
	);
};

export default CartPage;
