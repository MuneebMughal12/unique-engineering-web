import "server-only";

import { getDb } from "./mongodb";

const KEY = "public-content-version";

export async function touchContentVersion() {
  const db = await getDb();
  if (!db) return;
  await db.collection("cmsMeta").updateOne(
    { key: KEY },
    { $set: { key: KEY, version: new Date().toISOString() } },
    { upsert: true },
  );
}

export async function getContentVersion(): Promise<string> {
  const db = await getDb();
  if (!db) return "static";
  const value = await db.collection<{ key: string; version?: string }>("cmsMeta").findOne({ key: KEY });
  return value?.version ?? "initial";
}
