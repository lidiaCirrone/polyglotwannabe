import { useEffect, useState } from "react";

// modules
import { useRouter } from "next/router";
import clsx from "clsx";
import { DragDropContext, Draggable, Droppable } from "@hello-pangea/dnd";

// styles
import styles from './languageGames.module.css'

//utils
import { languageGames } from "@/utils/globalVariables";
import { shuffle } from "@/utils/playing";

function DragAndDrop({ language }) {

   const router = useRouter();
   const gameData = languageGames[language.slug].data;
   const { solution } = gameData;

   const [sentences, setSentences] = useState([]);
   const [isCorrect, setIsCorrect] = useState(false);

   function checkIfAllCorrect(items) {
      let verify = true;
      for (let i = 0; i < items.length; i++) {
         console.log("i: ", i);
         console.log("items[i]: ", items[i]);
         if (i.toString() !== items[i].id) {
            verify = false;
            break;
         } else {
            verify = true;
         }
      }
      console.log("verify: ", verify);
      setIsCorrect(verify);
      if (verify) {
         setTimeout(() => {
            alert("CORRECT!")
            router.push({
               pathname: "/hello",
            })
         }, 250);
      }
   }

   const handleDragEnd = ({ destination, source }) => {
      console.log("handleDragEnd callback");
      if (!destination) return;
      let updatedSentences = Array.from(sentences);
      // let updatedSentences = structuredClone(sentences);
      const [removed] = updatedSentences.splice(source.index, 1);
      updatedSentences.splice(destination.index, 0, removed);
      console.log("\n\nupdatedSentences: ", updatedSentences);
      checkIfAllCorrect(updatedSentences);
      setSentences(updatedSentences);
   }

   useEffect(() => {
      const shuffled = structuredClone(solution);
      const updated = shuffled.map((item, key) => { return { id: key.toString(), sentence: item } })
      shuffle(updated);
      // console.log("updated: ", updated);
      setSentences(updated);
   }, [])

   const renderSentences = (item, index) => (
      <Draggable key={item.id} index={index} draggableId={item.id} isDragDisabled={isCorrect}>
         {(provided, snapshot) =>
            <div
               ref={provided.innerRef}
               {...provided.draggableProps}
               {...provided.dragHandleProps}
               className={clsx(styles.sentence, "unselectable", isCorrect && styles["correct-sentence"])}
            >
               {item.sentence}
            </div>
         }
      </Draggable>
   )

   return (
      <DragDropContext onDragEnd={handleDragEnd}>
         <Droppable droppableId="droppable">
            {(provided) => (
               <div ref={provided.innerRef} {...provided.droppableProps} className={styles["sentences-container"]}>
                  {sentences.map(renderSentences)}
                  {provided.placeholder}
               </div>
            )}
         </Droppable>
      </DragDropContext>
   )
}

export default DragAndDrop;