# AI Chat GPT-3 example

This is a chatbot that reads up to date code and always sends the up to date project code in the user message so the ai chatbot can bug-fix, troubleshoot and create new modules for the user with ease.

### Components

- Next.js
- OpenAI API (ChatGPT) - streaming
- API Routes (Edge runtime) - streaming

## How to Use

You can choose from one of the following two methods to use this repository:

#### Set up environment variables

Rename [`.env.example`](.env.example) to `.env.local`:

```bash
cp .env.example .env.local
```

then, update `OPENAI_API_KEY` with your [OpenAI](https://beta.openai.com/account/api-keys) secret key.

Next, run Next.js in development mode:

```bash
pnpm dev
```

The app should be up and running at http://localhost:3000.
