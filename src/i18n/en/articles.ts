import type { ArticleId, ArticleText } from '../types'

export const articles: Partial<Record<ArticleId, ArticleText>> = {
  claudeCodeBeginners: {
    title: 'How to Install Claude Code on Windows and Mac: Beginner Guide',
    description: 'How to install Claude Code on Windows and Mac with one command, sign in and build a first project in an hour. Plan mode, CLAUDE.md, common install errors.',
    h1: 'How to Install Claude Code on Windows and Mac and Build a First Project',
    lead: 'Claude Code installs with one terminal command and does not need Node.js. You need a paid Claude plan, starting with Pro, or a Claude Console account with prepaid credits. Below are the steps: installing on Mac and Windows, the first sign-in, and a small project that shows how to work with the tool.',
    sections: [
      {
        title: 'What Claude Code is and what you need to install it',
        blocks: [
          { p: 'Claude Code is an AI agent from Anthropic that works inside your project folder: it reads files, writes and edits code, and runs commands. Unlike a chat, the result lands on your disk as files, so there is nothing to copy out of a conversation window. This way of working, where you describe the task in words and the agent writes the code, is often called vibe coding.' },
          { p: 'I write production code with it every day and teach others to do the same. If you are still choosing a tool, see my [comparison of Claude Code, Cursor and Codex](/articles/claude-code-vs-cursor-vs-codex). An ordinary computer is enough to start:' },
          { list: [
            'macOS 13 or later, Windows 10 (version 1809 or later) or Windows 11, or Linux.',
            '4 GB of RAM or more and an internet connection.',
            'A paid Claude account: Pro, Max or a team plan. The free claude.ai plan does not include Claude Code.',
            'Git is optional, but I recommend it because it makes undoing changes easier. On Windows, Git for Windows also gives you Git Bash, which Claude Code can use.',
          ] },
          { p: 'As of November 21, 2026, Pro costs $20 a month when billed monthly. Prices change, so check the [Claude pricing page](https://claude.com/pricing). Anthropic does not serve every country: check the [list of supported countries](https://www.anthropic.com/supported-countries) before you pay.' },
        ],
      },
      {
        title: 'How to install Claude Code on Mac',
        blocks: [
          { steps: [
            'Open the Terminal app: press Cmd + Space, type "Terminal" and press Enter.',
            'Paste the command `curl -fsSL https://claude.ai/install.sh | bash` and press Enter.',
            'When it finishes, close the terminal window and open a new one.',
            'Check the install: `claude --version` should print a version number.',
          ] },
          { p: 'If you use Homebrew, you can install Claude Code with `brew install --cask claude-code` instead. The difference is updates: the standard install updates itself, while with Homebrew you run `brew upgrade claude-code` from time to time.' },
        ],
      },
      {
        title: 'How to install Claude Code on Windows',
        blocks: [
          { p: 'You do not need WSL. Claude Code runs on regular Windows.' },
          { steps: [
            'Open PowerShell: press the Windows key, type "PowerShell" and press Enter. You do not need administrator rights.',
            'Paste the command `irm https://claude.ai/install.ps1 | iex` and press Enter.',
            'Close the window and open a new one, otherwise Windows will not see the new command.',
            'Check the install with `claude --version`.',
          ] },
          { p: "The `irm` install command only works in PowerShell. In the classic Command Prompt (CMD) you will get \"'irm' is not recognized\": switch to PowerShell, or install Claude Code with WinGet using `winget install Anthropic.ClaudeCode`." },
        ],
      },
      {
        title: 'First run of Claude Code and sign-in',
        blocks: [
          { p: 'Claude Code works in the folder you start it from and only sees that folder. Create a separate folder for each project.' },
          { code: 'mkdir my-first-project\ncd my-first-project\nclaude' },
          { p: 'On the first run a browser opens with the sign-in page. Sign in to your Claude account, go back to the terminal, and you can start typing. If sign-in does not start by itself, type `/login`.' },
        ],
      },
      {
        title: 'Your first Claude Code project in an hour',
        blocks: [
          { p: 'For a first project, pick something you can see in a browser that needs no server and no database. A habit tracker works well: a list of habits, a checkbox per day, data stored in the browser itself.' },
          { steps: [
            'Turn on plan mode: press Shift + Tab until you see `plan mode on` at the bottom. In this mode Claude describes what it is going to do and changes nothing on disk.',
            'Describe the task in plain words: what is on the page, what happens on click, where the data lives. The more specific you are, the less rework you get.',
            'Read the plan. If something is unclear, ask right there: "why do we need localStorage here?". This is the most useful habit a beginner can build.',
            'Approve the plan. Claude creates the files and asks permission before changing things and running commands. Read what you are agreeing to.',
            'Open the resulting `index.html` in a browser and test it by hand: add a habit, tick a day, reload the page.',
            'Ask for a change: "add a streak counter". This shows you how Claude edits code that already exists.',
            'Type `/init`. Claude studies the project and creates a `CLAUDE.md` file that describes it: what the project is, how to run it, what conventions it follows. Claude reads this file at the start of every session.',
          ] },
          { p: 'All of this takes about an hour, and most of that time goes into reading the plan and checking the result. Do not skip those parts: if you do not understand what Claude did, by the second or third project you will no longer know what to change in the code or where.' },
        ],
      },
      {
        title: 'Claude Code commands and keys for day one',
        blocks: [
          { table: {
            head: ['What to type', 'What it does'],
            rows: [
              ['`Shift + Tab`', 'Switches modes: normal, auto-accept edits, plan mode.'],
              ['`@file-name`', 'Points Claude at a specific file.'],
              ['`/init`', 'Creates `CLAUDE.md` with a description of the project.'],
              ['`/clear`', 'Starts a new conversation. Use it when you move to a different task.'],
              ['`Esc` twice', 'Opens the menu for rewinding to an earlier state. `/rewind` does the same.'],
              ['`/model`', 'Picks the model.'],
              ['`/help`', 'Lists all commands.'],
            ],
          } },
        ],
      },
      {
        title: 'Common Claude Code install errors',
        blocks: [
          { p: 'Almost all of them are covered in the [official install troubleshooting guide](https://code.claude.com/docs/en/troubleshoot-install). The most common one: the terminal says `command not found: claude` or "\'claude\' is not recognized". That means the program folder is not on your PATH, the list of places where the system looks for commands.' },
          { p: 'First, close the terminal and open a new one: windows that were open before the install do not see the new command. If that does not help, on Mac run:' },
          { code: 'echo \'export PATH="$HOME/.local/bin:$PATH"\' >> ~/.zshrc\nsource ~/.zshrc' },
          { p: 'On Windows, in PowerShell:' },
          { code: '$currentPath = [Environment]::GetEnvironmentVariable(\'PATH\', \'User\')\n[Environment]::SetEnvironmentVariable(\'PATH\', "$currentPath;$env:USERPROFILE\\.local\\bin", \'User\')' },
          { p: 'Then open a new terminal window again. Two more tips:' },
          { list: [
            'An error about `&&` in PowerShell means you pasted the CMD command. Use the PowerShell command from the Windows install section.',
            'If the cause is unclear, run `claude doctor`: it checks the Claude Code install and tells you what is wrong.',
          ] },
        ],
      },
      {
        title: 'Claude Code without a terminal: desktop app, browser and VS Code',
        blocks: [
          { p: 'The terminal is optional. Claude Code also comes as a desktop app that shows changes visually and needs no separate install, as a browser version at claude.ai/code, and as a VS Code extension. They all need the same subscription.' },
          { p: 'I still suggest going through the terminal route at least once. Every guide you will read uses terminal commands, and the fear of the black window is gone after one evening.' },
        ],
      },
      {
        title: 'Sources',
        blocks: [
          { p: 'Commands and system requirements were checked against the official documentation on November 21, 2026:' },
          { list: [
            '[Set up Claude Code](https://code.claude.com/docs/en/setup), Anthropic documentation.',
            '[Troubleshoot installation](https://code.claude.com/docs/en/troubleshoot-install), Anthropic documentation.',
            '[Claude pricing](https://claude.com/pricing).',
          ] },
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need to know how to code to start with Claude Code?',
        a: 'No, you can build a first project with no experience. But to get something into a working state you will need to learn to read code and understand what Claude does. That is worth your time from day one.',
      },
      {
        q: 'Do I need Node.js to install Claude Code?',
        a: 'No. The official installer sets up a ready-to-run program. Node.js 22 or later is only needed if you install through npm.',
      },
      {
        q: 'How is Claude Code different from the Claude chat?',
        a: 'The chat answers with text and you move the code yourself. Claude Code works in your project folder: it creates and edits files and runs commands and tests, asking permission as it goes.',
      },
      {
        q: 'How is Claude Code different from Cursor?',
        a: 'Claude Code is an agent you hand a whole task to, and its main interface is the terminal. Cursor is a code editor with a built-in agent, where every edit is visible in the file. Claude Code runs only on Claude models, while Cursor lets you pick models.',
      },
      {
        q: 'What is CLAUDE.md?',
        a: 'A file in the project root with instructions for Claude: how to run the project and what rules and conventions it follows. Claude reads it at the start of every session. You create it with /init, and it is best kept short, under 200 lines.',
      },
      {
        q: 'Is it safe to give Claude Code access to my computer?',
        a: 'By default it asks permission before changing files and running commands, and it works only in the folder where you started it. Do not turn on the modes that skip confirmations until you understand what they do, and set up git so any change can be undone.',
      },
    ],
    ctaTitle: 'Want to get there faster?',
    ctaText: "Message me: we'll install Claude Code together and start your project in the first session.",
  },
  claudeCodeVsCursorVsCodex: {
    title: 'Claude Code vs Cursor vs Codex: Which to Choose in 2026',
    description: 'Claude Code, Cursor and Codex compared as of November 2026: differences, models, prices, and which one a beginner or a developer should pick.',
    h1: 'Claude Code vs Cursor vs Codex: Which to Choose in 2026',
    lead: 'All three tools do the same job: an AI agent reads your project, writes code and runs commands. They differ in form and in models. Claude Code is Anthropic\'s agent on Claude models, and it started in the terminal. Cursor is a code editor with a built-in agent and a choice of models. Codex is OpenAI\'s agent inside ChatGPT, with a terminal version and cloud tasks. The facts in this article were checked in November 2026.',
    sections: [
      {
        title: 'The short answer: which to choose',
        blocks: [
          { list: [
            'You already pay for ChatGPT: start with Codex, it is included in your plan.',
            'You are used to VS Code and want to see every edit in the editor: pick Cursor.',
            'You want the agent to carry a task from plan to verification, and you are fine with a terminal or a separate app: pick Claude Code.',
            'You have never coded and want to build your own app: start with Codex in ChatGPT, which you can try for free, or with Claude Code in the desktop app.',
            'You are learning to code and want to understand the code: pick Cursor, where every edit is visible in the file.',
          ] },
          { p: 'If you have a teacher or a clear course for one of the three tools, pick that tool: the gap between the tools is smaller than the gap between understanding one and not understanding any.' },
          { p: 'Claude Code is my main working tool, and I also teach people to work in Cursor. Keep that in mind when you read my opinions. The facts were checked in November 2026, links to the official pricing pages are at the end of the article, and the conclusions are mine. GitHub Copilot, Gemini CLI and other similar tools are not part of this comparison.' },
        ],
      },
      {
        title: 'Claude Code, Cursor and Codex comparison table',
        blocks: [
          { table: {
            head: ['Criterion', 'Claude Code', 'Cursor', 'Codex'],
            rows: [
              ['Made by', 'Anthropic', 'Cursor, owned by SpaceX since August 2026', 'OpenAI'],
              ['Main form', 'An agent in the terminal. Also a desktop app, a browser version, and VS Code and JetBrains extensions', 'A code editor based on VS Code. Also a terminal version and cloud agents', 'Part of ChatGPT: app, web, terminal version, editor extension, cloud tasks'],
              ['Models', 'Claude', 'Its own Grok and Composer. Claude, GPT and Gemini are available but billed separately on the new plans', 'OpenAI GPT-6 family models'],
              ['Free plan', 'No', 'Yes, with Grok and Composer models only. Cursor does not publish the exact limit', 'Yes, for simple tasks. OpenAI does not publish the exact limit'],
              ['Paid plan for regular work', 'Pro, $20 a month', 'Plus at $8 with Grok models only, Premium at $30', 'ChatGPT Plus, $20 a month'],
              ['Project instructions file', '`CLAUDE.md`', 'Rules in `.cursor/rules`, also reads `AGENTS.md`', '`AGENTS.md`'],
              ['Windows, macOS, Linux', 'Yes, no WSL needed on Windows', 'Yes', 'Yes, no WSL needed on Windows'],
            ],
          } },
          { p: 'Claude Code, Cursor and Codex prices are as of November 21, 2026, for individuals on monthly billing. They change often: Cursor replaced its whole plan lineup during 2026. Check the official pages before you buy; the links are at the end of the article.' },
        ],
      },
      {
        title: 'Claude Code: an agent you hand a whole task to',
        blocks: [
          { p: 'Claude Code is built as an agent you hand a whole task to. You describe what you need, it writes a plan, changes files, runs tests and shows you the result. The main interface is the terminal, but the same agent is available in a desktop app and in the browser, so the black window is optional.' },
          { list: [
            'Claude Code\'s strength: long multi-step tasks and work in a large project. Plan mode, rewinding changes, subtasks handed to separate agents.',
            'It adapts closely to a project: `CLAUDE.md`, skills, hooks, and external services connected through MCP.',
            'Limitation: Claude models only, and no free plan. You need a subscription to try it.',
            'Reading the changes takes discipline here: the agent does a lot in one pass, and a beginner can easily approve without looking.',
          ] },
          { p: 'I describe how to set it up and what to do in the first hour in a separate guide: [how to install Claude Code on Windows and Mac](/articles/claude-code-for-beginners).' },
        ],
      },
      {
        title: 'Cursor: a code editor with a built-in agent',
        blocks: [
          { p: 'Cursor is a code editor with an agent built in. If you have used VS Code, the interface is familiar from the first minute: files on the left, code in the middle, chat on the side. Each edit the agent makes is highlighted in the file, and you can accept or reject it piece by piece.' },
          { list: [
            'Cursor\'s strength: visibility. You see what changes and where, and it is easy to edit code by hand next to the agent.',
            'You can pick models from different companies in one tool.',
            'It has cloud agents that run a task without your computer, and Bugbot for reviewing pull requests.',
            'The big change of 2026: after SpaceX bought the company, Cursor\'s plans were replaced with a shared subscription that also covers Grok and X. On the new plans, Claude and GPT models are billed separately at their API prices. The old plans remain only for people who signed up earlier.',
          ] },
        ],
      },
      {
        title: 'Codex: OpenAI\'s agent inside ChatGPT',
        blocks: [
          { p: 'Codex is OpenAI\'s agent. It is now part of ChatGPT: you can give it tasks in the app, in the browser, from the terminal and from your editor. Its distinctive feature is cloud tasks: the agent works in an isolated environment on OpenAI\'s servers, you can run several tasks in parallel and get the result as a pull request on GitHub.' },
          { list: [
            'Codex\'s strength: it comes with a ChatGPT plan many people already have, and you can try it on the free plan.',
            'The terminal version, Codex CLI, is open source.',
            'Its instructions file, `AGENTS.md`, is also read by other tools, including Cursor.',
            'Limitation: it runs on OpenAI models. Limits are published as estimated message ranges, so it is hard to predict your usage in advance.',
          ] },
        ],
      },
      {
        title: 'What to choose in your situation',
        blocks: [
          { table: {
            head: ['Situation', 'Where to start'],
            rows: [
              ['You have never coded and want to build your own app', 'Codex in ChatGPT, or Claude Code in the desktop app. Both let you start without a code editor.'],
              ['You are learning to code and want to understand the code', 'Cursor: changes are visible in the file, so it is easier to study what the agent wrote.'],
              ['You work as a developer in VS Code', 'Cursor, or the Claude Code extension for VS Code, depending on which models you prefer.'],
              ['You have many tasks that can run in parallel', 'Codex cloud tasks or Cursor cloud agents.'],
              ['You need to automate project routine: checks, releases, reviews', 'Claude Code: hooks, skills and running without an interface.'],
            ],
          } },
        ],
      },
      {
        title: 'What matters more than the tool',
        blocks: [
          { p: 'The skills carry over between Claude Code, Cursor and Codex. Once you have learned one, you pick up the next in a couple of days. These are worth learning in any of them:' },
          { list: [
            'Stating a task: what the result should be, what the constraints are, how to check it.',
            'Reading changes before you accept them.',
            'Keeping a project instructions file and updating it when the agent repeats the same mistake.',
            'Using git so any bad edit can be undone.',
            'Splitting a big task into steps and starting a new conversation for a new task.',
          ] },
          { p: 'You can combine tools. A common setup is the Cursor editor for reading and manual edits, with Claude Code or Codex running in a terminal next to it. For a beginner, though, I suggest staying in one tool for the first month: you learn faster what an agent can and cannot do. I teach these skills in my [AI coding mentoring](/services/ai).' },
        ],
      },
      {
        title: 'Where to check current prices',
        blocks: [
          { p: 'Plans for all three tools change several times a year. The official pages:' },
          { list: [
            '[Claude pricing](https://claude.com/pricing): Claude Code is included in the Pro and Max plans.',
            '[Cursor pricing](https://cursor.com/pricing).',
            '[ChatGPT pricing](https://chatgpt.com/pricing): Codex is included in ChatGPT plans.',
          ] },
        ],
      },
    ],
    faq: [
      {
        q: 'Which is best for a beginner: Claude Code, Cursor or Codex?',
        a: 'If you have never coded and want to build your own app, start with Codex in ChatGPT, which you can try for free, or with Claude Code in the desktop app. If you are learning to code and want to understand the code, pick Cursor: its edits are visible right in the file. The skills carry over between all three.',
      },
      {
        q: 'Which is cheapest: Claude Code, Cursor or Codex?',
        a: 'As of November 2026, Codex and Cursor are the cheapest to start with: both have a free plan. Neither Cursor nor OpenAI publishes exact limits; you see what is left in your account. The cheapest paid plan is Cursor Plus at $8 a month, but it covers Grok models only. For regular work, Claude Code and Codex start at $20 a month, and Cursor Premium is $30.',
      },
      {
        q: 'Can I use Claude models in Cursor?',
        a: 'Yes, but on the new Cursor plans Claude, GPT and Gemini models are billed separately at API prices and are not covered by the subscription.',
      },
      {
        q: 'What is the difference between CLAUDE.md and AGENTS.md?',
        a: 'They serve the same purpose: a file with instructions for the agent about the project. CLAUDE.md is read by Claude Code; AGENTS.md is read by Codex and Cursor.',
      },
      {
        q: 'Do I need to know how to code to use Claude Code, Cursor or Codex?',
        a: 'Not to build a first prototype. To get a project into a working state and maintain it, you need to understand what the agent wrote, at least well enough to read the code.',
      },
    ],
    ctaTitle: "Can't decide?",
    ctaText: "Tell me what you want to build. I'll suggest which tool to start with and help you get comfortable in it.",
  },
}
