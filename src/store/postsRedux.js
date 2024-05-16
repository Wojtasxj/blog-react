import initialState from "./initialState";

// Selectors
export const getAllPosts = (state) => state.posts;

// Actions
const createActionName = actionName => `app/posts/${actionName}`;

// Action Types
export const actionTypes = {
  // Tutaj możesz zdefiniować typy akcji, np. 'ADD_POST', 'REMOVE_POST', itp.
};

// Action Creators

const postsReducer = (statePart = initialState, action) => {
  switch (action.type) {
    
    default:
      return statePart;
  }
};

export default postsReducer;