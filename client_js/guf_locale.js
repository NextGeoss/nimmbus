/*
	This is part of the NiMMbus libraries.
  The main objective of this library is to expose localised strings that are useful both for NiMMbus application and for other GUF applications
     Developed by Joan Mas� and Alaitz Zabala.
     License: Attribution 4.0 International (CC BY 4.0) http://creativecommons.org/licenses/by/4.0/
*/

var Msg_Indefinit={"cat": "Indefinit", "spa": "Indefinido", "eng": "Undefined", "fre": "Ind�fini"};


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
		"bookChapter": {cat: "Cap�tol de llibre", spa: "Cap�tulo de libro", eng: "Book chapter"},
		"book": {cat: "Llibre", spa: "Libro", eng: "Book"},
		"report": {cat: "Informe", spa: "Informe", eng: "Report"},
		"journalArticle": {cat: "Article de revista", spa: "Art�culo de revista", eng: "Journal article"},
		"magazineNewspaper": {cat: "Revista o diari", spa: "Revista o peri�dico", eng: "Magazine or Newspaper"},
		"atlasMap": {cat: "Atles o mapa (impr�s o digital)", spa: "Atlas o mapa (impreso o digital)", eng: "Atlas or map (printed or digital)"},
		"applicationProgram": {cat: "Programa", spa: "Programa", eng: "Application program"},
		"conferenceProceedings": {cat: "Actes de congressos", spa: "Actas de congresos", eng: "Conference proceedings"},
		"cdDvdBlueRay": {cat: "Paquet de dades multim�dia (suport f�sic o a Internet)", spa: "Paquete de datos multimedia (soporte f�sico o en Internet)", eng: "Multimedia package (physical support or Internet)"},
		"socialMediaComment": {cat: "Comentari xarxes socials (p.ex. tuit)", spa: "Comentario redes sociales (p.ej. tuit)", eng: "Social media comment (e.g. tweet)"},
		"blogWiki": {cat: "Entrada a un bloc o una wiki", spa: "Entrada en un bloc o una wiki", eng: "Blog or wiki entry"},
		"webSite": {cat: "P�gina web completa", spa: "P�gina web completa", eng: "Complete web site"},
		"webPage": {cat: "P�gina web", spa: "P�gina web", eng: "Web page"},
		"videoAudio": {cat: "V�deo o �udio", spa: "V�deo o audio", eng: "Video or audio"},
		"tutorialManual": {cat: "Tutorial o Manual", spa: "Tutorial o Manual", eng: "Tutorial or Manual"}};

// GUF Table 5 � QCM_ DiscoveredIssue data type
// GUF Table 6 � GUF_FeedbackItem data type
// GUF Table 7 � GUF_UserInformation data type

// GUF Table 8 � GUF_UserRoleCode code list
var GUF_UserRoleCode={"commercialDataProd": {"cat": "Productor comercial de dades", "spa": "Productor comercial de datos", "eng": "Commercial data producer", "fre": "Producteur de donn�es commerciales"},
		"commercialAddedValue": {"cat": "Afegir valor a les dades comercials", "spa": "A�adir valor a los datos comerciales", "eng": "Commercial added value", "fre": "Valeur ajout�e commerciale"},
		"researchDataProd": {"cat": "Productor de dades cient�fiques", "spa": "Productor de datos cient�ficos", "eng": "Scientific data producer", "fre": "Producteur de donn�es scientifiques"},
		"researchEndUser": {"cat": "Usuari cient�fic final", "spa": "Usuario cient�fico final", "eng": "Research end user", "fre": "Recherche utilisateur final"},
		"decisionMaker": {"cat": "Responsables de presa de decisions", "spa": "Responsables de toma de decisiones", "eng": "Decision maker", "fre": "D�cideur"},
		"generalPublic": {"cat": "P�blic general", "spa": "P�blico general", "eng": "General public", "fre": "Grand public"}};

// GUF Table 9 � GUF_FeedbackTarget data type

// GUF Table 10 � GUF_TargetRoleCode code list
var GUF_TargetRoleCode={"undefined": Msg_Indefinit,
		"primary": {cat: "Primari", spa: "Primario", eng: "Primary"},
		"secondary": {cat: "Secundari", spa: "Secundario", eng: "Secondary"},
		"supplementary": {cat: "Suplementari", spa: "Suplementario", eng: "Supplementary"}};

// GUF Table 11 � GUF_UserComment data type

// GUF Table 12 � GUF_MotivationCode code list
var GUF_MotivationCode={"undefined": Msg_Indefinit,
		"comment": {"cat": "Comentari", "spa": "Comentario", "eng": "Comment", "fre": "Commentaire"},
		"question": {"cat": "Pregunta", "spa": "Pregunta", "eng": "Question", "fre": "Question"},
		"answer": {"cat": "Soluci�", "spa": "Soluci�n", "eng": "Answer", "fre": "Solution"},
		"acceptedAnswer": {"cat": "Soluci� acceptada", "spa": "Soluci�n acceptada", "eng": "Accepted answer", "fre": "Solution accept�e"},
		"response": {"cat": "Resposta", "spa": "Respuesta", "eng": "Response", "fre": "R�ponse"},	
		"justification": {"cat": "Justificaci�", "spa": "Justificaci�n", "eng": "Justification", "fre": "Justification"},
		"resolution": {"cat": "Resoluci�", "spa": "Resoluci�n", "eng": "Resolution", "fre": "R�solution"},
		"moderation": {"cat": "Moderaci�", "spa": "Moderaci�n", "eng": "Moderation", "fre": "Mod�ration"}};

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

var CI_OnLineFunctionCode={"undefined": Msg_Indefinit,
		"download": {cat: "Desc�rrega", spa: "Descarga", eng: "Download"},
		"information": {cat: "Informaci�", spa: "Informaci�n", eng: "Information"},
		"offlineAccess": {cat: "Acc�s fora de l�nia", spa: "Acceso fuera de l�nea", eng: "Offline access"},
		"order": {cat: "Comandes", spa: "Encargos", eng: "Order"},
		"search": {cat: "Cerca", spa: "B�squeda", eng: "Search"},
		"completeMetadata": {cat: "Metadades completes", spa: "Metadatos completos", eng: "Complete Metadata"},
		"browseGraphic": {cat: "Exploraci�", spa: "Exploraci�n", eng: "View"},
		"upload": {cat: "C�rrega", spa: "Carga", eng: "Upload"},
		"emailService": {cat: "Servei de correu electr�nic", spa: "Servicio de correo electr�nico", eng: "Email service"},
		"browsing": {cat: "Navegaci�", spa: "Navegaci�n", eng: "Browsing"},
		"fileAccess":{cat: "Acc�s a fitxer", spa: "Acceso a fichero", eng: "File access"}};	
			
//CI_PresentationFormCode ...

//MD_ScopeCode ...