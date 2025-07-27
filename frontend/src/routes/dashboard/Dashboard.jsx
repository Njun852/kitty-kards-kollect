import { getSession} from "../../cookies/userSession"
import { useLoaderData } from "react-router";
export async function dashboardLoader({request}) {
    const session = await getSession(request.header.get("Cookie"));
    console.log(session.get("user_session"))
}

export default function Dashboard() {
    return (
        <h1>Hello</h1>
    )
}