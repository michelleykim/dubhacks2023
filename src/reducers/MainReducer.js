const initialState = {
	qna: [
		{
			question: "What is the meaning of life?",
			answer: "42",
		},
		{
			question: "What is the meaning of food?",
			answer: "to be eaten and enjoyed",
		},
	],
	transcript: [],
};

const MainReducer = (state, action) => {
	switch (action.type) {
		case "add_qna": {
			return {
				...state,
				qna: [...state.qna, action.payload],
			};
		}
		case "get_transcript": {
			return {
				...state,
				transcript: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export { initialState, MainReducer };
