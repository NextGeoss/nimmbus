/*
	This is part of the NiMMbus libraries.
  The main objective of this library is to expose localised strings that are useful both for NiMMbus application and for other GUF applications
     Developed by Joan Mas� and Alaitz Zabala.
     License: Attribution 4.0 International (CC BY 4.0) http://creativecommons.org/licenses/by/4.0/
*/

var LanguagesNB=["cat","spa","eng"];
var ActiveLanguage=2;
var Terms_and_Privacy_Last_Updated="02/10/2018";

//Global message variables start by "Msg_" 
var Msg_NiMMbus={cat: "NiMMbus", spa: "NiMMbus", eng: "NiMMbus"};
var Msg_Welcome_NiMMbus={cat: "Benvinguts al NiMMbus", spa: "Bienvenidos al NiMMbus", eng: "Welcome to NiMMbus"};
var Msg_EO_everywhere_Share={cat: "La observaci� de la terra a tot arreu. Comparteix informaci� i valoracions amb altres.", spa: "La observaci�n de la tierra en todas partes. Comparte informaci�n y valoraciones con los dem�s.", eng: "Earth observation everywhere. Share information and feedback with others."};
var Msg_Exit_NiMMbus_question={cat: "Realment vols sortir del NiMMbus? (Les accions no guardades es perdran)", spa: "�Realmente desea salir de NiMMbus? (La acciones no guardadas se perder�n)", eng: "Do you really want to exit NiMMbus? (The unsaved actions will be lost)"};
var Msg_cannot_be_blank={cat: "no pot ser buit.", spa: "no puede estar vacio.", eng: "cannot be blank."};
var Msg_Revalidating_authentication={cat: "Revalidant l'autentificaci� en", spa: "Revalidando la autentificaci�n en", eng: "Revalidating authentication in"};
var Msg_seconds={cat: "segons", spa: "segundos", eng: "seconds"};
var Msg_Unsupported_language={cat: "Idioma no suportat", spa: "Idioma no soportado", eng: "Unsupported language"};
var Msg_Language_changed_preferences={cat: "Idioma canviat a prefer�ncies de l'usuari.", spa: "Idioma cambiado seg�n preferencias del usuario.", eng: "Language changed according to user preferences."}
var Msg_Unidentified_key={cat: "Clau no identificada", spa: "Clave no identificada", eng: "Unidentified key"};
var Msg_Unidentified_page={cat: "Plana no identificada", spa: "P�gina no identificada", eng: "Unidentified page name"};
var Msg_Valid_token_required={cat: "�s necessari tenir un passi v�lid.", spa: "Es necesario tener un pase v�lido.", eng: "Valid token required."};
var Msg_TARGET_TILE_and_CODE_needed={cat: "�s necessari indicar TARGET_TITLE= i TARGET_CODE=.", spa: "Es necesario indicar TARGET_TITLE= i TARGET_CODE=.", eng: "TARGET_TITLE= and TARGET_CODE= should be provided."};
var Msg_Server_answer_cannot_be_shown={cat: "El servidor ha respost per� no �s possible mostrar el resultat en aquest navegador.", spa: "El servidor ha respondido pero no es posible mostrar el resultado en este navegador.", eng: "The server responded but it is not possible to show the result on this browser."};
var Msg_Server_answer_cannot_be_identified={cat: "El servidor ha respost per� no puc identificar la seva resposta.", spa: "El servidor ha respondido pero no puedo identificar su respuesta.", eng: "The server responded but it cannot be identified correctly."};
var Msg_Ok={cat: "Tot b�", spa: "Todo correcto", eng: "Ok!"};
var Msg_Available_={cat: "Disponible!", spa: "�Disponible!", eng: "Available!"};
var Msg_Done={cat: "Fet", spa: "Hecho", eng: "Done"};
var Msg_Error_without_description={cat: "Error sense descripci�. Codi", spa: "Error sin descripci�n. C�digo", eng: "Error without description. Code"};
var Msg_Failure_loading_Google_libraries={cat: "Error en carregar les llibreries de les comptes de Google", spa: "Error al cargar las librer�as de las cuentas de Google", eng: "Failure loading Google account libraries"};
var Msg_LandSense_login_failed={cat: "Error o cancel�laci� de la identificaci� amb el compte de LandSense", spa: "Error o cancelaci�n de la identificaci�n en la cuenta de LandSense", eng: "Login in your LandSense account failed or cancelled"};
var Msg_NextGEOSS_login_failed={cat: "Error o cancel�laci� de la identificaci� amb el compte de NextGEOSS", spa: "Error o cancelaci�n de la identificaci�n en la cuenta de NextGEOSS", eng: "Login in your NextGEOSS account failed or cancelled"};
var Msg_Google_login_failed={cat: "Error o cancel�laci� de la identificaci� amb el compte de Google", spa: "Error o cancelaci�n de la identificaci�n en la cuenta de Google", eng: "Login in your Google account failed or cancelled"};
var Msg_Google_Account_info_not_retrieved={cat: "No puc obtenir la informaci� sobre l'usuari del compte de Google", spa: "No puedo obtener la informaci�n sobre el usuario la cuenta de Google", eng: "The user information of the Google Account cannot be retrieved"};
var Msg_Requesting_data_={cat: "Demanant dades...", spa: "Pidiendo datos...", eng: "Requesting data..."};
var Msg_Requesting_resource_list_={cat: "Demanant llista de recursos...", spa: "Pidiendo lista de recursos...", eng: "Requesting resource list..."};
var Msg_Message_sent={cat: "Missatge enviat", spa: "Mensaje enviado", eng: "Message sent"};
var Msg_Resource_sent={cat: "Recurs enviat", spa: "Recurso enviado", eng: "Resource sent"};
var Msg_Modifications_sent={cat: "Modificacions enviades", spa: "Modificaciones enviadas", eng: "Modifications sent"};
var Msg_Request_sent={cat: "Petici� enviada", spa: "Petici�n enviada", eng: "Request sent"};
var Msg_Changes_sent={cat: "Canvis enviats", spa: "Cambios enviados", eng: "Changes send"};
var Msg_Role={cat: "Rol", spa: "Rol", eng: "Role"};
var Msg_of={cat: "de", spa: "de", eng: "of"};
var Msg_Create={cat: "Crear", spa: "Crear", eng: "Create"};
//var Msg_Add={cat: "Afegir", spa: "A�adir", eng: "Add"}; --> l_msg_Add
var Msg_Adding_={cat: "Afegint...", spa: "A�adiendo...", eng: "Adding..."};
var Msg_Added={cat: "Afegit", spa: "A�adido", eng: "Added"};
var Msg_Delete={cat: "Eliminar", spa: "Eliminar", eng: "Delete"};
var Msg_Deleting_={cat: "Eliminant...", spa: "Eliminando...", eng: "Deleting..."};
var Msg_Deleted={cat: "Eliminat", spa: "Eliminado", eng: "Deleted"};
var Msg_Cancel={cat: "Cancel�lar", spa: "Cancelar", eng: "Cancel"};
var Msg_Edit={cat: "Editar", spa: "Editar", eng: "Edit"};
var Msg_Requesting_={cat: "Sol�licitant...", spa: "Solicitando...", eng: "Requesting..."};
var Msg_Searching_={cat: "Cercant...", spa: "Buscando...", eng: "Searching..."};
var Msg_Changing_={cat: "Canviant...", spa: "Cambiando...", eng: "Changing..."};
var Msg_Read={cat: "Llegir", spa: "Leer", eng: "Read"};
var Msg_Write={cat: "Escriure", spa: "Escribir", eng: "Write"};
var Msg_Checking={cat: "Comprovant...", spa: "Comprobando...", eng: "Checking..."};
var Msg_Share={cat: "Compartir", spa: "Compartir", eng: "Share"};
var Msg_Tag={cat: "Etiquetar", spa: "Etiquetar", eng: "Tag"};
var Msg_Save_changes={cat: "Guardar canvis", spa: "Guardar cambios", eng: "Save changes"};
var Msg_Exit_without_saving_changes={cat: "Vol sortir sense guardar?", spa: "�Desea salir sin guardar?", eng: "Do you want to exit without saving changes?"};
var Msg_Owner={cat: "Propietari", spa: "Propietario", eng: "Owner"};
var Msg_Today={cat: "Avui", spa: "Hoy", eng: "Today"};

var Msg_Sure_completely_delete_={cat: "Est�s segur que vols eliminar del tot ", spa: "�Est� seguro que desea eliminar completamente ", eng: "Are you sure that you want to completely delete "};
var Msg_this_Hyperlink={cat: "aquest hiperenlla�", spa: "este hiperenlace", eng: "this Hyperlink"};
var Msg_this_PoI={cat: "aquest punt d'inter�s", spa: "este punto de inter�s", eng: "this point of interest"};
var Msg_this_feedback_item={cat: "aquesta valoraci�", spa: "esta valoraci�n", eng: "this feedback item"};
var Msg_this_citation={cat: "aquesta citaci�", spa: "esta citaci�n", eng: "this citation"};
var Msg_this_publication={cat: "aquesta publicaci�", spa: "esta publicaci�n", eng: "this publication"};
var Msg_Hyperlink_deleted={cat: "Hiperenlla� esborrat", spa: "Hiperenlace eliminado", eng: "Hyperlink deleted"};
var Msg_PoI_deleted={cat: "Punt d'inter�s esborrat", spa: "Punto de inter�s eliminado", eng: "Point of interest deleted"};
var Msg_Feedback_deleted={cat: "Valoraci� esborrada", spa: "Valoraci�n eliminada", eng: "Feedback deleted"};
var Msg_Citation_deteled={cat: "Citaci� esborrada", spa: "Citaci�n eliminada", eng: "Citation deleted"};
var Msg_Publication_deteled={cat: "Publicaci� esborrada", spa: "Publicaci�n eliminada", eng: "Publication deleted"};

var Msg_Use_New_button_to_create_resources={cat: "Useu el bot� \"Nou\" per crear recursos", spa: "Use el bot�n \"Nuevo\" para crear recursos", eng: "Use the \"New\" button to create resources"};
var Msg_Cannot_found_resource_identifier={cat: "Identificador de recurs no trobat.", spa: "Identificador de recurso no encontrado.", eng: "Cannot found resource identifier."};
//var Msg_Resource_type_={cat: "Tipus de recurs_", spa: "Tipo de recurso:", eng: "Resource type:"};
var Msg_Unsupported_resource_type={cat: "Tipus de recurs no suportat", spa: "Tipo de recurso no soportado.", eng: "Unsupported resource type"};
var Msg_Unidentified_resource_type={cat: "Tipus de recurs no identificat", spa: "Tipo de recurso no identificado", eng: "Unidentified resource type"};

var Msg_Hyperlink={cat: "Hiperenlla�", spa: "Hiperenlace", eng: "Hyperlink"};
var Msg_Modify_hyperlink_characteristics={cat: "Modifica les caracter�stiques d'aquest hiperenlla�", spa: "Modifica las caracter�sticas de este hiperenlace", eng: "Modify the characteristics of this Hyperlink"};
var Msg_New_Hyperlink={cat: "Nou hiperenlla�", spa: "Nuevo hiperenlace", eng: "New Hyperlink"};
var Msg_Define_hyperlink_characteristics={cat: "Introdueix les caracter�stiques d'aquest hiperenlla�", spa: "Introduce las caracter�sticas de este hiperenlace", eng: "Define the characteristics of this Hyperlink"};
var Msg_Hyperlink_detailed_description_no_modification={cat: "Descripci� detallada d'aquest hiperenlla� (no tens drets de modificaci�)", spa: "Descripci�n detallada de este hiperenlace (no tiene derechos de modificaci�n)", eng: "Detailed description of this Hyperlink (you do not have modification rights)"};

var Msg_PoI={cat: "Punt d'inter�s", spa: "Punto de inter�s", eng: "Point of interest"};
var Msg_Modify_PoI_characteristics={cat: "Modifica les caracter�stiques d'aquest punt", spa: "Modifica las caracter�sticas de este punto", eng: "Modify the characteristics of this point"};
var Msg_New_PoI={cat: "Nou punt d'inter�s", spa: "Nuevo punto de inter�s", eng: "New point of interest"};
var Msg_Define_PoI_characteristics={cat: "Introdueix les caracter�stiques d'aquest punt", spa: "Introduce las caracter�sticas de este punto", eng: "Define the characteristics of this point"};
var Msg_PoI_detailed_description_no_modification={cat: "Descripci� detallada d'aquest punt d'inter�s (no tens drets de modificaci�)", spa: "Descripci�n detallada de este punto de inter�s (no tiene derechos de modificaci�n)", eng: "Detailed description of this point of interest (you do not have modification rights)"};

var Msg_Feedback={cat: "Valoraci�", spa: "Valoraci�n", eng: "Feedback"};
var Msg_Modify_feedback_characteristics={cat: "Modifica les caracter�stiques d'aquesta valoraci�", spa: "Modifica las caracter�sticas de esta valoraci�n", eng: "Modify the characteristics of this feedback"};
var Msg_New_feedback={cat: "Nova valoraci�", spa: "Nueva valoraci�n", eng: "New feedback"};
var Msg_Define_feedback_characteristics={cat: "Introdueix les caracter�stiques d'aquesta valoraci�", spa: "Introduce las caracter�sticas de esta valoraci�n", eng: "Define the characteristics of this feedback"};
var Msg_FB_item_detailed_description_no_modification={cat: "Descripci� detallada d'aquesta valoraci� (no tens drets de modificaci�)", spa: "Descripci�n detallada de esta valoraci�n (no tiene derechos de modificaci�n)", eng: "Detailed description of this feedback (you do not have modification rights)"};

var Msg_Targeted_resources={cat: "Recursos valorats", spa: "Recursos valorados", eng: "Targeted resources"};
var Msg_List_available_resources_as_targets={cat: "Llista de recursos disponibles com a objecte de la valoraci�", spa: "Lista de recursos disponibles como objeto de la valoraci�n", eng: "List of available resources as feedback target"};
var Msg_Resource_already_targeted={cat: "Recurs actualment ja valorat en aquesta valoraci�.", spa: "Recurso actualmente ya valorado en esta valoraci�n.", eng: "Resource already targeted in this feedback item."};
//var Msg_Resource_already_targeted_no_added_again={cat: "Recurs actualment ja valorat o que �s la pr�pia valoraci�, no s'afegir� de nou.", spa: "Recurso actualmente ya valorado o que es la valoraci�n en s� misma, no se a�adir� de nuevo.", eng: "Resource already targeted or that is the feedback item itself, it will not be added again."};
var Msg_Feedback_item_selecting_targets_for={cat: "Aquesta �s la pr�pia valoraci� per la que est�s escollint recursos a valorar.", spa: "Esta es la propia valoraci�n para la que est�s escogiendo recursos a valorar.", eng: "This is the feedback item you are selecting targets for."};
var Msg_Target_without_NiMMbus_id={cat: "Un dels recursos valorats no t� identificador de recurs de NiMMbus.", spa: "Uno de los recursos valorador no tiene identificador de recurso de NiMMbus.", eng: "One of target resources in this feedback does not have NiMMbus resource identifier."};
var Msg_Related_publications={cat: "Publicacions relacionades", spa: "Publicaciones relacionadas", eng: "Related publications"};
var Msg_List_available_publications_for_feedback={cat: "Llista de publicacions disponibles per la valoraci�", spa: "Lista de publicacions disponibles per la valoraci�n", eng: "List of available publications for the feedback item"};
var Msg_Publication_already_related={cat: "Publicaci� actualment ja relacionada amb aquesta valoraci�.", spa: "Publicaci�n actualmente ya relacionada con esta valoraci�n.", eng: "Publication already related with this feedback item."};
//var Msg_Publication_already_related_no_added_again={cat: "Publicaci� actualment ja relacionada amb aquesta valoraci�, no s'afegir� de nou.", spa: "Publicaci�n actualmente ya relacionada con esta valoraci�n, no se a�adir� de nuevo.", eng: "Publication already related with this feedback item, it will not be added again."};
var Msg_Public_without_NiMMbus_id={cat: "Una de les publicacions no t� identificador de recurs de NiMMbus.", spa: "Una de las publicaciones no tiene identificador de recurso de NiMMbus.", eng: "One of the publications in this feedback does not have NiMMbus resource identifier."};

var Msg_Citation={cat: "Citaci�", spa: "Citaci�n", eng: "Citation"};
var Msg_Modify_citation_characteristics={cat: "Modifica les caracter�stiques d'aquesta citaci�", spa: "Modifica las caracter�sticas de esta citaci�n", eng: "Modify the characteristics of this citation"};
var Msg_New_citation={cat: "Nova citaci�", spa: "Nueva citaci�n", eng: "New citation"};
var Msg_Define_citation_characteristics={cat: "Introdueix les caracter�stiques d'aquesta citaci�", spa: "Introduce las caracter�sticas de esta citaci�n", eng: "Define the characteristics of this citation"};
var Msg_Citation_sent={cat: "Citaci� enviada", spa: "Citaci�n enviada", eng: "Citation sent"};
var Msg_Citation_created={cat: "Citaci� creada", spa: "Citaci�n creada", eng: "Citation created"};
var Msg_Citation_detailed_description_no_modification={cat: "Descripci� detallada d'aquesta citaci� (no tens drets de modificaci�)", spa: "Descripci�n detallada de esta citaci�n (no tiene derechos de modificaci�n)", eng: "Detailed description of this citation (you do not have modification rights)"};

var Msg_Publication={cat: "Publicaci�", spa: "Publicaci�n", eng: "Publication"};
var Msg_Modify_publication_characteristics={cat: "Modifica les caracter�stiques d'aquesta publicaci�", spa: "Modifica las caracter�sticas de esta publicaci�n", eng: "Modify the characteristics of this publication"};
var Msg_New_publication={cat: "Nova publicaci�", spa: "Nueva publicaci�n", eng: "New publication"};
var Msg_Define_publication_characteristics={cat: "Introdueix les caracter�stiques d'aquesta publicaci�", spa: "Introduce las caracter�sticas de esta publicaci�n", eng: "Define the characteristics of this publication"};
var Msg_Publication_detailed_description_no_modification={cat: "Descripci� detallada d'aquesta publicaci� (no tens drets de modificaci�)", spa: "Descripci�n detallada de esta publicaci�n (no tiene derechos de modificaci�n)", eng: "Detailed description of this publication (you do not have modification rights)"};

var Msg_Accuracy={cat: "Exactitud", spa: "Exactitud", eng: "Accuracy"};
var Msg_Got_it_at={cat: "Obtinguda a les", spa: "Obtenida a las", eng: "Got it at"};
var Msg_Speed={cat: "Velocitat", spa: "Velocidad", eng: "Speed"};
var Msg_Heading={cat: "Direcci�", spa: "Direcci�n", eng: "Heading"};
var Msg_Geolocation_denied={cat: "L'usuari ha denegat la petici� de geolocalitzaci�.", spa: "El usuario ha denegado la petici�n de geolocalizaci�n.", eng: "User denied the request for Geolocation."};
var Msg_Geolocation_unavailable={cat: "La informaci� de geolocalitzaci� no est� disponible.", spa: "La informaci�n de geolocalizaci�n no est� disponible", eng: "Location information is unavailable."};
var Msg_Geolocation_timed_out={cat: "La petici� per obtenir la geolocalitzaci� ha caducat.", spa: "La petici�n para obtener la geolocalizaci�n ha caducado.", eng: "The request to get user location timed out."};
var Msg_Geolocation_unkown_error={cat: "Error desconegut en la geolocalitzaci�.", spa: "Error desconocido en la geolocalizaci�n.", eng: "Unknown error occurred in geolocation."};
var Msg_Geolocation_trying={cat: "Intentant obtenint la informaci� de geolocalitzaci�", spa: "Intentando obtener la informaci�n de geolocalizaci�n", eng: "Trying to get the geolocation information"};
var Msg_Trying_get_more_accuracy={cat: "Intentant obtenint m�s exactitud", spa: "Intentando obtener m�s exactitud", eng: "Trying to get more accuracy"};
var Msg_Geolocation_not_supported={cat: "La geolocalitzaci� des del dispositiu no est� suportada en aquest navegador d'Internet", spa: "La geolocalizaci�n desde el dispositivo no est� suportada en este navegador de Internet", eng: "Geolocation is not supported by this Internet browser"};

var Msg_Myself={cat: "Jo mateix", spa: "Yo mismo", eng: "Myself"};
//var Msg_Pwd={cat: "Contrasenya", spa: "Contrase�a", eng: "Password"}; --> l_msg_Pwd
//var Msg_New_Pwd={cat: "Contrasenya nova", spa: "Contrase�a nueva", eng: "New password"}; --> l_msg_New_Pwd
var Msg_Current_pwd_not_match_provided={cat: "La teva contrasenya actual no coincideix amb la que has indicat.", spa: "Su contrase�a actual no coincide con la que ha indicado.", eng: "Your current password does not match with the one provided."};
var Msg_New_pwd_not_match_validation={cat: "La nova contrasenya no coincideix amb la de validaci�.", spa: "Su nueva contrase�a no coincide con la de validaci�n.", eng: "Your new password does not match with the validation one."};
var Msg_Strong={cat: "Robusta", spa: "Robusta", eng: "Strong"};
var Msg_Medium={cat: "Robustesa mitjana", spa: "Robustez media", eng: "Medium"};
var Msg_Weak={cat: "Fr�gil", spa: "Fr�gil", eng: "Weak"};
var Msg_Cannot_contain_username={cat: "No pot contenir el nom d'usuari", spa: "No puede contener el nombre de usuario", eng: "Cannot contain the user name"};
var Msg_Pwd_verification_error={cat: "Error de verificaci� de contrasenya", spa: "Error de verificaci�n de contrase�a", eng: "Password verification error"};
var Msg_Wrong_pwd={cat: "Contrasenya incorrecta", spa: "Contrase�a incorrecta!", eng: "Wrong password"};
var Msg_Too_short={cat: "Massa curta", spa: "Demasiado corta", eng: "Too short"};
var Msg_Username_cannot_be_blank={cat: "El nom d'usuari no pot ser buit", spa: "El nombre de usuario no puede ser blanco", eng: "Username cannot be blank"};
var Msg_Username_is_what_you_have={cat: "El nom d'usuari �s el que ja tens", spa: "El nombre de usuario es el que ya tiene", eng: "Username is what you already have"};
var Msg_Username_already_taken={cat: "El nom d'usuari ha estat reservat per altres", spa: "El nombre de usuario ha sido reservado por otros", eng: "Username has already been taken"};
//var Msg_Email={cat: "Correu electr�nic", spa: "Correo electr�nico", eng: "Email"}; --> l_msg_Email

var Msg_NiMMbus_login={"cat": "Identificaci� al NiMMbus", "spa": "Identificaci�n en NiMMbus", "eng": "NiMMbus login"};
var Msg_NiMMbus_reset_pwd={"cat": "Reestabliment de contrasenya de NiMMbus", "spa": "Reestablecimiento de contrase�a de NiMMbus", "eng": "NiMMbus reset password"}; 
var Msg_SignUp_NiMMbus={"cat": "Registra't al NiMMbus", "spa": "Reg�strese en NiMMbus", "eng": "Sign up for NiMMbus"};
var Msg_NiMMbus_account={"cat": "Compte de NiMMbus", "spa": "Cuenta de NiMMbus", "eng": "NiMMbus account"};
var Msg_NiMMbus_Feedback={"cat": "NiMMbus: Valoraci�", "spa": "NiMMbus: Valoraci�n", "eng": "NiMMbus: Feedback"};
var Msg_NiMMbus_Citation={"cat": "NiMMbus: Citaci�", "spa": "NiMMbus: Citaci�n", "eng": "NiMMbus: Citation"};
var Msg_NiMMbus_Publication={"cat": "NiMMbus: Publicaci�", "spa": "NiMMbus: Publicaci�n", "eng": "NiMMbus: Publication"};
var Msg_NiMMbus_Resources={"cat": "NiMMbus: Recursos", "spa": "NiMMbus: Recursos", "eng": "NiMMbus: Resources"};
var Msg_NiMMbus_Feedbacks={"cat": "NiMMbus: Valoracions", "spa": "NiMMbus: Valoraciones", "eng": "NiMMbus: Feedbacks"};
var Msg_NiMMbus_Share={"cat": "NiMMbus: Compartir", "spa": "NiMMbus: Compartir", "eng": "NiMMbus: Share"};

//Needed for Test_*.html
var Msg_NiMMbus_Test_Pages={cat: "Tests de NiMMbus", spa: "Tests de NiMMbus", eng: "NiMMbus test pages"};
var Msg_small_Lang={cat: "<small>Idioma:</small> Catal�", spa: "<small>Idioma:</small> Espa�ol", eng: "<small>Language:</small> English"};
var Msg_Title={cat: "T�tol", spa: "T�tulo", eng: "Title"};
var Msg_Identifier={cat: "Identificador", spa: "Identificador", eng: "Identifier"};
var Msg_Namespace={cat: "Espai de noms", spa: "Espacio de nombres", eng: "Namespace"};
var Msg_Terms_use={cat: "Condicions d'�s", spa: "Condiciones de Uso", eng: "Terms of Use"};
var Msg_Privacy_Statement={cat: "Declaraci� de Privacitat", spa: "Declaraci�n de Privacidad", eng: "Privacy Statement"};
var Msg_Last_Update={cat: "Darrera actualitzaci�", spa: "�ltima actualizaci�n", eng: "Last updated"};

function DonaCadenaJSON(s)
{
	if (ActiveLanguage==0)
		return s.cat;
	else if (ActiveLanguage==1)
		return s.spa;
	else if (ActiveLanguage==2)
		return s.eng;
}

function GetActiveLanguageIndex(language)
{
	for (var i=0; i<LanguagesNB.length; i++)
	{
		if (LanguagesNB[i]==language)
			return i;
	}
	return -1;
}

function ChangeLanguage(lang, resources_per_page)
{
//Local message variables start by "l_msg_"
var l_msg_Username_or_email={cat: "Usuari o email", spa: "Usuario o email", eng: "Username or email"};
var l_msg_Pwd={cat: "Contrasenya", spa: "Contrase�a", eng: "Password"};
var l_msg_New_to_NiMMbus_SignUp={cat: "Nou al NiMMbus? Registra't", spa: "Nuevo en NiMMbus? Reg�strese", eng: "New to NiMMbus? Sign up"};
var l_msg_Username={cat: "Usuari", spa: "Usuario", eng: "Username"};
var l_msg_For_Email_Notificactions={cat: "Per a validacions i notificacions per email", spa: "Para validaciones y notificaciones por email", eng: "For email notifications and verifications"};
var l_msg_SignUp_for_NiMMbus={cat: "Registrar-se al NiMMbus", spa: "Registrarse en NiMMBus", eng: "Sign up for NiMMbus"};
var l_msg_Close_Sortir={cat: "Sortir", spa: "Salir", eng: "Close"}; //�$�
var l_msg_Close_Tancar={cat: "Tancar", spa: "Cerrar", eng: "Close"};
var l_msg_Close_SignOut={cat: "Sortir", spa: "Salir", eng: "Sign out"};
var l_msg_All={cat: "Tots", spa: "Todos", eng: "All"};
//var l_msg_Filter_by_type_={cat: "Filtrar per tipus:", spa: "Filtrar por tipo:", eng: "Filter by type:"};
//var l_msg_Filter_by_owner_={cat: "Filtrar per propietari:", spa: "Filtrar por propietario:", eng: "Filter by owner:"};
var l_msg_see_newer_resources={cat: "Veure recursos m�s nous", spa: "Ver recursos m�s nuevos", eng: "See newer resources"};
var l_msg_see_older_resources={cat: "Veure recursos m�s antics", spa: "Ver recursos m�s antiguos", eng: "See older resources"};
var l_msg_For_example_={cat: "Per exemple:", spa: "Por ejemplo:", eng: "For example:"};
var l_msg_Motivation={cat: "Motivaci�", spa: "Motivaci�n", eng: "Motivation"};
var l_msg_Reason_why={cat: "Motiu pel qual el recurs resulta rellevant", spa: "Motivo por el cual el recurso resulta relevante", eng: "Reason why the resource is relevant"};
var l_msg_Discard={cat: "Descartar", spa: "Descartar", eng: "Discard"};
var l_msg_Add={cat: "Afegir", spa: "A�adir", eng: "Add"};
var l_msg_Abstract={cat: "Resum", spa: "Resumen", eng: "Abstract"};
var l_msg_Resource_Edition={cat: "Edici� del recurs", spa: "Edici�n del recurso", eng: "Resource edition"};
var l_msg_Edition={cat: "Edici�", spa: "Edici�n", eng: "Edition"};
var l_msg_Version_of_the_resource={cat: "Versi� del recurs citat", spa: "Versi�n del recurso citado", eng: "Version of the cited resource"};
var l_msg_Edition_date={cat: "Data d'edici�", spa: "Fecha de edici�n", eng: "Edition date"};
var l_msg_Date_of_edition={cat: "Data de l'edici�", spa: "Fecha de la edici�n", eng: "Date of the edition"};
var l_msg_Code={cat: "Codi", spa: "C�digo", eng: "Code"};
var l_msg_resource_id_eg={cat: "Identificador del recurs. P. ex.:", spa: "Identificador del recurso. P. ej.:", eng: "Resource identifier. E.g.:"};
var l_msg_Namespace_where_id_unique_eg_={cat: "Espai de noms on l'identificador �s �nic. P. ex.:", spa: "Espacio de nombres donde el identificador es �nico. P. ej.:", eng: "Namespace where the identifier is unique. E.g.:"};
var l_msg_Series_which_resource_is_part_of={cat: "S�rie de la que el recurs forma part", spa: "Serie de la cual el recurso forma parte", eng: "Series which the resource is part of"};
var l_msg_Series_name={cat: "Nom de la s�rie", spa: "Nombre de la serie", eng: "Series name"};
var l_msg_Series_name_of_which_this_resource={cat: "Nom de la s�rie o del recurs agregat del qual aquest recurs forma part", spa: "Nombre de la serie o del recurso agregado del cual este recurso forma parte", eng: "Name of the series, or aggregate resource, of which the resource is a part"};
var l_msg_Series_issue_id={cat: "Identificador de l'element de la s�rie", spa: "Identificador del elemento de la serie", eng: "Series issue identification"};
var l_msg_Id_of_the_issue_within_series={cat: "Identificador de l'element concret de la s�rie del qual aquest recurs forma part", spa: "Identificador del elemento concreto de la serie del cual este recurso forma parte", eng: "Identifier of the issue within the series of which the resource is part"};
var l_msg_Id_of_the_issue_within_series_eg_={cat: "Identificador de l'element concret de la s�rie del qual aquest recurs forma part. P. ex.:", spa: "Identificador del elemento concreto de la serie del cual este recurso forma parte. P. ej.:", eng: "Identifier of the issue within the series of which the resource is part. E.g.:"};
var l_msg_Pages_in_the_issue={cat: "P�gines dins l'element de la s�rie", spa: "P�ginas dentro del elemento de la serie", eng: "Pages in the series issue"};
var l_msg_Pages_resource_fills_in={cat: "P�gines que ocupa el recurs en aquest element de la s�rie. P. ex.: 358-368", spa: "P�ginas que ocupa el recurso en este elemento de la serie. P. ej.: 358-368", eng: "Pages that this resource fills in this series issue. E.g.: 358-368"};
var l_msg_Other_citation_details={cat: "Altres detalls de la citaci�", spa: "Otros detalles de la cita", eng: "Other citation details"};
var l_msg_Other_info_requiered_citation={cat: "Altra informaci� necess�ria per complementar la citaci�", spa: "Otra informaci�n necesaria para complementar la citaci�n", eng: "Other information required to complete the citation"};
var l_msg_OnlineResource={cat: "Recurs en l�nia", spa: "Recurso en l�nea", eng: "Online resource"};
var l_msg_URL_link={cat: "Adre�a URL", spa: "Direcci�n URL", eng: "URL Link"};
var l_msg_Online_resource_related_eg_={cat: "Recurs en l�nia relacionat amb l'element. P. ex.:", spa: "Recurso en l�nea relacionado con el elemento. P. ej.:", eng: "Online resource related to the element. E.g.:"};
var l_msg_URL_description={cat: "Descripci� URL", spa: "Descripci�n URL", eng: "URL description"};
var l_msg_Detailed_description_onlineresource_eg_={cat: "Descripci� detallada de qu� �s o qu� fa el recurs en l�nia. P. ex.:", spa: "Descripci�n detallada de qu� es o qu� hace el recurso en l�nea. P. ej.", eng: "Detailed description of what the online resource is/does. E.g."};
var l_msg_URL_function={cat: "Funci� URL", spa: "Funci�n URL", eng: "URL Function"};  
var l_msg_URL_function_eg_={cat: "Funci� del recurs en l�nia. P. ex.:", spa: "Funci�n del recurso en l�nea. P. ex.:", eng: "Function of the link. E.g.:"};

var l_msg_Verify_pwd={cat: "Validaci� de contrasenya", spa: "Validaci�n de contrase�a", eng: "Verify password"};
var l_msg_Repeat_password={cat: "Cal que tornis a escriure la teva contrasenya nova.", spa: "Debes repetir la nueva contrase�a.", eng: "You need to repeat your new password."};
var l_msg_New_Pwd={cat: "Contrasenya nova", spa: "Contrase�a nueva", eng: "New password"};
var l_msg_Email={cat: "Correu electr�nic", spa: "Correo electr�nico", eng: "Email"};
	
	ActiveLanguage=lang;

	document.getElementById("head_title").innerHTML=DonaCadenaJSON(Msg_NiMMbus_login);
	document.getElementById("front-welcome-text-title").innerHTML=DonaCadenaJSON(Msg_Welcome_NiMMbus);
	document.getElementById("front-welcome-text-subtitle").innerHTML=DonaCadenaJSON(Msg_EO_everywhere_Share);
	document.getElementById("welcome-terms_of_use").innerHTML=DonaCadenaJSON(Msg_Terms_use);
	document.getElementById("welcome-privacy_statement").innerHTML=DonaCadenaJSON(Msg_Privacy_Statement);
	document.getElementById("welcome-last_updated").innerHTML="<i>"+DonaCadenaJSON(Msg_Last_Update)+": "+Terms_and_Privacy_Last_Updated+"</i>";	
	document.getElementById("front-language-lang").innerHTML=DonaCadenaJSON(Msg_small_Lang);
	
	document.getElementById("front-signin-nimmbus-lang").innerHTML=DonaCadenaJSON({cat: "Identificaci� usuaris NiMMbus", spa: "Identificaci�n usuarios NiMMbus", eng: "Login with NiMMbus user"});
	document.getElementById("sign_in_user").placeholder=DonaCadenaJSON(l_msg_Username_or_email);
	document.getElementById("sign_in_pass").placeholder=DonaCadenaJSON(l_msg_Pwd);
	document.getElementById("sign_in_btn").value=DonaCadenaJSON({cat: "Iniciar sessi�", spa: "Iniciar sesi�n", eng: "Sign in"});
	document.getElementById("sign_in_forgot").innerHTML=DonaCadenaJSON({cat: "Has oblidat la contrasenya?", spa: "�Ha olvidado la contrase�a?", eng: "Forgot the password?"});

	document.getElementById("front-signup-lang").innerHTML=DonaCadenaJSON(l_msg_New_to_NiMMbus_SignUp);
	document.getElementById("sign_up_user").placeholder=DonaCadenaJSON(l_msg_Username);
	document.getElementById("sign_up_pass").placeholder=DonaCadenaJSON(l_msg_Pwd);
	document.getElementById("sign_up_pass_valid").placeholder=DonaCadenaJSON({cat: "Verificaci� de contrasenya", spa: "Verificaci�n de contrase�a", eng: "Password verification"});
	document.getElementById("sign_up_btn").value=DonaCadenaJSON(l_msg_SignUp_for_NiMMbus);

	document.getElementById("front-signin-external-lang").innerHTML=DonaCadenaJSON({cat: "Identificaci� via federacions externes", spa: "Identificaci�n v�a federaciones externas", eng: "Login with external federations"});

	document.getElementById("settings-tooltip-text").innerHTML=DonaCadenaJSON({cat: "Configuraci�", spa: "Configuraci�n", eng: "Settings"});
	document.getElementById("settings-profile").innerHTML=DonaCadenaJSON({cat: "Perfil", spa: "Perfil", eng: "Profile"});
	document.getElementById("settings-signout").innerHTML=DonaCadenaJSON(l_msg_Close_SignOut);

	document.getElementById("main-left-pannel-since-text").innerHTML=DonaCadenaJSON({cat: "Membre des de", spa: "Miembro desde", eng: "Member since"});

	document.getElementById("resources-title-text").innerHTML=DonaCadenaJSON({cat: "Recursos", spa: "Recursos", eng: "Resources"});
	document.getElementById("resources-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Llista de recursos disponibles", spa: "Lista de recursos disponibles", eng: "List of available resources"});
	
	document.getElementById("resource-type_screen").innerHTML=DonaCadenaJSON({cat: "Filtrar per tipus:", spa: "Filtrar por tipo:", eng: "Filter by type:"});
	document.getElementById("all-resource-type-value").innerHTML=DonaCadenaJSON(l_msg_All);
	document.getElementById("feedback-resource-type-value").innerHTML=DonaCadenaJSON(Msg_Feedback);
	document.getElementById("citation-resource-type-value").innerHTML=DonaCadenaJSON(Msg_Citation);
	document.getElementById("publicat-resource-type-value").innerHTML=DonaCadenaJSON(Msg_Publication);
	document.getElementById("href-resource-type-value").innerHTML=DonaCadenaJSON(Msg_Hyperlink);
	document.getElementById("poi-resource-type-value").innerHTML=DonaCadenaJSON(Msg_PoI);	
	
	document.getElementById("owner-type_screen").innerHTML=DonaCadenaJSON({cat: "Filtrar per propietari:", spa: "Filtrar por propietario:", eng: "Filter by owner:"});
	document.getElementById("all-owner-type-value").innerHTML=DonaCadenaJSON(l_msg_All);
	document.getElementById("me-owner-type-value").innerHTML=DonaCadenaJSON({cat: "Recursos propis", spa: "Recursos propios", eng: "Owned resources"});
	document.getElementById("others-owner-type-value").innerHTML=DonaCadenaJSON({cat: "Recursos compartits amb mi", spa: "Recursos compartidos conmigo", eng: "Resources shared with me"});
	
	document.getElementById("newer-resources-tooltip-text").innerHTML=DonaCadenaJSON(l_msg_see_newer_resources);
	document.getElementById("older-resources-tooltip-text").innerHTML=DonaCadenaJSON(l_msg_see_older_resources);
	document.getElementById("newer-resource-selector-tooltip-text").innerHTML=DonaCadenaJSON(l_msg_see_newer_resources);
	document.getElementById("older-resource-selector-tooltip-text").innerHTML=DonaCadenaJSON(l_msg_see_older_resources);
	
	document.getElementById("new-resource_btn").value=innerHTML=DonaCadenaJSON({cat: "Nou", spa: "Nuevo", eng: "New"});
	document.getElementById("new-resource-tooltip-text").innerHTML=DonaCadenaJSON({cat: "Crear nou recurs", spa: "Crear nuevo recurso", eng: "Create new resource"});
	document.getElementById("new-resource-href").innerHTML=DonaCadenaJSON(Msg_Hyperlink);
	document.getElementById("new-resource-poi").innerHTML=DonaCadenaJSON(Msg_PoI);
	/* Decidim que no permetem crear valoracions des del bot� "Nou" del men� de l'esquerra, nom�s des de la llista de recursos.
	   Ens podem plantejar mantenir l'opci� i fer sortir una p�gina on expliqui com fer-ho: FB sobre recurs existent o FB sobre una citaci�
		 Potser es pot dir "Valoraci� sobre una nova citaci�" i ja serveix per fer com la p�gina test i alhora ajuda a entrendre que 
		 si vols fer FB d'una altre element vas per un altre lloc.
		 document.getElementById("new-resource-feedback").innerHTML=DonaCadenaJSON(Msg_Feedback);*/
	document.getElementById("new-resource-citation").innerHTML=DonaCadenaJSON(Msg_Citation);
	document.getElementById("new-resource-publication").innerHTML=DonaCadenaJSON(Msg_Publication);

	document.getElementById("left-pannel-terms_of_use").innerHTML=DonaCadenaJSON(Msg_Terms_use);
	document.getElementById("left-pannel-privacy_statement").innerHTML=DonaCadenaJSON(Msg_Privacy_Statement);
	document.getElementById("left-pannel-last_updated").innerHTML="<i>"+DonaCadenaJSON(Msg_Last_Update)+":<br>"+Terms_and_Privacy_Last_Updated+"</i>";	

	for (var i=0; i<resources_per_page; i++)
	{
		if (document.getElementById("fb-resource-"+i))
			document.getElementById("fb-resource-"+i).innerHTML=DonaCadenaJSON(Msg_Feedback);
		if (document.getElementById("share-resource-"+i))
			document.getElementById("share-resource-"+i).innerHTML=DonaCadenaJSON(Msg_Share);
		if (document.getElementById("tag-resource-"+i))
			document.getElementById("tag-resource-"+i).innerHTML=DonaCadenaJSON(Msg_Tag);
	}
	
	document.getElementById("title-href-resource_screen").innerHTML=DonaCadenaJSON(Msg_Title);
	document.getElementById("title-href-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_example_)+" "+DonaCadenaJSON({cat: "Rius de Catalunya", spa: "R�os de Catalu�a", eng: "Catalonia rivers"});
	document.getElementById("href-href-resource_screen").innerHTML=DonaCadenaJSON(Msg_Hyperlink);
	document.getElementById("href-href-resource_descrip").innerHTML=DonaCadenaJSON(l_msg_For_example_)+" "+"http://www.gencat.net/mediamb/sig/bases/rius.mmz";
	document.getElementById("mimetype-href-resource_screen").innerHTML=DonaCadenaJSON({cat: "Format", spa: "Formato", eng: "Format"});
	document.getElementById("other-mimetype-href-resource_value").innerHTML=DonaCadenaJSON({cat: "Altres", spa: "Otros", eng: "Other"});
	document.getElementById("mimetype-href-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Format del fitxer al qual apunta l'hiperenlla�", spa: "Formato del fichero al que apunta el hiperenlace", eng: "File format of the Hyperlink target"});
	document.getElementById("reason-href-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Motivation);
	document.getElementById("reason-href-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Reason_why);
	document.getElementById("href-resource-delete_btn").value=DonaCadenaJSON(Msg_Delete)+" "+DonaCadenaJSON(Msg_Hyperlink);
	document.getElementById("href-resource-exit_btn").value=DonaCadenaJSON(l_msg_Close_Sortir);
	document.getElementById("href-resource-close_btn").value=DonaCadenaJSON(l_msg_Discard);

	document.getElementById("poi-gps-resource_btn").value=DonaCadenaJSON({cat: "Obtenir del dispositiu", spa: "Obtener del dispositivo", eng: "Get it from the device"});
	document.getElementById("title-poi-resource_screen").innerHTML=DonaCadenaJSON(Msg_Title);
	document.getElementById("title-poi-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_example_)+" "+DonaCadenaJSON({cat: "Aplec de la sardana", spa: "Feria de abril", eng: "Olympic games stadium"});
	document.getElementById("long-poi-resource_screen").innerHTML=DonaCadenaJSON({cat: "Longitud", spa: "Longitud", eng: "Longitude"});
	document.getElementById("long-poi-resource_descrip").innerHTML=DonaCadenaJSON({cat: "Longitud en graus", spa: "Longitud en grados", eng: "Longitude in degrees"})+". "+DonaCadenaJSON(l_msg_For_example_)+" "+"3.25656";
	document.getElementById("lat-poi-resource_screen").innerHTML=DonaCadenaJSON({cat: "Latitud", spa: "Latitud", eng: "Latitude"});
	document.getElementById("lat-poi-resource_descrip").innerHTML=DonaCadenaJSON({cat: "Latitud en graus", spa: "Latitud en grados", eng: "Latitude in degrees"})+". "+DonaCadenaJSON(l_msg_For_example_)+" "+"41.3389";
	document.getElementById("pos-accur-poi-resource_screen").innerHTML=DonaCadenaJSON(Msg_Accuracy);
	document.getElementById("pos-accur-poi-resource_descrip").innerHTML=DonaCadenaJSON({cat: "Exactitud posicional preferiblement en m", spa: "Exactitud posicional preferiblemente en m", eng: "Positional accuracy, if possible in m"})+". "+DonaCadenaJSON(l_msg_For_example_)+" "+"25m";
	document.getElementById("elevation-poi-resource_screen").innerHTML=DonaCadenaJSON({cat: "Elevaci�", spa: "Elevaci�n", eng: "Elevation"});
	document.getElementById("elevation-poi-resource_descrip").innerHTML=DonaCadenaJSON({cat: "Elevaci� en metres", spa: "Elevaci�n en metros", eng: "Elevation in meters"})+". "+DonaCadenaJSON(l_msg_For_example_)+" "+"123.4";
	document.getElementById("reason-poi-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Motivation);
	document.getElementById("reason-poi-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Reason_why);
	document.getElementById("poi-resource-delete_btn").value=DonaCadenaJSON(Msg_Delete)+" "+DonaCadenaJSON(Msg_PoI);
	document.getElementById("poi-resource-exit_btn").value=DonaCadenaJSON(l_msg_Close_Sortir);
	document.getElementById("poi-resource-close_btn").value=DonaCadenaJSON(l_msg_Discard);

	document.getElementById("target-feedback-publication-resource").innerHTML=DonaCadenaJSON({cat: "Recurs(os) objectiu de la valoraci�", spa: "Recurso(s) objetivo de la valoraci�n", eng: "Feedback target resource(s)"});
	document.getElementById("target_feedback-resource_compact_add_btn").value=DonaCadenaJSON(l_msg_Add);			
	document.getElementById("target_feedback-resource_compact_add_descrip").innerHTML=DonaCadenaJSON({cat: "Prem [Afegir] per a escollir un nou recurs valorat", spa: "Presione [A�adir] para escoger un nuevo recurso valorado", eng: "Press [Add] to choose a new target item"});

	document.getElementById("title-feedback-resource_screen").innerHTML=DonaCadenaJSON(Msg_Title);
	document.getElementById("title-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_example_)+" "+DonaCadenaJSON({cat: "Bon servidor de mapes", spa: "Buen servidor de mapas", eng: "Good map server"});
	document.getElementById("abstract-feedback-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Abstract);
	document.getElementById("abstract-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Descripci� textual curta de la valoraci�", spa: "Descripci�n textual corta de la valoraci�n", eng: "Brief narrative description of the feedback item"});
	document.getElementById("reason-feedback-resource_screen").innerHTML=DonaCadenaJSON({cat: "Prop�sit", spa: "Prop�sito", eng: "Purpose"});
	document.getElementById("reason-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Ra� o intenci� per la qual explico la meva experi�ncia i dono la meva valoraci�", spa: "Raz�n o intenci�n por la cual explico mi experiencia y proporciono mi valoraci�n", eng: "Reason or intention with which I explain my experience and provide this feedback"});
	document.getElementById("contactRole-feedback-resource_screen").innerHTML=DonaCadenaJSON({cat: "Rol del contacte", spa: "Rol del contacto", eng: "Contact role"});
	document.getElementById("commercialDataProd-contactRole-feedback-resource_value").innerHTML=DonaCadenaJSON(GUF_UserRoleCode["commercialDataProd"]);
	document.getElementById("commercialAddedValue-contactRole-feedback-resource_value").innerHTML=DonaCadenaJSON(GUF_UserRoleCode["commercialAddedValue"]);
	document.getElementById("researchDataProd-contactRole-feedback-resource_value").innerHTML=  DonaCadenaJSON(GUF_UserRoleCode["researchDataProd"]);
	document.getElementById("researchEndUser-contactRole-feedback-resource_value").innerHTML=   DonaCadenaJSON(GUF_UserRoleCode["researchEndUser"]);
	document.getElementById("decisionMaker-contactRole-feedback-resource_value").innerHTML=     DonaCadenaJSON(GUF_UserRoleCode["decisionMaker"]);
	document.getElementById("generalPublic-contactRole-feedback-resource_value").innerHTML=     DonaCadenaJSON(GUF_UserRoleCode["generalPublic"]);
	document.getElementById("contactRole-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Rol de l'usuari en el context d'aquesta valoraci�", spa: "Rol del usuario en el contexto de esta valoraci�n", eng: "User's role in the context of this feedback item"});

	document.getElementById("user-comment-publication-resource").innerHTML=DonaCadenaJSON({cat: "Comentari de l'usuari", spa: "Comentario del usuario", eng: "User comment"});
	document.getElementById("comment-feedback-resource_screen").innerHTML=DonaCadenaJSON({cat: "Comentari", spa: "Comentario", eng: "Comment"});
	document.getElementById("comment-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Comentari de l'usuari sobre el recurs", spa: "Comentario del usuario sobre el recurso", eng: "User's comment about the resource"});
	document.getElementById("comment-motiv-feedback-resource_screen").innerHTML=DonaCadenaJSON({cat: "Motivaci� del comentari", spa: "Motivaci�n del comentario", eng: "Comment motivation"});
	document.getElementById("undefined-motivation-feedback-resource_value").innerHTML=     DonaCadenaJSON(GUF_MotivationCode["undefined"]);
	document.getElementById("comment-motivation-feedback-resource_value").innerHTML=       DonaCadenaJSON(GUF_MotivationCode["comment"]);
	document.getElementById("question-motivation-feedback-resource_value").innerHTML=      DonaCadenaJSON(GUF_MotivationCode["question"]);
	document.getElementById("answer-motivation-feedback-resource_value").innerHTML=        DonaCadenaJSON(GUF_MotivationCode["answer"]);
	document.getElementById("acceptedAnswer-motivation-feedback-resource_value").innerHTML=DonaCadenaJSON(GUF_MotivationCode["acceptedAnswer"]);
	document.getElementById("response-motivation-feedback-resource_value").innerHTML=      DonaCadenaJSON(GUF_MotivationCode["response"]);
	document.getElementById("justification-motivation-feedback-resource_value").innerHTML= DonaCadenaJSON(GUF_MotivationCode["justification"]);
	document.getElementById("resolution-motivation-feedback-resource_value").innerHTML=    DonaCadenaJSON(GUF_MotivationCode["resolution"]);
	document.getElementById("moderation-motivation-feedback-resource_value").innerHTML=    DonaCadenaJSON(GUF_MotivationCode["moderation"]);
	document.getElementById("comment-motiv-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Motivaci� del comentari de l'usuari sobre el recurs", spa: "Motivaci�n del comentario del usuario sobre el recurso", eng: "Motivation of user's comment about the resource"});

	document.getElementById("rating-feedback-resource_screen").innerHTML=DonaCadenaJSON({cat: "Puntuaci�", spa: "Puntuaci�n", eng: "Rating"});
	/*document.getElementById("undefined-rating-feedback-resource_value").innerHTML=DonaCadenaJSON(Msg_Indefinit);
	document.getElementById("oneStar-rating-feedback-resource_value").innerHTML=DonaCadenaJSON({cat: "1 estrella: Molt dolent", spa: "1 estrella: Muy malo", eng: "1 star: very bad"});
	document.getElementById("twoStars-rating-feedback-resource_value").innerHTML=DonaCadenaJSON({cat: "2 estrelles: Dolent", spa: "2 estrellas: Malo", eng: "2 stars: Bad"});
	document.getElementById("threeStars-rating-feedback-resource_value").innerHTML=DonaCadenaJSON({cat: "3 estrelles: Regular", spa: "3 estrellas: Regular", eng: "3 stars: Regular"});
	document.getElementById("fourStars-rating-feedback-resource_value").innerHTML=DonaCadenaJSON({cat: "4 estrelles: Bo", spa: "4 estrellas: Bueno", eng: "4 stars: Good"});
	document.getElementById("fiveStars-rating-feedback-resource_value").innerHTML=DonaCadenaJSON({cat: "5 estrelles: Excel�lent", spa: "5 estrellas: Excelente", eng: "5 stars: Excellent"});*/
	document.getElementById("rating-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Nombre d'estrelles que puntua subjectivament el recurs", spa: "N�mero de estrellas que punt�a subjetivamente el recurso", eng: "Number of stars that qualifies subjectively the resource"});

	document.getElementById("public-feedback-publication-resource").innerHTML=DonaCadenaJSON({cat: "Publicaci�(ns) relacionades amb el recurs valorat", spa: "Publicaci�n(es) relacionadas con el recurso valorado", eng: "Publication(s) related to the evaluated resource"});
	//document.getElementById("public_feedback-resource_compact_screen").innerHTML=DonaCadenaJSON({cat: "Publicaci�(ns)", spa: "Publicaci�n(es)", eng: "Publication(s)"});
	document.getElementById("public_feedback-resource_compact_add_btn").value=DonaCadenaJSON(l_msg_Add);			
	document.getElementById("public_feedback-resource_compact_add_descrip").innerHTML=DonaCadenaJSON({cat: "Prem [Afegir] per a escollir una nova publicaci�", spa: "Presione [A�adir] para escoger una nueva publicaci�n", eng: "Press [Add] to choose a new publication"});		

	document.getElementById("share-anonymous-feedback-resource_screen").innerHTML=DonaCadenaJSON({cat: "Compartir amb tothom", spa: "Compartir con todos", eng: "Share to everyone"});
 	document.getElementById("share-anonymous-feedback-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Compartir aquesta valoraci� amb tothom", spa: "Compartir este valoraci�n con todos", eng: "If check this feedback will be visible to everyone"});

	document.getElementById("feedback-resource-delete_btn").value=DonaCadenaJSON(Msg_Delete)+" "+DonaCadenaJSON(Msg_Feedback);
	document.getElementById("feedback-resource-exit_btn").value=DonaCadenaJSON(l_msg_Close_Sortir);
	document.getElementById("feedback-resource-close_btn").value=DonaCadenaJSON(l_msg_Discard);

	document.getElementById("title-citation-resource_screen").innerHTML=DonaCadenaJSON(Msg_Title);
	document.getElementById("title-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_example_)+" "+DonaCadenaJSON({cat: "Mapa Cobertes del S�l de Catalunya", spa: "Sistema de Informaci�n sobre Ocupaci�n del Suelo de Espa�a", eng: "Corine Land Cover 2012"});
		
	document.getElementById("edition-citation-resource").innerHTML=DonaCadenaJSON(l_msg_Resource_Edition);
	document.getElementById("edition-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Edition);
	document.getElementById("edition-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Version_of_the_resource);
	document.getElementById("edition-date-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Edition_date);
	document.getElementById("edition-date-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Date_of_edition);
	document.getElementById("identifier-citation-resource").innerHTML=DonaCadenaJSON({cat: "Identificador de la citaci�", spa: "Identificador de la citaci�n", eng: "Citation identifier"});
	document.getElementById("id-code-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Code);
	document.getElementById("id-code-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_resource_id_eg)+" "+"c90fd0c1-ebdf-4df9-9216-4592ed843644";
	document.getElementById("id-namespace-citation-resource_screen").innerHTML=DonaCadenaJSON(Msg_Namespace);
	document.getElementById("id-namespace-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Namespace_where_id_unique_eg_)+" "+"http://sdi.eea.europa.eu/catalogue";
	document.getElementById("series-citation-resource").innerHTML=DonaCadenaJSON(l_msg_Series_which_resource_is_part_of);
	document.getElementById("series-name-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Series_name);
	document.getElementById("series-name-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Series_name_of_which_this_resource);
	document.getElementById("series-issue-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Series_issue_id);
	document.getElementById("series-issue-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Id_of_the_issue_within_series);
	document.getElementById("series-page-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Pages_in_the_issue);
	document.getElementById("series-page-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Pages_resource_fills_in);
	document.getElementById("other-cit-details-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Other_citation_details);
	document.getElementById("other-cit-details-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Other_info_requiered_citation);
	document.getElementById("url-citation-resource").innerHTML=DonaCadenaJSON(l_msg_OnlineResource);
	document.getElementById("url-link-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_URL_link);
	document.getElementById("url-link-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Online_resource_related_eg_)+" "+"http://land.copernicus.eu/pan-european/corine-land-cover/clc-2012/view";
	document.getElementById("url-descrip-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_URL_description);
	document.getElementById("url-descrip-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Detailed_description_onlineresource_eg_)+" "+DonaCadenaJSON({cat: "Exploraci� de les dades en un navegador", spa: "Exploraci�n de los datos en un navegador", eng: "View the data on a web browser"});
	document.getElementById("url-function-citation-resource_screen").innerHTML=DonaCadenaJSON(l_msg_URL_function);	
	document.getElementById("undefined-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["undefined"]);
	document.getElementById("download-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["download"]);
	document.getElementById("information-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["information"]);
	document.getElementById("offlineAccess-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["offlineAccess"]);
	document.getElementById("order-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["order"]);
	document.getElementById("search-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["search"]);
	document.getElementById("completeMetadata-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["completeMetadata"]);
	document.getElementById("browseGraphic-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["browseGraphic"]);
	document.getElementById("upload-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["upload"]);
	document.getElementById("emailService-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["emailService"]);
	document.getElementById("browsing-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["browsing"]);	
	document.getElementById("fileAccess-url-function-citation-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["fileAccess"]);
	document.getElementById("url-function-citation-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_URL_function_eg_)+" "+DonaCadenaJSON({cat: "Exploraci�", spa: "Exploraci�n", eng: "View"});
	document.getElementById("citation-resource-delete_btn").value=DonaCadenaJSON(Msg_Delete)+" "+DonaCadenaJSON(Msg_Citation);
	document.getElementById("citation-resource-exit_btn").value=DonaCadenaJSON(l_msg_Close_Sortir);
	document.getElementById("citation-resource-close_btn").value=DonaCadenaJSON(l_msg_Discard);

	document.getElementById("title-publication-resource_screen").innerHTML=DonaCadenaJSON(Msg_Title);
	document.getElementById("title-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_example_)+" "+"Daytime urban heat islands from Landsat ETM+ and Corine land cover data: An application to major cities in Greece";
	document.getElementById("edition-publication-resource").innerHTML=DonaCadenaJSON(l_msg_Resource_Edition);
	document.getElementById("edition-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Edition);
	document.getElementById("edition-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Version_of_the_resource);
	document.getElementById("edition-date-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Edition_date);
	document.getElementById("edition-date-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Date_of_edition);
	document.getElementById("identifier-publication-resource").innerHTML=DonaCadenaJSON({cat: "Identificador de la publicaci�", spa: "Identificador de la publicaci�n", eng: "Publication identifier"});
	document.getElementById("id-code-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Code);
	document.getElementById("id-code-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_resource_id_eg)+" "+"10.1016/j.solener.2006.06.014";
	document.getElementById("id-namespace-publication-resource_screen").innerHTML=DonaCadenaJSON(Msg_Namespace);
	document.getElementById("id-namespace-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Namespace_where_id_unique_eg_)+" "+"https://www.doi.org/";
	document.getElementById("series-publication-resource").innerHTML=DonaCadenaJSON(l_msg_Series_which_resource_is_part_of);
	document.getElementById("series-name-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Series_name);
	document.getElementById("series-name-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Series_name_of_which_this_resource)+" "+"Solar Energy";
	document.getElementById("series-issue-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Series_issue_id);
	document.getElementById("series-issue-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Id_of_the_issue_within_series_eg_)+" "+"Volume 81, Issue 3";
	document.getElementById("series-page-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Pages_in_the_issue);
	document.getElementById("series-page-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Pages_resource_fills_in);
	document.getElementById("other-cit-details-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Other_citation_details);
	document.getElementById("other-cit-details-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Other_info_requiered_citation);
	document.getElementById("url-publication-resource").innerHTML=DonaCadenaJSON(l_msg_OnlineResource);
	document.getElementById("url-link-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_URL_link);
	document.getElementById("url-link-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Online_resource_related_eg_)+" "+"http://www.sciencedirect.com/science/article/pii/S0038092X06001885";
	document.getElementById("url-descrip-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_URL_description);
	document.getElementById("url-descrip-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Detailed_description_onlineresource_eg_)+" "+DonaCadenaJSON({cat: "Informaci� (i possible desc�rrega) sobre l'article", spa: "Informaci�n (y posible descarga) sobre el art�culo", eng: "Paper information (and possible download)"});
	document.getElementById("url-function-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_URL_function);
	document.getElementById("undefined-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["undefined"]);
	document.getElementById("download-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["download"]);
	document.getElementById("information-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["information"]);
	document.getElementById("offlineAccess-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["offlineAccess"]);
	document.getElementById("order-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["order"]);
	document.getElementById("search-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["search"]);
	document.getElementById("completeMetadata-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["completeMetadata"]);
	document.getElementById("browseGraphic-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["browseGraphic"]);
	document.getElementById("upload-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["upload"]);
	document.getElementById("emailService-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["emailService"]);
	document.getElementById("browsing-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["browsing"]);	
	document.getElementById("fileAccess-url-function-publication-resource_value").innerHTML=DonaCadenaJSON(CI_OnLineFunctionCode["fileAccess"]);
	document.getElementById("url-function-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_URL_function_eg_)+" "+DonaCadenaJSON({cat: "Informaci�", spa: "Informaci�n", eng: "Information"});
	document.getElementById("abstract-publication-resource_screen").innerHTML=DonaCadenaJSON(l_msg_Abstract);
	document.getElementById("abstract-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Resum de la publicaci�", spa: "Resumen de la publicaci�n", eng: "Abstract of the publication"});

	document.getElementById("category-publication-resource_screen").innerHTML=DonaCadenaJSON({cat: "Categoria", spa: "Categor�a", eng: "Category"});
	document.getElementById("undefined-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["undefined"]);
	document.getElementById("bookChapter-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["bookChapter"]);
	document.getElementById("book-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["book"]);
	document.getElementById("report-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["report"]);
	document.getElementById("journalArticle-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["journalArticle"]);
	document.getElementById("magazineNewspaper-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["magazineNewspaper"]);
	document.getElementById("atlasMap-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["atlasMap"]);
	document.getElementById("applicationProgram-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["applicationProgram"]);
	document.getElementById("conferenceProceedings-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["conferenceProceedings"]);
	document.getElementById("multimediaContent-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["cdDvdBlueRay"]);
	document.getElementById("socialMediaComment-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["socialMediaComment"]);
	document.getElementById("blogWiki-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["blogWiki"]);
	document.getElementById("webSite-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["webSite"]);
	document.getElementById("webPage-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["webPage"]);
	document.getElementById("videoAudio-category-publication-resource_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["videoAudio"]);
	document.getElementById("tutorialManual-publication-resource_screen_value").innerHTML=DonaCadenaJSON(QCM_PublicationCategoryCode["tutorialManual"]);
	document.getElementById("category-publication-resource_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Tipus de publicaci�. P. ex. Cap�tol de llibre", spa: "Tipo de publicaci�n. P. ej. Cap�tulo de libro", eng: "Type of publication. E.g. Book chapter"});

	document.getElementById("publication-resource-delete_btn").value=DonaCadenaJSON(Msg_Delete)+" "+DonaCadenaJSON(Msg_Publication);
	document.getElementById("publication-resource-exit_btn").value=DonaCadenaJSON(l_msg_Close_Sortir);
	document.getElementById("publication-resource-close_btn").value=DonaCadenaJSON(l_msg_Discard);

	document.getElementById("account-title-text").innerHTML=DonaCadenaJSON({cat: "Compte", spa: "Cuenta", eng: "Account"});
	document.getElementById("account-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Canvia les caracter�stiques b�siques del teu compte i la configuraci� d'idioma", spa: "Cambie las caracter�sticas b�sicas de su cuenta y la configuraci�n de idioma", eng: "Change your basic account and language settings."});
	document.getElementById("new_user_screen").innerHTML=DonaCadenaJSON(l_msg_Username);
	document.getElementById("new_user_descrip").innerHTML=DonaCadenaJSON({cat: "Pots canviar el teu usuari en qualsevol moment.", spa: "Puede cambiar su usuario en cualquier momento.", eng: "Your username can be changed anytime."});
	document.getElementById("email_screen").innerHTML=DonaCadenaJSON(l_msg_Email);
	document.getElementById("email_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_Email_Notificactions);
	document.getElementById("name_screen").innerHTML=DonaCadenaJSON({cat: "Nom", spa: "Nombre", eng: "Name"});
	document.getElementById("name_screen_descrip").innerHTML=DonaCadenaJSON({cat: "El teu nom i cognoms", spa: "Su nombre y apellidos", eng: "Your name and surname"});
	document.getElementById("bio_screen").innerHTML=DonaCadenaJSON({cat: "Biografia", spa: "Biograf�a", eng: "Bio"});
	document.getElementById("bio_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Un text curt que et descriu", spa: "Un texto corto que le describe", eng: "About yourself in a few words."});
	document.getElementById("current_pass_screen").innerHTML=DonaCadenaJSON({cat: "Contrasenya actual", spa: "Contrase�a actual", eng: "Current password"});
	document.getElementById("current_pass_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Cal que proporcionis la contrasenya actual si la vols canviar.", spa: "Es necesario proporcionar la contrase�a actual si desea cambiarla.", eng: "Your current password is needed only if you want to change it."});
	document.getElementById("new_pass_screen").innerHTML=DonaCadenaJSON(l_msg_New_Pwd);
	document.getElementById("new_pass_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Pots canviar la teva contrasenya en qualsevol moment.", spa: "Puede cambiar su contrase�a en cualquier momento.", eng: "Your password can be changed anytime."});
	document.getElementById("new_pass_valid_screen").innerHTML=DonaCadenaJSON(l_msg_Verify_pwd);
	document.getElementById("new_pass_valid_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Cal que tornis a escriure la teva contrasenya.", spa: "Debes repetir la contrase�a.", eng: "You need to repeat your new password."});
	document.getElementById("language_screen").innerHTML=DonaCadenaJSON({cat: "Idioma", spa: "Idioma", eng: "Language"});
	document.getElementById("language_screen_descrip").innerHTML=DonaCadenaJSON({cat: "L'idioma que fas servir (l'entorn canviar� a aquest idioma).", spa: "El idioma que usas (el entorno cambiar� a este idioma).", eng: "The language you use (the interface will change to this language)."});
	document.getElementById("account_btn").value=DonaCadenaJSON(Msg_Save_changes);
	document.getElementById("account-close_btn").value=DonaCadenaJSON(l_msg_Discard);

	document.getElementById("share-title-text").innerHTML=DonaCadenaJSON(Msg_Share);
	document.getElementById("share-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Comparteix aquest recurs amb els altres", spa: "Comparte este recurso con otros", eng: "Share this resource with others"});
	document.getElementById("new_share_screen").innerHTML=DonaCadenaJSON(l_msg_Username_or_email);
	document.getElementById("new_share_descrip").innerHTML=DonaCadenaJSON({cat: "Escriu un nom d'usuari de NiMMbus o un email, escull els drets i prem [Afegir]", spa: "Escriba un nombre de usuario de NiMMbus o un email, escoja los derechos y presione [A�adir]", eng: "Type a username in NiMMbus or an email, choose the rights and press [Add]"});
	document.getElementById("new_share_open_screen").innerHTML=DonaCadenaJSON(l_msg_All);
	document.getElementById("new_share_open_read_label").innerHTML=DonaCadenaJSON({cat: "Obrir a tothom per llegir", spa: "Abrir a todos para lectura", eng: "Open to everybody for reading"});
	document.getElementById("new_share_open_descrip").innerHTML=DonaCadenaJSON({cat: "Marca aquesta casella si vols obrir l'acc�s a aquest recurs a tothom (fins i tot sense identificar-se)", spa: "Marque esta casilla si desea abrir el acceso a este recurso a todos (incluso sin identificarse)", eng: "Check this box if you want to open the access to this resource to everyone (even if they are not identified)"});
	document.getElementById("new_share_open_btn").value=DonaCadenaJSON(l_msg_Add);
	document.getElementById("new_share_rights_read_label").innerHTML=DonaCadenaJSON(Msg_Read);
	document.getElementById("new_share_rights_write_label").innerHTML=DonaCadenaJSON(Msg_Write);
	document.getElementById("new_share_rights_share_label").innerHTML=DonaCadenaJSON(Msg_Share);
	document.getElementById("new_share_btn").value=DonaCadenaJSON(l_msg_Add);
	document.getElementById("current_share_screen").innerHTML=DonaCadenaJSON({cat: "Llista de comparticions", spa: "Lista de comparticiones", eng: "Sharing list"});
	document.getElementById("current_share_descrip").innerHTML=DonaCadenaJSON({cat: "Fes clic a les creus per esborrar usuaris de la llista.", spa: "Haga clic a las cruces para borrar usuarios de la lista.", eng: "Click on the crosses to remove users from the list."});
	document.getElementById("share-close_btn").value=DonaCadenaJSON(l_msg_Close_Tancar);

	document.getElementById("feedback-title-text").innerHTML=DonaCadenaJSON({cat: "Valoracions", spa: "Valoraciones", eng: "Feedback items"});
	document.getElementById("feedback-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Valoracions sobre el recurs:", spa: "Valoraciones sobre el recurso:", eng: "Feedback about the resource:"});
	document.getElementById("feedback_target_compact_screen").innerHTML=DonaCadenaJSON({cat: "Recurs valorat", spa: "Recurso valorado", eng: "Target resource"});
	document.getElementById("new_feedback_screen").innerHTML=DonaCadenaJSON(Msg_Feedback);
	document.getElementById("new_feedback_descrip").innerHTML=DonaCadenaJSON({cat: "Prem [Afegir] per a crear una nova valoraci� sobre aquest recurs", spa: "Presione [A�adir] para crear una nueva valoraci�n sobre este recurso", eng: "Press [Add] to create a new feedback item about this resource"});
	document.getElementById("new_feedback_btn").value=DonaCadenaJSON(l_msg_Add);
	document.getElementById("current_feedback_screen").innerHTML=DonaCadenaJSON({cat: "Llista de valoracions", spa: "Lista de valoraciones", eng: "Feedback list"});
	document.getElementById("current_feedback_descrip").innerHTML=DonaCadenaJSON({cat: "Prem [Editar] per a veure, modificar o esborrar aquesta valoraci�", spa: "Presione [Editar] para ver, modificar o borrar esta valoraci�n", eng: "Press [Edit] to view, modify or delete this feedback item"});
	document.getElementById("feedback-close_btn").value=DonaCadenaJSON(l_msg_Close_Tancar);

	document.getElementById("reset-pass-title-text").innerHTML=DonaCadenaJSON({cat: "Restabliment de contrasenya", spa: "Restablecimiento de contrase�a", eng: "Password reset"});
	document.getElementById("reset-pass-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Troba el teu compte de NiMMbus", spa: "Encuentre su cuenta de NiMMbus", eng: "Find your NiMMbus account"});
	document.getElementById("reset-pass_user_descrip").innerHTML=DonaCadenaJSON({cat: "Introdueixi el nom d'usuari o correu electr�nic. Se t'enviar� un email amb un enlla� per canviar la contrasenya.", spa: "Introduzca su nombre de usuario o el correo electr�nico. Se le enviar� un email con un enlace para cambiar la contrase�a.", eng: "Enter your username or email. An email will be sent to you with a link to change the password."});
	document.getElementById("reset-pass_btn").value=DonaCadenaJSON({cat: "Cerca", spa: "B�squeda", eng: "Search"});

	document.getElementById("new-pass-title-text").innerHTML=DonaCadenaJSON({cat: "Nova contrasenya", spa: "Nueva contrase�a", eng: "New password"});
	document.getElementById("new-pass-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Canvia la teva contrasenya del teu compte de NiMMbus", spa: "Cambie su contrase�a para su cuenta de NiMMbus", eng: "Change password in your NiMMbus account"});
	document.getElementById("new-pass_new_pass_screen").innerHTML=DonaCadenaJSON(l_msg_New_Pwd);
	document.getElementById("new-pass_new_pass_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Escriu directament la teva contrasenya nova.", spa: "Escriba directamente su contrase�a nueva.", eng: "Write your new password here."});
	document.getElementById("new-pass_new_pass_valid_screen").innerHTML=DonaCadenaJSON(l_msg_Verify_pwd);
	document.getElementById("new-pass_new_pass_valid_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Repeat_password);
	document.getElementById("new-pass_btn").value=DonaCadenaJSON({cat: "Canviar", spa: "Cambiar", eng: "Change"});

	document.getElementById("new-user-title-text").innerHTML=DonaCadenaJSON(l_msg_New_to_NiMMbus_SignUp)+":";
	document.getElementById("new-user-subtitle-text").innerHTML=DonaCadenaJSON({cat: "Crea el teu compte de NiMMbus", spa: "Cree su cuenta de NiMMbus", eng: "Create your NiMMbus account"});
	document.getElementById("new-user_new_user_screen").innerHTML=DonaCadenaJSON(l_msg_Username);
	document.getElementById("new-user_new_user_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Escriu el nom d'usuari que desitges.", spa: "Escriba el nombre de usuario que desea.", eng: "Write your username here."});
	document.getElementById("new-user_new_pass_screen").innerHTML=DonaCadenaJSON(l_msg_Pwd);
	document.getElementById("new-user_new_pass_screen_descrip").innerHTML=DonaCadenaJSON({cat: "Escriu la teva contrasenya.", spa: "Escriba directamente su contrase�a.", eng: "Write your new password here."});
	document.getElementById("new-user_new_pass_valid_screen").innerHTML=DonaCadenaJSON(l_msg_Verify_pwd);
	document.getElementById("new-user_new_pass_valid_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_Repeat_password);
	document.getElementById("new-user_email_screen").innerHTML=DonaCadenaJSON(l_msg_Email);
	document.getElementById("new-user_email_screen_descrip").innerHTML=DonaCadenaJSON(l_msg_For_Email_Notificactions);
	document.getElementById("new-user_btn").value=DonaCadenaJSON(l_msg_SignUp_for_NiMMbus);

	document.getElementById("new-user-title-text").innerHTML=DonaCadenaJSON(l_msg_New_to_NiMMbus_SignUp)+":";

	document.getElementById("execute-token-title-text").innerHTML=DonaCadenaJSON({cat: "Sol�licitud", spa: "Solicitud", eng: "Request"});
	document.getElementById("execute-token-wait-text").innerHTML=DonaCadenaJSON({cat: "Espereu...", spa: "Espere...", eng: "Please wait..."});
}

// Index Temporary Out of Service

function ChangeLanguageIndexTOS(lang)
{
	ActiveLanguage=lang;
	document.getElementById("front-welcome-text-title").innerHTML=DonaCadenaJSON(Msg_Welcome_NiMMbus);
	document.getElementById("front-welcome-text-subtitle").innerHTML=DonaCadenaJSON(Msg_EO_everywhere_Share);		
	document.getElementById("welcome-terms_of_use").innerHTML=DonaCadenaJSON(Msg_Terms_use);
	document.getElementById("welcome-privacy_statement").innerHTML=DonaCadenaJSON(Msg_Privacy_Statement);
	document.getElementById("welcome-last_updated").innerHTML="<i>"+DonaCadenaJSON(Msg_Last_Update)+": "+Terms_and_Privacy_Last_Updated+"</i>";	
	document.getElementById("front-language-lang").innerHTML=DonaCadenaJSON(Msg_small_Lang);
	document.getElementById("front-temp-oos-lang").innerHTML=DonaCadenaJSON({cat: "Servei temporalment fora de servei", 
		spa: "Servicio temporalmente fuera de servicio", eng: "Temporary Out of Service"});
	document.getElementById("front-temp-bts-lang").innerHTML=DonaCadenaJSON({cat: "Data i hora prevista del restabliment del servei", 
		spa: "Fecha y hora prevista de restablecimiento del servicio", eng: "Expected date and time for service restoration"})+": 17-09-2018 14:00 CET";
}

// Test New Feedback Page

function ChangeLanguageTestNewFeedback(lang)
{
	ActiveLanguage=lang;
	
	document.getElementById("head_title").innerHTML=DonaCadenaJSON({cat: "Test per afegir Valoracions", spa: "Test para a�adir valoraciones", eng: "NiMMbus Test New Feedback"});
	document.getElementById("front-welcome-text-title").innerHTML=DonaCadenaJSON(Msg_NiMMbus_Test_Pages);
	document.getElementById("front-welcome-text-subtitle").innerHTML=DonaCadenaJSON({cat: "Test per a crear valoracions d'un recurs (descrit pel seu t�tol, identificador i espai de noms)",
				spa: "Test para crear valoraciones de un recurso (descrito por su t�tulo, identificador y espacio de nombres)", 
				eng: "Test to create feedback items about a resource (described by its title, identifier and namespace)"});
	document.getElementById("welcome-terms_of_use").innerHTML=DonaCadenaJSON(Msg_Terms_use);
	document.getElementById("welcome-privacy_statement").innerHTML=DonaCadenaJSON(Msg_Privacy_Statement);
	document.getElementById("welcome-last_updated").innerHTML="<i>"+DonaCadenaJSON(Msg_Last_Update)+": "+Terms_and_Privacy_Last_Updated+"</i>";	
	document.getElementById("front-language-lang").innerHTML=DonaCadenaJSON(Msg_small_Lang);
	document.getElementById("sign_in_title").placeholder=DonaCadenaJSON(Msg_Title);
	document.getElementById("sign_in_code").placeholder=DonaCadenaJSON(Msg_Identifier);
	document.getElementById("sign_in_codespace").placeholder=DonaCadenaJSON(Msg_Namespace);
	document.getElementById("sign_in_access_token_type_title").innerHTML=DonaCadenaJSON({cat: "Descriu el tipus d'usuari per a entrar a NiMMbus", spa: "Describe el tipo de usuario para entrar en NiMMbus", eng: "Describe the type of user to sign in NiMMbus"});
	document.getElementById("sign_in_btn").value=DonaCadenaJSON(Msg_Create);
	document.getElementById("sign_in_create_citation").innerHTML=DonaCadenaJSON({cat: "Descriu la citaci� al recurs sobre el qual donar�s valoracions", spa: "Describe la citaci�n al recurso sobre el qual dar�s valoraciones", eng: "Describe the citation to the resource you are going to give feedback"});		
}


// Test Widget Page

function ChangeLanguageTestWidget(lang)
{
	ActiveLanguage=lang;
	
	document.getElementById("head_title").innerHTML=DonaCadenaJSON({cat: "Test del NiMMbus Widget", spa: "Test del NiMMbus Widget", eng: "NiMMbus Test Widget"});
	document.getElementById("front-welcome-text-title").innerHTML=DonaCadenaJSON(Msg_NiMMbus_Test_Pages);
	document.getElementById("front-welcome-text-subtitle").innerHTML=DonaCadenaJSON({cat: "Test per a mostrar l'�s de l'API JavaScript i el Widget de NiMMbus per crear i mostrar valoracions",
				spa: "Test para mostrar el uso del API JavaScript y el Widget de NiMMbus per crear y mostrar valoraciones", 
				eng: "Test to show JavaScrip API and NiMMbus widget use to create and recover feedbacks"});
	document.getElementById("welcome-terms_of_use").innerHTML=DonaCadenaJSON(Msg_Terms_use);
	document.getElementById("welcome-privacy_statement").innerHTML=DonaCadenaJSON(Msg_Privacy_Statement);
	document.getElementById("welcome-last_updated").innerHTML="<i>"+DonaCadenaJSON(Msg_Last_Update)+": "+Terms_and_Privacy_Last_Updated+"</i>";	
	document.getElementById("front-language-lang").innerHTML=DonaCadenaJSON(Msg_small_Lang);
	document.getElementById("sign_in_resource_type").innerHTML=DonaCadenaJSON({cat: "Text de tipus de recurs:", spa: "Texto de tipo de recurso:", eng: "Resource type text:"});
	document.getElementById("sign_in_title").innerHTML=DonaCadenaJSON(Msg_Title)+':';
	document.getElementById("sign_in_code").innerHTML=DonaCadenaJSON(Msg_Identifier)+':';
	document.getElementById("sign_in_codespace").innerHTML=DonaCadenaJSON(Msg_Namespace)+':';
	document.getElementById("sign_in_btn").value=DonaCadenaJSON({cat: "Afegir/Revisar valoracions pr�vies", spa: "A�adir/Revisar valoraciones previas", eng: "Add/Review previous feedback items"});
	document.getElementById("clear_btn").value=DonaCadenaJSON({cat: "Buidar", spa: "Vaciar", eng: "Clear"});
}

// Test Widget Corine Example Page

function ChangeLanguageTestWidgetCorine(lang)
{
	var l_msg_here={cat: "aqu�", spa: "aqu�", eng: "here"};
	
	ActiveLanguage=lang;
	
	document.getElementById("head_title").innerHTML=DonaCadenaJSON({cat: "Test del NiMMbus Widget al CLC2012", spa: "Test del NiMMbus Widget en el CLC2012", eng: "NiMMbus Test Widget CLC2012"});
	document.getElementById("front-welcome-text-title").innerHTML=DonaCadenaJSON(Msg_NiMMbus_Test_Pages);
	document.getElementById("front-welcome-text-subtitle").innerHTML=DonaCadenaJSON({cat: "Exemple d'integraci� de l'API JavaScript i el Widget de NiMMbus a les metadades del Corine Land Cover 2012",
				spa: "Ejemplo de integraci�n del API JavaScript y el Widget de NiMMbus en los metadatos del Corine Land Cover 2012", 
				eng: "Example of JavaScrip API and NiMMbus widget integration in Corine Land Cover 2012 metadata"});
	document.getElementById("welcome-terms_of_use").innerHTML=DonaCadenaJSON(Msg_Terms_use);
	document.getElementById("welcome-privacy_statement").innerHTML=DonaCadenaJSON(Msg_Privacy_Statement);
	document.getElementById("welcome-last_updated").innerHTML="<i>"+DonaCadenaJSON(Msg_Last_Update)+": "+Terms_and_Privacy_Last_Updated+"</i>";	
	document.getElementById("front-language-lang").innerHTML=DonaCadenaJSON(Msg_small_Lang)
	
	document.getElementById("title").innerHTML=DonaCadenaJSON({cat: "<b>Exemple del Corine Land Cover 2012 amb el NiMMbus GUF widget</b>", spa: "<b>Ejemplo del Corine Land Cover 2012 con el NiMMbus GUF widget</b>", eng: "<b>Corine Land Cover 2012 with NiMMbus GUF widget example</b>"});	
	document.getElementById("explanation_1").innerHTML=DonaCadenaJSON({cat: "L'objectiu d'aquest exemple �s il�lustrar com incloure el mecanisme de valoracions d'usuari (GUF) als cat�legs d'una comunitat.", spa: "El objetivo de este ejemplo es ilustrar c�mo incluir el mecanismo de valoraciones de usuarios (GUF) en los cat�logos de una comunidad.", eng: "The objective of this example is to illustrate how to include the Geospatial User Feedback (GUF) mechanism in community catalogues."});
	document.getElementById("explanation_2").innerHTML=DonaCadenaJSON({cat: "Simularem l'exist�ncia d'un cat�leg que podem manipular utilitzant les metadades Corine Land Cover 2012 (extret de",
		spa: "Simularemos la existencia de un cat�logo que podemos manipular utilizando los metadatos de Corine Land Cover 2012 (extra�dos de",
		eng: "We will simulate the existence of a catalogue that we can manipulate using the Corine Land Cover 2012 metadata (extracted from"})+" Copernicus Land Service <a href=\"https://land.copernicus.eu/pan-european/corine-land-cover/clc-2012?tab=metadata\" target=\"_blank\">"+DonaCadenaJSON(l_msg_here)+"</a>).";
	document.getElementById("explanation_3").innerHTML=DonaCadenaJSON({cat: "A continuaci�, a la <u style=\"background-color: #E8E8E8;\">part esquerra</u>, podeu veure les metadades extretes del cat�leg i disponibles a",
		spa: "A continuaci�n, en el <u style=\"background-color: #E8E8E8;\">lado izquierdo</u>, puede ver los metadatos extra�dos del cat�logo y disponibles en",
		eng: "Below, on the <u style=\"background-color: #E8E8E8;\">left side</u>, you can see the metadata extracted from the catalogue and available in"})+" <a href=\"test_widget_corine_original.htm\" target=\"_blank\">test_widget_corine_original.htm</a>.";		
	document.getElementById("explanation_4").innerHTML=DonaCadenaJSON({cat: "A la <u style=\"background-color: #D6F7FA;\">part dreta</u>, podeu veure la p�gina de metadades modificada per incloure el widget GUF, disponible a", 
		spa: "En el <u style=\"background-color: #D6F7FA;\">lado derecho</u>, puede ver la p�gina de metadatos modificados para incluir el widget GUF, disponible en", 
		eng: "On the <u style=\"background-color: #D6F7FA;\">right side</u> you can see the modified metadata page to include GUF widget, available in"})+" <a href=\"test_widget_corine_wt_guf.htm\" target=\"_blank\">test_widget_corine_wt_guf.htm</a>.";
	document.getElementById("explanation_5").innerHTML=DonaCadenaJSON({cat: "Les instruccions per integrar el GUF es poden trobar a la ", spa: "Las instrucciones para integrar el GUF se pueden encontrar en la ", eng: "The instructions to integrate the GUF can be found in the "})+" <a href=\"https://github.com/joanma747/nimmbus/tree/master/GUF_integration\" target=\"_blank\">"+DonaCadenaJSON({cat: "p�gina d'Integraci� del NiMMbus a GitHub", spa: "p�gina de Integraci�n del NiMMbus en GitHub", eng: "NiMMbus integration GitHub page"})+"</a>.";
	document.getElementById("explanation_6").innerHTML=DonaCadenaJSON({cat: "Aquest exemple va ser l'exercici del \"Tema 5 - Integraci� de valoracions d'usuaris aplicats a recursos\" al Segon Esdeveniment de Formaci� NextGEOSS (11 de setembre de 2018, Ginebra). M�s informaci� sobre aquest exercici ", spa: "Este ejemplo fue el ejercicio del \"Tema 5 - Integraci�n de las valoraciones de usuarios aplicada a los recursos\" en el Segundo Evento de Formaci�n NextGEOSS (11 de septiembre de 2018, Ginebra). M�s informaci�n sobre este ejercicio ", eng: "This example was the hands-on for the \"Topic 5 - Integration of geospatial user feedback applied to resources\" in the Second NextGEOSS Training event (11th September 2018, Geneva). More information about this hands-on "})+"<a href=\"https://github.com/ec-nextgeoss/nextgeoss-training-user-feedback/\" target=\"_blank\">"+DonaCadenaJSON(l_msg_here)+"</a>.";
}
