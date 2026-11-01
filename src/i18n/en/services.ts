import type { ServiceId, ServicePageText } from '../types'
import { numberOfYears } from '../structure'

const devYears = numberOfYears('2015')

export const services: Record<ServiceId, ServicePageText> = {
  mentoring: {
    name: 'Software developer mentoring',
    summary: 'Learning to code as an adult, mock technical interviews and code review for frontend and full-stack developers.',
    h1: 'Software Developer Mentor: From First Code to Job Offer',
    lead: `One-on-one online lessons in web development, from your first lines of code to a job offer. I have been writing code for over ${devYears} years and mentoring since 2020. My students work at Yandex, Sber, Tinkoff, Ozon, Wildberries, Uber and Disney.`,
    sections: [
      {
        title: 'What I help with',
        items: [
          'Web development from scratch: HTML, CSS, JavaScript, TypeScript, React, Node.js.',
          'Frontend and full-stack interview prep: mock technical interviews, coding tasks and common questions.',
          'Code review of pet projects and work code, architecture advice.',
          'Web UI testing and test automation.',
          'Web3: wallets, transactions and smart contracts on ETH, Solana and TON.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'Adults learning to code with a mentor instead of a mass course.',
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
    lead: `One-on-one lessons for testers: web UI test automation, API testing and interview prep. I have been writing code for over ${devYears} years and look at tests from a developer's side, so I help you write tests that actually catch bugs.`,
    sections: [
      {
        title: 'What I help with',
        items: [
          'Web UI test automation in TypeScript: Playwright, Puppeteer, WebdriverIO.',
          'Unit and integration tests: Jest, Chai.',
          'API testing: Postman and automated API tests.',
          'SQL for testers: checking data in the database.',
          'Moving from manual testing to automation.',
          'QA interview prep: mock interviews and common questions.',
          'Review of your test suite: stability, structure, what to cover.',
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
          'One-on-one online sessions in English, from anywhere.',
          'Practice on real applications and your own work tasks.',
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
    ctaTitle: "Let's talk about your goal",
    ctaText: 'Message me: we will review your testing experience and make a plan.',
  },
  ai: {
    name: 'Claude Code and AI coding mentoring',
    summary: 'Vibe coding in Claude Code and Cursor, how to build AI agents, prompting and local models.',
    h1: 'Claude Code & AI Coding Mentor',
    lead: 'One-on-one coaching on coding with AI: vibe coding in Claude Code and Cursor, building your own AI agents, prompting and local models. No coding background needed.',
    sections: [
      {
        title: 'What you will learn',
        items: [
          'Vibe coding: build websites, bots and prototypes with Cursor and Claude Code, even with no coding background.',
          'Prompt engineering: get predictable results from ChatGPT, Claude and Gemini.',
          'AI agents: how to build an agent that gets tasks done on its own.',
          'Local models: run AI on your own machine without sending data outside.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'People who want to use AI in their work, not just try it out.',
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
        a: 'We work on your tasks and your project, not on a one-size-fits-all program.',
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
    lead: `I help companies bring AI into real processes, review code quality and build web applications end to end. I have been writing code for over ${devYears} years, led development at a Web3 startup, and already have many successful AI adoption cases.`,
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
          'Web3: wallets, smart contracts and integrations with ETH, Solana and TON.',
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
}
