import { useState, useEffect } from "react";
import { useLoaderData, redirect } from "react-router";
import { commitSession, getSession } from "./cookies/userSession";

export async function appLoader({ request }) {
  const session = localStorage.getItem("user_session")
  console.log(JSON.parse(session))
}
function App() {
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}

export default App;
