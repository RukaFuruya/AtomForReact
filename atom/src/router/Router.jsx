import { Route, Routes } from "react-router-dom";
import { Top } from "../components/pages/Top";
import { Users } from "../components/pages/Users";
import { DefaultLayout } from "../components/templates/DefaultLayout";
import { HeaderOnly } from "../components/templates/HeaderOnly";

export const AppRouter = () => {
  return (
    <Routes>
      {/* DefaultLayout を使用するパス */}
      <Route 
        path="/" 
        element={
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        } 
      />
      {/* HeaderOnly を使用するパス */}
      <Route 
        path="/user" 
        element={
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        } 
      />
    </Routes>
  );
};
