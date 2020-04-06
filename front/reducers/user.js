// Store
const testUser = {
    nickname: 'seoyoung',
    Post: [],
    Following: [],
    Follower: [],
    isLoggedIn: true,
};

export const initialState = {
    isLoggedIn : false,
    user : null,
    signUpData: null,
};

export const LOG_IN = 'LOG_IN'; // Action 이름
export const LOG_OUT = 'LOG_OUT';
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const loginAction = {
    type: LOG_IN,

};

export const logoutAction = {
    type: LOG_OUT,
};

export const signUpAction = (data) => {
    return {
        type: SIGN_UP,
        data
    };
};


const reducers = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN : {
            return {
                ...state,
                isLoggedIn: true,
                user: testUser,
            };
        }
        case LOG_OUT : {
            return {
                ...state,
                isLoggedIn: false,
                user: null,
            };
        }
        case SIGN_UP : {
            return {
                ...state,
                signUpData: action.data,
            };
        }
        default : {
            return {
              ...state,
            };
        }
    }
};

export default reducers;


