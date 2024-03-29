import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { ColumnType } from '../Card/Card.type';
import { useBoard } from '../../hooks/useBoard';
import './CardForm.css';

type TForm = {
  name: string;
  description: string;
  assigned: string;
  column: ColumnType | string;
};

export const CardForm = () => {
  const { getPeople, addCard } = useBoard();
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<TForm>({
    defaultValues: {
      name: '',
      description: '',
      assigned: '',
      column: '',
    },
  });

  const getSelectOptions = getPeople(1);

  const onSubmit: SubmitHandler<TForm> = (data) => {
    addCard({
      id: 1,
      card: {
        id: '',
        name: data.name,
        number: 0,
        description: data.description,
        assigned: data.assigned,
        column: data.column as ColumnType,
      },
    });
    reset();
  };

  return (
    <div className='backdrop'>
      <div className='form-container'>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name='name'
            control={control}
            rules={{ required: true }}
            render={({
              field,
              fieldState: { /* invalid, isTouched, isDirty, */ error },
              /*    formState, */
            }) => (
              <input
                {...field}
                className={error ? 'error' : ''}
                placeholder='name'
              />
            )}
          />
          {errors.name && <p className='error-message'>Please enter a name</p>}
          <Controller
            name='description'
            control={control}
            rules={{}}
            render={({ field }) => (
              <input
                {...field}
                placeholder='description'
              />
            )}
          />
          <Controller
            name='assigned'
            control={control}
            rules={{ required: true }}
            render={({ field, fieldState: { error } }) => (
              <select
                {...field}
                className={error ? 'error' : ''}
              >
                <option
                  value=''
                  style={{ display: 'none' }}
                >
                  Seleccionar persona
                </option>
                {getSelectOptions?.map((option) => (
                  <option
                    key={option}
                    value={option}
                  >
                    {option}
                  </option>
                ))}
              </select>
            )}
          />
          {errors.assigned && (
            <p className='error-message'>Please enter a assigned</p>
          )}
          <Controller
            name='column'
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <select {...field}>
                <option
                  value=''
                  style={{ display: 'none' }}
                >
                  Seleccionar opción
                </option>
                <option value='Pending'>Pending</option>
                <option value='Doing'>Doing</option>
                <option value='Done'>Done</option>
              </select>
            )}
          />
          <button
            type='submit'
            disabled={!isValid}
          >
            Guardar
          </button>
          <button
            type='button'
            onClick={() => reset()}
          >
            Limpiar
          </button>
        </form>
      </div>
    </div>
  );
};
