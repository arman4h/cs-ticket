# Customer Support Zone

A React-based Customer Support Zone for managing customer tickets with real-time tracking and toast notifications.

## 🚀 Links
- **Live Demo:** [[Click here to see demo](https://arm-cs-ticket.vercel.app/)]
- **GitHub:** [[Click here to see github](https://github.com/arman4h/cs-ticket)]

---

## 🛠️ Tech Stack
HTML, CSS (Tailwind/DaisyUI), JavaScript, React.js, React-Toastify

---

## ✨ Features

- **Dynamic Hero Section** - Real-time ticket statistics with gradient background and texture overlay
- **Ticket Management** - Display customer tickets from JSON data in responsive 2-column grid
- **Task Status Tracking** - Click tickets to add to In-Progress list, counts update automatically
- **Complete & Resolve** - Mark tickets as complete, remove from In-Progress, add to Resolved list
- **Toast Notifications** - User-friendly notifications using React-Toastify for all actions
- **State Management** - Props-based state sharing between components (lifting state up)
- **Fully Responsive** - Mobile-friendly design with Tailwind CSS
- **Modern UI** - Clean navigation bar and footer with DaisyUI components

---

## 📚 React Concepts

### 1️⃣ What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension that allows writing HTML-like code in JavaScript. It makes code more readable, combines markup with logic, and gets transpiled to `React.createElement()` calls. JSX catches errors at compile time and allows embedding JavaScript expressions using curly braces `{}`.

---

### 2️⃣ What is the difference between State and Props?

**State** is internal mutable data owned by the component itself, changed using `setState` or `useState`.  
**Props** are external read-only data passed from parent to child components and cannot be modified by the child.  
Both trigger re-renders when changed, but state is private while props come from outside.

---

### 3️⃣ What is the useState hook, and how does it work?

`useState` is a React Hook that adds state to functional components. It takes an initial value and returns an array with the current state value and a setter function. Calling the setter function updates the state and triggers a component re-render.

---

### 4️⃣ How can you share state between components in React?

**Lifting State Up:** Move shared state to the closest common parent component and pass it down via props (used in this project).  
**Context API:** Create a context provider to share state across deeply nested components without prop drilling.  
**External Libraries:** Use state management libraries like Redux or Zustand for complex global state.

---

### 5️⃣ How is event handling done in React?

React uses camelCase event names (`onClick`, `onChange`) and passes functions as handlers instead of strings. Events are handled using inline functions, function references, or event handler methods. The event object can be accessed via the handler parameter, and `preventDefault()` must be called explicitly.

---

