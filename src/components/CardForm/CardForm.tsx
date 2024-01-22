import { useRef } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { ColumnType } from "../Card/Card.type";

type TForm = {
  name: string;
  number: number | undefined;
  assigned: string;
  column: ColumnType | string;
};

export const CardForm = () => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<TForm>({
    defaultValues: {
      name: "",
      number: 0,
      assigned: "",
      column: "",
    },
  });

  const example = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("ex", e.target.value);
  };

  const onSubmit: SubmitHandler<TForm> = (data) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        render={({
          field,
          fieldState: { /* invalid, isTouched, isDirty, */ error },
          /*    formState, */
        }) => (
          <input
            {...field}
            className={error ? "error" : ""}
            placeholder="name"
          />
        )}
      />
      {errors.name && <p className="error-message">Please enter a name</p>}
      <Controller
        name="number"
        control={control}
        rules={{}}
        render={({ field }) => (
          <input
            {...field}
            placeholder="number"
          />
        )}
      />
      <Controller
        name="assigned"
        control={control}
        rules={{ required: true }}
        render={({ field, fieldState: { error } }) => (
          <input
            {...field}
            className={error ? "error" : ""}
            placeholder="assigned"
          />
        )}
      />
      {errors.assigned && (
        <p className="error-message">Please enter a assigned</p>
      )}
      <Controller
        name="column"
        control={control}
        rules={{ required: true }}
        render={({ field }) => (
          <select
            {...field}
            onChange={(e) => {
              field.onChange(e);
              example(e);
            }}
          >
            <option value="">Seleccionar opción</option>
            <option value="Pending">Pending</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
        )}
      />
      <button type="submit">Guardar</button>
      <button
        type="button"
        onClick={() => reset()}
      >
        Limpiar
      </button>
    </form>
  );
};
