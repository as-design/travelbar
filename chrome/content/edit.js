/*
 * This is the file to edit and create new favourites of the travelbar-plugin for ff 
 * 
 * @author	Andreas Schroeder
 * @date	07.06.2012
 */

if (typeof Travelbar == "undefined") {
	Travelbar = {};
}
if (typeof Travelbar.Edit == "undefined") {
	Travelbar.Edit = {
		/**
		 * Updates a favorite in the database
		 */
		updateFavorit: function()
		{
			var favname = document.getElementById("travelbar_edit_nameFavorit").value;
			var start = document.getElementById("travelbar_edit_vonFavorit").value;
			var destination = document.getElementById("travelbar_edit_nachFavorit").value;
			var directsearch;
			if(document.getElementById("travelbar_edit_directsearch").checked){
				directsearch = "true";
			}else{
				directsearch = "false";
			}
			
			var directtime;
			if(document.getElementById("travelbar_edit_directtime").checked){
				directtime = "true";
			}else{
				directtime = "false";
			}
			
			var time = document.getElementById("travelbar_edit_timepicker").value;
			var platform = document.getElementById("travelbar_edit_travellist").selectedItem.value;
			var id = window.opener.Travelbar.getID();
			var statement;
			
			if(id>0){
				statement = window.opener.Travelbar.getDBConn().createStatement("UPDATE favourites SET favname=:favname, start=:start, destination=:destination, " +
						"directsearch=:directsearch, directtime=:directtime, time =:time, platform =:platform WHERE ID=:id");
			}else{
				statement = window.opener.Travelbar.getDBConn().createStatement("INSERT INTO favourites (favname, start, destination, directsearch, directtime, time, platform) " +
						"VALUES (:favname,:start,:destination,:directsearch,:directtime,:time,:platform)");
			}
		    
			let params = statement.newBindingParamsArray();  
		    let bp = params.newBindingParams();  
		    
		    bp.bindByName("favname", favname);  
		    bp.bindByName("start", start);  
		    bp.bindByName("destination", destination);  
		    bp.bindByName("directsearch", directsearch);  
		    bp.bindByName("directtime", directtime);  
		    bp.bindByName("time", time);  
		    bp.bindByName("platform", platform);  
		    
		    if(id>0){
			    bp.bindByName("id", id);  
		    }
		    
		    params.addParams(bp);  
		    statement.bindParameters(params);  
		    
			window.opener.Travelbar.runQuery(statement);
			window.opener.Travelbar.loadFavourites();
			window.close();
		},
		
		/**
		 * Checks whether to load a favorite or a new entry
		 */
		load: function()
		{
			var id = window.opener.Travelbar.getID();
			if(id>0){
				Travelbar.Edit.loadFavorit(id);
			}else{
				Travelbar.Edit.loadNew();
			}
		},
		
		/**
		 * Loads all information for a new entry
		 */
		loadNew: function()
		{
			var stringbundle = document.getElementById("travelbar-strings");
			var title =stringbundle.getString("travelbar.newfavourite");
			document.getElementById("travelbar_edit_edit-window").setAttribute("title", title);
			document.getElementById("travelbar_edit_nameFavorit").value=window.opener.document.getElementById("travelbar_vonTextbox").value+" - "+window.opener.document.getElementById("travelbar_nachTextbox").value;	
			document.getElementById("travelbar_edit_vonFavorit").value=window.opener.document.getElementById("travelbar_vonTextbox").value;	
			document.getElementById("travelbar_edit_nachFavorit").value=window.opener.document.getElementById("travelbar_nachTextbox").value;
			this.setPlatform(window.opener.Travelbar.getPlatform());
			document.getElementById("travelbar_edit_timepicker").value=window.opener.document.getElementById("travelbar_timepicker").value;
		},
		
		/**
		 * Loads a favorite
		 * 
		 * @param id of the favorite 
		 */
		loadFavorit: function(id)
		{
			var nameTextbox = document.getElementById("travelbar_edit_nameFavorit");
			var vonTextbox = document.getElementById("travelbar_edit_vonFavorit");
			var nachTextbox = document.getElementById("travelbar_edit_nachFavorit");	
			var directsearch = document.getElementById("travelbar_edit_directsearch");
			var directtime = document.getElementById("travelbar_edit_directtime");
			var time = document.getElementById("travelbar_edit_timepicker");
			var stringbundle = document.getElementById("travelbar-strings");
			var title =stringbundle.getString("travelbar.editfavourite");
			document.getElementById("travelbar_edit_edit-window").setAttribute("title", title);
			
			var statement = window.opener.Travelbar.getDBConn().createStatement("SELECT * FROM favourites WHERE ID="+id);
			try 
			{
				while(statement.step()) 
				{
					nameTextbox.value = statement.row.favname;
					vonTextbox.value = statement.row.start;
					nachTextbox.value = statement.row.destination;
					directsearch.setAttribute("checked", statement.row.directsearch);
					directtime.setAttribute("checked", statement.row.directtime);
					if(statement.row.time!=null){
						time.value=statement.row.time;
					}
					if(statement.row.platform!=null){
						this.setPlatform(statement.row.platform);
					}
				}
			}
			finally 
			{
				statement.reset();
			}		
		},
		
		/**
		 * Set the selected value of the travellist to a specific platform 
		 * 
		 * @param platform to select
		 */
		setPlatform: function(platform)
		{
			var travellist = document.getElementById("travelbar_edit_travellist");
			for(var i=0; i<travellist.itemCount;i++){
				if(travellist.getItemAtIndex(i).value==platform){
					travellist.selectedIndex = i;
				}
			}
		}
	};
}

window.addEventListener("load", Travelbar.Edit.load, false);
