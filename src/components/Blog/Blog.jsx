
export const Blog = () => {
	return (
		<>
			<div className="hero min-h-screen bg-base-200">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <h3 className="font-bold">When should you use context API?</h3>
    <p>Ans: The Context API in React should be used when you have data or state that needs to be accessed by multiple components in your application. It provides a way to pass data through the component tree without explicitly passing props down manually at every level.</p>
    <h3 className="font-bold">What is a custom hook?</h3>
    <p>Ans: A custom hook in React is a JavaScript function that starts with the prefix "use" and allows you to reuse stateful logic across multiple components. It is a way to extract component logic into a reusable function. Custom hooks are a powerful feature in React that enable you to share and compose stateful logic in a concise and modular way.</p>
    <h3 className="font-bold">What is useRef?</h3>
    <p>useRef is a hook provided by React that allows you to create a mutable reference to a value that persists across renders. It returns a mutable ref object with a .current property. The value of the ref can be accessed and updated without triggering a re-render of the component. useRef is commonly used to access DOM elements, store mutable values, or manage previous values in a component.</p>
    <h3 className="font-bold">What is useMemo?</h3>
    <p> useMemo is a hook provided by React that enables memoization of a value. It allows you to optimize the performance of your components by memoizing expensive calculations or computations that are used within the component. useMemo takes a function and a dependency array as arguments. The function is only re-executed if any value in the dependency array changes. The result of the function call is then cached and returned on subsequent renders without re-executing the function unless the dependencies change.</p>
    
     </div>
  </div>
</div>
		</>
	);
}


