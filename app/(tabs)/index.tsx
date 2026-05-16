import { images } from "@/constants/images";
import { useUser } from "@clerk/expo";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    type ViewStyle,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PURPLE = "#6C4DFF";
const DARK = "#0A0F4D";
const ORANGE = "#F97316";

function getGreeting() {
  const h = new Date().getHours();
  if (h < 12) return "Good Morning,";
  if (h < 17) return "Good Afternoon,";
  return "Good Evening,";
}

export default function Home() {
  const { user } = useUser();
  const firstName = user?.firstName ?? "User";

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#F7F7FB" }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 110 }}
      >
        {/* ── Top Bar ── */}
        <View style={styles.topBar}>
          <View style={styles.logoWrap}>
            <Image
              source={images.mascotLogo}
              style={styles.logoImg}
              resizeMode="contain"
            />
          </View>

          <Text style={styles.appName}>Lingora</Text>

          <View style={styles.topRight}>
            <View style={styles.streakBadge}>
              <Ionicons name="flame" size={18} color={ORANGE} />
              <Text style={styles.streakNum}>12</Text>
            </View>
            <TouchableOpacity style={styles.notifBtn}>
              <Ionicons name="notifications-outline" size={22} color={DARK} />
              <View style={styles.notifDot} />
            </TouchableOpacity>
            <Image
              source={{
                uri: user?.imageUrl ?? "https://i.pravatar.cc/150?img=12",
              }}
              style={styles.avatar}
            />
          </View>
        </View>

        {/* ── Greeting + Mascot ── */}
        <View style={styles.greetingSection}>
          <View style={styles.greetingText}>
            <Text style={styles.greetHi}>{getGreeting()}</Text>
            <Text style={styles.greetName}>
              {firstName} <Text style={styles.emojiWave}>👋</Text>
            </Text>
            <Text style={styles.greetSub}>
              Ready for today&apos;s{"\n"}language mission?
            </Text>
          </View>

          {/* Speech bubbles */}
          <View style={styles.mascotCol}>
            <View style={styles.bubbleHola}>
              <Text style={styles.bubbleHolaText}>¡Hola!</Text>
            </View>
            <Image
              source={images.mascotWelcome}
              style={styles.mascotImg}
              resizeMode="contain"
            />
            <View style={styles.bubbleNi}>
              <Text style={styles.bubbleNiText}>你好!</Text>
            </View>
          </View>
          <View style={styles.bubbleHello}>
            <Text style={styles.bubbleHelloText}>Hello!</Text>
          </View>
        </View>

        {/* ── Hero Banner ── */}
        <View style={styles.heroWrap}>
          <LinearGradient
            colors={["#7B5FFF", "#5533E8"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.heroBanner}
          >
            {/* AI Powered pill */}
            <View style={styles.aiPill}>
              <Ionicons name="sparkles" size={11} color="#fff" />
              <Text style={styles.aiPillText}>AI Powered</Text>
            </View>

            <View style={styles.heroRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.heroTitle}>Start AI Conversation</Text>
                <Text style={styles.heroSub}>
                  Real conversations. Real progress.
                </Text>

                <View style={styles.heroFeatures}>
                  <View style={styles.heroFeatureItem}>
                    <Ionicons
                      name="color-wand"
                      size={13}
                      color="rgba(255,255,255,0.85)"
                    />
                    <Text style={styles.heroFeatureText}>
                      Real-time correction
                    </Text>
                  </View>
                  <View style={styles.heroFeatureItem}>
                    <Ionicons
                      name="pulse"
                      size={13}
                      color="rgba(255,255,255,0.85)"
                    />
                    <Text style={styles.heroFeatureText}>Voice chat</Text>
                  </View>
                  <View style={styles.heroFeatureItem}>
                    <Ionicons
                      name="stats-chart"
                      size={13}
                      color="rgba(255,255,255,0.85)"
                    />
                    <Text style={styles.heroFeatureText}>
                      Pronunciation feedback
                    </Text>
                  </View>
                </View>
              </View>

              <TouchableOpacity style={styles.heroCTA} activeOpacity={0.85}>
                <Ionicons name="chevron-forward" size={22} color={DARK} />
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </View>

        {/* ── Stats Row ── */}
        <View style={styles.statsCard}>
          {/* XP */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>XP Today</Text>
            <View style={styles.xpRing}>
              <Text style={styles.xpNum}>350</Text>
              <Text style={styles.xpDenom}>/500</Text>
            </View>
          </View>

          <View style={styles.statDivider} />

          {/* Streak */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Daily Streak</Text>
            <View style={styles.statValWrap}>
              <Ionicons name="flame" size={22} color={ORANGE} />
              <Text style={styles.statBig}>12</Text>
              <Text style={styles.statUnit}>days</Text>
            </View>
          </View>

          <View style={styles.statDivider} />

          {/* Words */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Words Learned</Text>
            <View style={styles.statValWrap}>
              <Ionicons name="book" size={20} color="#22C55E" />
              <Text style={styles.statBig}>28</Text>
              <Text style={styles.statUnit}>words</Text>
            </View>
          </View>

          <View style={styles.statDivider} />

          {/* Speaking */}
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Speaking Time</Text>
            <View style={styles.statValWrap}>
              <Ionicons name="mic" size={20} color="#3B82F6" />
              <Text style={styles.statBig}>18</Text>
              <Text style={styles.statUnit}>min</Text>
            </View>
          </View>
        </View>

        {/* ── Continue Learning ── */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Continue Learning</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>See all</Text>
              <Ionicons name="chevron-forward" size={13} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 20, gap: 14 }}
          >
            <LessonCard
              flag="🇪🇸"
              lang="Spanish Basics"
              pct={72}
              mins={12}
              bg="#FFFBEB"
              trackBg="#FEF3C7"
            />
            <LessonCard
              flag="🇺🇸"
              lang="English Fluency"
              pct={56}
              mins={18}
              bg="#F3F0FF"
              trackBg="#E0D4FF"
            />
            <LessonCard
              flag="🇯🇵"
              lang="Japanese Speaking"
              pct={38}
              mins={25}
              bg="#FEF2F2"
              trackBg="#FEE2E2"
            />
          </ScrollView>
        </View>

        {/* ── AI Tools ── */}
        <View style={[styles.section, { paddingHorizontal: 20 }]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>AI Tools</Text>
            <TouchableOpacity style={styles.seeAll}>
              <Text style={styles.seeAllText}>All tools</Text>
              <Ionicons name="chevron-forward" size={13} color="#94A3B8" />
            </TouchableOpacity>
          </View>

          {/* Row 1 */}
          <View style={styles.toolsRow}>
            <ToolCard
              icon={
                <MaterialCommunityIcons
                  name="robot-outline"
                  size={20}
                  color={PURPLE}
                />
              }
              iconBg="#F3E8FF"
              title="AI Tutor"
              sub="Personalized lessons"
            />
            <ToolCard
              icon={<Ionicons name="pulse" size={20} color="#4F46E5" />}
              iconBg="#EEF2FF"
              title="Pronunciation Scanner"
              sub="Speak & improve"
            />
            <ToolCard
              icon={
                <Ionicons
                  name="chatbubble-ellipses-outline"
                  size={20}
                  color="#10B981"
                />
              }
              iconBg="#ECFDF5"
              title="Live Conversation"
              sub="Talk with AI"
            />
          </View>

          {/* Row 2 */}
          <View style={[styles.toolsRow, { marginTop: 10 }]}>
            <ToolCard
              icon={<Ionicons name="book-outline" size={20} color="#22C55E" />}
              iconBg="#F0FDF4"
              title="Vocabulary Builder"
              sub="Expand words"
            />
            <ToolCard
              icon={<Ionicons name="pencil-outline" size={20} color={ORANGE} />}
              iconBg="#FFF7ED"
              title="Grammar Fixer"
              sub="Fix in one tap"
            />
            <ToolCard
              icon={<Ionicons name="mic-outline" size={20} color="#EF4444" />}
              iconBg="#FEF2F2"
              title="Voice Challenge"
              sub="Beat your best"
            />
          </View>
        </View>

        {/* ── Motivation Banner ── */}
        <View style={styles.motiBannerWrap}>
          <View style={styles.motiBanner}>
            <View style={{ flex: 1, paddingRight: 8 }}>
              <Text style={styles.motiLine1}>Small lessons</Text>
              <Text style={styles.motiLine1}>every day become</Text>
              <Text style={styles.motiAccent}>fluency. ✨</Text>
            </View>
            <Image
              source={images.mascotAuth}
              style={styles.motiMascot}
              resizeMode="contain"
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

/* ─── Sub-components ──────────────────────────────── */

function LessonCard({
  flag,
  lang,
  pct,
  mins,
  bg,
  trackBg,
}: {
  flag: string;
  lang: string;
  pct: number;
  mins: number;
  bg: string;
  trackBg: string;
}) {
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      style={[styles.lessonCard, { backgroundColor: bg }]}
    >
      <View style={styles.lessonCardTop}>
        <View style={styles.flagCircle}>
          <Text style={{ fontSize: 14 }}>{flag}</Text>
        </View>
        <Text style={styles.lessonLang} numberOfLines={2}>
          {lang}
        </Text>
      </View>
      <View style={[styles.progressTrack, { backgroundColor: trackBg }]}>
        <View
          style={[
            styles.progressFill,
            { width: `${pct}%` as ViewStyle["width"] },
          ]}
        />
      </View>
      <View style={styles.lessonCardBottom}>
        <Text style={styles.lessonMins}>{mins} mins left</Text>
        <Text style={styles.lessonPct}>{pct}%</Text>
      </View>
    </TouchableOpacity>
  );
}

function ToolCard({
  icon,
  iconBg,
  title,
  sub,
}: {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  sub: string;
}) {
  return (
    <TouchableOpacity activeOpacity={0.85} style={styles.toolCard}>
      <View style={[styles.toolIconWrap, { backgroundColor: iconBg }]}>
        {icon}
      </View>
      <Text style={styles.toolTitle} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.toolSub} numberOfLines={1}>
        {sub}
      </Text>
    </TouchableOpacity>
  );
}

/* ─── Styles ─────────────────────────────────────── */

const styles = StyleSheet.create({
  // Top bar
  topBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingTop: 6,
    paddingBottom: 10,
    backgroundColor: "#F7F7FB",
  },
  logoWrap: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  logoImg: { width: 26, height: 26 },
  appName: {
    fontSize: 20,
    fontWeight: "800",
    color: DARK,
    letterSpacing: -0.4,
  },
  topRight: { flexDirection: "row", alignItems: "center", gap: 12 },
  streakBadge: { flexDirection: "row", alignItems: "center", gap: 3 },
  streakNum: { color: ORANGE, fontWeight: "700", fontSize: 15 },
  notifBtn: { position: "relative" },
  notifDot: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#EF4444",
    borderWidth: 1.5,
    borderColor: "#F7F7FB",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: "#E2E8F0",
  },

  // Greeting
  greetingSection: {
    flexDirection: "row",
    paddingHorizontal: 20,
    paddingTop: 8,
    paddingBottom: 20,
    position: "relative",
    alignItems: "flex-end",
  },
  greetingText: { flex: 1, paddingRight: 10 },
  greetHi: {
    fontSize: 22,
    fontWeight: "700",
    color: DARK,
    letterSpacing: -0.3,
  },
  greetName: {
    fontSize: 32,
    fontWeight: "900",
    color: PURPLE,
    letterSpacing: -0.5,
    marginTop: 2,
  },
  emojiWave: { fontSize: 28 },
  greetSub: { fontSize: 13, color: "#94A3B8", marginTop: 6, lineHeight: 20 },

  mascotCol: { alignItems: "center", position: "relative" },
  mascotImg: { width: 140, height: 140, marginTop: -10 },

  bubbleHola: {
    backgroundColor: "#F3E8FF",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderBottomRightRadius: 4,
    alignSelf: "flex-end",
    marginRight: 10,
    marginBottom: -6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  bubbleHolaText: { color: PURPLE, fontWeight: "700", fontSize: 12 },

  bubbleNi: {
    backgroundColor: "#FFF4E5",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderBottomLeftRadius: 4,
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: -6,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 3,
    elevation: 2,
  },
  bubbleNiText: { color: ORANGE, fontWeight: "700", fontSize: 12 },

  bubbleHello: {
    position: "absolute",
    bottom: 60,
    right: 155,
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 14,
    borderBottomRightRadius: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  bubbleHelloText: { color: "#475569", fontWeight: "700", fontSize: 12 },

  // Hero banner
  heroWrap: { paddingHorizontal: 20, marginBottom: 18 },
  heroBanner: {
    borderRadius: 28,
    padding: 22,
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.35,
    shadowRadius: 20,
    elevation: 12,
  },
  aiPill: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "rgba(255,255,255,0.2)",
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 14,
  },
  aiPillText: { color: "#fff", fontSize: 11, fontWeight: "700" },
  heroRow: { flexDirection: "row", alignItems: "flex-end" },
  heroTitle: {
    color: "#fff",
    fontSize: 22,
    fontWeight: "900",
    letterSpacing: -0.3,
    marginBottom: 4,
  },
  heroSub: {
    color: "rgba(255,255,255,0.75)",
    fontSize: 13,
    fontWeight: "500",
    marginBottom: 16,
  },
  heroFeatures: { gap: 6 },
  heroFeatureItem: { flexDirection: "row", alignItems: "center", gap: 6 },
  heroFeatureText: {
    color: "rgba(255,255,255,0.85)",
    fontSize: 11,
    fontWeight: "500",
  },
  heroCTA: {
    width: 46,
    height: 46,
    borderRadius: 23,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 12,
    alignSelf: "flex-end",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
  },

  // Stats
  statsCard: {
    marginHorizontal: 20,
    marginBottom: 20,
    backgroundColor: "#fff",
    borderRadius: 22,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 18,
    paddingHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
    elevation: 4,
  },
  statItem: { flex: 1, alignItems: "center", gap: 8 },
  statLabel: {
    fontSize: 9,
    fontWeight: "700",
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 0.3,
    textAlign: "center",
  },
  xpRing: {
    width: 54,
    height: 54,
    borderRadius: 27,
    borderWidth: 4,
    borderColor: PURPLE,
    alignItems: "center",
    justifyContent: "center",
  },
  xpNum: { fontSize: 16, fontWeight: "900", color: DARK },
  xpDenom: { fontSize: 8, fontWeight: "700", color: "#94A3B8", marginTop: -2 },
  statValWrap: { alignItems: "center", gap: 2 },
  statBig: { fontSize: 18, fontWeight: "900", color: DARK },
  statUnit: { fontSize: 9, color: "#94A3B8", fontWeight: "600" },
  statDivider: { width: 1, height: 44, backgroundColor: "#F1F5F9" },

  // Section
  section: { marginBottom: 20 },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginBottom: 14,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "800",
    color: DARK,
    letterSpacing: -0.3,
  },
  seeAll: { flexDirection: "row", alignItems: "center", gap: 2 },
  seeAllText: { fontSize: 13, color: "#94A3B8", fontWeight: "500" },

  // Lesson cards
  lessonCard: {
    width: 148,
    borderRadius: 22,
    padding: 14,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 2,
  },
  lessonCardTop: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 14,
  },
  flagCircle: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 3,
    elevation: 2,
  },
  lessonLang: {
    flex: 1,
    fontSize: 12,
    fontWeight: "700",
    color: DARK,
    lineHeight: 16,
  },
  progressTrack: {
    height: 5,
    borderRadius: 3,
    marginBottom: 8,
    overflow: "hidden",
  },
  progressFill: { height: "100%", backgroundColor: PURPLE, borderRadius: 3 },
  lessonCardBottom: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  lessonMins: { fontSize: 10, color: "#64748B", fontWeight: "500" },
  lessonPct: { fontSize: 10, color: PURPLE, fontWeight: "700" },

  // Tool cards
  toolsRow: { flexDirection: "row", gap: 10 },
  toolCard: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 12,
    alignItems: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 2,
  },
  toolIconWrap: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  toolTitle: {
    fontSize: 11,
    fontWeight: "700",
    color: DARK,
    lineHeight: 15,
    marginBottom: 2,
  },
  toolSub: { fontSize: 9, color: "#94A3B8", fontWeight: "500" },

  // Motivation banner
  motiBannerWrap: { paddingHorizontal: 20 },
  motiBanner: {
    backgroundColor: "#F0EBFF",
    borderRadius: 24,
    padding: 22,
    flexDirection: "row",
    alignItems: "flex-end",
    overflow: "hidden",
    shadowColor: PURPLE,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  motiLine1: {
    fontSize: 17,
    fontWeight: "800",
    color: DARK,
    lineHeight: 26,
    letterSpacing: -0.2,
  },
  motiAccent: {
    fontSize: 17,
    fontWeight: "800",
    color: PURPLE,
    lineHeight: 26,
    letterSpacing: -0.2,
  },
  motiMascot: { width: 110, height: 110, marginBottom: -22, marginRight: -10 },
});
