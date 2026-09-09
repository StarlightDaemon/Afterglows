// Canonical facts for the resumed expansion; standalone sources carry the drawing.
import { expansionEntries } from './expansion-entry.js';
export const CONCEPTS = [
  {
    "key": "S106",
    "id": "market-clearing",
    "label": "Market Clearing",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "A market-clearing price equates quantities supplied and demanded in a specified market model.",
    "motionThesis": "A low price attracts more buyers than sellers, a high price does the reverse, and a final intermediate price pairs two willing sellers with two willing buyers.",
    "distinction": "Seller reservations 2,4,6,8 and buyer reservations 9,7,5,3 produce shortage at 3, surplus at 7 and two trades at 5.5; this is a posted-price toy market, not a universal adjustment law.",
    "references": [
      "https://www.core-econ.org/te2-0-micro-and-macro-guide/"
    ],
    "aliases": [],
    "facets": [
      "reservation-price",
      "supply-demand",
      "exchange"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:00:00Z"
  },
  {
    "key": "S107",
    "id": "order-book-matching",
    "label": "Order Book Matching",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "An exchange can match incoming orders against resting orders under price and time priority.",
    "motionThesis": "A buy order consumes two earlier tickets and then one later ticket at the best ask before the next buy reaches the higher-price queue.",
    "distinction": "The stated FIFO example has A100x2, B100x1 and C101x2; buys of three then one leave one ticket at 101, rather than implying every venue uses the same matching rule.",
    "references": [
      "https://www.cmegroup.com/education/articles-and-reports/overview-what-makes-ags-markets-work"
    ],
    "aliases": [],
    "facets": [
      "price-time-priority",
      "FIFO",
      "limit-order-book"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:01:00Z"
  },
  {
    "key": "S108",
    "id": "comparative-advantage",
    "label": "Comparative Advantage",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "Comparative advantage is the ability to produce a good at lower opportunity cost than another producer.",
    "motionThesis": "Two workshops compare mixed production with specialization under the same labor budget, then exchange goods so each finishes with two food and two cloth units.",
    "distinction": "Per labor tick A makes two food or one cloth and B one food or two cloth; two-tick rounds yield mixed bundles 2F1C and 1F2C versus specialized 4F and 4C, traded at one for one.",
    "references": [
      "https://fraser.stlouisfed.org/docs/historical/frbrich/focus/frbrich_focus_200703.pdf"
    ],
    "aliases": [],
    "facets": [
      "opportunity-cost",
      "specialization",
      "gains-from-trade"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:02:00Z"
  },
  {
    "key": "S109",
    "id": "cobweb-price-dynamics",
    "label": "Cobweb Price Dynamics",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "Cobweb dynamics arise when production responds to earlier prices and current prices clear the resulting supply.",
    "motionThesis": "A staircase alternates from the previous price to a supply decision and then to the new demand-clearing price, converging with alternating overshoot.",
    "distinction": "The naive-expectation fixture uses demand P=10-Q and supply P=2Q, giving Q_t=P_(t-1)/2 and P_t=10-Q_t; these chosen slopes converge, unlike all possible cobweb models.",
    "references": [
      "https://assets.press.princeton.edu/chapters/s7097.pdf"
    ],
    "aliases": [],
    "facets": [
      "lagged-production",
      "expectations",
      "price-adjustment"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:03:00Z"
  },
  {
    "key": "S110",
    "id": "bank-run",
    "label": "Bank Run",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "Simultaneous withdrawals can force a bank to liquidate long-term investments before maturity at a loss.",
    "motionThesis": "Two liquid reserve coins pay the first depositors; pairs of term claims must then be sold for half value to fund two more withdrawals, leaving two claims unpaid.",
    "distinction": "Six unit deposits fund two cash units and four unit-maturity assets; early liquidation returns one half per asset, so total payout is four units in this illustrative liquidity mismatch.",
    "references": [
      "https://www.nobelprize.org/prizes/economic-sciences/2022/popular-information/"
    ],
    "aliases": [],
    "facets": [
      "liquidity-mismatch",
      "early-liquidation",
      "withdrawals"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:04:00Z"
  },
  {
    "key": "S111",
    "id": "ascending-auction",
    "label": "Ascending Auction",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "An English ascending auction raises bids until one bidder remains willing to make the winning bid.",
    "motionThesis": "Three bidders raise paddles at successively higher prices, drop out beyond their reservations and leave one bidder to receive the lot after the hammer falls.",
    "distinction": "Reservations are 4,7,10 and public bids are 2,4,6,8; the winner pays the final bid 8, not automatically their value 10 or the runner-up value 7.",
    "references": [
      "https://www.nobelprize.org/uploads/2020/09/popular-economicsciencesprize2020.pdf"
    ],
    "aliases": [],
    "facets": [
      "English-auction",
      "reservation-value",
      "winning-bid"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:05:00Z"
  },
  {
    "key": "S112",
    "id": "public-goods-free-riding",
    "label": "Public Goods Free Riding",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "A free rider enjoys a nonexcludable benefit without contributing to its provision.",
    "motionThesis": "Three households contribute to a shared streetlamp while a fourth retains its token but receives the same light; a second round with fewer contributions provides less light.",
    "distinction": "The nonrival light field is distinct from the funding tokens; the paired rounds illustrate a provision incentive rather than asserting that every person defects.",
    "references": [
      "https://openstax.org/books/principles-economics-2e/pages/13-3-public-goods"
    ],
    "aliases": [],
    "facets": [
      "nonexcludability",
      "nonrivalry",
      "collective-provision"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:06:00Z"
  },
  {
    "key": "S113",
    "id": "common-pool-governance",
    "label": "Common-Pool Governance",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "Users can govern a subtractable shared resource through collectively maintained allocation rules and monitoring.",
    "motionThesis": "An upstream diversion first starves later plots, then a visible turn token rotates among four users while only its holder’s gate admits the next water allocation.",
    "distinction": "The irrigation example depicts one local rotation rule with finite allocations and peer visibility; it does not equate common property with unmanaged access or claim universal success.",
    "references": [
      "https://dlc.dlib.indiana.edu/dlc/bitstreams/7c5f07a5-8204-49ee-955c-1b8d975df21a/download"
    ],
    "aliases": [],
    "facets": [
      "common-pool-resource",
      "irrigation-turns",
      "self-governance"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:07:00Z"
  },
  {
    "key": "S114",
    "id": "schelling-segregation-model",
    "label": "Schelling Segregation Model",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "Schelling’s model shows how local neighborhood preferences can produce aggregate residential clustering.",
    "motionThesis": "One dissatisfied household at a time moves into an acceptable vacancy, retaining all identities and leaving its former cell empty as clusters emerge.",
    "distinction": "A 6 by 6 toy grid contains fourteen households of each type and eight vacancies; dissatisfaction means less than 40 percent same-type occupied Moore neighbors, with asynchronous relocation. Deterministic fixture seed 1 performs 9 legal moves; it is not a full account of real segregation.",
    "references": [
      "https://ccl.northwestern.edu/cm/models/segregation/info.html"
    ],
    "aliases": [],
    "facets": [
      "agent-based-model",
      "neighborhood-preference",
      "emergent-clustering"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:08:00Z"
  },
  {
    "key": "S115",
    "id": "bullwhip-effect",
    "label": "Bullwhip Effect",
    "section": "mind-society",
    "category": "economics-collective",
    "definition": "The bullwhip effect is amplification of order variability upstream along a supply chain.",
    "motionThesis": "A small retail demand pulse produces progressively larger delayed order-ticket bursts through a four-stage chain, followed by under-ordering.",
    "distinction": "The disclosed fixture uses O_t=max(0,2d_t-d_(t-1)) with one-period message delay at each stage; these are requests, not conserved goods or a fitted inventory model.",
    "references": [
      "https://www.mit.edu/~jsterman/Order_stability.html"
    ],
    "aliases": [],
    "facets": [
      "supply-chain",
      "order-amplification",
      "information-delay"
    ],
    "cycleSeconds": 16,
    "added": "2026-09-08T23:09:00Z"
  }
].flatMap(({section,category,...subject}) => expansionEntries(section,category,[subject]));
