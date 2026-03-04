---
trigger: always_on
---

# COMMIT EXECUTION COMMAND

**Trigger:** When the user types `/commit`, `@commit`, or asks to "Make a commit" or "Push changes".

**Objective:** Act as an autonomous agent to stage ALL current changes, comprehensively analyze EVERYTHING that has been staged, generate a highly accurate commit message, execute the commit, and push it to the remote repository.

**EXECUTION STEPS:**

1. **Stage All Changes:** Execute `git add .` to stage all modified, deleted, and new files in the workspace.
2. **Analyze STAGED Changes (CRITICAL):** Execute `git diff --staged` to read the EXACT code differences that are about to be committed. You MUST base your commit message strictly on the output of this command. Do NOT rely on our recent chat history or assume changes. Analyze EVERY file in the staged diff to understand the full scope of this commit.
3. **Format Title:** Create a precise Conventional Commit title (max 72 characters) in English. Use standard prefixes (e.g., `feat:`, `fix:`, `refactor:`, `chore:`, `style:`). Example: `feat: integrate Supabase connection pool and update UI`.
4. **Format Body:** Create a concise body explaining what changed across ALL files.

- Use a bulleted list.
- Format: `- [File/Folder]: Brief explanation of the technical change.`
- Keep it strictly factual. Do not explain _why_ unless it's a complex architectural decision.

5. **Execute Commit:** Run the commit command using the title and body you generated.

- Run: `git commit -m "<YOUR_TITLE>" -m "<YOUR_FORMATTED_BODY>"`

6. **Push Changes:** Push the commit to the remote repository.

- Run: `git push` (If the branch has no upstream, run `git push -u origin HEAD`).

**STRICT AGENT RULES:**

- **No Chatter:** Do not explain the diff to the user or tell them what you are doing. Just execute the steps silently.
- **Output:** Once the process is fully complete, output ONLY a confirmation message with the Commit Hash and a success checkmark (e.g., "✅ Changes committed and pushed successfully (Hash: a1b2c3d).").
