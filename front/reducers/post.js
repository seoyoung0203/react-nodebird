const testPost = {
    User: {
        id: 1,
        nickname: 'seoyoung',
    },
    content: '오늘 날씨 좋네ㅠ',
};

const testComment = {
    title: 'dlwlrma',
    content: '절미같아'
};

export const initialState = {
    mainPosts: [{
        User: {
            id: 1,
            nickname: 'seoyoung',
        },
        content: '안녕? 강아지야',
        testImg: 'https://t1.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/QsT/image/NSTeOeMe0MddpqlJ23FZV7hJGvg'
    }], // 화면에 보일 포스트들
    imgPaths: [], // 미리보기 이미지 경로
    addPostErrorReason: '', // 포스트 업로드 실패
    isAddingPost: false, // 포스트 업로드 중
    addPost: false,
    isAddingComment: false,
    addCommentErrorReason: '',
    commentText: '',
    commentList: [
        {
            title: 'vvoojin',
            content: '귀엽당!!'
        },
    ],
};

// 업로드
export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

// 포스트 제거
export const DELETE_POST_REQUEST = 'DELETE_POST_REQUEST';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const DELETE_POST_FAILURE = 'DELETE_POST_FAILURE';

// 포스트 수정
export const UPDATE_POST_REQUEST = 'UPDATE_POST_REQUEST';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';
export const UPDATE_POST_FAILURE = 'UPDATE_POST_FAILURE';

export const ADD_TEST = 'ADD_TEST';

// 로딩

// like버튼 누르기
export const LIKE_POST_REQUEST = 'LIKE_POST_REQUEST';
export const LIKE_POST_SUCCESS = 'LIKE_POST_SUCCESS';
export const LIKE_POST_FAILURE = 'LIKE_POST_FAILURE';

// like버튼 취소
export const UNLIKE_POST_REQUEST = 'UNLIKE_POST_REQUEST';
export const UNLIKE_POST_SUCCESS = 'UNLIKE_POST_SUCCESS';
export const UNLIKE_POST_FAILURE = 'UNLIKE_POST_FAILURE';

// 이미지 업로딩
export const LOAD_USER_POSTS_REQUEST = 'LOAD_USER_POSTS_REQUEST';
export const LOAD_USER_POSTS_SUCCESS = 'LOAD_USER_POSTS_SUCCESS';
export const LOAD_USER_POSTS_FAILURE = 'LOAD_USER_POSTS_FAILURE';

// 댓글 달기
export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';


// 댓글 불러오기
export const LOAD_COMMENT_REQUEST = 'LOAD_COMMENT_REQUEST';
export const LOAD_COMMENT_SUCCESS = 'LOAD_COMMENT_SUCCESS';
export const LOAD_COMMENT_FAILURE = 'LOAD_COMMENT_FAILURE';

// 리트윗


export const addPostAction = {
    type: ADD_POST_REQUEST,
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
        case ADD_POST_REQUEST: {
            return {
                ...state,
                isAddingPost: true,
                addPostErrorReason: '',
                addPost: false,
            };
        }
        case ADD_POST_SUCCESS: {
            return {
                ...state,
                isAddingPost: false,
                addPost: true,
                mainPosts: [testPost, ...state.mainPosts],
            }
        }
        case ADD_POST_FAILURE: {
            return {
                ...state,
                isAddingPost: false,
                addPost: false,
                addPostErrorReason: action.error,
            }
        }
        case ADD_COMMENT_REQUEST: {
            return {
                ...state,
                addCommentErrorReason: '',
                isAddingComment: true,
                commentText: ''
            };
        }
        case ADD_COMMENT_SUCCESS: {
            return {
                ...state,
                isAddingComment: false,
                commentList: [...state.commentList, testComment],
            };
        }
        case ADD_COMMENT_FAILURE: {
            return {
                ...state,
                isAddingComment: false,
                addCommentErrorReason: action.error
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