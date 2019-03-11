/*
	This is part of the NiMMbus libraries.
  The main objective of this library is to expose localised strings that are useful both for NiMMbus application and for other GUF applications
     Developed by Joan Mas� and Alaitz Zabala.
     License: Attribution 4.0 International (CC BY 4.0) http://creativecommons.org/licenses/by/4.0/
*/

var Msg_Indefinit={cat: "Indefinit", spa: "Indefinido", eng: "Undefined", fre: "Ind�fini"};


// *****************************
// *  GUF standard code lists  *
// *****************************

// GUF Table 1 � Contents of data dictionary tables
// GUF Table 2 � QCM_Publication extension elements

// GUF Table 3 � QCM_CitationMotivationCode type
/*var QCM_CitationMotivationCode=
  "compare
	"derive
	"describe
	"evaluate
	"comment
	"use
	"highlight
	"moderate
	"question
	"reply
	"link*/

// GUF Table 4 � QCM_PublicationCategoryCode type
var QCM_PublicationCategoryCode={"undefined": Msg_Indefinit,
		"bookChapter": {cat: "Cap�tol de llibre", spa: "Cap�tulo de libro", eng: "Book chapter", fre: "Chapitre du livre"},
		"book": {cat: "Llibre", spa: "Libro", eng: "Book", fre: "Livre"},
		"report": {cat: "Informe", spa: "Informe", eng: "Report", fre: "Rapport"},
		"journalArticle": {cat: "Article de revista", spa: "Art�culo de revista", eng: "Journal article", fre: "Article de journal"},
		"magazineNewspaper": {cat: "Revista o diari", spa: "Revista o peri�dico", eng: "Magazine or Newspaper", fre: "Magazine ou journal"},
		"atlasMap": {cat: "Atles o mapa (impr�s o digital)", spa: "Atlas o mapa (impreso o digital)", eng: "Atlas or map (printed or digital)", fre: "Atlas ou carte (imprim� ou num�rique)"},
		"applicationProgram": {cat: "Programa", spa: "Programa", eng: "Application program", fre: "Programme d'application"},
		"conferenceProceedings": {cat: "Actes de congressos", spa: "Actas de congresos", eng: "Conference proceedings", fre: "Actes de la conf�rence"},
		"cdDvdBlueRay": {cat: "Paquet de dades multim�dia (suport f�sic o a Internet)", spa: "Paquete de datos multimedia (soporte f�sico o en Internet)", eng: "Multimedia package (physical support or Internet)", fre: "Paquet multim�dia (support physique ou Internet)"},
		"socialMediaComment": {cat: "Comentari xarxes socials (p.ex. tuit)", spa: "Comentario redes sociales (p.ej. tuit)", eng: "Social media comment (e.g. tweet)", fre: "Commentaire sur les m�dias sociaux (par exemple, tweet)"},
		"blogWiki": {cat: "Entrada a un bloc o una wiki", spa: "Entrada en un bloc o una wiki", eng: "Blog or wiki entry", fre: "Blog ou entr�e wiki"},
		"webSite": {cat: "P�gina web completa", spa: "P�gina web completa", eng: "Complete web site", fre: "Site web complet"},
		"webPage": {cat: "P�gina web", spa: "P�gina web", eng: "Web page", fre: "page Web"},
		"videoAudio": {cat: "V�deo o �udio", spa: "V�deo o audio", eng: "Video or audio", fre: "Vid�o ou audio"},
		"tutorialManual": {cat: "Tutorial o Manual", spa: "Tutorial o Manual", eng: "Tutorial or Manual", fre: "Tutoriel ou manuel"}};

// GUF Table 5 � QCM_ DiscoveredIssue data type
// GUF Table 6 � GUF_FeedbackItem data type
// GUF Table 7 � GUF_UserInformation data type

// GUF Table 8 � GUF_UserRoleCode code list
var GUF_UserRoleCode={"commercialDataProd": {cat: "Productor comercial de dades", spa: "Productor comercial de datos", eng: "Commercial data producer", fre: "Producteur de donn�es commerciales"},
		"commercialAddedValue": {cat: "Afegir valor a les dades comercials", spa: "A�adir valor a los datos comerciales", eng: "Commercial added value", fre: "Valeur ajout�e commerciale"},
		"researchDataProd": {cat: "Productor de dades cient�fiques", spa: "Productor de datos cient�ficos", eng: "Scientific data producer", fre: "Producteur de donn�es scientifiques"},
		"researchEndUser": {cat: "Usuari cient�fic final", spa: "Usuario cient�fico final", eng: "Research end user", fre: "Recherche utilisateur final"},
		"decisionMaker": {cat: "Responsables de presa de decisions", spa: "Responsables de toma de decisiones", eng: "Decision maker", fre: "D�cideur"},
		"generalPublic": {cat: "P�blic general", spa: "P�blico general", eng: "General public", fre: "Grand public"}};

// GUF Table 9 � GUF_FeedbackTarget data type

// GUF Table 10 � GUF_TargetRoleCode code list
var GUF_TargetRoleCode={"undefined": Msg_Indefinit,
		"primary": {cat: "Primari", spa: "Primario", eng: "Primary", fre: "Principale"},
		"secondary": {cat: "Secundari", spa: "Secundario", eng: "Secondary", fre: "Secondaire"},
		"supplementary": {cat: "Suplementari", spa: "Suplementario", eng: "Supplementary", fre: "Suppl�mentaire"}};

// GUF Table 11 � GUF_UserComment data type

// GUF Table 12 � GUF_MotivationCode code list
var GUF_MotivationCode={"undefined": Msg_Indefinit,
		"comment": {cat: "Comentari", spa: "Comentario", eng: "Comment", fre: "Commentaire"},
		"question": {cat: "Pregunta", spa: "Pregunta", eng: "Question", fre: "Question"},
		"answer": {cat: "Soluci�", spa: "Soluci�n", eng: "Answer", fre: "Solution"},
		"acceptedAnswer": {cat: "Soluci� acceptada", spa: "Soluci�n acceptada", eng: "Accepted answer", fre: "Solution accept�e"},
		"response": {cat: "Resposta", spa: "Respuesta", eng: "Response", fre: "R�ponse"},	
		"justification": {cat: "Justificaci�", spa: "Justificaci�n", eng: "Justification", fre: "Justification"},
		"resolution": {cat: "Resoluci�", spa: "Resoluci�n", eng: "Resolution", fre: "R�solution"},
		"moderation": {cat: "Moderaci�", spa: "Moderaci�n", eng: "Moderation", fre: "Mod�ration"}};

// GUF Table 13 � GUF_UsageReport data type

// GUF Table 14 � GUF_ReportAspectCode code list
/*var GUF_ReportAspectCode={"undefined": Msg_Indefinit,
		"usage":
		"fitnessForPurpose":
		"limitation":
		"alternative":
		"problem": };*/

// GUF Table 15 � GUF_Rating data type
// GUF Table 16 � GUF_SignificantEvent data type

// GUF Table 17 � GUF_SignificantEventTypeCode code list
/*var GUF_SignificantEventTypeCode={"undefined": Msg_Indefinit,
		"hurricaneNatural":
		"volcanicEruptionNatural":
		"elNinoNatural":
		"droughtNatural":
		"stormNatural":
		"wildfireNatural":
		"floodNatural":
		"earthquakeNatural":
		"tsunamiNatural":
		"ifsEvent":
		"systemEvent":
		"satelliteAnomaly":
		"dropsondeAnomaly":
		"aircraftAnomaly":
		"buoyAnomaly":
		"shipAnomaly":
		"landStationAnomaly":
		"mobileSensorAnomaly":
		"sensorAlarm": };*/

// GUF Table 18 � GUF_RatingCode numeric code type
/*var	GUF_RatingCode=
		1 oneStar Very bad
		2 twoStars Bad
		3 threeStars Regular
		4 fourStars Good
		5 fiveStars Excellent */	
	
// GUF Table 19 � GUF_ThumbsCode numeric code type
/*var GUF_ThumbsCode=
		-1 thumbsDown Thumbs down
		1 thumbsUp Thumbs up */

// GUF Table 20 � GUF_SignCode numeric code type
/* var GUF_SignCode=
		-1 negative Negative
		0 neutral Neutral
		1 positive Positive*/
		
// GUF Table 21 � UFS_FeedbackSummary data type
// GUF Table 22 � UFS_ExpertiseLevelCount data type
// GUF Table 23 � UFS_UserRoleCount data type
// GUF Table 24 � UFS_TagCount data type
// GUF Table 25 � UFS_KeywordCount data type
// GUF Table 26 � UFS_RatingCount data type
// GUF Table 27 � UFS_RatingExpertiseLevelCount data type
// GUF Table 28 � UFC_FeedbackResponse data type
// GUF Table 29 � UFC_FeedbackCollection data type
// GUF Table 30 � UFC_ResponsePagination data type



// ******************************
// * Other standards code lists *   
// ******************************

//Some Fre from https://www.fgdc.gov/nap/metadata/register/registerItemClasses.html#IC_85
var CI_OnLineFunctionCode={"undefined": Msg_Indefinit,
		"download": {cat: "Desc�rrega", spa: "Descarga", eng: "Download", fre: "T�l�chargement"},
		"information": {cat: "Informaci�", spa: "Informaci�n", eng: "Information", fre: "Information"},
		"offlineAccess": {cat: "Acc�s fora de l�nia", spa: "Acceso fuera de l�nea", eng: "Offline access", fre: "Acc�s hors ligne"},
		"order": {cat: "Comandes", spa: "Encargos", eng: "Order", fre: "Commande"},
		"search": {cat: "Cerca", spa: "B�squeda", eng: "Search", fre: "Recherche"},
		"completeMetadata": {cat: "Metadades completes", spa: "Metadatos completos", eng: "Complete Metadata", fre: "M�tadonn�es compl�tes"},
		"browseGraphic": {cat: "Exploraci�", spa: "Exploraci�n", eng: "View", fre: "Vue"},
		"upload": {cat: "C�rrega", spa: "Carga", eng: "Upload", fre: "T�l�versement"},
		"emailService": {cat: "Servei de correu electr�nic", spa: "Servicio de correo electr�nico", eng: "Email service", fre: "Service courriel"},
		"browsing": {cat: "Navegaci�", spa: "Navegaci�n", eng: "Browsing", fre: "Ffuretage"},
		"fileAccess":{cat: "Acc�s a fitxer", spa: "Acceso a fichero", eng: "File access", fre: "Acc�s au fichier"}};	
			
//CI_PresentationFormCode ...

//CI_DateTypeCode
var CI_DateTypeCode={"undefined": Msg_Indefinit,
		"creation": {cat: "creaci�", spa: "creaci�n", eng: "creation", fre: "cr�ation"},
		"publication": {cat: "publicaci�", spa: "publicaci�n", eng: "publication", fre: "publication"},
		"revision": {cat: "revisi�", spa: "revisi�n", eng: "revision", fre: "r�vision"},
		"expiry": {cat: "expiraci�", spa: "expiraci�n", eng: "expiry", fre: "expiration"},
		"lastUpdate": {cat: "darrera actualitzaci�", spa: "�ltima actualitzaci�n", eng: "last update", fre: "derni�re mise � jour"},
		"lastRevision": {cat: "darrera revisi�", spa: "�lima revisi�n", eng: "last revision", fre: "derni�re r�vision"},
		"nextUpdate": {cat: "propera actualitzaci�", spa: "pr�xima actualizaci�n", eng: "", fre: "prochaine mise � jour"},
		"unavailable": {cat: "no disponible", spa: "no disponible", eng: "unavailable", fre: "non disponible"},
		"inForce": {cat: "en vigor", spa: "en vigor", eng: "in force", fre: "en vigueur"},
		"adopted": {cat: "adoptada", spa: "adoptada", eng: "adopted", fre: "adopt�e"},
		"deprecated": {cat: "obsoleta", spa: "obsoleta", eng: "deprecated", fre: "r�prouv�e"},
		"superseded": {cat: "sustitu�da", spa: "sustituida", eng: "superseded", fre: "remplac�e"},
		"validityBegins": {cat: "inici validesa", spa: "inicio validez", eng: "validity begin", fre: "d�but de validit�"},
		"validityExpires": {cat: "fi validesa", spa: "fin validez", eng: "validity end", fre: "validit� finale"},
		"released": {cat: "divulgaci�n", spa: "divulgaci�n", eng: "release", fre: "sortie"},
		"distribution": {cat: "distribuci�", spa: "distribuci�n", eng: "distribution", fre: "diffusion"}}

//MD_ScopeCode ...