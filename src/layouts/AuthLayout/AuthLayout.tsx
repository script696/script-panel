import { Container } from "@mui/material";
import { ReactNode } from "react";

type IAuthLayout = {
  children: ReactNode;
};

const AuthLayout = ({ children }: IAuthLayout) => {
  return (
    <Container component="main" maxWidth="xs">
      {children}
    </Container>
  );
};

export default AuthLayout;
