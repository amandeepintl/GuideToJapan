// ============================================================
// JAPAN ETIQUETTE RULEBOOK — COMPLETE DATA
// Source 1: rules.txt — GuideToJapan Etiquette Guide
// Source 2: search.txt — Cultural Semiotics & Anthropological Analysis
// ALL rules from BOTH documents are included below.
// ============================================================

const CATEGORIES = [
  { id: "dining",    name: "Dining & Chopsticks",    emoji: "🍽️", kanji: "食", description: "Eating out, chopstick rules, sushi, rice, and table etiquette" },
  { id: "drinking",  name: "Drinking Etiquette",     emoji: "🍶", kanji: "飲", description: "Sake, beer, toasting, izakaya customs, and kanpai culture" },
  { id: "transport", name: "Transport & Streets",    emoji: "🚂", kanji: "駅", description: "Trains, buses, escalators, Shinkansen, taxis, cycling, and street rules" },
  { id: "shrines",   name: "Shrines & Temples",      emoji: "⛩️", kanji: "神", description: "How to behave at Shinto shrines and Buddhist temples" },
  { id: "onsen",     name: "Onsen & Public Baths",   emoji: "♨️", kanji: "湯", description: "Hot spring and sento etiquette — the complete cleansing ritual" },
  { id: "business",  name: "Business & Greetings",   emoji: "💼", kanji: "礼", description: "Bowing, business cards, seating hierarchy, and professional culture" },
  { id: "shoes",     name: "Shoes & Indoor Rules",   emoji: "👟", kanji: "脱", description: "Genkan entry, slipper protocols, tatami rules, and castle floors" },
  { id: "money",     name: "Money & Shopping",       emoji: "💴", kanji: "円", description: "Payment trays, tipping, konbini customs, fitting rooms, and receipts" },
  { id: "digital",   name: "Phones & Noise",         emoji: "📱", kanji: "静", description: "Manner mode, phone calls, photography, masks, and noise etiquette" },
  { id: "gifts",     name: "Gifts & Gift-Giving",    emoji: "🎁", kanji: "贈", description: "Omiyage, gift envelopes, mizuhiki knots, seasonal gifting" },
  { id: "hotel",     name: "Hotels & Ryokan",        emoji: "🏨", kanji: "宿", description: "Yukata rules, futon, suitcases, tokonoma, and capsule hotel silence" },
  { id: "social",    name: "Social & Public Life",   emoji: "🎤", kanji: "社", description: "Karaoke, gestures, body language, laundromat, and park rules" }
];

// severity: "critical" | "important" | "normal"
// type: "do" | "dont" | "know"
const RULES = [

  // ============================================================
  // 🍽️ DINING & CHOPSTICKS
  // ============================================================
  {
    id: "d-1", category: "dining", severity: "critical", type: "dont",
    title: "Never stick chopsticks vertically into a bowl of rice",
    description: "This is the single most serious dining taboo in Japan. Standing chopsticks upright in rice mimics the <strong>tsukitatebashi</strong> funeral rite — how incense sticks are placed in offerings to the deceased. Japanese people may be genuinely alarmed and may leave the table. When not in use, rest chopsticks <em>horizontally</em> on the chopstick rest (hashioki 箸置き).",
    warning: "Even doing this accidentally can make Japanese people visibly distressed. This is the #1 chopstick rule.",
    phrase: { jp: "箸置きはありますか？", romaji: "Hashioki wa arimasu ka?", en: "Do you have a chopstick rest?" }
  },
  {
    id: "d-2", category: "dining", severity: "critical", type: "dont",
    title: "Never pass food chopstick-to-chopstick",
    description: "Passing food directly from your chopsticks to another person's chopsticks directly mimics the <strong>hiroi-bashi</strong> ritual — where family members pass the cremated bones of the deceased from one person to another at a funeral. It is one of the most deeply offensive things you can do at a Japanese meal. To share food, pick it up and place it <em>directly onto their plate</em>.",
    warning: "Considered the second most critical chopstick taboo. Even if done accidentally, always apologize immediately."
  },
  {
    id: "d-3", category: "dining", severity: "important", type: "dont",
    title: "Never point, wave, or spear food with chopsticks",
    description: "Using chopsticks to point at people or objects is aggressive and rude. Waving your chopsticks around while talking is also bad manners. Spearing food like a fork is considered crude — if food is slippery, practice a controlled pinching motion instead.",
    tip: "Avoid <strong>mayoi-bashi</strong> (mayoi = hesitating) — hovering chopsticks indecisively over dishes signals greed. Decide before you reach."
  },
  {
    id: "d-4", category: "dining", severity: "important", type: "dont",
    title: "Never allow sauce to drip from your chopsticks (namida-bashi)",
    description: "<strong>Namida-bashi</strong> (涙箸, 'tearful chopsticks') means allowing liquid or sauce to drip from your chopsticks back into a communal bowl or onto the table. This is considered unclean and disrespectful to shared food.",
  },
  {
    id: "d-5", category: "dining", severity: "normal", type: "dont",
    title: "Never rub disposable chopsticks together to remove splinters",
    description: "When you receive <strong>waribashi</strong> (disposable wooden chopsticks), rubbing them together to smooth splinters implies the restaurant provides cheap, low-quality utensils — a direct insult to the establishment. If there's a splinter, pick it off quietly with your fingers.",
  },
  {
    id: "d-6", category: "dining", severity: "important", type: "do",
    title: "Use the clean (reverse) end of chopsticks for communal dishes",
    description: "When retrieving food from a shared dish, use the <em>reverse, clean end</em> of your chopsticks — the end that has not been in your mouth. Even better, use the dedicated serving chopsticks provided. This is basic hygiene etiquette at every shared Japanese meal.",
    tip: "At hot pot (shabu-shabu) or yakiniku, separate cooking and eating chopsticks are usually provided automatically."
  },
  {
    id: "d-7", category: "dining", severity: "important", type: "do",
    title: "Lift small bowls when eating — never hunch over them",
    description: "In Japan, small bowls (rice bowls / ochawan, miso soup bowls / owan) must be lifted in your non-dominant hand and held close to your chest or mouth when eating. Leaving the bowl on the table and hunching over to eat is called <strong>inugui</strong> (犬食い, 'dog-eating') and is considered very poor manners. However, large plates — tempura, grilled fish, sashimi — must <em>never</em> be lifted.",
    warning: "Resting elbows on the table, or propping your chin up with your hand while eating, is also considered sloppy and childish."
  },
  {
    id: "d-8", category: "dining", severity: "important", type: "dont",
    title: "Don't pour soy sauce directly over plain white rice",
    description: "Plain white rice in Japan is meant to be savored on its own. Japan's rice quality is extremely high, and pouring soy sauce over it masks those delicate flavors while disrupting the balance of other dishes. Use the small side dish for soy sauce and dip your food into it — never pour it over the rice.",
    tip: "The same applies to sashimi — pour a small amount into the side dish and dip lightly. Never drown it."
  },
  {
    id: "d-9", category: "dining", severity: "important", type: "do",
    title: "Say 'Itadakimasu' before every meal",
    description: "<strong>Itadakimasu</strong> (いただきます, 'I humbly receive') is said before every meal to express gratitude — for the food, the cooking, the ingredients, and the lives of plants and animals that made it possible. Clasp your hands together briefly as you say it. This is one of the most beautiful expressions of mindfulness in Japanese culture and deeply appreciated when visitors participate.",
    phrase: { jp: "いただきます", romaji: "Itadakimasu", en: "I humbly receive (said before eating)" }
  },
  {
    id: "d-10", category: "dining", severity: "important", type: "do",
    title: "Say 'Gochisousama deshita' after every meal",
    description: "<strong>Gochisousama deshita</strong> (ごちそうさまでした, 'It was a feast') is said after finishing a meal. Press your palms together briefly as you say it. It can also be used as a polite signal to call for the bill — it implies you are done and ready to leave.",
    phrase: { jp: "ごちそうさまでした", romaji: "Gochisousama deshita", en: "Thank you for the meal (said after eating)" }
  },
  {
    id: "d-11", category: "dining", severity: "normal", type: "know",
    title: "Use the oshibori wet towel for hands only — never for your face",
    description: "Japanese restaurants provide a <strong>oshibori</strong> (wet towel) — warm in winter, cool in summer. It is strictly for cleaning your hands before eating. Never use it to wipe your face, neck, or arms. At high-end restaurants with raw hinoki (cypress) wood counters, never place a wet, folded oshibori directly on the wood — moisture permanently warps the expensive grain. Always return it to its tray (oshibori-oki).",
  },
  {
    id: "d-12", category: "dining", severity: "normal", type: "know",
    title: "Slurping noodles is encouraged — but don't overdo it",
    description: "Unlike Western cultures, slurping ramen, soba, or udon noodles is completely normal and seen as a sign of appreciation. Slurping slightly cools the hot noodles and aerates them, believed to enhance flavor. However, younger generations have coined the term <strong>noo-hara</strong> (ヌーハラ, 'noodle harassment') for excessively theatrical slurping. Natural and happy slurping = great. Performing loudly to be noticed = not so great.",
  },
  {
    id: "d-13", category: "dining", severity: "important", type: "know",
    title: "Sushi: dip the fish side in soy sauce — never the rice",
    description: "When eating nigiri sushi, turn the piece upside down and dip only the <em>fish (neta)</em> side lightly into soy sauce. This prevents the rice from absorbing too much and falling apart. Sushi can be eaten with chopsticks or your fingers — both are perfectly acceptable. Each piece is designed to be eaten in one bite.",
    warning: "At high-end sushi counters: never mix wasabi into your soy sauce. The chef has already applied the correct amount of wasabi — mixing it insults the chef's carefully calibrated flavor balance."
  },
  {
    id: "d-14", category: "dining", severity: "normal", type: "dont",
    title: "Don't over-order — food waste is disrespectful",
    description: "Wasting food in Japan is considered disrespectful — especially wasting rice, which carries deep cultural significance. Order what you can reasonably finish. If unsure of portion sizes, start with less and add more. You don't have to force yourself when full, but ordering mindfully is always appreciated.",
  },
  {
    id: "d-15", category: "dining", severity: "important", type: "dont",
    title: "Don't eat while walking (except at festivals)",
    description: "Eating while walking down the street is generally frowned upon as untidy and disrespectful to public spaces. The exception is <strong>matsuri</strong> (festival) food stalls — eating takoyaki or yakitori while strolling is part of festival culture. For regular takeaway food, stand near the shop or find a park bench.",
    tip: "Convenience store food is fine to eat standing right outside the store next to its bins."
  },
  {
    id: "d-16", category: "dining", severity: "important", type: "know",
    title: "High-end sushi counter: no perfume, no putting hard items on the counter",
    description: "At traditional sushi counters (sushi-ya), guests must not wear strong perfume, cologne, or scented lotions — the aroma of fresh fish and vinegared rice (shari) is half the sensory experience, and strong scents ruin it for the chef and other diners. Also, never place bare smartphones, heavy keys, or cameras directly onto the unvarnished hinoki wood counter — it scratches and stains the precious material.",
  },
  {
    id: "d-17", category: "dining", severity: "normal", type: "know",
    title: "Tea ceremony: rotate the bowl clockwise before drinking, then back",
    description: "At a traditional matcha tea ceremony, the host presents the bowl (chawan) with the most beautiful 'front' design facing you. Before drinking: pick up with your right hand, rest on your left palm, rotate it clockwise <em>twice</em> so your lips don't touch the front. After drinking: rotate it counter-clockwise to restore the front, then admire the bowl briefly with your elbows resting on your knees.",
  },
  {
    id: "d-18", category: "dining", severity: "normal", type: "know",
    title: "Wet coaster rule: don't move your glass off its coaster",
    description: "At coffee shops or bars, if your cold drink is served on a paper or cloth coaster, leave it on the coaster. Moving the glass off and letting condensation drip directly onto a polished wooden bar counter is considered careless and disrespectful to the establishment.",
  },

  // ============================================================
  // 🍶 DRINKING ETIQUETTE
  // ============================================================
  {
    id: "dr-1", category: "drinking", severity: "critical", type: "dont",
    title: "Never pour your own drink from a shared bottle",
    description: "This is one of Japan's deepest social bonding rituals. When sharing beer, sake, or any bottle, you must <em>never pour your own glass</em>. Always pour for everyone else first, then wait for someone to notice your empty glass and pour for you. This reciprocal act of caring for others is a cornerstone of Japanese social bonding. To subtly signal you'd like a refill: finish your last sip and hold your glass up with both hands rather than putting it down.",
    tip: "When someone pours for you, hold your glass with one or both hands as a sign of respect — never leave it flat on the table while being poured for.",
    phrase: { jp: "かんぱい！", romaji: "Kanpai!", en: "Cheers!" }
  },
  {
    id: "dr-2", category: "drinking", severity: "important", type: "do",
    title: "Wait for the 'Kanpai!' toast before drinking",
    description: "Before the first sip, it is customary for everyone to raise their glasses and toast with <strong>Kanpai!</strong> (かんぱい). Everyone at the table must have their drink in hand. Do not start drinking before the toast — it's a sign of impatience and disrespect to the group.",
    phrase: { jp: "かんぱい！", romaji: "Kanpai!", en: "Cheers!" }
  },
  {
    id: "dr-3", category: "drinking", severity: "normal", type: "do",
    title: "Pour with both hands and receive with both hands",
    description: "When pouring a drink for someone else, hold the bottle with both hands as a sign of respect. The person being poured for should support their glass with one or both hands. This mutual exchange of care through the act of pouring is a defining feature of Japanese social culture, especially in professional and formal settings.",
  },
  {
    id: "dr-4", category: "drinking", severity: "important", type: "know",
    title: "The 'Otoshi' — mandatory cover charge at izakaya",
    description: "When you sit down at most izakaya (Japanese pubs), a small dish of food (<strong>otoshi</strong>) is placed on your table immediately. This is NOT a free gift — it is a mandatory seating charge (usually ¥300–¥500 per person) that will appear on your final bill. You cannot refuse it or send it back. Simply enjoy it as part of the experience.",
    warning: "Many tourists are surprised by this charge at the end of the night. Always factor it in when budgeting for a night out."
  },
  {
    id: "dr-5", category: "drinking", severity: "normal", type: "know",
    title: "Split the bill equally in group settings (Warikan)",
    description: "In Japan, groups often split the bill equally (<strong>warikan</strong>, 割り勘) regardless of exactly what each person ordered. Because of this, people are mindful when ordering, choosing dishes of similar price range. Many izakaya offer all-you-can-drink packages (nomi-hodai) specifically for this group dynamic.",
  },
  {
    id: "dr-6", category: "drinking", severity: "critical", type: "dont",
    title: "Never tip — anywhere, ever",
    description: "Tipping is not practiced in Japan. Leaving cash on the table will result in staff chasing you down the street thinking you forgot your change. It can be seen as condescending. The price always includes all service. If you want to thank someone extraordinary (a ryokan attendant, a private guide), there is a formal gift-giving protocol using an envelope — see the Gifts section.",
    warning: "This applies to restaurants, taxis, hotels, and all service industries. Never tip."
  },

  // ============================================================
  // 🚂 TRANSPORT & STREETS
  // ============================================================
  {
    id: "tr-1", category: "transport", severity: "critical", type: "do",
    title: "Switch phone to 'Manner Mode' (silent) on all public transit",
    description: "The moment you board any train, subway, or bus in Japan, switch your phone to <strong>Manner Mode</strong> (マナーモード — completely silent/vibrate). No ringtones, no audio without headphones, no phone calls in the passenger cabin. On long-distance Shinkansen, if you must take an urgent call, physically stand up, walk to the vestibule area between carriages, and speak there. Never call from your seat.",
    warning: "Breaking this rule draws visible, uncomfortable stares from every person around you. The quiet atmosphere is genuinely sacred to Japanese commuters."
  },
  {
    id: "tr-2", category: "transport", severity: "important", type: "dont",
    title: "Don't eat or drink on local commuter trains",
    description: "Eating and drinking on local commuter trains is heavily frowned upon. This is different from Shinkansen (bullet trains) where eating a bento box is perfectly normal and part of the travel experience. On Tokyo's Yamanote line, Osaka's subway, or any city bus — keep all food packed away. A closed water bottle is acceptable on most trains.",
    tip: "On Shinkansen, eating is fine but avoid hot, pungent, or heavily spiced food that overwhelms the enclosed carriage."
  },
  {
    id: "tr-3", category: "transport", severity: "important", type: "do",
    title: "Wear your backpack on your front in crowded train cars",
    description: "When boarding a crowded train, remove your backpack and hold it on your front chest or place it at your feet. A backpack on your back means you'll accidentally hit people every time you turn around in a tight space. Additionally, never place bags on the seat next to you — even in an empty train. Bags belong on your lap, between your feet, or in the overhead rack.",
  },
  {
    id: "tr-4", category: "transport", severity: "normal", type: "do",
    title: "Escalator rules: stand left in Tokyo, right in Osaka — but check for 'No Walking' signs",
    description: "In <strong>Tokyo (Kanto)</strong>, stand on the left; leave the right side for people who want to walk. In <strong>Osaka (Kansai)</strong>, stand on the right; leave the left side free. However, a nationwide shift is underway — many major stations now implement a <strong>'No Walking' rule</strong> on escalators for safety. Look for signs showing footprints with a red slash through them — when you see this, stand still on both sides.",
    warning: "❗ Getting this wrong in Osaka (standing on the left) can cause real friction with frustrated commuters."
  },
  {
    id: "tr-5", category: "transport", severity: "important", type: "do",
    title: "Stand inside the yellow border lines on escalators",
    description: "When stepping onto an escalator, make sure your feet are entirely inside the painted yellow border lines on the step. Stepping on or over the yellow borders can trigger automated warning announcements at major stations and is viewed as careless behavior.",
  },
  {
    id: "tr-6", category: "transport", severity: "important", type: "do",
    title: "Let passengers exit before boarding trains",
    description: "When train doors open, always let passengers exit first before boarding. The painted platform queuing lines are formalized — commuters line up within them strictly in arrival order. When the train arrives, the queue naturally splits left and right to let arriving passengers step off through the center first.",
  },
  {
    id: "tr-7", category: "transport", severity: "important", type: "dont",
    title: "Jaywalking is illegal and can result in fines up to ¥50,000",
    description: "Crossing the road outside a crosswalk or against a red pedestrian light is illegal in Japan. Fines can reach ¥50,000, and in extreme cases up to 3 months in prison. Critically, even on narrow, completely empty roads, Japanese locals still wait for the green light. Follow their lead — always wait.",
    warning: "Fine up to ¥50,000 applies. Even when the road is empty, wait for the green pedestrian light."
  },
  {
    id: "tr-8", category: "transport", severity: "important", type: "do",
    title: "Offer your seat to elderly, pregnant, or disabled passengers",
    description: "Trains and buses have Priority Seats (優先席) for elderly, pregnant, or disabled passengers. If you sit in one and someone who needs it boards, give it up. Also look for the <strong>Help Mark</strong> — a red tag with a white cross on someone's bag. Anyone wearing this has a non-visible disability (chronic pain, heart condition, etc.) and should always be offered a seat.",
  },
  {
    id: "tr-9", category: "transport", severity: "important", type: "dont",
    title: "Don't enter Women-Only carriages if you're a man (during rush hour)",
    description: "Many train lines run Women-Only carriages (女性専用車両) during rush hours. They are marked with pink signs on the platform and train windows. These exist to combat sexual harassment on crowded trains. Male travelers must avoid these carriages during rush hours. Exception: elementary school-aged boys and passengers with disabilities may use them.",
  },
  {
    id: "tr-10", category: "transport", severity: "normal", type: "know",
    title: "Taxi doors are automatic — never touch them",
    description: "Japanese taxis have completely automated doors controlled by the driver via a hydraulic lever. When a taxi pulls up, stand back and let the door swing open. When you exit, simply step out — the driver closes the door. Never try to manually open or close a Japanese taxi door. Slamming it can damage the mechanism and will startle the driver.",
  },
  {
    id: "tr-11", category: "transport", severity: "important", type: "do",
    title: "Carry your trash — public bins are almost nonexistent",
    description: "Japan is immaculately clean despite having almost no public trash cans. Carry a small plastic bag for wrappers, receipts, and food packaging. The only public bins are next to vending machines — strictly for bottles and cans only. Stuffing food packaging into vending machine bins is considered very rude.",
    tip: "Convenience stores (konbini) have bins for items they sell. Buy a drink there and you'll gain bin access."
  },
  {
    id: "tr-12", category: "transport", severity: "important", type: "dont",
    title: "No smoking while walking on public streets",
    description: "Smoking while walking is banned in most major city wards to prevent accidentally burning passersby, especially children. Smokers must use designated, enclosed smoking pods (喫煙所). Even in non-banned areas, smoking while moving is heavily frowned upon.",
  },
  {
    id: "tr-13", category: "transport", severity: "normal", type: "know",
    title: "Umbrella etiquette: always point it straight down, not horizontal",
    description: "Never carry a long umbrella horizontally tucked under your arm like a baton — the sharp tip sticks out behind you and can easily poke a child or shorter person walking close behind. Always carry it pointed straight down. On rainy days entering shops, look for umbrella sleeve dispensers or buckets at the entrance — walking in with a dripping umbrella makes floors dangerously slippery.",
  },
  {
    id: "tr-14", category: "transport", severity: "normal", type: "know",
    title: "Mark your clear vinyl umbrella to avoid mix-ups",
    description: "Most locals carry identical cheap clear vinyl umbrellas from convenience stores (¥500–¥800). Because they look exactly the same, they are frequently taken by mistake from entry stands (kasatate). If you use one, wrap a distinct piece of colored tape or a rubber band around your handle to identify it immediately.",
  },
  {
    id: "tr-15", category: "transport", severity: "normal", type: "do",
    title: "Shinkansen: ask before reclining your seat",
    description: "Before pressing the recline button on a Shinkansen seat, turn around, make eye contact with the person behind you, bow slightly, and ask: <strong>'Sumimasen, taoshitemo ii desu ka?'</strong> (Excuse me, may I recline my seat?). This small act of consideration is universally appreciated.",
    phrase: { jp: "すみません、倒してもいいですか？", romaji: "Sumimasen, taoshitemo ii desu ka?", en: "Excuse me, may I recline my seat?" }
  },
  {
    id: "tr-16", category: "transport", severity: "important", type: "know",
    title: "Shinkansen: pre-book if your suitcase is over 160cm combined dimensions",
    description: "If your suitcase's combined length + width + height is between 160cm and 250cm, you cannot just carry it on. You must pre-book a seat with an 'Oversized Luggage Area' (last row of the carriage) when purchasing your ticket. Boarding without this reservation results in a ¥1,000 penalty and staff relocating your bag.",
  },
  {
    id: "tr-17", category: "transport", severity: "important", type: "know",
    title: "Shinkansen: carry trash off the train — don't stuff it in seatback pockets",
    description: "Eating bento boxes (ekiben) is perfectly normal on the Shinkansen. However, never leave empty boxes, plastic bottles, or food wrappers in the fabric seatback pocket when you exit. Carry your trash off the train and dispose of it in the specialized platform bins (separated into burnables, PET bottles, and aluminum cans).",
  },
  {
    id: "tr-18", category: "transport", severity: "normal", type: "know",
    title: "IC card readers are always on the right side of the turnstile",
    description: "When rushing through train station gates, the IC card reader (for Suica or Pasmo) is always on the <em>right-hand side</em> of the slot. Tapping with your left hand forces an awkward reach across your body and frequently causes tourists to block the fast-moving queue behind them.",
  },
  {
    id: "tr-19", category: "transport", severity: "normal", type: "know",
    title: "Bus boarding: different systems in Tokyo vs. Kyoto",
    description: "City buses use two different regional payment systems. <strong>Tokyo (Kanto)</strong>: board through the front door, tap your IC card or pay cash immediately at a flat rate, exit through the rear door. <strong>Kyoto/Kansai</strong>: board through the rear door, take a numbered ticket (seiriken), then when exiting through the front door, check the fare board above the driver and pay the correct amount.",
  },
  {
    id: "tr-20", category: "transport", severity: "normal", type: "dont",
    title: "Don't text while walking (aruki-suma)",
    description: "Walking down a busy train platform or crowded sidewalk while staring at your phone is known as <strong>aruki-suma</strong> (歩きスマホ) and is heavily frowned upon. If you need to check maps or reply to a message, step fully to the side, stand against a wall, complete your task, and then resume walking.",
  },
  {
    id: "tr-21", category: "transport", severity: "important", type: "know",
    title: "Bicycle parking: always use designated lots — or face towing",
    description: "Bicycle rental is popular in cities like Kyoto and Tokyo, but you cannot leave a bike on a sidewalk or near a shop. Enforcement officers in green uniforms patrol streets — illegally parked bikes are locked or towed onto flatbed trucks. Always use designated bicycle parking lots (駐輪場 churinchijo) — metal slot systems where the front wheel locks. First 30–60 minutes are usually free, then ¥100–¥200.",
  },
  {
    id: "tr-22", category: "transport", severity: "important", type: "dont",
    title: "No parallel cycling, umbrella cycling, or cycling with a phone",
    description: "When renting a bicycle, it is illegal to ride side-by-side with a friend blocking the path, ride while holding an open umbrella, or use a mobile phone while cycling. Police regularly issue warnings and fines for these violations.",
  },
  {
    id: "tr-23", category: "transport", severity: "normal", type: "know",
    title: "Contactless payment: hold your card until you hear the double-tone chime",
    description: "When paying with Apple Wallet, Google Wallet, or a physical IC card at vending machines or stores, hold your device flat against the reader until you hear the distinct double-toned chime (<em>pi-pip!</em>). Pulling away too quickly while processing creates an electronic stall, requiring the cashier to manually reset the system — holding up fast-moving queues.",
  },

  // ============================================================
  // ⛩️ SHRINES & TEMPLES
  // ============================================================
  {
    id: "sh-1", category: "shrines", severity: "important", type: "do",
    title: "Bow before passing through the torii gate",
    description: "The <strong>torii gate</strong> (鳥居) marks the sacred boundary between the everyday world and the realm of the gods. When approaching, pause and bow once before stepping through. As you walk through, walk along the <em>sides</em> of the path — the center lane is traditionally reserved for the transit of deities. Bow again when exiting as a final act of respect.",
  },
  {
    id: "sh-2", category: "shrines", severity: "important", type: "do",
    title: "Purify hands and mouth at the temizuya water basin",
    description: "Before approaching the main altar, purify yourself at the stone water basin (<strong>temizuya</strong>). The exact sequence: (1) Hold ladle in right hand, scoop water, pour over your left hand to rinse it. (2) Switch ladle to left hand, pour over right hand. (3) Scoop water into cupped left palm and rinse your mouth — spit out beside the basin. Never drink directly from the ladle. (4) Tilt ladle vertically so water runs down the handle to clean it, place it face-down.",
    warning: "Never pour the leftover water back into the basin — let it fall to the ground instead."
  },
  {
    id: "sh-3", category: "shrines", severity: "important", type: "do",
    title: "How to pray at a Shinto shrine: 2 bows, 2 claps, 1 bow",
    description: "The correct sequence for a Shinto shrine (jinja): (1) Toss a coin into the offering box — a ¥5 coin is especially lucky because 'go-en' sounds like 'fate' or 'connection.' (2) Ring the bell by pulling the rope. (3) <strong>Bow twice deeply.</strong> (4) <strong>Clap twice</strong> to summon the deity's attention. (5) Pray silently with hands pressed together. (6) <strong>Bow once more</strong> to close.",
    warning: "⚠️ This clapping sequence is exclusive to Shinto shrines. At Buddhist temples, clapping is strictly forbidden."
  },
  {
    id: "sh-4", category: "shrines", severity: "important", type: "do",
    title: "How to pray at a Buddhist temple: bow with hands pressed — NO clapping",
    description: "Buddhist temples (otera) have a completely different prayer protocol: (1) Toss a coin into the offering box. (2) Bow once with your hands pressed together (gassho — prayer hands). (3) Pray silently. (4) Bow once more. <strong>There is absolutely no clapping at a Buddhist temple.</strong> Clapping is a Shinto gesture and is inappropriate and disrespectful in a Buddhist context.",
    warning: "This is one of the most commonly confused rules by visitors. Shrine = clap. Temple = never clap."
  },
  {
    id: "sh-5", category: "shrines", severity: "critical", type: "dont",
    title: "Respect 撮影禁止 (No Photography) signs inside sacred spaces",
    description: "While photographing shrine architecture and temple gardens is generally fine, watch for signs reading <strong>撮影禁止</strong> (No Photography). These appear inside altar rooms, temple interiors, and Zen rock gardens where ancient scrolls and sacred statues reside. Photography here is considered deeply intrusive to the spiritual sanctity of the space.",
    warning: "In Kyoto's private geisha districts, there are now legal fines for photographing people without their consent."
  },
  {
    id: "sh-6", category: "shrines", severity: "normal", type: "dont",
    title: "Never open your omamori protective amulet",
    description: "If you purchase an <strong>omamori</strong> (おまもり, embroidered protective amulet) from a shrine or temple, never open the small fabric pouch — looking inside destroys its protective power. They also have a one-year lifespan. After a year, don't throw it in household trash — return it to a designated burning box (koshofuda-osamerudokoro) at a shrine or temple for ritual disposal by priests.",
  },
  {
    id: "sh-7", category: "shrines", severity: "normal", type: "do",
    title: "Walk on the sides of the stone path — center is for deities",
    description: "At Shinto shrines, the main stone path (sandō) from the torii gate to the main hall has its center lane reserved for the transit of deities. Visitors must walk along the sides, leaving the center clear.",
  },
  {
    id: "sh-8", category: "shrines", severity: "normal", type: "know",
    title: "Buddhist temples: also stand in the incense smoke for purification",
    description: "At many Buddhist temples, there is a large incense burner near the entrance. Visitors are encouraged to stand in the smoke and fan it over their body — especially their head. This is an additional purification ritual that Shinto shrines do not have.",
  },
  {
    id: "sh-9", category: "shrines", severity: "normal", type: "do",
    title: "Bow once more as you exit through the torii gate",
    description: "As you leave a shrine through the torii gate, turn back toward the shrine and bow one final time. This shows respect and gratitude to the deities for allowing your visit.",
  },

  // ============================================================
  // ♨️ ONSEN & PUBLIC BATHS
  // ============================================================
  {
    id: "on-1", category: "onsen", severity: "critical", type: "do",
    title: "Wash yourself completely before entering the bath water",
    description: "This is the single most important onsen rule. The communal bath water is purely for soaking and relaxation — not for washing. Every establishment has a dedicated washing area with plastic stools, shower stations, soap, shampoo, and conditioner. Sit on the stool and scrub your entire body thoroughly, rinsing off every trace of soap before approaching the bath.",
    warning: "Entering the bath without fully washing is a serious breach and will draw immediate reactions from other bathers."
  },
  {
    id: "on-2", category: "onsen", severity: "important", type: "dont",
    title: "Never let your modesty towel touch the bath water",
    description: "Your small modesty towel must never enter the bath water. While soaking, fold it and balance it on top of your head (traditional and completely normal!) or rest it on the dry edge of the bath. Also: only submerge up to your shoulders — your hair must never dip into the communal water. If you have long hair, tie it up securely before getting in.",
  },
  {
    id: "on-3", category: "onsen", severity: "important", type: "do",
    title: "Enter the correct gender side",
    description: "Most onsen and sento are split by gender. The <strong>male side (男湯)</strong> has a blue curtain with the kanji 男 (man). The <strong>female side (女湯)</strong> has a red curtain with the kanji 女 (woman). If in any doubt, ask staff before entering.",
  },
  {
    id: "on-4", category: "onsen", severity: "normal", type: "know",
    title: "No clothing, swimwear, or underwear in the bathing area",
    description: "Unlike some Western countries, Japanese onsen and sento require complete nudity in the bathing area. Swimwear and underwear are not permitted — they introduce soap, chemicals, and contaminants into the shared water. The only item you carry into the bathing area is your small modesty towel.",
  },
  {
    id: "on-5", category: "onsen", severity: "important", type: "do",
    title: "Pour a few scoops of water over yourself before entering each new bath",
    description: "Most baths have a small bucket or scoop on the edge. Before stepping into any bath, pour a few scoops of the bath water over your body. This helps acclimatize your body to the temperature and also prevents you from carrying water from one bath into another.",
  },
  {
    id: "on-6", category: "onsen", severity: "important", type: "do",
    title: "Reset your shower station for the next person",
    description: "After washing at your shower station, perform a cleanup reset: rinse off the plastic stool and bucket, turn the showerhead back down to face the wall or floor, and return any lever faucets to their default (off) position. This ensures the next person walks up to a completely clean, un-splashed station — a deeply communal act of consideration.",
  },
  {
    id: "on-7", category: "onsen", severity: "important", type: "do",
    title: "Dry yourself before returning to the locker room",
    description: "Before stepping back into the dry changing room, use your small modesty towel to wipe most water off your body. This prevents you from dripping water everywhere. At the vanity mirror area, look for a lint-roller (korokoro) or small broom — you are expected to roll or sweep up any fallen hair strands from the counter before leaving, so the next person has a pristine vanity station.",
  },
  {
    id: "on-8", category: "onsen", severity: "important", type: "know",
    title: "Check tattoo policies before visiting — many onsen prohibit them",
    description: "Many traditional onsen still prohibit entry to tattooed visitors due to historical associations between tattoos and organized crime (yakuza). This is changing, particularly in tourist areas. Always check the onsen's website or call ahead. Some allow covering small tattoos with waterproof skin-colored tape. Alternatively, look for 'tattoo-friendly' onsen or book a private bath (kashikiri).",
  },
  {
    id: "on-9", category: "onsen", severity: "normal", type: "do",
    title: "Keep quiet inside the onsen — this is a space of deep relaxation",
    description: "Onsen and sento are places of calm contemplation and deep relaxation. If you visit with friends, keep your voice low. Avoid loud laughter or animated conversations. The atmosphere is intentionally meditative — other bathers are trying to genuinely unwind.",
  },
  {
    id: "on-10", category: "onsen", severity: "normal", type: "know",
    title: "Bring or rent a towel — sentos don't always provide them",
    description: "Hotel onsen usually provide towels. But at local neighborhood sento (public baths), you typically need to bring your own: a large towel for drying and a small towel (tenugui) for washing and modesty. Some sento rent towels for around ¥100–¥200. Check the specific establishment's policy before going.",
  },

  // ============================================================
  // 💼 BUSINESS & GREETINGS
  // ============================================================
  {
    id: "bu-1", category: "business", severity: "important", type: "know",
    title: "Bowing: the angle communicates the level of respect",
    description: "Bowing (お辞儀, ojigi) is Japan's core greeting. The angle matters: a <strong>15° nod</strong> for casual thanks; a <strong>30° bow</strong> for standard polite situations; a <strong>45° or deeper bow</strong> for sincere apologies or greeting very senior people. Keep your back straight, eyes looking down, arms at your sides (men) or clasped in front (women). The lower-status person bows first and more deeply.",
    tip: "When a Japanese person bows to you, a small reciprocal bow is always appropriate — you don't need to match the exact angle."
  },
  {
    id: "bu-2", category: "business", severity: "critical", type: "know",
    title: "Business card exchange (meishi koukan) is a formal ceremony",
    description: "The business card (名刺, meishi) is treated as a physical extension of your professional identity. The exchange ritual: (1) Store cards in a proper cardholder — never give a bent or worn card. (2) Present with both hands, Japanese side facing the recipient, with a slight bow and spoken introduction. (3) Receive with both hands at the bottom two corners, ensuring fingers don't cover logos or titles. (4) Say acknowledging phrases. (5) Read it carefully. (6) During the meeting, lay received cards neatly on the table — never pocket immediately or write on them.",
    warning: "Writing on someone's business card in their presence, or pocketing it immediately, is deeply offensive."
  },
  {
    id: "bu-3", category: "business", severity: "important", type: "know",
    title: "Hierarchical order: lower-ranking person presents card first and holds it lower",
    description: "In the meishi koukan ritual, the visiting party or lower-ranking individual presents their card first. In group settings, exchanges proceed from the most senior executive down. To show humility, the lower-ranking person must hold their card physically lower than the card being held by the senior counterpart.",
  },
  {
    id: "bu-4", category: "business", severity: "important", type: "know",
    title: "Punctuality is sacred — but don't arrive too early either",
    description: "Being late is a serious sign of disrespect in Japan. Always aim to arrive exactly on time or 2–3 minutes early for meetings. However, arriving significantly early (more than 5–10 minutes early) can also cause awkwardness — the person you're visiting may not yet be ready, putting pressure on them.",
    tip: "If you know you'll be late for any reason, contact the person immediately. A sincere apology goes a very long way."
  },
  {
    id: "bu-5", category: "business", severity: "important", type: "know",
    title: "Seating hierarchy (sekiji): furthest from the door = seat of honor (kamiza)",
    description: "Japanese professional spaces follow strict seating hierarchy. The seat farthest from the door is <strong>kamiza</strong> (upper seat of honor) — given to the most senior person, client, or guest. The seat nearest the door is <strong>shimoza</strong> (lower seat) — occupied by the junior person who handles logistics. Exception: if there's a great scenic view or piece of art, the best-view seat becomes the kamiza instead.",
  },
  {
    id: "bu-6", category: "business", severity: "normal", type: "know",
    title: "Elevator etiquette: the junior person is the 'captain'",
    description: "If you are the first (or most junior) person to step into an elevator, you automatically become the 'captain': hold the Door Open button for everyone boarding, remember which floors people need, press Door Close promptly after everyone is in, and exit last. This is so universally understood that failing to do it marks you as socially unaware.",
  },
  {
    id: "bu-7", category: "business", severity: "important", type: "know",
    title: "Taxi seating hierarchy: the seat behind the driver is the seat of honor",
    description: "In a Japanese taxi, the seat of honor is directly behind the driver (right-side rear window seat, due to left-hand traffic). The most junior person sits in the front passenger seat and handles communications with the driver and pays the fare.",
  },
  {
    id: "bu-8", category: "business", severity: "normal", type: "know",
    title: "Use time-appropriate Japanese greetings",
    description: "Japanese greetings are time-specific: <strong>Ohayou gozaimasu</strong> (おはようございます) in the morning; <strong>Konnichiwa</strong> (こんにちは) during the day; <strong>Konbanwa</strong> (こんばんは) in the evening. For goodbyes: <strong>Sayounara</strong> (さようなら) sounds final — for long-term farewells. Daily goodbyes: <strong>Ja ne</strong> (じゃね) casually, or <strong>Mata ne</strong> (またね) among peers.",
    phrase: { jp: "よろしくお願いします", romaji: "Yoroshiku onegaishimasu", en: "I look forward to working with you / Please take care of me" }
  },
  {
    id: "bu-9", category: "business", severity: "normal", type: "know",
    title: "Remove outer garments before entering a building",
    description: "Before knocking or ringing a doorbell at someone's home or office, visitors must remove outer garments (coats, hats, gloves, scarves) to ensure external dust and road pollution are not carried into the entry space. This applies to formal home visits and traditional business settings.",
  },

  // ============================================================
  // 👟 SHOES & INDOOR RULES
  // ============================================================
  {
    id: "sh10-1", category: "shoes", severity: "critical", type: "do",
    title: "Remove shoes at the genkan entrance — and turn them toward the exit",
    description: "The <strong>genkan</strong> (玄関) is the lowered entryway in traditional homes, ryokan, many restaurants, and temples. When the floor changes height and you see slippers, remove your outdoor shoes. Step out of your shoes, step up onto the raised floor, then turn around and neatly rotate your shoes so the toes point toward the exit door — this signals readiness to leave and keeps the space tidy.",
    tip: "Wear easy-to-remove shoes in Japan. Always wear clean socks with no holes — going barefoot can be a faux pas too."
  },
  {
    id: "sh10-2", category: "shoes", severity: "critical", type: "dont",
    title: "Never wear indoor slippers on tatami mats",
    description: "Tatami mats (畳) are fragile, precious woven straw mats used for sitting, eating, and sleeping. You must remove your indoor slippers at the edge of the tatami and walk on it only in socks or bare feet. Slippers can damage and dirty the delicate straw weave.",
    warning: "This is one of the most commonly broken rules by visitors. Outdoor shoes → genkan → indoor slippers → remove slippers for tatami. Three different footwear states!"
  },
  {
    id: "sh10-3", category: "shoes", severity: "important", type: "do",
    title: "Perform the bathroom slipper swap — and always swap back!",
    description: "In traditional homes, ryokan, and many restaurants, dedicated 'toilet slippers' sit just inside the bathroom door. The sequence: (1) Leave indoor slippers outside the bathroom door. (2) Step into toilet slippers. (3) Use the facilities. (4) Step out and switch back to indoor slippers. Walking back onto tatami or wooden floors wearing toilet slippers is one of the most famous foreigner mistakes — and deeply embarrassing.",
    warning: "This trips up almost every first-time visitor. The toilet slippers must NEVER leave the bathroom threshold."
  },
  {
    id: "sh10-4", category: "shoes", severity: "important", type: "know",
    title: "Historic castles: socks only — no slippers allowed",
    description: "At historic wooden structures like Himeji Castle and Matsumoto Castle, you remove shoes but are not given slippers — because plastic/rubber soles can scuff and damage centuries-old polished wood. You walk through in socks only, carrying your shoes in a plastic bag provided at the entrance.",
  },
  {
    id: "sh10-5", category: "shoes", severity: "normal", type: "know",
    title: "The ryokan slipper system has multiple zones",
    description: "Traditional ryokan have an elaborate slipper ecosystem: outdoor shoes off at genkan, indoor slippers for wooden corridors, remove those for tatami rooms (socks/bare feet only), separate slippers for onsen corridors, toilet slippers for bathrooms. Pay close attention to what floor type you're stepping onto — that determines your footwear state.",
  },
  {
    id: "sh10-6", category: "shoes", severity: "important", type: "do",
    title: "Remove shoes at traditional restaurants with raised tatami areas",
    description: "Many traditional Japanese restaurants — especially those with floor seating (zashiki 座敷) on tatami, traditional izakaya with private booths, or kaiseki restaurants — require you to remove shoes at a raised step before being seated. Look for the height change in the floor and a row of slippers — that's always your signal.",
  },

  // ============================================================
  // 💴 MONEY & SHOPPING
  // ============================================================
  {
    id: "mo-1", category: "money", severity: "important", type: "do",
    title: "Always use the payment tray (tsuri-bon) — never hand cash directly",
    description: "Almost every checkout counter in Japan has a small tray (<strong>tsuri-bon</strong>, 釣り盆) on the counter. Place your cash, card, or phone in this tray. Never hand money directly to the cashier's hand. They will place your change and receipt back in the tray. This practice maintains cleanliness and mutual respect.",
    warning: "Handing money directly into someone's hand is unusual and slightly awkward in Japan. The tray is always there for a reason."
  },
  {
    id: "mo-2", category: "money", severity: "normal", type: "dont",
    title: "Don't aggressively count change at the register",
    description: "Counting every coin loudly while the cashier watches is subtly distrustful. Japanese cashiers are meticulous and accurate. Pocket your change calmly and verify it privately later if you wish.",
  },
  {
    id: "mo-3", category: "money", severity: "important", type: "do",
    title: "You must tap the age verification screen yourself — cashiers can't do it for you",
    description: "When buying alcohol or age-restricted items at a convenience store, the register screen displays a legal disclaimer. The cashier is legally prohibited from tapping it on your behalf. You must tap the confirmation button on the touchscreen yourself. If you walk away without tapping, the transaction cannot complete.",
  },
  {
    id: "mo-4", category: "money", severity: "normal", type: "do",
    title: "Keep the proof-of-purchase tape on your item until you leave the store",
    description: "If you decline a plastic bag, the clerk places a small colored tape over the item's barcode as official proof of purchase. Do not peel it off until you have left the shop — it signals to security that the item was paid for and prevents awkward shoplift suspicions.",
  },
  {
    id: "mo-5", category: "money", severity: "normal", type: "do",
    title: "Drop unwanted receipts in the receipt box — never on the counter",
    description: "If you don't want your receipt, look for the tiny clear acrylic box next to the payment tray — this is specifically for unwanted receipts. Leaving receipts on the counter is untidy and signals you don't respect the workspace.",
  },
  {
    id: "mo-6", category: "money", severity: "important", type: "know",
    title: "Japan is still largely cash-based — always carry yen",
    description: "Despite improvements, many smaller restaurants, temples, vending machines, and rural establishments only accept cash. Always carry some yen. 7-Eleven ATMs ('Seven Bank') are the most reliable for foreign cards and are available 24/7 nationwide.",
    tip: "Withdraw cash before heading to smaller cities or rural areas. Konbini ATMs are your most reliable option."
  },
  {
    id: "mo-7", category: "money", severity: "normal", type: "do",
    title: "Use the face cover when trying on clothes at retail boutiques",
    description: "When trying on tops or dresses at Japanese clothing boutiques, you will be handed a translucent white fabric bag called a 'face cover.' You must place it over your head before pulling on any top. It completely prevents makeup from transferring onto the store's merchandise. This is standard practice everywhere.",
  },
  {
    id: "mo-8", category: "money", severity: "normal", type: "know",
    title: "Konbini eat-in vs. takeaway: different tax rates (8% vs. 10%)",
    description: "Under Japanese tax law, takeaway food is taxed at 8% while eating inside the store incurs a 10% consumption tax. If you plan to use the in-store counter, tell the cashier before they scan your items. They'll ask: 'Koko de meshiagari desu ka?' (Are you eating here?)",
  },
  {
    id: "mo-9", category: "money", severity: "normal", type: "know",
    title: "Don't sit on the curb outside a konbini to eat",
    description: "If a convenience store doesn't have an eat-in seating area, do not sit on the curb outside or lean against the glass storefront to eat. Walk to a nearby park or consume your food standing next to the store's outdoor bins — that is acceptable.",
  },
  {
    id: "mo-10", category: "money", severity: "normal", type: "know",
    title: "Use silent hand gestures at the konbini register",
    description: "Convenience store clerks will ask rapid questions about plastic bags, point cards, and receipts. To decline a plastic bag without speaking Japanese: wave your hand gently from side to side in front of your chest (like a mini 'no'), or hold your hand up flat like a stop sign while saying 'Daijoubu desu' (大丈夫です, 'I'm okay').",
  },
  {
    id: "mo-11", category: "money", severity: "normal", type: "know",
    title: "Konbini: don't grab extra utensils yourself — signal with fingers",
    description: "Convenience store clerks automatically give you the exact number of chopsticks, spoons, or straws needed for what you bought. Do not reach behind the counter for extra utensils. If you need more for a friend, simply hold up your fingers to indicate how many people are eating and they'll add the appropriate number.",
  },

  // ============================================================
  // 📱 PHONES & NOISE
  // ============================================================
  {
    id: "di-1", category: "digital", severity: "important", type: "know",
    title: "Japanese phones have a mandatory un-silenceable shutter sound",
    description: "By Japanese law, all smartphones sold or activated on Japanese networks must have a mandatory camera shutter sound that cannot be turned off — implemented to prevent surreptitious photography. Even if your foreign phone can take silent photos, be mindful of where you point your camera, especially in quiet enclosed spaces like trains or museums.",
  },
  {
    id: "di-2", category: "digital", severity: "important", type: "dont",
    title: "No video calls or speakerphone audio in public",
    description: "Walking down a street or sitting in a café while on a FaceTime or speakerphone call is highly frowned upon. If you need to make a call, use headphones and keep your voice quiet. In any public space, this kind of noise is invasive and inconsiderate.",
  },
  {
    id: "di-3", category: "digital", severity: "important", type: "dont",
    title: "Don't photograph people without explicit permission",
    description: "Taking photos of locals — especially geisha/maiko in Kyoto, children, or anyone who doesn't want to be photographed — is invasive and disrespectful. Kyoto has implemented strict fines for photographing geisha in private alleys. When in doubt, always ask: 'Shashin wo totte mo ii desu ka?' (写真を撮ってもいいですか?)",
    phrase: { jp: "写真を撮ってもいいですか？", romaji: "Shashin wo totte mo ii desu ka?", en: "May I take a photo?" }
  },
  {
    id: "di-4", category: "digital", severity: "normal", type: "do",
    title: "Wear a face mask if you have a cold, cough, or hay fever",
    description: "In Japan, wearing a sanitary mask in public when you're ill or have seasonal allergies is a basic social courtesy — you're actively showing others that you're containing your germs. This cultural norm long predates the pandemic. Masks are available cheaply at any konbini.",
  },
  {
    id: "di-5", category: "digital", severity: "normal", type: "dont",
    title: "Don't blow your nose loudly in public",
    description: "Loudly blowing your nose into a tissue on a train, in a restaurant, or in any quiet public space is considered gross in Japan. If you have the sniffles, sniffle quietly until you can excuse yourself to a restroom stall to blow your nose in private. Quiet sniffling, however, is completely acceptable and very common.",
  },

  // ============================================================
  // 🎁 GIFTS & GIFT-GIVING
  // ============================================================
  {
    id: "gi-1", category: "gifts", severity: "important", type: "do",
    title: "Always bring omiyage (souvenir food) when returning from a trip",
    description: "<strong>Omiyage</strong> (お土産) is the deeply ingrained Japanese custom of bringing back region-specific edible souvenirs from any trip for your coworkers, friends, and family. This is socially expected — not optional. Omiyage must be food items from the region you visited, individually packaged to be shared. They are typically presented at work or home shortly after your return.",
    tip: "Budget for omiyage when planning any trip. A single box of regional sweets for the office is typically sufficient."
  },
  {
    id: "gi-2", category: "gifts", severity: "important", type: "do",
    title: "Always use both hands to give and receive gifts",
    description: "Using both hands when presenting or receiving any item — a gift, business card, document, or even a purchase — signals respect and full attention. A gift given with one hand feels casual and dismissive. Hold the gift with both hands and bow slightly when presenting it.",
  },
  {
    id: "gi-3", category: "gifts", severity: "normal", type: "do",
    title: "Downplay your gift when presenting it: 'Tsumaranai mono desu ga'",
    description: "When giving any gift, Japanese custom requires you to downplay its value by saying <strong>'Tsumaranai mono desu ga'</strong> (つまらないものですが — 'This is just a trivial thing, but please accept it'). Even if it's a genuinely lovely gift. This expression of modesty shows good social grace — the recipient understands it's not literal.",
    phrase: { jp: "つまらないものですが", romaji: "Tsumaranai mono desu ga", en: "This is just a trivial thing, but please accept it" }
  },
  {
    id: "gi-4", category: "gifts", severity: "normal", type: "know",
    title: "Polite refusal (enryo): don't take the first 'no' literally",
    description: "When you offer a gift, food, or favor in Japan, the recipient will likely gently refuse once or twice before accepting. This is <strong>enryo</strong> (遠慮, polite restraint) — a sign of modesty, not actual rejection. When offering something, gently persist once or twice. They will usually accept by the second or third offer.",
  },
  {
    id: "gi-5", category: "gifts", severity: "important", type: "know",
    title: "Cash gifts must go inside proper envelopes — never as loose bills",
    description: "Cash given as a gift must always go inside a special envelope (kinpū). For celebrations: a <strong>shūgi-bukuro</strong> decorated with gold ornament. For condolences: a plain <strong>kōden-bukuro</strong>. The folding direction, ink color, and even the amount follow strict rules. For weddings: always use odd amounts (¥30,000 or ¥50,000) with crisp new bills. Numbers 4 (死, death) and 9 (苦, suffering) are taboo amounts.",
  },
  {
    id: "gi-6", category: "gifts", severity: "normal", type: "know",
    title: "Mizuhiki envelope cords: knot style carries meaning",
    description: "The decorative cord on gift envelopes (mizuhiki) carries symbolic meaning. A <strong>chō-musubi</strong> (easily re-tied butterfly knot, red/white) is for repeatable happy events like births and promotions. A <strong>musubikiri</strong> (permanent knot, gold/silver) is for weddings and serious illness — events you hope never recur. An <strong>awaji-musubi</strong> (knot that tightens when pulled) works for both celebrations and funerals, symbolizing eternal connection.",
  },
  {
    id: "gi-7", category: "gifts", severity: "normal", type: "know",
    title: "Seasonal gift-giving: Ochugen (July) and Oseibo (December)",
    description: "<strong>Ochugen</strong> (お中元, July): midyear gifts thanking superiors, family doctors, and mentors — typically refreshing summer items like cold beers, fruits, or juices. <strong>Oseibo</strong> (お歳暮, December): year-end gifts of greater social weight, expressing full-year gratitude — quality oils, dashi stocks, canned goods, or winter delicacies. Standard cost: ¥3,000–¥5,000. Usually sent via department stores.",
  },
  {
    id: "gi-8", category: "gifts", severity: "important", type: "know",
    title: "If tipping a guide or ryokan staff, use a proper envelope with both hands",
    description: "If you want to show extraordinary gratitude to a private tour guide, master artisan, or ryokan room attendant, put clean cash inside a proper envelope (any clean envelope is fine), present it with both hands at the very end of your time together, with a bow and the phrase: <strong>'Kore wa honno kimochi desu'</strong> (これはほんの気持ちです, 'This is just a small token of my feelings'). Anything less formal will be refused.",
    phrase: { jp: "これはほんの気持ちです", romaji: "Kore wa honno kimochi desu", en: "This is just a small token of my feelings" }
  },
  {
    id: "gi-9", category: "gifts", severity: "normal", type: "know",
    title: "When delivering gifts in person, present inside the room — never at the genkan",
    description: "If giving a seasonal gift (Ochugen or Oseibo) in person rather than through a store, bring it wrapped in a furoshiki cloth and present it inside the room — never in the genkan entryway, which is considered too casual and drafty for a proper gift exchange.",
  },

  // ============================================================
  // 🏨 HOTELS & RYOKAN
  // ============================================================
  {
    id: "ho-1", category: "hotel", severity: "critical", type: "do",
    title: "Yukata: always fold LEFT side over right — never right over left",
    description: "At ryokan and traditional hotels, you'll be given a cotton robe called a <strong>yukata</strong>. The absolute rule: fold the <strong>left side over the right</strong>. Folding right-over-left is how corpses are dressed for funerals in Japan, and doing it — even accidentally — is considered a very bad omen that makes Japanese hosts genuinely uncomfortable.",
    warning: "Remember: your LEFT goes on TOP. Right-over-left = funeral wrapping."
  },
  {
    id: "ho-2", category: "hotel", severity: "important", type: "dont",
    title: "Never roll suitcases over tatami mats",
    description: "When entering a traditional ryokan room with tatami, never roll or drag your suitcase across the mats. Luggage wheels dirty and damage the delicate straw. Leave luggage on the wooden genkan floor or on the dedicated luggage bench. Staff may wipe your suitcase wheels with a damp cloth before allowing it to be carried in.",
  },
  {
    id: "ho-3", category: "hotel", severity: "normal", type: "dont",
    title: "Don't fold or pack the futon in the morning — that's for the nakai-san",
    description: "At ryokan, the room attendant (nakai-san 仲居さん) lays out your futon in the evening while you're at dinner, and packs it away in the morning. Do not attempt to help fold or pack it yourself. They follow a specific sanitizing system, and well-meaning interference disrupts their work.",
  },
  {
    id: "ho-4", category: "hotel", severity: "normal", type: "dont",
    title: "Never use the tokonoma alcove for storage",
    description: "Traditional rooms feature a small raised alcove called <strong>tokonoma</strong> (床の間) — displaying a hanging scroll (kakejiku) or flower arrangement. This is a sacred aesthetic space. Never use it to store backpacks, camera equipment, empty plastic bottles, or any belongings. It exists to be admired, not used as a shelf.",
  },
  {
    id: "ho-5", category: "hotel", severity: "normal", type: "know",
    title: "Don't sleep with your head pointing north (kita-makura)",
    description: "Sleeping with your head pointing north is called <strong>kita-makura</strong> (北枕) and is associated with death — it's the direction a corpse's head points during Japanese funeral rites. At a ryokan, your futon is usually arranged correctly. But if you rearrange it yourself, avoid pointing your head north.",
  },
  {
    id: "ho-6", category: "hotel", severity: "important", type: "do",
    title: "Capsule hotels: unpack noisy bags in the common lounge",
    description: "At capsule hotels and shared hostels, the sleeping area is one large echoing room with strict silent hours. Crinkling plastic convenience store bags late at night carries enormous social penalties. Locals always unpack noisy items in the common lounge before entering the sleeping area. Return from your late-night konbini run and unpack quietly in the lounge first.",
  },

  // ============================================================
  // 🎤 SOCIAL & PUBLIC LIFE
  // ============================================================
  {
    id: "so-1", category: "social", severity: "normal", type: "know",
    title: "Karaoke: don't hog the queue or pick someone's reserved song",
    description: "Karaoke (カラオケ) is a beloved social institution with its own strict etiquette: (1) Don't add multiple songs in a row for yourself — let everyone pick one at a time. (2) Avoid extremely long songs unless the whole room agrees. (3) Never select another person's already-reserved song from the queue. (4) <strong>Always applaud every performance</strong>, no matter how terrible. (5) Return the mic to its stand, or pass it with both hands — never swing or drop it.",
  },
  {
    id: "so-2", category: "social", severity: "normal", type: "dont",
    title: "Don't point with your index finger",
    description: "Pointing directly at a person or object with a single index finger is considered aggressive and rude. Instead, gesture with an open, flat hand — palm facing up or down — to indicate direction or draw attention to something. This applies equally to pointing at menu items, map locations, or people.",
  },
  {
    id: "so-3", category: "social", severity: "normal", type: "dont",
    title: "Soles of feet must never face other people on tatami",
    description: "When sitting on tatami mats — in a ryokan, tea room, or traditional restaurant — never stretch your legs out so the soles of your feet face another person. The soles of the feet are considered the 'lowest' and most impolite part of the body to expose toward others. Sit cross-legged or in seiza (kneeling on shins), keeping the bottoms of your feet pointed away from everyone.",
  },
  {
    id: "so-4", category: "social", severity: "normal", type: "know",
    title: "Keep public displays of affection minimal",
    description: "Kissing, hugging, and prolonged intimate contact are generally not done in public in Japan. Couples holding hands is accepted, but anything beyond that draws uncomfortable stares. Bows, smiles, and gentle waves are the norm for greetings.",
  },
  {
    id: "so-5", category: "social", severity: "normal", type: "do",
    title: "Remove sunglasses when speaking to someone face-to-face",
    description: "Wearing dark sunglasses while speaking to someone — even a shop clerk — is perceived as hiding your eyes, which can seem suspicious or disrespectful. Japanese culture places significant value on eye contact and reading non-verbal cues. Lift or remove your sunglasses during any face-to-face interaction.",
  },
  {
    id: "so-6", category: "social", severity: "critical", type: "dont",
    title: "Never carry a knife with a blade over 6cm — it's illegal",
    description: "Japan has exceptionally strict weapons laws. Carrying a multi-tool, Swiss Army knife, or any folding blade exceeding <strong>6cm (roughly 2.4 inches)</strong> in a pocket or bag without a legitimate work-related reason can lead to <em>immediate arrest</em> by police. This applies to tourists as well. Leave pocket knives at home.",
    warning: "This is a legal matter, not just etiquette. A blade over 6cm in your bag = possible immediate arrest."
  },
  {
    id: "so-7", category: "social", severity: "important", type: "know",
    title: "'Kuuki wo yomu' — reading the atmosphere is the most important skill in Japan",
    description: "<strong>Kuuki wo yomu</strong> (空気を読む, 'reading the air') is perhaps the most important social concept in Japan. It means paying careful attention to the mood of the room, non-verbal cues, and unspoken social expectations — and adjusting your behavior accordingly. When in any doubt: slow down, observe what locals are doing, and follow their lead. A polite bow and 'Sumimasen' resolve almost any awkward situation.",
    phrase: { jp: "すみません", romaji: "Sumimasen", en: "Excuse me / I'm sorry (resolves almost everything)" }
  },
  {
    id: "so-8", category: "social", severity: "normal", type: "know",
    title: "Coin laundromat: respect the timer and don't be offended if your clothes are moved",
    description: "If you use a neighborhood coin laundromat (koin randorii), note exactly how long your cycle takes and return before the timer ends. If your laundry finishes and you're not there, it is completely acceptable (and expected) for the next customer to remove your clothes and place them in a basket so they can use the machine. Do not be offended — it is courteous communal sharing.",
  },
  {
    id: "so-9", category: "social", severity: "normal", type: "know",
    title: "Public restrooms: bring your own hand towel and don't put trash in bins",
    description: "Many public restrooms — even in train stations — have no paper towels, and dryers are often off. Japanese locals always carry a small hand towel (tenugui 手ぬぐい) in their pocket or bag. Also: the tiny bins inside restroom stalls are strictly for sanitary products only — never throw food packaging or plastic bottles in them.",
  },
  {
    id: "so-10", category: "social", severity: "normal", type: "know",
    title: "Static electricity in winter: use the grounding pad before pressing elevator buttons",
    description: "Japan gets extremely dry in winter, and static shock is common. You'll notice small round metallic or rubber touch-pads on elevator panels and automated door frames. Touch these with your bare palm before pressing a button — they safely ground you and prevent a nasty static zap.",
  },
  {
    id: "so-11", category: "social", severity: "normal", type: "know",
    title: "Don't drink while browsing inside retail shops or clothing boutiques",
    description: "While drinking from a closed water bottle on a hot day outside is fine, do not walk through indoor retail shops, clothing boutiques, or convenience store aisles while actively sipping a beverage. Sip outside the store entrance, close the cap, and then walk inside.",
  },
  {
    id: "so-12", category: "social", severity: "normal", type: "know",
    title: "Public park fountains: drinking and hand-rinsing only — not for washing shoes",
    description: "Public park water fountains in Japan are clean and safe to drink from. However, do not use them to wash dirty hiking shoes, rinse muddy personal items, or wash travel cutlery. They are strictly for drinking and quick hand-rinsing.",
  },
  {
    id: "so-13", category: "social", severity: "normal", type: "know",
    title: "Free pocket tissues on the street: take them! Restrooms often run out",
    description: "In busy city areas, you'll frequently see people handing out free packs of pocket tissues on street corners (usually wrapped in advertisements). Take them! Public restrooms in older parks or areas can run out of toilet paper or not provide it at all. Locals always keep a pack on hand.",
  }
];

// ============================================================
// 📖 PHRASES DATA
// ============================================================
const PHRASES = [
  { jp: "すみません", romaji: "Sumimasen", meaning: "Excuse me / I'm sorry", context: "The single most useful word in Japan. Get a server's attention, apologize for bumping into someone, or ask for help." },
  { jp: "ありがとうございます", romaji: "Arigatou gozaimasu", meaning: "Thank you very much", context: "Formal 'thank you.' Use in shops, restaurants, and with anyone older or in a service role." },
  { jp: "いただきます", romaji: "Itadakimasu", meaning: "I humbly receive (before eating)", context: "Always say this before starting a meal. Deeply appreciated when visitors participate." },
  { jp: "ごちそうさまでした", romaji: "Gochisousama deshita", meaning: "Thank you for the meal (after eating)", context: "Said when finishing a meal. Can also signal to the server you're ready for the bill." },
  { jp: "かんぱい！", romaji: "Kanpai!", meaning: "Cheers!", context: "The toast used before drinking. Everyone must have their drink in hand first." },
  { jp: "お会計お願いします", romaji: "Okaikei onegaishimasu", meaning: "The bill, please", context: "Ask for the check at a restaurant. You can also draw a check mark in the air." },
  { jp: "よろしくお願いします", romaji: "Yoroshiku onegaishimasu", meaning: "Please take care of me / Nice to meet you", context: "One of the most versatile phrases. Used when meeting someone, starting work, or asking a favor." },
  { jp: "大丈夫です", romaji: "Daijoubu desu", meaning: "I'm okay / No thank you", context: "Decline a plastic bag, refuse a refill, or tell someone you're fine." },
  { jp: "写真を撮ってもいいですか？", romaji: "Shashin wo totte mo ii desu ka?", meaning: "May I take a photo?", context: "Always ask before photographing people, especially in private areas." },
  { jp: "どこですか？", romaji: "Doko desu ka?", meaning: "Where is it?", context: "Point to a map and use this. Japanese people are very helpful to lost tourists." },
  { jp: "おはようございます", romaji: "Ohayou gozaimasu", meaning: "Good morning", context: "Used until around 10am, or as the first greeting of the day even in workplaces." },
  { jp: "つまらないものですが", romaji: "Tsumaranai mono desu ga", meaning: "This is just a trivial thing, but...", context: "The humble phrase when presenting a gift in Japan — shows proper modesty." },
  { jp: "メニューをください", romaji: "Menyu wo kudasai", meaning: "Menu, please", context: "Request the menu at a restaurant." },
  { jp: "クレジットカード使えますか？", romaji: "Kurejitto kaado tsukaemasu ka?", meaning: "Can I use a credit card?", context: "Always check before ordering in smaller restaurants — Japan is still largely cash-based." },
  { jp: "これはほんの気持ちです", romaji: "Kore wa honno kimochi desu", meaning: "This is a small token of my feelings", context: "Used when discreetly offering a cash gift in an envelope to a guide, artisan, or ryokan staff." },
  { jp: "すみません、倒してもいいですか？", romaji: "Sumimasen, taoshitemo ii desu ka?", meaning: "Excuse me, may I recline my seat?", context: "Always ask the person behind you on the Shinkansen before reclining." }
];

// ============================================================
// 🎬 YOUTUBE VIDEOS DATA
// ============================================================
const VIDEOS = [
  { id: "JlFJwjPKN0c", title: "Japanese Table Manners & Dining Etiquette", category: "🍽️ Dining", description: "A complete guide to dining in Japan — chopstick rules, what to say, and what never to do at the table." },
  { id: "CLrN_7B9Lr0", title: "How to Use a Japanese Onsen (Hot Spring)", category: "♨️ Onsen", description: "Step-by-step guide to the onsen experience — what to do before, during, and after your soak." },
  { id: "GHgHvpSUFX4", title: "How to Pray at a Japanese Shrine", category: "⛩️ Shrines", description: "Learn the exact rituals for visiting Shinto shrines — torii gates, purification, and prayer sequence." },
  { id: "MK1EqOefRWk", title: "Tokyo Train System Etiquette Guide", category: "🚂 Transport", description: "Everything you need to know about riding Tokyo's trains like a local." },
  { id: "mMZhfZHbSmE", title: "Japanese Business Card Etiquette", category: "💼 Business", description: "The complete guide to the meishi ceremony — how to present, receive, and handle business cards." },
  { id: "iN4GFj7e6_A", title: "Things NOT to Do in Japan", category: "📋 General", description: "A fun, informative guide to the biggest cultural mistakes tourists make — and how to avoid them." }
];

// ============================================================
// ❓ FAQ DATA
// ============================================================
const FAQS = [
  { question: "Should I leave a tip in Japan?", answer: "No — never. Tipping is not practiced in Japan and can cause genuine confusion. Leaving cash on a table will result in staff chasing you down the street. The service charge is always included in the price. If you want to thank a private guide or ryokan staff member extraordinarily, put clean cash in a proper envelope and present it with both hands at the end — see the Gift-Giving rules for details." },
  { question: "Is slurping noodles rude in Japan?", answer: "No — slurping ramen, soba, or udon is completely normal and seen as a sign of appreciation and enjoyment. Slurping slightly cools the noodles before they reach your mouth and aerates them, believed to enhance flavor. A newer trend among younger generations calls excessively theatrical slurping 'noo-hara' (noodle harassment) — natural slurping is great; performing loudly is not." },
  { question: "Can I eat while walking in Japan?", answer: "Generally no. Eating while walking is frowned upon as untidy and disrespectful to public spaces. The main exception is at festivals (matsuri) where eating street food while strolling is part of the experience. For regular takeaway, stand near the shop or find a park bench. Never eat on local commuter trains or buses." },
  { question: "Can I get into an onsen if I have tattoos?", answer: "This depends on the specific onsen. Many traditional ones still prohibit tattooed visitors due to historical associations with yakuza organized crime. However, this is changing — many tourist-area onsen are now tattoo-friendly. Always check the website or call ahead. Covering small tattoos with waterproof skin-colored tape may work at some places. Look for 'tattoo-friendly onsen' or book a private bath (kashikiri)." },
  { question: "What is the most important thing to remember in Japan?", answer: "Beyond any specific rule, the concept of <strong>kuuki wo yomu</strong> (空気を読む — 'reading the air') is most important. Pay attention to the social atmosphere and non-verbal cues around you, and adjust your behavior to match. When in doubt: slow down, be quiet, observe what locals are doing, and copy them. The word 'Sumimasen' said with a small bow resolves almost any awkward situation." },
  { question: "What are the most critical rules I absolutely must never break?", answer: "(1) Never stick chopsticks vertically in rice — funeral rite. (2) Never pass food chopstick-to-chopstick — also a funeral rite. (3) Never tip. (4) Don't enter an onsen without washing first. (5) Never fold a yukata right-over-left — that's for corpses. (6) Switch phone to silent on all public transit. (7) Never carry a blade over 6cm — possible immediate arrest. These seven cover the most severe cultural and legal violations." },
  { question: "Do I need to speak Japanese to visit Japan?", answer: "Not necessarily. Major tourist areas have English signage and picture menus. However, learning even 10–15 key phrases (like the ones in this guide) makes an enormous positive difference. Japanese people deeply appreciate any genuine effort to engage with their language, even with imperfect pronunciation." },
  { question: "Is it rude to say no in Japan?", answer: "Japan is a high-context culture where direct refusal is often avoided. 'Chotto...' (ちょっと... — 'it's a bit...') often means no. When you offer someone something, they'll likely refuse once or twice out of modesty (enryo) before accepting. Don't take the first refusal as final — gently offer again and they'll usually accept by the second or third time." },
  { question: "What does 'Manner Mode' mean in Japan?", answer: "'Manner Mode' (マナーモード) is the Japanese term for putting your phone on completely silent or vibrate — not just lowering the volume. The moment you board any train or bus, your phone must be in Manner Mode. No ringtones, no media sound without headphones, no phone calls in the passenger cabin. It's as essential as wearing a seatbelt in a car." }
];

// ============================================================
// 🎁 ADDITIONAL GIFT & SOCIAL TABOOS (from search.txt)
// ============================================================

// These extra rules are appended to the RULES array above.
// To keep code valid, they are listed here as a separate constant
// and merged in at runtime by app.js via RULES.push(...EXTRA_RULES)
const EXTRA_RULES = [
  {
    id: "gi-10", category: "gifts", severity: "important", type: "dont",
    title: "Don't bring potted plants to a hospital patient",
    description: "When visiting someone in hospital in Japan, bringing a potted plant as a gift is a grave faux pas. The Japanese phrase for a plant 'taking root' (<strong>ne-tsuku</strong>) is phonetically identical to the phrase for 'being bedridden.' Giving a potted plant implies the patient will never leave the hospital. Stick to cut flowers instead — but even then, check the color rules below.",
    warning: "Potted plants as hospital gifts = implying the patient will be bedridden permanently."
  },
  {
    id: "gi-11", category: "gifts", severity: "important", type: "dont",
    title: "Avoid specific flowers: camellias, cyclamens, and white/red for hospital visits",
    description: "When giving flowers in Japan, certain blooms carry death associations: <strong>Camellias</strong> (tsubaki) — the entire flower head drops suddenly from the stem when it dies, mimicking decapitation. This is considered deeply inauspicious. <strong>Cyclamens</strong> (shikunishi) — the name phonetically evokes 'death' and 'suffering' in Japanese. For hospital visits: <strong>red flowers</strong> are avoided because of blood/fire associations; <strong>white or pale yellow flowers</strong> are avoided because they traditionally decorate Buddhist funeral altars and graves.",
  },
  {
    id: "gi-12", category: "gifts", severity: "important", type: "know",
    title: "Number taboos: avoid 4, 9, and 42 in gift amounts and items",
    description: "Certain numbers carry fatal associations in Japanese: <strong>4</strong> (四, pronounced <em>shi</em>) sounds identical to the word for 'death' (死, shi). <strong>9</strong> (九, pronounced <em>ku</em>) sounds like the word for 'suffering' (苦, ku). <strong>42</strong> (四十二) pronounced <em>shi-ni</em> literally means 'to die.' Never give gifts in sets of 4 or 9, never give ¥4,000 or ¥9,000 as cash gifts, and avoid booking or gifting anything with 42 in it.",
    warning: "Set of 4 items or ¥4,000 cash = gifting 'death.' Always choose sets of 3, 5, 7, or other odd numbers."
  },
  {
    id: "gi-13", category: "gifts", severity: "normal", type: "know",
    title: "For condolence envelopes: use used bills, not crisp new ones",
    description: "When preparing a condolence envelope (kōden-bukuro) for a funeral, deliberately use slightly folded or used bills — not crisp, brand-new ones. Giving freshly minted bills for a condolence implies you anticipated the person's death and prepared for it in advance, which is deeply offensive. The opposite is true for celebratory gifts (weddings, births) where pristine new bills are mandatory.",
  },
  {
    id: "bu-10", category: "business", severity: "normal", type: "do",
    title: "Say 'Ojama shimasu' when entering someone's home or office",
    description: "When stepping inside a Japanese home or office that has invited you in, say <strong>'Ojama shimasu'</strong> (お邪魔します) as you cross the threshold. It translates to 'I am about to bother/intrude,' and it's a deeply respectful acknowledgement that you are entering someone's private space. Saying it is universally appreciated and marks you as culturally aware.",
    phrase: { jp: "お邪魔します", romaji: "Ojama shimasu", en: "Excuse the intrusion / I'm coming in" }
  },
  {
    id: "social-14", category: "social", severity: "normal", type: "do",
    title: "Cover your mouth when using a toothpick",
    description: "If you need to use a toothpick after a meal at a restaurant, always cover your mouth with your free hand while picking your teeth. Using a toothpick openly and visibly — mouth uncovered, in a public dining setting — is considered quite crude. The same applies to yawning: cover your mouth as a matter of etiquette.",
  },
  {
    id: "mo-12", category: "money", severity: "normal", type: "know",
    title: "Konbini: tell the cashier to separate hot and cold items",
    description: "When buying hot food (fried chicken, oden, steamed buns) alongside cold items (ice cream, chilled drinks) at a convenience store, the cashier will ask: <strong>'Oatsui no to tsumetai no wakemasu ka?'</strong> (Should I separate the hot and cold?). Nod and say 'Onegaishimasu' (please) if you want them bagged separately — otherwise your ice cream will arrive warm.",
    phrase: { jp: "分けてください", romaji: "Wakete kudasai", en: "Please separate them (hot and cold items)" }
  },
  {
    id: "tr-24", category: "transport", severity: "normal", type: "know",
    title: "Use standard elevators in department stores — leave priority ones for those who need them",
    description: "Large multi-story department stores (depāto) in Ginza or Shinjuku have specific elevators marked with symbols for strollers, wheelchairs, and the elderly. If you are a young, able-bodied traveler during a busy period, avoid these marked elevators and use escalators or standard elevators instead. Leave access open for those who genuinely need the extra space.",
  },
  {
    id: "social-15", category: "social", severity: "normal", type: "know",
    title: "When presenting a cash envelope: rotate it 180° twice toward the recipient",
    description: "When presenting a formal ceremonial money envelope (shugi-bukuro or kōden-bukuro), the physical presentation follows a specific choreography: hold the envelope with both hands at the bottom corners, with the writing facing yourself. Then rotate the envelope clockwise 180° in two deliberate motions so the text faces the recipient perfectly before handing it over. This shows deliberate, careful respect for the recipient.",
  },
  {
    id: "social-16", category: "social", severity: "normal", type: "do",
    title: "Say 'Iie, kekkou desu' to politely decline something once or twice before accepting",
    description: "When offered food, a gift, or help in Japan, the polite first response is a gentle refusal: <strong>'Iie, kekkou desu'</strong> (いいえ、結構です — 'No, I'm fine, thank you') or <strong>'Moushiwake nai'</strong> (申し訳ない — 'I feel terrible / I couldn't'). This shows you are not greedy or presumptuous. After one or two of these polite refusals, you accept graciously. This <em>enryo</em> ritual makes the exchange of generosity feel mutual and respectful.",
    phrase: { jp: "いいえ、結構です", romaji: "Iie, kekkou desu", en: "No, I'm fine thank you (polite first refusal)" }
  }
];

// Merge extra rules into main RULES array
RULES.push(...EXTRA_RULES);

// ============================================================
// ⚡ QUICK REFERENCE LISTS
// ============================================================
const DO_LIST = [
  "Switch phone to silent (Manner Mode) the moment you board any train",
  "Bow when greeting — even a small nod counts",
  "Say Itadakimasu before eating, Gochisousama deshita after",
  "Remove shoes when you see a height change at an entrance",
  "Use the payment tray (tsuri-bon) at every counter — never hand cash directly",
  "Wash yourself completely before entering any onsen or public bath",
  "Carry your trash until you find an appropriate bin",
  "Pour drinks for others before yourself",
  "Wait for 'Kanpai!' before taking your first sip",
  "Walk on the sides of shrine paths — center is for deities",
  "Bow once before AND after passing through a torii gate",
  "Bring a small hand towel — many restrooms have no paper towels or dryers",
  "Fold your yukata left side over right — never the other way",
  "Carry a small plastic bag for your trash at all times",
  "Ask 'Shashin wo totte mo ii desu ka?' before photographing people"
];

const DONT_LIST = [
  "Stick chopsticks vertically in rice — funeral rite",
  "Pass food chopstick-to-chopstick — also a funeral rite",
  "Tip at restaurants, taxis, or hotels — it causes confusion",
  "Talk loudly or make phone calls on public transit",
  "Enter an onsen without washing completely first",
  "Fold a yukata right-over-left — that's how corpses are dressed",
  "Jaywalk — fines up to ¥50,000",
  "Smoke while walking on public streets",
  "Point with your index finger at people or things",
  "Eat while walking (except at festivals)",
  "Write on or pocket someone's business card in their presence",
  "Carry a blade over 6cm — possible immediate arrest",
  "Clap at a Buddhist temple — only at Shinto shrines",
  "Place bags on the seat next to you on trains",
  "Walk back onto tatami wearing toilet slippers"

];
