import { Provider } from "react-redux";
import {
  BrowserRouter,
  Link,
  Outlet,
  Route,
  Routes,
  useNavigate,
  useParams,
} from "react-router-dom";
import { store } from "./store";
import SignIn from "./users/Signin";

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Go to videos</Link>
      <h1>This page don't be ready yet</h1>
    </>
  );
};

let Error404 = () => {
  return (
    <>
      <Link to="/videos">Return to home</Link>
      <h1>This page don't exist - 404</h1>
    </>
  );
};

let ShowVideo = () => {
  let { id } = useParams();
  return <p>{id}</p>;
};

let UsersOutlet = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<NotImplemented />} />

          <Route path="/users" element={<UsersOutlet />}>
            <Route path="signup" element={<NotImplemented />} />
            <Route path="signin" element={<SignIn />} />
            <Route path=":id" element={<NotImplemented />} />
            <Route path=":id/videos" element={<NotImplemented />} />
          </Route>

          <Route path="/videos">
            <Route path="/" element={<NotImplemented />} />
            <Route path=":id" element={<ShowVideo />} />
            <Route path="new" element={<NotImplemented />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
