// Thanks to The Net Ninja tutorial: https://www.youtube.com/watch?v=ZSWl5UwhHcs&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX

import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";
import Grid from "./grid";
import Keypad from "./keypad";
import { useDispatch } from "react-redux";
import { setShowModal } from "@/features/user/userSlice";
import { useSelector } from "react-redux";
import Modal from "@/components/ui/modal";
import WordleModal from "./wordleModal";
import { useRouter } from "next/router";

function Wordle({ solution }) {

   const dispatch = useDispatch();
   const router = useRouter();

   const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
   const showModal = useSelector(state => state.user.showModal);

   useEffect(() => {
      window.addEventListener("keyup", handleKeyup);

      if (isCorrect) {
         setTimeout(() => dispatch(setShowModal(true)), 2000)
         window.removeEventListener("keyup", handleKeyup)
      }

      if (turn > 5) {
         setTimeout(() => dispatch(setShowModal(true)), 2000)
         window.removeEventListener("keyup", handleKeyup)
      }

      return () => window.removeEventListener("keyup", handleKeyup);
   }, [handleKeyup, isCorrect, turn])   

   function closeModal() {
      dispatch(setShowModal(false));
      router.push({
         pathname: "/hello",
      })
   }

   return (
      <div>
         <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
         <Keypad usedKeys={usedKeys} />
         {showModal && <Modal onClose={closeModal}><WordleModal isCorrect={isCorrect} turn={turn} solution={solution} /></Modal>}
      </div>
   );
}

export default Wordle;