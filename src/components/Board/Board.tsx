import { FormEvent, useRef } from "react";
import { mocksCard } from "../../mocks/card-mocks";
import { Card } from "../Card";
import { Column } from "../Column";

export const Board = () => {
  const { data: cards } = mocksCard.boards[0];
  const formRef = useRef<HTMLFormElement>(null);
  const pending = cards.filter((card) => card.column === "Pending");
  const doing = cards.filter((card) => card.column === "Doing");
  const done = cards.filter((card) => card.column === "Done");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
    <div className="board">
      <div className="container">
        <Column title="Pending">
          {pending.map((item) => (
            <Card card={item} />
          ))}
        </Column>
        <Column title="Doing">
          {doing.map((item) => (
            <Card card={item} />
          ))}
        </Column>
        <Column title="Done">
          {done.map((item) => (
            <Card card={item} />
          ))}
        </Column>
        <Column title="Form">
          <form
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="name"
              name="name"
            />
            <input
              type="number"
              placeholder="number"
              name="number"
            />
            <input
              type="text"
              placeholder="assigned"
              name="assigned"
            />
            <select name="column">
              <option value="Pending">Pending</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
            <button type="submit">Guardar</button>
          </form>
        </Column>
      </div>
    </div>
  );
};
