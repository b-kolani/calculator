export const initialState = {
  currentValue: "0",
  operator: null,
  previousValue: null,
};

export const handleNumber = (value, state) => {
  if (state.currentValue === "0") {
    return { ...state, currentValue: `${value}` };
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`,
    previousValue: state.currentValue,
  };
};

export const handleEqual = (state) => {
  const { currentValue, previousValue, operator } = state;
  console.log(currentValue, previousValue, operator);

  const current = parseFloat(currentValue);
  const previous = parseFloat(previousValue);
  const resetState = {
    operator: null,
    previousValue: null,
  };

  if (operator === "/") {
    return {
      currentValue: previous / current,
      ...resetState,
    };
  }

  if (operator === "*") {
    return {
      currentValue: previous * current,
      ...resetState,
    };
  }

  if (operator === "+") {
    return {
      currentValue: previous + current,
      ...resetState,
    };
  }

  if (operator === "-") {
    return {
      currentValue: previous - current,
      ...resetState,
    };
  }

  return state;
};

const calculator = (type, value, state) => {
  //   console.log(type, value, state);
  switch (type) {
    case "number":
      console.log(state);

      return handleNumber(value, state);
    case "operator":
      console.log(state);

      return {
        operator: value,
        previousValue: state.currentValue,
        currentValue: "0",
      };
    case "equal":
      console.log(state);
      return handleEqual(state);
    case "clear":
      return initialState;
    case "pos/neg":
      return {
        currentValue: `${parseFloat(state.currentValue) * -1}`,
      };
    case "percentage":
      return {
        currentValue: `${parseFloat(state.currentValue) * 0.01}`,
      };
    default:
      return state;
  }
};

export default calculator;
