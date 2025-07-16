import { evaluate } from 'mathjs';

export const HandleKeypadInput = (value, input, setInput) => {
  if (value === 'C') {
    setInput('');
  } else if (value === 'erase') {
    setInput(prev => prev.slice(0, -1));
  } else if (value === '=' && input.trim() !== '') {
    try {
      const expression = input.replace(/x/g, '*').replace(/÷/g, '/');
      const result = evaluate(expression);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  } else {
    const lastChar = input.slice(-1);
    const operators = ['+', '-', '*', '/', '.', '%'];
    const currentValue = value === 'x' ? '*' : value === '÷' ? '/' : value;
    const lastValue =
      lastChar === 'x' ? '*' : lastChar === '÷' ? '/' : lastChar;

    if (operators.includes(currentValue) && operators.includes(lastValue)) {
      return;
    }

    if (input === 'Error') {
      setInput(value);
      return;
    }

    if (input === '' && ['+', '*', '/', '%', '.'].includes(currentValue)) {
      return;
    }

    setInput(input + value);
  }
};
