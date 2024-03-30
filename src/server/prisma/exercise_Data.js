const exampleExercises = [
  {
    difficulty: "Beginner",
    category: "Legs",
    name: "Bar Squat",
    description:
      "High bar and low bar squats help increase strength in the lower body, core, and back. They also improve balance, coordination, and range of motion. High bar squats are great for people of all fitness levels, while low bar squats are more technical.",
    setsGoals: 3,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/VZ90qWlfQUE",
  },
  {
    difficulty: "Beginner",
    category: "Legs/Back",
    name: "Stiff Leg Dead lift",
    description:
      "The stiff-leg dead lift, also known as the straight-leg dead lift, is a strength training exercise that changes the form of the conventional dead lift. The stiff-leg dead lift engages muscles in your posterior chain, the group of muscles on your backside that includes the gluts, calves, lats, and hamstrings.",
    setsGoals: 3,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/vm5fWinKyv0",
  },
  {
    difficulty: "Beginner",
    category: "Legs",
    name: "Seated Calf Raise",
    description:
      "The seated calf raise allows for the use of heavier weights compared to the standing variation. This higher load capacity can stimulate muscle growth and strength development, especially in the soleus muscle, which responds well to heavy loads.",
    setsGoals: 2,
    repsGoals: 20,
    video: "https://www.youtube.com/embed/_LxQH4o7COk",
  },
  {
    difficulty: "Beginner",
    category: "Chest/Triceps",
    name: "Barbell Bench Press",
    description:
      "Using a barbell and a bench, this exercise challenges the performer to lower a barbell to their chest before extending the arms to press it back up again. While the main focus of this exercise is the chest muscles, the barbell bench press activates the pectorals, triceps and deltoids, and works the core.",
    setsGoals: 3,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/t3f2L7NRRUY",
  },
  {
    difficulty: "Beginner",
    category: "Back/Bicep",
    name: "Barbell Rows",
    description:
      "The barbell row is an excellent exercise for building up your back muscles. More specifically, you'll work your mid- and upper-back muscles, like the lats, rhomboids, traps, and rear delts.",
    setsGoals: 3,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/qbES7k4HDf8",
  },
  {
    difficulty: "Beginner",
    category: "Shoulder",
    name: "Shoulder Press",
    description:
      "Like most other weightlifting exercises, shoulder presses greatly contribute to improving your upper body strength. Performing this exercise correctly will lead to strengthened trapezius, pectoral, triceps, and deltoid muscles",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/0JfYxMRsUCQ",
  },
  {
    difficulty: "Beginner",
    category: "Bicep",
    name: "Standing Alternating Dumbbell Curl",
    description:
      "The standing alternating dumbbell curl is a strength building exercise for the biceps and forearms. Performing the curls in an alternating manner ensures muscular balance on both sides of the body.",
    setsGoals: 2,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/o2Tma5Cek48",
  },
  {
    difficulty: "Beginner",
    category: "tricep",
    name: "Tricep Pushdown OR Alternate Exercise: Use EZ-Bar or Cambered Bar",
    description:
      "Tricep pushdowns tone your arms. Tricep pushdowns target the medial and lateral heads of the triceps. With proper form and regular practice, tricep pushdowns can tone the muscles on the back of your arms and increase stabilization around your shoulder joint.",
    setsGoals: 2,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/LXkCrxn3caQ",
  },
  {
    difficulty: "Intermediate",
    category: "Legs",
    name: "Leg Press OR Alternate Exercise: Leg Extension",
    description:
      "Specifically, the leg press targets the quadriceps muscles in the front of the thighs, the gluteal muscles in the buttocks, the hamstring muscles in the back of the thighs, and the calves, all in an integrated fashion.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/8EMbB0tCn7Q",
  },
  {
    difficulty: "Intermediate",
    category: "Chest",
    name: "Dumbbell Flys OR Alternate Exercise: Weighted Chest Dip",
    description:
      "The dumbbell chest fly can help open up your chest muscles. Chest openers may help reduce upper back pain, increase range of motion, and reduce tightness in the upper body.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/Nhvz9EzdJ4U",
  },
  {
    difficulty: "Intermediate",
    category: "Back/Bicep",
    name: "Lat Pull Down OR Alternate Exercise: Wide Grip Pull Up",
    description:
      "The lat pulldown is a fantastic exercise to strengthen the latissimus dorsi muscle, the broadest muscle in your back, which promotes good postures and spinal stability. Form is crucial when performing a lat pulldown to prevent injury and reap the best results.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/Z_3xHwuO8Tk",
  },
  {
    difficulty: "Intermediate",
    category: "Legs",
    name: "Lying Leg Curl",
    description:
      "An exercise you can do with a weight machine to work the muscle in the back of the thigh. As the name implies, the lying hamstring curl targets the hamstring muscle, located here. Strong hamstring muscles help protect the knee from injury.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/SbSNUXPRkc8",
  },
  {
    difficulty: "Intermediate",
    category: "Shoulders",
    name: "Dumbbell Lateral Raise",
    description:
      "Lateral raises help you achieve defined shoulders and upper arms that have a rounded appearance. Other than benefits to your appearance, lateral raises will help increase your shoulder mobility, range of motion, and stability. This helps you become better at activities like lifts and presses.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/TM6se0vr1VA",
  },
  {
    difficulty: "Intermediate",
    category: "Triceps",
    name: "Skull Crushers OR Alternate Exercise: Cable Tricep Extension",
    description:
      "Skull crushers work all three heads of the tricep and can be a helpful tool for building strength and size in the arms. Working your triceps will help to improve pushing movements like the bench press, and can help build overhead throwing strength.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/D47mYdoKllE",
  },
  {
    difficulty: "Intermediate",
    category: "Biceps",
    name: "Concentration Curl OR Alternate Exercise: EZ-Bar Preacher Curl",
    description:
      "Concentration curls tone your biceps. By activating both the long head and short head of your biceps brachii, concentration curls are one of the most useful exercises for toning the shape of your biceps.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/ja_JcPxeR2w",
  },
  {
    difficulty: "Intermediate",
    category: "Legs",
    name: "Seated Barbell Calf Raise",
    description:
      "The seated calf raise allows for the use of heavier weights compared to the standing variation. This higher load capacity can stimulate muscle growth and strength development, especially in the soleus muscle, which responds well to heavy loads.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/3ZRe_QpvRPg",
  },
  {
    difficulty: "Intermediate",
    category: "Back/Shoulders",
    name: "Rear Lateral Raises",
    description:
      "The rear delt raise, also known as the rear lateral raise and bent-over lateral raise, is a weightlifting exercise that targets your upper back muscles and shoulder muscles, particularly the posterior deltoids, or rear deltoids, on the backside of your shoulders.",
    setsGoals: 2,
    repsGoals: 15,
    video: "https://www.youtube.com/embed/Z0HTsZEMedA",
  },
  {
    difficulty: "Advanced",
    category: "Legs",
    name: "Barbell Lunge OR Alternate Exercise: Dumbbell Lunge",
    description:
      "The Barbell Lunge is a unilateral squatting exercise that develops lower body power, strength, and balance. The lunge should be a staple in anyone's training routine because of the way it balances out muscles and helps with full-body coordination.",
    setsGoals: 3,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/ci4rsmlOk24",
  },
  {
    difficulty: "Advanced",
    category: "Legs",
    name: "Leg Extension",
    description:
      "Leg extensions focus the tension on just your quadriceps. This is the only leg exercise that targets your quadriceps without involving other muscles. Other leg exercises, such as squats, step-ups and leg presses, work the quadriceps, but the hamstrings, calves or glut muscles assist the during the movement.",
    setsGoals: 2,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/swZQC689o9U",
  },
  {
    difficulty: "Advanced",
    category: "Chest",
    name: "Cable Crossovers OR Alternate Exercise: Dumbbell Chest Fly",
    description:
      "The Cable Crossover exercise primarily targets the pectoralis major and pectoralis minor, but it also hits the anterior deltoid, rhomboids, levator scapulae, and latissimus dorsi.",
    setsGoals: 2,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/taI4XduLpTk",
  },
  {
    difficulty: "Advanced",
    category: "Back/Biceps",
    name: "Dumbbell Rows",
    description:
      "Dumbbell Rows are a strength training exercise that primarily targets the largest back muscle: the latissimus dorsi. You perform it by pulling a dumbbell vertically towards the hip while bent over a bench with a lengthened stance - one hand and knee on the bench",
    setsGoals: 2,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/6gvmcqr226U",
  },
  {
    difficulty: "Advanced",
    category: "Shoulders",
    name: "Dumbbell Lateral Raises",
    description:
      "Lateral raises help you achieve defined shoulders and upper arms that have a rounded appearance. Other than benefits to your appearance, lateral raises will help increase your shoulder mobility, range of motion, and stability. This helps you become better at activities like lifts and presses.",
    setsGoals: 3,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/4p_m96HXMLk",
  },
  {
    difficulty: "Advanced",
    category: "Triceps",
    name: "Tricep Cable Pushdown",
    description:
      "Triceps pushdown is an isolation exercise, which targets the triceps long head or the outer area of your triceps. This exercise is perfect for gaining mass and thickness in your upper arm area.",
    setsGoals: 3,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/GCa8Q4e7laU",
  },
  {
    difficulty: "Advanced",
    category: "Legs",
    name: "Barbell Preacher Curl OR Alternate Exercise: Dumbbell Preacher Curl",
    description:
      "This exercise completely isolates the biceps brachii and focuses the intensity across the whole of the muscle. It also recruits the brachialis. This makes it a great overall biceps exercise, and a staple of any lifting program.",
    setsGoals: 3,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/1-xvtHS9PsU",
  },
  {
    difficulty: "Advanced",
    category: "Legs",
    name: "Seated Hamstring Leg Curl",
    description:
      "The seated hamstring curl is an exercise you can do with a weight machine to work the muscles in the back of the thigh. As the name implies, the seated hamstring curl targets the hamstring muscles here in the back of the thigh. Strong hamstring muscles help to protect your ligaments in the knee.",
    setsGoals: 3,
    repsGoals: 12,
    video: "https://www.youtube.com/embed/oFxEDkppbSQ",
  },
  {
    difficulty: "Advanced",
    category: "Abs",
    name: "Plank",
    description:
      "The plank is a classic exercise that strengthens your body from head to toe. In particular, the plank helps strengthen your core muscles, including your abdominal and lower back. Having a strong core is linked to reduced lower back pain, an improved ability to perform daily tasks, and enhanced athletic performance.",
    setsGoals: 1,
    repsGoals: "60 Seconds",
    video: "https://www.youtube.com/embed/2kEnT-CdXyE",
  },
];

module.exports = {
  exampleExercises,
};
