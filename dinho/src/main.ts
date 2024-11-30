import { timeout } from "hono/timeout";
import { Hono } from "hono/tiny";
import { join } from "node:path";
import { Ollama } from "ollama";
import { env } from "./config/env";

const ollama = new Ollama({ host: env.OLLAMA_URL });

const modelfilePath = join(__dirname, 'assets', 'Modelfile');
const modelfile = await Bun.file(modelfilePath).text();

await ollama.create({ model: 'dinho', modelfile: modelfile });

const app = new Hono();

app.use('/api', timeout(60_000))

app.post("/chat", async (c) => {
  const json = await c.req.json();
  const { prompt } = json;

  const response = await ollama.chat({
    model: 'dinho',
    messages: [{ role: 'user', content: prompt }]
  });

  return c.json(response.message);
});

export default {
  port: env.PORT,
  fetch: app.fetch,
};
