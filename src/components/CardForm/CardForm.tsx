import { FormEvent, useRef } from "react";

export const CardForm = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    for (const [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`);
    }
  };

  return (
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
  );
};
