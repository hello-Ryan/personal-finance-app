import "server-only";
import { db } from "./db";

export async function getTransactions() {
    const transactions = await db.query.transactions.findMany({
        orderBy: (model, {desc}) => desc(model.transactionDate)
    })

    return transactions;
}   