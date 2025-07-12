import React, { useState } from "react";
import {
    DndContext,
    closestCenter,
    PointerSensor,
    useSensor,
    useSensors,
} from "@dnd-kit/core";
import {
    arrayMove,
    SortableContext,
    rectSortingStrategy,
    useSortable,
} from "@dnd-kit/sortable";
import { restrictToParentElement } from "@dnd-kit/modifiers";
import { CSS } from "@dnd-kit/utilities";
import styles from "./sortableHabit.module.css";
import HabitCard from "./../habitCard/HabitCard.jsx";

function SortableHabit({ data }) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
    } = useSortable({ id: data.id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        touchAction: "none",
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} >
            <HabitCard data={data} dragHandleProps={listeners}/>
        </div>
    );
    }

    export default function HabitList({ initialHabits }) {
    const [habits, setHabits] = useState(initialHabits);
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;

        const oldIndex = habits.findIndex((item) => item.id === active.id);
        const newIndex = habits.findIndex((item) => item.id === over.id);

        setHabits((items) => arrayMove(items, oldIndex, newIndex));
    };

    return (
        <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        modifiers={[restrictToParentElement]}
        onDragEnd={handleDragEnd}
        >
        <SortableContext items={habits.map((h) => h.id)} strategy={rectSortingStrategy}>
            <div className={styles.wrapper}>
            <div className={styles.postContainer}>
                {habits.map((habit) => (
                <SortableHabit data={habit} key={habit.id} />
                ))}
            </div>
            </div>
        </SortableContext>
        </DndContext>
    );
}