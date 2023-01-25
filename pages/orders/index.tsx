import { getDatabase, ref, onValue } from 'firebase/database';
import { dbR } from '../api/products';
import Orders from '../../components/admin/Orders';

// export async function getServerSideProps() {

// 	return {
// 		props: {

// 		}, // will be passed to the page component as props
// 	};
// }
export default function orders() {
	return <Orders />;
}
