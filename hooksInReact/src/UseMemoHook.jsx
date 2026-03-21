// useMemo() = React Hook used to MEMOIZE (cache) the result of a calculation
//             between re-renders

// 1. Memoization means remembering the result of a function
//    so you don't have to calculate it again

// 2. Only re-computes when dependencies change
//    otherwise returns the cached value

// 3. Helps to OPTIMIZE PERFORMANCE
//    by skipping expensive calculations on every render

// 4. Takes two arguments:
//    - a function that returns a value
//    - a dependency array

// 5. If dependency array is EMPTY []
//    the value is calculated only ONCE (on mount)

// 6. If dependency array has VALUES [items]
//    recalculates only when those values CHANGE

// 7. Do NOT overuse it
//    only use when dealing with EXPENSIVE calculations
//    or LARGE data sets (filtering, sorting, mapping)

// 8. useMemo  = caches a VALUE
//    useCallback = caches a FUNCTION

// 9. Without useMemo - recalculates on EVERY render
//    With useMemo    - recalculates only when needed

// 10. Common use cases:
//     - filtering large lists
//     - sorting large arrays
//     - heavy data transformations



// import { useMemo, useState } from 'react';

// import { initialItems } from './utils';



// function Demo({}: DemoProps) {
//   const [count, setCount] = useState(0);
//   const [items] = useState(initialItems);

//   const selectedItem = useMemo(
//     () => items.find((item) => item.isSelected),
//     [items],
//   );

//   return (
//     <div className='tutorial'>
//       <h1>Count: {count}</h1>
//       <h1>Selected Item: {selectedItem?.id}</h1>
//       <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//     </div>
//   );
// }

// export default Demo;