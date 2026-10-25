import type { ServiceId, ServicePageText } from '../types'
import { numberOfYears } from '../structure'

const devYears = numberOfYears('2015')

export const services: Record<ServiceId, ServicePageText> = {
  mentoring: {
    name: 'Programming mentoring',
    summary: 'Web development from scratch, interview prep, code review and project audits.',
    h1: 'Programming Mentor & Tutor',
    lead: `One-on-one online lessons in web development, from your first lines of code to a job offer. I have been writing code for over ${devYears} years and mentoring since 2020. My students work at Yandex, Sber, Tinkoff, Ozon, Wildberries, Uber and Disney.`,
    sections: [
      {
        title: 'What I help with',
        items: [
          'Web development from scratch: HTML, CSS, JavaScript, TypeScript, React, Node.js.',
          'Technical interview prep: mock interviews, coding tasks and common questions.',
          'Code review and project audits, architecture advice.',
          'Web UI testing and test automation.',
          'Web3: wallets, transactions and smart contracts on ETH, Solana and TON.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'People getting into tech who want a personal approach instead of a mass course.',
          'Junior and middle developers preparing for interviews or aiming for the next level.',
          'Teams that need an outside look at their code and architecture.',
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
    name: 'QA mentoring',
    summary: 'Test automation in TypeScript, API testing, SQL and QA interview prep.',
    h1: 'QA & Test Automation Mentor',
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
    name: 'AI tutoring and AI adoption',
    summary: 'Vibe coding in Cursor and Claude Code, AI agents, prompting and AI adoption for business.',
    h1: 'AI Tutor & AI Adoption for Business',
    lead: 'One-on-one lessons on working with AI: vibe coding in Cursor and Claude Code, AI agents, prompting and local models. I also help businesses bring AI into real processes, with many successful cases already.',
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
        title: 'AI for business',
        items: [
          'I review your processes and find where AI saves time and money.',
          'Chatbots and assistants for customers and staff.',
          'Automating routine work: documents, reports, request handling.',
          'Training your team to work with AI.',
        ],
      },
      {
        title: 'Who it is for',
        items: [
          'People who want to use AI in their work, not just try it out.',
          'Founders and teams who want to adopt AI.',
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
}
