var pclub=angular.module('pclub',['angular.filter','ngRoute']);

var url2016="https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json";



/*..................................................................*/

pclub.controller('allMatchController',['$http','$filter',function($http,$filter){

	var main=this;

	this.matches=[];
	//this.teams=[];
	main.selectScore=[];
	main.filterScore;
	this.obj={};
	this.scores;
	main.loadAll=function(matchUrl){

	$http({
		method: 'GET',
		url: matchUrl
		}).then(function successCallback(response){
			main.rounds=response.data.rounds;
			
		
		
			for(x in response.data.rounds)
			{
				for(y in response.data.rounds[x].matches)
				{
					main.matches.push(response.data.rounds[x].matches[y])
				}
			}

			//Choose filter
			$('#chooseFilter').on('change',function(){

				main.optionSelected=$('#chooseFilter option:selected').val();
				//console.log(main.optionSelected);
				if(main.optionSelected=='Team'){
					
					$('#teamFilter').show();
				}
				if(main.optionSelected=='Score1'){
					
					$('#score1Filter').show();
				}
				if(main.optionSelected=='Score2'){
					
					$('#score2Filter').show();
				}
			});
			
			
				


		}, function errorCallback(response) {
					
						alert("some error occurred.");
					
		});


	
		
	}

	$('#teamFilter').hide();
	$('#score1Filter').hide();
	$('#score2Filter').hide();
	this.loadAll(url2016);
	
}]);

/*...........................................................................................*/
pclub.controller('singleMatchController',['$http','$routeParams',function($http,$routeParams){

	var main=this;

	main.code1=$routeParams.code1;
	main.code2=$routeParams.code2;
	main.date=$routeParams.date;

	//console.log(main.code1);

	this.loadSingle=function(){
		$http({
			method: 'GET',
			url: url2016
		}).then(function successCallback(response){

			jQuery.each(response.data.rounds,function(x,data1){
				jQuery.each(response.data.rounds[x].matches,function(y,data2){
					if(data2.team1.code==main.code1&&data2.team2.code==main.code2&&data2.date==main.date){

						main.match=data2;
						main.score1=data2.score1;
						main.score2=data2.score2;
						main.newDate=data2.date;
						main.code1=main.match.team1.code;
						main.code2=main.match.team2.code;

			/*arsenal*/	if(main.code1=='ARS'){
							$('.team1').addClass('arsenal');
						}
						else if(main.code2=='ARS'){
							$('.team2').addClass('arsenal');
						}
			/*arsenal*/	if(main.code1=='BOU'){
							$('.team1').addClass('bournemouth');
						}
						else if(main.code2=='BOU'){
							$('.team2').addClass('bournemouth');
						}
						if(main.code1=='BUR'){
							$('.team1').addClass('burnley');
						}
						else if(main.code2=='BUR'){
							$('.team2').addClass('burnley');
						}
						if(main.code1=='CHE'){
							$('.team1').addClass('chelsea');
						}
						else if(main.code2=='CHE'){
							$('.team2').addClass('chelsea');
						}

						if(main.code1=='CRY'){
							$('.team1').addClass('crystal');
						}
						else if(main.code2=='CRY'){
							$('.team2').addClass('crystal');
						}

						if(main.code1=='EVE'){
							$('.team1').addClass('everton');
						}
						else if(main.code2=='EVE'){
							$('.team2').addClass('everton');
						}

						if(main.code1=='HUL'){
							$('.team1').addClass('hullcity');
						}
						else if(main.code2=='HUL'){
							$('.team2').addClass('hullcity');
						}

						if(main.code1=='LEI'){
							$('.team1').addClass('licester');
						}
						else if(main.code2=='LEI'){
							$('.team2').addClass('licester');
						}
						if(main.code1=='LIV'){
							$('.team1').addClass('liverpool');
						}
						else if(main.code2=='LIV'){
							$('.team2').addClass('liverpool');
						}

						if(main.code1=='MCI'){
							$('.team1').addClass('mancity');
						}
						else if(main.code2=='MCI'){
							$('.team2').addClass('mancity');
						}

						if(main.code1=='MUN'){
							$('.team1').addClass('manunited');
						}
						else if(main.code2=='MUN'){
							$('.team2').addClass('manunited');
						}

						if(main.code1=='MFC'){
							$('.team1').addClass('middle');
						}
						else if(main.code2=='MFC'){
							$('.team2').addClass('middle');
						}

						if(main.code1=='SOU'){
							$('.team1').addClass('south');
						}
						else if(main.code2=='SOU'){
							$('.team2').addClass('south');
						}
						if(main.code1=='STK'){
							$('.team1').addClass('stoke');
						}
						else if(main.code2=='STK'){
							$('.team2').addClass('stoke');
						}
						if(main.code1=='SUN'){
							$('.team1').addClass('sunderland');
						}
						else if(main.code2=='SUN'){
							$('.team2').addClass('sunderland');
						}
						if(main.code1=='SWA'){
							$('.team1').addClass('swansea');
						}
						else if(main.code2=='SWA'){
							$('.team2').addClass('swansea');
						}
						if(main.code1=='TOT'){
							$('.team1').addClass('tote');
						}
						else if(main.code2=='TOT'){
							$('.team2').addClass('tote');
						}
						if(main.code1=='WAT'){
							$('.team1').addClass('watford');
						}
						else if(main.code2=='WAT'){
							$('.team2').addClass('watford');
						}
						if(main.code1=='WBA'){
							$('.team1').addClass('westalbion');
						}
						else if(main.code2=='WBA'){
							$('.team2').addClass('westalbion');
						}
						if(main.code1=='WHU'){
							$('.team1').addClass('westham');
						}
						else if(main.code2=='WHU'){
							$('.team2').addClass('westham');
						}
					}
				})
			});

		},function errorCallback(response){
			alert("some error occurred!!!!!!!!");
			console.log(response);
		});
	}

}]);

/**.................................Ststs Controller...........................................*/

pclub.controller('statsController',['$http','$routeParams',function($http,$routeParams){

	var main=this;
	main.code=$routeParams.code;
	
	main.noOfGamesPlayed=0;
	main.win=0;
	main.loss=0;
	main.goals=0;
	

	this.loadStats=function(){
		$http({
			method: 'GET',
			url: url2016
		}).then(function successCallback(response){

			jQuery.each(response.data.rounds,function(x,data1){
				jQuery.each(response.data.rounds[x].matches,function(y,data2){
					if(data2.team1.code==main.code || data2.team2.code==main.code){

						main.noOfGamesPlayed+=1;
						if(data2.team1.code==main.code){
							main.teamName=data2.team1.name;
							main.goals+=data2.score1;
							if(data2.score1>data2.score2){
								main.win+=1;
							}
							else if(data2.score1<data2.score2){
								main.loss+=1;
							}
							

						}
						if(data2.team2.code==main.code){
							main.teamName=data2.team2.name;
							main.goals+=data2.score2;
							if(data2.score1>data2.score2){
								main.win+=1;
							}
							else if(data2.score1<data2.score2){
								main.loss+=1;
							}
							
							
						}
						
					}
				})
			});

		},function errorCallback(response){
			alert("some error occurred!!!!!!!!");
			console.log(response);
		});
	}

}]);