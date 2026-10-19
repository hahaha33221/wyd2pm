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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "한 나라의 그룹 (교구·단체·개별 그룹)은 독립적으로 등록할 수 있나요, 아니면 주교회의의 승인이나 통합 등록이 필요한가요?",
      "en": "Can a group from one country (a diocese, organization or individual group) register independently, or does it need the episcopal conference's approval or a joint registration?",
      "es": "¿Puede un grupo de un mismo país (una diócesis, una organización o un grupo individual) inscribirse de forma independiente, o necesita la aprobación de la conferencia episcopal o una inscripción conjunta?",
      "fr": "Un groupe d'un même pays (un diocèse, une organisation ou un groupe individuel) peut-il s'inscrire de manière indépendante, ou lui faut-il l'approbation de la conférence épiscopale ou une inscription commune ?",
      "it": "Un gruppo di un Paese (una diocesi, un'organizzazione o un gruppo individuale) può iscriversi autonomamente, oppure serve l'approvazione della conferenza episcopale o un'iscrizione congiunta?",
      "pt": "Um grupo de um país (uma diocese, organização ou grupo individual) pode inscrever-se de forma independente, ou precisa da aprovação da conferência episcopal ou de uma inscrição conjunta?"
    },
    "a": {
      "ko": "한 나라의 각 교구·단체·개별 그룹은 등록시스템을 통해 독립적으로 등록할 수 있으며, 반드시 주교회의를 통해 통합 등록해야 하는 것은 아닙니다.\n다만, 주교회의의 사전 승인이나 국가 차원의 참가 조율이 필요한지는 각국 주교회의의 내부 방침에 따라 다를 수 있으므로, 해당 주교회의 또는 국가 WYD 담당자에게 확인해 주시기 바랍니다.",
      "en": "Each diocese, organization or individual group in a country can register independently through the registration system; it does not have to register jointly through the episcopal conference.\nHowever, whether prior approval from the episcopal conference or national-level coordination of participation is needed may depend on each episcopal conference's internal policy, so please check with your episcopal conference or national WYD coordinator.",
      "es": "Cada diócesis, organización o grupo individual de un país puede inscribirse de forma independiente a través del sistema de inscripción; no es necesario inscribirse conjuntamente a través de la conferencia episcopal.\nSin embargo, la necesidad de una aprobación previa de la conferencia episcopal o de una coordinación de la participación a nivel nacional puede depender de la política interna de cada conferencia episcopal, por lo que les rogamos que lo consulten con su conferencia episcopal o con el coordinador nacional de la JMJ.",
      "fr": "Chaque diocèse, organisation ou groupe individuel d'un pays peut s'inscrire de manière indépendante via le système d'inscription ; il n'est pas tenu de s'inscrire conjointement par l'intermédiaire de la conférence épiscopale.\nCependant, la nécessité d'une approbation préalable de la conférence épiscopale ou d'une coordination de la participation au niveau national peut dépendre de la politique interne de chaque conférence épiscopale ; nous vous invitons donc à vous renseigner auprès de votre conférence épiscopale ou du coordinateur national des JMJ.",
      "it": "Ogni diocesi, organizzazione o gruppo individuale di un Paese può iscriversi autonomamente tramite il sistema di iscrizione; non è obbligatorio iscriversi congiuntamente tramite la conferenza episcopale.\nTuttavia, la necessità di un'approvazione preventiva della conferenza episcopale o di un coordinamento della partecipazione a livello nazionale può dipendere dalla politica interna di ciascuna conferenza episcopale; vi invitiamo quindi a verificare con la vostra conferenza episcopale o con il referente nazionale della GMG.",
      "pt": "Cada diocese, organização ou grupo individual de um país pode inscrever-se de forma independente através do sistema de inscrição; não é obrigatório inscrever-se conjuntamente através da conferência episcopal.\nNo entanto, a necessidade de aprovação prévia da conferência episcopal ou de coordenação da participação a nível nacional pode depender da política interna de cada conferência episcopal; por isso, confirmem junto da vossa conferência episcopal ou do coordenador nacional da JMJ."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹 규모별로 필요한 리더와 부리더의 수는 몇 명이며, 추가 리더를 추후 지정할 수 있나요? 또한 그룹 리더와 하위그룹 리더가 열람·관리할 수 있는 정보의 범위는 어디까지인가요?",
      "en": "How many leaders and assistant leaders are required for each group size, and can additional leaders be designated later? Also, how much information can group leaders and Subgroup leaders view and manage?",
      "es": "¿Cuántos líderes y líderes adjuntos se necesitan según el tamaño del grupo? ¿Se pueden designar líderes adicionales más adelante? Además, ¿qué información pueden consultar y gestionar los líderes de grupo y los líderes de Subgroup?",
      "fr": "Combien de responsables et de responsables adjoints faut-il selon la taille du groupe, et peut-on en désigner d'autres plus tard ? Par ailleurs, quelles informations les responsables de groupe et les responsables de Subgroup peuvent-ils consulter et gérer ?",
      "it": "Quanti responsabili e vice-responsabili sono richiesti per ciascuna dimensione di gruppo, ed è possibile designare altri responsabili in seguito? Inoltre, quante informazioni possono visualizzare e gestire i responsabili di gruppo e di Subgroup?",
      "pt": "Quantos responsáveis e responsáveis adjuntos são necessários para cada dimensão de grupo, e é possível designar outros responsáveis mais tarde? Além disso, que informações podem os responsáveis de grupo e de Subgroup consultar e gerir?"
    },
    "a": {
      "ko": "단일그룹(Single Group)과 대규모그룹(Macrogroup)은 각각 그룹 대표 1명과 부대표 1명으로 구성됩니다. 그룹 규모가 크거나 서울 도착 출발 일정·패키지가 서로 다른 경우에는 대규모그룹 내에 하위그룹(Subgroup)을 구성할 수 있습니다. 하위그룹은 대규모그룹 대표의 계정과 별도의 계정으로 생성할 수 있으며, 이 경우 하위 그룹에도 대표 1명과 부대표 1명을 지정합니다.\n하위그룹 대표와 부대표는 해당 하위그룹의 등록 정보 열람·수정 및 결제를 진행할 수 있습니다. 별도의 계정으로 생성된 하위그룹에 대해서는 대규모그룹 대표가 등록 정보를 열람하고 결제할 수 있지만, 정보를 직접 수정할 권한은 부여되지 않습니다.",
      "en": "A Single Group and a Macrogroup each have one group leader and one second group leader. If a group is large, or its members have different arrival and departure dates in Seoul or different packages, Subgroups can be formed within the Macrogroup. A Subgroup can be created with an account separate from the Macrogroup leader's account, and in that case the Subgroup also designates one group leader and one second group leader.\nThe Subgroup's group leader and second group leader can view and edit that Subgroup's registration information and make payment. For a Subgroup created with a separate account, the Macrogroup's group leader can view its registration information and make payment, but is not given permission to edit the information directly.",
      "es": "Un Single Group y un Macrogroup tienen cada uno un líder de grupo y un segundo líder de grupo. Si un grupo es grande, o si sus miembros tienen distintas fechas de llegada y salida en Seúl o distintos paquetes, se pueden formar Subgroups dentro del Macrogroup. Un Subgroup puede crearse con una cuenta distinta de la del líder del Macrogroup; en ese caso, el Subgroup también designa un líder de grupo y un segundo líder de grupo.\nEl líder y el segundo líder del Subgroup pueden consultar y modificar los datos de inscripción de ese Subgroup y realizar el pago. En el caso de un Subgroup creado con una cuenta distinta, el líder del Macrogroup puede consultar sus datos de inscripción y realizar el pago, pero no tiene permiso para modificar directamente la información.",
      "fr": "Un Single Group et un Macrogroup comptent chacun un responsable de groupe et un second responsable de groupe. Si un groupe est important, ou si ses membres ont des dates d'arrivée et de départ à Séoul ou des forfaits différents, des Subgroups peuvent être constitués au sein du Macrogroup. Un Subgroup peut être créé avec un compte distinct de celui du responsable du Macrogroup ; dans ce cas, le Subgroup désigne lui aussi un responsable de groupe et un second responsable de groupe.\nLe responsable et le second responsable du Subgroup peuvent consulter et modifier les données d'inscription de ce Subgroup et effectuer le paiement. Pour un Subgroup créé avec un compte distinct, le responsable du Macrogroup peut consulter ses données d'inscription et effectuer le paiement, mais n'a pas le droit de modifier directement les informations.",
      "it": "Un Single Group e un Macrogroup hanno ciascuno un responsabile di gruppo e un secondo responsabile. Se un gruppo è numeroso, o i suoi membri hanno date di arrivo e partenza a Seoul diverse o pacchetti diversi, all'interno del Macrogroup si possono formare dei Subgroup. Un Subgroup può essere creato con un account separato da quello del responsabile del Macrogroup; in tal caso anche il Subgroup designa un responsabile di gruppo e un secondo responsabile.\nIl responsabile e il secondo responsabile del Subgroup possono visualizzare e modificare i dati di iscrizione di quel Subgroup ed effettuare il pagamento. Per un Subgroup creato con un account separato, il responsabile del Macrogroup può visualizzarne i dati di iscrizione ed effettuare il pagamento, ma non ha il permesso di modificare direttamente i dati.",
      "pt": "Um Single Group e um Macrogroup têm, cada um, um responsável de grupo e um segundo responsável. Se um grupo for grande, ou se os seus membros tiverem datas de chegada e partida em Seul diferentes ou pacotes diferentes, podem formar-se Subgroups dentro do Macrogroup. Um Subgroup pode ser criado com uma conta separada da conta do responsável do Macrogroup; nesse caso, o Subgroup também designa um responsável de grupo e um segundo responsável.\nO responsável e o segundo responsável do Subgroup podem consultar e editar os dados de inscrição desse Subgroup e efetuar o pagamento. Para um Subgroup criado com uma conta separada, o responsável do Macrogroup pode consultar os seus dados de inscrição e efetuar o pagamento, mas não tem permissão para editar diretamente os dados."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "대규모그룹(Macrogroup)에서 한 가족을 하나의 하위 그룹(Subgroup)으로 인정할 수 있나요? 최소 인원 기준은 무엇인가요?\n또한 공동 숙박 시 미성년자가 성인과 분리될 경우 누가 그들을 책임지나요?",
      "en": "Can a single family be recognized as one Subgroup within a Macrogroup? What is the minimum number of people? And in shared accommodation, if minors are separated from adults, who is responsible for them?",
      "es": "¿Puede una familia ser reconocida como un Subgroup dentro de un Macrogroup? ¿Cuál es el número mínimo de personas? Y en un alojamiento compartido, si los menores quedan separados de los adultos, ¿quién es responsable de ellos?",
      "fr": "Une famille peut-elle être reconnue comme un Subgroup au sein d'un Macrogroup ? Quel est le nombre minimum de personnes ? Et dans un hébergement partagé, si des mineurs sont séparés des adultes, qui en est responsable ?",
      "it": "Una singola famiglia può essere riconosciuta come un Subgroup all'interno di un Macrogroup? Qual è il numero minimo di persone? E nell'alloggio condiviso, se i minori sono separati dagli adulti, chi ne è responsabile?",
      "pt": "Uma única família pode ser reconhecida como um Subgroup dentro de um Macrogroup? Qual é o número mínimo de pessoas? E, no alojamento partilhado, se os menores estiverem separados dos adultos, quem é responsável por eles?"
    },
    "a": {
      "ko": "대규모그룹(Macrogroup)의 최소 인원 제한은 없습니다. 대규모그룹에서 하위 그룹(Subgroup)을 구성할 때의 기준은 같은 패키지와 서울 도착/출발 일정입니다. 따라서 한 가족이 같은 패키지를 선택하고 서울에 머무르는 일정이 같다면 하나의 하위그룹으로 구성할 수 있습니다.\n서울 WYD 미성년자보호지침에 따르면 성인과 미성년자의 숙소는 분리하는 것을 기본 원칙으로 합니다. 그러나 각 국가의 주교회의 및 국가별 미성년자보호 규정과 실질적인 안전 요건을 함께 고려하여 적용할 필요가 있습니다.\n예를 들어, 일부 국가에서는 성인 인솔자라 하더라도 미성년자와 동일한 숙소를 사용할 수 없도록 규정하고 있습니다. 이러한 경우에는 인솔자가 미성년자 숙소와 가까운 공간에 머물며, 문제가 발생할 때 신속하게 대응할 수 있도록 운영할 수 있습니다. 또한 어떤 국가에서는 성인 인솔자 2명이 미성년자 숙소에 함께 머물면서 교대로 감독 역할을 수행하는 방식으로 운영하기도 합니다.\n반대로, 특정 국가의 주교회의 또는 국가 기준에서 미성년자의 안전과 보호를 위해 성인 인솔자가 책임을 맡은 미성년자들과 같은 공간에서 숙박하는 것이 더 적절하다고 판단하는 경우에는, 해당 기준에 따라 동일한 공간에서 숙박하는 것도 가능합니다. 이 경우에도 미성년자 대표를 지정하여 비상 상황 발생 시 즉시 인솔자에게 연락할 수 있도록 하는 등 적절한 보호 조치를 마련해야 합니다.\n따라서 미성년자 숙소 운영 방식은 각 국가의 미성년자보호 규정과 현장의 안전 상황에 따라 다양한 방안이 적용될 수 있으며, 모든 경우에 일률적으로 적용되는 단일 정책을 정하기는 어렵습니다.\n서울 WYD 조직위원회는 서울 WYD의 미성년자보호지침을 제시하는 동시에, 공동 LOC인 각 국가 주교회의의 미성년자보호지침과 기준을 존중합니다. 다만, 해당 기준에 따라 어떠한 숙소 운영 방식을 선택할 것인지에 대한 결정과 그에 따른 책임은 각 순례자 그룹이 부담하게 됩니다.",
      "en": "There is no minimum size for a Macrogroup. The criteria for forming a Subgroup within a Macrogroup are the same package and the same arrival/departure dates in Seoul. A family that chooses the same package and has the same stay in Seoul can therefore form one Subgroup.\nUnder the Safeguarding Policy of WYD Seoul 2027, the basic principle is that adults and minors are accommodated separately. This must, however, be applied together with the safeguarding rules of each country's episcopal conference and national regulations, and with practical safety requirements.\nFor example, some countries do not allow even adult chaperones to use the same accommodation as minors. In such cases, chaperones can stay in a space close to the minors' accommodation so that they can respond quickly if a problem arises. In some countries, two adult chaperones stay in the minors' accommodation and take turns supervising.\nConversely, where a country's episcopal conference or national standards consider it more appropriate for the safety and protection of minors that adult chaperones sleep in the same space as the minors in their care, sleeping in the same space is also possible in line with those standards. Even then, appropriate safeguards must be in place, such as designating a minor representative who can contact the chaperone immediately in an emergency.\nThe arrangements for minors' accommodation may therefore vary according to each country's safeguarding rules and the safety situation on site, and it is difficult to set a single policy that applies uniformly in every case.\nThe WYD Seoul 2027 LOC sets out the Safeguarding Policy of WYD Seoul 2027 while respecting the safeguarding policies and standards of each country's episcopal conference, as co-organizers. The decision on which accommodation arrangement to choose under those standards, and the responsibility that follows from it, rest with each pilgrim group.",
      "es": "No hay un tamaño mínimo para un Macrogroup. Los criterios para formar un Subgroup dentro de un Macrogroup son el mismo paquete y las mismas fechas de llegada y salida en Seúl. Por tanto, una familia que elige el mismo paquete y tiene la misma estancia en Seúl puede formar un Subgroup.\nSegún la Política de Protección de la JMJ Seúl 2027, el principio básico es que adultos y menores se alojen por separado. No obstante, esto debe aplicarse junto con las normas de protección de la conferencia episcopal de cada país y la normativa nacional, así como con los requisitos prácticos de seguridad.\nPor ejemplo, algunos países no permiten que ni siquiera los acompañantes adultos usen el mismo alojamiento que los menores. En esos casos, los acompañantes pueden alojarse en un espacio cercano al de los menores para poder actuar con rapidez si surge un problema. En algunos países, dos acompañantes adultos se alojan con los menores y se turnan en la supervisión.\nPor el contrario, cuando la conferencia episcopal o las normas nacionales de un país consideran más adecuado, para la seguridad y protección de los menores, que los acompañantes adultos duerman en el mismo espacio que los menores a su cargo, también es posible dormir en el mismo espacio conforme a esas normas. Aun así, deben adoptarse las medidas de protección adecuadas, como designar a un menor representante que pueda contactar inmediatamente con el acompañante en caso de emergencia.\nPor ello, la organización del alojamiento de los menores puede variar según las normas de protección de cada país y la situación de seguridad sobre el terreno, y es difícil establecer una política única que se aplique de manera uniforme en todos los casos.\nEl COL de la JMJ Seúl 2027 establece la Política de Protección de la JMJ Seúl 2027 respetando al mismo tiempo las políticas y normas de protección de la conferencia episcopal de cada país, como coorganizadoras. La decisión sobre qué modalidad de alojamiento elegir según dichas normas, y la responsabilidad que de ella se derive, corresponden a cada grupo de peregrinos.",
      "fr": "Il n'y a pas de taille minimale pour un Macrogroup. Les critères de constitution d'un Subgroup au sein d'un Macrogroup sont le même forfait et les mêmes dates d'arrivée et de départ à Séoul. Une famille qui choisit le même forfait et effectue le même séjour à Séoul peut donc former un Subgroup.\nSelon la Politique de protection des JMJ Séoul 2027, le principe de base est que les adultes et les mineurs soient hébergés séparément. Ce principe doit toutefois être appliqué en tenant compte des règles de protection de la conférence épiscopale de chaque pays et de la réglementation nationale, ainsi que des exigences pratiques de sécurité.\nPar exemple, certains pays n'autorisent même pas les accompagnateurs adultes à partager l'hébergement des mineurs. Dans ce cas, les accompagnateurs peuvent loger dans un espace proche de celui des mineurs afin de pouvoir réagir rapidement en cas de problème. Dans certains pays, deux accompagnateurs adultes logent avec les mineurs et assurent la surveillance à tour de rôle.\nÀ l'inverse, lorsque la conférence épiscopale ou les normes nationales d'un pays jugent plus approprié, pour la sécurité et la protection des mineurs, que les accompagnateurs adultes dorment dans le même espace que les mineurs dont ils ont la charge, cela est également possible conformément à ces normes. Même dans ce cas, des mesures de protection adaptées doivent être prévues, par exemple la désignation d'un mineur référent capable de contacter immédiatement l'accompagnateur en cas d'urgence.\nL'organisation de l'hébergement des mineurs peut donc varier selon les règles de protection de chaque pays et la situation de sécurité sur place, et il est difficile de fixer une politique unique applicable uniformément à tous les cas.\nLe COL des JMJ Séoul 2027 établit la Politique de protection des JMJ Séoul 2027 tout en respectant les politiques et normes de protection de la conférence épiscopale de chaque pays, en tant que co-organisatrices. La décision quant au mode d'hébergement choisi selon ces normes, ainsi que la responsabilité qui en découle, incombent à chaque groupe de pèlerins.",
      "it": "Non esiste una dimensione minima per un Macrogroup. I criteri per formare un Subgroup all'interno di un Macrogroup sono lo stesso pacchetto e le stesse date di arrivo e partenza a Seoul. Una famiglia che sceglie lo stesso pacchetto e ha lo stesso soggiorno a Seoul può quindi formare un Subgroup.\nSecondo la Politica di tutela della GMG Seoul 2027, il principio di base è che adulti e minori siano alloggiati separatamente. Questo principio deve però essere applicato insieme alle norme di tutela della conferenza episcopale di ciascun Paese e alle normative nazionali, nonché alle esigenze pratiche di sicurezza.\nAd esempio, alcuni Paesi non consentono nemmeno agli accompagnatori adulti di utilizzare lo stesso alloggio dei minori. In questi casi gli accompagnatori possono alloggiare in uno spazio vicino a quello dei minori, così da poter intervenire rapidamente in caso di problemi. In alcuni Paesi, due accompagnatori adulti alloggiano nell'alloggio dei minori e si alternano nella sorveglianza.\nAl contrario, quando la conferenza episcopale o le norme nazionali di un Paese ritengono più appropriato, per la sicurezza e la protezione dei minori, che gli accompagnatori adulti dormano nello stesso spazio dei minori loro affidati, anche dormire nello stesso spazio è possibile in conformità con tali norme. Anche in questo caso devono essere previste adeguate tutele, come la designazione di un minore referente che possa contattare immediatamente l'accompagnatore in caso di emergenza.\nLe modalità di alloggio dei minori possono quindi variare in base alle norme di tutela di ciascun Paese e alla situazione di sicurezza sul posto, ed è difficile stabilire un'unica regola valida uniformemente in tutti i casi.\nIl COL della GMG Seoul 2027 definisce la Politica di tutela della GMG Seoul 2027 nel rispetto delle politiche e delle norme di tutela della conferenza episcopale di ciascun Paese, in quanto co-organizzatrici. La decisione su quale modalità di alloggio scegliere in base a tali norme, e la responsabilità che ne deriva, spettano a ciascun gruppo di pellegrini.",
      "pt": "Não há dimensão mínima para um Macrogroup. Os critérios para formar um Subgroup dentro de um Macrogroup são o mesmo pacote e as mesmas datas de chegada e partida em Seul. Uma família que escolha o mesmo pacote e tenha a mesma estadia em Seul pode, portanto, formar um Subgroup.\nDe acordo com a Política de Proteção da JMJ Seul 2027, o princípio básico é que adultos e menores fiquem alojados separadamente. Este princípio deve, no entanto, ser aplicado em conjunto com as normas de proteção da conferência episcopal de cada país e a regulamentação nacional, bem como com as exigências práticas de segurança.\nPor exemplo, alguns países não permitem que nem mesmo os acompanhantes adultos utilizem o mesmo alojamento que os menores. Nesses casos, os acompanhantes podem ficar num espaço próximo do alojamento dos menores, de modo a poderem responder rapidamente se surgir algum problema. Nalguns países, dois acompanhantes adultos ficam no alojamento dos menores e revezam-se na supervisão.\nPelo contrário, quando a conferência episcopal ou as normas nacionais de um país consideram mais adequado, para a segurança e proteção dos menores, que os acompanhantes adultos durmam no mesmo espaço que os menores a seu cargo, também é possível dormir no mesmo espaço, de acordo com essas normas. Mesmo nesse caso, devem existir salvaguardas adequadas, como a designação de um menor representante que possa contactar imediatamente o acompanhante em caso de emergência.\nAs modalidades de alojamento dos menores podem, por isso, variar consoante as normas de proteção de cada país e a situação de segurança no local, e é difícil estabelecer uma regra única que se aplique uniformemente a todos os casos.\nO COL da JMJ Seul 2027 define a Política de Proteção da JMJ Seul 2027 respeitando as políticas e normas de proteção da conferência episcopal de cada país, enquanto coorganizadoras. A decisão sobre que modalidade de alojamento escolher ao abrigo dessas normas, e a responsabilidade daí decorrente, cabem a cada grupo de peregrinos."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희 교구(비카리아) 소속으로 등록된 대표자가 다른 나라에서 오는 경우(예: 해외 거주 본당 신자의 자녀가 부모와 동행하고자 하는 경우), 저희 조직 아래로 등록하는 것이 맞나요?",
      "en": "If a representative registered under our diocese (vicariate) is coming from another country (e.g. the child of a parishioner living abroad who wants to accompany their parents), is it right to register them under our organization?",
      "es": "Si un representante inscrito en nuestra diócesis (vicaría) viene de otro país (por ejemplo, el hijo de un feligrés que vive en el extranjero y quiere acompañar a sus padres), ¿es correcto inscribirlo en nuestra organización?",
      "fr": "Si un représentant inscrit dans notre diocèse (vicariat) vient d'un autre pays (par exemple l'enfant d'un paroissien vivant à l'étranger qui souhaite accompagner ses parents), est-il correct de l'inscrire dans notre organisation ?",
      "it": "Se un rappresentante iscritto con la nostra diocesi (vicariato) arriva da un altro Paese (ad es. il figlio di un parrocchiano che vive all'estero e desidera accompagnare i genitori), è corretto iscriverlo con la nostra organizzazione?",
      "pt": "Se um representante inscrito com a nossa diocese (vicariato) vier de outro país (por exemplo, o filho de um paroquiano que vive no estrangeiro e quer acompanhar os pais), é correto inscrevê-lo na nossa organização?"
    },
    "a": {
      "ko": "해외에 거주하거나 다른 나라에서 출발하는 참가자라도, 귀 교구(비카리아) 그룹의 일원으로 함께 참가하고 그룹 리더의 인솔과 관리 아래 활동할 예정이라면 해당 그룹에 포함하여 등록하실 수 있습니다. 예를 들어, 해외에 거주하는 본당 신자의 자녀가 부모와 함께 귀 교구 그룹에 참가하는 경우에도 같은 그룹으로 등록할 수 있습니다.",
      "en": "A participant who lives abroad or departs from another country can be registered in your diocesan (vicariate) group if they will take part as a member of that group, under the group leader's guidance and supervision. For example, the child of a parishioner living abroad who joins your diocesan group with their parents can be registered in the same group.",
      "es": "Un participante que vive en el extranjero o sale desde otro país puede inscribirse en el grupo de su diócesis (vicaría) si va a participar como miembro de ese grupo, bajo la guía y supervisión del líder del grupo. Por ejemplo, el hijo de un feligrés que vive en el extranjero y se une con sus padres al grupo de su diócesis puede inscribirse en el mismo grupo.",
      "fr": "Un participant qui vit à l'étranger ou part d'un autre pays peut être inscrit dans le groupe de votre diocèse (vicariat) s'il y participe en tant que membre, sous la conduite et la supervision du responsable du groupe. Par exemple, l'enfant d'un paroissien vivant à l'étranger qui rejoint votre groupe diocésain avec ses parents peut être inscrit dans le même groupe.",
      "it": "Un partecipante che vive all'estero o parte da un altro Paese può essere iscritto nel gruppo della vostra diocesi (vicariato) se parteciperà come membro di quel gruppo, sotto la guida e la supervisione del responsabile di gruppo. Ad esempio, il figlio di un parrocchiano che vive all'estero e si unisce al vostro gruppo diocesano con i genitori può essere iscritto nello stesso gruppo.",
      "pt": "Um participante que vive no estrangeiro ou parte de outro país pode ser inscrito no grupo da vossa diocese (vicariato) se participar como membro desse grupo, sob a orientação e supervisão do responsável de grupo. Por exemplo, o filho de um paroquiano que vive no estrangeiro e se junta ao vosso grupo diocesano com os pais pode ser inscrito no mesmo grupo."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "국제기구나 여러 국가·교구로 구성된 단체의 경우, 동일한 그룹 또는 대규모그룹(Macrogroup)안에 서로 다른 날짜·시간·항공편·교통수단으로 도착하거나 출발할 경우 등록과 패키지 선택은 어떻게 진행해야 하나요?",
      "en": "For international organizations or bodies made up of several countries or dioceses, how should registration and package selection be handled when members of the same group or Macrogroup arrive or depart on different dates, at different times, or by different flights or means of transport?",
      "es": "En el caso de organismos internacionales o entidades formadas por varios países o diócesis, ¿cómo deben gestionarse la inscripción y la elección del paquete cuando los miembros de un mismo grupo o Macrogroup llegan o salen en fechas u horas distintas, o en vuelos o medios de transporte distintos?",
      "fr": "Pour les organisations internationales ou les structures composées de plusieurs pays ou diocèses, comment gérer l'inscription et le choix du forfait lorsque les membres d'un même groupe ou Macrogroup arrivent ou partent à des dates ou heures différentes, ou sur des vols ou par des moyens de transport différents ?",
      "it": "Per le organizzazioni o gli enti internazionali composti da più Paesi o diocesi, come si gestiscono l'iscrizione e la scelta del pacchetto quando i membri dello stesso gruppo o Macrogroup arrivano o partono in date od orari diversi, o con voli o mezzi di trasporto diversi?",
      "pt": "Para organizações ou entidades internacionais compostas por vários países ou dioceses, como se tratam a inscrição e a escolha do pacote quando membros do mesmo grupo ou Macrogroup chegam ou partem em datas ou horas diferentes, ou em voos ou meios de transporte diferentes?"
    },
    "a": {
      "ko": "소속 국제기구 또는 교구의 이름으로 하나의 대규모그룹(Macrogroup)을 등록한 후, 동일한 패키지와 서울 체류 일정을 가진 참가자들끼리 하위그룹(Subgroup)을 구성하여 등록하시면 됩니다. 각 하위그룹은 최대 150명까지 등록할 수 있습니다.",
      "en": "Register one Macrogroup in the name of your international organization or diocese, and then register Subgroups made up of participants who share the same package and the same stay in Seoul. Each Subgroup can register up to 150 people.",
      "es": "Inscriban un Macrogroup a nombre de su organismo internacional o diócesis y, a continuación, inscriban Subgroups formados por participantes que compartan el mismo paquete y la misma estancia en Seúl. Cada Subgroup puede inscribir hasta 150 personas.",
      "fr": "Inscrivez un Macrogroup au nom de votre organisation internationale ou de votre diocèse, puis inscrivez des Subgroups composés de participants qui partagent le même forfait et le même séjour à Séoul. Chaque Subgroup peut inscrire jusqu'à 150 personnes.",
      "it": "Iscrivete un Macrogroup a nome della vostra organizzazione internazionale o diocesi, e poi iscrivete dei Subgroup composti da partecipanti che hanno lo stesso pacchetto e lo stesso soggiorno a Seoul. Ogni Subgroup può iscrivere fino a 150 persone.",
      "pt": "Inscrevam um Macrogroup em nome da vossa organização internacional ou diocese e, depois, inscrevam Subgroups compostos por participantes que tenham o mesmo pacote e a mesma estadia em Seul. Cada Subgroup pode inscrever até 150 pessoas."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "사제, 부제, 수도자는 일반 순례자 그룹의 일원으로 등록하나요, 아니면 별도로 등록해야 하나요? 사제가 대규모그룹(Macrogroup)에 속한 경우에도 동일한 방식으로 등록하나요?",
      "en": "Do priests, deacons and religious register as members of an ordinary pilgrim group, or do they register separately? Is it the same when a priest belongs to a Macrogroup?",
      "es": "¿Los sacerdotes, diáconos y religiosos se inscriben como miembros de un grupo ordinario de peregrinos o se inscriben por separado? ¿Es igual cuando un sacerdote pertenece a un Macrogroup?",
      "fr": "Les prêtres, diacres et religieux s'inscrivent-ils comme membres d'un groupe de pèlerins ordinaire, ou séparément ? En va-t-il de même lorsqu'un prêtre fait partie d'un Macrogroup ?",
      "it": "Sacerdoti, diaconi e religiosi si iscrivono come membri di un normale gruppo di pellegrini o si iscrivono separatamente? Vale lo stesso quando un sacerdote fa parte di un Macrogroup?",
      "pt": "Os sacerdotes, diáconos e religiosos inscrevem-se como membros de um grupo de peregrinos comum, ou inscrevem-se separadamente? É igual quando um sacerdote pertence a um Macrogroup?"
    },
    "a": {
      "ko": "사제, 부제, 수도자 모두 일반 순례자 그룹의 참가자로 등록합니다. 대규모그룹(Macrogroup)의 경우에도 실제 순례자 등록은 하위그룹(Subgroup) 단위로 이루어지므로, 자신이 속한 하위그룹에 포함하여 등록합니다. 사제와 부제는 일반 순례자와 달리 신분 확인 및 성직자 관련 준비를 위해 개인 정보를 별도로 입력해야 하며, 그룹 대표가 정보를 취합하여 등록 시스템에 입력합니다.",
      "en": "Priests, deacons and religious all register as participants in an ordinary pilgrim group. In a Macrogroup too, pilgrims are actually registered by Subgroup, so they are registered in the Subgroup they belong to. Unlike other pilgrims, priests and deacons must have their personal details entered separately for identity verification and clergy-related preparations; the group leader collects this information and enters it in the registration system.",
      "es": "Sacerdotes, diáconos y religiosos se inscriben todos como participantes de un grupo ordinario de peregrinos. También en un Macrogroup los peregrinos se inscriben en realidad por Subgroup, por lo que se inscriben en el Subgroup al que pertenecen. A diferencia de los demás peregrinos, los datos personales de sacerdotes y diáconos deben introducirse por separado para la verificación de identidad y los preparativos relativos al clero; el líder del grupo reúne esta información y la introduce en el sistema de inscripción.",
      "fr": "Prêtres, diacres et religieux s'inscrivent tous comme participants d'un groupe de pèlerins ordinaire. Dans un Macrogroup également, les pèlerins sont en réalité inscrits par Subgroup ; ils sont donc inscrits dans le Subgroup auquel ils appartiennent. Contrairement aux autres pèlerins, les données personnelles des prêtres et des diacres doivent être saisies séparément pour la vérification de leur identité et les préparatifs propres au clergé ; le responsable du groupe recueille ces informations et les saisit dans le système d'inscription.",
      "it": "Sacerdoti, diaconi e religiosi si iscrivono tutti come partecipanti di un normale gruppo di pellegrini. Anche in un Macrogroup i pellegrini sono di fatto iscritti per Subgroup, quindi vengono iscritti nel Subgroup a cui appartengono. A differenza degli altri pellegrini, per sacerdoti e diaconi devono essere inseriti separatamente i dati personali ai fini della verifica dell'identità e dei preparativi relativi al clero; il responsabile di gruppo raccoglie questi dati e li inserisce nel sistema di iscrizione.",
      "pt": "Os sacerdotes, diáconos e religiosos inscrevem-se todos como participantes de um grupo de peregrinos comum. Também num Macrogroup os peregrinos são, na prática, inscritos por Subgroup, pelo que são inscritos no Subgroup a que pertencem. Ao contrário dos outros peregrinos, os sacerdotes e diáconos têm de ter os seus dados pessoais introduzidos separadamente, para verificação da identidade e para os preparativos relativos ao clero; o responsável de grupo recolhe estes dados e introdu-los no sistema de inscrição."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희는 국제 그룹의 코디네이터입니다. 하나의 대규모그룹(Macrogroup)을 만들고 국가별로 하위그룹(Subgroup)을 두는 것이 나을까요, 아니면 국가별로 각각 대규모그룹을 만들고 그 안에서 패키지별 하위그룹을 두는 것이 나을까요?",
      "en": "We are the coordinators of an international group. Is it better to create one Macrogroup with a Subgroup for each country, or a separate Macrogroup for each country with Subgroups by package inside it?",
      "es": "Somos los coordinadores de un grupo internacional. ¿Es mejor crear un solo Macrogroup con un Subgroup por país, o un Macrogroup distinto para cada país con Subgroups por paquete dentro de él?",
      "fr": "Nous sommes les coordinateurs d'un groupe international. Vaut-il mieux créer un seul Macrogroup avec un Subgroup par pays, ou un Macrogroup distinct pour chaque pays avec des Subgroups par forfait ?",
      "it": "Siamo i coordinatori di un gruppo internazionale. È meglio creare un unico Macrogroup con un Subgroup per ciascun Paese, oppure un Macrogroup separato per ciascun Paese con Subgroup per pacchetto al suo interno?",
      "pt": "Somos os coordenadores de um grupo internacional. É melhor criar um único Macrogroup com um Subgroup por país, ou um Macrogroup separado por país com Subgroups por pacote dentro dele?"
    },
    "a": {
      "ko": "국제 그룹의 등록 구조는 그룹의 운영 방식과 국가별 담당자의 역할을 고려하여 선택하시는 것이 좋습니다. 국제 코디네이터가 전체 그룹을 통합 관리하고 국가별 담당자가 각 하위그룹을 관리하려는 경우에는, 하나의 매크로그룹 아래 국가별 하위그룹을 구성하는 방식을 고려할 수 있습니다. 반면, 국가별로 참가자 관리와 등록·납부를 독립적으로 진행하는 경우에는 국가별로 각각 대규모그룹을 구성하는 방식이 관리에 더 편리할 수 있습니다. 패키지별 하위그룹 구성 여부는 각 국가의 참가자 구성과 패키지 선택에 따라 검토해 주시기 바랍니다.",
      "en": "The registration structure for an international group is best chosen in light of how the group operates and the role of each country's coordinator. If the international coordinator will manage the whole group and each country's coordinator will manage a Subgroup, you could form country Subgroups under one Macrogroup. If, on the other hand, each country will manage its participants and its registration and payment independently, a separate Macrogroup for each country may be easier to manage. Whether to form Subgroups by package should be considered according to each country's participants and package choices.",
      "es": "Conviene elegir la estructura de inscripción de un grupo internacional teniendo en cuenta cómo funciona el grupo y el papel del coordinador de cada país. Si el coordinador internacional va a gestionar todo el grupo y el coordinador de cada país va a gestionar un Subgroup, podrían formar Subgroups por país dentro de un solo Macrogroup. En cambio, si cada país va a gestionar a sus participantes, su inscripción y su pago de forma independiente, puede resultar más fácil de gestionar un Macrogroup distinto para cada país. La conveniencia de formar Subgroups por paquete debe valorarse según los participantes y los paquetes elegidos en cada país.",
      "fr": "Il est préférable de choisir la structure d'inscription d'un groupe international en fonction du fonctionnement du groupe et du rôle du coordinateur de chaque pays. Si le coordinateur international gère l'ensemble du groupe et que le coordinateur de chaque pays gère un Subgroup, vous pouvez constituer des Subgroups par pays au sein d'un seul Macrogroup. Si, au contraire, chaque pays gère ses participants, son inscription et son paiement de manière indépendante, un Macrogroup distinct pour chaque pays peut être plus simple à gérer. La constitution de Subgroups par forfait est à examiner selon les participants et les forfaits choisis dans chaque pays.",
      "it": "La struttura di iscrizione di un gruppo internazionale va scelta alla luce di come opera il gruppo e del ruolo del coordinatore di ciascun Paese. Se il coordinatore internazionale gestirà l'intero gruppo e i coordinatori nazionali gestiranno ciascuno un Subgroup, potete formare Subgroup per Paese sotto un unico Macrogroup. Se invece ogni Paese gestirà autonomamente i propri partecipanti, l'iscrizione e il pagamento, un Macrogroup separato per ciascun Paese può risultare più semplice da gestire. L'opportunità di formare Subgroup per pacchetto va valutata in base ai partecipanti e alle scelte di pacchetto di ciascun Paese.",
      "pt": "A estrutura de inscrição de um grupo internacional deve ser escolhida tendo em conta o funcionamento do grupo e o papel do coordenador de cada país. Se o coordenador internacional gerir todo o grupo e os coordenadores de cada país gerirem cada um um Subgroup, podem formar Subgroups por país sob um único Macrogroup. Se, pelo contrário, cada país gerir de forma independente os seus participantes, a inscrição e o pagamento, um Macrogroup separado por país pode ser mais fácil de gerir. A conveniência de formar Subgroups por pacote deve ser ponderada em função dos participantes e das escolhas de pacote de cada país."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "단일그룹(Single Group)의 순례자 수가 늘어나면 자동으로 대규모그룹 (Macrogroup)으로 전환되나요?",
      "en": "If the number of pilgrims in a Single Group grows, is it automatically converted into a Macrogroup?",
      "es": "Si aumenta el número de peregrinos de un Single Group, ¿se convierte automáticamente en Macrogroup?",
      "fr": "Si le nombre de pèlerins d'un Single Group augmente, est-il automatiquement converti en Macrogroup ?",
      "it": "Se il numero di pellegrini di un Single Group aumenta, questo viene convertito automaticamente in un Macrogroup?",
      "pt": "Se o número de peregrinos de um Single Group aumentar, este é convertido automaticamente num Macrogroup?"
    },
    "a": {
      "ko": "단일그룹(Single Group)의 순례자 수가 늘어나더라도 자동으로 대규모그룹(Macrogroup)으로 전환되지는 않습니다. 단일그룹은 최대 150명까지 등록할 수 있으므로, 참가 인원이 150명을 초과할 가능성이 있다면 처음부터 대규모그룹으로 등록해야 합니다. 그룹 유형은 등록을 시작할 때 선택하며, 등록을 시작한 이후에는 변경할 수 없습니다.",
      "en": "A Single Group is not automatically converted into a Macrogroup when its number of pilgrims grows. A Single Group can register up to 150 people, so if your numbers may exceed 150, you must register as a Macrogroup from the start. The group type is chosen when registration begins and cannot be changed once registration has started.",
      "es": "Un Single Group no se convierte automáticamente en Macrogroup cuando aumenta su número de peregrinos. Un Single Group puede inscribir hasta 150 personas, por lo que, si su número puede superar los 150, deben inscribirse como Macrogroup desde el principio. El tipo de grupo se elige al comenzar la inscripción y no puede cambiarse una vez iniciada.",
      "fr": "Un Single Group n'est pas automatiquement converti en Macrogroup lorsque son nombre de pèlerins augmente. Un Single Group peut inscrire jusqu'à 150 personnes ; si votre effectif risque de dépasser 150, vous devez donc vous inscrire comme Macrogroup dès le départ. Le type de groupe est choisi au début de l'inscription et ne peut plus être modifié une fois l'inscription commencée.",
      "it": "Un Single Group non viene convertito automaticamente in Macrogroup quando il numero di pellegrini aumenta. Un Single Group può iscrivere fino a 150 persone; se il vostro numero potrebbe superare 150, dovete quindi iscrivervi fin dall'inizio come Macrogroup. Il tipo di gruppo si sceglie all'avvio dell'iscrizione e non può essere modificato una volta iniziata l'iscrizione.",
      "pt": "Um Single Group não é convertido automaticamente num Macrogroup quando o número de peregrinos aumenta. Um Single Group pode inscrever até 150 pessoas; por isso, se o vosso número puder ultrapassar 150, devem inscrever-se desde o início como Macrogroup. O tipo de grupo é escolhido no início da inscrição e não pode ser alterado depois de a inscrição ter começado."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "단일그룹(Single Group)과 대규모그룹(Macrogroup)의 차이가 단순히 인원 수만이 아니라고 하셨는데, 대규모그룹이 되기 위해 충족해야 하는 조건(특성)과 대규모그룹으로 등록했을 때의 장점은 무엇입니까?",
      "en": "You said the difference between a Single Group and a Macrogroup is not just the number of people. What conditions (characteristics) must be met to be a Macrogroup, and what are the advantages of registering as one?",
      "es": "Dijeron que la diferencia entre un Single Group y un Macrogroup no es solo el número de personas. ¿Qué condiciones (características) hay que cumplir para ser un Macrogroup y qué ventajas tiene inscribirse como tal?",
      "fr": "Vous avez dit que la différence entre un Single Group et un Macrogroup ne tient pas seulement au nombre de personnes. Quelles conditions (caractéristiques) faut-il remplir pour être un Macrogroup, et quels sont les avantages de s'inscrire comme tel ?",
      "it": "Avete detto che la differenza tra un Single Group e un Macrogroup non è solo il numero di persone. Quali condizioni (caratteristiche) occorre soddisfare per essere un Macrogroup, e quali sono i vantaggi di iscriversi come tale?",
      "pt": "Disseram que a diferença entre um Single Group e um Macrogroup não é apenas o número de pessoas. Que condições (características) é preciso cumprir para ser um Macrogroup, e quais são as vantagens de se inscrever como tal?"
    },
    "a": {
      "ko": "단일그룹(Single Group)과 대규모그룹(Macrogroup)의 차이는 참가 인원뿐 아니라, 참가 일정과 패키지 구성 및 등록 관리 방식에 있습니다. 단일그룹은 최대 150명까지 별도의 하위그룹(Subgroup) 없이 하나의 그룹으로 등록하는 방식으로, 모든 참가자의 참가 일정과 패키지가 동일한 경우에 적합합니다. 대규모그룹은 최대 5,000명까지 등록할 수 있으며, 참가 일정이나 패키지가 서로 다른 참가자들을 하위그룹으로 나누어 관리할 수 있습니다. 각 하위그룹은 동일한 패키지와 도착일·출발일을 가진 참가자들로 구성합니다. 대규모그룹의 장점은 하나의 조직 아래 여러 하위그룹을 두면서도, 하위그룹별로 등록·정보 수정·결제를 독립적으로 진행할 수 있다는 점입니다. 따라서 그룹 규모뿐 아니라 참가 일정과 패키지의 다양성, 하위그룹별 관리 필요성을 고려하여 등록 방식을 선택하시면 됩니다",
      "en": "The difference between a Single Group and a Macrogroup lies not only in the number of participants but also in the participation dates, the package arrangements and how registration is managed. A Single Group registers up to 150 people as one group without Subgroups, and suits groups in which every participant has the same dates and package. A Macrogroup can register up to 5,000 people and can manage participants with different dates or packages by dividing them into Subgroups. Each Subgroup is made up of participants with the same package and the same arrival and departure dates. The advantage of a Macrogroup is that, while keeping several Subgroups under one organization, each Subgroup can register, edit its information and pay independently. Please choose the registration type in light of not only group size but also the variety of dates and packages and the need to manage each Subgroup separately.",
      "es": "La diferencia entre un Single Group y un Macrogroup no está solo en el número de participantes, sino también en las fechas de participación, la configuración de los paquetes y la forma de gestionar la inscripción. Un Single Group inscribe hasta 150 personas como un solo grupo sin Subgroups, y es adecuado para grupos en los que todos los participantes tienen las mismas fechas y el mismo paquete. Un Macrogroup puede inscribir hasta 5.000 personas y permite gestionar a participantes con fechas o paquetes distintos dividiéndolos en Subgroups. Cada Subgroup está formado por participantes con el mismo paquete y las mismas fechas de llegada y salida. La ventaja de un Macrogroup es que, manteniendo varios Subgroups bajo una misma organización, cada Subgroup puede inscribirse, modificar sus datos y pagar de forma independiente. Elijan el tipo de inscripción teniendo en cuenta no solo el tamaño del grupo, sino también la variedad de fechas y paquetes y la necesidad de gestionar cada Subgroup por separado.",
      "fr": "La différence entre un Single Group et un Macrogroup ne réside pas seulement dans le nombre de participants, mais aussi dans les dates de participation, la composition des forfaits et le mode de gestion de l'inscription. Un Single Group inscrit jusqu'à 150 personnes comme un seul groupe, sans Subgroups, et convient aux groupes dont tous les participants ont les mêmes dates et le même forfait. Un Macrogroup peut inscrire jusqu'à 5 000 personnes et permet de gérer des participants aux dates ou forfaits différents en les répartissant en Subgroups. Chaque Subgroup réunit des participants ayant le même forfait et les mêmes dates d'arrivée et de départ. L'avantage d'un Macrogroup est que, tout en réunissant plusieurs Subgroups sous une même organisation, chaque Subgroup peut s'inscrire, modifier ses informations et payer de manière indépendante. Choisissez le type d'inscription en tenant compte non seulement de la taille du groupe, mais aussi de la diversité des dates et des forfaits et du besoin de gérer chaque Subgroup séparément.",
      "it": "La differenza tra un Single Group e un Macrogroup non riguarda solo il numero di partecipanti, ma anche le date di partecipazione, la composizione dei pacchetti e la modalità di gestione dell'iscrizione. Un Single Group iscrive fino a 150 persone come un unico gruppo senza Subgroup ed è adatto ai gruppi in cui tutti i partecipanti hanno le stesse date e lo stesso pacchetto. Un Macrogroup può iscrivere fino a 5.000 persone e può gestire partecipanti con date o pacchetti diversi suddividendoli in Subgroup. Ogni Subgroup è composto da partecipanti con lo stesso pacchetto e le stesse date di arrivo e partenza. Il vantaggio di un Macrogroup è che, pur mantenendo più Subgroup sotto un'unica organizzazione, ciascun Subgroup può iscriversi, modificare i propri dati e pagare in modo autonomo. Scegliete il tipo di iscrizione tenendo conto non solo della dimensione del gruppo, ma anche della varietà di date e pacchetti e dell'esigenza di gestire separatamente ciascun Subgroup.",
      "pt": "A diferença entre um Single Group e um Macrogroup não está apenas no número de participantes, mas também nas datas de participação, na composição dos pacotes e na forma de gerir a inscrição. Um Single Group inscreve até 150 pessoas como um único grupo, sem Subgroups, e é adequado a grupos em que todos os participantes têm as mesmas datas e o mesmo pacote. Um Macrogroup pode inscrever até 5000 pessoas e pode gerir participantes com datas ou pacotes diferentes, dividindo-os em Subgroups. Cada Subgroup é composto por participantes com o mesmo pacote e as mesmas datas de chegada e partida. A vantagem de um Macrogroup é que, mantendo vários Subgroups sob uma única organização, cada Subgroup pode inscrever-se, editar os seus dados e pagar de forma independente. Escolham o tipo de inscrição tendo em conta não só a dimensão do grupo, mas também a variedade de datas e pacotes e a necessidade de gerir cada Subgroup separadamente."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "한국까지는 개별적으로 이동하지만 동일한 그룹에 속한 사람들은 별도의 하위그룹(Subgroup)을 만들어야 하나요?",
      "en": "Do people who belong to the same group but travel to Korea individually need to form a separate Subgroup?",
      "es": "Las personas que pertenecen al mismo grupo pero viajan a Corea por su cuenta, ¿deben formar un Subgroup aparte?",
      "fr": "Les personnes qui appartiennent au même groupe mais se rendent en Corée individuellement doivent-elles former un Subgroup distinct ?",
      "it": "Le persone che appartengono allo stesso gruppo ma viaggiano verso la Corea individualmente devono formare un Subgroup separato?",
      "pt": "As pessoas que pertencem ao mesmo grupo mas viajam para a Coreia individualmente precisam de formar um Subgroup separado?"
    },
    "a": {
      "ko": "한국까지 개별적으로 이동하더라도, 대회 기간 중 동일한 일정에, 동일한 패키지를 이용하여, 동일한 그룹 리더의 인솔과 관리 아래 활동할 예정이라면 별도의 하위그룹을 구성하지 않고 같은 그룹으로 등록하실 수 있습니다. 다만, 참가자별로 선택하는 패키지나 참가 일정이 다른 경우에는 하위그룹 구성이 필요할 수 있으므로, 등록시스템의 세부 기준을 확인해 주시기 바랍니다.",
      "en": "Even if they travel to Korea individually, they can register in the same group without forming a separate Subgroup, provided they will follow the same schedule during WYD Seoul 2027, use the same package, and take part under the guidance and supervision of the same group leader. If participants choose different packages or dates, however, Subgroups may be needed, so please check the detailed criteria in the registration system.",
      "es": "Aunque viajen a Corea por su cuenta, pueden inscribirse en el mismo grupo sin formar un Subgroup aparte, siempre que sigan el mismo programa durante la JMJ Seúl 2027, utilicen el mismo paquete y participen bajo la guía y supervisión del mismo líder de grupo. No obstante, si los participantes eligen paquetes o fechas distintos, puede ser necesario formar Subgroups, por lo que les rogamos que consulten los criterios detallados en el sistema de inscripción.",
      "fr": "Même si elles se rendent en Corée individuellement, elles peuvent s'inscrire dans le même groupe sans former de Subgroup distinct, à condition de suivre le même programme pendant les JMJ Séoul 2027, d'utiliser le même forfait et de participer sous la conduite et la supervision du même responsable de groupe. Si les participants choisissent des forfaits ou des dates différents, des Subgroups peuvent toutefois être nécessaires ; veuillez donc consulter les critères détaillés dans le système d'inscription.",
      "it": "Anche se viaggiano verso la Corea individualmente, possono iscriversi nello stesso gruppo senza formare un Subgroup separato, a condizione che seguano lo stesso programma durante la GMG Seoul 2027, utilizzino lo stesso pacchetto e partecipino sotto la guida e la supervisione dello stesso responsabile di gruppo. Se però i partecipanti scelgono pacchetti o date diversi, potrebbero essere necessari dei Subgroup; vi invitiamo quindi a verificare i criteri dettagliati nel sistema di iscrizione.",
      "pt": "Mesmo que viajem para a Coreia individualmente, podem inscrever-se no mesmo grupo sem formar um Subgroup separado, desde que sigam o mesmo programa durante a JMJ Seul 2027, utilizem o mesmo pacote e participem sob a orientação e supervisão do mesmo responsável de grupo. No entanto, se os participantes escolherem pacotes ou datas diferentes, poderão ser necessários Subgroups; consultem, por isso, os critérios detalhados no sistema de inscrição."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희가 150명 미만의 단일그룹(Single Group)인데 서로 다른 두 가지 교통수단으로 도착할 경우, 같은 그룹으로 등록하고 두 곳에서 각각 픽업 받을 수 있나요?",
      "en": "We are a Single Group of fewer than 150 people arriving by two different means of transport. Can we register as one group and be picked up at two different places?",
      "es": "Somos un Single Group de menos de 150 personas que llegará en dos medios de transporte distintos. ¿Podemos inscribirnos como un solo grupo y que nos recojan en dos lugares distintos?",
      "fr": "Nous sommes un Single Group de moins de 150 personnes qui arrivera par deux moyens de transport différents. Pouvons-nous nous inscrire comme un seul groupe et être pris en charge à deux endroits différents ?",
      "it": "Siamo un Single Group di meno di 150 persone che arriva con due mezzi di trasporto diversi. Possiamo iscriverci come un unico gruppo ed essere prelevati in due luoghi diversi?",
      "pt": "Somos um Single Group de menos de 150 pessoas que chega em dois meios de transporte diferentes. Podemos inscrever-nos como um único grupo e ser recolhidos em dois locais diferentes?"
    },
    "a": {
      "ko": "150명 미만의 단일그룹(Single Group)이 서로 다른 교통수단으로 도착하더라도, 동일한 일정과 패키지로 같은 그룹 리더의 인솔과 관리 아래 참가할 예정이라면 같은 그룹으로 등록하실 수 있습니다.\n다만, 같은 그룹으로 등록하는 것과 두 곳에서 각각 픽업을 제공받는 것은 별개의 사항입니다. 현재 조직위원회에서는 공항 도착 시 별도의 픽업 서비스를 제공할 계획이 없으므로, 각 도착 장소에서 체크인 장소 및 숙소까지는 직접 이동해 주시기 바랍니다. 숙소에서 주요 행사장과 교리교육 장소 등으로 이동하실 때는 패키지에 포함된 교통카드를 이용해 대중교통 수단을 이용하실 수 있습니다.",
      "en": "A Single Group of fewer than 150 people can register as one group even if its members arrive by different means of transport, provided they will take part on the same schedule and package under the guidance and supervision of the same group leader.\nRegistering as one group and being picked up at two places are, however, separate matters. The LOC currently has no plans to provide a pickup service on arrival at the airport, so please make your own way from each arrival point to the check-in location and your accommodation. For travel from your accommodation to the main venues and catechesis venues, you can use public transport with the transport card included in your package.",
      "es": "Un Single Group de menos de 150 personas puede inscribirse como un solo grupo aunque sus miembros lleguen en medios de transporte distintos, siempre que participen con el mismo programa y paquete bajo la guía y supervisión del mismo líder de grupo.\nSin embargo, inscribirse como un solo grupo y ser recogidos en dos lugares son cuestiones distintas. Actualmente el COL no tiene previsto ofrecer un servicio de recogida a la llegada al aeropuerto, por lo que les rogamos que se desplacen por su cuenta desde cada punto de llegada hasta el lugar de acreditación y su alojamiento. Para desplazarse desde el alojamiento hasta los lugares principales y los lugares de las catequesis, pueden usar el transporte público con la tarjeta de transporte incluida en su paquete.",
      "fr": "Un Single Group de moins de 150 personnes peut s'inscrire comme un seul groupe même si ses membres arrivent par des moyens de transport différents, à condition de participer avec le même programme et le même forfait sous la conduite et la supervision du même responsable de groupe.\nToutefois, s'inscrire comme un seul groupe et être pris en charge à deux endroits sont deux questions distinctes. Le COL ne prévoit pas actuellement de service d'accueil à l'arrivée à l'aéroport ; nous vous prions donc de vous rendre par vos propres moyens de chaque point d'arrivée jusqu'au lieu d'accréditation et à votre hébergement. Pour vous rendre de votre hébergement aux principaux sites et aux lieux des catéchèses, vous pourrez utiliser les transports en commun avec la carte de transport incluse dans votre forfait.",
      "it": "Un Single Group di meno di 150 persone può iscriversi come un unico gruppo anche se i suoi membri arrivano con mezzi di trasporto diversi, a condizione che partecipino con lo stesso programma e lo stesso pacchetto sotto la guida e la supervisione dello stesso responsabile di gruppo.\nIscriversi come un unico gruppo ed essere prelevati in due luoghi sono però questioni distinte. Al momento il COL non prevede un servizio di prelievo all'arrivo in aeroporto; vi invitiamo quindi a raggiungere autonomamente, da ciascun punto di arrivo, il luogo di check-in e il vostro alloggio. Per gli spostamenti dall'alloggio alle sedi principali e alle sedi delle catechesi potete usare i mezzi pubblici con la tessera trasporti inclusa nel vostro pacchetto.",
      "pt": "Um Single Group de menos de 150 pessoas pode inscrever-se como um único grupo mesmo que os seus membros cheguem em meios de transporte diferentes, desde que participem com o mesmo programa e o mesmo pacote, sob a orientação e supervisão do mesmo responsável de grupo.\nInscrever-se como um único grupo e ser recolhido em dois locais são, no entanto, questões distintas. De momento, o COL não prevê um serviço de recolha à chegada ao aeroporto; por isso, desloquem-se pelos vossos próprios meios desde cada ponto de chegada até ao local de check-in e ao vosso alojamento. Para as deslocações do alojamento para os locais principais e para os locais das catequeses, podem utilizar os transportes públicos com o cartão de transporte incluído no vosso pacote."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구당 구성할 수 있는 대규모그룹(Macrogroup)의 수에 제한이 있나요?",
      "en": "Is there a limit on the number of Macrogroups a diocese can form?",
      "es": "¿Hay un límite en el número de Macrogroups que puede formar una diócesis?",
      "fr": "Le nombre de Macrogroups qu'un diocèse peut constituer est-il limité ?",
      "it": "C'è un limite al numero di Macrogroup che una diocesi può formare?",
      "pt": "Há um limite para o número de Macrogroups que uma diocese pode formar?"
    },
    "a": {
      "ko": "대규모그룹(Macrogroup) 수의 제한은 없으며, 그룹 내 인원만 5,000명 이하로 제한합니다.",
      "en": "There is no limit on the number of Macrogroups; only the number of people in a group is limited, to 5,000 or fewer.",
      "es": "No hay límite en el número de Macrogroups; solo se limita el número de personas de un grupo, a 5.000 como máximo.",
      "fr": "Le nombre de Macrogroups n'est pas limité ; seul le nombre de personnes au sein d'un groupe est limité, à 5 000 au maximum.",
      "it": "Non c'è un limite al numero di Macrogroup; è limitato solo il numero di persone per gruppo, che non può superare 5.000.",
      "pt": "Não há limite para o número de Macrogroups; apenas o número de pessoas por grupo está limitado, a 5000 ou menos."
    },
    "sub": {
      "ko": "그룹유형",
      "en": "Group Types",
      "es": "Tipos de grupo",
      "fr": "Types de groupe",
      "it": "Tipi di gruppo",
      "pt": "Tipos de grupo"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록 과정에서 주교회의는 어떤 역할을 하나요? 모든 그룹이 주교회의 청소년부의 승인을 받아야 하나요?",
      "en": "What role does the episcopal conference play in the registration process? Do all groups need the approval of the episcopal conference's youth department?",
      "es": "¿Qué papel desempeña la conferencia episcopal en el proceso de inscripción? ¿Todos los grupos necesitan la aprobación del departamento de juventud de la conferencia episcopal?",
      "fr": "Quel rôle joue la conférence épiscopale dans le processus d'inscription ? Tous les groupes doivent-ils obtenir l'approbation du service de la jeunesse de la conférence épiscopale ?",
      "it": "Quale ruolo svolge la conferenza episcopale nel processo di iscrizione? Tutti i gruppi hanno bisogno dell'approvazione dell'ufficio per la pastorale giovanile della conferenza episcopale?",
      "pt": "Que papel desempenha a conferência episcopal no processo de inscrição? Todos os grupos precisam da aprovação do departamento de pastoral juvenil da conferência episcopal?"
    },
    "a": {
      "ko": "각 주교회의는 등록 과정에서의 역할을 자율적으로 결정할 수 있습니다. 조직위는 한 국가의 모든 그룹이 등록하기 위해 반드시 해당 주교회의 청소년 담당 부서의 승인을 받도록 요구하지 않습니다.",
      "en": "Each episcopal conference is allowed to decide its role in registration. The LOC does not require all groups from a country to have the approval of the episcopal conference's youth department in order to register.",
      "es": "Cada conferencia episcopal puede decidir su papel en la inscripción. El COL no exige que todos los grupos de un país tengan la aprobación del departamento de juventud de la conferencia episcopal para poder inscribirse.",
      "fr": "Chaque conférence épiscopale est libre de décider de son rôle dans l'inscription. Le COL n'exige pas que tous les groupes d'un pays obtiennent l'approbation du service de la jeunesse de la conférence épiscopale pour pouvoir s'inscrire.",
      "it": "Ogni conferenza episcopale è libera di decidere il proprio ruolo nell'iscrizione. Il COL non richiede che tutti i gruppi di un Paese abbiano l'approvazione dell'ufficio per la pastorale giovanile della conferenza episcopale per potersi iscrivere.",
      "pt": "Cada conferência episcopal pode decidir o seu papel na inscrição. O COL não exige que todos os grupos de um país tenham a aprovação do departamento de pastoral juvenil da conferência episcopal para se inscreverem."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희 그룹은 교구대회(Days in the Dioceses)에 참가하지만, 자체 프로그램을 준비하고(숙소도 자체적으로 마련) LOC의 물류 지원이 필요 없습니다. 등록 포털에서 교구대회 참가 여부를 '예'로 체크해야 하나요, '아니오'로 체크해야 하나요?",
      "en": "Our group is taking part in Days in the Dioceses, but we are preparing our own program (and arranging our own accommodation) and do not need the LOC's logistical support. On the registration portal, should we tick 'Yes' or 'No' for participation in Days in the Dioceses?",
      "es": "Nuestro grupo participará en los Días en las Diócesis, pero preparamos nuestro propio programa (y organizamos nuestro propio alojamiento) y no necesitamos el apoyo logístico del COL. En el portal de inscripción, ¿debemos marcar 'Sí' o 'No' en la participación en los Días en las Diócesis?",
      "fr": "Notre groupe participe aux Journées dans les diocèses, mais nous préparons notre propre programme (et organisons notre propre hébergement) et n'avons pas besoin du soutien logistique du COL. Sur le portail d'inscription, devons-nous cocher 'Oui' ou 'Non' pour la participation aux Journées dans les diocèses ?",
      "it": "Il nostro gruppo partecipa alle Giornate nelle Diocesi, ma stiamo preparando un nostro programma (e organizzando autonomamente l'alloggio) e non abbiamo bisogno del supporto logistico del COL. Sul portale di iscrizione, dobbiamo spuntare 'Sì' o 'No' per la partecipazione alle Giornate nelle Diocesi?",
      "pt": "O nosso grupo participa nos Dias nas Dioceses, mas estamos a preparar o nosso próprio programa (e a tratar do nosso próprio alojamento) e não precisamos do apoio logístico do COL. No portal de inscrição, devemos assinalar 'Sim' ou 'Não' na participação nos Dias nas Dioceses?"
    },
    "a": {
      "ko": "교구대회 준비 및 운영상의 참조를 위해 참가여부를 '예'로 체크해 주시기 바랍니다.",
      "en": "Please tick 'Yes' so that it can be taken into account in preparing and running Days in the Dioceses.",
      "es": "Marquen 'Sí', para que pueda tenerse en cuenta en la preparación y organización de los Días en las Diócesis.",
      "fr": "Merci de cocher 'Oui', afin que cela puisse être pris en compte dans la préparation et l'organisation des Journées dans les diocèses.",
      "it": "Spuntate 'Sì', così che se ne possa tenere conto nella preparazione e nello svolgimento delle Giornate nelle Diocesi.",
      "pt": "Assinalem 'Sim', para que isso possa ser tido em conta na preparação e realização dos Dias nas Dioceses."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록이 시작되는 시점부터 각 국가 담당자가 등록 관련 문의를 해결할 수 있도록 직접적인 지원이 제공되나요? 또한 단계별 안내가 담긴 전체 영상을 제공해주시나요?",
      "en": "From the start of registration, will direct support be provided so that each country's coordinator can resolve registration queries? And will you provide a full video with step-by-step guidance?",
      "es": "Desde el inicio de la inscripción, ¿se ofrecerá apoyo directo para que el coordinador de cada país pueda resolver las consultas sobre la inscripción? ¿Y facilitarán un vídeo completo con instrucciones paso a paso?",
      "fr": "Dès le début des inscriptions, un soutien direct sera-t-il proposé pour que le coordinateur de chaque pays puisse répondre aux questions sur l'inscription ? Et fournirez-vous une vidéo complète avec des instructions pas à pas ?",
      "it": "Dall'apertura delle iscrizioni, sarà fornito un supporto diretto perché i coordinatori di ciascun Paese possano risolvere i dubbi sull'iscrizione? E fornirete un video completo con una guida passo passo?",
      "pt": "A partir da abertura das inscrições, será dado apoio direto para que os coordenadores de cada país possam resolver dúvidas sobre a inscrição? E vão disponibilizar um vídeo completo com orientações passo a passo?"
    },
    "a": {
      "ko": "각국 담당자들이 등록 관련 문의에 원활하게 대응할 수 있도록 지원 방안과 안내 자료를 준비하고 있습니다. 담당자 대상 직접 지원 방식과 단계별 등록 절차를 설명하는 전체 영상의 제공 여부는 현재 내부적으로 검토·논의 중이며, 구체적인 내용과 제공 일정은 확정되는 대로 안내드리겠습니다.",
      "en": "We are preparing support measures and guidance materials so that each country's coordinators can respond smoothly to registration queries. Whether to offer direct support for coordinators, and a full video explaining the registration procedure step by step, is currently under internal review and discussion; we will share the details and timing as soon as they are confirmed.",
      "es": "Estamos preparando medidas de apoyo y materiales informativos para que los coordinadores de cada país puedan responder sin dificultad a las consultas sobre la inscripción. La posibilidad de ofrecer apoyo directo a los coordinadores, así como un vídeo completo que explique paso a paso el procedimiento de inscripción, se está estudiando y debatiendo internamente; comunicaremos los detalles y el calendario en cuanto se confirmen.",
      "fr": "Nous préparons des mesures de soutien et des documents d'information pour que les coordinateurs de chaque pays puissent répondre sans difficulté aux questions sur l'inscription. La possibilité d'offrir un soutien direct aux coordinateurs, ainsi qu'une vidéo complète expliquant pas à pas la procédure d'inscription, est actuellement à l'étude en interne ; nous en communiquerons les détails et le calendrier dès qu'ils seront confirmés.",
      "it": "Stiamo preparando misure di supporto e materiali informativi perché i coordinatori di ciascun Paese possano rispondere agevolmente alle domande sull'iscrizione. L'eventuale supporto diretto ai coordinatori e un video completo che spieghi la procedura di iscrizione passo passo sono attualmente in fase di valutazione e discussione interna; ne comunicheremo i dettagli e i tempi non appena saranno confermati.",
      "pt": "Estamos a preparar medidas de apoio e materiais de orientação para que os coordenadores de cada país possam responder sem dificuldades às dúvidas sobre a inscrição. A eventual oferta de apoio direto aos coordenadores e de um vídeo completo que explique o procedimento de inscrição passo a passo está atualmente em análise e discussão interna; partilharemos os pormenores e o calendário logo que estejam confirmados."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹 등록은 전액 결제가 완료된 후에만 공식 확정(구역, 숙소 등 배정 포함)되나요, 아니면 등록 포털에 기본 정보를 처음 제출한 시점에 이미 확정되나요?",
      "en": "Is a group registration officially confirmed (including allocation of zones, accommodation, etc.) only after full payment, or is it already confirmed when basic information is first submitted on the registration portal?",
      "es": "¿La inscripción de un grupo queda confirmada oficialmente (incluida la asignación de zonas, alojamiento, etc.) solo después del pago completo, o ya queda confirmada cuando se envían por primera vez los datos básicos en el portal de inscripción?",
      "fr": "L'inscription d'un groupe est-elle officiellement confirmée (y compris l'attribution des zones, de l'hébergement, etc.) seulement après le paiement intégral, ou dès la première soumission des informations de base sur le portail d'inscription ?",
      "it": "L'iscrizione di un gruppo è confermata ufficialmente (inclusa l'assegnazione di settori, alloggi, ecc.) solo dopo il pagamento completo, oppure è già confermata quando i dati di base vengono inviati per la prima volta sul portale di iscrizione?",
      "pt": "A inscrição de um grupo só fica oficialmente confirmada (incluindo a atribuição de setores, alojamento, etc.) após o pagamento integral, ou já fica confirmada quando os dados básicos são submetidos pela primeira vez no portal de inscrição?"
    },
    "a": {
      "ko": "그룹 등록은 참가 분담금의 전액 결제가 완료된 후에만 공식 확정됩니다.",
      "en": "A group registration is officially confirmed only once the Participation Contribution has been paid in full.",
      "es": "La inscripción de un grupo solo queda confirmada oficialmente una vez pagada íntegramente la Contribución de Participación.",
      "fr": "L'inscription d'un groupe n'est officiellement confirmée qu'une fois la Contribution de participation intégralement payée.",
      "it": "L'iscrizione di un gruppo è confermata ufficialmente solo una volta che il Contributo di partecipazione è stato pagato per intero.",
      "pt": "A inscrição de um grupo só fica oficialmente confirmada depois de a Contribuição de participação ter sido paga na totalidade."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "사제 등록 및 인증을 위해 필요한 서류는 무엇인가요? Celebret, 사목허가증 및 Good Standing 증명서 등이 필요한지 궁금합니다. 또한 수도회 소속 사제의 경우 관구장의 증명서로 충분한지, 아니면 교구장 주교의 증명서가 필요한지도 안내 부탁드립니다.",
      "en": "What documents are needed to register and verify priests? Are a celebret, faculties and a certificate of good standing required? For priests of a religious order, is a certificate from the provincial sufficient, or is one from the diocesan bishop required?",
      "es": "¿Qué documentos se necesitan para inscribir y verificar a los sacerdotes? ¿Se requieren el celebret, las facultades y un certificado de buena conducta? En el caso de los sacerdotes de una orden religiosa, ¿basta un certificado del provincial o se requiere uno del obispo diocesano?",
      "fr": "Quels documents faut-il pour inscrire et vérifier les prêtres ? Faut-il un celebret, les pouvoirs (facultés) et un certificat de bonne conduite ? Pour les prêtres d'un ordre religieux, un certificat du provincial suffit-il, ou faut-il un certificat de l'évêque diocésain ?",
      "it": "Quali documenti servono per iscrivere e verificare i sacerdoti? Sono richiesti il celebret, le facoltà e un certificato di buona condotta? Per i sacerdoti di un ordine religioso basta un certificato del provinciale, o serve quello del vescovo diocesano?",
      "pt": "Que documentos são necessários para inscrever e verificar os sacerdotes? São exigidos o celebret, as faculdades e um certificado de idoneidade? Para os sacerdotes de uma ordem religiosa, basta um certificado do provincial, ou é preciso um do bispo diocesano?"
    },
    "a": {
      "ko": "사제는 소속 그룹의 일원으로 등록하며, 사제 신분 확인을 위해서는 신분증 사진, 소속 교구 직권자가 발급한 사제 신분증명서, 미성년자 및 취약 성인 보호 확인서를 제출해야 합니다. 수도회 소속 사제의 경우에는 소속 관구장의 증명서를 제출하시면 됩니다.",
      "en": "Priests register as members of their group. To verify their status as priests, they must submit a photo of their ID, a certificate of priestly status issued by the Ordinary of their diocese, and a safeguarding declaration for minors and vulnerable adults. Priests of a religious order may submit a certificate from their provincial.",
      "es": "Los sacerdotes se inscriben como miembros de su grupo. Para verificar su condición de sacerdotes, deben presentar una foto de su documento de identidad, un certificado de condición sacerdotal expedido por el Ordinario de su diócesis y una declaración de protección de menores y adultos vulnerables. Los sacerdotes de una orden religiosa pueden presentar un certificado de su provincial.",
      "fr": "Les prêtres s'inscrivent comme membres de leur groupe. Pour vérifier leur statut de prêtre, ils doivent fournir une photo de leur pièce d'identité, une attestation d'état sacerdotal délivrée par l'Ordinaire de leur diocèse et une déclaration de protection des mineurs et des personnes vulnérables. Les prêtres d'un ordre religieux peuvent fournir un certificat de leur provincial.",
      "it": "I sacerdoti si iscrivono come membri del loro gruppo. Per verificare il loro stato sacerdotale devono presentare una foto del documento d'identità, un certificato di stato sacerdotale rilasciato dall'Ordinario della loro diocesi e una dichiarazione di tutela dei minori e degli adulti vulnerabili. I sacerdoti di un ordine religioso possono presentare un certificato del loro provinciale.",
      "pt": "Os sacerdotes inscrevem-se como membros do seu grupo. Para verificar o seu estatuto de sacerdote, devem apresentar uma fotografia do documento de identificação, um certificado de estatuto sacerdotal emitido pelo Ordinário da sua diocese e uma declaração de proteção de menores e adultos vulneráveis. Os sacerdotes de uma ordem religiosa podem apresentar um certificado do seu provincial."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록은 언제 시작되나요? 대규모그룹(Macrogroup)의 순례자 등록을 순차적으로 나눠서 할 수 있나요 ? 아니면 한번에 완료해야 하나요 ?",
      "en": "When does registration begin? Can the pilgrims of a Macrogroup be registered in stages, or must it all be done at once?",
      "es": "¿Cuándo comienza la inscripción? ¿Se puede inscribir a los peregrinos de un Macrogroup por etapas, o hay que hacerlo todo de una vez?",
      "fr": "Quand l'inscription commence-t-elle ? Peut-on inscrire les pèlerins d'un Macrogroup par étapes, ou faut-il tout faire en une seule fois ?",
      "it": "Quando iniziano le iscrizioni? I pellegrini di un Macrogroup possono essere iscritti per fasi, o va fatto tutto in una volta?",
      "pt": "Quando começa a inscrição? Os peregrinos de um Macrogroup podem ser inscritos por fases, ou tem de ser tudo de uma vez?"
    },
    "a": {
      "ko": "온라인 등록은 10월 23일에 시작할 예정이며, 대규모그룹(Macrogroup)의 전체 등록을 한 번에 진행하실 필요는 없습니다. 등록시스템의 '임시 저장(Save as draft)' 기능을 이용하여 입력한 내용을 저장한 후, 추후 추가 정보를 입력하거나 기존 내용을 수정하실 수 있습니다. 필요한 등록 정보를 모두 입력하고 확인한 뒤 결제를 진행해 주시기 바랍니다. 또한 대규모그룹 내에 하위그룹(Subgroup)을 구성하여, 준비가 완료된 하위그룹부터 등록하고 나머지 그룹은 준비되는 대로 순차적으로 등록하실 수 있습니다.",
      "en": "Online registration is scheduled to open at the end of October, and a Macrogroup does not need to complete its whole registration at once. Using the registration system's 'Save as draft' function, you can save what you have entered and later add further information or edit it. Please make payment after entering and checking all the required registration information. You can also form Subgroups within the Macrogroup, register the Subgroups that are ready first, and register the rest one by one as they become ready.",
      "es": "Está previsto que la inscripción en línea se abra a finales de octubre, y un Macrogroup no necesita completar toda su inscripción de una vez. Con la función 'Save as draft' (guardar borrador) del sistema de inscripción, pueden guardar lo introducido y más adelante añadir información o modificarla. Realicen el pago después de introducir y comprobar todos los datos de inscripción necesarios. También pueden formar Subgroups dentro del Macrogroup, inscribir primero los Subgroups que estén listos y el resto uno a uno a medida que estén preparados.",
      "fr": "L'inscription en ligne doit ouvrir fin octobre, et un Macrogroup n'a pas besoin de finaliser toute son inscription en une seule fois. Grâce à la fonction 'Save as draft' (enregistrer comme brouillon) du système d'inscription, vous pouvez enregistrer ce que vous avez saisi, puis ajouter des informations ou les modifier plus tard. Merci d'effectuer le paiement après avoir saisi et vérifié toutes les informations d'inscription nécessaires. Vous pouvez aussi constituer des Subgroups au sein du Macrogroup, inscrire d'abord ceux qui sont prêts, puis les autres un par un au fur et à mesure.",
      "it": "L'iscrizione online dovrebbe aprirsi alla fine di ottobre, e un Macrogroup non deve completare tutta l'iscrizione in una volta. Con la funzione 'Salva come bozza' del sistema di iscrizione potete salvare quanto inserito e in seguito aggiungere altre informazioni o modificarle. Effettuate il pagamento dopo aver inserito e controllato tutti i dati di iscrizione richiesti. Potete anche formare dei Subgroup all'interno del Macrogroup, iscrivere prima i Subgroup già pronti e iscrivere gli altri man mano che sono pronti.",
      "pt": "A inscrição online deverá abrir no final de outubro, e um Macrogroup não precisa de concluir toda a inscrição de uma vez. Com a função 'Guardar como rascunho' do sistema de inscrição, podem guardar o que introduziram e, mais tarde, acrescentar mais informações ou editá-las. Efetuem o pagamento depois de introduzir e verificar todos os dados de inscrição necessários. Podem também formar Subgroups dentro do Macrogroup, inscrever primeiro os Subgroups que já estiverem prontos e inscrever os restantes à medida que ficarem prontos."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자의 연령 기준과 참가 인원 제한은 무엇이며, 30세 이상 청년과 40~50대 이상 성인 또는 고령 동반자는 어떤 자격으로 등록해야 하나요?",
      "en": "What are the age criteria and participant limits for pilgrims, and in what capacity should young people over 30, adults in their 40s and 50s and older, or elderly companions register?",
      "es": "¿Cuáles son los criterios de edad y los límites de participantes para los peregrinos? ¿En qué calidad deben inscribirse los jóvenes mayores de 30 años, los adultos de 40 y 50 años o más, o los acompañantes de edad avanzada?",
      "fr": "Quels sont les critères d'âge et les limites de participants pour les pèlerins, et à quel titre doivent s'inscrire les jeunes de plus de 30 ans, les adultes de 40, 50 ans et plus, ou les accompagnateurs âgés ?",
      "it": "Quali sono i criteri di età e i limiti di partecipanti per i pellegrini, e in quale veste devono iscriversi i giovani oltre i 30 anni, gli adulti di 40, 50 anni e oltre, o gli accompagnatori anziani?",
      "pt": "Quais são os critérios de idade e os limites de participantes para os peregrinos, e em que qualidade se devem inscrever os jovens com mais de 30 anos, os adultos de 40, 50 anos ou mais, ou os acompanhantes idosos?"
    },
    "a": {
      "ko": "WYD는 주로 14세부터 30세까지의 젊은이들을 중심으로 마련된 행사이지만, 참여를 원하는 모든 이들에게 열려 있으며 순례자의 참가 연령과 인원에 별도의 제한은 없습니다. 따라서 30세 이상 참가자와 40~50대 성인, 고령 동반자도 별도의 자격 구분 없이 순례자 그룹의 일원으로 등록할 수 있습니다.",
      "en": "World Youth Day is designed mainly around young people aged 14 to 30, but it is open to everyone who wishes to take part, and there are no limits on pilgrims' age or numbers. Participants over 30, adults in their 40s and 50s, and elderly companions can therefore all register as members of a pilgrim group without any separate category.",
      "es": "La Jornada Mundial de la Juventud está pensada principalmente para jóvenes de 14 a 30 años, pero está abierta a todos los que deseen participar, y no hay límites de edad ni de número de peregrinos. Por tanto, los participantes mayores de 30 años, los adultos de 40 y 50 años y los acompañantes de edad avanzada pueden inscribirse todos como miembros de un grupo de peregrinos sin ninguna categoría aparte.",
      "fr": "Les Journées mondiales de la jeunesse s'adressent principalement aux jeunes de 14 à 30 ans, mais elles sont ouvertes à tous ceux qui souhaitent y participer, et il n'y a pas de limite d'âge ni de nombre de pèlerins. Les participants de plus de 30 ans, les adultes de 40 et 50 ans et les accompagnateurs âgés peuvent donc tous s'inscrire comme membres d'un groupe de pèlerins sans catégorie distincte.",
      "it": "La Giornata Mondiale della Gioventù è pensata principalmente per i giovani dai 14 ai 30 anni, ma è aperta a tutti coloro che desiderano partecipare, e non ci sono limiti di età o di numero per i pellegrini. I partecipanti oltre i 30 anni, gli adulti di 40 e 50 anni e gli accompagnatori anziani possono quindi iscriversi tutti come membri di un gruppo di pellegrini, senza alcuna categoria separata.",
      "pt": "A Jornada Mundial da Juventude é pensada sobretudo para jovens dos 14 aos 30 anos, mas está aberta a todos os que desejem participar, e não há limites de idade nem de número de peregrinos. Os participantes com mais de 30 anos, os adultos de 40 e 50 anos e os acompanhantes idosos podem, portanto, inscrever-se todos como membros de um grupo de peregrinos, sem qualquer categoria separada."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록 과정에서 참가자를 추가·삭제하거나 입력 정보를 수정할 수 있나요?",
      "en": "During registration, can participants be added or removed, or the information entered be changed?",
      "es": "Durante la inscripción, ¿se pueden añadir o eliminar participantes o cambiar la información introducida?",
      "fr": "Pendant l'inscription, peut-on ajouter ou retirer des participants, ou modifier les informations saisies ?",
      "it": "Durante l'iscrizione è possibile aggiungere o rimuovere partecipanti, o modificare i dati inseriti?",
      "pt": "Durante a inscrição, é possível acrescentar ou retirar participantes, ou alterar os dados introduzidos?"
    },
    "a": {
      "ko": "가능합니다. 결제 완료 전에는 그룹 리더가 등록시스템에서 전체 참가 인원을 늘리거나 줄일 수 있으며, 사제·부제, 장애가 있는 순례자 및 비자 신청자의 입력 정보도 수정할 수 있습니다. 결제 완료 후에는 조직위원회에 연락하여 정보 수정을 요청해 주시기 바랍니다. 다만, 참가 인원이 감소하더라도 해당 인원에 대한 참가 분담금은 환불되지 않으므로 유의해 주시기 바랍니다.",
      "en": "Yes. Before payment is complete, the group leader can increase or decrease the total number of participants in the registration system and can edit the information entered for priests and deacons, pilgrims with disabilities and visa applicants. After payment is complete, please contact the LOC to request changes. Please note, however, that if the number of participants falls, the Participation Contribution for those participants is not refunded.",
      "es": "Sí. Antes de completar el pago, el líder del grupo puede aumentar o reducir el número total de participantes en el sistema de inscripción y modificar la información introducida de sacerdotes y diáconos, peregrinos con discapacidad y solicitantes de visado. Una vez completado el pago, pónganse en contacto con el COL para solicitar los cambios. Tengan en cuenta, sin embargo, que si el número de participantes disminuye, no se reembolsará la Contribución de Participación correspondiente a esos participantes.",
      "fr": "Oui. Avant la finalisation du paiement, le responsable du groupe peut augmenter ou réduire le nombre total de participants dans le système d'inscription et modifier les informations saisies pour les prêtres et diacres, les pèlerins en situation de handicap et les demandeurs de visa. Une fois le paiement effectué, veuillez contacter le COL pour demander des modifications. Notez toutefois que si le nombre de participants diminue, la Contribution de participation correspondant à ces participants n'est pas remboursée.",
      "it": "Sì. Prima del completamento del pagamento, il responsabile di gruppo può aumentare o diminuire il numero totale di partecipanti nel sistema di iscrizione e può modificare i dati inseriti per sacerdoti e diaconi, pellegrini con disabilità e richiedenti visto. Dopo il completamento del pagamento, contattate il COL per richiedere modifiche. Tenete presente, però, che se il numero di partecipanti diminuisce, il Contributo di partecipazione relativo a quei partecipanti non viene rimborsato.",
      "pt": "Sim. Antes de o pagamento estar concluído, o responsável de grupo pode aumentar ou diminuir o número total de participantes no sistema de inscrição e pode editar os dados introduzidos para sacerdotes e diáconos, peregrinos com deficiência e requerentes de visto. Depois de o pagamento estar concluído, contactem o COL para pedir alterações. Tenham em atenção, porém, que, se o número de participantes diminuir, a Contribuição de participação relativa a esses participantes não é reembolsada."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "참가 취소 시 해당 자리를 대기자나 다른 순례자에게 양도할 수 있으며, 변경 가능한 시점과 범위는 어떻게 되나요?",
      "en": "When a participant cancels, can their place be transferred to someone on a waiting list or to another pilgrim? Until when, and to what extent, can changes be made?",
      "es": "Cuando un participante cancela, ¿se puede ceder su plaza a alguien de la lista de espera o a otro peregrino? ¿Hasta cuándo y en qué medida se pueden hacer cambios?",
      "fr": "Lorsqu'un participant annule, sa place peut-elle être cédée à une personne sur liste d'attente ou à un autre pèlerin ? Jusqu'à quand et dans quelle mesure peut-on faire des changements ?",
      "it": "Quando un partecipante rinuncia, il suo posto può essere trasferito a qualcuno in lista d'attesa o a un altro pellegrino? Fino a quando e in che misura si possono fare modifiche?",
      "pt": "Quando um participante cancela, o seu lugar pode ser transferido para alguém em lista de espera ou para outro peregrino? Até quando, e em que medida, podem ser feitas alterações?"
    },
    "a": {
      "ko": "그룹 대표와 부대표를 제외한 순례자는 등록 시점이나 결제 여부와 관계없이 다른 참가자로 변경할 수 있습니다. 따라서 참가를 취소하는 순례자를 대기자나 다른 순례자로 대체하실 수 있습니다. 다만, 결제 완료 후 참가자를 대체하지 않아 그룹의 전체 참가 인원이 감소하는 경우에는, 감소한 인원에 대한 결제금액은 환불되지 않으므로 이 점을 유의해 주시기 바랍니다.",
      "en": "Pilgrims other than the group leader and second group leader can be replaced by another participant, regardless of when they registered or whether payment has been made. A pilgrim who cancels can therefore be replaced by someone on a waiting list or by another pilgrim. Please note, however, that if a group's total number of participants falls after payment because a participant is not replaced, the amount paid for those participants is not refunded.",
      "es": "Los peregrinos, salvo el líder y el segundo líder del grupo, pueden ser sustituidos por otro participante, independientemente de cuándo se inscribieran o de si se ha realizado el pago. Por tanto, un peregrino que cancela puede ser sustituido por alguien de la lista de espera o por otro peregrino. Tengan en cuenta, sin embargo, que si el número total de participantes de un grupo disminuye después del pago porque no se sustituye a un participante, no se reembolsará el importe pagado por esos participantes.",
      "fr": "Les pèlerins autres que le responsable et le second responsable du groupe peuvent être remplacés par un autre participant, quel que soit le moment de leur inscription ou que le paiement ait été effectué ou non. Un pèlerin qui annule peut donc être remplacé par une personne sur liste d'attente ou par un autre pèlerin. Notez toutefois que si le nombre total de participants d'un groupe diminue après le paiement faute de remplacement, le montant payé pour ces participants n'est pas remboursé.",
      "it": "I pellegrini diversi dal responsabile di gruppo e dal secondo responsabile possono essere sostituiti da un altro partecipante, indipendentemente da quando si sono iscritti o dall'avvenuto pagamento. Un pellegrino che rinuncia può quindi essere sostituito da qualcuno in lista d'attesa o da un altro pellegrino. Tenete presente, però, che se il numero totale di partecipanti di un gruppo diminuisce dopo il pagamento perché un partecipante non viene sostituito, l'importo pagato per quei partecipanti non viene rimborsato.",
      "pt": "Os peregrinos que não sejam o responsável de grupo nem o segundo responsável podem ser substituídos por outro participante, independentemente de quando se inscreveram ou de o pagamento já ter sido feito. Um peregrino que cancela pode, portanto, ser substituído por alguém em lista de espera ou por outro peregrino. Tenham em atenção, porém, que, se o número total de participantes de um grupo diminuir após o pagamento por um participante não ser substituído, o montante pago por esses participantes não é reembolsado."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "리더가 순례자의 정보를 잘못 입력했을 경우, 순례자 본인이 직접 수정할 수 있나요?",
      "en": "If a leader enters a pilgrim's information incorrectly, can the pilgrim correct it themselves?",
      "es": "Si un líder introduce mal los datos de un peregrino, ¿puede el propio peregrino corregirlos?",
      "fr": "Si un responsable saisit mal les informations d'un pèlerin, le pèlerin peut-il les corriger lui-même ?",
      "it": "Se un responsabile inserisce in modo errato i dati di un pellegrino, il pellegrino può correggerli da solo?",
      "pt": "Se um responsável introduzir incorretamente os dados de um peregrino, o peregrino pode corrigi-los ele próprio?"
    },
    "a": {
      "ko": "순례자 본인이 등록시스템에서 자신의 정보를 직접 수정할 수는 없습니다. 개별 참가자 정보는 그룹의 대표와 부대표, 사제·부제, 장애가 있는 순례자 및 비자 발급 지원이 필요한 참가자에 한해 입력이 필요합니다. 그룹 리더가 해당 정보를 잘못 입력한 경우, 결제 완료 전에는 그룹 리더가 직접 수정할 수 있습니다. 결제 완료 후, 수정이 필요한 경우에는 조직위원회(inquiries@wydseoul.org)로 요청해 주시기 바랍니다.",
      "en": "Pilgrims cannot edit their own information in the registration system. Individual participant information needs to be entered only for the group leader and second group leader, priests and deacons, pilgrims with disabilities, and participants who need visa support. If the group leader enters this information incorrectly, they can correct it themselves before payment is complete. If changes are needed after payment, please send your request to the LOC (inquiries@wydseoul.org).",
      "es": "Los peregrinos no pueden modificar sus propios datos en el sistema de inscripción. Solo es necesario introducir información individual del líder y el segundo líder del grupo, de los sacerdotes y diáconos, de los peregrinos con discapacidad y de los participantes que necesitan apoyo para el visado. Si el líder del grupo introduce mal esta información, puede corregirla él mismo antes de completar el pago. Si se necesitan cambios después del pago, envíen su solicitud al COL (inquiries@wydseoul.org).",
      "fr": "Les pèlerins ne peuvent pas modifier leurs propres informations dans le système d'inscription. Les informations individuelles ne doivent être saisies que pour le responsable et le second responsable du groupe, les prêtres et diacres, les pèlerins en situation de handicap et les participants ayant besoin d'un soutien pour leur visa. Si le responsable du groupe saisit mal ces informations, il peut les corriger lui-même avant la finalisation du paiement. Si des modifications sont nécessaires après le paiement, veuillez adresser votre demande au COL (inquiries@wydseoul.org).",
      "it": "I pellegrini non possono modificare i propri dati nel sistema di iscrizione. I dati individuali vanno inseriti solo per il responsabile e il secondo responsabile di gruppo, i sacerdoti e i diaconi, i pellegrini con disabilità e i partecipanti che necessitano di supporto per il visto. Se il responsabile di gruppo inserisce questi dati in modo errato, può correggerli egli stesso prima del completamento del pagamento. Se sono necessarie modifiche dopo il pagamento, inviate la vostra richiesta al COL (inquiries@wydseoul.org).",
      "pt": "Os peregrinos não podem editar os seus próprios dados no sistema de inscrição. Os dados individuais só têm de ser introduzidos para o responsável e o segundo responsável de grupo, os sacerdotes e diáconos, os peregrinos com deficiência e os participantes que necessitem de apoio para o visto. Se o responsável de grupo introduzir estes dados incorretamente, pode corrigi-los ele próprio antes de o pagamento estar concluído. Se forem necessárias alterações após o pagamento, enviem o vosso pedido ao COL (inquiries@wydseoul.org)."
    },
    "sub": {
      "ko": "등록방법",
      "en": "How to Register",
      "es": "Cómo inscribirse",
      "fr": "Comment s'inscrire",
      "it": "Come iscriversi",
      "pt": "Como se inscrever"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "부득이한 사정으로 WYD에 참석하지 못하게 될 경우, 어느 단계에서든 환불이 가능한가요, 아니면 모든 결제 단계가 완료되면 전혀 환불이 안 되나요?(ex.전쟁,자연재해 등)",
      "en": "If we are unable to attend WYD for unavoidable reasons (e.g. war, natural disaster), can we get a refund at any stage, or is no refund possible at all once every payment stage is complete?",
      "es": "Si no podemos asistir a la JMJ por causas inevitables (p. ej., guerra o desastre natural), ¿podemos obtener un reembolso en cualquier fase, o no es posible ningún reembolso una vez completadas todas las fases de pago?",
      "fr": "Si nous ne pouvons pas participer aux JMJ pour des raisons indépendantes de notre volonté (p. ex. guerre, catastrophe naturelle), pouvons-nous être remboursés à n'importe quelle étape, ou aucun remboursement n'est-il possible une fois toutes les étapes de paiement effectuées ?",
      "it": "Se non potessimo partecipare alla GMG per cause di forza maggiore (ad es. guerra, calamità naturali), possiamo ottenere un rimborso in qualsiasi fase, oppure non è possibile alcun rimborso una volta completate tutte le fasi di pagamento?",
      "pt": "Se não pudermos participar na JMJ por motivos inevitáveis (por exemplo, guerra, catástrofe natural), podemos obter um reembolso em qualquer fase, ou não é possível qualquer reembolso depois de concluídas todas as fases de pagamento?"
    },
    "a": {
      "ko": "참가분담금은 원칙적으로 환불되지 않습니다. 다만 비자 발급이 거부되어 이를 확인할 수 있는 증빙 서류를 제출하신 경우에 한해 예외적으로 환불해 드립니다. 환불은 대회 종료 후에 진행되며, 관련 수수료 등을 제외한 금액이 지급됩니다. 현재 비자 미발급 사유 외 전쟁이나 자연재해 등 사유는 환불 대상에 포함되어 있지 않지만, 해당 사유들도 신중히 검토 하겠습니다.",
      "en": "In principle, Participation Contributions are non-refundable. As an exception, however, a refund will be made only where a visa has been refused and supporting documents confirming this are submitted. Refunds are processed after the event, and the amount paid out excludes related fees and charges. At present, reasons other than visa refusal, such as war or natural disaster, are not covered, but we will consider these reasons carefully as well.",
      "es": "En principio, las Contribuciones de Participación no son reembolsables. No obstante, como excepción, solo se realizará un reembolso cuando se haya denegado un visado y se presenten documentos que lo acrediten. Los reembolsos se tramitan después del evento, y el importe abonado excluye las comisiones y gastos correspondientes. Actualmente, los motivos distintos de la denegación del visado, como guerras o desastres naturales, no están cubiertos, pero también estudiaremos estos motivos con atención.",
      "fr": "En principe, les Contributions de participation ne sont pas remboursables. À titre exceptionnel, un remboursement n'est toutefois accordé qu'en cas de refus de visa, sur présentation de justificatifs. Les remboursements sont traités après l'événement, et le montant versé exclut les frais et commissions afférents. Actuellement, les motifs autres que le refus de visa, comme la guerre ou les catastrophes naturelles, ne sont pas couverts, mais nous examinerons aussi ces motifs avec attention.",
      "it": "In linea di principio, i Contributi di partecipazione non sono rimborsabili. In via eccezionale, tuttavia, un rimborso sarà effettuato solo in caso di rifiuto del visto e di presentazione di documenti giustificativi che lo confermino. I rimborsi vengono elaborati dopo l'evento, e l'importo restituito esclude le relative commissioni e spese. Al momento motivi diversi dal rifiuto del visto, come guerre o calamità naturali, non sono contemplati, ma valuteremo attentamente anche questi motivi.",
      "pt": "Em princípio, as Contribuições de participação não são reembolsáveis. A título excecional, porém, só será feito um reembolso em caso de recusa de visto, mediante a apresentação de documentos comprovativos. Os reembolsos são processados após o evento, e o montante devolvido exclui as respetivas comissões e encargos. De momento, motivos que não a recusa de visto, como guerras ou catástrofes naturais, não estão abrangidos, mas também iremos ponderar cuidadosamente esses motivos."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "해외송금 및 회계 처리를 위해 공식 인보이스 또는 직인이 포함된 청구서를 발급받을 수 있나요?",
      "en": "For international transfers and accounting purposes, can we obtain an official invoice or a bill bearing an official seal?",
      "es": "Para transferencias internacionales y fines contables, ¿podemos obtener una factura oficial o un documento de cobro con sello oficial?",
      "fr": "Pour les virements internationaux et la comptabilité, pouvons-nous obtenir une facture officielle ou une demande de paiement revêtue d'un cachet officiel ?",
      "it": "Per i bonifici internazionali e per fini contabili, possiamo ottenere una fattura ufficiale o una ricevuta con timbro ufficiale?",
      "pt": "Para transferências internacionais e fins contabilísticos, podemos obter uma fatura oficial ou um recibo com carimbo oficial?"
    },
    "a": {
      "ko": "현재 기준으로는 별도의 정형화된 인보이스를 발급하지 않고 있습니다. 다만 국가 및 단체마다 해외 송금에 관한 법적·회계적 요건이 다르다는 점을 이해하고 있으며, 조직위는 조직위로의 직접 납부 방식을 전제로 납부에 필요한 서류를 어떤 형태로 제공할 수 있을지 검토하고 있습니다. 검토 결과는 확정되는 대로 안내 드리겠습니다.",
      "en": "At present, we do not issue a standard invoice. We do understand, however, that legal and accounting requirements for international transfers differ by country and organization, and the LOC is reviewing what form of documentation it can provide for payment, on the basis that payment is made directly to the LOC. We will let you know the outcome as soon as it is confirmed.",
      "es": "Por el momento no emitimos una factura estándar. Sin embargo, entendemos que los requisitos legales y contables de las transferencias internacionales varían según el país y la organización, y el COL está estudiando qué tipo de documentación puede proporcionar para el pago, partiendo de que el pago se realice directamente al COL. Les informaremos del resultado en cuanto se confirme.",
      "fr": "Pour le moment, nous n'émettons pas de facture standard. Nous comprenons toutefois que les exigences légales et comptables des virements internationaux varient selon les pays et les organisations, et le COL examine quelle forme de justificatif il peut fournir pour le paiement, dans l'hypothèse d'un paiement effectué directement au COL. Nous vous informerons du résultat dès qu'il sera confirmé.",
      "it": "Al momento non emettiamo una fattura standard. Comprendiamo però che i requisiti legali e contabili per i bonifici internazionali variano a seconda del Paese e dell'organizzazione, e il COL sta valutando quale tipo di documentazione può fornire per il pagamento, considerato che il pagamento viene effettuato direttamente al COL. Vi comunicheremo l'esito non appena sarà confermato.",
      "pt": "De momento, não emitimos uma fatura padrão. Compreendemos, no entanto, que os requisitos legais e contabilísticos para transferências internacionais variam consoante o país e a organização, e o COL está a analisar que tipo de documentação pode fornecer para o pagamento, tendo em conta que o pagamento é feito diretamente ao COL. Informaremos o resultado logo que esteja confirmado."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "동일한 대규모그룹(Macrogroup)안에서 하위그룹(Subgroup)별로 서로 다른 패키지를 선택하고 개별 결제할 수 있나요? 일부 하위그룹의 결제 지연이 전체 대규모그룹에 미치는 영향에 대해서도 궁금합니다.",
      "en": "Within the same Macrogroup, can each Subgroup choose a different package and pay separately? We would also like to know how a payment delay by some Subgroups affects the Macrogroup as a whole.",
      "es": "Dentro de un mismo Macrogroup, ¿puede cada Subgroup elegir un paquete distinto y pagar por separado? También quisiéramos saber cómo afecta al Macrogroup en su conjunto un retraso en el pago de algunos Subgroups.",
      "fr": "Au sein d'un même Macrogroup, chaque Subgroup peut-il choisir un forfait différent et payer séparément ? Nous aimerions aussi savoir quel est l'impact d'un retard de paiement de certains Subgroups sur l'ensemble du Macrogroup.",
      "it": "All'interno dello stesso Macrogroup, ciascun Subgroup può scegliere un pacchetto diverso e pagare separatamente? Vorremmo anche sapere come un ritardo nel pagamento di alcuni Subgroup influisce sull'intero Macrogroup.",
      "pt": "Dentro do mesmo Macrogroup, cada Subgroup pode escolher um pacote diferente e pagar separadamente? Gostaríamos também de saber como um atraso no pagamento de alguns Subgroups afeta o Macrogroup no seu conjunto."
    },
    "a": {
      "ko": "네, 동일한 대규모그룹(Macrogroup) 안에서 하위그룹(Subgroup)별로 서로 다른 패키지를 선택하고 각각 결제할 수 있습니다. 각 하위그룹은 본 대회 참가를 위한 동일한 서울 체류 일정과 패키지를 이용하는 순례자들로 구성해 주시기 바랍니다. 결제는 하위그룹별로 진행되므로, 일부 하위그룹의 결제가 지연되더라도 다른 하위그룹이나 매크로 그룹의 등록 및 결제에는 영향을 미치지 않습니다.",
      "en": "Yes. Within the same Macrogroup, each Subgroup can choose a different package and pay separately. Please make up each Subgroup of pilgrims who share the same stay in Seoul for WYD Seoul 2027 and the same package. Because payment is made per Subgroup, a delay in payment by some Subgroups will not affect the registration or payment of other Subgroups or of the Macrogroup.",
      "es": "Sí. Dentro de un mismo Macrogroup, cada Subgroup puede elegir un paquete distinto y pagar por separado. Formen cada Subgroup con peregrinos que compartan la misma estancia en Seúl para la JMJ Seúl 2027 y el mismo paquete. Como el pago se realiza por Subgroup, un retraso en el pago de algunos Subgroups no afectará a la inscripción ni al pago de los demás Subgroups ni del Macrogroup.",
      "fr": "Oui. Au sein d'un même Macrogroup, chaque Subgroup peut choisir un forfait différent et payer séparément. Veuillez constituer chaque Subgroup de pèlerins qui partagent le même séjour à Séoul pour les JMJ Séoul 2027 et le même forfait. Le paiement s'effectuant par Subgroup, un retard de paiement de certains Subgroups n'affectera ni l'inscription ni le paiement des autres Subgroups ou du Macrogroup.",
      "it": "Sì. All'interno dello stesso Macrogroup, ciascun Subgroup può scegliere un pacchetto diverso e pagare separatamente. Componete ciascun Subgroup con pellegrini che hanno lo stesso soggiorno a Seoul per la GMG Seoul 2027 e lo stesso pacchetto. Poiché il pagamento avviene per Subgroup, un ritardo nel pagamento di alcuni Subgroup non influirà sull'iscrizione o sul pagamento degli altri Subgroup o del Macrogroup.",
      "pt": "Sim. Dentro do mesmo Macrogroup, cada Subgroup pode escolher um pacote diferente e pagar separadamente. Constituam cada Subgroup com peregrinos que tenham a mesma estadia em Seul para a JMJ Seul 2027 e o mesmo pacote. Como o pagamento é feito por Subgroup, um atraso no pagamento de alguns Subgroups não afetará a inscrição nem o pagamento dos outros Subgroups ou do Macrogroup."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "등록 및 각 패키지의 결제 일정과 마감일은 어떻게 되나요? 첫 결제, 분할 납부, 잔금 및 보험료 등 각 항목별 납부 기한을 안내받을 수 있나요?",
      "en": "What are the payment schedules and deadlines for registration and for each package? Can we be told the deadline for each item, such as the first payment, installments, the balance and insurance?",
      "es": "¿Cuáles son el calendario y los plazos de pago de la inscripción y de cada paquete? ¿Pueden indicarnos el plazo de cada concepto, como el primer pago, los plazos, el saldo y el seguro?",
      "fr": "Quels sont le calendrier et les échéances de paiement de l'inscription et de chaque forfait ? Pouvons-nous connaître l'échéance de chaque élément, comme le premier versement, les versements échelonnés, le solde et l'assurance ?",
      "it": "Quali sono le scadenze di pagamento per l'iscrizione e per ciascun pacchetto? Potete indicarci la scadenza di ciascuna voce, come il primo pagamento, le rate, il saldo e l'assicurazione?",
      "pt": "Quais são os calendários e prazos de pagamento da inscrição e de cada pacote? Podem indicar-nos o prazo de cada item, como o primeiro pagamento, as prestações, o saldo e o seguro?"
    },
    "a": {
      "ko": "결제는 등록시스템이 오픈된 날부터 가능합니다. 결제 기한은 패키지 유형과 결제 방법에 따라 다음과 같습니다.\n- 숙박 포함 패키지 : 2027년 5월 31일까지\n- 비숙박 패키지 : 현장 등록 오픈 전까지 (현장 등록 오픈은 7월 하순으로 정확한 일정은 추후 안내 예정)\n- 비숙박 패키지 (해외 계좌이체) : 2027년 6월 30일까지\n해외 계좌이체는 은행 간 송금에 시간이 걸리므로 비숙박 패키지도 기한이 앞당겨져 있습니다. 기한 내에 결제를 마치지 못하신 경우에는 현장 등록(현장 등록 오픈은 7월 하순으로 정확한 일정은 추후 안내 예정)을 통해 결제하실 수 있습니다.\n분할 결제 시 첫 결제에는 별도의 기한이 없습니다. 다만 위 기한까지 전액을 납부하셔야 합니다. 참가분담금(Participation Contribution)은 패키지 항목별로 나누어 낼 수 없으며, 패키지 전체 금액으로만 결제하실 수 있습니다.",
      "en": "Payment is possible from the day the registration system opens. Payment deadlines depend on the package type and payment method:\n- Packages with accommodation: by May 31, 2027\n- Packages without accommodation: before on-site registration opens (on-site registration opens in late July; the exact date will be announced later)\n- Packages without accommodation (international bank transfer): by June 30, 2027\nBecause international bank transfers take time between banks, the deadline for packages without accommodation paid this way is earlier. If you cannot complete payment by the deadline, you can pay through on-site registration (on-site registration opens in late July; the exact date will be announced later).\n\nWhen paying in installments, there is no separate deadline for the first payment, but the full amount must be paid by the deadline above. The Participation Contribution cannot be split by package item; it can only be paid as the full package amount.",
      "es": "El pago es posible desde el día en que se abre el sistema de inscripción. Los plazos de pago dependen del tipo de paquete y del método de pago:\n- Paquetes con alojamiento: hasta el 31 de mayo de 2027\n- Paquetes sin alojamiento: antes de que se abra la inscripción presencial (la inscripción presencial se abre a finales de julio; la fecha exacta se anunciará más adelante)\n- Paquetes sin alojamiento (transferencia bancaria internacional): hasta el 30 de junio de 2027\nComo las transferencias bancarias internacionales tardan entre bancos, el plazo para los paquetes sin alojamiento pagados de esta forma es anterior. Si no pueden completar el pago dentro del plazo, pueden pagar mediante la inscripción presencial (la inscripción presencial se abre a finales de julio; la fecha exacta se anunciará más adelante).\n\nEn el pago a plazos no hay un plazo específico para el primer pago, pero el importe total debe pagarse dentro del plazo indicado. La Contribución de Participación no puede dividirse por conceptos del paquete; solo puede pagarse por el importe total del paquete.",
      "fr": "Le paiement est possible dès l'ouverture du système d'inscription. Les échéances de paiement dépendent du type de forfait et du mode de paiement :\n- Forfaits avec hébergement : au plus tard le 31 mai 2027\n- Forfaits sans hébergement : avant l'ouverture de l'inscription sur place (l'inscription sur place ouvre fin juillet ; la date exacte sera communiquée ultérieurement)\n- Forfaits sans hébergement (virement bancaire international) : au plus tard le 30 juin 2027\nLes virements internationaux prenant du temps entre banques, l'échéance des forfaits sans hébergement payés de cette manière est avancée. Si vous ne pouvez pas finaliser le paiement dans les délais, vous pourrez payer lors de l'inscription sur place (l'inscription sur place ouvre fin juillet ; la date exacte sera communiquée ultérieurement).\n\nEn cas de paiement échelonné, il n'y a pas d'échéance particulière pour le premier versement, mais le montant total doit être réglé avant l'échéance ci-dessus. La Contribution de participation ne peut pas être fractionnée par élément du forfait ; elle ne peut être réglée que pour le montant total du forfait.",
      "it": "Il pagamento è possibile dal giorno di apertura del sistema di iscrizione. Le scadenze di pagamento dipendono dal tipo di pacchetto e dal metodo di pagamento:\n- Pacchetti con alloggio: entro il 31 maggio 2027\n- Pacchetti senza alloggio: prima dell'apertura dell'iscrizione in loco (l'iscrizione in loco apre a fine luglio; la data esatta sarà comunicata in seguito)\n- Pacchetti senza alloggio (bonifico bancario internazionale): entro il 30 giugno 2027\nPoiché i bonifici bancari internazionali richiedono tempo tra le banche, la scadenza per i pacchetti senza alloggio pagati in questo modo è anticipata. Se non riuscite a completare il pagamento entro la scadenza, potete pagare tramite l'iscrizione in loco (l'iscrizione in loco apre a fine luglio; la data esatta sarà comunicata in seguito).\n\nIn caso di pagamento a rate non c'è una scadenza separata per il primo pagamento, ma l'intero importo deve essere pagato entro la scadenza sopra indicata. Il Contributo di partecipazione non può essere suddiviso per voci del pacchetto; può essere pagato solo come importo totale del pacchetto.",
      "pt": "O pagamento é possível a partir do dia em que o sistema de inscrição abre. Os prazos de pagamento dependem do tipo de pacote e do método de pagamento:\n- Pacotes com alojamento: até 31 de maio de 2027\n- Pacotes sem alojamento: antes da abertura da inscrição no local (a inscrição no local abre no final de julho; a data exata será anunciada mais tarde)\n- Pacotes sem alojamento (transferência bancária internacional): até 30 de junho de 2027\nComo as transferências bancárias internacionais demoram entre bancos, o prazo para os pacotes sem alojamento pagos desta forma é antecipado. Se não conseguirem concluir o pagamento dentro do prazo, podem pagar através da inscrição no local (a inscrição no local abre no final de julho; a data exata será anunciada mais tarde).\n\nNo pagamento em prestações, não há prazo separado para o primeiro pagamento, mas o montante total tem de ser pago até ao prazo acima indicado. A Contribuição de participação não pode ser dividida por itens do pacote; só pode ser paga como montante total do pacote."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "참가비는 얼마이며 어떤 방법과 통화로 결제할 수 있나요? 달러로만 가능한가요, 아니면 유로로도 결제할 수 있나요 ? ‘기타 결제 방법’에는 무엇이 포함되며, 하나의 그룹에 대해 서로 다른 기관이 나누어 결제하는 것도 가능한가요?",
      "en": "How much is the Participation Contribution, and by what methods and in which currencies can it be paid? Only in dollars, or also in euros? What do 'other payment methods' include, and can different organizations split the payment for one group?",
      "es": "¿Cuánto es la Contribución de Participación, y con qué métodos y en qué monedas se puede pagar? ¿Solo en dólares o también en euros? ¿Qué incluyen los 'otros métodos de pago'? ¿Pueden distintas organizaciones repartirse el pago de un mismo grupo?",
      "fr": "Quel est le montant de la Contribution de participation, et par quels moyens et dans quelles devises peut-on la payer ? Seulement en dollars, ou aussi en euros ? Que comprennent les 'autres moyens de paiement', et différentes organisations peuvent-elles se partager le paiement d'un même groupe ?",
      "it": "A quanto ammonta il Contributo di partecipazione, e con quali metodi e in quali valute si può pagare? Solo in dollari, o anche in euro? Cosa comprendono gli 'altri metodi di pagamento', e organizzazioni diverse possono suddividere il pagamento per un unico gruppo?",
      "pt": "Qual é o valor da Contribuição de participação, e por que métodos e em que moedas pode ser paga? Só em dólares, ou também em euros? O que incluem os 'outros métodos de pagamento', e diferentes organizações podem dividir o pagamento de um grupo?"
    },
    "a": {
      "ko": "참가비는 공식 홈페이지에서 확인하실 수 있습니다. 결제는 대한민국에서는 원화, 그 외 국가에서는 미국 달러로 진행됩니다. 결제창에서 '자국통화결제'를 선택하시면 주요 국가의 통화로도 결제하실 수 있으며, 이때 발생하는 추가 수수료는 결제자가 부담합니다. 결제 수단은 다음과 같습니다.\n-신용카드·체크카드\n-은행 계좌이체 (가상계좌)\n-간편결제: 국내는 네이버페이·카카오페이, 해외는 애플페이·알리페이",
      "en": "The Participation Contribution can be found on the official WYD Seoul 2027 website. Payment is made in Korean won in the Republic of Korea and in US dollars in all other countries. If you select 'pay in local currency' in the payment window, you can also pay in the currencies of major countries; any additional fees this incurs are borne by the payer. The payment methods are:\n- Credit and debit cards\n- Bank transfer (virtual account)\n- Mobile payment: Naver Pay and Kakao Pay in Korea; Apple Pay and Alipay abroad",
      "es": "La Contribución de Participación puede consultarse en la web oficial de la JMJ Seúl 2027. El pago se realiza en wones coreanos en la República de Corea y en dólares estadounidenses en todos los demás países. Si seleccionan 'pagar en moneda local' en la ventana de pago, también pueden pagar en las monedas de los principales países; las comisiones adicionales que ello genere corren a cargo de quien paga. Los métodos de pago son:\n- Tarjetas de crédito y débito\n- Transferencia bancaria (cuenta virtual)\n- Pago móvil: Naver Pay y Kakao Pay en Corea; Apple Pay y Alipay en el extranjero",
      "fr": "Le montant de la Contribution de participation est indiqué sur le site officiel des JMJ Séoul 2027. Le paiement s'effectue en wons coréens en République de Corée et en dollars américains dans tous les autres pays. Si vous sélectionnez 'payer dans la devise locale' dans la fenêtre de paiement, vous pouvez aussi payer dans les devises des principaux pays ; les frais supplémentaires éventuels sont à la charge du payeur. Les moyens de paiement sont :\n- Cartes de crédit et de débit\n- Virement bancaire (compte virtuel)\n- Paiement mobile : Naver Pay et Kakao Pay en Corée ; Apple Pay et Alipay à l'étranger",
      "it": "Il Contributo di partecipazione è consultabile sul sito ufficiale della GMG Seoul 2027. Il pagamento avviene in won coreani nella Repubblica di Corea e in dollari statunitensi in tutti gli altri Paesi. Se nella finestra di pagamento selezionate 'paga in valuta locale', potete pagare anche nelle valute dei principali Paesi; le eventuali commissioni aggiuntive sono a carico di chi paga. I metodi di pagamento sono:\n- Carte di credito e di debito\n- Bonifico bancario (conto virtuale)\n- Pagamento mobile: Naver Pay e Kakao Pay in Corea; Apple Pay e Alipay all'estero",
      "pt": "A Contribuição de participação pode ser consultada no site oficial da JMJ Seul 2027. O pagamento é feito em won coreanos na República da Coreia e em dólares americanos em todos os outros países. Se selecionarem 'pagar na moeda local' na janela de pagamento, podem também pagar nas moedas dos principais países; as eventuais comissões adicionais ficam a cargo de quem paga. Os métodos de pagamento são:\n- Cartões de crédito e de débito\n- Transferência bancária (conta virtual)\n- Pagamento móvel: Naver Pay e Kakao Pay na Coreia; Apple Pay e Alipay no estrangeiro"
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "참가분담금(Participation Contribution)과 연대기금(Solidarity Fund)은 반드시 납부해야 하는 의무 사항인가요? 설문 결과에 따르면 많은 그룹이 재정 지원이 필요한데도 등록비 외에 추가로 납부해야 하는 상황이라, 참가분담금이 정말 의무인지 궁금합니다. 또한 연대기금을 특정 국가나 지역의 순례자 지원을 위해 지정할 수 있는지도 궁금합니다.",
      "en": "Are the Participation Contribution and the Solidarity Fund mandatory? According to the survey results, many groups need financial support yet would have to pay more on top of the registration fee, so we wonder whether the Participation Contribution is truly mandatory. We would also like to know whether Solidarity Fund contributions can be designated to support pilgrims from a particular country or region.",
      "es": "¿Son obligatorios la Contribución de Participación y el Fondo de Solidaridad? Según los resultados de la encuesta, muchos grupos necesitan ayuda económica y aun así tendrían que pagar más además de la cuota de inscripción, por lo que nos preguntamos si la Contribución de Participación es realmente obligatoria. También quisiéramos saber si las aportaciones al Fondo de Solidaridad pueden destinarse a apoyar a peregrinos de un país o región concretos.",
      "fr": "La Contribution de participation et le Fonds de solidarité sont-ils obligatoires ? Selon les résultats de l'enquête, de nombreux groupes ont besoin d'une aide financière et devraient pourtant payer davantage en plus des frais d'inscription ; nous nous demandons donc si la Contribution de participation est vraiment obligatoire. Nous aimerions aussi savoir si les dons au Fonds de solidarité peuvent être affectés au soutien de pèlerins d'un pays ou d'une région en particulier.",
      "it": "Il Contributo di partecipazione e il Fondo di solidarietà sono obbligatori? Secondo i risultati del sondaggio, molti gruppi hanno bisogno di sostegno economico e tuttavia dovrebbero pagare di più oltre alla quota di iscrizione; ci chiediamo quindi se il Contributo di partecipazione sia davvero obbligatorio. Vorremmo anche sapere se i contributi al Fondo di solidarietà possono essere destinati a sostenere pellegrini di un determinato Paese o regione.",
      "pt": "A Contribuição de participação e o Fundo de Solidariedade são obrigatórios? Segundo os resultados do inquérito, muitos grupos precisam de apoio financeiro e, no entanto, teriam de pagar mais para além da taxa de inscrição; perguntamo-nos, por isso, se a Contribuição de participação é mesmo obrigatória. Gostaríamos também de saber se as contribuições para o Fundo de Solidariedade podem ser destinadas a apoiar peregrinos de um determinado país ou região."
    },
    "a": {
      "ko": "세계청년대회 참가 자체에는 비용이 들지 않습니다. 다만 '등록 참가자'로 참가하시려면 참가분담금을 납부하셔야 합니다. 분담금을 납부한 등록 참가자는 원하는 패키지를 선택하여 숙박, 식사, 이동수단, 보험, 순례자 키트를 제공받습니다. 등록하지 않고 참가하시는 경우에는 이러한 패키지가 제공되지 않습니다.\n연대기금은 더 많은 순례자가 함께 할 수 있도록, 특히 어려운 여건에 있는 나라의 청년들이 대회에 참가할 수 있도록 돕는 자발적 기부입니다. 납부는 의무가 아니며, 취지에 공감하는 순례자분들의 자발적인 참여로 마련됩니다.",
      "en": "Taking part in World Youth Day itself costs nothing. To take part as a 'registered participant,' however, you must pay the Participation Contribution. Registered participants who have paid the contribution choose the package they want and receive accommodation, meals, transport, insurance and a pilgrim kit. Those who take part without registering do not receive these packages.\nThe Solidarity Fund is a voluntary donation that helps more pilgrims take part, especially young people from countries in difficult circumstances. It is not mandatory; it is made up of voluntary contributions from pilgrims who share its purpose.",
      "es": "Participar en la Jornada Mundial de la Juventud en sí no cuesta nada. Sin embargo, para participar como 'participante inscrito' hay que pagar la Contribución de Participación. Los participantes inscritos que han pagado la contribución eligen el paquete que desean y reciben alojamiento, comidas, transporte, seguro y kit del peregrino. Quienes participan sin inscribirse no reciben estos paquetes.\nEl Fondo de Solidaridad es una donación voluntaria que ayuda a que participen más peregrinos, especialmente jóvenes de países en circunstancias difíciles. No es obligatorio; se forma con las aportaciones voluntarias de los peregrinos que comparten su finalidad.",
      "fr": "Participer aux Journées mondiales de la jeunesse en tant que telles ne coûte rien. Pour participer en tant que 'participant inscrit', il faut toutefois verser la Contribution de participation. Les participants inscrits qui ont versé la contribution choisissent le forfait souhaité et bénéficient de l'hébergement, des repas, des transports, de l'assurance et d'un kit du pèlerin. Ceux qui participent sans s'inscrire ne bénéficient pas de ces forfaits.\nLe Fonds de solidarité est un don volontaire qui aide davantage de pèlerins à participer, en particulier les jeunes de pays en situation difficile. Il n'est pas obligatoire ; il est constitué des contributions volontaires des pèlerins qui en partagent l'objectif.",
      "it": "Partecipare alla Giornata Mondiale della Gioventù in sé non costa nulla. Per partecipare come 'partecipante iscritto', però, occorre pagare il Contributo di partecipazione. I partecipanti iscritti che hanno pagato il contributo scelgono il pacchetto desiderato e ricevono alloggio, pasti, trasporti, assicurazione e kit del pellegrino. Chi partecipa senza iscriversi non riceve questi pacchetti.\nIl Fondo di solidarietà è una donazione volontaria che aiuta più pellegrini a partecipare, in particolare i giovani di Paesi in condizioni difficili. Non è obbligatorio; è costituito dai contributi volontari dei pellegrini che ne condividono lo scopo.",
      "pt": "Participar na Jornada Mundial da Juventude em si não custa nada. Para participar como 'participante inscrito', porém, é preciso pagar a Contribuição de participação. Os participantes inscritos que pagaram a contribuição escolhem o pacote que desejam e recebem alojamento, refeições, transporte, seguro e kit do peregrino. Quem participa sem se inscrever não recebe estes pacotes.\nO Fundo de Solidariedade é um donativo voluntário que ajuda mais peregrinos a participar, sobretudo jovens de países em circunstâncias difíceis. Não é obrigatório; é constituído pelas contribuições voluntárias dos peregrinos que partilham o seu objetivo."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "각 패키지별 등록·참가 비용은 얼마이며, 매크로그룹 규모, 조기 또는 일시불 결제 등에 따른 할인 혜택이 있나요? 또한 미성년자에게도 성인과 동일한 참가비가 적용되는지, 별도의 할인이나 재정 지원이 있는지도 궁금합니다.",
      "en": "How much does registration and participation cost for each package, and are there discounts based on Macrogroup size or for early or lump-sum payment? Also, do minors pay the same as adults, and are there separate discounts or financial support for them?",
      "es": "¿Cuánto cuesta la inscripción y la participación de cada paquete? ¿Hay descuentos según el tamaño del Macrogroup o por pago anticipado o en un solo pago? Además, ¿los menores pagan lo mismo que los adultos? ¿Hay descuentos o ayudas económicas específicas para ellos?",
      "fr": "Combien coûtent l'inscription et la participation pour chaque forfait, et existe-t-il des réductions selon la taille du Macrogroup ou pour un paiement anticipé ou en une seule fois ? Par ailleurs, les mineurs paient-ils autant que les adultes, et existe-t-il pour eux des réductions ou des aides financières particulières ?",
      "it": "Quanto costano iscrizione e partecipazione per ciascun pacchetto, e ci sono sconti in base alla dimensione del Macrogroup o per il pagamento anticipato o in un'unica soluzione? Inoltre, i minori pagano quanto gli adulti, e ci sono sconti o sostegni economici specifici per loro?",
      "pt": "Quanto custam a inscrição e a participação em cada pacote, e há descontos em função da dimensão do Macrogroup ou por pagamento antecipado ou de uma só vez? Além disso, os menores pagam o mesmo que os adultos, e há descontos ou apoios financeiros específicos para eles?"
    },
    "a": {
      "ko": "패키지별 참가분담금은 공식 홈페이지에서 확인하실 수 있으며, 연령과 관계없이 모든 순례자에게 동일하게 적용됩니다. 미성년자, 단체 규모, 조기 결제 등에 따른 할인은 운영하지 않습니다. 대신 조직위원회는 패키지별 참가분담금을 합리적인 범위에서 최소한의 수준으로 책정하여 모든 순례자가 참가할 수 있도록 노력했습니다.",
      "en": "The Participation Contribution for each package can be found on the official WYD Seoul 2027 website and applies equally to all pilgrims regardless of age. There are no discounts for minors, group size, early payment or the like. Instead, the LOC has set the Participation Contribution for each package at the lowest reasonable level so that every pilgrim can take part.",
      "es": "La Contribución de Participación de cada paquete puede consultarse en la web oficial de la JMJ Seúl 2027 y se aplica por igual a todos los peregrinos, independientemente de su edad. No hay descuentos para menores, por tamaño del grupo, por pago anticipado ni similares. En su lugar, el COL ha fijado la Contribución de Participación de cada paquete en el nivel más bajo razonable para que todos los peregrinos puedan participar.",
      "fr": "La Contribution de participation de chaque forfait est indiquée sur le site officiel des JMJ Séoul 2027 et s'applique de la même manière à tous les pèlerins, quel que soit leur âge. Il n'y a pas de réduction pour les mineurs, selon la taille du groupe, pour paiement anticipé ou autre. En revanche, le COL a fixé la Contribution de participation de chaque forfait au niveau le plus bas raisonnable afin que tous les pèlerins puissent participer.",
      "it": "Il Contributo di partecipazione per ciascun pacchetto è consultabile sul sito ufficiale della GMG Seoul 2027 e si applica allo stesso modo a tutti i pellegrini, indipendentemente dall'età. Non ci sono sconti per minori, dimensione del gruppo, pagamento anticipato o simili. Il COL ha invece fissato il Contributo di partecipazione per ciascun pacchetto al livello ragionevole più basso possibile, perché tutti i pellegrini possano partecipare.",
      "pt": "A Contribuição de participação de cada pacote pode ser consultada no site oficial da JMJ Seul 2027 e aplica-se igualmente a todos os peregrinos, independentemente da idade. Não há descontos para menores, dimensão do grupo, pagamento antecipado ou semelhantes. Em vez disso, o COL fixou a Contribuição de participação de cada pacote no nível razoável mais baixo possível, para que todos os peregrinos possam participar."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "연대기금 지원을 받을 수 있는 국가·그룹·개별 순례자의 자격 요건은 무엇이며, 신청은 어떤 절차와 경로(조직위원회, DLFL, 웹사이트, 이메일 등)를 통해 이루어지나요? 대규모그룹 전체가 아닌 일부 순례자만 지원을 신청하는 것도 가능한가요?",
      "en": "What are the eligibility criteria for countries, groups and individual pilgrims to receive Solidarity Fund support, and through what procedure and channel (LOC, DLFL, website, email, etc.) is the application made? Can only some pilgrims apply for support, rather than the whole Macrogroup?",
      "es": "¿Cuáles son los criterios para que países, grupos y peregrinos individuales reciban ayuda del Fondo de Solidaridad, y mediante qué procedimiento y canal (COL, DLFL, web, correo electrónico, etc.) se solicita? ¿Pueden solicitar la ayuda solo algunos peregrinos, en lugar de todo el Macrogroup?",
      "fr": "Quels sont les critères d'éligibilité des pays, groupes et pèlerins individuels au soutien du Fonds de solidarité, et selon quelle procédure et par quel canal (COL, DLFL, site web, courriel, etc.) la demande se fait-elle ? Seuls certains pèlerins peuvent-ils demander un soutien, plutôt que tout le Macrogroup ?",
      "it": "Quali sono i criteri di ammissibilità per Paesi, gruppi e singoli pellegrini per ricevere il sostegno del Fondo di solidarietà, e con quale procedura e tramite quale canale (COL, DLFL, sito web, e-mail, ecc.) si presenta la domanda? Possono fare domanda solo alcuni pellegrini, anziché l'intero Macrogroup?",
      "pt": "Quais são os critérios de elegibilidade para países, grupos e peregrinos individuais receberem apoio do Fundo de Solidariedade, e por que procedimento e canal (COL, DLFL, site, e-mail, etc.) se faz o pedido? Podem pedir apoio apenas alguns peregrinos, em vez de todo o Macrogroup?"
    },
    "a": {
      "ko": "조직위는 현재 교황청 평신도가정생명부와 협의하여 연대기금의 자격 요건과 신청 절차를 검토하고 있습니다. 자격 요건 및 신청 방법 등 세부 사항은 확정되는 대로 안내해 드리겠습니다.",
      "en": "The LOC is currently reviewing the eligibility criteria and application procedure for the Solidarity Fund in consultation with the Dicastery for Laity, Family and Life. Details such as eligibility and how to apply will be announced as soon as they are confirmed.",
      "es": "El COL está estudiando actualmente los criterios y el procedimiento de solicitud del Fondo de Solidaridad en consulta con el Dicasterio para los Laicos, la Familia y la Vida. Los detalles, como los requisitos y la forma de solicitarlo, se anunciarán en cuanto se confirmen.",
      "fr": "Le COL étudie actuellement les critères d'éligibilité et la procédure de demande du Fonds de solidarité en concertation avec le Dicastère pour les laïcs, la famille et la vie. Les détails, tels que l'éligibilité et la manière de faire une demande, seront communiqués dès qu'ils seront confirmés.",
      "it": "Il COL sta attualmente valutando i criteri di ammissibilità e la procedura di domanda per il Fondo di solidarietà in consultazione con il Dicastero per i Laici, la Famiglia e la Vita. I dettagli, come l'ammissibilità e le modalità di domanda, saranno comunicati non appena saranno confermati.",
      "pt": "O COL está atualmente a analisar os critérios de elegibilidade e o procedimento de candidatura ao Fundo de Solidariedade em consulta com o Dicastério para os Leigos, a Família e a Vida. Os pormenores, como a elegibilidade e a forma de candidatura, serão anunciados logo que estejam confirmados."
    },
    "sub": {
      "ko": "결제 및 기금관련",
      "en": "Payment & Solidarity Fund",
      "es": "Pago y Fondo de Solidaridad",
      "fr": "Paiement et Fonds de solidarité",
      "it": "Pagamento e Fondo di Solidarietà",
      "pt": "Pagamento e Fundo de Solidariedade"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "주교회의 대표들이 온라인 등록 시스템의 '백오피스'에 접근하여 자국에서 등록한 그룹과 그룹 리더 현황을 확인할 수 있는 관리 기능도 제공되나요? 지난 10년간의 모든 WYD에서는 이것이 가능했습니다.",
      "en": "Will there be a management function allowing episcopal conference representatives to access the online registration system's 'back office' and see the groups and group leaders registered from their country? This has been possible at every WYD of the last ten years.",
      "es": "¿Habrá una función de gestión que permita a los representantes de las conferencias episcopales acceder al 'back office' del sistema de inscripción en línea y ver los grupos y líderes de grupo inscritos desde su país? Esto ha sido posible en todas las JMJ de los últimos diez años.",
      "fr": "Existera-t-il une fonction de gestion permettant aux représentants des conférences épiscopales d'accéder au 'back-office' du système d'inscription en ligne et de voir les groupes et responsables de groupe inscrits depuis leur pays ? Cela a été possible à toutes les JMJ des dix dernières années.",
      "it": "Ci sarà una funzione di gestione che permetta ai rappresentanti delle conferenze episcopali di accedere al 'back office' del sistema di iscrizione online e vedere i gruppi e i responsabili di gruppo iscritti dal proprio Paese? Questo è stato possibile in tutte le GMG degli ultimi dieci anni.",
      "pt": "Haverá uma função de gestão que permita aos representantes das conferências episcopais aceder ao 'back office' do sistema de inscrição online e ver os grupos e responsáveis de grupo inscritos do seu país? Isto foi possível em todas as JMJ dos últimos dez anos."
    },
    "a": {
      "ko": "주교회의 대표는 등록시스템 백오피스 접근 및 열람 (읽기 전용) 권한을 DLFL에게 요청할 수 있습니다. 이를 통해, 해당 국가의 등록 현황을 확인할 수 있습니다.",
      "en": "Episcopal conference representatives can request access to the registration system's back office, with viewing (read-only) rights, from the DLFL. This allows them to see the registration status for their country.",
      "es": "Los representantes de las conferencias episcopales pueden solicitar al DLFL acceso al back office del sistema de inscripción, con permisos de consulta (solo lectura). Esto les permite ver el estado de las inscripciones de su país.",
      "fr": "Les représentants des conférences épiscopales peuvent demander au DLFL un accès au back-office du système d'inscription, avec des droits de consultation (lecture seule). Ils peuvent ainsi voir l'état des inscriptions de leur pays.",
      "it": "I rappresentanti delle conferenze episcopali possono richiedere al DLFL l'accesso al back office del sistema di iscrizione, con diritti di sola visualizzazione. Ciò consente loro di vedere lo stato delle iscrizioni del proprio Paese.",
      "pt": "Os representantes das conferências episcopais podem pedir ao DLFL acesso ao back office do sistema de inscrição, com permissões apenas de consulta. Isto permite-lhes ver o estado das inscrições do seu país."
    },
    "sub": {
      "ko": "주교등록",
      "en": "Bishops' Registration",
      "es": "Inscripción de obispos",
      "fr": "Inscription des évêques",
      "it": "Iscrizione dei vescovi",
      "pt": "Inscrição dos bispos"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "주교의 등록 절차 및 교리교육 참여를 위한 별도 등록 절차가 있는지 안내 부탁드립니다. 또한 주교들의 숙소 유형에 따른 체크인 절차 및 성직자용 물품 수령에 대해 안내해 주십시오.",
      "en": "Please tell us the registration procedure for bishops and whether there is a separate registration for taking part in the Catecheses. Please also explain the check-in procedure for each type of bishops' accommodation and how clerical items are collected.",
      "es": "Indíquennos el procedimiento de inscripción de los obispos y si hay una inscripción aparte para participar en las catequesis. Explíquennos también el procedimiento de acreditación según cada tipo de alojamiento de los obispos y cómo se recogen los artículos para el clero.",
      "fr": "Merci de nous indiquer la procédure d'inscription des évêques et s'il existe une inscription distincte pour participer aux catéchèses. Merci aussi de nous expliquer la procédure d'accréditation selon chaque type d'hébergement des évêques et la manière dont les articles destinés au clergé sont retirés.",
      "it": "Indicateci la procedura di iscrizione per i vescovi e se esiste un'iscrizione separata per partecipare alle Catechesi. Spiegateci anche la procedura di check-in per ciascun tipo di alloggio dei vescovi e come si ritirano gli articoli per il clero.",
      "pt": "Indiquem-nos o procedimento de inscrição dos bispos e se existe uma inscrição separada para participar nas Catequeses. Expliquem também o procedimento de check-in para cada tipo de alojamento dos bispos e como se levantam os artigos para o clero."
    },
    "a": {
      "ko": "주교 역시 등록시스템(주교)을 통해 등록합니다. 그리고 교리교육을 담당할 주교는 DLFL에서 선정하여 관리할 것입니다. 조직위원회가 지정한 호텔에 머무는 주교들의 체크인은 해당 호텔에서 진행할 예정이고, 물품 수령 역시 호텔에서 할 수 있습니다. 그외 숙소를 이용하는 주교들의 체크인과 물품 수령 관련한 사항은 현재 논의 중에 있습니다.",
      "en": "Bishops also register through the registration system (bishops). The bishops who will give the Catecheses will be selected and managed by the DLFL. Check-in for bishops staying at hotels designated by the LOC will take place at those hotels, and items can also be collected there. Check-in and collection of items for bishops using other accommodation are currently under discussion.",
      "es": "Los obispos también se inscriben a través del sistema de inscripción (obispos). Los obispos que impartirán las catequesis serán seleccionados y gestionados por el DLFL. La acreditación de los obispos alojados en los hoteles designados por el COL se realizará en esos hoteles, donde también podrán recoger los artículos. La acreditación y la recogida de artículos de los obispos que utilicen otro alojamiento están todavía en estudio.",
      "fr": "Les évêques s'inscrivent eux aussi via le système d'inscription (évêques). Les évêques qui donneront les catéchèses seront sélectionnés et suivis par le DLFL. L'accréditation des évêques logés dans les hôtels désignés par le COL se fera dans ces hôtels, où ils pourront aussi retirer leurs articles. L'accréditation et le retrait des articles pour les évêques utilisant un autre hébergement sont encore en discussion.",
      "it": "Anche i vescovi si iscrivono tramite il sistema di iscrizione (vescovi). I vescovi che terranno le Catechesi saranno scelti e gestiti dal DLFL. Il check-in per i vescovi che alloggiano negli hotel indicati dal COL avverrà in quegli hotel, dove si potranno ritirare anche gli articoli. Il check-in e il ritiro degli articoli per i vescovi che usano altri alloggi sono attualmente in discussione.",
      "pt": "Os bispos também se inscrevem através do sistema de inscrição (bispos). Os bispos que darão as Catequeses serão escolhidos e geridos pelo DLFL. O check-in dos bispos que fiquem nos hotéis indicados pelo COL será feito nesses hotéis, onde também poderão levantar os artigos. O check-in e o levantamento dos artigos para os bispos que utilizem outro alojamento estão atualmente em discussão."
    },
    "sub": {
      "ko": "주교등록",
      "en": "Bishops' Registration",
      "es": "Inscripción de obispos",
      "fr": "Inscription des évêques",
      "it": "Iscrizione dei vescovi",
      "pt": "Inscrição dos bispos"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "등록",
      "en": "Registration",
      "es": "Inscripción",
      "fr": "Inscription",
      "it": "Iscrizione",
      "pt": "Inscrição"
    },
    "topicNo": "1",
    "q": {
      "ko": "주교는 홈스테이와 호텔 중 숙박 유형을 선택할 수 있나요? 홈스테이를 선택할 수 있다면 청년 순례자에게 우선 배정하지 않고 주교에게도 선택권을 제공하는 이유는 무엇인가요? 또한 LOC가 주교에게 제공하는 호텔의 비용 부담 여부와 객실 유형(1인실 등)은 어떻게 되나요?",
      "en": "Can bishops choose between a homestay and a hotel? If they can choose a homestay, why are bishops given that choice rather than homestays being given first to young pilgrims? And who pays for the hotels the LOC provides for bishops, and what type of room (single, etc.) is it?",
      "es": "¿Pueden los obispos elegir entre alojamiento en familia y hotel? Si pueden elegir alojamiento en familia, ¿por qué se da esa opción a los obispos en lugar de ofrecer primero el alojamiento en familia a los jóvenes peregrinos? ¿Y quién paga los hoteles que el COL ofrece a los obispos, y qué tipo de habitación (individual, etc.) es?",
      "fr": "Les évêques peuvent-ils choisir entre l'hébergement en famille et l'hôtel ? S'ils peuvent choisir l'hébergement en famille, pourquoi ce choix leur est-il offert plutôt que de réserver d'abord l'hébergement en famille aux jeunes pèlerins ? Et qui paie les hôtels que le COL propose aux évêques, et de quel type de chambre (individuelle, etc.) s'agit-il ?",
      "it": "I vescovi possono scegliere tra alloggio in famiglia e hotel? Se possono scegliere l'alloggio in famiglia, perché ai vescovi è data questa scelta anziché riservare prima l'alloggio in famiglia ai giovani pellegrini? E chi paga gli hotel che il COL fornisce ai vescovi, e di che tipo di camera (singola, ecc.) si tratta?",
      "pt": "Os bispos podem escolher entre alojamento em família e hotel? Se puderem escolher alojamento em família, porque é que os bispos têm essa escolha, em vez de o alojamento em família ser dado primeiro aos jovens peregrinos? E quem paga os hotéis que o COL disponibiliza aos bispos, e de que tipo de quarto (individual, etc.) se trata?"
    },
    "a": {
      "ko": "주교는 호텔/홈스테이/동반그룹과 함께 숙박/개별 숙박 중 선택할 수 있습니다. 이는 주교의 상황에 맞게 선택을 할 수 있도록 배려한 것입니다. 호텔 숙박 비용은 주교 본인이 부담합니다. 그리고, 1인실이 기본적으로 배정될 예정입니다.",
      "en": "Bishops can choose among a hotel, a homestay, staying with the group accompanying them, or arranging their own accommodation. This is to let bishops choose according to their circumstances. Hotel costs are paid by the bishops themselves. Single rooms will be assigned as standard.",
      "es": "Los obispos pueden elegir entre hotel, alojamiento en familia, alojarse con el grupo que los acompaña u organizar su propio alojamiento. Esto permite a los obispos elegir según sus circunstancias. Los gastos de hotel corren a cargo de los propios obispos. Por norma general se asignarán habitaciones individuales.",
      "fr": "Les évêques peuvent choisir entre l'hôtel, l'hébergement en famille, l'hébergement avec le groupe qui les accompagne ou un hébergement organisé par leurs soins. Cela leur permet de choisir selon leur situation. Les frais d'hôtel sont à la charge des évêques eux-mêmes. Des chambres individuelles seront attribuées par défaut.",
      "it": "I vescovi possono scegliere tra hotel, alloggio in famiglia, alloggio con il gruppo che accompagnano oppure un alloggio organizzato autonomamente. Ciò per consentire ai vescovi di scegliere in base alle proprie circostanze. Il costo dell'hotel è a carico dei vescovi stessi. Di norma saranno assegnate camere singole.",
      "pt": "Os bispos podem escolher entre hotel, alojamento em família, ficar com o grupo que acompanham ou tratar do seu próprio alojamento. Isto permite aos bispos escolher de acordo com as suas circunstâncias. O custo do hotel é pago pelos próprios bispos. Serão atribuídos, por norma, quartos individuais."
    },
    "sub": {
      "ko": "주교등록",
      "en": "Bishops' Registration",
      "es": "Inscripción de obispos",
      "fr": "Inscription des évêques",
      "it": "Iscrizione dei vescovi",
      "pt": "Inscrição dos bispos"
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
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visas and K-ETA",
      "es": "Visados y K-ETA",
      "fr": "Visas et K-ETA",
      "it": "Visti e K-ETA",
      "pt": "Vistos e K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "2027년 K-ETA 적용 대상과 면제 국가는 어떻게 되며, 개인 또는 그룹 단위로 신청할 수 있나요?",
      "en": "For 2027, which countries are subject to K-ETA and which are exempt? Can it be applied for individually or as a group?",
      "es": "Para 2027, ¿a qué países se aplica la K-ETA y cuáles están exentos? ¿Se puede solicitar individualmente o en grupo?",
      "fr": "Pour 2027, quels pays sont soumis au K-ETA et lesquels en sont exemptés ? Peut-on en faire la demande individuellement ou en groupe ?",
      "it": "Per il 2027, quali Paesi sono soggetti al K-ETA e quali ne sono esenti? Si può richiedere individualmente o come gruppo?",
      "pt": "Para 2027, que países estão sujeitos ao K-ETA e quais estão isentos? Pode ser pedido individualmente ou em grupo?"
    },
    "a": {
      "ko": "현재 2026년 12월 31일까지의 K- ETA 적용나라는 88개국, K-ETA 면제 국가는 22개국입니다. 자세한 내용은\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y 를 참고하시면 본국의 면제 여부를 확인하실 수 있습니다. K-ETA면제에 대해 내년까지 연장 가능 여부에 대해 법무부와 논의중입니다.\n또한 그룹 단위로는 신청하실 수 없으며, 개인으로 신청해주시기 바랍니다.",
      "en": "Currently, through December 31, 2026, K-ETA applies to 88 countries and 22 countries are exempt from K-ETA. For details, please see\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y where you can check whether your country is exempt. We are in discussions with the Ministry of Justice on whether the K-ETA exemption can be extended through next year.\nK-ETA cannot be applied for as a group; please apply individually.",
      "es": "Actualmente, hasta el 31 de diciembre de 2026, la K-ETA se aplica a 88 países y 22 países están exentos. Para más detalles, consulten\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y donde pueden comprobar si su país está exento. Estamos en conversaciones con el Ministerio de Justicia sobre la posible prórroga de la exención de la K-ETA durante el próximo año.\nLa K-ETA no puede solicitarse en grupo; solicítenla individualmente.",
      "fr": "Actuellement, jusqu'au 31 décembre 2026, le K-ETA s'applique à 88 pays et 22 pays en sont exemptés. Pour plus de détails, veuillez consulter\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y où vous pourrez vérifier si votre pays est exempté. Nous discutons avec le ministère de la Justice d'une éventuelle prolongation de l'exemption du K-ETA jusqu'à l'année prochaine.\nLe K-ETA ne peut pas être demandé en groupe ; veuillez en faire la demande individuellement.",
      "it": "Attualmente, fino al 31 dicembre 2026, il K-ETA si applica a 88 Paesi e 22 Paesi ne sono esenti. Per i dettagli, consultate\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y dove potete verificare se il vostro Paese è esente. Siamo in trattative con il Ministero della Giustizia per verificare se l'esenzione dal K-ETA possa essere prorogata fino al prossimo anno.\nIl K-ETA non può essere richiesto come gruppo; fate domanda individualmente.",
      "pt": "Atualmente, até 31 de dezembro de 2026, o K-ETA aplica-se a 88 países e 22 países estão isentos. Para mais pormenores, consultem\nhttps://www.k-eta.go.kr/portal/board/viewboarddetail.do?bbsSn=299706&esntlPnotiMtYn=Y onde podem verificar se o vosso país está isento. Estamos em conversações com o Ministério da Justiça para saber se a isenção do K-ETA pode ser prolongada até ao próximo ano.\nO K-ETA não pode ser pedido em grupo; façam o pedido individualmente."
    }
  },
  {
    "id": "Q35",
    "no": "Q35",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visas and K-ETA",
      "es": "Visados y K-ETA",
      "fr": "Visas et K-ETA",
      "it": "Visti e K-ETA",
      "pt": "Vistos e K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "비자 신청 시 필요한 한국 내 체류지 주소와 연락처를 LOC에서 제공하나요?",
      "en": "Will the LOC provide the address and contact details in Korea that are needed for a visa application?",
      "es": "¿Facilitará el COL la dirección y los datos de contacto en Corea necesarios para la solicitud de visado?",
      "fr": "Le COL fournira-t-il l'adresse et les coordonnées en Corée nécessaires à la demande de visa ?",
      "it": "Il COL fornirà l'indirizzo e i recapiti in Corea necessari per la domanda di visto?",
      "pt": "O COL vai fornecer a morada e os contactos na Coreia necessários para o pedido de visto?"
    },
    "a": {
      "ko": "비자 신청 시 한국 내 체류지 주소와 연락처는 조직위원회 정보를 기재하시면 됩니다. 해당 정보는 등록 시스템에서 발급되는 참가확인서에서 확인하실 수 있습니다.",
      "en": "For the address and contact details in Korea on your visa application, please enter the LOC's details. This information can be found in the certificate of participation issued by the registration system.",
      "es": "Para la dirección y los datos de contacto en Corea de su solicitud de visado, indiquen los datos del COL. Esta información figura en el certificado de participación emitido por el sistema de inscripción.",
      "fr": "Pour l'adresse et les coordonnées en Corée de votre demande de visa, veuillez indiquer celles du COL. Ces informations figurent dans l'attestation de participation délivrée par le système d'inscription.",
      "it": "Per l'indirizzo e i recapiti in Corea nella domanda di visto, inserite i dati del COL. Queste informazioni si trovano nel certificato di partecipazione rilasciato dal sistema di iscrizione.",
      "pt": "Para a morada e os contactos na Coreia no pedido de visto, indiquem os dados do COL. Estas informações constam do certificado de participação emitido pelo sistema de inscrição."
    }
  },
  {
    "id": "Q36",
    "no": "Q36",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visas and K-ETA",
      "es": "Visados y K-ETA",
      "fr": "Visas et K-ETA",
      "it": "Visti e K-ETA",
      "pt": "Vistos e K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "저희 그룹에는 다양한 국적의 순례자가 있습니다. 국적별 비자 또는 K-ETA 필요 여부를 확인할 수 있는 안내 자료가 제공되나요? WYD 전용 비자가 별도로 있는지, C-3 비자의 성격과 비자 면제 대상자의 초청장 필요 여부도 궁금합니다.",
      "en": "Our group has pilgrims of various nationalities. Will guidance be provided to check whether each nationality needs a visa or K-ETA?\nIs there a dedicated WYD visa?\nWe would also like to know what a C-3 visa is and whether visa-exempt pilgrims need an invitation letter.",
      "es": "Nuestro grupo tiene peregrinos de diversas nacionalidades. ¿Se facilitará información para comprobar si cada nacionalidad necesita visado o K-ETA?\n¿Existe un visado específico para la JMJ?\nTambién quisiéramos saber qué es un visado C-3 y si los peregrinos exentos de visado necesitan una carta de invitación.",
      "fr": "Notre groupe compte des pèlerins de diverses nationalités. Des informations seront-elles fournies pour vérifier si chaque nationalité a besoin d'un visa ou d'un K-ETA ?\nExiste-t-il un visa spécifique aux JMJ ?\nNous aimerions aussi savoir ce qu'est un visa C-3 et si les pèlerins exemptés de visa ont besoin d'une lettre d'invitation.",
      "it": "Il nostro gruppo ha pellegrini di varie nazionalità. Saranno fornite indicazioni per verificare se ciascuna nazionalità necessita di un visto o del K-ETA?\nEsiste un visto dedicato alla GMG?\nVorremmo anche sapere cos'è un visto C-3 e se i pellegrini esenti da visto necessitano di una lettera d'invito.",
      "pt": "O nosso grupo tem peregrinos de várias nacionalidades. Serão dadas orientações para verificar se cada nacionalidade precisa de visto ou de K-ETA?\nExiste um visto específico para a JMJ?\nGostaríamos também de saber o que é um visto C-3 e se os peregrinos isentos de visto precisam de uma carta-convite."
    },
    "a": {
      "ko": "조직위원회는 별도의 비자 안내 자료를 제공하고 있지 않습니다. 국적별로 비자와 K-ETA의 필요여부가 달라지므로, https://www.visa.go.kr/ 에 들어가셔서 국가별 비자 필요여부를 확인해주시기 바랍니다. WYD 전용비자는 없습니다. C-3는 단기체류비자로 자세한 체류 정보는 정부와 협의 중으로 추후에 안내 드리겠습니다. 비자 면제 대상자에게는 초정장이 필요하지 않습니다.",
      "en": "We do not provide separate visa guidance materials. Visa and K-ETA requirements differ by nationality, so please visit https://www.visa.go.kr/ to check the visa requirements for each country.\nThere is no dedicated WYD visa.\nC-3 is a short-term visit visa; details of the permitted stay are being discussed with the government and will be announced later. Visa-exempt pilgrims do not need an invitation letter.",
      "es": "No facilitamos materiales específicos sobre visados. Los requisitos de visado y de K-ETA varían según la nacionalidad, por lo que les rogamos que visiten https://www.visa.go.kr/ para comprobar los requisitos de cada país.\nNo existe un visado específico para la JMJ.\nEl C-3 es un visado de visita de corta duración; los detalles de la estancia permitida se están tratando con el Gobierno y se anunciarán más adelante. Los peregrinos exentos de visado no necesitan carta de invitación.",
      "fr": "Nous ne fournissons pas de documentation spécifique sur les visas. Les exigences en matière de visa et de K-ETA varient selon la nationalité ; veuillez donc consulter https://www.visa.go.kr/ pour vérifier les exigences de chaque pays.\nIl n'existe pas de visa spécifique aux JMJ.\nLe C-3 est un visa de court séjour ; les modalités du séjour autorisé sont en discussion avec le gouvernement et seront communiquées ultérieurement. Les pèlerins exemptés de visa n'ont pas besoin de lettre d'invitation.",
      "it": "Non forniamo materiali informativi separati sui visti. I requisiti per visto e K-ETA variano a seconda della nazionalità; consultate quindi https://www.visa.go.kr/ per verificare i requisiti di visto di ciascun Paese.\nNon esiste un visto dedicato alla GMG.\nIl C-3 è un visto per visite di breve durata; i dettagli sul soggiorno consentito sono in discussione con il governo e saranno comunicati in seguito. I pellegrini esenti da visto non hanno bisogno di una lettera d'invito.",
      "pt": "Não fornecemos materiais de orientação sobre vistos à parte. Os requisitos de visto e de K-ETA variam consoante a nacionalidade; consultem, por isso, https://www.visa.go.kr/ para verificar os requisitos de visto de cada país.\nNão existe um visto específico para a JMJ.\nO C-3 é um visto de visita de curta duração; os pormenores sobre a estadia permitida estão em discussão com o governo e serão anunciados mais tarde. Os peregrinos isentos de visto não precisam de carta-convite."
    }
  },
  {
    "id": "Q37",
    "no": "Q37",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visas and K-ETA",
      "es": "Visados y K-ETA",
      "fr": "Visas et K-ETA",
      "it": "Visti e K-ETA",
      "pt": "Vistos e K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "조직위원회 또는 DLFL 에서 각국 한국 대사관·영사관에 WYD 개최 사실과 참가자 비자 절차를 안내하고 있나요? 비자 예약 지원, 단체 신청, 대사관과 멀리 떨어져 있는 원거리 거주 순례자를 위한 편의 (예. 일괄 신청) 및 WYD 참가 목적에 대한 별도 고려가 제공되나요?",
      "en": "Is the LOC or the DLFL informing the Korean embassies and consulates in each country about WYD and the visa procedure for participants? Will there be help with visa appointments, group applications, arrangements for pilgrims living far from an embassy (e.g. batch applications), and separate consideration of the purpose of attending WYD?",
      "es": "¿Están el COL o el DLFL informando a las embajadas y consulados de Corea en cada país sobre la JMJ y el procedimiento de visado para los participantes? ¿Habrá ayuda con las citas de visado, las solicitudes en grupo, facilidades para peregrinos que viven lejos de una embajada (p. ej., solicitudes conjuntas) y una consideración específica del motivo de asistir a la JMJ?",
      "fr": "Le COL ou le DLFL informent-ils les ambassades et consulats de Corée dans chaque pays au sujet des JMJ et de la procédure de visa des participants ? Une aide sera-t-elle apportée pour les rendez-vous de visa, les demandes groupées, les pèlerins vivant loin d'une ambassade (p. ex. demandes groupées) et une prise en compte particulière du motif de participation aux JMJ ?",
      "it": "Il COL o il DLFL stanno informando le ambasciate e i consolati coreani in ciascun Paese sulla GMG e sulla procedura di visto per i partecipanti? Ci sarà aiuto per gli appuntamenti per il visto, le domande di gruppo, soluzioni per i pellegrini che vivono lontano da un'ambasciata (ad es. domande cumulative) e una considerazione specifica dello scopo di partecipare alla GMG?",
      "pt": "O COL ou o DLFL estão a informar as embaixadas e consulados da Coreia em cada país sobre a JMJ e o procedimento de visto para os participantes? Haverá ajuda com marcações para o visto, pedidos em grupo, soluções para peregrinos que vivem longe de uma embaixada (por exemplo, pedidos conjuntos) e uma consideração específica do objetivo de participar na JMJ?"
    },
    "a": {
      "ko": "조직위원회는 한국 대사관과 영사관에 WYD 비자 절차에 대해 안내와 소통을 하고 있습니다. 이번 제2차 국제준비회의에도 정부와의 협의로 많은 도움을 받았습니다. 앞으로도 조직위는 한국 정부와 원만한 소통을 통해 비자 관련 절차 간소화를 진행하여 추후에 안내드릴 예정입니다.",
      "en": "The LOC is informing and communicating with Korean embassies and consulates about the WYD visa procedure. For this Second International Preparatory Meeting too, we received a great deal of help through consultation with the government. The LOC will continue to work closely with the Korean government to simplify visa procedures and will share further information later.",
      "es": "El COL está informando y manteniendo contacto con las embajadas y consulados de Corea sobre el procedimiento de visado para la JMJ. También para esta Segunda Reunión Preparatoria Internacional recibimos mucha ayuda gracias a la colaboración con el Gobierno. El COL seguirá trabajando estrechamente con el Gobierno coreano para simplificar los procedimientos de visado y compartirá más información más adelante.",
      "fr": "Le COL informe les ambassades et consulats de Corée au sujet de la procédure de visa pour les JMJ et reste en contact avec eux. Pour cette Deuxième réunion préparatoire internationale également, nous avons bénéficié d'une aide précieuse grâce à la concertation avec le gouvernement. Le COL continuera de travailler en étroite collaboration avec le gouvernement coréen pour simplifier les procédures de visa et communiquera d'autres informations ultérieurement.",
      "it": "Il COL sta informando e comunicando con le ambasciate e i consolati coreani riguardo alla procedura di visto per la GMG. Anche per questa Seconda Riunione Preparatoria Internazionale abbiamo ricevuto un grande aiuto grazie alla consultazione con il governo. Il COL continuerà a collaborare strettamente con il governo coreano per semplificare le procedure di visto e condividerà ulteriori informazioni in seguito.",
      "pt": "O COL está a informar e a comunicar com as embaixadas e consulados da Coreia sobre o procedimento de visto para a JMJ. Também para esta Segunda Reunião Preparatória Internacional recebemos muita ajuda graças à consulta com o governo. O COL continuará a trabalhar estreitamente com o governo coreano para simplificar os procedimentos de visto e partilhará mais informações mais tarde."
    }
  },
  {
    "id": "Q38",
    "no": "Q38",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visas and K-ETA",
      "es": "Visados y K-ETA",
      "fr": "Visas et K-ETA",
      "it": "Visti e K-ETA",
      "pt": "Vistos e K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "비자 발급 수수료는 얼마이며, WYD 참가 순례자를 위한 수수료 면제 또는 할인 방안이 검토되고 있나요?",
      "en": "How much is the visa fee, and is a fee waiver or discount for WYD pilgrims being considered?",
      "es": "¿Cuánto cuesta el visado y se está estudiando una exención o descuento de la tasa para los peregrinos de la JMJ?",
      "fr": "Combien coûte le visa, et une exonération ou une réduction des frais pour les pèlerins des JMJ est-elle envisagée ?",
      "it": "Quanto costa il visto, e si sta valutando un'esenzione o uno sconto sulla tassa per i pellegrini della GMG?",
      "pt": "Quanto custa o visto, e está a ser ponderada uma isenção ou desconto da taxa para os peregrinos da JMJ?"
    },
    "a": {
      "ko": "비자 발급 수수료 및 WYD 참가자에 대한 수수료 면제 또는 할인 여부는 현재 관계 기관과 논의 중입니다. 관련 사항이 확정되는 대로 안내드리겠습니다.",
      "en": "The visa fee, and whether it will be waived or discounted for WYD participants, are currently under discussion with the relevant authorities. We will let you know as soon as this is confirmed.",
      "es": "La tasa del visado, y si se eximirá o reducirá para los participantes en la JMJ, se están tratando actualmente con las autoridades competentes. Les informaremos en cuanto se confirme.",
      "fr": "Les frais de visa, ainsi qu'une éventuelle exonération ou réduction pour les participants aux JMJ, sont actuellement en discussion avec les autorités compétentes. Nous vous informerons dès que ce sera confirmé.",
      "it": "La tassa per il visto, e l'eventuale esenzione o sconto per i partecipanti alla GMG, sono attualmente in discussione con le autorità competenti. Vi informeremo non appena sarà confermato.",
      "pt": "A taxa de visto, e a eventual isenção ou desconto para os participantes da JMJ, estão atualmente em discussão com as autoridades competentes. Informaremos logo que esteja confirmado."
    }
  },
  {
    "id": "Q39",
    "no": "Q39",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "비자,K-ETA",
      "en": "Visas and K-ETA",
      "es": "Visados y K-ETA",
      "fr": "Visas et K-ETA",
      "it": "Visti e K-ETA",
      "pt": "Vistos e K-ETA"
    },
    "topicNo": "2",
    "q": {
      "ko": "학생 등 재직증명서나 급여명세서를 제출하기 어려운 순례자가 사용할 수 있는 대체 서류에 대한 지원 방안이 있나요?",
      "en": "Is there support regarding alternative documents for pilgrims, such as students, who cannot easily submit a certificate of employment or pay slips?",
      "es": "¿Hay alguna ayuda en cuanto a documentos alternativos para peregrinos, como estudiantes, que no pueden presentar fácilmente un certificado de empleo o nóminas?",
      "fr": "Existe-t-il un soutien concernant des documents alternatifs pour les pèlerins, comme les étudiants, qui ne peuvent pas facilement fournir une attestation d'emploi ou des fiches de paie ?",
      "it": "È previsto un supporto riguardo a documenti alternativi per i pellegrini, come gli studenti, che non possono facilmente presentare un certificato di lavoro o buste paga?",
      "pt": "Há apoio quanto a documentos alternativos para peregrinos, como estudantes, que não conseguem apresentar facilmente uma declaração de emprego ou recibos de vencimento?"
    },
    "a": {
      "ko": "학생 및 청년 참가자 등을 위한 비자 제출서류를 현재 관계 기관과 협의하고 있습니다. 대체서류를 포함한 구체적인 제출 요건이 확정되는 대로 안내드리겠습니다.",
      "en": "We are currently discussing visa supporting documents for students, young participants and others with the relevant authorities. We will let you know as soon as the specific requirements, including alternative documents, are confirmed.",
      "es": "Estamos tratando actualmente con las autoridades competentes la documentación de apoyo para el visado de estudiantes, jóvenes participantes y otros. Les informaremos en cuanto se confirmen los requisitos concretos, incluidos los documentos alternativos.",
      "fr": "Nous discutons actuellement avec les autorités compétentes des justificatifs de visa pour les étudiants, les jeunes participants et d'autres. Nous vous informerons dès que les exigences précises, y compris les documents alternatifs, seront confirmées.",
      "it": "Stiamo attualmente discutendo con le autorità competenti dei documenti a supporto del visto per studenti, giovani partecipanti e altri. Vi informeremo non appena i requisiti specifici, inclusi i documenti alternativi, saranno confermati.",
      "pt": "Estamos atualmente a discutir com as autoridades competentes os documentos de suporte ao visto para estudantes, jovens participantes e outros. Informaremos logo que os requisitos específicos, incluindo documentos alternativos, estejam confirmados."
    }
  },
  {
    "id": "Q40",
    "no": "Q40",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "봉사자",
      "en": "Volunteers",
      "es": "Voluntarios",
      "fr": "Volontaires",
      "it": "Volontari",
      "pt": "Voluntários"
    },
    "topicNo": "3",
    "q": {
      "ko": "국제 봉사자의 참가 비용과 비자 소지자의 장기 봉사 지원 가능 여부는 어떻게 되나요?",
      "en": "What does it cost to take part as an international volunteer, and can visa holders apply for long-term volunteering?",
      "es": "¿Cuánto cuesta participar como voluntario internacional y pueden los titulares de visado solicitar el voluntariado de larga duración?",
      "fr": "Combien coûte la participation en tant que volontaire international, et les titulaires d'un visa peuvent-ils postuler au volontariat de longue durée ?",
      "it": "Quanto costa partecipare come volontario internazionale, e chi è già titolare di un visto può candidarsi al volontariato di lunga durata?",
      "pt": "Quanto custa participar como voluntário internacional, e quem já tem visto pode candidatar-se ao voluntariado de longa duração?"
    },
    "a": {
      "ko": "국제 장기 봉사자에게 별도의 참가 비용은 없습니다. 조직위원회에서는 숙소와 평일 점심 식권, 그리고 교통비 및 식비의 일부를 제공하며, 그 외의 비용은 본인이 부담해야 합니다.\n국제 봉사자가 한국에서 장기간(3개월 이상) 활동하기 위해서는 비자 발급이 필수이며, 대부분 종교비자(D-6)를 발급받게 됩니다. 이미 비자를 소지하고 계신 경우에도 지원이 가능하며, 입국 과정이 훨씬 수월하다는 장점이 있습니다. 다만 비자를 소지하고 있더라도 국제 장기 봉사자 지원 절차는 동일하게 거쳐야 하며, 소속 교구 또는 주교회의의 추천서 제출을 동일하게 요청받을 수 있다는 점을 알아 두시기 바랍니다.",
      "en": "There is no separate participation cost for international long-term volunteers. The LOC provides accommodation, weekday lunch vouchers, and part of transport and meal costs; other costs are borne by the volunteers themselves.\n\nInternational volunteers must obtain a visa to serve in Korea for an extended period (three months or more), and most receive a religious visa (D-6). Those who already hold a visa can also apply, and this has the advantage of making entry much easier. Please note, however, that even visa holders must go through the same international long-term volunteer application procedure and may likewise be asked to submit a letter of recommendation from their diocese or episcopal conference.",
      "es": "Los voluntarios internacionales de larga duración no tienen un coste de participación aparte. El COL ofrece alojamiento, vales de almuerzo en días laborables y una parte de los gastos de transporte y comida; los demás gastos corren a cargo de los propios voluntarios.\n\nLos voluntarios internacionales deben obtener un visado para servir en Corea durante un periodo prolongado (tres meses o más), y la mayoría recibe un visado religioso (D-6). Quienes ya tienen un visado también pueden presentar su candidatura, lo que tiene la ventaja de facilitar mucho la entrada. Tengan en cuenta, sin embargo, que incluso los titulares de visado deben seguir el mismo procedimiento de solicitud para voluntarios internacionales de larga duración y también se les puede pedir una carta de recomendación de su diócesis o conferencia episcopal.",
      "fr": "Il n'y a pas de frais de participation distincts pour les volontaires internationaux de longue durée. Le COL fournit l'hébergement, des tickets-repas pour le déjeuner en semaine et une partie des frais de transport et de repas ; les autres frais sont à la charge des volontaires.\n\nLes volontaires internationaux doivent obtenir un visa pour servir en Corée sur une longue période (trois mois ou plus), et la plupart reçoivent un visa religieux (D-6). Ceux qui possèdent déjà un visa peuvent aussi postuler, ce qui a l'avantage de faciliter grandement l'entrée sur le territoire. Notez toutefois que même les titulaires d'un visa doivent suivre la même procédure de candidature pour les volontaires internationaux de longue durée, et une lettre de recommandation de leur diocèse ou de leur conférence épiscopale peut également leur être demandée.",
      "it": "Non c'è un costo di partecipazione specifico per i volontari internazionali di lunga durata. Il COL fornisce l'alloggio, buoni pasto per il pranzo nei giorni feriali e parte dei costi di trasporto e dei pasti; gli altri costi sono a carico dei volontari.\n\nI volontari internazionali devono ottenere un visto per prestare servizio in Corea per un periodo prolungato (tre mesi o più), e la maggior parte riceve un visto religioso (D-6). Possono candidarsi anche coloro che sono già titolari di un visto, il che ha il vantaggio di rendere l'ingresso molto più semplice. Tenete presente, però, che anche i titolari di visto devono seguire la stessa procedura di candidatura per volontari internazionali di lunga durata e potrebbero ugualmente dover presentare una lettera di raccomandazione della propria diocesi o conferenza episcopale.",
      "pt": "Não há um custo de participação específico para os voluntários internacionais de longa duração. O COL fornece alojamento, senhas de almoço nos dias úteis e parte dos custos de transporte e refeições; os restantes custos ficam a cargo dos próprios voluntários.\n\nOs voluntários internacionais têm de obter um visto para servir na Coreia durante um período prolongado (três meses ou mais), e a maioria recebe um visto religioso (D-6). Quem já tem visto também se pode candidatar, o que tem a vantagem de tornar a entrada muito mais fácil. Tenham em atenção, porém, que mesmo os titulares de visto têm de seguir o mesmo procedimento de candidatura para voluntários internacionais de longa duração e poderão igualmente ter de apresentar uma carta de recomendação da sua diocese ou conferência episcopal."
    }
  },
  {
    "id": "Q41",
    "no": "Q41",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "봉사자",
      "en": "Volunteers",
      "es": "Voluntarios",
      "fr": "Volontaires",
      "it": "Volontari",
      "pt": "Voluntários"
    },
    "topicNo": "3",
    "q": {
      "ko": "봉사위원회 협의 및 협업을 위한 절차 및 준비 사항은 어떻게 되나요?",
      "en": "What is the procedure for consulting and collaborating with the volunteer committee, and what needs to be prepared?",
      "es": "¿Cuál es el procedimiento para consultar y colaborar con el comité de voluntarios, y qué hay que preparar?",
      "fr": "Quelle est la procédure pour se concerter et collaborer avec le comité des volontaires, et que faut-il préparer ?",
      "it": "Qual è la procedura per consultarsi e collaborare con il comitato dei volontari, e cosa occorre preparare?",
      "pt": "Qual é o procedimento para consultar e colaborar com o comité de voluntários, e o que é preciso preparar?"
    },
    "a": {
      "ko": "향후 공식 홈페이지에 봉사자 섹션이 마련될 예정입니다. 그 전까지는 volunteer.intl@wydseoul.org로 연락해 주시기 바랍니다.",
      "en": "A volunteer section will be set up on the official WYD website. Until then, please contact volunteer.intl@wydseoul.org.",
      "es": "Se habilitará una sección de voluntariado en la web oficial de la JMJ. Mientras tanto, pónganse en contacto con volunteer.intl@wydseoul.org.",
      "fr": "Une rubrique consacrée aux volontaires sera créée sur le site officiel des JMJ. D'ici là, veuillez écrire à volunteer.intl@wydseoul.org.",
      "it": "Sul sito ufficiale della GMG sarà creata una sezione dedicata ai volontari. Nel frattempo, scrivete a volunteer.intl@wydseoul.org.",
      "pt": "Será criada uma secção de voluntários no site oficial da JMJ. Até lá, contactem volunteer.intl@wydseoul.org."
    }
  },
  {
    "id": "Q42",
    "no": "Q42",
    "section": {
      "ko": "참가 신청 및 등록",
      "en": "Application and Registration",
      "es": "Solicitud e inscripción",
      "fr": "Candidature et inscription",
      "it": "Candidatura e iscrizione",
      "pt": "Candidatura e inscrição"
    },
    "sectionNo": "Ⅰ",
    "topic": {
      "ko": "봉사자",
      "en": "Volunteers",
      "es": "Voluntarios",
      "fr": "Volontaires",
      "it": "Volontari",
      "pt": "Voluntários"
    },
    "topicNo": "3",
    "q": {
      "ko": "장기 봉사자와 단기 봉사자의 차이, 지원 자격 및 등록 절차는 무엇입니까?",
      "en": "What is the difference between long-term and short-term volunteers, and what are the eligibility requirements and registration procedure?",
      "es": "¿Cuál es la diferencia entre voluntarios de larga y de corta duración, y cuáles son los requisitos y el procedimiento de inscripción?",
      "fr": "Quelle est la différence entre volontaires de longue et de courte durée, et quelles sont les conditions et la procédure d'inscription ?",
      "it": "Qual è la differenza tra volontari di lunga e di breve durata, e quali sono i requisiti di ammissibilità e la procedura di iscrizione?",
      "pt": "Qual é a diferença entre voluntários de longa e de curta duração, e quais são os requisitos de elegibilidade e o procedimento de inscrição?"
    },
    "a": {
      "ko": "1. 장기 봉사\n장기 봉사자는 3개월 이상 조직위원회에서 활동하며, 2027 서울 WYD 준비와 기획에 함께하게 됩니다. 활동 시간과 분야에 따라 부서 봉사자와 팀 봉사자로 구분되며, 모집(국내/국외 거주 별도 모집)은 조직위원회 홈페이지를 통해 안내됩니다. 국외에서 장기 봉사자로 선발된 이에게는 숙소와 함께 식사비와 교통비 일부가 제공됩니다.\n2. 단기 봉사\n단기 봉사자는 2027년 8월 3일부터 8일까지 진행되는 본대회를 중심으로 활동하게 됩니다. 이전 대회와 마찬가지로 본대회 약 1주일 부터 활동이 시작되어 7월 26일까지 입국해야 하며, 교육, 봉사자 발대 미사 등 사전 프로그램부터 참여해야 합니다. 단기 자원봉사 신청은 공식 봉사자 등록 시스템을 통해 진행될 예정입니다.",
      "en": "1. Long-term volunteering\nLong-term volunteers serve with the LOC for three months or more and take part in preparing and planning WYD Seoul 2027. They are divided into division volunteers and team volunteers according to their hours and area of service. Recruitment (separately for those living in Korea and abroad) is announced on the LOC website. Those selected from abroad as long-term volunteers are provided with accommodation and part of their meal and transport costs.\n\n2. Short-term volunteering\nShort-term volunteers serve mainly during the Main Event of WYD Seoul 2027, from August 3 to 8, 2027. As at previous editions, service begins about a week before the Main Event, so they must arrive in Korea by July 26 and take part from the preparatory programs onward, such as training and the volunteers' commissioning Mass. Applications for short-term volunteering will be made through the official volunteer registration system.",
      "es": "1. Voluntariado de larga duración\nLos voluntarios de larga duración colaboran con el COL durante tres meses o más y participan en la preparación y planificación de la JMJ Seúl 2027. Se dividen en voluntarios de división y voluntarios de equipo según su horario y su ámbito de servicio. La convocatoria (por separado para residentes en Corea y en el extranjero) se anuncia en la web del COL. A los seleccionados en el extranjero como voluntarios de larga duración se les ofrece alojamiento y una parte de los gastos de comida y transporte.\n\n2. Voluntariado de corta duración\nLos voluntarios de corta duración colaboran principalmente durante el Evento Principal de la JMJ Seúl 2027, del 3 al 8 de agosto de 2027. Como en ediciones anteriores, el servicio comienza aproximadamente una semana antes del Evento Principal, por lo que deben llegar a Corea antes del 26 de julio y participar desde los programas preparatorios, como la formación y la Misa de envío de los voluntarios. Las solicitudes de voluntariado de corta duración se realizarán a través del sistema oficial de inscripción de voluntarios.",
      "fr": "1. Volontariat de longue durée\nLes volontaires de longue durée servent auprès du COL pendant trois mois ou plus et participent à la préparation et à la planification des JMJ Séoul 2027. Ils se répartissent en volontaires de division et volontaires d'équipe selon leurs horaires et leur domaine de service. Le recrutement (distinct pour les personnes résidant en Corée et à l'étranger) est annoncé sur le site du COL. Les volontaires de longue durée sélectionnés à l'étranger bénéficient de l'hébergement et d'une partie de leurs frais de repas et de transport.\n\n2. Volontariat de courte durée\nLes volontaires de courte durée servent principalement pendant l'Événement principal des JMJ Séoul 2027, du 3 au 8 août 2027. Comme lors des éditions précédentes, le service commence environ une semaine avant l'Événement principal ; ils doivent donc arriver en Corée avant le 26 juillet et participer dès les programmes préparatoires, comme la formation et la messe d'envoi des volontaires. Les candidatures au volontariat de courte durée se feront via le système officiel d'inscription des volontaires.",
      "it": "1. Volontariato di lunga durata\nI volontari di lunga durata prestano servizio presso il COL per tre mesi o più e partecipano alla preparazione e alla pianificazione della GMG Seoul 2027. Sono suddivisi in volontari di divisione e volontari di team in base all'orario e all'area di servizio. Il reclutamento (separato per chi vive in Corea e all'estero) è annunciato sul sito del COL. Ai volontari di lunga durata selezionati dall'estero vengono forniti l'alloggio e parte dei costi dei pasti e dei trasporti.\n\n2. Volontariato di breve durata\nI volontari di breve durata prestano servizio principalmente durante l'Evento principale della GMG Seoul 2027, dal 3 all'8 agosto 2027. Come nelle edizioni precedenti, il servizio inizia circa una settimana prima dell'Evento principale; devono quindi arrivare in Corea entro il 26 luglio e partecipare fin dai programmi preparatori, come la formazione e la Messa di mandato dei volontari. Le candidature per il volontariato di breve durata si presenteranno tramite il sistema ufficiale di iscrizione dei volontari.",
      "pt": "1. Voluntariado de longa duração\nOs voluntários de longa duração servem no COL durante três meses ou mais e participam na preparação e planeamento da JMJ Seul 2027. Dividem-se em voluntários de divisão e voluntários de equipa, consoante o horário e a área de serviço. O recrutamento (separado para quem vive na Coreia e no estrangeiro) é anunciado no site do COL. Aos voluntários de longa duração selecionados no estrangeiro são fornecidos alojamento e parte dos custos de refeições e transporte.\n\n2. Voluntariado de curta duração\nOs voluntários de curta duração servem sobretudo durante o Evento Principal da JMJ Seul 2027, de 3 a 8 de agosto de 2027. Como nas edições anteriores, o serviço começa cerca de uma semana antes do Evento Principal; por isso, devem chegar à Coreia até 26 de julho e participar desde os programas preparatórios, como a formação e a Missa de envio dos voluntários. As candidaturas ao voluntariado de curta duração serão feitas através do sistema oficial de inscrição de voluntários."
    }
  },
  {
    "id": "Q43",
    "no": "Q43",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "한국에서 단체 이동에 일반적으로 사용되는 버스는 몇 인승인가요? 45인승과 53인승 버스의 이용 가능 여부 및 수급 상황은 어떻게 되나요?",
      "en": "How many seats do the buses commonly used for group travel in Korea have? What is the availability and supply of 45-seat and 53-seat buses?",
      "es": "¿Cuántas plazas tienen los autobuses que se usan habitualmente para viajes en grupo en Corea? ¿Qué disponibilidad hay de autobuses de 45 y 53 plazas?",
      "fr": "Combien de places comptent les autocars couramment utilisés pour les déplacements de groupe en Corée ? Quelle est la disponibilité des autocars de 45 et 53 places ?",
      "it": "Quanti posti hanno gli autobus comunemente usati per i viaggi di gruppo in Corea? Qual è la disponibilità di autobus da 45 e da 53 posti?",
      "pt": "Quantos lugares têm os autocarros normalmente usados para viagens de grupo na Coreia? Qual é a disponibilidade de autocarros de 45 e de 53 lugares?"
    },
    "a": {
      "ko": "한국에서 일반적으로 사용되는 단체버스는 45인승만 있으며, 행사가 열리는 기간은 휴가철로 버스 수급은 문제 없으나 비용은 평소보다 높을 수 있습니다.",
      "en": "The group buses commonly used in Korea are 45-seaters only. The event falls during the holiday season, so bus supply will not be a problem, but costs may be higher than usual.",
      "es": "Los autobuses de grupo que se usan habitualmente en Corea son solo de 45 plazas. El evento coincide con la temporada de vacaciones, por lo que la disponibilidad de autobuses no será un problema, aunque los costes pueden ser más altos de lo habitual.",
      "fr": "Les autocars de groupe couramment utilisés en Corée ne comptent que 45 places. L'événement a lieu pendant la période des vacances ; la disponibilité des autocars ne posera donc pas de problème, mais le coût peut être plus élevé que d'habitude.",
      "it": "Gli autobus per gruppi comunemente usati in Corea sono solo da 45 posti. L'evento cade nel periodo delle vacanze, quindi la disponibilità di autobus non sarà un problema, ma i costi potrebbero essere più alti del solito.",
      "pt": "Os autocarros de grupo normalmente usados na Coreia são apenas de 45 lugares. O evento coincide com a época de férias, pelo que a disponibilidade de autocarros não será um problema, mas os custos poderão ser mais elevados do que o habitual."
    },
    "sub": {
      "ko": "교통",
      "en": "Transportation",
      "es": "Transporte",
      "fr": "Transports",
      "it": "Trasporti",
      "pt": "Transporte"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "WYD 기간 동안 지하철과 버스 등 대중교통의 운행 시간은 어떻게 되나요? 심야 또는 24시간 운행, 운행시간 연장 및 행사 기간의 혼잡에 대비한 증편 계획이 있나요? 또한 숙소와 주요 행사장 간 이동을 위한 교통 대책은 어떻게 마련될 예정인가요?",
      "en": "What will the operating hours of public transport such as the subway and buses be during WYD? Are there plans for late-night or 24-hour service, extended hours, or extra services to cope with congestion during the event? And what transport measures will be put in place for travel between accommodation and the main venues?",
      "es": "¿Cuál será el horario del transporte público, como el metro y los autobuses, durante la JMJ? ¿Hay planes de servicio nocturno o de 24 horas, horarios ampliados o servicios adicionales para hacer frente a la afluencia durante el evento? ¿Y qué medidas de transporte se adoptarán para los desplazamientos entre el alojamiento y los lugares principales?",
      "fr": "Quels seront les horaires des transports en commun, comme le métro et les bus, pendant les JMJ ? Un service de nuit ou 24 h/24, une extension des horaires ou des services supplémentaires face à l'affluence sont-ils prévus ? Et quelles mesures de transport seront mises en place entre les hébergements et les principaux sites ?",
      "it": "Quali saranno gli orari dei mezzi pubblici come metropolitana e autobus durante la GMG? Sono previsti servizi notturni o 24 ore su 24, orari prolungati o corse aggiuntive per far fronte all'affollamento durante l'evento? E quali misure di trasporto saranno adottate per gli spostamenti tra gli alloggi e le sedi principali?",
      "pt": "Qual será o horário dos transportes públicos, como o metro e os autocarros, durante a JMJ? Estão previstos serviços noturnos ou 24 horas, horários alargados ou serviços adicionais para fazer face à afluência durante o evento? E que medidas de transporte serão adotadas para as deslocações entre o alojamento e os locais principais?"
    },
    "a": {
      "ko": "WYD 기간 동안 순례자들의 대중교통 편의 제공을 위해 서울시 및 관계기관과 지하철, 버스 등 대중교통의 증편에 대해 지속적으로 협의중에 있습니다.",
      "en": "To make public transport convenient for pilgrims during WYD, we are in ongoing discussions with the Seoul Metropolitan Government and related agencies about adding subway, bus and other public transport services.",
      "es": "Para facilitar el transporte público a los peregrinos durante la JMJ, mantenemos conversaciones continuas con el Gobierno Metropolitano de Seúl y los organismos competentes sobre el refuerzo del metro, los autobuses y demás servicios de transporte público.",
      "fr": "Afin de faciliter l'usage des transports en commun par les pèlerins pendant les JMJ, nous menons des discussions continues avec la Ville de Séoul et les organismes concernés sur le renforcement du métro, des bus et des autres transports en commun.",
      "it": "Per rendere comodi i mezzi pubblici ai pellegrini durante la GMG, siamo in costante dialogo con il Governo Metropolitano di Seoul e gli enti interessati per aggiungere corse di metropolitana, autobus e altri mezzi pubblici.",
      "pt": "Para tornar os transportes públicos cómodos para os peregrinos durante a JMJ, estamos em diálogo permanente com o Governo Metropolitano de Seul e as entidades competentes para reforçar os serviços de metro, autocarro e outros transportes públicos."
    },
    "sub": {
      "ko": "교통",
      "en": "Transportation",
      "es": "Transporte",
      "fr": "Transports",
      "it": "Trasporti",
      "pt": "Transporte"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "같은 그룹의 구성원들이 도착일과 출발일은 동일하더라도 서로 다른 항공편으로 서울에 도착하고 출발하는 것이 허용되는지 확인해주실 수 있나요?",
      "en": "Can you confirm whether members of the same group may arrive in and depart from Seoul on different flights, even if their arrival and departure dates are the same?",
      "es": "¿Pueden confirmar si los miembros de un mismo grupo pueden llegar a Seúl y salir de allí en vuelos distintos, aunque sus fechas de llegada y salida sean las mismas?",
      "fr": "Pouvez-vous confirmer que les membres d'un même groupe peuvent arriver à Séoul et en repartir sur des vols différents, même si leurs dates d'arrivée et de départ sont identiques ?",
      "it": "Potete confermare se i membri dello stesso gruppo possono arrivare a Seoul e ripartire con voli diversi, anche se le date di arrivo e partenza sono le stesse?",
      "pt": "Podem confirmar se os membros do mesmo grupo podem chegar a Seul e partir em voos diferentes, mesmo que as datas de chegada e partida sejam as mesmas?"
    },
    "a": {
      "ko": "같은 그룹의 참가자들이 서로 다른 항공편으로 서울에 도착하고 출발하는 것은 가능합니다. 도착일과 출발일이 동일하고, 같은 패키지를 이용하며 동일한 그룹 리더의 인솔과 관리 아래 참가한다면, 항공편이 다르다는 이유만으로 별도의 하위그룹을 구성할 필요는 없습니다.",
      "en": "Participants in the same group may arrive in and depart from Seoul on different flights. If their arrival and departure dates are the same, they use the same package and they take part under the guidance and supervision of the same group leader, there is no need to form a separate Subgroup just because the flights differ.",
      "es": "Los participantes de un mismo grupo pueden llegar a Seúl y salir de allí en vuelos distintos. Si sus fechas de llegada y salida son las mismas, utilizan el mismo paquete y participan bajo la guía y supervisión del mismo líder de grupo, no es necesario formar un Subgroup aparte solo porque los vuelos sean distintos.",
      "fr": "Les participants d'un même groupe peuvent arriver à Séoul et en repartir sur des vols différents. Si leurs dates d'arrivée et de départ sont identiques, qu'ils utilisent le même forfait et participent sous la conduite et la supervision du même responsable de groupe, il n'est pas nécessaire de constituer un Subgroup distinct au seul motif que les vols diffèrent.",
      "it": "I partecipanti dello stesso gruppo possono arrivare a Seoul e ripartire con voli diversi. Se le loro date di arrivo e partenza sono le stesse, usano lo stesso pacchetto e partecipano sotto la guida e la supervisione dello stesso responsabile di gruppo, non è necessario formare un Subgroup separato solo perché i voli sono diversi.",
      "pt": "Os participantes do mesmo grupo podem chegar a Seul e partir em voos diferentes. Se as datas de chegada e partida forem as mesmas, utilizarem o mesmo pacote e participarem sob a orientação e supervisão do mesmo responsável de grupo, não é necessário formar um Subgroup separado só porque os voos são diferentes."
    },
    "sub": {
      "ko": "교통",
      "en": "Transportation",
      "es": "Transporte",
      "fr": "Transports",
      "it": "Trasporti",
      "pt": "Transporte"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "부부나 가족의 경우 같은 숙소에 머물도록 요청할 수 있나요?",
      "en": "Can married couples or families ask to stay in the same accommodation?",
      "es": "¿Pueden los matrimonios o las familias pedir alojarse en el mismo lugar?",
      "fr": "Les couples mariés ou les familles peuvent-ils demander à loger au même endroit ?",
      "it": "Le coppie sposate o le famiglie possono chiedere di alloggiare nello stesso alloggio?",
      "pt": "Os casais ou as famílias podem pedir para ficar no mesmo alojamento?"
    },
    "a": {
      "ko": "부부나 가족이 함께 숙박하기를 원하시는 경우, 등록 시 동일한 그룹으로 등록해 주시기 바랍니다. 숙소 배정은 동일한 그룹의 참가자를 같은 숙소에 배정하는 것을 원칙으로 합니다.\n다만, 전체 숙소의 수용 여건과 운영 기준에 따라 배정이 이루어지므로, 개별적인 숙소 배정 요청을 반영하기는 어려운 점 양해 부탁드립니다. 같은 숙소에 배정되더라도 가족 전용 객실이나 동일한 방 사용이 보장되는 것은 아닙니다.",
      "en": "If married couples or families wish to stay together, please register them in the same group. As a rule, participants in the same group are assigned to the same accommodation.\nHowever, assignments are made according to overall accommodation capacity and operating criteria, so we regret that individual accommodation requests cannot be accommodated. Even when assigned to the same accommodation, a family room or the same room is not guaranteed.",
      "es": "Si los matrimonios o las familias desean alojarse juntos, inscríbanlos en el mismo grupo. Por norma general, los participantes de un mismo grupo se asignan al mismo alojamiento.\nNo obstante, las asignaciones se hacen según la capacidad general de los alojamientos y los criterios de funcionamiento, por lo que lamentamos no poder atender solicitudes individuales de alojamiento. Aunque se les asigne el mismo alojamiento, no se garantiza una habitación familiar ni la misma habitación.",
      "fr": "Si les couples ou les familles souhaitent loger ensemble, veuillez les inscrire dans le même groupe. En règle générale, les participants d'un même groupe sont affectés au même hébergement.\nToutefois, les affectations se font selon la capacité globale des hébergements et les critères de fonctionnement ; nous regrettons donc de ne pas pouvoir tenir compte des demandes individuelles. Même en cas d'affectation au même hébergement, une chambre familiale ou la même chambre ne sont pas garanties.",
      "it": "Se coppie sposate o famiglie desiderano alloggiare insieme, iscrivetele nello stesso gruppo. Di regola, i partecipanti dello stesso gruppo vengono assegnati allo stesso alloggio.\nLe assegnazioni avvengono però in base alla capacità complessiva degli alloggi e ai criteri operativi; ci dispiace quindi di non poter accogliere richieste individuali di alloggio. Anche se assegnati allo stesso alloggio, non è garantita una camera familiare o la stessa camera.",
      "pt": "Se casais ou famílias desejarem ficar juntos, inscrevam-nos no mesmo grupo. Por regra, os participantes do mesmo grupo são atribuídos ao mesmo alojamento.\nNo entanto, as atribuições são feitas de acordo com a capacidade global de alojamento e os critérios operacionais, pelo que lamentamos não poder atender a pedidos individuais de alojamento. Mesmo quando atribuídos ao mesmo alojamento, não é garantido um quarto familiar ou o mesmo quarto."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자 패키지에는 어떤 형태의 숙박시설이 제공되며, 참가자가 침낭 등 별도로 준비해야 할 물품은 무엇인가요? 또한 예상 인원을 초과할 경우 추가 숙소는 어떻게 확보할 예정인가요?",
      "en": "What kind of accommodation is provided in the pilgrim packages, and what must participants bring themselves, such as sleeping bags? And if numbers exceed expectations, how will additional accommodation be secured?",
      "es": "¿Qué tipo de alojamiento se ofrece en los paquetes del peregrino y qué deben llevar los participantes, como sacos de dormir? Y si el número de participantes supera lo previsto, ¿cómo se conseguirá alojamiento adicional?",
      "fr": "Quel type d'hébergement les forfaits du pèlerin prévoient-ils, et que doivent apporter les participants eux-mêmes, comme un sac de couchage ? Et si les effectifs dépassent les prévisions, comment des hébergements supplémentaires seront-ils trouvés ?",
      "it": "Che tipo di alloggio è previsto nei pacchetti del pellegrino, e cosa devono portare i partecipanti, come i sacchi a pelo? E se i numeri superano le previsioni, come saranno reperiti alloggi aggiuntivi?",
      "pt": "Que tipo de alojamento está incluído nos pacotes do peregrino, e o que devem os participantes levar, como sacos-cama? E se o número de participantes ultrapassar as previsões, como será assegurado alojamento adicional?"
    },
    "a": {
      "ko": "패키지에 포함된 숙박 유형은 본당· 학교·공공시설 등을 활용한 공동 숙소와 홈스테이 형태로 제공됩니다.\n침구는 별도로 제공되지 않으므로, 참가자는 본인의 침낭 등 개인 침구를 직접 준비해 주시기 바랍니다. 조직위원회에서는 예상 인원을 초가할 경우를 대비하여 일정 정도의 예비 숙소를 확보하고자 노력하고 있습니다.\n그러나 숙소 포함 패키지 마감일(2027년 5월 31일) 이후에는 추가되는 인원에 대해서는 조직위에서 숙소를 제공해 드리기 어려운 점을 이해해 주시기 바랍니다.",
      "en": "The accommodation in the packages is provided as shared accommodation in parishes, schools, and public facilities, or as homestays.\nBedding is not provided, so participants should bring their own, such as a sleeping bag. The LOC is working to secure a certain amount of reserve accommodation in case numbers exceed expectations.\nPlease understand, however, that after the deadline for packages with accommodation (May 31, 2027), the LOC will not be able to provide accommodation for additional participants.",
      "es": "El alojamiento de los paquetes se ofrece como alojamiento compartido en parroquias, escuelas e instalaciones públicas, o como alojamiento en familias.\nNo se proporciona ropa de cama, por lo que los participantes deben llevar la suya, como un saco de dormir. El COL está trabajando para reservar cierta cantidad de alojamiento de reserva por si el número de participantes supera lo previsto.\nSin embargo, les rogamos que comprendan que, después de la fecha límite de los paquetes con alojamiento (31 de mayo de 2027), el COL no podrá ofrecer alojamiento a los participantes adicionales.",
      "fr": "L'hébergement des forfaits est proposé sous forme d'hébergement collectif dans des paroisses, des écoles et des équipements publics, ou d'hébergement en famille.\nLa literie n'est pas fournie ; les participants doivent donc apporter la leur, par exemple un sac de couchage. Le COL s'efforce de réserver un certain volume d'hébergements de réserve au cas où les effectifs dépasseraient les prévisions.\nNous vous prions toutefois de comprendre qu'après la date limite des forfaits avec hébergement (31 mai 2027), le COL ne pourra pas fournir d'hébergement aux participants supplémentaires.",
      "it": "L'alloggio nei pacchetti è fornito come alloggio condiviso in parrocchie, scuole e strutture pubbliche, oppure come alloggio in famiglia.\nLa biancheria da letto non è fornita; i partecipanti devono quindi portare la propria, ad esempio un sacco a pelo. Il COL si sta adoperando per reperire una certa quantità di alloggi di riserva nel caso in cui i numeri superino le previsioni.\nVi preghiamo però di comprendere che, dopo la scadenza per i pacchetti con alloggio (31 maggio 2027), il COL non potrà fornire alloggio ai partecipanti aggiuntivi.",
      "pt": "O alojamento dos pacotes é disponibilizado como alojamento partilhado em paróquias, escolas e instalações públicas, ou como alojamento em família.\nNão é fornecida roupa de cama, pelo que os participantes devem levar a sua, como um saco-cama. O COL está a trabalhar para garantir uma certa quantidade de alojamento de reserva, caso o número de participantes ultrapasse as previsões.\nCompreendam, porém, que após o prazo dos pacotes com alojamento (31 de maio de 2027), o COL não poderá fornecer alojamento a participantes adicionais."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹이 호텔 등 자체 숙소를 마련하는 경우 조직위원회에 숙소 정보를 알려야 하나요?",
      "en": "If a group arranges its own accommodation, such as a hotel, must it inform the LOC of the accommodation details?",
      "es": "Si un grupo organiza su propio alojamiento, como un hotel, ¿debe informar al COL de los datos del alojamiento?",
      "fr": "Si un groupe organise son propre hébergement, par exemple à l'hôtel, doit-il en communiquer les détails au COL ?",
      "it": "Se un gruppo organizza autonomamente il proprio alloggio, ad esempio in hotel, deve comunicarne i dettagli al COL?",
      "pt": "Se um grupo tratar do seu próprio alojamento, como um hotel, tem de informar o COL dos pormenores do alojamento?"
    },
    "a": {
      "ko": "등록 시, 자체적으로 마련한 숙소의 정보를 기재하는 란이 있습니다.\n단, 이는 참고를 위해 기재를 요청드리며 의무 기재 사항은 아닙니다.",
      "en": "At registration there is a field for entering details of accommodation you have arranged yourselves.\nThis is requested for reference only and is not mandatory.",
      "es": "En la inscripción hay un campo para indicar los datos del alojamiento que hayan organizado por su cuenta.\nSe solicita solo como referencia y no es obligatorio.",
      "fr": "Lors de l'inscription, un champ permet de saisir les informations sur l'hébergement que vous avez organisé vous-mêmes.\nCes informations sont demandées à titre indicatif et ne sont pas obligatoires.",
      "it": "Al momento dell'iscrizione c'è un campo per inserire i dettagli dell'alloggio organizzato autonomamente.\nQuesta informazione è richiesta solo a titolo di riferimento e non è obbligatoria.",
      "pt": "Na inscrição há um campo para indicar os pormenores do alojamento que vocês próprios organizaram.\nEsta informação é pedida apenas como referência e não é obrigatória."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "그룹 리더가 WYD 전에 배정된 숙소를 미리 방문하거나 확인할 수 있나요? 또한 실제 숙소가 사전에 안내된 시설 및 조건과 다른 경우 숙소 변경을 요청할 수 있으며, 그 절차는 어떻게 되나요?",
      "en": "Can group leaders visit or check their assigned accommodation before WYD? And if the actual accommodation differs from the facilities and conditions announced in advance, can we request a change, and what is the procedure?",
      "es": "¿Pueden los líderes de grupo visitar o comprobar el alojamiento asignado antes de la JMJ? Y si el alojamiento real difiere de las instalaciones y condiciones anunciadas, ¿podemos pedir un cambio? ¿Cuál es el procedimiento?",
      "fr": "Les responsables de groupe peuvent-ils visiter ou vérifier leur hébergement attribué avant les JMJ ? Et si l'hébergement réel diffère des équipements et conditions annoncés, pouvons-nous demander un changement, et selon quelle procédure ?",
      "it": "I responsabili di gruppo possono visitare o controllare l'alloggio assegnato prima della GMG? E se l'alloggio effettivo differisce dalle strutture e dalle condizioni annunciate in anticipo, possiamo chiedere un cambio, e qual è la procedura?",
      "pt": "Os responsáveis de grupo podem visitar ou verificar o alojamento atribuído antes da JMJ? E se o alojamento efetivo for diferente das instalações e condições anunciadas previamente, podemos pedir uma alteração, e qual é o procedimento?"
    },
    "a": {
      "ko": "대회 전 숙소가 배정되었다 하더라도, 숙소가 공공기관일 경우는 방문이 어려울 수 있습니다. 다만 체크인을 할 본당과 배정받은 숙소의 위치 정도는 확인하실 수는 있습니다. 하지만 역대 대회들을 보았을 때 숙소는 워낙 많은 변수가 존재하기에, 배정 이후에도 발생할 수 있는 여러 상황을 염두에 두시면 좋겠습니다. 숙소 변경을 요청할 수는 있으나, 사유 검토 후 필요시에만 변경 절차가 진행될 예정입니다.",
      "en": "Even once accommodation has been assigned before the event, it may be difficult to visit if it is a public facility. You can, however, check the location of the parish where you will check in and of your assigned accommodation. Past editions have shown that accommodation is subject to a great many variables, so please bear in mind that various situations may arise even after assignment. You may request a change of accommodation, but the change procedure will go ahead only where necessary, after the reason has been reviewed.",
      "es": "Aunque el alojamiento se haya asignado antes del evento, puede ser difícil visitarlo si es una instalación pública. No obstante, pueden comprobar la ubicación de la parroquia donde se acreditarán y de su alojamiento asignado. La experiencia de ediciones anteriores muestra que el alojamiento está sujeto a muchísimas variables, por lo que les rogamos que tengan presente que pueden surgir diversas situaciones incluso después de la asignación. Pueden solicitar un cambio de alojamiento, pero el procedimiento de cambio solo se llevará a cabo cuando sea necesario, tras revisar el motivo.",
      "fr": "Même si l'hébergement a été attribué avant l'événement, il peut être difficile de le visiter s'il s'agit d'un équipement public. Vous pourrez toutefois vérifier l'emplacement de la paroisse où vous serez accrédités et de votre hébergement attribué. Les éditions précédentes ont montré que l'hébergement est soumis à de très nombreuses variables ; gardez donc à l'esprit que diverses situations peuvent survenir même après l'attribution. Vous pouvez demander un changement d'hébergement, mais la procédure de changement ne sera engagée que si nécessaire, après examen du motif.",
      "it": "Anche quando l'alloggio è stato assegnato prima dell'evento, potrebbe essere difficile visitarlo se si tratta di una struttura pubblica. Potete però verificare la posizione della parrocchia in cui farete il check-in e dell'alloggio assegnato. Le edizioni passate hanno dimostrato che gli alloggi sono soggetti a moltissime variabili; tenete quindi presente che possono verificarsi diverse situazioni anche dopo l'assegnazione. Potete chiedere un cambio di alloggio, ma la procedura di cambio sarà avviata solo se necessario, dopo aver esaminato il motivo.",
      "pt": "Mesmo depois de o alojamento ter sido atribuído antes do evento, poderá ser difícil visitá-lo se for uma instalação pública. Podem, no entanto, verificar a localização da paróquia onde farão o check-in e do alojamento atribuído. As edições anteriores mostraram que o alojamento está sujeito a muitíssimas variáveis; tenham, por isso, em conta que podem surgir várias situações mesmo após a atribuição. Podem pedir uma alteração de alojamento, mas o procedimento de alteração só avançará se for necessário, depois de analisado o motivo."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "숙소는 서울 내에 배정되나요, 아니면 서울 외 지역에도 배정될 수 있나요? 주요 WYD 행사장 및 대중교통과의 접근성은 어떻게 고려되며, 각 그룹은 배정된 숙소와 담당 본당의 위치를 언제, 어떤 방식으로 안내받을 수 있나요?",
      "en": "Will accommodation be assigned within Seoul, or may it also be outside Seoul? How will access to the main WYD venues and public transport be taken into account, and when and how will each group be told the location of its assigned accommodation and host parish?",
      "es": "¿El alojamiento se asignará dentro de Seúl o también puede estar fuera de Seúl? ¿Cómo se tendrá en cuenta el acceso a los lugares principales de la JMJ y al transporte público, y cuándo y cómo se informará a cada grupo de la ubicación de su alojamiento asignado y de su parroquia de acogida?",
      "fr": "L'hébergement sera-t-il attribué à Séoul, ou peut-il aussi se trouver en dehors de Séoul ? Comment l'accès aux principaux sites des JMJ et aux transports en commun sera-t-il pris en compte, et quand et comment chaque groupe sera-t-il informé de l'emplacement de son hébergement et de sa paroisse d'accueil ?",
      "it": "Gli alloggi saranno assegnati a Seoul, o potranno trovarsi anche fuori Seoul? Come si terrà conto dell'accesso alle sedi principali della GMG e ai mezzi pubblici, e quando e come ciascun gruppo saprà dove si trovano l'alloggio assegnato e la parrocchia ospitante?",
      "pt": "O alojamento será atribuído em Seul, ou poderá ser também fora de Seul? Como serão tidos em conta o acesso aos principais locais da JMJ e aos transportes públicos, e quando e como será cada grupo informado da localização do alojamento atribuído e da paróquia de acolhimento?"
    },
    "a": {
      "ko": "대부분의 숙소는 서울 내부에 있을 것입니다. 다만 경우에 따라 외곽에 위치한 숙소도 있을 수 있습니다. 외곽일지라도 대중교통을 이용하여 서울로 이동이 가능한 장소로 고려할 예정입니다.\n배정 결과는 대회 약 1개월 전 시점 부터 순차적으로 받게되며, 메일로 발송될 예정입니다.",
      "en": "Most accommodation will be within Seoul, though in some cases accommodation may be on the outskirts. Even then, we will consider places from which Seoul can be reached by public transport.\nAssignment results will be sent out by email, in stages, from about one month before the event.",
      "es": "La mayoría de los alojamientos estarán dentro de Seúl, aunque en algunos casos pueden estar en las afueras. Incluso en ese caso, se tendrán en cuenta lugares desde los que se pueda llegar a Seúl en transporte público.\nLos resultados de la asignación se enviarán por correo electrónico, de forma escalonada, a partir de aproximadamente un mes antes del evento.",
      "fr": "La plupart des hébergements seront situés à Séoul, mais certains pourront se trouver en périphérie. Même dans ce cas, nous retiendrons des lieux d'où l'on peut rejoindre Séoul en transports en commun.\nLes résultats des attributions seront envoyés par courriel, progressivement, à partir d'environ un mois avant l'événement.",
      "it": "La maggior parte degli alloggi sarà a Seoul, anche se in alcuni casi potrebbe trovarsi in periferia. Anche in questo caso considereremo luoghi da cui Seoul sia raggiungibile con i mezzi pubblici.\nI risultati delle assegnazioni saranno inviati per e-mail, per fasi, a partire da circa un mese prima dell'evento.",
      "pt": "A maior parte do alojamento será em Seul, embora em alguns casos possa ser na periferia. Mesmo nesse caso, teremos em conta locais a partir dos quais Seul seja acessível de transportes públicos.\nOs resultados das atribuições serão enviados por e-mail, por fases, a partir de cerca de um mês antes do evento."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "요즘 여러 그룹들이 항공권 예매를 시작했는데, 1일부터 10일까지의 숙박을 요청할 수 있는지 문의가 많습니다. 가능하다면 어떻게 신청하나요?",
      "en": "Many groups have started booking flights, and we are getting many questions about whether accommodation can be requested from the 1st to the 10th. If so, how do we apply?",
      "es": "Muchos grupos han empezado a reservar vuelos y recibimos muchas consultas sobre si se puede solicitar alojamiento del 1 al 10. Si es así, ¿cómo se solicita?",
      "fr": "Beaucoup de groupes ont commencé à réserver leurs vols, et nous recevons de nombreuses questions pour savoir si l'on peut demander un hébergement du 1er au 10. Si oui, comment faire la demande ?",
      "it": "Molti gruppi hanno iniziato a prenotare i voli, e riceviamo molte domande sulla possibilità di richiedere l'alloggio dall'1 al 10. Se è possibile, come si fa domanda?",
      "pt": "Muitos grupos começaram a reservar voos, e recebemos muitas perguntas sobre se é possível pedir alojamento de 1 a 10. Se for possível, como se faz o pedido?"
    },
    "a": {
      "ko": "패키지의 종류에 따라 일정이 상이합니다. 8/1-10까지의 투숙 가능 패키지는 없습니다. A1은 8/2-9 이며, A1+1은 8/1-8/9 또는 8/2-8/10 로 나뉘어져 있으니 참고 부탁드립니다.",
      "en": "The dates depend on the type of package. No package offers accommodation from August 1 to August 10. Please note that A1 runs from August 2 to 9, and A1+1 is split into August 1–9 or August 2–10.",
      "es": "Las fechas dependen del tipo de paquete. Ningún paquete ofrece alojamiento del 1 al 10 de agosto. Tengan en cuenta que el A1 va del 2 al 9 de agosto, y el A1+1 se divide en del 1 al 9 de agosto o del 2 al 10 de agosto.",
      "fr": "Les dates dépendent du type de forfait. Aucun forfait ne propose d'hébergement du 1er au 10 août. Pour information, le forfait A1 va du 2 au 9 août, et le forfait A1+1 se décline en du 1er au 9 août ou du 2 au 10 août.",
      "it": "Le date dipendono dal tipo di pacchetto. Nessun pacchetto offre l'alloggio dal 1° al 10 agosto. Tenete presente che A1 va dal 2 al 9 agosto, e A1+1 si divide in 1–9 agosto o 2–10 agosto.",
      "pt": "As datas dependem do tipo de pacote. Nenhum pacote oferece alojamento de 1 a 10 de agosto. Tenham em atenção que o A1 vai de 2 a 9 de agosto, e o A1+1 divide-se em 1–9 de agosto ou 2–10 de agosto."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "숙소 및 담당 본당은 어떤 기준으로 배정되나요? 등록 시 숙박 옵션이나 특정 본당을 선택할 수 있는지, 또는 선착순으로 배정되는지도 궁금합니다.",
      "en": "On what basis are accommodation and host parishes assigned? Can we choose an accommodation option or a particular parish at registration, or is it first come, first served?",
      "es": "¿Con qué criterio se asignan el alojamiento y las parroquias de acogida? ¿Podemos elegir una opción de alojamiento o una parroquia concreta al inscribirnos, o se asigna por orden de llegada?",
      "fr": "Selon quels critères l'hébergement et les paroisses d'accueil sont-ils attribués ? Peut-on choisir une option d'hébergement ou une paroisse précise lors de l'inscription, ou l'attribution se fait-elle selon l'ordre d'arrivée ?",
      "it": "Con quali criteri vengono assegnati gli alloggi e le parrocchie ospitanti? Possiamo scegliere un tipo di alloggio o una determinata parrocchia al momento dell'iscrizione, oppure vale l'ordine di arrivo?",
      "pt": "Com que critérios são atribuídos o alojamento e as paróquias de acolhimento? Podemos escolher um tipo de alojamento ou uma determinada paróquia na inscrição, ou é por ordem de chegada?"
    },
    "a": {
      "ko": "순례자들은 사전에 특정 숙소 유형 및 본당을 선택할 수 없으며, 숙소 배정은 전반적인 운영 상황과 수용 인원에 따라 결정됩니다. 숙소 배정은 선착순으로 진행되지 않습니다. 다만, 등록 및 결제를 모두 완료한 그룹의 경우, 배정을 위한 정보 확인 및 절차가 원활하게 진행될 수 있으므로 가능한 한 빠른 시일 내에 등록과 결제를 완료해 주시기를 권장드립니다.",
      "en": "Pilgrims cannot choose a particular type of accommodation or parish in advance; accommodation assignments are decided according to the overall operating situation and capacity. Accommodation is not assigned on a first-come, first-served basis. However, for groups that have completed both registration and payment, the information checks and procedures for assignment can proceed more smoothly, so we recommend completing registration and payment as early as possible.",
      "es": "Los peregrinos no pueden elegir de antemano un tipo de alojamiento ni una parroquia concreta; la asignación del alojamiento se decide según la situación general de funcionamiento y la capacidad. El alojamiento no se asigna por orden de llegada. No obstante, en el caso de los grupos que han completado tanto la inscripción como el pago, la verificación de datos y los trámites de asignación pueden avanzar con mayor fluidez, por lo que recomendamos completar la inscripción y el pago lo antes posible.",
      "fr": "Les pèlerins ne peuvent pas choisir à l'avance un type d'hébergement ou une paroisse précise ; l'attribution de l'hébergement est décidée selon la situation générale et les capacités d'accueil. L'hébergement n'est pas attribué selon l'ordre d'arrivée. Toutefois, pour les groupes qui ont finalisé à la fois l'inscription et le paiement, la vérification des informations et les démarches d'attribution peuvent se dérouler plus facilement ; nous recommandons donc de finaliser l'inscription et le paiement le plus tôt possible.",
      "it": "I pellegrini non possono scegliere in anticipo un determinato tipo di alloggio o una parrocchia; le assegnazioni degli alloggi sono decise in base alla situazione operativa complessiva e alla capacità. Gli alloggi non vengono assegnati in ordine di arrivo. Tuttavia, per i gruppi che hanno completato sia l'iscrizione sia il pagamento, le verifiche dei dati e le procedure di assegnazione possono svolgersi più agevolmente; vi consigliamo quindi di completare iscrizione e pagamento il prima possibile.",
      "pt": "Os peregrinos não podem escolher previamente um determinado tipo de alojamento ou paróquia; as atribuições de alojamento são decididas de acordo com a situação operacional global e a capacidade. O alojamento não é atribuído por ordem de chegada. No entanto, para os grupos que concluíram a inscrição e o pagamento, as verificações de dados e os procedimentos de atribuição podem decorrer com mais facilidade; recomendamos, por isso, que concluam a inscrição e o pagamento o mais cedo possível."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "두 개의 다른 그룹도 요청 시 같은 숙소에 배정받을 수 있는지 궁금합니다.",
      "en": "Can two different groups be assigned to the same accommodation on request?",
      "es": "¿Pueden dos grupos distintos ser asignados al mismo alojamiento si lo solicitan?",
      "fr": "Deux groupes différents peuvent-ils être affectés au même hébergement s'ils le demandent ?",
      "it": "Due gruppi diversi possono essere assegnati allo stesso alloggio su richiesta?",
      "pt": "Dois grupos diferentes podem ser atribuídos ao mesmo alojamento, a pedido?"
    },
    "a": {
      "ko": "그룹이 다를 경우, 동일 숙소 배정이 어려울 수 있으니 양해 부탁드립니다. 등록 후 해당 요청 사항을 조직위원회로 전달하여 주시면 도움드릴 수 있도록 노력하겠습니다.",
      "en": "Please understand that it may be difficult to assign different groups to the same accommodation. If you pass on this request to the LOC after registering, we will do our best to help.",
      "es": "Les rogamos que comprendan que puede ser difícil asignar el mismo alojamiento a grupos distintos. Si después de inscribirse transmiten esta solicitud al COL, haremos todo lo posible por ayudarles.",
      "fr": "Nous vous remercions de votre compréhension : il peut être difficile d'affecter des groupes différents au même hébergement. Si vous transmettez cette demande au COL après votre inscription, nous ferons de notre mieux pour vous aider.",
      "it": "Vi preghiamo di comprendere che potrebbe essere difficile assegnare gruppi diversi allo stesso alloggio. Se dopo l'iscrizione trasmettete questa richiesta al COL, faremo del nostro meglio per aiutarvi.",
      "pt": "Compreendam que poderá ser difícil atribuir grupos diferentes ao mesmo alojamento. Se transmitirem este pedido ao COL depois de se inscreverem, faremos o possível para ajudar."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "저희 그룹에는 영어, 프랑스어, 스페인어를 사용하는 참가자들이 있습니다. 그룹 참가자들이 언어별로 나뉘게 되나요, 아니면 숙소는 함께 지낼 수 있나요?",
      "en": "Our group has English-, French- and Spanish-speaking participants. Will the group be split by language, or can we stay together?",
      "es": "Nuestro grupo tiene participantes de habla inglesa, francesa y española. ¿Se dividirá el grupo por idiomas o podremos alojarnos juntos?",
      "fr": "Notre groupe compte des participants anglophones, francophones et hispanophones. Le groupe sera-t-il réparti par langue, ou pourrons-nous loger ensemble ?",
      "it": "Il nostro gruppo ha partecipanti di lingua inglese, francese e spagnola. Il gruppo sarà diviso per lingua, o possiamo restare insieme?",
      "pt": "O nosso grupo tem participantes de língua inglesa, francesa e espanhola. O grupo será dividido por língua, ou podemos ficar juntos?"
    },
    "a": {
      "ko": "동일 그룹은 동일 숙소에 배정하는 것을 원칙으로 합니다. 같은 숙소에 배정되시길 원하신다면 등록시 같은 그룹으로 등록을 부탁드립니다. 다만, 운영 상황과 수용 인원에 따라 불가피하게 동일 그룹이어도 다른 숙소에 배정될 수 있습니다. 이 경우는 최대한 인접한 숙소로 배정됩니다.",
      "en": "As a rule, the same group is assigned to the same accommodation. If you wish to be assigned to the same accommodation, please register as one group. Depending on the operating situation and capacity, however, members of the same group may unavoidably be assigned to different accommodation. In that case they will be assigned to accommodation as close together as possible.",
      "es": "Por norma general, un mismo grupo se asigna a un mismo alojamiento. Si desean que se les asigne el mismo alojamiento, inscríbanse como un solo grupo. No obstante, según la situación de funcionamiento y la capacidad, los miembros de un mismo grupo pueden ser asignados inevitablemente a alojamientos distintos. En ese caso, se les asignarán alojamientos lo más cercanos posible entre sí.",
      "fr": "En règle générale, un même groupe est affecté au même hébergement. Si vous souhaitez être affectés au même hébergement, inscrivez-vous comme un seul groupe. Selon la situation et les capacités d'accueil, les membres d'un même groupe peuvent toutefois, inévitablement, être affectés à des hébergements différents. Dans ce cas, ils seront affectés à des hébergements aussi proches que possible les uns des autres.",
      "it": "Di regola, lo stesso gruppo viene assegnato allo stesso alloggio. Se desiderate essere assegnati allo stesso alloggio, iscrivetevi come un unico gruppo. A seconda della situazione operativa e della capacità, però, i membri dello stesso gruppo potrebbero inevitabilmente essere assegnati ad alloggi diversi. In tal caso saranno assegnati ad alloggi il più possibile vicini tra loro.",
      "pt": "Por regra, o mesmo grupo é atribuído ao mesmo alojamento. Se desejarem ficar no mesmo alojamento, inscrevam-se como um único grupo. Consoante a situação operacional e a capacidade, porém, os membros do mesmo grupo poderão inevitavelmente ser atribuídos a alojamentos diferentes. Nesse caso, serão atribuídos a alojamentos o mais próximos possível uns dos outros."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "행사 후에도 홈스테이 숙소가 여전히 이용 가능한가요, 아니면 주로 성당이나 체육관 같은 시설에서 숙박하게 되나요? 교통편 제약으로 100명 그룹을 2~3개 항공편으로 나눠야 할 수도 있는데, 이 경우 일부는 8월 2일 이전에 도착하게 됩니다. 이럴 때 절차는 어떻게 되나요? 그룹에 배정된 숙소로 그대로 받아들여지나요?",
      "en": "Will homestay accommodation still be available after the event, or will we mainly stay in facilities such as churches or gyms?\n\nBecause of transport constraints we may have to split a group of 100 across two or three flights, which means some will arrive before August. What is the procedure in that case? Will they be accepted at the accommodation assigned to the group?",
      "es": "¿Seguirá habiendo alojamiento en familias después del evento, o nos alojaremos principalmente en instalaciones como iglesias o polideportivos?\n\nPor limitaciones de transporte, puede que tengamos que dividir un grupo de 100 personas en dos o tres vuelos, lo que significa que algunos llegarán antes de agosto. ¿Cuál es el procedimiento en ese caso? ¿Se les acogerá en el alojamiento asignado al grupo?",
      "fr": "L'hébergement en famille sera-t-il encore disponible après l'événement, ou logerons-nous principalement dans des lieux comme des églises ou des gymnases ?\n\nEn raison de contraintes de transport, nous devrons peut-être répartir un groupe de 100 personnes sur deux ou trois vols, ce qui signifie que certains arriveront avant août. Quelle est la procédure dans ce cas ? Seront-ils accueillis dans l'hébergement attribué au groupe ?",
      "it": "L'alloggio in famiglia sarà ancora disponibile dopo l'evento, o alloggeremo principalmente in strutture come chiese o palestre?\n\nA causa dei vincoli di trasporto potremmo dover dividere un gruppo di 100 persone su due o tre voli, e quindi alcuni arriveranno prima di agosto. Qual è la procedura in questo caso? Saranno accolti nell'alloggio assegnato al gruppo?",
      "pt": "O alojamento em família continuará disponível depois do evento, ou ficaremos sobretudo em instalações como igrejas ou pavilhões?\n\nDevido a limitações de transporte, poderemos ter de dividir um grupo de 100 pessoas por dois ou três voos, o que significa que alguns chegarão antes de agosto. Qual é o procedimento nesse caso? Serão aceites no alojamento atribuído ao grupo?"
    },
    "a": {
      "ko": "선택하신 패키지에 따라 투숙일정이 정해집니다.\n패키지에 포함되지 않은 일정에 숙박이 필요하신 경우에는 자체적으로 숙소를 마련하셔야 합니다.",
      "en": "Your accommodation dates are set by the package you choose.\nIf you need accommodation for dates not included in your package, you must arrange it yourselves.",
      "es": "Las fechas de su alojamiento las determina el paquete que elijan.\nSi necesitan alojamiento en fechas no incluidas en su paquete, deben organizarlo por su cuenta.",
      "fr": "Vos dates d'hébergement sont fixées par le forfait que vous choisissez.\nSi vous avez besoin d'un hébergement pour des dates non comprises dans votre forfait, vous devez l'organiser vous-mêmes.",
      "it": "Le date del vostro alloggio sono stabilite dal pacchetto che scegliete.\nSe avete bisogno di alloggio per date non incluse nel vostro pacchetto, dovete organizzarlo autonomamente.",
      "pt": "As datas do vosso alojamento são definidas pelo pacote que escolherem.\nSe precisarem de alojamento para datas não incluídas no vosso pacote, têm de o organizar por conta própria."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "8/2 월요일 저녁에는 어디에 묵나요? 교구에서 묵나요, 아니면 이미 서울에 있나요?",
      "en": "Where do we stay on the evening of Monday, August 2? In the dioceses, or already in Seoul?",
      "es": "¿Dónde nos alojamos la noche del lunes 2 de agosto? ¿En las diócesis o ya en Seúl?",
      "fr": "Où logeons-nous le soir du lundi 2 août ? Dans les diocèses, ou déjà à Séoul ?",
      "it": "Dove alloggiamo la sera di lunedì 2 agosto? Nelle diocesi, o già a Seoul?",
      "pt": "Onde ficamos na noite de segunda-feira, 2 de agosto? Nas dioceses, ou já em Seul?"
    },
    "a": {
      "ko": "선택하신 패키지의 일정에 따라 숙박 일정이 정해집니다.\n예를 들어 A1패키지는 8/2-9 일정이므로 8/2에는 서울 내의 장소에서 투숙하시게 됩니다.",
      "en": "Your accommodation dates follow the dates of the package you choose.\nFor example, the A1 package runs from August 2 to 9, so on August 2 you will stay at a location in Seoul.",
      "es": "Las fechas de su alojamiento siguen las fechas del paquete que elijan.\nPor ejemplo, el paquete A1 va del 2 al 9 de agosto, por lo que el 2 de agosto se alojarán en un lugar de Seúl.",
      "fr": "Vos dates d'hébergement suivent les dates du forfait que vous choisissez.\nPar exemple, le forfait A1 va du 2 au 9 août ; le 2 août, vous logerez donc dans un lieu situé à Séoul.",
      "it": "Le date del vostro alloggio seguono le date del pacchetto che scegliete.\nAd esempio, il pacchetto A1 va dal 2 al 9 agosto, quindi il 2 agosto alloggerete in una struttura a Seoul.",
      "pt": "As datas do vosso alojamento seguem as datas do pacote que escolherem.\nPor exemplo, o pacote A1 vai de 2 a 9 de agosto, pelo que, a 2 de agosto, ficarão num local em Seul."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "폭염으로 인한 열사병·탈진·질병 등으로 낮 시간에 휴식이 필요한 순례자는 숙소나 별도의 휴식 공간을 이용할 수 있나요? 또한 폐막 미사 이후에도 필요한 경우 숙소를 이용할 수 있나요?",
      "en": "Can pilgrims who need to rest during the day because of heatstroke, exhaustion or illness caused by the heat wave use their accommodation or a separate rest area? And can the accommodation be used after the Closing Mass if needed?",
      "es": "¿Pueden los peregrinos que necesiten descansar durante el día por golpe de calor, agotamiento o enfermedad debidos a la ola de calor usar su alojamiento o una zona de descanso aparte? ¿Y se puede usar el alojamiento después de la Misa de Clausura si es necesario?",
      "fr": "Les pèlerins qui ont besoin de se reposer pendant la journée à cause d'un coup de chaleur, d'un épuisement ou d'une maladie liés à la canicule peuvent-ils utiliser leur hébergement ou un espace de repos séparé ? Et peut-on utiliser l'hébergement après la Messe de clôture si nécessaire ?",
      "it": "I pellegrini che hanno bisogno di riposare durante il giorno per colpo di calore, spossatezza o malori dovuti all'ondata di caldo possono usare il proprio alloggio o un'area di riposo separata? E l'alloggio può essere usato dopo la Messa di chiusura, se necessario?",
      "pt": "Os peregrinos que precisem de descansar durante o dia devido a insolação, exaustão ou doença causada pela onda de calor podem usar o seu alojamento ou uma zona de descanso separada? E o alojamento pode ser usado depois da Missa de Encerramento, se necessário?"
    },
    "a": {
      "ko": "본대회 기간 동안 폭염이나 건강 이상으로 낮 시간에 휴식이 필요한 경우, 지구위원회에서 각 지구별로 지정한 거점 본당을 휴식처로 이용하실 수 있습니다. 순례자들은 해당 거점 본당으로 이동하여 휴식을 취하실 수 있습니다.\n또한, 폐막미사 이후에도 머물 수 있는 옵션이 포함된 패키지를 선택하신 경우 숙소를 이용하실 수 있습니다.",
      "en": "During the Main Event, pilgrims who need to rest during the day because of the heat or a health problem can go to the hub parish designated by the Forane Organizing Committee in each deanery.\n\nPilgrims whose package includes the option to stay after the Closing Mass can also rest at their accommodation.",
      "es": "Durante el Evento Principal, los peregrinos que necesiten descansar durante el día por el calor o por un problema de salud pueden acudir a la parroquia de referencia designada por el Comité Organizador Foráneo en cada arciprestazgo.\n\nLos peregrinos cuyo paquete incluya la opción de quedarse después de la Misa de Clausura también pueden descansar en su alojamiento.",
      "fr": "Pendant l'Événement principal, les pèlerins qui ont besoin de se reposer pendant la journée à cause de la chaleur ou d'un problème de santé peuvent se rendre dans la paroisse relais désignée par le Comité d'organisation forain dans chaque doyenné.\n\nLes pèlerins dont le forfait comprend l'option de rester après la Messe de clôture peuvent aussi se reposer dans leur hébergement.",
      "it": "Durante l'Evento principale, i pellegrini che hanno bisogno di riposare durante il giorno a causa del caldo o di un problema di salute possono recarsi nella parrocchia di riferimento indicata dal Comitato organizzatore foraniale di ciascun vicariato.\n\nI pellegrini il cui pacchetto include l'opzione di soggiorno dopo la Messa di chiusura possono riposare anche nel proprio alloggio.",
      "pt": "Durante o Evento Principal, os peregrinos que precisem de descansar durante o dia devido ao calor ou a um problema de saúde podem dirigir-se à paróquia de referência designada pelo Comité Organizador Vicarial de cada vicariato.\n\nOs peregrinos cujo pacote inclua a opção de estadia após a Missa de Encerramento também podem descansar no seu alojamento."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "패키지 관련하여, 저희 그룹이 숙박과 교통 없이 참가할 수 있나요? 가능하다면 비용은 얼마인가요? 대부분의 패키지에 교통이 포함되어 있는데, 이러한 서비스가 제외된 옵션이 있는지 궁금합니다. 감사합니다.",
      "en": "Regarding packages, can our group take part without accommodation and transport? If so, how much does it cost? Most packages include transport, and we wonder whether there is an option without these services. Thank you.",
      "es": "En cuanto a los paquetes, ¿puede nuestro grupo participar sin alojamiento ni transporte? Si es así, ¿cuánto cuesta? La mayoría de los paquetes incluyen transporte y nos preguntamos si existe una opción sin estos servicios. Gracias.",
      "fr": "Concernant les forfaits, notre groupe peut-il participer sans hébergement ni transport ? Si oui, combien cela coûte-t-il ? La plupart des forfaits incluent le transport, et nous nous demandons s'il existe une option sans ces services. Merci.",
      "it": "Riguardo ai pacchetti, il nostro gruppo può partecipare senza alloggio e trasporti? Se sì, quanto costa? La maggior parte dei pacchetti include i trasporti, e ci chiediamo se esista un'opzione senza questi servizi. Grazie.",
      "pt": "Quanto aos pacotes, o nosso grupo pode participar sem alojamento e sem transporte? Se sim, quanto custa? A maioria dos pacotes inclui transporte, e perguntamo-nos se existe uma opção sem estes serviços. Obrigado."
    },
    "a": {
      "ko": "모든 패키지에는 교통이 포함되어 있기에 교통 제외는 불가하니 양해 부탁드립니다. 숙박이 제외된 패키지는 있으니 해당 패키지를 이용 부탁드립니다.",
      "en": "All packages include transport, so we regret that transport cannot be excluded. There are packages without accommodation, so please use one of those.",
      "es": "Todos los paquetes incluyen transporte, por lo que lamentamos que no se pueda excluir. Hay paquetes sin alojamiento; les rogamos que utilicen uno de ellos.",
      "fr": "Tous les forfaits incluent le transport ; nous regrettons donc qu'il ne puisse pas être exclu. Il existe des forfaits sans hébergement ; merci d'utiliser l'un d'eux.",
      "it": "Tutti i pacchetti includono i trasporti; ci dispiace quindi che i trasporti non possano essere esclusi. Esistono pacchetti senza alloggio: potete utilizzare uno di questi.",
      "pt": "Todos os pacotes incluem transporte, pelo que lamentamos não ser possível excluir o transporte. Existem pacotes sem alojamento; utilizem um desses."
    },
    "sub": {
      "ko": "숙소",
      "en": "Accommodation",
      "es": "Alojamiento",
      "fr": "Hébergement",
      "it": "Alloggio",
      "pt": "Alojamento"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "8월 7일 토요일의 식사는 도시락(팩박스)으로 제공되나요, 아니면 철야기도 장소로 가기 전에 카드로 결제해야 하나요?",
      "en": "Will meals on Saturday, August 7 be provided as packed boxes, or must they be paid for by card before going to the Vigil site?",
      "es": "¿Las comidas del sábado 7 de agosto se darán en cajas de comida, o hay que pagarlas con la tarjeta antes de ir al lugar de la Vigilia?",
      "fr": "Les repas du samedi 7 août seront-ils fournis sous forme de boîtes-repas, ou faut-il les payer par carte avant de se rendre sur le site de la Veillée ?",
      "it": "I pasti di sabato 7 agosto saranno forniti come pasti confezionati, o vanno pagati con la carta prima di recarsi al luogo della Veglia?",
      "pt": "As refeições de sábado, 7 de agosto, serão fornecidas em caixas, ou têm de ser pagas com o cartão antes de irmos para o local da Vigília?"
    },
    "a": {
      "ko": "패키지별 식사 구성에 따라, 밤샘기도·폐막미사 기간에는 밀박스가 제공됩니다. 밀박스는 8월 7일 중식·석식과 8월 8일 조식·중식 등 총 4끼로 구성됩니다. 밀박스가 포함된 순례자 패키지는 해당 4끼를 선불카드(Prepaid meal card)로 별도 결제하지 않고 밀박스로 제공받습니다. 구체적인 배부 시간·장소 등 현장 운영방안은 추후 안내할 예정입니다.",
      "en": "Depending on the meals in each package, meal boxes will be provided for the Vigil and Closing Mass. The meal boxes cover four meals in total: lunch and dinner on August 7, and breakfast and lunch on August 8. Pilgrim packages that include meal boxes receive these four meals as meal boxes, without paying separately with the prepaid meal card. On-site arrangements, such as specific distribution times and places, will be announced later.",
      "es": "Según las comidas de cada paquete, se entregarán cajas de comida para la Vigilia y la Misa de Clausura. Las cajas de comida cubren cuatro comidas en total: almuerzo y cena del 7 de agosto, y desayuno y almuerzo del 8 de agosto. Los paquetes del peregrino que incluyen cajas de comida reciben estas cuatro comidas en cajas, sin pagarlas aparte con la tarjeta prepago de comidas. Los detalles sobre el terreno, como los horarios y lugares concretos de reparto, se anunciarán más adelante.",
      "fr": "Selon les repas prévus dans chaque forfait, des boîtes-repas seront fournies pour la Veillée et la Messe de clôture. Elles couvrent quatre repas au total : le déjeuner et le dîner du 7 août, puis le petit-déjeuner et le déjeuner du 8 août. Les forfaits du pèlerin qui incluent les boîtes-repas reçoivent ces quatre repas sous forme de boîtes, sans les payer séparément avec la carte repas prépayée. Les modalités sur place, comme les horaires et lieux précis de distribution, seront communiquées ultérieurement.",
      "it": "A seconda dei pasti previsti da ciascun pacchetto, per la Veglia e la Messa di chiusura saranno forniti pasti confezionati. I pasti confezionati coprono quattro pasti in totale: pranzo e cena del 7 agosto, colazione e pranzo dell'8 agosto. I pacchetti del pellegrino che includono i pasti confezionati ricevono questi quattro pasti come pasti confezionati, senza pagare separatamente con la carta pasti prepagata. Le modalità sul posto, come orari e luoghi specifici di distribuzione, saranno comunicate in seguito.",
      "pt": "Consoante as refeições de cada pacote, serão fornecidas refeições em caixa para a Vigília e a Missa de Encerramento. As refeições em caixa cobrem quatro refeições no total: almoço e jantar de 7 de agosto, e pequeno-almoço e almoço de 8 de agosto. Os pacotes do peregrino que incluem refeições em caixa recebem estas quatro refeições em caixa, sem pagar separadamente com o cartão de refeições pré-pago. Os pormenores no local, como horários e locais específicos de distribuição, serão anunciados mais tarde."
    },
    "sub": {
      "ko": "식사",
      "en": "Meals",
      "es": "Comidas",
      "fr": "Repas",
      "it": "Pasti",
      "pt": "Refeições"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "음식 알레르기, 글루텐 불내증, 채식 등 특별한 식이 요구가 있는 순례자를 위한 식사 옵션은 어떻게 제공되나요? 도시락과 선불카드(Prepaid meal card) 이용 매장에서 땅콩, 소고기, 해산물, 새우, 채식 알레르기 유발 성분 및 식재료 정보를 확인할 수 있나요? 또한 알레르기 정보는 반드시 앱을 통해서만 등록해야 하나요, 아니면 다른 방법도 제공되나요?",
      "en": "How will meal options be provided for pilgrims with special dietary needs such as food allergies, gluten intolerance or vegetarianism? Will information on allergens and ingredients — peanuts, beef, seafood, shrimp, vegetarian allergens — be available for the packed meals and at the outlets that accept the prepaid meal card? And must allergy information be entered only through the app, or will other methods be offered?",
      "es": "¿Cómo se ofrecerán opciones de comida para peregrinos con necesidades alimentarias especiales, como alergias, intolerancia al gluten o dieta vegetariana? ¿Habrá información sobre alérgenos e ingredientes —cacahuetes, ternera, marisco, gambas, alérgenos para vegetarianos— en las comidas envasadas y en los establecimientos que aceptan la tarjeta prepago de comidas? ¿Y la información sobre alergias debe introducirse solo a través de la app, o se ofrecerán otras vías?",
      "fr": "Comment les options de repas seront-elles proposées aux pèlerins ayant des besoins alimentaires particuliers, comme des allergies, une intolérance au gluten ou un régime végétarien ? Des informations sur les allergènes et les ingrédients — arachides, bœuf, fruits de mer, crevettes, allergènes pour végétariens — seront-elles disponibles pour les repas emballés et dans les établissements acceptant la carte repas prépayée ? Et les informations sur les allergies doivent-elles être saisies uniquement via l'application, ou d'autres moyens seront-ils proposés ?",
      "it": "Come saranno garantite opzioni di pasto per i pellegrini con esigenze alimentari particolari, come allergie alimentari, intolleranza al glutine o vegetarianismo? Saranno disponibili informazioni su allergeni e ingredienti — arachidi, manzo, frutti di mare, gamberi, allergeni per vegetariani — per i pasti confezionati e nei punti che accettano la carta pasti prepagata? E le informazioni sulle allergie devono essere inserite solo tramite l'app, o saranno offerti altri metodi?",
      "pt": "Como serão asseguradas opções de refeição para peregrinos com necessidades alimentares especiais, como alergias alimentares, intolerância ao glúten ou vegetarianismo? Haverá informação sobre alergénios e ingredientes — amendoim, carne de vaca, marisco, camarão, alergénios para vegetarianos — nas refeições em caixa e nos estabelecimentos que aceitam o cartão de refeições pré-pago? E a informação sobre alergias tem de ser introduzida apenas pela app, ou serão oferecidos outros métodos?"
    },
    "a": {
      "ko": "식사에 대해서는 글루텐프리·비건 등 특수식 제공 여부와 식품정보 표시 방안을 검토하고 있습니다. 선불카드(Prepaid meal card) 이용 매장의 알레르겐·원재료 등 식품정보 제공 여부와 제공 방식도 함께 검토 중입니다. 특수식의 제공 범위와 신청 방법, 변경 가능 기한 등은 세부 운영계획이 확정되는 대로 안내할 예정입니다.",
      "en": "We are reviewing whether to provide special meals, such as gluten-free and vegan, and how to display food information. Whether and how food information such as allergens and ingredients will be provided at the outlets that accept the prepaid meal card is also under review. The range of special meals, how to apply for them and the deadline for changes will be announced once the detailed operating plan is confirmed.",
      "es": "Estamos estudiando si se ofrecerán comidas especiales, como sin gluten y veganas, y cómo mostrar la información alimentaria. También estamos estudiando si se proporcionará información alimentaria, como alérgenos e ingredientes, en los establecimientos que aceptan la tarjeta prepago de comidas y de qué forma. La gama de comidas especiales, la forma de solicitarlas y el plazo para hacer cambios se anunciarán una vez confirmado el plan detallado de funcionamiento.",
      "fr": "Nous étudions la possibilité de proposer des repas spéciaux, comme sans gluten et végans, et la manière d'afficher les informations alimentaires. Nous étudions aussi si et comment des informations alimentaires, comme les allergènes et les ingrédients, seront fournies dans les établissements acceptant la carte repas prépayée. L'éventail des repas spéciaux, la manière de les demander et la date limite de modification seront communiqués une fois le plan de fonctionnement détaillé confirmé.",
      "it": "Stiamo valutando se fornire pasti speciali, come senza glutine e vegani, e come indicare le informazioni sugli alimenti. È in fase di valutazione anche se e come saranno fornite informazioni come allergeni e ingredienti nei punti che accettano la carta pasti prepagata. La gamma di pasti speciali, le modalità di richiesta e la scadenza per le modifiche saranno comunicate una volta confermato il piano operativo dettagliato.",
      "pt": "Estamos a analisar a possibilidade de fornecer refeições especiais, como sem glúten e veganas, e a forma de apresentar a informação alimentar. Também está em análise se e como será fornecida informação como alergénios e ingredientes nos estabelecimentos que aceitam o cartão de refeições pré-pago. A oferta de refeições especiais, a forma de as pedir e o prazo para alterações serão anunciados logo que o plano operacional detalhado esteja confirmado."
    },
    "sub": {
      "ko": "식사",
      "en": "Meals",
      "es": "Comidas",
      "fr": "Repas",
      "it": "Pasti",
      "pt": "Refeições"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "순례자 패키지",
      "en": "Pilgrim Packages",
      "es": "Paquetes del peregrino",
      "fr": "Forfaits du pèlerin",
      "it": "Pacchetti del pellegrino",
      "pt": "Pacotes do peregrino"
    },
    "topicNo": "1",
    "q": {
      "ko": "WYD 기간 중 다치거나 아픈 사람을 위한 특수 이동 지원(장애인/환자 이송)이 제공되나요?",
      "en": "Will special transport (for people with disabilities or patients) be provided for those who are injured or fall ill during WYD?",
      "es": "¿Se ofrecerá transporte especial (para personas con discapacidad o enfermos) a quienes se lesionen o enfermen durante la JMJ?",
      "fr": "Un transport spécial (pour les personnes handicapées ou les malades) sera-t-il proposé à ceux qui se blessent ou tombent malades pendant les JMJ ?",
      "it": "Sarà previsto un trasporto speciale (per persone con disabilità o malati) per chi si infortuna o si ammala durante la GMG?",
      "pt": "Será disponibilizado transporte especial (para pessoas com deficiência ou doentes) para quem se magoe ou adoeça durante a JMJ?"
    },
    "a": {
      "ko": "행사장 주변에 응급차가 상시 대기할 예정이며, 주변 병원과도 연계해서 의료서비스를 제공할 계획입니다.",
      "en": "Ambulances will be on standby around the venues at all times, and we plan to provide medical services in cooperation with nearby hospitals.",
      "es": "Habrá ambulancias de guardia permanente en los alrededores de los lugares, y está previsto prestar servicios médicos en colaboración con los hospitales cercanos.",
      "fr": "Des ambulances seront en permanence en attente aux abords des sites, et nous prévoyons d'assurer les services médicaux en coopération avec les hôpitaux voisins.",
      "it": "Le ambulanze saranno sempre pronte nei pressi delle sedi, e prevediamo di fornire servizi medici in collaborazione con gli ospedali vicini.",
      "pt": "Haverá ambulâncias permanentemente de prevenção junto dos locais, e prevemos prestar serviços médicos em colaboração com hospitais próximos."
    },
    "sub": {
      "ko": "의료지원",
      "en": "Medical Support",
      "es": "Asistencia médica",
      "fr": "Assistance médicale",
      "it": "Assistenza medica",
      "pt": "Assistência médica"
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
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "세이프가딩 정책에 따르면 한국에서 미성년자 기준은 만 18세 7개월 미만인데, 저희 나라에서는 만 18세 미만입니다. 이 경우 보호자 동반 확인서(샤프론 레터)가 없을 것입니다.",
      "en": "Under the Safeguarding Policy, a minor in Korea is someone under 18 years and 7 months, whereas in our country it is someone under 18. In that case there will be no chaperone letter.",
      "es": "Según la Política de Protección, en Corea un menor es una persona de menos de 18 años y 7 meses, mientras que en nuestro país es una persona de menos de 18 años. En ese caso no habrá carta de acompañante.",
      "fr": "Selon la Politique de protection, en Corée un mineur est une personne de moins de 18 ans et 7 mois, alors que dans notre pays c'est une personne de moins de 18 ans. Dans ce cas, il n'y aura pas de lettre d'accompagnement.",
      "it": "Secondo la Politica di tutela, in Corea è minore chi ha meno di 18 anni e 7 mesi, mentre nel nostro Paese è minore chi ha meno di 18 anni. In tal caso non ci sarà alcuna lettera per l'accompagnatore.",
      "pt": "Segundo a Política de Proteção, na Coreia é menor quem tem menos de 18 anos e 7 meses, enquanto no nosso país é menor quem tem menos de 18 anos. Nesse caso, não haverá carta de acompanhante."
    },
    "a": {
      "ko": "국가별로 미성년자 기준이 다를 수 있으나, 서울 WYD 참가 시에는 ' 미성년자 및 취약 성인 보호 지침' 에 따른 기준이 적용됩니다. 해당 지침에서는 대한민국 청소년 보호법의 연령 기준을 적용하여, 2009년 1월 1일 또는 그 이후에 출생한 참가자를 미성년자로 분류하고 있습니다. 이는 성인 자격이 요구되는 순례자 그룹 대표 및 부대표, 봉사자, 미성년자 인솔자 등의 기준이 되기도 합니다. 따라서 자국에서 성인으로 인정되는 참가자라도 위 출생일 기준에 해당하면, 부모 또는 법적보호자가 동행하거나 이들로부터 위임 받은 성인 인솔자가 동행해야 합니다. 성인 인솔자는 미성년자 최대 10명당 1명 이상이 필요합니다. 위임받은 성인 인솔자는 해당 미성년자의 부모 또는 법적보호자로부터 서면 위임 동의서를 받아 대회 기간 내내 지참해야 합니다.",
      "en": "The age of minority may differ from country to country, but for WYD Seoul 2027 the criteria of the Safeguarding Policy for Minors and Vulnerable Adults apply. That policy applies the age criteria of the Republic of Korea's Juvenile Protection Act and classifies participants born on or after January 1, 2009 as minors. This is also the criterion for roles that require adult status, such as pilgrim group leaders and second group leaders, volunteers and chaperones of minors. So even a participant recognized as an adult in their own country must, if they fall within the birth-date criterion above, be accompanied by a parent or legal guardian or by an adult chaperone delegated by them. At least one adult chaperone is required for every 10 minors. Delegated adult chaperones must obtain a written delegation of consent from the minor's parent or legal guardian and carry it throughout the event.",
      "es": "La minoría de edad puede variar de un país a otro, pero para la JMJ Seúl 2027 se aplican los criterios de la Política de Protección de Menores y Adultos Vulnerables. Esta política aplica los criterios de edad de la Ley de Protección de la Juventud de la República de Corea y considera menores a los participantes nacidos el 1 de enero de 2009 o después. Este es también el criterio para las funciones que exigen ser adulto, como líderes y segundos líderes de grupos de peregrinos, voluntarios y acompañantes de menores. Así pues, incluso un participante reconocido como adulto en su propio país debe, si se encuentra dentro del criterio de fecha de nacimiento indicado, ir acompañado de su padre, madre o tutor legal, o de un acompañante adulto delegado por ellos. Se necesita al menos un acompañante adulto por cada 10 menores. Los acompañantes adultos delegados deben obtener una delegación de consentimiento por escrito del padre, madre o tutor legal del menor y llevarla consigo durante todo el evento.",
      "fr": "L'âge de la minorité peut varier d'un pays à l'autre, mais pour les JMJ Séoul 2027, ce sont les critères de la Politique de protection des mineurs et des adultes vulnérables qui s'appliquent. Cette politique applique les critères d'âge de la loi sur la protection de la jeunesse de la République de Corée et considère comme mineurs les participants nés le 1er janvier 2009 ou après. C'est aussi le critère retenu pour les fonctions exigeant la majorité, comme responsable et second responsable de groupe de pèlerins, volontaire et accompagnateur de mineurs. Ainsi, même un participant reconnu comme majeur dans son pays doit, s'il relève du critère de date de naissance ci-dessus, être accompagné d'un parent ou d'un tuteur légal, ou d'un accompagnateur adulte délégué par eux. Au moins un accompagnateur adulte est requis pour 10 mineurs. Les accompagnateurs adultes délégués doivent obtenir une délégation de consentement écrite du parent ou du tuteur légal du mineur et la garder sur eux pendant toute la durée de l'événement.",
      "it": "L'età della minore età può variare da Paese a Paese, ma per la GMG Seoul 2027 si applicano i criteri della Politica di tutela dei minori e degli adulti vulnerabili. Tale politica applica i criteri di età della Legge sulla protezione dei giovani della Repubblica di Corea e classifica come minori i partecipanti nati il 1° gennaio 2009 o successivamente. Questo è anche il criterio per i ruoli che richiedono la maggiore età, come responsabili e secondi responsabili dei gruppi di pellegrini, volontari e accompagnatori di minori. Quindi anche un partecipante riconosciuto come adulto nel proprio Paese, se rientra nel criterio di data di nascita sopra indicato, deve essere accompagnato da un genitore o tutore legale o da un accompagnatore adulto da questi delegato. È richiesto almeno un accompagnatore adulto ogni 10 minori. Gli accompagnatori adulti delegati devono ottenere una delega scritta di consenso dal genitore o tutore legale del minore e portarla con sé per tutta la durata dell'evento.",
      "pt": "A idade da menoridade pode variar de país para país, mas para a JMJ Seul 2027 aplicam-se os critérios da Política de Proteção de Menores e Adultos Vulneráveis. Essa política aplica os critérios de idade da Lei de Proteção da Juventude da República da Coreia e classifica como menores os participantes nascidos a 1 de janeiro de 2009 ou depois. Este é também o critério para as funções que exigem maioridade, como responsáveis e segundos responsáveis de grupos de peregrinos, voluntários e acompanhantes de menores. Assim, mesmo um participante reconhecido como adulto no seu país, se se enquadrar no critério de data de nascimento acima, tem de ser acompanhado por um progenitor ou tutor legal, ou por um acompanhante adulto por estes delegado. É necessário pelo menos um acompanhante adulto por cada 10 menores. Os acompanhantes adultos delegados têm de obter uma delegação de consentimento escrita do progenitor ou tutor legal do menor e trazê-la consigo durante todo o evento."
    }
  },
  {
    "id": "Q63",
    "no": "Q63",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "대규모그룹(Macrogroup) 안에서 미성년자 등록은 어떻게 진행되나요? 미성년자를 먼저 등록하고 이후에 인솔자를 등록하나요, 아니면 특정 인솔자와 미성년자를 함께 등록하나요?",
      "en": "How are minors registered within a Macrogroup? Are the minors registered first and the chaperones afterward, or are particular chaperones registered together with particular minors?",
      "es": "¿Cómo se inscribe a los menores dentro de un Macrogroup? ¿Se inscribe primero a los menores y después a los acompañantes, o se inscribe a determinados acompañantes junto con determinados menores?",
      "fr": "Comment les mineurs sont-ils inscrits au sein d'un Macrogroup ? Inscrit-on d'abord les mineurs puis les accompagnateurs, ou inscrit-on certains accompagnateurs avec certains mineurs ?",
      "it": "Come vengono iscritti i minori all'interno di un Macrogroup? Si iscrivono prima i minori e poi gli accompagnatori, oppure determinati accompagnatori vengono iscritti insieme a determinati minori?",
      "pt": "Como são inscritos os menores dentro de um Macrogroup? Inscrevem-se primeiro os menores e depois os acompanhantes, ou determinados acompanhantes são inscritos juntamente com determinados menores?"
    },
    "a": {
      "ko": "등록 2단계에서 그룹의 전체 참가 인원과 미성년자의 수, 성별을 입력하게 됩니다. 대규모그룹(Macrogroup) 내에서도 미성년자와 인솔자의 등록 순서는 정해져 있지 않으며, 특정 인솔자와 미성년자를 연결하여 등록하는 별도의 절차는 없습니다. 다만, 서울 세계청년대회의 \" 미성년자 및 취약 성인 보호 지침\"에 따라 미성년자 최대 10명당 성인 인솔자 1명 이상이 동행해야 합니다. 위임받은 성인 인솔자는 해당 미성년자의 부모 또는 법적 보호자로부터 서면 위임 동의서를 받아 대회 기간 내내 지참해야 합니다. 또한 미성년자가 홈스테이에 배정되는 경우에는 같은 성별의 미성년자 2명당 같은 성별의 성인 인솔자 1명이 함께 해야 합니다. 따라서 위 보호 지침에 따른 인솔자 수와 성별 구성을 고려하여 미성년자와 인솔자의 등록을 진행해 주시기 바랍니다.",
      "en": "At Step 2 of registration, you enter the group's total number of participants and the number and sex of its minors. Within a Macrogroup too, there is no set order for registering minors and chaperones, and no separate procedure for linking particular chaperones to particular minors. However, under the WYD Seoul 2027 Safeguarding Policy for Minors and Vulnerable Adults, at least one adult chaperone must accompany every 10 minors. Delegated adult chaperones must obtain a written delegation of consent from the minor's parent or legal guardian and carry it throughout the event. In addition, where minors are assigned to a homestay, one adult chaperone of the same sex must accompany every two minors of the same sex. Please register minors and chaperones with the number and sex of chaperones required by the policy in mind.",
      "es": "En el Paso 2 de la inscripción se introducen el número total de participantes del grupo y el número y sexo de sus menores. Tampoco dentro de un Macrogroup hay un orden fijo para inscribir a menores y acompañantes, ni un procedimiento aparte para vincular a determinados acompañantes con determinados menores. No obstante, según la Política de Protección de Menores y Adultos Vulnerables de la JMJ Seúl 2027, al menos un acompañante adulto debe acompañar a cada 10 menores. Los acompañantes adultos delegados deben obtener una delegación de consentimiento por escrito del padre, madre o tutor legal del menor y llevarla consigo durante todo el evento. Además, cuando los menores se alojen en familias, un acompañante adulto del mismo sexo debe acompañar a cada dos menores del mismo sexo. Inscriban a menores y acompañantes teniendo en cuenta el número y el sexo de los acompañantes que exige la política.",
      "fr": "À l'étape 2 de l'inscription, on saisit le nombre total de participants du groupe ainsi que le nombre et le sexe de ses mineurs. Au sein d'un Macrogroup non plus, il n'y a pas d'ordre imposé pour inscrire mineurs et accompagnateurs, ni de procédure distincte pour associer certains accompagnateurs à certains mineurs. Toutefois, selon la Politique de protection des mineurs et des adultes vulnérables des JMJ Séoul 2027, au moins un accompagnateur adulte doit être présent pour 10 mineurs. Les accompagnateurs adultes délégués doivent obtenir une délégation de consentement écrite du parent ou du tuteur légal du mineur et la garder sur eux pendant toute la durée de l'événement. En outre, lorsque des mineurs sont hébergés en famille, un accompagnateur adulte du même sexe doit être présent pour deux mineurs du même sexe. Veuillez inscrire mineurs et accompagnateurs en tenant compte du nombre et du sexe des accompagnateurs exigés par la politique.",
      "it": "Al Passaggio 2 dell'iscrizione si inseriscono il numero totale di partecipanti del gruppo e il numero e il sesso dei minori. Anche all'interno di un Macrogroup non c'è un ordine prestabilito per iscrivere minori e accompagnatori, né una procedura separata per collegare determinati accompagnatori a determinati minori. Tuttavia, secondo la Politica di tutela dei minori e degli adulti vulnerabili della GMG Seoul 2027, almeno un accompagnatore adulto deve accompagnare ogni 10 minori. Gli accompagnatori adulti delegati devono ottenere una delega scritta di consenso dal genitore o tutore legale del minore e portarla con sé per tutta la durata dell'evento. Inoltre, quando i minori sono assegnati a un alloggio in famiglia, un accompagnatore adulto dello stesso sesso deve accompagnare ogni due minori dello stesso sesso. Iscrivete minori e accompagnatori tenendo conto del numero e del sesso degli accompagnatori richiesti dalla politica.",
      "pt": "No Passo 2 da inscrição, introduz-se o número total de participantes do grupo e o número e sexo dos menores. Também num Macrogroup não há uma ordem definida para inscrever menores e acompanhantes, nem um procedimento separado para associar determinados acompanhantes a determinados menores. No entanto, de acordo com a Política de Proteção de Menores e Adultos Vulneráveis da JMJ Seul 2027, pelo menos um acompanhante adulto tem de acompanhar cada 10 menores. Os acompanhantes adultos delegados têm de obter uma delegação de consentimento escrita do progenitor ou tutor legal do menor e trazê-la consigo durante todo o evento. Além disso, quando os menores são atribuídos a alojamento em família, um acompanhante adulto do mesmo sexo tem de acompanhar cada dois menores do mesmo sexo. Inscrevam menores e acompanhantes tendo em conta o número e o sexo dos acompanhantes exigidos pela política."
    }
  },
  {
    "id": "Q64",
    "no": "Q64",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "만 18~19세 청년에게 문제가 생겼을 경우, 한국 법이 적용되나요, 아니면 그 청년의 본국 법이 적용되나요?",
      "en": "If something happens to a young person aged 18–19, does Korean law apply, or the law of their home country?",
      "es": "Si le ocurre algo a un joven de 18 o 19 años, ¿se aplica la ley coreana o la ley de su país de origen?",
      "fr": "S'il arrive quelque chose à un jeune de 18 ou 19 ans, est-ce la loi coréenne qui s'applique, ou celle de son pays d'origine ?",
      "it": "Se succede qualcosa a un giovane di 18–19 anni, si applica la legge coreana o quella del suo Paese d'origine?",
      "pt": "Se acontecer algo a um jovem de 18–19 anos, aplica-se a lei coreana ou a lei do seu país de origem?"
    },
    "a": {
      "ko": "기본적으로 대한민국의 법이 적용되고, 각국 법령에 따라 본국의 법도 중복 적용될 수 있습니다.",
      "en": "Korean law applies in principle, and depending on each country's legislation, the law of the home country may also apply concurrently.",
      "es": "En principio se aplica la ley coreana y, según la legislación de cada país, también puede aplicarse simultáneamente la ley del país de origen.",
      "fr": "C'est en principe la loi coréenne qui s'applique, et selon la législation de chaque pays, la loi du pays d'origine peut aussi s'appliquer conjointement.",
      "it": "In linea di principio si applica la legge coreana e, a seconda della legislazione di ciascun Paese, può applicarsi contemporaneamente anche la legge del Paese d'origine.",
      "pt": "Em princípio aplica-se a lei coreana e, consoante a legislação de cada país, a lei do país de origem pode também aplicar-se simultaneamente."
    }
  },
  {
    "id": "Q65",
    "no": "Q65",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "미성년 순례자의 참가를 위해 필요한 부모·법정대리인 동의서 및 인솔자(Chaperone) 지정 등 특별한 서류가 있나요? 사용할 수 있는 공식 양식(한국어/영어)을 제공할 예정인가요?",
      "en": "Are special documents needed for minor pilgrims to take part, such as consent from parents or legal guardians and the designation of a chaperone? If so, will the WYD Seoul 2027 LOC provide official forms (Korean/English)?",
      "es": "¿Se necesitan documentos especiales para que participen los peregrinos menores, como el consentimiento de los padres o tutores legales y la designación de un acompañante? Si es así, ¿facilitará el COL de la JMJ Seúl 2027 formularios oficiales (en coreano/inglés)?",
      "fr": "Des documents particuliers sont-ils nécessaires pour la participation des pèlerins mineurs, comme le consentement des parents ou tuteurs légaux et la désignation d'un accompagnateur ? Si oui, le COL des JMJ Séoul 2027 fournira-t-il des formulaires officiels (coréen/anglais) ?",
      "it": "Per la partecipazione dei pellegrini minorenni sono necessari documenti specifici, come il consenso dei genitori o dei tutori legali e la designazione di un accompagnatore? Se sì, il COL della GMG Seoul 2027 fornirà moduli ufficiali (coreano/inglese)?",
      "pt": "São necessários documentos especiais para a participação de peregrinos menores, como o consentimento dos pais ou tutores legais e a designação de um acompanhante? Se sim, o COL da JMJ Seul 2027 fornecerá formulários oficiais (coreano/inglês)?"
    },
    "a": {
      "ko": "미성년 순례자의 참가를 위해서는 부모 또는 법적 보호자가 미성년자의 참가에 동의하며, 대회 기간 동안 성인 인솔자에게 미성년자의 보호를 맡긴다는 서면 동의서가 필요합니다. 미성년자의 인솔자는 대한민국 청소년 보호법에 따라 성인 (2008년 12월 31일 당일 또는 이전 출생자)에게 위임되어야 합니다. 미성년자 법적 보호자 동의서 서식은 등록시스템에서 6개 공식 언어로 제공 받을 수 있습니다.",
      "en": "For a minor pilgrim to take part, a written consent is needed in which the parent or legal guardian agrees to the minor's participation and entrusts the minor's care to an adult chaperone for the duration of the event. Under the Republic of Korea's Juvenile Protection Act, the chaperone of a minor must be an adult (born on or before December 31, 2008). The legal guardian consent form for minors is available in the registration system in the six official languages.",
      "es": "Para que un peregrino menor participe, se necesita un consentimiento por escrito en el que el padre, madre o tutor legal acepta la participación del menor y confía su cuidado a un acompañante adulto durante todo el evento. Según la Ley de Protección de la Juventud de la República de Corea, el acompañante de un menor debe ser un adulto (nacido el 31 de diciembre de 2008 o antes). El formulario de consentimiento del tutor legal para menores está disponible en el sistema de inscripción en los seis idiomas oficiales.",
      "fr": "Pour qu'un pèlerin mineur participe, il faut un consentement écrit par lequel le parent ou le tuteur légal accepte la participation du mineur et confie sa prise en charge à un accompagnateur adulte pendant toute la durée de l'événement. Selon la loi sur la protection de la jeunesse de la République de Corée, l'accompagnateur d'un mineur doit être un adulte (né le 31 décembre 2008 ou avant). Le formulaire de consentement du tuteur légal pour les mineurs est disponible dans le système d'inscription dans les six langues officielles.",
      "it": "Perché un pellegrino minorenne possa partecipare è necessario un consenso scritto con cui il genitore o tutore legale acconsente alla partecipazione del minore e ne affida la cura a un accompagnatore adulto per tutta la durata dell'evento. Secondo la Legge sulla protezione dei giovani della Repubblica di Corea, l'accompagnatore di un minore deve essere maggiorenne (nato il 31 dicembre 2008 o prima). Il modulo di consenso del tutore legale per i minori è disponibile nel sistema di iscrizione nelle sei lingue ufficiali.",
      "pt": "Para que um peregrino menor possa participar, é necessário um consentimento escrito em que o progenitor ou tutor legal autoriza a participação do menor e confia o seu cuidado a um acompanhante adulto durante todo o evento. De acordo com a Lei de Proteção da Juventude da República da Coreia, o acompanhante de um menor tem de ser adulto (nascido a 31 de dezembro de 2008 ou antes). O formulário de consentimento do tutor legal para menores está disponível no sistema de inscrição nas seis línguas oficiais."
    }
  },
  {
    "id": "Q66",
    "no": "Q66",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "미성년자가 인솔자·부모와 같은 숙소에 머물 수 있는지, 그룹에서 분리되어 별도 숙소에 배정되는지, 인솔자와 함께 머물 수 없는 경우 누가 미성년자를 책임지는지 알고 싶습니다.",
      "en": "We would like to know whether minors can stay in the same accommodation as their chaperones or parents, whether they are separated from the group and assigned separate accommodation, and who is responsible for minors if they cannot stay with their chaperones.",
      "es": "Quisiéramos saber si los menores pueden alojarse en el mismo lugar que sus acompañantes o padres, si se les separa del grupo y se les asigna otro alojamiento, y quién es responsable de los menores si no pueden alojarse con sus acompañantes.",
      "fr": "Nous aimerions savoir si les mineurs peuvent loger au même endroit que leurs accompagnateurs ou leurs parents, s'ils sont séparés du groupe et affectés à un autre hébergement, et qui est responsable des mineurs s'ils ne peuvent pas loger avec leurs accompagnateurs.",
      "it": "Vorremmo sapere se i minori possono alloggiare nello stesso alloggio dei loro accompagnatori o genitori, se vengono separati dal gruppo e assegnati a un alloggio separato, e chi è responsabile dei minori se non possono stare con i loro accompagnatori.",
      "pt": "Gostaríamos de saber se os menores podem ficar no mesmo alojamento que os seus acompanhantes ou pais, se são separados do grupo e atribuídos a alojamento separado, e quem é responsável pelos menores se não puderem ficar com os seus acompanhantes."
    },
    "a": {
      "ko": "미성년 순례자는 부모 또는 성인 인솔자(부모 또는 법적 보호자의 동의 하에 서면 위임서에 인솔자로 명시된 자)와 동일한 숙소에 함께 배정될 예정입니다. 부모가 아닌 성인 인솔자와 동행할 경우, 동일한 숙소에서 숙박 공간은 물리적으로 분리하여 운영할 계획입니다. 하지만, 미성년자 숙소 운영 방식은 각 국가의 미성년자보호 규정과 현장의 안전 상황에 따라 다양한 방안이 적용될 수 있으며, 모든 경우에 일률적으로 적용되는 단일 정책을 정하기는 어렵다는 점을 양해 부탁드립니다. 조직위원회는 2027 서울 WYD 미성년자보호지침을 제시하는 동시에, 각 국가 주교회의의 미성년자보호지침과 기준을 존중합니다. 다만, 해당 기준에 따라 어떠한 숙소 운영 방식을 선택할 것인지에 대한 결정과 그에 따른 책임은 각 순례자 그룹이 부담하게 됩니다.",
      "en": "Minor pilgrims will be assigned to the same accommodation as their parents or adult chaperone (the person named as chaperone in the written delegation, with the consent of the parent or legal guardian). Where they are accompanied by an adult chaperone who is not a parent, we plan to separate the sleeping spaces physically within the same accommodation. Please understand, however, that the arrangements for minors' accommodation may vary according to each country's safeguarding rules and the safety situation on site, and that it is difficult to set a single policy that applies uniformly in every case. The WYD Seoul 2027 LOC sets out the WYD Seoul 2027 Safeguarding Policy while respecting the safeguarding policies and standards of each country's episcopal conference. The decision on which accommodation arrangement to choose under those standards, and the responsibility that follows from it, rest with each pilgrim group.",
      "es": "Los peregrinos menores se asignarán al mismo alojamiento que sus padres o su acompañante adulto (la persona designada como acompañante en la delegación escrita, con el consentimiento del padre, madre o tutor legal). Cuando vayan acompañados de un adulto que no sea su padre o madre, está previsto separar físicamente los espacios para dormir dentro del mismo alojamiento. No obstante, les rogamos que comprendan que la organización del alojamiento de los menores puede variar según las normas de protección de cada país y la situación de seguridad sobre el terreno, y que es difícil establecer una política única que se aplique de manera uniforme en todos los casos. El COL de la JMJ Seúl 2027 establece la Política de Protección de la JMJ Seúl 2027 respetando al mismo tiempo las políticas y normas de protección de la conferencia episcopal de cada país. La decisión sobre qué modalidad de alojamiento elegir según dichas normas, y la responsabilidad que de ella se derive, corresponden a cada grupo de peregrinos.",
      "fr": "Les pèlerins mineurs seront affectés au même hébergement que leurs parents ou leur accompagnateur adulte (la personne désignée comme accompagnateur dans la délégation écrite, avec le consentement du parent ou du tuteur légal). Lorsqu'ils sont accompagnés d'un adulte qui n'est pas un parent, nous prévoyons de séparer physiquement les espaces de couchage au sein du même hébergement. Nous vous prions toutefois de comprendre que l'organisation de l'hébergement des mineurs peut varier selon les règles de protection de chaque pays et la situation de sécurité sur place, et qu'il est difficile de fixer une politique unique applicable uniformément à tous les cas. Le COL des JMJ Séoul 2027 établit la Politique de protection des JMJ Séoul 2027 tout en respectant les politiques et normes de protection de la conférence épiscopale de chaque pays. La décision quant au mode d'hébergement choisi selon ces normes, ainsi que la responsabilité qui en découle, incombent à chaque groupe de pèlerins.",
      "it": "I pellegrini minorenni saranno assegnati allo stesso alloggio dei loro genitori o dell'accompagnatore adulto (la persona indicata come accompagnatore nella delega scritta, con il consenso del genitore o tutore legale). Quando sono accompagnati da un accompagnatore adulto che non è un genitore, prevediamo di separare fisicamente gli spazi per dormire all'interno dello stesso alloggio. Vi preghiamo però di comprendere che le modalità di alloggio dei minori possono variare in base alle norme di tutela di ciascun Paese e alla situazione di sicurezza sul posto, ed è difficile stabilire un'unica regola valida uniformemente in tutti i casi. Il COL della GMG Seoul 2027 definisce la Politica di tutela della GMG Seoul 2027 nel rispetto delle politiche e delle norme di tutela della conferenza episcopale di ciascun Paese. La decisione su quale modalità di alloggio scegliere in base a tali norme, e la responsabilità che ne deriva, spettano a ciascun gruppo di pellegrini.",
      "pt": "Os peregrinos menores serão atribuídos ao mesmo alojamento que os seus pais ou o acompanhante adulto (a pessoa indicada como acompanhante na delegação escrita, com o consentimento do progenitor ou tutor legal). Quando forem acompanhados por um acompanhante adulto que não seja um dos pais, prevemos separar fisicamente os espaços de dormir dentro do mesmo alojamento. Compreendam, porém, que as modalidades de alojamento dos menores podem variar consoante as normas de proteção de cada país e a situação de segurança no local, e que é difícil estabelecer uma regra única que se aplique uniformemente a todos os casos. O COL da JMJ Seul 2027 define a Política de Proteção da JMJ Seul 2027 respeitando as políticas e normas de proteção da conferência episcopal de cada país. A decisão sobre que modalidade de alojamento escolher ao abrigo dessas normas, e a responsabilidade daí decorrente, cabem a cada grupo de peregrinos."
    }
  },
  {
    "id": "Q67",
    "no": "Q67",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "스코틀랜드 세이프가딩 규정상 수도자·성직자 리더는 청년들과 같은 숙소에 머물 수 없습니다. 이들을 위한 별도 공간이 마련되나요? 화장실은 어떻게 되나요?",
      "en": "Under Scotland's safeguarding rules, religious and clergy leaders may not stay in the same accommodation as young people. Will separate space be provided for them? What about bathrooms?",
      "es": "Según las normas de protección de Escocia, los responsables religiosos y clérigos no pueden alojarse en el mismo lugar que los jóvenes. ¿Se habilitará un espacio aparte para ellos? ¿Y los baños?",
      "fr": "Selon les règles de protection en Écosse, les responsables religieux et clercs ne peuvent pas loger au même endroit que les jeunes. Un espace séparé sera-t-il prévu pour eux ? Et les sanitaires ?",
      "it": "Secondo le norme di tutela della Scozia, i responsabili religiosi e del clero non possono alloggiare nello stesso alloggio dei giovani. Sarà previsto uno spazio separato per loro? E i bagni?",
      "pt": "Segundo as normas de proteção da Escócia, os responsáveis religiosos e do clero não podem ficar no mesmo alojamento que os jovens. Será disponibilizado um espaço separado para eles? E as casas de banho?"
    },
    "a": {
      "ko": "수도자·성직자 리더를 위한 별도 공간은 준비되어 있지 않습니다. 등록 후 별도로 요청 주시면 반영될 수 있도록 최선을 다하겠습니다. 다만, 숙소의 여건 상 제공이 어려울 수 있는 점 양해 부탁드립니다.",
      "en": "No separate space has been prepared for religious and clergy leaders. If you make a separate request after registering, we will do our best to accommodate it. Please understand, however, that this may not be possible given the conditions of the accommodation.",
      "es": "No se ha preparado un espacio aparte para los responsables religiosos y clérigos. Si lo solicitan aparte después de inscribirse, haremos todo lo posible por atenderlo. No obstante, les rogamos que comprendan que puede no ser posible debido a las condiciones del alojamiento.",
      "fr": "Aucun espace séparé n'a été prévu pour les responsables religieux et clercs. Si vous en faites la demande après votre inscription, nous ferons de notre mieux pour y répondre. Nous vous prions toutefois de comprendre que cela pourrait ne pas être possible compte tenu des conditions de l'hébergement.",
      "it": "Non è stato predisposto uno spazio separato per i responsabili religiosi e del clero. Se dopo l'iscrizione presentate una richiesta specifica, faremo del nostro meglio per accoglierla. Vi preghiamo però di comprendere che ciò potrebbe non essere possibile date le condizioni dell'alloggio.",
      "pt": "Não foi preparado um espaço separado para os responsáveis religiosos e do clero. Se fizerem um pedido específico depois de se inscreverem, faremos o possível para o atender. Compreendam, porém, que isso poderá não ser possível, dadas as condições do alojamento."
    }
  },
  {
    "id": "Q68",
    "no": "Q68",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "미성년자가 응급 상황으로 병원 진료 또는 입원이 필요한 경우, 그룹 리더가 동행하여 의료 상태 및 치료 정보를 제공받을 수 있나요? 또한 이를 위한 보호자 동의 및 의료정보 공유 관련 사항이 미성년자 등록 양식에 포함되나요?",
      "en": "If a minor needs hospital treatment or admission in an emergency, can the group leader accompany them and receive information on their medical condition and treatment? Will guardian consent and the sharing of medical information be included in the minors' registration form?",
      "es": "Si un menor necesita atención hospitalaria o ingreso por una emergencia, ¿puede acompañarlo el líder del grupo y recibir información sobre su estado de salud y su tratamiento? ¿Se incluirán en el formulario de inscripción de menores el consentimiento del tutor y el intercambio de información médica?",
      "fr": "Si un mineur doit être soigné ou hospitalisé en urgence, le responsable du groupe peut-il l'accompagner et recevoir des informations sur son état de santé et son traitement ? Le consentement du tuteur et le partage d'informations médicales figureront-ils dans le formulaire d'inscription des mineurs ?",
      "it": "Se un minore ha bisogno di cure ospedaliere o di un ricovero d'urgenza, il responsabile di gruppo può accompagnarlo e ricevere informazioni sulle sue condizioni mediche e sulle cure? Il consenso del tutore e la condivisione delle informazioni mediche saranno inclusi nel modulo di iscrizione dei minori?",
      "pt": "Se um menor precisar de tratamento hospitalar ou de internamento de urgência, o responsável de grupo pode acompanhá-lo e receber informações sobre o seu estado de saúde e tratamento? O consentimento do tutor e a partilha de informações médicas serão incluídos no formulário de inscrição dos menores?"
    },
    "a": {
      "ko": "현재 미성년자 등록 절차에는 성인 인솔자 또는 그룹 대표의 의료 관련 동의 및 의료정보 공유에 관한 별도 항목을 표기하고 있지 않습니다. 다만, 부모 또는 법적 보호자로부터 서면 위임 동의서를 받은 성인 인솔자는 미성년자에 대한 포괄적인 인솔 권리를 획득하는 것으로 볼 수 있습니다. 현재 검토·수정 중인 \"미성년자 및 취약 성인 보호 지침\"에 응급 진료 시 보호자 동의와 의료정보 공유에 관한 사항을 포함하는 방안을 고려하고 있으며, 세부 절차는 확정 후 안내드리겠습니다.",
      "en": "At present, the registration procedure for minors does not include a separate item on medical consent or the sharing of medical information by the adult chaperone or group leader. However, an adult chaperone who has received a written delegation of consent from the parent or legal guardian can be considered to have acquired comprehensive rights as the minor's chaperone. We are considering including guardian consent for emergency treatment and the sharing of medical information in the Safeguarding Policy for Minors and Vulnerable Adults, which is currently being reviewed and revised, and will share the detailed procedure once it is confirmed.",
      "es": "Actualmente, el procedimiento de inscripción de menores no incluye un apartado específico sobre el consentimiento médico ni sobre el intercambio de información médica por parte del acompañante adulto o del líder del grupo. No obstante, puede considerarse que un acompañante adulto que ha recibido una delegación de consentimiento por escrito del padre, madre o tutor legal ha adquirido plenos derechos como acompañante del menor. Estamos estudiando incluir el consentimiento del tutor para la atención de urgencia y el intercambio de información médica en la Política de Protección de Menores y Adultos Vulnerables, que se está revisando actualmente, y compartiremos el procedimiento detallado una vez confirmado.",
      "fr": "Actuellement, la procédure d'inscription des mineurs ne comporte pas de rubrique distincte sur le consentement médical ou le partage d'informations médicales par l'accompagnateur adulte ou le responsable du groupe. On peut toutefois considérer qu'un accompagnateur adulte ayant reçu une délégation de consentement écrite du parent ou du tuteur légal a acquis des droits complets en tant qu'accompagnateur du mineur. Nous envisageons d'inclure le consentement du tuteur pour les soins d'urgence et le partage d'informations médicales dans la Politique de protection des mineurs et des adultes vulnérables, actuellement en cours de révision, et communiquerons la procédure détaillée une fois confirmée.",
      "it": "Al momento la procedura di iscrizione dei minori non include una voce specifica sul consenso medico o sulla condivisione delle informazioni mediche da parte dell'accompagnatore adulto o del responsabile di gruppo. Tuttavia, un accompagnatore adulto che ha ricevuto una delega scritta di consenso dal genitore o tutore legale può essere considerato titolare di diritti complessivi come accompagnatore del minore. Stiamo valutando di includere il consenso del tutore per le cure d'urgenza e la condivisione delle informazioni mediche nella Politica di tutela dei minori e degli adulti vulnerabili, attualmente in fase di revisione, e comunicheremo la procedura dettagliata una volta confermata.",
      "pt": "De momento, o procedimento de inscrição dos menores não inclui um item específico sobre o consentimento médico ou a partilha de informações médicas pelo acompanhante adulto ou pelo responsável de grupo. No entanto, um acompanhante adulto que tenha recebido uma delegação de consentimento escrita do progenitor ou tutor legal pode ser considerado detentor de direitos abrangentes enquanto acompanhante do menor. Estamos a ponderar incluir o consentimento do tutor para tratamento de urgência e a partilha de informações médicas na Política de Proteção de Menores e Adultos Vulneráveis, que está atualmente em revisão, e partilharemos o procedimento detalhado logo que esteja confirmado."
    }
  },
  {
    "id": "Q69",
    "no": "Q69",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "부모와 동행하는 미성년자 또는 어린이를 위한 특별 패키지 (가족 단위 특별 패키지) 가 있나요? 이 경우 숙박 배정은 어떻게 진행되나요 ? 또한 만 14세 미만도 부모 중 한 명이 동행하면 참가할 수 있나요 ?",
      "en": "Is there a special package for minors or children accompanied by their parents (a family package)? How is accommodation assigned in that case? And can children under 14 take part if accompanied by one parent?",
      "es": "¿Hay un paquete especial para menores o niños que vayan con sus padres (un paquete familiar)? En ese caso, ¿cómo se asigna el alojamiento? ¿Y pueden participar los niños menores de 14 años si van acompañados de uno de sus padres?",
      "fr": "Existe-t-il un forfait spécial pour les mineurs ou enfants accompagnés de leurs parents (forfait famille) ? Comment l'hébergement est-il attribué dans ce cas ? Et les enfants de moins de 14 ans peuvent-ils participer s'ils sont accompagnés d'un parent ?",
      "it": "Esiste un pacchetto speciale per minori o bambini accompagnati dai genitori (un pacchetto famiglia)? Come viene assegnato l'alloggio in tal caso? E i bambini sotto i 14 anni possono partecipare se accompagnati da un solo genitore?",
      "pt": "Existe um pacote especial para menores ou crianças acompanhadas pelos pais (um pacote familiar)? Como é atribuído o alojamento nesse caso? E as crianças com menos de 14 anos podem participar se acompanhadas por apenas um dos pais?"
    },
    "a": {
      "ko": "부모와 동행하는 미성년자 또는 어린이를 위한 별도의 가족 특별 패키지는 마련되어 있지 않습니다. 만 14세 미만의 어린이도 부모 중 한 명 이상 또는 법적 보호자가 위임한 성인 인솔자와 동행하여 참가할 수 있습니다. 다만, 조직위원회에서 제공하는 숙소가 포함된 패키지는 2013년 7월 31일 또는 그 이전에 출생한 참가자만 신청할 수 있습니다. 조직위원회가 제공하는 숙소는 학교·공공시설 등 공동 숙박시설과 홈스테이를 중심으로 운영됩니다. 이러한 숙박 환경과 대규모 순례자 수용 여건을 고려할 때, 만 14세 미만의 자녀와 함께 참가하는 가족은 숙소가 포함되지 않은 패키지로 등록하고, 가족에게 적합한 숙소를 직접 마련해 주시기 바랍니다.",
      "en": "There is no separate family package for minors or children accompanied by their parents. Children under 14 can take part if accompanied by at least one parent or by an adult chaperone delegated by their legal guardian. However, packages that include accommodation provided by the LOC are available only to participants born on or before July 31, 2013. Accommodation provided by the LOC consists mainly of shared facilities such as schools and public buildings, and homestays. Given these conditions and the need to house very large numbers of pilgrims, families taking part with children under 14 are asked to register for a package without accommodation and arrange suitable family accommodation themselves.",
      "es": "No hay un paquete familiar aparte para menores o niños que vayan con sus padres. Los niños menores de 14 años pueden participar si van acompañados de al menos uno de sus padres o de un acompañante adulto delegado por su tutor legal. No obstante, los paquetes que incluyen alojamiento proporcionado por el COL solo están disponibles para participantes nacidos el 31 de julio de 2013 o antes. El alojamiento que proporciona el COL consiste principalmente en instalaciones compartidas, como escuelas y edificios públicos, y en alojamiento en familias. Dadas estas condiciones y la necesidad de alojar a un gran número de peregrinos, pedimos a las familias que participen con hijos menores de 14 años que se inscriban en un paquete sin alojamiento y organicen por su cuenta un alojamiento adecuado para la familia.",
      "fr": "Il n'existe pas de forfait famille distinct pour les mineurs ou enfants accompagnés de leurs parents. Les enfants de moins de 14 ans peuvent participer s'ils sont accompagnés d'au moins un parent ou d'un accompagnateur adulte délégué par leur tuteur légal. Toutefois, les forfaits incluant un hébergement fourni par le COL ne sont accessibles qu'aux participants nés le 31 juillet 2013 ou avant. L'hébergement fourni par le COL se compose principalement de lieux collectifs, comme des écoles et des bâtiments publics, et d'hébergement en famille. Compte tenu de ces conditions et de la nécessité de loger un très grand nombre de pèlerins, nous demandons aux familles participant avec des enfants de moins de 14 ans de s'inscrire à un forfait sans hébergement et d'organiser elles-mêmes un hébergement familial adapté.",
      "it": "Non esiste un pacchetto famiglia separato per minori o bambini accompagnati dai genitori. I bambini sotto i 14 anni possono partecipare se accompagnati da almeno un genitore o da un accompagnatore adulto delegato dal loro tutore legale. Tuttavia, i pacchetti che includono l'alloggio fornito dal COL sono disponibili solo per i partecipanti nati il 31 luglio 2013 o prima. L'alloggio fornito dal COL consiste principalmente in strutture condivise come scuole ed edifici pubblici, e in alloggi in famiglia. Date queste condizioni e la necessità di ospitare un numero molto elevato di pellegrini, alle famiglie che partecipano con bambini sotto i 14 anni si chiede di iscriversi a un pacchetto senza alloggio e di organizzare autonomamente un alloggio familiare adeguato.",
      "pt": "Não existe um pacote familiar separado para menores ou crianças acompanhadas pelos pais. As crianças com menos de 14 anos podem participar se forem acompanhadas por pelo menos um dos pais ou por um acompanhante adulto delegado pelo seu tutor legal. No entanto, os pacotes que incluem alojamento fornecido pelo COL só estão disponíveis para participantes nascidos a 31 de julho de 2013 ou antes. O alojamento fornecido pelo COL consiste sobretudo em instalações partilhadas, como escolas e edifícios públicos, e em alojamento em família. Dadas estas condições e a necessidade de alojar um número muito elevado de peregrinos, pede-se às famílias que participem com crianças com menos de 14 anos que se inscrevam num pacote sem alojamento e organizem por conta própria um alojamento familiar adequado."
    }
  },
  {
    "id": "Q70",
    "no": "Q70",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "세이프가딩, 미성년자",
      "en": "Safeguarding and Minors",
      "es": "Protección y menores",
      "fr": "Protection et mineurs",
      "it": "Tutela e minori",
      "pt": "Proteção e menores"
    },
    "topicNo": "2",
    "q": {
      "ko": "개별 등록이 없는 그룹 등록 방식에서 각 순례자의 세이프가딩 정책 및 행동강령(Code of Conduct)에 대한 동의·서명은 어떻게 이루어지나요? 또한 등록 시스템 오픈 전에 관련 가이드라인을 사전 제공하고, 순례자를 위한 별도의 교육도 제공할 예정인가요?",
      "en": "With group registration, where pilgrims do not register individually, how does each pilgrim agree to and sign the Safeguarding Policy and Code of Conduct? Will the relevant guidelines be provided before the registration system opens, and will separate training be offered for pilgrims?",
      "es": "Con la inscripción por grupos, en la que los peregrinos no se inscriben individualmente, ¿cómo acepta y firma cada peregrino la Política de Protección y el Código de Conducta? ¿Se facilitarán las directrices correspondientes antes de que se abra el sistema de inscripción, y se ofrecerá formación específica para los peregrinos?",
      "fr": "Avec l'inscription par groupe, où les pèlerins ne s'inscrivent pas individuellement, comment chaque pèlerin accepte-t-il et signe-t-il la Politique de protection et le Code de conduite ? Les directives correspondantes seront-elles fournies avant l'ouverture du système d'inscription, et une formation distincte sera-t-elle proposée aux pèlerins ?",
      "it": "Con l'iscrizione di gruppo, in cui i pellegrini non si iscrivono individualmente, come fa ciascun pellegrino ad accettare e firmare la Politica di tutela e il Codice di condotta? Le relative linee guida saranno fornite prima dell'apertura del sistema di iscrizione, e sarà offerta una formazione specifica per i pellegrini?",
      "pt": "Com a inscrição em grupo, em que os peregrinos não se inscrevem individualmente, como é que cada peregrino aceita e assina a Política de Proteção e o Código de Conduta? As orientações respetivas serão fornecidas antes da abertura do sistema de inscrição, e será oferecida formação específica para os peregrinos?"
    },
    "a": {
      "ko": "등록시스템에서는 참가 유형에 따라 순례자 그룹 대표, 성직자 (사제·부제), 주교, 봉사자, 가톨릭문화박람회 참가자, 젊은이 축제 참가자 및 언론인 등이 세이프가딩 정책과 행동 강령(Code of Conduct) 에 동의·서명하도록 되어 있습니다. 개별 순례자도 순례자앱을 통해 해당 정책과 행동강령에 동의·서명해야 합니다. 현재 세이프가딩 지침서와 행동강령은 검토·수정 중이며, 최종본은 2027년 초 등록시스템, 공식 홈페이지 및 각국 주교회의 등을 통해 공유할 예정입니다. 또한 순례자가 세이프가딩 정책과 행동강령을 이해하고 준수할 수 있도록 교육 자료도 함께 제공할 예정입니다.",
      "en": "In the registration system, depending on the type of participation, pilgrim group leaders, clergy (priests and deacons), bishops, volunteers, Vocations Fair participants, Youth Festival participants, media representatives and others agree to and sign the Safeguarding Policy and Code of Conduct. Individual pilgrims must also agree to and sign the policy and Code of Conduct through the Pilgrim App. The Safeguarding Policy and Code of Conduct are currently being reviewed and revised, and the final versions will be shared in early 2027 through the registration system, the official website and each country's episcopal conference. Training materials will also be provided to help pilgrims understand and follow the Safeguarding Policy and Code of Conduct.",
      "es": "En el sistema de inscripción, según el tipo de participación, los líderes de grupos de peregrinos, el clero (sacerdotes y diáconos), los obispos, los voluntarios, los participantes en la Feria Vocacional, los participantes en el Festival de la Juventud, los representantes de los medios y otros aceptan y firman la Política de Protección y el Código de Conducta. Los peregrinos individuales también deben aceptar y firmar la política y el Código de Conducta a través de la App del Peregrino. La Política de Protección y el Código de Conducta se están revisando actualmente, y las versiones finales se compartirán a principios de 2027 a través del sistema de inscripción, la web oficial y la conferencia episcopal de cada país. También se facilitarán materiales formativos para ayudar a los peregrinos a comprender y cumplir la Política de Protección y el Código de Conducta.",
      "fr": "Dans le système d'inscription, selon le type de participation, les responsables de groupe de pèlerins, le clergé (prêtres et diacres), les évêques, les volontaires, les participants au Salon des vocations, les participants au Festival de la jeunesse, les représentants des médias et d'autres acceptent et signent la Politique de protection et le Code de conduite. Les pèlerins individuels doivent aussi accepter et signer la politique et le Code de conduite via l'Application du pèlerin. La Politique de protection et le Code de conduite sont en cours de révision, et les versions définitives seront diffusées début 2027 via le système d'inscription, le site officiel et la conférence épiscopale de chaque pays. Des supports de formation seront également fournis pour aider les pèlerins à comprendre et respecter la Politique de protection et le Code de conduite.",
      "it": "Nel sistema di iscrizione, a seconda del tipo di partecipazione, responsabili dei gruppi di pellegrini, clero (sacerdoti e diaconi), vescovi, volontari, partecipanti alla Fiera delle Vocazioni, partecipanti al Festival della Gioventù, rappresentanti dei media e altri accettano e firmano la Politica di tutela e il Codice di condotta. Anche i singoli pellegrini devono accettare e firmare la politica e il Codice di condotta tramite l'App del Pellegrino. La Politica di tutela e il Codice di condotta sono attualmente in fase di revisione, e le versioni definitive saranno condivise all'inizio del 2027 tramite il sistema di iscrizione, il sito ufficiale e la conferenza episcopale di ciascun Paese. Saranno forniti anche materiali formativi per aiutare i pellegrini a comprendere e seguire la Politica di tutela e il Codice di condotta.",
      "pt": "No sistema de inscrição, consoante o tipo de participação, os responsáveis de grupos de peregrinos, o clero (sacerdotes e diáconos), os bispos, os voluntários, os participantes da Feira Vocacional, os participantes do Festival da Juventude, os representantes dos meios de comunicação e outros aceitam e assinam a Política de Proteção e o Código de Conduta. Os peregrinos individuais também têm de aceitar e assinar a política e o Código de Conduta através da App do Peregrino. A Política de Proteção e o Código de Conduta estão atualmente em revisão, e as versões finais serão partilhadas no início de 2027 através do sistema de inscrição, do site oficial e da conferência episcopal de cada país. Serão também fornecidos materiais de formação para ajudar os peregrinos a compreender e a cumprir a Política de Proteção e o Código de Conduta."
    }
  },
  {
    "id": "Q71",
    "no": "Q71",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "장애인",
      "en": "Accessibility Support",
      "es": "Apoyo a la accesibilidad",
      "fr": "Accessibilité",
      "it": "Supporto all'accessibilità",
      "pt": "Apoio à acessibilidade"
    },
    "topicNo": "3",
    "q": {
      "ko": "장애인 순례자는 장애 유형이나 지원 필요에 따라 별도 숙소가 배정되는지, 또한 한국 도착부터 출국까지 전담 인력의 지원을 받을 수 있는지 궁금합니다.",
      "en": "We would like to know whether pilgrims with disabilities will be assigned separate accommodation according to their type of disability or support needs, and whether dedicated staff will support them from arrival in Korea until departure.",
      "es": "Quisiéramos saber si a los peregrinos con discapacidad se les asignará un alojamiento aparte según su tipo de discapacidad o sus necesidades de apoyo, y si contarán con personal dedicado desde su llegada a Corea hasta su salida.",
      "fr": "Nous aimerions savoir si les pèlerins en situation de handicap seront affectés à un hébergement séparé selon leur type de handicap ou leurs besoins, et si un personnel dédié les accompagnera de leur arrivée en Corée jusqu'à leur départ.",
      "it": "Vorremmo sapere se ai pellegrini con disabilità sarà assegnato un alloggio separato in base al tipo di disabilità o alle esigenze di supporto, e se personale dedicato li assisterà dall'arrivo in Corea fino alla partenza.",
      "pt": "Gostaríamos de saber se aos peregrinos com deficiência será atribuído alojamento separado de acordo com o tipo de deficiência ou as necessidades de apoio, e se haverá pessoal dedicado a apoiá-los desde a chegada à Coreia até à partida."
    },
    "a": {
      "ko": "장애인 순례자도 소속 교구와 함께 동행하는 것이 원칙이지만, 원한다면 별도 숙소에 배정할 수 있습니다. 또한 한국 도착부터 출국까지 그룹 내 동행인이 있으면 좋겠지만, 없다면 봉사자 배정도 고려하고 있습니다.",
      "en": "As a rule, pilgrims with disabilities also travel with their own diocese, but they can be assigned separate accommodation if they wish. And while it would be good to have a companion within the group from arrival in Korea until departure, if there is none, we are also considering assigning a volunteer.",
      "es": "Por norma general, los peregrinos con discapacidad también viajan con su propia diócesis, pero se les puede asignar un alojamiento aparte si lo desean. Y aunque sería conveniente que tuvieran un acompañante dentro del grupo desde su llegada a Corea hasta su salida, si no lo tienen, también estamos considerando asignarles un voluntario.",
      "fr": "En règle générale, les pèlerins en situation de handicap voyagent aussi avec leur propre diocèse, mais ils peuvent être affectés à un hébergement séparé s'ils le souhaitent. Et s'il serait bon qu'ils aient un accompagnant au sein du groupe de leur arrivée en Corée jusqu'à leur départ, à défaut, nous envisageons aussi de leur affecter un volontaire.",
      "it": "Di regola, anche i pellegrini con disabilità viaggiano con la propria diocesi, ma possono essere assegnati a un alloggio separato se lo desiderano. E sebbene sarebbe bene avere un accompagnatore all'interno del gruppo dall'arrivo in Corea fino alla partenza, se non c'è, stiamo valutando anche di assegnare un volontario.",
      "pt": "Por regra, os peregrinos com deficiência também viajam com a sua própria diocese, mas podem ser atribuídos a alojamento separado, se o desejarem. E, embora seja bom terem um acompanhante dentro do grupo desde a chegada à Coreia até à partida, se não houver, estamos também a ponderar atribuir um voluntário."
    }
  },
  {
    "id": "Q72",
    "no": "Q72",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "장애인",
      "en": "Accessibility Support",
      "es": "Apoyo a la accesibilidad",
      "fr": "Accessibilité",
      "it": "Supporto all'accessibilità",
      "pt": "Apoio à acessibilidade"
    },
    "topicNo": "3",
    "q": {
      "ko": "장애인 순례자는 소속 교구/주교회의 대표단등 소속 그룹과 함께 숙박하고 행사에 참여하면서 필요한 접근성·이동 지원을 받을 수 있나요?",
      "en": "Can pilgrims with disabilities stay and take part in events with their own group, such as their diocese or episcopal conference delegation, while receiving the accessibility and mobility support they need?",
      "es": "¿Pueden los peregrinos con discapacidad alojarse y participar en los actos con su propio grupo, como su diócesis o la delegación de su conferencia episcopal, recibiendo el apoyo de accesibilidad y movilidad que necesiten?",
      "fr": "Les pèlerins en situation de handicap peuvent-ils loger et participer aux événements avec leur propre groupe, comme leur diocèse ou la délégation de leur conférence épiscopale, tout en bénéficiant de l'aide à l'accessibilité et à la mobilité dont ils ont besoin ?",
      "it": "I pellegrini con disabilità possono alloggiare e partecipare agli eventi con il proprio gruppo, come la loro diocesi o la delegazione della conferenza episcopale, ricevendo il supporto all'accessibilità e alla mobilità di cui hanno bisogno?",
      "pt": "Os peregrinos com deficiência podem ficar e participar nos eventos com o seu próprio grupo, como a sua diocese ou a delegação da conferência episcopal, recebendo o apoio à acessibilidade e mobilidade de que precisam?"
    },
    "a": {
      "ko": "장애인 순례자는 소속 교구와 주교회의 대표단 등 소속 그룹과 함께 숙박하면서 필요한 접근성 이동 지원을 받을 수 있을 것입니다. 구체적인 지원 내용은 추후 앱이나 홈페이지를 통해 안내해 드리겠습니다.",
      "en": "Pilgrims with disabilities will be able to stay with their own group, such as their diocese or episcopal conference delegation, and receive the accessibility and mobility support they need. Details of the support will be provided later through the app or the website.",
      "es": "Los peregrinos con discapacidad podrán alojarse con su propio grupo, como su diócesis o la delegación de su conferencia episcopal, y recibir el apoyo de accesibilidad y movilidad que necesiten. Los detalles del apoyo se facilitarán más adelante a través de la app o la web.",
      "fr": "Les pèlerins en situation de handicap pourront loger avec leur propre groupe, comme leur diocèse ou la délégation de leur conférence épiscopale, et bénéficier de l'aide à l'accessibilité et à la mobilité dont ils ont besoin. Le détail de cette aide sera communiqué ultérieurement via l'application ou le site.",
      "it": "I pellegrini con disabilità potranno stare con il proprio gruppo, come la loro diocesi o la delegazione della conferenza episcopale, e ricevere il supporto all'accessibilità e alla mobilità di cui hanno bisogno. I dettagli del supporto saranno forniti in seguito tramite l'app o il sito web.",
      "pt": "Os peregrinos com deficiência poderão ficar com o seu próprio grupo, como a sua diocese ou a delegação da conferência episcopal, e receber o apoio à acessibilidade e mobilidade de que precisam. Os pormenores do apoio serão fornecidos mais tarde através da app ou do site."
    }
  },
  {
    "id": "Q73",
    "no": "Q73",
    "section": {
      "ko": "순례자 지원",
      "en": "Pilgrim Support",
      "es": "Apoyo a los peregrinos",
      "fr": "Accompagnement des pèlerins",
      "it": "Supporto ai pellegrini",
      "pt": "Apoio aos peregrinos"
    },
    "sectionNo": "Ⅱ",
    "topic": {
      "ko": "장애인",
      "en": "Accessibility Support",
      "es": "Apoyo a la accesibilidad",
      "fr": "Accessibilité",
      "it": "Supporto all'accessibilità",
      "pt": "Apoio à acessibilidade"
    },
    "topicNo": "3",
    "q": {
      "ko": "장애인 순례자의 등록 절차는 어떻게 되나요? 보호자 또는 동행인의 등록이 필수인지, 필요한 경우 장애인 순례자와 동행인을 어떻게 함께 등록하는지도 안내 부탁드립니다.",
      "en": "What is the registration procedure for pilgrims with disabilities? Please also tell us whether registering a caregiver or companion is mandatory and, where needed, how a pilgrim with a disability and their companion are registered together.",
      "es": "¿Cuál es el procedimiento de inscripción de los peregrinos con discapacidad? Indíquennos también si es obligatorio inscribir a un cuidador o acompañante y, cuando sea necesario, cómo se inscriben juntos un peregrino con discapacidad y su acompañante.",
      "fr": "Quelle est la procédure d'inscription des pèlerins en situation de handicap ? Merci d'indiquer aussi si l'inscription d'un aidant ou d'un accompagnant est obligatoire et, le cas échéant, comment inscrire ensemble un pèlerin en situation de handicap et son accompagnant.",
      "it": "Qual è la procedura di iscrizione per i pellegrini con disabilità? Indicateci anche se l'iscrizione di un assistente o accompagnatore è obbligatoria e, se necessario, come si iscrivono insieme un pellegrino con disabilità e il suo accompagnatore.",
      "pt": "Qual é o procedimento de inscrição para peregrinos com deficiência? Indiquem-nos também se a inscrição de um cuidador ou acompanhante é obrigatória e, quando necessário, como se inscrevem em conjunto um peregrino com deficiência e o seu acompanhante."
    },
    "a": {
      "ko": "등록시에 장애인 순례자와 동행하는지의 여부를 묻는 체크 리스트 항목이 있습니다. 해당 한다면 그 곳에 체크해 주십시오. 동행인 등록이 필수는 아니며, 동행인이 있는 경우에는 동행인도 순례자로 등록 하시고 비고란에 동행인 이름과 연락처를 기입해 주시기 바랍니다.",
      "en": "At registration there is a checklist item asking whether the pilgrim with a disability is accompanied. If so, please tick it. Registering a companion is not mandatory; if there is a companion, please register the companion as a pilgrim too and enter the companion's name and contact details in the remarks field.",
      "es": "En la inscripción hay un punto de la lista de comprobación que pregunta si el peregrino con discapacidad va acompañado. Si es así, márquenlo. No es obligatorio inscribir a un acompañante; si lo hay, inscríbanlo también como peregrino e indiquen su nombre y datos de contacto en el campo de observaciones.",
      "fr": "Lors de l'inscription, un élément de la liste de contrôle demande si le pèlerin en situation de handicap est accompagné. Si c'est le cas, cochez-le. L'inscription d'un accompagnant n'est pas obligatoire ; s'il y en a un, inscrivez-le aussi comme pèlerin et indiquez son nom et ses coordonnées dans le champ remarques.",
      "it": "Al momento dell'iscrizione c'è una voce di controllo che chiede se il pellegrino con disabilità è accompagnato. In tal caso, spuntatela. L'iscrizione di un accompagnatore non è obbligatoria; se c'è un accompagnatore, iscrivetelo anch'esso come pellegrino e inserite il suo nome e i suoi recapiti nel campo note.",
      "pt": "Na inscrição há um item de verificação que pergunta se o peregrino com deficiência vem acompanhado. Se for o caso, assinalem-no. A inscrição de um acompanhante não é obrigatória; se houver acompanhante, inscrevam-no também como peregrino e indiquem o seu nome e contactos no campo de observações."
    }
  },
  {
    "id": "Q74",
    "no": "Q74",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation",
      "it": "Check-in",
      "pt": "Credenciamento"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자 키트와 카드 등은 어디에서 수령하나요? 숙박 포함 그룹과 숙박 미포함 그룹의 체크인 및 물품 수령 장소는 각각 어디인가요?",
      "en": "Where are pilgrim kits, cards and so on collected? Where do groups with and without accommodation each check in and collect their items?",
      "es": "¿Dónde se recogen los kits del peregrino, las tarjetas, etc.? ¿Dónde se acreditan y recogen sus artículos los grupos con y sin alojamiento?",
      "fr": "Où retire-t-on les kits du pèlerin, les cartes, etc. ? Où les groupes avec et sans hébergement sont-ils respectivement accrédités et retirent-ils leurs articles ?",
      "it": "Dove si ritirano i kit del pellegrino, le carte e così via? Dove fanno il check-in e ritirano gli articoli rispettivamente i gruppi con e senza alloggio?",
      "pt": "Onde se levantam os kits do peregrino, os cartões e outros artigos? Onde fazem o check-in e levantam os artigos os grupos com e sem alojamento, respetivamente?"
    },
    "a": {
      "ko": "숙박이 포함된 패키지로 등록한 그룹은 배정된 본당에서 체크인하고 순례자 키트와 카드 등을 수령하게 됩니다. 해당 물품은 조직위원회에서 각 본당으로 사전에 배송할 예정입니다. 숙박이 포함되지 않은 패키지로 등록한 그룹은 순례자센터에서 체크인하고 순례자 키트와 카드 등을 수령하게 됩니다. 현장 등록 참가자도 순례자센터에서 등록 절차를 마친 후 해당 물품을 수령하실 수 있습니다.",
      "en": "Groups registered for a package with accommodation will check in at their assigned parish and collect pilgrim kits, cards and other items there. The LOC will deliver these items to each parish in advance. Groups registered for a package without accommodation will check in and collect pilgrim kits, cards and other items at the Pilgrim Center. On-site registrants can also collect these items at the Pilgrim Center after completing registration.",
      "es": "Los grupos inscritos en un paquete con alojamiento se acreditarán en su parroquia asignada y allí recogerán los kits del peregrino, las tarjetas y demás artículos. El COL enviará estos artículos a cada parroquia con antelación. Los grupos inscritos en un paquete sin alojamiento se acreditarán y recogerán los kits del peregrino, las tarjetas y demás artículos en el Centro del Peregrino. Quienes se inscriban presencialmente también pueden recoger estos artículos en el Centro del Peregrino tras completar la inscripción.",
      "fr": "Les groupes inscrits à un forfait avec hébergement seront accrédités dans leur paroisse attribuée et y retireront les kits du pèlerin, les cartes et les autres articles. Le COL livrera ces articles à l'avance dans chaque paroisse. Les groupes inscrits à un forfait sans hébergement seront accrédités et retireront les kits du pèlerin, les cartes et les autres articles au Centre des pèlerins. Les personnes inscrites sur place pourront aussi retirer ces articles au Centre des pèlerins après avoir finalisé leur inscription.",
      "it": "I gruppi iscritti a un pacchetto con alloggio faranno il check-in nella parrocchia assegnata e lì ritireranno kit del pellegrino, carte e altri articoli. Il COL consegnerà in anticipo questi articoli a ciascuna parrocchia. I gruppi iscritti a un pacchetto senza alloggio faranno il check-in e ritireranno kit del pellegrino, carte e altri articoli al Centro del Pellegrino. Anche chi si iscrive in loco può ritirare questi articoli al Centro del Pellegrino dopo aver completato l'iscrizione.",
      "pt": "Os grupos inscritos num pacote com alojamento farão o check-in na paróquia atribuída e aí levantarão os kits do peregrino, os cartões e outros artigos. O COL entregará previamente estes artigos a cada paróquia. Os grupos inscritos num pacote sem alojamento farão o check-in e levantarão os kits do peregrino, os cartões e outros artigos no Centro do Peregrino. Quem se inscrever no local também pode levantar estes artigos no Centro do Peregrino depois de concluir a inscrição."
    },
    "sub": {
      "ko": "순례자 키트",
      "en": "Pilgrim Kit",
      "es": "Kit del peregrino",
      "fr": "Kit du pèlerin",
      "it": "Kit del pellegrino",
      "pt": "Kit do peregrino"
    },
    "subNo": "a"
  },
  {
    "id": "Q75",
    "no": "Q75",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation",
      "it": "Check-in",
      "pt": "Credenciamento"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자 키트에는 무엇이 들어있나요?",
      "en": "What's in the pilgrim kit?",
      "es": "¿Qué contiene el kit del peregrino?",
      "fr": "Que contient le kit du pèlerin ?",
      "it": "Cosa c'è nel kit del pellegrino?",
      "pt": "O que contém o kit do peregrino?"
    },
    "a": {
      "ko": "백팩(가방), T-shirts, 모자, 물통, 부채(접이식), 스포츠타올, 묵주(팔찌)가 포함될 예정이나, 일부 아이템은 바뀔 가능성 있습니다.",
      "en": "A backpack, T-shirt, hat, water bottle, folding fan, sports towel and rosary (bracelet) are planned, though some items may change.",
      "es": "Está previsto que incluya una mochila, una camiseta, una gorra, una botella de agua, un abanico plegable, una toalla deportiva y un rosario (pulsera), aunque algunos artículos podrían cambiar.",
      "fr": "Il est prévu d'y inclure un sac à dos, un T-shirt, une casquette, une gourde, un éventail pliable, une serviette de sport et un chapelet (bracelet), mais certains articles pourraient changer.",
      "it": "Sono previsti uno zaino, una maglietta, un cappello, una borraccia, un ventaglio pieghevole, un asciugamano sportivo e un rosario (braccialetto), anche se alcuni articoli potrebbero cambiare.",
      "pt": "Estão previstos uma mochila, uma t-shirt, um chapéu, uma garrafa de água, um leque dobrável, uma toalha desportiva e um terço (pulseira), embora alguns artigos possam mudar."
    },
    "sub": {
      "ko": "순례자 키트",
      "en": "Pilgrim Kit",
      "es": "Kit del peregrino",
      "fr": "Kit du pèlerin",
      "it": "Kit del pellegrino",
      "pt": "Kit do peregrino"
    },
    "subNo": "a"
  },
  {
    "id": "Q76",
    "no": "Q76",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation",
      "it": "Check-in",
      "pt": "Credenciamento"
    },
    "topicNo": "1",
    "q": {
      "ko": "스마트폰이 없는 순례자는 체크인 및 행사 참여에 필요한 정보와 서비스에 어떻게 접근하며, 식사카드 등 필요한 카드와 물품은 어떤 방식으로 제공받나요?",
      "en": "How will pilgrims without a smartphone access the information and services needed for check-in and the events, and how will they receive the cards and items they need, such as the meal card?",
      "es": "¿Cómo accederán los peregrinos sin smartphone a la información y los servicios necesarios para la acreditación y los actos, y cómo recibirán las tarjetas y artículos que necesitan, como la tarjeta de comidas?",
      "fr": "Comment les pèlerins sans smartphone accéderont-ils aux informations et services nécessaires à l'accréditation et aux événements, et comment recevront-ils les cartes et articles dont ils ont besoin, comme la carte repas ?",
      "it": "Come potranno i pellegrini senza smartphone accedere alle informazioni e ai servizi necessari per il check-in e gli eventi, e come riceveranno le carte e gli articoli necessari, come la carta pasti?",
      "pt": "Como é que os peregrinos sem smartphone vão aceder às informações e serviços necessários para o check-in e os eventos, e como vão receber os cartões e artigos de que precisam, como o cartão de refeições?"
    },
    "a": {
      "ko": "리더 그룹이 카드 활성 및 추가적인 정보 제공을 해야 합니다. 체크인 시 그룹리더가 대표해서 선불카드를 포함한 KIT를 제공받고 구성원들에게 배분합니다.",
      "en": "The group leader must activate the cards and provide any additional information. At check-in, the group leader receives the kits, including the prepaid cards, on behalf of the group and distributes them to members.",
      "es": "El líder del grupo debe activar las tarjetas y facilitar la información adicional. En la acreditación, el líder del grupo recibe los kits, incluidas las tarjetas prepago, en nombre del grupo y los reparte entre los miembros.",
      "fr": "Le responsable du groupe doit activer les cartes et transmettre les informations complémentaires. Lors de l'accréditation, le responsable du groupe reçoit au nom du groupe les kits, y compris les cartes prépayées, et les distribue aux membres.",
      "it": "Il responsabile di gruppo deve attivare le carte e fornire eventuali informazioni aggiuntive. Al check-in, il responsabile di gruppo riceve i kit, comprese le carte prepagate, per conto del gruppo e li distribuisce ai membri.",
      "pt": "O responsável de grupo tem de ativar os cartões e fornecer eventuais informações adicionais. No check-in, o responsável de grupo recebe os kits, incluindo os cartões pré-pagos, em nome do grupo e distribui-os pelos membros."
    },
    "sub": {
      "ko": "체크인 진행",
      "en": "Check-in Procedure",
      "es": "Procedimiento de acreditación",
      "fr": "Procédure d'accréditation",
      "it": "Procedura di check-in",
      "pt": "Procedimento de credenciamento"
    },
    "subNo": "b"
  },
  {
    "id": "Q77",
    "no": "Q77",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation",
      "it": "Check-in",
      "pt": "Credenciamento"
    },
    "topicNo": "1",
    "q": {
      "ko": "사제와 부제는 소속 그룹과 함께 체크인하나요, 아니면 별도의 지정 장소에서 체크인해야 하나요? 그룹 리더가 사제·부제를 대신하여 신분 확인 및 영대 등 성직자용 물품을 수령할 수 있는지, 또는 본인이 직접 방문해야 하는지 궁금합니다.",
      "en": "Do priests and deacons check in with their group, or at a separate designated place? Can the group leader complete identity verification on their behalf and collect clerical items such as stoles, or must they come in person?",
      "es": "¿Los sacerdotes y diáconos se acreditan con su grupo o en un lugar designado aparte? ¿Puede el líder del grupo completar la verificación de identidad en su nombre y recoger los artículos para el clero, como las estolas, o deben acudir en persona?",
      "fr": "Les prêtres et diacres sont-ils accrédités avec leur groupe, ou dans un lieu désigné séparé ? Le responsable du groupe peut-il effectuer la vérification d'identité à leur place et retirer les articles destinés au clergé, comme les étoles, ou doivent-ils venir en personne ?",
      "it": "Sacerdoti e diaconi fanno il check-in con il loro gruppo o in un luogo separato designato? Il responsabile di gruppo può completare la verifica dell'identità per loro conto e ritirare gli articoli per il clero, come le stole, o devono presentarsi di persona?",
      "pt": "Os sacerdotes e diáconos fazem o check-in com o seu grupo ou num local separado designado? O responsável de grupo pode concluir a verificação da identidade em seu nome e levantar artigos para o clero, como estolas, ou têm de comparecer pessoalmente?"
    },
    "a": {
      "ko": "숙박이 포함된 패키지로 등록한 사제와 부제는 배정된 본당에서 소속 그룹과 함께 체크인할 수 있습니다. 다만, 체크인 담당자가 사제·부제의 신분을 직접 확인한 후 크리덴셜과 키트를 지급하므로, 그룹 리더가 신분 확인이나 해당 물품 수령을 대신할 수는 없습니다. 숙박이 포함되지 않은 패키지로 등록한 사제와 부제는 순례자센터 내 사제·부제 전용 체크인 장소를 직접 방문하여 신분 확인과 물품 수령을 진행해야 합니다.\n영대 및 제의 배포건은 현재 검토중이며, 구체적인 사항은 확정 후 안내드리겠습니다.",
      "en": "Priests and deacons registered for a package with accommodation can check in with their group at their assigned parish. Because check-in staff verify priests' and deacons' identity in person before issuing credentials and kits, the group leader cannot complete identity verification or collect these items on their behalf. Priests and deacons registered for a package without accommodation must go in person to the dedicated priests' and deacons' check-in area in the Pilgrim Center to complete identity verification and collect their items.\nThe distribution of stoles and vestments is currently under review. We will provide further details once it has been confirmed.",
      "es": "Los sacerdotes y diáconos inscritos en un paquete con alojamiento pueden acreditarse con su grupo en su parroquia asignada. Como el personal de acreditación verifica en persona la identidad de sacerdotes y diáconos antes de entregar las credenciales y los kits, el líder del grupo no puede completar la verificación de identidad ni recoger estos artículos en su nombre. Los sacerdotes y diáconos inscritos en un paquete sin alojamiento deben acudir en persona a la zona de acreditación exclusiva para sacerdotes y diáconos del Centro del Peregrino para completar la verificación de identidad y recoger sus artículos.\nLa distribución de estolas y vestiduras está actualmente en estudio. Daremos más detalles una vez confirmada.",
      "fr": "Les prêtres et diacres inscrits à un forfait avec hébergement peuvent être accrédités avec leur groupe dans leur paroisse attribuée. Comme le personnel d'accréditation vérifie en personne l'identité des prêtres et des diacres avant de remettre les badges et les kits, le responsable du groupe ne peut pas effectuer la vérification d'identité ni retirer ces articles à leur place. Les prêtres et diacres inscrits à un forfait sans hébergement doivent se rendre en personne à l'espace d'accréditation réservé aux prêtres et diacres du Centre des pèlerins pour la vérification d'identité et le retrait de leurs articles.\nLa distribution des étoles et des vêtements liturgiques est actuellement à l'étude. Nous donnerons plus de détails une fois qu'elle aura été confirmée.",
      "it": "I sacerdoti e i diaconi iscritti a un pacchetto con alloggio possono fare il check-in con il loro gruppo nella parrocchia assegnata. Poiché il personale del check-in verifica di persona l'identità di sacerdoti e diaconi prima di rilasciare credenziali e kit, il responsabile di gruppo non può completare la verifica dell'identità né ritirare questi articoli per loro conto. I sacerdoti e i diaconi iscritti a un pacchetto senza alloggio devono recarsi di persona all'area check-in dedicata a sacerdoti e diaconi nel Centro del Pellegrino per completare la verifica dell'identità e ritirare i loro articoli.\nLa distribuzione di stole e paramenti è attualmente in fase di valutazione. Forniremo ulteriori dettagli una volta confermata.",
      "pt": "Os sacerdotes e diáconos inscritos num pacote com alojamento podem fazer o check-in com o seu grupo na paróquia atribuída. Como o pessoal do check-in verifica pessoalmente a identidade dos sacerdotes e diáconos antes de emitir credenciais e kits, o responsável de grupo não pode concluir a verificação da identidade nem levantar estes artigos em seu nome. Os sacerdotes e diáconos inscritos num pacote sem alojamento têm de se dirigir pessoalmente à zona de check-in dedicada a sacerdotes e diáconos no Centro do Peregrino para concluir a verificação da identidade e levantar os seus artigos.\nA distribuição de estolas e paramentos está atualmente em análise. Daremos mais pormenores logo que esteja confirmada."
    },
    "sub": {
      "ko": "체크인 진행",
      "en": "Check-in Procedure",
      "es": "Procedimiento de acreditación",
      "fr": "Procédure d'accréditation",
      "it": "Procedura di check-in",
      "pt": "Procedimento de credenciamento"
    },
    "subNo": "b"
  },
  {
    "id": "Q78",
    "no": "Q78",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation",
      "it": "Check-in",
      "pt": "Credenciamento"
    },
    "topicNo": "1",
    "q": {
      "ko": "숙박 미포함 그룹의 경우 그룹 리더가 전체 순례자를 동반하지 않고 대표로 순례자센터에서 체크인 및 물품 수령을 할 수 있나요?",
      "en": "For groups without accommodation, can the group leader check in and collect items at the Pilgrim Center on behalf of everyone, without bringing all the pilgrims?",
      "es": "En el caso de los grupos sin alojamiento, ¿puede el líder del grupo acreditarse y recoger los artículos en el Centro del Peregrino en nombre de todos, sin llevar a todos los peregrinos?",
      "fr": "Pour les groupes sans hébergement, le responsable du groupe peut-il être accrédité et retirer les articles au Centre des pèlerins au nom de tous, sans venir avec tous les pèlerins ?",
      "it": "Per i gruppi senza alloggio, il responsabile di gruppo può fare il check-in e ritirare gli articoli al Centro del Pellegrino per conto di tutti, senza portare tutti i pellegrini?",
      "pt": "Para grupos sem alojamento, o responsável de grupo pode fazer o check-in e levantar os artigos no Centro do Peregrino em nome de todos, sem levar todos os peregrinos?"
    },
    "a": {
      "ko": "가능합니다. 숙박이 포함되지 않은 패키지로 등록한 그룹은 전체 참가자가 동행하지 않아도 그룹 리더가 대표로 순례자센터를 방문하여 그룹 체크인과 물품 수령을 진행할 수 있습니다. 다만, 그룹에 소속된 사제와 부제는 순례자센터 내 사제·부제 전용 체크인 장소를 직접 방문하여 별도의 체크인 절차를 진행해야 합니다.",
      "en": "Yes. For groups registered for a package without accommodation, the group leader can visit the Pilgrim Center on the group's behalf to check in and collect items, without all participants being present. However, priests and deacons in the group must go in person to the dedicated priests' and deacons' check-in area in the Pilgrim Center for a separate check-in.",
      "es": "Sí. En los grupos inscritos en un paquete sin alojamiento, el líder del grupo puede acudir al Centro del Peregrino en nombre del grupo para acreditarse y recoger los artículos, sin que estén presentes todos los participantes. No obstante, los sacerdotes y diáconos del grupo deben acudir en persona a la zona de acreditación exclusiva para sacerdotes y diáconos del Centro del Peregrino para una acreditación aparte.",
      "fr": "Oui. Pour les groupes inscrits à un forfait sans hébergement, le responsable du groupe peut se rendre au Centre des pèlerins au nom du groupe pour l'accréditation et le retrait des articles, sans que tous les participants soient présents. Toutefois, les prêtres et diacres du groupe doivent se rendre en personne à l'espace d'accréditation réservé aux prêtres et diacres du Centre des pèlerins pour une accréditation distincte.",
      "it": "Sì. Per i gruppi iscritti a un pacchetto senza alloggio, il responsabile di gruppo può recarsi al Centro del Pellegrino per conto del gruppo per fare il check-in e ritirare gli articoli, senza che tutti i partecipanti siano presenti. Tuttavia, i sacerdoti e i diaconi del gruppo devono recarsi di persona all'area check-in dedicata a sacerdoti e diaconi nel Centro del Pellegrino per un check-in separato.",
      "pt": "Sim. Para os grupos inscritos num pacote sem alojamento, o responsável de grupo pode ir ao Centro do Peregrino em nome do grupo para fazer o check-in e levantar os artigos, sem que todos os participantes estejam presentes. No entanto, os sacerdotes e diáconos do grupo têm de se dirigir pessoalmente à zona de check-in dedicada a sacerdotes e diáconos no Centro do Peregrino para um check-in separado."
    },
    "sub": {
      "ko": "순례자 센터",
      "en": "Pilgrim Center",
      "es": "Centro del Peregrino",
      "fr": "Centre des pèlerins",
      "it": "Centro del Pellegrino",
      "pt": "Centro do Peregrino"
    },
    "subNo": "c"
  },
  {
    "id": "Q79",
    "no": "Q79",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "체크인",
      "en": "Check-in",
      "es": "Acreditación",
      "fr": "Accréditation",
      "it": "Check-in",
      "pt": "Credenciamento"
    },
    "topicNo": "1",
    "q": {
      "ko": "순례자센터는 하루 중 몇 시부터 몇 시까지 운영되나요?",
      "en": "What hours of the day will the Pilgrim Center be open?",
      "es": "¿En qué horario abrirá el Centro del Peregrino?",
      "fr": "À quelles heures le Centre des pèlerins sera-t-il ouvert ?",
      "it": "In quali orari sarà aperto il Centro del Pellegrino?",
      "pt": "Em que horário estará aberto o Centro do Peregrino?"
    },
    "a": {
      "ko": "현장등록과 비숙박 포함 패키지를 신청한 그룹의 체크인이 진행될 순례자센터는 단기 봉사자 체크인이 시작되는 7월 25일부터 8월 8일까지 운영 예정입니다. 보다 구체적인 운영 계획은 추후 공지 드리도록 하겠습니다.",
      "en": "The Pilgrim Center, where on-site registration and check-in for groups on packages without accommodation will take place, is scheduled to operate from July 25, when check-in for short-term volunteers begins, to August 8. A more detailed operating plan will be announced later.",
      "es": "El Centro del Peregrino, donde se realizarán la inscripción presencial y la acreditación de los grupos con paquetes sin alojamiento, tiene previsto funcionar desde el 25 de julio, cuando comienza la acreditación de los voluntarios de corta duración, hasta el 8 de agosto. Más adelante se anunciará un plan de funcionamiento más detallado.",
      "fr": "Le Centre des pèlerins, où auront lieu l'inscription sur place et l'accréditation des groupes ayant un forfait sans hébergement, devrait fonctionner du 25 juillet, date du début de l'accréditation des volontaires de courte durée, jusqu'au 8 août. Un plan de fonctionnement plus détaillé sera communiqué ultérieurement.",
      "it": "Il Centro del Pellegrino, dove si svolgeranno l'iscrizione in loco e il check-in per i gruppi con pacchetti senza alloggio, dovrebbe essere operativo dal 25 luglio, quando inizia il check-in dei volontari di breve durata, all'8 agosto. Un piano operativo più dettagliato sarà comunicato in seguito.",
      "pt": "O Centro do Peregrino, onde decorrerão a inscrição no local e o check-in dos grupos com pacotes sem alojamento, deverá funcionar de 25 de julho, quando começa o check-in dos voluntários de curta duração, até 8 de agosto. Um plano operacional mais detalhado será anunciado mais tarde."
    },
    "sub": {
      "ko": "순례자 센터",
      "en": "Pilgrim Center",
      "es": "Centro del Peregrino",
      "fr": "Centre des pèlerins",
      "it": "Centro del Pellegrino",
      "pt": "Centro do Peregrino"
    },
    "subNo": "c"
  },
  {
    "id": "Q80",
    "no": "Q80",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자 앱 사용 등 원활한 인터넷 이용을 위해 WYD 기간 동안 숙소와 주요 행사장 등에 공공 Wi-Fi가 제공되나요? 대규모 순례자가 동시에 접속할 경우에도 안정적으로 이용할 수 있는 통신 환경이 마련되나요?",
      "en": "Will public Wi-Fi be provided at accommodation and the main venues during WYD for smooth internet use, including the Pilgrim App? Will there be a network environment that remains stable when large numbers of pilgrims connect at the same time?",
      "es": "¿Habrá wifi público en los alojamientos y en los lugares principales durante la JMJ para un uso fluido de internet, incluida la App del Peregrino? ¿Habrá una red que se mantenga estable cuando se conecten a la vez gran cantidad de peregrinos?",
      "fr": "Un Wi-Fi public sera-t-il disponible dans les hébergements et sur les principaux sites pendant les JMJ pour faciliter l'usage d'Internet, notamment de l'Application du pèlerin ? Le réseau restera-t-il stable lorsqu'un très grand nombre de pèlerins se connecteront en même temps ?",
      "it": "Durante la GMG sarà fornito il Wi-Fi pubblico negli alloggi e nelle sedi principali per un uso agevole di internet, compresa l'App del Pellegrino? Ci sarà una rete che resti stabile quando un gran numero di pellegrini si connette contemporaneamente?",
      "pt": "Será disponibilizado Wi-Fi público no alojamento e nos locais principais durante a JMJ, para uma utilização fluida da internet, incluindo a App do Peregrino? Haverá uma rede que se mantenha estável quando um grande número de peregrinos se ligar ao mesmo tempo?"
    },
    "a": {
      "ko": "서울시내에는 많은 공공 와이파이가 설치되어 있습니다. 조직위원회는 순례자들의 편의와 안전을 위해 서울시 및 관련 기업, 기관들과 다양한 분야에서 협력 중입니다.",
      "en": "There is a great deal of public Wi-Fi throughout Seoul. The LOC is working with the Seoul Metropolitan Government and related companies and institutions in many areas for pilgrims' convenience and safety.",
      "es": "En todo Seúl hay una gran cantidad de wifi público. El COL colabora en muchos ámbitos con el Gobierno Metropolitano de Seúl y con empresas e instituciones relacionadas para la comodidad y seguridad de los peregrinos.",
      "fr": "Séoul dispose de très nombreux points d'accès Wi-Fi publics. Le COL travaille dans de nombreux domaines avec la Ville de Séoul et les entreprises et institutions concernées pour le confort et la sécurité des pèlerins.",
      "it": "A Seoul c'è moltissimo Wi-Fi pubblico. Il COL sta collaborando con il Governo Metropolitano di Seoul e con aziende e istituzioni interessate in molti ambiti per la comodità e la sicurezza dei pellegrini.",
      "pt": "Há muito Wi-Fi público por toda a cidade de Seul. O COL está a trabalhar com o Governo Metropolitano de Seul e com empresas e instituições relacionadas em muitas áreas, para a comodidade e segurança dos peregrinos."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q81",
    "no": "Q81",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "교황청이 승인한 순례길의 운영 방식과 참여 방법, 순례 확인서 또는 증명서 발급 절차도 안내받을 수 있나요?",
      "en": "Can we also get information on how the Vatican-approved pilgrimage routes work, how to take part, and how pilgrimage confirmations or certificates are issued?",
      "es": "¿Podemos recibir también información sobre cómo funcionan las rutas de peregrinación aprobadas por el Vaticano, cómo participar y cómo se emiten las confirmaciones o certificados de peregrinación?",
      "fr": "Pouvons-nous aussi être informés du fonctionnement des chemins de pèlerinage approuvés par le Vatican, de la manière d'y participer et de la délivrance des attestations ou certificats de pèlerinage ?",
      "it": "Possiamo avere anche informazioni su come funzionano i percorsi di pellegrinaggio approvati dal Vaticano, come parteciparvi e come vengono rilasciate conferme o attestati di pellegrinaggio?",
      "pt": "Podemos também obter informações sobre como funcionam os percursos de peregrinação aprovados pelo Vaticano, como participar e como são emitidas as confirmações ou certificados de peregrinação?"
    },
    "a": {
      "ko": "교황청이 승인한 순례길은 별도의 신청 없이 언제든지 자유롭게 방문하여 걸으실 수 있습니다. 순례길은 총 24개소, 3개 코스(1코스 말씀의 길 / 2코스 생명의 길 / 3코스 일치의 길)로 구성되어 있습니다.\nWYD 한정 프로그램인 '박물관과 함께하는 순례길' 대상 박물관 3곳을 모두 방문하시면 완주 발급증을 다운받으실 수 있습니다. 박물관 운영 시간 내에 사전 신청없이 방문 가능하며, 스마트폰의 블루투스를 켜고 순례자앱을 실행한 상태로 박물관을 관람합니다. 박물관 내 인증 기기와 휴대폰이 연동되어 순례자앱에서 방문이 자동으로 인증됩니다. 지정 박물관 3곳을 모두 방문하면 방문 인증 완료 메시지가 표시됩니다. 화면 하단의 완주증 내려받기 버튼을 눌러 완주증을 발급받으실 수 있습니다.",
      "en": "The Vatican-approved pilgrimage routes can be visited and walked freely at any time, without registration. The Seoul Pilgrimage Routes cover 24 sites on three courses (Course 1, The Good News Road / Course 2, The Eternal Life Road / Course 3, The Unity Road).\nIf you visit all three museums in the 'Pilgrimage with Museums' program, which is only available during WYD Seoul 2027, you can download a certificate of completion. You can visit during museum opening hours without booking: turn on your smartphone's Bluetooth, open the Pilgrim App and tour the museum. The verification device in the museum links with your phone, and your visit is automatically verified in the Pilgrim App. Once you have visited all three designated museums, a message confirming completion appears. Press the download button for the certificate of completion at the bottom of the screen to receive it.",
      "es": "Las rutas de peregrinación aprobadas por el Vaticano pueden visitarse y recorrerse libremente en cualquier momento, sin inscripción. Las Rutas de Peregrinación de Seúl abarcan 24 lugares en tres itinerarios (Itinerario 1, Camino de la Buena Nueva / Itinerario 2, Camino de la Vida Eterna / Itinerario 3, Camino de la Unidad).\nSi visitan los tres museos del programa 'Peregrinación con los museos', disponible solo durante la JMJ Seúl 2027, podrán descargar un certificado de finalización. Pueden visitarlos en horario de apertura sin reserva: activen el Bluetooth de su smartphone, abran la App del Peregrino y recorran el museo. El dispositivo de verificación del museo se conecta con su teléfono y su visita se verifica automáticamente en la App del Peregrino. Una vez visitados los tres museos designados, aparecerá un mensaje que confirma la finalización. Pulsen el botón de descarga del certificado de finalización en la parte inferior de la pantalla para obtenerlo.",
      "fr": "Les chemins de pèlerinage approuvés par le Vatican peuvent être visités et parcourus librement à tout moment, sans inscription. Les Chemins de pèlerinage de Séoul couvrent 24 sites sur trois parcours (Parcours 1, Chemin de la Bonne Nouvelle / Parcours 2, Chemin de la Vie éternelle / Parcours 3, Chemin de l'Unité).\nSi vous visitez les trois musées du programme 'Pèlerinage avec les musées', proposé uniquement pendant les JMJ Séoul 2027, vous pourrez télécharger un certificat d'accomplissement. Vous pouvez les visiter aux heures d'ouverture sans réservation : activez le Bluetooth de votre smartphone, ouvrez l'Application du pèlerin et visitez le musée. Le dispositif de validation du musée se connecte à votre téléphone et votre visite est automatiquement validée dans l'Application du pèlerin. Une fois les trois musées désignés visités, un message de confirmation s'affiche. Appuyez sur le bouton de téléchargement du certificat d'accomplissement en bas de l'écran pour l'obtenir.",
      "it": "I percorsi di pellegrinaggio approvati dal Vaticano possono essere visitati e percorsi liberamente in qualsiasi momento, senza iscrizione. I Percorsi di pellegrinaggio di Seoul comprendono 24 luoghi su tre itinerari (Itinerario 1, La Strada della Buona Novella / Itinerario 2, La Strada della Vita Eterna / Itinerario 3, La Strada dell'Unità).\nSe visitate tutti e tre i musei del programma 'Pellegrinaggio con i musei', disponibile solo durante la GMG Seoul 2027, potete scaricare un attestato di completamento. Potete visitarli durante l'orario di apertura dei musei senza prenotazione: attivate il Bluetooth dello smartphone, aprite l'App del Pellegrino e visitate il museo. Il dispositivo di verifica nel museo si collega al vostro telefono, e la visita viene verificata automaticamente nell'App del Pellegrino. Una volta visitati tutti e tre i musei indicati, compare un messaggio di conferma del completamento. Premete il pulsante di download dell'attestato di completamento in fondo allo schermo per riceverlo.",
      "pt": "Os percursos de peregrinação aprovados pelo Vaticano podem ser visitados e percorridos livremente a qualquer momento, sem inscrição. Os Percursos de Peregrinação de Seul abrangem 24 locais em três itinerários (Itinerário 1, O Caminho da Boa Nova / Itinerário 2, O Caminho da Vida Eterna / Itinerário 3, O Caminho da Unidade).\nSe visitarem os três museus do programa 'Peregrinação com Museus', disponível apenas durante a JMJ Seul 2027, podem descarregar um certificado de conclusão. Podem visitá-los durante o horário de abertura dos museus, sem marcação: liguem o Bluetooth do smartphone, abram a App do Peregrino e visitem o museu. O dispositivo de verificação no museu liga-se ao vosso telemóvel, e a visita é verificada automaticamente na App do Peregrino. Depois de visitarem os três museus designados, aparece uma mensagem a confirmar a conclusão. Carreguem no botão de descarregar o certificado de conclusão, no fundo do ecrã, para o receber."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q82",
    "no": "Q82",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "그룹 리더와 하위그룹 리더도 같은 앱 안에서 자신의 순례자 기능과 리더 기능을 함께 사용할 수 있는지 궁금합니다. 즉, 본인 화면과 리더용 화면을 서로 전환할 수 있는지에 관한 물음입니다.",
      "en": "Can group leaders and Subgroup leaders use both their own pilgrim functions and their leader functions within the same app? In other words, can they switch between their own screen and the leader screen?",
      "es": "¿Pueden los líderes de grupo y los líderes de Subgroup usar tanto sus funciones de peregrino como sus funciones de líder en la misma app? Es decir, ¿pueden cambiar entre su propia pantalla y la pantalla de líder?",
      "fr": "Les responsables de groupe et de Subgroup peuvent-ils utiliser à la fois leurs fonctions de pèlerin et leurs fonctions de responsable dans la même application ? Autrement dit, peuvent-ils passer de leur propre écran à l'écran de responsable ?",
      "it": "I responsabili di gruppo e di Subgroup possono usare sia le proprie funzioni di pellegrino sia quelle di responsabile nella stessa app? In altre parole, possono passare dalla propria schermata a quella di responsabile?",
      "pt": "Os responsáveis de grupo e de Subgroup podem usar tanto as suas funções de peregrino como as de responsável na mesma app? Ou seja, podem alternar entre o seu ecrã e o ecrã de responsável?"
    },
    "a": {
      "ko": "불가능합니다.\n웹회원 -> 참가인증(그룹코드) -> 리더인증이 일관성 있게 1개의 계정으로만 사용가능합니다. 만약 N개 계정을 사용하려면 웹회원부터 N개를 등록하셔야 합니다. 다만 오프라인에서의 앱 사용을 원활히 하기 위해 폰 로컬에 저장되어 있는 일부 정보는 제외될 수 있습니다. (관심, 완주증 등)",
      "en": "No.\nWeb membership → participation verification (group code) → leader verification can be used consistently with only one account. To use X number of accounts, you must register that number of web memberships from the start. However, some information stored locally on the phone, to keep the app working smoothly offline, may be excluded (favorites, certificates of completion, etc.).",
      "es": "No.\nEl registro web → la verificación de participación (código de grupo) → la verificación de líder solo pueden usarse de forma coherente con una única cuenta. Para usar un número X de cuentas, deben registrar ese mismo número de cuentas web desde el principio. No obstante, puede excluirse parte de la información guardada localmente en el teléfono para que la app funcione bien sin conexión (favoritos, certificados de finalización, etc.).",
      "fr": "Non.\nL'inscription web → la validation de participation (code de groupe) → la validation de responsable ne peuvent être utilisées de manière cohérente qu'avec un seul compte. Pour utiliser un nombre X de comptes, il faut créer ce même nombre de comptes web dès le départ. Toutefois, certaines informations enregistrées localement sur le téléphone, pour que l'application fonctionne bien hors ligne, peuvent ne pas être reprises (favoris, certificats d'accomplissement, etc.).",
      "it": "No.\nIscrizione web → verifica della partecipazione (codice di gruppo) → verifica del responsabile possono essere utilizzate in modo coerente con un solo account. Per usare X account, occorre registrare fin dall'inizio altrettante iscrizioni web. Tuttavia, alcune informazioni memorizzate localmente sul telefono, per mantenere il funzionamento dell'app offline, potrebbero essere escluse (preferiti, attestati di completamento, ecc.).",
      "pt": "Não.\nRegisto web → verificação da participação (código de grupo) → verificação do responsável podem ser usados de forma coerente com uma única conta. Para usar X contas, é preciso registar desde o início esse número de registos web. No entanto, algumas informações guardadas localmente no telemóvel, para manter a app a funcionar offline, poderão ser excluídas (favoritos, certificados de conclusão, etc.)."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q83",
    "no": "Q83",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "각 순례자는 개인 계정과 접속 정보를 받아 직접 앱을 활성화하나요?",
      "en": "Does each pilgrim receive a personal account and login details and activate the app themselves?",
      "es": "¿Recibe cada peregrino una cuenta personal y datos de acceso, y activa la app por sí mismo?",
      "fr": "Chaque pèlerin reçoit-il un compte personnel et des identifiants, et active-t-il lui-même l'application ?",
      "it": "Ogni pellegrino riceve un account personale e le credenziali di accesso e attiva l'app da solo?",
      "pt": "Cada peregrino recebe uma conta pessoal e dados de acesso e ativa a app por si próprio?"
    },
    "a": {
      "ko": "웹회원은 개인별로 자유롭게 가입합니다.\n그룹코드는 리더를 통해 공유 받은 그룹정보를 입력해서 추가 인증을 받을 수 있습니다.",
      "en": "Each person signs up for web membership freely.\nFor the group code, an additional verification can be obtained by entering the group information shared by the leader.",
      "es": "Cada persona se registra libremente como usuario web.\nPara el código de grupo, se puede obtener una verificación adicional introduciendo la información del grupo que facilite el líder.",
      "fr": "Chacun crée librement son compte web.\nPour le code de groupe, une validation supplémentaire peut être obtenue en saisissant les informations du groupe transmises par le responsable.",
      "it": "Ciascuno si iscrive liberamente come utente web.\nPer il codice di gruppo, si può ottenere una verifica aggiuntiva inserendo le informazioni del gruppo condivise dal responsabile.",
      "pt": "Cada pessoa faz livremente o seu registo web.\nPara o código de grupo, pode obter-se uma verificação adicional introduzindo as informações do grupo partilhadas pelo responsável."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q84",
    "no": "Q84",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "하나의 계정에 이메일 하나를 사용할 경우, 그룹 내에서 해당 이메일과 비밀번호를 공유해서 로그인해야 하나요, 아니면 앱상으로는 같은 그룹에 여러 항목으로 들어가더라도 각 참가자가 자신만의 계정으로 로그인하나요?",
      "en": "If one email is used per account, must the group share that email and password to log in, or does each participant log in with their own account even if they appear as several entries in the same group in the app?",
      "es": "Si se usa un correo electrónico por cuenta, ¿debe el grupo compartir ese correo y la contraseña para iniciar sesión, o cada participante inicia sesión con su propia cuenta aunque figuren varias entradas en el mismo grupo en la app?",
      "fr": "Si une adresse e-mail est utilisée par compte, le groupe doit-il partager cette adresse et le mot de passe pour se connecter, ou chaque participant se connecte-t-il avec son propre compte même s'ils apparaissent comme plusieurs entrées dans le même groupe dans l'application ?",
      "it": "Se si usa un'e-mail per account, il gruppo deve condividere quell'e-mail e la password per accedere, oppure ogni partecipante accede con il proprio account anche se compare come più voci nello stesso gruppo nell'app?",
      "pt": "Se for usado um e-mail por conta, o grupo tem de partilhar esse e-mail e a palavra-passe para iniciar sessão, ou cada participante inicia sessão com a sua própria conta, mesmo que apareça como várias entradas no mesmo grupo na app?"
    },
    "a": {
      "ko": "계정은 개인 정보이기에 개별적으로 가입해야 합니다. 그룹코드 인증과는 별개입니다.",
      "en": "An account is personal information, so each person must sign up individually. This is separate from group code verification.",
      "es": "La cuenta es información personal, por lo que cada persona debe registrarse individualmente. Esto es independiente de la verificación con el código de grupo.",
      "fr": "Le compte relève des données personnelles ; chacun doit donc créer le sien. Cela est indépendant de la validation par code de groupe.",
      "it": "Un account è un'informazione personale, quindi ciascuno deve iscriversi individualmente. Ciò è distinto dalla verifica del codice di gruppo.",
      "pt": "Uma conta é informação pessoal, pelo que cada pessoa tem de se registar individualmente. Isto é independente da verificação do código de grupo."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q85",
    "no": "Q85",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "앱을 사용하려면 인터넷에 연결되어 있어야 하나요? 그렇다면 와이파이가 제공되나요, 아니면 순례자가 심카드나 이심(eSIM)을 구매해야 하나요?",
      "en": "Does the app require an internet connection? If so, will Wi-Fi be provided, or must pilgrims buy a SIM card or eSIM?",
      "es": "¿La app necesita conexión a internet? Si es así, ¿habrá wifi o los peregrinos deben comprar una tarjeta SIM o eSIM?",
      "fr": "L'application nécessite-t-elle une connexion Internet ? Si oui, un Wi-Fi sera-t-il fourni, ou les pèlerins doivent-ils acheter une carte SIM ou une eSIM ?",
      "it": "L'app richiede una connessione internet? Se sì, sarà fornito il Wi-Fi, o i pellegrini devono acquistare una SIM o una eSIM?",
      "pt": "A app precisa de ligação à internet? Se sim, será disponibilizado Wi-Fi, ou os peregrinos têm de comprar um cartão SIM ou eSIM?"
    },
    "a": {
      "ko": "순례자는 공공 와이파이 및 개인의 셀룰러 데이터를 이용하여 앱을 사용할 수 있습니다. 다만 오프라인 상태에서도 최소기능은 유지될수 있도록 제작되었습니다(ex. 행사안내 등) 순례자는 본인의 심카드나 이심(eSIM)을 직접 구매하여 사용해야 합니다.",
      "en": "Pilgrims can use the app with public Wi-Fi or their own mobile data. It has been built so that minimum functions remain available offline (e.g. event information). Pilgrims must buy and use their own SIM card or eSIM.",
      "es": "Los peregrinos pueden usar la app con el wifi público o con sus propios datos móviles. Está diseñada para que las funciones mínimas sigan disponibles sin conexión (p. ej., la información de los actos). Los peregrinos deben comprar y usar su propia tarjeta SIM o eSIM.",
      "fr": "Les pèlerins peuvent utiliser l'application avec le Wi-Fi public ou leurs propres données mobiles. Elle a été conçue pour que les fonctions minimales restent disponibles hors ligne (p. ex. informations sur les événements). Les pèlerins doivent acheter et utiliser leur propre carte SIM ou eSIM.",
      "it": "I pellegrini possono usare l'app con il Wi-Fi pubblico o con i propri dati mobili. È stata realizzata in modo che le funzioni minime restino disponibili offline (ad es. informazioni sugli eventi). I pellegrini devono acquistare e utilizzare la propria SIM o eSIM.",
      "pt": "Os peregrinos podem usar a app com Wi-Fi público ou com os seus próprios dados móveis. Foi concebida para que as funções mínimas continuem disponíveis offline (por exemplo, informações sobre os eventos). Os peregrinos têm de comprar e usar o seu próprio cartão SIM ou eSIM."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q86",
    "no": "Q86",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자앱에는 다국어 번역, 문의용 챗봇 등의 기능이 제공되나요? 예를 들어 텍스트를 사진으로 찍어 번역하거나, 대화를 음성으로 번역하는 기능이 있나요?",
      "en": "Will the Pilgrim App offer features such as multilingual translation or a chatbot for inquiries? For example, translating text by taking a photo, or translating conversations by voice?",
      "es": "¿Ofrecerá la App del Peregrino funciones como traducción multilingüe o un chatbot para consultas? Por ejemplo, traducir texto haciendo una foto o traducir conversaciones por voz.",
      "fr": "L'Application du pèlerin proposera-t-elle des fonctions comme la traduction multilingue ou un chatbot pour les questions ? Par exemple, traduire un texte en le photographiant, ou traduire une conversation à la voix ?",
      "it": "L'App del Pellegrino offrirà funzioni come la traduzione multilingue o un chatbot per le richieste? Ad esempio, tradurre un testo scattando una foto, o tradurre conversazioni a voce?",
      "pt": "A App do Peregrino vai oferecer funcionalidades como tradução multilingue ou um chatbot para pedidos de informação? Por exemplo, traduzir texto tirando uma fotografia, ou traduzir conversas por voz?"
    },
    "a": {
      "ko": "순례자앱에서는 6개 국어가 제공됩니다. 번역 및 통역 관련 별도 기능은 제공되지 않습니다.",
      "en": "The Pilgrim App is available in six languages. No separate translation or interpretation features are provided.",
      "es": "La App del Peregrino está disponible en seis idiomas. No ofrece funciones específicas de traducción ni de interpretación.",
      "fr": "L'Application du pèlerin est disponible en six langues. Aucune fonction de traduction ou d'interprétation n'est proposée.",
      "it": "L'App del Pellegrino è disponibile in sei lingue. Non sono previste funzioni separate di traduzione o interpretariato.",
      "pt": "A App do Peregrino está disponível em seis línguas. Não são disponibilizadas funcionalidades separadas de tradução ou interpretação."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q87",
    "no": "Q87",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자앱을 통해 주변 식당의 위치·수용 가능 인원 등 순례자에게 필요한 현지 정보를 제공하거나 실시간으로 안내받을 수 있나요? 순례지 주변 식당을 이용할 시 한꺼번에 많은 팀이 몰려서 식당을 찾아 해매다가 식사 시간을 놓치거나 예상 밖의 메뉴로 식사를 해결 못 할 경우도 있을것 같습니다.",
      "en": "Can the Pilgrim App provide local information pilgrims need, such as the location and capacity of nearby restaurants, or give real-time guidance? When using restaurants near the pilgrimage sites, many teams may arrive at once, wander looking for a restaurant, miss mealtimes, or be unable to eat because of unexpected menus.",
      "es": "¿Puede la App del Peregrino ofrecer la información local que necesitan los peregrinos, como la ubicación y la capacidad de los restaurantes cercanos, u orientar en tiempo real? Al usar los restaurantes cercanos a los lugares de peregrinación, pueden llegar muchos equipos a la vez, dar vueltas buscando restaurante, perder la hora de comer o no poder comer por menús inesperados.",
      "fr": "L'Application du pèlerin peut-elle fournir les informations locales dont les pèlerins ont besoin, comme l'emplacement et la capacité des restaurants proches, ou guider en temps réel ? Près des lieux de pèlerinage, de nombreuses équipes risquent d'arriver en même temps, d'errer à la recherche d'un restaurant, de manquer l'heure du repas ou de ne pas pouvoir manger à cause de menus inattendus.",
      "it": "L'App del Pellegrino può fornire informazioni locali utili ai pellegrini, come la posizione e la capienza dei ristoranti vicini, o dare indicazioni in tempo reale? Usando i ristoranti vicino ai luoghi di pellegrinaggio, molte squadre potrebbero arrivare contemporaneamente, girare alla ricerca di un ristorante, saltare i pasti o non riuscire a mangiare a causa di menu inattesi.",
      "pt": "A App do Peregrino pode fornecer informações locais de que os peregrinos precisam, como a localização e a capacidade dos restaurantes próximos, ou dar orientações em tempo real? Ao usar restaurantes perto dos locais de peregrinação, muitas equipas podem chegar ao mesmo tempo, andar à procura de um restaurante, perder as horas das refeições ou não conseguir comer devido a ementas inesperadas."
    },
    "a": {
      "ko": "순례자앱을 통해 모든 식당의 현재 정보를 제공해드리지는 않습니다.",
      "en": "The Pilgrim App does not provide current information on any restaurants.",
      "es": "La App del Peregrino no ofrece información actualizada sobre ningún restaurante.",
      "fr": "L'Application du pèlerin ne fournit pas d'informations à jour sur les restaurants.",
      "it": "L'App del Pellegrino non fornisce informazioni aggiornate su alcun ristorante.",
      "pt": "A App do Peregrino não fornece informações atualizadas sobre quaisquer restaurantes."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q88",
    "no": "Q88",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자앱은 언제부터 다운로드하여 사용할 수 있으며, iOS와 Android 모두 지원하나요? 또한 인터넷 연결이 원활하지 않은 상황에서도 앱의 주요 기능을 오프라인으로 사용할 수 있나요?",
      "en": "From when can the Pilgrim App be downloaded and used, and does it support both iOS and Android? Can its main features be used offline when the internet connection is poor?",
      "es": "¿Desde cuándo se puede descargar y usar la App del Peregrino, y es compatible con iOS y Android? ¿Se pueden usar sus funciones principales sin conexión cuando la conexión a internet sea deficiente?",
      "fr": "À partir de quand peut-on télécharger et utiliser l'Application du pèlerin, et est-elle disponible sur iOS et Android ? Ses principales fonctions peuvent-elles être utilisées hors ligne lorsque la connexion Internet est mauvaise ?",
      "it": "Da quando si può scaricare e usare l'App del Pellegrino, e supporta sia iOS sia Android? Le sue funzioni principali si possono usare offline quando la connessione internet è scarsa?",
      "pt": "A partir de quando se pode descarregar e usar a App do Peregrino, e suporta iOS e Android? As suas principais funcionalidades podem ser usadas offline quando a ligação à internet é fraca?"
    },
    "a": {
      "ko": "현재 서비스 제공중에 있습니다. 온라인에서 기본적인 정보를 일정 시간마다 업데이트해서 오프라인에서도 사용 가능하지만, 신규 정보 추출은 온라인상에서만 가능합니다.",
      "en": "The app is already in service. Basic information is updated online at set intervals so it can be used offline, but new information can only be retrieved online.",
      "es": "La app ya está en servicio. La información básica se actualiza en línea a intervalos fijos para que pueda usarse sin conexión, pero la información nueva solo puede obtenerse en línea.",
      "fr": "L'application est déjà en service. Les informations de base sont mises à jour en ligne à intervalles réguliers afin de pouvoir être utilisées hors ligne, mais les nouvelles informations ne peuvent être obtenues qu'en ligne.",
      "it": "L'app è già in servizio. Le informazioni di base vengono aggiornate online a intervalli regolari per poter essere usate offline, ma le nuove informazioni si possono ottenere solo online.",
      "pt": "A app já está em funcionamento. As informações básicas são atualizadas online a intervalos regulares para poderem ser usadas offline, mas as novas informações só podem ser obtidas online."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q89",
    "no": "Q89",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "주요 행사의 실시간 통역은 순례자앱에서도 이용할 수 있나요, 아니면 라디오 주파수를 통해서만 가능한가요?",
      "en": "Will live interpretation of the main events be available in the Pilgrim App too, or only through radio frequencies?",
      "es": "¿Estará disponible también en la App del Peregrino la interpretación en directo de los actos principales, o solo por radiofrecuencia?",
      "fr": "L'interprétation en direct des principaux événements sera-t-elle aussi disponible dans l'Application du pèlerin, ou seulement par fréquence radio ?",
      "it": "L'interpretariato in diretta degli eventi principali sarà disponibile anche nell'App del Pellegrino, o solo tramite frequenze radio?",
      "pt": "A interpretação em direto dos principais eventos estará disponível também na App do Peregrino, ou apenas através de frequências de rádio?"
    },
    "a": {
      "ko": "순례자앱에서는 실시간 통역 기능을 제공하지 않습니다.",
      "en": "The Pilgrim App does not provide live interpretation.",
      "es": "La App del Peregrino no ofrece interpretación en directo.",
      "fr": "L'Application du pèlerin ne propose pas d'interprétation en direct.",
      "it": "L'App del Pellegrino non fornisce interpretariato in diretta.",
      "pt": "A App do Peregrino não oferece interpretação em direto."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q90",
    "no": "Q90",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "그룹 리더와 순례자가 각각 입력해야 하는 정보는 무엇이며, 여권·티셔츠 사이즈·알레르기 등의 정보는 어떻게 등록하나요? 그룹 리더용 대시보드의 기능도 안내해 주시기 바랍니다.",
      "en": "What information must group leaders and pilgrims each enter, and how are passport details, T-shirt sizes, allergies and the like registered? Please also explain the features of the group leader dashboard.",
      "es": "¿Qué información debe introducir cada uno, los líderes de grupo y los peregrinos, y cómo se registran los datos del pasaporte, las tallas de camiseta, las alergias y similares? Expliquen también las funciones del panel del líder de grupo.",
      "fr": "Quelles informations les responsables de groupe et les pèlerins doivent-ils chacun saisir, et comment enregistre-t-on les données de passeport, les tailles de T-shirt, les allergies, etc. ? Merci de présenter aussi les fonctions du tableau de bord du responsable de groupe.",
      "it": "Quali informazioni devono inserire rispettivamente i responsabili di gruppo e i pellegrini, e come si registrano i dati del passaporto, le taglie delle magliette, le allergie e simili? Spiegateci anche le funzioni della dashboard del responsabile di gruppo.",
      "pt": "Que informações têm de introduzir, respetivamente, os responsáveis de grupo e os peregrinos, e como se registam os dados do passaporte, os tamanhos das t-shirts, as alergias e afins? Expliquem também as funcionalidades do painel do responsável de grupo."
    },
    "a": {
      "ko": "사전정보 입력은 그룹 리더만 등록 가능합니다. 순례자는 사전정보 입력이 불가합니다.\n인증된 그룹 리더는 그룹 대표로써 사전정보 입력 및 그룹원의 선불카드의 활성, 재발급 신청할 수 있는 권한이 부여됩니다.",
      "en": "Only group leaders can enter advance information; pilgrims cannot.\nA verified group leader, as the group's representative, is given the rights to enter advance information and to activate group members' prepaid cards and request reissues.",
      "es": "Solo los líderes de grupo pueden introducir la información previa; los peregrinos no.\nUn líder de grupo verificado, como representante del grupo, tiene permiso para introducir la información previa y para activar las tarjetas prepago de los miembros del grupo y solicitar su reposición.",
      "fr": "Seuls les responsables de groupe peuvent saisir les informations préalables ; les pèlerins ne le peuvent pas.\nUn responsable de groupe validé, en tant que représentant du groupe, a le droit de saisir les informations préalables et d'activer les cartes prépayées des membres du groupe ou d'en demander le remplacement.",
      "it": "Solo i responsabili di gruppo possono inserire le informazioni anticipate; i pellegrini no.\nUn responsabile di gruppo verificato, in quanto rappresentante del gruppo, ha i diritti di inserire le informazioni anticipate, di attivare le carte prepagate dei membri del gruppo e di richiederne la riemissione.",
      "pt": "Só os responsáveis de grupo podem introduzir as informações prévias; os peregrinos não.\nUm responsável de grupo verificado, enquanto representante do grupo, tem permissões para introduzir as informações prévias, ativar os cartões pré-pagos dos membros do grupo e pedir a sua reemissão."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q91",
    "no": "Q91",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "앱에는 어떤 개인정보가 언제 입력되며, 티셔츠 사이즈·알레르기 등의 정보는 순례자가 직접 입력하나요, 아니면 그룹 리더가 관리하나요? 이러한 정보를 웹사이트에서도 입력·관리할 수 있는지와 개인정보 보호 및 앱 보안 대책도 안내 부탁드립니다.",
      "en": "What personal information is entered in the app, and when? Do pilgrims enter details such as T-shirt size and allergies themselves, or does the group leader manage them? Please also tell us whether this information can be entered and managed on the website, and what privacy and app security measures are in place.",
      "es": "¿Qué datos personales se introducen en la app y cuándo? ¿Los peregrinos introducen ellos mismos datos como la talla de camiseta y las alergias, o los gestiona el líder del grupo? Indíquennos también si esta información puede introducirse y gestionarse en la web, y qué medidas de privacidad y seguridad de la app existen.",
      "fr": "Quelles données personnelles sont saisies dans l'application, et quand ? Les pèlerins saisissent-ils eux-mêmes des informations comme la taille de T-shirt et les allergies, ou est-ce le responsable du groupe qui les gère ? Merci d'indiquer aussi si ces informations peuvent être saisies et gérées sur le site web, et quelles mesures de confidentialité et de sécurité de l'application existent.",
      "it": "Quali dati personali si inseriscono nell'app, e quando? I pellegrini inseriscono da soli dati come la taglia della maglietta e le allergie, oppure li gestisce il responsabile di gruppo? Indicateci anche se queste informazioni si possono inserire e gestire sul sito web, e quali misure di privacy e sicurezza dell'app sono previste.",
      "pt": "Que dados pessoais se introduzem na app, e quando? Os peregrinos introduzem eles próprios dados como o tamanho da t-shirt e as alergias, ou é o responsável de grupo que os gere? Indiquem-nos também se estas informações podem ser introduzidas e geridas no site, e que medidas de privacidade e de segurança da app estão previstas."
    },
    "a": {
      "ko": "기본적으로 웹회원은 본인 이메일 주소로 인증번호가 발송됩니다. 사전 입력 정보는 그룹 리더만 입력합니다. 개인정보에 해당되는 영역은 기본 웹회원에만 해당 되며 법적 검토된 내용으로 회원가입 시 약관 제공 및 동의를 받습니다.",
      "en": "For web membership, a verification code is sent to the member's own email address. Advance information is entered only by the group leader. Personal information applies only to the basic web membership; its terms have been legally reviewed and are presented, and consent obtained, at sign-up.",
      "es": "Para el registro web, se envía un código de verificación a la propia dirección de correo electrónico del usuario. La información previa solo la introduce el líder del grupo. Los datos personales se limitan al registro web básico; sus condiciones han sido revisadas jurídicamente y se presentan, recabándose el consentimiento, al registrarse.",
      "fr": "Pour le compte web, un code de vérification est envoyé à l'adresse e-mail du membre. Les informations préalables sont saisies uniquement par le responsable du groupe. Les données personnelles concernent uniquement le compte web de base ; ses conditions ont fait l'objet d'un examen juridique et sont présentées, avec recueil du consentement, lors de l'inscription.",
      "it": "Per l'iscrizione web, un codice di verifica viene inviato all'indirizzo e-mail dell'utente. Le informazioni anticipate sono inserite solo dal responsabile di gruppo. I dati personali riguardano solo l'iscrizione web di base; i relativi termini sono stati verificati legalmente e vengono presentati, con la raccolta del consenso, al momento dell'iscrizione.",
      "pt": "Para o registo web, é enviado um código de verificação para o endereço de e-mail do próprio utilizador. As informações prévias são introduzidas apenas pelo responsável de grupo. Os dados pessoais dizem respeito apenas ao registo web básico; os respetivos termos foram revistos juridicamente e são apresentados, com recolha do consentimento, no momento do registo."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q92",
    "no": "Q92",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "참가자들이 순례자 앱을 사전에 익할 수 있도록 공식 사이트에 단계별 사용 가이드나 사전 체험 환경을 제공할 예정인가요?",
      "en": "Will the official website provide a step-by-step user guide or a trial environment so participants can get familiar with the Pilgrim App in advance?",
      "es": "¿Ofrecerá la web oficial una guía de uso paso a paso o un entorno de prueba para que los participantes se familiaricen de antemano con la App del Peregrino?",
      "fr": "Le site officiel proposera-t-il un guide d'utilisation pas à pas ou un environnement d'essai pour que les participants se familiarisent à l'avance avec l'Application du pèlerin ?",
      "it": "Il sito ufficiale fornirà una guida passo passo o un ambiente di prova perché i partecipanti possano familiarizzare in anticipo con l'App del Pellegrino?",
      "pt": "O site oficial vai disponibilizar um guia passo a passo ou um ambiente de teste para que os participantes se possam familiarizar previamente com a App do Peregrino?"
    },
    "a": {
      "ko": "현재 앱은 서비스 진행중이며, 앱관련 사전 가이드가 제공될 예정입니다.",
      "en": "The app is already in service, and an advance guide to the app will be provided.",
      "es": "La app ya está en servicio, y se facilitará una guía previa de la app.",
      "fr": "L'application est déjà en service, et un guide préalable de l'application sera fourni.",
      "it": "L'app è già in servizio, e sarà fornita una guida anticipata all'app.",
      "pt": "A app já está em funcionamento, e será disponibilizado um guia prévio da app."
    },
    "sub": {
      "ko": "기능",
      "en": "Features",
      "es": "Funciones",
      "fr": "Fonctionnalités",
      "it": "Funzioni",
      "pt": "Funcionalidades"
    },
    "subNo": "a"
  },
  {
    "id": "Q93",
    "no": "Q93",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 순례자 교통카드를 Apple Pay, Google Pay, Samsung Pay 등 모바일 지갑에 등록하여 사용할 수 있나요?",
      "en": "Can the WYD pilgrim transport card be added to a mobile wallet such as Apple Pay, Google Pay or Samsung Pay?",
      "es": "¿Se puede añadir la tarjeta de transporte del peregrino de la JMJ a un monedero móvil como Apple Pay, Google Pay o Samsung Pay?",
      "fr": "La carte de transport du pèlerin des JMJ peut-elle être ajoutée à un portefeuille mobile comme Apple Pay, Google Pay ou Samsung Pay ?",
      "it": "La tessera trasporti del pellegrino della GMG può essere aggiunta a un portafoglio digitale come Apple Pay, Google Pay o Samsung Pay?",
      "pt": "O cartão de transporte do peregrino da JMJ pode ser adicionado a uma carteira digital, como Apple Pay, Google Pay ou Samsung Pay?"
    },
    "a": {
      "ko": "순례자 카드는 교통카드와 결제 카드가 통합된 실물카드를 발행해드립니다. 해당 실물카드는 NFC와의 연동은 지원하지 않습니다.",
      "en": "The pilgrim card is issued as a physical card combining a transport card and a payment card. The physical card does not support NFC linking.",
      "es": "La tarjeta del peregrino se emite como tarjeta física que combina una tarjeta de transporte y una tarjeta de pago. La tarjeta física no admite vinculación por NFC.",
      "fr": "La carte du pèlerin est délivrée sous forme de carte physique réunissant une carte de transport et une carte de paiement. La carte physique n'est pas compatible avec une liaison NFC.",
      "it": "La carta del pellegrino è emessa come carta fisica che unisce tessera trasporti e carta di pagamento. La carta fisica non supporta il collegamento NFC.",
      "pt": "O cartão do peregrino é emitido como cartão físico que combina cartão de transporte e cartão de pagamento. O cartão físico não suporta ligação NFC."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Pilgrim Pass (Card)",
      "es": "Pase del Peregrino (tarjeta)",
      "fr": "Pass du pèlerin (carte)",
      "it": "Pass del Pellegrino (carta)",
      "pt": "Passe do Peregrino (cartão)"
    },
    "subNo": "b"
  },
  {
    "id": "Q94",
    "no": "Q94",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 이후, 선불카드(Prepaid meal card)는 카드에 예를 들어 100달러 정도의 잔액이 남아 있다면 환불받을 수 있나요? 환불이 가능하다면 원화로 받나요, 달러로 받나요? 아니면 최소한 연대기금(Solidarity Fund)에 기부할 수 있게 해줄 수 있나요?",
      "en": "After WYD, if about $100, say, is left on the prepaid meal card, can it be refunded? If so, in won or in dollars? Or could you at least let us donate it to the Solidarity Fund?",
      "es": "Después de la JMJ, si quedan, por ejemplo, unos 100 dólares en la tarjeta prepago de comidas, ¿se pueden reembolsar? Si es así, ¿en wones o en dólares? ¿O podrían al menos permitirnos donarlos al Fondo de Solidaridad?",
      "fr": "Après les JMJ, s'il reste par exemple environ 100 dollars sur la carte repas prépayée, peut-on être remboursé ? Si oui, en wons ou en dollars ? Ou pourriez-vous au moins nous permettre d'en faire don au Fonds de solidarité ?",
      "it": "Dopo la GMG, se sulla carta pasti prepagata restano, ad esempio, circa 100 dollari, possono essere rimborsati? Se sì, in won o in dollari? O potreste almeno permetterci di donarli al Fondo di solidarietà?",
      "pt": "Depois da JMJ, se ficarem, por exemplo, cerca de 100 dólares no cartão de refeições pré-pago, podem ser reembolsados? Se sim, em won ou em dólares? Ou poderiam, pelo menos, deixar-nos doá-los ao Fundo de Solidariedade?"
    },
    "a": {
      "ko": "조직위원회에서 매일 충전하는 식사비는 당일 식사비를 모두 사용하지 않은 경우, 잔액이 이월되며 등록한 패키지의 종료일까지 사용할 수 있습니다. 대회 종료 이후 미사용 잔액에 대해서는 환불되지 않습니다. 미사용된 잔액은 참가 분담금의 일환으로 기부하는 방안을 논의 중입니다. 추후 자세한 안내 드리겠습니다.",
      "en": "The meal allowance the LOC tops up each day carries over if it is not fully used that day and can be used until the end date of the registered package. Unused balances are not refunded after the event. We are discussing a way for unused balances to be donated as part of the Participation Contribution, and will share details later.",
      "es": "La asignación para comidas que el COL recarga cada día se acumula si no se gasta por completo ese día y puede usarse hasta la fecha final del paquete inscrito. Los saldos no utilizados no se reembolsan después del evento. Estamos estudiando una forma de que los saldos no utilizados puedan donarse como parte de la Contribución de Participación, y compartiremos los detalles más adelante.",
      "fr": "L'allocation repas que le COL recharge chaque jour est reportée si elle n'est pas entièrement utilisée dans la journée et peut être utilisée jusqu'à la date de fin du forfait choisi. Les soldes non utilisés ne sont pas remboursés après l'événement. Nous étudions un moyen de permettre de verser les soldes non utilisés en don, au titre de la Contribution de participation, et en communiquerons les détails ultérieurement.",
      "it": "L'importo per i pasti che il COL ricarica ogni giorno, se non viene interamente utilizzato quel giorno, si accumula e può essere usato fino alla data di fine del pacchetto registrato. I saldi non utilizzati non vengono rimborsati dopo l'evento. Stiamo valutando una modalità per donare i saldi non utilizzati come parte del Contributo di partecipazione, e condivideremo i dettagli in seguito.",
      "pt": "O montante para refeições que o COL carrega diariamente transita para o dia seguinte se não for totalmente usado nesse dia, e pode ser usado até à data de fim do pacote inscrito. Os saldos não utilizados não são reembolsados após o evento. Estamos a estudar uma forma de os saldos não utilizados poderem ser doados como parte da Contribuição de participação, e partilharemos os pormenores mais tarde."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Pilgrim Pass (Card)",
      "es": "Pase del Peregrino (tarjeta)",
      "fr": "Pass du pèlerin (carte)",
      "it": "Pass del Pellegrino (carta)",
      "pt": "Passe do Peregrino (cartão)"
    },
    "subNo": "b"
  },
  {
    "id": "Q95",
    "no": "Q95",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "선불카드(Prepaid meal card)는 실물 카드인가요, 디지털인가요? 로마 희년(Jubilee) 행사 당시 앱에 큰 문제가 있어 일부 그룹은 모든 식사를 받지 못했습니다.",
      "en": "Is the prepaid meal card a physical card or digital? At the Jubilee in Rome the app had major problems, and some groups did not receive all their meals.",
      "es": "¿La tarjeta prepago de comidas es física o digital? En el Jubileo de Roma la app tuvo problemas graves y algunos grupos no recibieron todas sus comidas.",
      "fr": "La carte repas prépayée est-elle physique ou numérique ? Lors du Jubilé à Rome, l'application a connu de graves problèmes et certains groupes n'ont pas reçu tous leurs repas.",
      "it": "La carta pasti prepagata è una carta fisica o digitale? Al Giubileo di Roma l'app ha avuto gravi problemi, e alcuni gruppi non hanno ricevuto tutti i pasti.",
      "pt": "O cartão de refeições pré-pago é físico ou digital? No Jubileu em Roma, a app teve grandes problemas, e alguns grupos não receberam todas as refeições."
    },
    "a": {
      "ko": "선불카드(Prepaid meal card)는 실물 카드입니다. 순례자앱에서는 결제 기능을 제공하지 않으며, 사용 내역과 잔액을 확인할 수 있습니다.",
      "en": "The prepaid meal card is a physical card. The Pilgrim App does not offer a payment function, but you can check your transaction history and balance in it.",
      "es": "La tarjeta prepago de comidas es una tarjeta física. La App del Peregrino no ofrece función de pago, pero en ella pueden consultar su historial de movimientos y su saldo.",
      "fr": "La carte repas prépayée est une carte physique. L'Application du pèlerin ne propose pas de fonction de paiement, mais vous pouvez y consulter l'historique de vos opérations et votre solde.",
      "it": "La carta pasti prepagata è una carta fisica. L'App del Pellegrino non offre una funzione di pagamento, ma vi si possono controllare la cronologia delle transazioni e il saldo.",
      "pt": "O cartão de refeições pré-pago é um cartão físico. A App do Peregrino não oferece função de pagamento, mas permite consultar o histórico de transações e o saldo."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Pilgrim Pass (Card)",
      "es": "Pase del Peregrino (tarjeta)",
      "fr": "Pass du pèlerin (carte)",
      "it": "Pass del Pellegrino (carta)",
      "pt": "Passe do Peregrino (cartão)"
    },
    "subNo": "b"
  },
  {
    "id": "Q96",
    "no": "Q96",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 기간의 식사는 선불카드(Prepaid meal card)를 이용해 식당·편의점 등에서 자유롭게 선택하는 방식인가요, 아니면 별도의 식사 텐트나 도시락도 제공되나요? 이용 가능한 식당 및 편의점에서는 다양한 문화권의 음식점도 포함되나요?",
      "en": "During WYD, are meals chosen freely at restaurants, convenience stores and so on using the prepaid meal card, or are separate meal tents or packed meals also provided? Do the participating restaurants and convenience stores include restaurants serving food from different cultures?",
      "es": "Durante la JMJ, ¿las comidas se eligen libremente en restaurantes, tiendas de conveniencia, etc., con la tarjeta prepago de comidas, o también habrá carpas de comida o comidas envasadas? ¿Los restaurantes y tiendas participantes incluyen restaurantes con comida de distintas culturas?",
      "fr": "Pendant les JMJ, les repas sont-ils choisis librement dans des restaurants, supérettes, etc., avec la carte repas prépayée, ou y aura-t-il aussi des tentes-repas ou des repas emballés ? Les restaurants et supérettes partenaires incluent-ils des restaurants proposant des cuisines de différentes cultures ?",
      "it": "Durante la GMG, i pasti si scelgono liberamente in ristoranti, minimarket e così via con la carta pasti prepagata, oppure sono previsti anche tendoni per i pasti o pasti confezionati? I ristoranti e i minimarket aderenti includono ristoranti che servono cucine di culture diverse?",
      "pt": "Durante a JMJ, as refeições são escolhidas livremente em restaurantes, lojas de conveniência, etc., com o cartão de refeições pré-pago, ou também são disponibilizadas tendas de refeições ou refeições em caixa? Os restaurantes e lojas de conveniência aderentes incluem restaurantes de cozinhas de diferentes culturas?"
    },
    "a": {
      "ko": "조식은 숙소에서 일괄 제공하는 방식으로 운영하며, 중식 및 석식은 선불카드(Prepaid meal card)를 이용하여 지정된 식당에서 자유롭게 이용할 수 있도록 운영할 예정입니다. 이용가능한 식당, 메뉴 및 식사카드 운영방식 등은 구체적인 사항은 현재 협의 중입니다.",
      "en": "Breakfast will be provided at the accommodation, and lunch and dinner can be taken freely at designated restaurants using the prepaid meal card. The participating restaurants, menus and the way the meal card will work are still under discussion.",
      "es": "El desayuno se ofrecerá en el alojamiento, y el almuerzo y la cena podrán tomarse libremente en los restaurantes designados con la tarjeta prepago de comidas. Los restaurantes participantes, los menús y el funcionamiento de la tarjeta de comidas están todavía en estudio.",
      "fr": "Le petit-déjeuner sera servi dans les hébergements, et le déjeuner et le dîner pourront être pris librement dans les restaurants désignés avec la carte repas prépayée. Les restaurants partenaires, les menus et le fonctionnement de la carte repas sont encore en discussion.",
      "it": "La colazione sarà servita nell'alloggio, mentre pranzo e cena potranno essere consumati liberamente nei ristoranti indicati usando la carta pasti prepagata. I ristoranti aderenti, i menu e il funzionamento della carta pasti sono ancora in discussione.",
      "pt": "O pequeno-almoço será servido no alojamento, e o almoço e o jantar podem ser tomados livremente nos restaurantes designados, usando o cartão de refeições pré-pago. Os restaurantes aderentes, as ementas e o funcionamento do cartão de refeições ainda estão em discussão."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Pilgrim Pass (Card)",
      "es": "Pase del Peregrino (tarjeta)",
      "fr": "Pass du pèlerin (carte)",
      "it": "Pass del Pellegrino (carta)",
      "pt": "Passe do Peregrino (cartão)"
    },
    "subNo": "b"
  },
  {
    "id": "Q97",
    "no": "Q97",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "선불카드(Prepaid meal card)를 사용하려면 휴대폰에 NFC 기능이 필요한가요?",
      "en": "Does using the prepaid meal card require NFC on the phone?",
      "es": "¿Usar la tarjeta prepago de comidas requiere que el teléfono tenga NFC?",
      "fr": "L'utilisation de la carte repas prépayée nécessite-t-elle le NFC sur le téléphone ?",
      "it": "Per usare la carta pasti prepagata serve l'NFC sul telefono?",
      "pt": "Usar o cartão de refeições pré-pago exige NFC no telemóvel?"
    },
    "a": {
      "ko": "아니오. 체크인시 수령받는 실물카드로 활성 및 폰에 연동해서 사용가능합니다. NFC 기능을 필요하지 않습니다.",
      "en": "No. The physical card received at check-in can be activated and linked to your phone. NFC is not required.",
      "es": "No. La tarjeta física recibida en la acreditación puede activarse y vincularse a su teléfono. No se necesita NFC.",
      "fr": "Non. La carte physique reçue lors de l'accréditation peut être activée et liée à votre téléphone. Le NFC n'est pas nécessaire.",
      "it": "No. La carta fisica ricevuta al check-in può essere attivata e collegata al telefono. L'NFC non è necessario.",
      "pt": "Não. O cartão físico recebido no check-in pode ser ativado e associado ao vosso telemóvel. Não é necessário NFC."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Pilgrim Pass (Card)",
      "es": "Pase del Peregrino (tarjeta)",
      "fr": "Pass du pèlerin (carte)",
      "it": "Pass del Pellegrino (carta)",
      "pt": "Passe do Peregrino (cartão)"
    },
    "subNo": "b"
  },
  {
    "id": "Q98",
    "no": "Q98",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "순례자앱",
      "en": "Pilgrim App",
      "es": "App del Peregrino",
      "fr": "Application du pèlerin",
      "it": "App del Pellegrino",
      "pt": "App do Peregrino"
    },
    "topicNo": "2",
    "q": {
      "ko": "순례자 카드를 분실했을 때 제2리더(second leader)만 새 카드를 발급/요청할 수 있나요, 아니면 제1리더도 가능한가요?",
      "en": "When a pilgrim card is lost, can only the second leader issue or request a new card, or can the first leader do so too?",
      "es": "Cuando se pierde una tarjeta del peregrino, ¿solo el segundo líder puede emitir o solicitar una nueva, o también puede hacerlo el primer líder?",
      "fr": "En cas de perte d'une carte du pèlerin, seul le second responsable peut-il émettre ou demander une nouvelle carte, ou le premier responsable le peut-il aussi ?",
      "it": "In caso di smarrimento della carta del pellegrino, solo il secondo responsabile può emettere o richiedere una nuova carta, o può farlo anche il primo responsabile?",
      "pt": "Em caso de perda do cartão do peregrino, só o segundo responsável pode emitir ou pedir um novo cartão, ou o primeiro responsável também o pode fazer?"
    },
    "a": {
      "ko": "앱관련 모든 권한은 제2리더만 가능합니다. 정책적으로 하위그룹(Subgroup)리더, 제1리더는 중복이 가능하기에 유니크한 리더 계정은 제2리더만 해당되어 이런 결정을 내렸습니다.",
      "en": "All app-related rights belong only to the second leader. Because, as a matter of policy, a Subgroup leader (first leader) can be duplicated, the unique leader account is the second leader's, which is why this decision was made.",
      "es": "Todos los permisos relacionados con la app corresponden únicamente al segundo líder. Como, por política, el líder de Subgroup (primer líder) puede repetirse, la cuenta de líder única es la del segundo líder; por eso se tomó esta decisión.",
      "fr": "Tous les droits liés à l'application appartiennent uniquement au second responsable. Comme, par principe, la fonction de responsable de Subgroup (premier responsable) peut être cumulée, le seul compte de responsable unique est celui du second responsable ; c'est pourquoi cette décision a été prise.",
      "it": "Tutti i diritti relativi all'app spettano solo al secondo responsabile. Poiché, per principio, il ruolo di responsabile di Subgroup (primo responsabile) può essere duplicato, l'unico account di responsabile univoco è quello del secondo responsabile; per questo è stata presa questa decisione.",
      "pt": "Todas as permissões relacionadas com a app pertencem apenas ao segundo responsável. Como, por princípio, o cargo de responsável de Subgroup (primeiro responsável) pode ser acumulado, a única conta de responsável exclusiva é a do segundo responsável; foi por isso que se tomou esta decisão."
    },
    "sub": {
      "ko": "선불카드",
      "en": "Pilgrim Pass (Card)",
      "es": "Pase del Peregrino (tarjeta)",
      "fr": "Pass du pèlerin (carte)",
      "it": "Pass del Pellegrino (carta)",
      "pt": "Passe do Peregrino (cartão)"
    },
    "subNo": "b"
  },
  {
    "id": "Q99",
    "no": "Q99",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organizing Committee (LOC) Matters",
      "es": "Asuntos del Comité Organizador Local (COL)",
      "fr": "Questions relatives au Comité d'organisation local (COL)",
      "it": "Questioni relative al Comitato Organizzatore Locale (COL)",
      "pt": "Assuntos do Comité Organizador Local (COL)"
    },
    "topicNo": "3",
    "q": {
      "ko": "WYD 기간 중 대륙별·지역별·국가별 모임을 조율하는 조직위원회의 전담 창구나 담당자가 있으며, 이러한 모임을 위한 장소가 제공되나요? 아니면 주최 단체가 직접 장소를 마련해야 하나요?",
      "en": "During WYD, will the LOC have a dedicated contact point or staff to coordinate continental, regional or national gatherings, and will venues be provided for them? Or must the organizing bodies arrange venues themselves?",
      "es": "Durante la JMJ, ¿tendrá el COL un punto de contacto o personal dedicado para coordinar encuentros continentales, regionales o nacionales, y se ofrecerán lugares para ellos? ¿O deben las entidades organizadoras buscar el lugar por su cuenta?",
      "fr": "Pendant les JMJ, le COL disposera-t-il d'un point de contact ou d'un personnel dédié pour coordonner les rencontres continentales, régionales ou nationales, et des lieux seront-ils fournis pour celles-ci ? Ou les organisateurs doivent-ils trouver eux-mêmes un lieu ?",
      "it": "Durante la GMG, il COL avrà un referente o personale dedicato per coordinare incontri continentali, regionali o nazionali, e metterà a disposizione delle sedi? Oppure gli enti organizzatori devono procurarsi da soli le sedi?",
      "pt": "Durante a JMJ, o COL terá um ponto de contacto ou pessoal dedicado para coordenar encontros continentais, regionais ou nacionais, e disponibilizará locais para eles? Ou as entidades organizadoras têm de tratar dos locais por conta própria?"
    },
    "a": {
      "ko": "대륙별 또는 국가별 모임 제안은 국제부(international@wydseoul.org)로 문의해 주시기 바랍니다. 행사 운영 및 실무와 관련된 자세한 안내를 받으실 수 있습니다.",
      "en": "For continental or national gathering proposals, please contact the Global Relations Division at international@wydseoul.org. They can provide you with further information regarding the logistics.",
      "es": "Para propuestas de encuentros continentales o nacionales, contacten con la División de Relaciones Globales en international@wydseoul.org. Allí podrán darles más información sobre la logística.",
      "fr": "Pour les propositions de rencontres continentales ou nationales, veuillez contacter la Division des relations internationales à l'adresse international@wydseoul.org. Elle pourra vous donner plus d'informations sur la logistique.",
      "it": "Per proposte di incontri continentali o nazionali, contattate la Divisione Relazioni Globali all'indirizzo international@wydseoul.org. Potrà fornirvi ulteriori informazioni sugli aspetti logistici.",
      "pt": "Para propostas de encontros continentais ou nacionais, contactem a Divisão de Relações Globais através de international@wydseoul.org. Poderá dar-vos mais informações sobre a logística."
    }
  },
  {
    "id": "Q100",
    "no": "Q100",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organizing Committee (LOC) Matters",
      "es": "Asuntos del Comité Organizador Local (COL)",
      "fr": "Questions relatives au Comité d'organisation local (COL)",
      "it": "Questioni relative al Comitato Organizzatore Locale (COL)",
      "pt": "Assuntos do Comité Organizador Local (COL)"
    },
    "topicNo": "3",
    "q": {
      "ko": "WYD에 직접 참가하지 못하는 국가와 청년들이 자국 교구나 본당에서 자체 행사 및 철야기도를 통해 함께 참여할 수 있도록, 조직위원회에서 공식 프로그램과 기도 자료를 제공할 예정인가요?",
      "en": "Will the LOC provide official programs and prayer materials so that countries and young people unable to attend WYD Seoul 2027 in person can join in through their own events and vigils in their dioceses and parishes?",
      "es": "¿Ofrecerá el COL programas oficiales y materiales de oración para que los países y los jóvenes que no puedan asistir en persona a la JMJ Seúl 2027 puedan unirse con sus propios actos y vigilias en sus diócesis y parroquias?",
      "fr": "Le COL fournira-t-il des programmes officiels et des supports de prière pour que les pays et les jeunes qui ne peuvent pas venir en personne aux JMJ Séoul 2027 puissent s'y associer par leurs propres événements et veillées dans leurs diocèses et paroisses ?",
      "it": "Il COL fornirà programmi ufficiali e materiali di preghiera perché i Paesi e i giovani che non possono partecipare di persona alla GMG Seoul 2027 possano unirsi tramite propri eventi e veglie nelle loro diocesi e parrocchie?",
      "pt": "O COL vai disponibilizar programas oficiais e materiais de oração para que os países e os jovens que não podem participar presencialmente na JMJ Seul 2027 se possam unir através de eventos e vigílias próprios nas suas dioceses e paróquias?"
    },
    "a": {
      "ko": "조직위원회는 여러가지 이유로 현장에서 함께 할 수 없는 순례자들을 위해 다양한 방법을 기획, 준비하고 있습니다. 참여 형식과 방법이 확정되는 대로 공지할 예정입니다.",
      "en": "The LOC is planning and preparing various ways for pilgrims who cannot be there in person, for whatever reason, to take part. We will announce the format and means of participation as soon as they are confirmed.",
      "es": "El COL está planificando y preparando diversas formas de participación para los peregrinos que, por el motivo que sea, no puedan estar presentes. Anunciaremos el formato y los medios de participación en cuanto se confirmen.",
      "fr": "Le COL prévoit et prépare diverses manières de permettre aux pèlerins qui ne peuvent pas être présents, quelle qu'en soit la raison, de participer. Nous annoncerons le format et les modalités de participation dès qu'ils seront confirmés.",
      "it": "Il COL sta pianificando e preparando diverse modalità perché i pellegrini che non possono essere presenti di persona, per qualsiasi motivo, possano partecipare. Comunicheremo il formato e le modalità di partecipazione non appena saranno confermati.",
      "pt": "O COL está a planear e a preparar várias formas de participação para os peregrinos que, por qualquer motivo, não possam estar presentes. Anunciaremos o formato e os meios de participação logo que estejam confirmados."
    }
  },
  {
    "id": "Q101",
    "no": "Q101",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organizing Committee (LOC) Matters",
      "es": "Asuntos del Comité Organizador Local (COL)",
      "fr": "Questions relatives au Comité d'organisation local (COL)",
      "it": "Questioni relative al Comitato Organizzatore Locale (COL)",
      "pt": "Assuntos do Comité Organizador Local (COL)"
    },
    "topicNo": "3",
    "q": {
      "ko": "저희는 숙소 미포함 패키지를 선택할 예정이며, 신부님들도 함께 계십니다. WYD에서 미사가 계획되지 않은 날, 저희 그룹을 위해 신부님이 미사를 집전할 수 있는 인근 본당을 어떻게 마련할 수 있나요?",
      "en": "We are staying in non-LOC accommodation, and our priests are with us. On days when no Mass is scheduled at WYD, how can we find a nearby parish where our priest can celebrate Mass for our group?",
      "es": "Nos alojamos en un alojamiento que no es del COL y nos acompañan nuestros sacerdotes. Los días en que no hay Misa programada en la JMJ, ¿cómo podemos encontrar una parroquia cercana donde nuestro sacerdote pueda celebrar la Misa para nuestro grupo?",
      "fr": "Nous logeons dans un hébergement non fourni par le COL, et nos prêtres sont avec nous. Les jours où aucune messe n'est prévue aux JMJ, comment trouver une paroisse proche où notre prêtre pourra célébrer la messe pour notre groupe ?",
      "it": "Alloggiamo in una struttura non fornita dal COL, e i nostri sacerdoti sono con noi. Nei giorni in cui alla GMG non è prevista la Messa, come possiamo trovare una parrocchia vicina dove il nostro sacerdote possa celebrare la Messa per il gruppo?",
      "pt": "Estamos num alojamento que não é do COL, e os nossos sacerdotes estão connosco. Nos dias em que não há Missa prevista na JMJ, como podemos encontrar uma paróquia próxima onde o nosso sacerdote possa celebrar Missa para o grupo?"
    },
    "a": {
      "ko": "서울 시내 대부분의 본당은 숙소 포함 패키지를 이용하는 그룹이 배정될 예정입니다. 이에, 배정된 그룹이 우선적으로 해당 본당을 사용하게 됩니다. 배정된 그룹이 사용하지 않는 시간대로 이용을 요청하셔야 하니 양해부탁드립니다.",
      "en": "Most parishes in Seoul will be assigned groups on packages with accommodation, so those assigned groups will have priority use of those parishes. We ask for your understanding that you will need to request use at times when the assigned groups are not using them.",
      "es": "La mayoría de las parroquias de Seúl se asignarán a grupos con paquetes con alojamiento, por lo que esos grupos asignados tendrán prioridad para usarlas. Les pedimos comprensión, ya que tendrán que solicitar su uso en horarios en que no las utilicen los grupos asignados.",
      "fr": "La plupart des paroisses de Séoul accueilleront des groupes ayant un forfait avec hébergement ; ces groupes auront donc la priorité pour les utiliser. Nous vous remercions de votre compréhension : il vous faudra demander à les utiliser aux heures où les groupes accueillis ne les occupent pas.",
      "it": "La maggior parte delle parrocchie di Seoul ospiterà gruppi con pacchetti con alloggio; questi gruppi avranno quindi la priorità nell'uso delle parrocchie. Vi chiediamo di comprendere che dovrete chiederne l'uso negli orari in cui i gruppi ospitati non le utilizzano.",
      "pt": "A maioria das paróquias de Seul acolherá grupos com pacotes com alojamento, pelo que esses grupos terão prioridade na sua utilização. Pedimos a vossa compreensão: terão de pedir para as utilizar nos horários em que os grupos acolhidos não as estejam a usar."
    }
  },
  {
    "id": "Q102",
    "no": "Q102",
    "section": {
      "ko": "현장 도착 및 운영",
      "en": "Arrival and On-site Operations",
      "es": "Llegada y operaciones sobre el terreno",
      "fr": "Arrivée et organisation sur place",
      "it": "Arrivo e operazioni sul posto",
      "pt": "Chegada e operações no local"
    },
    "sectionNo": "Ⅲ",
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organizing Committee (LOC) Matters",
      "es": "Asuntos del Comité Organizador Local (COL)",
      "fr": "Questions relatives au Comité d'organisation local (COL)",
      "it": "Questioni relative al Comitato Organizzatore Locale (COL)",
      "pt": "Assuntos do Comité Organizador Local (COL)"
    },
    "topicNo": "3",
    "q": {
      "ko": "WYD를 준비하는 순례자들을 위해 이단·사이비 활동 등에 대한 안전·인식 제고 자료가 제공되나요?",
      "en": "Will safety and awareness materials on heretical groups and cult activity be provided for pilgrims preparing for WYD?",
      "es": "¿Se facilitarán a los peregrinos que se preparan para la JMJ materiales de seguridad y sensibilización sobre grupos heréticos y actividades sectarias?",
      "fr": "Des documents de sécurité et de sensibilisation sur les groupes hérétiques et les activités sectaires seront-ils fournis aux pèlerins qui se préparent aux JMJ ?",
      "it": "Saranno forniti ai pellegrini che si preparano alla GMG materiali di sicurezza e sensibilizzazione su gruppi eretici e attività settarie?",
      "pt": "Serão disponibilizados aos peregrinos que se preparam para a JMJ materiais de segurança e sensibilização sobre grupos heréticos e atividades sectárias?"
    },
    "a": {
      "ko": "현재 한국천주교주교회의 유사종교대책위원회에서 안내 자료를 작성하고 있으며, 초안 검토 중입니다. 검토 후 공식언어로 번역하여 배포할 예정입니다.",
      "en": "The Committee Against Pseudo-religions of the Catholic Bishops' Conference of Korea is currently preparing guidance materials, and the draft is under review. After review, they will be translated into the official languages and distributed.",
      "es": "La Comisión contra las Pseudorreligiones de la Conferencia Episcopal Católica de Corea está preparando materiales informativos, y el borrador está en revisión. Tras la revisión, se traducirán a los idiomas oficiales y se distribuirán.",
      "fr": "La Commission contre les pseudo-religions de la Conférence des évêques catholiques de Corée prépare actuellement des documents d'information, dont le projet est en cours d'examen. Après examen, ils seront traduits dans les langues officielles et diffusés.",
      "it": "La Commissione contro le pseudo-religioni della Conferenza Episcopale Cattolica di Corea sta preparando materiali informativi, la cui bozza è in fase di revisione. Dopo la revisione saranno tradotti nelle lingue ufficiali e distribuiti.",
      "pt": "A Comissão contra as Pseudo-religiões da Conferência Episcopal Católica da Coreia está a preparar materiais de orientação, cujo rascunho está em revisão. Após a revisão, serão traduzidos para as línguas oficiais e distribuídos."
    }
  },
  {
    "id": "Q103",
    "no": "Q103",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "입국날짜를 서울 도착일이 아니라 교구대회를 위한 입국 비자를 위한 날짜라고 밝혀야 할 것 같네요\n교구대회 참가자가 서울조직위 주소로 비자 신청해도 되나요?",
      "en": "It seems the entry date should be stated as the date of entry on the visa for Days in the Dioceses, rather than the date of arrival in Seoul.\nCan DID participants apply for their visa using the Seoul LOC's address?",
      "es": "Parece que la fecha de entrada debería indicarse como la fecha de entrada del visado para los Días en las Diócesis, y no como la fecha de llegada a Seúl.\n¿Pueden los participantes en los DID solicitar el visado con la dirección del COL de Seúl?",
      "fr": "Il semble que la date d'entrée devrait être indiquée comme la date d'entrée figurant sur le visa pour les Journées dans les diocèses, plutôt que comme la date d'arrivée à Séoul.\nLes participants aux JDD peuvent-ils demander leur visa avec l'adresse du COL de Séoul ?",
      "it": "Sembra che la data di ingresso debba essere indicata come la data di ingresso sul visto per le Giornate nelle Diocesi, anziché come la data di arrivo a Seoul.\nI partecipanti alle GD possono richiedere il visto usando l'indirizzo del COL di Seoul?",
      "pt": "Parece que a data de entrada deveria ser indicada como a data de entrada no visto para os Dias nas Dioceses, e não como a data de chegada a Seul.\nOs participantes nos DND podem pedir o visto usando a morada do COL de Seul?"
    },
    "a": {
      "ko": "한국 입국일은 교구대회 참가 여부와 관계없이 실제 항공편의 한국 도착일과 동일하게 기재해야 합니다. 또한 WYD에서 발급한 서류를 바탕으로 비자를 신청하므로, 신청 시에는 한국 내 주소와 연락처로 조직위원회 정보를 기재하는 것을 권장합니다. 다만 입국일과 출국일은 실제 항공편 일정과 동일하게 기재해야 합니다.",
      "en": "The date of entry into Korea must be the actual arrival date of your flight to Korea, whether or not you take part in Days in the Dioceses.\n\nVisa applications are made on the basis of documents issued by WYD, so we recommend entering the WYD LOC's details for the address and contact details in Korea. The dates of entry and departure, however, must match your actual flight schedule.",
      "es": "La fecha de entrada en Corea debe ser la fecha real de llegada de su vuelo a Corea, participen o no en los Días en las Diócesis.\n\nLas solicitudes de visado se hacen sobre la base de documentos emitidos por la JMJ, por lo que recomendamos indicar los datos del COL de la JMJ como dirección y contacto en Corea. No obstante, las fechas de entrada y salida deben coincidir con el calendario real de sus vuelos.",
      "fr": "La date d'entrée en Corée doit être la date réelle d'arrivée de votre vol en Corée, que vous participiez ou non aux Journées dans les diocèses.\n\nLes demandes de visa se font sur la base de documents délivrés par les JMJ ; nous recommandons donc d'indiquer les coordonnées du COL des JMJ comme adresse et contact en Corée. Les dates d'entrée et de sortie doivent toutefois correspondre au calendrier réel de vos vols.",
      "it": "La data di ingresso in Corea deve essere la data effettiva di arrivo del vostro volo in Corea, che partecipiate o meno alle Giornate nelle Diocesi.\n\nLe domande di visto si basano su documenti rilasciati dalla GMG; vi consigliamo quindi di inserire i dati del COL della GMG come indirizzo e recapiti in Corea. Le date di ingresso e partenza devono però corrispondere al vostro effettivo piano di volo.",
      "pt": "A data de entrada na Coreia tem de ser a data real de chegada do vosso voo à Coreia, quer participem ou não nos Dias nas Dioceses.\n\nOs pedidos de visto baseiam-se em documentos emitidos pela JMJ, pelo que recomendamos indicar os dados do COL da JMJ como morada e contactos na Coreia. As datas de entrada e saída, no entanto, têm de corresponder ao vosso plano de voo real."
    }
  },
  {
    "id": "Q104",
    "no": "Q104",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "알러지 정보는 교구대회 관계자에게 공유 되나요? 교구대회 참가비와 공헌금 등록은 별도로 진행 하고 별도로 결재 해야 하겠지만 링크는 제공하나요? 완전히 별개로 모두 다시 입력하나요",
      "en": "Will allergy information be shared with those running Days in the Dioceses?\nRegistration and payment of the fee and contribution for Days in the Dioceses will presumably be separate, but will a link be provided? Or must everything be entered again entirely separately?",
      "es": "¿Se compartirá la información sobre alergias con los responsables de los Días en las Diócesis?\nLa inscripción y el pago de la cuota y la contribución de los Días en las Diócesis serán probablemente aparte, pero ¿se facilitará un enlace? ¿O hay que volver a introducirlo todo de forma totalmente separada?",
      "fr": "Les informations sur les allergies seront-elles transmises aux organisateurs des Journées dans les diocèses ?\nL'inscription et le paiement des frais et de la contribution des Journées dans les diocèses seront sans doute séparés, mais un lien sera-t-il fourni ? Ou faut-il tout ressaisir de manière entièrement séparée ?",
      "it": "Le informazioni sulle allergie saranno condivise con chi organizza le Giornate nelle Diocesi?\nL'iscrizione e il pagamento della quota e del contributo per le Giornate nelle Diocesi saranno presumibilmente separati, ma sarà fornito un collegamento? Oppure va reinserito tutto in modo completamente separato?",
      "pt": "As informações sobre alergias serão partilhadas com quem organiza os Dias nas Dioceses?\nA inscrição e o pagamento da taxa e da contribuição dos Dias nas Dioceses serão, presumivelmente, separados, mas será disponibilizada uma ligação? Ou tem de se introduzir tudo novamente, de forma totalmente separada?"
    },
    "a": {
      "ko": "교구대회를 신청하면서 현재는 규모만 등록한 상태이고, 이후 교구에서 명단을 제출할 때 세부정보를 요청할 예정입니다. 이때 알러지 및 기타 특이사항을 수집하게 됩니다. 교구대회 기부금은 참가 교구로 납부하게 되고 계좌이체로 진행될 예정입니다.",
      "en": "At this stage of applying for Days in the Dioceses, only group sizes have been registered. Detailed information will be requested later, when the list of names is submitted to the diocese, and allergies and other special needs will be collected then.\n\nThe contribution for Days in the Dioceses is paid to the host diocese, by bank transfer.",
      "es": "En esta fase de la solicitud de los Días en las Diócesis, solo se ha registrado el tamaño de los grupos. La información detallada se pedirá más adelante, cuando se envíe la lista de nombres a la diócesis, y en ese momento se recogerán las alergias y otras necesidades especiales.\n\nLa contribución de los Días en las Diócesis se paga a la diócesis de acogida mediante transferencia bancaria.",
      "fr": "À ce stade de la demande pour les Journées dans les diocèses, seule la taille des groupes a été enregistrée. Les informations détaillées seront demandées plus tard, lorsque la liste des noms sera transmise au diocèse, et les allergies et autres besoins particuliers seront recueillis à ce moment-là.\n\nLa contribution des Journées dans les diocèses est versée au diocèse d'accueil, par virement bancaire.",
      "it": "In questa fase della domanda per le Giornate nelle Diocesi è stata registrata solo la dimensione dei gruppi. Le informazioni dettagliate saranno richieste più avanti, quando l'elenco dei nomi sarà presentato alla diocesi, e in quel momento saranno raccolte le allergie e le altre esigenze particolari.\n\nIl contributo per le Giornate nelle Diocesi si versa alla diocesi ospitante, tramite bonifico bancario.",
      "pt": "Nesta fase da candidatura aos Dias nas Dioceses, foi registada apenas a dimensão dos grupos. As informações detalhadas serão pedidas mais tarde, quando a lista de nomes for entregue à diocese, e as alergias e outras necessidades especiais serão recolhidas nessa altura.\n\nA contribuição dos Dias nas Dioceses é paga à diocese de acolhimento, por transferência bancária."
    }
  },
  {
    "id": "Q105",
    "no": "Q105",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회를 진행하는 교구에서 서울로 가는 교통비는 교구에서 지원받을 수 있나요?",
      "en": "Can the diocese hosting DID cover the cost of transport to Seoul?",
      "es": "¿Puede la diócesis que acoge los DID cubrir el coste del transporte hasta Seúl?",
      "fr": "Le diocèse qui accueille les JDD peut-il prendre en charge les frais de transport jusqu'à Séoul ?",
      "it": "La diocesi che ospita le GD può coprire il costo del trasporto verso Seoul?",
      "pt": "A diocese que acolhe os DND pode suportar o custo do transporte para Seul?"
    },
    "a": {
      "ko": "교구대회의 운영은 교구마다 다릅니다. 교구대회 후 본대회 이동에 대해서는 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "Days in the Dioceses is run differently in each diocese. For travel to Seoul after Days in the Dioceses, please contact the diocese you wish to join directly.",
      "es": "Los Días en las Diócesis se organizan de forma distinta en cada diócesis. Para el desplazamiento a Seúl después de los Días en las Diócesis, contacten directamente con la diócesis a la que deseen unirse.",
      "fr": "Les Journées dans les diocèses sont organisées différemment dans chaque diocèse. Pour le trajet vers Séoul après les Journées dans les diocèses, veuillez contacter directement le diocèse que vous souhaitez rejoindre.",
      "it": "Le Giornate nelle Diocesi si svolgono in modo diverso in ciascuna diocesi. Per il viaggio verso Seoul dopo le Giornate nelle Diocesi, contattate direttamente la diocesi a cui desiderate unirvi.",
      "pt": "Os Dias nas Dioceses decorrem de forma diferente em cada diocese. Para a viagem para Seul depois dos Dias nas Dioceses, contactem diretamente a diocese a que desejam juntar-se."
    }
  },
  {
    "id": "Q106",
    "no": "Q106",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 참가 시 공항에서 주최 교구까지, 서울에서 주최 교구까지, 그리고 교구대회 종료 후 서울 숙소까지의 교통편은 주최 측에서 제공하거나 패키지에 포함되나요, 아니면 각 대표단·그룹이 직접 준비해야 하나요?",
      "en": "For Days in the Dioceses, is transport from the airport to the host diocese, from Seoul to the host diocese, and from the end of DID to accommodation in Seoul provided by the hosts or included in the package, or must each delegation or group arrange it?",
      "es": "Para los Días en las Diócesis, ¿el transporte desde el aeropuerto hasta la diócesis de acogida, desde Seúl hasta la diócesis de acogida y, al terminar los DID, hasta el alojamiento en Seúl lo proporcionan los anfitriones o está incluido en el paquete, o debe organizarlo cada delegación o grupo?",
      "fr": "Pour les Journées dans les diocèses, le transport de l'aéroport au diocèse d'accueil, de Séoul au diocèse d'accueil, et de la fin des JDD à l'hébergement à Séoul est-il assuré par les organisateurs ou inclus dans le forfait, ou chaque délégation ou groupe doit-il l'organiser ?",
      "it": "Per le Giornate nelle Diocesi, il trasporto dall'aeroporto alla diocesi ospitante, da Seoul alla diocesi ospitante e dalla fine delle GD all'alloggio a Seoul è fornito dagli organizzatori o incluso nel pacchetto, oppure deve organizzarlo ciascuna delegazione o gruppo?",
      "pt": "Nos Dias nas Dioceses, o transporte do aeroporto para a diocese de acolhimento, de Seul para a diocese de acolhimento e do fim dos DND para o alojamento em Seul é assegurado pelos anfitriões ou incluído no pacote, ou tem de ser organizado por cada delegação ou grupo?"
    },
    "a": {
      "ko": "교구대회의 운영은 교구마다 다릅니다. 공항에서 교구대회 교구까지, 교구대회 교구에서 본대회까지의 교통편은 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "Days in the Dioceses is run differently in each diocese. For transport from the airport to the host diocese and from the host diocese to Seoul, please contact the diocese you wish to join directly.",
      "es": "Los Días en las Diócesis se organizan de forma distinta en cada diócesis. Para el transporte desde el aeropuerto hasta la diócesis de acogida y desde la diócesis de acogida hasta Seúl, contacten directamente con la diócesis a la que deseen unirse.",
      "fr": "Les Journées dans les diocèses sont organisées différemment dans chaque diocèse. Pour le transport de l'aéroport au diocèse d'accueil et du diocèse d'accueil à Séoul, veuillez contacter directement le diocèse que vous souhaitez rejoindre.",
      "it": "Le Giornate nelle Diocesi si svolgono in modo diverso in ciascuna diocesi. Per il trasporto dall'aeroporto alla diocesi ospitante e dalla diocesi ospitante a Seoul, contattate direttamente la diocesi a cui desiderate unirvi.",
      "pt": "Os Dias nas Dioceses decorrem de forma diferente em cada diocese. Para o transporte do aeroporto para a diocese de acolhimento e da diocese de acolhimento para Seul, contactem diretamente a diocese a que desejam juntar-se."
    }
  },
  {
    "id": "Q107",
    "no": "Q107",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 등록은 언제 시작하나요?",
      "en": "When does registration for Days in the Dioceses begin?",
      "es": "¿Cuándo comienza la inscripción para los Días en las Diócesis?",
      "fr": "Quand l'inscription aux Journées dans les diocèses commence-t-elle ?",
      "it": "Quando iniziano le iscrizioni alle Giornate nelle Diocesi?",
      "pt": "Quando começa a inscrição para os Dias nas Dioceses?"
    },
    "a": {
      "ko": "교구대회의 등록은 이미 시작하였습니다. 방문, 전화, 이메일, 교구대회 홈페이지(https://wyd2027did.org)를 통해 신청이 가능합니다. 다만 교구대회를 위해 준비된 인원이 채워진 교구로는 신청이 어렵습니다.",
      "en": "Registration for Days in the Dioceses has already begun. You can apply in person, by phone, by email, or through the Days in the Dioceses website (https://wyd2027did.org). However, it is difficult to apply to a diocese whose places for Days in the Dioceses are already filled.",
      "es": "La inscripción para los Días en las Diócesis ya ha comenzado. Pueden solicitarla en persona, por teléfono, por correo electrónico o a través de la web de los Días en las Diócesis (https://wyd2027did.org). No obstante, es difícil solicitar plaza en una diócesis cuyas plazas para los Días en las Diócesis ya estén cubiertas.",
      "fr": "L'inscription aux Journées dans les diocèses a déjà commencé. Vous pouvez faire votre demande sur place, par téléphone, par courriel ou sur le site des Journées dans les diocèses (https://wyd2027did.org). Il est toutefois difficile de s'inscrire dans un diocèse dont les places pour les Journées dans les diocèses sont déjà toutes prises.",
      "it": "Le iscrizioni alle Giornate nelle Diocesi sono già iniziate. Potete fare domanda di persona, per telefono, per e-mail o tramite il sito delle Giornate nelle Diocesi (https://wyd2027did.org). È però difficile fare domanda a una diocesi i cui posti per le Giornate nelle Diocesi sono già esauriti.",
      "pt": "A inscrição para os Dias nas Dioceses já começou. Podem candidatar-se presencialmente, por telefone, por e-mail ou através do site dos Dias nas Dioceses (https://wyd2027did.org). No entanto, é difícil candidatar-se a uma diocese cujas vagas para os Dias nas Dioceses já estejam preenchidas."
    }
  },
  {
    "id": "Q108",
    "no": "Q108",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 기간도 보험 적용 대상인가요?",
      "en": "Is the Days in the Dioceses period also covered by insurance?",
      "es": "¿El periodo de los Días en las Diócesis también está cubierto por el seguro?",
      "fr": "La période des Journées dans les diocèses est-elle aussi couverte par l'assurance ?",
      "it": "Anche il periodo delle Giornate nelle Diocesi è coperto da assicurazione?",
      "pt": "O período dos Dias nas Dioceses também está coberto por seguro?"
    },
    "a": {
      "ko": "교구대회를 운영하는 교구는 행사보험을 준비하고 있습니다. 하지만 개인 여행자 보험은 순례자가 준비하시길 바랍니다.",
      "en": "Dioceses hosting Days in the Dioceses are arranging event liability insurance. Personal travel insurance, however, should be arranged by pilgrims themselves.",
      "es": "Las diócesis que acogen los Días en las Diócesis están contratando un seguro de responsabilidad civil para el evento. No obstante, el seguro de viaje personal deben contratarlo los propios peregrinos.",
      "fr": "Les diocèses qui accueillent les Journées dans les diocèses souscrivent une assurance responsabilité civile pour l'événement. L'assurance voyage personnelle doit toutefois être souscrite par les pèlerins eux-mêmes.",
      "it": "Le diocesi che ospitano le Giornate nelle Diocesi stanno stipulando un'assicurazione di responsabilità civile per l'evento. L'assicurazione di viaggio personale, invece, deve essere stipulata dai pellegrini stessi.",
      "pt": "As dioceses que acolhem os Dias nas Dioceses estão a contratar um seguro de responsabilidade civil para o evento. O seguro de viagem pessoal, no entanto, deve ser contratado pelos próprios peregrinos."
    }
  },
  {
    "id": "Q109",
    "no": "Q109",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "2027년 7월 29일 이전에 교구대회를 위해 도착하는 분들을 위한 숙박 해결책이 있나요?",
      "en": "Is there an accommodation solution for those arriving for DID before July 29, 2027?",
      "es": "¿Hay alguna solución de alojamiento para quienes lleguen para los DID antes del 29 de julio de 2027?",
      "fr": "Existe-t-il une solution d'hébergement pour ceux qui arrivent pour les JDD avant le 29 juillet 2027 ?",
      "it": "C'è una soluzione di alloggio per chi arriva per le GD prima del 29 luglio 2027?",
      "pt": "Existe uma solução de alojamento para quem chega para os DND antes de 29 de julho de 2027?"
    },
    "a": {
      "ko": "교구대회의 운영은 교구마다 다릅니다. 조기 도착에 따른 숙박문제는 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "Days in the Dioceses is run differently in each diocese. For accommodation for early arrivals, please contact the diocese you wish to join directly.",
      "es": "Los Días en las Diócesis se organizan de forma distinta en cada diócesis. Para el alojamiento en caso de llegada anticipada, contacten directamente con la diócesis a la que deseen unirse.",
      "fr": "Les Journées dans les diocèses sont organisées différemment dans chaque diocèse. Pour l'hébergement en cas d'arrivée anticipée, veuillez contacter directement le diocèse que vous souhaitez rejoindre.",
      "it": "Le Giornate nelle Diocesi si svolgono in modo diverso in ciascuna diocesi. Per l'alloggio in caso di arrivo anticipato, contattate direttamente la diocesi a cui desiderate unirvi.",
      "pt": "Os Dias nas Dioceses decorrem de forma diferente em cada diocese. Para alojamento em caso de chegada antecipada, contactem diretamente a diocese a que desejam juntar-se."
    }
  },
  {
    "id": "Q110",
    "no": "Q110",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "미성년자가 교구대회에 참가할 때 홈스테이를 하게 되나요?",
      "en": "Will minors taking part in Days in the Dioceses stay in homestays?",
      "es": "¿Los menores que participen en los Días en las Diócesis se alojarán en familias?",
      "fr": "Les mineurs qui participent aux Journées dans les diocèses seront-ils hébergés en famille ?",
      "it": "I minori che partecipano alle Giornate nelle Diocesi alloggeranno in famiglia?",
      "pt": "Os menores que participam nos Dias nas Dioceses ficarão em alojamento em família?"
    },
    "a": {
      "ko": "현재 대부분의 교구는 홈스테이를 기본으로 준비하고 있습니다. 미성년자가 교구대회에 참가할 때에는 보호자 동반하에서만 홈스테이를 하게 됩니다. 미성년자 수에 맞추어 충분한 보호자를 확보하시길 바랍니다. 홈스테이가 아닌 별도의 숙박에 대해서는 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "At present, most dioceses are preparing homestays as standard. Minors taking part in Days in the Dioceses will stay in homestays only when accompanied by a chaperone. Please make sure you have enough chaperones for the number of minors. For accommodation other than homestays, please contact the diocese you wish to join directly.",
      "es": "Actualmente, la mayoría de las diócesis preparan el alojamiento en familias como opción estándar. Los menores que participen en los Días en las Diócesis solo se alojarán en familias si van acompañados de un acompañante. Asegúrense de contar con suficientes acompañantes para el número de menores. Para alojamientos distintos del alojamiento en familias, contacten directamente con la diócesis a la que deseen unirse.",
      "fr": "Actuellement, la plupart des diocèses prévoient l'hébergement en famille comme formule standard. Les mineurs qui participent aux Journées dans les diocèses ne seront hébergés en famille que s'ils sont accompagnés d'un accompagnateur. Veillez à prévoir suffisamment d'accompagnateurs pour le nombre de mineurs. Pour un hébergement autre qu'en famille, veuillez contacter directement le diocèse que vous souhaitez rejoindre.",
      "it": "Attualmente la maggior parte delle diocesi prevede l'alloggio in famiglia come soluzione standard. I minori che partecipano alle Giornate nelle Diocesi alloggeranno in famiglia solo se accompagnati da un accompagnatore. Assicuratevi di avere abbastanza accompagnatori per il numero di minori. Per alloggi diversi da quello in famiglia, contattate direttamente la diocesi a cui desiderate unirvi.",
      "pt": "De momento, a maioria das dioceses está a preparar o alojamento em família como solução padrão. Os menores que participam nos Dias nas Dioceses só ficarão em alojamento em família se forem acompanhados por um acompanhante. Garantam que têm acompanhantes suficientes para o número de menores. Para alojamento que não seja em família, contactem diretamente a diocese a que desejam juntar-se."
    }
  },
  {
    "id": "Q111",
    "no": "Q111",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "많은 교구가 이미 정원이 찼나 보네요. 그렇다면 우리가 교구를 찾기에 너무 늦은 건 아닐까요?",
      "en": "It seems many dioceses are already full. Is it too late for us to find a diocese?",
      "es": "Parece que muchas diócesis ya están completas. ¿Es demasiado tarde para que encontremos una diócesis?",
      "fr": "Il semble que de nombreux diocèses soient déjà complets. Est-il trop tard pour que nous trouvions un diocèse ?",
      "it": "Sembra che molte diocesi siano già al completo. È troppo tardi per trovare una diocesi?",
      "pt": "Parece que muitas dioceses já estão cheias. É tarde demais para encontrarmos uma diocese?"
    },
    "a": {
      "ko": "10월 7일 현재 순례자들의 교구대회 참가를 위해 준비한 인원의 55%가 신청되었습니다. 아직은 여유가 있는 상황이고, 한국 교회가 교구대회를 위해 준비한 인원에 비해 신청이 초과하더라도 이를 수용할 여유가 있습니다. 교구대회 참가를 희망하는 모든 순례자를 환영합니다. 걱정하지 마시고 신청하시기 바랍니다.",
      "en": "As of October 7, applications have been received for 55% of the places prepared for pilgrims at Days in the Dioceses. There is still room, and even if applications exceed the places the Church in Korea has prepared, there is capacity to accommodate them. All pilgrims who wish to take part in Days in the Dioceses are welcome. Please apply without worry.",
      "es": "A 7 de octubre, se han recibido solicitudes para el 55 % de las plazas preparadas para los peregrinos de los Días en las Diócesis. Todavía hay sitio, e incluso si las solicitudes superan las plazas preparadas por la Iglesia en Corea, hay capacidad para acogerlas. Todos los peregrinos que deseen participar en los Días en las Diócesis son bienvenidos. Presenten su solicitud sin preocupación.",
      "fr": "Au 7 octobre, des demandes ont été reçues pour 55 % des places prévues pour les pèlerins aux Journées dans les diocèses. Il reste de la place, et même si les demandes dépassent les places prévues par l'Église en Corée, il existe une capacité pour les accueillir. Tous les pèlerins qui souhaitent participer aux Journées dans les diocèses sont les bienvenus. N'hésitez pas à faire votre demande.",
      "it": "Al 7 ottobre sono state ricevute domande per il 55% dei posti preparati per i pellegrini alle Giornate nelle Diocesi. C'è ancora posto, e anche se le domande superassero i posti preparati dalla Chiesa in Corea, c'è la capacità di accoglierle. Tutti i pellegrini che desiderano partecipare alle Giornate nelle Diocesi sono i benvenuti. Fate domanda senza preoccupazioni.",
      "pt": "A 7 de outubro, tinham sido recebidas candidaturas para 55% das vagas preparadas para os peregrinos nos Dias nas Dioceses. Ainda há lugar e, mesmo que as candidaturas ultrapassem as vagas preparadas pela Igreja na Coreia, há capacidade para as acolher. Todos os peregrinos que desejem participar nos Dias nas Dioceses são bem-vindos. Candidatem-se sem receio."
    }
  },
  {
    "id": "Q112",
    "no": "Q112",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "교구대회 등록은 언제부터 유효한가요? 일부 교구에서는 이미 연락을 주셨지만, 실제 WYD 등록은 10월이 되어야 시작됩니다. 교구대회 등록만으로도 이미 유효한 건가요, 아니면 WYD 등록을 해야만 유효해지는 건가요?",
      "en": "From when is DID registration valid? Some dioceses have already contacted us, but actual WYD registration only starts in October. Is DID registration valid on its own, or only once we have registered for WYD?",
      "es": "¿Desde cuándo es válida la inscripción en los DID? Algunas diócesis ya se han puesto en contacto con nosotros, pero la inscripción propiamente dicha en la JMJ no empieza hasta octubre. ¿Es válida la inscripción en los DID por sí sola, o solo una vez que nos hayamos inscrito en la JMJ?",
      "fr": "À partir de quand l'inscription aux JDD est-elle valable ? Certains diocèses nous ont déjà contactés, mais l'inscription aux JMJ proprement dite ne commence qu'en octobre. L'inscription aux JDD est-elle valable à elle seule, ou seulement une fois que nous nous serons inscrits aux JMJ ?",
      "it": "Da quando è valida l'iscrizione alle GD? Alcune diocesi ci hanno già contattato, ma l'iscrizione vera e propria alla GMG inizia solo a ottobre. L'iscrizione alle GD è valida di per sé, o solo dopo esserci iscritti alla GMG?",
      "pt": "A partir de quando é válida a inscrição nos DND? Algumas dioceses já nos contactaram, mas a inscrição propriamente dita na JMJ só começa em outubro. A inscrição nos DND é válida por si só, ou apenas depois de nos inscrevermos na JMJ?"
    },
    "a": {
      "ko": "교구대회의 등록은 본대회와 별개로 진행됩니다. 그리고 교구대회의 등록은 이미 시작되었고 다음과 같은 3단계로 진행됩니다.\n1) 참가 규모의 등록 2) 참가 명단의 등록 3) 순례자 기부금의 입금\n참고로, 참가를 희망하는 교구가 준비한 인원이 채워지면 해당 교구로 참가를 신청할 수는 없습니다.",
      "en": "Registration for Days in the Dioceses is separate from the registration for WYD Seoul 2027. It has already begun and proceeds in three steps:\n1) registration of group size 2) registration of the list of names 3) payment of the pilgrim contribution\nPlease note that once the places prepared by the diocese you wish to join are filled, you can no longer apply to that diocese.",
      "es": "La inscripción en los Días en las Diócesis es independiente de la inscripción en la JMJ Seúl 2027. Ya ha comenzado y se desarrolla en tres pasos:\n1) registro del tamaño del grupo 2) registro de la lista de nombres 3) pago de la contribución del peregrino\nTengan en cuenta que, una vez cubiertas las plazas preparadas por la diócesis a la que desean unirse, ya no podrán solicitar plaza en esa diócesis.",
      "fr": "L'inscription aux Journées dans les diocèses est distincte de l'inscription aux JMJ Séoul 2027. Elle a déjà commencé et se déroule en trois étapes :\n1) enregistrement de la taille du groupe 2) enregistrement de la liste des noms 3) versement de la contribution du pèlerin\nNotez qu'une fois les places prévues par le diocèse que vous souhaitez rejoindre toutes prises, il n'est plus possible de s'inscrire dans ce diocèse.",
      "it": "L'iscrizione alle Giornate nelle Diocesi è distinta dall'iscrizione alla GMG Seoul 2027. È già iniziata e si svolge in tre fasi:\n1) registrazione della dimensione del gruppo 2) registrazione dell'elenco dei nomi 3) versamento del contributo del pellegrino\nTenete presente che, una volta esauriti i posti preparati dalla diocesi a cui desiderate unirvi, non è più possibile fare domanda a quella diocesi.",
      "pt": "A inscrição nos Dias nas Dioceses é independente da inscrição na JMJ Seul 2027. Já começou e decorre em três passos:\n1) registo da dimensão do grupo 2) registo da lista de nomes 3) pagamento da contribuição do peregrino\nTenham em atenção que, depois de preenchidas as vagas preparadas pela diocese a que desejam juntar-se, já não é possível candidatar-se a essa diocese."
    }
  },
  {
    "id": "Q113",
    "no": "Q113",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "또한 교구대회에서 WYD로 이동하는 날짜는 8월 2일인가요, 3일인가요?",
      "en": "Also, is the date of moving from DID to WYD August 2 or August 3?",
      "es": "Además, ¿el traslado de los DID a la JMJ es el 2 o el 3 de agosto?",
      "fr": "Par ailleurs, le passage des JDD aux JMJ a-t-il lieu le 2 ou le 3 août ?",
      "it": "Inoltre, il passaggio dalle GD alla GMG avviene il 2 o il 3 agosto?",
      "pt": "Além disso, a passagem dos DND para a JMJ é a 2 ou a 3 de agosto?"
    },
    "a": {
      "ko": "교구대회는 2027년 7월 29일부터 8월 2일까지 4박 5일의 일정으로 진행됩니다. 8월 2일 일정을 마치고 당일 본대회로 이동하게 됩니다.",
      "en": "Days in the Dioceses runs for five days and four nights, from July 29 to August 2, 2027.\nAfter the program on August 2, pilgrims move to the Main Event the same day.",
      "es": "Los Días en las Diócesis duran cinco días y cuatro noches, del 29 de julio al 2 de agosto de 2027.\nTras el programa del 2 de agosto, los peregrinos se trasladan al Evento Principal ese mismo día.",
      "fr": "Les Journées dans les diocèses durent cinq jours et quatre nuits, du 29 juillet au 2 août 2027.\nAprès le programme du 2 août, les pèlerins rejoignent l'Événement principal le jour même.",
      "it": "Le Giornate nelle Diocesi durano cinque giorni e quattro notti, dal 29 luglio al 2 agosto 2027.\nDopo il programma del 2 agosto, i pellegrini si spostano all'Evento principale lo stesso giorno.",
      "pt": "Os Dias nas Dioceses decorrem durante cinco dias e quatro noites, de 29 de julho a 2 de agosto de 2027.\nDepois do programa de 2 de agosto, os peregrinos seguem para o Evento Principal no mesmo dia."
    }
  },
  {
    "id": "Q114",
    "no": "Q114",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "국제 운동, 공동체 및 평신도 단체들이 각자의 고유한 카리스마를 발휘하며 DID 프로그램에 어떻게 통합되고 있나요?",
      "en": "How are international movements, communities and lay associations being integrated into the DID program while exercising their own charisms?",
      "es": "¿Cómo se están integrando los movimientos internacionales, las comunidades y las asociaciones laicales en el programa de los DID, ejerciendo al mismo tiempo sus propios carismas?",
      "fr": "Comment les mouvements internationaux, les communautés et les associations de laïcs sont-ils intégrés au programme des JDD tout en exerçant leurs propres charismes ?",
      "it": "Come vengono integrati nel programma delle GD i movimenti internazionali, le comunità e le associazioni laicali, pur esercitando i propri carismi?",
      "pt": "Como estão os movimentos internacionais, as comunidades e as associações de leigos a ser integrados no programa dos DND, exercendo ao mesmo tempo os seus próprios carismas?"
    },
    "a": {
      "ko": "교구대회의 운영방향은 순례자들의 지역 교회 체험입니다. 고유의 카리스마와 교구대회 프로그램과의 통합은 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "Days in the Dioceses is designed around pilgrims experiencing the local Church. For integrating your own charism with the Days in the Dioceses program, please contact the diocese you wish to join directly.",
      "es": "Los Días en las Diócesis están pensados para que los peregrinos vivan la experiencia de la Iglesia local. Para integrar su propio carisma en el programa de los Días en las Diócesis, contacten directamente con la diócesis a la que deseen unirse.",
      "fr": "Les Journées dans les diocèses sont conçues pour que les pèlerins fassent l'expérience de l'Église locale. Pour intégrer votre propre charisme au programme des Journées dans les diocèses, veuillez contacter directement le diocèse que vous souhaitez rejoindre.",
      "it": "Le Giornate nelle Diocesi sono pensate perché i pellegrini facciano esperienza della Chiesa locale. Per integrare il vostro carisma nel programma delle Giornate nelle Diocesi, contattate direttamente la diocesi a cui desiderate unirvi.",
      "pt": "Os Dias nas Dioceses são pensados para que os peregrinos façam a experiência da Igreja local. Para integrar o vosso próprio carisma no programa dos Dias nas Dioceses, contactem diretamente a diocese a que desejam juntar-se."
    }
  },
  {
    "id": "Q115",
    "no": "Q115",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "교구대회(Days In Diocese, DID)",
      "en": "Days in the Dioceses (DID)",
      "es": "Días en las Diócesis (DID)",
      "fr": "Journées dans les diocèses (JDD)",
      "it": "Giornate nelle Diocesi (GD)",
      "pt": "Dias nas Dioceses (DND)"
    },
    "topicNo": "1",
    "q": {
      "ko": "비용과 결제 얼마인가요? 무료인가요, 아니면 별도 요금이 있나요? 등록과 동시에 결제하나요, 아니면 교구에 직접 결제하나요?",
      "en": "What does it cost and how is it paid? Is it free, or is there a separate charge? Is payment made at registration or directly to the diocese?",
      "es": "¿Cuánto cuesta y cómo se paga? ¿Es gratuito o hay un cargo aparte? ¿El pago se hace al inscribirse o directamente a la diócesis?",
      "fr": "Combien cela coûte-t-il et comment paie-t-on ? Est-ce gratuit, ou y a-t-il des frais distincts ? Le paiement se fait-il lors de l'inscription ou directement au diocèse ?",
      "it": "Quanto costa e come si paga? È gratuito, o c'è una quota separata? Il pagamento si effettua al momento dell'iscrizione o direttamente alla diocesi?",
      "pt": "Quanto custa e como se paga? É gratuito, ou há uma taxa à parte? O pagamento é feito na inscrição ou diretamente à diocese?"
    },
    "a": {
      "ko": "교구대회 순례자 기부금은 모든 교구 동일하게 $100입니다. 대부분의 교구는 홈스테이와 아침식사, 행사보험, 기념품을 제공합니다. 아침식사 이외 식사나 교통편 및 기타 비용은 참가를 희망하는 교구에 직접 문의하시길 바랍니다.",
      "en": "The Days in the Dioceses pilgrim contribution is the same in every diocese: $100. Most dioceses provide a homestay, breakfast, event insurance and a souvenir. For meals other than breakfast, transport and other costs, please contact the diocese you wish to join directly.",
      "es": "La contribución del peregrino para los Días en las Diócesis es la misma en todas las diócesis: 100 $. La mayoría de las diócesis ofrecen alojamiento en familia, desayuno, seguro del evento y un recuerdo. Para las comidas distintas del desayuno, el transporte y otros gastos, contacten directamente con la diócesis a la que deseen unirse.",
      "fr": "La contribution du pèlerin pour les Journées dans les diocèses est la même dans tous les diocèses : 100 $. La plupart des diocèses fournissent l'hébergement en famille, le petit-déjeuner, l'assurance de l'événement et un souvenir. Pour les repas autres que le petit-déjeuner, le transport et les autres frais, veuillez contacter directement le diocèse que vous souhaitez rejoindre.",
      "it": "Il contributo del pellegrino per le Giornate nelle Diocesi è lo stesso in tutte le diocesi: 100 $. La maggior parte delle diocesi fornisce alloggio in famiglia, colazione, assicurazione dell'evento e un ricordo. Per i pasti diversi dalla colazione, i trasporti e gli altri costi, contattate direttamente la diocesi a cui desiderate unirvi.",
      "pt": "A contribuição do peregrino para os Dias nas Dioceses é a mesma em todas as dioceses: 100 $. A maioria das dioceses oferece alojamento em família, pequeno-almoço, seguro do evento e uma lembrança. Para refeições que não o pequeno-almoço, transporte e outros custos, contactem diretamente a diocese a que desejam juntar-se."
    }
  },
  {
    "id": "Q116",
    "no": "Q116",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "만약 경기장 내에서 행사를 진행한다면, 사람들을 공평하게 순환시킬 기회가 없을 것입니다. 많은 사람에게 매우 불공평하게 느껴질 것이며, 이 계획은 여전히 많은 청년을 배제하고 거부하는 결과가 될 것입니다. 실내외 좌석은 어떤 기준으로 그룹을 선정하나요? 추첨인가요? 이것이 배제적으로 보이지 않게 하려면 어떻게 해야 할까요? 마치 '가진 자와 못 가진 자'를 나누는 상황처럼 보입니다. 청년들에게는 배타적이지 않은 무언가가 필요합니다. 교회가 그들을 또다시 거부하는 조직이 되지 않았으면 합니다.",
      "en": "If the event is held inside the stadium, there will be no opportunity to rotate people fairly. Many will feel this is deeply unfair, and the plan will still end up excluding and turning away many young people.\nOn what basis will groups be selected for indoor and outdoor seating? Will it be by lottery? What can be done so that this does not appear exclusionary? It looks like a situation that divides the \"haves\" from the \"have-nots.\" Young people need something that is not exclusive. We hope the Church will not once again become an institution that rejects them.",
      "es": "Si el acto se celebra dentro del estadio, no habrá oportunidad de rotar a la gente de forma justa. Muchos lo sentirán como algo profundamente injusto, y el plan seguirá acabando por excluir y rechazar a muchos jóvenes.\n¿Con qué criterio se seleccionará a los grupos para los asientos interiores y exteriores? ¿Será por sorteo? ¿Qué se puede hacer para que esto no parezca excluyente? Parece una situación que divide a 'los que tienen' de 'los que no tienen'. Los jóvenes necesitan algo que no sea excluyente. Esperamos que la Iglesia no vuelva a convertirse en una institución que los rechaza.",
      "fr": "Si l'événement se tient à l'intérieur du stade, il n'y aura pas de possibilité de faire tourner les gens équitablement. Beaucoup le ressentiront comme profondément injuste, et le projet finira encore par exclure et refouler de nombreux jeunes.\nSelon quels critères les groupes seront-ils choisis pour les places intérieures et extérieures ? Sera-ce par tirage au sort ? Que faire pour que cela ne paraisse pas excluant ? On dirait une situation qui sépare 'ceux qui ont' de 'ceux qui n'ont pas'. Les jeunes ont besoin de quelque chose qui ne soit pas exclusif. Nous espérons que l'Église ne redeviendra pas une institution qui les rejette.",
      "it": "Se l'evento si terrà all'interno dello stadio, non ci sarà la possibilità di far ruotare le persone in modo equo. Molti lo percepiranno come profondamente ingiusto, e il piano finirà comunque per escludere e respingere molti giovani.\nCon quali criteri saranno scelti i gruppi per i posti all'interno e all'esterno? Sarà per sorteggio? Cosa si può fare perché non sembri escludente? Sembra una situazione che divide 'chi ha' da 'chi non ha'. I giovani hanno bisogno di qualcosa che non sia esclusivo. Speriamo che la Chiesa non diventi di nuovo un'istituzione che li respinge.",
      "pt": "Se o evento se realizar dentro do estádio, não haverá oportunidade de fazer rodar as pessoas de forma justa. Muitos sentirão isto como profundamente injusto, e o plano acabará por excluir e afastar muitos jovens.\nCom que critérios serão escolhidos os grupos para os lugares no interior e no exterior? Será por sorteio? O que se pode fazer para que isto não pareça excludente? Parece uma situação que separa 'os que têm' dos 'que não têm'. Os jovens precisam de algo que não seja exclusivo. Esperamos que a Igreja não volte a ser uma instituição que os rejeita."
    },
    "a": {
      "ko": "행사를 담당하는 입장에서 질문자의 우려스러운 마음을 충분히 이해합니다. 그러한 걱정이 불공평함이 되지 않도록 소통의 원칙과 기준을 세우고 배정할 것입니다. 또한 자리에 따라 순례자들이 소외감을 느끼지 않도록 여러 배려와 소통의 장치들을 마련할 것입니다.",
      "en": "As those responsible for the events, we fully understand your concern. We will set principles and criteria for communication and allocation so that this concern does not turn into unfairness. We will also put in place a range of considerations and means of communication so that no pilgrim feels left out because of where they are seated.",
      "es": "Como responsables de los actos, comprendemos plenamente su preocupación. Estableceremos principios y criterios de comunicación y asignación para que esta preocupación no se convierta en injusticia. También pondremos en marcha diversas medidas de atención y medios de comunicación para que ningún peregrino se sienta excluido por el lugar donde esté sentado.",
      "fr": "En tant que responsables des événements, nous comprenons pleinement votre inquiétude. Nous définirons des principes et des critères de communication et d'attribution afin que cette inquiétude ne se transforme pas en injustice. Nous mettrons aussi en place diverses attentions et moyens de communication pour qu'aucun pèlerin ne se sente laissé de côté en raison de l'endroit où il est placé.",
      "it": "In quanto responsabili degli eventi, comprendiamo pienamente la vostra preoccupazione. Stabiliremo principi e criteri di comunicazione e di assegnazione perché questa preoccupazione non si trasformi in ingiustizia. Metteremo inoltre in atto diverse attenzioni e mezzi di comunicazione perché nessun pellegrino si senta escluso a causa del posto in cui si trova.",
      "pt": "Enquanto responsáveis pelos eventos, compreendemos plenamente a vossa preocupação. Definiremos princípios e critérios de comunicação e de atribuição para que esta preocupação não se transforme em injustiça. Iremos também pôr em prática várias atenções e meios de comunicação para que nenhum peregrino se sinta posto de parte por causa do lugar onde está."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome Ceremony · Way of the Cross",
      "es": "Misa de Apertura · Ceremonia de Bienvenida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Cérémonie d'accueil du Pape · Chemin de croix",
      "it": "Messa di Apertura · Cerimonia di Accoglienza del Papa · Via Crucis",
      "pt": "Missa de Abertura · Cerimónia de Acolhimento do Papa · Via-Sacra"
    },
    "subNo": "a"
  },
  {
    "id": "Q117",
    "no": "Q117",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "십자가의 길 구분에 중미와 카리브해 지역이 보이지 않습니다. 고려될 예정인가요?",
      "en": "Central America and the Caribbean do not appear in the regional divisions for the Way of the Cross. Will they be considered?",
      "es": "Centroamérica y el Caribe no aparecen en las divisiones regionales del Vía Crucis. ¿Se tendrán en cuenta?",
      "fr": "L'Amérique centrale et les Caraïbes n'apparaissent pas dans les divisions régionales du Chemin de croix. Seront-elles prises en compte ?",
      "it": "L'America Centrale e i Caraibi non compaiono nelle suddivisioni regionali della Via Crucis. Saranno presi in considerazione?",
      "pt": "A América Central e as Caraíbas não aparecem nas divisões regionais da Via-Sacra. Serão tidas em conta?"
    },
    "a": {
      "ko": "십자가의 길과 본대회의 모든 행사의 대륙구분은 교황청에서 나누는 대륙을 기준으로 구분합니다.",
      "en": "The continental divisions for the Way of the Cross and all Main Event events follow the continents as divided by the Holy See.",
      "es": "Las divisiones continentales del Vía Crucis y de todos los actos del Evento Principal siguen los continentes según la división de la Santa Sede.",
      "fr": "Les divisions continentales du Chemin de croix et de tous les événements de l'Événement principal suivent les continents tels que définis par le Saint-Siège.",
      "it": "Le suddivisioni continentali della Via Crucis e di tutti gli eventi dell'Evento principale seguono i continenti come suddivisi dalla Santa Sede.",
      "pt": "As divisões continentais da Via-Sacra e de todos os eventos do Evento Principal seguem os continentes tal como divididos pela Santa Sé."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome Ceremony · Way of the Cross",
      "es": "Misa de Apertura · Ceremonia de Bienvenida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Cérémonie d'accueil du Pape · Chemin de croix",
      "it": "Messa di Apertura · Cerimonia di Accoglienza del Papa · Via Crucis",
      "pt": "Missa de Abertura · Cerimónia de Acolhimento do Papa · Via-Sacra"
    },
    "subNo": "a"
  },
  {
    "id": "Q118",
    "no": "Q118",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "만약 경기장 내에서 행사를 진행한다면 내부와 외부 구역은 어떤 기준으로 그룹과 순례자에게 배정되나요? 주교회의 대표단 등에 우선권이 있는지, 사전 지정 또는 추첨 방식인지 궁금합니다. 또한 경기장 수용 인원을 초과하는 순례자들도 현장에서 행사와 미사에 의미 있게 참여할 수 있도록 어떤 방안이 마련되나요?",
      "en": "If the event is held inside the stadium, on what basis are places inside and outside the stadium allocated to groups and pilgrims? Is there priority for episcopal conference delegations and the like, and is it by advance assignment or lottery? And what will be done so that pilgrims beyond the stadium capacity can also take part meaningfully in the events and Masses on site?",
      "es": "Si el acto se celebra dentro del estadio, ¿con qué criterio se asignan a los grupos y peregrinos los lugares dentro y fuera del estadio? ¿Hay prioridad para las delegaciones de las conferencias episcopales y similares, y es por asignación previa o por sorteo? ¿Y qué se hará para que los peregrinos que superen la capacidad del estadio también puedan participar de forma significativa en los actos y Misas sobre el terreno?",
      "fr": "Si l'événement se tient à l'intérieur du stade, selon quels critères les places à l'intérieur et à l'extérieur du stade sont-elles attribuées aux groupes et aux pèlerins ? Y a-t-il une priorité pour les délégations des conférences épiscopales et autres, et s'agit-il d'une attribution préalable ou d'un tirage au sort ? Et que fera-t-on pour que les pèlerins excédant la capacité du stade puissent aussi participer de façon significative aux événements et aux messes sur place ?",
      "it": "Se l'evento si terrà all'interno dello stadio, con quali criteri vengono assegnati ai gruppi e ai pellegrini i posti all'interno e all'esterno dello stadio? C'è una priorità per le delegazioni delle conferenze episcopali e simili, e si tratta di un'assegnazione anticipata o di un sorteggio? E cosa si farà perché anche i pellegrini oltre la capienza dello stadio possano partecipare in modo significativo agli eventi e alle Messe sul posto?",
      "pt": "Se o evento se realizar dentro do estádio, com que critérios são atribuídos aos grupos e aos peregrinos os lugares dentro e fora do estádio? Há prioridade para as delegações das conferências episcopais e afins, e é por atribuição prévia ou por sorteio? E o que se fará para que os peregrinos que excedam a capacidade do estádio também possam participar de forma significativa nos eventos e Missas no local?"
    },
    "a": {
      "ko": "경기장 내 좌석은 사전 배정을 하겠지만 일부 성직자들에게 우선권을 주지 않을 것입니다. 청년대회는 소외된 청년들과 장애인 그리고 각국의 청년 대표들을 우선 배려해야 합니다. 경기장 밖 순례자들을 위한 다양한 장치와 배려 방안이 논의되고 있습니다. 경기장 내가 특권이 되지 않고 외부에 있어도 아쉽지 않도록 하는 다양한 배려와 소통의 방안들을 준비중입니다.",
      "en": "Seats inside the stadium will be assigned in advance, but priority will not be given to certain clergy. World Youth Day must give priority consideration to marginalized young people, people with disabilities and youth representatives from each country. Various arrangements and measures are being discussed for pilgrims outside the stadium. We are preparing a range of considerations and means of communication so that being inside the stadium does not become a privilege, and those outside do not feel they are missing out.",
      "es": "Los asientos dentro del estadio se asignarán con antelación, pero no se dará prioridad a determinados clérigos. La Jornada Mundial de la Juventud debe dar prioridad a los jóvenes marginados, a las personas con discapacidad y a los jóvenes representantes de cada país. Se están estudiando diversas soluciones y medidas para los peregrinos que estén fuera del estadio. Estamos preparando diversas medidas de atención y medios de comunicación para que estar dentro del estadio no se convierta en un privilegio y quienes estén fuera no sientan que se lo pierden.",
      "fr": "Les places à l'intérieur du stade seront attribuées à l'avance, mais aucune priorité ne sera accordée à certains membres du clergé. Les Journées mondiales de la jeunesse doivent accorder une attention prioritaire aux jeunes marginalisés, aux personnes en situation de handicap et aux jeunes représentants de chaque pays. Divers dispositifs et mesures sont à l'étude pour les pèlerins à l'extérieur du stade. Nous préparons diverses attentions et moyens de communication pour que se trouver dans le stade ne devienne pas un privilège et que ceux qui sont à l'extérieur n'aient pas le sentiment de manquer quelque chose.",
      "it": "I posti all'interno dello stadio saranno assegnati in anticipo, ma non sarà data priorità a determinati membri del clero. La Giornata Mondiale della Gioventù deve dare un'attenzione prioritaria ai giovani emarginati, alle persone con disabilità e ai giovani rappresentanti di ciascun Paese. Diverse soluzioni e misure sono in discussione per i pellegrini all'esterno dello stadio. Stiamo preparando diverse attenzioni e mezzi di comunicazione perché trovarsi nello stadio non diventi un privilegio e chi è all'esterno non abbia la sensazione di perdersi qualcosa.",
      "pt": "Os lugares dentro do estádio serão atribuídos previamente, mas não será dada prioridade a determinados membros do clero. A Jornada Mundial da Juventude deve dar atenção prioritária aos jovens marginalizados, às pessoas com deficiência e aos jovens representantes de cada país. Estão a ser discutidas várias soluções e medidas para os peregrinos fora do estádio. Estamos a preparar várias atenções e meios de comunicação para que estar dentro do estádio não se torne um privilégio e para que quem está fora não sinta que está a perder alguma coisa."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome Ceremony · Way of the Cross",
      "es": "Misa de Apertura · Ceremonia de Bienvenida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Cérémonie d'accueil du Pape · Chemin de croix",
      "it": "Messa di Apertura · Cerimonia di Accoglienza del Papa · Via Crucis",
      "pt": "Missa de Abertura · Cerimónia de Acolhimento do Papa · Via-Sacra"
    },
    "subNo": "a"
  },
  {
    "id": "Q119",
    "no": "Q119",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "행사가 경기장 안에서 폐쇄적으로 진행되어 고립된 느낌을 줄까 걱정됩니다. 교황님께서 가까이 다가가는 목자가 되고자 하시더라도, 이것이 모두를 위한 대회라는 느낌을 갖기 어려울 것 같습니다.",
      "en": "We worry that the events will take place behind closed doors inside the stadium and feel isolated. Even if the Holy Father wants to be a shepherd who draws close, it may be hard to feel that this is a gathering for everyone.",
      "es": "Nos preocupa que los actos se celebren a puerta cerrada dentro del estadio y den una sensación de aislamiento. Aunque el Santo Padre quiera ser un pastor que se acerca, puede ser difícil sentir que se trata de un encuentro para todos.",
      "fr": "Nous craignons que les événements se déroulent à huis clos à l'intérieur du stade et donnent une impression d'isolement. Même si le Saint-Père veut être un pasteur proche, il pourrait être difficile de sentir qu'il s'agit d'un rassemblement pour tous.",
      "it": "Temiamo che gli eventi si svolgano a porte chiuse all'interno dello stadio e diano un senso di isolamento. Anche se il Santo Padre desidera essere un pastore vicino, potrebbe essere difficile sentire che si tratta di un raduno per tutti.",
      "pt": "Receamos que os eventos decorram à porta fechada dentro do estádio e transmitam uma sensação de isolamento. Mesmo que o Santo Padre queira ser um pastor próximo, poderá ser difícil sentir que se trata de um encontro para todos."
    },
    "a": {
      "ko": "대회가 경기장이라는 공간에 고립되어 진행되지 않도록 다양한 방법을 고민 중입니다. 경기장과 서울을 넘어 지구 반대편에 있는 청년들은 물론이고, 경기장 외부의 청년들과 소통하는 다양한 방법을 준비중입니다.",
      "en": "We are considering various ways to keep the event from being isolated within the stadium. We are preparing various ways to connect not only with young people beyond the stadium and Seoul, on the other side of the world, but also with young people outside the stadium.",
      "es": "Estamos estudiando diversas formas de evitar que el evento quede aislado dentro del estadio. Estamos preparando diversas formas de conectar no solo con los jóvenes más allá del estadio y de Seúl, al otro lado del mundo, sino también con los jóvenes que estén fuera del estadio.",
      "fr": "Nous réfléchissons à diverses manières d'éviter que l'événement soit isolé dans l'enceinte du stade. Nous préparons divers moyens d'entrer en relation non seulement avec les jeunes au-delà du stade et de Séoul, à l'autre bout du monde, mais aussi avec les jeunes à l'extérieur du stade.",
      "it": "Stiamo valutando diversi modi per evitare che l'evento resti isolato all'interno dello stadio. Stiamo preparando diversi modi per entrare in contatto non solo con i giovani oltre lo stadio e Seoul, dall'altra parte del mondo, ma anche con i giovani all'esterno dello stadio.",
      "pt": "Estamos a estudar várias formas de evitar que o evento fique isolado dentro do estádio. Estamos a preparar várias formas de nos ligarmos não só aos jovens para lá do estádio e de Seul, do outro lado do mundo, mas também aos jovens fora do estádio."
    },
    "sub": {
      "ko": "개막미사 · 교황 환영 행사 · 십자가의 길",
      "en": "Opening Mass · Papal Welcome Ceremony · Way of the Cross",
      "es": "Misa de Apertura · Ceremonia de Bienvenida del Papa · Vía Crucis",
      "fr": "Messe d'ouverture · Cérémonie d'accueil du Pape · Chemin de croix",
      "it": "Messa di Apertura · Cerimonia di Accoglienza del Papa · Via Crucis",
      "pt": "Missa de Abertura · Cerimónia de Acolhimento do Papa · Via-Sacra"
    },
    "subNo": "a"
  },
  {
    "id": "Q120",
    "no": "Q120",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "현재 교통편이 저희를 어디에 내려줄지, 그리고 그곳에서 폐막 미사 장소까지 청년들이 대략 얼마나 걸어야 하는지에 대해 명확한 정보가 있나요?",
      "en": "Is there clear information yet on where transport will drop us off, and roughly how far young people will have to walk from there to the Closing Mass site?",
      "es": "¿Hay ya información clara sobre dónde nos dejará el transporte y, aproximadamente, cuánto tendrán que caminar los jóvenes desde allí hasta el lugar de la Misa de Clausura?",
      "fr": "Dispose-t-on déjà d'informations claires sur l'endroit où les transports nous déposeront, et sur la distance approximative que les jeunes devront parcourir à pied jusqu'au site de la Messe de clôture ?",
      "it": "Ci sono già informazioni chiare su dove ci lasceranno i mezzi di trasporto e su quanto, all'incirca, i giovani dovranno camminare da lì fino al luogo della Messa di chiusura?",
      "pt": "Já há informação clara sobre onde o transporte nos vai deixar e, aproximadamente, quanto terão os jovens de caminhar a partir daí até ao local da Missa de Encerramento?"
    },
    "a": {
      "ko": "현재 운영계획 작성 중이며, 대회 직전 순례자를 위한 수송/교통가이드 배포 예정입니다.",
      "en": "The operating plan is currently being drawn up, and a transport guide for pilgrims will be distributed shortly before the event.",
      "es": "El plan de funcionamiento se está elaborando actualmente, y poco antes del evento se distribuirá una guía de transporte para los peregrinos.",
      "fr": "Le plan opérationnel est en cours d'élaboration, et un guide des transports sera distribué aux pèlerins peu avant l'événement.",
      "it": "Il piano operativo è in fase di elaborazione, e una guida ai trasporti per i pellegrini sarà distribuita poco prima dell'evento.",
      "pt": "O plano operacional está a ser elaborado, e um guia de transportes para os peregrinos será distribuído pouco antes do evento."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q121",
    "no": "Q121",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "폐막미사 장소에 관한 기밀 정보에 대해 답변 부탁드립니다. 이 정보를 물어볼 주교님들과 지도자분들께는 공유할 수 없다는 말씀이신가요? 내부적으로 공유하는 것은 괜찮은가요? 아니면 이 정보가 이 방 안에만 머물러야 한다는 말씀이신가요?",
      "en": "Please answer regarding the confidential information about the Closing Mass site. Are you saying it cannot be shared with the bishops and leaders who will ask about it? Is it all right to share it internally? Or must this information stay in this room?",
      "es": "Les pedimos una respuesta sobre la información confidencial del lugar de la Misa de Clausura. ¿Quieren decir que no puede compartirse con los obispos y responsables que pregunten por ella? ¿Se puede compartir internamente? ¿O esta información debe quedarse en esta sala?",
      "fr": "Merci de répondre au sujet des informations confidentielles sur le site de la Messe de clôture. Voulez-vous dire qu'elles ne peuvent pas être communiquées aux évêques et responsables qui nous interrogeront ? Peut-on les partager en interne ? Ou ces informations doivent-elles rester dans cette salle ?",
      "it": "Rispondete per favore riguardo alle informazioni riservate sul luogo della Messa di chiusura. Intendete dire che non possono essere condivise con i vescovi e i responsabili che ce ne chiederanno? Si possono condividere internamente? Oppure queste informazioni devono restare in questa sala?",
      "pt": "Respondam, por favor, quanto às informações confidenciais sobre o local da Missa de Encerramento. Querem dizer que não podem ser partilhadas com os bispos e responsáveis que nos vão perguntar? Pode partilhar-se internamente? Ou esta informação tem de ficar nesta sala?"
    },
    "a": {
      "ko": "폐막미사 장소에 대한 정보는 주교회의와 교구 차원의 내부 공유가 가능합니다. 하지만 공식적인 발표가 나기 전에 공적인 매체(방송, 인터넷, 유튜브, 신문기사, 개인SNS 등)으로는 공유해서는 안됩니다. 발표가 되기 전까지 기도하는 마음으로 기다려 주시기 바랍니다.",
      "en": "Information about the Closing Mass site may be shared internally at the level of episcopal conferences and dioceses. It must not, however, be shared through public channels (broadcast, internet, YouTube, newspaper articles, personal social media, etc.) before the official announcement. Please wait prayerfully until it is announced.",
      "es": "La información sobre el lugar de la Misa de Clausura puede compartirse internamente a nivel de conferencias episcopales y diócesis. Sin embargo, no debe compartirse por canales públicos (radio y televisión, internet, YouTube, artículos de prensa, redes sociales personales, etc.) antes del anuncio oficial. Les rogamos que esperen con espíritu de oración hasta que se anuncie.",
      "fr": "Les informations sur le site de la Messe de clôture peuvent être partagées en interne au niveau des conférences épiscopales et des diocèses. Elles ne doivent toutefois pas être diffusées par des canaux publics (radio et télévision, Internet, YouTube, articles de presse, réseaux sociaux personnels, etc.) avant l'annonce officielle. Nous vous invitons à attendre dans la prière jusqu'à l'annonce.",
      "it": "Le informazioni sul luogo della Messa di chiusura possono essere condivise internamente a livello di conferenze episcopali e diocesi. Non devono però essere diffuse attraverso canali pubblici (radio e televisione, internet, YouTube, articoli di giornale, social media personali, ecc.) prima dell'annuncio ufficiale. Vi invitiamo ad attendere in preghiera fino all'annuncio.",
      "pt": "As informações sobre o local da Missa de Encerramento podem ser partilhadas internamente ao nível das conferências episcopais e das dioceses. Não devem, porém, ser divulgadas através de canais públicos (rádio e televisão, internet, YouTube, artigos de jornal, redes sociais pessoais, etc.) antes do anúncio oficial. Pedimos que aguardem em oração até ao anúncio."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q122",
    "no": "Q122",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "폐막미사 장소에 대해 여쭤보겠습니다. A1과 A3 구역에 신부님들을 배치해 주실 수 있을까요? 그래야 청소년들도 A2 구역, 즉 무대 바로 앞쪽에 자리를 잡을 수 있을 것 같습니다.",
      "en": "About the Closing Mass site: could priests be placed in sections A1 and A3? Then young people could take section A2, right in front of the stage.",
      "es": "Sobre el lugar de la Misa de Clausura: ¿podrían ubicar a los sacerdotes en los sectores A1 y A3? Así los jóvenes podrían ocupar el sector A2, justo delante del escenario.",
      "fr": "Concernant le site de la Messe de clôture : les prêtres pourraient-ils être placés dans les secteurs A1 et A3 ? Les jeunes pourraient alors occuper le secteur A2, juste devant la scène.",
      "it": "A proposito del luogo della Messa di chiusura: i sacerdoti potrebbero essere collocati nei settori A1 e A3? Così i giovani potrebbero occupare il settore A2, proprio davanti al palco.",
      "pt": "Sobre o local da Missa de Encerramento: os sacerdotes poderiam ficar nos setores A1 e A3? Assim os jovens poderiam ocupar o setor A2, mesmo em frente ao palco."
    },
    "a": {
      "ko": "무대 전면의 구역들은 특별히 관리될것입니다. 사제석은 별도의 전면구역에 배정계획중이고 대표청년들, 소외계층의 청년들과 특수참가자들은 별도로 관리되어 무대 앞자리에 배석할 것입니다. 구체적인 좌석배치는 순례자 등록 마감이 되어야 확정됩니다.",
      "en": "The sections in front of the stage will be specially managed. We plan to place the priests' seating in a separate front section, and youth representatives, young people from marginalized communities and special participants will be managed separately and seated in front of the stage. The exact seating will be confirmed only once pilgrim registration has closed.",
      "es": "Los sectores situados delante del escenario se gestionarán de forma especial. Está previsto ubicar los asientos de los sacerdotes en un sector delantero aparte, y los jóvenes representantes, los jóvenes de comunidades marginadas y los participantes especiales se gestionarán por separado y se sentarán delante del escenario. La distribución exacta de los asientos solo se confirmará una vez cerrada la inscripción de peregrinos.",
      "fr": "Les secteurs situés devant la scène feront l'objet d'une gestion particulière. Nous prévoyons de placer les prêtres dans un secteur avant distinct, et les jeunes représentants, les jeunes issus de communautés marginalisées et les participants particuliers seront gérés séparément et placés devant la scène. La disposition exacte des places ne sera confirmée qu'une fois l'inscription des pèlerins clôturée.",
      "it": "I settori davanti al palco saranno gestiti in modo speciale. Prevediamo di collocare i posti dei sacerdoti in un settore anteriore separato, mentre i giovani rappresentanti, i giovani provenienti da comunità emarginate e i partecipanti speciali saranno gestiti separatamente e collocati davanti al palco. La disposizione esatta dei posti sarà confermata solo una volta chiuse le iscrizioni dei pellegrini.",
      "pt": "Os setores em frente ao palco terão uma gestão especial. Prevemos colocar os lugares dos sacerdotes num setor dianteiro separado, e os jovens representantes, os jovens de comunidades marginalizadas e os participantes especiais serão geridos separadamente e colocados em frente ao palco. A disposição exata dos lugares só será confirmada depois de encerradas as inscrições dos peregrinos."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q123",
    "no": "Q123",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "개막 미사와 폐막 미사에 가져갈 수 있는 물품과 가져갈 수 없는 물품에 대한 목록이 미리 공개될 예정인가요? 예를 들어, 폐막 미사 때 텐트를 설치해도 되나요?",
      "en": "Will a list of items that may and may not be brought to the Opening and Closing Masses be published in advance? For example, may we pitch tents at the Closing Mass?",
      "es": "¿Se publicará con antelación una lista de los objetos que se pueden y no se pueden llevar a las Misas de Apertura y de Clausura? Por ejemplo, ¿podemos montar tiendas de campaña en la Misa de Clausura?",
      "fr": "Une liste des objets autorisés et interdits aux Messes d'ouverture et de clôture sera-t-elle publiée à l'avance ? Par exemple, peut-on monter des tentes lors de la Messe de clôture ?",
      "it": "Sarà pubblicato in anticipo un elenco degli oggetti che si possono e non si possono portare alle Messe di apertura e di chiusura? Ad esempio, si possono montare tende alla Messa di chiusura?",
      "pt": "Será publicada previamente uma lista dos objetos que se podem e não se podem levar para as Missas de Abertura e de Encerramento? Por exemplo, podemos montar tendas na Missa de Encerramento?"
    },
    "a": {
      "ko": "반입가능 물품은 미리 공지될 것이고 상식적으로 하룻밤 비박에 필요한 물품 정도에 한해 가능합니다. 텐트설치는 불가합니다.",
      "en": "The items that may be brought will be announced in advance and will be limited to what is reasonably needed for one night sleeping outdoors. Tents may not be pitched.",
      "es": "Los objetos que se pueden llevar se anunciarán con antelación y se limitarán a lo razonablemente necesario para una noche al aire libre. No se pueden montar tiendas de campaña.",
      "fr": "Les objets autorisés seront communiqués à l'avance et limités à ce qui est raisonnablement nécessaire pour une nuit à la belle étoile. Le montage de tentes n'est pas autorisé.",
      "it": "Gli oggetti consentiti saranno comunicati in anticipo e saranno limitati a quanto ragionevolmente necessario per una notte all'aperto. Non è consentito montare tende.",
      "pt": "Os objetos permitidos serão anunciados previamente e limitar-se-ão ao razoavelmente necessário para uma noite ao ar livre. Não é permitido montar tendas."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q124",
    "no": "Q124",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "폐막미사때, 순례자들이 지정된 구역으로 이동하도록 안내해 줄 자원봉사자들이 배치될 예정인가요? 지난번 행사에서는 일부 순례자들이 지정된 구역을 따르지 않고 무대 근처 자리를 차지하려는 경향이 있었기 때문입니다.",
      "en": "At the Closing Mass, will volunteers be deployed to guide pilgrims to their assigned sections? At the last event, some pilgrims tended to ignore their assigned sections and try to take places near the stage.",
      "es": "En la Misa de Clausura, ¿habrá voluntarios que guíen a los peregrinos hacia sus sectores asignados? En el último evento, algunos peregrinos tendían a no respetar sus sectores asignados e intentaban ocupar sitios cerca del escenario.",
      "fr": "Lors de la Messe de clôture, des volontaires seront-ils déployés pour guider les pèlerins vers leurs secteurs attribués ? Lors du dernier événement, certains pèlerins avaient tendance à ignorer leur secteur attribué et à chercher à se placer près de la scène.",
      "it": "Alla Messa di chiusura saranno impiegati volontari per guidare i pellegrini ai settori assegnati? All'ultimo evento alcuni pellegrini tendevano a ignorare i settori assegnati e a cercare posti vicino al palco.",
      "pt": "Na Missa de Encerramento, serão destacados voluntários para orientar os peregrinos para os setores atribuídos? No último evento, alguns peregrinos tendiam a ignorar os setores atribuídos e a tentar ficar perto do palco."
    },
    "a": {
      "ko": "조직위는 대규모 인파가 몰릴 것으로 예상되는 모든 행사에 있어 안전을 최우선으로 고려하여 준비하고 있습니다. 순례자들의 안전을 위해 봉사자 배치를 포함한 많은 방법을 준비하고 실행하겠습니다.",
      "en": "For every event where large crowds are expected, the LOC is preparing with safety as its first priority. For pilgrims' safety we will prepare and carry out many measures, including deploying volunteers.",
      "es": "Para todos los actos en los que se prevé gran afluencia de público, el COL se está preparando con la seguridad como primera prioridad. Para la seguridad de los peregrinos, prepararemos y aplicaremos numerosas medidas, incluido el despliegue de voluntarios.",
      "fr": "Pour tout événement où de grandes foules sont attendues, le COL se prépare en plaçant la sécurité au premier rang. Pour la sécurité des pèlerins, nous préparerons et mettrons en œuvre de nombreuses mesures, dont le déploiement de volontaires.",
      "it": "Per ogni evento in cui è prevista una grande affluenza, il COL si sta preparando ponendo la sicurezza al primo posto. Per la sicurezza dei pellegrini prepareremo e attueremo numerose misure, tra cui l'impiego di volontari.",
      "pt": "Para todos os eventos em que se espera grande afluência, o COL está a preparar-se colocando a segurança em primeiro lugar. Para a segurança dos peregrinos, prepararemos e poremos em prática muitas medidas, incluindo o destacamento de voluntários."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q125",
    "no": "Q125",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "밤샘기도와 폐막미사 장소까지 어떻게 가면 될까요? 대중교통을 이용해서 갈 수 있을까요?",
      "en": "How do we get to the Vigil and Closing Mass venue? Can we go by public transport?",
      "es": "¿Cómo llegamos al lugar de la Vigilia y la Misa de Clausura? ¿Podemos ir en transporte público?",
      "fr": "Comment se rendre sur le site de la Veillée et de la Messe de clôture ? Peut-on y aller en transports en commun ?",
      "it": "Come si raggiunge il luogo della Veglia e della Messa di chiusura? Ci si può andare con i mezzi pubblici?",
      "pt": "Como se chega ao local da Vigília e da Missa de Encerramento? Pode ir-se de transportes públicos?"
    },
    "a": {
      "ko": "지하철과 도보로 이동합니다. 자세한 내용은 대회 직전 순례자를 위한\n수송/교통가이드를 배포해 안내 예정입니다.",
      "en": "You will travel by subway and on foot. Details will be given in the transport guide for pilgrims, to be distributed shortly before the event.",
      "es": "El desplazamiento será en metro y a pie. Los detalles figurarán en la guía de transporte para los peregrinos, que se distribuirá poco antes del evento.",
      "fr": "Le déplacement se fera en métro et à pied. Les détails seront donnés dans le guide des transports pour les pèlerins, distribué peu avant l'événement.",
      "it": "Lo spostamento avverrà in metropolitana e a piedi. I dettagli saranno forniti nella guida ai trasporti per i pellegrini, che sarà distribuita poco prima dell'evento.",
      "pt": "A deslocação será feita de metro e a pé. Os pormenores constarão do guia de transportes para os peregrinos, a distribuir pouco antes do evento."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q126",
    "no": "Q126",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "밤샘기도 중에 폭우가 내릴 경우를 대비한 대체 계획이 있나요?",
      "en": "Is there a backup plan in case of heavy rain during the Vigil?",
      "es": "¿Hay un plan alternativo en caso de lluvias intensas durante la Vigilia?",
      "fr": "Existe-t-il un plan de repli en cas de fortes pluies pendant la Veillée ?",
      "it": "C'è un piano alternativo in caso di forti piogge durante la Veglia?",
      "pt": "Existe um plano alternativo em caso de chuva forte durante a Vigília?"
    },
    "a": {
      "ko": "밤샘기도 중에 폭우가 내릴 경우 현장에 설치된 대형텐트, 격납고 등을 활용할 예정이며,\n구체적인 우천 대응방안을 마련하고 있습니다.",
      "en": "If there is heavy rain during the Vigil, we plan to use large tents, hangars and other structures on site, and are preparing a specific plan for wet weather.",
      "es": "Si hay lluvias intensas durante la Vigilia, está previsto utilizar las grandes carpas, hangares y otras estructuras del lugar, y estamos preparando un plan concreto para caso de lluvia.",
      "fr": "En cas de fortes pluies pendant la Veillée, nous prévoyons d'utiliser les grandes tentes, hangars et autres structures présents sur le site, et nous préparons un plan précis en cas de pluie.",
      "it": "In caso di forti piogge durante la Veglia, prevediamo di utilizzare grandi tende, hangar e altre strutture presenti sul posto, e stiamo preparando un piano specifico per il maltempo.",
      "pt": "Em caso de chuva forte durante a Vigília, prevemos utilizar grandes tendas, hangares e outras estruturas existentes no local, e estamos a preparar um plano específico para mau tempo."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q127",
    "no": "Q127",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD 기간 중 예상되는 폭염과 폭우에 대비하여 철야기도 및 폐막 미사 등 야외 행사에서 순례자를 보호하기 위한 대책은 무엇인가요? 그늘막, 식수, 휴식 공간 등은 LOC에서 제공하는지, 모자·양산 등 참가자가 개별적으로 준비해야 할 사항도 안내해 주실 수 있나요?",
      "en": "What measures will protect pilgrims at outdoor events such as the Vigil and the Closing Mass from the heat waves and heavy rain expected during WYD? Will the LOC provide shade, drinking water and rest areas, and can you tell us what participants should bring themselves, such as hats and parasols?",
      "es": "¿Qué medidas protegerán a los peregrinos en los actos al aire libre, como la Vigilia y la Misa de Clausura, frente a las olas de calor y las lluvias intensas previstas durante la JMJ? ¿Proporcionará el COL sombra, agua potable y zonas de descanso? ¿Pueden indicarnos qué deben llevar los propios participantes, como gorras y sombrillas?",
      "fr": "Quelles mesures protégeront les pèlerins lors des événements en plein air, comme la Veillée et la Messe de clôture, contre les canicules et les fortes pluies attendues pendant les JMJ ? Le COL fournira-t-il de l'ombre, de l'eau potable et des espaces de repos, et pouvez-vous nous indiquer ce que les participants doivent apporter eux-mêmes, comme des chapeaux et des ombrelles ?",
      "it": "Quali misure proteggeranno i pellegrini negli eventi all'aperto, come la Veglia e la Messa di chiusura, dalle ondate di caldo e dalle forti piogge previste durante la GMG? Il COL fornirà ombra, acqua potabile e aree di riposo, e potete indicarci cosa devono portare i partecipanti, come cappelli e ombrelli parasole?",
      "pt": "Que medidas protegerão os peregrinos nos eventos ao ar livre, como a Vigília e a Missa de Encerramento, das ondas de calor e da chuva forte previstas durante a JMJ? O COL vai disponibilizar sombra, água potável e zonas de descanso, e podem indicar-nos o que os participantes devem levar, como chapéus e guarda-sóis?"
    },
    "a": {
      "ko": "행사장 내부에 폭염과 폭우에 대비할 수 있는 대기소나 천막을 설치할 예정이나 모든 사람을 수용하기 어렵기 때문에 각자 모자와 양산을 개별적으로 지참해야 하며 등록이 오픈되면 이를 다시 한 번 안내할 예정입니다.",
      "en": "We plan to set up waiting areas or tents inside the venue for protection from heat and heavy rain, but they cannot hold everyone, so each person should bring their own hat and parasol (sun umbrella). We will remind you of this once registration opens.",
      "es": "Está previsto instalar zonas de espera o carpas dentro del recinto para protegerse del calor y de las lluvias intensas, pero no podrán acoger a todos, por lo que cada persona debe llevar su propia gorra y sombrilla (paraguas para el sol). Lo recordaremos una vez abierta la inscripción.",
      "fr": "Nous prévoyons d'installer des espaces d'attente ou des tentes sur le site pour se protéger de la chaleur et des fortes pluies, mais ils ne pourront pas accueillir tout le monde ; chacun doit donc apporter son propre chapeau et son ombrelle (parasol). Nous vous le rappellerons à l'ouverture des inscriptions.",
      "it": "Prevediamo di allestire aree di attesa o tende all'interno della sede per proteggersi dal caldo e dalle forti piogge, ma non potranno accogliere tutti; ciascuno dovrà quindi portare il proprio cappello e ombrello parasole. Ve lo ricorderemo all'apertura delle iscrizioni.",
      "pt": "Prevemos instalar zonas de espera ou tendas no recinto para proteção do calor e da chuva forte, mas não poderão acolher todos; por isso, cada pessoa deve levar o seu chapéu e guarda-sol (sombrinha). Iremos lembrar-vos disto quando as inscrições abrirem."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q128",
    "no": "Q128",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "철야기도 장소에 예상보다 많은 순례자가 몰려 수용 인원을 초과하거나 혼잡이 발생할 경우, 입장하지 못하는 순례자가 없도록 어떤 입장 관리 및 대체 참여 방안을 마련할 예정인가요? 리스본에서는 일부 순례자가 혼잡으로 인해 철야기도 장소에 들어가지 못했습니다.",
      "en": "If more pilgrims than expected come to the Vigil site and it exceeds capacity or becomes congested, what entry management and alternative ways of taking part will be put in place so that no pilgrim is left unable to enter? In Lisbon some pilgrims could not get into the Vigil site because of congestion.",
      "es": "Si al lugar de la Vigilia acuden más peregrinos de lo previsto y se supera la capacidad o se produce aglomeración, ¿qué medidas de control de acceso y formas alternativas de participación habrá para que ningún peregrino se quede sin poder entrar? En Lisboa, algunos peregrinos no pudieron entrar en el lugar de la Vigilia por la aglomeración.",
      "fr": "Si davantage de pèlerins que prévu se rendent sur le site de la Veillée, au point d'en dépasser la capacité ou de provoquer des encombrements, quelles mesures de gestion des entrées et quelles autres manières de participer seront prévues pour qu'aucun pèlerin ne reste sans pouvoir entrer ? À Lisbonne, certains pèlerins n'ont pas pu accéder au site de la Veillée à cause de la foule.",
      "it": "Se al luogo della Veglia arrivano più pellegrini del previsto, superandone la capienza o creando congestione, quali misure di gestione degli accessi e quali modalità alternative di partecipazione saranno previste perché nessun pellegrino resti senza poter entrare? A Lisbona alcuni pellegrini non sono riusciti a entrare nel luogo della Veglia a causa della congestione.",
      "pt": "Se vierem mais peregrinos do que o previsto ao local da Vigília e este ultrapassar a capacidade ou ficar congestionado, que gestão de entradas e que formas alternativas de participação serão previstas para que nenhum peregrino fique sem poder entrar? Em Lisboa, alguns peregrinos não conseguiram entrar no local da Vigília devido à congestão."
    },
    "a": {
      "ko": "그룹별로 순차이동 가이드를 제공하여 최대한 많은 순례자가 폐막미사에 올 수 있도록 준비중입니다.",
      "en": "We are preparing staggered movement guidance for each group so that as many pilgrims as possible can attend the Closing Mass.",
      "es": "Estamos preparando indicaciones de desplazamiento escalonado para cada grupo, para que el mayor número posible de peregrinos pueda asistir a la Misa de Clausura.",
      "fr": "Nous préparons des consignes de déplacement échelonné pour chaque groupe afin que le plus grand nombre possible de pèlerins puisse assister à la Messe de clôture.",
      "it": "Stiamo preparando indicazioni per spostamenti scaglionati per ciascun gruppo, così che il maggior numero possibile di pellegrini possa partecipare alla Messa di chiusura.",
      "pt": "Estamos a preparar orientações de deslocação escalonada para cada grupo, para que o maior número possível de peregrinos possa participar na Missa de Encerramento."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q129",
    "no": "Q129",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "주요 미사에서 사제의 공동집전과 부제의 전례 참여는 어떻게 운영되나요? 별도의 사전 등록이나 자격 확인이 필요한지, 장백의(Alb)와 영대(Stole) 등 전례복은 개인이 준비해야 하는지도 안내 부탁드립니다.",
      "en": "How will concelebration by priests and liturgical participation by deacons be organized at the main Masses? Please tell us whether separate advance registration or verification is needed, and whether individuals must bring their own vestments such as an alb and stole.",
      "es": "¿Cómo se organizarán la concelebración de los sacerdotes y la participación litúrgica de los diáconos en las Misas principales? Indíquennos si se necesita inscripción previa o verificación aparte, y si cada uno debe llevar sus propias vestiduras, como el alba y la estola.",
      "fr": "Comment la concélébration des prêtres et la participation liturgique des diacres seront-elles organisées lors des principales messes ? Merci de préciser si une inscription préalable ou une vérification distincte est nécessaire, et si chacun doit apporter ses propres vêtements liturgiques, comme l'aube et l'étole.",
      "it": "Come saranno organizzate la concelebrazione dei sacerdoti e la partecipazione liturgica dei diaconi alle Messe principali? Indicateci se è necessaria un'iscrizione o una verifica anticipata separata, e se ciascuno deve portare i propri paramenti, come camice e stola.",
      "pt": "Como serão organizadas a concelebração dos sacerdotes e a participação litúrgica dos diáconos nas principais Missas? Indiquem-nos se é necessária uma inscrição ou verificação prévia separada, e se cada um tem de levar os seus próprios paramentos, como alva e estola."
    },
    "a": {
      "ko": "개막미사 사제석은 무대 뒷 좌석을 전용좌석으로 고려중입니다. 폐막미사에는 보다 청년들을 제단에 가까이 배려하고자 청년들 좌-우측 맨 끝자리로 사제석을 고려중입니다. 영대 및 제의 배포건은 현재 검토중이며, 구체적인 사항은 확정 후 안내드리겠습니다.",
      "en": "For the Opening Mass, we are considering dedicated priests' seating behind the stage. For the Closing Mass, to bring young people closer to the altar, we are considering priests' seating at the far left and right ends of the young people's area. The distribution of stoles and vestments is currently under review. We will provide further details once it has been confirmed.",
      "es": "Para la Misa de Apertura, estamos considerando asientos exclusivos para los sacerdotes detrás del escenario. Para la Misa de Clausura, con el fin de acercar a los jóvenes al altar, estamos considerando situar los asientos de los sacerdotes en los extremos izquierdo y derecho de la zona de los jóvenes. La distribución de estolas y vestiduras está actualmente en estudio. Daremos más detalles una vez confirmada.",
      "fr": "Pour la Messe d'ouverture, nous envisageons des places réservées aux prêtres derrière la scène. Pour la Messe de clôture, afin de rapprocher les jeunes de l'autel, nous envisageons de placer les prêtres aux extrémités gauche et droite de l'espace des jeunes. La distribution des étoles et des vêtements liturgiques est actuellement à l'étude. Nous donnerons plus de détails une fois qu'elle aura été confirmée.",
      "it": "Per la Messa di apertura stiamo valutando posti dedicati ai sacerdoti dietro il palco. Per la Messa di chiusura, per avvicinare i giovani all'altare, stiamo valutando di collocare i sacerdoti alle estremità sinistra e destra dell'area dei giovani. La distribuzione di stole e paramenti è attualmente in fase di valutazione. Forniremo ulteriori dettagli una volta confermata.",
      "pt": "Para a Missa de Abertura, estamos a ponderar lugares dedicados aos sacerdotes atrás do palco. Para a Missa de Encerramento, para aproximar os jovens do altar, estamos a ponderar colocar os sacerdotes nas extremidades esquerda e direita da zona dos jovens. A distribuição de estolas e paramentos está atualmente em análise. Daremos mais pormenores logo que esteja confirmada."
    },
    "sub": {
      "ko": "밤샘기도 · 폐막미사",
      "en": "Vigil · Closing Mass",
      "es": "Vigilia · Misa de Clausura",
      "fr": "Veillée · Messe de clôture",
      "it": "Veglia · Messa di Chiusura",
      "pt": "Vigília · Missa de Encerramento"
    },
    "subNo": "b"
  },
  {
    "id": "Q130",
    "no": "Q130",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "WYD에서 국제 청년 단체와 외부 주최자가 일반 행사, 워크숍 또는 부대행사를 제안하고 참여·협력할 수 있는 기회와 절차는 어떻게 되나요? 젊은이 축제에 참가하려는 단체는 무엇을 준비해야 하며, 공간·부스의 신청 및 배정 절차와 참가 비용은 어떻게 되나요?",
      "en": "What opportunities and procedures are there for international youth organizations and external organizers to propose, take part in or collaborate on general events, workshops or side events at WYD Seoul 2027?\n\nWhat must organizations wishing to take part in the Youth Festival prepare, and what are the procedures for applying for and allocating space or booths, and the participation costs?",
      "es": "¿Qué oportunidades y procedimientos existen para que organizaciones juveniles internacionales y organizadores externos propongan actos generales, talleres o actos paralelos, participen en ellos o colaboren en la JMJ Seúl 2027?\n\n¿Qué deben preparar las organizaciones que deseen participar en el Festival de la Juventud, y cuáles son los procedimientos de solicitud y asignación de espacios o stands y los costes de participación?",
      "fr": "Quelles possibilités et procédures existe-t-il pour que des organisations internationales de jeunes et des organisateurs extérieurs proposent des événements généraux, des ateliers ou des activités annexes, y participent ou y collaborent lors des JMJ Séoul 2027 ?\n\nQue doivent préparer les organisations souhaitant participer au Festival de la jeunesse, et quelles sont les procédures de demande et d'attribution d'espaces ou de stands, ainsi que les frais de participation ?",
      "it": "Quali opportunità e procedure esistono perché organizzazioni giovanili internazionali e organizzatori esterni possano proporre, partecipare o collaborare a eventi generali, laboratori o eventi collaterali alla GMG Seoul 2027?\n\nCosa devono preparare le organizzazioni che desiderano partecipare al Festival della Gioventù, e quali sono le procedure per richiedere e assegnare spazi o stand, e i costi di partecipazione?",
      "pt": "Que oportunidades e procedimentos existem para que organizações juvenis internacionais e organizadores externos possam propor, participar ou colaborar em eventos gerais, workshops ou eventos paralelos na JMJ Seul 2027?\n\nO que devem preparar as organizações que desejem participar no Festival da Juventude, e quais são os procedimentos para pedir e atribuir espaços ou stands, e os custos de participação?"
    },
    "a": {
      "ko": "젊은이 축제에 참가하려는 단체는 등록시스템을 통해서 자신들이 하고자 하는 프로젝트를 신청할 수 있습니다. 공연, 강연, 전시, 기도와 찬양, 워크샵 등 다양한 장르의 프로젝트가 가능하고, 참가비는 무료입니다. 모든 나라에서 참여 가능합니다. 참가팀의 최종 선정은 교황청과 조직위가 하고, 장소는 조직위가 배정 및 제공합니다.",
      "en": "Organizations wishing to take part in the Youth Festival can apply with the project they want to run through the registration system. Projects in many genres are possible — performances, talks, exhibitions, prayer and praise, workshops and more — and participation is free. Organizations from every country may take part. Final selection of participating teams is made by the Holy See and the LOC, and venues are assigned and provided by the LOC.",
      "es": "Las organizaciones que deseen participar en el Festival de la Juventud pueden presentar a través del sistema de inscripción el proyecto que quieran realizar. Son posibles proyectos de muchos géneros —actuaciones, charlas, exposiciones, oración y alabanza, talleres y más— y la participación es gratuita. Pueden participar organizaciones de todos los países. La selección final de los equipos participantes la realizan la Santa Sede y el COL, y el COL asigna y proporciona los lugares.",
      "fr": "Les organisations souhaitant participer au Festival de la jeunesse peuvent proposer le projet qu'elles veulent réaliser via le système d'inscription. Des projets de nombreux genres sont possibles — spectacles, conférences, expositions, prière et louange, ateliers, etc. — et la participation est gratuite. Les organisations de tous les pays peuvent participer. La sélection finale des équipes participantes est faite par le Saint-Siège et le COL, et les lieux sont attribués et fournis par le COL.",
      "it": "Le organizzazioni che desiderano partecipare al Festival della Gioventù possono candidarsi con il progetto che vogliono realizzare tramite il sistema di iscrizione. Sono possibili progetti di molti generi — spettacoli, conferenze, mostre, preghiera e lode, laboratori e altro — e la partecipazione è gratuita. Possono partecipare organizzazioni di tutti i Paesi. La selezione finale delle squadre partecipanti è fatta dalla Santa Sede e dal COL, e le sedi sono assegnate e fornite dal COL.",
      "pt": "As organizações que desejem participar no Festival da Juventude podem candidatar-se com o projeto que querem realizar através do sistema de inscrição. São possíveis projetos de muitos géneros — espetáculos, palestras, exposições, oração e louvor, workshops e mais — e a participação é gratuita. Podem participar organizações de todos os países. A seleção final das equipas participantes é feita pela Santa Sé e pelo COL, e os locais são atribuídos e disponibilizados pelo COL."
    },
    "sub": {
      "ko": "젊은이 축제",
      "en": "Youth Festival",
      "es": "Festival de la Juventud",
      "fr": "Festival de la jeunesse",
      "it": "Festival della Gioventù",
      "pt": "Festival da Juventude"
    },
    "subNo": "c"
  },
  {
    "id": "Q131",
    "no": "Q131",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "다른 나라의 청년들은 그들의 젊은이 축제를 어떻게 공연하나요? 등록이 필요한가요? 행사장이 배정되나요? 참가비를 내야 하나요!",
      "en": "How do young people from other countries perform at the Youth Festival? Is registration required? Is a venue assigned? Do they have to pay a participation fee?",
      "es": "¿Cómo actúan los jóvenes de otros países en el Festival de la Juventud? ¿Hay que inscribirse? ¿Se asigna un lugar? ¿Tienen que pagar una cuota de participación?",
      "fr": "Comment les jeunes d'autres pays se produisent-ils au Festival de la jeunesse ? Faut-il s'inscrire ? Un lieu est-il attribué ? Faut-il payer des frais de participation ?",
      "it": "Come si esibiscono al Festival della Gioventù i giovani di altri Paesi? È necessaria l'iscrizione? Viene assegnata una sede? Devono pagare una quota di partecipazione?",
      "pt": "Como atuam no Festival da Juventude os jovens de outros países? É necessária inscrição? É atribuído um local? Têm de pagar uma taxa de participação?"
    },
    "a": {
      "ko": "젊은이 축제와 성소박람회는 본대회 기간 동안만 본대회 개최교구에서 운영됩니다. 참가를 원하는 그룹이나 단체는 등록시스템을 통하여 신청할 수 있습니다. 젊은이 축제는 참가비가 없으며, 성소박람회는 부스 1개일 때 700 미국달러, 부스 2개일 때 1,300 미국달러의 부스 비용이 필요합니다. 젊은이 축제의 경우, 프로젝트를 운영하는 팀이 원하는 대로 언어를 결정할 수 있습니다. 대부분 영어를 포함합니다.",
      "en": "The Youth Festival and the Vocations Fair run only during WYD, in the host diocese. Groups or organizations wishing to take part can apply through the registration system. There is no participation fee for the Youth Festival; for the Vocations Fair there is a booth fee of US$700 for one booth and US$1,300 for two. For the Youth Festival, the team running a project can decide its language as it wishes. Most include English.",
      "es": "El Festival de la Juventud y la Feria Vocacional solo se celebran durante la JMJ, en la diócesis anfitriona. Los grupos u organizaciones que deseen participar pueden solicitarlo a través del sistema de inscripción. El Festival de la Juventud no tiene cuota de participación; para la Feria Vocacional hay una tarifa de 700 USD por un stand y de 1.300 USD por dos. En el Festival de la Juventud, el equipo que realiza un proyecto puede decidir el idioma como desee. La mayoría incluye el inglés.",
      "fr": "Le Festival de la jeunesse et le Salon des vocations n'ont lieu que pendant les JMJ, dans le diocèse hôte. Les groupes ou organisations souhaitant y participer peuvent faire leur demande via le système d'inscription. Le Festival de la jeunesse est gratuit ; pour le Salon des vocations, des frais de stand de 700 USD pour un stand et de 1 300 USD pour deux sont demandés. Pour le Festival de la jeunesse, l'équipe qui porte un projet peut choisir librement sa langue. La plupart incluent l'anglais.",
      "it": "Il Festival della Gioventù e la Fiera delle Vocazioni si svolgono solo durante la GMG, nella diocesi ospitante. I gruppi o le organizzazioni che desiderano partecipare possono candidarsi tramite il sistema di iscrizione. Per il Festival della Gioventù non c'è quota di partecipazione; per la Fiera delle Vocazioni è prevista una quota di 700 USD per uno stand e di 1.300 USD per due. Per il Festival della Gioventù, la squadra che realizza un progetto può decidere liberamente la lingua. La maggior parte include l'inglese.",
      "pt": "O Festival da Juventude e a Feira Vocacional decorrem apenas durante a JMJ, na diocese anfitriã. Os grupos ou organizações que desejem participar podem candidatar-se através do sistema de inscrição. Não há taxa de participação para o Festival da Juventude; para a Feira Vocacional, há uma taxa de 700 USD por um stand e de 1300 USD por dois. No Festival da Juventude, a equipa que realiza um projeto pode decidir livremente a língua. A maioria inclui o inglês."
    },
    "sub": {
      "ko": "젊은이 축제",
      "en": "Youth Festival",
      "es": "Festival de la Juventud",
      "fr": "Festival de la jeunesse",
      "it": "Festival della Gioventù",
      "pt": "Festival da Juventude"
    },
    "subNo": "c"
  },
  {
    "id": "Q132",
    "no": "Q132",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "젊은이 축제와 성소 박람회에 참가하는 절차는 어떤 웹사이트나 홈페이지에서 확인할 수 있나요? 어떻게 알 수 있나요? 이 경험을 더욱 풍요롭게 만들기 위해 우리 각국에서 해당 정보를 널리 알릴 수 있을까요? WYD의 City of Joy, 성소 박람회 및 젊은이 축제는 언제, 어디에서, 어떤 형태로 운영되며, 여러 교구에 분산하여 개최되는지와 언어권별 프로그램이 마련되는지 궁금합니다.",
      "en": "On what website or homepage can we find the procedure for taking part in the Youth Festival and the Vocations Fair? How can we find out? Can we spread this information widely in each of our countries to make the experience even richer?\n\nWhen, where and in what form will the City of Joy, the Vocations Fair and the Youth Festival of WYD Seoul 2027 run? Will they be spread across several dioceses, and will there be programs by language group?",
      "es": "¿En qué web o página podemos consultar el procedimiento para participar en el Festival de la Juventud y la Feria Vocacional? ¿Cómo podemos informarnos? ¿Podemos difundir ampliamente esta información en cada uno de nuestros países para enriquecer aún más la experiencia?\n\n¿Cuándo, dónde y en qué formato se celebrarán la City of Joy, la Feria Vocacional y el Festival de la Juventud de la JMJ Seúl 2027? ¿Se repartirán entre varias diócesis y habrá programas por grupos lingüísticos?",
      "fr": "Sur quel site ou quelle page peut-on trouver la procédure pour participer au Festival de la jeunesse et au Salon des vocations ? Comment s'informer ? Pouvons-nous diffuser largement ces informations dans chacun de nos pays pour rendre l'expérience encore plus riche ?\n\nQuand, où et sous quelle forme se dérouleront la City of Joy, le Salon des vocations et le Festival de la jeunesse des JMJ Séoul 2027 ? Seront-ils répartis entre plusieurs diocèses, et y aura-t-il des programmes par groupe linguistique ?",
      "it": "Su quale sito o pagina web possiamo trovare la procedura per partecipare al Festival della Gioventù e alla Fiera delle Vocazioni? Come possiamo informarci? Possiamo diffondere ampiamente queste informazioni in ciascuno dei nostri Paesi per rendere l'esperienza ancora più ricca?\n\nQuando, dove e in che forma si svolgeranno la City of Joy, la Fiera delle Vocazioni e il Festival della Gioventù della GMG Seoul 2027? Saranno distribuiti in più diocesi, e ci saranno programmi per gruppo linguistico?",
      "pt": "Em que site ou página podemos encontrar o procedimento para participar no Festival da Juventude e na Feira Vocacional? Como podemos informar-nos? Podemos divulgar amplamente esta informação em cada um dos nossos países para tornar a experiência ainda mais rica?\n\nQuando, onde e de que forma decorrerão a City of Joy, a Feira Vocacional e o Festival da Juventude da JMJ Seul 2027? Estarão distribuídos por várias dioceses, e haverá programas por grupo linguístico?"
    },
    "a": {
      "ko": "젊은이 축제와 성소박람회는 등록시스템을 통하여 신청할 수 있습니다. 등록시스템은 10월말경 오픈 예정이며, 공식 홈페이지(https://wydseoul.org/)를 통하여 접근할 수 있습니다. 이 경험을 더욱 풍요롭게 하기 위하여 공식 홈페이지를 널리 홍보해주시기를 부탁드립니다.",
      "en": "You can apply for the Youth Festival and the Vocations Fair through the registration system. The registration system is scheduled to open around the end of October and can be accessed through the official WYD website (https://wydseoul.org/). To make this experience even richer, please help promote the official WYD website widely.",
      "es": "Pueden solicitar la participación en el Festival de la Juventud y la Feria Vocacional a través del sistema de inscripción. Está previsto que el sistema de inscripción se abra hacia finales de octubre, y se puede acceder a él a través de la web oficial de la JMJ (https://wydseoul.org/). Para enriquecer aún más esta experiencia, les rogamos que ayuden a difundir ampliamente la web oficial de la JMJ.",
      "fr": "Vous pouvez vous inscrire au Festival de la jeunesse et au Salon des vocations via le système d'inscription. Celui-ci devrait ouvrir vers la fin octobre et sera accessible depuis le site officiel des JMJ (https://wydseoul.org/). Pour rendre cette expérience encore plus riche, merci de contribuer à faire largement connaître le site officiel des JMJ.",
      "it": "Potete candidarvi al Festival della Gioventù e alla Fiera delle Vocazioni tramite il sistema di iscrizione. Il sistema di iscrizione dovrebbe aprirsi verso la fine di ottobre e sarà accessibile dal sito ufficiale della GMG (https://wydseoul.org/). Per rendere questa esperienza ancora più ricca, aiutateci a far conoscere ampiamente il sito ufficiale della GMG.",
      "pt": "Podem candidatar-se ao Festival da Juventude e à Feira Vocacional através do sistema de inscrição. O sistema de inscrição deverá abrir por volta do final de outubro e estará acessível a partir do site oficial da JMJ (https://wydseoul.org/). Para tornar esta experiência ainda mais rica, ajudem a divulgar amplamente o site oficial da JMJ."
    },
    "sub": {
      "ko": "젊은이 축제",
      "en": "Youth Festival",
      "es": "Festival de la Juventud",
      "fr": "Festival de la jeunesse",
      "it": "Festival della Gioventù",
      "pt": "Festival da Juventude"
    },
    "subNo": "c"
  },
  {
    "id": "Q133",
    "no": "Q133",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "‘화해의 공원’ 기간 동안 사제들은 고해성사를 듣기 위해 어떻게 등록하나요?",
      "en": "How do priests register to hear confessions at Reconciliation Park?",
      "es": "¿Cómo se inscriben los sacerdotes para confesar en el Parque de la Reconciliación?",
      "fr": "Comment les prêtres s'inscrivent-ils pour entendre les confessions au Parc de la Réconciliation ?",
      "it": "Come si iscrivono i sacerdoti per ascoltare le confessioni al Parco della Riconciliazione?",
      "pt": "Como se inscrevem os sacerdotes para ouvir confissões no Parque da Reconciliação?"
    },
    "a": {
      "ko": "사제들은 등록시스템에서 순례자 그룹 등록 시에 함께 등록합니다. 순례자 그룹 등록은 그룹 대표가 하게 되어있으므로 '화해의 공원'에서 고해성사를 듣고자 하는 사제들은 본인이 가능한 날짜와 시간을 대표에게 알리면 됩니다. 그룹없이 홀로 순례하는 사제는 1인그룹으로 등록가능합니다.",
      "en": "Priests register together with their pilgrim group in the registration system. Because group registration is done by the group leader, priests who wish to hear confessions at Reconciliation Park should tell their group leader the dates and times they are available. Priests making the pilgrimage alone, without a group, can register as a one-person group.",
      "es": "Los sacerdotes se inscriben junto con su grupo de peregrinos en el sistema de inscripción. Como la inscripción del grupo la hace el líder del grupo, los sacerdotes que deseen confesar en el Parque de la Reconciliación deben indicar a su líder las fechas y horas en que están disponibles. Los sacerdotes que peregrinan solos, sin grupo, pueden inscribirse como grupo de una sola persona.",
      "fr": "Les prêtres s'inscrivent avec leur groupe de pèlerins dans le système d'inscription. L'inscription du groupe étant faite par le responsable du groupe, les prêtres qui souhaitent entendre les confessions au Parc de la Réconciliation doivent lui indiquer les dates et heures où ils sont disponibles. Les prêtres qui font le pèlerinage seuls, sans groupe, peuvent s'inscrire comme groupe d'une personne.",
      "it": "I sacerdoti si iscrivono insieme al loro gruppo di pellegrini nel sistema di iscrizione. Poiché l'iscrizione del gruppo è effettuata dal responsabile di gruppo, i sacerdoti che desiderano ascoltare le confessioni al Parco della Riconciliazione devono comunicargli le date e gli orari in cui sono disponibili. I sacerdoti che fanno il pellegrinaggio da soli, senza un gruppo, possono iscriversi come gruppo di una sola persona.",
      "pt": "Os sacerdotes inscrevem-se juntamente com o seu grupo de peregrinos no sistema de inscrição. Como a inscrição do grupo é feita pelo responsável de grupo, os sacerdotes que desejem ouvir confissões no Parque da Reconciliação devem indicar-lhe as datas e horas em que estão disponíveis. Os sacerdotes que fazem a peregrinação sozinhos, sem grupo, podem inscrever-se como grupo de uma pessoa."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Vocations Fair (incl. Reconciliation Park)",
      "es": "Feria Vocacional (incl. Parque de la Reconciliación)",
      "fr": "Salon des vocations (dont le Parc de la Réconciliation)",
      "it": "Fiera delle Vocazioni (incl. Parco della Riconciliazione)",
      "pt": "Feira Vocacional (incl. Parque da Reconciliação)"
    },
    "subNo": "d"
  },
  {
    "id": "Q134",
    "no": "Q134",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "성소 박람회의 ‘부스’란 무엇을 의미하나요?",
      "en": "What does a 'booth' mean at the Vocations Fair?",
      "es": "¿Qué significa 'stand' en la Feria Vocacional?",
      "fr": "Que signifie 'stand' au Salon des vocations ?",
      "it": "Cosa si intende per 'stand' alla Fiera delle Vocazioni?",
      "pt": "O que significa 'stand' na Feira Vocacional?"
    },
    "a": {
      "ko": "성소박람회(가톨릭문화박람회)에서 '부스'란 박람회에 참가하는 각 수도회 또는 사도직/신심 단체에게 주어지는 3m X 3m 짜리의 텐트 또는 스탠드로 만들어진 공간을 의미합니다. 한 수도회 당 최대 2개까지 신청할 수 있습니다.",
      "en": "At the Vocations Fair, a 'booth' means a 3 m × 3 m space, made of a tent or stand, given to each religious congregation or apostolic/devotional association taking part. Each congregation may apply for up to two.",
      "es": "En la Feria Vocacional, un 'stand' es un espacio de 3 m × 3 m, formado por una carpa o un expositor, que se asigna a cada congregación religiosa o asociación apostólica o de piedad participante. Cada congregación puede solicitar hasta dos.",
      "fr": "Au Salon des vocations, un 'stand' désigne un espace de 3 m × 3 m, constitué d'une tente ou d'un présentoir, attribué à chaque congrégation religieuse ou association apostolique ou de piété participante. Chaque congrégation peut en demander deux au maximum.",
      "it": "Alla Fiera delle Vocazioni, per 'stand' si intende uno spazio di 3 m × 3 m, costituito da una tenda o un espositore, assegnato a ciascuna congregazione religiosa o associazione apostolica o devozionale partecipante. Ogni congregazione può richiederne al massimo due.",
      "pt": "Na Feira Vocacional, um 'stand' é um espaço de 3 m × 3 m, constituído por uma tenda ou expositor, atribuído a cada congregação religiosa ou associação apostólica ou devocional participante. Cada congregação pode pedir no máximo dois."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Vocations Fair (incl. Reconciliation Park)",
      "es": "Feria Vocacional (incl. Parque de la Reconciliación)",
      "fr": "Salon des vocations (dont le Parc de la Réconciliation)",
      "it": "Fiera delle Vocazioni (incl. Parco della Riconciliazione)",
      "pt": "Feira Vocacional (incl. Parque da Reconciliação)"
    },
    "subNo": "d"
  },
  {
    "id": "Q135",
    "no": "Q135",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "성소 박람회의 내용은 무엇인가요? 참가비는 구체적으로 어떤 용도로 사용되나요?",
      "en": "What does the Vocations Fair involve? What specifically is the participation fee used for?",
      "es": "¿En qué consiste la Feria Vocacional? ¿Para qué se usa concretamente la cuota de participación?",
      "fr": "En quoi consiste le Salon des vocations ? À quoi servent concrètement les frais de participation ?",
      "it": "In cosa consiste la Fiera delle Vocazioni? A cosa serve concretamente la quota di partecipazione?",
      "pt": "Em que consiste a Feira Vocacional? Para que serve concretamente a taxa de participação?"
    },
    "a": {
      "ko": "성소박람회는 참가하는 각 수도회 또는 단체의 카리스마와 영성을 순례자들과 나눔으로써 순례자들로 하여금 자신의 부르심을 식별하도록 도와주는 행사입니다. 참가비용은 행사장 대여와 부스 설치를 위하여 사용됩니다.",
      "en": "The Vocations Fair helps pilgrims discern their own calling by sharing with them the charism and spirituality of each participating congregation or organization. The participation fee is used to rent the venue and set up the booths.",
      "es": "La Feria Vocacional ayuda a los peregrinos a discernir su propia vocación compartiendo con ellos el carisma y la espiritualidad de cada congregación u organización participante. La cuota de participación se destina al alquiler del recinto y al montaje de los stands.",
      "fr": "Le Salon des vocations aide les pèlerins à discerner leur propre vocation en partageant avec eux le charisme et la spiritualité de chaque congrégation ou organisation participante. Les frais de participation servent à la location du site et à l'installation des stands.",
      "it": "La Fiera delle Vocazioni aiuta i pellegrini a discernere la propria vocazione condividendo con loro il carisma e la spiritualità di ciascuna congregazione od organizzazione partecipante. La quota di partecipazione serve per l'affitto della sede e l'allestimento degli stand.",
      "pt": "A Feira Vocacional ajuda os peregrinos a discernir a sua própria vocação, partilhando com eles o carisma e a espiritualidade de cada congregação ou organização participante. A taxa de participação serve para alugar o recinto e montar os stands."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Vocations Fair (incl. Reconciliation Park)",
      "es": "Feria Vocacional (incl. Parque de la Reconciliación)",
      "fr": "Salon des vocations (dont le Parc de la Réconciliation)",
      "it": "Fiera delle Vocazioni (incl. Parco della Riconciliazione)",
      "pt": "Feira Vocacional (incl. Parque da Reconciliação)"
    },
    "subNo": "d"
  },
  {
    "id": "Q136",
    "no": "Q136",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "고해성사에 참여하는 사제들의 선정 기준은 무엇입니까? 선별된 사제들만 참여할 수 있는 것입니까, 아니면 누구나 참여할 수 있습니까? 사제들은 등록 시에 참여 여부를 표시해야 합니까?",
      "en": "What are the criteria for selecting priests to hear confessions? Can only selected priests take part, or anyone? Must priests indicate whether they will take part when they register?",
      "es": "¿Cuáles son los criterios para seleccionar a los sacerdotes que confesarán? ¿Solo pueden participar los sacerdotes seleccionados o cualquiera? ¿Deben indicar los sacerdotes al inscribirse si participarán?",
      "fr": "Selon quels critères les prêtres qui entendront les confessions sont-ils choisis ? Seuls des prêtres sélectionnés peuvent-ils participer, ou tous ? Les prêtres doivent-ils indiquer lors de leur inscription s'ils participeront ?",
      "it": "Con quali criteri vengono scelti i sacerdoti che ascolteranno le confessioni? Possono partecipare solo sacerdoti selezionati, o chiunque? I sacerdoti devono indicare al momento dell'iscrizione se parteciperanno?",
      "pt": "Quais são os critérios de seleção dos sacerdotes que vão ouvir confissões? Só podem participar sacerdotes selecionados, ou qualquer um? Os sacerdotes têm de indicar na inscrição se vão participar?"
    },
    "a": {
      "ko": "사제라면 누구나 참여할 수 있으나 신분 검증을 위해 등록시스템에 등록되어야 합니다.",
      "en": "Any priest may take part, but they must be registered in the registration system for identity verification.",
      "es": "Cualquier sacerdote puede participar, pero debe estar inscrito en el sistema de inscripción para la verificación de su identidad.",
      "fr": "Tout prêtre peut participer, mais il doit être inscrit dans le système d'inscription pour la vérification de son identité.",
      "it": "Qualsiasi sacerdote può partecipare, ma deve essere iscritto nel sistema di iscrizione per la verifica dell'identità.",
      "pt": "Qualquer sacerdote pode participar, mas tem de estar inscrito no sistema de inscrição para verificação da identidade."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Vocations Fair (incl. Reconciliation Park)",
      "es": "Feria Vocacional (incl. Parque de la Reconciliación)",
      "fr": "Salon des vocations (dont le Parc de la Réconciliation)",
      "it": "Fiera delle Vocazioni (incl. Parco della Riconciliazione)",
      "pt": "Feira Vocacional (incl. Parque da Reconciliação)"
    },
    "subNo": "d"
  },
  {
    "id": "Q137",
    "no": "Q137",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "화해의 공원은 이번 행사 기간 동안 며칠 동안 운영되나요? 하루 중 몇 시간 동안 고해 성사가 제공되나요? 청년들이 공원에 자유롭게 드나들 수 있나요? 로마에서 열린 희년 행사 당시에는 고해 성사가 이루어지는 장소로의 접근이 매우 제한적이었고, 거의 통제된 상태였습니다.",
      "en": "For how many days will Reconciliation Park be open during the event? For how many hours a day will confession be available? Can young people move freely in and out of the park? At the Jubilee in Rome, access to the places where confessions were heard was very restricted, almost controlled.",
      "es": "¿Cuántos días abrirá el Parque de la Reconciliación durante el evento? ¿Cuántas horas al día habrá confesiones? ¿Pueden los jóvenes entrar y salir libremente del parque? En el Jubileo de Roma, el acceso a los lugares donde se confesaba estaba muy restringido, casi controlado.",
      "fr": "Combien de jours le Parc de la Réconciliation sera-t-il ouvert pendant l'événement ? Combien d'heures par jour la confession sera-t-elle proposée ? Les jeunes pourront-ils entrer et sortir librement du parc ? Lors du Jubilé à Rome, l'accès aux lieux de confession était très restreint, presque contrôlé.",
      "it": "Per quanti giorni sarà aperto il Parco della Riconciliazione durante l'evento? Per quante ore al giorno sarà possibile confessarsi? I giovani potranno entrare e uscire liberamente dal parco? Al Giubileo di Roma l'accesso ai luoghi delle confessioni era molto limitato, quasi controllato.",
      "pt": "Durante quantos dias estará aberto o Parque da Reconciliação durante o evento? Durante quantas horas por dia será possível confessar-se? Os jovens podem entrar e sair livremente do parque? No Jubileu em Roma, o acesso aos locais de confissão era muito restrito, quase controlado."
    },
    "a": {
      "ko": "화해의 공원은 본대회 주간 화요일부터 금요일까지 오후 1시부터 5시까지 진행됩니다.\n고해성사의 고해기밀 유지 때문에 청년들이 공원을 자유롭게 걸어다닐 수는 없습니다.\n정해진 코스와 봉사자의 안내에 따라 공원 입장이 가능합니다. 고해성사는 준비된 누구나 받을 수 있습니다.",
      "en": "Reconciliation Park will be open from Tuesday to Friday of Main Event week, from 1 p.m. to 5 p.m.\nBecause of the seal of confession, young people cannot walk freely around the park.\nEntry to the park follows a set route under the guidance of volunteers. Anyone who is prepared may receive the Sacrament of Reconciliation.",
      "es": "El Parque de la Reconciliación abrirá de martes a viernes de la semana del Evento Principal, de 13:00 a 17:00.\nPor el sigilo sacramental, los jóvenes no pueden pasear libremente por el parque.\nLa entrada al parque sigue un recorrido establecido bajo la guía de los voluntarios. Cualquier persona preparada puede recibir el Sacramento de la Reconciliación.",
      "fr": "Le Parc de la Réconciliation sera ouvert du mardi au vendredi de la semaine de l'Événement principal, de 13 h à 17 h.\nEn raison du secret de la confession, les jeunes ne peuvent pas circuler librement dans le parc.\nL'entrée dans le parc suit un parcours défini sous la conduite des volontaires. Toute personne qui s'y est préparée peut recevoir le Sacrement de la réconciliation.",
      "it": "Il Parco della Riconciliazione sarà aperto da martedì a venerdì della settimana dell'Evento principale, dalle 13 alle 17.\nA causa del sigillo sacramentale, i giovani non possono muoversi liberamente nel parco.\nL'ingresso al parco segue un percorso definito sotto la guida dei volontari. Chiunque sia preparato può ricevere il Sacramento della Riconciliazione.",
      "pt": "O Parque da Reconciliação estará aberto de terça a sexta-feira da semana do Evento Principal, das 13h às 17h.\nDevido ao sigilo da confissão, os jovens não podem circular livremente pelo parque.\nA entrada no parque segue um percurso definido, com a orientação de voluntários. Qualquer pessoa que esteja preparada pode receber o Sacramento da Reconciliação."
    },
    "sub": {
      "ko": "가톨릭 문화박람회 (성소박람회 · 화해공원)",
      "en": "Vocations Fair (incl. Reconciliation Park)",
      "es": "Feria Vocacional (incl. Parque de la Reconciliación)",
      "fr": "Salon des vocations (dont le Parc de la Réconciliation)",
      "it": "Fiera delle Vocazioni (incl. Parco della Riconciliazione)",
      "pt": "Feira Vocacional (incl. Parque da Reconciliação)"
    },
    "subNo": "d"
  },
  {
    "id": "Q138",
    "no": "Q138",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "호텔에 묵는 경우, 교리교육 장소로 가는 길을 어떻게 안내받을 수 있나요?",
      "en": "If we are staying in a hotel, how will we be guided on how to get to the catechesis venue?",
      "es": "Si nos alojamos en un hotel, ¿cómo se nos indicará la forma de llegar al lugar de la catequesis?",
      "fr": "Si nous logeons à l'hôtel, comment serons-nous guidés pour nous rendre au lieu de la catéchèse ?",
      "it": "Se alloggiamo in hotel, come saremo guidati per raggiungere la sede della catechesi?",
      "pt": "Se ficarmos num hotel, como seremos orientados para chegar ao local da catequese?"
    },
    "a": {
      "ko": "호텔 등 숙소를 직접 마련한 그룹도 배정된 교리교육 장소를 기준으로 이동하시면 됩니다. 교리교육 장소와 이동에 필요한 안내는 추후 공지할 예정입니다.",
      "en": "Groups that have arranged their own accommodation, such as a hotel, should also travel to their assigned catechesis venue. Information on Catecheses venues and how to get there will be announced later.",
      "es": "Los grupos que hayan organizado su propio alojamiento, como un hotel, también deben desplazarse a su lugar de catequesis asignado. La información sobre los lugares de las catequesis y cómo llegar se anunciará más adelante.",
      "fr": "Les groupes qui ont organisé leur propre hébergement, par exemple à l'hôtel, doivent eux aussi se rendre au lieu de catéchèse qui leur a été attribué. Les informations sur les lieux des catéchèses et la manière de s'y rendre seront communiquées ultérieurement.",
      "it": "Anche i gruppi che hanno organizzato autonomamente il proprio alloggio, ad esempio in hotel, devono recarsi alla sede di catechesi loro assegnata. Le informazioni sulle sedi delle Catechesi e su come raggiungerle saranno comunicate in seguito.",
      "pt": "Os grupos que organizaram o seu próprio alojamento, como um hotel, também se devem deslocar ao local de catequese que lhes foi atribuído. As informações sobre os locais das Catequeses e como lá chegar serão anunciadas mais tarde."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q139",
    "no": "Q139",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "파나마에서는 사전 행사와 본 행사 전에 교리교육 자료를 제공해 주었습니다. 이번에도 그럴까요?",
      "en": "In Panama, catechesis materials were provided before the pre-events and the main event. Will that happen this time too????",
      "es": "En Panamá se facilitaron materiales de catequesis antes de los actos previos y del evento principal. ¿Ocurrirá lo mismo esta vez?",
      "fr": "Au Panama, des supports de catéchèse avaient été fournis avant les pré-événements et l'événement principal. En sera-t-il de même cette fois-ci ?",
      "it": "A Panama i materiali di catechesi erano stati forniti prima dei pre-eventi e dell'evento principale. Succederà anche questa volta?",
      "pt": "No Panamá, foram fornecidos materiais de catequese antes dos pré-eventos e do evento principal. Isso vai acontecer também desta vez?"
    },
    "a": {
      "ko": "가능하면 본행사 전에 제공되리라 생각합니다.",
      "en": "We expect it to be provided before the main event, if possible.",
      "es": "Prevemos que se faciliten antes del evento principal, si es posible.",
      "fr": "Nous prévoyons qu'ils soient fournis avant l'événement principal, si possible.",
      "it": "Prevediamo che vengano forniti prima dell'evento principale, se possibile.",
      "pt": "Prevemos que sejam fornecidos antes do evento principal, se possível."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q140",
    "no": "Q140",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "숙소가 서울에서 다소 떨어져 있는 경우에도 숙소 위치를 고려하여 가장 가까운 교리교육 장소로 배정받을 수 있나요?",
      "en": "Even if our accommodation is somewhat far from Seoul, can we be assigned to the nearest catechesis venue, taking its location into account?",
      "es": "Aunque nuestro alojamiento esté algo lejos de Seúl, ¿se nos puede asignar el lugar de catequesis más cercano teniendo en cuenta su ubicación?",
      "fr": "Même si notre hébergement est un peu éloigné de Séoul, pouvons-nous être affectés au lieu de catéchèse le plus proche en tenant compte de son emplacement ?",
      "it": "Anche se il nostro alloggio è un po' lontano da Seoul, possiamo essere assegnati alla sede di catechesi più vicina, tenendo conto della sua posizione?",
      "pt": "Mesmo que o nosso alojamento fique um pouco longe de Seul, podemos ser atribuídos ao local de catequese mais próximo, tendo em conta a sua localização?"
    },
    "a": {
      "ko": "숙소에서 교리교육 장소까지의 경로와 소요 시간은 숙소 위치에 따라 달라지므로, 안내받은 장소의 주소를 기준으로 지도 앱 등을 통해 확인해 주시기 바랍니다.",
      "en": "The route and travel time from your accommodation to the catechesis venue depend on where you are staying, so please check them using a map app or similar, based on the address of the venue you are given.",
      "es": "El trayecto y el tiempo de viaje desde su alojamiento hasta el lugar de catequesis dependen de dónde se alojen, por lo que les rogamos que los consulten con una app de mapas o similar, a partir de la dirección del lugar que se les indique.",
      "fr": "Le trajet et le temps de parcours entre votre hébergement et le lieu de catéchèse dépendent de l'endroit où vous logez ; veuillez donc les vérifier avec une application de cartographie ou un outil similaire, à partir de l'adresse du lieu qui vous sera communiquée.",
      "it": "Il percorso e il tempo di viaggio dall'alloggio alla sede di catechesi dipendono da dove alloggiate; verificateli quindi con un'app di mappe o simile, in base all'indirizzo della sede che vi sarà comunicato.",
      "pt": "O percurso e o tempo de viagem do alojamento até ao local de catequese dependem do sítio onde ficarem; verifiquem-nos, por isso, com uma app de mapas ou semelhante, com base na morada do local que vos for indicado."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q141",
    "no": "Q141",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육은 어떻게 신청하며, 리스본 때와 같이 참여형·역동적인 프로그램으로 진행될 예정인가요?",
      "en": "How do we sign up for the Catecheses, and will they be participatory, dynamic programs like those at WYD Lisbon 2023?",
      "es": "¿Cómo nos apuntamos a las catequesis? ¿Serán programas participativos y dinámicos como los de la JMJ Lisboa 2023?",
      "fr": "Comment s'inscrit-on aux catéchèses, et seront-elles des programmes participatifs et dynamiques comme ceux des JMJ Lisbonne 2023 ?",
      "it": "Come ci si iscrive alle Catechesi, e saranno programmi partecipativi e dinamici come quelli della GMG Lisbona 2023?",
      "pt": "Como nos inscrevemos nas Catequeses, e serão programas participativos e dinâmicos como os da JMJ Lisboa 2023?"
    },
    "a": {
      "ko": "교리교육은 강사 선정 후 참여 인원을 예상하여 진행할 예정입니다. 리스본과 비슷하게 진행될 것이라 예상합니다.",
      "en": "The Catecheses will go ahead once speakers have been selected and participant numbers estimated. We expect them to run much as in Lisbon.",
      "es": "Las catequesis se llevarán a cabo una vez seleccionados los ponentes y estimado el número de participantes. Prevemos que se desarrollen de forma muy parecida a Lisboa.",
      "fr": "Les catéchèses seront organisées une fois les intervenants choisis et le nombre de participants estimé. Nous pensons qu'elles se dérouleront à peu près comme à Lisbonne.",
      "it": "Le Catechesi saranno organizzate una volta scelti i relatori e stimato il numero di partecipanti. Prevediamo che si svolgano in modo molto simile a Lisbona.",
      "pt": "As Catequeses avançarão depois de escolhidos os oradores e estimado o número de participantes. Prevemos que decorram de forma muito semelhante a Lisboa."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q142",
    "no": "Q142",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리 교육 시간에 사용할 언어들을 알려 주실 수 있나요?",
      "en": "Can you tell us the languages that will be used in the Catecheses sessions?",
      "es": "¿Pueden indicarnos los idiomas que se usarán en las sesiones de catequesis?",
      "fr": "Pouvez-vous nous indiquer les langues qui seront utilisées lors des séances de catéchèse ?",
      "it": "Potete indicarci le lingue che saranno usate nelle sessioni di Catechesi?",
      "pt": "Podem indicar-nos as línguas que serão usadas nas sessões de Catequese?"
    },
    "a": {
      "ko": "6개 공식언어로 진행되리라 예상합니다.",
      "en": "We expect them to be held in the six official languages of WYD Seoul 2027.",
      "es": "Prevemos que se impartan en los seis idiomas oficiales de la JMJ Seúl 2027.",
      "fr": "Nous prévoyons qu'elles soient données dans les six langues officielles des JMJ Séoul 2027.",
      "it": "Prevediamo che si tengano nelle sei lingue ufficiali della GMG Seoul 2027.",
      "pt": "Prevemos que decorram nas seis línguas oficiais da JMJ Seul 2027."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q143",
    "no": "Q143",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육 장소는 언제 확정·안내되나요?",
      "en": "When will the Catecheses venues be confirmed and announced?",
      "es": "¿Cuándo se confirmarán y anunciarán los lugares de las catequesis?",
      "fr": "Quand les lieux des catéchèses seront-ils confirmés et communiqués ?",
      "it": "Quando saranno confermate e comunicate le sedi delle Catechesi?",
      "pt": "Quando serão confirmados e anunciados os locais das Catequeses?"
    },
    "a": {
      "ko": "대회 약 1개월 전 시점 부터 순차적으로 확정되어 메일로 안내될 예정입니다.",
      "en": "They will be confirmed in stages and announced by email from about one month before the event.",
      "es": "Se confirmarán de forma escalonada y se anunciarán por correo electrónico a partir de aproximadamente un mes antes del evento.",
      "fr": "Ils seront confirmés progressivement et communiqués par courriel à partir d'environ un mois avant l'événement.",
      "it": "Saranno confermate per fasi e comunicate per e-mail a partire da circa un mese prima dell'evento.",
      "pt": "Serão confirmados por fases e anunciados por e-mail a partir de cerca de um mês antes do evento."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q144",
    "no": "Q144",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "전체 등록 인원이 교리교육 장소의 수용 가능 인원을 초과할 경우, 모든 순례자가 교리교육에 참여할 수 있도록 어떤 방식으로 장소와 수용 인원을 확보·배정할 예정인가요?",
      "en": "If the total number registered exceeds the capacity of the Catecheses venues, how will venues and capacity be secured and allocated so that every pilgrim can take part in a catechesis?",
      "es": "Si el número total de inscritos supera la capacidad de los lugares de las catequesis, ¿cómo se conseguirán y asignarán los lugares y las plazas para que todos los peregrinos puedan participar en una catequesis?",
      "fr": "Si le nombre total d'inscrits dépasse la capacité des lieux de catéchèse, comment les lieux et les places seront-ils trouvés et attribués pour que chaque pèlerin puisse participer à une catéchèse ?",
      "it": "Se il numero totale di iscritti supera la capienza delle sedi delle Catechesi, come saranno reperite e assegnate sedi e posti perché ogni pellegrino possa partecipare a una catechesi?",
      "pt": "Se o número total de inscritos ultrapassar a capacidade dos locais das Catequeses, como serão assegurados e atribuídos locais e lugares para que cada peregrino possa participar numa catequese?"
    },
    "a": {
      "ko": "교리교육 장소는 지속적으로 확인 중에 있으며, 교리 교육을 신청한 참가자 모두 교육을 받을 수 있도록 최선을 다할 것입니다.",
      "en": "Catecheses venues are being checked on an ongoing basis, and we will do our best to make sure every participant who has signed up for a catechesis can attend one.",
      "es": "Los lugares de las catequesis se están comprobando de forma continua, y haremos todo lo posible para que todos los participantes que se hayan apuntado a una catequesis puedan asistir.",
      "fr": "Les lieux de catéchèse font l'objet de vérifications continues, et nous ferons tout notre possible pour que chaque participant inscrit à une catéchèse puisse y assister.",
      "it": "Le sedi delle Catechesi vengono verificate costantemente, e faremo del nostro meglio perché ogni partecipante iscritto a una catechesi possa parteciparvi.",
      "pt": "Os locais das Catequeses estão a ser verificados de forma contínua, e faremos o possível para que cada participante inscrito numa catequese possa assistir a uma."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q145",
    "no": "Q145",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육을 기획하고자 할 때 미리 알려야 하나요?",
      "en": "If we want to organize catecheses, do we need to let you know in advance?",
      "es": "Si queremos organizar catequesis, ¿debemos avisarles con antelación?",
      "fr": "Si nous voulons organiser des catéchèses, devons-nous vous prévenir à l'avance ?",
      "it": "Se vogliamo organizzare delle catechesi, dobbiamo avvisarvi in anticipo?",
      "pt": "Se quisermos organizar catequeses, temos de vos avisar com antecedência?"
    },
    "a": {
      "ko": "교리교육의 강사와 주제는 DLFL에서 선정합니다.",
      "en": "The speakers and topics for the Catecheses are selected by the DLFL.",
      "es": "Los ponentes y los temas de las catequesis los selecciona el DLFL.",
      "fr": "Les intervenants et les thèmes des catéchèses sont choisis par le DLFL.",
      "it": "I relatori e i temi delle Catechesi sono scelti dal DLFL.",
      "pt": "Os oradores e os temas das Catequeses são escolhidos pelo DLFL."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
    },
    "subNo": "e"
  },
  {
    "id": "Q146",
    "no": "Q146",
    "section": {
      "ko": "프로그램",
      "en": "Programs",
      "es": "Programas",
      "fr": "Programmes",
      "it": "Programmi",
      "pt": "Programas"
    },
    "sectionNo": "Ⅳ",
    "topic": {
      "ko": "본대회(World Youth Day, WYD)",
      "en": "World Youth Day (WYD)",
      "es": "Jornada Mundial de la Juventud (JMJ)",
      "fr": "Journées mondiales de la jeunesse (JMJ)",
      "it": "Giornata Mondiale della Gioventù (GMG)",
      "pt": "Jornada Mundial da Juventude (JMJ)"
    },
    "topicNo": "2",
    "q": {
      "ko": "교리교육 진행자로 참여하려면 어떻게 해야 하나요?",
      "en": "What must we do to take part as a catechesis facilitator?",
      "es": "¿Qué debemos hacer para participar como animadores de catequesis?",
      "fr": "Que faut-il faire pour participer comme animateur de catéchèse ?",
      "it": "Cosa dobbiamo fare per partecipare come animatori di catechesi?",
      "pt": "O que temos de fazer para participar como animador de catequese?"
    },
    "a": {
      "ko": "교리교육에 관련하여 DLFL과 논의를 진행하면서 안내하도록 하겠습니다.",
      "en": "We will share information on the Catecheses as discussions with the DLFL progress.",
      "es": "Compartiremos información sobre las catequesis a medida que avancen las conversaciones con el DLFL.",
      "fr": "Nous communiquerons des informations sur les catéchèses au fur et à mesure de l'avancement des discussions avec le DLFL.",
      "it": "Condivideremo informazioni sulle Catechesi man mano che procederanno i colloqui con il DLFL.",
      "pt": "Partilharemos informações sobre as Catequeses à medida que avançarem as conversações com o DLFL."
    },
    "sub": {
      "ko": "주교와의 만남 (교리교육)",
      "en": "Catecheses",
      "es": "Catequesis",
      "fr": "Catéchèses",
      "it": "Catechesi",
      "pt": "Catequeses"
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
      "en": "Accommodation"
    },
    "text": {
      "ko": "같은 숙소에서 화장실 하나당 25명이라니, 조금 부족해 보입니다.",
      "en": "Twenty-five people per toilet in the same accommodation seems a little insufficient."
    }
  },
  {
    "id": "O2",
    "no": 2,
    "topic": {
      "ko": "숙소",
      "en": "Accommodation"
    },
    "text": {
      "ko": "한 대표단이 자체적으로 호텔에 숙박할 경우, 나눔(교류)의 경험이 덜 풍성해질 수 있지 않을까요? 어떤 방안을 권장하시나요?",
      "en": "If a delegation stays in a hotel on its own, might the experience of sharing (exchange) be less rich? What would you recommend?"
    }
  },
  {
    "id": "O3",
    "no": 3,
    "topic": {
      "ko": "체크인",
      "en": "Check-in"
    },
    "text": {
      "ko": "동일한 매크로그룹 내 숙박 포함·미포함 하위그룹이 함께 체크인할 수 있나요? 순례자 센터가 하나뿐이라 하위그룹들이 서로 다른 장소를 오가면 혼란스러울 수 있어 걱정됩니다.",
      "en": "Can Subgroups with and without accommodation within the same Macrogroup check in together? Since there is only one Pilgrim Centre, we are worried it could be confusing if the Subgroups have to move between different places."
    }
  },
  {
    "id": "O4",
    "no": 4,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee"
    },
    "text": {
      "ko": "청년 순례자가 자국에서 개최국으로 왔다가 돌아가지 않고 이주민이나 난민 신청자가 되는 경우, 교회적 측면과 정부적 측면에서 각각 어떤 장단점이 있나요?",
      "en": "If young pilgrims come from their own country to the host country and do not return, becoming migrants or asylum seekers, what are the advantages and disadvantages from the Church's perspective and from the government's perspective respectively?"
    }
  },
  {
    "id": "O5",
    "no": 5,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee"
    },
    "text": {
      "ko": "개신교 청년들을 포함하는 근거는 교회의 에큐메니즘(일치 운동) 교리에 어긋납니다. 그리스도인 청년을 조종하여 가톨릭으로 개종시키려는 것은 교회의 종교 간 대화 원칙에 위배됩니다. 이를 수정하시어 개신교 청년들을 '소품'처럼 이용하지 마시고 그들에게 합당한 존엄성을 갖고 대해주시기 바랍니다.",
      "en": "The rationale for including Protestant young people goes against the Church's teaching on ecumenism (the unity movement). Manipulating Christian young people in order to convert them to Catholicism violates the Church's principles of interreligious dialogue. Please correct this, do not use Protestant young people like 'props', and treat them with the dignity they deserve."
    }
  },
  {
    "id": "O6",
    "no": 6,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee"
    },
    "text": {
      "ko": "많은 젊은이들에게 WYD는 전 세계의 다양한 언어와 문화를 접하는 진정한 경험입니다. 하지만 이는 또한 아프리카나 중동 국가 중 한 곳에서 열릴 수도 있는 WYD를 앞두고, 그리고 바로 이곳 서울에서 열리는 이번 대회를 통해, 동방 가톨릭 교회들의 참여를 통해 교회의 보편성을 어떻게 더 구체적으로 구현할 수 있을지 보여주는 가톨릭 교회의 경험이기도 합니다.",
      "en": "For many young people, WYD is a genuine experience of encountering the diverse languages and cultures of the whole world. But it is also an experience of the Catholic Church that shows how the universality of the Church can be realised more concretely through the participation of the Eastern Catholic Churches — ahead of a WYD that might be held in an African or Middle Eastern country, and through this event held right here in Seoul."
    }
  },
  {
    "id": "O7",
    "no": 7,
    "topic": {
      "ko": "조직위원회 관련",
      "en": "Local Organising Committee"
    },
    "text": {
      "ko": "WYD에 물리적으로 참가가 불가한 순례자들의 경우 대회에 어떻게 참여할 수 있을지",
      "en": "How pilgrims who cannot physically attend WYD might take part in the event."
    }
  },
  {
    "id": "O8",
    "no": 8,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross"
    },
    "text": {
      "ko": "“안”과 “밖”에 대한 심리적 인식은 중요합니다. 경기장의 경계가 정해지면, 평화공원에 있는 사람들은 자연스럽게 주요 행사가 경기장 안에서 진행되고 있다는 사실을 알게 될 것입니다. 경기장 밖에서 아무리 훌륭한 프로그램을 진행하더라도 이러한 인식을 없애기는 어려울 수 있습니다.",
      "en": "The psychological perception of 'inside' and 'outside' matters. Once the boundary of the stadium is set, people in the Peace Park will naturally realise that the main events are taking place inside the stadium. However excellent the programme outside the stadium may be, it may be difficult to remove this perception."
    }
  },
  {
    "id": "O9",
    "no": 9,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross"
    },
    "text": {
      "ko": "서울 월드컵 경기장에 대해 우려하고 있습니다. 좌석 배정이 공평하더라도 물리적 장벽 자체가 배제를 암시할 수 있습니다. 대규모 대표단의 경우, 왜 어떤 사람들은 경기장에 들어가고 다른 사람들은 화면으로 봐야 하는지 설명하기 어려울 것입니다. 청년들은 참석을 꺼릴 수도 있습니다. 다른 사람들이 경기장 안에 있는 동안 멀리서 화면으로 봐야 한다면, 이는 의욕을 꺾게 될 것입니다. 재고해 주시기를 바랍니다.",
      "en": "We are concerned about Seoul World Cup Stadium. Even if seating allocation is fair, the physical barrier itself can suggest exclusion. For large delegations, it will be hard to explain why some people go into the stadium while others have to watch on a screen. Young people may be reluctant to attend. Having to watch on a screen from afar while others are inside the stadium will be discouraging. We ask you to reconsider."
    }
  },
  {
    "id": "O10",
    "no": 10,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross"
    },
    "text": {
      "ko": "경기장 방식이 수용 인원 제한 문제를 해결하기보다는 그저 관리하는 데 그친다는 점에 대해 여전히 깊은 우려를 가지고 있습니다. 로테이션과 평화공원 방식이 공정할 수는 있겠지만, 많은 순례자들은 여전히 주요 행사에서 소외감을 느낄 것입니다. 청년들은 WYD에 참석하기 위해 큰 희생을 치릅니다. 만약 그들이 행사에 온전히 참여하지 못한다면, 많은 사람들이 당연히 “가는 게 무슨 의미가 있는가?”라고 물을 것입니다.",
      "en": "We remain deeply concerned that the stadium approach merely manages the capacity limit rather than solving it. Rotation and the Peace Park approach may be fair, but many pilgrims will still feel left out of the main events. Young people make great sacrifices to attend WYD. If they cannot take part fully in the events, many will naturally ask, 'What is the point of going?'"
    }
  },
  {
    "id": "O11",
    "no": 11,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross"
    },
    "text": {
      "ko": "제안된 경기장 시스템은 수용 인원 문제를 해결하기보다는 입장 제한을 관리하는 데 초점을 맞추고 있습니다. “3회 순환 / 중복 배정 금지” 방식은 경기장 입장 기회를 공정하게 배분할 수는 있겠지만, 그럼에도 불구하고 많은 등록된 순례자들이 특정 행사가 열리는 주 경기장 내부에서 행사에 참여하지 못하게 될 것입니다.",
      "en": "The proposed stadium system focuses on managing restricted entry rather than solving the capacity problem. The '3 rotations / no double allocation' approach may distribute the opportunity to enter the stadium fairly, but even so, many registered pilgrims will not be able to take part in the events inside the main stadium where particular events are held."
    }
  },
  {
    "id": "O12",
    "no": 12,
    "topic": {
      "ko": "[본대회] 개막미사·교황 환영행사·십자가의 길",
      "en": "[Main Event] Opening Mass · Papal Welcome · Way of the Cross"
    },
    "text": {
      "ko": "경기장 - 혼잡과 혼란이 발생할까 우려됩니다. 각 행사마다 출입 경로가 다른 상황에서 수많은 순례자들을 경기장과 평화 공원 사이로 순환시키다 보면, 인파 이동과 의사소통에 큰 어려움이 생길 수 있습니다. 수십만 명이 한꺼번에 이동하는 상황에서 사소한 오해조차도 순식간에 안전 및 사목적 문제로 번질 수 있습니다.",
      "en": "Stadium – we are worried about congestion and confusion. Rotating huge numbers of pilgrims between the stadium and the Peace Park, with different entry and exit routes for each event, could cause major difficulties in crowd movement and communication. When hundreds of thousands of people are moving at once, even a minor misunderstanding can quickly turn into a safety and pastoral problem."
    }
  },
  {
    "id": "O13",
    "no": 13,
    "topic": {
      "ko": "[본대회] 전례",
      "en": "[Main Event] Liturgy"
    },
    "text": {
      "ko": "전례에 각별한 주의를 기울여 주시기 바랍니다. 가능하다면 대상자가 젊은이들이라는 점을 고려해 주시기 바랍니다. 희년 행사 이후, 젊은이들과 인솔자들은 전례가 세심하게 준비되고 새로운 세대를 배려할 수 있도록(찬양, 제스처, 침묵 등에서…) 요청해 왔습니다.",
      "en": "Please pay particular attention to the liturgy. If possible, please take into account that the participants are young people. Since the Jubilee events, young people and their leaders have asked that the liturgy be carefully prepared and attentive to the new generation (in music, gestures, silence, etc.)."
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
      "fr": "Réunion",
      "it": "Incontro",
      "pt": "Reunião"
    },
    "value": {
      "ko": "2027 서울 세계청년대회 제2차 국제준비회의",
      "en": "WYD Seoul 2027 Second Preparatory Meeting",
      "es": "Segunda Reunión Preparatoria de la JMJ Seúl 2027",
      "fr": "Deuxième réunion préparatoire des JMJ Séoul 2027",
      "it": "Secondo Incontro Preparatorio della GMG Seoul 2027",
      "pt": "Segunda Reunião Preparatória da JMJ Seul 2027"
    }
  },
  {
    "label": {
      "ko": "일자",
      "en": "Date",
      "es": "Fechas",
      "fr": "Dates",
      "it": "Date",
      "pt": "Datas"
    },
    "value": {
      "ko": "2026. 9. 14.(월) ~ 17.(목)",
      "en": "September 14 (Mon) – 17 (Thu), 2026",
      "es": "Del lunes 14 al jueves 17 de septiembre de 2026",
      "fr": "Du lundi 14 au jeudi 17 septembre 2026",
      "it": "Da lunedì 14 a giovedì 17 settembre 2026",
      "pt": "De segunda-feira, 14, a quinta-feira, 17 de setembro de 2026"
    }
  },
  {
    "label": {
      "ko": "장소",
      "en": "Venue",
      "es": "Lugar",
      "fr": "Lieu",
      "it": "Luogo",
      "pt": "Local"
    },
    "value": {
      "ko": "네스트 호텔 (인천 소재)",
      "en": "Nest Hotel, Incheon",
      "es": "Nest Hotel, Incheon",
      "fr": "Nest Hotel, Incheon",
      "it": "Nest Hotel, Incheon",
      "pt": "Nest Hotel, Incheon"
    }
  },
  {
    "label": {
      "ko": "참가인원",
      "en": "Participants",
      "es": "Participantes",
      "fr": "Participants",
      "it": "Partecipanti",
      "pt": "Participantes"
    },
    "value": {
      "ko": "총 100여 개국 교구 및 수도회, 신심단체 관계자 등 270여명",
      "en": "Approx. 270 representatives of dioceses, religious congregations and ecclesial associations from about 100 countries",
      "es": "Unos 270 representantes de diócesis, congregaciones religiosas y asociaciones eclesiales de unos 100 países",
      "fr": "Environ 270 représentants de diocèses, de congrégations religieuses et d'associations ecclésiales d'une centaine de pays",
      "it": "Circa 270 rappresentanti di diocesi, congregazioni religiose e associazioni ecclesiali da circa 100 paesi",
      "pt": "Cerca de 270 representantes de dioceses, congregações religiosas e associações eclesiais de cerca de 100 países"
    }
  },
  {
    "label": {
      "ko": "주최/주관",
      "en": "Organizers",
      "es": "Organizadores",
      "fr": "Organisateurs",
      "it": "Organizzatori",
      "pt": "Organizadores"
    },
    "value": {
      "ko": "교황청 평신도가정생명부, 2027 서울 세계청년대회 조직위원회",
      "en": "Dicastery for Laity, Family and Life\nWYD Seoul 2027 Local Organizing Committee",
      "es": "Dicasterio para los Laicos, la Familia y la Vida\nComité Organizador Local de la JMJ Seúl 2027",
      "fr": "Dicastère pour les laïcs, la famille et la vie\nComité d'organisation local des JMJ Séoul 2027",
      "it": "Dicastero per i Laici, la Famiglia e la Vita\nComitato Organizzatore Locale della GMG Seoul 2027",
      "pt": "Dicastério para os Leigos, a Família e a Vida\nComité Organizador Local da JMJ Seul 2027"
    }
  }
];
