"use client"
import { Button } from "~/components/ui/button";
import createTransaction from "../../_actions/createTransaction";

export default function Test() {
  return (
    <Button
      variant="default"
      onClick={() =>
        createTransaction({
          title: "hello",
          userId: "1",
          description: "description",
          categoryId: 2,
          amount: 100,
          date: new Date(),
        })
      }
    >ADD A TRANSACTION</Button>
  );
}
