'use client'

// Thanks to The Net Ninja tutorial: https://www.youtube.com/watch?v=ZSWl5UwhHcs&list=PL4cUxeGkcC9gXdVXVJBmHpSI7zCEcjLUX

import useWordle from "@/hooks/useWordle";
import { useEffect } from "react";
import Grid from "./grid";
import Keypad from "./keypad";
import Modal from "@/components/ui/modal";
import WordleModal from "./wordleModal";
import { useRouter } from "next/navigation";
import { useMainContext } from "@/store/MainProvider";

function Wordle({ solution }) {

   const router = useRouter();

   const { currentGuess, handleKeyup, guesses, isCorrect, turn, usedKeys } = useWordle(solution);
   const {showModal, updateShowModal} = useMainContext()

   useEffect(() => {
      window.addEventListener("keyup", handleKeyup);

      if (isCorrect) {
         setTimeout(() => updateShowModal(true), 2000)
         window.removeEventListener("keyup", handleKeyup)
      }

      if (turn > 5) {
         setTimeout(() => updateShowModal(true), 2000)
         window.removeEventListener("keyup", handleKeyup)
      }

      return () => window.removeEventListener("keyup", handleKeyup);
   }, [handleKeyup, isCorrect, turn])   

   function closeModal() {
      updateShowModal(false)
      router.push("/hello")
   }

   return (
      <div>
         <Grid currentGuess={currentGuess} guesses={guesses} turn={turn} />
         <Keypad usedKeys={usedKeys} handleKeyup={handleKeyup} />
         {showModal && <Modal onClose={closeModal}><WordleModal isCorrect={isCorrect} turn={turn} solution={solution} /></Modal>}
      </div>
   );
}

export default Wordle;