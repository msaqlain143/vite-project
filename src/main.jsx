import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Card from "./components/card.jsx";
import Table from "./components/table.jsx";

const users = [
  { name: "Saqlain", email: "saqlain@example.com", role: "Admin" },
  { name: "Ali", email: "ali@example.com", role: "Editor" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />

    <Card
      title="React Card"
      description="This is a reusable card component in React."
      image="https://source.unsplash.com/random/300x200"
    />
    <Table data={users} />
  </StrictMode>
);
