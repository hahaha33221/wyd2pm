// 자동 생성 파일입니다. 직접 고치지 말고 엑셀을 고친 뒤 다시 만드세요.
// 원본: WYD_2nd_Prep_Meeting_QA_DB.xlsx
// 만드는 법: python3 scripts/import_db.py "<엑셀 파일>"

// QA_DB 시트
export const SEED = [
  {
    "id": "Q1",
    "no": "Q1",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "한 나라의 그룹 (교구·단체·개별 그룹)은 독립적으로 등록할 수 있나요, 아니면 주교회의의 승인이나 통합 등록이 필요한가요?",
      "en": "Can groups from one country (dioceses, organisations, individual groups) register independently, or is approval or consolidated registration through the Bishops' Conference required?",
      "es": "¿Los grupos de un mismo país (diócesis, organizaciones, grupos individuales) pueden inscribirse de forma independiente, o se necesita la aprobación o una inscripción conjunta a través de la Conferencia Episcopal?",
      "fr": "Les groupes d'un même pays (diocèses, organisations, groupes individuels) peuvent-ils s'inscrire de manière indépendante, ou faut-il l'approbation de la Conférence épiscopale ou une inscription commune par son intermédiaire ?"
    },
    "a": {
      "ko": "한 나라의 각 교구·단체·개별 그룹은 등록시스템을 통해 독립적으로 등록할 수 있으며, 반드시 주교회의를 통해 통합 등록해야 하는 것은 아닙니다.\n다만, 주교회의의 사전 승인이나 국가 차원의 참가 조율이 필요한지는 각국 주교회의의 내부 방침에 따라 다를 수 있으므로, 해당 주교회의 또는 국가 WYD 담당자에게 확인해 주시기 바랍니다.",
      "en": "Each diocese, organisation or individual group in a country can register independently through the registration system; consolidated registration through the Bishops' Conference is not mandatory.\nHowever, whether prior approval from the Bishops' Conference or national-level coordination is required may differ according to the internal policy of each Bishops' Conference, so please check with your Bishops' Conference or national WYD coordinator.",
      "es": "Cada diócesis, organización o grupo individual de un país puede inscribirse de forma independiente a través del sistema de inscripción; no es obligatorio hacer una inscripción conjunta a través de la Conferencia Episcopal.\nSin embargo, la necesidad de una aprobación previa de la Conferencia Episcopal o de una coordinación a nivel nacional puede variar según la política interna de cada Conferencia Episcopal, por lo que les pedimos que lo consulten con su Conferencia Episcopal o con el responsable nacional de la JMJ.",
      "fr": "Chaque diocèse, organisation ou groupe individuel d'un pays peut s'inscrire de manière indépendante via le système d'inscription ; une inscription commune par la Conférence épiscopale n'est pas obligatoire.\nToutefois, la nécessité d'une approbation préalable de la Conférence épiscopale ou d'une coordination au niveau national peut varier selon la politique interne de chaque Conférence épiscopale ; nous vous invitons donc à vérifier auprès de votre Conférence épiscopale ou du responsable national des JMJ."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q2",
    "no": "Q2",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹 규모별로 필요한 리더와 부리더의 수는 몇 명이며, 추가 리더를 추후 지정할 수 있나요? 또한 그룹 리더와 하위그룹 리더가 열람·관리할 수 있는 정보의 범위는 어디까지인가요?",
      "en": "How many leaders and deputy leaders are required for each group size, and can additional leaders be appointed later? Also, what information can group leaders and subgroup leaders view and manage?",
      "es": "¿Cuántos líderes y sublíderes se necesitan según el tamaño del grupo, y se pueden designar líderes adicionales más adelante? Además, ¿qué información pueden consultar y gestionar los líderes de grupo y los líderes de subgrupo?",
      "fr": "Combien de responsables et de responsables adjoints faut-il selon la taille du groupe, et peut-on désigner des responsables supplémentaires plus tard ? Par ailleurs, quelles informations les responsables de groupe et de sous-groupe peuvent-ils consulter et gérer ?"
    },
    "a": {
      "ko": "단일그룹(Single Group)과 대규모그룹(Macrogroup)은 각각 그룹 대표 1명과 부대표 1명으로 구성됩니다. 그룹 규모가 크거나 서울 도착 출발 일정·패키지가 서로 다른 경우에는 대규모그룹 내에 하위그룹(Subgroup)을 구성할 수 있습니다. 하위그룹은 대규모그룹 대표의 계정과 별도의 계정으로 생성할 수 있으며, 이 경우 하위 그룹에도 대표 1명과 부대표 1명을 지정합니다.\n하위그룹 대표와 부대표는 해당 하위그룹의 등록 정보 열람·수정 및 결제를 진행할 수 있습니다. 별도의 계정으로 생성된 하위그룹에 대해서는 대규모그룹 대표가 등록 정보를 열람하고 결제할 수 있지만, 정보를 직접 수정할 권한은 부여되지 않습니다.",
      "en": "A Single Group and a Macrogroup each consist of one group leader and one deputy leader. If the group is large, or if members have different arrival/departure dates in Seoul or different packages, Subgroups can be formed within the Macrogroup. A Subgroup can be created with an account separate from the Macrogroup leader's account, in which case one leader and one deputy leader are also appointed for the Subgroup.\nThe Subgroup leader and deputy leader can view and edit the Subgroup's registration information and make payments. For Subgroups created with a separate account, the Macrogroup leader can view the registration information and make payments, but is not given permission to edit the information directly.",
      "es": "El Grupo Único (Single Group) y el Macrogrupo (Macrogroup) se componen cada uno de un líder y un sublíder. Si el grupo es grande o si sus miembros tienen distintas fechas de llegada/salida en Seúl o distintos paquetes, se pueden formar Subgrupos (Subgroup) dentro del Macrogrupo. Un Subgrupo puede crearse con una cuenta distinta de la del líder del Macrogrupo; en ese caso, también se designan un líder y un sublíder para el Subgrupo.\nEl líder y el sublíder del Subgrupo pueden consultar y modificar los datos de inscripción del Subgrupo y realizar los pagos. En el caso de los Subgrupos creados con una cuenta distinta, el líder del Macrogrupo puede consultar los datos de inscripción y realizar los pagos, pero no tiene permiso para modificar directamente la información.",
      "fr": "Le Groupe simple (Single Group) et le Macrogroupe (Macrogroup) comptent chacun un responsable et un responsable adjoint. Si le groupe est important, ou si ses membres ont des dates d'arrivée/de départ à Séoul ou des forfaits différents, des Sous-groupes (Subgroup) peuvent être constitués au sein du Macrogroupe. Un Sous-groupe peut être créé avec un compte distinct de celui du responsable du Macrogroupe ; dans ce cas, un responsable et un responsable adjoint sont aussi désignés pour le Sous-groupe.\nLe responsable et le responsable adjoint du Sous-groupe peuvent consulter et modifier les données d'inscription du Sous-groupe et effectuer le paiement. Pour les Sous-groupes créés avec un compte distinct, le responsable du Macrogroupe peut consulter les données d'inscription et effectuer le paiement, mais il n'a pas le droit de modifier directement les informations."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q3",
    "no": "Q3",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "대규모그룹(Macrogroup)에서 한 가족을 하나의 하위 그룹(Subgroup)으로 인정할 수 있나요? 최소 인원 기준은 무엇인가요?\n또한 공동 숙박 시 미성년자가 성인과 분리될 경우 누가 그들을 책임지나요?",
      "en": "Can one family be recognised as a single Subgroup within a Macrogroup? What is the minimum number of people?\nAlso, when minors are separated from adults in shared accommodation, who is responsible for them?",
      "es": "¿Se puede reconocer a una familia como un Subgrupo dentro de un Macrogrupo? ¿Cuál es el número mínimo de personas?\nAdemás, cuando en el alojamiento compartido los menores quedan separados de los adultos, ¿quién es responsable de ellos?",
      "fr": "Une famille peut-elle être reconnue comme un Sous-groupe au sein d'un Macrogroupe ? Quel est le nombre minimum de personnes ?\nPar ailleurs, lorsque des mineurs sont séparés des adultes dans un hébergement collectif, qui en est responsable ?"
    },
    "a": {
      "ko": "대규모그룹(Macrogroup)의 최소 인원 제한은 없습니다. 대규모그룹에서 하위 그룹(Subgroup)을 구성할 때의 기준은 같은 패키지와 서울 도착/출발 일정입니다. 따라서 한 가족이 같은 패키지를 선택하고 서울에 머무르는 일정이 같다면 하나의 하위그룹으로 구성할 수 있습니다.\n서울 WYD 미성년자보호지침에 따르면 성인과 미성년자의 숙소는 분리하는 것을 기본 원칙으로 합니다. 그러나 각 국가의 주교회의 및 국가별 미성년자보호 규정과 실질적인 안전 요건을 함께 고려하여 적용할 필요가 있습니다.\n예를 들어, 일부 국가에서는 성인 인솔자라 하더라도 미성년자와 동일한 숙소를 사용할 수 없도록 규정하고 있습니다. 이러한 경우에는 인솔자가 미성년자 숙소와 가까운 공간에 머물며, 문제가 발생할 때 신속하게 대응할 수 있도록 운영할 수 있습니다. 또한 어떤 국가에서는 성인 인솔자 2명이 미성년자 숙소에 함께 머물면서 교대로 감독 역할을 수행하는 방식으로 운영하기도 합니다.\n반대로, 특정 국가의 주교회의 또는 국가 기준에서 미성년자의 안전과 보호를 위해 성인 인솔자가 책임을 맡은 미성년자들과 같은 공간에서 숙박하는 것이 더 적절하다고 판단하는 경우에는, 해당 기준에 따라 동일한 공간에서 숙박하는 것도 가능합니다. 이 경우에도 미성년자 대표를 지정하여 비상 상황 발생 시 즉시 인솔자에게 연락할 수 있도록 하는 등 적절한 보호 조치를 마련해야 합니다.\n따라서 미성년자 숙소 운영 방식은 각 국가의 미성년자보호 규정과 현장의 안전 상황에 따라 다양한 방안이 적용될 수 있으며, 모든 경우에 일률적으로 적용되는 단일 정책을 정하기는 어렵습니다.\n서울 WYD 조직위원회는 서울 WYD의 미성년자보호지침을 제시하는 동시에, 공동 LOC인 각 국가 주교회의의 미성년자보호지침과 기준을 존중합니다. 다만, 해당 기준에 따라 어떠한 숙소 운영 방식을 선택할 것인지에 대한 결정과 그에 따른 책임은 각 순례자 그룹이 부담하게 됩니다.",
      "en": "There is no minimum number of people for a Macrogroup. The criteria for forming a Subgroup within a Macrogroup are the same package and the same arrival/departure dates in Seoul. Therefore, if a family chooses the same package and stays in Seoul on the same dates, they can form one Subgroup.\nAccording to the WYD Seoul Safeguarding Guidelines for minors, the basic principle is that adults and minors are accommodated separately. However, this needs to be applied together with the safeguarding regulations of each country's Bishops' Conference and national rules, as well as practical safety requirements.\nFor example, some countries stipulate that even adult chaperones may not share accommodation with minors. In such cases, chaperones can stay in a space close to the minors' accommodation so that they can respond quickly if a problem arises. In other countries, two adult chaperones stay in the minors' accommodation and take turns supervising.\nConversely, if a country's Bishops' Conference or national standards judge it more appropriate, for the safety and protection of minors, for adult chaperones to stay in the same space as the minors in their care, they may also stay in the same space in accordance with those standards. Even in this case, appropriate protective measures must be in place, such as appointing a minor representative who can contact the chaperone immediately in an emergency.\nTherefore, various approaches may be applied to accommodation for minors depending on each country's safeguarding regulations and the safety situation on site, and it is difficult to set a single policy that applies uniformly to every case.\nThe WYD Seoul Local Organising Committee presents the WYD Seoul Safeguarding Guidelines for minors while respecting the safeguarding guidelines and standards of each country's Bishops' Conference, which are co-LOCs. However, the decision on which accommodation arrangement to choose under those standards, and the responsibility that follows, rests with each pilgrim group.",
      "es": "No hay un número mínimo de personas para un Macrogrupo. Los criterios para formar un Subgrupo dentro de un Macrogrupo son el mismo paquete y las mismas fechas de llegada/salida en Seúl. Por tanto, si una familia elige el mismo paquete y permanece en Seúl en las mismas fechas, puede formar un Subgrupo.\nSegún las Directrices de protección de menores de la JMJ Seúl, el principio básico es que adultos y menores se alojen por separado. No obstante, esto debe aplicarse teniendo en cuenta también las normas de protección de menores de la Conferencia Episcopal y de cada país, así como los requisitos prácticos de seguridad.\nPor ejemplo, algunos países establecen que ni siquiera los acompañantes adultos pueden compartir alojamiento con menores. En esos casos, los acompañantes pueden alojarse en un espacio cercano al de los menores para poder actuar con rapidez si surge un problema. En otros países, dos acompañantes adultos se alojan con los menores y se turnan en la supervisión.\nPor el contrario, si la Conferencia Episcopal o las normas de un país consideran más adecuado, para la seguridad y protección de los menores, que los acompañantes adultos se alojen en el mismo espacio que los menores a su cargo, también pueden hacerlo conforme a dichas normas. Incluso en ese caso, deben adoptarse medidas de protección adecuadas, como designar a un menor representante que pueda contactar inmediatamente con el acompañante en caso de emergencia.\nPor ello, el alojamiento de los menores puede organizarse de diversas maneras según las normas de protección de menores de cada país y la situación de seguridad sobre el terreno, y es difícil establecer una política única que se aplique de manera uniforme en todos los casos.\nEl Comité Organizador Local de la JMJ Seúl presenta sus Directrices de protección de menores y, al mismo tiempo, respeta las directrices y normas de protección de menores de cada Conferencia Episcopal, que son co-COL. Sin embargo, la decisión sobre qué modalidad de alojamiento elegir según dichas normas, y la responsabilidad que de ella se derive, corresponden a cada grupo de peregrinos.",
      "fr": "Il n'y a pas de nombre minimum de personnes pour un Macrogroupe. Les critères pour constituer un Sous-groupe au sein d'un Macrogroupe sont le même forfait et les mêmes dates d'arrivée/de départ à Séoul. Ainsi, si une famille choisit le même forfait et séjourne à Séoul aux mêmes dates, elle peut former un Sous-groupe.\nSelon les Directives de protection des mineurs des JMJ de Séoul, le principe de base est que les adultes et les mineurs soient hébergés séparément. Cela doit toutefois être appliqué en tenant compte aussi des règles de protection des mineurs de la Conférence épiscopale et de chaque pays, ainsi que des exigences pratiques de sécurité.\nPar exemple, certains pays interdisent même aux accompagnateurs adultes de partager l'hébergement des mineurs. Dans ce cas, les accompagnateurs peuvent loger dans un espace proche de celui des mineurs afin de pouvoir réagir rapidement en cas de problème. Dans d'autres pays, deux accompagnateurs adultes logent avec les mineurs et assurent la surveillance à tour de rôle.\nÀ l'inverse, si la Conférence épiscopale ou les normes d'un pays jugent plus approprié, pour la sécurité et la protection des mineurs, que les accompagnateurs adultes logent dans le même espace que les mineurs dont ils ont la charge, cela est également possible conformément à ces normes. Même dans ce cas, des mesures de protection adaptées doivent être prévues, par exemple la désignation d'un mineur référent capable de contacter immédiatement l'accompagnateur en cas d'urgence.\nPar conséquent, l'hébergement des mineurs peut être organisé de diverses manières selon les règles de protection des mineurs de chaque pays et la situation de sécurité sur place, et il est difficile de fixer une politique unique applicable uniformément à tous les cas.\nLe Comité d'organisation local des JMJ de Séoul présente ses Directives de protection des mineurs tout en respectant les directives et normes de protection des mineurs de chaque Conférence épiscopale, qui sont co-COL. Toutefois, la décision quant au mode d'hébergement choisi selon ces normes, ainsi que la responsabilité qui en découle, incombent à chaque groupe de pèlerins."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q4",
    "no": "Q4",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희 교구(비카리아) 소속으로 등록된 대표자가 다른 나라에서 오는 경우(예: 해외 거주 본당 신자의 자녀가 부모와 동행하고자 하는 경우), 저희 조직 아래로 등록하는 것이 맞나요?",
      "en": "If a representative registered under our diocese (vicariate) is coming from another country (e.g. the child of a parishioner living abroad who wishes to accompany their parents), is it correct to register them under our organisation?",
      "es": "Si un representante inscrito en nuestra diócesis (vicaría) viene de otro país (por ejemplo, el hijo de un feligrés que vive en el extranjero y desea acompañar a sus padres), ¿es correcto inscribirlo en nuestra organización?",
      "fr": "Si un représentant inscrit dans notre diocèse (vicariat) vient d'un autre pays (par exemple l'enfant d'un paroissien vivant à l'étranger qui souhaite accompagner ses parents), est-il correct de l'inscrire dans notre organisation ?"
    },
    "a": {
      "ko": "해외에 거주하거나 다른 나라에서 출발하는 참가자라도, 귀 교구(비카리아) 그룹의 일원으로 함께 참가하고 그룹 리더의 인솔과 관리 아래 활동할 예정이라면 해당 그룹에 포함하여 등록하실 수 있습니다. 예를 들어, 해외에 거주하는 본당 신자의 자녀가 부모와 함께 귀 교구 그룹에 참가하는 경우에도 같은 그룹으로 등록할 수 있습니다.",
      "en": "Even participants who live abroad or depart from another country can be included and registered in your group if they will take part as members of your diocesan (vicariate) group and act under the guidance and supervision of the group leader. For example, the child of a parishioner living abroad who joins your diocesan group together with their parents can also be registered in the same group.",
      "es": "Incluso los participantes que viven en el extranjero o salen desde otro país pueden incluirse e inscribirse en su grupo si van a participar como miembros del grupo de su diócesis (vicaría) bajo la guía y supervisión del líder del grupo. Por ejemplo, el hijo de un feligrés que vive en el extranjero y participa con sus padres en el grupo de su diócesis también puede inscribirse en el mismo grupo.",
      "fr": "Même les participants qui vivent à l'étranger ou partent d'un autre pays peuvent être inclus et inscrits dans votre groupe s'ils participent en tant que membres du groupe de votre diocèse (vicariat) sous la conduite et la supervision du responsable du groupe. Par exemple, l'enfant d'un paroissien vivant à l'étranger qui rejoint avec ses parents le groupe de votre diocèse peut aussi être inscrit dans le même groupe."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q5",
    "no": "Q5",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "국제기구나 여러 국가·교구로 구성된 단체의 경우, 동일한 그룹 또는 대규모그룹(Macrogroup)안에 서로 다른 날짜·시간·항공편·교통수단으로 도착하거나 출발할 경우 등록과 패키지 선택은 어떻게 진행해야 하나요?",
      "en": "For international organisations or bodies made up of several countries or dioceses, how should registration and package selection be done when members of the same group or Macrogroup arrive or depart on different dates, at different times, on different flights or by different means of transport?",
      "es": "En el caso de organismos internacionales o entidades formadas por varios países o diócesis, ¿cómo deben hacerse la inscripción y la elección del paquete cuando los miembros de un mismo grupo o Macrogrupo llegan o salen en fechas, horas, vuelos o medios de transporte distintos?",
      "fr": "Pour les organismes internationaux ou les structures composées de plusieurs pays ou diocèses, comment procéder à l'inscription et au choix du forfait lorsque les membres d'un même groupe ou Macrogroupe arrivent ou partent à des dates, des heures, sur des vols ou par des moyens de transport différents ?"
    },
    "a": {
      "ko": "소속 국제기구 또는 교구의 이름으로 하나의 대규모그룹(Macrogroup)을 등록한 후, 동일한 패키지와 서울 체류 일정을 가진 참가자들끼리 하위그룹(Subgroup)을 구성하여 등록하시면 됩니다. 각 하위그룹은 최대 150명까지 등록할 수 있습니다.",
      "en": "Register one Macrogroup under the name of your international organisation or diocese, then form and register Subgroups of participants who share the same package and the same stay dates in Seoul. Each Subgroup can register up to 150 people.",
      "es": "Inscriban un Macrogrupo con el nombre de su organismo internacional o diócesis y, a continuación, formen e inscriban Subgrupos con los participantes que compartan el mismo paquete y las mismas fechas de estancia en Seúl. Cada Subgrupo puede inscribir hasta 150 personas.",
      "fr": "Inscrivez un Macrogroupe au nom de votre organisme international ou de votre diocèse, puis constituez et inscrivez des Sous-groupes réunissant les participants qui ont le même forfait et les mêmes dates de séjour à Séoul. Chaque Sous-groupe peut inscrire jusqu'à 150 personnes."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q6",
    "no": "Q6",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "사제, 부제, 수도자는 일반 순례자 그룹의 일원으로 등록하나요, 아니면 별도로 등록해야 하나요? 사제가 대규모그룹(Macrogroup)에 속한 경우에도 동일한 방식으로 등록하나요?",
      "en": "Do priests, deacons and religious register as members of a regular pilgrim group, or do they need to register separately? Is the same method used when a priest belongs to a Macrogroup?",
      "es": "¿Los sacerdotes, diáconos y religiosos se inscriben como miembros de un grupo de peregrinos ordinario o deben inscribirse por separado? ¿Se sigue el mismo procedimiento cuando un sacerdote pertenece a un Macrogrupo?",
      "fr": "Les prêtres, diacres et religieux s'inscrivent-ils comme membres d'un groupe de pèlerins ordinaire, ou doivent-ils s'inscrire séparément ? La même procédure s'applique-t-elle lorsqu'un prêtre fait partie d'un Macrogroupe ?"
    },
    "a": {
      "ko": "사제, 부제, 수도자 모두 일반 순례자 그룹의 참가자로 등록합니다. 대규모그룹(Macrogroup)의 경우에도 실제 순례자 등록은 하위그룹(Subgroup) 단위로 이루어지므로, 자신이 속한 하위그룹에 포함하여 등록합니다. 사제와 부제는 일반 순례자와 달리 신분 확인 및 성직자 관련 준비를 위해 개인 정보를 별도로 입력해야 하며, 그룹 대표가 정보를 취합하여 등록 시스템에 입력합니다.",
      "en": "Priests, deacons and religious all register as participants in a regular pilgrim group. In the case of a Macrogroup, the actual registration of pilgrims is done by Subgroup, so they register as part of the Subgroup they belong to. Unlike regular pilgrims, priests and deacons must have their personal information entered separately for identity verification and clergy-related preparations, and the group leader collects this information and enters it into the registration system.",
      "es": "Sacerdotes, diáconos y religiosos se inscriben como participantes de un grupo de peregrinos ordinario. En el caso de un Macrogrupo, la inscripción efectiva de los peregrinos se hace por Subgrupo, por lo que se inscriben dentro del Subgrupo al que pertenecen. A diferencia de los peregrinos ordinarios, los sacerdotes y diáconos deben introducir aparte sus datos personales para la verificación de identidad y los preparativos relativos al clero; el líder del grupo reúne esta información y la introduce en el sistema de inscripción.",
      "fr": "Prêtres, diacres et religieux s'inscrivent tous comme participants d'un groupe de pèlerins ordinaire. Dans un Macrogroupe, l'inscription effective des pèlerins se fait par Sous-groupe ; ils s'inscrivent donc dans le Sous-groupe auquel ils appartiennent. Contrairement aux pèlerins ordinaires, les prêtres et les diacres doivent saisir séparément leurs données personnelles pour la vérification de leur identité et les préparatifs propres au clergé ; le responsable du groupe recueille ces informations et les saisit dans le système d'inscription."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q7",
    "no": "Q7",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희는 국제 그룹의 코디네이터입니다. 하나의 대규모그룹(Macrogroup)을 만들고 국가별로 하위그룹(Subgroup)을 두는 것이 나을까요, 아니면 국가별로 각각 대규모그룹을 만들고 그 안에서 패키지별 하위그룹을 두는 것이 나을까요?",
      "en": "We are coordinators of an international group. Is it better to create one Macrogroup with Subgroups by country, or to create a separate Macrogroup for each country with Subgroups by package within it?",
      "es": "Somos coordinadores de un grupo internacional. ¿Es mejor crear un solo Macrogrupo con Subgrupos por país, o crear un Macrogrupo para cada país con Subgrupos por paquete dentro de él?",
      "fr": "Nous sommes coordinateurs d'un groupe international. Vaut-il mieux créer un seul Macrogroupe avec des Sous-groupes par pays, ou un Macrogroupe pour chaque pays avec des Sous-groupes par forfait ?"
    },
    "a": {
      "ko": "국제 그룹의 등록 구조는 그룹의 운영 방식과 국가별 담당자의 역할을 고려하여 선택하시는 것이 좋습니다. 국제 코디네이터가 전체 그룹을 통합 관리하고 국가별 담당자가 각 하위그룹을 관리하려는 경우에는, 하나의 매크로그룹 아래 국가별 하위그룹을 구성하는 방식을 고려할 수 있습니다. 반면, 국가별로 참가자 관리와 등록·납부를 독립적으로 진행하는 경우에는 국가별로 각각 대규모그룹을 구성하는 방식이 관리에 더 편리할 수 있습니다. 패키지별 하위그룹 구성 여부는 각 국가의 참가자 구성과 패키지 선택에 따라 검토해 주시기 바랍니다.",
      "en": "It is best to choose the registration structure of an international group by considering how the group operates and the role of each national coordinator. If the international coordinator manages the whole group and national coordinators manage each Subgroup, you may consider forming national Subgroups under one Macrogroup. On the other hand, if each country manages its participants and handles registration and payment independently, forming a separate Macrogroup for each country may be more convenient. Please consider whether to form Subgroups by package according to each country's participant composition and package choices.",
      "es": "Conviene elegir la estructura de inscripción de un grupo internacional teniendo en cuenta su forma de funcionar y el papel de los responsables de cada país. Si el coordinador internacional gestiona todo el grupo y los responsables nacionales gestionan cada Subgrupo, pueden considerar formar Subgrupos por país dentro de un único Macrogrupo. En cambio, si cada país gestiona a sus participantes y realiza la inscripción y el pago de forma independiente, puede resultar más práctico formar un Macrogrupo para cada país. En cuanto a formar Subgrupos por paquete, les pedimos que lo valoren según la composición de los participantes de cada país y los paquetes elegidos.",
      "fr": "Il est préférable de choisir la structure d'inscription d'un groupe international en tenant compte de son mode de fonctionnement et du rôle des responsables de chaque pays. Si le coordinateur international gère l'ensemble du groupe et que les responsables nationaux gèrent chaque Sous-groupe, vous pouvez envisager de constituer des Sous-groupes par pays au sein d'un seul Macrogroupe. En revanche, si chaque pays gère ses participants et effectue l'inscription et le paiement de manière indépendante, il peut être plus pratique de constituer un Macrogroupe par pays. Quant à la constitution de Sous-groupes par forfait, nous vous invitons à l'examiner selon la composition des participants de chaque pays et les forfaits choisis."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q8",
    "no": "Q8",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "단일그룹(Single Group)의 순례자 수가 늘어나면 자동으로 대규모그룹 (Macrogroup)으로 전환되나요?",
      "en": "If the number of pilgrims in a Single Group increases, is it automatically converted into a Macrogroup?",
      "es": "Si aumenta el número de peregrinos de un Grupo Único, ¿se convierte automáticamente en Macrogrupo?",
      "fr": "Si le nombre de pèlerins d'un Groupe simple augmente, est-il automatiquement converti en Macrogroupe ?"
    },
    "a": {
      "ko": "단일그룹(Single Group)의 순례자 수가 늘어나더라도 자동으로 대규모그룹(Macrogroup)으로 전환되지는 않습니다. 단일그룹은 최대 150명까지 등록할 수 있으므로, 참가 인원이 150명을 초과할 가능성이 있다면 처음부터 대규모그룹으로 등록해야 합니다. 그룹 유형은 등록을 시작할 때 선택하며, 등록을 시작한 이후에는 변경할 수 없습니다.",
      "en": "Even if the number of pilgrims in a Single Group increases, it is not automatically converted into a Macrogroup. A Single Group can register up to 150 people, so if the number of participants may exceed 150, you should register as a Macrogroup from the start. The group type is chosen when registration begins and cannot be changed once registration has started.",
      "es": "Aunque aumente el número de peregrinos de un Grupo Único, no se convierte automáticamente en Macrogrupo. Un Grupo Único puede inscribir hasta 150 personas, por lo que, si el número de participantes puede superar los 150, deben inscribirse como Macrogrupo desde el principio. El tipo de grupo se elige al iniciar la inscripción y no puede cambiarse una vez iniciada.",
      "fr": "Même si le nombre de pèlerins d'un Groupe simple augmente, il n'est pas automatiquement converti en Macrogroupe. Un Groupe simple peut inscrire jusqu'à 150 personnes ; si le nombre de participants risque de dépasser 150, il faut donc s'inscrire comme Macrogroupe dès le départ. Le type de groupe est choisi au début de l'inscription et ne peut plus être modifié une fois l'inscription commencée."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q9",
    "no": "Q9",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "단일그룹(Single Group)과 대규모그룹(Macrogroup)의 차이가 단순히 인원 수만이 아니라고 하셨는데, 대규모그룹이 되기 위해 충족해야 하는 조건(특성)과 대규모그룹으로 등록했을 때의 장점은 무엇입니까?",
      "en": "You said the difference between a Single Group and a Macrogroup is not simply the number of people. What conditions (characteristics) must be met to become a Macrogroup, and what are the advantages of registering as a Macrogroup?",
      "es": "Dijeron que la diferencia entre un Grupo Único y un Macrogrupo no es solo el número de personas. ¿Qué condiciones (características) hay que cumplir para ser Macrogrupo y qué ventajas tiene inscribirse como Macrogrupo?",
      "fr": "Vous avez dit que la différence entre un Groupe simple et un Macrogroupe ne tient pas seulement au nombre de personnes. Quelles conditions (caractéristiques) faut-il remplir pour être un Macrogroupe, et quels sont les avantages de s'inscrire comme Macrogroupe ?"
    },
    "a": {
      "ko": "단일그룹(Single Group)과 대규모그룹(Macrogroup)의 차이는 참가 인원뿐 아니라, 참가 일정과 패키지 구성 및 등록 관리 방식에 있습니다. 단일그룹은 최대 150명까지 별도의 하위그룹(Subgroup) 없이 하나의 그룹으로 등록하는 방식으로, 모든 참가자의 참가 일정과 패키지가 동일한 경우에 적합합니다. 대규모그룹은 최대 5,000명까지 등록할 수 있으며, 참가 일정이나 패키지가 서로 다른 참가자들을 하위그룹으로 나누어 관리할 수 있습니다. 각 하위그룹은 동일한 패키지와 도착일·출발일을 가진 참가자들로 구성합니다. 대규모그룹의 장점은 하나의 조직 아래 여러 하위그룹을 두면서도, 하위그룹별로 등록·정보 수정·결제를 독립적으로 진행할 수 있다는 점입니다. 따라서 그룹 규모뿐 아니라 참가 일정과 패키지의 다양성, 하위그룹별 관리 필요성을 고려하여 등록 방식을 선택하시면 됩니다",
      "en": "The difference between a Single Group and a Macrogroup lies not only in the number of participants but also in the participation schedule, package composition and the way registration is managed. A Single Group registers up to 150 people as one group without separate Subgroups and is suitable when all participants have the same schedule and package. A Macrogroup can register up to 5,000 people and can manage participants with different schedules or packages by dividing them into Subgroups. Each Subgroup is made up of participants with the same package and the same arrival and departure dates. The advantage of a Macrogroup is that it can have several Subgroups under one organisation while each Subgroup handles registration, information changes and payment independently. Therefore, please choose the registration method by considering not only the size of the group but also the variety of schedules and packages and the need to manage each Subgroup separately.",
      "es": "La diferencia entre un Grupo Único y un Macrogrupo no está solo en el número de participantes, sino también en el calendario de participación, la composición de los paquetes y la forma de gestionar la inscripción. El Grupo Único inscribe hasta 150 personas como un solo grupo, sin Subgrupos, y es adecuado cuando todos los participantes tienen el mismo calendario y paquete. El Macrogrupo puede inscribir hasta 5.000 personas y permite gestionar a participantes con calendarios o paquetes distintos dividiéndolos en Subgrupos. Cada Subgrupo está formado por participantes con el mismo paquete y las mismas fechas de llegada y salida. La ventaja del Macrogrupo es que puede tener varios Subgrupos bajo una misma organización y, al mismo tiempo, cada Subgrupo puede gestionar de forma independiente la inscripción, los cambios de datos y el pago. Por tanto, elijan la modalidad de inscripción teniendo en cuenta no solo el tamaño del grupo, sino también la diversidad de calendarios y paquetes y la necesidad de gestionar cada Subgrupo por separado.",
      "fr": "La différence entre un Groupe simple et un Macrogroupe ne réside pas seulement dans le nombre de participants, mais aussi dans le calendrier de participation, la composition des forfaits et le mode de gestion de l'inscription. Le Groupe simple inscrit jusqu'à 150 personnes comme un seul groupe, sans Sous-groupes, et convient lorsque tous les participants ont le même calendrier et le même forfait. Le Macrogroupe peut inscrire jusqu'à 5 000 personnes et permet de gérer des participants aux calendriers ou forfaits différents en les répartissant en Sous-groupes. Chaque Sous-groupe réunit des participants ayant le même forfait et les mêmes dates d'arrivée et de départ. L'avantage du Macrogroupe est de pouvoir réunir plusieurs Sous-groupes sous une même organisation tout en permettant à chacun de gérer de manière indépendante l'inscription, la modification des données et le paiement. Choisissez donc le mode d'inscription en tenant compte non seulement de la taille du groupe, mais aussi de la diversité des calendriers et des forfaits et du besoin de gérer chaque Sous-groupe séparément."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q10",
    "no": "Q10",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "한국까지는 개별적으로 이동하지만 동일한 그룹에 속한 사람들은 별도의 하위그룹(Subgroup)을 만들어야 하나요?",
      "en": "Do people who belong to the same group but travel to Korea individually need to form a separate Subgroup?",
      "es": "Las personas que pertenecen a un mismo grupo pero viajan a Corea por separado, ¿deben formar un Subgrupo aparte?",
      "fr": "Les personnes qui appartiennent au même groupe mais voyagent séparément jusqu'en Corée doivent-elles former un Sous-groupe distinct ?"
    },
    "a": {
      "ko": "한국까지 개별적으로 이동하더라도, 대회 기간 중 동일한 일정에, 동일한 패키지를 이용하여, 동일한 그룹 리더의 인솔과 관리 아래 활동할 예정이라면 별도의 하위그룹을 구성하지 않고 같은 그룹으로 등록하실 수 있습니다. 다만, 참가자별로 선택하는 패키지나 참가 일정이 다른 경우에는 하위그룹 구성이 필요할 수 있으므로, 등록시스템의 세부 기준을 확인해 주시기 바랍니다.",
      "en": "Even if they travel to Korea individually, if they will follow the same schedule during the event, use the same package and act under the guidance and supervision of the same group leader, they can be registered in the same group without forming a separate Subgroup. However, if participants choose different packages or have different participation schedules, a Subgroup may be needed, so please check the detailed criteria in the registration system.",
      "es": "Aunque viajen a Corea por separado, si durante el evento van a seguir el mismo calendario, utilizar el mismo paquete y actuar bajo la guía y supervisión del mismo líder de grupo, pueden inscribirse en el mismo grupo sin formar un Subgrupo aparte. No obstante, si los participantes eligen paquetes o calendarios distintos, puede ser necesario formar Subgrupos, por lo que les pedimos que consulten los criterios detallados del sistema de inscripción.",
      "fr": "Même si elles voyagent séparément jusqu'en Corée, si elles suivent le même programme pendant l'événement, utilisent le même forfait et agissent sous la conduite et la supervision du même responsable de groupe, elles peuvent être inscrites dans le même groupe sans former de Sous-groupe distinct. Toutefois, si les participants choisissent des forfaits ou des calendriers différents, la constitution de Sous-groupes peut être nécessaire ; nous vous invitons donc à consulter les critères détaillés du système d'inscription."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q11",
    "no": "Q11",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희가 150명 미만의 단일그룹(Single Group)인데 서로 다른 두 가지 교통수단으로 도착할 경우, 같은 그룹으로 등록하고 두 곳에서 각각 픽업 받을 수 있나요?",
      "en": "We are a Single Group of fewer than 150 people arriving by two different means of transport. Can we register as the same group and be picked up at two different places?",
      "es": "Somos un Grupo Único de menos de 150 personas que llegará en dos medios de transporte distintos. ¿Podemos inscribirnos como un mismo grupo y que nos recojan en dos lugares distintos?",
      "fr": "Nous sommes un Groupe simple de moins de 150 personnes qui arrivera par deux moyens de transport différents. Pouvons-nous nous inscrire comme un même groupe et être pris en charge à deux endroits différents ?"
    },
    "a": {
      "ko": "150명 미만의 단일그룹(Single Group)이 서로 다른 교통수단으로 도착하더라도, 동일한 일정과 패키지로 같은 그룹 리더의 인솔과 관리 아래 참가할 예정이라면 같은 그룹으로 등록하실 수 있습니다.\n다만, 같은 그룹으로 등록하는 것과 두 곳에서 각각 픽업을 제공받는 것은 별개의 사항입니다. 현재 조직위원회에서는 공항 도착 시 별도의 픽업 서비스를 제공할 계획이 없으므로, 각 도착 장소에서 체크인 장소 및 숙소까지는 직접 이동해 주시기 바랍니다. 숙소에서 주요 행사장과 교리교육 장소 등으로 이동하실 때는 패키지에 포함된 교통카드를 이용해 대중교통 수단을 이용하실 수 있습니다.",
      "en": "Even if a Single Group of fewer than 150 people arrives by different means of transport, it can be registered as the same group if it will participate with the same schedule and package under the guidance and supervision of the same group leader.\nHowever, registering as the same group and being picked up at two different places are separate matters. The Local Organising Committee currently has no plans to provide a pick-up service on arrival at the airport, so please travel on your own from each arrival point to the check-in location and your accommodation. When travelling from your accommodation to the main event venues and catechesis locations, you can use public transport with the transport card included in your package.",
      "es": "Aunque un Grupo Único de menos de 150 personas llegue en medios de transporte distintos, puede inscribirse como un mismo grupo si va a participar con el mismo calendario y paquete bajo la guía y supervisión del mismo líder.\nSin embargo, inscribirse como un mismo grupo y ser recogidos en dos lugares distintos son cuestiones diferentes. Actualmente el Comité Organizador Local no tiene previsto ofrecer un servicio de recogida a la llegada al aeropuerto, por lo que les pedimos que se desplacen por su cuenta desde cada punto de llegada hasta el lugar de acreditación y el alojamiento. Para desplazarse desde el alojamiento hasta los principales lugares de los actos y de las catequesis, pueden usar el transporte público con la tarjeta de transporte incluida en el paquete.",
      "fr": "Même si un Groupe simple de moins de 150 personnes arrive par des moyens de transport différents, il peut être inscrit comme un même groupe s'il participe avec le même programme et le même forfait sous la conduite et la supervision du même responsable.\nCependant, s'inscrire comme un même groupe et être pris en charge à deux endroits différents sont deux questions distinctes. Le Comité d'organisation local ne prévoit pas actuellement de service d'accueil à l'arrivée à l'aéroport ; nous vous prions donc de vous rendre par vos propres moyens de chaque point d'arrivée jusqu'au lieu d'accréditation et à votre hébergement. Pour vous rendre de votre hébergement aux principaux lieux des célébrations et des catéchèses, vous pourrez utiliser les transports en commun avec la carte de transport incluse dans votre forfait."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q12",
    "no": "Q12",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구당 구성할 수 있는 대규모그룹(Macrogroup)의 수에 제한이 있나요?",
      "en": "Is there a limit on the number of Macrogroups that can be formed per diocese?",
      "es": "¿Hay un límite en el número de Macrogrupos que se pueden formar por diócesis?",
      "fr": "Le nombre de Macrogroupes pouvant être constitués par diocèse est-il limité ?"
    },
    "a": {
      "ko": "대규모그룹(Macrogroup) 수의 제한은 없으며, 그룹 내 인원만 5,000명 이하로 제한합니다.",
      "en": "There is no limit on the number of Macrogroups; only the number of people within a group is limited to 5,000 or fewer.",
      "es": "No hay límite en el número de Macrogrupos; solo se limita a 5.000 personas como máximo el número de miembros de cada grupo.",
      "fr": "Le nombre de Macrogroupes n'est pas limité ; seul le nombre de personnes au sein d'un groupe est limité à 5 000 au maximum."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe"
    },
    "subNo": "a"
  },
  {
    "id": "Q13",
    "no": "Q13",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록 과정에서 주교회의는 어떤 역할을 하나요? 모든 그룹이 주교회의 청소년부의 승인을 받아야 하나요?",
      "en": "What role does the Bishops' Conference play in the registration process? Must every group be approved by the youth department of the Bishops' Conference?",
      "es": "¿Qué papel desempeña la Conferencia Episcopal en el proceso de inscripción? ¿Todos los grupos deben obtener la aprobación de la pastoral juvenil de la Conferencia Episcopal?",
      "fr": "Quel rôle joue la Conférence épiscopale dans le processus d'inscription ? Tous les groupes doivent-ils obtenir l'approbation du service de la jeunesse de la Conférence épiscopale ?"
    },
    "a": {
      "ko": "각 주교회의는 등록 과정에서의 역할을 자율적으로 결정할 수 있습니다. 조직위는 한 국가의 모든 그룹이 등록하기 위해 반드시 해당 주교회의 청소년 담당 부서의 승인을 받도록 요구하지 않습니다.",
      "en": "Each Bishops' Conference can decide its own role in the registration process. The LOC does not require all groups from a country to obtain approval from the youth department of their Bishops' Conference in order to register.",
      "es": "Cada Conferencia Episcopal puede decidir libremente su papel en el proceso de inscripción. El COL no exige que todos los grupos de un país obtengan la aprobación del departamento de juventud de su Conferencia Episcopal para inscribirse.",
      "fr": "Chaque Conférence épiscopale peut décider librement de son rôle dans le processus d'inscription. Le COL n'exige pas que tous les groupes d'un pays obtiennent l'approbation du service de la jeunesse de leur Conférence épiscopale pour s'inscrire."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q14",
    "no": "Q14",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희 그룹은 교구대회(Days in the Dioceses)에 참가하지만, 자체 프로그램을 준비하고(숙소도 자체적으로 마련) LOC의 물류 지원이 필요 없습니다. 등록 포털에서 교구대회 참가 여부를 '예'로 체크해야 하나요, '아니오'로 체크해야 하나요?",
      "en": "Our group will take part in the Days in the Dioceses but will prepare its own programme (and arrange its own accommodation) and does not need logistical support from the LOC. Should we tick 'Yes' or 'No' for participation in the Days in the Dioceses on the registration portal?",
      "es": "Nuestro grupo participará en los Días en las Diócesis, pero preparará su propio programa (y su propio alojamiento) y no necesita apoyo logístico del COL. En el portal de inscripción, ¿debemos marcar 'Sí' o 'No' en la participación en los Días en las Diócesis?",
      "fr": "Notre groupe participera aux Journées dans les diocèses, mais préparera son propre programme (et son propre hébergement) et n'a pas besoin du soutien logistique du COL. Sur le portail d'inscription, devons-nous cocher 'Oui' ou 'Non' pour la participation aux Journées dans les diocèses ?"
    },
    "a": {
      "ko": "교구대회 준비 및 운영상의 참조를 위해 참가여부를 '예'로 체크해 주시기 바랍니다.",
      "en": "Please tick 'Yes' for participation, for reference in preparing and running the Days in the Dioceses.",
      "es": "Les pedimos que marquen 'Sí' en la participación, como referencia para la preparación y organización de los Días en las Diócesis.",
      "fr": "Merci de cocher 'Oui' pour la participation, à titre de référence pour la préparation et l'organisation des Journées dans les diocèses."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q15",
    "no": "Q15",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록이 시작되는 시점부터 각 국가 담당자가 등록 관련 문의를 해결할 수 있도록 직접적인 지원이 제공되나요? 또한 단계별 안내가 담긴 전체 영상을 제공해주시나요?",
      "en": "From the start of registration, will direct support be provided so that national coordinators can resolve registration enquiries? Will a complete video with step-by-step guidance also be provided?",
      "es": "Desde el inicio de la inscripción, ¿se ofrecerá apoyo directo para que los responsables de cada país puedan resolver las consultas sobre la inscripción? ¿Se ofrecerá también un vídeo completo con instrucciones paso a paso?",
      "fr": "Dès le début des inscriptions, un soutien direct sera-t-il proposé aux responsables de chaque pays pour répondre aux questions relatives à l'inscription ? Une vidéo complète avec des instructions pas à pas sera-t-elle également fournie ?"
    },
    "a": {
      "ko": "각국 담당자들이 등록 관련 문의에 원활하게 대응할 수 있도록 지원 방안과 안내 자료를 준비하고 있습니다. 담당자 대상 직접 지원 방식과 단계별 등록 절차를 설명하는 전체 영상의 제공 여부는 현재 내부적으로 검토·논의 중이며, 구체적인 내용과 제공 일정은 확정되는 대로 안내드리겠습니다.",
      "en": "We are preparing support measures and guidance materials so that national coordinators can respond smoothly to registration enquiries. Direct support for coordinators and whether to provide a complete video explaining the registration procedure step by step are currently being reviewed and discussed internally, and we will announce the details and schedule as soon as they are confirmed.",
      "es": "Estamos preparando medidas de apoyo y materiales informativos para que los responsables de cada país puedan atender sin problemas las consultas sobre la inscripción. La modalidad de apoyo directo a los responsables y la posibilidad de ofrecer un vídeo completo que explique paso a paso el procedimiento de inscripción se están estudiando internamente, y comunicaremos los detalles y el calendario en cuanto estén confirmados.",
      "fr": "Nous préparons des mesures de soutien et des documents d'information pour que les responsables de chaque pays puissent répondre sans difficulté aux questions sur l'inscription. Les modalités d'un soutien direct aux responsables et la possibilité de fournir une vidéo complète expliquant pas à pas la procédure d'inscription sont actuellement à l'étude en interne ; nous vous communiquerons les détails et le calendrier dès qu'ils seront confirmés."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q16",
    "no": "Q16",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹 등록은 전액 결제가 완료된 후에만 공식 확정(구역, 숙소 등 배정 포함)되나요, 아니면 등록 포털에 기본 정보를 처음 제출한 시점에 이미 확정되나요?",
      "en": "Is a group registration officially confirmed (including allocation of zones, accommodation, etc.) only after full payment, or is it already confirmed when basic information is first submitted on the registration portal?",
      "es": "¿La inscripción de un grupo queda confirmada oficialmente (incluida la asignación de zonas, alojamiento, etc.) solo después del pago completo, o ya queda confirmada al enviar por primera vez los datos básicos en el portal de inscripción?",
      "fr": "L'inscription d'un groupe est-elle officiellement confirmée (y compris l'attribution des zones, de l'hébergement, etc.) seulement après le paiement intégral, ou dès la première soumission des informations de base sur le portail d'inscription ?"
    },
    "a": {
      "ko": "그룹 등록은 참가 분담금의 전액 결제가 완료된 후에만 공식 확정됩니다.",
      "en": "A group registration is officially confirmed only after the participation contribution has been paid in full.",
      "es": "La inscripción de un grupo solo queda confirmada oficialmente después de haber pagado íntegramente la contribución de participación.",
      "fr": "L'inscription d'un groupe n'est officiellement confirmée qu'après le paiement intégral de la contribution de participation."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q17",
    "no": "Q17",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "사제 등록 및 인증을 위해 필요한 서류는 무엇인가요? Celebret, 사목허가증 및 Good Standing 증명서 등이 필요한지 궁금합니다. 또한 수도회 소속 사제의 경우 관구장의 증명서로 충분한지, 아니면 교구장 주교의 증명서가 필요한지도 안내 부탁드립니다.",
      "en": "What documents are required for the registration and verification of priests? Are a Celebret, a faculty to minister and a certificate of good standing required? Also, for priests belonging to a religious institute, is a certificate from the provincial superior sufficient, or is a certificate from the diocesan bishop required?",
      "es": "¿Qué documentos se necesitan para la inscripción y verificación de los sacerdotes? ¿Se necesitan el Celebret, la licencia ministerial y el certificado de buena conducta (Good Standing)? Además, en el caso de sacerdotes religiosos, ¿basta un certificado del provincial o se necesita uno del obispo diocesano?",
      "fr": "Quels documents sont nécessaires pour l'inscription et la vérification des prêtres ? Faut-il le Celebret, l'autorisation d'exercer le ministère et le certificat de bonne conduite (Good Standing) ? Par ailleurs, pour les prêtres religieux, un certificat du provincial suffit-il, ou faut-il un certificat de l'évêque diocésain ?"
    },
    "a": {
      "ko": "사제는 소속 그룹의 일원으로 등록하며, 사제 신분 확인을 위해서는 신분증 사진, 소속 교구 직권자가 발급한 사제 신분증명서, 미성년자 및 취약 성인 보호 확인서를 제출해야 합니다. 수도회 소속 사제의 경우에는 소속 관구장의 증명서를 제출하시면 됩니다.",
      "en": "Priests register as members of their group. For verification of priestly status, they must submit a photo of their ID, a certificate of priestly status issued by the competent authority of their diocese, and a confirmation of the protection of minors and vulnerable adults. Priests belonging to a religious institute may submit a certificate from their provincial superior.",
      "es": "Los sacerdotes se inscriben como miembros de su grupo. Para verificar su condición sacerdotal deben presentar una foto de su documento de identidad, un certificado de condición sacerdotal expedido por el ordinario de su diócesis y una declaración sobre la protección de menores y adultos vulnerables. Los sacerdotes religiosos pueden presentar un certificado de su superior provincial.",
      "fr": "Les prêtres s'inscrivent comme membres de leur groupe. Pour la vérification de leur état sacerdotal, ils doivent fournir une photo de leur pièce d'identité, une attestation d'état sacerdotal délivrée par l'ordinaire de leur diocèse et une attestation relative à la protection des mineurs et des personnes vulnérables. Les prêtres religieux peuvent fournir un certificat de leur supérieur provincial."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q18",
    "no": "Q18",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록은 언제 시작되나요? 대규모그룹(Macrogroup)의 순례자 등록을 순차적으로 나눠서 할 수 있나요 ? 아니면 한번에 완료해야 하나요 ?",
      "en": "When does registration start? Can the registration of pilgrims in a Macrogroup be done in stages, or must it be completed all at once?",
      "es": "¿Cuándo comienza la inscripción? ¿Se puede inscribir a los peregrinos de un Macrogrupo por etapas, o hay que completarla de una sola vez?",
      "fr": "Quand l'inscription commence-t-elle ? Peut-on inscrire les pèlerins d'un Macrogroupe par étapes, ou faut-il tout faire en une seule fois ?"
    },
    "a": {
      "ko": "온라인 등록은 10월 23일에 시작할 예정이며, 대규모그룹(Macrogroup)의 전체 등록을 한 번에 진행하실 필요는 없습니다. 등록시스템의 '임시 저장(Save as draft)' 기능을 이용하여 입력한 내용을 저장한 후, 추후 추가 정보를 입력하거나 기존 내용을 수정하실 수 있습니다. 필요한 등록 정보를 모두 입력하고 확인한 뒤 결제를 진행해 주시기 바랍니다. 또한 대규모그룹 내에 하위그룹(Subgroup)을 구성하여, 준비가 완료된 하위그룹부터 등록하고 나머지 그룹은 준비되는 대로 순차적으로 등록하실 수 있습니다.",
      "en": "Online registration is scheduled to open on 23 October, and you do not need to complete the entire registration of a Macrogroup at once. You can use the 'Save as draft' function in the registration system to save what you have entered and then add information or edit it later. Please proceed with payment after entering and checking all the required registration information. You can also form Subgroups within the Macrogroup, register the Subgroups that are ready first, and register the remaining groups one by one as they become ready.",
      "es": "Está previsto que la inscripción en línea comience el 23 de octubre, y no es necesario completar de una sola vez toda la inscripción de un Macrogrupo. Con la función 'Guardar borrador' (Save as draft) del sistema de inscripción pueden guardar lo introducido y añadir o modificar información más adelante. Les pedimos que procedan al pago después de introducir y comprobar todos los datos de inscripción necesarios. También pueden formar Subgrupos dentro del Macrogrupo, inscribir primero los Subgrupos que estén listos y el resto a medida que estén preparados.",
      "fr": "L'inscription en ligne doit ouvrir le 23 octobre, et il n'est pas nécessaire de finaliser en une seule fois l'inscription complète d'un Macrogroupe. Grâce à la fonction 'Enregistrer comme brouillon' (Save as draft) du système d'inscription, vous pouvez sauvegarder ce que vous avez saisi, puis ajouter ou modifier des informations plus tard. Merci de procéder au paiement après avoir saisi et vérifié toutes les informations d'inscription nécessaires. Vous pouvez aussi constituer des Sous-groupes au sein du Macrogroupe, inscrire d'abord ceux qui sont prêts, puis les autres au fur et à mesure."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q19",
    "no": "Q19",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자의 연령 기준과 참가 인원 제한은 무엇이며, 30세 이상 청년과 40~50대 이상 성인 또는 고령 동반자는 어떤 자격으로 등록해야 하나요?",
      "en": "What are the age criteria and participation limits for pilgrims, and in what capacity should young people over 30 and adults in their 40s and 50s or older companions register?",
      "es": "¿Cuáles son los criterios de edad y los límites de participación para los peregrinos, y en qué calidad deben inscribirse los jóvenes mayores de 30 años y los adultos de 40 a 50 años o los acompañantes de edad avanzada?",
      "fr": "Quels sont les critères d'âge et les limites de participation pour les pèlerins, et à quel titre doivent s'inscrire les jeunes de plus de 30 ans et les adultes de 40 à 50 ans ou les accompagnateurs âgés ?"
    },
    "a": {
      "ko": "WYD는 주로 14세부터 30세까지의 젊은이들을 중심으로 마련된 행사이지만, 참여를 원하는 모든 이들에게 열려 있으며 순례자의 참가 연령과 인원에 별도의 제한은 없습니다. 따라서 30세 이상 참가자와 40~50대 성인, 고령 동반자도 별도의 자격 구분 없이 순례자 그룹의 일원으로 등록할 수 있습니다.",
      "en": "WYD is an event designed mainly for young people aged 14 to 30, but it is open to everyone who wishes to take part, and there are no separate limits on the age or number of pilgrims. Therefore, participants over 30, adults in their 40s and 50s, and older companions can all register as members of a pilgrim group without any separate category.",
      "es": "La JMJ es un evento pensado principalmente para jóvenes de 14 a 30 años, pero está abierta a todos los que deseen participar, y no hay límites específicos de edad ni de número de peregrinos. Por tanto, los participantes mayores de 30 años, los adultos de 40 a 50 años y los acompañantes de edad avanzada pueden inscribirse como miembros de un grupo de peregrinos sin ninguna categoría especial.",
      "fr": "Les JMJ s'adressent principalement aux jeunes de 14 à 30 ans, mais elles sont ouvertes à tous ceux qui souhaitent y participer, et il n'y a pas de limite particulière d'âge ou de nombre de pèlerins. Les participants de plus de 30 ans, les adultes de 40 à 50 ans et les accompagnateurs âgés peuvent donc s'inscrire comme membres d'un groupe de pèlerins sans catégorie particulière."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q20",
    "no": "Q20",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록 과정에서 참가자를 추가·삭제하거나 입력 정보를 수정할 수 있나요?",
      "en": "Can participants be added or removed, or entered information be edited, during the registration process?",
      "es": "Durante el proceso de inscripción, ¿se pueden añadir o eliminar participantes o modificar los datos introducidos?",
      "fr": "Pendant le processus d'inscription, peut-on ajouter ou retirer des participants ou modifier les informations saisies ?"
    },
    "a": {
      "ko": "가능합니다. 결제 완료 전에는 그룹 리더가 등록시스템에서 전체 참가 인원을 늘리거나 줄일 수 있으며, 사제·부제, 장애가 있는 순례자 및 비자 신청자의 입력 정보도 수정할 수 있습니다. 결제 완료 후에는 조직위원회에 연락하여 정보 수정을 요청해 주시기 바랍니다. 다만, 참가 인원이 감소하더라도 해당 인원에 대한 참가 분담금은 환불되지 않으므로 유의해 주시기 바랍니다.",
      "en": "Yes. Before payment is completed, the group leader can increase or decrease the total number of participants in the registration system and can also edit the information entered for priests and deacons, pilgrims with disabilities and visa applicants. After payment is completed, please contact the Local Organising Committee to request changes. Please note, however, that even if the number of participants decreases, the participation contribution for those people will not be refunded.",
      "es": "Sí. Antes de completar el pago, el líder del grupo puede aumentar o reducir el número total de participantes en el sistema de inscripción y también modificar los datos introducidos de sacerdotes y diáconos, peregrinos con discapacidad y solicitantes de visado. Una vez completado el pago, pónganse en contacto con el Comité Organizador Local para solicitar los cambios. Tengan en cuenta, sin embargo, que aunque disminuya el número de participantes, no se reembolsará la contribución de participación correspondiente a esas personas.",
      "fr": "Oui. Avant la finalisation du paiement, le responsable du groupe peut augmenter ou réduire le nombre total de participants dans le système d'inscription, et modifier les informations saisies pour les prêtres et diacres, les pèlerins en situation de handicap et les demandeurs de visa. Après le paiement, veuillez contacter le Comité d'organisation local pour demander les modifications. Notez toutefois que, même si le nombre de participants diminue, la contribution de participation correspondante ne sera pas remboursée."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q21",
    "no": "Q21",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "참가 취소 시 해당 자리를 대기자나 다른 순례자에게 양도할 수 있으며, 변경 가능한 시점과 범위는 어떻게 되나요?",
      "en": "If someone cancels, can their place be transferred to someone on a waiting list or to another pilgrim, and when and to what extent can changes be made?",
      "es": "Si alguien cancela, ¿se puede ceder su plaza a una persona en lista de espera o a otro peregrino? ¿Hasta cuándo y en qué medida se pueden hacer cambios?",
      "fr": "En cas d'annulation, la place peut-elle être cédée à une personne sur liste d'attente ou à un autre pèlerin ? Jusqu'à quand et dans quelle mesure peut-on faire des changements ?"
    },
    "a": {
      "ko": "그룹 대표와 부대표를 제외한 순례자는 등록 시점이나 결제 여부와 관계없이 다른 참가자로 변경할 수 있습니다. 따라서 참가를 취소하는 순례자를 대기자나 다른 순례자로 대체하실 수 있습니다. 다만, 결제 완료 후 참가자를 대체하지 않아 그룹의 전체 참가 인원이 감소하는 경우에는, 감소한 인원에 대한 결제금액은 환불되지 않으므로 이 점을 유의해 주시기 바랍니다.",
      "en": "Pilgrims other than the group leader and deputy leader can be replaced by another participant regardless of when they registered or whether payment has been made. Therefore, you can replace a pilgrim who cancels with someone on a waiting list or another pilgrim. Please note, however, that if the total number of participants in the group decreases after payment because a participant is not replaced, the amount paid for the reduced number will not be refunded.",
      "es": "Los peregrinos, salvo el líder y el sublíder del grupo, pueden ser sustituidos por otro participante independientemente del momento de la inscripción o de si se ha realizado el pago. Por tanto, pueden sustituir a un peregrino que cancele por una persona en lista de espera o por otro peregrino. Tengan en cuenta, no obstante, que si después del pago el número total de participantes del grupo disminuye porque no se sustituye a un participante, no se reembolsará el importe correspondiente a las plazas reducidas.",
      "fr": "Les pèlerins, à l'exception du responsable et du responsable adjoint du groupe, peuvent être remplacés par un autre participant, quel que soit le moment de l'inscription ou du paiement. Vous pouvez donc remplacer un pèlerin qui annule par une personne sur liste d'attente ou par un autre pèlerin. Notez toutefois que si, après le paiement, le nombre total de participants du groupe diminue faute de remplacement, le montant correspondant aux places en moins ne sera pas remboursé."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q22",
    "no": "Q22",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "리더가 순례자의 정보를 잘못 입력했을 경우, 순례자 본인이 직접 수정할 수 있나요?",
      "en": "If a leader enters a pilgrim's information incorrectly, can the pilgrim correct it themselves?",
      "es": "Si el líder introduce mal los datos de un peregrino, ¿puede el propio peregrino corregirlos?",
      "fr": "Si le responsable saisit mal les informations d'un pèlerin, le pèlerin peut-il les corriger lui-même ?"
    },
    "a": {
      "ko": "순례자 본인이 등록시스템에서 자신의 정보를 직접 수정할 수는 없습니다. 개별 참가자 정보는 그룹의 대표와 부대표, 사제·부제, 장애가 있는 순례자 및 비자 발급 지원이 필요한 참가자에 한해 입력이 필요합니다. 그룹 리더가 해당 정보를 잘못 입력한 경우, 결제 완료 전에는 그룹 리더가 직접 수정할 수 있습니다. 결제 완료 후, 수정이 필요한 경우에는 조직위원회(inquiries@wydseoul.org)로 요청해 주시기 바랍니다.",
      "en": "Pilgrims cannot edit their own information directly in the registration system. Individual participant information needs to be entered only for the group leader and deputy leader, priests and deacons, pilgrims with disabilities and participants who need visa support. If the group leader enters such information incorrectly, the group leader can correct it directly before payment is completed. If changes are needed after payment is completed, please send a request to the Local Organising Committee (inquiries@wydseoul.org).",
      "es": "Los peregrinos no pueden modificar directamente sus propios datos en el sistema de inscripción. Solo es necesario introducir datos individuales del líder y el sublíder del grupo, de los sacerdotes y diáconos, de los peregrinos con discapacidad y de los participantes que necesiten apoyo para el visado. Si el líder del grupo introduce mal esos datos, puede corregirlos él mismo antes de completar el pago. Si se necesitan cambios después del pago, envíen la solicitud al Comité Organizador Local (inquiries@wydseoul.org).",
      "fr": "Les pèlerins ne peuvent pas modifier eux-mêmes leurs informations dans le système d'inscription. Les informations individuelles ne doivent être saisies que pour le responsable et le responsable adjoint du groupe, les prêtres et diacres, les pèlerins en situation de handicap et les participants ayant besoin d'un soutien pour le visa. Si le responsable du groupe a mal saisi ces informations, il peut les corriger lui-même avant le paiement. Si des modifications sont nécessaires après le paiement, veuillez en faire la demande au Comité d'organisation local (inquiries@wydseoul.org)."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire"
    },
    "subNo": "b"
  },
  {
    "id": "Q23",
    "no": "Q23",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "부득이한 사정으로 WYD에 참석하지 못하게 될 경우, 어느 단계에서든 환불이 가능한가요, 아니면 모든 결제 단계가 완료되면 전혀 환불이 안 되나요?(ex.전쟁,자연재해 등)",
      "en": "If we are unable to attend WYD for unavoidable reasons, is a refund possible at any stage, or is there no refund at all once all payment stages are completed? (e.g. war, natural disasters)",
      "es": "Si por causas de fuerza mayor no podemos asistir a la JMJ, ¿es posible un reembolso en cualquier fase, o no hay reembolso alguno una vez completadas todas las fases de pago? (p. ej., guerra, desastres naturales)",
      "fr": "Si nous ne pouvons pas participer aux JMJ pour une raison de force majeure, un remboursement est-il possible à n'importe quelle étape, ou aucun remboursement n'est-il possible une fois tous les paiements effectués ? (ex. guerre, catastrophe naturelle)"
    },
    "a": {
      "ko": "참가분담금은 원칙적으로 환불되지 않습니다. 다만 비자 발급이 거부되어 이를 확인할 수 있는 증빙 서류를 제출하신 경우에 한해 예외적으로 환불해 드립니다. 환불은 대회 종료 후에 진행되며, 관련 수수료 등을 제외한 금액이 지급됩니다. 현재 비자 미발급 사유 외 전쟁이나 자연재해 등 사유는 환불 대상에 포함되어 있지 않지만, 해당 사유들도 신중히 검토 하겠습니다.",
      "en": "In principle, the participation contribution is not refundable. As an exception, a refund is given only when a visa application has been refused and supporting documents confirming this are submitted. Refunds are processed after the event, and the amount paid out excludes related fees. At present, reasons other than visa refusal, such as war or natural disasters, are not included as grounds for a refund, but we will consider these reasons carefully as well.",
      "es": "En principio, la contribución de participación no es reembolsable. Como excepción, solo se reembolsa cuando se ha denegado el visado y se presentan documentos que lo acrediten. El reembolso se realiza después del evento, descontando las comisiones correspondientes. Actualmente, motivos distintos de la denegación del visado, como guerras o desastres naturales, no están incluidos como causa de reembolso, pero también estudiaremos estos motivos con atención.",
      "fr": "En principe, la contribution de participation n'est pas remboursable. À titre exceptionnel, un remboursement est accordé uniquement en cas de refus de visa, sur présentation de justificatifs. Le remboursement est effectué après l'événement, déduction faite des frais correspondants. Actuellement, les motifs autres que le refus de visa, tels que la guerre ou les catastrophes naturelles, ne sont pas couverts, mais nous examinerons aussi ces motifs avec attention."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q24",
    "no": "Q24",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "해외송금 및 회계 처리를 위해 공식 인보이스 또는 직인이 포함된 청구서를 발급받을 수 있나요?",
      "en": "Can we receive an official invoice or a bill with an official seal for international remittance and accounting purposes?",
      "es": "¿Podemos recibir una factura oficial o un documento de cobro con sello oficial para transferencias internacionales y fines contables?",
      "fr": "Pouvons-nous obtenir une facture officielle ou une demande de paiement revêtue d'un cachet officiel pour les virements internationaux et la comptabilité ?"
    },
    "a": {
      "ko": "현재 기준으로는 별도의 정형화된 인보이스를 발급하지 않고 있습니다. 다만 국가 및 단체마다 해외 송금에 관한 법적·회계적 요건이 다르다는 점을 이해하고 있으며, 조직위는 조직위로의 직접 납부 방식을 전제로 납부에 필요한 서류를 어떤 형태로 제공할 수 있을지 검토하고 있습니다. 검토 결과는 확정되는 대로 안내 드리겠습니다.",
      "en": "At present, no standardised invoice is issued. However, we understand that legal and accounting requirements for international remittances differ by country and organisation, and the LOC is reviewing in what form it can provide the documents needed for payment, on the basis of payment made directly to the LOC. We will let you know the outcome as soon as it is confirmed.",
      "es": "Por el momento no se emite una factura normalizada. No obstante, entendemos que los requisitos legales y contables de las transferencias internacionales varían según el país y la organización, y el COL está estudiando de qué forma puede proporcionar los documentos necesarios para el pago, partiendo de que el pago se realice directamente al COL. Les informaremos del resultado en cuanto esté confirmado.",
      "fr": "Pour l'instant, aucune facture standardisée n'est émise. Nous comprenons cependant que les exigences légales et comptables des virements internationaux varient selon les pays et les organisations, et le COL étudie sous quelle forme il pourrait fournir les documents nécessaires au paiement, dans l'hypothèse d'un paiement effectué directement au COL. Nous vous informerons du résultat dès qu'il sera confirmé."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q25",
    "no": "Q25",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "동일한 대규모그룹(Macrogroup)안에서 하위그룹(Subgroup)별로 서로 다른 패키지를 선택하고 개별 결제할 수 있나요? 일부 하위그룹의 결제 지연이 전체 대규모그룹에 미치는 영향에 대해서도 궁금합니다.",
      "en": "Within the same Macrogroup, can each Subgroup choose a different package and pay separately? We would also like to know how a payment delay by some Subgroups affects the whole Macrogroup.",
      "es": "Dentro de un mismo Macrogrupo, ¿puede cada Subgrupo elegir un paquete distinto y pagar por separado? También quisiéramos saber cómo afecta al Macrogrupo el retraso en el pago de algunos Subgrupos.",
      "fr": "Au sein d'un même Macrogroupe, chaque Sous-groupe peut-il choisir un forfait différent et payer séparément ? Nous aimerions aussi savoir quel est l'impact d'un retard de paiement de certains Sous-groupes sur l'ensemble du Macrogroupe."
    },
    "a": {
      "ko": "네, 동일한 대규모그룹(Macrogroup) 안에서 하위그룹(Subgroup)별로 서로 다른 패키지를 선택하고 각각 결제할 수 있습니다. 각 하위그룹은 본 대회 참가를 위한 동일한 서울 체류 일정과 패키지를 이용하는 순례자들로 구성해 주시기 바랍니다. 결제는 하위그룹별로 진행되므로, 일부 하위그룹의 결제가 지연되더라도 다른 하위그룹이나 매크로 그룹의 등록 및 결제에는 영향을 미치지 않습니다.",
      "en": "Yes, within the same Macrogroup each Subgroup can choose a different package and pay separately. Please form each Subgroup with pilgrims who will use the same stay dates in Seoul and the same package for the main event. Since payment is made by Subgroup, even if payment by some Subgroups is delayed, it does not affect the registration and payment of other Subgroups or the Macrogroup.",
      "es": "Sí, dentro de un mismo Macrogrupo cada Subgrupo puede elegir un paquete distinto y pagar por separado. Formen cada Subgrupo con peregrinos que vayan a tener las mismas fechas de estancia en Seúl y el mismo paquete para el evento principal. Como el pago se hace por Subgrupo, aunque se retrase el pago de algunos Subgrupos, no afecta a la inscripción ni al pago de los demás Subgrupos ni del Macrogrupo.",
      "fr": "Oui, au sein d'un même Macrogroupe, chaque Sous-groupe peut choisir un forfait différent et payer séparément. Veuillez constituer chaque Sous-groupe avec des pèlerins ayant les mêmes dates de séjour à Séoul et le même forfait pour l'événement principal. Le paiement se faisant par Sous-groupe, un retard de paiement de certains Sous-groupes n'affecte ni l'inscription ni le paiement des autres Sous-groupes ou du Macrogroupe."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q26",
    "no": "Q26",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록 및 각 패키지의 결제 일정과 마감일은 어떻게 되나요? 첫 결제, 분할 납부, 잔금 및 보험료 등 각 항목별 납부 기한을 안내받을 수 있나요?",
      "en": "What are the payment schedules and deadlines for registration and each package? Can we be informed of the deadline for each item, such as the first payment, instalments, the balance and insurance?",
      "es": "¿Cuáles son el calendario y los plazos de pago de la inscripción y de cada paquete? ¿Podemos conocer el plazo de cada concepto, como el primer pago, los pagos fraccionados, el saldo y el seguro?",
      "fr": "Quels sont le calendrier et les échéances de paiement de l'inscription et de chaque forfait ? Pouvons-nous connaître l'échéance de chaque élément, comme le premier paiement, les versements échelonnés, le solde et l'assurance ?"
    },
    "a": {
      "ko": "결제는 등록시스템이 오픈된 날부터 가능합니다. 결제 기한은 패키지 유형과 결제 방법에 따라 다음과 같습니다.\n- 숙박 포함 패키지 : 2027년 5월 31일까지\n- 비숙박 패키지 : 현장 등록 오픈 전까지 (현장 등록 오픈은 7월 하순으로 정확한 일정은 추후 안내 예정)\n- 비숙박 패키지 (해외 계좌이체) : 2027년 6월 30일까지\n해외 계좌이체는 은행 간 송금에 시간이 걸리므로 비숙박 패키지도 기한이 앞당겨져 있습니다. 기한 내에 결제를 마치지 못하신 경우에는 현장 등록(현장 등록 오픈은 7월 하순으로 정확한 일정은 추후 안내 예정)을 통해 결제하실 수 있습니다.\n분할 결제 시 첫 결제에는 별도의 기한이 없습니다. 다만 위 기한까지 전액을 납부하셔야 합니다. 참가분담금(Participation Contribution)은 패키지 항목별로 나누어 낼 수 없으며, 패키지 전체 금액으로만 결제하실 수 있습니다.",
      "en": "Payment is possible from the day the registration system opens. The payment deadlines depend on the package type and payment method, as follows.\n- Packages with accommodation: by 31 May 2027\n- Packages without accommodation: before on-site registration opens (on-site registration opens in late July; the exact date will be announced later)\n- Packages without accommodation (international bank transfer): by 30 June 2027\nBecause international bank transfers take time between banks, the deadline is earlier even for packages without accommodation. If you are unable to complete payment by the deadline, you can pay through on-site registration (on-site registration opens in late July; the exact date will be announced later).\nWhen paying in instalments, there is no separate deadline for the first payment. However, the full amount must be paid by the deadlines above. The Participation Contribution cannot be split by package item and can only be paid as the full package amount.",
      "es": "El pago es posible desde el día en que se abre el sistema de inscripción. Los plazos de pago dependen del tipo de paquete y del método de pago, como sigue.\n- Paquetes con alojamiento: hasta el 31 de mayo de 2027\n- Paquetes sin alojamiento: antes de que se abra la inscripción presencial (la inscripción presencial se abre a finales de julio; la fecha exacta se anunciará más adelante)\n- Paquetes sin alojamiento (transferencia bancaria internacional): hasta el 30 de junio de 2027\nComo las transferencias bancarias internacionales tardan entre bancos, el plazo se adelanta incluso para los paquetes sin alojamiento. Si no pueden completar el pago dentro del plazo, pueden pagar mediante la inscripción presencial (la inscripción presencial se abre a finales de julio; la fecha exacta se anunciará más adelante).\nEn el pago fraccionado no hay un plazo específico para el primer pago. Sin embargo, el importe total debe pagarse dentro de los plazos indicados. La Contribución de participación (Participation Contribution) no puede pagarse por conceptos del paquete; solo puede pagarse por el importe total del paquete.",
      "fr": "Le paiement est possible dès l'ouverture du système d'inscription. Les échéances dépendent du type de forfait et du mode de paiement, comme suit.\n- Forfaits avec hébergement : jusqu'au 31 mai 2027\n- Forfaits sans hébergement : avant l'ouverture de l'inscription sur place (l'inscription sur place ouvre fin juillet ; la date exacte sera communiquée ultérieurement)\n- Forfaits sans hébergement (virement bancaire international) : jusqu'au 30 juin 2027\nLes virements internationaux prenant du temps entre banques, l'échéance est avancée même pour les forfaits sans hébergement. Si vous ne pouvez pas finaliser le paiement dans les délais, vous pourrez payer lors de l'inscription sur place (l'inscription sur place ouvre fin juillet ; la date exacte sera communiquée ultérieurement).\nEn cas de paiement échelonné, il n'y a pas d'échéance particulière pour le premier versement. Le montant total doit toutefois être réglé dans les délais ci-dessus. La Contribution de participation (Participation Contribution) ne peut pas être payée par élément du forfait ; elle ne peut être réglée que pour le montant total du forfait."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q27",
    "no": "Q27",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "참가비는 얼마이며 어떤 방법과 통화로 결제할 수 있나요? 달러로만 가능한가요, 아니면 유로로도 결제할 수 있나요 ? ‘기타 결제 방법’에는 무엇이 포함되며, 하나의 그룹에 대해 서로 다른 기관이 나누어 결제하는 것도 가능한가요?",
      "en": "How much is the participation fee, and by what methods and in what currencies can it be paid? Is it only possible in dollars, or can it also be paid in euros? What is included in 'other payment methods', and can different organisations split the payment for one group?",
      "es": "¿Cuánto cuesta la participación y con qué métodos y en qué monedas se puede pagar? ¿Solo en dólares o también en euros? ¿Qué incluyen 'otros métodos de pago'? ¿Pueden distintas entidades repartirse el pago de un mismo grupo?",
      "fr": "Combien coûte la participation, et par quels moyens et dans quelles devises peut-on payer ? Seulement en dollars, ou aussi en euros ? Que comprennent les 'autres moyens de paiement', et différents organismes peuvent-ils se partager le paiement d'un même groupe ?"
    },
    "a": {
      "ko": "참가비는 공식 홈페이지에서 확인하실 수 있습니다. 결제는 대한민국에서는 원화, 그 외 국가에서는 미국 달러로 진행됩니다. 결제창에서 '자국통화결제'를 선택하시면 주요 국가의 통화로도 결제하실 수 있으며, 이때 발생하는 추가 수수료는 결제자가 부담합니다. 결제 수단은 다음과 같습니다.\n-신용카드·체크카드\n-은행 계좌이체 (가상계좌)\n-간편결제: 국내는 네이버페이·카카오페이, 해외는 애플페이·알리페이",
      "en": "The participation fee can be found on the official website. Payment is made in Korean won in the Republic of Korea and in US dollars in other countries. If you select 'pay in local currency' on the payment screen, you can also pay in the currencies of major countries, and any additional fees incurred are borne by the payer. The payment methods are as follows.\n-Credit card / debit card\n-Bank transfer (virtual account)\n-Simple payment: Naver Pay and Kakao Pay in Korea; Apple Pay and Alipay abroad",
      "es": "La cuota de participación puede consultarse en la web oficial. El pago se realiza en wones en la República de Corea y en dólares estadounidenses en los demás países. Si en la pantalla de pago eligen 'pagar en moneda local', también pueden pagar en las monedas de los principales países; las comisiones adicionales corren a cargo de quien paga. Los métodos de pago son los siguientes.\n-Tarjeta de crédito / débito\n-Transferencia bancaria (cuenta virtual)\n-Pago simplificado: Naver Pay y Kakao Pay en Corea; Apple Pay y Alipay en el extranjero",
      "fr": "Les frais de participation sont indiqués sur le site officiel. Le paiement s'effectue en wons en République de Corée et en dollars américains dans les autres pays. Si vous choisissez 'payer dans la devise locale' sur l'écran de paiement, vous pouvez aussi payer dans les devises des principaux pays ; les frais supplémentaires sont à la charge du payeur. Les moyens de paiement sont les suivants.\n-Carte de crédit / de débit\n-Virement bancaire (compte virtuel)\n-Paiement simplifié : Naver Pay et Kakao Pay en Corée ; Apple Pay et Alipay à l'étranger"
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q28",
    "no": "Q28",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "참가분담금(Participation Contribution)과 연대기금(Solidarity Fund)은 반드시 납부해야 하는 의무 사항인가요? 설문 결과에 따르면 많은 그룹이 재정 지원이 필요한데도 등록비 외에 추가로 납부해야 하는 상황이라, 참가분담금이 정말 의무인지 궁금합니다. 또한 연대기금을 특정 국가나 지역의 순례자 지원을 위해 지정할 수 있는지도 궁금합니다.",
      "en": "Are the Participation Contribution and the Solidarity Fund mandatory? According to survey results, many groups need financial support yet have to pay in addition to the registration fee, so we wonder whether the Participation Contribution is really mandatory. We would also like to know whether the Solidarity Fund can be designated to support pilgrims from a particular country or region.",
      "es": "¿Son obligatorios la Contribución de participación (Participation Contribution) y el Fondo de Solidaridad (Solidarity Fund)? Según una encuesta, muchos grupos necesitan ayuda económica y aun así deben pagar además de la cuota de inscripción, por lo que nos preguntamos si la Contribución de participación es realmente obligatoria. También quisiéramos saber si se puede destinar el Fondo de Solidaridad a ayudar a peregrinos de un país o región concretos.",
      "fr": "La Contribution de participation (Participation Contribution) et le Fonds de solidarité (Solidarity Fund) sont-ils obligatoires ? Selon une enquête, de nombreux groupes ont besoin d'une aide financière et doivent pourtant payer en plus des frais d'inscription ; nous nous demandons donc si la Contribution de participation est vraiment obligatoire. Nous aimerions aussi savoir si l'on peut affecter le Fonds de solidarité au soutien des pèlerins d'un pays ou d'une région en particulier."
    },
    "a": {
      "ko": "세계청년대회 참가 자체에는 비용이 들지 않습니다. 다만 '등록 참가자'로 참가하시려면 참가분담금을 납부하셔야 합니다. 분담금을 납부한 등록 참가자는 원하는 패키지를 선택하여 숙박, 식사, 이동수단, 보험, 순례자 키트를 제공받습니다. 등록하지 않고 참가하시는 경우에는 이러한 패키지가 제공되지 않습니다.\n연대기금은 더 많은 순례자가 함께 할 수 있도록, 특히 어려운 여건에 있는 나라의 청년들이 대회에 참가할 수 있도록 돕는 자발적 기부입니다. 납부는 의무가 아니며, 취지에 공감하는 순례자분들의 자발적인 참여로 마련됩니다.",
      "en": "Taking part in World Youth Day itself is free of charge. However, to participate as a 'registered participant', you must pay the Participation Contribution. Registered participants who have paid the contribution choose the package they want and receive accommodation, meals, transport, insurance and a pilgrim kit. Those who take part without registering do not receive these packages.\nThe Solidarity Fund is a voluntary donation that helps more pilgrims to take part, especially young people from countries in difficult circumstances. Payment is not mandatory; the fund is made up of voluntary contributions from pilgrims who share its purpose.",
      "es": "Participar en la Jornada Mundial de la Juventud en sí no tiene coste. Sin embargo, para participar como 'participante inscrito' hay que pagar la Contribución de participación. Los participantes inscritos que han pagado la contribución eligen el paquete que desean y reciben alojamiento, comidas, transporte, seguro y kit del peregrino. Quienes participan sin inscribirse no reciben estos paquetes.\nEl Fondo de Solidaridad es una donación voluntaria que ayuda a que más peregrinos puedan participar, especialmente jóvenes de países en situaciones difíciles. Su pago no es obligatorio; se forma con la aportación voluntaria de los peregrinos que comparten su finalidad.",
      "fr": "Participer aux Journées mondiales de la jeunesse en tant que telles est gratuit. Toutefois, pour participer en tant que 'participant inscrit', il faut verser la Contribution de participation. Les participants inscrits qui ont versé la contribution choisissent le forfait souhaité et bénéficient de l'hébergement, des repas, des transports, de l'assurance et du kit du pèlerin. Ceux qui participent sans s'inscrire ne bénéficient pas de ces forfaits.\nLe Fonds de solidarité est un don volontaire qui aide davantage de pèlerins à participer, en particulier les jeunes de pays en situation difficile. Son versement n'est pas obligatoire ; il est constitué grâce à la participation volontaire des pèlerins qui en partagent l'objectif."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q29",
    "no": "Q29",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "각 패키지별 등록·참가 비용은 얼마이며, 매크로그룹 규모, 조기 또는 일시불 결제 등에 따른 할인 혜택이 있나요? 또한 미성년자에게도 성인과 동일한 참가비가 적용되는지, 별도의 할인이나 재정 지원이 있는지도 궁금합니다.",
      "en": "How much does registration and participation cost for each package, and are there discounts depending on Macrogroup size or for early or lump-sum payment? We would also like to know whether minors pay the same fee as adults and whether there are separate discounts or financial support.",
      "es": "¿Cuánto cuesta la inscripción y participación de cada paquete, y hay descuentos según el tamaño del Macrogrupo o por pago anticipado o en un solo pago? También quisiéramos saber si los menores pagan lo mismo que los adultos y si hay descuentos o ayudas específicas.",
      "fr": "Combien coûtent l'inscription et la participation pour chaque forfait, et existe-t-il des réductions selon la taille du Macrogroupe ou pour un paiement anticipé ou en une seule fois ? Nous aimerions aussi savoir si les mineurs paient le même tarif que les adultes et s'il existe des réductions ou aides particulières."
    },
    "a": {
      "ko": "패키지별 참가분담금은 공식 홈페이지에서 확인하실 수 있으며, 연령과 관계없이 모든 순례자에게 동일하게 적용됩니다. 미성년자, 단체 규모, 조기 결제 등에 따른 할인은 운영하지 않습니다. 대신 조직위원회는 패키지별 참가분담금을 합리적인 범위에서 최소한의 수준으로 책정하여 모든 순례자가 참가할 수 있도록 노력했습니다.",
      "en": "The Participation Contribution for each package can be found on the official website and applies equally to all pilgrims regardless of age. There are no discounts for minors, group size, early payment, etc. Instead, the Local Organising Committee has tried to set the Participation Contribution for each package at the lowest reasonable level so that all pilgrims can take part.",
      "es": "La Contribución de participación de cada paquete puede consultarse en la web oficial y es la misma para todos los peregrinos, independientemente de la edad. No hay descuentos para menores, por tamaño del grupo ni por pago anticipado. En cambio, el Comité Organizador Local ha procurado fijar la Contribución de participación de cada paquete en el nivel más bajo razonable para que todos los peregrinos puedan participar.",
      "fr": "La Contribution de participation de chaque forfait est indiquée sur le site officiel et s'applique de la même manière à tous les pèlerins, quel que soit leur âge. Il n'y a pas de réduction pour les mineurs, selon la taille du groupe ou pour paiement anticipé. En revanche, le Comité d'organisation local s'est efforcé de fixer la Contribution de participation de chaque forfait au niveau le plus bas raisonnable afin que tous les pèlerins puissent participer."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q30",
    "no": "Q30",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "연대기금 지원을 받을 수 있는 국가·그룹·개별 순례자의 자격 요건은 무엇이며, 신청은 어떤 절차와 경로(조직위원회, DLFL, 웹사이트, 이메일 등)를 통해 이루어지나요? 대규모그룹 전체가 아닌 일부 순례자만 지원을 신청하는 것도 가능한가요?",
      "en": "What are the eligibility requirements for countries, groups and individual pilgrims to receive support from the Solidarity Fund, and through what procedure and channel (Local Organising Committee, DLFL, website, email, etc.) is the application made? Is it possible for only some pilgrims, rather than the whole Macrogroup, to apply for support?",
      "es": "¿Cuáles son los requisitos para que países, grupos y peregrinos individuales puedan recibir ayuda del Fondo de Solidaridad, y mediante qué procedimiento y canal (Comité Organizador Local, DLFL, web, correo electrónico, etc.) se solicita? ¿Es posible que solo algunos peregrinos, y no todo el Macrogrupo, soliciten ayuda?",
      "fr": "Quelles sont les conditions pour que des pays, des groupes et des pèlerins individuels puissent bénéficier du Fonds de solidarité, et selon quelle procédure et par quel canal (Comité d'organisation local, DLFL, site web, courriel, etc.) faut-il faire la demande ? Est-il possible que seuls certains pèlerins, et non tout le Macrogroupe, fassent une demande ?"
    },
    "a": {
      "ko": "조직위는 현재 교황청 평신도가정생명부와 협의하여 연대기금의 자격 요건과 신청 절차를 검토하고 있습니다. 자격 요건 및 신청 방법 등 세부 사항은 확정되는 대로 안내해 드리겠습니다.",
      "en": "The LOC is currently reviewing the eligibility requirements and application procedure for the Solidarity Fund in consultation with the Dicastery for Laity, Family and Life. Details such as eligibility requirements and how to apply will be announced as soon as they are confirmed.",
      "es": "El COL está estudiando actualmente los requisitos y el procedimiento de solicitud del Fondo de Solidaridad en consulta con el Dicasterio para los Laicos, la Familia y la Vida. Los detalles, como los requisitos y la forma de solicitarlo, se comunicarán en cuanto estén confirmados.",
      "fr": "Le COL étudie actuellement les conditions et la procédure de demande du Fonds de solidarité en concertation avec le Dicastère pour les laïcs, la famille et la vie. Les détails, tels que les conditions et la manière de faire la demande, seront communiqués dès qu'ils seront confirmés."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment and Funds",
      "es": "Pago y fondos",
      "fr": "Paiement et fonds"
    },
    "subNo": "c"
  },
  {
    "id": "Q31",
    "no": "Q31",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "주교회의 대표들이 온라인 등록 시스템의 '백오피스'에 접근하여 자국에서 등록한 그룹과 그룹 리더 현황을 확인할 수 있는 관리 기능도 제공되나요? 지난 10년간의 모든 WYD에서는 이것이 가능했습니다.",
      "en": "Will representatives of Bishops' Conferences also be given a management function to access the 'back office' of the online registration system and check the groups and group leaders registered from their country? This has been possible at every WYD over the past ten years.",
      "es": "¿Se ofrecerá también a los representantes de las Conferencias Episcopales una función de gestión para acceder al 'back office' del sistema de inscripción en línea y consultar los grupos y líderes inscritos desde su país? En todas las JMJ de los últimos diez años esto ha sido posible.",
      "fr": "Les représentants des Conférences épiscopales disposeront-ils aussi d'une fonction de gestion leur permettant d'accéder au 'back-office' du système d'inscription en ligne et de consulter les groupes et responsables inscrits depuis leur pays ? Cela a été possible à toutes les JMJ des dix dernières années."
    },
    "a": {
      "ko": "주교회의 대표는 등록시스템 백오피스 접근 및 열람 (읽기 전용) 권한을 DLFL에게 요청할 수 있습니다. 이를 통해, 해당 국가의 등록 현황을 확인할 수 있습니다.",
      "en": "Representatives of Bishops' Conferences can request access to view the registration system back office (read-only) from the DLFL. This allows them to check the registration status of their country.",
      "es": "Los representantes de las Conferencias Episcopales pueden solicitar al DLFL permiso de acceso y consulta (solo lectura) al back office del sistema de inscripción. Así podrán consultar el estado de las inscripciones de su país.",
      "fr": "Les représentants des Conférences épiscopales peuvent demander au DLFL un droit d'accès et de consultation (lecture seule) au back-office du système d'inscription. Ils pourront ainsi consulter l'état des inscriptions de leur pays."
    },
    "sub": {
      "ko": "주교등록",
      "en": "Bishops' Registration",
      "es": "Inscripción de obispos",
      "fr": "Inscription des évêques"
    },
    "subNo": "d"
  },
  {
    "id": "Q32",
    "no": "Q32",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "주교의 등록 절차 및 교리교육 참여를 위한 별도 등록 절차가 있는지 안내 부탁드립니다. 또한 주교들의 숙소 유형에 따른 체크인 절차 및 성직자용 물품 수령에 대해 안내해 주십시오.",
      "en": "Please let us know whether there is a separate registration procedure for bishops and for their participation in catechesis. Please also explain the check-in procedure according to the type of accommodation for bishops and the collection of items for clergy.",
      "es": "Les pedimos información sobre si existe un procedimiento de inscripción específico para los obispos y para su participación en las catequesis. Les pedimos también que nos expliquen el procedimiento de acreditación según el tipo de alojamiento de los obispos y la recogida de los artículos para el clero.",
      "fr": "Merci de nous indiquer s'il existe une procédure d'inscription particulière pour les évêques et pour leur participation aux catéchèses. Merci aussi de nous expliquer la procédure d'accréditation selon le type d'hébergement des évêques et le retrait des articles destinés au clergé."
    },
    "a": {
      "ko": "주교 역시 등록시스템(주교)을 통해 등록합니다. 그리고 교리교육을 담당할 주교는 DLFL에서 선정하여 관리할 것입니다. 조직위원회가 지정한 호텔에 머무는 주교들의 체크인은 해당 호텔에서 진행할 예정이고, 물품 수령 역시 호텔에서 할 수 있습니다. 그외 숙소를 이용하는 주교들의 체크인과 물품 수령 관련한 사항은 현재 논의 중에 있습니다.",
      "en": "Bishops also register through the registration system (bishops). Bishops who will lead catechesis will be selected and managed by the DLFL. Bishops staying in hotels designated by the Local Organising Committee will check in at those hotels, and they can also collect their items at the hotel. Check-in and item collection for bishops using other accommodation are currently under discussion.",
      "es": "Los obispos también se inscriben a través del sistema de inscripción (obispos). Los obispos que impartirán las catequesis serán seleccionados y gestionados por el DLFL. Los obispos alojados en los hoteles designados por el Comité Organizador Local se acreditarán en esos hoteles y también podrán recoger allí sus artículos. La acreditación y la recogida de artículos de los obispos que utilicen otro alojamiento se están estudiando actualmente.",
      "fr": "Les évêques s'inscrivent eux aussi via le système d'inscription (évêques). Les évêques chargés des catéchèses seront sélectionnés et suivis par le DLFL. Les évêques logés dans les hôtels désignés par le Comité d'organisation local seront accrédités dans ces hôtels et pourront aussi y retirer leurs articles. L'accréditation et le retrait des articles pour les évêques utilisant un autre hébergement sont actuellement à l'étude."
    },
    "sub": {
      "ko": "주교등록",
      "en": "Bishops' Registration",
      "es": "Inscripción de obispos",
      "fr": "Inscription des évêques"
    },
    "subNo": "d"
  },
  {
    "id": "Q33",
    "no": "Q33",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription"
    },
    "topicNo": "1",
    "q": {
      "ko": "주교는 홈스테이와 호텔 중 숙박 유형을 선택할 수 있나요? 홈스테이를 선택할 수 있다면 청년 순례자에게 우선 배정하지 않고 주교에게도 선택권을 제공하는 이유는 무엇인가요? 또한 LOC가 주교에게 제공하는 호텔의 비용 부담 여부와 객실 유형(1인실 등)은 어떻게 되나요?",
      "en": "Can bishops choose between a homestay and a hotel? If they can choose a homestay, why are bishops given this option rather than giving priority to young pilgrims? Also, does the LOC cover the cost of the hotels offered to bishops, and what type of room (single room, etc.) is provided?",
      "es": "¿Pueden los obispos elegir entre alojamiento en familia y hotel? Si pueden elegir alojamiento en familia, ¿por qué se ofrece esa opción a los obispos en lugar de dar prioridad a los jóvenes peregrinos? Además, ¿asume el COL el coste de los hoteles ofrecidos a los obispos, y qué tipo de habitación (individual, etc.) se ofrece?",
      "fr": "Les évêques peuvent-ils choisir entre l'hébergement en famille et l'hôtel ? S'ils peuvent choisir l'hébergement en famille, pourquoi leur offrir ce choix plutôt que de donner la priorité aux jeunes pèlerins ? Par ailleurs, le COL prend-il en charge le coût des hôtels proposés aux évêques, et quel type de chambre (individuelle, etc.) est prévu ?"
    },
    "a": {
      "ko": "주교는 호텔/홈스테이/동반그룹과 함께 숙박/개별 숙박 중 선택할 수 있습니다. 이는 주교의 상황에 맞게 선택을 할 수 있도록 배려한 것입니다. 호텔 숙박 비용은 주교 본인이 부담합니다. 그리고, 1인실이 기본적으로 배정될 예정입니다.",
      "en": "Bishops can choose between a hotel, a homestay, staying with the group they accompany, or arranging their own accommodation. This is to allow bishops to choose according to their circumstances. Bishops pay for hotel accommodation themselves. A single room will be allocated as standard.",
      "es": "Los obispos pueden elegir entre hotel, alojamiento en familia, alojarse con el grupo al que acompañan o alojarse por su cuenta. Esto se hace para que cada obispo pueda elegir según sus circunstancias. El coste del hotel corre a cargo del propio obispo. Por norma general se asignará una habitación individual.",
      "fr": "Les évêques peuvent choisir entre l'hôtel, l'hébergement en famille, l'hébergement avec le groupe qu'ils accompagnent ou un hébergement à titre individuel. Cela leur permet de choisir selon leur situation. Le coût de l'hôtel est à la charge de l'évêque lui-même. Une chambre individuelle sera attribuée par défaut."
    },
    "sub": {
      "ko": "주교등록",
      "en": "Bishops' Registration",
      "es": "Inscripción de obispos",
      "fr": "Inscription des évêques"
    },
    "subNo": "d"
  },
  {
    "id": "Q34",
    "no": "Q34",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visa, K-ETA",
      "es": "Visado, K-ETA",
      "fr": "Visa, K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "2027년 K-ETA 적용 대상과 면제 국가는 어떻게 되며, 개인 또는 그룹 단위로 신청할 수 있나요?",
      "en": "Which countries are subject to and exempt from K-ETA in 2027, and can it be applied for individually or as a group?",
      "es": "¿A qué países se aplica la K-ETA en 2027 y cuáles están exentos? ¿Se puede solicitar individualmente o por grupo?",
      "fr": "Quels pays sont soumis au K-ETA en 2027 et lesquels en sont exemptés ? Peut-on en faire la demande individuellement ou par groupe ?"
    },
    "a": {
      "ko": "현재 2026년 12월 31일까지의 K- ETA 적용나라는 88개국, K-ETA 면제 국가는 22개국입니다. 자세한 내용은\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y 를 참고하시면 본국의 면제 여부를 확인하실 수 있습니다. K-ETA면제에 대해 내년까지 연장 가능 여부에 대해 법무부와 논의중입니다.\n또한 그룹 단위로는 신청하실 수 없으며, 개인으로 신청해주시기 바랍니다.",
      "en": "Currently, until 31 December 2026, K-ETA applies to 88 countries and 22 countries are exempt from K-ETA. For details, please refer to\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y to check whether your country is exempt. We are discussing with the Ministry of Justice whether the K-ETA exemption can be extended to next year.\nAlso, K-ETA cannot be applied for as a group; please apply individually.",
      "es": "Actualmente, hasta el 31 de diciembre de 2026, la K-ETA se aplica a 88 países y 22 países están exentos. Para más detalles, consulten\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y para comprobar si su país está exento. Estamos hablando con el Ministerio de Justicia sobre la posibilidad de prorrogar la exención de la K-ETA hasta el próximo año.\nAdemás, no se puede solicitar por grupo; les pedimos que la soliciten individualmente.",
      "fr": "Actuellement, jusqu'au 31 décembre 2026, le K-ETA s'applique à 88 pays et 22 pays en sont exemptés. Pour plus de détails, veuillez consulter\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y afin de vérifier si votre pays est exempté. Nous discutons avec le ministère de la Justice d'une éventuelle prolongation de l'exemption du K-ETA jusqu'à l'année prochaine.\nPar ailleurs, la demande ne peut pas être faite par groupe ; veuillez la faire individuellement."
    }
  },
  {
    "id": "Q35",
    "no": "Q35",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visa, K-ETA",
      "es": "Visado, K-ETA",
      "fr": "Visa, K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "비자 신청 시 필요한 한국 내 체류지 주소와 연락처를 LOC에서 제공하나요?",
      "en": "Will the LOC provide the address of the place of stay in Korea and the contact details required for visa applications?",
      "es": "¿El COL proporcionará la dirección del lugar de estancia en Corea y los datos de contacto necesarios para la solicitud del visado?",
      "fr": "Le COL fournira-t-il l'adresse du lieu de séjour en Corée et les coordonnées nécessaires à la demande de visa ?"
    },
    "a": {
      "ko": "비자 신청 시 한국 내 체류지 주소와 연락처는 조직위원회 정보를 기재하시면 됩니다. 해당 정보는 등록 시스템에서 발급되는 참가확인서에서 확인하실 수 있습니다.",
      "en": "For the address of your place of stay in Korea and your contact details when applying for a visa, you may enter the Local Organising Committee's information. This information can be found in the confirmation of participation issued by the registration system.",
      "es": "Para la dirección del lugar de estancia en Corea y los datos de contacto en la solicitud del visado, pueden indicar los datos del Comité Organizador Local. Esta información figura en la confirmación de participación que emite el sistema de inscripción.",
      "fr": "Pour l'adresse du lieu de séjour en Corée et les coordonnées lors de la demande de visa, vous pouvez indiquer celles du Comité d'organisation local. Ces informations figurent dans l'attestation de participation délivrée par le système d'inscription."
    }
  },
  {
    "id": "Q36",
    "no": "Q36",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visa, K-ETA",
      "es": "Visado, K-ETA",
      "fr": "Visa, K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "저희 그룹에는 다양한 국적의 순례자가 있습니다. 국적별 비자 또는 K-ETA 필요 여부를 확인할 수 있는 안내 자료가 제공되나요? WYD 전용 비자가 별도로 있는지, C-3 비자의 성격과 비자 면제 대상자의 초청장 필요 여부도 궁금합니다.",
      "en": "Our group has pilgrims of various nationalities. Will guidance materials be provided to check whether a visa or K-ETA is needed for each nationality? We would also like to know whether there is a dedicated WYD visa, the nature of the C-3 visa, and whether visa-exempt participants need a letter of invitation.",
      "es": "Nuestro grupo tiene peregrinos de diversas nacionalidades. ¿Se ofrecerán materiales informativos para comprobar si se necesita visado o K-ETA según la nacionalidad? También quisiéramos saber si existe un visado específico para la JMJ, qué tipo de visado es el C-3 y si los exentos de visado necesitan carta de invitación.",
      "fr": "Notre groupe compte des pèlerins de diverses nationalités. Des documents seront-ils fournis pour vérifier, selon la nationalité, si un visa ou un K-ETA est nécessaire ? Nous aimerions aussi savoir s'il existe un visa spécifique aux JMJ, quelle est la nature du visa C-3 et si les personnes exemptées de visa ont besoin d'une lettre d'invitation."
    },
    "a": {
      "ko": "조직위원회는 별도의 비자 안내 자료를 제공하고 있지 않습니다. 국적별로 비자와 K-ETA의 필요여부가 달라지므로, https://www.visa.go.kr/ 에 들어가셔서 국가별 비자 필요여부를 확인해주시기 바랍니다. WYD 전용비자는 없습니다. C-3는 단기체류비자로 자세한 체류 정보는 정부와 협의 중으로 추후에 안내 드리겠습니다. 비자 면제 대상자에게는 초정장이 필요하지 않습니다.",
      "en": "The Local Organising Committee does not provide separate visa guidance materials. Since visa and K-ETA requirements differ by nationality, please visit https://www.visa.go.kr/ to check the visa requirements for each country. There is no dedicated WYD visa. The C-3 is a short-term stay visa; detailed information on the length of stay is being discussed with the government and will be announced later. Visa-exempt participants do not need a letter of invitation.",
      "es": "El Comité Organizador Local no ofrece materiales informativos específicos sobre visados. Como los requisitos de visado y de K-ETA varían según la nacionalidad, les pedimos que consulten https://www.visa.go.kr/ para comprobar los requisitos de cada país. No existe un visado específico para la JMJ. El C-3 es un visado de estancia de corta duración; la información detallada sobre la estancia se está tratando con el Gobierno y se comunicará más adelante. Los exentos de visado no necesitan carta de invitación.",
      "fr": "Le Comité d'organisation local ne fournit pas de documentation spécifique sur les visas. Les exigences en matière de visa et de K-ETA variant selon la nationalité, veuillez consulter https://www.visa.go.kr/ pour vérifier les exigences de chaque pays. Il n'existe pas de visa spécifique aux JMJ. Le C-3 est un visa de court séjour ; les informations détaillées sur la durée du séjour sont en discussion avec le gouvernement et seront communiquées ultérieurement. Les personnes exemptées de visa n'ont pas besoin de lettre d'invitation."
    }
  },
  {
    "id": "Q37",
    "no": "Q37",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visa, K-ETA",
      "es": "Visado, K-ETA",
      "fr": "Visa, K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "조직위원회 또는 DLFL 에서 각국 한국 대사관·영사관에 WYD 개최 사실과 참가자 비자 절차를 안내하고 있나요? 비자 예약 지원, 단체 신청, 대사관과 멀리 떨어져 있는 원거리 거주 순례자를 위한 편의 (예. 일괄 신청) 및 WYD 참가 목적에 대한 별도 고려가 제공되나요?",
      "en": "Are the Local Organising Committee or the DLFL informing Korean embassies and consulates in each country about WYD and the visa procedures for participants? Will support with visa appointments, group applications, arrangements for pilgrims living far from an embassy (e.g. batch applications) and special consideration for the purpose of attending WYD be provided?",
      "es": "¿El Comité Organizador Local o el DLFL están informando a las embajadas y consulados de Corea en cada país sobre la celebración de la JMJ y los trámites de visado de los participantes? ¿Se ofrecerá apoyo para las citas de visado, solicitudes en grupo, facilidades para peregrinos que viven lejos de la embajada (p. ej., solicitud conjunta) y consideración especial del objetivo de asistir a la JMJ?",
      "fr": "Le Comité d'organisation local ou le DLFL informent-ils les ambassades et consulats de Corée dans chaque pays de la tenue des JMJ et des démarches de visa des participants ? Un soutien sera-t-il apporté pour les rendez-vous de visa, les demandes groupées, les pèlerins vivant loin de l'ambassade (ex. demande collective) et une prise en compte particulière du motif de participation aux JMJ ?"
    },
    "a": {
      "ko": "조직위원회는 한국 대사관과 영사관에 WYD 비자 절차에 대해 안내와 소통을 하고 있습니다. 이번 제2차 국제준비회의에도 정부와의 협의로 많은 도움을 받았습니다. 앞으로도 조직위는 한국 정부와 원만한 소통을 통해 비자 관련 절차 간소화를 진행하여 추후에 안내드릴 예정입니다.",
      "en": "The Local Organising Committee is informing and communicating with Korean embassies and consulates about the WYD visa procedures. For this 2nd International Preparatory Meeting as well, we received a great deal of help through consultation with the government. The LOC will continue to work with the Korean government to simplify visa procedures and will provide information later.",
      "es": "El Comité Organizador Local está informando y manteniendo contacto con las embajadas y consulados de Corea sobre los trámites de visado para la JMJ. También para esta 2.ª Reunión Preparatoria Internacional recibimos mucha ayuda gracias a la colaboración con el Gobierno. El COL seguirá trabajando con el Gobierno coreano para simplificar los trámites de visado e informará más adelante.",
      "fr": "Le Comité d'organisation local informe les ambassades et consulats de Corée sur les démarches de visa pour les JMJ et reste en contact avec eux. Pour cette 2e Réunion préparatoire internationale également, nous avons bénéficié d'une aide précieuse grâce à la concertation avec le gouvernement. Le COL continuera de travailler avec le gouvernement coréen pour simplifier les démarches de visa et vous informera ultérieurement."
    }
  },
  {
    "id": "Q38",
    "no": "Q38",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visa, K-ETA",
      "es": "Visado, K-ETA",
      "fr": "Visa, K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "비자 발급 수수료는 얼마이며, WYD 참가 순례자를 위한 수수료 면제 또는 할인 방안이 검토되고 있나요?",
      "en": "How much is the visa fee, and are fee waivers or discounts for pilgrims attending WYD being considered?",
      "es": "¿Cuánto cuesta el visado y se está estudiando la exención o reducción de la tasa para los peregrinos que asisten a la JMJ?",
      "fr": "Combien coûte le visa, et une exonération ou une réduction des frais est-elle envisagée pour les pèlerins participant aux JMJ ?"
    },
    "a": {
      "ko": "비자 발급 수수료 및 WYD 참가자에 대한 수수료 면제 또는 할인 여부는 현재 관계 기관과 논의 중입니다. 관련 사항이 확정되는 대로 안내드리겠습니다.",
      "en": "The visa fee and whether fee waivers or discounts will be offered to WYD participants are currently being discussed with the relevant authorities. We will let you know as soon as this is confirmed.",
      "es": "La tasa del visado y la posible exención o reducción para los participantes en la JMJ se están tratando actualmente con las autoridades competentes. Les informaremos en cuanto se confirme.",
      "fr": "Les frais de visa et une éventuelle exonération ou réduction pour les participants aux JMJ sont actuellement en discussion avec les autorités compétentes. Nous vous informerons dès que ce sera confirmé."
    }
  },
  {
    "id": "Q39",
    "no": "Q39",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visa, K-ETA",
      "es": "Visado, K-ETA",
      "fr": "Visa, K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "학생 등 재직증명서나 급여명세서를 제출하기 어려운 순례자가 사용할 수 있는 대체 서류에 대한 지원 방안이 있나요?",
      "en": "Is there support for alternative documents that can be used by pilgrims who find it difficult to submit a certificate of employment or pay slips, such as students?",
      "es": "¿Hay alguna solución con documentos alternativos para peregrinos, como estudiantes, a quienes les resulta difícil presentar un certificado de empleo o nóminas?",
      "fr": "Existe-t-il une solution avec des documents alternatifs pour les pèlerins, comme les étudiants, qui ont du mal à fournir une attestation d'emploi ou des fiches de paie ?"
    },
    "a": {
      "ko": "학생 및 청년 참가자 등을 위한 비자 제출서류를 현재 관계 기관과 협의하고 있습니다. 대체서류를 포함한 구체적인 제출 요건이 확정되는 대로 안내드리겠습니다.",
      "en": "We are currently consulting with the relevant authorities on the visa documents required for students, young participants and others. We will announce the specific submission requirements, including alternative documents, as soon as they are confirmed.",
      "es": "Estamos consultando actualmente con las autoridades competentes la documentación de visado para estudiantes, jóvenes participantes y otros. Comunicaremos los requisitos concretos, incluidos los documentos alternativos, en cuanto estén confirmados.",
      "fr": "Nous consultons actuellement les autorités compétentes au sujet des documents de visa pour les étudiants, les jeunes participants et d'autres. Nous communiquerons les exigences précises, y compris les documents alternatifs, dès qu'elles seront confirmées."
    }
  },
  {
    "id": "Q40",
    "no": "Q40",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "봉사자",
      "en": "Volunteers",
      "es": "Voluntarios",
      "fr": "Volontaires"
    },
    "topicNo": "3",
    "q": {
      "ko": "국제 봉사자의 참가 비용과 비자 소지자의 장기 봉사 지원 가능 여부는 어떻게 되나요?",
      "en": "What does it cost to take part as an international volunteer, and can visa holders apply for long-term volunteering?",
      "es": "¿Cuánto cuesta participar como voluntario internacional y pueden los titulares de visado solicitar el voluntariado de larga duración?",
      "fr": "Combien coûte la participation en tant que volontaire international, et les titulaires d'un visa peuvent-ils postuler au volontariat de longue durée ?"
    },
    "a": {
      "ko": "국제 장기 봉사자에게 별도의 참가 비용은 없습니다. 조직위원회에서는 숙소와 평일 점심 식권, 그리고 교통비 및 식비의 일부를 제공하며, 그 외의 비용은 본인이 부담해야 합니다.\n국제 봉사자가 한국에서 장기간(3개월 이상) 활동하기 위해서는 비자 발급이 필수이며, 대부분 종교비자(D-6)를 발급받게 됩니다. 이미 비자를 소지하고 계신 경우에도 지원이 가능하며, 입국 과정이 훨씬 수월하다는 장점이 있습니다. 다만 비자를 소지하고 있더라도 국제 장기 봉사자 지원 절차는 동일하게 거쳐야 하며, 소속 교구 또는 주교회의의 추천서 제출을 동일하게 요청받을 수 있다는 점을 알아 두시기 바랍니다.",
      "en": "There is no participation fee for international long-term volunteers. The Local Organising Committee provides accommodation, lunch vouchers on weekdays, and part of the transport and meal costs; other costs must be borne by the volunteer.\nInternational volunteers must obtain a visa to serve in Korea for a long period (three months or more), and most receive a religious visa (D-6). Those who already hold a visa can also apply, which has the advantage of making entry much easier. Please note, however, that even if you hold a visa, you must go through the same application procedure for international long-term volunteers and may likewise be asked to submit a letter of recommendation from your diocese or Bishops' Conference.",
      "es": "Los voluntarios internacionales de larga duración no pagan cuota de participación. El Comité Organizador Local ofrece alojamiento, vales de almuerzo en días laborables y una parte de los gastos de transporte y comida; los demás gastos corren a cargo del voluntario.\nPara servir en Corea durante un periodo largo (tres meses o más), los voluntarios internacionales deben obtener un visado, y la mayoría recibe un visado religioso (D-6). Quienes ya tienen visado también pueden presentar su candidatura, lo que tiene la ventaja de facilitar mucho la entrada. No obstante, tengan en cuenta que, aunque tengan visado, deben seguir el mismo procedimiento de solicitud para voluntarios internacionales de larga duración y también se les puede pedir una carta de recomendación de su diócesis o Conferencia Episcopal.",
      "fr": "Les volontaires internationaux de longue durée ne paient pas de frais de participation. Le Comité d'organisation local fournit l'hébergement, des tickets-repas pour le déjeuner en semaine et une partie des frais de transport et de repas ; les autres frais sont à la charge du volontaire.\nPour servir en Corée sur une longue période (trois mois ou plus), les volontaires internationaux doivent obtenir un visa, et la plupart reçoivent un visa religieux (D-6). Ceux qui possèdent déjà un visa peuvent aussi postuler, ce qui facilite grandement l'entrée sur le territoire. Notez toutefois que, même avec un visa, il faut suivre la même procédure de candidature pour les volontaires internationaux de longue durée, et une lettre de recommandation de votre diocèse ou de votre Conférence épiscopale peut également vous être demandée."
    }
  },
  {
    "id": "Q41",
    "no": "Q41",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "봉사자",
      "en": "Volunteers",
      "es": "Voluntarios",
      "fr": "Volontaires"
    },
    "topicNo": "3",
    "q": {
      "ko": "봉사위원회 협의 및 협업을 위한 절차 및 준비 사항은 어떻게 되나요?",
      "en": "What are the procedures and preparations for consultation and collaboration with the volunteer committee?",
      "es": "¿Cuáles son el procedimiento y los preparativos para coordinarse y colaborar con el comité de voluntariado?",
      "fr": "Quelles sont la procédure et les démarches à prévoir pour se concerter et collaborer avec le comité des volontaires ?"
    },
    "a": {
      "ko": "향후 공식 홈페이지에 봉사자 섹션이 마련될 예정입니다. 그 전까지는 volunteer.intl@wydseoul.org로 연락해 주시기 바랍니다.",
      "en": "A volunteer section will be set up on the official website in the future. Until then, please contact volunteer.intl@wydseoul.org.",
      "es": "Más adelante se habilitará una sección de voluntariado en la web oficial. Mientras tanto, pónganse en contacto con volunteer.intl@wydseoul.org.",
      "fr": "Une rubrique consacrée aux volontaires sera prochainement mise en place sur le site officiel. D'ici là, veuillez écrire à volunteer.intl@wydseoul.org."
    }
  },
  {
    "id": "Q42",
    "no": "Q42",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "봉사자",
      "en": "Volunteers",
      "es": "Voluntarios",
      "fr": "Volontaires"
    },
    "topicNo": "3",
    "q": {
      "ko": "장기 봉사자와 단기 봉사자의 차이, 지원 자격 및 등록 절차는 무엇입니까?",
      "en": "What is the difference between long-term and short-term volunteers, and what are the eligibility requirements and registration procedures?",
      "es": "¿Cuál es la diferencia entre voluntarios de larga y de corta duración, y cuáles son los requisitos y el procedimiento de inscripción?",
      "fr": "Quelle est la différence entre volontaires de longue et de courte durée, et quelles sont les conditions et la procédure d'inscription ?"
    },
    "a": {
      "ko": "1. 장기 봉사\n장기 봉사자는 3개월 이상 조직위원회에서 활동하며, 2027 서울 WYD 준비와 기획에 함께하게 됩니다. 활동 시간과 분야에 따라 부서 봉사자와 팀 봉사자로 구분되며, 모집(국내/국외 거주 별도 모집)은 조직위원회 홈페이지를 통해 안내됩니다. 국외에서 장기 봉사자로 선발된 이에게는 숙소와 함께 식사비와 교통비 일부가 제공됩니다.\n2. 단기 봉사\n단기 봉사자는 2027년 8월 3일부터 8일까지 진행되는 본대회를 중심으로 활동하게 됩니다. 이전 대회와 마찬가지로 본대회 약 1주일 부터 활동이 시작되어 7월 26일까지 입국해야 하며, 교육, 봉사자 발대 미사 등 사전 프로그램부터 참여해야 합니다. 단기 자원봉사 신청은 공식 봉사자 등록 시스템을 통해 진행될 예정입니다.",
      "en": "1. Long-term volunteering\nLong-term volunteers serve at the Local Organising Committee for three months or more and take part in preparing and planning WYD Seoul 2027. They are divided into department volunteers and team volunteers depending on their hours and area of work, and recruitment (separate for those living in Korea and abroad) is announced on the Local Organising Committee website. Those selected from abroad as long-term volunteers are provided with accommodation as well as part of their meal and transport costs.\n2. Short-term volunteering\nShort-term volunteers serve mainly during the main event from 3 to 8 August 2027. As at previous events, their service begins about a week before the main event, so they must enter Korea by 26 July and take part from the preparatory programmes, such as training and the volunteers' sending Mass. Applications for short-term volunteering will be made through the official volunteer registration system.",
      "es": "1. Voluntariado de larga duración\nLos voluntarios de larga duración colaboran en el Comité Organizador Local durante tres meses o más y participan en la preparación y planificación de la JMJ Seúl 2027. Se dividen en voluntarios de departamento y voluntarios de equipo según su horario y ámbito de trabajo, y la convocatoria (separada para residentes en Corea y en el extranjero) se anuncia en la web del Comité Organizador Local. A los seleccionados en el extranjero como voluntarios de larga duración se les ofrece alojamiento y una parte de los gastos de comida y transporte.\n2. Voluntariado de corta duración\nLos voluntarios de corta duración colaboran principalmente durante el evento principal, del 3 al 8 de agosto de 2027. Como en ediciones anteriores, su servicio comienza aproximadamente una semana antes del evento principal, por lo que deben entrar en Corea antes del 26 de julio y participar desde los programas previos, como la formación y la Misa de envío de los voluntarios. La solicitud de voluntariado de corta duración se realizará a través del sistema oficial de inscripción de voluntarios.",
      "fr": "1. Volontariat de longue durée\nLes volontaires de longue durée servent au Comité d'organisation local pendant trois mois ou plus et participent à la préparation et à la planification des JMJ Séoul 2027. Ils se répartissent en volontaires de département et volontaires d'équipe selon leurs horaires et leur domaine d'activité, et le recrutement (distinct pour les résidents en Corée et à l'étranger) est annoncé sur le site du Comité d'organisation local. Les volontaires de longue durée sélectionnés à l'étranger bénéficient de l'hébergement ainsi que d'une partie des frais de repas et de transport.\n2. Volontariat de courte durée\nLes volontaires de courte durée servent principalement pendant l'événement principal, du 3 au 8 août 2027. Comme lors des éditions précédentes, leur service commence environ une semaine avant l'événement principal ; ils doivent donc entrer en Corée avant le 26 juillet et participer dès les programmes préparatoires, comme la formation et la messe d'envoi des volontaires. Les candidatures au volontariat de courte durée se feront via le système officiel d'inscription des volontaires."
    }
  },
  {
    "id": "Q43",
    "no": "Q43",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "한국에서 단체 이동에 일반적으로 사용되는 버스는 몇 인승인가요? 45인승과 53인승 버스의 이용 가능 여부 및 수급 상황은 어떻게 되나요?",
      "en": "How many seats do buses commonly used for group travel in Korea have? What is the availability and supply of 45-seat and 53-seat buses?",
      "es": "¿Cuántas plazas tienen los autobuses que se usan habitualmente para desplazamientos en grupo en Corea? ¿Qué disponibilidad hay de autobuses de 45 y 53 plazas?",
      "fr": "Combien de places comptent les autocars couramment utilisés pour les déplacements de groupe en Corée ? Quelle est la disponibilité des autocars de 45 et 53 places ?"
    },
    "a": {
      "ko": "한국에서 일반적으로 사용되는 단체버스는 45인승만 있으며, 행사가 열리는 기간은 휴가철로 버스 수급은 문제 없으나 비용은 평소보다 높을 수 있습니다.",
      "en": "Group buses commonly used in Korea are only 45-seaters. The event takes place during the holiday season, so the supply of buses is not a problem, but costs may be higher than usual.",
      "es": "Los autobuses para grupos que se usan habitualmente en Corea son solo de 45 plazas. El evento coincide con el periodo de vacaciones, por lo que no habrá problemas de disponibilidad de autobuses, pero el coste puede ser más alto de lo habitual.",
      "fr": "Les autocars de groupe couramment utilisés en Corée ne comptent que 45 places. L'événement a lieu pendant la période des vacances ; la disponibilité des autocars ne pose donc pas de problème, mais le coût peut être plus élevé que d'habitude."
    },
    "sub": {
      "ko": "교통",
      "en": "Transport",
      "es": "Transporte",
      "fr": "Transport"
    },
    "subNo": "a"
  },
  {
    "id": "Q44",
    "no": "Q44",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "WYD 기간 동안 지하철과 버스 등 대중교통의 운행 시간은 어떻게 되나요? 심야 또는 24시간 운행, 운행시간 연장 및 행사 기간의 혼잡에 대비한 증편 계획이 있나요? 또한 숙소와 주요 행사장 간 이동을 위한 교통 대책은 어떻게 마련될 예정인가요?",
      "en": "What are the operating hours of public transport such as the subway and buses during WYD? Are there plans for late-night or 24-hour service, extended hours, or additional services to cope with congestion during the event? Also, what transport measures will be in place for travel between accommodation and the main event venues?",
      "es": "¿Cuál será el horario del transporte público, como el metro y los autobuses, durante la JMJ? ¿Hay planes de servicio nocturno o de 24 horas, ampliación de horarios o refuerzo para hacer frente a la afluencia? Además, ¿qué medidas de transporte se prevén para los desplazamientos entre el alojamiento y los principales lugares de los actos?",
      "fr": "Quels seront les horaires des transports en commun, comme le métro et les bus, pendant les JMJ ? Un service de nuit ou 24 h/24, une extension des horaires ou un renforcement des fréquences face à l'affluence sont-ils prévus ? Par ailleurs, quelles mesures de transport sont prévues entre les hébergements et les principaux lieux des célébrations ?"
    },
    "a": {
      "ko": "WYD 기간 동안 순례자들의 대중교통 편의 제공을 위해 서울시 및 관계기관과 지하철, 버스 등 대중교통의 증편에 대해 지속적으로 협의중에 있습니다.",
      "en": "To make public transport convenient for pilgrims during WYD, we are in ongoing discussions with the Seoul Metropolitan Government and relevant agencies about increasing subway, bus and other public transport services.",
      "es": "Para facilitar el transporte público a los peregrinos durante la JMJ, mantenemos conversaciones continuas con el Gobierno Metropolitano de Seúl y los organismos competentes sobre el refuerzo del metro, los autobuses y demás transporte público.",
      "fr": "Afin de faciliter l'usage des transports en commun par les pèlerins pendant les JMJ, nous menons des discussions continues avec la Ville de Séoul et les organismes concernés sur le renforcement du métro, des bus et des autres transports en commun."
    },
    "sub": {
      "ko": "교통",
      "en": "Transport",
      "es": "Transporte",
      "fr": "Transport"
    },
    "subNo": "a"
  },
  {
    "id": "Q45",
    "no": "Q45",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "같은 그룹의 구성원들이 도착일과 출발일은 동일하더라도 서로 다른 항공편으로 서울에 도착하고 출발하는 것이 허용되는지 확인해주실 수 있나요?",
      "en": "Can you confirm whether members of the same group may arrive in and depart from Seoul on different flights, even if their arrival and departure dates are the same?",
      "es": "¿Pueden confirmar si los miembros de un mismo grupo pueden llegar a Seúl y salir de allí en vuelos distintos, aunque tengan las mismas fechas de llegada y salida?",
      "fr": "Pouvez-vous confirmer que les membres d'un même groupe peuvent arriver à Séoul et en repartir sur des vols différents, même si leurs dates d'arrivée et de départ sont identiques ?"
    },
    "a": {
      "ko": "같은 그룹의 참가자들이 서로 다른 항공편으로 서울에 도착하고 출발하는 것은 가능합니다. 도착일과 출발일이 동일하고, 같은 패키지를 이용하며 동일한 그룹 리더의 인솔과 관리 아래 참가한다면, 항공편이 다르다는 이유만으로 별도의 하위그룹을 구성할 필요는 없습니다.",
      "en": "Participants in the same group may arrive in and depart from Seoul on different flights. If their arrival and departure dates are the same, they use the same package and they participate under the guidance and supervision of the same group leader, there is no need to form a separate Subgroup simply because their flights differ.",
      "es": "Los participantes de un mismo grupo pueden llegar a Seúl y salir en vuelos distintos. Si tienen las mismas fechas de llegada y salida, usan el mismo paquete y participan bajo la guía y supervisión del mismo líder, no es necesario formar un Subgrupo aparte solo porque los vuelos sean distintos.",
      "fr": "Les participants d'un même groupe peuvent arriver à Séoul et en repartir sur des vols différents. Si leurs dates d'arrivée et de départ sont identiques, qu'ils utilisent le même forfait et participent sous la conduite et la supervision du même responsable, il n'est pas nécessaire de constituer un Sous-groupe distinct au seul motif que les vols sont différents."
    },
    "sub": {
      "ko": "교통",
      "en": "Transport",
      "es": "Transporte",
      "fr": "Transport"
    },
    "subNo": "a"
  },
  {
    "id": "Q46",
    "no": "Q46",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "부부나 가족의 경우 같은 숙소에 머물도록 요청할 수 있나요?",
      "en": "Can married couples or families request to stay in the same accommodation?",
      "es": "¿Pueden los matrimonios o las familias pedir alojarse en el mismo lugar?",
      "fr": "Les couples mariés ou les familles peuvent-ils demander à être logés au même endroit ?"
    },
    "a": {
      "ko": "부부나 가족이 함께 숙박하기를 원하시는 경우, 등록 시 동일한 그룹으로 등록해 주시기 바랍니다. 숙소 배정은 동일한 그룹의 참가자를 같은 숙소에 배정하는 것을 원칙으로 합니다.\n다만, 전체 숙소의 수용 여건과 운영 기준에 따라 배정이 이루어지므로, 개별적인 숙소 배정 요청을 반영하기는 어려운 점 양해 부탁드립니다. 같은 숙소에 배정되더라도 가족 전용 객실이나 동일한 방 사용이 보장되는 것은 아닙니다.",
      "en": "If married couples or families wish to stay together, please register them in the same group. As a rule, participants in the same group are allocated to the same accommodation.\nHowever, since allocation is based on the overall capacity and operating criteria of the accommodation, we ask for your understanding that individual accommodation requests are difficult to accommodate. Even if you are allocated to the same accommodation, a family room or sharing the same room is not guaranteed.",
      "es": "Si los matrimonios o las familias desean alojarse juntos, les pedimos que se inscriban en el mismo grupo. Por norma general, los participantes de un mismo grupo se asignan al mismo alojamiento.\nNo obstante, como la asignación se hace según la capacidad general y los criterios de funcionamiento de los alojamientos, les pedimos comprensión, ya que es difícil atender solicitudes individuales de alojamiento. Aunque se les asigne el mismo alojamiento, no se garantiza una habitación familiar ni compartir la misma habitación.",
      "fr": "Si les couples ou les familles souhaitent loger ensemble, veuillez les inscrire dans le même groupe. En règle générale, les participants d'un même groupe sont affectés au même hébergement.\nToutefois, l'attribution se faisant selon la capacité globale et les critères de fonctionnement des hébergements, nous vous remercions de votre compréhension : il est difficile de tenir compte des demandes individuelles. Même en cas d'affectation au même hébergement, une chambre familiale ou le partage de la même chambre ne sont pas garantis."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q47",
    "no": "Q47",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자 패키지에는 어떤 형태의 숙박시설이 제공되며, 참가자가 침낭 등 별도로 준비해야 할 물품은 무엇인가요? 또한 예상 인원을 초과할 경우 추가 숙소는 어떻게 확보할 예정인가요?",
      "en": "What type of accommodation is provided in the pilgrim package, and what items, such as sleeping bags, should participants bring themselves? Also, how will additional accommodation be secured if the expected number of participants is exceeded?",
      "es": "¿Qué tipo de alojamiento ofrece el paquete del peregrino y qué artículos, como sacos de dormir, deben llevar los participantes? Además, ¿cómo se conseguirá alojamiento adicional si se supera el número previsto de participantes?",
      "fr": "Quel type d'hébergement le forfait du pèlerin prévoit-il, et quels articles, comme un sac de couchage, les participants doivent-ils apporter ? Par ailleurs, comment des hébergements supplémentaires seront-ils trouvés si le nombre prévu de participants est dépassé ?"
    },
    "a": {
      "ko": "패키지에 포함된 숙박 유형은 본당· 학교·공공시설 등을 활용한 공동 숙소와 홈스테이 형태로 제공됩니다.\n침구는 별도로 제공되지 않으므로, 참가자는 본인의 침낭 등 개인 침구를 직접 준비해 주시기 바랍니다. 조직위원회에서는 예상 인원을 초가할 경우를 대비하여 일정 정도의 예비 숙소를 확보하고자 노력하고 있습니다.\n그러나 숙소 포함 패키지 마감일(2027년 5월 31일) 이후에는 추가되는 인원에 대해서는 조직위에서 숙소를 제공해 드리기 어려운 점을 이해해 주시기 바랍니다.",
      "en": "The accommodation included in the packages is provided as shared accommodation in parishes, schools, public facilities, etc., and as homestays.\nBedding is not provided, so participants should bring their own sleeping bag or other personal bedding. The Local Organising Committee is working to secure a certain amount of reserve accommodation in case the expected number of participants is exceeded.\nHowever, please understand that it will be difficult for the LOC to provide accommodation for additional participants after the deadline for packages with accommodation (31 May 2027).",
      "es": "El alojamiento incluido en los paquetes se ofrece en forma de alojamiento compartido en parroquias, escuelas, instalaciones públicas, etc., y de alojamiento en familias.\nNo se proporciona ropa de cama, por lo que los participantes deben llevar su propio saco de dormir u otra ropa de cama personal. El Comité Organizador Local está trabajando para reservar cierta cantidad de alojamiento de reserva por si se supera el número previsto de participantes.\nSin embargo, les pedimos que comprendan que será difícil que el COL ofrezca alojamiento a los participantes adicionales después de la fecha límite de los paquetes con alojamiento (31 de mayo de 2027).",
      "fr": "L'hébergement inclus dans les forfaits est proposé sous forme d'hébergement collectif dans des paroisses, écoles, équipements publics, etc., et d'hébergement en famille.\nLa literie n'est pas fournie ; les participants doivent donc apporter leur propre sac de couchage ou autre literie personnelle. Le Comité d'organisation local s'efforce de réserver un certain volume d'hébergements de réserve au cas où le nombre prévu de participants serait dépassé.\nNous vous prions toutefois de comprendre qu'il sera difficile pour le COL de fournir un hébergement aux participants supplémentaires après la date limite des forfaits avec hébergement (31 mai 2027)."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q48",
    "no": "Q48",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹이 호텔 등 자체 숙소를 마련하는 경우 조직위원회에 숙소 정보를 알려야 하나요?",
      "en": "If a group arranges its own accommodation, such as a hotel, should it inform the Local Organising Committee of the accommodation details?",
      "es": "Si un grupo organiza su propio alojamiento, como un hotel, ¿debe informar al Comité Organizador Local de los datos del alojamiento?",
      "fr": "Si un groupe organise son propre hébergement, par exemple à l'hôtel, doit-il en informer le Comité d'organisation local ?"
    },
    "a": {
      "ko": "등록 시, 자체적으로 마련한 숙소의 정보를 기재하는 란이 있습니다.\n단, 이는 참고를 위해 기재를 요청드리며 의무 기재 사항은 아닙니다.",
      "en": "During registration, there is a field for entering the details of accommodation you have arranged yourselves.\nHowever, this information is requested for reference only and is not mandatory.",
      "es": "Durante la inscripción hay un campo para indicar los datos del alojamiento que hayan organizado por su cuenta.\nNo obstante, esta información se solicita solo como referencia y no es obligatoria.",
      "fr": "Lors de l'inscription, un champ permet d'indiquer les informations sur l'hébergement que vous avez organisé vous-mêmes.\nCes informations sont toutefois demandées à titre indicatif et ne sont pas obligatoires."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q49",
    "no": "Q49",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹 리더가 WYD 전에 배정된 숙소를 미리 방문하거나 확인할 수 있나요? 또한 실제 숙소가 사전에 안내된 시설 및 조건과 다른 경우 숙소 변경을 요청할 수 있으며, 그 절차는 어떻게 되나요?",
      "en": "Can group leaders visit or check the allocated accommodation in advance before WYD? Also, if the actual accommodation differs from the facilities and conditions announced in advance, can a change of accommodation be requested, and what is the procedure?",
      "es": "¿Pueden los líderes de grupo visitar o comprobar con antelación el alojamiento asignado antes de la JMJ? Además, si el alojamiento real difiere de las instalaciones y condiciones anunciadas, ¿se puede pedir un cambio de alojamiento y cuál es el procedimiento?",
      "fr": "Les responsables de groupe peuvent-ils visiter ou vérifier à l'avance l'hébergement attribué avant les JMJ ? Par ailleurs, si l'hébergement réel diffère des équipements et conditions annoncés, peut-on demander un changement, et selon quelle procédure ?"
    },
    "a": {
      "ko": "대회 전 숙소가 배정되었다 하더라도, 숙소가 공공기관일 경우는 방문이 어려울 수 있습니다. 다만 체크인을 할 본당과 배정받은 숙소의 위치 정도는 확인하실 수는 있습니다. 하지만 역대 대회들을 보았을 때 숙소는 워낙 많은 변수가 존재하기에, 배정 이후에도 발생할 수 있는 여러 상황을 염두에 두시면 좋겠습니다. 숙소 변경을 요청할 수는 있으나, 사유 검토 후 필요시에만 변경 절차가 진행될 예정입니다.",
      "en": "Even if accommodation is allocated before the event, visiting may be difficult if it is a public facility. However, you can check the location of the parish where you will check in and of your allocated accommodation. Judging from past events, there are so many variables with accommodation that we recommend keeping in mind the various situations that may arise even after allocation. You can request a change of accommodation, but the change procedure will go ahead only if necessary after the reason has been reviewed.",
      "es": "Aunque el alojamiento se asigne antes del evento, puede ser difícil visitarlo si es una instalación pública. No obstante, pueden comprobar la ubicación de la parroquia donde se acreditarán y del alojamiento asignado. A juzgar por ediciones anteriores, hay muchísimas variables con el alojamiento, por lo que les recomendamos tener presentes las diversas situaciones que pueden surgir incluso después de la asignación. Pueden pedir un cambio de alojamiento, pero el procedimiento de cambio solo se llevará a cabo si es necesario, tras revisar el motivo.",
      "fr": "Même si l'hébergement est attribué avant l'événement, une visite peut être difficile s'il s'agit d'un équipement public. Vous pourrez toutefois vérifier l'emplacement de la paroisse où vous serez accrédités et de l'hébergement attribué. D'après les éditions précédentes, les variables liées à l'hébergement sont très nombreuses ; nous vous recommandons donc de garder à l'esprit les diverses situations qui peuvent survenir même après l'attribution. Vous pouvez demander un changement d'hébergement, mais la procédure de changement ne sera engagée que si nécessaire, après examen du motif."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q50",
    "no": "Q50",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "숙소는 서울 내에 배정되나요, 아니면 서울 외 지역에도 배정될 수 있나요? 주요 WYD 행사장 및 대중교통과의 접근성은 어떻게 고려되며, 각 그룹은 배정된 숙소와 담당 본당의 위치를 언제, 어떤 방식으로 안내받을 수 있나요?",
      "en": "Will accommodation be allocated within Seoul, or can it also be allocated outside Seoul? How is access to the main WYD venues and public transport taken into account, and when and how will each group be informed of the location of its allocated accommodation and responsible parish?",
      "es": "¿El alojamiento se asignará dentro de Seúl o también puede asignarse fuera de Seúl? ¿Cómo se tiene en cuenta el acceso a los principales lugares de la JMJ y al transporte público, y cuándo y cómo se informará a cada grupo de la ubicación del alojamiento asignado y de la parroquia responsable?",
      "fr": "L'hébergement sera-t-il attribué à Séoul, ou peut-il l'être aussi en dehors de Séoul ? Comment l'accès aux principaux sites des JMJ et aux transports en commun est-il pris en compte, et quand et comment chaque groupe sera-t-il informé de l'emplacement de son hébergement et de la paroisse responsable ?"
    },
    "a": {
      "ko": "대부분의 숙소는 서울 내부에 있을 것입니다. 다만 경우에 따라 외곽에 위치한 숙소도 있을 수 있습니다. 외곽일지라도 대중교통을 이용하여 서울로 이동이 가능한 장소로 고려할 예정입니다.\n배정 결과는 대회 약 1개월 전 시점 부터 순차적으로 받게되며, 메일로 발송될 예정입니다.",
      "en": "Most accommodation will be within Seoul. However, in some cases accommodation may be located on the outskirts. Even on the outskirts, we plan to choose places from which Seoul can be reached by public transport.\nAllocation results will be sent out in stages by email from about one month before the event.",
      "es": "La mayoría de los alojamientos estarán dentro de Seúl. No obstante, en algunos casos puede haber alojamientos en las afueras. Incluso en las afueras, se elegirán lugares desde los que se pueda llegar a Seúl en transporte público.\nLos resultados de la asignación se enviarán por correo electrónico de forma escalonada a partir de aproximadamente un mes antes del evento.",
      "fr": "La plupart des hébergements seront situés à Séoul. Toutefois, certains pourront se trouver en périphérie. Même en périphérie, nous choisirons des lieux d'où l'on peut rejoindre Séoul en transports en commun.\nLes résultats des attributions seront envoyés par courriel, progressivement, à partir d'environ un mois avant l'événement."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q51",
    "no": "Q51",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "요즘 여러 그룹들이 항공권 예매를 시작했는데, 1일부터 10일까지의 숙박을 요청할 수 있는지 문의가 많습니다. 가능하다면 어떻게 신청하나요?",
      "en": "Many groups have recently started booking flights, and we are receiving many questions about whether accommodation can be requested from the 1st to the 10th. If possible, how do we apply?",
      "es": "Muchos grupos han empezado a comprar los billetes de avión y recibimos muchas consultas sobre si se puede pedir alojamiento del 1 al 10. Si es posible, ¿cómo se solicita?",
      "fr": "Beaucoup de groupes ont commencé à réserver leurs billets d'avion, et nous recevons de nombreuses questions pour savoir s'il est possible de demander un hébergement du 1er au 10. Si c'est possible, comment faire la demande ?"
    },
    "a": {
      "ko": "패키지의 종류에 따라 일정이 상이합니다. 8/1-10까지의 투숙 가능 패키지는 없습니다. A1은 8/2-9 이며, A1+1은 8/1-8/9 또는 8/2-8/10 로 나뉘어져 있으니 참고 부탁드립니다.",
      "en": "The schedule differs depending on the type of package. There is no package that allows a stay from 1 to 10 August. Please note that A1 is 2–9 August, and A1+1 is divided into 1–9 August or 2–10 August.",
      "es": "El calendario varía según el tipo de paquete. No hay ningún paquete que permita alojarse del 1 al 10 de agosto. Tengan en cuenta que el A1 es del 2 al 9 de agosto, y el A1+1 se divide en del 1 al 9 de agosto o del 2 al 10 de agosto.",
      "fr": "Le calendrier varie selon le type de forfait. Aucun forfait ne permet de séjourner du 1er au 10 août. Pour information, le forfait A1 couvre du 2 au 9 août, et le forfait A1+1 est proposé soit du 1er au 9 août, soit du 2 au 10 août."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q52",
    "no": "Q52",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "숙소 및 담당 본당은 어떤 기준으로 배정되나요? 등록 시 숙박 옵션이나 특정 본당을 선택할 수 있는지, 또는 선착순으로 배정되는지도 궁금합니다.",
      "en": "On what basis are accommodation and the responsible parish allocated? We would also like to know whether we can choose an accommodation option or a specific parish when registering, or whether allocation is on a first-come, first-served basis.",
      "es": "¿Con qué criterio se asignan el alojamiento y la parroquia responsable? También quisiéramos saber si al inscribirnos podemos elegir una opción de alojamiento o una parroquia concreta, o si la asignación se hace por orden de llegada.",
      "fr": "Selon quels critères l'hébergement et la paroisse responsable sont-ils attribués ? Nous aimerions aussi savoir si l'on peut choisir une option d'hébergement ou une paroisse précise lors de l'inscription, ou si l'attribution se fait selon l'ordre d'arrivée."
    },
    "a": {
      "ko": "순례자들은 사전에 특정 숙소 유형 및 본당을 선택할 수 없으며, 숙소 배정은 전반적인 운영 상황과 수용 인원에 따라 결정됩니다. 숙소 배정은 선착순으로 진행되지 않습니다. 다만, 등록 및 결제를 모두 완료한 그룹의 경우, 배정을 위한 정보 확인 및 절차가 원활하게 진행될 수 있으므로 가능한 한 빠른 시일 내에 등록과 결제를 완료해 주시기를 권장드립니다.",
      "en": "Pilgrims cannot choose a specific type of accommodation or parish in advance; accommodation allocation is decided according to the overall operating situation and capacity. Accommodation is not allocated on a first-come, first-served basis. However, for groups that have completed both registration and payment, the information checks and procedures for allocation can proceed smoothly, so we recommend completing registration and payment as soon as possible.",
      "es": "Los peregrinos no pueden elegir de antemano un tipo de alojamiento ni una parroquia concreta; la asignación del alojamiento se decide según la situación general de funcionamiento y la capacidad. El alojamiento no se asigna por orden de llegada. No obstante, en el caso de los grupos que han completado tanto la inscripción como el pago, la verificación de datos y los trámites para la asignación pueden realizarse con fluidez, por lo que les recomendamos completar la inscripción y el pago lo antes posible.",
      "fr": "Les pèlerins ne peuvent pas choisir à l'avance un type d'hébergement ou une paroisse précise ; l'attribution de l'hébergement est décidée selon la situation générale et les capacités d'accueil. L'hébergement n'est pas attribué selon l'ordre d'arrivée. Toutefois, pour les groupes qui ont finalisé à la fois l'inscription et le paiement, la vérification des informations et les démarches d'attribution peuvent se dérouler sans difficulté ; nous vous recommandons donc de finaliser l'inscription et le paiement le plus tôt possible."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q53",
    "no": "Q53",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "두 개의 다른 그룹도 요청 시 같은 숙소에 배정받을 수 있는지 궁금합니다.",
      "en": "We would like to know whether two different groups can be allocated to the same accommodation on request.",
      "es": "Quisiéramos saber si dos grupos distintos pueden ser asignados al mismo alojamiento si lo solicitan.",
      "fr": "Nous aimerions savoir si deux groupes différents peuvent être affectés au même hébergement s'ils le demandent."
    },
    "a": {
      "ko": "그룹이 다를 경우, 동일 숙소 배정이 어려울 수 있으니 양해 부탁드립니다. 등록 후 해당 요청 사항을 조직위원회로 전달하여 주시면 도움드릴 수 있도록 노력하겠습니다.",
      "en": "Please understand that it may be difficult to allocate different groups to the same accommodation. If you pass on this request to the Local Organising Committee after registering, we will do our best to help.",
      "es": "Les pedimos comprensión, ya que puede ser difícil asignar el mismo alojamiento a grupos distintos. Si después de inscribirse transmiten esta solicitud al Comité Organizador Local, haremos todo lo posible por ayudarles.",
      "fr": "Nous vous remercions de votre compréhension : il peut être difficile d'affecter des groupes différents au même hébergement. Si vous transmettez cette demande au Comité d'organisation local après votre inscription, nous ferons de notre mieux pour vous aider."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q54",
    "no": "Q54",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희 그룹에는 영어, 프랑스어, 스페인어를 사용하는 참가자들이 있습니다. 그룹 참가자들이 언어별로 나뉘게 되나요, 아니면 숙소는 함께 지낼 수 있나요?",
      "en": "Our group has participants who speak English, French and Spanish. Will the group's participants be divided by language, or can they stay in the same accommodation?",
      "es": "Nuestro grupo tiene participantes que hablan inglés, francés y español. ¿Se dividirá a los participantes del grupo por idiomas o podrán alojarse juntos?",
      "fr": "Notre groupe compte des participants anglophones, francophones et hispanophones. Les participants seront-ils répartis par langue, ou pourront-ils loger ensemble ?"
    },
    "a": {
      "ko": "동일 그룹은 동일 숙소에 배정하는 것을 원칙으로 합니다. 같은 숙소에 배정되시길 원하신다면 등록시 같은 그룹으로 등록을 부탁드립니다. 다만, 운영 상황과 수용 인원에 따라 불가피하게 동일 그룹이어도 다른 숙소에 배정될 수 있습니다. 이 경우는 최대한 인접한 숙소로 배정됩니다.",
      "en": "As a rule, the same group is allocated to the same accommodation. If you wish to be allocated to the same accommodation, please register as the same group. However, depending on the operating situation and capacity, members of the same group may unavoidably be allocated to different accommodation. In this case, they will be allocated to accommodation as close together as possible.",
      "es": "Por norma general, un mismo grupo se asigna a un mismo alojamiento. Si desean que se les asigne el mismo alojamiento, inscríbanse como un mismo grupo. No obstante, según la situación de funcionamiento y la capacidad, los miembros de un mismo grupo pueden ser asignados, inevitablemente, a alojamientos distintos. En ese caso, se les asignarán alojamientos lo más cercanos posible.",
      "fr": "En règle générale, un même groupe est affecté au même hébergement. Si vous souhaitez être affectés au même hébergement, inscrivez-vous comme un même groupe. Toutefois, selon la situation et les capacités d'accueil, les membres d'un même groupe peuvent, inévitablement, être affectés à des hébergements différents. Dans ce cas, ils seront affectés à des hébergements aussi proches que possible."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q55",
    "no": "Q55",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "행사 후에도 홈스테이 숙소가 여전히 이용 가능한가요, 아니면 주로 성당이나 체육관 같은 시설에서 숙박하게 되나요? 교통편 제약으로 100명 그룹을 2~3개 항공편으로 나눠야 할 수도 있는데, 이 경우 일부는 8월 2일 이전에 도착하게 됩니다. 이럴 때 절차는 어떻게 되나요? 그룹에 배정된 숙소로 그대로 받아들여지나요?",
      "en": "Will homestay accommodation still be available after the event, or will we mostly stay in facilities such as churches or gyms? Because of transport constraints, we may have to split a group of 100 across two or three flights, in which case some will arrive before 2 August. What is the procedure in this case? Will they be accepted at the accommodation allocated to the group as it is?",
      "es": "¿Seguirá habiendo alojamiento en familias después del evento, o nos alojaremos principalmente en instalaciones como iglesias o polideportivos? Por limitaciones de transporte, puede que tengamos que dividir un grupo de 100 personas en dos o tres vuelos, en cuyo caso algunos llegarán antes del 2 de agosto. ¿Cuál es el procedimiento en ese caso? ¿Se les acogerá tal cual en el alojamiento asignado al grupo?",
      "fr": "L'hébergement en famille sera-t-il encore disponible après l'événement, ou logerons-nous principalement dans des lieux comme des églises ou des gymnases ? En raison de contraintes de transport, nous devrons peut-être répartir un groupe de 100 personnes sur deux ou trois vols, et certains arriveront alors avant le 2 août. Quelle est la procédure dans ce cas ? Seront-ils accueillis tels quels dans l'hébergement attribué au groupe ?"
    },
    "a": {
      "ko": "선택하신 패키지에 따라 투숙일정이 정해집니다.\n패키지에 포함되지 않은 일정에 숙박이 필요하신 경우에는 자체적으로 숙소를 마련하셔야 합니다.",
      "en": "The dates of your stay are determined by the package you choose.\nIf you need accommodation on dates not included in your package, you must arrange it yourselves.",
      "es": "Las fechas de alojamiento se determinan según el paquete elegido.\nSi necesitan alojamiento en fechas no incluidas en su paquete, deben organizarlo por su cuenta.",
      "fr": "Les dates d'hébergement sont déterminées par le forfait choisi.\nSi vous avez besoin d'un hébergement à des dates non couvertes par votre forfait, vous devez l'organiser vous-mêmes."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q56",
    "no": "Q56",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "8/2 월요일 저녁에는 어디에 묵나요? 교구에서 묵나요, 아니면 이미 서울에 있나요?",
      "en": "Where do we stay on the evening of Monday 2 August? Do we stay in the diocese, or are we already in Seoul?",
      "es": "¿Dónde nos alojamos la noche del lunes 2 de agosto? ¿En la diócesis o ya en Seúl?",
      "fr": "Où logeons-nous le soir du lundi 2 août ? Dans le diocèse, ou déjà à Séoul ?"
    },
    "a": {
      "ko": "선택하신 패키지의 일정에 따라 숙박 일정이 정해집니다.\n예를 들어 A1패키지는 8/2-9 일정이므로 8/2에는 서울 내의 장소에서 투숙하시게 됩니다.",
      "en": "Your accommodation dates are determined by the schedule of the package you choose.\nFor example, the A1 package covers 2–9 August, so on 2 August you will stay at a location in Seoul.",
      "es": "Las fechas de alojamiento se determinan según el calendario del paquete elegido.\nPor ejemplo, el paquete A1 abarca del 2 al 9 de agosto, por lo que el 2 de agosto se alojarán en un lugar de Seúl.",
      "fr": "Les dates d'hébergement sont déterminées par le calendrier du forfait choisi.\nPar exemple, le forfait A1 couvre du 2 au 9 août ; le 2 août, vous logerez donc dans un lieu situé à Séoul."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q57",
    "no": "Q57",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "폭염으로 인한 열사병·탈진·질병 등으로 낮 시간에 휴식이 필요한 순례자는 숙소나 별도의 휴식 공간을 이용할 수 있나요? 또한 폐막 미사 이후에도 필요한 경우 숙소를 이용할 수 있나요?",
      "en": "Can pilgrims who need to rest during the day because of heatstroke, exhaustion or illness caused by a heatwave use their accommodation or a separate rest area? Also, can the accommodation be used after the closing Mass if necessary?",
      "es": "¿Pueden los peregrinos que necesiten descansar durante el día por golpe de calor, agotamiento o enfermedad debidos a una ola de calor usar el alojamiento o un espacio de descanso aparte? Además, ¿se puede usar el alojamiento después de la Misa de clausura si es necesario?",
      "fr": "Les pèlerins qui ont besoin de se reposer pendant la journée à cause d'un coup de chaleur, d'un épuisement ou d'une maladie liés à la canicule peuvent-ils utiliser leur hébergement ou un espace de repos séparé ? Par ailleurs, peut-on utiliser l'hébergement après la messe de clôture si nécessaire ?"
    },
    "a": {
      "ko": "본대회 기간 동안 폭염이나 건강 이상으로 낮 시간에 휴식이 필요한 경우, 지구위원회에서 각 지구별로 지정한 거점 본당을 휴식처로 이용하실 수 있습니다. 순례자들은 해당 거점 본당으로 이동하여 휴식을 취하실 수 있습니다.\n또한, 폐막미사 이후에도 머물 수 있는 옵션이 포함된 패키지를 선택하신 경우 숙소를 이용하실 수 있습니다.",
      "en": "During the main event, if you need to rest during the day because of a heatwave or health problems, you can use the hub parishes designated by the district committees in each district as rest areas. Pilgrims can go to these hub parishes to rest.\nAlso, if you have chosen a package that includes the option of staying after the closing Mass, you can use your accommodation.",
      "es": "Durante el evento principal, si necesitan descansar durante el día por la ola de calor o por problemas de salud, pueden usar como lugar de descanso las parroquias de referencia designadas por los comités de zona en cada zona. Los peregrinos pueden acudir a esas parroquias de referencia para descansar.\nAdemás, si han elegido un paquete que incluye la opción de quedarse después de la Misa de clausura, pueden usar su alojamiento.",
      "fr": "Pendant l'événement principal, si vous avez besoin de vous reposer pendant la journée à cause de la canicule ou d'un problème de santé, vous pouvez utiliser comme lieu de repos les paroisses relais désignées par les comités de secteur dans chaque secteur. Les pèlerins peuvent se rendre dans ces paroisses relais pour se reposer.\nPar ailleurs, si vous avez choisi un forfait comprenant l'option de rester après la messe de clôture, vous pouvez utiliser votre hébergement."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q58",
    "no": "Q58",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "패키지 관련하여, 저희 그룹이 숙박과 교통 없이 참가할 수 있나요? 가능하다면 비용은 얼마인가요? 대부분의 패키지에 교통이 포함되어 있는데, 이러한 서비스가 제외된 옵션이 있는지 궁금합니다. 감사합니다.",
      "en": "Regarding packages, can our group take part without accommodation and transport? If so, how much does it cost? Most packages include transport, so we wonder whether there is an option without these services. Thank you.",
      "es": "En cuanto a los paquetes, ¿puede nuestro grupo participar sin alojamiento ni transporte? Si es posible, ¿cuánto cuesta? La mayoría de los paquetes incluyen transporte, así que nos preguntamos si existe una opción sin estos servicios. Gracias.",
      "fr": "Concernant les forfaits, notre groupe peut-il participer sans hébergement ni transport ? Si oui, combien cela coûte-t-il ? La plupart des forfaits incluent le transport ; existe-t-il une option sans ces services ? Merci."
    },
    "a": {
      "ko": "모든 패키지에는 교통이 포함되어 있기에 교통 제외는 불가하니 양해 부탁드립니다. 숙박이 제외된 패키지는 있으니 해당 패키지를 이용 부탁드립니다.",
      "en": "Please understand that transport is included in all packages and cannot be excluded. There are packages without accommodation, so please use one of those.",
      "es": "Les pedimos comprensión: el transporte está incluido en todos los paquetes y no puede excluirse. Sí hay paquetes sin alojamiento, así que les pedimos que utilicen uno de ellos.",
      "fr": "Nous vous remercions de votre compréhension : le transport est inclus dans tous les forfaits et ne peut pas être retiré. Il existe en revanche des forfaits sans hébergement ; nous vous invitons à choisir l'un d'eux."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "subNo": "b"
  },
  {
    "id": "Q59",
    "no": "Q59",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "8월 7일 토요일의 식사는 도시락(팩박스)으로 제공되나요, 아니면 철야기도 장소로 가기 전에 카드로 결제해야 하나요?",
      "en": "Will meals on Saturday 7 August be provided as packed meals (meal boxes), or do we need to pay by card before going to the vigil venue?",
      "es": "¿Las comidas del sábado 7 de agosto se darán en forma de comida envasada (caja de comida) o hay que pagarlas con la tarjeta antes de ir al lugar de la Vigilia?",
      "fr": "Les repas du samedi 7 août seront-ils fournis sous forme de repas emballés (boîtes-repas), ou faut-il les payer avec la carte avant de se rendre sur le lieu de la veillée ?"
    },
    "a": {
      "ko": "패키지별 식사 구성에 따라, 밤샘기도·폐막미사 기간에는 밀박스가 제공됩니다. 밀박스는 8월 7일 중식·석식과 8월 8일 조식·중식 등 총 4끼로 구성됩니다. 밀박스가 포함된 순례자 패키지는 해당 4끼를 선불카드(Prepaid meal card)로 별도 결제하지 않고 밀박스로 제공받습니다. 구체적인 배부 시간·장소 등 현장 운영방안은 추후 안내할 예정입니다.",
      "en": "In line with the meal composition of each package, meal boxes will be provided during the Vigil and the closing Mass. The meal boxes cover four meals in total: lunch and dinner on 7 August and breakfast and lunch on 8 August. Pilgrim packages that include meal boxes receive these four meals as meal boxes, without paying separately with the prepaid meal card. On-site arrangements such as the exact distribution times and locations will be announced later.",
      "es": "De acuerdo con la composición de las comidas de cada paquete, durante la Vigilia y la Misa de clausura se entregarán cajas de comida. Las cajas de comida cubren cuatro comidas en total: almuerzo y cena del 7 de agosto y desayuno y almuerzo del 8 de agosto. Los paquetes del peregrino que incluyen cajas de comida reciben estas cuatro comidas en forma de caja, sin pagarlas aparte con la tarjeta prepago de comidas (Prepaid meal card). Los detalles de la organización sobre el terreno, como los horarios y lugares exactos de reparto, se comunicarán más adelante.",
      "fr": "Selon la composition des repas de chaque forfait, des boîtes-repas seront fournies pendant la veillée et la messe de clôture. Elles couvrent quatre repas au total : le déjeuner et le dîner du 7 août, le petit-déjeuner et le déjeuner du 8 août. Les forfaits du pèlerin qui incluent les boîtes-repas reçoivent ces quatre repas sous forme de boîtes, sans les payer séparément avec la carte repas prépayée (Prepaid meal card). Les modalités pratiques sur place, comme les horaires et lieux précis de distribution, seront communiquées ultérieurement."
    },
    "sub": {
      "ko": "식사",
      "en": "Meals",
      "es": "Comidas",
      "fr": "Repas"
    },
    "subNo": "c"
  },
  {
    "id": "Q60",
    "no": "Q60",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "음식 알레르기, 글루텐 불내증, 채식 등 특별한 식이 요구가 있는 순례자를 위한 식사 옵션은 어떻게 제공되나요? 도시락과 선불카드(Prepaid meal card) 이용 매장에서 땅콩, 소고기, 해산물, 새우, 채식 알레르기 유발 성분 및 식재료 정보를 확인할 수 있나요? 또한 알레르기 정보는 반드시 앱을 통해서만 등록해야 하나요, 아니면 다른 방법도 제공되나요?",
      "en": "How will meal options be provided for pilgrims with special dietary needs such as food allergies, gluten intolerance or vegetarianism? Will information on allergens and ingredients such as peanuts, beef, seafood, shrimp and vegetarian options be available for the packed meals and at the outlets that accept the prepaid meal card? Also, must allergy information be registered only through the app, or are other methods available?",
      "es": "¿Cómo se ofrecerán opciones de comida para peregrinos con necesidades alimentarias especiales, como alergias, intolerancia al gluten o dieta vegetariana? ¿Se podrá consultar en las comidas envasadas y en los establecimientos que aceptan la tarjeta prepago de comidas la información sobre alérgenos e ingredientes, como cacahuetes, carne de vacuno, marisco, gambas u opciones vegetarianas? Además, ¿la información sobre alergias debe registrarse solo a través de la app o hay otras vías?",
      "fr": "Comment les options de repas seront-elles proposées aux pèlerins ayant des besoins alimentaires particuliers, comme des allergies, une intolérance au gluten ou un régime végétarien ? Pourra-t-on consulter, pour les repas emballés et dans les établissements acceptant la carte repas prépayée, les informations sur les allergènes et ingrédients comme les arachides, le bœuf, les fruits de mer, les crevettes ou les options végétariennes ? Par ailleurs, les informations sur les allergies doivent-elles être enregistrées uniquement via l'application, ou d'autres moyens sont-ils proposés ?"
    },
    "a": {
      "ko": "식사에 대해서는 글루텐프리·비건 등 특수식 제공 여부와 식품정보 표시 방안을 검토하고 있습니다. 선불카드(Prepaid meal card) 이용 매장의 알레르겐·원재료 등 식품정보 제공 여부와 제공 방식도 함께 검토 중입니다. 특수식의 제공 범위와 신청 방법, 변경 가능 기한 등은 세부 운영계획이 확정되는 대로 안내할 예정입니다.",
      "en": "Regarding meals, we are reviewing whether to provide special meals such as gluten-free and vegan options and how to display food information. We are also reviewing whether and how food information such as allergens and ingredients will be provided at the outlets that accept the prepaid meal card. The scope of special meals, how to apply for them and the deadline for changes will be announced as soon as the detailed operating plan is confirmed.",
      "es": "En cuanto a las comidas, estamos estudiando si se ofrecerán menús especiales, como sin gluten o veganos, y cómo mostrar la información alimentaria. También estamos estudiando si se proporcionará, y de qué manera, información alimentaria como alérgenos e ingredientes en los establecimientos que aceptan la tarjeta prepago de comidas. El alcance de los menús especiales, la forma de solicitarlos y el plazo para hacer cambios se comunicarán en cuanto se confirme el plan detallado de funcionamiento.",
      "fr": "Concernant les repas, nous étudions la possibilité de proposer des repas spéciaux, comme des options sans gluten ou véganes, ainsi que les modalités d'affichage des informations alimentaires. Nous étudions aussi si et comment des informations alimentaires, comme les allergènes et les ingrédients, seront fournies dans les établissements acceptant la carte repas prépayée. L'étendue des repas spéciaux, la manière de les demander et la date limite de modification seront communiquées dès que le plan de fonctionnement détaillé sera confirmé."
    },
    "sub": {
      "ko": "식사",
      "en": "Meals",
      "es": "Comidas",
      "fr": "Repas"
    },
    "subNo": "c"
  },
  {
    "id": "Q61",
    "no": "Q61",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin"
    },
    "topicNo": "1",
    "q": {
      "ko": "WYD 기간 중 다치거나 아픈 사람을 위한 특수 이동 지원(장애인/환자 이송)이 제공되나요?",
      "en": "Will special transport support (transport for people with disabilities or patients) be provided for people who are injured or ill during WYD?",
      "es": "¿Se ofrecerá un servicio especial de traslado (traslado de personas con discapacidad o enfermos) para quienes se lesionen o enfermen durante la JMJ?",
      "fr": "Un service de transport spécial (transport des personnes handicapées ou des malades) sera-t-il proposé aux personnes blessées ou malades pendant les JMJ ?"
    },
    "a": {
      "ko": "행사장 주변에 응급차가 상시 대기할 예정이며, 주변 병원과도 연계해서 의료서비스를 제공할 계획입니다.",
      "en": "Ambulances will be on standby around the event venues at all times, and we plan to provide medical services in cooperation with nearby hospitals.",
      "es": "Habrá ambulancias de guardia permanente en los alrededores de los lugares de los actos, y está previsto ofrecer servicios médicos en coordinación con los hospitales cercanos.",
      "fr": "Des ambulances seront en permanence en attente aux abords des sites, et nous prévoyons d'assurer les services médicaux en lien avec les hôpitaux voisins."
    },
    "sub": {
      "ko": "의료지원",
      "en": "Medical Support",
      "es": "Asistencia médica",
      "fr": "Assistance médicale"
    },
    "subNo": "d"
  },
  {
    "id": "Q62",
    "no": "Q62",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "세이프가딩 정책에 따르면 한국에서 미성년자 기준은 만 18세 7개월 미만인데, 저희 나라에서는 만 18세 미만입니다. 이 경우 보호자 동반 확인서(샤프론 레터)가 없을 것입니다.",
      "en": "According to the safeguarding policy, a minor in Korea is someone under 18 years and 7 months, but in our country it is someone under 18. In this case, there will be no chaperone letter.",
      "es": "Según la política de protección, en Corea es menor quien tiene menos de 18 años y 7 meses, pero en nuestro país lo es quien tiene menos de 18 años. En ese caso, no habrá carta de acompañante (chaperone letter).",
      "fr": "Selon la politique de protection, en Corée un mineur est une personne de moins de 18 ans et 7 mois, alors que dans notre pays c'est une personne de moins de 18 ans. Dans ce cas, il n'y aura pas de lettre d'accompagnement (chaperone letter)."
    },
    "a": {
      "ko": "국가별로 미성년자 기준이 다를 수 있으나, 서울 WYD 참가 시에는 ' 미성년자 및 취약 성인 보호 지침' 에 따른 기준이 적용됩니다. 해당 지침에서는 대한민국 청소년 보호법의 연령 기준을 적용하여, 2009년 1월 1일 또는 그 이후에 출생한 참가자를 미성년자로 분류하고 있습니다. 이는 성인 자격이 요구되는 순례자 그룹 대표 및 부대표, 봉사자, 미성년자 인솔자 등의 기준이 되기도 합니다. 따라서 자국에서 성인으로 인정되는 참가자라도 위 출생일 기준에 해당하면, 부모 또는 법적보호자가 동행하거나 이들로부터 위임 받은 성인 인솔자가 동행해야 합니다. 성인 인솔자는 미성년자 최대 10명당 1명 이상이 필요합니다. 위임받은 성인 인솔자는 해당 미성년자의 부모 또는 법적보호자로부터 서면 위임 동의서를 받아 대회 기간 내내 지참해야 합니다.",
      "en": "The age of majority may differ by country, but for participation in WYD Seoul, the criteria of the 'Guidelines for the Protection of Minors and Vulnerable Adults' apply. These guidelines apply the age criterion of the Korean Youth Protection Act and classify participants born on or after 1 January 2009 as minors. This is also the criterion for roles that require adult status, such as pilgrim group leaders and deputy leaders, volunteers and chaperones of minors. Therefore, even participants who are recognised as adults in their own country must be accompanied by a parent or legal guardian, or by an adult chaperone delegated by them, if they fall within the above date-of-birth criterion. At least one adult chaperone is required for every 10 minors. A delegated adult chaperone must obtain a written letter of delegation and consent from the minor's parent or legal guardian and carry it throughout the event.",
      "es": "La mayoría de edad puede variar según el país, pero para participar en la JMJ Seúl se aplican los criterios de las 'Directrices para la protección de menores y adultos vulnerables'. Estas directrices aplican el criterio de edad de la Ley coreana de protección de la juventud y consideran menores a los participantes nacidos el 1 de enero de 2009 o después. Este es también el criterio para los cargos que exigen ser adulto, como líderes y sublíderes de grupos de peregrinos, voluntarios y acompañantes de menores. Por tanto, aunque un participante sea considerado adulto en su país, si se encuentra dentro del criterio de fecha de nacimiento indicado, debe ir acompañado de su padre, madre o tutor legal, o de un acompañante adulto delegado por ellos. Se necesita al menos un acompañante adulto por cada 10 menores. El acompañante adulto delegado debe obtener una autorización escrita del padre, madre o tutor legal del menor y llevarla consigo durante todo el evento.",
      "fr": "L'âge de la majorité peut varier selon les pays, mais pour participer aux JMJ de Séoul, ce sont les critères des 'Directives pour la protection des mineurs et des adultes vulnérables' qui s'appliquent. Ces directives retiennent le critère d'âge de la loi coréenne sur la protection de la jeunesse et considèrent comme mineurs les participants nés le 1er janvier 2009 ou après. C'est aussi le critère retenu pour les fonctions exigeant la majorité, comme responsable et responsable adjoint de groupe de pèlerins, volontaire et accompagnateur de mineurs. Par conséquent, même un participant considéré comme majeur dans son pays doit, s'il relève du critère de date de naissance ci-dessus, être accompagné de ses parents ou de son tuteur légal, ou d'un accompagnateur adulte mandaté par eux. Au moins un accompagnateur adulte est requis pour 10 mineurs. L'accompagnateur adulte mandaté doit obtenir une autorisation écrite des parents ou du tuteur légal du mineur et la garder sur lui pendant toute la durée de l'événement."
    }
  },
  {
    "id": "Q63",
    "no": "Q63",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "대규모그룹(Macrogroup) 안에서 미성년자 등록은 어떻게 진행되나요? 미성년자를 먼저 등록하고 이후에 인솔자를 등록하나요, 아니면 특정 인솔자와 미성년자를 함께 등록하나요?",
      "en": "How is the registration of minors carried out within a Macrogroup? Are minors registered first and chaperones afterwards, or are specific chaperones and minors registered together?",
      "es": "¿Cómo se inscribe a los menores dentro de un Macrogrupo? ¿Se inscribe primero a los menores y después a los acompañantes, o se inscribe juntos a acompañantes y menores concretos?",
      "fr": "Comment se fait l'inscription des mineurs au sein d'un Macrogroupe ? Inscrit-on d'abord les mineurs puis les accompagnateurs, ou inscrit-on ensemble des accompagnateurs et des mineurs précis ?"
    },
    "a": {
      "ko": "등록 2단계에서 그룹의 전체 참가 인원과 미성년자의 수, 성별을 입력하게 됩니다. 대규모그룹(Macrogroup) 내에서도 미성년자와 인솔자의 등록 순서는 정해져 있지 않으며, 특정 인솔자와 미성년자를 연결하여 등록하는 별도의 절차는 없습니다. 다만, 서울 세계청년대회의 \" 미성년자 및 취약 성인 보호 지침\"에 따라 미성년자 최대 10명당 성인 인솔자 1명 이상이 동행해야 합니다. 위임받은 성인 인솔자는 해당 미성년자의 부모 또는 법적 보호자로부터 서면 위임 동의서를 받아 대회 기간 내내 지참해야 합니다. 또한 미성년자가 홈스테이에 배정되는 경우에는 같은 성별의 미성년자 2명당 같은 성별의 성인 인솔자 1명이 함께 해야 합니다. 따라서 위 보호 지침에 따른 인솔자 수와 성별 구성을 고려하여 미성년자와 인솔자의 등록을 진행해 주시기 바랍니다.",
      "en": "In step 2 of registration, you enter the total number of participants in the group and the number and gender of minors. Even within a Macrogroup, there is no set order for registering minors and chaperones, and there is no separate procedure for linking specific chaperones and minors in registration. However, under the WYD Seoul 'Guidelines for the Protection of Minors and Vulnerable Adults', at least one adult chaperone must accompany every 10 minors. A delegated adult chaperone must obtain a written letter of delegation and consent from the minor's parent or legal guardian and carry it throughout the event. In addition, when minors are allocated to a homestay, one adult chaperone of the same gender must accompany every two minors of the same gender. Therefore, please register minors and chaperones taking into account the number and gender composition of chaperones required by the above guidelines.",
      "es": "En el paso 2 de la inscripción se introducen el número total de participantes del grupo y el número y sexo de los menores. Tampoco dentro de un Macrogrupo hay un orden fijo para inscribir a menores y acompañantes, ni existe un procedimiento específico para vincular en la inscripción a acompañantes y menores concretos. No obstante, según las 'Directrices para la protección de menores y adultos vulnerables' de la JMJ Seúl, debe haber al menos un acompañante adulto por cada 10 menores. El acompañante adulto delegado debe obtener una autorización escrita del padre, madre o tutor legal del menor y llevarla consigo durante todo el evento. Además, cuando los menores se alojen en familias, debe acompañar un adulto del mismo sexo por cada dos menores del mismo sexo. Por tanto, inscriban a menores y acompañantes teniendo en cuenta el número y la composición por sexo de los acompañantes que exigen dichas directrices.",
      "fr": "À l'étape 2 de l'inscription, on saisit le nombre total de participants du groupe ainsi que le nombre et le sexe des mineurs. Au sein d'un Macrogroupe non plus, il n'y a pas d'ordre imposé pour inscrire mineurs et accompagnateurs, ni de procédure spécifique pour associer, lors de l'inscription, des accompagnateurs à des mineurs précis. Toutefois, selon les 'Directives pour la protection des mineurs et des adultes vulnérables' des JMJ de Séoul, au moins un accompagnateur adulte doit être présent pour 10 mineurs. L'accompagnateur adulte mandaté doit obtenir une autorisation écrite des parents ou du tuteur légal du mineur et la garder sur lui pendant toute la durée de l'événement. En outre, lorsque des mineurs sont hébergés en famille, un accompagnateur adulte du même sexe doit être présent pour deux mineurs du même sexe. Veuillez donc inscrire mineurs et accompagnateurs en tenant compte du nombre et de la répartition par sexe des accompagnateurs exigés par ces directives."
    }
  },
  {
    "id": "Q64",
    "no": "Q64",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "만 18~19세 청년에게 문제가 생겼을 경우, 한국 법이 적용되나요, 아니면 그 청년의 본국 법이 적용되나요?",
      "en": "If a problem arises with a young person aged 18–19, does Korean law apply, or the law of the young person's home country?",
      "es": "Si surge un problema con un joven de 18 o 19 años, ¿se aplica la ley coreana o la ley del país de origen del joven?",
      "fr": "Si un problème survient avec un jeune de 18 ou 19 ans, est-ce la loi coréenne qui s'applique, ou celle du pays d'origine du jeune ?"
    },
    "a": {
      "ko": "기본적으로 대한민국의 법이 적용되고, 각국 법령에 따라 본국의 법도 중복 적용될 수 있습니다.",
      "en": "Korean law applies by default, and depending on each country's legislation, the law of the home country may also apply.",
      "es": "Se aplica, en principio, la ley coreana y, según la legislación de cada país, también puede aplicarse la del país de origen.",
      "fr": "C'est en principe la loi coréenne qui s'applique, et selon la législation de chaque pays, la loi du pays d'origine peut aussi s'appliquer."
    }
  },
  {
    "id": "Q65",
    "no": "Q65",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "미성년 순례자의 참가를 위해 필요한 부모·법정대리인 동의서 및 인솔자(Chaperone) 지정 등 특별한 서류가 있나요? 사용할 수 있는 공식 양식(한국어/영어)을 제공할 예정인가요?",
      "en": "Are special documents required for minor pilgrims to take part, such as consent from parents or legal representatives and the appointment of a chaperone? Will official forms (in Korean/English) be provided?",
      "es": "¿Se necesitan documentos especiales para que participen los peregrinos menores, como el consentimiento de los padres o representantes legales y la designación de un acompañante (Chaperone)? ¿Se ofrecerán formularios oficiales (en coreano/inglés)?",
      "fr": "Des documents particuliers sont-ils nécessaires pour la participation des pèlerins mineurs, comme le consentement des parents ou représentants légaux et la désignation d'un accompagnateur (Chaperone) ? Des formulaires officiels (en coréen/anglais) seront-ils fournis ?"
    },
    "a": {
      "ko": "미성년 순례자의 참가를 위해서는 부모 또는 법적 보호자가 미성년자의 참가에 동의하며, 대회 기간 동안 성인 인솔자에게 미성년자의 보호를 맡긴다는 서면 동의서가 필요합니다. 미성년자의 인솔자는 대한민국 청소년 보호법에 따라 성인 (2008년 12월 31일 당일 또는 이전 출생자)에게 위임되어야 합니다. 미성년자 법적 보호자 동의서 서식은 등록시스템에서 6개 공식 언어로 제공 받을 수 있습니다.",
      "en": "For a minor pilgrim to take part, a written consent is required in which the parent or legal guardian agrees to the minor's participation and entrusts the protection of the minor to an adult chaperone during the event. Under the Korean Youth Protection Act, the chaperone of a minor must be an adult (born on or before 31 December 2008). The consent form for the minor's legal guardian is available in the registration system in the six official languages.",
      "es": "Para que un peregrino menor participe se necesita un consentimiento escrito en el que el padre, madre o tutor legal autoriza la participación del menor y confía su protección a un acompañante adulto durante el evento. Según la Ley coreana de protección de la juventud, el acompañante de un menor debe ser un adulto (nacido el 31 de diciembre de 2008 o antes). El formulario de consentimiento del tutor legal del menor está disponible en el sistema de inscripción en los seis idiomas oficiales.",
      "fr": "Pour qu'un pèlerin mineur participe, il faut un consentement écrit par lequel les parents ou le tuteur légal autorisent la participation du mineur et confient sa protection à un accompagnateur adulte pendant l'événement. Selon la loi coréenne sur la protection de la jeunesse, l'accompagnateur d'un mineur doit être un adulte (né le 31 décembre 2008 ou avant). Le formulaire de consentement du tuteur légal du mineur est disponible dans le système d'inscription dans les six langues officielles."
    }
  },
  {
    "id": "Q66",
    "no": "Q66",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "미성년자가 인솔자·부모와 같은 숙소에 머물 수 있는지, 그룹에서 분리되어 별도 숙소에 배정되는지, 인솔자와 함께 머물 수 없는 경우 누가 미성년자를 책임지는지 알고 싶습니다.",
      "en": "We would like to know whether minors can stay in the same accommodation as their chaperones or parents, whether they will be separated from the group and allocated to separate accommodation, and who is responsible for minors if they cannot stay with their chaperones.",
      "es": "Quisiéramos saber si los menores pueden alojarse en el mismo lugar que sus acompañantes o padres, si se les separará del grupo y se les asignará otro alojamiento, y quién es responsable de los menores si no pueden alojarse con sus acompañantes.",
      "fr": "Nous aimerions savoir si les mineurs peuvent loger au même endroit que leurs accompagnateurs ou leurs parents, s'ils seront séparés du groupe et affectés à un autre hébergement, et qui est responsable des mineurs s'ils ne peuvent pas loger avec leurs accompagnateurs."
    },
    "a": {
      "ko": "미성년 순례자는 부모 또는 성인 인솔자(부모 또는 법적 보호자의 동의 하에 서면 위임서에 인솔자로 명시된 자)와 동일한 숙소에 함께 배정될 예정입니다. 부모가 아닌 성인 인솔자와 동행할 경우, 동일한 숙소에서 숙박 공간은 물리적으로 분리하여 운영할 계획입니다. 하지만, 미성년자 숙소 운영 방식은 각 국가의 미성년자보호 규정과 현장의 안전 상황에 따라 다양한 방안이 적용될 수 있으며, 모든 경우에 일률적으로 적용되는 단일 정책을 정하기는 어렵다는 점을 양해 부탁드립니다. 조직위원회는 2027 서울 WYD 미성년자보호지침을 제시하는 동시에, 각 국가 주교회의의 미성년자보호지침과 기준을 존중합니다. 다만, 해당 기준에 따라 어떠한 숙소 운영 방식을 선택할 것인지에 대한 결정과 그에 따른 책임은 각 순례자 그룹이 부담하게 됩니다.",
      "en": "Minor pilgrims will be allocated to the same accommodation as their parents or adult chaperone (the person named as chaperone in the written letter of delegation with the consent of the parent or legal guardian). When accompanied by an adult chaperone who is not a parent, we plan to physically separate the sleeping areas within the same accommodation. However, please understand that various approaches may be applied to accommodation for minors depending on each country's safeguarding regulations and the safety situation on site, and that it is difficult to set a single policy that applies uniformly to every case. The Local Organising Committee presents the WYD Seoul 2027 Safeguarding Guidelines for minors while respecting the safeguarding guidelines and standards of each country's Bishops' Conference. However, the decision on which accommodation arrangement to choose under those standards, and the responsibility that follows, rests with each pilgrim group.",
      "es": "Los peregrinos menores se asignarán al mismo alojamiento que sus padres o su acompañante adulto (la persona designada como acompañante en la autorización escrita con el consentimiento del padre, madre o tutor legal). Cuando vayan con un acompañante adulto que no sea su padre o madre, está previsto separar físicamente los espacios de descanso dentro del mismo alojamiento. No obstante, les pedimos que comprendan que el alojamiento de los menores puede organizarse de diversas maneras según las normas de protección de menores de cada país y la situación de seguridad sobre el terreno, y que es difícil establecer una política única que se aplique de manera uniforme en todos los casos. El Comité Organizador Local presenta las Directrices de protección de menores de la JMJ Seúl 2027 y, al mismo tiempo, respeta las directrices y normas de protección de menores de cada Conferencia Episcopal. Sin embargo, la decisión sobre qué modalidad de alojamiento elegir según dichas normas, y la responsabilidad que de ella se derive, corresponden a cada grupo de peregrinos.",
      "fr": "Les pèlerins mineurs seront affectés au même hébergement que leurs parents ou leur accompagnateur adulte (la personne désignée comme accompagnateur dans l'autorisation écrite avec le consentement des parents ou du tuteur légal). Lorsqu'ils sont accompagnés d'un adulte qui n'est pas un parent, nous prévoyons de séparer physiquement les espaces de couchage au sein du même hébergement. Nous vous prions toutefois de comprendre que l'hébergement des mineurs peut être organisé de diverses manières selon les règles de protection des mineurs de chaque pays et la situation de sécurité sur place, et qu'il est difficile de fixer une politique unique applicable uniformément à tous les cas. Le Comité d'organisation local présente les Directives de protection des mineurs des JMJ Séoul 2027 tout en respectant les directives et normes de protection des mineurs de chaque Conférence épiscopale. Toutefois, la décision quant au mode d'hébergement choisi selon ces normes, ainsi que la responsabilité qui en découle, incombent à chaque groupe de pèlerins."
    }
  },
  {
    "id": "Q67",
    "no": "Q67",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "스코틀랜드 세이프가딩 규정상 수도자·성직자 리더는 청년들과 같은 숙소에 머물 수 없습니다. 이들을 위한 별도 공간이 마련되나요? 화장실은 어떻게 되나요?",
      "en": "Under Scottish safeguarding rules, religious and clergy leaders may not stay in the same accommodation as young people. Will separate spaces be provided for them? What about toilets?",
      "es": "Según las normas de protección de Escocia, los líderes religiosos y clérigos no pueden alojarse en el mismo lugar que los jóvenes. ¿Se habilitarán espacios aparte para ellos? ¿Y los baños?",
      "fr": "Selon les règles de protection en Écosse, les responsables religieux et clercs ne peuvent pas loger au même endroit que les jeunes. Des espaces séparés seront-ils prévus pour eux ? Et les sanitaires ?"
    },
    "a": {
      "ko": "수도자·성직자 리더를 위한 별도 공간은 준비되어 있지 않습니다. 등록 후 별도로 요청 주시면 반영될 수 있도록 최선을 다하겠습니다. 다만, 숙소의 여건 상 제공이 어려울 수 있는 점 양해 부탁드립니다.",
      "en": "No separate spaces have been prepared for religious and clergy leaders. If you make a separate request after registering, we will do our best to accommodate it. However, please understand that this may be difficult to provide depending on the conditions of the accommodation.",
      "es": "No se han preparado espacios aparte para los líderes religiosos y clérigos. Si lo solicitan aparte después de inscribirse, haremos todo lo posible por atenderlo. No obstante, les pedimos comprensión, ya que puede ser difícil ofrecerlo según las condiciones del alojamiento.",
      "fr": "Aucun espace séparé n'est prévu pour les responsables religieux et clercs. Si vous en faites la demande après votre inscription, nous ferons de notre mieux pour y répondre. Nous vous remercions toutefois de votre compréhension, car cela peut être difficile selon les conditions de l'hébergement."
    }
  },
  {
    "id": "Q68",
    "no": "Q68",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "미성년자가 응급 상황으로 병원 진료 또는 입원이 필요한 경우, 그룹 리더가 동행하여 의료 상태 및 치료 정보를 제공받을 수 있나요? 또한 이를 위한 보호자 동의 및 의료정보 공유 관련 사항이 미성년자 등록 양식에 포함되나요?",
      "en": "If a minor needs hospital treatment or admission in an emergency, can the group leader accompany them and receive information about their medical condition and treatment? Also, are guardian consent and the sharing of medical information for this purpose included in the minor registration form?",
      "es": "Si un menor necesita atención hospitalaria o ingreso por una emergencia, ¿puede el líder del grupo acompañarlo y recibir información sobre su estado y tratamiento? Además, ¿se incluyen en el formulario de inscripción de menores el consentimiento del tutor y el intercambio de información médica para este fin?",
      "fr": "Si un mineur doit être soigné ou hospitalisé en urgence, le responsable du groupe peut-il l'accompagner et recevoir des informations sur son état et son traitement ? Par ailleurs, le consentement du tuteur et le partage d'informations médicales à cette fin figurent-ils dans le formulaire d'inscription des mineurs ?"
    },
    "a": {
      "ko": "현재 미성년자 등록 절차에는 성인 인솔자 또는 그룹 대표의 의료 관련 동의 및 의료정보 공유에 관한 별도 항목을 표기하고 있지 않습니다. 다만, 부모 또는 법적 보호자로부터 서면 위임 동의서를 받은 성인 인솔자는 미성년자에 대한 포괄적인 인솔 권리를 획득하는 것으로 볼 수 있습니다. 현재 검토·수정 중인 \"미성년자 및 취약 성인 보호 지침\"에 응급 진료 시 보호자 동의와 의료정보 공유에 관한 사항을 포함하는 방안을 고려하고 있으며, 세부 절차는 확정 후 안내드리겠습니다.",
      "en": "The current minor registration procedure does not include separate items on medical consent or the sharing of medical information for adult chaperones or group leaders. However, an adult chaperone who has received a written letter of delegation and consent from the parent or legal guardian can be regarded as having comprehensive chaperoning rights over the minor. We are considering including guardian consent for emergency treatment and the sharing of medical information in the 'Guidelines for the Protection of Minors and Vulnerable Adults', which are currently being reviewed and revised, and we will announce the detailed procedure once it is confirmed.",
      "es": "El procedimiento actual de inscripción de menores no incluye apartados específicos sobre el consentimiento médico ni el intercambio de información médica del acompañante adulto o del líder del grupo. No obstante, puede considerarse que un acompañante adulto que ha recibido una autorización escrita del padre, madre o tutor legal adquiere derechos generales de acompañamiento sobre el menor. Estamos estudiando incluir el consentimiento del tutor para la atención de urgencia y el intercambio de información médica en las 'Directrices para la protección de menores y adultos vulnerables', que se están revisando actualmente, y comunicaremos el procedimiento detallado una vez confirmado.",
      "fr": "La procédure actuelle d'inscription des mineurs ne comporte pas de rubrique spécifique sur le consentement médical ou le partage d'informations médicales pour l'accompagnateur adulte ou le responsable du groupe. On peut toutefois considérer qu'un accompagnateur adulte ayant reçu une autorisation écrite des parents ou du tuteur légal dispose d'un droit général d'accompagnement du mineur. Nous envisageons d'inclure le consentement du tuteur pour les soins d'urgence et le partage d'informations médicales dans les 'Directives pour la protection des mineurs et des adultes vulnérables', actuellement en cours de révision, et nous communiquerons la procédure détaillée une fois confirmée."
    }
  },
  {
    "id": "Q69",
    "no": "Q69",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "부모와 동행하는 미성년자 또는 어린이를 위한 특별 패키지 (가족 단위 특별 패키지) 가 있나요? 이 경우 숙박 배정은 어떻게 진행되나요 ? 또한 만 14세 미만도 부모 중 한 명이 동행하면 참가할 수 있나요 ?",
      "en": "Is there a special package for minors or children accompanied by their parents (a special family package)? If so, how is accommodation allocated? Also, can children under 14 take part if accompanied by one of their parents?",
      "es": "¿Hay un paquete especial para menores o niños que vayan con sus padres (paquete especial familiar)? En ese caso, ¿cómo se asigna el alojamiento? Además, ¿pueden participar los menores de 14 años si los acompaña uno de sus padres?",
      "fr": "Existe-t-il un forfait spécial pour les mineurs ou enfants accompagnés de leurs parents (forfait familial spécial) ? Dans ce cas, comment l'hébergement est-il attribué ? Par ailleurs, les enfants de moins de 14 ans peuvent-ils participer s'ils sont accompagnés de l'un de leurs parents ?"
    },
    "a": {
      "ko": "부모와 동행하는 미성년자 또는 어린이를 위한 별도의 가족 특별 패키지는 마련되어 있지 않습니다. 만 14세 미만의 어린이도 부모 중 한 명 이상 또는 법적 보호자가 위임한 성인 인솔자와 동행하여 참가할 수 있습니다. 다만, 조직위원회에서 제공하는 숙소가 포함된 패키지는 2013년 7월 31일 또는 그 이전에 출생한 참가자만 신청할 수 있습니다. 조직위원회가 제공하는 숙소는 학교·공공시설 등 공동 숙박시설과 홈스테이를 중심으로 운영됩니다. 이러한 숙박 환경과 대규모 순례자 수용 여건을 고려할 때, 만 14세 미만의 자녀와 함께 참가하는 가족은 숙소가 포함되지 않은 패키지로 등록하고, 가족에게 적합한 숙소를 직접 마련해 주시기 바랍니다.",
      "en": "There is no separate special family package for minors or children accompanied by their parents. Children under 14 can also take part if accompanied by at least one parent or by an adult chaperone delegated by their legal guardian. However, packages including accommodation provided by the Local Organising Committee can only be applied for by participants born on or before 31 July 2013. The accommodation provided by the Local Organising Committee consists mainly of shared facilities such as schools and public buildings, and homestays. Considering this accommodation environment and the conditions for hosting a large number of pilgrims, families taking part with children under 14 are asked to register for a package without accommodation and to arrange suitable accommodation for their family themselves.",
      "es": "No hay un paquete familiar especial para menores o niños que vayan con sus padres. Los niños menores de 14 años también pueden participar si los acompaña al menos uno de sus padres o un acompañante adulto delegado por su tutor legal. No obstante, los paquetes con alojamiento proporcionado por el Comité Organizador Local solo pueden solicitarlos los participantes nacidos el 31 de julio de 2013 o antes. El alojamiento que ofrece el Comité Organizador Local consiste principalmente en instalaciones compartidas, como escuelas y edificios públicos, y en alojamiento en familias. Teniendo en cuenta este tipo de alojamiento y las condiciones para acoger a un gran número de peregrinos, pedimos a las familias que participen con hijos menores de 14 años que se inscriban en un paquete sin alojamiento y organicen por su cuenta un alojamiento adecuado para la familia.",
      "fr": "Il n'existe pas de forfait familial spécial pour les mineurs ou enfants accompagnés de leurs parents. Les enfants de moins de 14 ans peuvent aussi participer s'ils sont accompagnés d'au moins un parent ou d'un accompagnateur adulte mandaté par leur tuteur légal. Toutefois, les forfaits incluant un hébergement fourni par le Comité d'organisation local ne sont accessibles qu'aux participants nés le 31 juillet 2013 ou avant. L'hébergement fourni par le Comité d'organisation local se compose principalement de lieux d'hébergement collectif, comme des écoles et des équipements publics, et d'hébergement en famille. Compte tenu de ce type d'hébergement et des conditions d'accueil d'un très grand nombre de pèlerins, nous demandons aux familles participant avec des enfants de moins de 14 ans de s'inscrire à un forfait sans hébergement et d'organiser elles-mêmes un hébergement adapté."
    }
  },
  {
    "id": "Q70",
    "no": "Q70",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding, Minors",
      "es": "Protección, menores",
      "fr": "Protection, mineurs"
    },
    "topicNo": "2",
    "q": {
      "ko": "개별 등록이 없는 그룹 등록 방식에서 각 순례자의 세이프가딩 정책 및 행동강령(Code of Conduct)에 대한 동의·서명은 어떻게 이루어지나요? 또한 등록 시스템 오픈 전에 관련 가이드라인을 사전 제공하고, 순례자를 위한 별도의 교육도 제공할 예정인가요?",
      "en": "In a group registration system without individual registration, how is each pilgrim's agreement to and signature of the safeguarding policy and Code of Conduct obtained? Also, will the relevant guidelines be provided before the registration system opens, and will separate training be offered for pilgrims?",
      "es": "En un sistema de inscripción por grupos sin inscripción individual, ¿cómo da cada peregrino su consentimiento y firma a la política de protección y al Código de Conducta (Code of Conduct)? Además, ¿se facilitarán las directrices antes de abrir el sistema de inscripción y se ofrecerá formación específica para los peregrinos?",
      "fr": "Dans un système d'inscription par groupe sans inscription individuelle, comment chaque pèlerin donne-t-il son accord et sa signature à la politique de protection et au Code de conduite (Code of Conduct) ? Par ailleurs, les directives seront-elles fournies avant l'ouverture du système d'inscription, et une formation spécifique sera-t-elle proposée aux pèlerins ?"
    },
    "a": {
      "ko": "등록시스템에서는 참가 유형에 따라 순례자 그룹 대표, 성직자 (사제·부제), 주교, 봉사자, 가톨릭문화박람회 참가자, 젊은이 축제 참가자 및 언론인 등이 세이프가딩 정책과 행동 강령(Code of Conduct) 에 동의·서명하도록 되어 있습니다. 개별 순례자도 순례자앱을 통해 해당 정책과 행동강령에 동의·서명해야 합니다. 현재 세이프가딩 지침서와 행동강령은 검토·수정 중이며, 최종본은 2027년 초 등록시스템, 공식 홈페이지 및 각국 주교회의 등을 통해 공유할 예정입니다. 또한 순례자가 세이프가딩 정책과 행동강령을 이해하고 준수할 수 있도록 교육 자료도 함께 제공할 예정입니다.",
      "en": "In the registration system, depending on the type of participation, pilgrim group leaders, clergy (priests and deacons), bishops, volunteers, Catholic Cultural Fair participants, Youth Festival participants, journalists and others are required to agree to and sign the safeguarding policy and Code of Conduct. Individual pilgrims must also agree to and sign the policy and Code of Conduct through the pilgrim app. The safeguarding guidelines and Code of Conduct are currently being reviewed and revised, and the final versions will be shared in early 2027 through the registration system, the official website and the Bishops' Conferences, among others. Training materials will also be provided to help pilgrims understand and comply with the safeguarding policy and Code of Conduct.",
      "es": "En el sistema de inscripción, según el tipo de participación, los líderes de grupos de peregrinos, el clero (sacerdotes y diáconos), los obispos, los voluntarios, los participantes de la Feria Cultural Católica, los participantes del Festival de la Juventud, los periodistas y otros deben dar su consentimiento y firmar la política de protección y el Código de Conducta. Los peregrinos individuales también deben dar su consentimiento y firmar la política y el Código de Conducta a través de la app del peregrino. Las directrices de protección y el Código de Conducta se están revisando actualmente, y las versiones definitivas se compartirán a principios de 2027 a través del sistema de inscripción, la web oficial y las Conferencias Episcopales, entre otros. También se ofrecerán materiales formativos para ayudar a los peregrinos a comprender y cumplir la política de protección y el Código de Conducta.",
      "fr": "Dans le système d'inscription, selon le type de participation, les responsables de groupe de pèlerins, le clergé (prêtres et diacres), les évêques, les volontaires, les participants à la Foire culturelle catholique, les participants au Festival de la jeunesse, les journalistes et d'autres doivent donner leur accord et signer la politique de protection et le Code de conduite. Les pèlerins individuels doivent aussi donner leur accord et signer la politique et le Code de conduite via l'application du pèlerin. Les directives de protection et le Code de conduite sont en cours de révision, et les versions définitives seront diffusées début 2027 via le système d'inscription, le site officiel et les Conférences épiscopales, entre autres. Des supports de formation seront également fournis pour aider les pèlerins à comprendre et respecter la politique de protection et le Code de conduite."
    }
  },
  {
    "id": "Q71",
    "no": "Q71",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "장애인",
      "en": "Persons with Disabilities",
      "es": "Personas con discapacidad",
      "fr": "Personnes en situation de handicap"
    },
    "topicNo": "3",
    "q": {
      "ko": "장애인 순례자는 장애 유형이나 지원 필요에 따라 별도 숙소가 배정되는지, 또한 한국 도착부터 출국까지 전담 인력의 지원을 받을 수 있는지 궁금합니다.",
      "en": "We would like to know whether pilgrims with disabilities are allocated separate accommodation depending on the type of disability or support needed, and whether they can receive support from dedicated staff from arrival in Korea until departure.",
      "es": "Quisiéramos saber si a los peregrinos con discapacidad se les asigna un alojamiento aparte según el tipo de discapacidad o el apoyo que necesiten, y si pueden recibir apoyo de personal dedicado desde la llegada a Corea hasta la salida.",
      "fr": "Nous aimerions savoir si les pèlerins en situation de handicap se voient attribuer un hébergement séparé selon le type de handicap ou le soutien nécessaire, et s'ils peuvent bénéficier de l'aide d'un personnel dédié de leur arrivée en Corée jusqu'à leur départ."
    },
    "a": {
      "ko": "장애인 순례자도 소속 교구와 함께 동행하는 것이 원칙이지만, 원한다면 별도 숙소에 배정할 수 있습니다. 또한 한국 도착부터 출국까지 그룹 내 동행인이 있으면 좋겠지만, 없다면 봉사자 배정도 고려하고 있습니다.",
      "en": "As a rule, pilgrims with disabilities also travel with their diocese, but they can be allocated to separate accommodation if they wish. It is preferable for them to have a companion within the group from arrival in Korea until departure, but if not, we are also considering assigning a volunteer.",
      "es": "En principio, los peregrinos con discapacidad también viajan con su diócesis, pero si lo desean se les puede asignar un alojamiento aparte. Además, sería deseable que tuvieran un acompañante dentro del grupo desde la llegada a Corea hasta la salida, pero si no lo tienen, también estamos considerando asignarles un voluntario.",
      "fr": "En principe, les pèlerins en situation de handicap voyagent aussi avec leur diocèse, mais ils peuvent être affectés à un hébergement séparé s'ils le souhaitent. Par ailleurs, il est préférable qu'ils aient un accompagnant au sein du groupe de leur arrivée en Corée jusqu'à leur départ ; à défaut, nous envisageons aussi de leur affecter un volontaire."
    }
  },
  {
    "id": "Q72",
    "no": "Q72",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "장애인",
      "en": "Persons with Disabilities",
      "es": "Personas con discapacidad",
      "fr": "Personnes en situation de handicap"
    },
    "topicNo": "3",
    "q": {
      "ko": "장애인 순례자는 소속 교구/주교회의 대표단등 소속 그룹과 함께 숙박하고 행사에 참여하면서 필요한 접근성·이동 지원을 받을 수 있나요?",
      "en": "Can pilgrims with disabilities stay and take part in events with their own group, such as their diocesan or Bishops' Conference delegation, while receiving the accessibility and mobility support they need?",
      "es": "¿Pueden los peregrinos con discapacidad alojarse y participar en los actos con su propio grupo, como la delegación de su diócesis o Conferencia Episcopal, recibiendo el apoyo de accesibilidad y movilidad que necesiten?",
      "fr": "Les pèlerins en situation de handicap peuvent-ils loger et participer aux célébrations avec leur propre groupe, comme la délégation de leur diocèse ou de leur Conférence épiscopale, tout en bénéficiant de l'aide à l'accessibilité et à la mobilité dont ils ont besoin ?"
    },
    "a": {
      "ko": "장애인 순례자는 소속 교구와 주교회의 대표단 등 소속 그룹과 함께 숙박하면서 필요한 접근성 이동 지원을 받을 수 있을 것입니다. 구체적인 지원 내용은 추후 앱이나 홈페이지를 통해 안내해 드리겠습니다.",
      "en": "Pilgrims with disabilities will be able to stay with their own group, such as their diocese or Bishops' Conference delegation, while receiving the accessibility and mobility support they need. Details of the support will be announced later through the app or the website.",
      "es": "Los peregrinos con discapacidad podrán alojarse con su propio grupo, como la delegación de su diócesis o Conferencia Episcopal, recibiendo el apoyo de accesibilidad y movilidad que necesiten. Los detalles del apoyo se comunicarán más adelante a través de la app o la web.",
      "fr": "Les pèlerins en situation de handicap pourront loger avec leur propre groupe, comme la délégation de leur diocèse ou de leur Conférence épiscopale, tout en bénéficiant de l'aide à l'accessibilité et à la mobilité dont ils ont besoin. Le détail de cette aide sera communiqué ultérieurement via l'application ou le site."
    }
  },
  {
    "id": "Q73",
    "no": "Q73",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "장애인",
      "en": "Persons with Disabilities",
      "es": "Personas con discapacidad",
      "fr": "Personnes en situation de handicap"
    },
    "topicNo": "3",
    "q": {
      "ko": "장애인 순례자의 등록 절차는 어떻게 되나요? 보호자 또는 동행인의 등록이 필수인지, 필요한 경우 장애인 순례자와 동행인을 어떻게 함께 등록하는지도 안내 부탁드립니다.",
      "en": "What is the registration procedure for pilgrims with disabilities? Please also let us know whether registering a guardian or companion is mandatory and, if necessary, how to register a pilgrim with a disability together with their companion.",
      "es": "¿Cuál es el procedimiento de inscripción de los peregrinos con discapacidad? Indíquennos también si es obligatorio inscribir a un tutor o acompañante y, en su caso, cómo inscribir juntos al peregrino con discapacidad y a su acompañante.",
      "fr": "Quelle est la procédure d'inscription des pèlerins en situation de handicap ? Merci de préciser aussi si l'inscription d'un tuteur ou d'un accompagnant est obligatoire et, le cas échéant, comment inscrire ensemble le pèlerin et son accompagnant."
    },
    "a": {
      "ko": "등록시에 장애인 순례자와 동행하는지의 여부를 묻는 체크 리스트 항목이 있습니다. 해당 한다면 그 곳에 체크해 주십시오. 동행인 등록이 필수는 아니며, 동행인이 있는 경우에는 동행인도 순례자로 등록 하시고 비고란에 동행인 이름과 연락처를 기입해 주시기 바랍니다.",
      "en": "During registration, there is a checklist item asking whether you are accompanying a pilgrim with a disability. If so, please tick it. Registering a companion is not mandatory; if there is a companion, please register the companion as a pilgrim too and enter the companion's name and contact details in the notes field.",
      "es": "Durante la inscripción hay una casilla en la lista de comprobación que pregunta si acompañan a un peregrino con discapacidad. Si es así, márquenla. No es obligatorio inscribir a un acompañante; si lo hay, inscríbanlo también como peregrino e indiquen su nombre y datos de contacto en el campo de observaciones.",
      "fr": "Lors de l'inscription, une case de la liste de contrôle demande si vous accompagnez un pèlerin en situation de handicap. Si c'est le cas, cochez-la. L'inscription d'un accompagnant n'est pas obligatoire ; s'il y en a un, inscrivez-le aussi comme pèlerin et indiquez son nom et ses coordonnées dans le champ remarques."
    }
  },
  {
    "id": "Q74",
    "no": "Q74",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자 키트와 카드 등은 어디에서 수령하나요? 숙박 포함 그룹과 숙박 미포함 그룹의 체크인 및 물품 수령 장소는 각각 어디인가요?",
      "en": "Where do we collect pilgrim kits, cards, etc.? Where are the check-in and collection points for groups with accommodation and groups without accommodation?",
      "es": "¿Dónde se recogen el kit del peregrino, las tarjetas, etc.? ¿Dónde se hacen la acreditación y la recogida de artículos para los grupos con alojamiento y para los grupos sin alojamiento?",
      "fr": "Où retire-t-on le kit du pèlerin, les cartes, etc. ? Où se font l'accréditation et le retrait des articles pour les groupes avec hébergement et pour les groupes sans hébergement ?"
    },
    "a": {
      "ko": "숙박이 포함된 패키지로 등록한 그룹은 배정된 본당에서 체크인하고 순례자 키트와 카드 등을 수령하게 됩니다. 해당 물품은 조직위원회에서 각 본당으로 사전에 배송할 예정입니다. 숙박이 포함되지 않은 패키지로 등록한 그룹은 순례자센터에서 체크인하고 순례자 키트와 카드 등을 수령하게 됩니다. 현장 등록 참가자도 순례자센터에서 등록 절차를 마친 후 해당 물품을 수령하실 수 있습니다.",
      "en": "Groups registered for a package with accommodation will check in at their allocated parish and collect their pilgrim kits, cards, etc. there. The Local Organising Committee will deliver these items to each parish in advance. Groups registered for a package without accommodation will check in at the Pilgrim Centre and collect their pilgrim kits, cards, etc. there. Participants registering on site can also collect these items at the Pilgrim Centre after completing the registration procedure.",
      "es": "Los grupos inscritos en un paquete con alojamiento se acreditarán en la parroquia asignada y allí recogerán el kit del peregrino, las tarjetas, etc. El Comité Organizador Local enviará estos artículos a cada parroquia con antelación. Los grupos inscritos en un paquete sin alojamiento se acreditarán en el Centro del Peregrino y allí recogerán el kit del peregrino, las tarjetas, etc. Los participantes que se inscriban presencialmente también pueden recoger estos artículos en el Centro del Peregrino después de completar la inscripción.",
      "fr": "Les groupes inscrits à un forfait avec hébergement seront accrédités dans la paroisse attribuée et y retireront le kit du pèlerin, les cartes, etc. Le Comité d'organisation local enverra ces articles à l'avance dans chaque paroisse. Les groupes inscrits à un forfait sans hébergement seront accrédités au Centre des pèlerins et y retireront le kit du pèlerin, les cartes, etc. Les participants inscrits sur place pourront aussi retirer ces articles au Centre des pèlerins après avoir finalisé leur inscription."
    },
    "sub": {
      "ko": "순례자 키트",
      "en": "Pilgrim Kit",
      "es": "Kit del peregrino",
      "fr": "Kit du pèlerin"
    },
    "subNo": "a"
  },
  {
    "id": "Q75",
    "no": "Q75",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자 키트에는 무엇이 들어있나요?",
      "en": "What is in the pilgrim kit?",
      "es": "¿Qué contiene el kit del peregrino?",
      "fr": "Que contient le kit du pèlerin ?"
    },
    "a": {
      "ko": "백팩(가방), T-shirts, 모자, 물통, 부채(접이식), 스포츠타올, 묵주(팔찌)가 포함될 예정이나, 일부 아이템은 바뀔 가능성 있습니다.",
      "en": "It is expected to include a backpack (bag), a T-shirt, a hat, a water bottle, a (folding) fan, a sports towel and a rosary (bracelet), but some items may change.",
      "es": "Está previsto que incluya una mochila, una camiseta, una gorra, una botella de agua, un abanico (plegable), una toalla deportiva y un rosario (pulsera), aunque algunos artículos podrían cambiar.",
      "fr": "Il devrait comprendre un sac à dos, un T-shirt, une casquette, une gourde, un éventail (pliable), une serviette de sport et un chapelet (bracelet), mais certains articles pourraient changer."
    },
    "sub": {
      "ko": "순례자 키트",
      "en": "Pilgrim Kit",
      "es": "Kit del peregrino",
      "fr": "Kit du pèlerin"
    },
    "subNo": "a"
  },
  {
    "id": "Q76",
    "no": "Q76",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "topicNo": "1",
    "q": {
      "ko": "스마트폰이 없는 순례자는 체크인 및 행사 참여에 필요한 정보와 서비스에 어떻게 접근하며, 식사카드 등 필요한 카드와 물품은 어떤 방식으로 제공받나요?",
      "en": "How can pilgrims without a smartphone access the information and services needed for check-in and participation in events, and how will they receive the cards and items they need, such as the meal card?",
      "es": "¿Cómo acceden los peregrinos sin smartphone a la información y los servicios necesarios para la acreditación y la participación en los actos, y cómo reciben las tarjetas y artículos necesarios, como la tarjeta de comidas?",
      "fr": "Comment les pèlerins sans smartphone accèdent-ils aux informations et services nécessaires à l'accréditation et à la participation aux célébrations, et comment reçoivent-ils les cartes et articles nécessaires, comme la carte repas ?"
    },
    "a": {
      "ko": "리더 그룹이 카드 활성 및 추가적인 정보 제공을 해야 합니다. 체크인 시 그룹리더가 대표해서 선불카드를 포함한 KIT를 제공받고 구성원들에게 배분합니다.",
      "en": "The group leaders must activate the cards and provide any additional information. At check-in, the group leader receives the kits, including the prepaid cards, on behalf of the group and distributes them to the members.",
      "es": "Los líderes del grupo deben activar las tarjetas y facilitar la información adicional. En la acreditación, el líder del grupo recibe en nombre del grupo los kits, incluidas las tarjetas prepago, y los reparte entre los miembros.",
      "fr": "Les responsables du groupe doivent activer les cartes et transmettre les informations complémentaires. Lors de l'accréditation, le responsable du groupe reçoit au nom du groupe les kits, y compris les cartes prépayées, et les distribue aux membres."
    },
    "sub": {
      "ko": "체크인 진행",
      "en": "Check-in Process",
      "es": "Proceso de acreditación",
      "fr": "Déroulement de l'accréditation"
    },
    "subNo": "b"
  },
  {
    "id": "Q77",
    "no": "Q77",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "topicNo": "1",
    "q": {
      "ko": "사제와 부제는 소속 그룹과 함께 체크인하나요, 아니면 별도의 지정 장소에서 체크인해야 하나요? 그룹 리더가 사제·부제를 대신하여 신분 확인 및 영대 등 성직자용 물품을 수령할 수 있는지, 또는 본인이 직접 방문해야 하는지 궁금합니다.",
      "en": "Do priests and deacons check in with their group, or must they check in at a separate designated place? We would like to know whether the group leader can verify the identity of priests and deacons and collect clergy items such as stoles on their behalf, or whether they must come in person.",
      "es": "¿Los sacerdotes y diáconos se acreditan con su grupo o deben hacerlo en un lugar designado aparte? Quisiéramos saber si el líder del grupo puede verificar la identidad de los sacerdotes y diáconos y recoger en su nombre los artículos para el clero, como la estola, o si deben acudir personalmente.",
      "fr": "Les prêtres et diacres sont-ils accrédités avec leur groupe, ou doivent-ils l'être dans un lieu désigné séparé ? Nous aimerions savoir si le responsable du groupe peut vérifier l'identité des prêtres et diacres et retirer à leur place les articles destinés au clergé, comme l'étole, ou s'ils doivent se présenter en personne."
    },
    "a": {
      "ko": "숙박이 포함된 패키지로 등록한 사제와 부제는 배정된 본당에서 소속 그룹과 함께 체크인할 수 있습니다. 다만, 체크인 담당자가 사제·부제의 신분을 직접 확인한 후 크리덴셜과 키트를 지급하므로, 그룹 리더가 신분 확인이나 해당 물품 수령을 대신할 수는 없습니다. 숙박이 포함되지 않은 패키지로 등록한 사제와 부제는 순례자센터 내 사제·부제 전용 체크인 장소를 직접 방문하여 신분 확인과 물품 수령을 진행해야 합니다.\n영대 및 제의는 폐막미사 시 본인이 직접 수령하는 방안을 검토 중이며, 구체적인 수령 절차는 확정 후 안내드리겠습니다.",
      "en": "Priests and deacons registered for a package with accommodation can check in with their group at the allocated parish. However, since the check-in staff verify the identity of priests and deacons in person before issuing credentials and kits, the group leader cannot verify their identity or collect these items on their behalf. Priests and deacons registered for a package without accommodation must go in person to the dedicated check-in point for priests and deacons at the Pilgrim Centre for identity verification and collection of items.\nWe are considering having stoles and vestments collected in person at the closing Mass, and the specific collection procedure will be announced once confirmed.",
      "es": "Los sacerdotes y diáconos inscritos en un paquete con alojamiento pueden acreditarse con su grupo en la parroquia asignada. No obstante, como el personal de acreditación verifica personalmente la identidad de los sacerdotes y diáconos antes de entregar las credenciales y los kits, el líder del grupo no puede verificar su identidad ni recoger esos artículos en su nombre. Los sacerdotes y diáconos inscritos en un paquete sin alojamiento deben acudir personalmente al punto de acreditación exclusivo para sacerdotes y diáconos del Centro del Peregrino para la verificación de identidad y la recogida de artículos.\nEstamos estudiando que las estolas y vestiduras se recojan personalmente en la Misa de clausura, y el procedimiento concreto de recogida se comunicará una vez confirmado.",
      "fr": "Les prêtres et diacres inscrits à un forfait avec hébergement peuvent être accrédités avec leur groupe dans la paroisse attribuée. Toutefois, le personnel d'accréditation vérifiant en personne l'identité des prêtres et diacres avant de remettre les badges et les kits, le responsable du groupe ne peut ni vérifier leur identité ni retirer ces articles à leur place. Les prêtres et diacres inscrits à un forfait sans hébergement doivent se rendre en personne au point d'accréditation réservé aux prêtres et diacres du Centre des pèlerins pour la vérification d'identité et le retrait des articles.\nNous envisageons que les étoles et vêtements liturgiques soient retirés en personne lors de la messe de clôture ; la procédure précise sera communiquée une fois confirmée."
    },
    "sub": {
      "ko": "체크인 진행",
      "en": "Check-in Process",
      "es": "Proceso de acreditación",
      "fr": "Déroulement de l'accréditation"
    },
    "subNo": "b"
  },
  {
    "id": "Q78",
    "no": "Q78",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "topicNo": "1",
    "q": {
      "ko": "숙박 미포함 그룹의 경우 그룹 리더가 전체 순례자를 동반하지 않고 대표로 순례자센터에서 체크인 및 물품 수령을 할 수 있나요?",
      "en": "For groups without accommodation, can the group leader check in and collect items at the Pilgrim Centre on behalf of the group without bringing all the pilgrims?",
      "es": "En el caso de los grupos sin alojamiento, ¿puede el líder del grupo acreditarse y recoger los artículos en el Centro del Peregrino en nombre del grupo sin llevar a todos los peregrinos?",
      "fr": "Pour les groupes sans hébergement, le responsable du groupe peut-il effectuer l'accréditation et le retrait des articles au Centre des pèlerins au nom du groupe, sans venir avec tous les pèlerins ?"
    },
    "a": {
      "ko": "가능합니다. 숙박이 포함되지 않은 패키지로 등록한 그룹은 전체 참가자가 동행하지 않아도 그룹 리더가 대표로 순례자센터를 방문하여 그룹 체크인과 물품 수령을 진행할 수 있습니다. 다만, 그룹에 소속된 사제와 부제는 순례자센터 내 사제·부제 전용 체크인 장소를 직접 방문하여 별도의 체크인 절차를 진행해야 합니다.",
      "en": "Yes. For groups registered for a package without accommodation, the group leader can visit the Pilgrim Centre on behalf of the group and carry out group check-in and item collection without all participants being present. However, priests and deacons in the group must go in person to the dedicated check-in point for priests and deacons at the Pilgrim Centre and complete a separate check-in procedure.",
      "es": "Sí. En los grupos inscritos en un paquete sin alojamiento, el líder del grupo puede acudir al Centro del Peregrino en representación del grupo y realizar la acreditación del grupo y la recogida de artículos sin que estén presentes todos los participantes. No obstante, los sacerdotes y diáconos del grupo deben acudir personalmente al punto de acreditación exclusivo para sacerdotes y diáconos del Centro del Peregrino y completar un procedimiento de acreditación aparte.",
      "fr": "Oui. Pour les groupes inscrits à un forfait sans hébergement, le responsable du groupe peut se rendre au Centre des pèlerins au nom du groupe et effectuer l'accréditation du groupe et le retrait des articles sans que tous les participants soient présents. Toutefois, les prêtres et diacres du groupe doivent se rendre en personne au point d'accréditation réservé aux prêtres et diacres du Centre des pèlerins et suivre une procédure d'accréditation distincte."
    },
    "sub": {
      "ko": "순례자 센터",
      "en": "Pilgrim Centre",
      "es": "Centro del Peregrino",
      "fr": "Centre des pèlerins"
    },
    "subNo": "c"
  },
  {
    "id": "Q79",
    "no": "Q79",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자센터는 하루 중 몇 시부터 몇 시까지 운영되나요?",
      "en": "What are the daily opening hours of the Pilgrim Centre?",
      "es": "¿Cuál es el horario diario del Centro del Peregrino?",
      "fr": "Quels sont les horaires quotidiens du Centre des pèlerins ?"
    },
    "a": {
      "ko": "현장등록과 비숙박 포함 패키지를 신청한 그룹의 체크인이 진행될 순례자센터는 단기 봉사자 체크인이 시작되는 7월 25일부터 8월 8일까지 운영 예정입니다. 보다 구체적인 운영 계획은 추후 공지 드리도록 하겠습니다.",
      "en": "The Pilgrim Centre, where on-site registration and check-in for groups with packages without accommodation will take place, is scheduled to operate from 25 July, when check-in for short-term volunteers begins, until 8 August. More detailed operating plans will be announced later.",
      "es": "El Centro del Peregrino, donde se harán la inscripción presencial y la acreditación de los grupos con paquetes sin alojamiento, tiene previsto funcionar desde el 25 de julio, cuando comienza la acreditación de los voluntarios de corta duración, hasta el 8 de agosto. El plan de funcionamiento más detallado se anunciará más adelante.",
      "fr": "Le Centre des pèlerins, où auront lieu l'inscription sur place et l'accréditation des groupes ayant un forfait sans hébergement, devrait fonctionner du 25 juillet, date du début de l'accréditation des volontaires de courte durée, jusqu'au 8 août. Le plan de fonctionnement plus détaillé sera annoncé ultérieurement."
    },
    "sub": {
      "ko": "순례자 센터",
      "en": "Pilgrim Centre",
      "es": "Centro del Peregrino",
      "fr": "Centre des pèlerins"
    },
    "subNo": "c"
  },
  {
    "id": "Q80",
    "no": "Q80",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자 앱 사용 등 원활한 인터넷 이용을 위해 WYD 기간 동안 숙소와 주요 행사장 등에 공공 Wi-Fi가 제공되나요? 대규모 순례자가 동시에 접속할 경우에도 안정적으로 이용할 수 있는 통신 환경이 마련되나요?",
      "en": "Will public Wi-Fi be provided at accommodation and main event venues during WYD for smooth internet use, such as using the pilgrim app? Will a communications environment be in place that remains stable even when large numbers of pilgrims connect at the same time?",
      "es": "¿Habrá wifi público en los alojamientos y en los principales lugares de los actos durante la JMJ para facilitar el uso de internet, por ejemplo de la app del peregrino? ¿Habrá una red de comunicaciones estable incluso cuando se conecten a la vez muchísimos peregrinos?",
      "fr": "Un Wi-Fi public sera-t-il disponible dans les hébergements et sur les principaux sites pendant les JMJ pour faciliter l'usage d'Internet, notamment de l'application du pèlerin ? Le réseau restera-t-il stable même lorsqu'un très grand nombre de pèlerins se connecteront en même temps ?"
    },
    "a": {
      "ko": "서울시내에는 많은 공공 와이파이가 설치되어 있습니다. 조직위원회는 순례자들의 편의와 안전을 위해 서울시 및 관련 기업, 기관들과 다양한 분야에서 협력 중입니다.",
      "en": "Many public Wi-Fi hotspots are installed throughout Seoul. The Local Organising Committee is cooperating in various areas with the Seoul Metropolitan Government and related companies and institutions for the convenience and safety of pilgrims.",
      "es": "En Seúl hay muchos puntos de wifi público instalados. El Comité Organizador Local está colaborando en diversos ámbitos con el Gobierno Metropolitano de Seúl y con empresas e instituciones relacionadas para la comodidad y seguridad de los peregrinos.",
      "fr": "De nombreux points d'accès Wi-Fi publics sont installés dans Séoul. Le Comité d'organisation local coopère dans divers domaines avec la Ville de Séoul et les entreprises et institutions concernées pour le confort et la sécurité des pèlerins."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q81",
    "no": "Q81",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "교황청이 승인한 순례길의 운영 방식과 참여 방법, 순례 확인서 또는 증명서 발급 절차도 안내받을 수 있나요?",
      "en": "Can we also be informed about how the pilgrimage routes approved by the Holy See operate, how to take part, and the procedure for issuing a pilgrimage confirmation or certificate?",
      "es": "¿Podemos recibir información sobre el funcionamiento de las rutas de peregrinación aprobadas por la Santa Sede, cómo participar y el procedimiento para obtener una confirmación o certificado de peregrinación?",
      "fr": "Pouvons-nous être informés du fonctionnement des chemins de pèlerinage approuvés par le Saint-Siège, de la manière d'y participer et de la procédure de délivrance d'une attestation ou d'un certificat de pèlerinage ?"
    },
    "a": {
      "ko": "교황청이 승인한 순례길은 별도의 신청 없이 언제든지 자유롭게 방문하여 걸으실 수 있습니다. 순례길은 총 24개소, 3개 코스(1코스 말씀의 길 / 2코스 생명의 길 / 3코스 일치의 길)로 구성되어 있습니다.\nWYD 한정 프로그램인 '박물관과 함께하는 순례길' 대상 박물관 3곳을 모두 방문하시면 완주 발급증을 다운받으실 수 있습니다. 박물관 운영 시간 내에 사전 신청없이 방문 가능하며, 스마트폰의 블루투스를 켜고 순례자앱을 실행한 상태로 박물관을 관람합니다. 박물관 내 인증 기기와 휴대폰이 연동되어 순례자앱에서 방문이 자동으로 인증됩니다. 지정 박물관 3곳을 모두 방문하면 방문 인증 완료 메시지가 표시됩니다. 화면 하단의 완주증 내려받기 버튼을 눌러 완주증을 발급받으실 수 있습니다.",
      "en": "The pilgrimage routes approved by the Holy See can be visited and walked freely at any time without a separate application. The routes consist of 24 sites in total and three courses (Course 1: The Way of the Word / Course 2: The Way of Life / Course 3: The Way of Unity).\nIf you visit all three museums included in the WYD-only programme 'Pilgrimage Route with Museums', you can download a certificate of completion. You can visit during museum opening hours without prior application; tour the museum with Bluetooth turned on on your smartphone and the pilgrim app running. The verification device in the museum connects with your phone, and your visit is verified automatically in the pilgrim app. When you have visited all three designated museums, a message confirming that verification is complete will appear. Tap the 'Download certificate of completion' button at the bottom of the screen to receive your certificate.",
      "es": "Las rutas de peregrinación aprobadas por la Santa Sede pueden visitarse y recorrerse libremente en cualquier momento, sin solicitud previa. Las rutas constan de 24 lugares y tres itinerarios (Itinerario 1: Camino de la Palabra / Itinerario 2: Camino de la Vida / Itinerario 3: Camino de la Unidad).\nSi visitan los tres museos del programa exclusivo de la JMJ 'Ruta de peregrinación con los museos', podrán descargar un certificado de finalización. Pueden visitarlos en horario de apertura sin solicitud previa; recorran el museo con el Bluetooth del smartphone activado y la app del peregrino abierta. El dispositivo de verificación del museo se conecta con el teléfono y la visita se verifica automáticamente en la app del peregrino. Al visitar los tres museos designados, aparecerá un mensaje de verificación completada. Pulsen el botón 'Descargar certificado de finalización' en la parte inferior de la pantalla para obtener el certificado.",
      "fr": "Les chemins de pèlerinage approuvés par le Saint-Siège peuvent être visités et parcourus librement à tout moment, sans demande préalable. Ils comptent 24 sites au total et trois parcours (Parcours 1 : Chemin de la Parole / Parcours 2 : Chemin de la Vie / Parcours 3 : Chemin de l'Unité).\nSi vous visitez les trois musées du programme propre aux JMJ 'Chemin de pèlerinage avec les musées', vous pourrez télécharger un certificat d'accomplissement. Vous pouvez les visiter aux heures d'ouverture sans réservation ; parcourez le musée avec le Bluetooth de votre smartphone activé et l'application du pèlerin ouverte. Le dispositif de validation du musée se connecte à votre téléphone et votre visite est automatiquement validée dans l'application. Une fois les trois musées désignés visités, un message de validation s'affichera. Appuyez sur le bouton 'Télécharger le certificat d'accomplissement' en bas de l'écran pour obtenir votre certificat."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q82",
    "no": "Q82",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "그룹 리더와 하위그룹 리더도 같은 앱 안에서 자신의 순례자 기능과 리더 기능을 함께 사용할 수 있는지 궁금합니다. 즉, 본인 화면과 리더용 화면을 서로 전환할 수 있는지에 관한 물음입니다.",
      "en": "We would like to know whether group leaders and subgroup leaders can use both their own pilgrim functions and their leader functions within the same app. In other words, can they switch between their own screen and the leader screen?",
      "es": "Quisiéramos saber si los líderes de grupo y de subgrupo pueden usar en la misma app tanto sus funciones de peregrino como las de líder. Es decir, ¿pueden alternar entre su propia pantalla y la pantalla de líder?",
      "fr": "Nous aimerions savoir si les responsables de groupe et de sous-groupe peuvent utiliser dans la même application à la fois leurs fonctions de pèlerin et leurs fonctions de responsable. Autrement dit, peuvent-ils basculer entre leur propre écran et l'écran de responsable ?"
    },
    "a": {
      "ko": "불가능합니다.\n웹회원 -> 참가인증(그룹코드) -> 리더인증이 일관성 있게 1개의 계정으로만 사용가능합니다. 만약 N개 계정을 사용하려면 웹회원부터 N개를 등록하셔야 합니다. 다만 오프라인에서의 앱 사용을 원활히 하기 위해 폰 로컬에 저장되어 있는 일부 정보는 제외될 수 있습니다. (관심, 완주증 등)",
      "en": "This is not possible.\nWeb membership -> participation verification (group code) -> leader verification can only be used consistently with one account. If you want to use N accounts, you need to register N web memberships from the start. However, some information stored locally on the phone to make offline use of the app smoother may be excluded (favourites, certificates of completion, etc.).",
      "es": "No es posible.\nEl registro web -> la verificación de participación (código de grupo) -> la verificación de líder solo pueden usarse de forma coherente con una única cuenta. Si quieren usar N cuentas, deben registrar N cuentas web desde el principio. No obstante, puede que no se incluya parte de la información guardada localmente en el teléfono para facilitar el uso de la app sin conexión (favoritos, certificados de finalización, etc.).",
      "fr": "Ce n'est pas possible.\nL'inscription web -> la validation de participation (code de groupe) -> la validation de responsable ne peuvent être utilisées de manière cohérente qu'avec un seul compte. Pour utiliser N comptes, il faut créer N comptes web dès le départ. Toutefois, certaines informations enregistrées localement sur le téléphone pour faciliter l'usage de l'application hors ligne peuvent ne pas être reprises (favoris, certificats d'accomplissement, etc.)."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q83",
    "no": "Q83",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "각 순례자는 개인 계정과 접속 정보를 받아 직접 앱을 활성화하나요?",
      "en": "Does each pilgrim receive a personal account and login details and activate the app themselves?",
      "es": "¿Recibe cada peregrino una cuenta personal y datos de acceso y activa la app por sí mismo?",
      "fr": "Chaque pèlerin reçoit-il un compte personnel et des identifiants, et active-t-il lui-même l'application ?"
    },
    "a": {
      "ko": "웹회원은 개인별로 자유롭게 가입합니다.\n그룹코드는 리더를 통해 공유 받은 그룹정보를 입력해서 추가 인증을 받을 수 있습니다.",
      "en": "Each person signs up for web membership freely.\nFor the group code, you can receive additional verification by entering the group information shared by your leader.",
      "es": "Cada persona se registra libremente como usuario web.\nPara el código de grupo, pueden obtener una verificación adicional introduciendo la información del grupo que les facilite su líder.",
      "fr": "Chacun crée librement son compte web.\nPour le code de groupe, vous pouvez obtenir une validation supplémentaire en saisissant les informations du groupe transmises par votre responsable."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q84",
    "no": "Q84",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "하나의 계정에 이메일 하나를 사용할 경우, 그룹 내에서 해당 이메일과 비밀번호를 공유해서 로그인해야 하나요, 아니면 앱상으로는 같은 그룹에 여러 항목으로 들어가더라도 각 참가자가 자신만의 계정으로 로그인하나요?",
      "en": "If one email is used for one account, should the email and password be shared within the group to log in, or does each participant log in with their own account even if they are entered as several items in the same group in the app?",
      "es": "Si se usa un correo electrónico por cuenta, ¿hay que compartir dentro del grupo ese correo y la contraseña para iniciar sesión, o cada participante inicia sesión con su propia cuenta aunque en la app figuren varios en el mismo grupo?",
      "fr": "Si une adresse e-mail est utilisée par compte, faut-il partager cette adresse et le mot de passe au sein du groupe pour se connecter, ou chaque participant se connecte-t-il avec son propre compte même s'ils figurent à plusieurs dans le même groupe dans l'application ?"
    },
    "a": {
      "ko": "계정은 개인 정보이기에 개별적으로 가입해야 합니다. 그룹코드 인증과는 별개입니다.",
      "en": "An account is personal information, so each person must sign up individually. This is separate from group code verification.",
      "es": "La cuenta es información personal, por lo que cada persona debe registrarse individualmente. Esto es independiente de la verificación con el código de grupo.",
      "fr": "Le compte relève des données personnelles ; chacun doit donc créer le sien. Cela est indépendant de la validation par code de groupe."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q85",
    "no": "Q85",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "앱을 사용하려면 인터넷에 연결되어 있어야 하나요? 그렇다면 와이파이가 제공되나요, 아니면 순례자가 심카드나 이심(eSIM)을 구매해야 하나요?",
      "en": "Does the app require an internet connection? If so, will Wi-Fi be provided, or do pilgrims need to buy a SIM card or eSIM?",
      "es": "¿Hace falta conexión a internet para usar la app? Si es así, ¿habrá wifi o los peregrinos deben comprar una tarjeta SIM o eSIM?",
      "fr": "L'application nécessite-t-elle une connexion Internet ? Si oui, un Wi-Fi sera-t-il fourni, ou les pèlerins doivent-ils acheter une carte SIM ou une eSIM ?"
    },
    "a": {
      "ko": "순례자는 공공 와이파이 및 개인의 셀룰러 데이터를 이용하여 앱을 사용할 수 있습니다. 다만 오프라인 상태에서도 최소기능은 유지될수 있도록 제작되었습니다(ex. 행사안내 등) 순례자는 본인의 심카드나 이심(eSIM)을 직접 구매하여 사용해야 합니다.",
      "en": "Pilgrims can use the app with public Wi-Fi and their own mobile data. However, the app is designed so that minimal functions remain available even offline (e.g. event information). Pilgrims must purchase and use their own SIM card or eSIM.",
      "es": "Los peregrinos pueden usar la app con el wifi público y con sus propios datos móviles. No obstante, la app está diseñada para mantener funciones mínimas incluso sin conexión (p. ej., la información de los actos). Los peregrinos deben comprar y usar su propia tarjeta SIM o eSIM.",
      "fr": "Les pèlerins peuvent utiliser l'application avec le Wi-Fi public et leurs propres données mobiles. L'application est toutefois conçue pour conserver des fonctions minimales même hors ligne (ex. informations sur les célébrations). Les pèlerins doivent acheter et utiliser leur propre carte SIM ou eSIM."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q86",
    "no": "Q86",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자앱에는 다국어 번역, 문의용 챗봇 등의 기능이 제공되나요? 예를 들어 텍스트를 사진으로 찍어 번역하거나, 대화를 음성으로 번역하는 기능이 있나요?",
      "en": "Does the pilgrim app provide functions such as multilingual translation or a chatbot for enquiries? For example, is there a function to translate text by taking a photo or to translate conversations by voice?",
      "es": "¿La app del peregrino ofrece funciones como traducción multilingüe o un chatbot para consultas? Por ejemplo, ¿hay una función para traducir textos haciendo una foto o para traducir conversaciones por voz?",
      "fr": "L'application du pèlerin propose-t-elle des fonctions comme la traduction multilingue ou un chatbot pour les questions ? Par exemple, une fonction pour traduire un texte en le photographiant ou pour traduire une conversation à la voix ?"
    },
    "a": {
      "ko": "순례자앱에서는 6개 국어가 제공됩니다. 번역 및 통역 관련 별도 기능은 제공되지 않습니다.",
      "en": "The pilgrim app is available in six languages. No separate translation or interpretation functions are provided.",
      "es": "La app del peregrino está disponible en seis idiomas. No ofrece funciones específicas de traducción ni de interpretación.",
      "fr": "L'application du pèlerin est disponible en six langues. Aucune fonction de traduction ou d'interprétation n'est proposée."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q87",
    "no": "Q87",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자앱을 통해 주변 식당의 위치·수용 가능 인원 등 순례자에게 필요한 현지 정보를 제공하거나 실시간으로 안내받을 수 있나요? 순례지 주변 식당을 이용할 시 한꺼번에 많은 팀이 몰려서 식당을 찾아 해매다가 식사 시간을 놓치거나 예상 밖의 메뉴로 식사를 해결 못 할 경우도 있을것 같습니다.",
      "en": "Can the pilgrim app provide, or give real-time guidance on, local information that pilgrims need, such as the location and capacity of nearby restaurants? When using restaurants near pilgrimage sites, many teams may arrive at once, so people may wander around looking for a restaurant and miss mealtime, or be unable to eat because of an unexpected menu.",
      "es": "¿Puede la app del peregrino ofrecer, o indicar en tiempo real, información local que necesiten los peregrinos, como la ubicación y la capacidad de los restaurantes cercanos? Al usar los restaurantes cercanos a los lugares de peregrinación, pueden llegar muchos equipos a la vez, de modo que algunos podrían dar vueltas buscando restaurante y perder la hora de comer, o no poder comer por encontrar un menú inesperado.",
      "fr": "L'application du pèlerin peut-elle fournir, ou indiquer en temps réel, les informations locales utiles aux pèlerins, comme l'emplacement et la capacité des restaurants à proximité ? Près des lieux de pèlerinage, de nombreux groupes risquent d'arriver en même temps ; certains pourraient errer à la recherche d'un restaurant et manquer l'heure du repas, ou ne pas pouvoir manger à cause d'un menu inattendu."
    },
    "a": {
      "ko": "순례자앱을 통해 모든 식당의 현재 정보를 제공해드리지는 않습니다.",
      "en": "The pilgrim app does not provide current information on all restaurants.",
      "es": "La app del peregrino no ofrece información actualizada de todos los restaurantes.",
      "fr": "L'application du pèlerin ne fournit pas d'informations à jour sur tous les restaurants."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q88",
    "no": "Q88",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자앱은 언제부터 다운로드하여 사용할 수 있으며, iOS와 Android 모두 지원하나요? 또한 인터넷 연결이 원활하지 않은 상황에서도 앱의 주요 기능을 오프라인으로 사용할 수 있나요?",
      "en": "From when can the pilgrim app be downloaded and used, and does it support both iOS and Android? Also, can the main functions of the app be used offline when the internet connection is poor?",
      "es": "¿Desde cuándo se puede descargar y usar la app del peregrino, y es compatible con iOS y Android? Además, ¿se pueden usar sin conexión las funciones principales de la app cuando la conexión a internet sea deficiente?",
      "fr": "À partir de quand peut-on télécharger et utiliser l'application du pèlerin, et est-elle disponible sur iOS et Android ? Par ailleurs, peut-on utiliser hors ligne les principales fonctions lorsque la connexion Internet est mauvaise ?"
    },
    "a": {
      "ko": "현재 서비스 제공중에 있습니다. 온라인에서 기본적인 정보를 일정 시간마다 업데이트해서 오프라인에서도 사용 가능하지만, 신규 정보 추출은 온라인상에서만 가능합니다.",
      "en": "The app is currently in service. Basic information is updated online at regular intervals so that it can also be used offline, but new information can only be retrieved online.",
      "es": "La app ya está en servicio. La información básica se actualiza en línea a intervalos regulares para que también pueda usarse sin conexión, pero la información nueva solo puede obtenerse en línea.",
      "fr": "L'application est déjà en service. Les informations de base sont mises à jour en ligne à intervalles réguliers afin de pouvoir aussi être utilisées hors ligne, mais les nouvelles informations ne peuvent être obtenues qu'en ligne."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q89",
    "no": "Q89",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "주요 행사의 실시간 통역은 순례자앱에서도 이용할 수 있나요, 아니면 라디오 주파수를 통해서만 가능한가요?",
      "en": "Is live interpretation of the main events also available in the pilgrim app, or only via radio frequency?",
      "es": "¿Se puede usar también en la app del peregrino la interpretación simultánea de los actos principales, o solo por radiofrecuencia?",
      "fr": "L'interprétation en direct des principales célébrations est-elle aussi disponible dans l'application du pèlerin, ou seulement par fréquence radio ?"
    },
    "a": {
      "ko": "순례자앱에서는 실시간 통역 기능을 제공하지 않습니다.",
      "en": "The pilgrim app does not provide a live interpretation function.",
      "es": "La app del peregrino no ofrece interpretación simultánea.",
      "fr": "L'application du pèlerin ne propose pas d'interprétation en direct."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q90",
    "no": "Q90",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "그룹 리더와 순례자가 각각 입력해야 하는 정보는 무엇이며, 여권·티셔츠 사이즈·알레르기 등의 정보는 어떻게 등록하나요? 그룹 리더용 대시보드의 기능도 안내해 주시기 바랍니다.",
      "en": "What information must be entered by group leaders and by pilgrims respectively, and how is information such as passport details, T-shirt size and allergies registered? Please also explain the functions of the group leader dashboard.",
      "es": "¿Qué información debe introducir el líder del grupo y cuál cada peregrino, y cómo se registran datos como el pasaporte, la talla de camiseta o las alergias? Expliquen también las funciones del panel del líder de grupo.",
      "fr": "Quelles informations doivent être saisies respectivement par le responsable du groupe et par les pèlerins, et comment enregistre-t-on des informations comme le passeport, la taille de T-shirt ou les allergies ? Merci de présenter aussi les fonctions du tableau de bord du responsable de groupe."
    },
    "a": {
      "ko": "사전정보 입력은 그룹 리더만 등록 가능합니다. 순례자는 사전정보 입력이 불가합니다.\n인증된 그룹 리더는 그룹 대표로써 사전정보 입력 및 그룹원의 선불카드의 활성, 재발급 신청할 수 있는 권한이 부여됩니다.",
      "en": "Advance information can only be entered by the group leader. Pilgrims cannot enter advance information.\nA verified group leader, as the group's representative, is given permission to enter advance information and to activate and request reissue of the group members' prepaid cards.",
      "es": "Solo el líder del grupo puede introducir la información previa. Los peregrinos no pueden introducirla.\nEl líder de grupo verificado, como representante del grupo, tiene permiso para introducir la información previa y para activar y solicitar la reposición de las tarjetas prepago de los miembros del grupo.",
      "fr": "Seul le responsable du groupe peut saisir les informations préalables. Les pèlerins ne peuvent pas les saisir.\nLe responsable de groupe validé, en tant que représentant du groupe, peut saisir les informations préalables et activer ou demander le remplacement des cartes prépayées des membres du groupe."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q91",
    "no": "Q91",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "앱에는 어떤 개인정보가 언제 입력되며, 티셔츠 사이즈·알레르기 등의 정보는 순례자가 직접 입력하나요, 아니면 그룹 리더가 관리하나요? 이러한 정보를 웹사이트에서도 입력·관리할 수 있는지와 개인정보 보호 및 앱 보안 대책도 안내 부탁드립니다.",
      "en": "What personal information is entered in the app and when, and is information such as T-shirt size and allergies entered by pilgrims themselves or managed by the group leader? Please also let us know whether this information can be entered and managed on the website, and what measures are in place for personal data protection and app security.",
      "es": "¿Qué datos personales se introducen en la app y cuándo? ¿La talla de camiseta y las alergias las introduce el propio peregrino o las gestiona el líder del grupo? Indíquennos también si esta información puede introducirse y gestionarse en la web, y qué medidas hay de protección de datos y de seguridad de la app.",
      "fr": "Quelles données personnelles sont saisies dans l'application, et quand ? La taille de T-shirt et les allergies sont-elles saisies par les pèlerins eux-mêmes ou gérées par le responsable du groupe ? Merci d'indiquer aussi si ces informations peuvent être saisies et gérées sur le site web, ainsi que les mesures de protection des données et de sécurité de l'application."
    },
    "a": {
      "ko": "기본적으로 웹회원은 본인 이메일 주소로 인증번호가 발송됩니다. 사전 입력 정보는 그룹 리더만 입력합니다. 개인정보에 해당되는 영역은 기본 웹회원에만 해당 되며 법적 검토된 내용으로 회원가입 시 약관 제공 및 동의를 받습니다.",
      "en": "As standard, a verification code for web membership is sent to the member's own email address. Advance information is entered only by the group leader. Personal information applies only to the basic web membership, and the terms, which have been legally reviewed, are provided and consent is obtained when signing up.",
      "es": "Como norma, al registrarse como usuario web se envía un código de verificación a la propia dirección de correo electrónico. La información previa solo la introduce el líder del grupo. Los datos personales se limitan al registro web básico, y al registrarse se presentan unas condiciones revisadas jurídicamente y se recaba el consentimiento.",
      "fr": "En règle générale, un code de vérification pour le compte web est envoyé à l'adresse e-mail de l'utilisateur. Les informations préalables sont saisies uniquement par le responsable du groupe. Les données personnelles concernent uniquement le compte web de base ; des conditions d'utilisation ayant fait l'objet d'un examen juridique sont présentées et le consentement est recueilli lors de l'inscription."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q92",
    "no": "Q92",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "참가자들이 순례자 앱을 사전에 익할 수 있도록 공식 사이트에 단계별 사용 가이드나 사전 체험 환경을 제공할 예정인가요?",
      "en": "Will a step-by-step user guide or a trial environment be provided on the official site so that participants can get familiar with the pilgrim app in advance?",
      "es": "¿Se ofrecerá en la web oficial una guía de uso paso a paso o un entorno de prueba para que los participantes se familiaricen de antemano con la app del peregrino?",
      "fr": "Un guide d'utilisation pas à pas ou un environnement d'essai sera-t-il proposé sur le site officiel pour que les participants se familiarisent à l'avance avec l'application du pèlerin ?"
    },
    "a": {
      "ko": "현재 앱은 서비스 진행중이며, 앱관련 사전 가이드가 제공될 예정입니다.",
      "en": "The app is currently in service, and an advance guide to the app will be provided.",
      "es": "La app ya está en servicio y se ofrecerá una guía previa sobre la app.",
      "fr": "L'application est déjà en service, et un guide préalable de l'application sera fourni."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctions"
    },
    "subNo": "a"
  },
  {
    "id": "Q93",
    "no": "Q93",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 순례자 교통카드를 Apple Pay, Google Pay, Samsung Pay 등 모바일 지갑에 등록하여 사용할 수 있나요?",
      "en": "Can the WYD pilgrim transport card be added to and used in mobile wallets such as Apple Pay, Google Pay or Samsung Pay?",
      "es": "¿Se puede añadir y usar la tarjeta de transporte del peregrino de la JMJ en monederos móviles como Apple Pay, Google Pay o Samsung Pay?",
      "fr": "Peut-on ajouter et utiliser la carte de transport du pèlerin des JMJ dans des portefeuilles mobiles comme Apple Pay, Google Pay ou Samsung Pay ?"
    },
    "a": {
      "ko": "순례자 카드는 교통카드와 결제 카드가 통합된 실물카드를 발행해드립니다. 해당 실물카드는 NFC와의 연동은 지원하지 않습니다.",
      "en": "The pilgrim card is issued as a physical card that combines a transport card and a payment card. This physical card does not support NFC linking.",
      "es": "La tarjeta del peregrino se emite como tarjeta física que integra la tarjeta de transporte y la de pago. Esta tarjeta física no admite vinculación por NFC.",
      "fr": "La carte du pèlerin est délivrée sous forme de carte physique réunissant carte de transport et carte de paiement. Cette carte physique n'est pas compatible avec une liaison NFC."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Prepaid Card",
      "es": "Tarjeta prepago",
      "fr": "Carte prépayée"
    },
    "subNo": "b"
  },
  {
    "id": "Q94",
    "no": "Q94",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 이후, 선불카드(Prepaid meal card)는 카드에 예를 들어 100달러 정도의 잔액이 남아 있다면 환불받을 수 있나요? 환불이 가능하다면 원화로 받나요, 달러로 받나요? 아니면 최소한 연대기금(Solidarity Fund)에 기부할 수 있게 해줄 수 있나요?",
      "en": "After WYD, if there is a balance of, say, about 100 dollars left on the prepaid meal card, can it be refunded? If so, is the refund in won or in dollars? Or could you at least allow it to be donated to the Solidarity Fund?",
      "es": "Después de la JMJ, si quedan, por ejemplo, unos 100 dólares de saldo en la tarjeta prepago de comidas, ¿se pueden reembolsar? Si es así, ¿en wones o en dólares? ¿O podrían al menos permitir donarlos al Fondo de Solidaridad (Solidarity Fund)?",
      "fr": "Après les JMJ, s'il reste par exemple environ 100 dollars sur la carte repas prépayée, peut-on être remboursé ? Si oui, en wons ou en dollars ? Ou pourriez-vous au moins permettre d'en faire don au Fonds de solidarité (Solidarity Fund) ?"
    },
    "a": {
      "ko": "조직위원회에서 매일 충전하는 식사비는 당일 식사비를 모두 사용하지 않은 경우, 잔액이 이월되며 등록한 패키지의 종료일까지 사용할 수 있습니다. 대회 종료 이후 미사용 잔액에 대해서는 환불되지 않습니다. 미사용된 잔액은 참가 분담금의 일환으로 기부하는 방안을 논의 중입니다. 추후 자세한 안내 드리겠습니다.",
      "en": "If the meal allowance topped up daily by the Local Organising Committee is not fully used on the day, the balance is carried over and can be used until the end date of the registered package. Unused balances are not refunded after the event. We are discussing donating unused balances as part of the participation contribution. Further details will be provided later.",
      "es": "Si la asignación para comidas que el Comité Organizador Local recarga cada día no se gasta por completo ese día, el saldo se acumula y puede usarse hasta la fecha final del paquete inscrito. El saldo no utilizado no se reembolsa después del evento. Estamos estudiando donar el saldo no utilizado como parte de la contribución de participación. Más adelante daremos más detalles.",
      "fr": "Si l'allocation repas rechargée chaque jour par le Comité d'organisation local n'est pas entièrement utilisée dans la journée, le solde est reporté et peut être utilisé jusqu'à la date de fin du forfait choisi. Le solde non utilisé n'est pas remboursé après l'événement. Nous étudions la possibilité de verser le solde non utilisé en don, au titre de la contribution de participation. Plus de détails seront communiqués ultérieurement."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Prepaid Card",
      "es": "Tarjeta prepago",
      "fr": "Carte prépayée"
    },
    "subNo": "b"
  },
  {
    "id": "Q95",
    "no": "Q95",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "선불카드(Prepaid meal card)는 실물 카드인가요, 디지털인가요? 로마 희년(Jubilee) 행사 당시 앱에 큰 문제가 있어 일부 그룹은 모든 식사를 받지 못했습니다.",
      "en": "Is the prepaid meal card a physical card or a digital one? During the Rome Jubilee, there were major problems with the app, and some groups did not receive all their meals.",
      "es": "¿La tarjeta prepago de comidas es física o digital? En el Jubileo de Roma la app tuvo problemas graves y algunos grupos no recibieron todas sus comidas.",
      "fr": "La carte repas prépayée est-elle physique ou numérique ? Lors du Jubilé de Rome, l'application a connu de graves problèmes et certains groupes n'ont pas reçu tous leurs repas."
    },
    "a": {
      "ko": "선불카드(Prepaid meal card)는 실물 카드입니다. 순례자앱에서는 결제 기능을 제공하지 않으며, 사용 내역과 잔액을 확인할 수 있습니다.",
      "en": "The prepaid meal card is a physical card. The pilgrim app does not provide a payment function; you can check your usage history and balance in it.",
      "es": "La tarjeta prepago de comidas es una tarjeta física. La app del peregrino no tiene función de pago; en ella se pueden consultar los movimientos y el saldo.",
      "fr": "La carte repas prépayée est une carte physique. L'application du pèlerin ne propose pas de fonction de paiement ; elle permet de consulter l'historique d'utilisation et le solde."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Prepaid Card",
      "es": "Tarjeta prepago",
      "fr": "Carte prépayée"
    },
    "subNo": "b"
  },
  {
    "id": "Q96",
    "no": "Q96",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 기간의 식사는 선불카드(Prepaid meal card)를 이용해 식당·편의점 등에서 자유롭게 선택하는 방식인가요, 아니면 별도의 식사 텐트나 도시락도 제공되나요? 이용 가능한 식당 및 편의점에서는 다양한 문화권의 음식점도 포함되나요?",
      "en": "During WYD, are meals chosen freely at restaurants, convenience stores, etc. using the prepaid meal card, or are separate meal tents or packed meals also provided? Do the participating restaurants and convenience stores include places serving food from various cultures?",
      "es": "Durante la JMJ, ¿las comidas se eligen libremente en restaurantes, tiendas de conveniencia, etc., con la tarjeta prepago de comidas, o también habrá carpas de comida o comida envasada? ¿Los restaurantes y tiendas disponibles incluyen establecimientos de comida de diversas culturas?",
      "fr": "Pendant les JMJ, les repas sont-ils choisis librement dans des restaurants, supérettes, etc., avec la carte repas prépayée, ou y aura-t-il aussi des tentes-repas ou des repas emballés ? Les restaurants et supérettes partenaires incluent-ils des établissements proposant des cuisines de diverses cultures ?"
    },
    "a": {
      "ko": "조식은 숙소에서 일괄 제공하는 방식으로 운영하며, 중식 및 석식은 선불카드(Prepaid meal card)를 이용하여 지정된 식당에서 자유롭게 이용할 수 있도록 운영할 예정입니다. 이용가능한 식당, 메뉴 및 식사카드 운영방식 등은 구체적인 사항은 현재 협의 중입니다.",
      "en": "Breakfast will be provided collectively at the accommodation, and lunch and dinner will be available freely at designated restaurants using the prepaid meal card. Details such as the participating restaurants, menus and how the meal card will operate are currently under discussion.",
      "es": "El desayuno se ofrecerá en el alojamiento de forma conjunta, y el almuerzo y la cena podrán tomarse libremente en los restaurantes designados con la tarjeta prepago de comidas. Los detalles, como los restaurantes disponibles, los menús y el funcionamiento de la tarjeta de comidas, se están tratando actualmente.",
      "fr": "Le petit-déjeuner sera servi collectivement dans les hébergements, et le déjeuner et le dîner pourront être pris librement dans les restaurants désignés avec la carte repas prépayée. Les détails, comme les restaurants partenaires, les menus et le fonctionnement de la carte repas, sont en cours de discussion."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Prepaid Card",
      "es": "Tarjeta prepago",
      "fr": "Carte prépayée"
    },
    "subNo": "b"
  },
  {
    "id": "Q97",
    "no": "Q97",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "선불카드(Prepaid meal card)를 사용하려면 휴대폰에 NFC 기능이 필요한가요?",
      "en": "Is an NFC function on the phone required to use the prepaid meal card?",
      "es": "¿Hace falta que el teléfono tenga NFC para usar la tarjeta prepago de comidas?",
      "fr": "Faut-il que le téléphone dispose du NFC pour utiliser la carte repas prépayée ?"
    },
    "a": {
      "ko": "아니오. 체크인시 수령받는 실물카드로 활성 및 폰에 연동해서 사용가능합니다. NFC 기능을 필요하지 않습니다.",
      "en": "No. The physical card received at check-in can be activated and linked to your phone for use. An NFC function is not required.",
      "es": "No. La tarjeta física que se recibe en la acreditación puede activarse y vincularse al teléfono para usarla. No se necesita NFC.",
      "fr": "Non. La carte physique reçue lors de l'accréditation peut être activée et liée au téléphone pour être utilisée. Le NFC n'est pas nécessaire."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Prepaid Card",
      "es": "Tarjeta prepago",
      "fr": "Carte prépayée"
    },
    "subNo": "b"
  },
  {
    "id": "Q98",
    "no": "Q98",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del peregrino",
      "fr": "Application du pèlerin"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자 카드를 분실했을 때 제2리더(second leader)만 새 카드를 발급/요청할 수 있나요, 아니면 제1리더도 가능한가요?",
      "en": "If a pilgrim card is lost, can only the second leader issue/request a new card, or can the first leader also do so?",
      "es": "Si se pierde una tarjeta del peregrino, ¿solo el segundo líder (second leader) puede emitir/solicitar una nueva, o también puede hacerlo el primer líder?",
      "fr": "En cas de perte d'une carte du pèlerin, seul le deuxième responsable (second leader) peut-il émettre/demander une nouvelle carte, ou le premier responsable le peut-il aussi ?"
    },
    "a": {
      "ko": "앱관련 모든 권한은 제2리더만 가능합니다. 정책적으로 하위그룹(Subgroup)리더, 제1리더는 중복이 가능하기에 유니크한 리더 계정은 제2리더만 해당되어 이런 결정을 내렸습니다.",
      "en": "All app-related permissions belong to the second leader only. Because, as a matter of policy, a person can be both a Subgroup leader and the first leader, the second leader is the only unique leader account, which is why this decision was made.",
      "es": "Todos los permisos relacionados con la app corresponden únicamente al segundo líder. Como, por política, una misma persona puede ser a la vez líder de Subgrupo y primer líder, la única cuenta de líder exclusiva es la del segundo líder; por eso se tomó esta decisión.",
      "fr": "Toutes les autorisations liées à l'application appartiennent uniquement au deuxième responsable. Comme, par principe, une même personne peut être à la fois responsable de Sous-groupe et premier responsable, le seul compte de responsable unique est celui du deuxième responsable ; c'est pourquoi cette décision a été prise."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Prepaid Card",
      "es": "Tarjeta prepago",
      "fr": "Carte prépayée"
    },
    "subNo": "b"
  },
  {
    "id": "Q99",
    "no": "Q99",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "topicNo": "3",
    "q": {
      "ko": "WYD 기간 중 대륙별·지역별·국가별 모임을 조율하는 조직위원회의 전담 창구나 담당자가 있으며, 이러한 모임을 위한 장소가 제공되나요? 아니면 주최 단체가 직접 장소를 마련해야 하나요?",
      "en": "Is there a dedicated contact point or person at the Local Organising Committee to coordinate continental, regional and national gatherings during WYD, and will venues be provided for these gatherings? Or must the organising bodies arrange venues themselves?",
      "es": "¿Hay en el Comité Organizador Local un punto de contacto o una persona encargada de coordinar los encuentros continentales, regionales y nacionales durante la JMJ, y se ofrecerán lugares para estos encuentros? ¿O deben las entidades organizadoras buscar el lugar por su cuenta?",
      "fr": "Existe-t-il au Comité d'organisation local un point de contact ou une personne chargée de coordonner les rencontres continentales, régionales et nationales pendant les JMJ, et des lieux seront-ils fournis pour ces rencontres ? Ou les organisateurs doivent-ils trouver eux-mêmes un lieu ?"
    },
    "a": {
      "ko": "대륙별 또는 국가별 모임 제안은 국제부(international@wydseoul.org)로 문의해 주시기 바랍니다. 행사 운영 및 실무와 관련된 자세한 안내를 받으실 수 있습니다.",
      "en": "Please send proposals for continental or national gatherings to the International Department (international@wydseoul.org). You will receive detailed guidance on event operations and practical matters.",
      "es": "Envíen las propuestas de encuentros continentales o nacionales al Departamento Internacional (international@wydseoul.org). Allí recibirán información detallada sobre la organización y los aspectos prácticos.",
      "fr": "Veuillez adresser les propositions de rencontres continentales ou nationales au Département international (international@wydseoul.org). Vous y recevrez des informations détaillées sur l'organisation et les aspects pratiques."
    }
  },
  {
    "id": "Q100",
    "no": "Q100",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "topicNo": "3",
    "q": {
      "ko": "WYD에 직접 참가하지 못하는 국가와 청년들이 자국 교구나 본당에서 자체 행사 및 철야기도를 통해 함께 참여할 수 있도록, 조직위원회에서 공식 프로그램과 기도 자료를 제공할 예정인가요?",
      "en": "Will the Local Organising Committee provide an official programme and prayer materials so that countries and young people who cannot attend WYD in person can take part through their own events and vigils in their dioceses or parishes?",
      "es": "¿El Comité Organizador Local ofrecerá un programa oficial y materiales de oración para que los países y jóvenes que no puedan asistir en persona a la JMJ puedan participar con sus propios actos y vigilias en sus diócesis o parroquias?",
      "fr": "Le Comité d'organisation local fournira-t-il un programme officiel et des supports de prière pour que les pays et les jeunes qui ne peuvent pas venir aux JMJ puissent y participer par leurs propres célébrations et veillées dans leurs diocèses ou paroisses ?"
    },
    "a": {
      "ko": "조직위원회는 여러가지 이유로 현장에서 함께 할 수 없는 순례자들을 위해 다양한 방법을 기획, 준비하고 있습니다. 참여 형식과 방법이 확정되는 대로 공지할 예정입니다.",
      "en": "The Local Organising Committee is planning and preparing various ways for pilgrims who cannot be present on site for various reasons. We will announce the format and method of participation as soon as they are confirmed.",
      "es": "El Comité Organizador Local está planificando y preparando diversas formas de participación para los peregrinos que, por diversos motivos, no puedan estar presentes. Anunciaremos el formato y la forma de participación en cuanto estén confirmados.",
      "fr": "Le Comité d'organisation local prévoit et prépare diverses formes de participation pour les pèlerins qui, pour diverses raisons, ne pourront pas être présents. Nous annoncerons le format et les modalités de participation dès qu'ils seront confirmés."
    }
  },
  {
    "id": "Q101",
    "no": "Q101",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "topicNo": "3",
    "q": {
      "ko": "저희는 숙소 미포함 패키지를 선택할 예정이며, 신부님들도 함께 계십니다. WYD에서 미사가 계획되지 않은 날, 저희 그룹을 위해 신부님이 미사를 집전할 수 있는 인근 본당을 어떻게 마련할 수 있나요?",
      "en": "We plan to choose a package without accommodation, and our priests are coming with us. On days when no Mass is planned at WYD, how can we arrange a nearby parish where our priest can celebrate Mass for our group?",
      "es": "Pensamos elegir un paquete sin alojamiento y nos acompañan sacerdotes. Los días en que no hay Misa programada en la JMJ, ¿cómo podemos conseguir una parroquia cercana donde nuestro sacerdote celebre la Misa para nuestro grupo?",
      "fr": "Nous prévoyons de choisir un forfait sans hébergement, et des prêtres nous accompagnent. Les jours où aucune messe n'est prévue aux JMJ, comment trouver une paroisse proche où notre prêtre pourra célébrer la messe pour notre groupe ?"
    },
    "a": {
      "ko": "서울 시내 대부분의 본당은 숙소 포함 패키지를 이용하는 그룹이 배정될 예정입니다. 이에, 배정된 그룹이 우선적으로 해당 본당을 사용하게 됩니다. 배정된 그룹이 사용하지 않는 시간대로 이용을 요청하셔야 하니 양해부탁드립니다.",
      "en": "Groups using packages with accommodation will be allocated to most parishes in Seoul, and the allocated groups will have priority in using those parishes. Please understand that you will need to request use during times when the allocated groups are not using them.",
      "es": "La mayoría de las parroquias de Seúl se asignarán a grupos con paquetes con alojamiento, y los grupos asignados tendrán prioridad para usarlas. Les pedimos comprensión, ya que deberán solicitar su uso en los horarios en que no las utilicen los grupos asignados.",
      "fr": "La plupart des paroisses de Séoul seront attribuées aux groupes ayant un forfait avec hébergement, et ces groupes auront la priorité pour les utiliser. Nous vous remercions de votre compréhension : il vous faudra demander à les utiliser aux heures où les groupes attribués ne les occupent pas."
    }
  },
  {
    "id": "Q102",
    "no": "Q102",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y organización sobre el terreno",
      "fr": "Arrivée et organisation sur place"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "topicNo": "3",
    "q": {
      "ko": "WYD를 준비하는 순례자들을 위해 이단·사이비 활동 등에 대한 안전·인식 제고 자료가 제공되나요?",
      "en": "Will safety and awareness materials on heretical groups, cults and similar activities be provided for pilgrims preparing for WYD?",
      "es": "¿Se ofrecerán materiales de seguridad y sensibilización sobre herejías, sectas y actividades similares para los peregrinos que se preparan para la JMJ?",
      "fr": "Des documents de sécurité et de sensibilisation sur les hérésies, les sectes et les activités similaires seront-ils fournis aux pèlerins qui se préparent aux JMJ ?"
    },
    "a": {
      "ko": "현재 한국천주교주교회의 유사종교대책위원회에서 안내 자료를 작성하고 있으며, 초안 검토 중입니다. 검토 후 공식언어로 번역하여 배포할 예정입니다.",
      "en": "The Committee on Pseudo-Religions of the Catholic Bishops' Conference of Korea is currently preparing guidance materials, and the draft is under review. After the review, it will be translated into the official languages and distributed.",
      "es": "La Comisión sobre pseudorreligiones de la Conferencia Episcopal de Corea está preparando materiales informativos, y el borrador está en revisión. Tras la revisión, se traducirán a los idiomas oficiales y se distribuirán.",
      "fr": "La Commission sur les pseudo-religions de la Conférence des évêques catholiques de Corée prépare actuellement des documents d'information, dont le projet est en cours d'examen. Après examen, ils seront traduits dans les langues officielles et diffusés."
    }
  },
  {
    "id": "Q103",
    "no": "Q103",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "입국날짜를 서울 도착일이 아니라 교구대회를 위한 입국 비자를 위한 날짜라고 밝혀야 할 것 같네요\n교구대회 참가자가 서울조직위 주소로 비자 신청해도 되나요?",
      "en": "It seems we should state the date of entry not as the date of arrival in Seoul but as the date relevant to the entry visa for the Days in the Dioceses.\nCan participants in the Days in the Dioceses apply for a visa using the address of the Seoul Organising Committee?",
      "es": "Parece que deberíamos indicar como fecha de entrada no la de llegada a Seúl, sino la correspondiente al visado de entrada para los Días en las Diócesis.\n¿Pueden los participantes en los Días en las Diócesis solicitar el visado con la dirección del Comité Organizador de Seúl?",
      "fr": "Il semble qu'il faille indiquer comme date d'entrée non pas la date d'arrivée à Séoul, mais celle correspondant au visa d'entrée pour les Journées dans les diocèses.\nLes participants aux Journées dans les diocèses peuvent-ils demander leur visa avec l'adresse du Comité d'organisation de Séoul ?"
    },
    "a": {
      "ko": "한국 입국일은 교구대회 참가 여부와 관계없이 실제 항공편의 한국 도착일과 동일하게 기재해야 합니다. 또한 WYD에서 발급한 서류를 바탕으로 비자를 신청하므로, 신청 시에는 한국 내 주소와 연락처로 조직위원회 정보를 기재하는 것을 권장합니다. 다만 입국일과 출국일은 실제 항공편 일정과 동일하게 기재해야 합니다.",
      "en": "The date of entry into Korea must be stated as the actual date of arrival in Korea on your flight, regardless of whether you take part in the Days in the Dioceses. Also, since visas are applied for on the basis of documents issued by WYD, we recommend entering the Local Organising Committee's information as your address and contact details in Korea when applying. However, the dates of entry and departure must match your actual flight schedule.",
      "es": "La fecha de entrada en Corea debe ser la fecha real de llegada a Corea según el vuelo, independientemente de que participen o no en los Días en las Diócesis. Además, como el visado se solicita con los documentos emitidos por la JMJ, recomendamos indicar los datos del Comité Organizador Local como dirección y contacto en Corea al hacer la solicitud. No obstante, las fechas de entrada y salida deben coincidir con el calendario real de los vuelos.",
      "fr": "La date d'entrée en Corée doit correspondre à la date réelle d'arrivée en Corée selon votre vol, que vous participiez ou non aux Journées dans les diocèses. Par ailleurs, le visa étant demandé sur la base des documents délivrés par les JMJ, nous recommandons d'indiquer les coordonnées du Comité d'organisation local comme adresse et contact en Corée lors de la demande. Les dates d'entrée et de sortie doivent toutefois correspondre au calendrier réel de vos vols."
    }
  },
  {
    "id": "Q104",
    "no": "Q104",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "알러지 정보는 교구대회 관계자에게 공유 되나요? 교구대회 참가비와 공헌금 등록은 별도로 진행 하고 별도로 결재 해야 하겠지만 링크는 제공하나요? 완전히 별개로 모두 다시 입력하나요",
      "en": "Will allergy information be shared with those in charge of the Days in the Dioceses? Registration and payment of the fee and contribution for the Days in the Dioceses will presumably be done separately, but will a link be provided? Do we have to enter everything again completely separately?",
      "es": "¿Se compartirá la información sobre alergias con los responsables de los Días en las Diócesis? La inscripción y el pago de la cuota y la contribución de los Días en las Diócesis se harán por separado, pero ¿se facilitará un enlace? ¿Hay que volver a introducirlo todo por completo y por separado?",
      "fr": "Les informations sur les allergies seront-elles transmises aux responsables des Journées dans les diocèses ? L'inscription et le paiement des frais et de la contribution des Journées dans les diocèses se feront sans doute séparément, mais un lien sera-t-il fourni ? Faut-il tout ressaisir de manière totalement séparée ?"
    },
    "a": {
      "ko": "교구대회를 신청하면서 현재는 규모만 등록한 상태이고, 이후 교구에서 명단을 제출할 때 세부정보를 요청할 예정입니다. 이때 알러지 및 기타 특이사항을 수집하게 됩니다. 교구대회 기부금은 참가 교구로 납부하게 되고 계좌이체로 진행될 예정입니다.",
      "en": "In applying for the Days in the Dioceses, only the number of participants has been registered so far; detailed information will be requested later when the list is submitted to the diocese. Allergies and other special requirements will be collected at that time. The donation for the Days in the Dioceses will be paid to the participating diocese, by bank transfer.",
      "es": "Al solicitar los Días en las Diócesis, por ahora solo se ha registrado el número de participantes; más adelante, cuando se envíe la lista a la diócesis, se pedirán los datos detallados. En ese momento se recogerán las alergias y otras particularidades. El donativo de los Días en las Diócesis se pagará a la diócesis de destino mediante transferencia bancaria.",
      "fr": "Lors de la demande pour les Journées dans les diocèses, seul le nombre de participants a été enregistré pour l'instant ; les informations détaillées seront demandées plus tard, lorsque la liste sera transmise au diocèse. Les allergies et autres particularités seront recueillies à ce moment-là. Le don pour les Journées dans les diocèses sera versé au diocèse d'accueil, par virement bancaire."
    }
  },
  {
    "id": "Q105",
    "no": "Q105",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회를 진행하는 교구에서 서울로 가는 교통비는 교구에서 지원받을 수 있나요?",
      "en": "Can the diocese hosting the Days in the Dioceses support the cost of transport to Seoul?",
      "es": "¿Puede la diócesis que organiza los Días en las Diócesis cubrir el coste del transporte hasta Seúl?",
      "fr": "Le diocèse qui organise les Journées dans les diocèses peut-il prendre en charge les frais de transport jusqu'à Séoul ?"
    },
    "a": {
      "ko": "교구대회의 운영은 교구마다 다릅니다. 교구대회 후 본대회 이동에 대해서는 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "The Days in the Dioceses are run differently in each diocese. For travel to the main event after the Days in the Dioceses, please contact the diocese you wish to attend directly.",
      "es": "Los Días en las Diócesis se organizan de forma distinta en cada diócesis. Para el traslado al evento principal después de los Días en las Diócesis, consulten directamente con la diócesis en la que deseen participar.",
      "fr": "Les Journées dans les diocèses sont organisées différemment dans chaque diocèse. Pour le déplacement vers l'événement principal après les Journées dans les diocèses, veuillez contacter directement le diocèse auquel vous souhaitez participer."
    }
  },
  {
    "id": "Q106",
    "no": "Q106",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 참가 시 공항에서 주최 교구까지, 서울에서 주최 교구까지, 그리고 교구대회 종료 후 서울 숙소까지의 교통편은 주최 측에서 제공하거나 패키지에 포함되나요, 아니면 각 대표단·그룹이 직접 준비해야 하나요?",
      "en": "When taking part in the Days in the Dioceses, is transport from the airport to the host diocese, from Seoul to the host diocese, and from the host diocese to accommodation in Seoul after the Days in the Dioceses provided by the organisers or included in the package, or must each delegation or group arrange it themselves?",
      "es": "Al participar en los Días en las Diócesis, ¿el transporte desde el aeropuerto hasta la diócesis anfitriona, desde Seúl hasta la diócesis anfitriona y, al terminar, hasta el alojamiento en Seúl lo proporcionan los organizadores o está incluido en el paquete, o debe organizarlo cada delegación o grupo?",
      "fr": "Pour la participation aux Journées dans les diocèses, le transport de l'aéroport au diocèse d'accueil, de Séoul au diocèse d'accueil, puis jusqu'à l'hébergement à Séoul après les Journées est-il assuré par les organisateurs ou inclus dans le forfait, ou chaque délégation ou groupe doit-il l'organiser ?"
    },
    "a": {
      "ko": "교구대회의 운영은 교구마다 다릅니다. 공항에서 교구대회 교구까지, 교구대회 교구에서 본대회까지의 교통편은 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "The Days in the Dioceses are run differently in each diocese. For transport from the airport to the host diocese and from the host diocese to the main event, please contact the diocese you wish to attend directly.",
      "es": "Los Días en las Diócesis se organizan de forma distinta en cada diócesis. Para el transporte desde el aeropuerto hasta la diócesis anfitriona y desde la diócesis anfitriona hasta el evento principal, consulten directamente con la diócesis en la que deseen participar.",
      "fr": "Les Journées dans les diocèses sont organisées différemment dans chaque diocèse. Pour le transport de l'aéroport au diocèse d'accueil et du diocèse d'accueil à l'événement principal, veuillez contacter directement le diocèse auquel vous souhaitez participer."
    }
  },
  {
    "id": "Q107",
    "no": "Q107",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 등록은 언제 시작하나요?",
      "en": "When does registration for the Days in the Dioceses start?",
      "es": "¿Cuándo comienza la inscripción para los Días en las Diócesis?",
      "fr": "Quand l'inscription aux Journées dans les diocèses commence-t-elle ?"
    },
    "a": {
      "ko": "교구대회의 등록은 이미 시작하였습니다. 방문, 전화, 이메일, 교구대회 홈페이지(https://wyd2027did.org)를 통해 신청이 가능합니다. 다만 교구대회를 위해 준비된 인원이 채워진 교구로는 신청이 어렵습니다.",
      "en": "Registration for the Days in the Dioceses has already started. You can apply in person, by phone, by email or through the Days in the Dioceses website (https://wyd2027did.org). However, it is difficult to apply to dioceses whose prepared capacity for the Days in the Dioceses has already been filled.",
      "es": "La inscripción para los Días en las Diócesis ya ha comenzado. Se puede solicitar en persona, por teléfono, por correo electrónico o en la web de los Días en las Diócesis (https://wyd2027did.org). No obstante, es difícil solicitar plaza en las diócesis que ya han completado la capacidad preparada para los Días en las Diócesis.",
      "fr": "L'inscription aux Journées dans les diocèses a déjà commencé. Vous pouvez faire votre demande sur place, par téléphone, par courriel ou sur le site des Journées dans les diocèses (https://wyd2027did.org). Il est toutefois difficile de s'inscrire dans les diocèses dont la capacité prévue pour les Journées dans les diocèses est déjà atteinte."
    }
  },
  {
    "id": "Q108",
    "no": "Q108",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 기간도 보험 적용 대상인가요?",
      "en": "Is the period of the Days in the Dioceses also covered by insurance?",
      "es": "¿El periodo de los Días en las Diócesis también está cubierto por el seguro?",
      "fr": "La période des Journées dans les diocèses est-elle aussi couverte par l'assurance ?"
    },
    "a": {
      "ko": "교구대회를 운영하는 교구는 행사보험을 준비하고 있습니다. 하지만 개인 여행자 보험은 순례자가 준비하시길 바랍니다.",
      "en": "The dioceses running the Days in the Dioceses are arranging event insurance. However, pilgrims should arrange their own personal travel insurance.",
      "es": "Las diócesis que organizan los Días en las Diócesis están contratando un seguro del evento. No obstante, los peregrinos deben contratar su propio seguro de viaje personal.",
      "fr": "Les diocèses qui organisent les Journées dans les diocèses souscrivent une assurance pour l'événement. Les pèlerins doivent toutefois souscrire leur propre assurance voyage personnelle."
    }
  },
  {
    "id": "Q109",
    "no": "Q109",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "2027년 7월 29일 이전에 교구대회를 위해 도착하는 분들을 위한 숙박 해결책이 있나요?",
      "en": "Is there an accommodation solution for those arriving for the Days in the Dioceses before 29 July 2027?",
      "es": "¿Hay alguna solución de alojamiento para quienes lleguen antes del 29 de julio de 2027 para los Días en las Diócesis?",
      "fr": "Existe-t-il une solution d'hébergement pour ceux qui arrivent avant le 29 juillet 2027 pour les Journées dans les diocèses ?"
    },
    "a": {
      "ko": "교구대회의 운영은 교구마다 다릅니다. 조기 도착에 따른 숙박문제는 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "The Days in the Dioceses are run differently in each diocese. For accommodation in the case of early arrival, please contact the diocese you wish to attend directly.",
      "es": "Los Días en las Diócesis se organizan de forma distinta en cada diócesis. Para el alojamiento en caso de llegada anticipada, consulten directamente con la diócesis en la que deseen participar.",
      "fr": "Les Journées dans les diocèses sont organisées différemment dans chaque diocèse. Pour l'hébergement en cas d'arrivée anticipée, veuillez contacter directement le diocèse auquel vous souhaitez participer."
    }
  },
  {
    "id": "Q110",
    "no": "Q110",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "미성년자가 교구대회에 참가할 때 홈스테이를 하게 되나요?",
      "en": "Will minors stay in homestays when taking part in the Days in the Dioceses?",
      "es": "¿Los menores se alojarán en familias cuando participen en los Días en las Diócesis?",
      "fr": "Les mineurs seront-ils hébergés en famille lors des Journées dans les diocèses ?"
    },
    "a": {
      "ko": "현재 대부분의 교구는 홈스테이를 기본으로 준비하고 있습니다. 미성년자가 교구대회에 참가할 때에는 보호자 동반하에서만 홈스테이를 하게 됩니다. 미성년자 수에 맞추어 충분한 보호자를 확보하시길 바랍니다. 홈스테이가 아닌 별도의 숙박에 대해서는 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "Currently, most dioceses are preparing homestays as the standard option. When minors take part in the Days in the Dioceses, they will stay in homestays only when accompanied by a guardian. Please make sure you have enough guardians for the number of minors. For accommodation other than homestays, please contact the diocese you wish to attend directly.",
      "es": "Actualmente, la mayoría de las diócesis preparan el alojamiento en familias como opción básica. Cuando los menores participen en los Días en las Diócesis, solo se alojarán en familias si van acompañados de un tutor. Asegúrense de contar con suficientes tutores para el número de menores. Para alojamientos distintos del alojamiento en familias, consulten directamente con la diócesis en la que deseen participar.",
      "fr": "Actuellement, la plupart des diocèses prévoient l'hébergement en famille comme formule de base. Lorsque des mineurs participent aux Journées dans les diocèses, ils ne sont hébergés en famille que s'ils sont accompagnés d'un tuteur. Veillez à prévoir suffisamment d'accompagnateurs pour le nombre de mineurs. Pour un hébergement autre qu'en famille, veuillez contacter directement le diocèse auquel vous souhaitez participer."
    }
  },
  {
    "id": "Q111",
    "no": "Q111",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "많은 교구가 이미 정원이 찼나 보네요. 그렇다면 우리가 교구를 찾기에 너무 늦은 건 아닐까요?",
      "en": "It seems many dioceses are already full. In that case, is it too late for us to find a diocese?",
      "es": "Parece que muchas diócesis ya están completas. ¿Es demasiado tarde para que encontremos una diócesis?",
      "fr": "Il semble que de nombreux diocèses soient déjà complets. Est-il trop tard pour que nous trouvions un diocèse ?"
    },
    "a": {
      "ko": "10월 7일 현재 순례자들의 교구대회 참가를 위해 준비한 인원의 55%가 신청되었습니다. 아직은 여유가 있는 상황이고, 한국 교회가 교구대회를 위해 준비한 인원에 비해 신청이 초과하더라도 이를 수용할 여유가 있습니다. 교구대회 참가를 희망하는 모든 순례자를 환영합니다. 걱정하지 마시고 신청하시기 바랍니다.",
      "en": "As of 7 October, 55% of the capacity prepared for pilgrims taking part in the Days in the Dioceses has been taken. There is still room, and even if applications exceed the capacity prepared by the Church in Korea for the Days in the Dioceses, there is flexibility to accommodate them. All pilgrims who wish to take part in the Days in the Dioceses are welcome. Please do not worry, and apply.",
      "es": "A 7 de octubre, se ha cubierto el 55 % de la capacidad preparada para los peregrinos de los Días en las Diócesis. Todavía hay margen, e incluso si las solicitudes superan la capacidad preparada por la Iglesia en Corea para los Días en las Diócesis, hay margen para acogerlas. Todos los peregrinos que deseen participar en los Días en las Diócesis son bienvenidos. No se preocupen y presenten su solicitud.",
      "fr": "Au 7 octobre, 55 % de la capacité prévue pour les pèlerins des Journées dans les diocèses était occupée. Il reste de la place, et même si les demandes dépassent la capacité prévue par l'Église en Corée pour les Journées dans les diocèses, il existe une marge pour les accueillir. Tous les pèlerins qui souhaitent participer aux Journées dans les diocèses sont les bienvenus. Ne vous inquiétez pas et faites votre demande."
    }
  },
  {
    "id": "Q112",
    "no": "Q112",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 등록은 언제부터 유효한가요? 일부 교구에서는 이미 연락을 주셨지만, 실제 WYD 등록은 10월이 되어야 시작됩니다. 교구대회 등록만으로도 이미 유효한 건가요, 아니면 WYD 등록을 해야만 유효해지는 건가요?",
      "en": "From when is registration for the Days in the Dioceses valid? Some dioceses have already contacted us, but actual WYD registration does not start until October. Is registration for the Days in the Dioceses alone already valid, or does it only become valid after registering for WYD?",
      "es": "¿Desde cuándo es válida la inscripción en los Días en las Diócesis? Algunas diócesis ya se han puesto en contacto con nosotros, pero la inscripción en la JMJ propiamente dicha no empieza hasta octubre. ¿Basta con la inscripción en los Días en las Diócesis para que sea válida, o solo es válida tras inscribirse en la JMJ?",
      "fr": "À partir de quand l'inscription aux Journées dans les diocèses est-elle valable ? Certains diocèses nous ont déjà contactés, mais l'inscription aux JMJ proprement dite ne commence qu'en octobre. L'inscription aux Journées dans les diocèses suffit-elle déjà, ou n'est-elle valable qu'après l'inscription aux JMJ ?"
    },
    "a": {
      "ko": "교구대회의 등록은 본대회와 별개로 진행됩니다. 그리고 교구대회의 등록은 이미 시작되었고 다음과 같은 3단계로 진행됩니다.\n1) 참가 규모의 등록 2) 참가 명단의 등록 3) 순례자 기부금의 입금\n참고로, 참가를 희망하는 교구가 준비한 인원이 채워지면 해당 교구로 참가를 신청할 수는 없습니다.",
      "en": "Registration for the Days in the Dioceses is carried out separately from the main event. Registration for the Days in the Dioceses has already started and proceeds in the following three steps.\n1) Registration of the number of participants 2) Registration of the list of participants 3) Payment of the pilgrim donation\nFor reference, once the capacity prepared by the diocese you wish to attend has been filled, you can no longer apply to that diocese.",
      "es": "La inscripción en los Días en las Diócesis se realiza por separado del evento principal. Ya ha comenzado y se desarrolla en los tres pasos siguientes.\n1) Registro del número de participantes 2) Registro de la lista de participantes 3) Pago del donativo del peregrino\nA modo de referencia, una vez cubierta la capacidad preparada por la diócesis en la que desean participar, ya no se podrá solicitar plaza en esa diócesis.",
      "fr": "L'inscription aux Journées dans les diocèses se fait indépendamment de l'événement principal. Elle a déjà commencé et se déroule en trois étapes.\n1) Enregistrement du nombre de participants 2) Enregistrement de la liste des participants 3) Versement du don du pèlerin\nÀ titre d'information, une fois la capacité prévue par le diocèse souhaité atteinte, il n'est plus possible de s'inscrire dans ce diocèse."
    }
  },
  {
    "id": "Q113",
    "no": "Q113",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "또한 교구대회에서 WYD로 이동하는 날짜는 8월 2일인가요, 3일인가요?",
      "en": "Also, is the date of travel from the Days in the Dioceses to WYD 2 August or 3 August?",
      "es": "Además, ¿el traslado de los Días en las Diócesis a la JMJ es el 2 o el 3 de agosto?",
      "fr": "Par ailleurs, le déplacement des Journées dans les diocèses vers les JMJ a-t-il lieu le 2 ou le 3 août ?"
    },
    "a": {
      "ko": "교구대회는 2027년 7월 29일부터 8월 2일까지 4박 5일의 일정으로 진행됩니다. 8월 2일 일정을 마치고 당일 본대회로 이동하게 됩니다.",
      "en": "The Days in the Dioceses take place over five days and four nights, from 29 July to 2 August 2027. After the programme on 2 August, participants travel to the main event on the same day.",
      "es": "Los Días en las Diócesis se celebran del 29 de julio al 2 de agosto de 2027, con cinco días y cuatro noches. Tras las actividades del 2 de agosto, ese mismo día se trasladan al evento principal.",
      "fr": "Les Journées dans les diocèses se déroulent du 29 juillet au 2 août 2027, soit cinq jours et quatre nuits. Après le programme du 2 août, les participants rejoignent l'événement principal le jour même."
    }
  },
  {
    "id": "Q114",
    "no": "Q114",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "국제 운동, 공동체 및 평신도 단체들이 각자의 고유한 카리스마를 발휘하며 DID 프로그램에 어떻게 통합되고 있나요?",
      "en": "How are international movements, communities and lay associations being integrated into the DID programme while expressing their own distinctive charisms?",
      "es": "¿Cómo se están integrando en el programa de los DID los movimientos internacionales, las comunidades y las asociaciones laicales, cada uno con su carisma propio?",
      "fr": "Comment les mouvements internationaux, les communautés et les associations de laïcs sont-ils intégrés au programme des JDD tout en exprimant leur charisme propre ?"
    },
    "a": {
      "ko": "교구대회의 운영방향은 순례자들의 지역 교회 체험입니다. 고유의 카리스마와 교구대회 프로그램과의 통합은 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "The Days in the Dioceses are oriented towards pilgrims' experience of the local Church. For the integration of your own charism with the Days in the Dioceses programme, please contact the diocese you wish to attend directly.",
      "es": "Los Días en las Diócesis se orientan a la experiencia de la Iglesia local por parte de los peregrinos. Para la integración de su carisma propio con el programa de los Días en las Diócesis, consulten directamente con la diócesis en la que deseen participar.",
      "fr": "Les Journées dans les diocèses sont orientées vers l'expérience de l'Église locale par les pèlerins. Pour l'intégration de votre charisme propre au programme des Journées dans les diocèses, veuillez contacter directement le diocèse auquel vous souhaitez participer."
    }
  },
  {
    "id": "Q115",
    "no": "Q115",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Day In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)"
    },
    "topicNo": "1",
    "q": {
      "ko": "비용과 결제 얼마인가요? 무료인가요, 아니면 별도 요금이 있나요? 등록과 동시에 결제하나요, 아니면 교구에 직접 결제하나요?",
      "en": "What is the cost, and how is payment made? Is it free, or is there a separate fee? Is payment made at the time of registration, or directly to the diocese?",
      "es": "¿Cuál es el coste y cómo se paga? ¿Es gratuito o hay una cuota aparte? ¿Se paga al inscribirse o directamente a la diócesis?",
      "fr": "Quel est le coût et comment paie-t-on ? Est-ce gratuit, ou y a-t-il des frais supplémentaires ? Paie-t-on lors de l'inscription, ou directement au diocèse ?"
    },
    "a": {
      "ko": "교구대회 순례자 기부금은 모든 교구 동일하게 $100입니다. 대부분의 교구는 홈스테이와 아침식사, 행사보험, 기념품을 제공합니다. 아침식사 이외 식사나 교통편 및 기타 비용은 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "The pilgrim donation for the Days in the Dioceses is the same in all dioceses: $100. Most dioceses provide a homestay, breakfast, event insurance and souvenirs. For meals other than breakfast, transport and other costs, please contact the diocese you wish to attend directly.",
      "es": "El donativo del peregrino para los Días en las Diócesis es igual en todas las diócesis: 100 $. La mayoría de las diócesis ofrecen alojamiento en familia, desayuno, seguro del evento y recuerdos. Para las comidas distintas del desayuno, el transporte y otros gastos, consulten directamente con la diócesis en la que deseen participar.",
      "fr": "Le don du pèlerin pour les Journées dans les diocèses est le même dans tous les diocèses : 100 $. La plupart des diocèses fournissent l'hébergement en famille, le petit-déjeuner, l'assurance de l'événement et des souvenirs. Pour les repas autres que le petit-déjeuner, le transport et les autres frais, veuillez contacter directement le diocèse auquel vous souhaitez participer."
    }
  },
  {
    "id": "Q116",
    "no": "Q116",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "월드컵경기장과 평화공원 관련 상황이 매우 우려됩니다. 스타디움 수용 인원이 6만 명이라 사람들을 공평하게 순환시킬 기회가 없을 것입니다. 많은 사람에게 매우 불공평하게 느껴질 것이며, 이 계획은 여전히 많은 청년을 배제하고 거부하는 결과가 될 것입니다. 평화공원/월드컵경기장에서 열리는 세 행사 각각에서 실내외 좌석은 어떤 기준으로 그룹을 선정하나요? 추첨인가요? 이것이 배제적으로 보이지 않게 하려면 어떻게 해야 할까요? 마치 '가진 자와 못 가진 자'를 나누는 상황처럼 보입니다. 청년들에게는 배타적이지 않은 무언가가 필요합니다. 교회가 그들을 또다시 거부하는 조직이 되지 않았으면 합니다.",
      "en": "We are very concerned about the situation regarding the World Cup Stadium and the Peace Park. The stadium holds 60,000 people, so there will be no opportunity to rotate people fairly. It will feel very unfair to many, and this plan will still result in many young people being excluded and turned away. For each of the three events held at the Peace Park/World Cup Stadium, on what basis will groups be selected for indoor and outdoor seats? Is it by lottery? What can be done so that this does not look exclusionary? It looks like a situation that divides the 'haves' and the 'have-nots'. Young people need something that is not exclusive. We hope the Church will not once again become an organisation that rejects them.",
      "es": "Nos preocupa mucho la situación del Estadio de la Copa del Mundo y el Parque de la Paz. El estadio tiene capacidad para 60.000 personas, así que no habrá oportunidad de rotar a la gente de forma justa. Muchos lo sentirán como algo muy injusto, y este plan seguirá dejando fuera y rechazando a muchos jóvenes. En cada uno de los tres actos del Parque de la Paz/Estadio de la Copa del Mundo, ¿con qué criterio se seleccionará a los grupos para los asientos interiores y exteriores? ¿Por sorteo? ¿Qué se puede hacer para que esto no parezca excluyente? Parece una situación que divide entre 'los que tienen y los que no'. Los jóvenes necesitan algo que no sea excluyente. Esperamos que la Iglesia no vuelva a ser una organización que los rechaza.",
      "fr": "La situation concernant le Stade de la Coupe du monde et le Parc de la Paix nous inquiète beaucoup. Le stade compte 60 000 places ; il n'y aura donc pas de possibilité de faire tourner les gens équitablement. Beaucoup le vivront comme une grande injustice, et ce projet aboutira encore à exclure et à refouler de nombreux jeunes. Pour chacun des trois événements au Parc de la Paix/Stade de la Coupe du monde, selon quels critères les groupes seront-ils sélectionnés pour les places à l'intérieur et à l'extérieur ? Par tirage au sort ? Que faire pour que cela ne paraisse pas excluant ? On dirait une situation qui sépare 'ceux qui ont' et 'ceux qui n'ont pas'. Les jeunes ont besoin de quelque chose qui ne soit pas exclusif. Nous espérons que l'Église ne redeviendra pas une organisation qui les rejette."
    },
    "a": {
      "ko": "행사를 담당하는 입장에서 질문자의 우려스러운 마음을 충분히 이해합니다. 그러한 걱정이 불공평함이 되지 않도록 소통의 원칙과 기준을 세우고 배정할 것입니다. 또한 경기장 내부에 앉는것이 특권이 되지 않고 평화의 공원에 앉는것이 소외가 되지 않도록 여러 배려와 소통의 장치들을 마련할 것입니다.",
      "en": "As those responsible for the event, we fully understand the questioner's concern. We will set principles and criteria for communication and allocation so that such worries do not turn into unfairness. We will also put in place various considerations and means of communication so that sitting inside the stadium does not become a privilege and sitting in the Peace Park does not mean being left out.",
      "es": "Como responsables del evento, comprendemos plenamente la preocupación de quien pregunta. Estableceremos principios y criterios de comunicación y asignación para que esa preocupación no se convierta en injusticia. Además, pondremos en marcha diversas medidas de atención y comunicación para que sentarse dentro del estadio no sea un privilegio y sentarse en el Parque de la Paz no signifique quedar al margen.",
      "fr": "En tant que responsables de l'événement, nous comprenons pleinement l'inquiétude exprimée. Nous définirons des principes et des critères de communication et d'attribution afin que cette inquiétude ne se transforme pas en injustice. Nous mettrons aussi en place diverses attentions et moyens de communication pour qu'être assis dans le stade ne soit pas un privilège et qu'être assis dans le Parc de la Paix ne soit pas une mise à l'écart."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome · Way of the Cross",
      "es": "Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "subNo": "a"
  },
  {
    "id": "Q117",
    "no": "Q117",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "십자가의 길 구분에 중미와 카리브해 지역이 보이지 않습니다. 고려될 예정인가요?",
      "en": "Central America and the Caribbean do not appear in the divisions for the Way of the Cross. Will they be considered?",
      "es": "En las divisiones del Vía Crucis no aparecen Centroamérica y el Caribe. ¿Se tendrán en cuenta?",
      "fr": "L'Amérique centrale et les Caraïbes n'apparaissent pas dans les divisions du Chemin de croix. Seront-elles prises en compte ?"
    },
    "a": {
      "ko": "십자가의 길과 본대회의 모든 행사의 대륙구분은 교황청에서 나누는 대륙을 기준으로 구분합니다.",
      "en": "The continental divisions for the Way of the Cross and all events of the main event are based on the continents as divided by the Holy See.",
      "es": "La división por continentes del Vía Crucis y de todos los actos del evento principal se basa en los continentes según la división de la Santa Sede.",
      "fr": "La répartition par continent du Chemin de croix et de toutes les célébrations de l'événement principal se fonde sur les continents tels que définis par le Saint-Siège."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome · Way of the Cross",
      "es": "Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "subNo": "a"
  },
  {
    "id": "Q118",
    "no": "Q118",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "개회 미사, 교황 환영식, 십자가의 길 등 주요 행사에서 스타디움 내부와 외부 구역은 어떤 기준으로 그룹과 순례자에게 배정되나요? 주교회의 대표단 등에 우선권이 있는지, 사전 지정 또는 추첨 방식인지 궁금합니다. 또한 스타디움 수용 인원을 초과하는 순례자들도 현장에서 행사와 미사에 의미 있게 참여할 수 있도록 어떤 방안이 마련되나요?",
      "en": "For the main events such as the Opening Mass, the Papal Welcome Ceremony and the Way of the Cross, on what basis will areas inside and outside the stadium be allocated to groups and pilgrims? We would like to know whether delegations from Bishops' Conferences, for example, will have priority, and whether allocation will be by advance assignment or by lottery. Also, what measures will be in place so that pilgrims exceeding the stadium's capacity can still take part meaningfully in the events and Masses on site?",
      "es": "En los actos principales, como la Misa de apertura, la ceremonia de acogida del Papa y el Vía Crucis, ¿con qué criterio se asignarán a los grupos y peregrinos las zonas dentro y fuera del estadio? Quisiéramos saber si, por ejemplo, las delegaciones de las Conferencias Episcopales tendrán prioridad, y si será por asignación previa o por sorteo. Además, ¿qué medidas habrá para que los peregrinos que superen la capacidad del estadio puedan participar de forma significativa en los actos y Misas sobre el terreno?",
      "fr": "Pour les principales célébrations, comme la messe d'ouverture, la cérémonie d'accueil du Pape et le Chemin de croix, selon quels critères les zones à l'intérieur et à l'extérieur du stade seront-elles attribuées aux groupes et aux pèlerins ? Nous aimerions savoir si, par exemple, les délégations des Conférences épiscopales auront la priorité, et s'il s'agira d'une attribution préalable ou d'un tirage au sort. Par ailleurs, quelles mesures sont prévues pour que les pèlerins excédant la capacité du stade puissent participer de façon significative aux célébrations et aux messes sur place ?"
    },
    "a": {
      "ko": "경기장내 좌석은 사전 배정을 하겠지만 일부 성직자들에게 우선권을 주지 않을 것입니다. 청년대회는 소외된 청년들과 장애인 그리고 각국의 청년 대표들을 우선 배려해야 합니다. 공원의 순례자들을 위한 다양한 장치와 배려 방안이 논의되고 있습니다. 경기장이 특권이 되지 않고 공원에 앉아도 아쉽지 않도록 하는 다양한 배려와 소통의 방안들을 준비중입니다.",
      "en": "Seats in the stadium will be allocated in advance, but priority will not be given to certain clergy. The Youth Day should give priority consideration to marginalised young people, people with disabilities and youth representatives from each country. Various arrangements and considerations for pilgrims in the park are being discussed. We are preparing various considerations and means of communication so that the stadium does not become a privilege and so that sitting in the park does not feel like missing out.",
      "es": "Los asientos del estadio se asignarán con antelación, pero no se dará prioridad a determinados clérigos. La Jornada de la Juventud debe dar prioridad a los jóvenes marginados, a las personas con discapacidad y a los jóvenes representantes de cada país. Se están estudiando diversos medios y medidas de atención para los peregrinos del parque. Estamos preparando diversas formas de atención y comunicación para que el estadio no sea un privilegio y para que sentarse en el parque no deje sensación de perderse algo.",
      "fr": "Les places dans le stade seront attribuées à l'avance, mais aucune priorité ne sera accordée à certains membres du clergé. Les Journées de la jeunesse doivent accorder une attention prioritaire aux jeunes marginalisés, aux personnes handicapées et aux jeunes représentants de chaque pays. Divers dispositifs et attentions pour les pèlerins du parc sont à l'étude. Nous préparons diverses attentions et moyens de communication pour que le stade ne soit pas un privilège et qu'être assis dans le parc ne laisse pas de regret."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome · Way of the Cross",
      "es": "Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "subNo": "a"
  },
  {
    "id": "Q119",
    "no": "Q119",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "행사가 스타디움 안에서 폐쇄적으로 진행되어 고립된 느낌을 줄까 걱정됩니다. 교황님께서 가까이 다가가는 목자가 되고자 하시더라도, 이것이 모두를 위한 대회라는 느낌을 갖기 어려울 것 같습니다.",
      "en": "We are worried that the events will be held behind closed doors inside the stadium and feel isolated. Even if the Holy Father wishes to be a shepherd who draws close, it may be hard to feel that this is an event for everyone.",
      "es": "Nos preocupa que los actos se desarrollen de forma cerrada dentro del estadio y den una sensación de aislamiento. Aunque el Papa desee ser un pastor cercano, puede ser difícil sentir que es un evento para todos.",
      "fr": "Nous craignons que les célébrations se déroulent en vase clos à l'intérieur du stade et donnent une impression d'isolement. Même si le Saint-Père veut être un pasteur proche, il pourrait être difficile de sentir que cet événement est pour tous."
    },
    "a": {
      "ko": "대회가 경기장이라는 공간에 고립되어 진행되지 않도록 다양한 방법을 고민 중입니다. 경기장과 서울을 넘어 지구 반대편에 있는 청년들은 물론이고, 경기장 외부의 청년들과 소통하는 다양한 방법을 준비중입니다.",
      "en": "We are considering various ways to ensure that the event is not held in isolation within the stadium. We are preparing various ways to connect not only with young people beyond the stadium and Seoul, on the other side of the world, but also with young people outside the stadium.",
      "es": "Estamos estudiando diversas formas de evitar que el evento se desarrolle aislado dentro del estadio. Estamos preparando diversas formas de conectar no solo con los jóvenes del otro lado del mundo, más allá del estadio y de Seúl, sino también con los jóvenes que estén fuera del estadio.",
      "fr": "Nous réfléchissons à diverses manières d'éviter que l'événement se déroule isolé dans l'enceinte du stade. Nous préparons divers moyens de communiquer non seulement avec les jeunes de l'autre côté du monde, au-delà du stade et de Séoul, mais aussi avec les jeunes qui se trouveront à l'extérieur du stade."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome · Way of the Cross",
      "es": "Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "subNo": "a"
  },
  {
    "id": "Q120",
    "no": "Q120",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "현재 교통편이 저희를 어디에 내려줄지, 그리고 그곳에서 폐막 미사 장소까지 청년들이 대략 얼마나 걸어야 하는지에 대해 명확한 정보가 있나요?",
      "en": "Is there currently clear information on where the transport will drop us off and roughly how far young people will have to walk from there to the closing Mass venue?",
      "es": "¿Hay actualmente información clara sobre dónde nos dejará el transporte y cuánto tendrán que caminar aproximadamente los jóvenes desde allí hasta el lugar de la Misa de clausura?",
      "fr": "Dispose-t-on actuellement d'informations claires sur l'endroit où les transports nous déposeront et sur la distance approximative que les jeunes devront parcourir à pied jusqu'au lieu de la messe de clôture ?"
    },
    "a": {
      "ko": "현재 운영계획 작성 중이며, 대회 직전 순례자를 위한 수송/교통가이드 배포 예정입니다.",
      "en": "The operating plan is currently being drawn up, and a transport/travel guide for pilgrims will be distributed shortly before the event.",
      "es": "El plan de funcionamiento se está elaborando, y poco antes del evento se distribuirá una guía de transporte para los peregrinos.",
      "fr": "Le plan opérationnel est en cours d'élaboration, et un guide des transports et déplacements sera distribué aux pèlerins peu avant l'événement."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q121",
    "no": "Q121",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "폐막미사 장소에 관한 기밀 정보에 대해 답변 부탁드립니다. 이 정보를 물어볼 주교님들과 지도자분들께는 공유할 수 없다는 말씀이신가요? 내부적으로 공유하는 것은 괜찮은가요? 아니면 이 정보가 이 방 안에만 머물러야 한다는 말씀이신가요?",
      "en": "Please answer regarding the confidential information on the closing Mass venue. Do you mean that it cannot be shared with the bishops and leaders who will ask us about it? Is it all right to share it internally? Or do you mean that this information must stay within this room?",
      "es": "Les pedimos una respuesta sobre la información confidencial del lugar de la Misa de clausura. ¿Quieren decir que no podemos compartirla con los obispos y responsables que nos pregunten? ¿Se puede compartir internamente? ¿O quieren decir que esta información debe quedarse en esta sala?",
      "fr": "Merci de répondre au sujet des informations confidentielles sur le lieu de la messe de clôture. Voulez-vous dire que nous ne pouvons pas les partager avec les évêques et responsables qui nous interrogeront ? Peut-on les partager en interne ? Ou ces informations doivent-elles rester dans cette salle ?"
    },
    "a": {
      "ko": "폐막미사 장소에 대한 정보는 주교회의와 교구 차원의 내부 공유가 가능합니다. 하지만 공식적인 발표가 나기 전에 공적인 매체(방송, 인터넷, 유튜브, 신문기사, 개인SNS 등)으로는 공유해서는 안됩니다. 발표가 되기 전까지 기도하는 마음으로 기다려 주시기 바랍니다.",
      "en": "Information about the closing Mass venue may be shared internally at the level of Bishops' Conferences and dioceses. However, it must not be shared through public media (broadcasting, the internet, YouTube, newspaper articles, personal social media, etc.) before the official announcement. Please wait prayerfully until it is announced.",
      "es": "La información sobre el lugar de la Misa de clausura puede compartirse internamente a nivel de Conferencias Episcopales y diócesis. Sin embargo, no debe compartirse en medios públicos (televisión, internet, YouTube, artículos de prensa, redes sociales personales, etc.) antes del anuncio oficial. Les pedimos que esperen con espíritu de oración hasta que se anuncie.",
      "fr": "Les informations sur le lieu de la messe de clôture peuvent être partagées en interne au niveau des Conférences épiscopales et des diocèses. Elles ne doivent toutefois pas être diffusées dans les médias publics (télévision, Internet, YouTube, articles de presse, réseaux sociaux personnels, etc.) avant l'annonce officielle. Nous vous invitons à attendre dans la prière jusqu'à l'annonce."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q122",
    "no": "Q122",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "폐막미사 장소에 대해 여쭤보겠습니다. A1과 A3 구역에 신부님들을 배치해 주실 수 있을까요? 그래야 청소년들도 A2 구역, 즉 무대 바로 앞쪽에 자리를 잡을 수 있을 것 같습니다.",
      "en": "We would like to ask about the closing Mass venue. Could priests be placed in areas A1 and A3? That way, young people could also take places in area A2, right in front of the stage.",
      "es": "Quisiéramos preguntar por el lugar de la Misa de clausura. ¿Podrían ubicar a los sacerdotes en las zonas A1 y A3? Así los jóvenes también podrían situarse en la zona A2, justo delante del escenario.",
      "fr": "Nous aimerions vous interroger sur le lieu de la messe de clôture. Pourriez-vous placer les prêtres dans les zones A1 et A3 ? Ainsi, les jeunes pourraient eux aussi prendre place dans la zone A2, juste devant la scène."
    },
    "a": {
      "ko": "무대 전면의 구역들은 특별히 관리될것입니다. 사제석은 별도의 전면구역에 배정계획중이고 대표청년들, 소외계층의 청년들과 특수참가자들은 별도로 관리되어 무대 앞자리에 배석할 것입니다. 구체적인 좌석배치는 순례자 등록 마감이 되어야 확정됩니다.",
      "en": "The areas in front of the stage will be specially managed. Seating for priests is planned in a separate front area, and youth representatives, young people from marginalised backgrounds and special participants will be managed separately and seated at the front of the stage. The specific seating arrangements will be confirmed only after pilgrim registration closes.",
      "es": "Las zonas situadas delante del escenario se gestionarán de forma especial. Está previsto ubicar los asientos de los sacerdotes en una zona delantera aparte, y los jóvenes representantes, los jóvenes de sectores marginados y los participantes especiales se gestionarán por separado y se sentarán delante del escenario. La distribución concreta de los asientos solo se confirmará cuando se cierre la inscripción de peregrinos.",
      "fr": "Les zones situées devant la scène feront l'objet d'une gestion particulière. Les places des prêtres sont prévues dans une zone avant distincte, et les jeunes représentants, les jeunes issus de milieux marginalisés et les participants particuliers seront gérés séparément et placés devant la scène. La disposition précise des places ne sera confirmée qu'après la clôture des inscriptions des pèlerins."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q123",
    "no": "Q123",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "개막 미사와 폐막 미사에 가져갈 수 있는 물품과 가져갈 수 없는 물품에 대한 목록이 미리 공개될 예정인가요? 예를 들어, 폐막 미사 때 텐트를 설치해도 되나요?",
      "en": "Will a list of items that can and cannot be brought to the Opening Mass and the closing Mass be published in advance? For example, can we pitch a tent at the closing Mass?",
      "es": "¿Se publicará con antelación una lista de los objetos que se pueden y no se pueden llevar a la Misa de apertura y a la de clausura? Por ejemplo, ¿se puede montar una tienda de campaña en la Misa de clausura?",
      "fr": "Une liste des objets autorisés et interdits à la messe d'ouverture et à la messe de clôture sera-t-elle publiée à l'avance ? Par exemple, peut-on monter une tente lors de la messe de clôture ?"
    },
    "a": {
      "ko": "반입가능 물품은 미리 공지될 것이고 상식적으로 하룻밤 비박에 필요한 물품 정도에 한해 가능합니다. 텐트설치는 불가합니다.",
      "en": "Permitted items will be announced in advance and, as a matter of common sense, will be limited to what is needed for one night of sleeping outdoors. Pitching tents is not allowed.",
      "es": "Los objetos permitidos se anunciarán con antelación y, por sentido común, se limitarán a lo necesario para pasar una noche al raso. No se permite montar tiendas de campaña.",
      "fr": "Les objets autorisés seront communiqués à l'avance et seront limités, en toute logique, à ce qui est nécessaire pour une nuit à la belle étoile. Le montage de tentes n'est pas autorisé."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q124",
    "no": "Q124",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "서울 공항에서 열리는 마지막 날 행사 때, 순례자들이 지정된 구역으로 이동하도록 안내해 줄 자원봉사자들이 배치될 예정인가요? 지난번 행사에서는 일부 순례자들이 지정된 구역을 따르지 않고 무대 근처 자리를 차지하려는 경향이 있었기 때문입니다.",
      "en": "For the final day's events at Seoul Air Base, will volunteers be deployed to guide pilgrims to their designated areas? At the last event, some pilgrims tended not to follow their designated areas and tried to take places near the stage.",
      "es": "En los actos del último día en la Base Aérea de Seúl, ¿habrá voluntarios que guíen a los peregrinos hacia sus zonas asignadas? En el último evento, algunos peregrinos tendían a no respetar sus zonas asignadas e intentaban ocupar sitios cerca del escenario.",
      "fr": "Pour les célébrations du dernier jour à la base aérienne de Séoul, des volontaires seront-ils déployés pour guider les pèlerins vers leurs zones désignées ? Lors du dernier événement, certains pèlerins avaient tendance à ne pas respecter leur zone et à chercher à se placer près de la scène."
    },
    "a": {
      "ko": "조직위는 대규모 인파가 몰릴 것으로 예상되는 모든 행사에 있어 안전을 최우선으로 고려하여 준비하고 있습니다. 순례자들의 안전을 위해 봉사자 배치를 포함한 많은 방법을 준비하고 실행하겠습니다.",
      "en": "The LOC is preparing all events expected to draw large crowds with safety as the top priority. For the safety of pilgrims, we will prepare and carry out many measures, including the deployment of volunteers.",
      "es": "El COL está preparando todos los actos en los que se prevé gran afluencia de público dando la máxima prioridad a la seguridad. Para la seguridad de los peregrinos, prepararemos y aplicaremos numerosas medidas, incluido el despliegue de voluntarios.",
      "fr": "Le COL prépare tous les événements susceptibles d'attirer de grandes foules en plaçant la sécurité au premier rang. Pour la sécurité des pèlerins, nous préparerons et mettrons en œuvre de nombreuses mesures, dont le déploiement de volontaires."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q125",
    "no": "Q125",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "밤샘기도와 미사에 참석하기 위해 서울 공항까지 어떻게 가면 될까요? 대중교통을 이용해서 갈 수 있을까요?",
      "en": "How can we get to Seoul Air Base to attend the Vigil and the Mass? Can we get there by public transport?",
      "es": "¿Cómo podemos llegar a la Base Aérea de Seúl para asistir a la Vigilia y a la Misa? ¿Se puede ir en transporte público?",
      "fr": "Comment se rendre à la base aérienne de Séoul pour participer à la veillée et à la messe ? Peut-on y aller en transports en commun ?"
    },
    "a": {
      "ko": "지하철과 도보로 이동합니다. 자세한 내용은 대회 직전 순례자를 위한\n수송/교통가이드를 배포해 안내 예정입니다.",
      "en": "You will travel by subway and on foot. Details will be provided in a\ntransport/travel guide for pilgrims to be distributed shortly before the event.",
      "es": "El desplazamiento será en metro y a pie. Los detalles se comunicarán en una\nguía de transporte para los peregrinos que se distribuirá poco antes del evento.",
      "fr": "Le déplacement se fera en métro et à pied. Les détails seront communiqués dans un\nguide des transports et déplacements distribué aux pèlerins peu avant l'événement."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q126",
    "no": "Q126",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "밤샘기도 중에 폭우가 내릴 경우를 대비한 대체 계획이 있나요?",
      "en": "Is there a contingency plan in case of heavy rain during the Vigil?",
      "es": "¿Hay un plan alternativo en caso de lluvias torrenciales durante la Vigilia?",
      "fr": "Existe-t-il un plan de repli en cas de fortes pluies pendant la veillée ?"
    },
    "a": {
      "ko": "밤샘기도 중에 폭우가 내릴 경우 현장에 설치된 대형텐트, 격납고 등을 활용할 예정이며,\n구체적인 우천 대응방안을 마련하고 있습니다.",
      "en": "In case of heavy rain during the Vigil, we plan to use large tents, hangars and other facilities set up on site,\nand we are preparing specific measures for wet weather.",
      "es": "En caso de lluvias torrenciales durante la Vigilia, está previsto utilizar las grandes carpas, hangares y otras instalaciones montadas en el lugar,\ny estamos preparando medidas concretas para caso de lluvia.",
      "fr": "En cas de fortes pluies pendant la veillée, nous prévoyons d'utiliser les grandes tentes, hangars et autres installations mis en place sur le site,\net nous préparons des mesures précises en cas de pluie."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q127",
    "no": "Q127",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 기간 중 예상되는 폭염과 폭우에 대비하여 철야기도 및 폐막 미사 등 야외 행사에서 순례자를 보호하기 위한 대책은 무엇인가요? 그늘막, 식수, 휴식 공간 등은 LOC에서 제공하는지, 모자·양산 등 참가자가 개별적으로 준비해야 할 사항도 안내해 주실 수 있나요?",
      "en": "What measures will be taken to protect pilgrims at outdoor events such as the Vigil and the closing Mass against the heatwaves and heavy rain expected during WYD? Will the LOC provide shade, drinking water and rest areas, and can you tell us what participants should prepare themselves, such as hats and parasols?",
      "es": "¿Qué medidas se tomarán para proteger a los peregrinos en los actos al aire libre, como la Vigilia y la Misa de clausura, frente a las olas de calor y lluvias torrenciales previstas durante la JMJ? ¿El COL proporcionará sombra, agua potable y zonas de descanso? ¿Pueden indicarnos qué deben preparar los participantes, como gorras o sombrillas?",
      "fr": "Quelles mesures seront prises pour protéger les pèlerins lors des célébrations en plein air, comme la veillée et la messe de clôture, face aux canicules et fortes pluies prévues pendant les JMJ ? Le COL fournira-t-il de l'ombre, de l'eau potable et des espaces de repos, et pouvez-vous nous indiquer ce que les participants doivent prévoir eux-mêmes, comme des chapeaux ou des ombrelles ?"
    },
    "a": {
      "ko": "행사장 내부에 폭염과 폭우에 대비할 수 있는 대기소나 천막을 설치할 예정이나 모든 사람을 수용하기 어렵기 때문에 각자 모자와 양산을 개별적으로 지참해야 하며 등록이 오픈되면 이를 다시 한 번 안내할 예정입니다.",
      "en": "We plan to set up waiting areas and tents within the venue to cope with heatwaves and heavy rain, but since it will be difficult to accommodate everyone, each person should bring their own hat and parasol. We will remind you of this again when registration opens.",
      "es": "Está previsto instalar dentro del recinto zonas de espera y carpas para hacer frente a las olas de calor y a las lluvias torrenciales, pero como será difícil acoger a todos, cada persona debe llevar su propia gorra y sombrilla. Lo recordaremos de nuevo cuando se abra la inscripción.",
      "fr": "Nous prévoyons d'installer sur le site des espaces d'attente et des tentes pour faire face aux canicules et aux fortes pluies, mais comme il sera difficile d'accueillir tout le monde, chacun devra apporter son propre chapeau et son ombrelle. Nous le rappellerons à l'ouverture des inscriptions."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q128",
    "no": "Q128",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "철야기도 장소에 예상보다 많은 순례자가 몰려 수용 인원을 초과하거나 혼잡이 발생할 경우, 입장하지 못하는 순례자가 없도록 어떤 입장 관리 및 대체 참여 방안을 마련할 예정인가요? 리스본에서는 일부 순례자가 혼잡으로 인해 철야기도 장소에 들어가지 못했습니다.",
      "en": "If more pilgrims than expected gather at the Vigil venue so that capacity is exceeded or congestion occurs, what entry management and alternative participation measures will be in place so that no pilgrim is unable to enter? In Lisbon, some pilgrims could not get into the Vigil venue because of congestion.",
      "es": "Si al lugar de la Vigilia acuden más peregrinos de lo previsto y se supera la capacidad o se produce aglomeración, ¿qué medidas de control de acceso y de participación alternativa habrá para que ningún peregrino se quede sin entrar? En Lisboa, algunos peregrinos no pudieron entrar en el lugar de la Vigilia por la aglomeración.",
      "fr": "Si davantage de pèlerins que prévu se rendent sur le lieu de la veillée, au point de dépasser la capacité ou de provoquer des encombrements, quelles mesures de gestion des entrées et de participation alternative sont prévues pour qu'aucun pèlerin ne reste dehors ? À Lisbonne, certains pèlerins n'ont pas pu accéder au lieu de la veillée à cause de la foule."
    },
    "a": {
      "ko": "그룹별로 순차이동 가이드를 제공하여 최대한 많은 순례자가 폐막미사에 올 수 있도록 준비중입니다.",
      "en": "We are preparing to provide guidance for staggered movement by group so that as many pilgrims as possible can come to the closing Mass.",
      "es": "Estamos preparando indicaciones para un desplazamiento escalonado por grupos, para que el mayor número posible de peregrinos pueda asistir a la Misa de clausura.",
      "fr": "Nous préparons des consignes de déplacement échelonné par groupe afin que le plus grand nombre possible de pèlerins puisse venir à la messe de clôture."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q129",
    "no": "Q129",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "주요 미사에서 사제의 공동집전과 부제의 전례 참여는 어떻게 운영되나요? 별도의 사전 등록이나 자격 확인이 필요한지, 장백의(Alb)와 영대(Stole) 등 전례복은 개인이 준비해야 하는지도 안내 부탁드립니다.",
      "en": "How will concelebration by priests and liturgical participation by deacons be organised at the main Masses? Please let us know whether separate advance registration or verification of eligibility is required, and whether vestments such as the alb and stole must be prepared individually.",
      "es": "¿Cómo se organizarán la concelebración de los sacerdotes y la participación litúrgica de los diáconos en las Misas principales? Indíquennos si se necesita inscripción previa o verificación específica, y si las vestiduras litúrgicas, como el alba (Alb) y la estola (Stole), debe llevarlas cada uno.",
      "fr": "Comment seront organisées la concélébration des prêtres et la participation liturgique des diacres lors des principales messes ? Merci de préciser si une inscription préalable ou une vérification particulière est nécessaire, et si les vêtements liturgiques, comme l'aube (Alb) et l'étole (Stole), doivent être apportés par chacun."
    },
    "a": {
      "ko": "개막미사 사제석은 무대 뒷 좌석을 전용좌석으로 고려중입니다. 폐막미사에는 보다 청년들을 제단에 가까이 배려하고자 청년들 좌-우측 맨 끝자리로 사제석을 고려중입니다. 기념 장백의와 영대는 당일 현장에서 무료로 배부합니다.",
      "en": "For the Opening Mass, we are considering the seats behind the stage as dedicated seating for priests. For the closing Mass, in order to bring young people closer to the altar, we are considering placing the priests' seating at the far left and right ends of the young people's area. Commemorative albs and stoles will be distributed free of charge on site on the day.",
      "es": "Para la Misa de apertura se está considerando reservar para los sacerdotes los asientos situados detrás del escenario. Para la Misa de clausura, con el fin de acercar más a los jóvenes al altar, se está considerando situar los asientos de los sacerdotes en los extremos izquierdo y derecho de la zona de los jóvenes. Ese día se repartirán gratuitamente sobre el terreno albas y estolas conmemorativas.",
      "fr": "Pour la messe d'ouverture, nous envisageons de réserver aux prêtres les places situées derrière la scène. Pour la messe de clôture, afin de rapprocher davantage les jeunes de l'autel, nous envisageons de placer les prêtres aux extrémités gauche et droite de la zone des jeunes. Des aubes et étoles commémoratives seront distribuées gratuitement sur place le jour même."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de clausura",
      "fr": "Veillée · Messe de clôture"
    },
    "subNo": "b"
  },
  {
    "id": "Q130",
    "no": "Q130",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD에서 국제 청년 단체와 외부 주최자가 일반 행사, 워크숍 또는 부대행사를 제안하고 참여·협력할 수 있는 기회와 절차는 어떻게 되나요? 젊은이 축제에 참가하려는 단체는 무엇을 준비해야 하며, 공간·부스의 신청 및 배정 절차와 참가 비용은 어떻게 되나요?",
      "en": "What opportunities and procedures are there at WYD for international youth organisations and external organisers to propose, take part in and collaborate on general events, workshops or side events? What must organisations wishing to take part in the Youth Festival prepare, and what are the procedures for applying for and allocating spaces and booths, and the participation costs?",
      "es": "¿Qué oportunidades y procedimientos hay en la JMJ para que organizaciones juveniles internacionales y organizadores externos propongan actos generales, talleres o actos paralelos, y participen y colaboren en ellos? ¿Qué deben preparar las organizaciones que deseen participar en el Festival de la Juventud, y cuáles son el procedimiento de solicitud y asignación de espacios y puestos y el coste de participación?",
      "fr": "Quelles possibilités et procédures existe-t-il aux JMJ pour que des organisations internationales de jeunes et des organisateurs extérieurs proposent des événements, ateliers ou activités annexes, et y participent ou collaborent ? Que doivent préparer les organisations souhaitant participer au Festival de la jeunesse, et quelles sont la procédure de demande et d'attribution des espaces et stands ainsi que les frais de participation ?"
    },
    "a": {
      "ko": "젊은이 축제에 참가하려는 단체는 등록시스템을 통해서 자신들이 하고자 하는 프로젝트를 신청할 수 있습니다. 공연, 강연, 전시, 기도와 찬양, 워크샵 등 다양한 장르의 프로젝트가 가능하고, 참가비는 무료입니다. 모든 나라에서 참여 가능합니다. 참가팀의 최종 선정은 교황청과 조직위가 하고, 장소는 조직위가 배정 및 제공합니다.",
      "en": "Organisations wishing to take part in the Youth Festival can apply for the project they want to run through the registration system. Projects in various genres are possible, such as performances, talks, exhibitions, prayer and praise, and workshops, and participation is free of charge. All countries can take part. The final selection of participating teams is made by the Holy See and the LOC, and venues are allocated and provided by the LOC.",
      "es": "Las organizaciones que deseen participar en el Festival de la Juventud pueden solicitar a través del sistema de inscripción el proyecto que quieran realizar. Son posibles proyectos de diversos géneros, como actuaciones, charlas, exposiciones, oración y alabanza o talleres, y la participación es gratuita. Pueden participar todos los países. La selección final de los equipos participantes la hacen la Santa Sede y el COL, y el COL asigna y proporciona los lugares.",
      "fr": "Les organisations souhaitant participer au Festival de la jeunesse peuvent proposer le projet qu'elles veulent réaliser via le système d'inscription. Des projets de genres variés sont possibles, comme des spectacles, conférences, expositions, prière et louange ou ateliers, et la participation est gratuite. Tous les pays peuvent participer. La sélection finale des équipes est faite par le Saint-Siège et le COL, et les lieux sont attribués et fournis par le COL."
    },
    "sub": {
      "ko": "젊은이 축제",
      "en": "Youth Festival",
      "es": "Festival de la Juventud",
      "fr": "Festival de la jeunesse"
    },
    "subNo": "c"
  },
  {
    "id": "Q131",
    "no": "Q131",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "다른 나라의 청년들은 그들의 젊은이 축제를 어떻게 공연하나요? 등록이 필요한가요? 행사장이 배정되나요? 참가비를 내야 하나요!",
      "en": "How do young people from other countries perform at their Youth Festival? Is registration required? Are venues allocated? Do they have to pay a participation fee?",
      "es": "¿Cómo actúan los jóvenes de otros países en su Festival de la Juventud? ¿Hay que inscribirse? ¿Se asignan lugares? ¿Hay que pagar una cuota de participación?",
      "fr": "Comment les jeunes d'autres pays se produisent-ils lors de leur Festival de la jeunesse ? Faut-il s'inscrire ? Des lieux sont-ils attribués ? Faut-il payer des frais de participation ?"
    },
    "a": {
      "ko": "젊은이 축제와 성소박람회는 본대회 기간 동안만 본대회 개최교구에서 운영됩니다. 참가를 원하는 그룹이나 단체는 등록시스템을 통하여 신청할 수 있습니다. 젊은이 축제는 참가비가 없으며, 성소박람회는 부스 1개일 때 700 미국달러, 부스 2개일 때 1,300 미국달러의 부스 비용이 필요합니다. 젊은이 축제의 경우, 프로젝트를 운영하는 팀이 원하는 대로 언어를 결정할 수 있습니다. 대부분 영어를 포함합니다.",
      "en": "The Youth Festival and the Vocations Fair run only during the main event, in the diocese hosting the main event. Groups or organisations wishing to take part can apply through the registration system. There is no participation fee for the Youth Festival; for the Vocations Fair, a booth fee of 700 US dollars for one booth or 1,300 US dollars for two booths is required. For the Youth Festival, the team running the project can choose the language as it wishes. Most include English.",
      "es": "El Festival de la Juventud y la Feria Vocacional solo se celebran durante el evento principal, en la diócesis sede del evento principal. Los grupos u organizaciones que deseen participar pueden solicitarlo a través del sistema de inscripción. El Festival de la Juventud no tiene cuota de participación; para la Feria Vocacional se requiere un coste de 700 dólares estadounidenses por un puesto o 1.300 dólares estadounidenses por dos puestos. En el Festival de la Juventud, el equipo que realiza el proyecto puede elegir el idioma libremente. La mayoría incluye el inglés.",
      "fr": "Le Festival de la jeunesse et la Foire des vocations n'ont lieu que pendant l'événement principal, dans le diocèse hôte de l'événement principal. Les groupes ou organisations souhaitant y participer peuvent faire leur demande via le système d'inscription. Le Festival de la jeunesse est gratuit ; pour la Foire des vocations, des frais de stand de 700 dollars américains pour un stand ou de 1 300 dollars américains pour deux stands sont demandés. Pour le Festival de la jeunesse, l'équipe qui porte le projet peut choisir librement la langue. La plupart incluent l'anglais."
    },
    "sub": {
      "ko": "젊은이 축제",
      "en": "Youth Festival",
      "es": "Festival de la Juventud",
      "fr": "Festival de la jeunesse"
    },
    "subNo": "c"
  },
  {
    "id": "Q132",
    "no": "Q132",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "젊은이 축제와 성소 박람회에 참가하는 절차는 어떤 웹사이트나 홈페이지에서 확인할 수 있나요? 어떻게 알 수 있나요? 이 경험을 더욱 풍요롭게 만들기 위해 우리 각국에서 해당 정보를 널리 알릴 수 있을까요? WYD의 City of Joy, 성소 박람회 및 젊은이 축제는 언제, 어디에서, 어떤 형태로 운영되며, 여러 교구에 분산하여 개최되는지와 언어권별 프로그램이 마련되는지 궁금합니다.",
      "en": "On which website can we find the procedure for taking part in the Youth Festival and the Vocations Fair? How can we find out? To make this experience even richer, can we publicise this information widely in our countries? We would like to know when, where and in what form the City of Joy, the Vocations Fair and the Youth Festival will run at WYD, whether they will be spread across several dioceses, and whether there will be programmes for different language groups.",
      "es": "¿En qué web podemos consultar el procedimiento para participar en el Festival de la Juventud y la Feria Vocacional? ¿Cómo podemos informarnos? Para enriquecer aún más esta experiencia, ¿podemos difundir ampliamente esta información en nuestros países? Quisiéramos saber cuándo, dónde y en qué formato se celebrarán la City of Joy, la Feria Vocacional y el Festival de la Juventud en la JMJ, si se repartirán entre varias diócesis y si habrá programas por grupos lingüísticos.",
      "fr": "Sur quel site peut-on consulter la procédure pour participer au Festival de la jeunesse et à la Foire des vocations ? Comment s'informer ? Pour enrichir encore cette expérience, pouvons-nous diffuser largement ces informations dans nos pays ? Nous aimerions savoir quand, où et sous quelle forme se dérouleront la City of Joy, la Foire des vocations et le Festival de la jeunesse aux JMJ, s'ils seront répartis entre plusieurs diocèses et si des programmes par groupe linguistique sont prévus."
    },
    "a": {
      "ko": "젊은이 축제와 성소박람회는 등록시스템을 통하여 신청할 수 있습니다. 등록시스템은 10월말경 오픈 예정이며, 공식 홈페이지(https://wydseoul.org/)를 통하여 접근할 수 있습니다. 이 경험을 더욱 풍요롭게 하기 위하여 공식 홈페이지를 널리 홍보해주시기를 부탁드립니다.",
      "en": "You can apply for the Youth Festival and the Vocations Fair through the registration system. The registration system is scheduled to open around the end of October and can be accessed through the official website (https://wydseoul.org/). To make this experience even richer, we ask you to promote the official website widely.",
      "es": "Se puede solicitar la participación en el Festival de la Juventud y la Feria Vocacional a través del sistema de inscripción. Está previsto que el sistema de inscripción se abra hacia finales de octubre, y se puede acceder a él desde la web oficial (https://wydseoul.org/). Para enriquecer aún más esta experiencia, les pedimos que difundan ampliamente la web oficial.",
      "fr": "Vous pouvez vous inscrire au Festival de la jeunesse et à la Foire des vocations via le système d'inscription. Celui-ci devrait ouvrir vers la fin octobre et sera accessible depuis le site officiel (https://wydseoul.org/). Pour enrichir encore cette expérience, nous vous invitons à faire largement connaître le site officiel."
    },
    "sub": {
      "ko": "젊은이 축제",
      "en": "Youth Festival",
      "es": "Festival de la Juventud",
      "fr": "Festival de la jeunesse"
    },
    "subNo": "c"
  },
  {
    "id": "Q133",
    "no": "Q133",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "‘화해의 공원’ 기간 동안 사제들은 고해성사를 듣기 위해 어떻게 등록하나요?",
      "en": "How do priests register to hear confessions during the 'Park of Reconciliation'?",
      "es": "¿Cómo se inscriben los sacerdotes para confesar durante el 'Parque de la Reconciliación'?",
      "fr": "Comment les prêtres s'inscrivent-ils pour entendre les confessions pendant le 'Parc de la Réconciliation' ?"
    },
    "a": {
      "ko": "사제들은 등록시스템에서 순례자 그룹 등록 시에 함께 등록합니다. 순례자 그룹 등록은 그룹 대표가 하게 되어있으므로 '화해의 공원'에서 고해성사를 듣고자 하는 사제들은 본인이 가능한 날짜와 시간을 대표에게 알리면 됩니다. 그룹없이 홀로 순례하는 사제는 1인그룹으로 등록가능합니다.",
      "en": "Priests register in the registration system together with their pilgrim group. Since pilgrim group registration is done by the group leader, priests who wish to hear confessions at the 'Park of Reconciliation' should tell their group leader the dates and times they are available. Priests travelling alone without a group can register as a one-person group.",
      "es": "Los sacerdotes se inscriben en el sistema de inscripción junto con su grupo de peregrinos. Como la inscripción del grupo la hace el líder, los sacerdotes que deseen confesar en el 'Parque de la Reconciliación' deben comunicarle las fechas y horas en que están disponibles. Los sacerdotes que peregrinan solos, sin grupo, pueden inscribirse como grupo de una persona.",
      "fr": "Les prêtres s'inscrivent dans le système d'inscription avec leur groupe de pèlerins. L'inscription du groupe étant faite par le responsable, les prêtres qui souhaitent entendre les confessions au 'Parc de la Réconciliation' doivent lui indiquer les dates et heures où ils sont disponibles. Les prêtres qui font le pèlerinage seuls, sans groupe, peuvent s'inscrire comme groupe d'une personne."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Catholic Cultural Fair (Vocations Fair · Park of Reconciliation)",
      "es": "Feria Cultural Católica (Feria Vocacional · Parque de la Reconciliación)",
      "fr": "Foire culturelle catholique (Foire des vocations · Parc de la Réconciliation)"
    },
    "subNo": "d"
  },
  {
    "id": "Q134",
    "no": "Q134",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "성소 박람회의 ‘부스’란 무엇을 의미하나요?",
      "en": "What does a 'booth' at the Vocations Fair mean?",
      "es": "¿Qué significa 'puesto' en la Feria Vocacional?",
      "fr": "Que signifie 'stand' à la Foire des vocations ?"
    },
    "a": {
      "ko": "성소박람회(가톨릭문화박람회)에서 '부스'란 박람회에 참가하는 각 수도회 또는 사도직/신심 단체에게 주어지는 3m X 3m 짜리의 텐트 또는 스탠드로 만들어진 공간을 의미합니다. 한 수도회 당 최대 2개까지 신청할 수 있습니다.",
      "en": "At the Vocations Fair (Catholic Cultural Fair), a 'booth' means a 3m x 3m space made up of a tent or stand given to each religious institute or apostolic/devotional association taking part in the fair. Each religious institute can apply for up to two.",
      "es": "En la Feria Vocacional (Feria Cultural Católica), un 'puesto' es un espacio de 3 m x 3 m formado por una carpa o un stand que se asigna a cada instituto religioso o asociación apostólica/de piedad que participa en la feria. Cada instituto religioso puede solicitar hasta dos.",
      "fr": "À la Foire des vocations (Foire culturelle catholique), un 'stand' désigne un espace de 3 m x 3 m constitué d'une tente ou d'un stand attribué à chaque institut religieux ou association apostolique ou de piété participant à la foire. Chaque institut religieux peut en demander deux au maximum."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Catholic Cultural Fair (Vocations Fair · Park of Reconciliation)",
      "es": "Feria Cultural Católica (Feria Vocacional · Parque de la Reconciliación)",
      "fr": "Foire culturelle catholique (Foire des vocations · Parc de la Réconciliation)"
    },
    "subNo": "d"
  },
  {
    "id": "Q135",
    "no": "Q135",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "성소 박람회의 내용은 무엇인가요? 참가비는 구체적으로 어떤 용도로 사용되나요?",
      "en": "What does the Vocations Fair consist of? What exactly is the participation fee used for?",
      "es": "¿En qué consiste la Feria Vocacional? ¿Para qué se usa concretamente la cuota de participación?",
      "fr": "En quoi consiste la Foire des vocations ? À quoi servent concrètement les frais de participation ?"
    },
    "a": {
      "ko": "성소박람회는 참가하는 각 수도회 또는 단체의 카리스마와 영성을 순례자들과 나눔으로써 순례자들로 하여금 자신의 부르심을 식별하도록 도와주는 행사입니다. 참가비용은 행사장 대여와 부스 설치를 위하여 사용됩니다.",
      "en": "The Vocations Fair is an event that helps pilgrims discern their own calling by sharing with them the charism and spirituality of each participating religious institute or association. The participation fee is used to rent the venue and set up the booths.",
      "es": "La Feria Vocacional es un evento que ayuda a los peregrinos a discernir su propia vocación compartiendo con ellos el carisma y la espiritualidad de cada instituto religioso o asociación participante. La cuota de participación se destina al alquiler del recinto y al montaje de los puestos.",
      "fr": "La Foire des vocations est un événement qui aide les pèlerins à discerner leur propre vocation en partageant avec eux le charisme et la spiritualité de chaque institut religieux ou association participant. Les frais de participation servent à la location du site et à l'installation des stands."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Catholic Cultural Fair (Vocations Fair · Park of Reconciliation)",
      "es": "Feria Cultural Católica (Feria Vocacional · Parque de la Reconciliación)",
      "fr": "Foire culturelle catholique (Foire des vocations · Parc de la Réconciliation)"
    },
    "subNo": "d"
  },
  {
    "id": "Q136",
    "no": "Q136",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "고해성사에 참여하는 사제들의 선정 기준은 무엇입니까? 선별된 사제들만 참여할 수 있는 것입니까, 아니면 누구나 참여할 수 있습니까? 사제들은 등록 시에 참여 여부를 표시해야 합니까?",
      "en": "What are the criteria for selecting priests to hear confessions? Can only selected priests take part, or can anyone? Do priests need to indicate their participation when registering?",
      "es": "¿Cuál es el criterio para seleccionar a los sacerdotes que confesarán? ¿Solo pueden participar sacerdotes seleccionados o cualquiera? ¿Deben indicar los sacerdotes su participación al inscribirse?",
      "fr": "Selon quels critères les prêtres qui entendront les confessions sont-ils choisis ? Seuls des prêtres sélectionnés peuvent-ils participer, ou tous ? Les prêtres doivent-ils indiquer leur participation lors de l'inscription ?"
    },
    "a": {
      "ko": "사제라면 누구나 참여할 수 있으나 신분 검증을 위해 등록시스템에 등록되어야 합니다.",
      "en": "Any priest can take part, but they must be registered in the registration system for identity verification.",
      "es": "Cualquier sacerdote puede participar, pero debe estar inscrito en el sistema de inscripción para la verificación de su identidad.",
      "fr": "Tout prêtre peut participer, mais il doit être inscrit dans le système d'inscription pour la vérification de son identité."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Catholic Cultural Fair (Vocations Fair · Park of Reconciliation)",
      "es": "Feria Cultural Católica (Feria Vocacional · Parque de la Reconciliación)",
      "fr": "Foire culturelle catholique (Foire des vocations · Parc de la Réconciliation)"
    },
    "subNo": "d"
  },
  {
    "id": "Q137",
    "no": "Q137",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "화해의 공원은 이번 행사 기간 동안 며칠 동안 운영되나요? 하루 중 몇 시간 동안 고해 성사가 제공되나요? 청년들이 공원에 자유롭게 드나들 수 있나요? 로마에서 열린 희년 행사 당시에는 고해 성사가 이루어지는 장소로의 접근이 매우 제한적이었고, 거의 통제된 상태였습니다.",
      "en": "How many days will the Park of Reconciliation operate during this event? For how many hours a day will confession be available? Can young people move freely in and out of the park? During the Jubilee event in Rome, access to the places where confessions were heard was very limited, almost controlled.",
      "es": "¿Cuántos días funcionará el Parque de la Reconciliación durante este evento? ¿Cuántas horas al día habrá confesiones? ¿Podrán los jóvenes entrar y salir libremente del parque? Durante el Jubileo en Roma, el acceso a los lugares de confesión fue muy limitado y casi controlado.",
      "fr": "Combien de jours le Parc de la Réconciliation fonctionnera-t-il pendant l'événement ? Combien d'heures par jour les confessions seront-elles proposées ? Les jeunes pourront-ils entrer et sortir librement du parc ? Lors du Jubilé à Rome, l'accès aux lieux de confession était très limité, presque contrôlé."
    },
    "a": {
      "ko": "화해의 공원'는 본대회 주간 화요일부터 금요일까지 오후 1시부터 5시까지 진행됩니다.\n고해성사의 고해기밀 유지 때문에 청년들이 공원을 자유롭게 걸어다닐 수는 없습니다.\n정해진 코스와 봉사자의 안내에 따라 공원 입장이 가능합니다. 고해성사는 준비된 누구나 받을 수 있습니다.",
      "en": "The 'Park of Reconciliation' will run from Tuesday to Friday of the main event week, from 1 pm to 5 pm.\nBecause of the seal of confession, young people cannot walk freely around the park.\nEntry to the park is possible along a set route under the guidance of volunteers. Anyone who is prepared can receive the sacrament of confession.",
      "es": "El 'Parque de la Reconciliación' funcionará de martes a viernes de la semana del evento principal, de 13:00 a 17:00.\nPor el sigilo sacramental, los jóvenes no podrán pasear libremente por el parque.\nSe podrá entrar al parque siguiendo un recorrido establecido y las indicaciones de los voluntarios. Cualquier persona preparada puede recibir el sacramento de la confesión.",
      "fr": "Le 'Parc de la Réconciliation' fonctionnera du mardi au vendredi de la semaine de l'événement principal, de 13 h à 17 h.\nEn raison du secret de la confession, les jeunes ne pourront pas circuler librement dans le parc.\nL'entrée dans le parc se fera selon un parcours défini et sous la conduite des volontaires. Toute personne qui s'y est préparée peut recevoir le sacrement de la réconciliation."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Catholic Cultural Fair (Vocations Fair · Park of Reconciliation)",
      "es": "Feria Cultural Católica (Feria Vocacional · Parque de la Reconciliación)",
      "fr": "Foire culturelle catholique (Foire des vocations · Parc de la Réconciliation)"
    },
    "subNo": "d"
  },
  {
    "id": "Q138",
    "no": "Q138",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "호텔에 묵는 경우, 교리교육 장소로 가는 길을 어떻게 안내받을 수 있나요?",
      "en": "If we stay in a hotel, how will we be guided on the way to the catechesis location?",
      "es": "Si nos alojamos en un hotel, ¿cómo se nos indicará el camino al lugar de la catequesis?",
      "fr": "Si nous logeons à l'hôtel, comment serons-nous guidés jusqu'au lieu de la catéchèse ?"
    },
    "a": {
      "ko": "호텔 등 숙소를 직접 마련한 그룹도 배정된 교리교육 장소를 기준으로 이동하시면 됩니다. 교리교육 장소와 이동에 필요한 안내는 추후 공지할 예정입니다.",
      "en": "Groups that have arranged their own accommodation, such as hotels, should also travel based on their allocated catechesis location. Information on catechesis locations and how to get there will be announced later.",
      "es": "Los grupos que hayan organizado su propio alojamiento, como hoteles, también deben desplazarse según el lugar de catequesis asignado. La información sobre los lugares de catequesis y los desplazamientos se anunciará más adelante.",
      "fr": "Les groupes qui ont organisé leur propre hébergement, par exemple à l'hôtel, se rendront eux aussi au lieu de catéchèse qui leur a été attribué. Les informations sur les lieux de catéchèse et les déplacements seront communiquées ultérieurement."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q139",
    "no": "Q139",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "파나마에서는 사전 행사와 본 행사 전에 교리교육 자료를 제공해 주었습니다. 이번에도 그럴까요?",
      "en": "In Panama, catechesis materials were provided before the pre-events and the main event. Will that be the case this time too?",
      "es": "En Panamá se nos facilitaron materiales de catequesis antes de los actos previos y del evento principal. ¿Será así también esta vez?",
      "fr": "Au Panama, des supports de catéchèse avaient été fournis avant les pré-événements et l'événement principal. En sera-t-il de même cette fois-ci ?"
    },
    "a": {
      "ko": "가능하면 본행사 전에 제공되리라 생각합니다.",
      "en": "We expect them to be provided before the main event if possible.",
      "es": "Si es posible, prevemos que se faciliten antes del evento principal.",
      "fr": "Nous pensons qu'ils seront fournis avant l'événement principal, si possible."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q140",
    "no": "Q140",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "숙소가 서울에서 다소 떨어져 있는 경우에도 숙소 위치를 고려하여 가장 가까운 교리교육 장소로 배정받을 수 있나요?",
      "en": "Even if our accommodation is some distance from Seoul, can we be allocated to the nearest catechesis location, taking the location of our accommodation into account?",
      "es": "Aunque nuestro alojamiento esté algo alejado de Seúl, ¿se nos puede asignar el lugar de catequesis más cercano teniendo en cuenta la ubicación del alojamiento?",
      "fr": "Même si notre hébergement est assez éloigné de Séoul, pourrons-nous être affectés au lieu de catéchèse le plus proche en tenant compte de l'emplacement de l'hébergement ?"
    },
    "a": {
      "ko": "숙소에서 교리교육 장소까지의 경로와 소요 시간은 숙소 위치에 따라 달라지므로, 안내받은 장소의 주소를 기준으로 지도 앱 등을 통해 확인해 주시기 바랍니다.",
      "en": "The route and travel time from your accommodation to the catechesis location vary depending on where your accommodation is, so please check using a map app or similar, based on the address of the location you are given.",
      "es": "El trayecto y el tiempo desde el alojamiento hasta el lugar de catequesis varían según la ubicación del alojamiento, por lo que les pedimos que lo consulten con una app de mapas u otra herramienta a partir de la dirección del lugar que se les indique.",
      "fr": "Le trajet et le temps de parcours entre l'hébergement et le lieu de catéchèse varient selon l'emplacement de l'hébergement ; nous vous invitons donc à les vérifier avec une application de cartographie ou un outil similaire, à partir de l'adresse du lieu qui vous sera communiquée."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q141",
    "no": "Q141",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육은 어떻게 신청하며, 리스본 떄와 같이 참여형·역동적인 프로그램으로 진행될 예정인가요?",
      "en": "How do we apply for catechesis, and will it be run as an interactive, dynamic programme as in Lisbon?",
      "es": "¿Cómo se solicita la catequesis y se organizará como un programa participativo y dinámico como en Lisboa?",
      "fr": "Comment s'inscrit-on aux catéchèses, et seront-elles organisées sous forme de programme participatif et dynamique comme à Lisbonne ?"
    },
    "a": {
      "ko": "교리교육은 강사 선정 후 참여 인원을 예상하여 진행할 예정입니다. 리스본과 비슷하게 진행될 것이라 예상합니다.",
      "en": "Catechesis will be organised by estimating the number of participants after the speakers have been selected. We expect it to be run similarly to Lisbon.",
      "es": "Las catequesis se organizarán estimando el número de participantes una vez seleccionados los ponentes. Prevemos que se desarrollen de forma similar a Lisboa.",
      "fr": "Les catéchèses seront organisées en estimant le nombre de participants une fois les intervenants choisis. Nous pensons qu'elles se dérouleront de manière similaire à Lisbonne."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q142",
    "no": "Q142",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리 교육 시간에 사용할 언어들을 알려 주실 수 있나요?",
      "en": "Can you tell us which languages will be used during catechesis?",
      "es": "¿Pueden indicarnos en qué idiomas se impartirán las catequesis?",
      "fr": "Pouvez-vous nous indiquer les langues utilisées pendant les catéchèses ?"
    },
    "a": {
      "ko": "6개 공식언어로 진행되리라 예상합니다.",
      "en": "We expect it to be held in the six official languages.",
      "es": "Prevemos que se impartan en los seis idiomas oficiales.",
      "fr": "Nous prévoyons qu'elles soient données dans les six langues officielles."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q143",
    "no": "Q143",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육 장소는 언제 확정·안내되나요?",
      "en": "When will catechesis locations be confirmed and announced?",
      "es": "¿Cuándo se confirmarán y comunicarán los lugares de catequesis?",
      "fr": "Quand les lieux de catéchèse seront-ils confirmés et communiqués ?"
    },
    "a": {
      "ko": "대회 약 1개월 전 시점 부터 순차적으로 확정되어 메일로 안내될 예정입니다.",
      "en": "They will be confirmed in stages from about one month before the event and announced by email.",
      "es": "Se confirmarán de forma escalonada a partir de aproximadamente un mes antes del evento y se comunicarán por correo electrónico.",
      "fr": "Ils seront confirmés progressivement à partir d'environ un mois avant l'événement et communiqués par courriel."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q144",
    "no": "Q144",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "전체 등록 인원이 교리교육 장소의 수용 가능 인원을 초과할 경우, 모든 순례자가 교리교육에 참여할 수 있도록 어떤 방식으로 장소와 수용 인원을 확보·배정할 예정인가요?",
      "en": "If the total number of registered participants exceeds the capacity of the catechesis locations, how will venues and capacity be secured and allocated so that all pilgrims can take part in catechesis?",
      "es": "Si el número total de inscritos supera la capacidad de los lugares de catequesis, ¿cómo se conseguirán y asignarán los lugares y las plazas para que todos los peregrinos puedan participar en las catequesis?",
      "fr": "Si le nombre total d'inscrits dépasse la capacité des lieux de catéchèse, comment les lieux et les places seront-ils trouvés et attribués pour que tous les pèlerins puissent participer aux catéchèses ?"
    },
    "a": {
      "ko": "교리교육 장소는 지속적으로 확인 중에 있으며, 교리 교육을 신청한 참가자 모두 교육을 받을 수 있도록 최선을 다할 것입니다.",
      "en": "Catechesis locations are continually being checked, and we will do our best to ensure that all participants who have applied for catechesis can attend.",
      "es": "Se siguen comprobando de forma continua los lugares de catequesis, y haremos todo lo posible para que todos los participantes que hayan solicitado la catequesis puedan asistir.",
      "fr": "Les lieux de catéchèse font l'objet de vérifications continues, et nous ferons tout notre possible pour que tous les participants inscrits aux catéchèses puissent y assister."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q145",
    "no": "Q145",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육을 기획하고자 할 때 미리 알려야 하나요?",
      "en": "Do we need to give advance notice if we want to plan a catechesis session?",
      "es": "Si queremos organizar una catequesis, ¿debemos avisar con antelación?",
      "fr": "Faut-il prévenir à l'avance si l'on souhaite organiser une catéchèse ?"
    },
    "a": {
      "ko": "교리교육의 강사와 주제는 DLFL에서 선정합니다.",
      "en": "The speakers and themes for catechesis are selected by the DLFL.",
      "es": "Los ponentes y los temas de las catequesis los selecciona el DLFL.",
      "fr": "Les intervenants et les thèmes des catéchèses sont choisis par le DLFL."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  },
  {
    "id": "Q146",
    "no": "Q146",
    "section": {
      "ko": "프로그램",
      "en": "Programme",
      "es": "Programa",
      "fr": "Programme"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "Main Event (World Youth Day, WYD)",
      "es": "Evento principal (Jornada Mundial de la Juventud, JMJ)",
      "fr": "Événement principal (Journées mondiales de la jeunesse, JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육 진행자로 참여하려면 어떻게 해야 하나요?",
      "en": "What should we do to take part as a catechesis facilitator?",
      "es": "¿Qué debemos hacer para participar como animadores de la catequesis?",
      "fr": "Que faut-il faire pour participer comme animateur de catéchèse ?"
    },
    "a": {
      "ko": "교리교육에 관련하여 DLFL과 논의를 진행하면서 안내하도록 하겠습니다.",
      "en": "We will provide information as we proceed with discussions with the DLFL regarding catechesis.",
      "es": "Les informaremos a medida que avancemos en las conversaciones con el DLFL sobre las catequesis.",
      "fr": "Nous vous informerons au fur et à mesure des discussions avec le DLFL sur les catéchèses."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Meeting with Bishops (Catechesis)",
      "es": "Encuentro con los obispos (catequesis)",
      "fr": "Rencontre avec les évêques (catéchèse)"
    },
    "subNo": "e"
  }
];

// Opinions 시트
export const OPINIONS = [
  {
    "id": "O1",
    "no": 1,
    "topic": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "text": {
      "ko": "같은 숙소에서 화장실 하나당 25명이라니, 조금 부족해 보입니다.",
      "en": "Twenty-five people per toilet in the same accommodation seems a little insufficient.",
      "es": "Veinticinco personas por baño en un mismo alojamiento parece algo insuficiente.",
      "fr": "Vingt-cinq personnes par toilette dans un même hébergement, cela semble un peu insuffisant."
    }
  },
  {
    "id": "O2",
    "no": 2,
    "topic": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement"
    },
    "text": {
      "ko": "한 대표단이 자체적으로 호텔에 숙박할 경우, 나눔(교류)의 경험이 덜 풍성해질 수 있지 않을까요? 어떤 방안을 권장하시나요?",
      "en": "If a delegation stays in a hotel on its own, might the experience of sharing (exchange) be less rich? What would you recommend?",
      "es": "Si una delegación se aloja por su cuenta en un hotel, ¿no podría ser menos rica la experiencia de compartir (intercambio)? ¿Qué recomiendan?",
      "fr": "Si une délégation loge seule à l'hôtel, l'expérience du partage (des échanges) ne risque-t-elle pas d'être moins riche ? Que recommandez-vous ?"
    }
  },
  {
    "id": "O3",
    "no": 3,
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation"
    },
    "text": {
      "ko": "동일한 매크로그룹 내 숙박 포함·미포함 하위그룹이 함께 체크인할 수 있나요? 순례자 센터가 하나뿐이라 하위그룹들이 서로 다른 장소를 오가면 혼란스러울 수 있어 걱정됩니다.",
      "en": "Can Subgroups with and without accommodation within the same Macrogroup check in together? Since there is only one Pilgrim Centre, we are worried it could be confusing if the Subgroups have to move between different places.",
      "es": "¿Pueden acreditarse juntos los Subgrupos con y sin alojamiento de un mismo Macrogrupo? Como solo hay un Centro del Peregrino, nos preocupa que resulte confuso si los Subgrupos tienen que ir de un lugar a otro.",
      "fr": "Les Sous-groupes avec et sans hébergement d'un même Macrogroupe peuvent-ils être accrédités ensemble ? Comme il n'y a qu'un seul Centre des pèlerins, nous craignons que ce soit déroutant si les Sous-groupes doivent aller d'un lieu à l'autre."
    }
  },
  {
    "id": "O4",
    "no": 4,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "text": {
      "ko": "청년 순례자가 자국에서 개최국으로 왔다가 돌아가지 않고 이주민이나 난민 신청자가 되는 경우, 교회적 측면과 정부적 측면에서 각각 어떤 장단점이 있나요?",
      "en": "If young pilgrims come from their own country to the host country and do not return, becoming migrants or asylum seekers, what are the advantages and disadvantages from the Church's perspective and from the government's perspective respectively?",
      "es": "Si jóvenes peregrinos vienen de su país al país anfitrión y no regresan, convirtiéndose en migrantes o solicitantes de asilo, ¿qué ventajas e inconvenientes tiene esto desde el punto de vista de la Iglesia y desde el del Gobierno?",
      "fr": "Si de jeunes pèlerins viennent de leur pays dans le pays hôte et n'en repartent pas, devenant migrants ou demandeurs d'asile, quels en sont les avantages et les inconvénients du point de vue de l'Église et du point de vue du gouvernement ?"
    }
  },
  {
    "id": "O5",
    "no": 5,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "text": {
      "ko": "개신교 청년들을 포함하는 근거는 교회의 에큐메니즘(일치 운동) 교리에 어긋납니다. 그리스도인 청년을 조종하여 가톨릭으로 개종시키려는 것은 교회의 종교 간 대화 원칙에 위배됩니다. 이를 수정하시어 개신교 청년들을 '소품'처럼 이용하지 마시고 그들에게 합당한 존엄성을 갖고 대해주시기 바랍니다.",
      "en": "The rationale for including Protestant young people goes against the Church's teaching on ecumenism (the unity movement). Manipulating Christian young people in order to convert them to Catholicism violates the Church's principles of interreligious dialogue. Please correct this, do not use Protestant young people like 'props', and treat them with the dignity they deserve.",
      "es": "El fundamento para incluir a jóvenes protestantes contradice la doctrina de la Iglesia sobre el ecumenismo (movimiento de unidad). Manipular a jóvenes cristianos para convertirlos al catolicismo vulnera los principios de diálogo interreligioso de la Iglesia. Les pedimos que lo corrijan, que no utilicen a los jóvenes protestantes como 'atrezo' y que los traten con la dignidad que merecen.",
      "fr": "La justification de l'inclusion de jeunes protestants va à l'encontre de l'enseignement de l'Église sur l'œcuménisme (mouvement pour l'unité). Manipuler de jeunes chrétiens pour les convertir au catholicisme contrevient aux principes du dialogue interreligieux de l'Église. Nous vous demandons de corriger cela, de ne pas utiliser les jeunes protestants comme des 'accessoires' et de les traiter avec la dignité qui leur est due."
    }
  },
  {
    "id": "O6",
    "no": 6,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "text": {
      "ko": "많은 젊은이들에게 WYD는 전 세계의 다양한 언어와 문화를 접하는 진정한 경험입니다. 하지만 이는 또한 아프리카나 중동 국가 중 한 곳에서 열릴 수도 있는 WYD를 앞두고, 그리고 바로 이곳 서울에서 열리는 이번 대회를 통해, 동방 가톨릭 교회들의 참여를 통해 교회의 보편성을 어떻게 더 구체적으로 구현할 수 있을지 보여주는 가톨릭 교회의 경험이기도 합니다.",
      "en": "For many young people, WYD is a genuine experience of encountering the diverse languages and cultures of the whole world. But it is also an experience of the Catholic Church that shows how the universality of the Church can be realised more concretely through the participation of the Eastern Catholic Churches — ahead of a WYD that might be held in an African or Middle Eastern country, and through this event held right here in Seoul.",
      "es": "Para muchos jóvenes, la JMJ es una auténtica experiencia de encuentro con las diversas lenguas y culturas del mundo entero. Pero es también una experiencia de la Iglesia católica que muestra cómo puede hacerse más concreta la universalidad de la Iglesia mediante la participación de las Iglesias católicas orientales, de cara a una JMJ que podría celebrarse en un país de África o de Oriente Medio, y a través de este evento que se celebra aquí mismo, en Seúl.",
      "fr": "Pour beaucoup de jeunes, les JMJ sont une véritable expérience de rencontre avec la diversité des langues et des cultures du monde entier. Mais c'est aussi une expérience de l'Église catholique qui montre comment l'universalité de l'Église peut être rendue plus concrète grâce à la participation des Églises catholiques orientales, en vue de JMJ qui pourraient se tenir dans un pays d'Afrique ou du Moyen-Orient, et à travers cet événement qui se tient ici même, à Séoul."
    }
  },
  {
    "id": "O7",
    "no": 7,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee",
      "es": "Comité Organizador Local",
      "fr": "Comité d'organisation local"
    },
    "text": {
      "ko": "WYD에 물리적으로 참가가 불가한 순례자들의 경우 대회에 어떻게 참여할 수 있을지",
      "en": "How pilgrims who cannot physically attend WYD might take part in the event.",
      "es": "Cómo podrían participar en el evento los peregrinos que no pueden asistir físicamente a la JMJ.",
      "fr": "Comment les pèlerins qui ne peuvent pas être physiquement présents aux JMJ pourraient-ils participer à l'événement ?"
    }
  },
  {
    "id": "O8",
    "no": 8,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross",
      "es": "[Evento principal] Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "[Événement principal] Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "text": {
      "ko": "“안”과 “밖”에 대한 심리적 인식은 중요합니다. 경기장의 경계가 정해지면, 평화공원에 있는 사람들은 자연스럽게 주요 행사가 경기장 안에서 진행되고 있다는 사실을 알게 될 것입니다. 경기장 밖에서 아무리 훌륭한 프로그램을 진행하더라도 이러한 인식을 없애기는 어려울 수 있습니다.",
      "en": "The psychological perception of 'inside' and 'outside' matters. Once the boundary of the stadium is set, people in the Peace Park will naturally realise that the main events are taking place inside the stadium. However excellent the programme outside the stadium may be, it may be difficult to remove this perception.",
      "es": "La percepción psicológica de 'dentro' y 'fuera' es importante. Una vez fijado el límite del estadio, las personas del Parque de la Paz se darán cuenta de forma natural de que los actos principales se desarrollan dentro del estadio. Por excelente que sea el programa fuera del estadio, puede ser difícil eliminar esa percepción.",
      "fr": "La perception psychologique de 'l'intérieur' et de 'l'extérieur' est importante. Une fois la limite du stade fixée, les personnes présentes dans le Parc de la Paix comprendront naturellement que les principales célébrations ont lieu dans le stade. Aussi excellent que soit le programme à l'extérieur du stade, il pourrait être difficile d'effacer cette perception."
    }
  },
  {
    "id": "O9",
    "no": 9,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross",
      "es": "[Evento principal] Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "[Événement principal] Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "text": {
      "ko": "서울 월드컵 경기장에 대해 우려하고 있습니다. 좌석 배정이 공평하더라도 물리적 장벽 자체가 배제를 암시할 수 있습니다. 대규모 대표단의 경우, 왜 어떤 사람들은 경기장에 들어가고 다른 사람들은 화면으로 봐야 하는지 설명하기 어려울 것입니다. 청년들은 참석을 꺼릴 수도 있습니다. 다른 사람들이 경기장 안에 있는 동안 멀리서 화면으로 봐야 한다면, 이는 의욕을 꺾게 될 것입니다. 재고해 주시기를 바랍니다.",
      "en": "We are concerned about Seoul World Cup Stadium. Even if seating allocation is fair, the physical barrier itself can suggest exclusion. For large delegations, it will be hard to explain why some people go into the stadium while others have to watch on a screen. Young people may be reluctant to attend. Having to watch on a screen from afar while others are inside the stadium will be discouraging. We ask you to reconsider.",
      "es": "Nos preocupa el Estadio de la Copa del Mundo de Seúl. Aunque la asignación de asientos sea justa, la propia barrera física puede sugerir exclusión. En el caso de las delegaciones grandes, será difícil explicar por qué unos entran en el estadio y otros tienen que verlo en una pantalla. Puede que los jóvenes no quieran asistir. Tener que verlo de lejos en una pantalla mientras otros están dentro del estadio será desalentador. Les pedimos que lo reconsideren.",
      "fr": "Le Stade de la Coupe du monde de Séoul nous inquiète. Même si l'attribution des places est équitable, la barrière physique elle-même peut suggérer l'exclusion. Pour les grandes délégations, il sera difficile d'expliquer pourquoi certains entrent dans le stade tandis que d'autres doivent suivre sur un écran. Les jeunes pourraient hésiter à venir. Devoir regarder de loin sur un écran pendant que d'autres sont dans le stade sera décourageant. Nous vous demandons de reconsidérer ce choix."
    }
  },
  {
    "id": "O10",
    "no": 10,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross",
      "es": "[Evento principal] Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "[Événement principal] Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "text": {
      "ko": "경기장 방식이 수용 인원 제한 문제를 해결하기보다는 그저 관리하는 데 그친다는 점에 대해 여전히 깊은 우려를 가지고 있습니다. 로테이션과 평화공원 방식이 공정할 수는 있겠지만, 많은 순례자들은 여전히 주요 행사에서 소외감을 느낄 것입니다. 청년들은 WYD에 참석하기 위해 큰 희생을 치릅니다. 만약 그들이 행사에 온전히 참여하지 못한다면, 많은 사람들이 당연히 “가는 게 무슨 의미가 있는가?”라고 물을 것입니다.",
      "en": "We remain deeply concerned that the stadium approach merely manages the capacity limit rather than solving it. Rotation and the Peace Park approach may be fair, but many pilgrims will still feel left out of the main events. Young people make great sacrifices to attend WYD. If they cannot take part fully in the events, many will naturally ask, 'What is the point of going?'",
      "es": "Seguimos muy preocupados porque el sistema del estadio se limita a gestionar la restricción de aforo en lugar de resolverla. La rotación y el sistema del Parque de la Paz pueden ser justos, pero muchos peregrinos seguirán sintiéndose al margen de los actos principales. Los jóvenes hacen grandes sacrificios para asistir a la JMJ. Si no pueden participar plenamente en los actos, muchos se preguntarán con razón: '¿Para qué ir?'",
      "fr": "Nous restons profondément inquiets du fait que le dispositif du stade se contente de gérer la limite de capacité au lieu de la résoudre. La rotation et le dispositif du Parc de la Paix sont peut-être équitables, mais beaucoup de pèlerins se sentiront encore exclus des principales célébrations. Les jeunes consentent de grands sacrifices pour venir aux JMJ. S'ils ne peuvent pas participer pleinement aux célébrations, beaucoup se demanderont à juste titre : 'À quoi bon y aller ?'"
    }
  },
  {
    "id": "O11",
    "no": 11,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross",
      "es": "[Evento principal] Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "[Événement principal] Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "text": {
      "ko": "제안된 경기장 시스템은 수용 인원 문제를 해결하기보다는 입장 제한을 관리하는 데 초점을 맞추고 있습니다. “3회 순환 / 중복 배정 금지” 방식은 경기장 입장 기회를 공정하게 배분할 수는 있겠지만, 그럼에도 불구하고 많은 등록된 순례자들이 특정 행사가 열리는 주 경기장 내부에서 행사에 참여하지 못하게 될 것입니다.",
      "en": "The proposed stadium system focuses on managing restricted entry rather than solving the capacity problem. The '3 rotations / no double allocation' approach may distribute the opportunity to enter the stadium fairly, but even so, many registered pilgrims will not be able to take part in the events inside the main stadium where particular events are held.",
      "es": "El sistema de estadio propuesto se centra en gestionar la restricción de acceso más que en resolver el problema de aforo. El sistema de '3 rotaciones / sin asignación duplicada' puede repartir de forma justa la oportunidad de entrar en el estadio, pero aun así muchos peregrinos inscritos no podrán participar en los actos dentro del estadio principal donde se celebran determinados actos.",
      "fr": "Le système de stade proposé vise à gérer la restriction d'accès plutôt qu'à résoudre le problème de capacité. Le dispositif '3 rotations / pas de double attribution' peut répartir équitablement la possibilité d'entrer dans le stade, mais de nombreux pèlerins inscrits ne pourront malgré tout pas participer aux célébrations à l'intérieur du stade principal où ont lieu certains événements."
    }
  },
  {
    "id": "O12",
    "no": 12,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross",
      "es": "[Evento principal] Misa de apertura · Acogida del Papa · Vía Crucis",
      "fr": "[Événement principal] Messe d'ouverture · Accueil du Pape · Chemin de croix"
    },
    "text": {
      "ko": "경기장 - 혼잡과 혼란이 발생할까 우려됩니다. 각 행사마다 출입 경로가 다른 상황에서 수많은 순례자들을 경기장과 평화 공원 사이로 순환시키다 보면, 인파 이동과 의사소통에 큰 어려움이 생길 수 있습니다. 수십만 명이 한꺼번에 이동하는 상황에서 사소한 오해조차도 순식간에 안전 및 사목적 문제로 번질 수 있습니다.",
      "en": "Stadium – we are worried about congestion and confusion. Rotating huge numbers of pilgrims between the stadium and the Peace Park, with different entry and exit routes for each event, could cause major difficulties in crowd movement and communication. When hundreds of thousands of people are moving at once, even a minor misunderstanding can quickly turn into a safety and pastoral problem.",
      "es": "Estadio: nos preocupa que se produzcan aglomeraciones y confusión. Al hacer rotar a un enorme número de peregrinos entre el estadio y el Parque de la Paz, con rutas de entrada y salida distintas para cada acto, pueden surgir grandes dificultades en el movimiento de la multitud y en la comunicación. Cuando cientos de miles de personas se mueven a la vez, incluso un pequeño malentendido puede convertirse rápidamente en un problema de seguridad y pastoral.",
      "fr": "Stade : nous craignons des encombrements et de la confusion. Faire tourner un très grand nombre de pèlerins entre le stade et le Parc de la Paix, avec des itinéraires d'entrée et de sortie différents pour chaque célébration, pourrait poser de grandes difficultés de circulation des foules et de communication. Lorsque des centaines de milliers de personnes se déplacent en même temps, même un petit malentendu peut rapidement devenir un problème de sécurité et pastoral."
    }
  },
  {
    "id": "O13",
    "no": 13,
    "topic": {
      "ko": "[본대회] 전례",
      "en": "[Main Event] Liturgy",
      "es": "[Evento principal] Liturgia",
      "fr": "[Événement principal] Liturgie"
    },
    "text": {
      "ko": "전례에 각별한 주의를 기울여 주시기 바랍니다. 가능하다면 대상자가 젊은이들이라는 점을 고려해 주시기 바랍니다. 희년 행사 이후, 젊은이들과 인솔자들은 전례가 세심하게 준비되고 새로운 세대를 배려할 수 있도록(찬양, 제스처, 침묵 등에서…) 요청해 왔습니다.",
      "en": "Please pay particular attention to the liturgy. If possible, please take into account that the participants are young people. Since the Jubilee events, young people and their leaders have asked that the liturgy be carefully prepared and attentive to the new generation (in music, gestures, silence, etc.).",
      "es": "Les pedimos que presten especial atención a la liturgia. Si es posible, tengan en cuenta que los destinatarios son jóvenes. Desde los actos del Jubileo, los jóvenes y sus responsables han pedido que la liturgia se prepare con esmero y tenga en cuenta a la nueva generación (en los cantos, los gestos, el silencio, etc.).",
      "fr": "Nous vous demandons d'accorder une attention particulière à la liturgie. Si possible, tenez compte du fait qu'elle s'adresse à des jeunes. Depuis les célébrations du Jubilé, les jeunes et leurs accompagnateurs demandent que la liturgie soit soigneusement préparée et attentive à la nouvelle génération (chants, gestes, silence, etc.)."
    }
  }
];

// Meeting_Info 시트
export const MEETING_INFO = [
  {
    "label": {
      "ko": "회의명",
      "en": "Meeting",
      "es": "Reunión",
      "fr": "Réunion"
    },
    "value": {
      "ko": "2027 서울 세계청년대회 제2차 국제준비회의",
      "en": "2nd International Preparatory Meeting for World Youth Day Seoul 2027",
      "es": "2.ª Reunión Preparatoria Internacional de la Jornada Mundial de la Juventud Seúl 2027",
      "fr": "2e Réunion préparatoire internationale des Journées mondiales de la jeunesse Séoul 2027"
    }
  },
  {
    "label": {
      "ko": "일자",
      "en": "Dates",
      "es": "Fechas",
      "fr": "Dates"
    },
    "value": {
      "ko": "2026. 9. 14.(월) ~ 17.(목)",
      "en": "Mon 14 – Thu 17 September 2026",
      "es": "Del lunes 14 al jueves 17 de septiembre de 2026",
      "fr": "Du lundi 14 au jeudi 17 septembre 2026"
    }
  },
  {
    "label": {
      "ko": "장소",
      "en": "Venue",
      "es": "Lugar",
      "fr": "Lieu"
    },
    "value": {
      "ko": "네스트 호텔 (인천 소재)",
      "en": "Nest Hotel (Incheon)",
      "es": "Nest Hotel (Incheon)",
      "fr": "Nest Hotel (Incheon)"
    }
  },
  {
    "label": {
      "ko": "참가인원",
      "en": "Participants",
      "es": "Participantes",
      "fr": "Participants"
    },
    "value": {
      "ko": "총 100여 개국 교구 및 수도회, 신심단체 관계자 등 270여명",
      "en": "About 270 people in total, including representatives of dioceses, religious institutes and ecclesial associations from some 100 countries",
      "es": "Unas 270 personas en total, entre representantes de diócesis, institutos religiosos y asociaciones eclesiales de unos 100 países",
      "fr": "Environ 270 personnes au total, dont des représentants de diocèses, d'instituts religieux et d'associations ecclésiales d'une centaine de pays"
    }
  },
  {
    "label": {
      "ko": "주최/주관",
      "en": "Organisers",
      "es": "Organizadores",
      "fr": "Organisateurs"
    },
    "value": {
      "ko": "교황청 평신도가정생명부, 2027 서울 세계청년대회 조직위원회",
      "en": "Dicastery for Laity, Family and Life; Local Organising Committee of WYD Seoul 2027",
      "es": "Dicasterio para los Laicos, la Familia y la Vida; Comité Organizador Local de la JMJ Seúl 2027",
      "fr": "Dicastère pour les laïcs, la famille et la vie ; Comité d'organisation local des JMJ Séoul 2027"
    }
  }
];
