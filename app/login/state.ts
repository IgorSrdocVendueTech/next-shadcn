import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type UserState = {
  isUserAuthenticated: boolean;
  setIsUserAuthenticated: (isAuth: boolean) => void;
};

const useUserState = createWithEqualityFn<UserState>(
  (set) => ({
    isUserAuthenticated: false,
    setIsUserAuthenticated: (isAuth: boolean) =>
      set({ isUserAuthenticated: isAuth }),
  }),
  Object.is
);

export function useIsUserAuthenticated() {
  const [isUserAuthenticated, setIsUserAuthenticated] = useUserState(
    (state: UserState) => [
      state.isUserAuthenticated,
      state.setIsUserAuthenticated,
    ],
    shallow
  );
  return [isUserAuthenticated, setIsUserAuthenticated] as [
    boolean,
    (isAuth: boolean) => void
  ];
}
