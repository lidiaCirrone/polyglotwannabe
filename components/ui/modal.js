// components
import Button from "./button";
import ClientOnlyPortal from "../clientOnlyPortal";

// modules
import clsx from "clsx";

// redux
import { useSelector } from "react-redux";

// styles
import styles from './ui.module.css'
import { nunito } from "@/styles/font";

export default function Modal({ children, onClose }) {

   const showModal = useSelector(state => state.user.showModal);

   return (
      <>
         {showModal && (
            <ClientOnlyPortal selector="#modal-root">
               <div className={styles["backdrop"]}>
                  <div className={clsx(styles["modal"], nunito.className)}>
                     {children}
                     <Button label="Continue" onClick={onClose} />
                  </div>
                  <style jsx>{`
                     :global(body) {
                        overflow: hidden;
                     }
                  `}</style>
               </div>
            </ClientOnlyPortal>
         )}
      </>
   );
}
