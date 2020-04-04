export const initialState = {
    mainPosts: [],
};

const ADD_POST = 'ADD_POST';
const ADD_TEST = 'ADD_TEST';

const addPostAction = {
    type: ADD_POST,
};

const addTestAction = {
    type: ADD_TEST,
    data : {
        content: 'Hello, This is main post!',
        UserId: 1,
        User : {
            nickname: 'seoyoung',
        },
    },
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            return {
                ...state,
            };
        }
        case ADD_TEST: {
            return {
                ...state,
                mainPosts: [action.data, ...state.mainPosts],
            };
        }
        default : {
            return {
                ...state,
            };
        }
    }
};


export default reducer;