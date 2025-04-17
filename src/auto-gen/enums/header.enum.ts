export const HeaderList = {
    Token: (token = '{{token}}') => ({
      'x-session-token': token,
    }),
    Token1: () => HeaderList.Token('{{token1}}'),
    Token2: () => HeaderList.Token('{{token2}}'),
    Token3: () => HeaderList.Token('{{token3}}'),
  };