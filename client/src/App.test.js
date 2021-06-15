import App from "./App";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import { MemoryRouter } from "react-router-dom";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import NavBar from "./components/NavBar/NavBar";
import About from "./components/About/About";
import Landing from "./components/landing/LandingPage";
import Detail from "./components/detail/Detail";
import Countries from "./components/home/Home";
import NewActivity from "./components/newActivity/NewActivity";

configure({ adapter: new Adapter() });

describe("App", () => {
  let store;
  const middlewares = [thunk];
  const mockStore = configureStore(middlewares);
  const state = {
    countries: [
      {
        id: "ARG",
        name: "Argentina",
        flag: "http://argentina.png",
        continent: "Americas",
      },
      {
        id: "BRA",
        name: "Brazil",
        flag: "http://brazil.png",
        continent: "Americas",
      },
    ],
    countryDetail: {
      id: "ARG",
      name: "Argentina",
      flag: "http://argentina.png",
      continent: "Americas",
    },
  };

  beforeEach(() => {
    store = mockStore(state);
  });

  describe("NavBar component should render in every routes except Landing Page.", () => {
    it('Should render in route "/countries/:id"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/countries/:id"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(Landing)).toHaveLength(0);
      expect(wrapper.find(Detail)).toHaveLength(1);
    });
    it('Should render in route "/countries"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/countries"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(Landing)).toHaveLength(0);
      expect(wrapper.find(Countries)).toHaveLength(1);
    });
    it('Should render in route "/newactivity"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/newactivity"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(wrapper.find(NavBar)).toHaveLength(1);
      expect(wrapper.find(NewActivity)).toHaveLength(1);
    });
    it('Should not render on route "/"', () => {
      const wrapper = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );

      expect(wrapper.find(Landing)).toHaveLength(1);
      expect(wrapper.find(NavBar)).toHaveLength(0);
    });

    it('Should render on route "/about"', () => {
      const container = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/about"]}>
            <App />
          </MemoryRouter>
        </Provider>
      );
      expect(container.find(NavBar)).toHaveLength(1);
      expect(container.find(Landing)).toHaveLength(0);
      expect(container.find(About)).toHaveLength(1);
    });
  });
});
