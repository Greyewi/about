import type { ServiceId, ServicePageText } from '../types'
import { numberOfYears } from '../structure'

const devYears = numberOfYears('2015')
const frontendYears = numberOfYears('2016')

export const services: Record<ServiceId, ServicePageText> = {
  mentoring: {
    name: 'Software developer mentoring',
    summary: 'Learning to code as an adult, JavaScript, TypeScript and Node.js, interview prep and code review.',
    h1: 'Software Developer Mentor: From First Code to Job Offer',
    lead: `One-on-one online lessons in web development: we start from scratch, prepare for interviews and work toward your first offer. I have been writing code for over ${devYears} years and mentoring since 2020. My students work at Yandex, Sber, T-Bank, Ozon, Wildberries, Uber and Disney.`,
    sections: [
      {
        title: 'What I help with',
        items: [
          'Web development from scratch with HTML, CSS, JavaScript, TypeScript, React and Node.js.',
          'Frontend and full-stack interview prep: mock technical interviews, coding tasks and common questions.',
          'Code review of pet projects and work code, architecture advice.',
          'Web UI testing and test automation.',
          'Web3 frontend on ETH and Solana, working with wallets, transactions and smart contracts.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'Adults learning to code one-on-one, at their own pace.',
          'Junior and middle developers preparing for interviews or aiming for the next level.',
        ],
      },
      {
        title: 'How it works',
        items: [
          'On the first call we get to know each other, review your level and goal, and make a plan.',
          'One-on-one online sessions in English, from anywhere.',
          'Practice on real tasks and your own projects, homework with review.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I start from zero?',
        a: 'Yes. We start with the basics and move at your pace, with a plan built around your goal.',
      },
      {
        q: 'How long until my first job?',
        a: 'It depends on your starting level and how much time you can put in. We will estimate realistic timelines on the first call.',
      },
      {
        q: 'Do you work with experienced developers?',
        a: 'Yes: I prepare people for middle and senior interviews, do code reviews and help with architecture.',
      },
    ],
    ctaTitle: "Let's talk about your goal",
    ctaText: 'Message me: we will get to know each other, review your level and make a plan.',
  },
  qa: {
    name: 'Test automation mentoring',
    summary: 'Playwright and TypeScript test automation, API testing, SQL and QA interview preparation.',
    h1: 'Test Automation Mentor: Playwright & TypeScript',
    lead: `One-on-one lessons for testers: web UI test automation, API testing and interview prep. I am a developer myself and look at tests from that side, so I teach you to write tests that catch bugs.`,
    sections: [
      {
        title: 'What I help with',
        items: [
          'Web UI test automation in TypeScript: Playwright, Puppeteer, WebdriverIO.',
          'Unit and integration tests: Jest, Chai.',
          'Testing APIs in Postman and with automated tests.',
          'SQL for testers, to check data in the database.',
          'Moving from manual testing to automation.',
          'QA interview prep with mock interviews and common questions.',
          'Review of your test suite: how stable and clear it is and what else to cover.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'Manual testers who want to move into automation.',
          'QA engineers preparing for interviews or aiming for the next level.',
          'Developers who want to learn to write good tests.',
        ],
      },
      {
        title: 'How it works',
        items: [
          'On the first call we get to know each other, review your level and goal, and make a plan.',
          'We meet one-on-one online.',
          'We practice on real applications and your own work tasks.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need to know how to code to write automated tests?',
        a: 'The basics are enough. We will cover the JavaScript or TypeScript you need along the way, using test examples.',
      },
      {
        q: 'Which tool should I pick: Playwright, Puppeteer or WebdriverIO?',
        a: 'It depends on your project and the jobs you are aiming for. We will figure it out on the first call.',
      },
      {
        q: 'Do you help with interviews?',
        a: 'Yes: I run QA mock interviews and go through testing theory, tasks and automation questions.',
      },
    ],
    ctaTitle: 'Start with your experience',
    ctaText: 'Message me: we will review your testing experience and make a plan.',
  },
  ai: {
    name: 'AI coding mentoring',
    summary: 'How to build AI agents, prompting, Cursor and local models, with no coding background needed.',
    h1: 'AI Coding Mentor: AI Agents, Prompting & Cursor',
    lead: 'One-on-one coaching on coding with AI: building your own AI agents, prompting, working in Cursor and running local models. No coding background needed. Claude Code and vibe coding have their own program, linked below.',
    sections: [
      {
        title: 'What you will learn',
        items: [
          'Build websites, bots and prototypes in Cursor, even with no coding background.',
          'Write prompts that get predictable results from ChatGPT, Claude and Gemini.',
          'Build AI agents that get tasks done on their own.',
          'Run AI models on your own machine without sending data outside.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'People who want to use AI in their everyday work.',
          'Founders who want to build prototypes and automations themselves.',
          'Developers who want to ship faster with AI tools.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. Vibe coding and working with AI need no programming background. If you have one, we will go deeper.',
      },
      {
        q: 'How is this different from a course?',
        a: 'There is no common program: we work on your tasks and your project.',
      },
      {
        q: 'Can I start with a single consultation?',
        a: 'Yes. Message me: we will discuss your task and decide on the best next steps.',
      },
    ],
    ctaTitle: 'Tell me about your task',
    ctaText: 'Message me: we will figure out what to learn or automate first.',
  },
  business: {
    name: 'AI adoption, code audits and development',
    summary: 'AI implementation in business processes, AI training for employees, code audits and custom development.',
    h1: 'AI Consulting, Code Audits & Custom Development',
    lead: `I help companies bring AI into real processes, review code quality and build web applications end to end. I have been writing code for over ${devYears} years and led development at a Web3 startup.`,
    sections: [
      {
        title: 'AI implementation',
        items: [
          'I review your processes and find where AI saves time and money.',
          'AI agents, chatbots and assistants for customers and staff.',
          'Automating routine work: documents, reports, request handling.',
          'AI training for employees.',
        ],
      },
      {
        title: 'Code audit',
        items: [
          'Code and architecture review: bottlenecks, technical debt, risks.',
          'Test quality and coverage review, with an improvement plan.',
          'An outside look before scaling, acquiring a project or changing teams.',
        ],
      },
      {
        title: 'Custom development',
        items: [
          'Web applications in TypeScript, React, Next.js and Node.js.',
          'Web3: wallets, smart contracts and integrations with ETH and Solana.',
          'Improving and refactoring existing projects, test automation and CI.',
        ],
      },
    ],
    faq: [
      {
        q: 'Where do we start with AI adoption?',
        a: 'With a short call: we go through your processes and pick one or two tasks where AI pays off fastest.',
      },
      {
        q: 'What do I get after a code audit?',
        a: 'A report with the issues found, a risk assessment and a prioritized list of improvements.',
      },
      {
        q: 'Do you work with small businesses?',
        a: 'Yes, with businesses of any size, from startups and small companies to large teams.',
      },
    ],
    ctaTitle: 'Tell me about your task',
    ctaText: 'Message me: we will discuss your task, timeline and how we can work together.',
  },
  claudeCode: {
    name: 'Claude Code & vibe coding coaching',
    summary: 'Claude Code from scratch: setup, your own project and portfolio work.',
    h1: 'Learn Claude Code & Vibe Coding from Scratch, 1:1',
    lead: 'One-on-one Claude Code coaching: we install it, get comfortable in the terminal and take your project to production. I write code with Claude Code every day and teach you to understand what it did, so you can check it and fix it. We set goals, tasks and how often we meet around you.',
    sections: [
      {
        title: 'Who it is for',
        items: [
          'Graduates and anyone getting into tech. We learn to build software together with AI and put together portfolio projects.',
          'Job seekers. We figure out what is expected from a junior today and prepare projects you can talk about in interviews.',
          'Founders who want to build their own app or understand what software development is made of and where they still need a developer.',
          'Developers who want to set up Claude Code for their stack and workflow.',
        ],
      },
      {
        title: 'How it works',
        items: [
          'On the first call we look at what you bring, whether it is an idea, a broken prototype or a working project, and set a goal.',
          'We install Claude Code on Windows or Mac, learn the terminal and git, practice giving AI tasks and write your first CLAUDE.md. If you know this already, we skip it.',
          'Then we work on your own task: clean up vibe-coded code, learn to read changes and add tests.',
          'Next come deployment, integrations, skills, hooks, subagents and MCP, until you ship features to production on your own.',
          'After that you can come for consultations: code review, architecture, new Claude Code features.',
        ],
      },
      {
        title: 'Format',
        items: [
          'Online, one-on-one, in English or Russian.',
          'You can book a single consultation or meet regularly; we match the pace to your task.',
          'For example, one student met for 3 hours a week and now comes for a consultation every couple of weeks.',
        ],
      },
    ],
    faq: [
      {
        q: 'Do I need to know how to code?',
        a: 'No. We start with the basics, and if you have experience we go straight to your project.',
      },
      {
        q: 'How is Claude Code different from ChatGPT and Cursor?',
        a: 'Claude Code works right inside your project: it reads the code, runs commands and makes changes. On the first call we will figure out which tool fits your task.',
      },
      {
        q: 'Will this help me get a job?',
        a: 'We will build portfolio projects and practice how to present them in interviews. If you need dedicated prep, I also run mock interviews.',
      },
      {
        q: 'How much does it cost?',
        a: 'I charge the market median: I check what specialists with my level of experience charge and set my rate in the middle. I will give you the exact price once we discuss your task.',
      },
      {
        q: 'How long does it take?',
        a: 'There is no fixed length. The program and how often we meet depend on your goal and pace; we will estimate it on the first call.',
      },
    ],
    ctaTitle: 'Where do we start?',
    ctaText: 'Message me: we will figure out where to start and which format suits you.',
  },
  mockInterview: {
    name: 'Frontend & backend mock interview',
    summary: 'An interview just like the real one: theory, live coding and system design, followed by detailed feedback and a prep plan.',
    h1: 'Frontend & Backend Mock Interview with a Senior Engineer',
    lead: 'I run practice technical interviews that feel like the real thing, then go through the results in detail. I have been mentoring since 2020, and my students have passed interviews at and now work for Yandex, Sber, T-Bank, Ozon, Wildberries, Uber and Disney.',
    sections: [
      {
        title: 'Who it is for',
        items: [
          'Juniors and graduates before their first offer.',
          'Middle and senior engineers before a job change or promotion.',
          'People who have had interviews, got rejected and do not know why.',
          'Anyone preparing for an interview at a specific company.',
        ],
      },
      {
        title: 'Frontend: what we cover',
        items: [
          'JavaScript: closures, this, the event loop, promises and async/await.',
          'TypeScript: types, generics, narrowing.',
          'React: rendering, hooks, state, performance.',
          'Browser and network: how a page loads, HTTP, caching, CORS.',
          'Live coding: algorithm tasks and component tasks.',
        ],
      },
      {
        title: 'Backend: what we cover',
        items: [
          'Node.js: the event loop, streams, error handling.',
          'Express and Nest.js: app architecture, REST APIs.',
          'SQL and PostgreSQL: queries, indexes, transactions.',
          'MongoDB and Redis: when and why to use them.',
          'System design for middle and senior roles: designing a service in an interview.',
        ],
      },
      {
        title: 'How it works',
        items: [
          'Before the session we discuss your goal, the company, the level and the job posting.',
          'The interview itself runs like the real one: theory, live coding, and system design or experience questions when needed.',
          'Right after, we go through what went well, where the gaps are and what to work on first.',
          'If you want, we then run another mock interview or work on your weak spots.',
        ],
      },
    ],
    faq: [
      {
        q: 'How should I prepare for a mock interview?',
        a: 'No special prep needed: come as you would to a real interview. That way the feedback shows your actual level.',
      },
      {
        q: 'Can you prepare me for a specific company?',
        a: 'Yes. We will go through how interviews usually run at that company and shape the mock interview around that format.',
      },
      {
        q: 'Can the interview be in Russian?',
        a: 'Yes, I run mock interviews in both English and Russian.',
      },
      {
        q: 'How many mock interviews do I need?',
        a: 'Sometimes one is enough to see the gaps. More often we make a plan after the feedback, work on weak spots and run the interview again.',
      },
      {
        q: 'How much does it cost?',
        a: 'I charge the market median: I check what specialists with my level of experience charge and set my rate in the middle. I will give you the exact price once we discuss your task.',
      },
    ],
    ctaTitle: 'Book a mock interview',
    ctaText: 'Message me: we will discuss your goal, level and the company you are preparing for.',
  },
  frontendMentoring: {
    name: 'Frontend mentoring',
    summary: 'One-on-one JavaScript, TypeScript and React: fundamentals, code review, portfolio projects and growing to middle.',
    h1: 'React & JavaScript Mentor for Developers, 1:1',
    lead: `One-on-one frontend mentoring: we close gaps in the fundamentals, write code on your own tasks and grow your level. I have been doing frontend for more than ${frontendYears} years, building CRMs, user dashboards, a marketplace and dApps with React and TypeScript.`,
    sections: [
      {
        title: 'Who it is for',
        items: [
          'Beginners and graduates who want to become frontend developers.',
          'Juniors who want to grow to middle and understand how their code works.',
          'Developers moving to frontend from backend, HTML/CSS or another stack.',
          'Anyone who wants a second look at a pet project or a take-home assignment.',
        ],
      },
      {
        title: 'What I help with',
        items: [
          'We go deep into JavaScript: closures, this, the event loop, async code.',
          'We type components, APIs and state with TypeScript in a real project.',
          'React: hooks, rendering, performance; Next.js and SSR.',
          'State and data: Redux Toolkit, React Query, Context.',
          'Styling: CSS modules, SASS, MUI.',
          'Testing: Jest, React Testing Library, Vitest, Playwright.',
          'How to structure a frontend project: layout, patterns, monorepos.',
        ],
      },
      {
        title: 'How it works',
        items: [
          'On the first call we look at your level and goal and make a plan.',
          'One-on-one online sessions in English or Russian, at a pace that suits you.',
          'We work on your own tasks and projects, with code review between sessions.',
          'If you are looking for a job, we build portfolio projects, review take-home assignments and run a mock interview.',
        ],
      },
    ],
    faq: [
      {
        q: 'Can I start from zero?',
        a: 'Yes. We start with HTML, CSS and JavaScript basics and move at your pace.',
      },
      {
        q: 'I already work as a junior. How can you help?',
        a: 'We will close gaps in the fundamentals, look at your work code and make a plan to reach middle: what to learn and how to show it at work and in interviews.',
      },
      {
        q: 'Do you help with the job search?',
        a: 'Yes: we will build portfolio projects, review take-home assignments and run a mock interview.',
      },
      {
        q: 'How long does mentoring last?',
        a: 'There is no fixed length. It depends on your goal and pace; we will estimate it on the first call.',
      },
      {
        q: 'How much does it cost?',
        a: 'I charge the market median: I check what specialists with my level of experience charge and set my rate in the middle. I will give you the exact price once we discuss your task.',
      },
    ],
    ctaTitle: 'Tell me where you want to start',
    ctaText: 'We will review your level and make a plan.',
  },
}
