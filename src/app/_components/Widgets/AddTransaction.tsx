"use client"
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { db } from "~/server/db";
import { transactions } from "~/server/db/schema";
// import { auth } from "@clerk/nextjs/server";

const formSchema = z.object({
  title: z
    .string()
    .min(1, {
      message: "Please include a title.",
    })
    .max(256, { message: "Title can't be longer than 256 characters." }),
  date: z.date(),
  description: z.string().max(250, {
    message: "Description can't be longer than 250 characters.",
  }),
  amount: z.number().min(0, { message: "Amount must be greater than 0" }),
  category: z.string(),
});

export async function AddTransaction({
  categories,
  userId,
}: {
  categories: { id: number; title: string }[];
  userId: string;
}) {
  // const form = useForm<z.infer<typeof formSchema>>({
  //   resolver: zodResolver(formSchema),
  //   defaultValues: {
  //     title: "",
  //     date: new Date(),
  //     description: "",
  //     category: "",
  //   },
  // });

  // async function onSubmit(values: z.infer<typeof formSchema>) {
  //   const { title, description, date, category, amount } = values;
  //   const categoryId = categories.find((x) => {
  //     x.title === category;
  //   })!.id;

  //   await db.insert(transactions).values({
  //     title,
  //     userId,
  //     description,
  //     date,
  //     categoryId,
  //     amount,
  //   });
  // }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">New transaction</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>New transaction</DialogTitle>
          <DialogDescription>Record a new transaction.</DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input id="Title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Amount
            </Label>
            <Input id="amount" placeholder="$" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="amount" className="text-right">
              Category
            </Label>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">Select</Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56">
                <DropdownMenuLabel></DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuRadioGroup>
                  {categories.map((category) => (
                    <DropdownMenuRadioItem value={category.title}>
                      {category.title}
                    </DropdownMenuRadioItem>
                  ))}
                </DropdownMenuRadioGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Confirm</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
