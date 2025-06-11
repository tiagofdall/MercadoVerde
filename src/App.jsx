import AppLogo from "./components/AppLogo";
import Button from "./components/Button";
import Header from "./components/Header";
import Footer from "./components/Footer";

import appleIcon from "./assets/apple.svg";
import googleIcon from "./assets/playstore.svg";

import { MainContainer, ButtonsContainer } from "./style";

function App() {
  return (
    <>
      <Header />
      <MainContainer>
        <AppLogo />
        <ButtonsContainer>
          <Button
            icon={appleIcon}
            downText="App Store"
            upText="Baixar na"
            link="https://www.instagram.com/tiagofdall/"
          />
          <Button
            icon={googleIcon}
            downText="Play Store"
            upText="Obter no"
            link="https://www.instagram.com/tiagofdall/"
          />
        </ButtonsContainer>
      </MainContainer>
      <Footer />
    </>
  );
}

export default App;
