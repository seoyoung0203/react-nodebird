export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'seoyoung',
        },
        content: '첫번째 게시글',
        testImg: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/QsT/image/NSTeOeMe0MddpqlJ23FZV7hJGvg'
    }],
    imgPaths: [],
};

export const ADD_POST = 'ADD_POST';
export const ADD_TEST = 'ADD_TEST';

export const addPostAction = {
    type: ADD_POST,
};

export const addTestAction = {
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