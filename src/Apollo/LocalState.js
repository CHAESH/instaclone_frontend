// isLogedIn prop의 default를 false로 설정
export const defaults = {
  // 사용자 인증을 통해 받게된 jwt 토큰이 localstorage에 저장되어 있지 않으면 treu, 저장되어 있으면 false
  isLoggedIn: Boolean(localStorage.getItem("token")) || false,
};
// isLoggedIn prop의 default인 false를 다시 true로 바꾸는 함수 다시 false로 바꾸는 함수
export const resolvers = {
  Mutation: {
    logUserIn: (_, { token }, { cache }) => {
      localStorage.setItem("token", token); // localstorage에 token의 이름으로 token 저장
      cache.writeData({
        data: {
          isLoggedIn: true,
        },
      });
      return null;
    },
    logUserOut: (_, __, { cache }) => {
      localStorage.removeItem("token");
      // 전체 페이시 reload, 모든 cache를 없애고 다시 시작
      window.location.reload();
      return null;
    },
  },
};
