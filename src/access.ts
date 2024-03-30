/**
 * @see https://umijs.org/docs/max/access#access
 * */
export default function access(initialState: { currentUser?: API.LoginStateDTO } | undefined) {
  const { currentUser } = initialState ?? {};
  return {
    canAdmin: currentUser && currentUser.type === 0,
    canDoctor: currentUser && currentUser.type === 1,
    canPatient: currentUser && currentUser.type === 2,
  };
}
