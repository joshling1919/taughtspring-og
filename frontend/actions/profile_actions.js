export const ProfileConstants = {
  RECEIVE_PROFILE: "RECEIVE_PROFILE",
  REQUEST_PROFILE: "REQUEST_PROFILE"
};

export const requestProfile = (userId, success) => ({
  type: ProfileConstants.REQUEST_PROFILE,
  userId
});

export const receiveProfile = user => ({
  type: ProfileConstants.RECEIVE_PROFILE,
  user
});
