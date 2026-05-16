export interface Language {
  id: string;
  name: string;
  nativeName: string;
  flag: string;
}

export interface Unit {
  id: string;
  languageId: string;
  title: string;
  description: string;
  order: number;
}

export interface Vocabulary {
  id: string;
  word: string;
  translation: string;
  phonetic?: string;
  audioUrl?: string;
  image?: any;
}

export interface Phrase {
  id: string;
  text: string;
  translation: string;
  audioUrl?: string;
}

export type ActivityType = 'VOCABULARY' | 'PHRASE' | 'AUDIO_LESSON' | 'AI_TEACHER';

export interface Activity {
  id: string;
  type: ActivityType;
  title: string;
  description?: string;
  vocabulary?: Vocabulary[];
  phrases?: Phrase[];
  audioUrl?: string;
  aiPrompt?: string;
}

export interface Lesson {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  goals: string[];
  activities: Activity[];
  aiTeacherPrompt?: string;
}
