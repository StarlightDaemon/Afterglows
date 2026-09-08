import { expansionEntries } from "./expansion-entry.js";

const added = "2026-09-07T09:15:00Z";
export const CONCEPTS = expansionEntries("data-science", "optimization", [
  {
    id: "gradient-descent", label: "Gradient Descent", added,
    definition: "Gradient descent minimizes a differentiable function by taking steps opposite its local gradient.",
    motionThesis: "Steps on elongated quadratic contours alternate across the steep direction while converging toward the minimum.",
    distinction: "Computed optimization steps on an objective surface, rather than physical rolling or pendulum motion.",
    facets: ["optimization", "numerical methods"], cycleSeconds: 8,
    references: ["https://web.stanford.edu/~boyd/cvxbook/"],
  },
  {
    id: "projected-gradient-descent", label: "Projected Gradient Descent", added,
    definition: "Projected gradient descent combines gradient steps with projection back onto a feasible constraint set.",
    motionThesis: "Trial steps approach an unconstrained minimum outside a feasible rectangle, then projections return them to the constrained optimum.",
    distinction: "Separates unconstrained trial motion from feasibility correction.",
    facets: ["optimization", "constraints", "numerical methods"], cycleSeconds: 9,
    references: ["https://web.stanford.edu/~boyd/cvxbook/"],
  },
  {
    id: "simplex-linear-programming", label: "Simplex Linear Programming", added,
    definition: "The simplex method improves a linear objective by moving between vertices of the feasible polytope.",
    motionThesis: "A candidate pivots along polygon edges as parallel objective lines advance toward the best feasible vertex.",
    distinction: "Vertex pivots and supporting objective lines, rather than continuous gradient paths.",
    facets: ["optimization", "linear programming", "constraints"], cycleSeconds: 8,
    references: ["https://docs.scipy.org/doc/scipy/reference/optimize.linprog-simplex.html"],
  },
  {
    id: "simulated-annealing", label: "Simulated Annealing", added,
    definition: "Simulated annealing searches by progressively reducing the probability of accepting worse candidate solutions.",
    motionThesis: "A six-city tour accepts an early longer detour, then improves and rejects a later longer proposal as temperature falls.",
    distinction: "Discrete route rearrangements and a cooling acceptance schedule, rather than Metropolis density sampling.",
    facets: ["optimization", "combinatorial search", "traveling salesperson"], cycleSeconds: 10,
    references: ["https://www.cs.cmu.edu/~aarti/Class/10701_Spring14/slides/MCMC.pdf"],
  },
  {
    id: "pareto-frontier", label: "Pareto Frontier", added,
    definition: "A Pareto frontier contains feasible solutions for which improving one objective requires worsening another.",
    motionThesis: "Dominance rectangles dim inferior candidate points and reveal the remaining nondominated samples.",
    distinction: "Retains multiple incomparable optima instead of selecting a single best scalar objective.",
    facets: ["optimization", "multiobjective", "tradeoffs"], cycleSeconds: 8,
    references: ["https://web.stanford.edu/~boyd/cvxbook/"],
  },
]);
