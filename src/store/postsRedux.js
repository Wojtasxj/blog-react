import initialState from "./initialState";


// Selectors
export const getAllPosts = (state) => state.posts;

// Actions
const createActionName = actionName => `app/posts/${actionName}`;

// Action Types
export const actionTypes = {
  ADD_POST: 'app/posts/ADD_POST',
  REMOVE_POST: 'app/posts/REMOVE_POST',
  UPDATE_POST: 'app/posts/UPDATE_POST',
};

export const addPost = (post) => ({
  type: actionTypes.ADD_POST,
  payload: post,
});

export const removePost = (postId) => ({
  type: actionTypes.REMOVE_POST,
  payload: postId,
});

export const updatePost = (postId, updatedPost) => ({
  type: actionTypes.UPDATE_POST,
  payload: { postId, updatedPost },
});

// Action Creators

const postsReducer = (statePart = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_POST:
      // Handle adding a new post to the state
      return {
        ...statePart,
        posts: [...statePart.posts, action.payload],
      };
    case actionTypes.REMOVE_POST:
      // Handle removing a post from the state
      return {
        ...statePart,
        posts: statePart.posts.filter(post => post.id !== action.payload),
      };
    case actionTypes.UPDATE_POST:
      // Handle updating an existing post in the state
      return {
        ...statePart,
        posts: statePart.posts.map(post =>
          post.id === action.payload.postId ? action.payload.updatedPost : post
        ),
      };
    default:
      return statePart;
  }
};

export default postsReducer;