import { expansionEntries } from "./expansion-entry.js";

export const CONCEPTS = expansionEntries("engineering-technology", "control-robotics", [
  {
    "id": "inverted-pendulum-stabilization",
    "label": "Inverted Pendulum Stabilization",
    "aliases": [
      "cart-pole stabilization",
      "upright pendulum balancing"
    ],
    "definition": "Horizontal cart feedback balances a freely pivoting pole near its unstable upright equilibrium.",
    "motionThesis": "A leaning pole is caught by accelerating its cart beneath it, then braking and smaller corrections restore balance.",
    "distinction": "An actively translated pivot stabilizes an unpowered upright joint; a precomputed nonlinear cart-pole response illustrates feedback rather than passive pendulum motion.",
    "cycleSeconds": 12,
    "references": [
      "https://underactuated.mit.edu/acrobot.html"
    ],
    "facets": [
      "feedback-control"
    ],
    "added": "2026-09-07T15:42:57Z"
  },
  {
    "id": "ball-and-beam-control",
    "label": "Ball-and-Beam Control",
    "aliases": [
      "ball-and-beam stabilization",
      "servo beam balancing"
    ],
    "definition": "Feedback tilts a beam so gravity accelerates and brakes a rolling ball toward a commanded position.",
    "motionThesis": "A ball rolls toward a central target, counter-tilt brakes it, and progressively smaller corrections settle it at the beam center.",
    "distinction": "Ball motion and beam slope satisfy a solid-sphere rolling approximation with small beam-motion effects neglected; the ball is not attached to the rocking beam.",
    "cycleSeconds": 10,
    "references": [
      "https://www.quanser.com/blog/engineering-education/project-based-learning-with-qube-servo-2/",
      "https://www.quanser.com/products/ball-and-beam/"
    ],
    "facets": [
      "feedback-control"
    ],
    "added": "2026-09-07T15:42:57Z"
  },
{
  "id": "pid-position-tracking",
  "label": "PID Position Tracking",
  "aliases": [
    "proportional-integral-derivative servo",
    "PID position control"
  ],
  "definition": "Proportional error, accumulated error, and velocity damping combine to drive an actuator toward a commanded position.",
  "motionThesis": "A carriage follows a target step as proportional drive, integral memory, and derivative braking change with its error and motion.",
  "distinction": "An unsaturated tracking example uses derivative on measurement and an integral preload that balances a constant load; saturation handling is demonstrated separately.",
  "cycleSeconds": 12,
  "references": [
    "https://www.mathworks.com/help/simulink/slref/pidcontroller.html",
    "https://wonjongkim.tamu.edu/MEEN364/PIDTutorial.pdf"
  ],
  "facets": [
    "feedback-control"
  ],
  "added": "2026-09-07T15:45:12Z"
},
{
  "id": "integrator-anti-windup",
  "label": "Integrator Anti-Windup",
  "aliases": [
    "conditional integration",
    "integrator clamping"
  ],
  "definition": "Conditional integration stops error memory from growing when a saturated actuator cannot provide the requested effort.",
  "motionThesis": "Two identical saturated loops accumulate different integral memory, so the clamped loop recovers sooner when an initially unreachable target returns within reach.",
  "distinction": "A paired comparison of conditional integration with ordinary integral action, not back-calculation, actuator hard-stop geometry, or ordinary unsaturated PID tuning.",
  "cycleSeconds": 12,
  "references": [
    "https://www.mathworks.com/help/simulink/slref/anti-windup-control-using-a-pid-controller.html",
    "https://www.mathworks.com/help/simulink/slref/pidcontroller.html"
  ],
  "facets": [
    "feedback-control"
  ],
  "added": "2026-09-07T15:45:12Z"
},
{
  "id": "model-predictive-control",
  "label": "Model Predictive Control",
  "aliases": [
    "MPC",
    "receding-horizon control"
  ],
  "definition": "A controller repeatedly optimizes a finite sequence of constrained future actions, executes the first action, and replans from the resulting state.",
  "motionThesis": "Short predicted paths extend around an obstacle; only the first segment becomes actual motion before a fresh horizon starts from the robot’s new position.",
  "distinction": "A precomputed constrained three-step discrete optimization, with unexecuted predictions discarded at each update, rather than a fixed global path or potential-field steering.",
  "cycleSeconds": 12,
  "references": [
    "https://www.mathworks.com/help/mpc/gs/what-is-mpc.html"
  ],
  "facets": [
    "feedback-control",
    "motion-planning"
  ],
  "added": "2026-09-07T15:47:30Z"
},
{
  "id": "differential-drive",
  "label": "Differential Drive",
  "aliases": [
    "differential steering",
    "two-wheel differential drive"
  ],
  "definition": "Independent coaxial wheel speeds combine into forward translation and rotation of a mobile robot.",
  "motionThesis": "Equal wheel speeds move a chassis straight, unequal speeds bend its path, and opposing speeds turn it in place.",
  "distinction": "A two-wheel no-slip kinematic example with no direct sideways translation; tread cues and signed speed arrows are synchronized with the chassis path.",
  "cycleSeconds": 10,
  "references": [
    "https://www.roboticsbook.org/S52_diffdrive_actions.html"
  ],
  "facets": [
    "mobile-robotics"
  ],
  "added": "2026-09-07T15:49:57Z"
},
{
  "id": "inverse-kinematics",
  "label": "Inverse Kinematics",
  "aliases": [
    "IK",
    "numerical inverse kinematics"
  ],
  "definition": "Inverse kinematics finds joint angles that place a robot’s end effector at a desired target.",
  "motionThesis": "Successive rigid-arm configurations shorten the tip-to-target error, and a second fixed target triggers another numerical solve.",
  "distinction": "A two-link planar Newton solve on one elbow branch, with joint-angle interpolation preserving link lengths rather than moving targets or morphing links.",
  "cycleSeconds": 12,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/6-2-numerical-inverse-kinematics-part-1-of-2/"
  ],
  "facets": [
    "robot-kinematics"
  ],
  "added": "2026-09-07T15:49:57Z"
},
{
  "id": "kinematic-singularity",
  "label": "Kinematic Singularity",
  "aliases": [
    "Jacobian rank loss",
    "robot singular configuration"
  ],
  "definition": "At a singular configuration, a robot’s Jacobian loses rank and an instantaneous end-effector motion direction becomes unavailable.",
  "motionThesis": "A bent arm straightens as its velocity ellipse collapses to a vertical line, leaving vertical tip velocity available while horizontal velocity is blocked.",
  "distinction": "An instantaneous local velocity limitation, not permanent inability to retract through subsequent finite bending, target reaching, or redundant self-motion.",
  "cycleSeconds": 10,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/5-3-singularities/"
  ],
  "facets": [
    "robot-kinematics"
  ],
  "added": "2026-09-07T15:58:12Z"
},
{
  "id": "redundant-manipulator-null-motion",
  "label": "Redundant Manipulator Null Motion",
  "aliases": [
    "kinematic redundancy",
    "null-space self-motion"
  ],
  "definition": "A redundant manipulator changes its internal joint configuration while preserving the specified end-effector task coordinates.",
  "motionThesis": "Three rigid links reconfigure continuously while their round endpoint remains at a fixed target crosshair.",
  "distinction": "The task constrains two-dimensional tip position only; terminal orientation may change, unlike a fully constrained gripper pose.",
  "cycleSeconds": 10,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/5-3-singularities/"
  ],
  "facets": [
    "robot-kinematics"
  ],
  "added": "2026-09-07T15:58:12Z"
},
{
  "id": "compliant-impedance-control",
  "label": "Compliant Impedance Control",
  "aliases": [
    "impedance control",
    "virtual spring-damper compliance"
  ],
  "definition": "Feedback shapes a robot’s force–displacement response so it yields predictably to contact and returns with damping.",
  "motionThesis": "An external pusher deflects a robot tip from its fixed desired position, stretching a virtual spring before the tip settles back after release.",
  "distinction": "Controlled yielding under external force, using an illustrative critically damped impedance response rather than ordinary position tracking or orthogonal hybrid motion-force control.",
  "cycleSeconds": 10,
  "references": [
    "https://www.mathworks.com/company/technical-articles/enhancing-robot-precision-and-safety-with-impedance-control.html"
  ],
  "facets": [
    "robot-control",
    "compliance"
  ],
  "added": "2026-09-07T16:00:48Z"
},
{
  "id": "slam-loop-closure",
  "label": "SLAM Loop Closure",
  "aliases": [
    "pose-graph loop closure",
    "SLAM drift correction"
  ],
  "definition": "Recognizing a previously visited place adds a nonconsecutive pose constraint that corrects accumulated map and trajectory estimation drift.",
  "motionThesis": "An estimated route fails to close, then a matched place adds a closure edge and past pose estimates adjust together around a fixed anchor.",
  "distinction": "A simplified translation-only pose-graph optimization adjusts historical estimates, not physical robot positions, background buildings, or future planned routes.",
  "cycleSeconds": 12,
  "references": [
    "https://www.roboticsbook.org/S64_driving_perception.html"
  ],
  "facets": [
    "robot-localization",
    "estimation"
  ],
  "added": "2026-09-07T16:00:48Z"
},
{
  "id": "configuration-space-obstacles",
  "label": "Configuration-Space Obstacles",
  "aliases": [
    "C-space obstacles",
    "robot-footprint obstacle inflation"
  ],
  "definition": "Collision-producing robot configurations form forbidden regions; a translating circular robot can be replaced by its center point when obstacles expand by its radius.",
  "motionThesis": "An upper disc skirts a physical obstacle while its lower center-point counterpart follows the corresponding route around a radius-expanded obstacle.",
  "distinction": "A collision-equivalent geometry transformation, not another path planner; both obstacles and workspace boundaries account for the robot’s footprint.",
  "cycleSeconds": 10,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/10-2-c-space-obstacles/"
  ],
  "facets": [
    "motion-planning",
    "configuration-space"
  ],
  "added": "2026-09-07T16:02:52Z"
},
{
  "id": "artificial-potential-field-navigation",
  "label": "Artificial Potential Field Navigation",
  "aliases": [
    "virtual potential fields",
    "reactive potential-field planning"
  ],
  "definition": "Attractive goal and repulsive obstacle gradients combine into a local steering command that can stall at a nonglobal minimum.",
  "motionThesis": "A robot enters a U-shaped obstacle toward a goal beyond its back wall, then stops when opposing attraction and repulsion balance.",
  "distinction": "A local steering failure at a U-shaped trap, not a feasible global path or a finite-horizon predictive optimization; numerical units and field strengths are illustrative.",
  "cycleSeconds": 12,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/10-6-virtual-potential-fields/"
  ],
  "facets": [
    "motion-planning"
  ],
  "added": "2026-09-07T16:02:52Z"
},
{
  "id": "hybrid-motion-force-control",
  "label": "Hybrid Motion-Force Control",
  "aliases": [
    "hybrid force-position control",
    "orthogonal motion and force control"
  ],
  "definition": "A robot controls motion in unconstrained directions while controlling force against contact constraints.",
  "motionThesis": "An eraser slides tangentially along a rigid surface while its normal contact force stays constant, including through sliding-direction reversal.",
  "distinction": "Independent tangential velocity and normal force act in orthogonal directions; the pad maintains exact surface contact rather than penetrating the plane or yielding under an external pusher.",
  "cycleSeconds": 10,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/11-6-hybrid-motion-force-control/"
  ],
  "facets": [
    "robot-control",
    "contact-manipulation"
  ],
  "added": "2026-09-07T16:04:22Z"
},
{
  "id": "force-closure-grasp",
  "label": "Force-Closure Grasp",
  "aliases": [
    "frictional force closure",
    "planar force-closure pinch"
  ],
  "definition": "A planar grasp has force closure when admissible frictional contact wrenches can oppose every planar disturbance direction, assuming sufficient actuation.",
  "motionThesis": "Two fingertips pinch a rectangle while friction-cone force vectors resist a downward load and then a turning moment without moving the object.",
  "distinction": "Planar frictional wrench capability, not unlimited load capacity, geometric enclosure alone, or full three-dimensional force closure from two hard point contacts.",
  "cycleSeconds": 12,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/12-2-3-force-closure/"
  ],
  "facets": [
    "contact-manipulation"
  ],
  "added": "2026-09-07T16:04:22Z"
},
{
  "id": "omnidirectional-mecanum-drive",
  "label": "Omnidirectional Mecanum Drive",
  "aliases": [
    "mecanum-wheel drive",
    "mecanum strafing"
  ],
  "definition": "A mobile drive uses four independently driven wheels with angled passive rollers to translate in any planar direction and rotate.",
  "motionThesis": "Opposite diagonal wheel pairs reverse their rotation to slide a fixed-heading chassis sideways, then equal wheel speeds drive it forward around a closed path.",
  "distinction": "Alternating roller handedness permits direct strafing unavailable to conventional differential drive; wheel travel follows a zero-yaw kinematic mapping, with detailed traction and roller dynamics schematic.",
  "cycleSeconds": 12,
  "references": [
    "https://modernrobotics.northwestern.edu/nu-gm-book-resource/13-2-omnidirectional-wheeled-mobile-robots-part-1-of-2/"
  ],
  "facets": [
    "mobile-robotics"
  ],
  "added": "2026-09-07T16:17:13Z"
},
{
  "id": "tendon-driven-soft-gripper",
  "label": "Tendon-Driven Soft Gripper",
  "aliases": [
    "cable-actuated soft gripper",
    "tendon-driven compliant finger"
  ],
  "definition": "Offset tendons bend compliant fingers inward to grasp delicate objects.",
  "motionThesis": "A capstan reels inner tendons while continuously curved fingers close against a supported berry, hold, and elastically reopen.",
  "distinction": "An illustrative two-finger constant-curvature cross-section links cable shortening to bending; it does not reproduce the referenced three-finger prototype or its full controller.",
  "cycleSeconds": 10,
  "references": [
    "https://patents.google.com/patent/US12269158B2/en",
    "https://arxiv.org/abs/2103.04270"
  ],
  "facets": [
    "soft-robotics",
    "contact-manipulation"
  ],
  "added": "2026-09-07T16:19:47Z"
}
,
{
  "id": "backlash-deadband",
  "label": "Backlash Deadband",
  "aliases": [
    "mechanical play",
    "reversal lost motion"
  ],
  "definition": "Mechanical clearance lets an input reverse through a finite interval before its output moves.",
  "motionThesis": "A driving peg crosses a carriage slot after each reversal while the output pauses, then catches the opposite shoulder and drives it one to one.",
  "distinction": "A geometric play operator with memory and a twelve-unit reversal gap; the output is neither an instantaneous dead zone nor a delayed copy of the input.",
  "cycleSeconds": 8,
  "references": [
    "https://www.mathworks.com/help/simulink/slref/backlash.html"
  ],
  "facets": [
    "mechanical-transmission",
    "nonlinear-systems"
  ],
  "added": "2026-09-07T16:25:46Z"
}
]);
