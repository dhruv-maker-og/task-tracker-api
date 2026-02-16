# GitHub Agent HQ Demo — Video Script
**Duration:** 5–10 minutes | **Audience:** Developers | **Format:** Screen recording with voiceover

---

## PRE-RECORDING CHECKLIST

- [ ] Repo `dhruv-maker-og/task-tracker-api` is public with all 3 issues created and unassigned
- [ ] Copilot coding agent enabled for the repo (Settings → Copilot → Coding Agent)
- [ ] Claude and Codex third-party agents enabled in Copilot settings
- [ ] Copilot Pro+ or Enterprise subscription active
- [ ] VS Code 1.109+ installed with latest Copilot extension
- [ ] Copilot CLI installed (`gh copilot` or standalone)
- [ ] Screen recorder ready (OBS, ScreenStudio, etc.)
- [ ] Browser zoom at 125% for readability
- [ ] VS Code zoom at 125%, sidebar visible
- [ ] Terminal font size bumped to 16px

---

## SCENE 1 — The Agents Tab (≈1.5 min)

### What to show
The new **Agents** tab in the repository — session management, creation, and session logs.

### Screen actions
1. Open `github.com/dhruv-maker-og/task-tracker-api` in the browser.
2. Click the **Agents** tab (next to Pull Requests / Actions).
3. Pause to show the empty session list.
4. Click **New session** (or the prompt box).
5. Type the prompt:
   > Fix the 500 error on GET /tasks/:id when the task doesn't exist. It should return 404 with an error message.
6. Select **Copilot** from the agent picker (the Copilot icon dropdown).
7. Submit.
8. Show the session appearing with "Running…" status.
9. Click into the session to reveal the **redesigned session logs** — grouped tool calls, inline diffs, bash commands.
10. Point out the one-click link to the draft PR.

### Narration script
> "Let's start on github.com. I've got a small Express REST API here with a known bug — GET /tasks/:id returns a 500 when the task doesn't exist.
>
> Notice this **Agents** tab right here in my repo — this is Agent HQ's mission control. All my agent sessions live alongside my code, pull requests, and issues. No separate dashboards.
>
> I'll create a new session. I type my request, pick Copilot as the agent, and submit. The session kicks off immediately — I can see it running right here.
>
> Let me click in. Look at these session logs — tool calls are grouped, file diffs render inline just like a PR, and I can see every bash command the agent ran. Full transparency.
>
> And when it's done, there's a one-click link straight to the draft pull request."

---

## SCENE 2 — Multi-Agent Comparison (≈2 min)

### What to show
Assign **three different agents** to the same issue and compare their approaches.

### Screen actions
1. Navigate to **Issue #2**: _"Add a PATCH /tasks/:id endpoint to toggle task completion"_.
2. In the Assignees section, assign the issue to **Copilot**.
3. Also assign to **Claude** and **Codex** (select each from the agent dropdown).
4. Show all three accepted the assignment (comments appear on the issue).
5. Navigate to the **Agents** tab — show three sessions running in parallel.
6. **[CUT / FAST-FORWARD]** — add a "⏩ Agents working…" overlay for 2–3 seconds.
7. Show all three sessions completed.
8. Open each draft PR briefly. Highlight one interesting difference:
   - E.g., "Claude extracted a `toggleTask` helper in `store.js`; Codex kept the logic inline in the route handler; Copilot added extra input validation."

### Narration script
> "Here's where it gets interesting. I have a feature request — add a PATCH endpoint to toggle task completion. Instead of assigning this to one agent, I'm going to assign it to **all three**: Copilot, Claude, and Codex.
>
> Each agent spins up its own sandbox, clones the repo, and works independently. I can see all three sessions running in parallel on the Agents tab.
>
> *[fast-forward]*
>
> All three are done. Let me open the draft PRs. Look at the difference — Claude extracted a helper function in the data store, Codex kept everything inline in the route, and Copilot went further and added input validation.
>
> This is the real power of Agent HQ — it moves your review process from **syntax to strategy**. You're comparing architectural approaches, not nitpicking semicolons."

---

## SCENE 3 — Issue & PR Assignment (≈1.5 min)

### What to show
Assign an agent to an issue via the issue page, then **@mention** the agent on a PR for follow-up.

### Screen actions
1. Navigate to **Issue #3**: _"README is missing API usage examples"_.
2. Assign the issue to **Copilot**.
3. Wait for / show Copilot posting a comment acknowledging the task.
4. **[CUT / FAST-FORWARD]** to the draft PR that Copilot creates.
5. Open the PR. Quickly scroll through the README changes.
6. Leave a PR comment:
   > @Copilot Also add a section about error responses and HTTP status codes the API returns.
7. Show Copilot picking up the comment and pushing a new commit.

### Narration script
> "Agents also plug right into your existing GitHub workflow. I'll assign this docs issue to Copilot — no new UI to learn, just the assignee dropdown you already know.
>
> *[fast-forward]*
>
> Copilot created a draft PR with README improvements. Looks good, but I want more — so I'll just @-mention Copilot in a PR comment and ask for an error responses section.
>
> Copilot picks it up and pushes another commit. This is the same review loop you'd have with a human contributor — comment, iterate, merge."

---

## SCENE 4 — VS Code Integration (≈1.5 min)

### What to show
Start an agent session directly from VS Code using the Agent Sessions view.

### Screen actions
1. Switch to VS Code with the repo open.
2. Open the **Agent Sessions** view: `Ctrl+Shift+P` → type "Agent Sessions" → select it. (Or click the icon in the title bar.)
3. Show the three session types briefly (Local / Cloud / Background).
4. Click **New Cloud Session**.
5. Select **Copilot** as the agent.
6. Type the prompt:
   > Add input validation to POST /tasks — reject requests where title is longer than 200 characters.
7. Submit.
8. Show the session status updating in VS Code while the cloud agent works on GitHub.
9. Click the session link to open the PR on github.com.

### Narration script
> "You don't have to leave your editor either. I'm in VS Code — let me open the Agent Sessions view.
>
> I can start sessions in three modes — **Local** for fast interactive work, **Cloud** for autonomous tasks that run on GitHub, and **Background** for async local work.
>
> I'll start a Cloud session with Copilot and ask it to add input validation. The session kicks off on GitHub — I can see the status updating right here in my editor.
>
> When it's done, one click takes me to the draft PR. Start in your editor, delegate to GitHub, review on your own time."

---

## SCENE 5 — Resume in Copilot CLI (≈1 min)

### What to show
Continue a GitHub agent session in the terminal using Copilot CLI.

### Screen actions
1. Back on github.com, open the session from Scene 4 in the **Agents** tab.
2. Click the **"Continue in Copilot CLI"** button.
3. Copy the command shown.
4. Switch to the terminal (or VS Code integrated terminal).
5. Paste and run the command.
6. Show the session picked up in the CLI — same context, same history.

### Narration script
> "Last trick — I can also continue a session in my terminal. From the Agents tab, I click 'Continue in Copilot CLI', copy this command, and paste it right into my terminal.
>
> Same session, same context, no re-explaining. Browser, editor, terminal — Agent HQ keeps everything connected."

---

## OUTRO (≈30 sec)

### Screen actions
Show a summary screen (can be a simple slide or a text overlay):

```
✅ Agents Tab — mission control in your repo
✅ Multi-Agent Comparison — Copilot, Claude, Codex side by side
✅ Issue & PR Assignment — agents in your existing workflow  
✅ VS Code Sessions — local, cloud, and background modes
✅ Copilot CLI Resume — pick up where you left off
```

### Narration script
> "That's Agent HQ — your agents, your repo, your workflow. Multiple agents working on real tasks, producing draft PRs you review just like a teammate's code. No new tools to learn.
>
> You'll need Copilot Pro+ or Enterprise. Enable coding agents and third-party agents in your Copilot settings, and you're good to go. Links are in the description.
>
> Thanks for watching."

### On-screen links
- Docs: https://docs.github.com/copilot/concepts/agents/coding-agent/about-coding-agent
- Enable agents: https://docs.github.com/copilot/how-tos/manage-your-account/manage-policies
- Agent HQ blog post: https://github.blog/news-insights/company-news/pick-your-agent-use-claude-and-codex-on-agent-hq/
- Agents tab changelog: https://github.blog/changelog/2026-01-26-introducing-the-agents-tab-in-your-repository/

---

## POST-PRODUCTION TIPS

1. **Fast-forward agent work** — Use 4x–8x speed with a subtle overlay ("⏩ Agent working…") during the 1-2 minute wait times.
2. **Zoom & highlight** — Use your recorder's zoom feature to magnify the agent picker, session logs, and diff views.
3. **Lower-third captions** — Add scene titles as lower-third text overlays during transitions.
4. **Background music** — Subtle lo-fi or ambient track, volume at ~10%.
5. **Total runtime target** — 7-8 minutes after editing is the sweet spot.
6. **Thumbnail** — Use a split-screen showing the Agents tab with three sessions (Copilot/Claude/Codex).
