import neo4j from 'neo4j-driver';

const uri = import.meta.env.VITE_NEO4J_URI;
const user = import.meta.env.VITE_NEO4J_USER;
const password = import.meta.env.VITE_NEO4J_PASSWORD;

export async function get() {
	return {
		body: { message: '/people/[id] GET' }
	};
}

export async function put() {
	return {
		body: { message: '/people/[id] PUT' }
	};
}
