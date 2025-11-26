import "./InputPassword.css";
<input
type="password"
placeholder={placeholder}
value={senha}




// Button.jsx
export default function Button({ title }) {
return (
<button className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md w-full">
{title}
</button>
);
}


// Label.jsx
export default function Label({ htmlFor, children }) {
return (
<label htmlFor={htmlFor} className="text-sm font-medium text-gray-700">
{children}
</label>
);
}


// LabelTitle.jsx
export default function LabelTitle({ title }) {
return <h2 className="text-xl font-semibold text-center mb-4">{title}</h2>;
}


// InputText.jsx
export default function InputText({ id, placeholder }) {
return (
<input
id={id}
type="text"
placeholder={placeholder}
className="border p-2 rounded-md w-full"
/>
);
}


// InputPassword.jsx
export default function InputPassword({ id, placeholder }) {
return (
<input
id={id}
type="password"
placeholder={placeholder}
className="border p-2 rounded-md w-full"
/>
);
}