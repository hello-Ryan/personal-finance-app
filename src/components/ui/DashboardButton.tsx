"use client";

import { redirect } from "next/navigation";
import Button from "./Button";

export default function DashboardButton() {
    return <Button onClick={() => redirect('/dashboard')}>
        Go to dashboard
    </Button>
}