import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../services/authService";
import useCookie from "react-use-cookie";

interface PrivateRouteProps {
  Component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ Component }) => {
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [cookieLogin, setCookieLogin] = useCookie("userLoginCookie");
  const userLoginCookie = cookieLogin ? JSON.parse(cookieLogin) : null;
  const authService = AuthService();

  useEffect(() => {
    const checkToken = async () => {
      if (userLoginCookie && userLoginCookie.token) {
        try {
          const response = await authService.validateToken(
            userLoginCookie.token
          );
          if (response.valid) {
            setIsValid(response.valid);
          } else {
            setCookieLogin("");
            setIsValid(false);
          }
        } catch (error) {
          setCookieLogin("");
          console.log(error);
          setIsValid(false);
        }
      } else {
        console.log("Token not found or user is not logged in.");
        setIsValid(false);
      }
    };

    checkToken();
  }, [authService, userLoginCookie]);

  if (isValid === null) {
    return <div>Loading...</div>;
  }

  return isValid ? <Component /> : <Navigate to="/login" />;
};

export default PrivateRoute;
