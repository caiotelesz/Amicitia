const isAuthenticated = () => {
  return localStorage.getItem(true) !== null;
};

export default isAuthenticated;