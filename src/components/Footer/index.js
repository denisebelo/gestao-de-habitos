import { FooterMain } from "./style";
import ModalComponent from "../Modal";
import { useState } from "react";
import FAQ from "../FAQ";
import AboutUs from "../AboutUs";

const Footer = () => {
  const [openFaqModal, setOpenFaqModal] = useState(false);
  const [openAboutUsModal, setOpenAboutUsModal] = useState(false);
  return (
    <FooterMain>
      <div className="FooterSignature">@ 2021 G5 - Kenzie Academy Brasil</div>
      <div className="FooterLinks">
        <ModalComponent openModal={openFaqModal} setOpenModal={setOpenFaqModal}>
          <FAQ />
        </ModalComponent>

        <ModalComponent
          openModal={openAboutUsModal}
          setOpenModal={setOpenAboutUsModal}
        >
          <AboutUs />
        </ModalComponent>
        <p onClick={() => setOpenAboutUsModal(true)}>Sobre nós</p>
        <p onClick={() => setOpenFaqModal(true)}>Dúvidas</p>
      </div>
    </FooterMain>
  );
};

export default Footer;
