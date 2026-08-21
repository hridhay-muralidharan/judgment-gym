# Vercel Test Deployment Notes

These notes record the successful disposable deployment rehearsal completed before the hackathon.

## What was tested

- Vercel account creation and CLI device login.
- New Vercel project from a local directory.
- Static frontend deployment.
- Server-side function under `/api/hello`.
- Second deployment after editing code.
- Preview deployment behaviour.
- Production promotion with `vercel --prod`.
- Production environment variable configuration.
- Server-side reading of the environment variable.

## Tested project

Disposable project: `room-to-respond-vercel-smoke-test` under the personal Vercel team.

The project is separate from Room to Respond and contains no API key. It may be removed manually from the Vercel dashboard later; do not delete it during the hackathon.

## Grandma-mode workflow for tomorrow

From the Room to Respond project directory:

```bash
npx vercel login
npx vercel
npx vercel --prod
```

During the first deployment, choose:

1. the personal Vercel team;
2. `Create a new project`;
3. the intended project name;
4. `./` as the code directory;
5. default settings unless the project has a specific build configuration.

For the OpenAI key, add it as a production environment variable:

```bash
npx vercel env add OPENAI_API_KEY production
```

When prompted:

1. choose sensitive storage if offered;
2. paste the key directly into the hidden prompt;
3. do not put the key in a file, chat message, GitHub, or frontend code;
4. redeploy with `npx vercel --prod` so the production deployment receives the variable.

## Important behaviour observed

- The first CLI deployment was assigned to production automatically.
- Later deployments were previews unless `--prod` was supplied.
- Preview URLs may be protected by Vercel authentication and return a redirect. That does not mean the build failed.
- The production alias is the URL to use for a public hackathon demo.
- A server-side route can read production environment variables without exposing them to the browser.
- Vercel may use a different CLI version during its remote build than the locally invoked CLI; this is normal.

## Verification checklist

After deployment:

1. Open the production URL in a browser.
2. Confirm the page loads.
3. Test the model API route through the UI.
4. Check the Vercel deployment status is `Ready`.
5. If the model route fails, inspect the deployment logs and confirm the environment variable was added to the correct environment.
6. Never test by printing the API key.

## npm cache fallback

If `npx vercel` reports a permission error in the existing npm cache, use a temporary cache:

```bash
NPM_CONFIG_CACHE=/tmp/room-to-respond-vercel-npm-cache npx vercel --version
```

This avoids deleting or modifying the normal npm cache.
