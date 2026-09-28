Todo App - Expo Router + Convex (simple todo list)

Setup instructions:
1. Install dependencies
   npm install

2. Create a Convex project (if you haven't)
   npx convex dev
   - Follow the prompts to create a project. Note the deployment id printed (e.g. dev:yourname/todo-app-abc123)
   - Alternatively create a project on dashboard.convex.dev

3. Update .env
   Replace CONVEX_DEPLOYMENT in .env with your actual deployment id from Convex:
   CONVEX_DEPLOYMENT=dev:yourname/todo-app-abc123

4. Start Convex (for local development)
   npx convex dev

5. Start Expo
   npx expo start -c
   - Open on an emulator or physical device.

Notes:
- This project is a simple public todo list (no auth).
- Convex functions and schema are in the /convex folder. When you deploy your Convex project, the frontend will connect using the CONVEX_DEPLOYMENT value.
- If you see issues with @env, ensure babel.config.js includes react-native-dotenv plugin and restart Metro with -c.
