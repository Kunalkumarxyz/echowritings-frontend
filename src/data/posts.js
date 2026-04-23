// src/data/posts.js
// 10+ motivational stories for EchoWritings
// Each item contains: id, slug, title, metaTitle, metaDescription, time, date, img, author, excerpt, content[]

const posts = [
  {
    id: 1,
    slug: "morning-rituals-transform-your-day",
    title: "Morning Rituals: Transform Your Day Before It Begins",
    metaTitle: "Morning Rituals | Start Your Day Right — EchoWritings",
    metaDescription: "Small morning habits that boost focus, energy & productivity. Build tiny rituals for lasting change.",
    time: "5 min read",
    date: "2024-11-05",
    img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Tiny morning routines compound into productive days. Learn 3 simple rituals you can start tomorrow.",
    content: [
      "A consistent morning routine sets the tone for the whole day. Begin with something small: drink water, stretch for two minutes, then write one intention.",
      "Keep rituals short and repeatable. The goal is momentum, not perfection. Over weeks, tiny wins create psychological momentum.",
      "Measure impact: after two weeks, notice your focus, mood, and energy levels. Adjust rituals to fit your life, not the other way around."
    ]
  },
  {
    id: 2,
    slug: "from-fear-to-freedom",
    title: "From Fear to Freedom: Breaking the Chains of Self-Doubt",
    metaTitle: "From Fear to Freedom | Overcome Self-Doubt — EchoWritings",
    metaDescription: "Step-by-step approach to replace self-doubt with small experiments, building confidence and resilience.",
    time: "7 min read",
    date: "2024-11-01",
    img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Self-doubt is loud — courage is gradual. Try micro-experiments to collect evidence of success.",
    content: [
      "Self-doubt often speaks louder than reality. The practical cure: run small low-risk experiments that confront one fear at a time.",
      "Record outcomes and build a 'wins' list. Evidence rewires beliefs faster than positive thinking alone.",
      "Treat courage like a skill: practice daily, celebrate small wins, and gradually expand your comfort zone."
    ]
  },
  {
    id: 3,
    slug: "art-of-resilience",
    title: "The Art of Resilience: Bouncing Back Stronger Than Ever",
    metaTitle: "The Art of Resilience | Bounce Back Stronger — EchoWritings",
    metaDescription: "How to reframe setbacks, create recovery routines, and build the muscle of resilience.",
    time: "6 min read",
    date: "2024-10-28",
    img: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Resilience is a learnable skill. Use a simple three-step recovery routine to turn setbacks into lessons.",
    content: [
      "Setbacks are feedback, not final judgments. The first step is emotional acceptance—allow feeling before fixing.",
      "Adopt a three-step recovery: feel → learn → act. This reduces rumination and speeds up recovery.",
      "Build preventive habits: sleep, social support, and a small daily routine that stabilizes you when things go wrong."
    ]
  },
  {
    id: 4,
    slug: "focus-in-a-distracted-world",
    title: "Focus in a Distracted World: Simple Systems That Work",
    metaTitle: "Focus in a Distracted World | Practical Systems — EchoWritings",
    metaDescription: "Proven small systems to protect attention and get meaningful work done in distraction-heavy days.",
    time: "5 min read",
    date: "2024-09-15",
    img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Protect attention with micro-systems: batch tasks, single-purpose timers, and environment design.",
    content: [
      "Attention is your most valuable resource. Use simple systems: block time, remove visual noise, and set tiny achievable goals.",
      "The 'two-task rule' helps: decide on the two most important tasks for the day and finish one before opening social apps.",
      "Small environment changes—phone in another room, a clean desk—reduce friction and increase sustained focus."
    ]
  },
  {
    id: 5,
    slug: "habit-stacking-for-real-change",
    title: "Habit Stacking: How Tiny Actions Become Big Results",
    metaTitle: "Habit Stacking | Build Lasting Habits — EchoWritings",
    metaDescription: "Use habit stacking to attach new actions to existing routines and make change inevitable over time.",
    time: "6 min read",
    date: "2024-08-20",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Attach a new tiny habit to something you already do. Consistency beats intensity for long-term change.",
    content: [
      "Habit stacking is pairing a new habit with an existing one: after morning tea, write one gratitude line.",
      "Start so small that it's impossible to fail. Consistency creates identity change—'I am someone who shows up.'",
      "Track progress visually—habit chains are motivating and keep you accountable without heavy discipline."
    ]
  },
  {
    id: 6,
    slug: "the-power-of-consistency",
    title: "The Power of Consistency: Small Steps, Massive Outcomes",
    metaTitle: "Power of Consistency | Small Steps, Big Impact — EchoWritings",
    metaDescription: "Why showing up matters more than intensity and how daily repetition compounds into success.",
    time: "5 min read",
    date: "2024-07-10",
    img: "https://images.unsplash.com/photo-1500534314209-77f4a9f0a7f1?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Small repeated actions form the foundation of greatness. Focus on daily systems, not one-off bursts.",
    content: [
      "Consistency compounds. Ten minutes a day becomes significant over months and years.",
      "Design a system you enjoy—if process is pleasant, you're more likely to repeat it.",
      "Be patient. Results follow momentum. Celebrate progress, not perfection."
    ]
  },
  {
    id: 7,
    slug: "clarity-through-minimalism",
    title: "Clarity Through Minimalism: Declutter to Discover What Matters",
    metaTitle: "Clarity Through Minimalism | Focus on What Matters — EchoWritings",
    metaDescription: "Minimalism isn't just tidy spaces—it's mental clarity. Reduce choices to increase focus and impact.",
    time: "4 min read",
    date: "2024-06-30",
    img: "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Clear space, clear mind. Reduce choices to free cognitive energy for important decisions.",
    content: [
      "Minimalism reduces decision fatigue. Keep essentials only and automate low-value choices.",
      "A weekly 'clear 15'—15 minutes of decluttering—keeps your space and mind tidy.",
      "When you remove noise, you hear your priorities more clearly. Simplicity creates actionable clarity."
    ]
  },
  {
    id: 8,
    slug: "gratitude-as-a-practice",
    title: "Gratitude as a Practice: A Small Habit with Big Heart",
    metaTitle: "Gratitude Practice | Daily Habit for Joy — EchoWritings",
    metaDescription: "Tiny gratitude routines shift perspective, lower stress, and increase daily joy. Try 3 lines nightly.",
    time: "3 min read",
    date: "2024-05-18",
    img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Write three short lines of gratitude each night. Over time your brain notices abundance, not lack.",
    content: [
      "Gratitude rewires attention from scarcity to abundance. Start with three simple lines each evening.",
      "Keep a tiny notebook by your bed or use a phone note—consistency matters more than length.",
      "The practice reduces rumination and improves sleep quality by ending the day on a positive note."
    ]
  },
  {
    id: 9,
    slug: "courage-to-start",
    title: "Courage to Start: Why First Steps Matter More Than Perfect Plans",
    metaTitle: "Courage to Start | Begin, Then Iterate — EchoWritings",
    metaDescription: "The best plan is the one you begin. Take imperfect first steps and iterate — action creates clarity.",
    time: "5 min read",
    date: "2024-04-12",
    img: "https://images.unsplash.com/photo-1494894194458-0174142560c0?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Waiting for perfect conditions delays everything. Start small, learn quickly, and improve as you go.",
    content: [
      "Fear of imperfection keeps many plans on the shelf. The antidote is action: a single small step clarifies next moves.",
      "Iterate fast: launch a small version, gather feedback, and refine. Perfection is expensive; learning is cheap.",
      "Starting builds confidence. Each completed small step lowers the bar for the next one."
    ]
  },
  {
    id: 10,
    slug: "serving-others-fuels-success",
    title: "Serving Others Fuels Success: Contribution as a Superpower",
    metaTitle: "Serving Others | Contribution Drives Success — EchoWritings",
    metaDescription: "Make contribution a daily habit. Helping others increases meaning, network, and long-term success.",
    time: "4 min read",
    date: "2024-03-22",
    img: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Contribution compounds: help someone today and you build trust, skill, and momentum for tomorrow.",
    content: [
      "Serving others creates meaning and opens unexpected doors. Small acts—advice, introductions, help—multiply.",
      "Make contribution part of your routine: one small helpful action each day builds a reputation of value.",
      "When you focus outward, personal growth follows naturally. Contribution is both fulfilling and strategic."
    ]
  },
  {
    id: 11,
    slug: "start-small-win-big",
    title: "Start Small, Win Big: The Magic of Tiny Habits",
    metaTitle: "Start Small, Win Big | Tiny Habits — EchoWritings",
    metaDescription: "How tiny daily actions lead to big change. Learn the 3-step method to build habits that stick.",
    time: "4 min read",
    date: "2025-11-14",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1400&auto=format&fit=crop",
    author: "EchoWritings",
    excerpt: "Small consistent steps beat occasional bursts. Start a tiny habit today and watch it grow.",
    content: [
      "Every big result starts with a single small action. Choose one tiny habit you can do daily.",
      "Make it obvious (attach to an existing routine), make it tiny (almost impossible to fail), and track it for 30 days.",
      "Consistency builds identity. After a month, the habit will feel normal and you can gradually increase it."
    ]
  },
  {
  id: 12,
  slug: "code-beyond-lines",
  title: "Code Beyond Lines: Building More Than Just Software",
  metaTitle: "Code Beyond Lines | Real Meaning of Programming — EchoWritings",
  metaDescription: "Programming is not just writing code. Learn how developers solve problems, think logically, and create real-world impact.",
  time: "5 min read",
  date: "2026-04-24",
  img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1400&auto=format&fit=crop",
  author: "EchoWritings",
  excerpt: "Coding isn’t about syntax—it’s about solving problems and building things that matter.",
  content: [
    "Most beginners think coding is about memorizing syntax, but real programming starts when you begin solving problems. Code is just a tool—the real skill is thinking logically and breaking complex problems into smaller, manageable steps.",
    
    "Every app you use today started as an idea. Developers turn those ideas into reality by writing instructions that machines can understand. Whether it’s a simple website or a powerful AI system, everything is built one line at a time.",
    
    "Errors and bugs are not failures—they are part of the journey. Each bug teaches you something new about how systems work. The best developers are not those who write perfect code, but those who know how to debug and improve continuously.",
    
    "Consistency matters more than intensity. Writing code for 30 minutes daily is far more powerful than coding for 10 hours once a week. Skills grow when you stay connected to the process regularly.",
    
    "Technology is always evolving. New frameworks, languages, and tools will keep coming, but strong fundamentals will always stay relevant. Focus on understanding concepts instead of chasing trends.",
    
    "At the end of the day, programming is about creating impact. It’s about building something useful, solving real problems, and making life easier for people. Code is not just lines—it’s a way to shape the future."
  ]
},
  {
  id: 13,
  slug: "haar-se-jeet",
  title: "हार से जीत: गिरकर उठने की ताकत",
  metaTitle: "हार से जीत | Motivation Story in Hindi — EchoWritings",
  metaDescription: "हार अंत नहीं है। हर गिरावट आपको और मजबूत बनाती है। सीखें कैसे असफलता सफलता की शुरुआत होती है।",
  time: "4 min read",
  date: "2026-04-24",
  img: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1400&auto=format&fit=crop",
  author: "EchoWritings",
  excerpt: "हर हार एक नई शुरुआत होती है, बस नजरिया बदलने की जरूरत है।",
  content: [
    "राहुल ने कई बार कोशिश की, लेकिन हर बार उसे असफलता मिली। धीरे-धीरे उसने खुद पर शक करना शुरू कर दिया। उसे लगा कि शायद वो इसके लायक नहीं है।",
    
    "एक दिन उसने सोचा—क्या सच में हार ही अंत है? या यह एक मौका है कुछ नया सीखने का? उसने अपनी गलतियों को समझना शुरू किया और खुद को बेहतर बनाने का फैसला किया।",
    
    "धीरे-धीरे उसकी मेहनत रंग लाने लगी। वही काम जो पहले मुश्किल लगता था, अब आसान लगने लगा। उसका आत्मविश्वास वापस आ गया।",
    
    "कुछ महीनों बाद, वही राहुल जिसने कई बार हार देखी थी, अब सफलता की ओर बढ़ रहा था।",
    
    "सच्चाई यह है कि हार आपको रोकने नहीं आती, बल्कि आपको सिखाने आती है। अगर आप गिरकर उठना सीख गए, तो कोई भी आपको रोक नहीं सकता।"
  ]
},
  {
  id: 14,
  slug: "chhoti-shuruaat-badi-jeet",
  title: "छोटी शुरुआत, बड़ी जीत",
  metaTitle: "छोटी शुरुआत बड़ी जीत | Daily Motivation Hindi — EchoWritings",
  metaDescription: "बड़ी सफलता छोटी-छोटी आदतों से बनती है। जानिए कैसे रोज़ के छोटे कदम आपकी जिंदगी बदल सकते हैं।",
  time: "4 min read",
  date: "2026-04-24",
  img: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=1400&auto=format&fit=crop",
  author: "EchoWritings",
  excerpt: "हर बड़ा बदलाव एक छोटी शुरुआत से ही आता है।",
  content: [
    "अक्सर हम बड़े सपने देखते हैं, लेकिन शुरुआत करने से डरते हैं। हमें लगता है कि जब तक सब कुछ परफेक्ट नहीं होगा, तब तक शुरू नहीं करना चाहिए।",
    
    "लेकिन सच्चाई यह है कि परफेक्ट समय कभी नहीं आता। जो लोग सफल होते हैं, वे छोटी शुरुआत करते हैं और धीरे-धीरे आगे बढ़ते हैं।",
    
    "रोज़ का एक छोटा कदम—चाहे वो 10 मिनट पढ़ाई हो या एक नया स्किल सीखना—समय के साथ बड़ा बदलाव लाता है।",
    
    "सबसे जरूरी है consistency। अगर आप रोज़ थोड़ा-थोड़ा भी करते हैं, तो कुछ महीनों में आप खुद में बड़ा फर्क देखेंगे।",
    
    "याद रखिए, सफलता एक दिन में नहीं मिलती, लेकिन रोज़ की छोटी मेहनत आपको वहां तक जरूर पहुंचा देती है।"
  ]
},
  {
  id: 15,
  slug: "discipline-over-motivation",
  title: "Discipline Over Motivation: The Real Game Changer",
  metaTitle: "Discipline Over Motivation | Success Mindset — EchoWritings",
  metaDescription: "Motivation fades, but discipline stays. Learn why discipline is the key to long-term success.",
  time: "4 min read",
  date: "2026-04-24",
  img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1400&auto=format&fit=crop",
  author: "EchoWritings",
  excerpt: "Motivation starts the journey, but discipline finishes it.",
  content: [
    "Motivation feels powerful, but it doesn’t last. One day you feel unstoppable, and the next day you don’t even want to start. That’s the problem with relying only on motivation.",
    
    "Discipline, on the other hand, is different. It doesn’t depend on how you feel. It’s about showing up even when you don’t feel like it.",
    
    "Successful people don’t wait for motivation—they build routines. They follow systems that keep them moving forward every single day.",
    
    "When you choose discipline, you remove excuses. You create a structure that supports your goals, no matter your mood.",
    
    "In the long run, discipline always beats motivation. Because success isn’t about how you start—it’s about how consistently you keep going."
  ]
}
];

// Export for ESM (frontend) and CommonJS (backend) compatibility:
export default posts;
if (typeof module !== "undefined") module.exports = posts;
