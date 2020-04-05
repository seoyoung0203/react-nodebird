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
    user : null
};

export const LOG_IN = 'LOG_IN'; // Action 이름
export const LOG_OUT = 'LOG_OUT';

export const loginAction = {
    type: LOG_IN,

};

export const logoutAction = {
    type: LOG_OUT,
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
        default : {
            return {
              ...state,
            };
        }
    }
};

export default reducers;


