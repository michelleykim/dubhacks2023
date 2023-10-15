const initialState = {
  qna: [{
    "question": "What is the meaning of life?",
    "answer": "42"
  },
  {
    "question": "What is the meaning of food?",
    "answer": "to be eaten and enjoyed"
  }],
};

const MainReducer = async (state, action) => {
  switch (action.type) {
    case "add_qna": {
      return {
        ...state,
        qna: [...state.qna, action.payload],
      };
    }
  }
};

export { initialState, MainReducer };