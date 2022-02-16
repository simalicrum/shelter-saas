import neo4j from 'neo4j-driver';

const uri = import.meta.env.VITE_NEO4J_URI;
const user = import.meta.env.VITE_NEO4J_USER;
const password = import.meta.env.VITE_NEO4J_PASSWORD;

export async function get() {
	return {
		body: { message: '/people GET' }
	};
}

export async function post({ request }) {
	const json = await request.json();
	console.log(json);
	const { name, age, gender } = json;

	const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
	const session = driver.session();
	try {
	} catch (err) {
	} finally {
		await session.close();
	}
	await driver.close();
	return {
		body: { message: '/people POST' }
	};
}
