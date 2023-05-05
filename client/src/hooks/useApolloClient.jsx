//ApolloClient: es una instancia de cliente GraphQL creado por Apollo para conectarse a un servidor GraphQL
// InMemoryCache: InMemoryCache se utiliza comúnmente junto con el cliente ApolloClient. Es un caché en memoria que guarda los resultados de las consultas (queries) que ha realizado la aplicación
// ApolloProvider: ApolloProvider es un componente de React que se encarga de proveer el cliente de Apollo a toda la jerarquía de componentes que lo rodean.
// gql: gql es un tag function que forma parte del paquete graphql-tag. Sirve para crear cadenas de consulta para GraphQL usando la sintaxis especificada por esta tecnología.
import {
	ApolloClient,
	ApolloProvider,
	InMemoryCache,
	gql,
} from "@apollo/client";

const client = new ApolloClient({
	uri: "http://localhost:8000",
	cache: new InMemoryCache(),
});

//crear query para consultar los usuarios del backend
export const GET_ALL_JERSEYS = gql`
	query getAllJerseys($team: String) {
		getAllJerseys(team: $team) {
			season
			title
			type
			url
			id
		}
	}
`;

export const GET_ALL_NUMBERS_JERSEYS = gql`
	query getAllNumbersJerseys {
		getAllNumberJerseys {
			id
			number
			season
			team
		}
	}
`;

//envuelvo la app con el ApolloProvider y le paso el cliente que defini anteriormente
export const CustomApolloProvider = ({ children }) => (
	<ApolloProvider client={client}>{children}</ApolloProvider>
);
