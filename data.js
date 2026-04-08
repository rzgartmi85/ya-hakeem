/**
 * یا حکیم — Central Data Layer v3
 * fullBody content is now in articles/art-id.html files.
 * Edit this file for doctors, article metadata, specialties, and Risale content.
 */
const YH = {

  specialties: {
    "rheumatology":  { key:"rheumatology",  nameKu:"ڕۆماتیزم و جومگە",          icon:"🦵", cssClass:"sp-rheum",    descKu:"پسپۆڕییەکی تایبەت بە نەخۆشییەکانی جومگە، ئێسک، و دەستگای ئیمیونی — وەک ئارتریتی ڕۆماتۆید، نقرس، لووپوس، و ئۆستیوئارتریت.", patientGroups:[{key:"risale",icon:"📖",title:"رسالەی نور"},{key:"conditions",icon:"🫁",title:"نەخۆشییەکان"},{key:"symptoms",icon:"🔍",title:"نیشانە و هەستەکان"},{key:"medications",icon:"💊",title:"دەرمانەکان"}], proGroups:[{key:"risale-pro",icon:"📖",title:"رسالەی نور و پزیشک"},{key:"inflammatory",icon:"🔥",title:"Inflammatory Arthritis"},{key:"crystal",icon:"💎",title:"Crystal Arthropathies"},{key:"msk",icon:"🩻",title:"MSK & Referred Pain"},{key:"ctd",icon:"🧬",title:"Connective Tissue Diseases"},{key:"vasculitis",icon:"🩸",title:"Vasculitis"},{key:"osteoporosis",icon:"🦴",title:"Osteoporosis & Metabolic Bone"},{key:"investigations",icon:"🧪",title:"Investigations & Imaging"}] },
    "internal":      { key:"internal",      nameKu:"نەخۆشییەکانی هەناوی",       icon:"🫃", cssClass:"sp-internal", descKu:"پسپۆڕی کێشەکانی گەڕۆک، مێدە، رووگ، و کولیلکە.", patientGroups:[], proGroups:[] },
    "surgery":       { key:"surgery",       nameKu:"نەشتەرگەری گشتی",            icon:"🔪", cssClass:"sp-surgery",  descKu:"نەشتەرگەریی سەرانسەری لە هەموو پارچەکانی جەستەدا.", patientGroups:[], proGroups:[] },
    "ortho":         { key:"ortho",         nameKu:"ئێسک و شکاوی",               icon:"🦴", cssClass:"sp-ortho",    descKu:"پسپۆڕی ئەندامە بزووتنەوەییەکان — شکاو و جووتبوونی جومگە.", patientGroups:[], proGroups:[] },
    "urology":       { key:"urology",       nameKu:"میزەڕۆ و گورچیلە",           icon:"🫘", cssClass:"sp-urology",  descKu:"پسپۆڕی دەستگاکانی مێزکردن — گورچیلە، مەسانە.", patientGroups:[], proGroups:[] },
    "neuro":         { key:"neuro",         nameKu:"مێشک و دەمار",               icon:"🧠", cssClass:"sp-neuro",    descKu:"پسپۆڕی نەخۆشییەکانی دەستگای دەمارەوەیی.", patientGroups:[], proGroups:[] },
    "neurosurgery":  { key:"neurosurgery",  nameKu:"نەشتەرگەری مێشک و دەمار",    icon:"🧠", cssClass:"sp-neuro",    descKu:"نەشتەرگەریی دەستگای دەمارەوەیی.", patientGroups:[], proGroups:[] },
    "cardio":        { key:"cardio",        nameKu:"دڵ و قەستەرە",               icon:"🫀", cssClass:"sp-cardio",   descKu:"پسپۆڕی نەخۆشییەکانی دڵ و قەستەرە.", patientGroups:[], proGroups:[] },
    "thoracic":      { key:"thoracic",      nameKu:"سنگ و دڵ و بۆرییەکانی خوێن", icon:"🫁", cssClass:"sp-cardio",   descKu:"پسپۆڕی نەخۆشییەکانی سنگ و بۆرییەکانی خوێن.", patientGroups:[], proGroups:[] },
    "obgyn":         { key:"obgyn",         nameKu:"ژنان و مناڵبوون",             icon:"🤰", cssClass:"sp-obgyn",    descKu:"پسپۆڕی تەندروستی ژنان — دووگیانی، زایین.", patientGroups:[], proGroups:[] },
    "ophtho":        { key:"ophtho",        nameKu:"نەشتەرگەری چاو",              icon:"👁️", cssClass:"sp-ophtho",   descKu:"پسپۆڕی نەشتەرگەریی چاو — کاتاراکت، گلاوکۆم.", patientGroups:[], proGroups:[] },
    "ent":           { key:"ent",           nameKu:"قوڕگ و لوت و گوێ",           icon:"👂", cssClass:"sp-ent",      descKu:"پسپۆڕی قوڕگ، لوت، و گوێ.", patientGroups:[], proGroups:[] },
    "peds":          { key:"peds",          nameKu:"مناڵان و تازە لەدایکبووان",  icon:"👶", cssClass:"sp-peds",     descKu:"پسپۆڕی تەندروستی مناڵ.", patientGroups:[], proGroups:[] },
    "derm":          { key:"derm",          nameKu:"پێست",                        icon:"🧴", cssClass:"sp-derm",     descKu:"پسپۆڕی نەخۆشییەکانی پێست — ئێگزیما، سۆریاسیس.", patientGroups:[], proGroups:[] },
    "radio":         { key:"radio",         nameKu:"تیشک و سۆنار",               icon:"🩻", cssClass:"sp-radio",    descKu:"ئامرازی دیاگنۆزی وێنەگرتن.", patientGroups:[], proGroups:[] },
    "psych":         { key:"psych",         nameKu:"دەروونی",                     icon:"🧩", cssClass:"sp-psych",    descKu:"پسپۆڕی تەندروستی دەروونی.", patientGroups:[], proGroups:[] },
    "nutri":         { key:"nutri",         nameKu:"خۆراک و گەشە",               icon:"🥗", cssClass:"sp-nutri",    descKu:"پسپۆڕی خۆراک و گەشەی دروست.", patientGroups:[], proGroups:[] },
    "breast":        { key:"breast",        nameKu:"نەخۆشییەکانی مەمک",          icon:"🎗️", cssClass:"sp-breast",   descKu:"پسپۆڕی تەشخیص و چارەسەری نەخۆشییەکانی مەمک.", patientGroups:[], proGroups:[] },
    "anest":         { key:"anest",         nameKu:"بێهۆشکاری",                  icon:"💉", cssClass:"sp-anest",    descKu:"پسپۆڕی بێهۆشکردن و ئەندازەی دەرد لە کاتی نەشتەرگەریدا.", patientGroups:[], proGroups:[] }
  },

  spNameToKey: {
    "ڕۆماتیزم و جومگە":"rheumatology","نەخۆشییەکانی هەناوی":"internal","نەشتەرگەری گشتی":"surgery",
    "ئێسک و شکاوی":"ortho","میزەڕۆ و گورچیلە":"urology","مێشک و دەمار":"neuro",
    "نەشتەرگەری مێشک و دەمار":"neurosurgery","دڵ و قەستەرە":"cardio","سنگ و دڵ و بۆرییەکانی خوێن":"thoracic",
    "ژنان و مناڵبوون":"obgyn","نەشتەرگەری چاو":"ophtho","قوڕگ و لوت و گوێ":"ent",
    "مناڵان و تازە لەدایکبووان":"peds","پێست":"derm","تیشک و سۆنار":"radio",
    "دەروونی":"psych","خۆراک و گەشە":"nutri","نەخۆشییەکانی مەمک":"breast","بێهۆشکاری":"anest"
  },

  doctors: {
    "rzgar-tayb": {
      id:"rzgar-tayb", name:"دکتۆر ڕزگار تەیب مەعروف", specialty:"rheumatology",
      qualifications:"MBChB; ACR, ARMRK, ILBJH", clinic:"هەڵەبجەی شەهید / نزیک کانی قوڵکە",
      days:"—", phone:"07510032518", fee:"—",
      bio:"پسپۆڕی ڕۆماتیزم و نەخۆشییەکانی جومگە، خاوەنی مەمبەرایەتی ACR (ئەمریکا) و ARMRK (ئەردەن) و ILBJH (عێڕاق).",
      articles:["art-risale-pain","art-ra-basics","art-gout","art-knee-pain","art-dmards-patient","art-risale-pro","art-ra-clinical","art-gout-clinical","art-hip-knee-referred"]
    }
  },

  specialtyDoctors: {
    "rheumatology": [
      {id:"ayar-omar",     name:"دکتۆرە ئایار عمر عەلی",          q:"MBChB",                    cl:"کۆمەڵگەی پزیشکی بەخشین",            days:"شەممە، دوو شەممە، چوار شەممە", ph:"07511817571", fee:"—", dataId:null},
      {id:"rzgar-tayb",    name:"دکتۆر ڕزگار تەیب مەعروف",        q:"MBChB; ACR, ARMRK, ILBJH", cl:"هەڵەبجەی شەهید / نزیک کانی قوڵکە", days:"—",                            ph:"07510032518", fee:"—", dataId:"rzgar-tayb"},
      {id:"krmanj-hadi",   name:"دکتۆر کرمانج محمد هادی",          q:"MSc Rheumatology, MBChB",  cl:"تەلاری پزیشکی ئایندە",              days:"دوو شەممە، چوار شەممە",        ph:"07501957909", fee:"—", dataId:null},
      {id:"lawen-jamal",   name:"دکتۆرە لاوێن جمال",              q:"—",                         cl:"بەرجی تەندروستی زیرەک (سلێمانی)",  days:"—",                            ph:"07705670404", fee:"—", dataId:null},
      {id:"afin-mariwan",  name:"دکتۆرە ئەڤین مەریوان حمە ساڵح",  q:"—",                         cl:"—",                                  days:"—",                            ph:"—",           fee:"—", dataId:null},
      {id:"zhuan-ibrahim", name:"دکتۆرە ژوان ابراهیم",            q:"—",                         cl:"کۆمەڵگەی پزیشکی بەخشین (سلێمانی)", days:"—",                            ph:"07714841616", fee:"—", dataId:null}
    ]
  },

  articles: {
    "art-risale-pain":    { id:"art-risale-pain",    specialty:"rheumatology", level:"patient",       group:"risale",       icon:"📖", date:"2025-04", title:"دەردی جەستەیی و مانای ئەو لە رسالەی نوردا",                                                       synopsis:"سەید نورسی لە ئیشارەتول ئیعجازدا تەفسیری بنیاتنانی دەردی جەستەیی دەدات. ئەم وتارە پەیوەندییەکی نێوان ئازاری جەستەیی و گەشەی مانەویی دروست دەکات.",                   media:[], authors:["rzgar-tayb"], tags:["رسالەی نور","دەرد","سەبر","مانا"],           dateKu:"نیسان ٢٠٢٥" },
    "art-ra-basics":      { id:"art-ra-basics",      specialty:"rheumatology", level:"patient",       group:"conditions",   icon:"🤲", date:"2025-04", title:"ئارتریتی ڕۆماتۆید — نەخۆشییەکە بناسە پێش ئەوەی دواخوازییەکان دەستپێبکەن",                          synopsis:"ئارتریتی ڕۆماتۆید نەخۆشییەکی ئیمیونییە کە هەر تەمەنێک دەتوانێت تووشی بکات. قتبوونی بەیانیان، وورمی هەردوو لایەک، و مانبوونی بێ هۆکار — نیشانەکانی سەرەکیەتی.",   media:[], authors:["rzgar-tayb"], tags:["ئارتریت","ڕۆماتۆید","جومگە","ئیمیون"],       dateKu:"نیسان ٢٠٢٥" },
    "art-gout":           { id:"art-gout",           specialty:"rheumatology", level:"patient",       group:"conditions",   icon:"🔥", date:"2025-04", title:"نقرس — ئەو دەردە تووندەی شەوانەکان",                                                               synopsis:"نقرس نەخۆشییەکی کریستاڵییە لە جومگەدا، دەرمانکردنی ئاسانە بەڵام زۆرجار دوا دەکەوێت. بەڕێکخستنی خۆراک و دەرمانی دروست دەتوانن بەتەواوی پێشگیری لێ بکەن.",            media:[], authors:["rzgar-tayb"], tags:["نقرس","یوریک ئاسید","خۆراک","جومگە"],        dateKu:"نیسان ٢٠٢٥" },
    "art-knee-pain":      { id:"art-knee-pain",      specialty:"rheumatology", level:"patient",       group:"symptoms",     icon:"🦵", date:"2025-04", title:"ئایا ئەو دەردی زانووتەوە لە زانووکەتە نییە؟",                                                       synopsis:"ئەوەی کە وەک دەردی زانوو هەست پێدەکات، ئەگەری هەیە کە سەرچاوەی لە مووچەی قاچ بێت. لە مناڵانی ٨-١٤ ساڵ بەتایبەت ئەم خەڵەتییە باوترە.",                              media:[], authors:["rzgar-tayb"], tags:["زانوو","دەرد","دیاگنۆز","مووچەی قاچ"],       dateKu:"نیسان ٢٠٢٥" },
    "art-dmards-patient": { id:"art-dmards-patient", specialty:"rheumatology", level:"patient",       group:"medications",  icon:"💊", date:"2025-04", title:"دەرمانەکانی ئارتریت — چی دەخوریت و بۆچی؟",                                                          synopsis:"دەرمانەکانی DMARD وەک Methotrexate نەک تەنها دەردی کەم دەکەن — جومگەکانت لە زیانی داهاتوودا دیفاع دەکەن.",                                                           media:[], authors:["rzgar-tayb"], tags:["دەرمان","Methotrexate","DMARD","ئارتریت"],   dateKu:"نیسان ٢٠٢٥" },
    "art-risale-pro":     { id:"art-risale-pro",     specialty:"rheumatology", level:"professional",  group:"risale-pro",   icon:"📖", date:"2025-04", title:"رسالەی نور و فەلسەفەی دەرد — پەرتووکی مەنا بۆ پزیشک",                                               synopsis:"تەفسیری سەید نورسی لەسەر دەردی جەستەیی وەک ئامرازی تەکامول — کاربردی پراکتیکی بۆ Shared Decision Making و زیادکردنی Adherence.",                                  media:[{type:"youtube",id:"dQw4w9WgXcQ",caption:""}], authors:["rzgar-tayb"], tags:["رسالەی نور","فەلسەفە","کلینیک","Adherence"], dateKu:"نیسان ٢٠٢٥" },
    "art-ra-clinical":    { id:"art-ra-clinical",    specialty:"rheumatology", level:"professional",  group:"inflammatory", icon:"🔬", date:"2025-04", title:"ئارتریتی ڕۆماتۆید — پرۆتۆکۆلی دیاگنۆز و سەرەتای چارەسەر",                                           synopsis:"ACR/EULAR 2010 Classification Criteria بە شێوازی نومرەدان، ستراتیژی Treat-to-Target، و پرۆتۆکۆلی سەرەتای چارەسەر لەگەڵ Methotrexate.",                           media:[], authors:["rzgar-tayb"], tags:["RA","ACR","EULAR","Methotrexate","DAS28"],  dateKu:"نیسان ٢٠٢٥" },
    "art-gout-clinical":  { id:"art-gout-clinical",  specialty:"rheumatology", level:"professional",  group:"crystal",      icon:"💎", date:"2025-04", title:"نقرس — دیاگنۆز و منەجمینتی درێژخایەنی",                                                             synopsis:"ACR 2020 Gout Guidelines: دیاگنۆزی دەفینیتیڤ بە MSU کریستاڵ، ئامانجی SUA < 6 mg/dL، و پرۆتۆکۆلی Allopurinol.",                                                    media:[], authors:["rzgar-tayb"], tags:["Gout","Uric Acid","Allopurinol","ACR 2020"],dateKu:"نیسان ٢٠٢٥" },
    "art-hip-knee-referred":{ id:"art-hip-knee-referred", specialty:"rheumatology", level:"professional", group:"msk",     icon:"🩻", date:"2025-04", title:"دەردی ئاڵوگۆڕکراوی مووچەی قاچ بۆ زانوو — ڕووبەڕووبوونەوەی کلینیکی",                               synopsis:"پاتۆفیزیۆلۆجی ئۆبتوراتۆر نێرڤ، ئازمونی FABER و FADIR بە شێوازی ستانداردی، و ئامرازی ئیمیجینگ.",                                                                  media:[], authors:["rzgar-tayb"], tags:["referred pain","hip","knee","FADIR","FABER"],dateKu:"نیسان ٢٠٢٥" }
  },

  risale: {
    excerpts: [
      { id:"r-lailahe",  title:"لا ئیلاهە ئیللاللاه — کلیلی ئیمان",     source:"کەلیماتی شەریف — کەلیمەی یەکەم", textKu:"لا ئیلاهە ئیللاللاه واتا هیچ مەعبودێکی ڕاستەقینە نییە جگە لە خودا. ئەم کەلیمەیە نەک تەنها داخوازیی زاریشتی، بەڵکو ئیقرارێکی قەلبیی و عەقلییشە.", textEn:"There is no deity but God — not mere verbal recitation but a declaration uniting heart and intellect.", reflection:"بۆ نەخۆشی تووشبوو: ئەم کەلیمەیە ناماوی دلنیابوون دەبێت لە کاتی دەرددا." },
      { id:"r-musibet",  title:"مصیبەت وەک ئامرازی پاکایی",               source:"لائیلاجە — بەشی دووەم",           textKu:"ئەی کەسی تووشی مصیبەت بووی! بزانە کە مصیبەت لە سێ ئالوگۆڕدا دێت: یا گوناهەکانی پاک دەکات، یا بەرزبوونی دەرەجەی مانەویت دەکات، یا ئامادەکردن بۆ جیهانی داهاتوو.", textEn:"O afflicted one! Know that affliction comes in three guises: purification, elevation, or preparation for the hereafter.", reflection:"بۆ پزیشک: ئەم چەرچەوەیە Reframing کلینیکیی ئاسان دەکات لە نەخۆشانی کڕۆنیک." },
      { id:"r-sabir",    title:"سەبر — نیمەی ئیمان",                      source:"مەکتووباتی نور — سەیلانی مەعنەوی", textKu:"سەبری ئیمانی — ئەو سەبرەیە کە بە ئاگایی کامل لە خودای حەکیم تەسلیم دەبێتەوە. ئەمەی جیاوازیی سەبری موومنی لە سەبری گێل دەکات.", textEn:"Faithful patience surrenders with full awareness to the All-Wise God — distinct from mere endurance.", reflection:"بۆ پراکتیک: ئامانج یارمەتیدانی نەخۆش لە تووشبوونی بە ئاگایی، نەک بردنی دەرد بەتەنها." }
    ],
    readingCircles: [
      { id:"rc-lighthouse", name:"Lighthouse for Humanity", nameKu:"شامی مرۆڤایەتی",  schedule:"هەفتەیەک جار — ئۆنلاین", lang:"English",          langKu:"ئینگلیزی",        platform:"Zoom" },
      { id:"rc-garden",     name:"The Garden of Noor",      nameKu:"باخچەی نور",       schedule:"هەفتەیەک دوو جار — ئۆنلاین", lang:"Kurdish",        langKu:"کوردی",            platform:"Telegram" },
      { id:"rc-fridays",    name:"Fridays' Sohbet",         nameKu:"سۆهبەتی هەینی",   schedule:"هەفتەیەک جار — ئۆنلاین",     lang:"Kurdish / Ottoman", langKu:"کوردی / عوسمانی",platform:"WhatsApp" },
      { id:"rc-briska",     name:"Briska",                  nameKu:"بریسکە",            schedule:"ئۆنلاین",                     lang:"Kurdish",           langKu:"کوردی",           platform:"Zoom" },
      { id:"rc-roon",       name:"Roon",                    nameKu:"ڕوون",              schedule:"ئۆنلاین",                     lang:"Kurdish",           langKu:"کوردی",           platform:"Telegram" },
      { id:"rc-mashwara",   name:"Mashwara",                nameKu:"مەشوەرە",           schedule:"ئۆنلاین",                     lang:"Kurdish / Turkish", langKu:"کوردی / تورکی",  platform:"WhatsApp" },
      { id:"rc-ihlas",      name:"Ihlas Nur",               nameKu:"ئیخلاس نور",        schedule:"ئۆنلاین",                     lang:"Kurdish / Turkish", langKu:"کوردی / تورکی",  platform:"Zoom" }
    ],
    relatedArticles: ["art-risale-pain","art-risale-pro"]
  },

  getArticle(id){ return this.articles[id]||null; },
  getDoctor(id){ return this.doctors[id]||null; },
  getSpecialty(key){ return this.specialties[key]||null; },
  getSpecialtyDoctors(key){ return this.specialtyDoctors[key]||[]; },
  getArticlesBySpecialty(key){ return Object.values(this.articles).filter(a=>a.specialty===key); },
  getArticlesByLevel(key,level){ return this.getArticlesBySpecialty(key).filter(a=>a.level===level); },
  getDoctorArticles(docId,level){ const d=this.doctors[docId];if(!d)return[];let arts=d.articles.map(id=>this.articles[id]).filter(Boolean);return level?arts.filter(a=>a.level===level):arts; },
  getAuthorDoctors(artId){ const a=this.articles[artId];if(!a)return[];return a.authors.map(id=>this.doctors[id]).filter(Boolean); },
  getLatestArticles(n=6){ return Object.values(this.articles).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,n); },
  getAllSpecialtyList(){ return Object.values(this.specialties); }
};
