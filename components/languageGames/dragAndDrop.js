'use client'

import { useEffect, useState } from "react";

// modules
import clsx from "clsx";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

// styles
import styles from './dragAndDrop.module.css'

//utils
import { languageGames } from "@/utils/globalVariables";
import { shuffle } from "@/utils/playing";
import { useRouter } from "next/navigation";

// Thanks to Robin Wieruch's tutorial: https://www.robinwieruch.de/react-drag-and-drop/

function DragAndDrop({ language }) {

   const router = useRouter();
   const gameData = languageGames[language.slug].data;
   const { solution } = gameData;

   const [sentences, setSentences] = useState([]);
   const [isCorrect, setIsCorrect] = useState(false);

   function checkIfAllCorrect(items) {
      let verify = true;
      for (let i = 0; i < items.length; i++) {
         if (solution[i] !== items[i]) {
            verify = false;
            break;
         } else {
            verify = true;
         }
      }
      setIsCorrect(verify);
      if (verify) {
         setTimeout(() => {
            alert("CORRECT!")
            router.push("/hello")
         }, 250);
      }
   }

   const handleDragEnd = ({ destination, source }) => {
      if (!destination) return;
      let updatedSentences = Array.from(sentences);
      const [removed] = updatedSentences.splice(source.index, 1);
      updatedSentences.splice(destination.index, 0, removed);
      checkIfAllCorrect(updatedSentences);
      setSentences(updatedSentences);
   }

   useEffect(() => {
      const updated = structuredClone(solution);
      shuffle(updated);
      setSentences(updated);
   }, [])

   const renderSentences = (sentence, index) => (
      <Draggable key={`sentence-${index}`} index={index} draggableId={`sentence-${index}`} isDragDisabled={isCorrect}>
         {(provided, snapshot) =>
            <div
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               className={clsx(styles.sentence, "unselectable", isCorrect && styles.correct)}
               style={{
                  ...provided.draggableProps.style,
                  backgroundColor: snapshot.isDragging
                     ? "#f0f0f0"
                     : isCorrect ? "#b3f5bc" : "transparent"
               }}
            >
               {sentence}
            </div>
         }
      </Draggable>
   )

   return (
      <DragDropContext onDragEnd={handleDragEnd}>
         <Droppable droppableId="droppable">
            {(provided) => (
               <div ref={provided.innerRef} {...provided.droppableProps} className={styles.container}>
                  {sentences.map(renderSentences)}
                  {provided.placeholder}
               </div>
            )}
         </Droppable>
      </DragDropContext>
   )
}

export default DragAndDrop;