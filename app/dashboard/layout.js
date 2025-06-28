import { auth } from "@/auth";
import { redirect } from "next/navigation";

async function LayoutPrivate({children}) {
    const session = await auth();

    if (!session) {
        redirect("/");
    }

    return children;
}

export default LayoutPrivate;