import { gql } from "@apollo/client";

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
