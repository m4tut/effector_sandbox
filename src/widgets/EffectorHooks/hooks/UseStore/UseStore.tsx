import { useStore } from 'effector-react';
import { ChangeEvent, FC, useState } from 'react';
import { $stateNumber, $stateObj, $storeList, eventPlus, eventPop, eventPush, eventSetObj } from '../model';

export const UseStore: FC = () => {
  const couter = useStore($stateNumber);
  const obj = useStore($stateObj);
  const list = useStore($storeList);

  const [name, setName] = useState('Ля');
  const [surname, setSurname] = useState('Ляяяяяяя');

  const [id, setId] = useState('id-3');
  const [value, setValue] = useState('dddd');

  return (
    <section className="mb-10">
      <h3 className="mb-3 text-3xl">useStore</h3>
      <div className="grid gap-5 grid-cols-3">
        <div>
          <h4 className="mb-3 text-xl">
            <a
              className="hover:text-gray-300 transition-colors duration-300"
              href="https://developer.mozilla.org/ru/docs/Glossary/Primitive"
            >
              Приметивные типы
            </a>
          </h4>
          <div className="mb-4 font-semibold">{couter}</div>
          <button
            className="border border-solid rounded border-gray-800 py-2 px-4"
            onClick={() => eventPlus()}
            type="button"
          >
            Click me
          </button>
        </div>

        <div>
          <h4 className="mb-3 text-xl">Объекты</h4>
          <div className="mb-4">
            <div>
              <span className="font-semibold">Name:</span> {obj.name}
            </div>
            <div>
              <span className="font-semibold">Surname:</span> {obj.surname}
            </div>
          </div>
          <div className="grid items-start gap-2 grid-cols-3">
            <input
              className="px-3 py-1 border border-solid border-gray-800"
              value={name}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
              type="text"
              placeholder="name..."
            />
            <input
              className="px-3 py-1 border border-solid border-gray-800"
              value={surname}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setSurname(evt.target.value)}
              type="text"
              placeholder="surname..."
            />
            <button
              className="border border-solid rounded border-gray-800 py-1 px-4"
              onClick={() => eventSetObj({ name, surname })}
              type="button"
            >
              Click me
            </button>
          </div>
        </div>

        <div>
          <h4 className="mb-3 text-xl">Массивы</h4>
          <div className="mb-4">
            <ul>
              {list.map((item, index) => {
                return (
                  <li key={item.id + index}>
                    {item.id} - {item.value}
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="grid items-start gap-2 grid-cols-2 mb-2.5">
            <input
              className="px-3 py-1 border border-solid border-gray-800"
              value={id}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setId(evt.target.value)}
              type="text"
              placeholder="add id..."
            />
            <input
              className="px-3 py-1 border border-solid border-gray-800"
              value={value}
              onChange={(evt: ChangeEvent<HTMLInputElement>) => setValue(evt.target.value)}
              type="text"
              placeholder="add value..."
            />
          </div>
          <div className="grid items-start gap-2 grid-cols-3">
            <button
              className="border border-solid rounded border-gray-800 py-1 px-4"
              onClick={() => eventPush({ id, value })}
              type="button"
            >
              Push
            </button>
            <button
              className="border border-solid rounded border-gray-800 py-1 px-4"
              onClick={() => eventPop()}
              type="button"
            >
              Pop
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
