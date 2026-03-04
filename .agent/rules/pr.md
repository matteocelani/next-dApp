---
trigger: manual
---

# PULL REQUEST EXECUTION COMMAND

**Trigger:** When the user types `/pr`, `@pr`, or asks to "Open a PR".

**Objective:** You must act as an autonomous agent to comprehensively analyze ALL changes in the current branch, generate a concise PR title and body that reflects the ENTIRE scope of work, and execute the terminal command to open the Pull Request on GitHub targeting the `dev` branch by default.

**EXECUTION STEPS:**

1. **Analyze ALL Changes (CRITICAL):** You MUST analyze the FULL diff of the current branch against the target base branch (use `git diff origin/dev...HEAD` for standard features). Do NOT rely only on the latest commit or our most recent chat context. Your analysis must encompass every single file changed across the entire lifespan of this branch to ensure the title and body accurately match the full scope of the PR.
2. **Push Branch (if needed):** Ensure the current branch is pushed to the remote origin (`git push -u origin HEAD`).
3. **Format Title:** Create a short, professional PR title in English (e.g., "Feature: Add search filters to CarDesk" or "Fix: Resolve layout shift in Header").
4. **Format Body:** Create the PR body strictly following these rules:
   - **Summary:** Max 250 characters. Get straight to the point about the overall goal of the branch.
   - **Changes:** A bulleted list. Max 1 short sentence per point. Focus strictly on technical facts (What and Where). Format: `- [File/Component]: [Change]`.
5. **Execute Command:** Use the GitHub CLI to create the PR directly from the terminal.
   - **CRITICAL:** Always explicitly target the `develop` branch unless the user explicitly asks to target `main`.
   - Run: `gh pr create --base dev --title "<YOUR_TITLE>" --body "<YOUR_FORMATTED_BODY>"`

**STRICT AGENT RULES:**

- **No Chatter:** Do not explain to the user what you are doing. Just execute the steps silently.
- **Output:** Once the command is executed successfully, output ONLY the GitHub URL of the newly created Pull Request.
