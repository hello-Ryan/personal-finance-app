"use client";
import { Button } from "~/components/ui/button";
import createTransaction from "~/actions/createTransaction";

export default function Test() {
  return (
    <Button
      variant="default"
      onClick={async () => {
        const result = await createTransaction({
          title: "hello",
          userId: "1",
          description: "description",
          categoryId: 2,
          amount: 100,
          date: new Date(),
        });

        if (result?.response === "SUCCESS") {
          // TODO SUCCESS/UNSUCCESSFUL TOAST NOTIFICATION
          console.log(`Add transaction created with id ${result.userId}`);
        } else {
          console.log(`Add transaction unsuccessful`);
        }
      }}
    >
      ADD A TRANSACTION
    </Button>
  );
}
