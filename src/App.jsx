import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import { ProtectedRoute } from "./routes/ProtectedRoute";
import Violation from "./screens/violation";
import Map from "./screens/map";
import Login from "./screens/login";
import Camera from "./screens/camera";
import Dashboard from "./screens/dashboard";
import CameraCabinet from "./screens/camera_cabinet";
import AuthProvider from "./context/AuthProvider";

export default function App() {
  return(
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
        <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/map"
            element={
              <ProtectedRoute>
                <Map />
              </ProtectedRoute>
            }
          />
          <Route
            path="/violation"
            element={
              <ProtectedRoute>
                <Violation />
              </ProtectedRoute>
            }
          />
          <Route
            path="/camera"
            element={
              <ProtectedRoute>
                <Camera />
              </ProtectedRoute>
            }
          />
          <Route
            path="/camera-cabinet"
            element={
              <ProtectedRoute>
                <CameraCabinet />
              </ProtectedRoute>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  );
}