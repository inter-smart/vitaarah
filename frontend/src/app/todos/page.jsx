import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

export default async function TodosPage() {
  const cookieStore = await cookies();
  const supabase = createClient(cookieStore);

  const { data: todos, error } = await supabase.from("todos").select();

  if (error) {
    console.error("Error fetching todos:", error);
  }

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Supabase Todos Test</h1>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
      <ul style={{ marginTop: "1rem" }}>
        {todos?.map((todo) => (
          <li key={todo.id} style={{ margin: "0.5rem 0" }}>
            {todo.name}
          </li>
        ))}
        {(!todos || todos.length === 0) && !error && (
          <li>
            No todos found. If you just created the project, make sure a "todos" table exists with a "name" column and Row-Level Security (RLS) has a select policy allowed for public/authenticated access.
          </li>
        )}
      </ul>
    </div>
  );
}