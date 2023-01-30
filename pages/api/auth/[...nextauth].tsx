import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
export default NextAuth({
	session: {
		strategy: 'jwt',
	},

	providers: [
		CredentialsProvider({
			name: 'Credentials',

			credentials: {},
			async authorize(credentials) {
				const res = await fetch(
					'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDH9rCqGaLkrTYezdvncNcfn3nUKXnKbUM',
					{
						method: 'POST',
						body: JSON.stringify(credentials),
						headers: { 'Content-Type': 'application/json' },
					}
				);

				const user = await res.json();

				if (res.ok && user) {
					return user;
				} else {
					throw new Error(
						'Could not log you in please check your email and password!'
					);
				}
			},
		}),
	],
});
