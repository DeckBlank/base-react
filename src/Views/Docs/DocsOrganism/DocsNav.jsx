import React from "react";
import Title from "../../../uiKit/Atoms/Title/Title";
// COMPONENTS
import NavBar from "../../../uiKit/Organism/NavBar/NavBar";
// IMAGES
import LogoMab from "../../../assets/images/Logo de MAB.png";

const DocsNav = () => {
  return (
    <section>
      <Title
        title="Docs Nav"
        classname="p-sticky top-0 txt-black bb-1-silver f-s mb-1 pl-3 pt-1 pr-1 pb-1"
      />
      <div className="ph-3">
        <h2>NAVS</h2>
        <NavBar logo={LogoMab} />
      </div>
    </section>
  );
};

export default DocsNav;
