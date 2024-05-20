// The input string is valid if every open bracket is closed by the same type of bracket, open brackets are closed in order, every close bracket has a corresponding open bracket of the same time

type Pairs = {
  [key: string]: string;
};

function validParenthesis(s: string): boolean {
  // Define a pairs object to determine if current character is a closing bracket
  const pairs: Pairs = {
    "}": "{",
    "]": "[",
    ")": "(",
  };

  const stack: string[] = [];

  for (const c of s) {
    // If the current key, c, is an opening bracket, it will return undefined as all opening brackets are values not keys
    const isClosingBracket = pairs[c] !== undefined;

    // If an opening bracket, push to the stack
    if (!isClosingBracket) {
      stack.push(c);
      continue;
    }

    // Determine the stack's most recent value
    const peak = stack[stack.length - 1];

    // If the stack's most recent value matches the key value of c in pairs, we know it's a pair and can remove it from the stack
    if (peak === pairs[c]) {
      stack.pop();
      continue;
    }

    // If the current iterator is not escaped with continue, we know that we've encountered a mismatch
    return false;
  }

  // Return a boolean based on the length of the stack
  // A valid parenthesis should have an empty stack
  return stack.length === 0;
}

// Space-time complexity
// O(n) time as we may potentially traverse the entire array to determine if all brackets can close
// O(n) space as we may create a stack that is the size of the passed string (if all brackets are opening brackets for example)

console.log(validParenthesis("{")); // false
console.log(validParenthesis("[}")); // false
console.log(validParenthesis("[(])")); // false
console.log(validParenthesis("{{{{{")); // false
console.log(validParenthesis("[]")); // true
console.log(validParenthesis("()[]{}")); // true
console.log(validParenthesis("{[]}")); // true
console.log(validParenthesis("((([])))")); // true
