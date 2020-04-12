const testUser = {
    nickname: 'seoyoung',
    Post: [],
    Following: [],
    Follower: [],
    id: 1
};

const testSignUpData = {
    id: 'seoyoung',
    nickname: 'seoyoung',
    password: '1234'
};

export const initialState = {
    isLoggedIn : false, // 로그인 여부
    isLoggingOut: false, // 로그아웃 시도 중
    isLoggingIn: false, // 로그인 시도 중
    logInErrorReason: '', // 로그인 에러 사유
    signedUp: false, // 회원가입 성공
    signedUpData: null,
    isSigningUp: false, // 회원가입 시도 중
    signUpErrorReason: '', // 회원가입 실패 사유
    me: null, // 내 정보
    followingList: [], // 팔로잉 리스트
    followerList: [], // 팔로워 리스트
    userInfo: null, // 남의 정보
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST'; // Action 이름
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

// 로그아웃
export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

// 회원가입
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

// 사용자 정보 불러오기
export const LOAD_USER_REQUEST = 'LOAD_USER_REQUEST';
export const LOAD_USER_SUCCESS = 'LOAD_USER_SUCCESS';
export const LOAD_USER_FAILURE = 'LOAD_USER_FAILURE';

// 팔로우
export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

// 언팔로우
export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

// 팔로우, 팔로잉 목록 불러오기
export const LOAD_LIST_REQUEST = 'LOAD_LIST_REQUEST';
export const LOAD_LIST_SUCCESS = 'LOAD_LIST_SUCCESS';
export const LOAD_LIST_FAILURE = 'LOAD_LIST_FAILURE';

// 내 팔로워 삭제
export const DELETE_FOLLOWER_REQUEST = 'DELETE_FOLLOWER_REQUEST';
export const DELETE_FOLLOWER_SUCCESS = 'DELETE_FOLLOWER_SUCCESS';
export const DELETE_FOLLOWER_FAILURE = 'DELETE_FOLLOWER_FAILURE';

/*
export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data
    };
};
*/

// 바로 리턴하는 함수의 경우 이런식으로 사용 가능.
/*export const SignUp = data => ({
   type: SIGN_UP_REQUEST,
   data,
});*/


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN_REQUEST : {
            return {
                ...state,
                isLoggingIn: true,
                isLoggedIn: true,
                me: null,
                logInErrorReason: '',
            };
        }
        case LOG_IN_SUCCESS : {
            return {
                ...state,
                me: testUser,
                isLoggingIn: false,
                isLoggedIn: true,
            }
        }
        case LOG_IN_FAILURE : {
            return {
                ...state,
                me: null,
                isLoggingIn: false,
                isLoggedIn: false,
                logInErrorReason: action.error,
            }
        }
        case LOG_OUT_REQUEST : {
            return {
                ...state,
                isLoggedIn: false,
            };
        }
        case LOG_OUT_SUCCESS : {
            return {
                ...state,
                isLoggedIn: false,
                me: null,
            }
        }
        case LOG_OUT_FAILURE : {
            return {
                ...state,
            }
        }
        case SIGN_UP_REQUEST : {
            return {
                ...state,
                isSigningUp: true,
                signedUp: false,
                signedUpData: null,
                signUpErrorReason: '',
            };
        }
        case SIGN_UP_SUCCESS : {
            return {
                ...state,
                isSigningUp: false,
                signedUpData: testSignUpData,
                signedUp: true,
            }
        }
        case SIGN_UP_FAILURE : {
            return {
                ...state,
                isSigningUp: false,
                signedUpData: null,
                signedUp: false,
                signUpErrorReason: action.error,
            }
        }
        default : {
            return {
              ...state,
            };
        }
    }
};

export default reducers;


