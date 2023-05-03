import { ApolloServer } from "@apollo/server";

//  crear un servidor GraphQL separado de su servidor principal o si está trabajando en un proyecto en el que desea iniciar un servidor GraphQL para pruebas o desarrollo
import { startStandaloneServer } from "@apollo/server/standalone";

// escribir consultas y mutaciones GraphQL en formato de cadena de texto y la función las analizará y las convertirá en un objeto
import { gql } from "graphql-tag";

//mock de datos. Luego seran reemplazados por una base de datos
const UsersMock = [
	{
		id: 1,
		firstName: "Emiline",
		lastName: "McClune",
		email: "emcclune@xrea.com",
		gender: "female",
	},
	{
		id: 2,
		firstName: "Felix",
		lastName: "Ingleston",
		email: "fingleston1@hibu.com",
		gender: "female",
	},
	{
		id: 3,
		firstName: "Travus",
		lastName: "Bergstram",
		email: "tbergstram2@pbs.org",
		gender: "female",
	},
	{
		id: 4,
		firstName: "Holly-anne",
		lastName: "Knighton",
		email: "hknighton3@booking.com",
		gender: "female",
	},
];

// forma de definir los tipos de datos que pueden ser consultados o mutados en un 'esquema' GraphQL. Las Type Definitions permiten a los desarrolladores describir de forma clara y precisa los tipos de datos disponibles en una API GraphQL, lo que facilita la comprensión y el uso de la misma
const typeDefs = gql`
	type User {
		id: ID!
		email: String!
		firstName: String!
		lastName: String!
		gender: String!
	}

	type Query {
		getAllUsers: [User!]!
	}
`;
