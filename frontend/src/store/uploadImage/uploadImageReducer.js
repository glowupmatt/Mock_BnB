const UPLOAD_IMAGE_REQUEST = "UPLOAD_IMAGE_REQUEST";

const setUploadImageRequest = (data) => ({
  type: UPLOAD_IMAGE_REQUEST,
  payload: data,
});

export const addPhoto = (photo) => async (dispatch) => {
  dispatch(setUploadImageRequest(photo));
  return photo;
};

const initialState = {
  photoList: [],
};

const uploadImageReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPLOAD_IMAGE_REQUEST:
      return {
        ...state,
        photoList: [...state.photoList, action.payload],
      };
    default:
      return state;
  }
};

export default uploadImageReducer;
