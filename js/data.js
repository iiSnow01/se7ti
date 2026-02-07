const Se7tiData = {
  config: {
    hotlines: {
      samu: "141",
      medicalAdvice: "080 100 47 47",
      fire: "15",
      police: "19"
    }
  },
  symptoms: [
    {
      id: "fever",
      severity: "medium",
      title: {
        dz: "Sokhna (fièvre)",
        ar: "الحمّى",
        fr: "Fièvre"
      },
      desc: {
        dz: "Tal3a f ddarajat l7rara f jsm.",
        ar: "ارتفاع في درجة حرارة الجسم.",
        fr: "Élévation de la température du corps."
      },
      causes: {
        dz: "T3b, t3dda, lgripa, t7ssas.",
        ar: "عدوى، إنفلونزا، التهاب.",
        fr: "Infection, grippe, inflammation."
      },
      effets: {
        dz: "D3f, doran, ta3ab.",
        ar: "تعب، دوخة، قشعريرة.",
        fr: "Fatigue, frissons, malaise."
      },
      alertSigns: {
        dz: "Sokhna ktr mn 3 jours, tnbih mzyan, tl9i bzf.",
        ar: "حمّى لأكثر من 3 أيام، صعوبة تنفس.",
        fr: "Fièvre > 3 jours, difficulté à respirer."
      },
      homeTips: {
        dz: "Chrob lma, rtah, t9iyas l7rara b ntidam.",
        ar: "اشرب الماء، استرح، راقب الحرارة.",
        fr: "Hydratez-vous, reposez-vous, surveillez la température."
      },
      avoid: {
        dz: "Mtjbrch rassek tkhrej ila 7ritk tal3a.",
        ar: "لا تجهد نفسك.",
        fr: "Évitez l'effort intense."
      },
      whereToGo: {
        dz: "Mstachfa aw markaz s7i.",
        ar: "مركز صحي أو مستشفى.",
        fr: "Centre de santé ou hôpital."
      },
      whenToConsult: {
        dz: "Ila sokhna kat3awd wla ma tzoulch.",
        ar: "إذا استمرت الحمّى أو ساءت.",
        fr: "Si la fièvre persiste ou s'aggrave."
      }
    },
    {
      id: "cough",
      severity: "low",
      title: {
        dz: "K7a",
        ar: "سعال",
        fr: "Toux"
      },
      desc: {
        dz: "K7a b sda aw bla.",
        ar: "سعال جاف أو مع بلغم.",
        fr: "Toux sèche ou grasse."
      },
      causes: {
        dz: "Zkam, t7ssas, dkhana.",
        ar: "زكام، حساسية، تدخين.",
        fr: "Rhume, allergie, fumée."
      },
      effets: {
        dz: "Irtia7 m3a sda, t3ya.",
        ar: "إجهاد الحلق.",
        fr: "Irritation de la gorge."
      },
      alertSigns: {
        dz: "K7a m3a tnfis s3ib aw dm f lblghm.",
        ar: "صعوبة تنفس أو دم في البلغم.",
        fr: "Gêne respiratoire ou sang dans les expectorations."
      },
      homeTips: {
        dz: "Chrob lma, hmar shwiya, b3d 3la dkhana.",
        ar: "السوائل الدافئة وتجنب التدخين.",
        fr: "Boissons chaudes, éviter la fumée."
      },
      avoid: {
        dz: "Mt9rabsch mn lbarid bzf.",
        ar: "تجنب البرودة المفرطة.",
        fr: "Évitez le froid excessif."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila k7a b9at aktar mn simana.",
        ar: "إذا استمر السعال أكثر من أسبوع.",
        fr: "Si la toux dure plus d'une semaine."
      }
    },
    {
      id: "headache",
      severity: "medium",
      title: {
        dz: "Sda",
        ar: "صداع",
        fr: "Maux de tête"
      },
      desc: {
        dz: "Wja3 f rassek.",
        ar: "ألم في الرأس.",
        fr: "Douleur à la tête."
      },
      causes: {
        dz: "T3ab, naqss noum, stres.",
        ar: "إرهاق، قلة نوم، توتر.",
        fr: "Fatigue, manque de sommeil, stress."
      },
      effets: {
        dz: "Doran, 9illat tarkiz.",
        ar: "دوخة وصعوبة تركيز.",
        fr: "Vertiges, baisse de concentration."
      },
      alertSigns: {
        dz: "Sda qwi bzf wla m3ah t9y2, tb3a9.",
        ar: "صداع شديد مع قيء أو تشوش رؤية.",
        fr: "Céphalée intense avec vomissements ou troubles visuels."
      },
      homeTips: {
        dz: "Rtah, shrob lma, b3d 3la daw l9wi.",
        ar: "الراحة والهدوء وشرب الماء.",
        fr: "Repos, hydratation, calme."
      },
      avoid: {
        dz: "Mts7rch bzf f l3chya.",
        ar: "تجنب الشاشات لفترات طويلة.",
        fr: "Limiter les écrans."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila sda ktr wla t3awd kol nhar.",
        ar: "إذا تكرر الصداع يومياً.",
        fr: "Si les maux de tête sont quotidiens."
      }
    },
    {
      id: "sore_throat",
      severity: "low",
      title: {
        dz: "7ri9 f l7la9",
        ar: "التهاب الحلق",
        fr: "Mal de gorge"
      },
      desc: {
        dz: "I7ssas b 7ri9 aw wja3 f l7la9.",
        ar: "ألم أو حرقة في الحلق.",
        fr: "Douleur ou irritation de la gorge."
      },
      causes: {
        dz: "Zkam, bard, t7ssas.",
        ar: "زكام، حساسية.",
        fr: "Rhume, allergie."
      },
      effets: {
        dz: "S3oba f lkl, sda.",
        ar: "صعوبة بلع.",
        fr: "Difficulté à avaler."
      },
      alertSigns: {
        dz: "S3oba f tnfis aw b7al t7ssas shdid.",
        ar: "صعوبة في التنفس.",
        fr: "Difficulté respiratoire."
      },
      homeTips: {
        dz: "Chrob mrat, ghssol l7la9 b ma3dn.",
        ar: "مشروبات دافئة وغرغرة بماء مالح.",
        fr: "Boissons tièdes, gargarisme eau salée."
      },
      avoid: {
        dz: "Mtchrbch bared bzf.",
        ar: "تجنب المشروبات الباردة جداً.",
        fr: "Éviter les boissons très froides."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila wja3 b9a aktar mn simana.",
        ar: "إذا استمر الألم أكثر من أسبوع.",
        fr: "Si la douleur dure plus d'une semaine."
      }
    },
    {
      id: "stomach_pain",
      severity: "medium",
      title: {
        dz: "Wja3 f lma3da",
        ar: "ألم في المعدة",
        fr: "Douleur abdominale"
      },
      desc: {
        dz: "Wja3 f lkarsh aw lma3da.",
        ar: "ألم في البطن.",
        fr: "Douleur dans le ventre."
      },
      causes: {
        dz: "Ma9la, tsmom, stres.",
        ar: "أطعمة دسمة، توتر.",
        fr: "Aliments gras, stress."
      },
      effets: {
        dz: "Ghta, na9s chahya.",
        ar: "غثيان وفقدان شهية.",
        fr: "Nausées, perte d'appétit."
      },
      alertSigns: {
        dz: "Wja3 qwi bzf aw m3ah dm f lkhra.",
        ar: "ألم شديد أو دم في البراز.",
        fr: "Douleur intense ou sang dans les selles."
      },
      homeTips: {
        dz: "Akla khfifa, shrob lma.",
        ar: "أطعمة خفيفة وشرب الماء.",
        fr: "Alimentation légère, hydratation."
      },
      avoid: {
        dz: "Mtaklch ma9la aw 7ar.",
        ar: "تجنب الأطعمة الحارة.",
        fr: "Éviter les plats épicés."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila wja3 b9a aw zed.",
        ar: "إذا استمر أو ازداد الألم.",
        fr: "Si la douleur persiste ou s'aggrave."
      }
    },
    {
      id: "nausea",
      severity: "low",
      title: {
        dz: "Ghtiyan",
        ar: "غثيان",
        fr: "Nausée"
      },
      desc: {
        dz: "I7ssas bghit t9y2.",
        ar: "إحساس بالرغبة في القيء.",
        fr: "Envie de vomir."
      },
      causes: {
        dz: "M3ida mzyana, tsmom.",
        ar: "عسر هضم، تسمم.",
        fr: "Indigestion, intoxication."
      },
      effets: {
        dz: "Na9s chahya.",
        ar: "فقدان شهية.",
        fr: "Perte d'appétit."
      },
      alertSigns: {
        dz: "Qy2 m3ah dm aw s3oba f tnfis.",
        ar: "قيء دموي أو صعوبة تنفس.",
        fr: "Vomissements avec sang ou gêne respiratoire."
      },
      homeTips: {
        dz: "Chrob lma bshwiya, kl khfif.",
        ar: "سوائل بكميات صغيرة.",
        fr: "Petites gorgées d'eau, repas légers."
      },
      avoid: {
        dz: "Mtaklch bzf d9i9a.",
        ar: "تجنب الوجبات الكبيرة.",
        fr: "Éviter les gros repas."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila lghityan b9a aktar mn nharin.",
        ar: "إذا استمر الغثيان أكثر من يومين.",
        fr: "Si la nausée dure plus de 2 jours."
      }
    },
    {
      id: "vomiting",
      severity: "medium",
      title: {
        dz: "T9y2",
        ar: "قيء",
        fr: "Vomissements"
      },
      desc: {
        dz: "Khrej lmakla mn lma3da.",
        ar: "خروج محتوى المعدة.",
        fr: "Rejet du contenu de l'estomac."
      },
      causes: {
        dz: "Tsmom, virus, dwayat.",
        ar: "تسمم، فيروس، أدوية.",
        fr: "Intoxication, virus, médicaments."
      },
      effets: {
        dz: "Jafaf, d3f.",
        ar: "جفاف وإرهاق.",
        fr: "Déshydratation, fatigue."
      },
      alertSigns: {
        dz: "Dm f lqy2, 3tch shdid, dban l3in.",
        ar: "دم في القيء، جفاف شديد.",
        fr: "Sang dans les vomissements, déshydratation sévère."
      },
      homeTips: {
        dz: "Chrob lma bshwiya, rtah.",
        ar: "سوائل ببطء وراحة.",
        fr: "Hydratation progressive, repos."
      },
      avoid: {
        dz: "Mtaklch f daraj.",
        ar: "تجنب الأكل السريع.",
        fr: "Éviter de manger trop vite."
      },
      whereToGo: {
        dz: "Mstachfa ila shdit.",
        ar: "مستشفى إذا كان شديداً.",
        fr: "Hôpital si sévère."
      },
      whenToConsult: {
        dz: "Ila lqy2 b9a ktr mn nhar.",
        ar: "إذا استمر القيء أكثر من يوم.",
        fr: "Si les vomissements durent plus d'une journée."
      }
    },
    {
      id: "diarrhea",
      severity: "medium",
      title: {
        dz: "Is-hal",
        ar: "إسهال",
        fr: "Diarrhée"
      },
      desc: {
        dz: "Khrja b zaf w kayna.",
        ar: "براز مائي ومتكرر.",
        fr: "Selles liquides fréquentes."
      },
      causes: {
        dz: "Tsmom, akl mkhddar.",
        ar: "تسمم غذائي.",
        fr: "Intoxication alimentaire."
      },
      effets: {
        dz: "Jafaf, d3f.",
        ar: "جفاف.",
        fr: "Déshydratation."
      },
      alertSigns: {
        dz: "Dm f lkhra, sda shdid.",
        ar: "دم في البراز.",
        fr: "Sang dans les selles."
      },
      homeTips: {
        dz: "Chrob lma, mrat, akl khfif.",
        ar: "سوائل ومحاليل تعويض.",
        fr: "Hydratation, solution de réhydratation."
      },
      avoid: {
        dz: "Mtaklch ma9la.",
        ar: "تجنب الأطعمة الدسمة.",
        fr: "Éviter les aliments gras."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila is-hal b9a aktar mn nharin.",
        ar: "إذا استمر أكثر من يومين.",
        fr: "Si la diarrhée dure plus de 2 jours."
      }
    },
    {
      id: "chest_pain",
      severity: "high",
      title: {
        dz: "Wja3 f ssder",
        ar: "ألم في الصدر",
        fr: "Douleur thoracique"
      },
      desc: {
        dz: "Wja3 f ssder waqt nfas.",
        ar: "ألم في الصدر.",
        fr: "Douleur dans la poitrine."
      },
      causes: {
        dz: "Stres, moshkil tnfis, lb9.",
        ar: "توتر أو مشاكل تنفس.",
        fr: "Stress ou problème respiratoire."
      },
      effets: {
        dz: "Khtira ila m3aha tnfis s3ib.",
        ar: "قد يكون خطيراً.",
        fr: "Peut être sérieux."
      },
      alertSigns: {
        dz: "Wja3 qwi, tnfis s3ib, t3raq.",
        ar: "ألم شديد مع ضيق نفس.",
        fr: "Douleur intense avec essoufflement."
      },
      homeTips: {
        dz: "Rtah w tlb lmsaad.",
        ar: "استرح واطلب المساعدة.",
        fr: "Repos et demander de l'aide."
      },
      avoid: {
        dz: "Mtstnash ila kayn wja3 qwi.",
        ar: "لا تنتظر إذا كان الألم شديداً.",
        fr: "Ne pas attendre si la douleur est forte."
      },
      whereToGo: {
        dz: "Urgences.",
        ar: "الطوارئ.",
        fr: "Urgences."
      },
      whenToConsult: {
        dz: "Dghya ila kayn wja3 f ssder.",
        ar: "فوراً إذا كان الألم شديداً.",
        fr: "Immédiatement si douleur intense."
      }
    },
    {
      id: "short_breath",
      severity: "high",
      title: {
        dz: "Di9a f tnfis",
        ar: "ضيق تنفس",
        fr: "Essoufflement"
      },
      desc: {
        dz: "S3oba f tnfis.",
        ar: "صعوبة في التنفس.",
        fr: "Difficulté à respirer."
      },
      causes: {
        dz: "Rbou, infeksyon, t3ab.",
        ar: "ربو أو عدوى.",
        fr: "Asthme ou infection."
      },
      effets: {
        dz: "Khatar ila shdid.",
        ar: "خطر إذا كان شديداً.",
        fr: "Risque si sévère."
      },
      alertSigns: {
        dz: "Fch3al f shfayf, dkhla s3iba.",
        ar: "زرقة الشفاه.",
        fr: "Lèvres bleutées."
      },
      homeTips: {
        dz: "Jls m3a tnfis hdi.",
        ar: "اجلس وتنفس ببطء.",
        fr: "S'asseoir, respirer lentement."
      },
      avoid: {
        dz: "Mtsirch lma3moul.",
        ar: "تجنب المجهود.",
        fr: "Éviter l'effort."
      },
      whereToGo: {
        dz: "Urgences.",
        ar: "الطوارئ.",
        fr: "Urgences."
      },
      whenToConsult: {
        dz: "F l7al ila tnfis s3ib.",
        ar: "فوراً إذا كان شديداً.",
        fr: "Immédiatement si sévère."
      }
    },
    {
      id: "rash",
      severity: "low",
      title: {
        dz: "T9achor f lild",
        ar: "طفح جلدي",
        fr: "Éruption cutanée"
      },
      desc: {
        dz: "B9a3 aw h2a f lild.",
        ar: "بقع أو احمرار.",
        fr: "Taches ou rougeurs."
      },
      causes: {
        dz: "T7ssas, daw, makla.",
        ar: "حساسية.",
        fr: "Allergie."
      },
      effets: {
        dz: "Hkka.",
        ar: "حكة.",
        fr: "Démangeaisons."
      },
      alertSigns: {
        dz: "Twrm f wjhh aw di9a f tnfis.",
        ar: "تورم الوجه أو ضيق تنفس.",
        fr: "Gonflement du visage ou gêne respiratoire."
      },
      homeTips: {
        dz: "Ndef lild, b3d 3la lmsabib.",
        ar: "حافظ على نظافة الجلد.",
        fr: "Garder la peau propre."
      },
      avoid: {
        dz: "Mt7kkch bzf.",
        ar: "لا تحك الجلد بقوة.",
        fr: "Ne pas gratter fort."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila t9achor b9a aw zed.",
        ar: "إذا تفاقم الطفح.",
        fr: "Si l'éruption s'aggrave."
      }
    },
    {
      id: "dizziness",
      severity: "medium",
      title: {
        dz: "Doran",
        ar: "دوخة",
        fr: "Vertiges"
      },
      desc: {
        dz: "I7ssas b darija tdoor.",
        ar: "إحساس بالدوران.",
        fr: "Sensation de rotation."
      },
      causes: {
        dz: "Na9s sukker, ta3ab.",
        ar: "انخفاض ضغط.",
        fr: "Baisse de tension."
      },
      effets: {
        dz: "S3oba f l2i9af.",
        ar: "عدم توازن.",
        fr: "Instabilité."
      },
      alertSigns: {
        dz: "Doran m3ah fa9dan w3i.",
        ar: "إغماء.",
        fr: "Perte de connaissance."
      },
      homeTips: {
        dz: "Jls w tnafs b shwiya.",
        ar: "اجلس بهدوء.",
        fr: "S'asseoir calmement."
      },
      avoid: {
        dz: "Mtsou9ch f hal.",
        ar: "تجنب القيادة.",
        fr: "Éviter de conduire."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila doran t3awd bzf.",
        ar: "إذا تكرر الدوار.",
        fr: "Si les vertiges se répètent."
      }
    },
    {
      id: "fatigue",
      severity: "low",
      title: {
        dz: "T3ab",
        ar: "إرهاق",
        fr: "Fatigue"
      },
      desc: {
        dz: "T3ab ktr mn l3ada.",
        ar: "تعب عام.",
        fr: "Fatigue inhabituelle."
      },
      causes: {
        dz: "Na9s noum, stres.",
        ar: "قلة نوم أو توتر.",
        fr: "Manque de sommeil, stress."
      },
      effets: {
        dz: "Na9s tarkiz.",
        ar: "ضعف التركيز.",
        fr: "Baisse de concentration."
      },
      alertSigns: {
        dz: "T3ab shdid m3ah sda aw tnfis s3ib.",
        ar: "إرهاق شديد مع أعراض أخرى.",
        fr: "Fatigue sévère avec autres symptômes."
      },
      homeTips: {
        dz: "Na3s kafi, akl mzyan.",
        ar: "نوم كافٍ وغذاء متوازن.",
        fr: "Sommeil et alimentation équilibrée."
      },
      avoid: {
        dz: "Matkhrjch tkhddem bzf.",
        ar: "تجنب الإجهاد.",
        fr: "Éviter le surmenage."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila t3ab b9a aktar mn simana.",
        ar: "إذا استمر الإرهاق أكثر من أسبوع.",
        fr: "Si la fatigue persiste plus d'une semaine."
      }
    },
    {
      id: "back_pain",
      severity: "medium",
      title: {
        dz: "Wja3 ddhr",
        ar: "ألم الظهر",
        fr: "Mal de dos"
      },
      desc: {
        dz: "Wja3 f ddhr aw l9tna.",
        ar: "ألم في الظهر.",
        fr: "Douleur au dos."
      },
      causes: {
        dz: "Jelous t9il, t3ab.",
        ar: "جلوس طويل.",
        fr: "Mauvaise posture."
      },
      effets: {
        dz: "S3oba f l7arka.",
        ar: "صعوبة الحركة.",
        fr: "Gêne dans les mouvements."
      },
      alertSigns: {
        dz: "Wja3 m3ah khadar f rjlin.",
        ar: "تنميل في الساقين.",
        fr: "Engourdissement des jambes."
      },
      homeTips: {
        dz: "Mchya khfifa, rtah.",
        ar: "تمارين خفيفة.",
        fr: "Étirements doux."
      },
      avoid: {
        dz: "Mthmlch 7wayj t9ila.",
        ar: "تجنب حمل الأوزان الثقيلة.",
        fr: "Éviter de porter lourd."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila wja3 b9a aktar mn simana.",
        ar: "إذا استمر أكثر من أسبوع.",
        fr: "Si la douleur persiste plus d'une semaine."
      }
    },
    {
      id: "burn",
      severity: "medium",
      title: {
        dz: "Hr9a",
        ar: "حرق",
        fr: "Brûlure"
      },
      desc: {
        dz: "Hr9a mn nâr aw ma skhon.",
        ar: "حرق بسبب حرارة.",
        fr: "Brûlure due à la chaleur."
      },
      causes: {
        dz: "Nâr, ma skhon.",
        ar: "نار أو ماء ساخن.",
        fr: "Feu, eau chaude."
      },
      effets: {
        dz: "Wja3 w 7mira.",
        ar: "ألم واحمرار.",
        fr: "Douleur et rougeur."
      },
      alertSigns: {
        dz: "Hr9a kbira aw t9achor kbira.",
        ar: "حرق كبير أو عميق.",
        fr: "Brûlure étendue ou profonde."
      },
      homeTips: {
        dz: "Brrd l blassa b ma bared 10 dq.",
        ar: "تبريد بالماء الفاتر 10 دقائق.",
        fr: "Refroidir à l'eau tempérée 10 min."
      },
      avoid: {
        dz: "Mat7ttch zt aw margarin.",
        ar: "لا تضع مواد دهنية.",
        fr: "Ne pas appliquer de corps gras."
      },
      whereToGo: {
        dz: "Mstachfa ila hr9a kbira.",
        ar: "مستشفى إذا كانت واسعة.",
        fr: "Hôpital si étendue."
      },
      whenToConsult: {
        dz: "Ila hr9a kbira aw f wjhh.",
        ar: "إذا كانت في الوجه أو واسعة.",
        fr: "Si au visage ou étendue."
      }
    },
    {
      id: "sprain",
      severity: "low",
      title: {
        dz: "Lwa7a (entorse)",
        ar: "التواء",
        fr: "Entorse"
      },
      desc: {
        dz: "Wja3 f mfr9 b3d t9lil.",
        ar: "ألم في المفصل بعد التواء.",
        fr: "Douleur après torsion d'une articulation."
      },
      causes: {
        dz: "T9lil f rjlin/ydin.",
        ar: "التواء مفصل.",
        fr: "Torsion d'articulation."
      },
      effets: {
        dz: "Twrm w wja3.",
        ar: "تورم وألم.",
        fr: "Gonflement et douleur."
      },
      alertSigns: {
        dz: "Ma tqdrch t7mel l wzn.",
        ar: "عدم القدرة على تحمل الوزن.",
        fr: "Impossible de supporter le poids."
      },
      homeTips: {
        dz: "Rtah, brrd, rfa3.",
        ar: "راحة ورفع الطرف.",
        fr: "Repos, glace, surélévation."
      },
      avoid: {
        dz: "Mt7rkkch bzf.",
        ar: "تجنب الحركة الزائدة.",
        fr: "Éviter de trop bouger."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila wja3 shdid aw twrm.",
        ar: "إذا كان الألم شديداً.",
        fr: "Si douleur intense."
      }
    },
    {
      id: "nosebleed",
      severity: "low",
      title: {
        dz: "Damm mn lmanqar",
        ar: "نزيف الأنف",
        fr: "Saignement de nez"
      },
      desc: {
        dz: "Damm kaykhrj mn lmanqar.",
        ar: "نزيف من الأنف.",
        fr: "Sang qui coule du nez."
      },
      causes: {
        dz: "Jfaf, dharb, t7ssas.",
        ar: "جفاف أو ضربة.",
        fr: "Sécheresse, choc."
      },
      effets: {
        dz: "Khouf w t3ya.",
        ar: "قلق.",
        fr: "Inquiétude."
      },
      alertSigns: {
        dz: "Damm ma kayb9ach y7bss.",
        ar: "نزيف لا يتوقف.",
        fr: "Saignement qui ne s'arrête pas."
      },
      homeTips: {
        dz: "Jls w 7ni rassk l9dam, 9bds lmanqar.",
        ar: "اجلس واثن الرأس للأمام واضغط الأنف.",
        fr: "Asseyez-vous, penchez la tête en avant, pincez le nez."
      },
      avoid: {
        dz: "Mat3yytch rassk l wara.",
        ar: "لا تمِل الرأس للخلف.",
        fr: "Ne pas pencher la tête en arrière."
      },
      whereToGo: {
        dz: "Tbib aw urgences ila dmm ktr.",
        ar: "طبيب أو طوارئ.",
        fr: "Médecin ou urgences."
      },
      whenToConsult: {
        dz: "Ila dmm b9a aktar mn 20 dq.",
        ar: "إذا استمر أكثر من 20 دقيقة.",
        fr: "Si ça dure plus de 20 minutes."
      }
    },
    {
      id: "ear_pain",
      severity: "medium",
      title: {
        dz: "Wja3 f lwdn",
        ar: "ألم الأذن",
        fr: "Douleur d'oreille"
      },
      desc: {
        dz: "Wja3 f lwdn.",
        ar: "ألم في الأذن.",
        fr: "Douleur dans l'oreille."
      },
      causes: {
        dz: "Lbarid, infeksyon.",
        ar: "برد أو التهاب.",
        fr: "Rhume ou infection."
      },
      effets: {
        dz: "Doran, sda.",
        ar: "دوخة.",
        fr: "Vertiges."
      },
      alertSigns: {
        dz: "Damm aw sda qwi.",
        ar: "دم أو ألم شديد.",
        fr: "Sang ou douleur intense."
      },
      homeTips: {
        dz: "Rtah, b3d 3la lma.",
        ar: "راحة وتجنب الماء.",
        fr: "Repos, éviter l'eau."
      },
      avoid: {
        dz: "Matdkhlch 7aja f lwdn.",
        ar: "لا تدخل أي شيء في الأذن.",
        fr: "Ne rien introduire dans l'oreille."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila wja3 b9a aw kayn sda.",
        ar: "إذا استمر الألم.",
        fr: "Si la douleur persiste."
      }
    },
    {
      id: "toothache",
      severity: "medium",
      title: {
        dz: "Wja3 ddrous",
        ar: "ألم الأسنان",
        fr: "Mal de dents"
      },
      desc: {
        dz: "Wja3 f ddrous.",
        ar: "ألم في الأسنان.",
        fr: "Douleur dentaire."
      },
      causes: {
        dz: "Tssous, liltihab.",
        ar: "تسوس أو التهاب.",
        fr: "Carie ou inflammation."
      },
      effets: {
        dz: "S3oba f lkl.",
        ar: "صعوبة الأكل.",
        fr: "Difficulté à manger."
      },
      alertSigns: {
        dz: "Twrm f wjhh.",
        ar: "تورم الوجه.",
        fr: "Gonflement du visage."
      },
      homeTips: {
        dz: "Ndef ddrous, mrat.",
        ar: "نظافة الفم.",
        fr: "Hygiène buccale."
      },
      avoid: {
        dz: "Mtaklch skkar bzf.",
        ar: "تجنب السكريات.",
        fr: "Éviter les sucres."
      },
      whereToGo: {
        dz: "Tbib lsnan.",
        ar: "طبيب الأسنان.",
        fr: "Dentiste."
      },
      whenToConsult: {
        dz: "Ila wja3 shdid aw twrm.",
        ar: "إذا كان الألم شديداً.",
        fr: "Si douleur intense."
      }
    },
    {
      id: "eye_irritation",
      severity: "low",
      title: {
        dz: "7ri9 f l3inin",
        ar: "تهيج العين",
        fr: "Irritation des yeux"
      },
      desc: {
        dz: "7ri9 aw 7mira f l3in.",
        ar: "احمرار أو حكة في العين.",
        fr: "Rougeur ou démangeaison."
      },
      causes: {
        dz: "Ghbar, t7ssas.",
        ar: "غبار أو حساسية.",
        fr: "Poussière, allergie."
      },
      effets: {
        dz: "Dimou3.",
        ar: "دموع.",
        fr: "Larmoiement."
      },
      alertSigns: {
        dz: "F9dan lru2ya aw wja3 qwi.",
        ar: "ألم شديد أو فقدان رؤية.",
        fr: "Douleur intense ou baisse de vision."
      },
      homeTips: {
        dz: "Ghsl b ma n9i.",
        ar: "غسل بماء نظيف.",
        fr: "Rincer à l'eau propre."
      },
      avoid: {
        dz: "Mthmsh 3inik.",
        ar: "لا تفرك العين.",
        fr: "Ne pas frotter."
      },
      whereToGo: {
        dz: "Tbib l3youn.",
        ar: "طبيب العيون.",
        fr: "Ophtalmologue."
      },
      whenToConsult: {
        dz: "Ila wja3 shdid aw ru2ya nqssat.",
        ar: "إذا نقصت الرؤية.",
        fr: "Si baisse de vision."
      }
    },
    {
      id: "allergy",
      severity: "medium",
      title: {
        dz: "Hassasiya",
        ar: "حساسية",
        fr: "Allergie"
      },
      desc: {
        dz: "I7ssas b hkka, a3tas, 7mira.",
        ar: "حكة أو عطاس.",
        fr: "Démangeaisons ou éternuements."
      },
      causes: {
        dz: "Ghbar, makla, daw.",
        ar: "غبار أو طعام.",
        fr: "Poussière, alimentation."
      },
      effets: {
        dz: "Hkka w t3ab.",
        ar: "إزعاج.",
        fr: "Inconfort."
      },
      alertSigns: {
        dz: "Twrm f wjhh aw di9a f tnfis.",
        ar: "تورم الوجه أو صعوبة تنفس.",
        fr: "Gonflement du visage ou gêne respiratoire."
      },
      homeTips: {
        dz: "B3d 3la lmsabib.",
        ar: "تجنب المسبب.",
        fr: "Éviter le déclencheur."
      },
      avoid: {
        dz: "Mtkhlttch m3a lmsabib.",
        ar: "لا تعرض نفسك للمسبب.",
        fr: "Ne pas s'exposer."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila l7ssasiya shdat.",
        ar: "إذا كانت شديدة.",
        fr: "Si l'allergie est sévère."
      }
    },
    {
      id: "anxiety",
      severity: "medium",
      title: {
        dz: "Tqll9",
        ar: "قلق",
        fr: "Anxiété"
      },
      desc: {
        dz: "I7ssas b khouf w qlq.",
        ar: "شعور بالتوتر والخوف.",
        fr: "Stress et inquiétude."
      },
      causes: {
        dz: "Stres, mashakil.",
        ar: "ضغوط الحياة.",
        fr: "Pressions du quotidien."
      },
      effets: {
        dz: "Nqss f noum.",
        ar: "اضطراب النوم.",
        fr: "Troubles du sommeil."
      },
      alertSigns: {
        dz: "S3oba f tnfis aw fa9dan w3i.",
        ar: "ضيق نفس شديد.",
        fr: "Gêne respiratoire sévère."
      },
      homeTips: {
        dz: "Tnafs bshwiya, hder m3a wa7d.",
        ar: "تنفس ببطء وتحدث مع شخص.",
        fr: "Respiration lente, parler à quelqu'un."
      },
      avoid: {
        dz: "Mtqll9ch bo7dek.",
        ar: "لا تبقى وحيداً إذا اشتد القلق.",
        fr: "Ne pas rester seul si ça s'aggrave."
      },
      whereToGo: {
        dz: "Tbib aw morchid nafsi.",
        ar: "طبيب أو مختص نفسي.",
        fr: "Médecin ou professionnel de santé mentale."
      },
      whenToConsult: {
        dz: "Ila l9l9 b9a w kay2atr 3la 7ayatk.",
        ar: "إذا أثر القلق على حياتك.",
        fr: "Si l'anxiété impacte votre vie."
      }
    },
    {
      id: "sore_muscle",
      severity: "low",
      title: {
        dz: "Wja3 l3dad",
        ar: "ألم العضلات",
        fr: "Douleurs musculaires"
      },
      desc: {
        dz: "Wja3 f l3dad b3d jhd.",
        ar: "ألم بعد جهد.",
        fr: "Douleurs après effort."
      },
      causes: {
        dz: "Riiyda aw khdma.",
        ar: "مجهود بدني.",
        fr: "Effort physique."
      },
      effets: {
        dz: "T3ab.",
        ar: "تعب.",
        fr: "Fatigue."
      },
      alertSigns: {
        dz: "Wja3 shdid w twrm kbir.",
        ar: "ألم شديد مع تورم.",
        fr: "Douleur intense avec gonflement."
      },
      homeTips: {
        dz: "Rtah w dir t9awimat khfifa.",
        ar: "راحة وتمارين خفيفة.",
        fr: "Repos et étirements doux."
      },
      avoid: {
        dz: "Mtkmlch l jhd.",
        ar: "تجنب المجهود.",
        fr: "Éviter l'effort."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila wja3 b9a aktar mn simana.",
        ar: "إذا استمر أكثر من أسبوع.",
        fr: "Si ça dure plus d'une semaine."
      }
    },
    {
      id: "high_blood_pressure",
      severity: "high",
      title: {
        dz: "Daght 3ali",
        ar: "ارتفاع الضغط",
        fr: "Hypertension (symptômes)"
      },
      desc: {
        dz: "Sda, doran, 9lb kaydrb.",
        ar: "صداع ودوخة وخفقان.",
        fr: "Maux de tête, vertiges, palpitations."
      },
      causes: {
        dz: "Stres, malkla mal7a.",
        ar: "توتر، ملح كثير.",
        fr: "Stress, excès de sel."
      },
      effets: {
        dz: "Khatar ila ma ttb3ch.",
        ar: "قد يكون خطيراً.",
        fr: "Peut être risqué."
      },
      alertSigns: {
        dz: "Sda qwi, tnfis s3ib, r2ya mghimma.",
        ar: "صداع شديد وضيق نفس.",
        fr: "Céphalée intense et essoufflement."
      },
      homeTips: {
        dz: "Rtah w b3d 3la lml7.",
        ar: "راحة وتقليل الملح.",
        fr: "Repos et limiter le sel."
      },
      avoid: {
        dz: "Mtaklch mal7 bzf.",
        ar: "تجنب الملح الزائد.",
        fr: "Éviter le sel excessif."
      },
      whereToGo: {
        dz: "Tbib l3a2ila.",
        ar: "طبيب الأسرة.",
        fr: "Médecin généraliste."
      },
      whenToConsult: {
        dz: "Ila kayn 3lamat khatra.",
        ar: "عند ظهور علامات خطيرة.",
        fr: "En cas de signes graves."
      }
    },
    {
      id: "low_blood_sugar",
      severity: "medium",
      title: {
        dz: "Na9s sukkar",
        ar: "انخفاض السكر",
        fr: "Hypoglycémie (symptômes)"
      },
      desc: {
        dz: "Doran, 3raq bared.",
        ar: "دوخة وتعرق بارد.",
        fr: "Vertiges, sueur froide."
      },
      causes: {
        dz: "Jou3, ta9yid f lkl.",
        ar: "تأخير الوجبات.",
        fr: "Repas sautés."
      },
      effets: {
        dz: "Ra3sha.",
        ar: "رعشة.",
        fr: "Tremblements."
      },
      alertSigns: {
        dz: "Fa9dan w3i.",
        ar: "فقدان الوعي.",
        fr: "Perte de connaissance."
      },
      homeTips: {
        dz: "Kl chi 7wayj sahl bshwiya.",
        ar: "تناول شيء خفيف.",
        fr: "Manger quelque chose de léger."
      },
      avoid: {
        dz: "Mthmlch bzf bla akl.",
        ar: "لا تبقَ بدون أكل طويلاً.",
        fr: "Ne pas rester longtemps sans manger."
      },
      whereToGo: {
        dz: "Tbib.",
        ar: "طبيب.",
        fr: "Médecin."
      },
      whenToConsult: {
        dz: "Ila t3awd bzf.",
        ar: "إذا تكرر كثيراً.",
        fr: "Si cela se répète."
      }
    },
    {
      id: "dehydration",
      severity: "medium",
      title: {
        dz: "Jfaf",
        ar: "جفاف",
        fr: "Déshydratation"
      },
      desc: {
        dz: "3tch shdid w fmm yashaf.",
        ar: "عطش شديد وجفاف فم.",
        fr: "Soif intense et bouche sèche."
      },
      causes: {
        dz: "Na9s lma, l7r.",
        ar: "قلة شرب الماء.",
        fr: "Manque d'eau."
      },
      effets: {
        dz: "Doran.",
        ar: "دوخة.",
        fr: "Vertiges."
      },
      alertSigns: {
        dz: "Ma kaynch bol, fa9dan w3i.",
        ar: "قلة البول أو إغماء.",
        fr: "Peu d'urine ou malaise."
      },
      homeTips: {
        dz: "Chrob lma bshwiya.",
        ar: "اشرب الماء تدريجياً.",
        fr: "Boire de l'eau progressivement."
      },
      avoid: {
        dz: "Mtsnash 7tta t3tch.",
        ar: "لا تنتظر العطش.",
        fr: "Ne pas attendre la soif."
      },
      whereToGo: {
        dz: "Tbib aw urgences ila shdid.",
        ar: "طبيب أو طوارئ إذا شديد.",
        fr: "Médecin ou urgences si sévère."
      },
      whenToConsult: {
        dz: "Ila l3lamat shdat.",
        ar: "إذا ساءت العلامات.",
        fr: "Si les signes s'aggravent."
      }
    },
    {
      id: "insomnia",
      severity: "low",
      title: {
        dz: "Ma kaynch noum",
        ar: "أرق",
        fr: "Insomnie"
      },
      desc: {
        dz: "S3oba f nnoum.",
        ar: "صعوبة في النوم.",
        fr: "Difficulté à dormir."
      },
      causes: {
        dz: "Stres, kafiin.",
        ar: "توتر أو كافيين.",
        fr: "Stress ou caféine."
      },
      effets: {
        dz: "T3ab nhar kmlu.",
        ar: "تعب خلال النهار.",
        fr: "Fatigue le jour."
      },
      alertSigns: {
        dz: "Ma kaynch noum m3a t3ab shdid.",
        ar: "إرهاق شديد.",
        fr: "Épuisement important."
      },
      homeTips: {
        dz: "Dir rutan, b3d 3la lshasha.",
        ar: "روتين نوم وابتعد عن الشاشات.",
        fr: "Routine de sommeil, limiter écrans."
      },
      avoid: {
        dz: "Mtchrabch 9hwa f l3chya.",
        ar: "تجنب الكافيين مساءً.",
        fr: "Éviter la caféine le soir."
      },
      whereToGo: {
        dz: "Tbib.",
        ar: "طبيب.",
        fr: "Médecin."
      },
      whenToConsult: {
        dz: "Ila l2rq b9a aktar mn siman.",
        ar: "إذا استمر أكثر من أسبوع.",
        fr: "Si cela dure plus d'une semaine."
      }
    },
    {
      id: "palpitations",
      severity: "high",
      title: {
        dz: "Nabat 9lb sria",
        ar: "خفقان",
        fr: "Palpitations"
      },
      desc: {
        dz: "9lb kaydrb b sr3a.",
        ar: "دقات قلب سريعة.",
        fr: "Battements rapides du cœur."
      },
      causes: {
        dz: "Stres, kafyine.",
        ar: "توتر أو كافيين.",
        fr: "Stress, caféine."
      },
      effets: {
        dz: "Doran, khouf.",
        ar: "دوخة وقلق.",
        fr: "Vertiges, anxiété."
      },
      alertSigns: {
        dz: "M3a tnfis s3ib aw wja3 ssder.",
        ar: "مع ضيق نفس أو ألم صدر.",
        fr: "Avec essoufflement ou douleur thoracique."
      },
      homeTips: {
        dz: "Tnafs bshwiya, b3d 3la l9hwa.",
        ar: "تنفس ببطء وابتعد عن الكافيين.",
        fr: "Respiration lente, éviter caféine."
      },
      avoid: {
        dz: "Mthmlch ljhd.",
        ar: "تجنب المجهود.",
        fr: "Éviter l'effort."
      },
      whereToGo: {
        dz: "Urgences ila kayn wja3 ssder.",
        ar: "الطوارئ مع ألم صدر.",
        fr: "Urgences si douleur thoracique."
      },
      whenToConsult: {
        dz: "F l7al ila kayn 3lamat khatra.",
        ar: "فوراً عند علامات خطيرة.",
        fr: "Immédiatement en cas de signes graves."
      }
    },
    {
      id: "skin_wound",
      severity: "medium",
      title: {
        dz: "Jr7",
        ar: "جرح",
        fr: "Plaie"
      },
      desc: {
        dz: "Jr7 f lild.",
        ar: "جرح في الجلد.",
        fr: "Plaie sur la peau."
      },
      causes: {
        dz: "Maqt3, hddra.",
        ar: "قطع أو خدش.",
        fr: "Coupure ou éraflure."
      },
      effets: {
        dz: "Nzif.",
        ar: "نزيف.",
        fr: "Saignement."
      },
      alertSigns: {
        dz: "Nzif ma kayb9ach.",
        ar: "نزيف لا يتوقف.",
        fr: "Saignement qui ne s'arrête pas."
      },
      homeTips: {
        dz: "Gssl b ma n9i w ghti.",
        ar: "اغسل بالماء النظيف وغطِّ.",
        fr: "Nettoyer à l'eau propre et couvrir."
      },
      avoid: {
        dz: "Matmssach b ydin wsakhin.",
        ar: "لا تلمس بيدين غير نظيفتين.",
        fr: "Ne pas toucher avec des mains sales."
      },
      whereToGo: {
        dz: "Tbib ila jr7 kbira.",
        ar: "طبيب إذا الجرح كبير.",
        fr: "Médecin si la plaie est importante."
      },
      whenToConsult: {
        dz: "Ila jrh kbira aw waskha.",
        ar: "إذا الجرح عميق أو ملوث.",
        fr: "Si plaie profonde ou sale."
      }
    }
  ],
  firstAid: [
    {
      id: "burn",
      title: { dz: "Hr9a khfifa", ar: "حرق بسيط", fr: "Brûlure légère" },
      steps: {
        dz: "Brrd blassa b ma bared 10 dq, ghti b chifon n9i.",
        ar: "برد المكان بماء فاتر 10 دقائق وغطه بقطعة نظيفة.",
        fr: "Refroidir à l'eau tiède 10 min et couvrir avec un tissu propre."
      },
      caution: {
        dz: "Ila hr9a kbira aw f wjhh, sir l urgences.",
        ar: "إذا كان الحرق كبيراً أو في الوجه، اذهب للطوارئ.",
        fr: "Si brûlure étendue ou au visage, aller aux urgences."
      }
    },
    {
      id: "bleeding",
      title: { dz: "Nzif khfif", ar: "نزيف خفيف", fr: "Petit saignement" },
      steps: {
        dz: "Dghat b chifon n9i 5 dq w rfa3 l ydd.",
        ar: "اضغط بقطعة نظيفة 5 دقائق وارفع الطرف.",
        fr: "Comprimer avec un tissu propre 5 min et surélever."
      },
      caution: {
        dz: "Ila nzif ma wqfch, sir l urgences.",
        ar: "إذا لم يتوقف النزيف، اذهب للطوارئ.",
        fr: "Si le saignement ne s'arrête pas, urgences."
      }
    },
    {
      id: "faint",
      title: { dz: "Tfa9dan w3i", ar: "إغماء", fr: "Malaise" },
      steps: {
        dz: "Khlle chi wa7d ydirk f wst mfto7, rfa3 rjlik.",
        ar: "ضع الشخص في مكان مفتوح وارفع ساقيه.",
        fr: "Allonger la personne, surélever les jambes."
      },
      caution: {
        dz: "Ila ma rja3ch l w3i b sr3a, tssil l urgences.",
        ar: "إذا لم يسترجع الوعي بسرعة، اتصل بالطوارئ.",
        fr: "Si la conscience ne revient pas vite, appeler les urgences."
      }
    },
    {
      id: "choking",
      title: { dz: "Ghra9", ar: "اختناق", fr: "Étouffement" },
      steps: {
        dz: "Sewl wach kay9dr ytkllm, ila la tssil l urgences.",
        ar: "تحقق إن كان يستطيع الكلام، وإلا اتصل بالطوارئ.",
        fr: "Vérifier s'il peut parler, sinon appeler les urgences."
      },
      caution: {
        dz: "Matdirch dakchi ila ma 3rftich.",
        ar: "لا تقم بمناورات إذا لم تكن مدرباً.",
        fr: "Ne pas faire de manœuvres sans formation."
      }
    },
    {
      id: "fracture",
      title: { dz: "Kssr", ar: "كسر", fr: "Fracture" },
      steps: {
        dz: "Mat7rrkch l3dam, rfa3 w thabt.",
        ar: "ثبّت الطرف ولا تحركه.",
        fr: "Immobiliser le membre sans le bouger."
      },
      caution: {
        dz: "Sir l urgences f l7al.",
        ar: "اذهب للطوارئ فوراً.",
        fr: "Aller aux urgences immédiatement."
      }
    },
    {
      id: "heat",
      title: { dz: "Sda3 mn l7r", ar: "إجهاد حراري", fr: "Coup de chaleur" },
      steps: {
        dz: "Syyb lshmss, sir l dhll, chrob lma.",
        ar: "انتقل للظل واشرب الماء.",
        fr: "Aller à l'ombre et boire de l'eau."
      },
      caution: {
        dz: "Ila kayn dkhla s3iba aw fa9dan w3i, urgences.",
        ar: "إذا كان هناك إغماء أو صعوبة تنفس، طوارئ.",
        fr: "Si malaise ou détresse respiratoire, urgences."
      }
    }
  ]
};
