import { useList } from 'effector-react';
import { ChangeEvent, FC, useState } from 'react';
import { $storeList, eventPop, eventPush } from '../model';

export const UseList: FC = () => {
  const [id, setId] = useState('id-3');
  const [value, setValue] = useState('dddd');

  const list = useList($storeList, (item) => {
    return (
      <li>
        {item.id} - {item.value}
      </li>
    );
  });

  return (
    <section>
      <h3 className="mb-3 text-3xl">useList</h3>
      <p className="max-w-[710px] mb-3 text-gray-500">
        <span className="text-xl text-red-500">*</span> Используется только с массивами, должен возвращать{' '}
        <span className="px-1 py-0.5 border border-solid border-gray-800 rounded bg-gray-100">React.Node</span>. Может
        включать в себя дополнительные зависимости при изменении которых будет перерисован компонент.
      </p>

      <div>
        <div className="mb-4">
          <ul>{list}</ul>
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
    </section>
  );
};
