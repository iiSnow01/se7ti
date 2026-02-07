const Se7tiPro = {
  badgeClass(severity) {
    return `badge-${severity}`;
  },
  severityLabel(severity, lang) {
    if (severity === "low") return t("severityLow", lang);
    if (severity === "medium") return t("severityMedium", lang);
    return t("severityHigh", lang);
  },
  sectionTitle(section, lang) {
    const map = {
      causes: { dz: "Asbab", ar: "الأسباب", fr: "Causes" },
      effets: { dz: "T2tirat", ar: "الآثار", fr: "Effets" },
      alert: { dz: "3lamat khatra", ar: "علامات الإنذار", fr: "Signes d'alerte" },
      home: { dz: "Nsa7 f dar", ar: "نصائح منزلية", fr: "Conseils maison" },
      avoid: { dz: "Matdirch", ar: "ما يجب تجنبه", fr: "À éviter" },
      where: { dz: "Fin tmchi", ar: "أين تذهب", fr: "Où aller" },
      when: { dz: "Mta tchouf tbib", ar: "متى تستشير", fr: "Quand consulter" }
    };
    return map[section]?.[lang] || map[section]?.fr || section;
  }
};
