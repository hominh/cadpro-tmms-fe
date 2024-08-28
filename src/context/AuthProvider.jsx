import { createContext,useContext, useState, } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoadingAuth, setIsLoadingAuth] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const navigate = useNavigate();
  const loginAction = async (phone, password) => {
    setIsLoadingAuth(true);
    axios
      .post('https://vts.clii.vn/sanpham/public/index.php/api/v1/signin', {
        phone,
        password,
        device_name: `Browser`,
      })
      .then(response => {
        //console.log(response.data.user.phone);
        localStorage.setItem('token',response.data.token);
        localStorage.setItem('phone',response.data.user.phone);
        setUserInfo(response.data.user);
        navigate("/dashboard");
      })
      .catch(error => {
        console.log('error login: ' + error + phone + password);
        setIsLoadingAuth(false);
      });
  };

  const registerAction = async (name, email, password, phone) => {
    setIsLoadingAuth(true);
    axios
      .post('https://vts.clii.vn/sanpham/public/index.php/api/v1/signup', {
        name,
        email,
        password,
        phone,
        device_name: `Browser`,
      })
      .then(response => {
        localStorage.setItem('token',response.data.token);
        navigate("/checkout");
        setIsLoadingAuth(false);
      })
      .catch(error => {
        console.log('error: ' + error);
        setIsLoadingAuth(false);
      });
  }

  return (
    <AuthContext.Provider value={{ isLoadingAuth,loginAction,registerAction }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => {
  return useContext(AuthContext);
};