import { createEvent, createStore } from 'effector';

export const eventPlus = createEvent();
export const $stateNumber = createStore(0).on(eventPlus, (state) => state + 1);

interface IObj {
  name: string;
  surname: string;
}
export const eventSetObj = createEvent<IObj>();
export const $stateObj = createStore<IObj>({ name: 'Вася', surname: 'Васин' }).on(
  eventSetObj,
  (_: IObj, payload: IObj) => payload
);

interface IList {
  id: string;
  value: string;
}
export const eventPush = createEvent<IList>();
export const eventPop = createEvent();
export const $storeList = createStore<IList[]>([
  { id: 'id-1', value: 'aaa' },
  { id: 'id-2', value: 'sss' },
])
  .on(eventPush, (state: IList[], payload: IList) => {
    state.push(payload);
    return [...state];
  })
  .on(eventPop, (state: IList[]) => {
    state.pop();
    return [...state];
  });
