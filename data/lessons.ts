import { Lesson } from "@/types/learning";

export const lessons: Lesson[] = [
  // --- SPANISH (10 Lessons) ---
  { id: "l1-es", unitId: "unit-1-es", title: "Greetings", description: "Hello and Goodbye", order: 1, goals: ["Greet people"], activities: [{ id: "a1-1-es", type: "VOCABULARY", title: "Basics", vocabulary: [{ id: "v1", word: "Hola", translation: "Hello" }] }] },
  { id: "l2-es", unitId: "unit-1-es", title: "Introductions", description: "My name is...", order: 2, goals: ["Introduce yourself"], activities: [{ id: "a2-1-es", type: "PHRASE", title: "Names", phrases: [{ id: "p1", text: "Me llamo Maria", translation: "My name is Maria" }] }] },
  { id: "l3-es", unitId: "unit-1-es", title: "Numbers 1-10", description: "Counting basics", order: 3, goals: ["Count to 10"], activities: [{ id: "a3-1-es", type: "VOCABULARY", title: "Numbers", vocabulary: [{ id: "v2", word: "Uno", translation: "One" }] }] },
  { id: "l4-es", unitId: "unit-2-es", title: "Family Members", description: "Mom, Dad, Siblings", order: 1, goals: ["Talk about family"], activities: [{ id: "a4-1-es", type: "VOCABULARY", title: "Family", vocabulary: [{ id: "v3", word: "Madre", translation: "Mother" }] }] },
  { id: "l5-es", unitId: "unit-2-es", title: "Common Foods", description: "Bread, Milk, Water", order: 2, goals: ["Identify food"], activities: [{ id: "a5-1-es", type: "VOCABULARY", title: "Food", vocabulary: [{ id: "v4", word: "Pan", translation: "Bread" }] }] },
  { id: "l6-es", unitId: "unit-2-es", title: "At the Table", description: "Ordering breakfast", order: 3, goals: ["Order food"], activities: [{ id: "a6-1-es", type: "AI_TEACHER", title: "Breakfast", aiPrompt: "Practice ordering breakfast." }] },
  { id: "l7-es", unitId: "unit-3-es", title: "Directions", description: "Left, Right, Straight", order: 1, goals: ["Find your way"], activities: [{ id: "a7-1-es", type: "VOCABULARY", title: "Move", vocabulary: [{ id: "v5", word: "Derecha", translation: "Right" }] }] },
  { id: "l8-es", unitId: "unit-3-es", title: "The Hotel", description: "Check-in and keys", order: 2, goals: ["Check in"], activities: [{ id: "a8-1-es", type: "PHRASE", title: "Hotel", phrases: [{ id: "p2", text: "Tengo una reserva", translation: "I have a reservation" }] }] },
  { id: "l9-es", unitId: "unit-3-es", title: "Emergency", description: "Help and Doctor", order: 3, goals: ["Ask for help"], activities: [{ id: "a9-1-es", type: "VOCABULARY", title: "Help", vocabulary: [{ id: "v6", word: "Ayuda", translation: "Help" }] }] },
  { id: "l10-es", unitId: "unit-3-es", title: "Review", description: "Foundations Review", order: 4, goals: ["Review"], activities: [{ id: "a10-1-es", type: "VOCABULARY", title: "Review", vocabulary: [{ id: "v1", word: "Hola", translation: "Hello" }] }] },

  // --- FRENCH (8 Lessons) ---
  { id: "l1-fr", unitId: "unit-1-fr", title: "Salutations", description: "Bonjour!", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-fr", type: "VOCABULARY", title: "Greetings", vocabulary: [{ id: "f1", word: "Bonjour", translation: "Hello" }] }] },
  { id: "l2-fr", unitId: "unit-1-fr", title: "Politeness", description: "Merci and S'il vous plait", order: 2, goals: ["Be polite"], activities: [{ id: "a2-1-fr", type: "PHRASE", title: "Polite", phrases: [{ id: "pf1", text: "Merci beaucoup", translation: "Thank you very much" }] }] },
  { id: "l3-fr", unitId: "unit-1-fr", title: "Alphabet", description: "French sounds", order: 3, goals: ["Pronounce letters"], activities: [{ id: "a3-1-fr", type: "AUDIO_LESSON", title: "Sounds", audioUrl: "fr-alphabet.mp3" }] },
  { id: "l4-fr", unitId: "unit-2-fr", title: "Cafe Culture", description: "Ordering a croissant", order: 1, goals: ["Order cafe food"], activities: [{ id: "a4-1-fr", type: "VOCABULARY", title: "Cafe", vocabulary: [{ id: "f2", word: "Café", translation: "Coffee" }] }] },
  { id: "l5-fr", unitId: "unit-2-fr", title: "Fashion", description: "Clothing basics", order: 2, goals: ["Describe clothes"], activities: [{ id: "a5-1-fr", type: "VOCABULARY", title: "Clothes", vocabulary: [{ id: "f3", word: "Chemise", translation: "Shirt" }] }] },
  { id: "l6-fr", unitId: "unit-2-fr", title: "Shopping", description: "How much is it?", order: 3, goals: ["Ask for price"], activities: [{ id: "a6-1-fr", type: "PHRASE", title: "Price", phrases: [{ id: "pf2", text: "C'est combien?", translation: "How much is it?" }] }] },
  { id: "l7-fr", unitId: "unit-3-fr", title: "Landmarks", description: "Eiffel Tower", order: 1, goals: ["Identify places"], activities: [{ id: "a7-1-fr", type: "VOCABULARY", title: "Places", vocabulary: [{ id: "f4", word: "La tour Eiffel", translation: "Eiffel Tower" }] }] },
  { id: "l8-fr", unitId: "unit-3-fr", title: "Transport", description: "Metro and Bus", order: 2, goals: ["Use transport"], activities: [{ id: "a8-1-fr", type: "VOCABULARY", title: "Travel", vocabulary: [{ id: "f5", word: "Le métro", translation: "The metro" }] }] },

  // --- JAPANESE (8 Lessons) ---
  { id: "l1-jp", unitId: "unit-1-jp", title: "Hiragana A-O", description: "First 5 characters", order: 1, goals: ["Read A-O"], activities: [{ id: "a1-1-jp", type: "VOCABULARY", title: "Vowels", vocabulary: [{ id: "j1", word: "あ", translation: "a" }] }] },
  { id: "l2-jp", unitId: "unit-1-jp", title: "Hiragana KA-KO", description: "Next 5 characters", order: 2, goals: ["Read KA-KO"], activities: [{ id: "a2-1-jp", type: "VOCABULARY", title: "K-row", vocabulary: [{ id: "j2", word: "か", translation: "ka" }] }] },
  { id: "l3-jp", unitId: "unit-1-jp", title: "Hiragana SA-SO", description: "Next 5 characters", order: 3, goals: ["Read SA-SO"], activities: [{ id: "a3-1-jp", type: "VOCABULARY", title: "S-row", vocabulary: [{ id: "j3", word: "さ", translation: "sa" }] }] },
  { id: "l4-jp", unitId: "unit-2-jp", title: "Greetings", description: "Standard greetings", order: 1, goals: ["Greeting"], activities: [{ id: "a4-1-jp", type: "VOCABULARY", title: "Hello", vocabulary: [{ id: "j4", word: "こんにちは", translation: "Hello" }] }] },
  { id: "l5-jp", unitId: "unit-2-jp", title: "Bowing Culture", description: "Etiquette basics", order: 2, goals: ["Social norms"], activities: [{ id: "a5-1-jp", type: "AI_TEACHER", title: "Etiquette", aiPrompt: "Teach bowing etiquette." }] },
  { id: "l6-jp", unitId: "unit-3-jp", title: "Food", description: "Sushi and Ramen", order: 1, goals: ["Identify food"], activities: [{ id: "a6-1-jp", type: "VOCABULARY", title: "Food", vocabulary: [{ id: "j5", word: "すし", translation: "Sushi" }] }] },
  { id: "l7-jp", unitId: "unit-3-jp", title: "Shopping", description: "Convenience store", order: 2, goals: ["Buy items"], activities: [{ id: "a7-1-jp", type: "PHRASE", title: "Shopping", phrases: [{ id: "pj1", text: "これをください", translation: "This one please" }] }] },
  { id: "l8-jp", unitId: "unit-3-jp", title: "Numbers", description: "1-10 in Japanese", order: 3, goals: ["Count"], activities: [{ id: "a8-1-jp", type: "VOCABULARY", title: "Numbers", vocabulary: [{ id: "j6", word: "いち", translation: "One" }] }] },

  // --- CHINESE (6 Lessons) ---
  { id: "l1-cn", unitId: "unit-1-cn", title: "Tones 1 & 2", description: "High and Rising", order: 1, goals: ["Master tones"], activities: [{ id: "a1-1-cn", type: "PHRASE", title: "Tones", phrases: [{ id: "c1", text: "mā", translation: "Mother" }] }] },
  { id: "l2-cn", unitId: "unit-1-cn", title: "Tones 3 & 4", description: "Falling and Dipping", order: 2, goals: ["Master tones"], activities: [{ id: "a2-1-cn", type: "PHRASE", title: "Tones", phrases: [{ id: "c2", text: "mà", translation: "Scold" }] }] },
  { id: "l3-cn", unitId: "unit-2-cn", title: "Family", description: "Dad and Mom", order: 1, goals: ["Family vocab"], activities: [{ id: "a3-1-cn", type: "VOCABULARY", title: "Parents", vocabulary: [{ id: "c3", word: "爸爸", translation: "Dad" }] }] },
  { id: "l4-cn", unitId: "unit-2-cn", title: "Siblings", description: "Brother and Sister", order: 2, goals: ["Family vocab"], activities: [{ id: "a4-1-cn", type: "VOCABULARY", title: "Siblings", vocabulary: [{ id: "c4", word: "哥哥", translation: "Big brother" }] }] },
  { id: "l5-cn", unitId: "unit-2-cn", title: "Me and You", description: "Pronouns", order: 3, goals: ["Personal pronouns"], activities: [{ id: "a5-1-cn", type: "VOCABULARY", title: "Pronouns", vocabulary: [{ id: "c5", word: "我", translation: "I/Me" }] }] },
  { id: "l6-cn", unitId: "unit-2-cn", title: "Friends", description: "Meeting people", order: 4, goals: ["Social"], activities: [{ id: "a6-1-cn", type: "PHRASE", title: "Friendship", phrases: [{ id: "pc1", text: "你是我的朋友", translation: "You are my friend" }] }] },

  // --- GERMAN (4 Lessons) ---
  { id: "l1-de", unitId: "unit-1-de", title: "Greetings", description: "Hallo!", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-de", type: "VOCABULARY", title: "Greetings", vocabulary: [{ id: "g1", word: "Hallo", translation: "Hello" }] }] },
  { id: "l2-de", unitId: "unit-1-de", title: "Farewells", description: "Tschüss!", order: 2, goals: ["Goodbye"], activities: [{ id: "a2-1-de", type: "VOCABULARY", title: "Bye", vocabulary: [{ id: "g2", word: "Tschüss", translation: "Bye" }] }] },
  { id: "l3-de", unitId: "unit-2-de", title: "The Office", description: "Computer and Desk", order: 1, goals: ["Work vocab"], activities: [{ id: "a3-1-de", type: "VOCABULARY", title: "Office", vocabulary: [{ id: "g3", word: "Computer", translation: "Computer" }] }] },
  { id: "l4-de", unitId: "unit-2-de", title: "Meetings", description: "Professional German", order: 2, goals: ["Work social"], activities: [{ id: "a4-1-de", type: "PHRASE", title: "Work", phrases: [{ id: "pg1", text: "Ich habe eine Frage", translation: "I have a question" }] }] },

  // --- ITALIAN (4 Lessons) ---
  { id: "l1-it", unitId: "unit-1-it", title: "First Words", description: "Ciao!", order: 1, goals: ["Basics"], activities: [{ id: "a1-1-it", type: "VOCABULARY", title: "Start", vocabulary: [{ id: "i1", word: "Ciao", translation: "Hi" }] }] },
  { id: "l2-it", unitId: "unit-1-it", title: "Etiquette", description: "Please and Thanks", order: 2, goals: ["Politeness"], activities: [{ id: "a2-1-it", type: "PHRASE", title: "Polite", phrases: [{ id: "pi1", text: "Per favore", translation: "Please" }] }] },
  { id: "l3-it", unitId: "unit-2-it", title: "Pasta", description: "Types of pasta", order: 1, goals: ["Food"], activities: [{ id: "a3-1-it", type: "VOCABULARY", title: "Food", vocabulary: [{ id: "i2", word: "Pasta", translation: "Pasta" }] }] },
  { id: "l4-it", unitId: "unit-2-it", title: "Museum", description: "Renaissance Art", order: 2, goals: ["Culture"], activities: [{ id: "a4-1-it", type: "VOCABULARY", title: "Art", vocabulary: [{ id: "i3", word: "Arte", translation: "Art" }] }] },

  // --- KOREAN (4 Lessons) ---
  { id: "l1-kr", unitId: "unit-1-kr", title: "Hangul Vowels", description: "Basic sounds", order: 1, goals: ["Read vowels"], activities: [{ id: "a1-1-kr", type: "VOCABULARY", title: "Vowels", vocabulary: [{ id: "k1", word: "ㅏ", translation: "a" }] }] },
  { id: "l2-kr", unitId: "unit-1-kr", title: "Hangul Consonants", description: "K, N, T, R", order: 2, goals: ["Read consonants"], activities: [{ id: "a2-1-kr", type: "VOCABULARY", title: "Consonants", vocabulary: [{ id: "k2", word: "ㄱ", translation: "g/k" }] }] },
  { id: "l3-kr", unitId: "unit-2-kr", title: "Polite Greeting", description: "Annyeonghaseyo", order: 1, goals: ["Greet"], activities: [{ id: "a3-1-kr", type: "PHRASE", title: "Greetings", phrases: [{ id: "pk1", text: "안녕하세요", translation: "Hello (Polite)" }] }] },
  { id: "l4-kr", unitId: "unit-2-kr", title: "Friends", description: "Casual greeting", order: 2, goals: ["Casual"], activities: [{ id: "a4-1-kr", type: "PHRASE", title: "Casual", phrases: [{ id: "pk2", text: "안녕", translation: "Hi (Casual)" }] }] },

  // --- PORTUGUESE (2 Lessons) ---
  { id: "l1-pt", unitId: "unit-1-pt", title: "Bom dia!", description: "Greetings", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-pt", type: "VOCABULARY", title: "Basics", vocabulary: [{ id: "pt1", word: "Bom dia", translation: "Good morning" }] }] },
  { id: "l2-pt", unitId: "unit-1-pt", title: "Obrigado", description: "Gratitude", order: 2, goals: ["Thanks"], activities: [{ id: "a2-1-pt", type: "VOCABULARY", title: "Thanks", vocabulary: [{ id: "pt2", word: "Obrigado", translation: "Thank you" }] }] },

  // --- RUSSIAN (1 Lesson) ---
  { id: "l1-ru", unitId: "unit-1-ru", title: "The Alphabet", description: "Cyrillic Basics", order: 1, goals: ["Alphabet"], activities: [{ id: "a1-1-ru", type: "VOCABULARY", title: "Letters", vocabulary: [{ id: "r1", word: "А", translation: "A" }] }] },

  // --- ARABIC (1 Lesson) ---
  { id: "l1-ar", unitId: "unit-1-ar", title: "First Letters", description: "Alif and Ba", order: 1, goals: ["Alphabet"], activities: [{ id: "a1-1-ar", type: "VOCABULARY", title: "Letters", vocabulary: [{ id: "ar1", word: "أ", translation: "Alif" }] }] },

  // --- HINDI (1 Lesson) ---
  { id: "l1-hi", unitId: "unit-1-hi", title: "Greetings", description: "Namaste", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-hi", type: "VOCABULARY", title: "Greetings", vocabulary: [{ id: "h1", word: "नमस्ते", translation: "Hello" }] }] },

  // --- TURKISH (1 Lesson) ---
  { id: "l1-tr", unitId: "unit-1-tr", title: "Basics", description: "Merhaba", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-tr", type: "VOCABULARY", title: "Basics", vocabulary: [{ id: "t1", word: "Merhaba", translation: "Hello" }] }] },

  // --- DUTCH (1 Lesson) ---
  { id: "l1-nl", unitId: "unit-1-nl", title: "Basics", description: "Hallo", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-nl", type: "VOCABULARY", title: "Basics", vocabulary: [{ id: "nl1", word: "Hallo", translation: "Hello" }] }] },

  // --- SWEDISH (1 Lesson) ---
  { id: "l1-se", unitId: "unit-1-se", title: "Basics", description: "Hej", order: 1, goals: ["Greet"], activities: [{ id: "a1-1-se", type: "VOCABULARY", title: "Basics", vocabulary: [{ id: "se1", word: "Hej", translation: "Hello" }] }] },

  // --- VIETNAMESE (1 Lesson) ---
  { id: "l1-vn", unitId: "unit-1-vn", title: "Tones", description: "Introduction", order: 1, goals: ["Tones"], activities: [{ id: "a1-1-vn", type: "PHRASE", title: "Tones", phrases: [{ id: "vn1", text: "Chào", translation: "Hello" }] }] },
];

// TOTAL LESSONS: 10 (ES) + 8 (FR) + 8 (JP) + 6 (CN) + 4 (DE) + 4 (IT) + 4 (KR) + 2 (PT) + 1 (RU) + 1 (AR) + 1 (HI) + 1 (TR) + 1 (NL) + 1 (SE) + 1 (VN) = 53 Lessons
