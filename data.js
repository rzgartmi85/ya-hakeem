/**
 * ÛØ§ Ø­Ú©ÛÙ â Central Data Layer v3
 * fullBody content is now in articles/art-id.html files.
 * Edit this file for doctors, article metadata, specialties, and Risale content.
 */
const YH = {

  specialties: {
    "rheumatology":  { key:"rheumatology",  nameKu:"ÚÛÙØ§ØªÛØ²Ù Ù Ø¬ÙÙÚ¯Û",          icon:"ð¦µ", cssClass:"sp-rheum",    descKu:"Ù¾Ø³Ù¾ÛÚÛÛÛÚ©Û ØªØ§ÛØ¨ÛØª Ø¨Û ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ Ø¬ÙÙÚ¯ÛØ Ø¦ÛØ³Ú©Ø Ù Ø¯ÛØ³ØªÚ¯Ø§Û Ø¦ÛÙÛÙÙÛ â ÙÛÚ© Ø¦Ø§Ø±ØªØ±ÛØªÛ ÚÛÙØ§ØªÛÛØ¯Ø ÙÙØ±Ø³Ø ÙÙÙÙ¾ÙØ³Ø Ù Ø¦ÛØ³ØªÛÙØ¦Ø§Ø±ØªØ±ÛØª.", patientGroups:[{key:"risale",icon:"ð",title:"Ø±Ø³Ø§ÙÛÛ ÙÙØ±"},{key:"conditions",icon:"ð«",title:"ÙÛØ®ÛØ´ÛÛÛÚ©Ø§Ù"},{key:"symptoms",icon:"ð",title:"ÙÛØ´Ø§ÙÛ Ù ÙÛØ³ØªÛÚ©Ø§Ù"},{key:"medications",icon:"ð",title:"Ø¯ÛØ±ÙØ§ÙÛÚ©Ø§Ù"}], proGroups:[{key:"risale-pro",icon:"ð",title:"Ø±Ø³Ø§ÙÛÛ ÙÙØ± Ù Ù¾Ø²ÛØ´Ú©"},{key:"inflammatory",icon:"ð¥",title:"Inflammatory Arthritis"},{key:"crystal",icon:"ð",title:"Crystal Arthropathies"},{key:"msk",icon:"ð©»",title:"MSK & Referred Pain"},{key:"ctd",icon:"ð§¬",title:"Connective Tissue Diseases"},{key:"vasculitis",icon:"ð©¸",title:"Vasculitis"},{key:"osteoporosis",icon:"ð¦´",title:"Osteoporosis & Metabolic Bone"},{key:"investigations",icon:"ð§ª",title:"Investigations & Imaging"}] },
    "internal":      { key:"internal",      nameKu:"ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ ÙÛÙØ§ÙÛ",       icon:"ð«", cssClass:"sp-internal", descKu:"Ù¾Ø³Ù¾ÛÚÛ Ú©ÛØ´ÛÚ©Ø§ÙÛ Ú¯ÛÚÛÚ©Ø ÙÛØ¯ÛØ Ø±ÙÙÚ¯Ø Ù Ú©ÙÙÛÙÚ©Û.", patientGroups:[], proGroups:[] },
    "surgery":       { key:"surgery",       nameKu:"ÙÛØ´ØªÛØ±Ú¯ÛØ±Û Ú¯Ø´ØªÛ",            icon:"ðª", cssClass:"sp-surgery",  descKu:"ÙÛØ´ØªÛØ±Ú¯ÛØ±ÛÛ Ø³ÛØ±Ø§ÙØ³ÛØ±Û ÙÛ ÙÛÙÙÙ Ù¾Ø§Ø±ÚÛÚ©Ø§ÙÛ Ø¬ÛØ³ØªÛØ¯Ø§.", patientGroups:[], proGroups:[] },
    "ortho":         { key:"ortho",         nameKu:"Ø¦ÛØ³Ú© Ù Ø´Ú©Ø§ÙÛ",               icon:"ð¦´", cssClass:"sp-ortho",    descKu:"Ù¾Ø³Ù¾ÛÚÛ Ø¦ÛÙØ¯Ø§ÙÛ Ø¨Ø²ÙÙØªÙÛÙÛÛÛÛÚ©Ø§Ù â Ø´Ú©Ø§Ù Ù Ø¬ÙÙØªØ¨ÙÙÙÛ Ø¬ÙÙÚ¯Û.", patientGroups:[], proGroups:[] },
    "urology":       { key:"urology",       nameKu:"ÙÛØ²ÛÚÛ Ù Ú¯ÙØ±ÚÛÙÛ",           icon:"ð«", cssClass:"sp-urology",  descKu:"Ù¾Ø³Ù¾ÛÚÛ Ø¯ÛØ³ØªÚ¯Ø§Ú©Ø§ÙÛ ÙÛØ²Ú©Ø±Ø¯Ù â Ú¯ÙØ±ÚÛÙÛØ ÙÛØ³Ø§ÙÛ.", patientGroups:[], proGroups:[] },
    "neuro":         { key:"neuro",         nameKu:"ÙÛØ´Ú© Ù Ø¯ÛÙØ§Ø±",               icon:"ð§ ", cssClass:"sp-neuro",    descKu:"Ù¾Ø³Ù¾ÛÚÛ ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ Ø¯ÛØ³ØªÚ¯Ø§Û Ø¯ÛÙØ§Ø±ÛÙÛÛÛ.", patientGroups:[], proGroups:[] },
    "neurosurgery":  { key:"neurosurgery",  nameKu:"ÙÛØ´ØªÛØ±Ú¯ÛØ±Û ÙÛØ´Ú© Ù Ø¯ÛÙØ§Ø±",    icon:"ð§ ", cssClass:"sp-neuro",    descKu:"ÙÛØ´ØªÛØ±Ú¯ÛØ±ÛÛ Ø¯ÛØ³ØªÚ¯Ø§Û Ø¯ÛÙØ§Ø±ÛÙÛÛÛ.", patientGroups:[], proGroups:[] },
    "cardio":        { key:"cardio",        nameKu:"Ø¯Úµ Ù ÙÛØ³ØªÛØ±Û",               icon:"ð«", cssClass:"sp-cardio",   descKu:"Ù¾Ø³Ù¾ÛÚÛ ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ Ø¯Úµ Ù ÙÛØ³ØªÛØ±Û.", patientGroups:[], proGroups:[] },
    "thoracic":      { key:"thoracic",      nameKu:"Ø³ÙÚ¯ Ù Ø¯Úµ Ù Ø¨ÛØ±ÛÛÛÚ©Ø§ÙÛ Ø®ÙÛÙ", icon:"ð«", cssClass:"sp-cardio",   descKu:"Ù¾Ø³Ù¾ÛÚÛ ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ Ø³ÙÚ¯ Ù Ø¨ÛØ±ÛÛÛÚ©Ø§ÙÛ Ø®ÙÛÙ.", patientGroups:[], proGroups:[] },
    "obgyn":         { key:"obgyn",         nameKu:"ÚÙØ§Ù Ù ÙÙØ§ÚµØ¨ÙÙÙ",             icon:"ð¤°", cssClass:"sp-obgyn",    descKu:"Ù¾Ø³Ù¾ÛÚÛ ØªÛÙØ¯Ø±ÙØ³ØªÛ ÚÙØ§Ù â Ø¯ÙÙÚ¯ÛØ§ÙÛØ Ø²Ø§ÛÛÙ.", patientGroups:[], proGroups:[] },
    "ophtho":        { key:"ophtho",        nameKu:"ÙÛØ´ØªÛØ±Ú¯ÛØ±Û ÚØ§Ù",              icon:"ðï¸", cssClass:"sp-ophtho",   descKu:"Ù¾Ø³Ù¾ÛÚÛ ÙÛØ´ØªÛØ±Ú¯ÛØ±ÛÛ ÚØ§Ù â Ú©Ø§ØªØ§Ø±Ø§Ú©ØªØ Ú¯ÙØ§ÙÚ©ÛÙ.", patientGroups:[], proGroups:[] },
    "ent":           { key:"ent",           nameKu:"ÙÙÚÚ¯ Ù ÙÙØª Ù Ú¯ÙÛ",           icon:"ð", cssClass:"sp-ent",      descKu:"Ù¾Ø³Ù¾ÛÚÛ ÙÙÚÚ¯Ø ÙÙØªØ Ù Ú¯ÙÛ.", patientGroups:[], proGroups:[] },
    "peds":          { key:"peds",          nameKu:"ÙÙØ§ÚµØ§Ù Ù ØªØ§Ø²Û ÙÛØ¯Ø§ÛÚ©Ø¨ÙÙØ§Ù",  icon:"ð¶", cssClass:"sp-peds",     descKu:"Ù¾Ø³Ù¾ÛÚÛ ØªÛÙØ¯Ø±ÙØ³ØªÛ ÙÙØ§Úµ.", patientGroups:[], proGroups:[] },
    "derm":          { key:"derm",          nameKu:"Ù¾ÛØ³Øª",                        icon:"ð§´", cssClass:"sp-derm",     descKu:"Ù¾Ø³Ù¾ÛÚÛ ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ Ù¾ÛØ³Øª â Ø¦ÛÚ¯Ø²ÛÙØ§Ø Ø³ÛØ±ÛØ§Ø³ÛØ³.", patientGroups:[], proGroups:[] },
    "radio":         { key:"radio",         nameKu:"ØªÛØ´Ú© Ù Ø³ÛÙØ§Ø±",               icon:"ð©»", cssClass:"sp-radio",    descKu:"Ø¦Ø§ÙØ±Ø§Ø²Û Ø¯ÛØ§Ú¯ÙÛØ²Û ÙÛÙÛÚ¯Ø±ØªÙ.", patientGroups:[], proGroups:[] },
    "psych":         { key:"psych",         nameKu:"Ø¯ÛØ±ÙÙÙÛ",                     icon:"ð§©", cssClass:"sp-psych",    descKu:"Ù¾Ø³Ù¾ÛÚÛ ØªÛÙØ¯Ø±ÙØ³ØªÛ Ø¯ÛØ±ÙÙÙÛ.", patientGroups:[], proGroups:[] },
    "nutri":         { key:"nutri",         nameKu:"Ø®ÛØ±Ø§Ú© Ù Ú¯ÛØ´Û",               icon:"ð¥", cssClass:"sp-nutri",    descKu:"Ù¾Ø³Ù¾ÛÚÛ Ø®ÛØ±Ø§Ú© Ù Ú¯ÛØ´ÛÛ Ø¯Ø±ÙØ³Øª.", patientGroups:[], proGroups:[] },
    "breast":        { key:"breast",        nameKu:"ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ ÙÛÙÚ©",          icon:"ðï¸", cssClass:"sp-breast",   descKu:"Ù¾Ø³Ù¾ÛÚÛ ØªÛØ´Ø®ÛØµ Ù ÚØ§Ø±ÛØ³ÛØ±Û ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ ÙÛÙÚ©.", patientGroups:[], proGroups:[] },
    "anest":         { key:"anest",         nameKu:"Ø¨ÛÙÛØ´Ú©Ø§Ø±Û",                  icon:"ð", cssClass:"sp-anest",    descKu:"Ù¾Ø³Ù¾ÛÚÛ Ø¨ÛÙÛØ´Ú©Ø±Ø¯Ù Ù Ø¦ÛÙØ¯Ø§Ø²ÛÛ Ø¯ÛØ±Ø¯ ÙÛ Ú©Ø§ØªÛ ÙÛØ´ØªÛØ±Ú¯ÛØ±ÛØ¯Ø§.", patientGroups:[], proGroups:[] }
  },

  spNameToKey: {
    "ÚÛÙØ§ØªÛØ²Ù Ù Ø¬ÙÙÚ¯Û":"rheumatology","ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ ÙÛÙØ§ÙÛ":"internal","ÙÛØ´ØªÛØ±Ú¯ÛØ±Û Ú¯Ø´ØªÛ":"surgery",
    "Ø¦ÛØ³Ú© Ù Ø´Ú©Ø§ÙÛ":"ortho","ÙÛØ²ÛÚÛ Ù Ú¯ÙØ±ÚÛÙÛ":"urology","ÙÛØ´Ú© Ù Ø¯ÛÙØ§Ø±":"neuro",
    "ÙÛØ´ØªÛØ±Ú¯ÛØ±Û ÙÛØ´Ú© Ù Ø¯ÛÙØ§Ø±":"neurosurgery","Ø¯Úµ Ù ÙÛØ³ØªÛØ±Û":"cardio","Ø³ÙÚ¯ Ù Ø¯Úµ Ù Ø¨ÛØ±ÛÛÛÚ©Ø§ÙÛ Ø®ÙÛÙ":"thoracic",
    "ÚÙØ§Ù Ù ÙÙØ§ÚµØ¨ÙÙÙ":"obgyn","ÙÛØ´ØªÛØ±Ú¯ÛØ±Û ÚØ§Ù":"ophtho","ÙÙÚÚ¯ Ù ÙÙØª Ù Ú¯ÙÛ":"ent",
    "ÙÙØ§ÚµØ§Ù Ù ØªØ§Ø²Û ÙÛØ¯Ø§ÛÚ©Ø¨ÙÙØ§Ù":"peds","Ù¾ÛØ³Øª":"derm","ØªÛØ´Ú© Ù Ø³ÛÙØ§Ø±":"radio",
    "Ø¯ÛØ±ÙÙÙÛ":"psych","Ø®ÛØ±Ø§Ú© Ù Ú¯ÛØ´Û":"nutri","ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ ÙÛÙÚ©":"breast","Ø¨ÛÙÛØ´Ú©Ø§Ø±Û":"anest"
  },

  doctors: {
    "rzgar-tayb": {
      id:"rzgar-tayb", name:"Ø¯Ú©ØªÛØ± ÚØ²Ú¯Ø§Ø± ØªÛÛØ¨ ÙÛØ¹Ø±ÙÙ", specialty:"rheumatology",
      qualifications:"MBChB; ACR, ARMRK, ILBJH", clinic:"ÙÛÚµÛØ¨Ø¬ÛÛ Ø´ÛÙÛØ¯ / ÙØ²ÛÚ© Ú©Ø§ÙÛ ÙÙÚµÚ©Û",
      days:"â", phone:"07510032518", fee:"â",
      bio:"Ù¾Ø³Ù¾ÛÚÛ ÚÛÙØ§ØªÛØ²Ù Ù ÙÛØ®ÛØ´ÛÛÛÚ©Ø§ÙÛ Ø¬ÙÙÚ¯ÛØ Ø®Ø§ÙÛÙÛ ÙÛÙØ¨ÛØ±Ø§ÛÛØªÛ ACR (Ø¦ÛÙØ±ÛÚ©Ø§) Ù ARMRK (Ø¦ÛØ±Ø¯ÛÙ) Ù ILBJH (Ø¹ÛÚØ§Ù).",
      articles:["art-risale-pain","art-ra-basics","art-gout","art-knee-pain","art-dmards-patient","art-risale-pro","art-ra-clinical","art-gout-clinical","art-hip-knee-referred"]
    }
  },

  specialtyDoctors: {
    "rheumatology": [
      {id:"ayar-omar",     name:"Ø¯Ú©ØªÛØ±Û Ø¦Ø§ÛØ§Ø± Ø¹ÙØ± Ø¹ÛÙÛ",          q:"MBChB",                    cl:"Ú©ÛÙÛÚµÚ¯ÛÛ Ù¾Ø²ÛØ´Ú©Û Ø¨ÛØ®Ø´ÛÙ",            days:"Ø´ÛÙÙÛØ Ø¯ÙÙ Ø´ÛÙÙÛØ ÚÙØ§Ø± Ø´ÛÙÙÛ", ph:"07511817571", fee:"â", dataId:null},
      {id:"rzgar-tayb",    name:"Ø¯Ú©ØªÛØ± ÚØ²Ú¯Ø§Ø± ØªÛÛØ¨ ÙÛØ¹Ø±ÙÙ",        q:"MBChB; ACR, ARMRK, ILBJH", cl:"ÙÛÚµÛØ¨Ø¬ÛÛ Ø´ÛÙÛØ¯ / ÙØ²ÛÚ© Ú©Ø§ÙÛ ÙÙÚµÚ©Û", days:"â",                            ph:"07510032518", fee:"â", dataId:"rzgar-tayb"},
      {id:"krmanj-hadi",   name:"Ø¯Ú©ØªÛØ± Ú©Ø±ÙØ§ÙØ¬ ÙØ­ÙØ¯ ÙØ§Ø¯Û",          q:"MSc Rheumatology, MBChB",  cl:"ØªÛÙØ§Ø±Û Ù¾Ø²ÛØ´Ú©Û Ø¦Ø§ÛÙØ¯Û",              days:"Ø¯ÙÙ Ø´ÛÙÙÛØ ÚÙØ§Ø± Ø´ÛÙÙÛ",        ph:"07501957909", fee:"â", dataId:null},
      {id:"lawen-jamal",   name:"Ø¯Ú©ØªÛØ±Û ÙØ§ÙÛÙ Ø¬ÙØ§Ù",              q:"â",                         cl:"Ø¨ÛØ±Ø¬Û ØªÛÙØ¯Ø±ÙØ³ØªÛ Ø²ÛØ±ÛÚ© (Ø³ÙÛÙØ§ÙÛ)",  days:"â",                            ph:"07705670404", fee:"â", dataId:null},
      {id:"afin-mariwan",  name:"Ø¯Ú©ØªÛØ±Û Ø¦ÛÚ¤ÛÙ ÙÛØ±ÛÙØ§Ù Ø­ÙÛ Ø³Ø§ÚµØ­",  q:"â",                         cl:"â",                                  days:"â",                            ph:"â",           fee:"â", dataId:null},
      {id:"zhuan-ibrahim", name:"Ø¯Ú©ØªÛØ±Û ÚÙØ§Ù Ø§Ø¨Ø±Ø§ÙÛÙ",            q:"â",                         cl:"Ú©ÛÙÛÚµÚ¯ÛÛ Ù¾Ø²ÛØ´Ú©Û Ø¨ÛØ®Ø´ÛÙ (Ø³ÙÛÙØ§ÙÛ)", days:"â",                            ph:"07714841616", fee:"â", dataId:null}
    ]
  },

  articles: {
    "art-risale-pain":    { id:"art-risale-pain",    specialty:"rheumatology", level:"patient",       group:"risale",       icon:"ð", date:"2025-04", title:"Ø¯ÛØ±Ø¯Û Ø¬ÛØ³ØªÛÛÛ Ù ÙØ§ÙØ§Û Ø¦ÛÙ ÙÛ Ø±Ø³Ø§ÙÛÛ ÙÙØ±Ø¯Ø§",                                                       synopsis:"Ø³ÛÛØ¯ ÙÙØ±Ø³Û ÙÛ Ø¦ÛØ´Ø§Ø±ÛØªÙÙ Ø¦ÛØ¹Ø¬Ø§Ø²Ø¯Ø§ ØªÛÙØ³ÛØ±Û Ø¨ÙÛØ§ØªÙØ§ÙÛ Ø¯ÛØ±Ø¯Û Ø¬ÛØ³ØªÛÛÛ Ø¯ÛØ¯Ø§Øª. Ø¦ÛÙ ÙØªØ§Ø±Û Ù¾ÛÛÙÛÙØ¯ÛÛÛÚ©Û ÙÛÙØ§Ù Ø¦Ø§Ø²Ø§Ø±Û Ø¬ÛØ³ØªÛÛÛ Ù Ú¯ÛØ´ÛÛ ÙØ§ÙÛÙÛÛ Ø¯Ø±ÙØ³Øª Ø¯ÛÚ©Ø§Øª.",                   media:[], authors:["rzgar-tayb"], tags:["Ø±Ø³Ø§ÙÛÛ ÙÙØ±","Ø¯ÛØ±Ø¯","Ø³ÛØ¨Ø±","ÙØ§ÙØ§"],           dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-ra-basics":      { id:"art-ra-basics",      specialty:"rheumatology", level:"patient",       group:"conditions",   icon:"ð¤²", date:"2025-04", title:"Ø¦Ø§Ø±ØªØ±ÛØªÛ ÚÛÙØ§ØªÛÛØ¯ â ÙÛØ®ÛØ´ÛÛÛÚ©Û Ø¨ÙØ§Ø³Û Ù¾ÛØ´ Ø¦ÛÙÛÛ Ø¯ÙØ§Ø®ÙØ§Ø²ÛÛÛÚ©Ø§Ù Ø¯ÛØ³ØªÙ¾ÛØ¨Ú©ÛÙ",                          synopsis:"Ø¦Ø§Ø±ØªØ±ÛØªÛ ÚÛÙØ§ØªÛÛØ¯ ÙÛØ®ÛØ´ÛÛÛÚ©Û Ø¦ÛÙÛÙÙÛÛÛ Ú©Û ÙÛØ± ØªÛÙÛÙÛÚ© Ø¯ÛØªÙØ§ÙÛØª ØªÙÙØ´Û Ø¨Ú©Ø§Øª. ÙØªØ¨ÙÙÙÛ Ø¨ÛÛØ§ÙÛØ§ÙØ ÙÙØ±ÙÛ ÙÛØ±Ø¯ÙÙ ÙØ§ÛÛÚ©Ø Ù ÙØ§ÙØ¨ÙÙÙÛ Ø¨Û ÙÛÚ©Ø§Ø± â ÙÛØ´Ø§ÙÛÚ©Ø§ÙÛ Ø³ÛØ±ÛÚ©ÛÛØªÛ.",   media:[], authors:["rzgar-tayb"], tags:["Ø¦Ø§Ø±ØªØ±ÛØª","ÚÛÙØ§ØªÛÛØ¯","Ø¬ÙÙÚ¯Û","Ø¦ÛÙÛÙÙ"],       dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-gout":           { id:"art-gout",           specialty:"rheumatology", level:"patient",       group:"conditions",   icon:"ð¥", date:"2025-04", title:"ÙÙØ±Ø³ â Ø¦ÛÙ Ø¯ÛØ±Ø¯Û ØªÙÙÙØ¯ÛÛ Ø´ÛÙØ§ÙÛÚ©Ø§Ù",                                                               synopsis:"ÙÙØ±Ø³ ÙÛØ®ÛØ´ÛÛÛÚ©Û Ú©Ø±ÛØ³ØªØ§ÚµÛÛÛ ÙÛ Ø¬ÙÙÚ¯ÛØ¯Ø§Ø Ø¯ÛØ±ÙØ§ÙÚ©Ø±Ø¯ÙÛ Ø¦Ø§Ø³Ø§ÙÛ Ø¨ÛÚµØ§Ù Ø²ÛØ±Ø¬Ø§Ø± Ø¯ÙØ§ Ø¯ÛÚ©ÛÙÛØª. Ø¨ÛÚÛÚ©Ø®Ø³ØªÙÛ Ø®ÛØ±Ø§Ú© Ù Ø¯ÛØ±ÙØ§ÙÛ Ø¯Ø±ÙØ³Øª Ø¯ÛØªÙØ§ÙÙ Ø¨ÛØªÛÙØ§ÙÛ Ù¾ÛØ´Ú¯ÛØ±Û ÙÛ Ø¨Ú©ÛÙ.",            media:[], authors:["rzgar-tayb"], tags:["ÙÙØ±Ø³","ÛÙØ±ÛÚ© Ø¦Ø§Ø³ÛØ¯","Ø®ÛØ±Ø§Ú©","Ø¬ÙÙÚ¯Û"],        dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-knee-pain":      { id:"art-knee-pain",      specialty:"rheumatology", level:"patient",       group:"symptoms",     icon:"ð¦µ", date:"2025-04", title:"Ø¦Ø§ÛØ§ Ø¦ÛÙ Ø¯ÛØ±Ø¯Û Ø²Ø§ÙÙÙØªÛÙÛ ÙÛ Ø²Ø§ÙÙÙÚ©ÛØªÛ ÙÛÛÛØ",                                                       synopsis:"Ø¦ÛÙÛÛ Ú©Û ÙÛÚ© Ø¯ÛØ±Ø¯Û Ø²Ø§ÙÙÙ ÙÛØ³Øª Ù¾ÛØ¯ÛÚ©Ø§ØªØ Ø¦ÛÚ¯ÛØ±Û ÙÛÛÛ Ú©Û Ø³ÛØ±ÚØ§ÙÛÛ ÙÛ ÙÙÙÚÛÛ ÙØ§Ú Ø¨ÛØª. ÙÛ ÙÙØ§ÚµØ§ÙÛ Ù¨-Ù¡Ù¤ Ø³Ø§Úµ Ø¨ÛØªØ§ÛØ¨ÛØª Ø¦ÛÙ Ø®ÛÚµÛØªÛÛÛ Ø¨Ø§ÙØªØ±Û.",                              media:[], authors:["rzgar-tayb"], tags:["Ø²Ø§ÙÙÙ","Ø¯ÛØ±Ø¯","Ø¯ÛØ§Ú¯ÙÛØ²","ÙÙÙÚÛÛ ÙØ§Ú"],       dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-dmards-patient": { id:"art-dmards-patient", specialty:"rheumatology", level:"patient",       group:"medications",  icon:"ð", date:"2025-04", title:"Ø¯ÛØ±ÙØ§ÙÛÚ©Ø§ÙÛ Ø¦Ø§Ø±ØªØ±ÛØª â ÚÛ Ø¯ÛØ®ÙØ±ÛØª Ù Ø¨ÛÚÛØ",                                                          synopsis:"Ø¯ÛØ±ÙØ§ÙÛÚ©Ø§ÙÛ DMARD ÙÛÚ© Methotrexate ÙÛÚ© ØªÛÙÙØ§ Ø¯ÛØ±Ø¯Û Ú©ÛÙ Ø¯ÛÚ©ÛÙ â Ø¬ÙÙÚ¯ÛÚ©Ø§ÙØª ÙÛ Ø²ÛØ§ÙÛ Ø¯Ø§ÙØ§ØªÙÙØ¯Ø§ Ø¯ÛÙØ§Ø¹ Ø¯ÛÚ©ÛÙ.",                                                           media:[], authors:["rzgar-tayb"], tags:["Ø¯ÛØ±ÙØ§Ù","Methotrexate","DMARD","Ø¦Ø§Ø±ØªØ±ÛØª"],   dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-risale-pro":     { id:"art-risale-pro",     specialty:"rheumatology", level:"professional",  group:"risale-pro",   icon:"ð", date:"2025-04", title:"Ø±Ø³Ø§ÙÛÛ ÙÙØ± Ù ÙÛÙØ³ÛÙÛÛ Ø¯ÛØ±Ø¯ â Ù¾ÛØ±ØªÙÙÚ©Û ÙÛÙØ§ Ø¨Û Ù¾Ø²ÛØ´Ú©",                                               synopsis:"ØªÛÙØ³ÛØ±Û Ø³ÛÛØ¯ ÙÙØ±Ø³Û ÙÛØ³ÛØ± Ø¯ÛØ±Ø¯Û Ø¬ÛØ³ØªÛÛÛ ÙÛÚ© Ø¦Ø§ÙØ±Ø§Ø²Û ØªÛÚ©Ø§ÙÙÙ â Ú©Ø§Ø±Ø¨Ø±Ø¯Û Ù¾Ø±Ø§Ú©ØªÛÚ©Û Ø¨Û Shared Decision Making Ù Ø²ÛØ§Ø¯Ú©Ø±Ø¯ÙÛ Adherence.",                                  media:[{type:"youtube",id:"dQw4w9WgXcQ",caption:""}], authors:["rzgar-tayb"], tags:["Ø±Ø³Ø§ÙÛÛ ÙÙØ±","ÙÛÙØ³ÛÙÛ","Ú©ÙÛÙÛÚ©","Adherence"], dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-ra-clinical":    { id:"art-ra-clinical",    specialty:"rheumatology", level:"professional",  group:"inflammatory", icon:"ð¬", date:"2025-04", title:"Ø¦Ø§Ø±ØªØ±ÛØªÛ ÚÛÙØ§ØªÛÛØ¯ â Ù¾Ø±ÛØªÛÚ©ÛÙÛ Ø¯ÛØ§Ú¯ÙÛØ² Ù Ø³ÛØ±ÛØªØ§Û ÚØ§Ø±ÛØ³ÛØ±",                                           synopsis:"ACR/EULAR 2010 Classification Criteria Ø¨Û Ø´ÛÙØ§Ø²Û ÙÙÙØ±ÛØ¯Ø§ÙØ Ø³ØªØ±Ø§ØªÛÚÛ Treat-to-TargetØ Ù Ù¾Ø±ÛØªÛÚ©ÛÙÛ Ø³ÛØ±ÛØªØ§Û ÚØ§Ø±ÛØ³ÛØ± ÙÛÚ¯ÛÚµ Methotrexate.",                           media:[], authors:["rzgar-tayb"], tags:["RA","ACR","EULAR","Methotrexate","DAS28"],  dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-gout-clinical":  { id:"art-gout-clinical",  specialty:"rheumatology", level:"professional",  group:"crystal",      icon:"ð", date:"2025-04", title:"ÙÙØ±Ø³ â Ø¯ÛØ§Ú¯ÙÛØ² Ù ÙÙÛØ¬ÙÛÙØªÛ Ø¯Ø±ÛÚØ®Ø§ÛÛÙÛ",                                                             synopsis:"ACR 2020 Gout Guidelines: Ø¯ÛØ§Ú¯ÙÛØ²Û Ø¯ÛÙÛÙÛØªÛÚ¤ Ø¨Û MSU Ú©Ø±ÛØ³ØªØ§ÚµØ Ø¦Ø§ÙØ§ÙØ¬Û SUA < 6 mg/dLØ Ù Ù¾Ø±ÛØªÛÚ©ÛÙÛ Allopurinol.",                                                    media:[], authors:["rzgar-tayb"], tags:["Gout","Uric Acid","Allopurinol","ACR 2020"],dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" },
    "art-hip-knee-referred":{ id:"art-hip-knee-referred", specialty:"rheumatology", level:"professional", group:"msk",     icon:"ð©»", date:"2025-04", title:"Ø¯ÛØ±Ø¯Û Ø¦Ø§ÚµÙÚ¯ÛÚÚ©Ø±Ø§ÙÛ ÙÙÙÚÛÛ ÙØ§Ú Ø¨Û Ø²Ø§ÙÙÙ â ÚÙÙØ¨ÛÚÙÙØ¨ÙÙÙÛÙÛÛ Ú©ÙÛÙÛÚ©Û",                               synopsis:"Ù¾Ø§ØªÛÙÛØ²ÛÛÙÛØ¬Û Ø¦ÛØ¨ØªÙØ±Ø§ØªÛØ± ÙÛØ±Ú¤Ø Ø¦Ø§Ø²ÙÙÙÛ FABER Ù FADIR Ø¨Û Ø´ÛÙØ§Ø²Û Ø³ØªØ§ÙØ¯Ø§Ø±Ø¯ÛØ Ù Ø¦Ø§ÙØ±Ø§Ø²Û Ø¦ÛÙÛØ¬ÛÙÚ¯.",                                                                  media:[], authors:["rzgar-tayb"], tags:["referred pain","hip","knee","FADIR","FABER"],dateKu:"ÙÛØ³Ø§Ù Ù¢Ù Ù¢Ù¥" }
    "art-mnqh5old":{
      id:"art-mnqh5old", specialty:"rheumatology", level:"patient", group:"risale",
      icon:"📝", date:"2026-04",
      title:"ئوسوڵەکانی سەردانیکردنی عیادە",
      synopsis:"بۆ تێست",
      media:[],
      authors:[], tags:[], dateKu:"2026-04"
    },
  },

  risale: {
    excerpts: [
      { id:"r-lailahe",  title:"ÙØ§ Ø¦ÛÙØ§ÙÛ Ø¦ÛÙÙØ§ÙÙØ§Ù â Ú©ÙÛÙÛ Ø¦ÛÙØ§Ù",     source:"Ú©ÛÙÛÙØ§ØªÛ Ø´ÛØ±ÛÙ â Ú©ÛÙÛÙÛÛ ÛÛÚ©ÛÙ", textKu:"ÙØ§ Ø¦ÛÙØ§ÙÛ Ø¦ÛÙÙØ§ÙÙØ§Ù ÙØ§ØªØ§ ÙÛÚ ÙÛØ¹Ø¨ÙØ¯ÛÚ©Û ÚØ§Ø³ØªÛÙÛÙÛ ÙÛÛÛ Ø¬Ú¯Û ÙÛ Ø®ÙØ¯Ø§. Ø¦ÛÙ Ú©ÛÙÛÙÛÛÛ ÙÛÚ© ØªÛÙÙØ§ Ø¯Ø§Ø®ÙØ§Ø²ÛÛ Ø²Ø§Ø±ÛØ´ØªÛØ Ø¨ÛÚµÚ©Ù Ø¦ÛÙØ±Ø§Ø±ÛÚ©Û ÙÛÙØ¨ÛÛ Ù Ø¹ÛÙÙÛÛØ´Û.", textEn:"There is no deity but God â not mere verbal recitation but a declaration uniting heart and intellect.", reflection:"Ø¨Û ÙÛØ®ÛØ´Û ØªÙÙØ´Ø¨ÙÙ: Ø¦ÛÙ Ú©ÛÙÛÙÛÛÛ ÙØ§ÙØ§ÙÛ Ø¯ÙÙÛØ§Ø¨ÙÙÙ Ø¯ÛØ¨ÛØª ÙÛ Ú©Ø§ØªÛ Ø¯ÛØ±Ø¯Ø¯Ø§." },
      { id:"r-musibet",  title:"ÙØµÛØ¨ÛØª ÙÛÚ© Ø¦Ø§ÙØ±Ø§Ø²Û Ù¾Ø§Ú©Ø§ÛÛ",               source:"ÙØ§Ø¦ÛÙØ§Ø¬Û â Ø¨ÛØ´Û Ø¯ÙÙÛÙ",           textKu:"Ø¦ÛÛ Ú©ÛØ³Û ØªÙÙØ´Û ÙØµÛØ¨ÛØª Ø¨ÙÙÛ! Ø¨Ø²Ø§ÙÛ Ú©Û ÙØµÛØ¨ÛØª ÙÛ Ø³Û Ø¦Ø§ÙÙÚ¯ÛÚØ¯Ø§ Ø¯ÛØª: ÛØ§ Ú¯ÙÙØ§ÙÛÚ©Ø§ÙÛ Ù¾Ø§Ú© Ø¯ÛÚ©Ø§ØªØ ÛØ§ Ø¨ÛØ±Ø²Ø¨ÙÙÙÛ Ø¯ÛØ±ÛØ¬ÛÛ ÙØ§ÙÛÙÛØª Ø¯ÛÚ©Ø§ØªØ ÛØ§ Ø¦Ø§ÙØ§Ø¯ÛÚ©Ø±Ø¯Ù Ø¨Û Ø¬ÛÙØ§ÙÛ Ø¯Ø§ÙØ§ØªÙÙ.", textEn:"O afflicted one! Know that affliction comes in three guises: purification, elevation, or preparation for the hereafter.", reflection:"Ø¨Û Ù¾Ø²ÛØ´Ú©: Ø¦ÛÙ ÚÛØ±ÚÛÙÛÛÛ Reframing Ú©ÙÛÙÛÚ©ÛÛ Ø¦Ø§Ø³Ø§Ù Ø¯ÛÚ©Ø§Øª ÙÛ ÙÛØ®ÛØ´Ø§ÙÛ Ú©ÚÛÙÛÚ©." },
      { id:"r-sabir",    title:"Ø³ÛØ¨Ø± â ÙÛÙÛÛ Ø¦ÛÙØ§Ù",                      source:"ÙÛÚ©ØªÙÙØ¨Ø§ØªÛ ÙÙØ± â Ø³ÛÛÙØ§ÙÛ ÙÛØ¹ÙÛÙÛ", textKu:"Ø³ÛØ¨Ø±Û Ø¦ÛÙØ§ÙÛ â Ø¦ÛÙ Ø³ÛØ¨Ø±ÛÛÛ Ú©Û Ø¨Û Ø¦Ø§Ú¯Ø§ÛÛ Ú©Ø§ÙÙ ÙÛ Ø®ÙØ¯Ø§Û Ø­ÛÚ©ÛÙ ØªÛØ³ÙÛÙ Ø¯ÛØ¨ÛØªÛÙÛ. Ø¦ÛÙÛÛ Ø¬ÛØ§ÙØ§Ø²ÛÛ Ø³ÛØ¨Ø±Û ÙÙÙÙÙÛ ÙÛ Ø³ÛØ¨Ø±Û Ú¯ÛÙ Ø¯ÛÚ©Ø§Øª.", textEn:"Faithful patience surrenders with full awareness to the All-Wise God â distinct from mere endurance.", reflection:"Ø¨Û Ù¾Ø±Ø§Ú©ØªÛÚ©: Ø¦Ø§ÙØ§ÙØ¬ ÛØ§Ø±ÙÛØªÛØ¯Ø§ÙÛ ÙÛØ®ÛØ´ ÙÛ ØªÙÙØ´Ø¨ÙÙÙÛ Ø¨Û Ø¦Ø§Ú¯Ø§ÛÛØ ÙÛÚ© Ø¨Ø±Ø¯ÙÛ Ø¯ÛØ±Ø¯ Ø¨ÛØªÛÙÙØ§." }
    ],
    readingCircles: [
      { id:"rc-lighthouse", name:"Lighthouse for Humanity", nameKu:"Ø´Ø§ÙÛ ÙØ±ÛÚ¤Ø§ÛÛØªÛ",  schedule:"ÙÛÙØªÛÛÛÚ© Ø¬Ø§Ø± â Ø¦ÛÙÙØ§ÛÙ", lang:"English",          langKu:"Ø¦ÛÙÚ¯ÙÛØ²Û",        platform:"Zoom" },
      { id:"rc-garden",     name:"The Garden of Noor",      nameKu:"Ø¨Ø§Ø®ÚÛÛ ÙÙØ±",       schedule:"ÙÛÙØªÛÛÛÚ© Ø¯ÙÙ Ø¬Ø§Ø± â Ø¦ÛÙÙØ§ÛÙ", lang:"Kurdish",        langKu:"Ú©ÙØ±Ø¯Û",            platform:"Telegram" },
      { id:"rc-fridays",    name:"Fridays' Sohbet",         nameKu:"Ø³ÛÙØ¨ÛØªÛ ÙÛÛÙÛ",   schedule:"ÙÛÙØªÛÛÛÚ© Ø¬Ø§Ø± â Ø¦ÛÙÙØ§ÛÙ",     lang:"Kurdish / Ottoman", langKu:"Ú©ÙØ±Ø¯Û / Ø¹ÙØ³ÙØ§ÙÛ",platform:"WhatsApp" },
      { id:"rc-briska",     name:"Briska",                  nameKu:"Ø¨Ø±ÛØ³Ú©Û",            schedule:"Ø¦ÛÙÙØ§ÛÙ",                     lang:"Kurdish",           langKu:"Ú©ÙØ±Ø¯Û",           platform:"Zoom" },
      { id:"rc-roon",       name:"Roon",                    nameKu:"ÚÙÙÙ",              schedule:"Ø¦ÛÙÙØ§ÛÙ",                     lang:"Kurdish",           langKu:"Ú©ÙØ±Ø¯Û",           platform:"Telegram" },
      { id:"rc-mashwara",   name:"Mashwara",                nameKu:"ÙÛØ´ÙÛØ±Û",           schedule:"Ø¦ÛÙÙØ§ÛÙ",                     lang:"Kurdish / Turkish", langKu:"Ú©ÙØ±Ø¯Û / ØªÙØ±Ú©Û",  platform:"WhatsApp" },
      { id:"rc-ihlas",      name:"Ihlas Nur",               nameKu:"Ø¦ÛØ®ÙØ§Ø³ ÙÙØ±",        schedule:"Ø¦ÛÙÙØ§ÛÙ",                     lang:"Kurdish / Turkish", langKu:"Ú©ÙØ±Ø¯Û / ØªÙØ±Ú©Û",  platform:"Zoom" }
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
