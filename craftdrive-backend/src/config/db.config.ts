export const dbCredentials = () => {
  const db = 'craftdrive';
  const user = 'ammar';
  const pass = 'craftdrive123';
  const host = 'ds111319.mlab.com';
  const port = '11319';

  return `mongodb://${user}:${pass}@${host}:${port}/${db}`;
};
