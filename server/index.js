import { ApolloServer } from "@apollo/server";

//  crear un servidor GraphQL separado de su servidor principal o si está trabajando en un proyecto en el que desea iniciar un servidor GraphQL para pruebas o desarrollo
import { startStandaloneServer } from "@apollo/server/standalone";

// escribir consultas y mutaciones GraphQL en formato de cadena de texto y la función las analizará y las convertirá en un objeto
import { gql } from "graphql-tag";
import { jerseysMock } from "./data/jerseys.js";
import { numberJerseyMock } from "./data/numbers.js";
import { filterTeam } from "./functions/filter.js";

// forma de definir los tipos de datos que pueden ser consultados o mutados en un 'esquema' GraphQL. Las Type Definitions permiten a los desarrolladores describir de forma clara y precisa los tipos de datos disponibles en una API GraphQL, lo que facilita la comprensión y el uso de la misma
const typeDefs = gql`
	type Jersey {
		id: ID!
		title: String!
		type: String!
		url: String!
		season: String!
	}

	type NumberJersey {
		id: ID!
		team: String!
		number: Int!
		season: String!
	}

	type Query {
		getAllJerseys(team: String = undefined): [Jersey!]!
		getAllNumberJerseys: [NumberJersey!]!
	}
`;

// resolver es una función que se encarga de devolver los datos que se han solicitado en la consulta . Puede recuperar esos datos de cualquier funete de datos disponible

const resolvers = {
	Query: {
		//👇 Esta es la que no me estaria funcionando
		// getAllJerseys: ({ name }) => {
		// 	return filterTeam(name);
		// },
		getAllJerseys: () => jerseysMock,
		getAllNumberJerseys: () => numberJerseyMock,
	},
};

// crear una instancia de ApolloServer y pasarle el esquema y los resolvers . typeDefs es un objeto que define el esquema de GraphQL y resolvers es un objeto que define cómo se deben resolver las consultas y mutaciones en el esquema.
const server = new ApolloServer({
	typeDefs,
	resolvers,
});

// iniciar el servidor
const { url } = await startStandaloneServer(server, {
	listen: {
		port: 8000,
	},
});

console.log(`Server ready at ${url}`);

// este código configura y ejecuta un servidor GraphQL utilizando Apollo Server en Node.js, lo que permite interactuar con un esquema de GraphQL utilizando consultas y mutaciones
