import { useReducer } from 'react';

const updateReducer = (num: number): number => (num + 1) % 1000000;

const useUpdate = () => {
  const [, update] = useReducer(updateReducer, 0);
  return update as () => void;
};

export default useUpdate;
