# Vision India 2047

An educational Next.js platform for exploring India's integrated development pathways. The experience combines sourced context, interactive learning modules and clearly labelled illustrative exercises.

## Learning modules

- India Today and demographic transition
- Sustainable and integrated development
- Smart City Builder (illustrative project budget and indicator model)
- Public–Private Partnership Explorer
- Decentralization Explorer
- International development strategy comparisons
- Nation simulator and Future India pathways
- Government-linked case studies and knowledge check
- Source directory with publishers, links and notes

All simulation points and outputs are fictional classroom aids. They are not actual city budgets, empirical statistics, policy appraisal results or forecasts.

## Run locally

Requirements: Node.js compatible with the installed Next.js 16 release and npm.

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate and run a production build

```bash
npm run lint
npx tsc --noEmit
npm run build
npm start
```

The production build uses Next.js's webpack compiler. No additional application dependencies or environment variables are required.

## Deployment readiness

This is a standard Next.js Node.js application with `build` and `start` scripts. It can be deployed to a Node.js-compatible host or a supported Next.js platform. Connect the repository to the chosen provider, configure its build command as `npm run build`, its start command as `npm start` where required, and use the provider's generated deployment URL for a final production smoke check. No provider credentials or project URL are stored in this repository, so publishing must be completed from an account with access to the chosen host.

See the [Next.js deployment guide](https://nextjs.org/docs/app/getting-started/deploying) for supported deployment options.

## Sources and factual care

The Sources section in the site groups source links used in the modules. Read the linked publisher's current material for updates. International examples are context-specific. Simulator outputs are identified as illustrative and must not be read as empirical claims.
