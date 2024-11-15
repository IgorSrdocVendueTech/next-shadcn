import { shallow } from "zustand/shallow";
import { createWithEqualityFn } from "zustand/traditional";

type UserState = {
  selectedVersion: string;
  setSelectedVersion: (selectedVersion: string) => void;
};

const useUserState = createWithEqualityFn<UserState>(
  (set) => ({
    selectedVersion: "1.0.0",
    setSelectedVersion: (selectedVersion: string) => set({ selectedVersion }),
  }),
  Object.is
);

export function useSelectedVersion() {
  const [selectedVersion, setSelectedVersion] = useUserState(
    (state: UserState) => [state.selectedVersion, state.setSelectedVersion],
    shallow
  );
  return [selectedVersion, setSelectedVersion] as [
    string,
    (selectedVersion: string) => void
  ];
}
