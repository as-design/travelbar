/*
 * This is the main file of the travelbar-plugin for ff 
 * 
 * @author	Andreas Schroeder
 * @date	07.06.2012
 *
 * 〈Namespace〉 Travelbar. 
 */  
if (typeof Travelbar == "undefined") {  
	var Travelbar = {	

		isloadedXMLForMitfahr : false,
		
		getDBConn : function() {
			return this.dbConn;
		},

		setDBConn : function(conn) {
			this.dbConn = conn;
		},
		
		getID : function() {
			return this.id;
		},

		setID : function(id) {
			this.id = id;
		},

        getCitiesForAutocomplete : function(){
            var cities= ["Aachen", "Aalen", "Achern", "Ahlen", "Ahrensburg", "Albstadt", "Alsfeld", "Altenburg", "Altenkirchen/Westerw.", "Altötting", "Alzey", "Amberg", "Andernach", "Anklam", "Annaberg-Buchholz", "Ansbach", "Arnsberg", "Arnstadt", "Aschaffenburg", "Aschersleben", "Aue (Sachsen)", "Augsburg", "Aurich", "Backnang", "Bad Füssing", "Bad Gandersheim", "Bad Hersfeld", "Bad Homburg", "Bad Kissingen", "Bad Kreuznach", "Bad Nauheim", "Bad Neustadt/Saale", "Bad Oeynhausen", "Bad Pyrmont", "Bad Reichenhall", "Bad Salzuflen", "Bad Segeberg", "Bad Tölz", "Baden-Baden", "Balingen", "Bamberg", "Bautzen", "Bayreuth", "Bayrischzell", "Beckum", "Bensheim", "Berchtesgaden", "Bergheim", "Bergisch Gladbach", "Berlin", "Berlin Flughafen Schönefeld", "Berlin Flughafen Tegel", "Bernau (bei Berlin)", "Bernau am Chiemsee", "Bernburg/ Saale", "Biberach/Riss", "Bielefeld", "Bietigheim-Bissingen", "Bingen am Rhein", "Bitburg", "Bitterfeld-Wolfen", "Böblingen", "Bocholt", "Bochum", "Bonn", "Borken (NRW)", "Bottrop", "Brandenburg/ Havel", "Braunschweig", "Bremen", "Bremerhaven", "Brilon", "Bruchsal", "Brühl", "Buchholz i.d. Nordheide", "Bühl (BW)", "Burg (bei Magdeburg)", "Buxtehude", "Calw", "Castrop-Rauxel", "Celle", "Cham", "Chemnitz", "Clausthal-Zellerfeld", "Cloppenburg", "Coburg", "Coesfeld", "Cottbus", "Crailsheim", "Cuxhaven", "Dachau", "Darmstadt", "Daun", "Deggendorf", "Delmenhorst", "Dessau", "Detmold", "Diepholz", "Dillenburg", "Dingolfing", "Dinslaken", "Döbeln", "Donaueschingen", "Donauwörth", "Dorsten", "Dortmund", "Dresden", "Duisburg", "Dülmen", "Düren", "Düsseldorf", "Eberswalde-Finow", "Eckernförde", "Eichstätt", "Eisenach", "Eisenhüttenstadt", "Elmshorn", "Emden", "Emmendingen", "Erding", "Erftstadt", "Erfurt", "Erkelenz", "Erkrath", "Erlangen", "Eschwege", "Eschweiler", "Essen", "Esslingen/ Neckar", "Ettlingen", "Euskirchen", "Eutin", "Fehmarn", "Filderstadt", "Finsterwalde", "Flensburg", "Flughafen Hahn", "Flughafen Karlsruhe/Baden", "Flughafen Weeze", "Föhr", "Forchheim", "Frankenthal/ Pfalz", "Frankfurt/Main", "Frankfurt/Main Flughafen", "Frankfurt/Oder", "Frechen", "Freiberg/Sachsen", "Freiburg/ Breisgau", "Freising", "Freital", "Freudenstadt", "Friedrichshafen", "Fulda", "Fürstenfeldbruck", "Fürstenwalde/ Spree", "Fürth", "Furtwangen", "Füssen", "Garbsen", "Garmisch-Partenkirchen", "Geldern", "Gelnhausen", "Gelsenkirchen", "Gemünden a.Main", "Gera", "Geretsried", "Germering", "Germersheim", "Gießen", "Gifhorn", "Gladbeck", "Göppingen", "Görlitz", "Goslar", "Gotha", "Göttingen", "Greifswald", "Greiz", "Grevenbroich", "Grimma", "Gronau/ Westfalen", "Guben", "Gummersbach", "Güstrow", "Gütersloh", "Hagen", "Halberstadt", "Halle/ Saale", "Haltern", "Hamburg", "Hamburg Flughafen", "Hameln", "Hamm", "Hanau", "Hannover", "Hannover Flughafen", "Hattingen (NW)", "Heide", "Heidelberg", "Heidenheim/ Brenz", "Heilbronn", "Heinsberg", "Helmstedt", "Hennef/ Sieg", "Herford", "Herne", "Herrenberg", "Herten", "Herzogenrath", "Hilden", "Hildesheim", "Hof", "Hofheim/ Taunus", "Holzkirchen", "Homburg", "Horb a.N.", "Höxter", "Hoyerswerda", "Hürth", "Husum", "Ibbenbüren", "Idar-Oberstein", "Idstein", "Ilmenau", "Ingolstadt", "Iserlohn", "Itzehoe", "Jena", "Jülich", "Kaarst", "Kaiserslautern", "Kaltenkirchen", "Kamen", "Kamenz", "Kamp-Lintfort", "Karlsruhe", "Kassel", "Kaufbeuren", "Kehl/Rhein", "Kelheim", "Kempen", "Kempten/Allg.", "Kerpen", "Kiel", "Kirchheim unter Teck", "Kitzingen", "Kleve", "Koblenz", "Köln", "Köln Bonn Flughafen", "Königs Wusterhausen", "Königswinter", "Konstanz", "Korbach", "Köthen/ Anhalt", "Krefeld", "Kronach", "Kulmbach", "Künzelsau", "Laatzen", "Lage", "Lahr/ Schwarzwald", "Landau/ Pfalz", "Landsberg am Lech", "Landshut", "Langenfeld/ Rheinland", "Langenhagen", "Lauchhammer", "Lauf a. d. Pegnitz", "Leer", "Lehrte", "Leinefelde-Worbis", "Leinfelden-Echterdingen", "Leipzig", "Leipzig-Halle Flughafen", "Lemgo", "Lenggries", "Leonberg (BW)", "Leverkusen", "Limburg/ Lahn", "Lindau (Bodensee)", "Lingen/ Ems", "Lippstadt", "Löbau (Sachsen)", "Löhne", "Lohr am Main", "Lörrach", "Lübben", "Lübeck", "Luckenwalde", "Lüdenscheid", "Ludwigsburg", "Ludwigsfelde", "Ludwigshafen/ Rhein", "Ludwigslust", "Lüneburg", "Lünen", "Lutherstadt Eisleben", "Lutherstadt Wittenberg", "Magdeburg", "Maintal", "Mainz", "Mannheim", "Marburg", "Marktredwitz", "Marl", "Mayen", "Meerbusch", "Meersburg", "Meiningen", "Meißen", "Melle", "Memmingen", "Menden/ Sauerland", "Meppen", "Merseburg/ Saale", "Merzig", "Meschede", "Mettmann", "Michelstadt", "Minden", "Mittweida", "Moers", "Mölln", "Mönchengladbach", "Monheim (NW)", "Montabaur", "Mosbach (Baden)", "Mühlhausen (Thür.)", "Mülheim/ Ruhr", "München", "München Flughafen", "Münster", "Naumburg/ Saale", "Neu-Isenburg", "Neu-Ulm", "Neubrandenburg", "Neuburg/Donau", "Neumarkt/ Oberpfalz", "Neumünster", "Neunkirchen/Saar", "Neuruppin", "Neuss", "Neustadt a.d. Aisch", "Neustadt/ Rübenberge", "Neustadt/ Weinstraße", "Neustrelitz", "Neuwied", "Nienburg/Weser", "Norden", "Norderstedt", "Nordhausen", "Nordhorn", "Nördlingen", "Nortorf", "Nürburgring", "Nürnberg", "Nürtingen", "Oberhausen", "Oberstdorf", "Oberursel/ Taunus", "Offenbach/ Main", "Offenburg", "Oldenburg (Oldb)", "Olpe", "Oranienburg", "Osnabrück", "Paderborn", "Papenburg", "Parchim", "Pasewalk", "Passau", "Peine", "Perleberg", "Pfaffenhofen/Ilm", "Pfarrkirchen", "Pforzheim", "Pinneberg", "Pirmasens", "Pirna", "Plauen", "Porta Westfalica", "Potsdam", "Prenzlau", "Pulheim", "Quedlinburg", "Radebeul", "Radolfzell", "Rastatt", "Ratingen", "Ravensburg", "Recklinghausen", "Regensburg", "Remscheid", "Rendsburg", "Reutlingen", "Rheda-Wiedenbrück", "Rheine", "Ribnitz-Damgarten", "Riesa", "Rodgau", "Rosenheim", "Rostock", "Rotenburg/Wümme", "Rothenburg/Tauber", "Rottenburg/ Neckar", "Rottweil", "Rügen", "Rüsselsheim", "Saalfeld/Saale", "Saarbrücken", "Saarlouis", "Salzgitter", "Salzwedel", "Sandersleben", "Sangerhausen", "Sankt Augustin", "Sankt Ingbert", "Sankt Peter-Ording", "Schleiden", "Schleiz", "Schleswig", "Schmalkalden", "Schönebeck/ Elbe", "Schorndorf", "Schwabach", "Schwäbisch Gmünd", "Schwäbisch Hall", "Schwedt/ Oder", "Schweinfurt", "Schwerin", "Schwerte", "Senftenberg", "Siegburg", "Siegen", "Sigmaringen", "Sindelfingen", "Singen/ Hohentwiel", "Sinsheim", "Soest", "Solingen", "Soltau", "Sömmerda", "Speyer", "Stade", "Starnberg", "Steinfurt", "Stendal", "Stolberg/ Rheinland", "Stralsund", "Straubing", "Stuttgart", "Stuttgart Flughafen", "Suhl", "Sylt", "Tauberbischofsheim", "Tegernsee", "Torgau", "Traunstein", "Trier", "Troisdorf", "Tübingen", "Tuttlingen", "Überlingen", "Uelzen", "Ulm", "Unna", "Usedom", "Vechta", "Velbert", "Verden (Aller)", "Viersen", "Villingen-Schwenningen", "Völklingen", "Waiblingen", "Waldshut-Tiengen", "Wangen (Allgäu)", "Warburg", "Waren (Müritz)", "Warendorf", "Wasserburg am Inn", "Weiden/ Oberpfalz", "Weilheim in Oberbayern", "Weimar", "Weingarten (Württ.)", "Weinheim", "Weißenburg/Bay.", "Weißenfels", "Weißwasser", "Wermelskirchen", "Wernigerode", "Wesel", "Wetzlar", "Wiesbaden", "Wilhelmshaven", "Willich", "Winterberg", "Wismar", "Witten", "Wittlich", "Wittstock/Dosse", "Wolfenbüttel", "Wolfsburg", "Worms", "Wunstorf", "Wuppertal", "Würselen", "Würzburg", "Zeitz", "Zittau", "Zweibrücken", "Zwickau", "Zwiesel"];
            var result = "[";
            var i;
            for (i=0; i<cities.length-1; i++) {
                result = result+'{"value":"' + cities[i]+'"},';
            }
            result = result+'{"value":"' + cities[cities.length-1]+'"}]';
            return result;
        },
		
		getPlatform : function() {
			return this.platform;
		},
		
		setPlatform : function(platform) {
			document.getElementById("travelbar_travellist").setAttribute("image","chrome://travelbar/skin/"+platform+".png");
			document.getElementById("travelbar_travellist").setAttribute("label"," "+platform+" ");

            var vonElem = document.getElementById("travelbar_vonTextbox");
            var nachElem = document.getElementById("travelbar_nachTextbox");
			var tmpVon = vonElem.value;
			var tmpNach = nachElem.value;

			if(platform=="mitfahrgelegenheit"){
				vonElem.setAttribute("type","autocomplete");
				vonElem.setAttribute("autocompletesearch","basic-autocomplete");
				nachElem.setAttribute("type","autocomplete");
				nachElem.setAttribute("autocompletesearch","basic-autocomplete");
				citiesForAutocomplete = this.getCitiesForAutocomplete();
				vonElem.setAttribute("autocompletesearchparam",citiesForAutocomplete);
				nachElem.setAttribute("autocompletesearchparam",citiesForAutocomplete);
			}else{
				vonElem.removeAttribute("type");
				vonElem.removeAttribute("autocompletesearch");
				nachElem.removeAttribute("type");
				nachElem.removeAttribute("autocompletesearch");
			}
			
			vonElem.setAttribute("value", tmpVon);
			nachElem.setAttribute("value", tmpNach);

			this.platform = platform;
		},
		

		/**
		 * Opens the database, loads the favourites and adds the button for toogling the toolbar
		 */
		onLoad : function() {
			// initialization code
			Travelbar.initialized = true;		
			Travelbar.openDB();
			Travelbar.createTravellist();
			Travelbar.loadFavourites();
			Travelbar.loadPlatform();
			Travelbar.addButton();
			window.addEventListener("unload", Travelbar.onUnload, false);
		},
		
		/**
		 * Opens the database, loads the favourites and adds the button for toogling the toolbar
		 */
		onUnload : function() {
			Travelbar.runStatement("UPDATE configuration SET onload='"+Travelbar.getPlatform()+"'");
		},

		/**
		 * Starts the search if enter was pressed
		 * 
		 * @param event
		 */
		sucheEnter : function(event) {
			if (event.keyCode == 13) {
				this.sucheStart();
			}else{
				if(Travelbar.getPlatform() == "mitfahrgelegenheit"){
					var searchString = event.target.value;
				}
			}
		},

		/**
		 * Gets all information from the toolbar-elements, starts the search and opens a specific url in a new tab
		 */
		sucheStart : function() {
			var timepicker = document.getElementById('travelbar_timepicker');
			var datepicker = document.getElementById('travelbar_datepicker');
			
			var von = document.getElementById("travelbar_vonTextbox").value;
			var nach = document.getElementById("travelbar_nachTextbox").value;
			var hours = timepicker.hour;
			var minutes = timepicker.minute;
			var day = datepicker.date;
			var month = (datepicker.month + 1);
			var year = datepicker.year;
			this.suche(von, nach, hours, minutes, day, month, year);
		},
		
		suche : function(von, nach, hours, minutes, day, month, year) {
			var site = null;
			
			// Needed for security (GET)
			von = encodeURIComponent(von);
			nach = encodeURIComponent(nach);

			if (Travelbar.getPlatform() == "bsag") {
				var bsag = "http://62.206.133.180/bsag/XSLT_TRIP_REQUEST2";
				var bsagparams = "language=de&itdLPxx_transpCompany=bsag&"
						+ "useRealtime=1&place_origin=Bremen&"
						+ "place_destination=Bremen&type_origin=stop&type_destination=stop&"
						+ "nameState_origin=empty&nameState_destination=empty&"
						+ "name_origin=" + von + "&name_destination=" + nach + "&"
						+ "itdTripDateTimeDepArr=dep&" + "itdTimeHour=" + hours
						+ "&itdTimeMinute=" + minutes + "&" + "itdDateDay=" + day
						+ "&itdDateMonth=" + month + "&itdDateYear=" + year + "&"
						+ "simple.x=49&simple.y=16";
				var bsagfahren = bsag + "?" + bsagparams;
				site = bsagfahren;
			}
			if (Travelbar.getPlatform() == "bahn") {
				var bahn = "http://reiseauskunft.bahn.de/bin/query.exe/dn";
				var bahnparams = "S=" + von + "&Z=" + nach + "&time=" + hours
						+ "%3A" + minutes + "&date=" + day + "." + month + "."
						+ year + "&start=1";
				var bahnfahren = bahn + "?" + bahnparams;
				site = bahnfahren;
			}
			if (Travelbar.getPlatform() == "maps.google") {
				var google = "http://maps.google.de/maps";
				var googleparams = "f=d&source=s_d&saddr=" + von + "&daddr=" + nach;
				var googlefahren = google + "?" + googleparams;
				site = googlefahren;
			}
			if (Travelbar.getPlatform() == "vbn") {
				var vbn = "http://www.fahrplaner.de/hafas/query.exe/dn";
				var vbnparams = "S=" + von + "&Z=" + nach + "&time=" + hours
						+ "%3A" + minutes + "&date=" + day + "." + month + "."
						+ year + "&start=OK";
				var vbnfahren = vbn + "?" + vbnparams;
				site = vbnfahren;
			}
			if (Travelbar.getPlatform() == "mitfahrgelegenheit") {
				if(!Travelbar.isloadedXMLForMitfahr){
					Travelbar.loadXMLForMitfahr();
				}else{
					var mitfahr = "http://www.mitfahrgelegenheit.de/mitfahrzentrale/Bremen/Hamburg.html?city_from="
						+ encodeURIComponent(this.getIDofCity(von))
						+ "&radius_from=0&city_to="
						+ encodeURIComponent(this.getIDofCity(nach))
						+ "&radius_to=0&date=date&day="
						+ day
						+ "&month="
						+ month
						+ "&year="
						+ year
						+ "&tolerance=0&";
					site = mitfahr;
				}
			}
			if(site!=null){
				var newTab = gBrowser.selectedTab = gBrowser.addTab(site);
				gBrowser.getBrowserForTab(newTab);
			}
		},
		
		/**
		 * Searchs for the id of a city (Mitfahrgelegenheit.de)
		 * 
		 * @param city
		 * @returns the id of the city; 0 if not found
		 */
		getIDofCity : function(city) {
			if(Travelbar.xmlDoc !="undefined"){
				var elems = this.xmlDoc.getElementsByTagName("select");
				for ( var i = 0; i < elems.length; i++) {
					if (elems[i].getAttribute("name") == "city_from") {
						var nodes = elems[i].childNodes;
						for ( var j = 0; j < nodes.length; j++) {
							if (encodeURIComponent("" + nodes[j].text).toLowerCase() == city
									.toLowerCase()) {
								return nodes[j].getAttribute("value");
							}
						}
					}
				}	
			}
			return 0;
		},

		/**
		 * Loads the xml for searching the city (Mitfahrgelegenheit.de)
		 */
		loadXMLForMitfahr : function() {			
			var request = new XMLHttpRequest();
			request.addEventListener("load", transferComplete, false);  
			request.open("GET",
					"http://www.mitfahrgelegenheit.de/searches/search_national",
					true);
			request.send();

			function transferComplete(evt) {  
				var parser = new DOMParser();
				Travelbar.xmlDoc = parser.parseFromString(request.responseText, "text/html");
				Travelbar.isloadedXMLForMitfahr = true;
				Travelbar.sucheStart();
			}  
		},

		/*
		 * Creates the database and set the connection for later use
		 */
		openDB : function() {
			var file = Components.classes["@mozilla.org/file/directory_service;1"]
					.getService(Components.interfaces.nsIProperties).get("ProfD",
							Components.interfaces.nsIFile);

			file.append("travelbar.sqlite");

			var storageService = Components.classes["@mozilla.org/storage/service;1"]
					.getService(Components.interfaces.mozIStorageService);

			var dbConn = storageService.openDatabase(file);
			var statement;
			
			this.setDBConn(dbConn);

			// Configuration Version 2
			if (!this.getDBConn().tableExists("configuration")) {
				this.getDBConn()
						.executeSimpleSQL(
								"CREATE TABLE configuration (ID INTEGER PRIMARY KEY, version INTEGER, onload STRING)");
				statement = this.getDBConn()
						.createStatement(
								"INSERT INTO configuration (version, onload) VALUES (2,'bahn')");
				this.runQuery(statement);
				// For older versions
				if (this.getDBConn().tableExists("favourites")) {
					this.getDBConn().executeSimpleSQL("DROP TABLE favourites");
				}
			}
			
			// for older Configuration Version
			if (this.getDBConn().tableExists("configuration")) {
				statement = this.getDBConn().createStatement(
				"SELECT * FROM configuration");
				if(statement.step()){
					
					//----------Configuration Version 1-----------//
					if(statement.row.version == 1){
						Travelbar.runStatement("UPDATE configuration SET version=2");
						if(this.getDBConn().tableExists("favourites")){
							var changeStatement = this.getDBConn().createStatement(
							"SELECT * FROM favourites");
								while (changeStatement.step()) {
									if(changeStatement.row.platform =="mitfahr"){
										var statement = this.getDBConn().createStatement("UPDATE favourites SET platform ='mitfahrgelegenheit' WHERE ID=:id");
										statement.params.id = changeStatement.row.ID;
										this.runQuery(statement);
									}
									if(changeStatement.row.platform =="google"){
										var statement = this.getDBConn().createStatement("UPDATE favourites SET platform ='maps.google' WHERE ID=:id");
										statement.params.id = changeStatement.row.ID;
										this.runQuery(statement);
									}
								}
							}
					}
					//-----------------------------------------//
					
				}
			}

			// Favourites Version 1
			if (!this.getDBConn().tableExists("favourites")) {
				this.getDBConn()
						.executeSimpleSQL(
								"CREATE TABLE favourites (ID INTEGER PRIMARY KEY, favname STRING, start STRING, destination STRING, directsearch BOOLEAN, directtime BOOLEAN, time STRING, platform STRING)");
				// Insert a example
				statement = this.getDBConn()
				.createStatement(
						"INSERT INTO favourites (favname, start, destination, platform) VALUES ('Beispielfavorit','Bremen','Hamburg','bahn')");
				this.runQuery(statement);
			}
		},

		/**
		 * Creates and runs a statement
		 * @param stmt String of the statement to create and run
		 */
		runStatement : function(stmt) {
			var statement = this.getDBConn().createStatement(stmt);
			this.runQuery(statement);
		},

		/**
		 * Runs a statement
		 * 
		 * @param stmt Statement to run
		 */
		runQuery : function(stmt) {
			try {
				while (stmt.step()) {
					// Ausführung der Query
				}
			} finally {
				stmt.reset();
			}
		},

		/**
		 * Puts all platforms to the toolbarlist 
		 */
		createTravellist: function() {
			var menupopup = document.getElementById("travelbar_travelpopup");
			var platformen = ["bahn", "bsag", "mitfahrgelegenheit", "maps.google", "vbn"];
			
			for (var i=0; i<platformen.length; i++) {
				var plat = platformen[i];
				var menuitem = document.createElement("menuitem");
				menuitem.setAttribute("value", plat);
				menuitem.addEventListener("click", function(event) {
					Travelbar.setPlatform(event.target.value);
				}, false);
				
				var image = document.createElement("image");
				image.setAttribute("src", "chrome://travelbar/skin/"+plat+".png");
				menuitem.appendChild(image);
				
				var label = document.createElement("label");
				label.setAttribute("value", "  "+plat);
				menuitem.appendChild(label);
				
				menupopup.appendChild(menuitem);
			}
		},
		
		/**
		 * Loads all favourites from the database and puts them into the toolbar
		 */
		loadFavourites : function() {
			// Clear menupopups 
			var fav1 = document.getElementById("travelbar.favpopup1");
			while(fav1.firstElementChild!=null){
				fav1.removeChild(fav1.firstElementChild);
			}
			
			var fav2 = document.getElementById("travelbar.favpopup2");
			if(fav2!=null){
				while(fav2.firstElementChild!=null){
					fav2.removeChild(fav2.firstElementChild);
				}
			}
			
			// Fill Menupopups
			var statement = this.getDBConn().createStatement(
					"SELECT * FROM favourites ORDER BY platform ASC, favname COLLATE NOCASE ASC");
			try {
				while (statement.step()) {
					// Menupop 1
					var menuitem1 = document.createElement("menuitem");
					
					menuitem1.setAttribute("value", statement.row.ID);
					menuitem1.addEventListener("command", function(event) {
						event.stopPropagation();
					}, false);
					menuitem1.addEventListener("click", function(event) {
						if(event.button==0){
							Travelbar.loadFavourite(event.target.value, false);
						}
						if(event.button==1||2){
							Travelbar.openCont(event.target);
						}
					}, false);
					
					var image = document.createElement("image");
					image.setAttribute("src", "chrome://travelbar/skin/"+statement.row.platform+".png");
					menuitem1.appendChild(image);
					
					var label = document.createElement("label");
					label.setAttribute("value", "  "+statement.row.favname);
					menuitem1.appendChild(label);
					
					fav1.appendChild(menuitem1);
					
					// Menupop 2 (without edit/delete function)
					if(fav2!=null){
						var menuitem2 = document.createElement("menuitem");
		
						menuitem2.setAttribute("value", statement.row.ID);
						menuitem2.addEventListener("command", function(event) {
							event.stopPropagation();
						}, false);
						menuitem2.addEventListener("click", function(event) {
							if(event.button==0){
								Travelbar.loadFavourite(event.target.value, true);
							}
							
						}, false);
						
						var image = document.createElement("image");
						image.setAttribute("src", "chrome://travelbar/skin/"+statement.row.platform+".png");
						menuitem2.appendChild(image);
						
						var label = document.createElement("label");
						label.setAttribute("value", "  "+statement.row.favname);
						menuitem2.appendChild(label);
						
						fav2.appendChild(menuitem2);
					}
				}
				/*
				 * menuseparator = document.createElement("menuseparator");
				 * menupopup.appendChild(menuseparator); menuitem =
				 * document.createElement("menuitem");
				 * menuitem.setAttribute("label","Favouriten verwalten");
				 * menupopup.appendChild(menuitem);
				 */
			} finally {
				statement.reset();
			}
		},

		/**
		 * Loads the platform from the db last used
		 */
		loadPlatform : function() {
			var st = Travelbar.getDBConn().createStatement("SELECT * FROM configuration");
			if(st.step()){
				Travelbar.setPlatform(""+st.row.onload);
			}
		},
		
		/**
		 * Opens a menue for editing or deleting a favorite 
		 * 
		 * @param menuitem the favourite
		 */
		openCont : function(menuitem) {
			var panel = document.getElementById("travelbar_search_start");

			var item = document.getElementById("travelbar_loeschen");
			item.setAttribute("value", menuitem.value);
			item = document.getElementById("travelbar_bearbeiten");
			item.setAttribute("value", menuitem.value);

			panel.openPopup(menuitem, "end_before", 0, -1, true, false);
		},
		
		/**
		 * Sets the ID to 0 for new entry and opens the window to save a new favourite
		 */
		addFavourite : function() {
			Travelbar.setID(0);
			window.open("chrome://travelbar/content/edit-window.xul",
					"edit-window", "chrome,centerscreen");
		},

		/**
		 * Set the id to the favourite to edit and opens the window to edit the favourite
		 * 
		 * @param id of the favourite
		 */
		bearbeiten : function(id) {
			Travelbar.setID(id);
			window.open("chrome://travelbar/content/edit-window.xul",
					"edit-window", "chrome,centerscreen");
		},

		/**
		 * Deletes a favourite
		 * 
		 * @param id of the favourite
		 */
		
		loeschen : function(id) {
			var favname = "";

			var statement = this.getDBConn().createStatement(
					"SELECT * FROM favourites WHERE ID=:id");
			statement.params.id = id;
			try {
				while (statement.step()) {
					favname = statement.row.favname;
				}
			} finally {
				statement.reset();
			}
			
			var stringbundle = document.getElementById("travelbar-strings");
			var delete1 =stringbundle.getString("travelbar.deletefavourite1");
			var delete2 =stringbundle.getString("travelbar.deletefavourite2");

			if (confirm(delete1+ " \"" + favname + "\" "+ delete2)) {
				statement = this.getDBConn().createStatement(
						"DELETE FROM favourites WHERE ID=:id");
				statement.params.id = id;
				this.runQuery(statement);
				this.loadFavourites();
			}
		},

		/**
		 * Loads a favourite
		 * 
		 * @param id of the favourite
		 * @param quiet (without opening the toolbar)
		 */
		loadFavourite : function(id, quiet) {
			var statement = this.getDBConn().createStatement(
					"SELECT * FROM favourites WHERE ID=" + id);
			try {
				while (statement.step()) {
					var toolbar = document.getElementById("travelbar-toolbar");
					if(quiet && statement.row.directsearch=="true" && toolbar.collapsed){
						var von = statement.row.start;
						var nach = statement.row.destination;
						var today = new Date(); 
						var hours, minutes;
						
						if (statement.row.directtime=="true") {
							var timepicker = document.getElementById("travelbar_timepicker");
							var tmp = timepicker.value;
							timepicker.value = statement.row.time;
							hours = timepicker.hour;
							minutes = timepicker.minute;
							timepicker.value = tmp;
						}else{
							hours = today.getHours();
							minutes = today.getMinutes();
						}
						var day = today.getDate();
						var month = (today.getMonth() + 1);
						var year = today.getFullYear();
						if(statement.row.platform!=null){
							this.setPlatform(statement.row.platform);
						}

						this.suche(von, nach, hours, minutes, day, month, year);

					}else{
						if(quiet){
							if(toolbar.collapsed){
								this.toogleBar();
							}
						}
						var vonTextbox = document.getElementById("travelbar_vonTextbox");
						var nachTextbox = document.getElementById("travelbar_nachTextbox");
						var timepicker = document.getElementById("travelbar_timepicker");
						vonTextbox.value = statement.row.start;
						nachTextbox.value = statement.row.destination;
						if (statement.row.directtime=="true") {
							timepicker.value = statement.row.time;
						}
						if(statement.row.platform!=null){
							this.setPlatform(statement.row.platform);
						}
						if (statement.row.directsearch=="true") {
							this.sucheStart();
						}
					}

				}
			} finally {
				statement.reset();
			}
		},

		/**
		 * Removes all items from a list
		 * 
		 * @param list
		 */
		removeAllItems : function(list) {
			while (list.itemCount > 0) {
				list.removeItemAt(0);
			}
		},

		lookup : function(event) {
			var panel = document.getElementById("travelbar_start-panel");
			var tb = document.getElementById("travelbar_vonTextbox");
			var list = document.getElementById("travelbar_search_start");

			var statement = this.getDBConn().createStatement(
					"SELECT name FROM searches WHERE name LIKE '"
							+ event.target.value + "%'");
			try {
				while (statement.step()) {
					list.appendItem(statement.row.name, "");
				}
			} finally {
				statement.reset();
			}
			panel.openPopup(tb, "after_start", 0, 0, false, false);
			document.getElementById("travelbar_vonTextbox").focus();
		},

		/**
		 * Switches a arguments source and destination
		 */
		switchBoth : function() {
			var vonTextbox = document.getElementById("travelbar_vonTextbox");
			var nachTextbox = document.getElementById("travelbar_nachTextbox");

			var temp = vonTextbox.value;
			vonTextbox.value = nachTextbox.value;
			nachTextbox.value = temp;
		},

		/**
		 * Adds a button to firefox for toogling the toolbar
		 */
		addButton : function() {
			var toolbox = document.getElementById("navigator-toolbox");

			var toolboxDocument = toolbox.ownerDocument;
			var hasmyPageButton = false;

			for ( var i = 0; i < toolbox.childNodes.length; ++i) {
				var toolbar = toolbox.childNodes[i];
				if (toolbar.localName == "toolbar"
						&& toolbar.getAttribute("customizable") == "true") {
					if (toolbar.currentSet.indexOf("travelbar-toolbar-button") > -1)
						hasmyPageButton = true;
				}
			}

			if (!hasmyPageButton) {
				for ( var i = 0; i < toolbox.childNodes.length; ++i) {
					var toolbar = toolbox.childNodes[i];

					if (toolbar.localName == "toolbar"
							&& toolbar.getAttribute("customizable") == "true"
							&& toolbar.id == "nav-bar") {
						var newSet = "";
						var child = toolbar.firstChild;
						while (child) {
							if (!hasmyPageButton
									&& (child.id == "travelbar-toolbar-button" || child.id == "urlbar-container")) {
								newSet += "travelbar-toolbar-button,";
								hasmyPageButton = true;
							}
							newSet += child.id + ",";
							child = child.nextSibling;
						}
						newSet = newSet.substring(0, newSet.length - 1);
						toolbar.currentSet = newSet;

						toolbar.setAttribute("currentset", newSet);
						toolboxDocument.persist(toolbar.id, "currentset");
						BrowserToolboxCustomizeDone(true);

						break;
					}
				}
			}
		},

		/**
		 * Shows or hides the toolbar and saves the status permanent
		 */
		toogleBar : function() {
			var toolbar = document.getElementById("travelbar-toolbar");
			toolbar.collapsed = !toolbar.collapsed;
			document.persist("travelbar-toolbar", "collapsed");
			var now = new Date();
			document.getElementById("travelbar_timepicker").value = now.getHours() + ":"
					+ now.getMinutes();
			document.getElementById("travelbar_datepicker").value = now.getFullYear() + "-"
					+ (now.getMonth() + 1) + "-" + now.getDate();
		}
	}
};

window.addEventListener("load", Travelbar.onLoad, false);
