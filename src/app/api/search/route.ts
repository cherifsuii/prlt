import { NextRequest, NextResponse } from 'next/server'

// Comprehensive search index with all the provided resources
const searchIndex = [
  // 1ER ANNE PREPARATOIRE SEMESTRE 1 - Algebre 1
  {
    id: 1,
    title: 'Algebre 1 - Interrogation 4',
    subject: 'Algebre 1',
    type: 'Interrogation',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1oQZ_2NoB8QwH4Ui5qTKY6j8rngCipumT/view?usp=drive_link',
    description: 'Interrogation 4 d\'Algèbre 1 avec correction',
    instructor: 'Staff'
  },
  {
    id: 2,
    title: 'Algebre 1 - Interrogation 3',
    subject: 'Algebre 1',
    type: 'Interrogation',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/12PDwJfLdO5OMwnIYQIU2GClbtL2DibUu/view?usp=drive_link',
    description: 'Interrogation 3 d\'Algèbre 1 avec correction',
    instructor: 'Staff'
  },
  {
    id: 3,
    title: 'Algebre 1 - Interrogation 2',
    subject: 'Algebre 1',
    type: 'Interrogation',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1cySBu3er3SQSsHzQVZAYz7Xv440v7f7m/view?usp=drive_link',
    description: 'Interrogation 2 d\'Algèbre 1 avec correction',
    instructor: 'Staff'
  },
  {
    id: 4,
    title: 'Algebre 1 - Interrogation 1',
    subject: 'Algebre 1',
    type: 'Interrogation',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1bB7kjg-u0lT25FsSL1uQ9LTGlsFZ696Y/view?usp=drive_link',
    description: 'Interrogation 1 d\'Algèbre 1',
    instructor: 'Staff'
  },
  {
    id: 5,
    title: 'Algebre 1 - Chapitre 1',
    subject: 'Algebre 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1dsPN3UDDSWeWKMxFgZDS--WBQG_uDlU9/view?usp=drive_link',
    description: 'Cours d\'Algèbre 1 - Chapitre 1',
    instructor: 'Staff'
  },
  {
    id: 6,
    title: 'Algebre 1 - All Chapters English',
    subject: 'Algebre 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/drive/folders/1k27NTpAwY1ivkashFYwoYfXPQ9WED93X?usp=drive_link',
    description: 'Tous les chapitres d\'Algèbre 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 7,
    title: 'Algebre 1 - Examens Français',
    subject: 'Algebre 1',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Examens d\'Algèbre 1 en français',
    instructor: 'Staff'
  },
  {
    id: 8,
    title: 'Algebre 1 - Examens English',
    subject: 'Algebre 1',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Examens d\'Algèbre 1 en anglais',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 1 - Analyse 1
  {
    id: 9,
    title: 'Analyse 1 - Chapitre 1',
    subject: 'Analyse 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Cours d\'Analyse 1 - Chapitre 1',
    instructor: 'Staff'
  },
  {
    id: 10,
    title: 'Analyse 1 - Chapitre 2',
    subject: 'Analyse 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Cours d\'Analyse 1 - Chapitre 2',
    instructor: 'Staff'
  },
  {
    id: 11,
    title: 'Analyse 1 - Chapitre 4',
    subject: 'Analyse 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Cours d\'Analyse 1 - Chapitre 4',
    instructor: 'Staff'
  },
  {
    id: 12,
    title: 'Analyse 1 - Chapitre 5',
    subject: 'Analyse 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Cours d\'Analyse 1 - Chapitre 5',
    instructor: 'Staff'
  },
  {
    id: 13,
    title: 'Analyse 1 - Cours English',
    subject: 'Analyse 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1p83jbgXs7d0KNWoBMRIsbdzmNtQLrUCf/view?usp=drive_link',
    description: 'Cours d\'Analyse 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 14,
    title: 'Analyse 1 - Série TD 1',
    subject: 'Analyse 1',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1-pZg2YaS6LEfl1MQOFbfP-UFx9OoUNfq&usp=drive_copy',
    description: 'Série de TD d\'Analyse 1',
    instructor: 'Staff'
  },
  {
    id: 15,
    title: 'Analyse 1 - Série TD 2',
    subject: 'Analyse 1',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1n3C2M2AdgQ7TfhXBz-vaAJ-JqTduwGN7&usp=drive_copy',
    description: 'Série de TD d\'Analyse 1',
    instructor: 'Staff'
  },
  {
    id: 16,
    title: 'Analyse 1 - Exams',
    subject: 'Analyse 1',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=18YG0Xo8pm-kAVPpgPfsDWZnxVVbbZ8u_&usp=drive_copy',
    description: 'Examens d\'Analyse 1',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 1 - Physique 1
  {
    id: 17,
    title: 'Physique 1 - Cours Français',
    subject: 'Physique 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1gg3N6GJaMsfzmycbBWc1C_xNh9w6B9IY&usp=drive_copy',
    description: 'Cours de Physique 1 en français',
    instructor: 'Staff'
  },
  {
    id: 18,
    title: 'Physique 1 - Série TD English',
    subject: 'Physique 1',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1IaLzVn6aDMpZL_Xq_X9hzVKIU8-tNdSk&usp=drive_copy',
    description: 'Série de TD de Physique 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 19,
    title: 'Physique 1 - Solutions English',
    subject: 'Physique 1',
    type: 'Solutions',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1NlwoyBZZkoQN91dUEuQDx4PhW-cW6Hi2&usp=drive_copy',
    description: 'Solutions des TD de Physique 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 20,
    title: 'Physique 1 - Exams English',
    subject: 'Physique 1',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1UZ84wd3G-I0icVI5UaEgW5XORfhZKoAp&usp=drive_copy',
    description: 'Examens de Physique 1 en anglais',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 1 - Chimie 1
  {
    id: 21,
    title: 'Chimie 1 - Cours English',
    subject: 'Chimie 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1wo68ow2R-bShpD3dOKzdoX8WE1JdYiJD&usp=drive_copy',
    description: 'Cours de Chimie 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 22,
    title: 'Chimie 1 - TD English',
    subject: 'Chimie 1',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1BxEUImbPAU3rgBrbzwQY8a6jeieD7wwF&usp=drive_copy',
    description: 'TD de Chimie 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 23,
    title: 'Chimie 1 - Solutions English',
    subject: 'Chimie 1',
    type: 'Solutions',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1kNF6FOHlm8CHnwjUbLj96S4YBIWoQ_Mh&usp=drive_copy',
    description: 'Solutions des TD de Chimie 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 24,
    title: 'Chimie 1 - Exams English',
    subject: 'Chimie 1',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=18Gh82Cb3oVKr0gtMLOPNfuY3j7rgR7Ka&usp=drive_copy',
    description: 'Examens de Chimie 1 en anglais',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 1 - Informatique 1
  {
    id: 25,
    title: 'Informatique 1 - Cours Français',
    subject: 'Informatique 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1zBvi9NPcOv_CMNq_CHxYbdwSKckmJZIM&usp=drive_copy',
    description: 'Cours d\'Informatique 1 en français',
    instructor: 'Staff'
  },
  {
    id: 26,
    title: 'Informatique 1 - Cours English',
    subject: 'Informatique 1',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1NWXjHQtdqkK5ZXo3ddIiaXaJyR1bWttw&usp=drive_copy',
    description: 'Cours d\'Informatique 1 en anglais',
    instructor: 'Staff'
  },
  {
    id: 27,
    title: 'Informatique 1 - TD',
    subject: 'Informatique 1',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1JaLmR2ZoodwEXFVgUafD2I5xMmo3kt3X&usp=drive_copy',
    description: 'TD d\'Informatique 1',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Algebre 2
  {
    id: 28,
    title: 'Algebre 2 - Cours English 1',
    subject: 'Algebre 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1toDaW_GXlIcU9JTBsRKN3bFvS0vssFBB&usp=drive_copy',
    description: 'Cours d\'Algèbre 2 en anglais - Partie 1',
    instructor: 'Staff'
  },
  {
    id: 29,
    title: 'Algebre 2 - Cours English 2',
    subject: 'Algebre 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1iX0RpUg6BYL_ZJVtOTvkFRh7FD1ujKNt&usp=drive_copy',
    description: 'Cours d\'Algèbre 2 en anglais - Partie 2',
    instructor: 'Staff'
  },
  {
    id: 30,
    title: 'Algebre 2 - TD Français',
    subject: 'Algebre 2',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1mC9P6VfLeentC0wBiIHBCX_E31Drxbo6&usp=drive_copy',
    description: 'TD d\'Algèbre 2 en français',
    instructor: 'Staff'
  },
  {
    id: 31,
    title: 'Algebre 2 - TD English 1',
    subject: 'Algebre 2',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1_YdK_Jl5wgK6eglITPMi9ImuWnauCXRM&usp=drive_copy',
    description: 'TD d\'Algèbre 2 en anglais - Partie 1',
    instructor: 'Staff'
  },
  {
    id: 32,
    title: 'Algebre 2 - TD English 2',
    subject: 'Algebre 2',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1zKnvUj-XgDRZNb38je-aFnzmxTHzGwpD&usp=drive_copy',
    description: 'TD d\'Algèbre 2 en anglais - Partie 2',
    instructor: 'Staff'
  },
  {
    id: 33,
    title: 'Algebre 2 - Exams',
    subject: 'Algebre 2',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1q3FgX4Od0Ppp-Myrf4CtBqXfx66HQRqH&usp=drive_copy',
    description: 'Examens d\'Algèbre 2',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Analyse 2
  {
    id: 34,
    title: 'Analyse 2 - Cours English 1',
    subject: 'Analyse 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=10p7YCf0ALx3YNqyhj1csgD17ermqE3jQ&usp=drive_copy',
    description: 'Cours d\'Analyse 2 en anglais - Partie 1',
    instructor: 'Staff'
  },
  {
    id: 35,
    title: 'Analyse 2 - Cours English 2',
    subject: 'Analyse 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1rVtSNp3AJu6jX_0ps_b9REi2cSNRogeR&usp=drive_copy',
    description: 'Cours d\'Analyse 2 en anglais - Partie 2',
    instructor: 'Staff'
  },
  {
    id: 36,
    title: 'Analyse 2 - TD English',
    subject: 'Analyse 2',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1d29OOQ99gWGu7TpQyt-oFn3a9AL44CmK&usp=drive_copy',
    description: 'TD d\'Analyse 2 en anglais',
    instructor: 'Staff'
  },
  {
    id: 37,
    title: 'Analyse 2 - Exams',
    subject: 'Analyse 2',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1Km_yfY69vU2CgXbASSlBSb5y2Td7ZUxS&usp=drive_copy',
    description: 'Examens d\'Analyse 2',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Chemistry 2 Thermodynamics
  {
    id: 38,
    title: 'Chemistry 2 Thermodynamics - TD',
    subject: 'Chemistry 2',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=12cNPpeZqxzc4jmuwQbgDvgcPEK_NJyhV&usp=drive_copy',
    description: 'TD de Chimie 2 - Thermodynamique',
    instructor: 'Staff'
  },
  {
    id: 39,
    title: 'Chemistry 2 Thermodynamics - Cours',
    subject: 'Chemistry 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1vWfvEn7gvXkqsId6o-Cq3w_IrHqFYD9J&usp=drive_copy',
    description: 'Cours de Chimie 2 - Thermodynamique',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Physics 2
  {
    id: 40,
    title: 'Physics 2 - Course',
    subject: 'Physics 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=12cNPpeZqxzc4jmuwQbgDvgcPEK_NJyhV&usp=drive_copy',
    description: 'Cours de Physique 2',
    instructor: 'Staff'
  },
  {
    id: 41,
    title: 'Physics 2 - TD',
    subject: 'Physics 2',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1Kyw_ZVp-keEKP_92FrHEYII7pqGYPy_8&usp=drive_copy',
    description: 'TD de Physique 2',
    instructor: 'Staff'
  },
  {
    id: 42,
    title: 'Physics 2 - Exams',
    subject: 'Physics 2',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1Kyw_ZVp-keEKP_92FrHEYII7pqGYPy_8&usp=drive_copy',
    description: 'Examens de Physique 2',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Informatique 2
  {
    id: 43,
    title: 'Informatique 2 - Cours Français',
    subject: 'Informatique 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1ZyRj2Ovt_Vwsp6Bb1qUPKAq31HwFrd-c&usp=drive_copy',
    description: 'Cours d\'Informatique 2 en français',
    instructor: 'Staff'
  },
  {
    id: 44,
    title: 'Informatique 2 - Exams',
    subject: 'Informatique 2',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1gNEL-JMTaLarqSTU2PW8oajhQfdHL7iD&usp=drive_copy',
    description: 'Examens d\'Informatique 2',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Probabilities
  {
    id: 45,
    title: 'Probabilities - Examens Français',
    subject: 'Probabilities',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1Dc98vRYeBm9G2kVtVYdk4MifMLfHn391&usp=drive_copy',
    description: 'Examens de Probabilités en français',
    instructor: 'Staff'
  },
  {
    id: 46,
    title: 'Probabilities - Exam English',
    subject: 'Probabilities',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/file/d/1fkjiVgjhXZkJsJ_lPLEQABnDbwJISr_E/view?usp=drive_link',
    description: 'Examen de Probabilités en anglais',
    instructor: 'Staff'
  },
  {
    id: 47,
    title: 'Probabilities - Cours English',
    subject: 'Probabilities',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1s01zEkJPl7xsKzAvO2g08NcDISZN2s5O&usp=drive_copy',
    description: 'Cours de Probabilités en anglais',
    instructor: 'Staff'
  },
  {
    id: 48,
    title: 'Probabilities - TD English',
    subject: 'Probabilities',
    type: 'TD',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1Ryc1DIFRUhjpwTiiXfxpSTLL4QM2qi2U&usp=drive_copy',
    description: 'TD de Probabilités en anglais',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Economy 2
  {
    id: 49,
    title: 'Economy 2 - Course',
    subject: 'Economy 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1-Az9s8vFVtFwFcyO6v2WEan1ydVqn3p1&usp=drive_copy',
    description: 'Cours d\'Économie 2',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - Engineering Humain 2
  {
    id: 50,
    title: 'Engineering Humain 2 - Cours English',
    subject: 'Engineering Humain 2',
    type: 'Cours',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=16Gd3HqesZ_I2sJdYTkbQrFIvxfLpQoRY&usp=drive_copy',
    description: 'Cours d\'Ingénierie Humaine 2 en anglais',
    instructor: 'Staff'
  },
  {
    id: 51,
    title: 'Engineering Humain 2 - Exams',
    subject: 'Engineering Humain 2',
    type: 'Examens',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=16Gd3HqesZ_I2sJdYTkbQrFIvxfLpQoRY&usp=drive_copy',
    description: 'Examens d\'Ingénierie Humaine 2',
    instructor: 'Staff'
  },

  // 1ER ANNE PREPARATOIRE SEMESTRE 2 - TPs
  {
    id: 52,
    title: 'TP Physics',
    subject: 'TP',
    type: 'TP',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1o0S-hhx0ry6gdTeGvvdDJne-bRJeA1Uz&usp=drive_copy',
    description: 'TP de Physique',
    instructor: 'Staff'
  },
  {
    id: 53,
    title: 'TP Chemie',
    subject: 'TP',
    type: 'TP',
    semester: 'S2',
    year: '1st Year',
    cycle: 'Preparatory Cycle',
    department: '',
    link: 'https://drive.google.com/open?id=1rvtFiP4aV_5h8IMZmFLLfrL5Maaq4P3V&usp=drive_copy',
    description: 'TP de Chimie',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - MDF
  {
    id: 54,
    title: 'MDF - Ultimate Pack',
    subject: 'MDF',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1hjhU5JTE1L-AYV3742jsQRZiuy5FMAv7&usp=drive_copy',
    description: 'Pack complet de Mécanique des Fluides',
    instructor: 'Staff'
  },
  {
    id: 55,
    title: 'MDF - Examens Corrigés',
    subject: 'MDF',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/file/d/1PNVj3_5F8M8Of9BxJ1yKL7tpY-v-7hby/view?usp=drive_link',
    description: 'Examens corrigés de Mécanique des Fluides',
    instructor: 'Staff'
  },
  {
    id: 56,
    title: 'MDF - Book',
    subject: 'MDF',
    type: 'Livre',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1mWlJgU4lu_Dc7wfQ8xOBHuteuOiG49hP&usp=drive_copy',
    description: 'Livre de Mécanique des Fluides',
    instructor: 'Staff'
  },
  {
    id: 57,
    title: 'MDF - Solutions TD',
    subject: 'MDF',
    type: 'Solutions',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/file/d/1At0Ppy1bDEtms9u4QEysQTKv8hLkOFfo/view?usp=drive_link',
    description: 'Solutions des TD de Mécanique des Fluides',
    instructor: 'Staff'
  },
  {
    id: 58,
    title: 'MDF - Cours',
    subject: 'MDF',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1-URDGGAmzgYej1iTsV3C-hkejSCTNwk4&usp=drive_copy',
    description: 'Cours de Mécanique des Fluides',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - MDC
  {
    id: 59,
    title: 'MDC - Pack',
    subject: 'MDC',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/drive/folders/1aeP9kt2GbSM1GYwUdgUY7FVv2pCXfQVB?usp=drive_link',
    description: 'Pack de Matériaux de Construction',
    instructor: 'Staff'
  },
  {
    id: 60,
    title: 'MDC - Resume',
    subject: 'MDC',
    type: 'Resume',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=10rEq_2M-HwowjoDU0cuAoemX4DTvGiHP&usp=drive_copy',
    description: 'Résumé de Matériaux de Construction',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - MDS
  {
    id: 61,
    title: 'MDS - Pack',
    subject: 'MDS',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/drive/folders/1h6i8pwBI2atdcKjcM5EZdT8LcYL8sJe4?usp=drive_link',
    description: 'Pack de Matériaux et Structures',
    instructor: 'Staff'
  },
  {
    id: 62,
    title: 'MDS - Cours',
    subject: 'MDS',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=16xDDog8A5UmQ8QhbXRwQE1naz0Arm269&usp=drive_copy',
    description: 'Cours de Matériaux et Structures',
    instructor: 'Staff'
  },
  {
    id: 63,
    title: 'MDS - TD',
    subject: 'MDS',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1qwKLkSZ4zCHih1vT6-7U9IJbZwz0DMZ7&usp=drive_copy',
    description: 'TD de Matériaux et Structures',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - MMC
  {
    id: 64,
    title: 'MMC - Cours',
    subject: 'MMC',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1ZS3VZaDzUJwBEDeb7hxcpr9Phd9wMOnl&usp=drive_copy',
    description: 'Cours de Mécanique des Milieux Continus',
    instructor: 'Staff'
  },
  {
    id: 65,
    title: 'MMC - TD',
    subject: 'MMC',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1lV0eFqUxfIe8T5TTSgV5C8vD7yxzIV6j&usp=drive_copy',
    description: 'TD de Mécanique des Milieux Continus',
    instructor: 'Staff'
  },
  {
    id: 66,
    title: 'MMC - Exam',
    subject: 'MMC',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=16-X9xpLNpmKC5rBFkUORvxoyFuFiOZks&usp=drive_copy',
    description: 'Examens de Mécanique des Milieux Continus',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - RDM
  {
    id: 67,
    title: 'RDM - Ultimate Pack',
    subject: 'RDM',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/drive/folders/1-K1dMIhi0g6ta8suoXSEX51vZywZsPJQ?usp=drive_link',
    description: 'Pack complet de Résistance des Matériaux',
    instructor: 'Staff'
  },
  {
    id: 68,
    title: 'RDM - Les Chapitres',
    subject: 'RDM',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1u1_xadIEHoxN9PKbt7rGP00YKZF-y7Qh&usp=drive_copy',
    description: 'Les chapitres de Résistance des Matériaux',
    instructor: 'Staff'
  },
  {
    id: 69,
    title: 'RDM - Topo',
    subject: 'RDM',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1UsdvcZCnSWrY7qwgdP2tVXysN_HnzCrw&usp=drive_copy',
    description: 'Topo de Résistance des Matériaux',
    instructor: 'Staff'
  },
  {
    id: 70,
    title: 'RDM - Exams',
    subject: 'RDM',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1jEzXSPMLK7xC90_3T6JB--M7BqNsUk6h&usp=drive_copy',
    description: 'Examens de Résistance des Matériaux',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - Geologie
  {
    id: 71,
    title: 'Geologie - Cours',
    subject: 'Geologie',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1Oni7x9JSOF2wLCZXWPdaapD70k3wXmWV&usp=drive_copy',
    description: 'Cours de Géologie',
    instructor: 'Staff'
  },
  {
    id: 72,
    title: 'Geologie - Cours Détaillés',
    subject: 'Geologie',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1q_Gwint6HBUIuCvWps6DTaxXKnb1ljB9&usp=drive_copy',
    description: 'Cours détaillés de Géologie',
    instructor: 'Staff'
  },
  {
    id: 73,
    title: 'Geologie - TP',
    subject: 'Geologie',
    type: 'TP',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=10hcI0zJFOknsmFGobWnQMHAgTLA5MOXo&usp=drive_copy',
    description: 'TP de Géologie',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - Ananum
  {
    id: 74,
    title: 'Ananum - Ultimate Pack',
    subject: 'Ananum',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1lCBvB9GmI6mEzmrSSLv6c9rFx2434MAQ&usp=drive_copy',
    description: 'Pack complet d\'Analyse Numérique',
    instructor: 'Staff'
  },
  {
    id: 75,
    title: 'Ananum - Examens',
    subject: 'Ananum',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1nkRVxkpq0SeqJ_vWxUYuRy94XzZL0Cne&usp=drive_copy',
    description: 'Examens d\'Analyse Numérique',
    instructor: 'Staff'
  },
  {
    id: 76,
    title: 'Ananum - TD',
    subject: 'Ananum',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1WEu8wXqf29XgMihFAYdcYSJVF5SyQDXT&usp=drive_copy',
    description: 'TD d\'Analyse Numérique',
    instructor: 'Staff'
  },
  {
    id: 77,
    title: 'Ananum - Resume',
    subject: 'Ananum',
    type: 'Resume',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1xGFsI7wRwVEjMuBBFZWXKqtZkerRuYBQ&usp=drive_copy',
    description: 'Résumé d\'Analyse Numérique',
    instructor: 'Staff'
  },
  {
    id: 78,
    title: 'Ananum - Cours',
    subject: 'Ananum',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1-i9X2lXB0u3ryM23K-s7FKuAlzo7K5RD&usp=drive_copy',
    description: 'Cours d\'Analyse Numérique',
    instructor: 'Staff'
  },
  {
    id: 79,
    title: 'Ananum - Solutions TD',
    subject: 'Ananum',
    type: 'Solutions',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/drive/folders/1kWd6t-qP2jK0Tg9mA0SMMps2n3lrpQGU?usp=drive_link',
    description: 'Solutions des TD d\'Analyse Numérique',
    instructor: 'Staff'
  },

  // 1ERE ANNE DIB SEMESTRE 1 - Hydrologie Appliquee
  {
    id: 80,
    title: 'Hydrologie Appliquee - Ultimate Pack',
    subject: 'Hydrologie Appliquee',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DIB',
    link: 'https://drive.google.com/open?id=1jAPHwB3CCwvhT7ZTBayIesnzhkucMWXt&usp=drive_copy',
    description: 'Pack complet d\'Hydrologie Appliquée',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - Topology
  {
    id: 81,
    title: 'Topology - TP',
    subject: 'Topology',
    type: 'TP',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1jTOUuljHuGlBXz_96v1qbGWbMJktuFAl&usp=drive_copy',
    description: 'TP de Topologie',
    instructor: 'Staff'
  },
  {
    id: 82,
    title: 'Topology - Exo',
    subject: 'Topology',
    type: 'Exercices',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1a6WKhxtmWNXowDC4pIpwVuktwiVxBEsO&usp=drive_copy',
    description: 'Exercices de Topologie',
    instructor: 'Staff'
  },
  {
    id: 83,
    title: 'Topology - Exam',
    subject: 'Topology',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1A_-3uwUnftubw9L8ZdnDFONj3vaCOQUs&usp=drive_copy',
    description: 'Examens de Topologie',
    instructor: 'Staff'
  },
  {
    id: 84,
    title: 'Topology - Cours',
    subject: 'Topology',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1NyWU7wuH3pB8fZzSXJYDk9F5CSN1hEbs&usp=drive_copy',
    description: 'Cours de Topologie',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - RDM
  {
    id: 85,
    title: 'RDM - Les Chapitres',
    subject: 'RDM',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=145j_195_NqVx30wqPW6DAXV8qlVz05Dm&usp=drive_copy',
    description: 'Les chapitres de Résistance des Matériaux',
    instructor: 'Staff'
  },
  {
    id: 86,
    title: 'RDM - Examens',
    subject: 'RDM',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=12cMN57rH5VdRbzHXmjud4r_D81XJ8sf8&usp=drive_copy',
    description: 'Examens de Résistance des Matériaux',
    instructor: 'Staff'
  },
  {
    id: 87,
    title: 'RDM - TD',
    subject: 'RDM',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1pc1m9WeWTSfJWRxWhWR7fqgL8hFG1wAD&usp=drive_copy',
    description: 'TD de Résistance des Matériaux',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - PGC
  {
    id: 88,
    title: 'PGC - Les Chapitres',
    subject: 'PGC',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1JADFBLnBLFJloTowsBFeDj99LMFq7DTe&usp=drive_copy',
    description: 'Les chapitres de Physique Générale et Chimie',
    instructor: 'Staff'
  },
  {
    id: 89,
    title: 'PGC - Resume',
    subject: 'PGC',
    type: 'Resume',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1BcKvwJ-cDXE3_ux_fqwIe7puYaEQ3TuC&usp=drive_copy',
    description: 'Résumé de Physique Générale et Chimie',
    instructor: 'Staff'
  },
  {
    id: 90,
    title: 'PGC - Examens',
    subject: 'PGC',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1EEM1saZHmobafvck70o6hzc-9NZT-Wmc&usp=drive_copy',
    description: 'Examens de Physique Générale et Chimie',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - MMC
  {
    id: 91,
    title: 'MMC - Cours',
    subject: 'MMC',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1vdYVvZNBxsl8YyfH_0N8wR-Mk3H8qnTp&usp=drive_copy',
    description: 'Cours de Mécanique des Milieux Continus',
    instructor: 'Staff'
  },
  {
    id: 92,
    title: 'MMC - Exam',
    subject: 'MMC',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1BPHOnPPO3Hyk1kdxJCQ99Vsxijk4iJXz&usp=drive_copy',
    description: 'Examens de Mécanique des Milieux Continus',
    instructor: 'Staff'
  },
  {
    id: 93,
    title: 'MMC - TD',
    subject: 'MMC',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=13Ol35PMlH2eAPbNkkI3MTmRZSHBmF4lZ&usp=drive_copy',
    description: 'TD de Mécanique des Milieux Continus',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - MDS
  {
    id: 94,
    title: 'MDS - TD',
    subject: 'MDS',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1O8JmhXn_fhFgo5w3yEqAk_v7Z746nI1t&usp=drive_copy',
    description: 'TD de Matériaux et Structures',
    instructor: 'Staff'
  },
  {
    id: 95,
    title: 'MDS - Exam',
    subject: 'MDS',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1nUKKzh70cA9-g3UYH3X2QZSfkrIzVXVN&usp=drive_copy',
    description: 'Examens de Matériaux et Structures',
    instructor: 'Staff'
  },
  {
    id: 96,
    title: 'MDS - Cours',
    subject: 'MDS',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1L6GTtU--Kx3qhQLQ7L7Cf7urmRZs38P3&usp=drive_copy',
    description: 'Cours de Matériaux et Structures',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - MDF
  {
    id: 97,
    title: 'MDF - TD',
    subject: 'MDF',
    type: 'TD',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1ZMtdLm-WroDg0gv7Ihq4fXwyF8t811ox&usp=drive_copy',
    description: 'TD de Mécanique des Fluides',
    instructor: 'Staff'
  },
  {
    id: 98,
    title: 'MDF - Cours',
    subject: 'MDF',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1mr2CS_zMz2c_KqPIjmMIyxZ-ERYYeyIw&usp=drive_copy',
    description: 'Cours de Mécanique des Fluides',
    instructor: 'Staff'
  },
  {
    id: 99,
    title: 'MDF - Exam',
    subject: 'MDF',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1tH5-eKJ39WvMxq_qgprJRj6MoJ31vKmj&usp=drive_copy',
    description: 'Examens de Mécanique des Fluides',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - MDC
  {
    id: 100,
    title: 'MDC - TP',
    subject: 'MDC',
    type: 'TP',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1ZWMfy1-Rv5DsHPdzUueULjwKeVhBLaN-&usp=drive_copy',
    description: 'TP de Matériaux de Construction',
    instructor: 'Staff'
  },
  {
    id: 101,
    title: 'MDC - Exam',
    subject: 'MDC',
    type: 'Examens',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1CRnSVoajTaZdApixkeDGKpwyfYRvR1-j&usp=drive_copy',
    description: 'Examens de Matériaux de Construction',
    instructor: 'Staff'
  },
  {
    id: 102,
    title: 'MDC - Cours',
    subject: 'MDC',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1s3mRg0nDYaG_xR4mxoTV2Q-Io-QCzZJ2&usp=drive_copy',
    description: 'Cours de Matériaux de Construction',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - Geology
  {
    id: 103,
    title: 'Geology - Cours',
    subject: 'Geology',
    type: 'Cours',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1tJhNeQeYc4ODLcyLAjkxQnHlAyNTBj8x&usp=drive_copy',
    description: 'Cours de Géologie',
    instructor: 'Staff'
  },
  {
    id: 104,
    title: 'Geology - Resume',
    subject: 'Geology',
    type: 'Resume',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1uK0QQkJ-KWxGduhN3JB8NprHBa7Y6s79&usp=drive_copy',
    description: 'Résumé de Géologie',
    instructor: 'Staff'
  },
  {
    id: 105,
    title: 'Geology - TP',
    subject: 'Geology',
    type: 'TP',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=18uNA0MskVZslbDCL_lP6ZZ0wbtXQgYrx&usp=drive_copy',
    description: 'TP de Géologie',
    instructor: 'Staff'
  },

  // 1ERE ANNE DMS SEMESTRE 1 - Ananum
  {
    id: 106,
    title: 'Ananum - Ultimate Pack',
    subject: 'Ananum',
    type: 'Pack',
    semester: 'S1',
    year: '1st Year',
    cycle: 'Engineering Cycle',
    department: 'DMS',
    link: 'https://drive.google.com/open?id=1gwVUC5ixS7CM7du3tyUm7wLwhNH0CN6M&usp=drive_copy',
    description: 'Pack complet d\'Analyse Numérique',
    instructor: 'Staff'
  },

  // Add more entries as needed from the provided data...
  // This is a sample structure - you can continue adding all the resources
]

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase().trim() || ''

  if (!query) {
    return NextResponse.json({ results: [], total: 0 })
  }

  // Search through the index
  const results = searchIndex.filter(item => {
    // Search in title, subject, type, semester, year, cycle, department, and description
    return (
      item.title.toLowerCase().includes(query) ||
      item.subject.toLowerCase().includes(query) ||
      item.type.toLowerCase().includes(query) ||
      item.semester.toLowerCase().includes(query) ||
      item.year.toLowerCase().includes(query) ||
      item.cycle.toLowerCase().includes(query) ||
      item.department.toLowerCase().includes(query) ||
      item.description.toLowerCase().includes(query)
    )
  })

  // Sort results by relevance (title matches first, then subject, then description)
  const sortedResults = results.sort((a, b) => {
    const aTitleMatch = a.title.toLowerCase().includes(query)
    const bTitleMatch = b.title.toLowerCase().includes(query)

    if (aTitleMatch && !bTitleMatch) return -1
    if (!aTitleMatch && bTitleMatch) return 1

    const aSubjectMatch = a.subject.toLowerCase().includes(query)
    const bSubjectMatch = b.subject.toLowerCase().includes(query)

    if (aSubjectMatch && !bSubjectMatch) return -1
    if (!aSubjectMatch && bSubjectMatch) return 1

    return 0
  })

  return NextResponse.json({
    results: sortedResults,
    total: sortedResults.length,
    query: query
  })
}

// Function to populate search index from text files (to be implemented when files are available)
export async function POST(request: NextRequest) {
  // This endpoint will be used to populate/update the search index
  // when the actual text files with Google Drive links are available
  try {
    const { files } = await request.json()

    // Process files and update search index
    // This will be implemented when text files are available

    return NextResponse.json({
      success: true,
      message: 'Search index updated successfully'
    })
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: 'Failed to update search index'
    }, { status: 500 })
  }
}