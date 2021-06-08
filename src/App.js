import { BrowserRouter, Link, Navigate, Outlet, Route, Routes, useNavigate, useParams } from "react-router-dom";

let NotImplemented = () => {
  return (
    <>
      <Link to="/videos">Go to videos</Link>
      <h1>This page don't be ready yet</h1>
    </>
  );
}

let Error404 = () => {
  return (
    <>
      <Link to="/videos">Return to home</Link>
      <h1>This page don't exist - 404</h1>
    </>
  );
}

let ShowVideo = () => {
  let { id } = useParams();
  return (<p>{id}</p>);
}

let UsersOutlet = () => {
  let navigate = useNavigate();
  let redirect = () => { navigate('/') }
  return (
    <>
      <button onClick={redirect}>Go to home</button>
      <Outlet />
    </>
  );
}

function App() {
  const isAuth = true;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NotImplemented />} />

        <Route path="/users" element={isAuth ? <Navigate to='/' /> : <UsersOutlet />} >
          <Route path="signup" element={<NotImplemented />} />
          <Route path="signin" element={<NotImplemented />} />
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
    </BrowserRouter>
  );
}

export default App;