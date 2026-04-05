const flashcards = [
  {
    category: "History",
    difficulty: "Starter Ramp",
    question: "What year did California become the 31st state of the United States?",
    hint: "It happened during the Gold Rush era.",
    lesson: "California became a state on September 9, 1850, after fast population growth pushed it quickly into the Union.",
    choices: ["1845", "1850", "1861", "1876"],
    answer: "1850",
    learnMore: "The Gold Rush brought in so many new residents that California reached statehood unusually fast.",
    recovery: {
      question: "California joined the United States as which numbered state?",
      hint: "It came after Wisconsin.",
      lesson: "California entered the Union as the 31st state in 1850.",
      choices: ["29th", "30th", "31st", "32nd"],
      answer: "31st",
      learnMore: "Remembering both the year and the state number helps lock in California statehood."
    }
  },
  {
    category: "Geography",
    difficulty: "Starter Ramp",
    question: "What is the capital city of California?",
    hint: "It is in the Central Valley, not on the coast.",
    lesson: "Sacramento is California's capital and became the permanent seat of government in the 1850s.",
    choices: ["San Jose", "Sacramento", "Fresno", "Los Angeles"],
    answer: "Sacramento",
    learnMore: "Many people guess Los Angeles or San Francisco, but state government is centered in Sacramento.",
    recovery: {
      question: "Which river city serves as California's state capital?",
      hint: "It shares its name with a major Northern California river.",
      lesson: "Sacramento sits on the Sacramento River and serves as California's capital.",
      choices: ["Bakersfield", "Stockton", "Sacramento", "Oakland"],
      answer: "Sacramento",
      learnMore: "The capital is both a government center and part of California's inland river system."
    }
  },
  {
    category: "Politics",
    difficulty: "Starter Ramp",
    question: "How long is one term for the governor of California?",
    hint: "It is longer than a U.S. House term.",
    lesson: "California governors serve four-year terms and may serve up to two terms total under current rules.",
    choices: ["2 years", "3 years", "4 years", "6 years"],
    answer: "4 years",
    learnMore: "That longer term gives the governor more time to shape statewide policy and the state budget.",
    recovery: {
      question: "How many years would a California governor serve after winning one full term?",
      hint: "It matches a U.S. presidential term.",
      lesson: "A single full term for California governor lasts four years.",
      choices: ["2", "4", "5", "8"],
      answer: "4",
      learnMore: "California's governor and the U.S. president both serve four-year terms."
    }
  },
  {
    category: "Geography",
    difficulty: "Kickflip Gap",
    question: "Which mountain range runs along eastern California and includes Mount Whitney?",
    hint: "It is famous for snowy peaks and national parks.",
    lesson: "The Sierra Nevada stretches along eastern California and includes Mount Whitney, the highest point in the contiguous United States.",
    choices: ["Coast Ranges", "Cascade Range", "Sierra Nevada", "Transverse Ranges"],
    answer: "Sierra Nevada",
    learnMore: "The Sierra Nevada also helps supply California with water through its snowpack.",
    recovery: {
      question: "Mount Whitney is part of which California mountain range?",
      hint: "It is not the coastal chain.",
      lesson: "Mount Whitney is in the Sierra Nevada.",
      choices: ["Sierra Nevada", "Coast Ranges", "Peninsular Ranges", "Klamath Mountains"],
      answer: "Sierra Nevada",
      learnMore: "Linking famous landmarks to their regions makes geography easier to remember."
    }
  },
  {
    category: "History",
    difficulty: "Kickflip Gap",
    question: "What discovery at Sutter's Mill in 1848 changed California forever?",
    hint: "It triggered a rush from around the world.",
    lesson: "Gold was discovered at Sutter's Mill in 1848, starting the California Gold Rush.",
    choices: ["Oil", "Silver", "Gold", "Copper"],
    answer: "Gold",
    learnMore: "The Gold Rush transformed California's population, economy, and path to statehood.",
    recovery: {
      question: "What major event began after the 1848 Sutter's Mill discovery?",
      hint: "Thousands rushed west because of it.",
      lesson: "The discovery triggered the California Gold Rush.",
      choices: ["The Dust Bowl", "The Gold Rush", "The Bear Flag Revolt", "The Tech Boom"],
      answer: "The Gold Rush",
      learnMore: "The metal and the event are closely connected facts worth studying together."
    }
  },
  {
    category: "Politics",
    difficulty: "Kickflip Gap",
    question: "What is the name of the process that lets California voters place proposed laws directly on the ballot?",
    hint: "It is one of the state's direct democracy tools.",
    lesson: "The initiative process allows Californians to gather signatures and place certain measures on the ballot.",
    choices: ["Impeachment", "Initiative", "Filibuster", "Census"],
    answer: "Initiative",
    learnMore: "California is well known for its initiative, referendum, and recall system.",
    recovery: {
      question: "What direct-democracy tool lets California voters propose laws themselves?",
      hint: "It begins with the letter I.",
      lesson: "The initiative lets voters propose measures directly.",
      choices: ["Inquiry", "Initiative", "Indictment", "Intervention"],
      answer: "Initiative",
      learnMore: "California's ballot system gives voters unusual direct power."
    }
  },
  {
    category: "Geography",
    difficulty: "Rail Grind",
    question: "Which desert park in Southern California is known for twisted trees and huge boulders?",
    hint: "Its name comes from a distinctive desert plant.",
    lesson: "Joshua Tree National Park is known for desert landscapes, rock formations, and its namesake Joshua trees.",
    choices: ["Death Valley National Park", "Joshua Tree National Park", "Redwood National Park", "Channel Islands National Park"],
    answer: "Joshua Tree National Park",
    learnMore: "California's geography includes coast, forests, mountains, farmland, and desert.",
    recovery: {
      question: "Which California national park is named after a desert plant?",
      hint: "Climbers and desert campers know it well.",
      lesson: "Joshua Tree National Park takes its name from the Joshua tree.",
      choices: ["Yosemite National Park", "Joshua Tree National Park", "Lassen Volcanic National Park", "Pinnacles National Park"],
      answer: "Joshua Tree National Park",
      learnMore: "The park's name is one of the easiest ways to identify it."
    }
  },
  {
    category: "History",
    difficulty: "Rail Grind",
    question: "Before becoming part of the United States, California was controlled by which country from 1821 to 1848?",
    hint: "That country became independent from Spain in 1821.",
    lesson: "Mexico governed California from 1821 until 1848, between the Spanish and U.S. periods.",
    choices: ["Mexico", "France", "Britain", "Russia"],
    answer: "Mexico",
    learnMore: "California's place names and early ranch culture were strongly shaped during the Mexican era.",
    recovery: {
      question: "After Spanish rule and before U.S. rule, California belonged to which nation?",
      hint: "Its independence from Spain began in 1821.",
      lesson: "California was part of Mexico before becoming U.S. territory.",
      choices: ["Mexico", "Chile", "Peru", "Portugal"],
      answer: "Mexico",
      learnMore: "Thinking about the sequence Spain -> Mexico -> United States helps organize the timeline."
    }
  },
  {
    category: "Politics",
    difficulty: "Rail Grind",
    question: "How many members serve in the California State Senate?",
    hint: "It is half the size of the State Assembly.",
    lesson: "The California State Senate has 40 members, while the State Assembly has 80.",
    choices: ["20", "40", "60", "80"],
    answer: "40",
    learnMore: "Knowing the legislature's size helps explain how bills move through California government.",
    recovery: {
      question: "The California State Senate has half as many members as the 80-member Assembly. How many senators is that?",
      hint: "Take half of 80.",
      lesson: "Half of 80 is 40, which is the number of state senators.",
      choices: ["30", "40", "50", "60"],
      answer: "40",
      learnMore: "Connecting the two chambers makes the legislature easier to remember."
    }
  },
  {
    category: "Geography",
    difficulty: "Mega Ramp",
    question: "What is the lowest point in North America, located in eastern California?",
    hint: "It is found inside Death Valley National Park.",
    lesson: "Badwater Basin in Death Valley is the lowest point in North America, sitting below sea level.",
    choices: ["Salton Sea", "Lake Tahoe", "Badwater Basin", "Mono Lake"],
    answer: "Badwater Basin",
    learnMore: "California contains both Mount Whitney and Badwater Basin, showing its extreme elevation range.",
    recovery: {
      question: "What is the name of Death Valley's below-sea-level basin famous for salt flats?",
      hint: "It starts with Badwater.",
      lesson: "Badwater Basin is the famous low point in Death Valley.",
      choices: ["Badwater Basin", "Owens Basin", "Mono Basin", "Central Basin"],
      answer: "Badwater Basin",
      learnMore: "This is one of California's signature geography facts."
    }
  },
  {
    category: "History",
    difficulty: "Mega Ramp",
    question: "Which 1769 Spanish mission was the first mission founded in Alta California?",
    hint: "It was established in San Diego.",
    lesson: "Mission San Diego de Alcala, founded in 1769, was the first of the Spanish missions in Alta California.",
    choices: ["Mission Santa Barbara", "Mission San Jose", "Mission San Diego de Alcala", "Mission Dolores"],
    answer: "Mission San Diego de Alcala",
    learnMore: "The mission system played a major role in California's colonial history, settlement, and Indigenous displacement.",
    recovery: {
      question: "What city was home to Alta California's first Spanish mission?",
      hint: "It is near the Mexican border.",
      lesson: "The first mission was founded in San Diego.",
      choices: ["Monterey", "San Diego", "Los Angeles", "Santa Barbara"],
      answer: "San Diego",
      learnMore: "Remembering the city can help you work back to the mission name."
    }
  },
  {
    category: "Politics",
    difficulty: "Mega Ramp",
    question: "Which California election tool allows voters to remove an elected official before the end of the term?",
    hint: "Voters must first gather signatures to trigger it.",
    lesson: "A recall election lets California voters try to remove an elected official before the normal end of the term.",
    choices: ["Primary", "Veto", "Recall", "Runoff"],
    answer: "Recall",
    learnMore: "California is one of the states most associated with recall elections because the process has been used in major statewide contests.",
    recovery: {
      question: "Which kind of election asks voters whether an official should be removed early from office?",
      hint: "It is not a primary.",
      lesson: "A recall election is the process for trying to remove an official before a term ends.",
      choices: ["Recall", "General", "Special", "Primary"],
      answer: "Recall",
      learnMore: "This is one of California's best-known direct democracy tools."
    }
  }
];

const state = {
  currentIndex: 0,
  score: 0,
  correct: 0,
  answered: false,
  revealed: false,
  studyMode: true,
  recoveryMode: false,
  recoveryCard: null,
  obstacleMode: false,
  obstacleReady: false
};

const scoreEl = document.querySelector("#score");
const roundEl = document.querySelector("#round");
const categoryEl = document.querySelector("#category");
const difficultyBadgeEl = document.querySelector("#difficultyBadge");
const questionEl = document.querySelector("#question");
const hintEl = document.querySelector("#hint");
const lessonEl = document.querySelector("#lesson");
const answersEl = document.querySelector("#answers");
const flashcardEl = document.querySelector("#flashcard");
const flipButtonEl = document.querySelector("#flipButton");
const feedbackPanelEl = document.querySelector("#feedbackPanel");
const feedbackTitleEl = document.querySelector("#feedbackTitle");
const feedbackTextEl = document.querySelector("#feedbackText");
const nextButtonEl = document.querySelector("#nextButton");
const arenaCardEl = document.querySelector(".arena-card");
const restartTopButtonEl = document.querySelector("#restartTopButton");
const checkpointStripEl = document.querySelector("#checkpointStrip");
const studyPanelEl = document.querySelector("#studyPanel");
const studyGridEl = document.querySelector("#studyGrid");
const startRunButtonEl = document.querySelector("#startRunButton");
const obstaclePanelEl = document.querySelector("#obstaclePanel");
const obstacleTitleEl = document.querySelector("#obstacleTitle");
const obstacleStatusEl = document.querySelector("#obstacleStatus");
const courseViewportEl = document.querySelector("#courseViewport");
const courseLaneEl = document.querySelector("#courseLane");
const courseFinishEl = document.querySelector("#courseFinish");
const courseObjectsEl = document.querySelector("#courseObjects");
const playerEl = document.querySelector("#player");

const courseState = {
  width: 760,
  height: 280,
  moveSpeed: 4.8,
  keys: new Set(),
  bars: [],
  wreckingBalls: [],
  animationFrame: null,
  currentLayout: null,
  player: {
    x: 28,
    y: 150,
    width: 26,
    depth: 26
  }
};

const DEFAULT_COURSE_WIDTH = 720;
const DEFAULT_COURSE_HEIGHT = 220;

function buildCheckpoints() {
  checkpointStripEl.innerHTML = "";

  flashcards.forEach((card, index) => {
    const checkpoint = document.createElement("div");
    checkpoint.className = "checkpoint";

    if (index < state.currentIndex) {
      checkpoint.classList.add("cleared");
    } else if (index === state.currentIndex) {
      checkpoint.classList.add("active");
    }

    checkpoint.innerHTML = `
      <span class="checkpoint-label">CP ${index + 1}</span>
      <div class="flag-pole"></div>
      <div class="flag"></div>
      <div class="checkpoint-topic">${card.category}</div>
    `;

    checkpointStripEl.appendChild(checkpoint);
  });
}

function renderStudyGuide() {
  studyGridEl.innerHTML = "";

  flashcards.forEach((card, index) => {
    const article = document.createElement("article");
    article.className = "study-card";
    article.innerHTML = `
      <p class="checkpoint-label">Checkpoint ${index + 1}</p>
      <h3>${card.question}</h3>
      <p class="study-meta">${card.category} · ${card.difficulty}</p>
      <p>${card.lesson}</p>
    `;
    studyGridEl.appendChild(article);
  });
}

function createRecoveryCard(sourceCard) {
  const differentCategoryCards = flashcards.filter((card) => card.category !== sourceCard.category);
  const fallbackCard = differentCategoryCards.length > 0
    ? differentCategoryCards[Math.floor(Math.random() * differentCategoryCards.length)]
    : sourceCard;
  const recoverySource = fallbackCard.recovery || {
    question: fallbackCard.question,
    hint: fallbackCard.hint,
    lesson: fallbackCard.lesson,
    choices: [...fallbackCard.choices],
    answer: fallbackCard.answer,
    learnMore: fallbackCard.learnMore
  };

  return {
    category: `${fallbackCard.category} Recovery`,
    difficulty: "Second Chance",
    question: recoverySource.question,
    hint: recoverySource.hint,
    lesson: recoverySource.lesson,
    choices: [...recoverySource.choices],
    answer: recoverySource.answer,
    learnMore: recoverySource.learnMore
  };
}

function createObstacleLayout(index) {
  const clampedIndex = Math.max(0, Math.min(index, flashcards.length - 1));
  const progress = clampedIndex / Math.max(1, flashcards.length - 1);
  const finishWidth = 58;
  const finishInset = 24;
  const effectiveWidth = Math.max(courseState.width || 0, DEFAULT_COURSE_WIDTH);
  const finishStartX = effectiveWidth - finishInset - finishWidth;
  const finishBuffer = 54;
  const barWidth = Math.max(20, 46 - clampedIndex * 2);
  const mountWidth = 34;
  const maxBarX = finishStartX - finishBuffer - barWidth;
  const maxAnchorX = finishStartX - finishBuffer - mountWidth / 2;
  const firstSwingSpeed = 0.0105 + progress * 0.0045;
  const secondSwingSpeed = 0.011 + progress * 0.005;
  const thirdSwingSpeed = 0.0115 + progress * 0.0055;
  const courseRecipes = [
    {
      bars: [
        { x: 250, y: 64, h: 92 },
        { x: 470, y: 176, h: 72 }
      ],
      anchors: []
    },
    {
      bars: [
        { x: 132, y: 154, h: 60 },
        { x: 316, y: 30, h: 66 },
        { x: 500, y: 170, h: 68 }
      ],
      anchors: [{ x: 404, len: 72, amp: 20, speed: firstSwingSpeed, phase: 0.32 }]
    },
    {
      bars: [
        { x: 154, y: 88, h: 72 },
        { x: 310, y: 194, h: 70 },
        { x: 480, y: 34, h: 74 }
      ],
      anchors: [{ x: 404, len: 80, amp: 26, speed: firstSwingSpeed, phase: 0.45 }]
    },
    {
      bars: [
        { x: 194, y: 120, h: 76 },
        { x: 350, y: 28, h: 80 },
        { x: 520, y: 160, h: 78 }
      ],
      anchors: [
        { x: 268, len: 74, amp: 22, speed: secondSwingSpeed, phase: 0.7 },
        { x: 470, len: 82, amp: 20, speed: firstSwingSpeed, phase: 0.34 }
      ]
    },
    {
      bars: [
        { x: 144, y: 194, h: 82 },
        { x: 364, y: 82, h: 84 },
        { x: 530, y: 28, h: 82 }
      ],
      anchors: [
        { x: 232, len: 76, amp: 24, speed: secondSwingSpeed, phase: 0.82 },
        { x: 420, len: 84, amp: 22, speed: firstSwingSpeed, phase: 0.52 }
      ]
    },
    {
      bars: [
        { x: 176, y: 64, h: 88 },
        { x: 320, y: 182, h: 86 },
        { x: 474, y: 118, h: 92 },
        { x: 260, y: 22, h: 52 }
      ],
      anchors: [
        { x: 388, len: 84, amp: 26, speed: secondSwingSpeed, phase: 0.95 },
        { x: 564, len: 74, amp: 20, speed: firstSwingSpeed, phase: 0.41 }
      ]
    },
    {
      bars: [
        { x: 146, y: 112, h: 94 },
        { x: 332, y: 30, h: 90 },
        { x: 548, y: 170, h: 92 },
        { x: 262, y: 204, h: 50 }
      ],
      anchors: [
        { x: 248, len: 78, amp: 24, speed: secondSwingSpeed, phase: 1.02 },
        { x: 454, len: 88, amp: 24, speed: firstSwingSpeed, phase: 0.6 }
      ]
    },
    {
      bars: [
        { x: 200, y: 30, h: 96 },
        { x: 352, y: 154, h: 96 },
        { x: 536, y: 92, h: 96 },
        { x: 286, y: 92, h: 58 }
      ],
      anchors: [
        { x: 304, len: 80, amp: 26, speed: secondSwingSpeed, phase: 1.16 },
        { x: 574, len: 86, amp: 22, speed: secondSwingSpeed, phase: 0.74 }
      ]
    },
    {
      bars: [
        { x: 154, y: 76, h: 102 },
        { x: 332, y: 194, h: 98 },
        { x: 496, y: 24, h: 100 },
        { x: 404, y: 118, h: 62 }
      ],
      anchors: [
        { x: 238, len: 82, amp: 24, speed: thirdSwingSpeed, phase: 0.86 },
        { x: 420, len: 90, amp: 24, speed: secondSwingSpeed, phase: 1.08 },
        { x: 578, len: 76, amp: 18, speed: firstSwingSpeed, phase: 0.62 }
      ]
    },
    {
      bars: [
        { x: 188, y: 186, h: 106 },
        { x: 340, y: 58, h: 104 },
        { x: 514, y: 134, h: 102 },
        { x: 270, y: 14, h: 60 },
        { x: 438, y: 20, h: 56 }
      ],
      anchors: [
        { x: 286, len: 84, amp: 26, speed: thirdSwingSpeed, phase: 1.22 },
        { x: 478, len: 92, amp: 24, speed: secondSwingSpeed, phase: 0.9 },
        { x: 596, len: 80, amp: 20, speed: secondSwingSpeed, phase: 0.68 }
      ]
    },
    {
      bars: [
        { x: 150, y: 128, h: 108 },
        { x: 302, y: 20, h: 108 },
        { x: 468, y: 184, h: 108 },
        { x: 390, y: 92, h: 64 },
        { x: 556, y: 52, h: 68 }
      ],
      anchors: [
        { x: 222, len: 88, amp: 28, speed: thirdSwingSpeed, phase: 1.28 },
        { x: 426, len: 94, amp: 24, speed: secondSwingSpeed, phase: 0.98 },
        { x: 572, len: 86, amp: 22, speed: secondSwingSpeed, phase: 0.74 }
      ]
    },
    {
      bars: [
        { x: 184, y: 46, h: 112 },
        { x: 324, y: 192, h: 112 },
        { x: 470, y: 116, h: 110 },
        { x: 262, y: 138, h: 62 },
        { x: 548, y: 18, h: 74 }
      ],
      anchors: [
        { x: 246, len: 92, amp: 28, speed: thirdSwingSpeed, phase: 1.34 },
        { x: 408, len: 96, amp: 26, speed: thirdSwingSpeed, phase: 1.04 },
        { x: 590, len: 88, amp: 22, speed: secondSwingSpeed, phase: 0.8 }
      ]
    }
  ];
  const recipe = courseRecipes[clampedIndex];

  const layout = {
    bars: [],
    wreckingBalls: [],
    laneClass: "lane-straight",
    laneInset: clampedIndex >= 6
      ? Math.min(72, (clampedIndex - 5) * 12 - (clampedIndex >= 8 ? 8 : 0))
      : 0
  };

  if (clampedIndex >= 1) {
    recipe.bars.forEach((bar) => {
      layout.bars.push({
        x: Math.min(maxBarX, bar.x),
        y: bar.y,
        width: barWidth,
        height: bar.h + clampedIndex * 2,
        angle: 0
      });
    });
  }

  if (clampedIndex >= 4 && clampedIndex !== flashcards.length - 1) {
    recipe.anchors.forEach((anchor, idx) => {
      if (idx === 1) {
        return;
      }

      layout.wreckingBalls.push({
        anchorX: Math.min(maxAnchorX, anchor.x),
        anchorY: -10,
        length: anchor.len + clampedIndex,
        radius: 14 + Math.min(5, Math.floor((clampedIndex + idx) / 4)),
        amplitude: anchor.amp + 12,
        speed: clampedIndex === 8 ? anchor.speed * 0.75 : anchor.speed,
        phase: anchor.phase
      });
    });
  }

  return layout;
}

function positionPlayer() {
  playerEl.style.left = `${courseState.player.x}px`;
  playerEl.style.top = `${courseState.player.y}px`;
}

function syncCourseBounds() {
  const rect = courseLaneEl.getBoundingClientRect();
  courseState.width = Math.max(Math.round(rect.width), courseLaneEl.clientWidth || 0, DEFAULT_COURSE_WIDTH);
  courseState.height = Math.max(Math.round(rect.height), courseLaneEl.clientHeight || 0, DEFAULT_COURSE_HEIGHT);
}

function showObstacleStatus(message) {
  obstacleStatusEl.textContent = message;
}

function resetPlayerToCheckpoint(message) {
  syncCourseBounds();
  const bounds = getLaneVerticalBounds(28);
  courseState.player.x = bounds.left;
  courseState.player.y = Math.max(bounds.top, Math.min(bounds.bottom - courseState.player.depth, 150));
  positionPlayer();
  showObstacleStatus(message);
}

function renderObstacleObjects(layout) {
  courseObjectsEl.innerHTML = "";
  courseState.currentLayout = layout;
  courseLaneEl.classList.remove("lane-straight", "lane-curved");
  courseLaneEl.classList.add(layout.laneClass);
  courseState.bars = layout.bars.map((bar) => ({ ...bar }));
  courseState.wreckingBalls = layout.wreckingBalls.map((ball, id) => ({
    ...ball,
    id,
    offsetX: 0,
    offsetY: 0,
    mountWidth: 34,
    mountHeight: 18
  }));

  courseState.bars.forEach((bar) => {
    const barEl = document.createElement("div");
    barEl.className = "hazard-bar";
    barEl.style.left = `${bar.x}px`;
    barEl.style.top = `${bar.y}px`;
    barEl.style.width = `${bar.width}px`;
    barEl.style.height = `${bar.height}px`;
    barEl.style.transform = `rotate(${bar.angle || 0}deg)`;
    courseObjectsEl.appendChild(barEl);
  });

  courseState.wreckingBalls.forEach((ball) => {
    const rig = document.createElement("div");
    rig.className = "wrecking-rig";
    rig.style.left = `${ball.anchorX}px`;
    rig.style.top = `${ball.anchorY}px`;
    rig.innerHTML = `
      <div class="wrecking-mount"></div>
      <div class="wrecking-rope" style="height:${ball.length}px"></div>
      <div class="wrecking-ball"></div>
    `;
    courseObjectsEl.appendChild(rig);
  });
}

function intersectsRect(a, b) {
  return (
    a.x < b.x + b.width &&
    a.x + a.width > b.x &&
    a.y < b.y + b.height &&
    a.y + a.height > b.y
  );
}

function interpolateBoundary(x, points) {
  if (x <= points[0][0]) {
    return points[0][1];
  }

  for (let index = 1; index < points.length; index += 1) {
    const [x2, y2] = points[index];
    const [x1, y1] = points[index - 1];

    if (x <= x2) {
      const progress = (x - x1) / (x2 - x1);
      return y1 + (y2 - y1) * progress;
    }
  }

  return points[points.length - 1][1];
}

function getLaneVerticalBounds(playerX) {
  return {
    top: 12,
    bottom: courseState.height - 8,
    left: courseState.currentLayout?.laneInset || 0,
    right: courseState.width - (courseState.currentLayout?.laneInset || 0)
  };
}

function updateWreckingBalls(timestamp) {
  courseState.wreckingBalls.forEach((ball, index) => {
    const angle = Math.sin(timestamp * ball.speed + ball.phase) * ball.amplitude;
    ball.offsetX = Math.sin(angle * (Math.PI / 180)) * ball.length;
    ball.offsetY = Math.cos(angle * (Math.PI / 180)) * ball.length;

    const rig = courseObjectsEl.children[courseState.bars.length + index];
    if (rig) {
      rig.style.transform = `rotate(${angle}deg)`;
    }
  });
}

function playerHitBar() {
  const hitbox = {
    x: courseState.player.x,
    y: courseState.player.y,
    width: courseState.player.width,
    height: courseState.player.depth
  };

  return courseState.bars.some((bar) => intersectsRect(hitbox, bar));
}

function playerHitWreckingBall() {
  const centerX = courseState.player.x + courseState.player.width / 2;
  const centerY = courseState.player.y + courseState.player.depth / 2;

  return courseState.wreckingBalls.some((ball) => {
    const ballX = ball.anchorX + ball.offsetX;
    const ballY = ball.anchorY + ball.offsetY;
    const dx = centerX - ballX;
    const dy = centerY - ballY;
    return Math.sqrt(dx * dx + dy * dy) < ball.radius + 10;
  });
}

function playerHitWreckingMount() {
  const playerBox = {
    x: courseState.player.x,
    y: courseState.player.y,
    width: courseState.player.width,
    height: courseState.player.depth
  };

  return courseState.wreckingBalls.some((ball) => {
    const mountBox = {
      x: ball.anchorX - ball.mountWidth / 2,
      y: Math.max(0, ball.anchorY),
      width: ball.mountWidth,
      height: ball.mountHeight
    };

    return intersectsRect(playerBox, mountBox);
  });
}

function playerReachedFinish() {
  const finishRect = courseFinishEl.getBoundingClientRect();
  const laneRect = courseLaneEl.getBoundingClientRect();
  const finishLeft = finishRect.left - laneRect.left;
  const finishTop = finishRect.top - laneRect.top;
  const finishBox = {
    x: finishLeft,
    y: finishTop,
    width: finishRect.width,
    height: finishRect.height
  };
  const playerBox = {
    x: courseState.player.x,
    y: courseState.player.y,
    width: courseState.player.width,
    height: courseState.player.depth
  };

  return intersectsRect(playerBox, finishBox);
}

function stopObstacleCourse() {
  if (courseState.animationFrame) {
    cancelAnimationFrame(courseState.animationFrame);
    courseState.animationFrame = null;
  }
  courseState.keys.clear();
}

function completeObstacleCourse() {
  stopObstacleCourse();
  state.obstacleMode = false;
  state.obstacleReady = false;
  obstaclePanelEl.classList.add("hidden");
  feedbackPanelEl.classList.remove("hidden");
  feedbackTitleEl.textContent = "Obstacle cleared!";
  feedbackTextEl.textContent = "You made it through the hazard section. The next checkpoint question is unlocked.";
  nextButtonEl.textContent = state.currentIndex === flashcards.length - 1
    ? "Finish Obby"
    : "Next Checkpoint Question";
  nextButtonEl.disabled = false;
}

function runObstacleFrame(timestamp) {
  const { player, keys, width, height, moveSpeed } = courseState;

  if (keys.has("ArrowLeft")) {
    player.x -= moveSpeed;
  }
  if (keys.has("ArrowRight")) {
    player.x += moveSpeed;
  }
  if (keys.has("ArrowUp")) {
    player.y -= moveSpeed;
  }
  if (keys.has("ArrowDown")) {
    player.y += moveSpeed;
  }

  const bounds = getLaneVerticalBounds(player.x + player.width / 2);
  player.x = Math.max(bounds.left, Math.min(bounds.right - player.width, player.x));
  player.y = Math.max(bounds.top, Math.min(bounds.bottom - player.depth, player.y));

  updateWreckingBalls(timestamp);
  positionPlayer();

  if (playerHitBar()) {
    resetPlayerToCheckpoint("Red bar hit. Sent back to the last checkpoint.");
  } else if (playerHitWreckingMount()) {
    resetPlayerToCheckpoint("You ran into the wrecking ball mount and got sent back.");
  } else if (playerHitWreckingBall()) {
    resetPlayerToCheckpoint("Wrecking ball hit. You got knocked off the track.");
  } else if (playerReachedFinish()) {
    completeObstacleCourse();
    return;
  }

  courseState.animationFrame = requestAnimationFrame(runObstacleFrame);
}

function startObstacleCourse() {
  syncCourseBounds();
  const layout = createObstacleLayout(state.currentIndex);

  state.obstacleMode = true;
  state.obstacleReady = false;
  feedbackPanelEl.classList.add("hidden");
  obstaclePanelEl.classList.remove("hidden");
  obstacleTitleEl.textContent = `Checkpoint ${state.currentIndex + 1} Obstacle Run`;
  renderObstacleObjects(layout);
  resetPlayerToCheckpoint("Reach the finish pad to unlock the next question.");
  stopObstacleCourse();
  courseState.animationFrame = requestAnimationFrame(runObstacleFrame);
}

function updateHud() {
  scoreEl.textContent = state.score;
  roundEl.textContent = `${state.currentIndex + 1} / ${flashcards.length}`;
}

function renderAnswers(card) {
  answersEl.innerHTML = "";

  card.choices.forEach((choice) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-button";
    button.textContent = choice;
    button.disabled = state.answered;
    button.addEventListener("click", () => handleAnswer(choice, button));
    answersEl.appendChild(button);
  });
}

function renderCard() {
  const card = state.recoveryMode ? state.recoveryCard : flashcards[state.currentIndex];

  if (state.studyMode) {
    answersEl.innerHTML = "";
    questionEl.textContent = "Study the checkpoint guide, then start the run.";
    hintEl.textContent = "The quiz unlocks after you review the facts above.";
    lessonEl.textContent = "Every wrong answer locks your run, so this study pass is your warm-up.";
    categoryEl.textContent = "Study Mode";
    difficultyBadgeEl.textContent = "Prep Session";
    flashcardEl.classList.remove("is-flipped");
    feedbackPanelEl.classList.add("hidden");
    obstaclePanelEl.classList.add("hidden");
    flipButtonEl.textContent = "Reveal Hint";
    updateHud();
    buildCheckpoints();
    return;
  }

  state.answered = false;
  state.revealed = false;
  state.obstacleMode = false;
  flashcardEl.classList.remove("is-flipped");
  feedbackPanelEl.classList.add("hidden");
  obstaclePanelEl.classList.add("hidden");
  questionEl.textContent = card.question;
  hintEl.textContent = `Hint: ${card.hint}`;
  lessonEl.textContent = card.lesson;
  categoryEl.textContent = card.category;
  difficultyBadgeEl.textContent = card.difficulty;
  flipButtonEl.textContent = "Reveal Hint";
  nextButtonEl.textContent = state.currentIndex === flashcards.length - 1
    ? "Finish Obby"
    : "Roll To Next Checkpoint";
  nextButtonEl.disabled = true;
  updateHud();
  buildCheckpoints();
  renderAnswers(card);
}

function toggleReveal() {
  state.revealed = !state.revealed;
  flashcardEl.classList.toggle("is-flipped", state.revealed);
  flipButtonEl.textContent = state.revealed ? "Show Question" : "Reveal Hint";
}

function handleAnswer(choice, clickedButton) {
  if (state.answered) {
    return;
  }

  const card = state.recoveryMode ? state.recoveryCard : flashcards[state.currentIndex];
  const buttons = [...answersEl.querySelectorAll(".answer-button")];
  const isCorrect = choice === card.answer;

  state.answered = true;

  if (!state.revealed) {
    state.revealed = true;
    flashcardEl.classList.add("is-flipped");
    flipButtonEl.textContent = "Show Question";
  }

  buttons.forEach((button) => {
    button.disabled = true;

    if (button.textContent === card.answer) {
      button.classList.add("correct");
    } else if (button === clickedButton && !isCorrect) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    state.score += 100;
    state.correct += 1;
    feedbackTitleEl.textContent = state.recoveryMode
      ? "Recovery checkpoint cleared!"
      : "Checkpoint cleared!";
    feedbackTextEl.textContent = `${card.learnMore} Clear the obstacle course to unlock the next checkpoint question.`;
    nextButtonEl.textContent = "Start Obstacle Course";
    state.obstacleReady = true;
    state.recoveryMode = false;
    state.recoveryCard = null;
  } else {
    if (state.recoveryMode) {
      feedbackTitleEl.textContent = "Recovery failed. You are stuck.";
      feedbackTextEl.textContent = "The run is locked. Go back to Study Mode, review the checkpoint facts, and restart when you're ready.";
      nextButtonEl.textContent = "Checkpoint Locked";
    } else {
      state.recoveryMode = true;
      state.recoveryCard = createRecoveryCard(flashcards[state.currentIndex]);
      feedbackTitleEl.textContent = "You missed the checkpoint, but you get one recovery question.";
      feedbackTextEl.textContent = "No answer reveal here. Answer the backup question correctly to keep the run alive.";
      nextButtonEl.textContent = "Start Recovery Question";
    }
  }

  buildCheckpoints();
  updateHud();
  feedbackPanelEl.classList.remove("hidden");
  nextButtonEl.disabled = !isCorrect && !state.recoveryMode;
}

function showResults() {
  const template = document.querySelector("#resultTemplate");
  const resultNode = template.content.cloneNode(true);
  const clearedFlags = `${state.correct} / ${flashcards.length}`;
  const heading = state.correct === flashcards.length
    ? "You Conquered The California Obby"
    : "Run Complete";
  const summary = state.correct === flashcards.length
    ? "Every checkpoint flag is green. You finished the course with a perfect California run."
    : "You reached the end of the run, but a few checkpoints still need work. Restart and turn every flag green.";

  arenaCardEl.replaceChildren(resultNode);

  document.querySelector("#resultHeading").textContent = heading;
  document.querySelector("#resultSummary").textContent = summary;
  document.querySelector("#finalScore").textContent = state.score;
  document.querySelector("#accuracy").textContent = clearedFlags;
  document.querySelector("#bestStreak").textContent = state.correct;
  document.querySelector("#restartButton").addEventListener("click", resetGame);
}

function startRun() {
  state.studyMode = false;
  studyPanelEl.classList.add("hidden");
  renderCard();
}

function nextRound() {
  if (!state.answered || state.currentIndex >= flashcards.length) {
    return;
  }

  if (state.obstacleReady) {
    startObstacleCourse();
    return;
  }

  if (state.recoveryMode) {
    renderCard();
    return;
  }

  state.currentIndex += 1;

  if (state.currentIndex >= flashcards.length) {
    showResults();
    return;
  }

  renderCard();
}

function resetGame() {
  window.location.reload();
}

function handleKeyDown(event) {
  if (!state.obstacleMode) {
    return;
  }

  const validKeys = ["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"];
  if (!validKeys.includes(event.key)) {
    return;
  }

  event.preventDefault();
  courseState.keys.add(event.key);
}

function handleKeyUp(event) {
  if (!state.obstacleMode) {
    return;
  }

  if (event.key.startsWith("Arrow")) {
    courseState.keys.delete(event.key);
  }
}

flipButtonEl.addEventListener("click", toggleReveal);
nextButtonEl.addEventListener("click", nextRound);
restartTopButtonEl.addEventListener("click", resetGame);
startRunButtonEl.addEventListener("click", startRun);
window.addEventListener("keydown", handleKeyDown);
window.addEventListener("keyup", handleKeyUp);

renderStudyGuide();
renderCard();
