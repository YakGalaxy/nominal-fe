import React from 'react';

import { Avatar, Box } from 'grommet';

export const UserImage = () => {
  const src = "//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80";

  return (
      <Avatar size="large" src={src} round={false} />
  );
};
