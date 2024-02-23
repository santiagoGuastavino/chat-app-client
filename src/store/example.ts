interface IState {
  isValid: boolean;
  actions: {
    getIsValid: () => boolean;
    toggleIsValid: () => void;
  };
}

export const useStateStore = create<IState>()(
  devtools(
    persist(
      (set, get) => ({
        isValid: false,
        actions: {
          getIsValid(): boolean {
            return get().isValid;
          },
          toggleIsValid(): void {
            set((state) => ({ ...state, isValid: !get().isValid }));
          },
        },
      }),
    ),
  ),
);

export const useStateActions = () => useStateStore((store: IState) => store.actions);
