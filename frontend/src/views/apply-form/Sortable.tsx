import React from "react";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { FaEquals } from "react-icons/fa";
import { TForm } from "../../pages/apply-form";

interface ISortable {
  value: string[];
  setValue: (value: string[], key: keyof TForm) => void;
}

const Sortable = ({ value, setValue }: ISortable) => {
  const handleOnDragEnd = (result: DropResult) => {
    if (!result.destination) return;
    const items = Array.from(value) as string[];
    const [reorderedItems] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItems);

    setValue(items, "positions");
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="ranking">
        {(provided) => (
          <ul
            className="ranking"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {value.map((item, idx) => {
              return (
                <Draggable
                  key={`key-${item}`}
                  draggableId={`id-${item}`}
                  index={idx}
                >
                  {(provided) => (
                    <li
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      className="px-4 py-3 hover:bg-blue-800 active:bg-blue-800 bg-orbit-blue rounded my-2 w-96 flex justify-between items-center"
                    >
                      <p className="gap-3">
                        <span className="font-semibold">{idx + 1}. </span>
                        {item}
                      </p>
                      <FaEquals />
                    </li>
                  )}
                </Draggable>
              );
            })}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default Sortable;
