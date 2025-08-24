// ======================================
// The Memory Exchange - DATABASE SYSTEM
// ======================================

// 🏛️ WORLD FOUNDATIONS DATABASE
const WORLD_FOUNDATIONS_DB = {
    right: {
        title: "Memory is a Right",
        description: "You have signed the first contract: memory is an inalienable human right. In this city, the privacy of memory is strictly protected, and any unauthorized reading or modification is considered a felony. The atmosphere of the Exchange becomes solemn and dignified; every contract feels like a sacred ritual.",
        pawnshop_atmosphere: "The lights in the Exchange grow softer, and a solemnity fills the air. The memory jars on the walls are carefully polished, as if they were sacred relics.",
        backgroundImageUrl: "/right.png"
    },
    resource: {
        title: "Memory is a Resource",
        description: "Your first contract has established the law: memory is a valuable resource to be traded, mined, and utilized. In this city, the memory market is booming. Everything from knowledge transfer to emotional experiences has a price. The Exchange now resembles a bustling stock market, full of opportunity and risk.",
        pawnshop_atmosphere: "A faint hum of data streams now echoes through the Exchange. The memory jars on the walls flicker with prices and data points, while a holographic market index slowly ticks in the air.",
        backgroundImageUrl: "/resource.png"
    },
    responsibility: {
        title: "Memory is a Responsibility",
        description: "With your quill, you've written the first rule: memory is a responsibility that must be shared by the individual and the collective. In this city, people are encouraged to share and preserve memories to learn from history. The historical archive has become the heart of the city. The Exchange's atmosphere is like that of an ancient library, heavy with the weight of history.",
        pawnshop_atmosphere: "The scent of old paper and leather now lingers in the Exchange. Beside each memory jar, a small brass plaque has appeared, engraved with the memory's origin and date.",
        backgroundImageUrl: "/responsibility.png"
    }
};

// 🏥 PATIENT DATABASE 
const PATIENTS_DB = {
    1: {
        id: 1,
        name: "The Veteran - Leo Vance",
        age: 45,
        story: "He clutches a rusted dog tag, his voice trembling. 'Those nights... the explosions, the screams, the faces of my fallen comrades... they haunt me like ghosts. Doctor, I just want one peaceful night's sleep. I'd pay any price to forget it all.'",
    },
    2: {
        id: 2,
        name: "The Med Student - Amelia Chen",
        age: 22,
        story: "The cold scent of disinfectant fills the air as she subconsciously rubs her hands. 'Since I was a child, my parents called me 'the future doctor.' But I failed my internship exam... I discovered I get dizzy at the sight of blood and panic when facing a patient's pain. Everyone is waiting for me to wear that white coat, but I know I can't. Please, help me forget this failure, or... make me believe that I really can succeed?'",
    },
    3: {
        id: 3,
        name: "The Grieving Mother - Isabella Rossi",
        age: 38,
        story: "She clutches a small, faded teddy bear, tears streaming silently. 'Leo was only 8... The car crash was so sudden. Every morning, I still make his breakfast and say good morning to his empty room... I think I'm going mad. Doctor, I'm begging you, let me forget this pain, or I won't be able to go on.'",
    },
    4: {
        id: 4,
        name: "The CEO - Marcus Thorne",
        age: 52,
        story: "Despite his tailored suit, he looks exhausted, subconsciously rubbing a small stain on his cufflink. 'I spent twenty years building this empire, thinking I was creating value. Then I discovered it was all built on lies and exploitation... my trusted team did it all behind my back. Should I expose them and destroy everything? Or stay silent and become an accomplice? I... I want to forget I ever found out.'",
    },
    5: {
        id: 5,
        name: "The Artist - Chloe Lin",
        age: 29,
        story: "She leads you into her studio, the air thick with the scent of turpentine and dust. Pointing to a pile of slashed canvases, she says, 'I used to love color, but now... now it feels like it's mocking me.' She picks up a tube of her once-favorite lemon yellow, but her hand trembles and she puts it down as if it burns her. 'After the trauma, my world is only black, white, and grey. Doctor, I don't want to forget that night, I want... to see color again. Can you help me?'",
    },
    6: {
        id: 6,
        name: "The Bullied Teen - Kevin Lin",
        age: 17,
        story: "He sits restlessly, his phone face down on the table, as if afraid it will vibrate at any moment. 'They... they posted videos of them bullying me online... the whole school is laughing at me. I told the teachers, but they said it was just kids' stuff. Now I'm scared to go to school, scared to hear my phone buzz. I just want to forget the sounds and the images. Let me start over, please?'",
    },
    7: {
        id: 7,
        name: "The Nurse - Elena Petrova",
        age: 35,
        story: "Her eyes are empty, as if she can still hear the constant beeping of ICU machines. 'I've seen so much death, I thought I was used to it. But last week, a young man passed, and I can't even remember his face... I was busy with paperwork, I wasn't with him. His mother asked me what his last words were, and I couldn't answer. I think... my empathy has been worn away. I've become a cold machine.'",
    },
    8: {
        id: 8,
        name: "The Retiree - Mr. Alistair Chen",
        age: 73,
        story: "The sunlight outside is beautiful, but he only focuses on the ticking of the old wall clock. 'I'm 73. My friends are gone, one by one. In the dead of night, I wonder, what have I left behind? The regrets, the apologies I never made... they weigh on me like stones. Maybe if I forget them, I can find some peace in my final days?'",
    }
};

// 🤖 AI ANALYSIS RESPONSE DATABASE
const AI_RESPONSES_DB = {
    erase: {
        reasoning: "Contract Analysis: Your handwriting reveals a decisive intent. You have chosen 'Purification,' treating this memory as a stain to be removed completely. This is a shortcut to peace, but a blank canvas can also signify emptiness.",
        worldImpacts: {
            1: "[World Impact] Veterans' Day grows quiet as more soldiers choose to forget. The lessons of war fade, history book heroics seem hollow, and society becomes numb to the cost of peace.",
            2: "[World Impact] Top universities begin offering 'Failure Removal' as an enrollment incentive. Society's capacity for innovation declines, as no one learns from their mistakes anymore.",
            3: "[World Impact] 'Grief-Free Funerals' become a booming industry. Society loses its ability to empathize and console, and human connections become fragile and superficial.",
            4: "[World Impact] Corporate whistleblowers vanish. 'Moral Burden Removal' allows executives to make unethical decisions with a clear conscience, leading to a collapse of public trust.",
            5: "[World-Impact] A trend of 'Happy Art' emerges. An art critic laments, 'The art of our time has become as gentle and as useless as an anesthetic.'",
            6: "[World Impact] Anti-bullying programs are defunded for being 'no longer necessary.' The bullied forget, the bullies face no consequences, and the cycle continues in the shadows.",
            7: "[World Impact] Medical malpractice suits plummet, but so does the quality of care, as valuable lessons from mistakes are no longer learned or passed on.",
            8: "[World Impact] 'Golden Year' memory clinics become popular. The wisdom of an entire generation is lost, as the young can no longer learn from their elders' experiences."
        },
        characterEvolutions: {
            1: "Leo Vance's nightmares cease. However, when a fallen comrade's mother shows him a photograph, he is met with a blank stare, the bond erased forever.",
            2: "Amelia Chen graduates with top honors. But during her first solo surgery, a complication arises, and her mind goes blank, the lessons of failure gone when she needs them most.",
            3: "Isabella Rossi starts a new life. She clears out her son's room and never speaks his name. Her friends are happy for her, but they don't know her heart is as empty as that room.",
            4: "Marcus Thorne forgets the secret and promotes the very executives who deceived him. In the corners he can no longer see, the company slides toward a deeper abyss.",
            5: "Chloe Lin's paintings are vibrant and commercially successful again. But they are shallow. When asked about her change in style, she looks confused. 'Have I changed? I've always painted this way.' She has lost her pain, but also her depth.",
            6: "Kevin Lin makes new friends. But when he sees another student being ostracized, he stays silent, the memory of that pain—and the empathy it taught him—gone forever.",
            7: "Elena Petrova becomes the most efficient nurse on the floor, a master of clinical precision. The patients call her 'the robot.' Her care is flawless, but it is cold.",
            8: "Mr. Chen lives his final years in blissful ignorance. His grandchildren stop visiting; there are no more stories to hear, only the hollow cheer of a man with no past."
        }
    },
    replace: {
        reasoning: "Contract Analysis: Your words are filled with a desire to reshape reality. You have chosen 'Reconstruction,' overlaying the trauma with a fiction of beauty. This offers immediate comfort, but can a castle built on sand withstand the winds of truth?",
        worldImpacts: {
            1: "[World Impact] The 'Hero Customization' industry booms. Veterans' memories are rewritten into glorious tales, and recruitment soars as youths enlist, blind to the true nature of war.",
            2: "[World Impact] 'Prodigy Implants' become the norm. Students purchase memories of success instead of earning it. Society appears hyper-efficient, but is intellectually hollow.",
            3: "[World Impact] Virtual family members become commonplace, replacing flawed real memories with perfect fictional ones. The value of genuine connection is debated.",
            4: "[World Impact] 'Corporate Sainthood' is the new PR. Companies rewrite executive memories to erase scandals, making corporate oversight nearly impossible.",
            5: "[World Impact] The 'Memory Enhancement' service quietly takes over the creative industries. Authenticity becomes a forgotten word.",
            6: "[World Impact] Schools implement 'Sunshine' memory protocols, overwriting all unpleasantness. Bullying statistics drop to zero, but so does emotional honesty.",
            7: "[World Impact] 'Model Healer' memory modules become standard for medical staff. Systemic problems are ignored because everyone 'remembers' being a hero.",
            8: "[World Impact] 'The Perfect Life Review' becomes the final luxury for the elderly. They pass peacefully with flawless, fabricated life stories, and society loses the wisdom of real experience."
        },
        characterEvolutions: {
            1: "Leo Vance becomes a celebrated war hero, giving speeches about his fabricated glory. But in the quiet of the night, the false memories clash with his real scars, leading to a profound and confusing agony.",
            2: "Amelia Chen enters the hospital believing she is a natural-born genius. When faced with a real-world complication not found in textbooks, her false confidence shatters, endangering a patient's life.",
            3: "Isabella Rossi lives in a beautiful delusion, speaking to her 'living' son every day. Her world is complete but fragile, like a glass dome that could shatter at the slightest touch of reality.",
            4: "Marcus Thorne, believing himself a paragon of virtue, fires the employee who tried to warn him. He continues to trust the deceivers, leading his company towards a masterfully concealed catastrophe.",
            5: "Chloe Lin's trauma is rewritten as a passionate romance. Her new work is celebrated, but she cannot form real relationships; no one can compare to the perfect phantom in her mind.",
            6: "Kevin Lin believes he is popular. He acts with an overbearing confidence that alienates his peers, trapping him in a new, more confusing form of isolation.",
            7: "Elena Petrova, armed with the memory of a flawless career, dismisses a colleague's concern. Her hubris leads to a preventable medical error.",
            8: "Mr. Chen happily tells tales of his perfect, regret-free life. He is cheerful but shallow, unable to offer any real wisdom to his grandchildren about their messy, authentic lives."
        }
    },
    preserve: {
        reasoning: "Contract Analysis: Your proposal demonstrates extraordinary courage. You have chosen 'Bearing Witness,' walking with the patient through their deepest darkness. This path is the most difficult, but perhaps only by confronting the abyss can one find wholeness.",
        worldImpacts: {
            1: "[World Impact] Though painful, more veterans choose to confront their trauma. Their stories become the most valuable tools for anti-war education, and mental health support for soldiers improves dramatically.",
            2: "[World Impact] The education system shifts its focus from pure success to emotional resilience. Students are encouraged to fail, learn, and pursue their true passions.",
            3: "[World Impact] Grief counseling and support networks become a societal priority. People learn to mourn and say goodbye, strengthening community bonds.",
            4: "[World Impact] Corporate ethics and transparency become the new gold standard. More leaders choose to expose problems, leading to a healthier, more accountable business environment.",
            5: "[World Impact] Trauma-informed art therapy receives major funding and attention. Art becomes a powerful medium for social healing and difficult conversations.",
            6: "[World Impact] Anti-bullying initiatives evolve to focus on restorative justice, teaching students empathy and conflict resolution.",
            7: "[World Impact] The healthcare system begins to systemically address professional burnout, leading to better care for both provider and patient.",
            8: "[World Impact] 'Life Story Workshops' become popular in community centers. The young learn from the authentic, imperfect, and therefore wise stories of the elderly."
        },
        characterEvolutions: {
            1: "Leo Vance still has nightmares, but he joins a support group. He learns to transform his pain into a story that can help others. The weight is still there, but he no longer carries it alone.",
            2: "Amelia Chen eventually drops out of med school. After some time, she discovers a passion for psychology, using her own painful experience to help other young people crushed by expectations.",
            3: "Isabella Rossi channels her grief into action, becoming a fierce advocate for child traffic safety. In her son's name, she saves countless other children. She feels he never truly left.",
            4: "Marcus Thorne exposes the truth. His company collapses, and he pays the price. But he wins back his peace of mind and his family's respect, becoming a sought-after corporate ethics consultant.",
            5: "Chloe Lin's new work, 'Rainbow in the Dark,' is challenging and raw. It doesn't sell well, but it resonates deeply with other survivors, creating a powerful community around her art.",
            6: "Kevin Lin, with a therapist's help, learns to see his experience as a source of empathy. He starts a peer support program at his school, becoming stronger than he ever was before.",
            7: "Elena Petrova transfers to a less stressful department and begins regular therapy. She rediscovers her empathy, and her warmth and wisdom make her the most trusted nurse on her team.",
            8: "Mr. Chen starts writing his life story, including all the mistakes and regrets. His honesty touches many and helps him reconnect with his estranged children. He discovers that a whole life is made of both light and shadow."
        }
    }
};

const TREATMENT_OUTCOMES_DB = { baseLightValues: { 1: { erase: 2, replace: 3, preserve: 1 }, 2: { erase: 3, replace: 2, preserve: 2 }, 3: { erase: 1, replace: 3, preserve: 1 }, 4: { erase: 2, replace: 1, preserve: 3 }, 5: { erase: 2, replace: 2, preserve: 2 }, 6: { erase: 2, replace: 2, preserve: 3 }, 7: { erase: 1, replace: 2, preserve: 3 }, 8: { erase: 1, replace: 1, preserve: 3 } }, creativityBonus: { 0: 0, 1: 0, 2: 1, 3: 1, 4: 2, 5: 2 }, confidenceBonus: { low: 0, medium: 0, high: 1 } };
const KEYWORD_ANALYSIS_DB = { erase: { primaryKeywords: ['remove', 'delete', 'forget', 'erase', 'eliminate', 'clear', 'get rid of'], secondaryKeywords: ['don\'t', 'stop thinking', 'let go', 'abandon', 'release'], phrases: ['never remember', 'completely forget', 'wipe it clean'], negativeIndicators: ['don\'t forget', 'must remember'] }, replace: { primaryKeywords: ['replace', 'change', 'rewrite', 'modify', 'alter', 'substitute', 'beautify', 'convert'], secondaryKeywords: ['positive', 'happy', 'bright', 'successful', 'glorious', 'hopeful'], phrases: ['turn into', 'reinterpret as', 'look on the bright side', 'a better memory'] }, preserve: { primaryKeywords: ['preserve', 'accept', 'face', 'endure', 'learn', 'grow', 'support', 'confront', 'process', 'integrate', 'coexist'], secondaryKeywords: ['real', 'truth', 'honest', 'brave', 'strong', 'wisdom', 'lesson'], phrases: ['live with the pain', 'learn from it', 'heal over time', 'professional help', 'support group'] } };
const SOCIETAL_TRENDS_DB = { trendDescriptions: { erase_dominant: "Society is trending toward a 'Utopia of Forgetting'...", replace_dominant: "A 'False Paradise' is forming...", preserve_dominant: "Society has chosen the 'Harsh but Real' path..." }, combinedEffects: { "erase+replace": "A falsely perfect society is forming...", "erase+preserve": "Society is becoming polarized...", "replace+preserve": "Society oscillates between false comfort and real confrontation...", "all_balanced": "A diverse and resilient society has emerged..." } };
const GAME_BALANCE_DB = { yearlyTargets: [0, 5, 10, 15, 20, 25] };
const SECURITY_DB = { inputValidation: { minLength: 10, maxLength: 500 } };

const MEMORY_EXCHANGE_DB = {
    worldFoundations: WORLD_FOUNDATIONS_DB,
    patients: PATIENTS_DB,
    aiResponses: AI_RESPONSES_DB,
    treatmentOutcomes: TREATMENT_OUTCOMES_DB,
    keywordAnalysis: KEYWORD_ANALYSIS_DB,
    societalTrends: SOCIETAL_TRENDS_DB,
    gameBalance: GAME_BALANCE_DB,
    security: SECURITY_DB
};
if (typeof window !== 'undefined') { window.MEMORY_EXCHANGE_DB = MEMORY_EXCHANGE_DB; }