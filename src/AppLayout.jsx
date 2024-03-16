import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import styled from "styled-components";

const StyledAppLayout = styled.div``;

const StyledMain = styled.main`
  box-sizing: border-box;
`;

function AppLayout() {
  return (
    <>
      <StyledAppLayout>
        <Header />
        <StyledMain>
          <Outlet />
        </StyledMain>
        <Footer />
      </StyledAppLayout>
    </>
  );
}

export default AppLayout;
