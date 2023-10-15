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
	currentQuestion: "",
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
		case "set_current_question": {
			return {
				...state,
				currentQuestion: action.payload,
			};
		}
		default: {
			return state;
		}
	}
};

export { initialState, MainReducer };
