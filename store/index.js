export const state = () => ({
  dark: true
});

export const mutations = {
  setTheme(state, value) {
    state.dark = value;
  },
  darkThemeToogle(state) {
    let dark = !state.dark;
    state.dark = dark;
    localStorage.setItem("dark", dark);
    document.documentElement.className = dark ? "dark" : "";
  }
};
