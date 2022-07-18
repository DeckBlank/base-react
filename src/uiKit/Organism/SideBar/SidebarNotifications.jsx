import React from "react";
import { Icon } from "@iconify/react";
// COMPONENTS
import Button from "../../Atoms/Button/Button";
import { useMainContext } from "../../../context/MainContext";

const SidebarNotifications = (props) => {
  const { showNotification, setShowNotification } = useMainContext();
  let {classname} = props;

  return (
    <div className={classname}>
      <div className="bg-yellow p-sticky top-0 d-flex jc-space-between ai-center pt-05 pr-1 pl-1 pb-05 zi-100">
        <div className="d-flex ai-center zi-100 g-05">
          <Icon icon="bxs:bell" className="txt-black f-xxl" />
          <h3 className="txt-black"> Notificaciones </h3>
        </div>
        <Button
          classname="d-flex ai-center btn-padding h-bg-red h-txt-white txt-black"
          onclick={() => setShowNotification(true)}
        >
          <Icon icon="ep:close-bold" className="font-m" />
        </Button>
      </div>
      <div className="content-notification">
        <div className="w-100p">
          <div className="d-flex fd-column g-08 tz-start w-100p pt-05 pr-1 pl-1 pb-05">
            <h3 className="txt-silver">Clases para Hoy</h3>
            <p className="txt-silver f-s">16 Abril 2022</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarNotifications;
