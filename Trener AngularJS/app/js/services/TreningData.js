/**
 * Created by akraszewski on 21.06.2016.
 */
(function () {
    var app = angular.module('treningApp');

    app.service('dataService', function($http) {
        this.getTreningTypesData = function() {
            return $http({
                method: 'GET',
                url: 'http://localhost:57983/Pusty/GetTreningTypes',
            }).success(function(data){
                return data;
            }).error(function(){
                alert("error");
                return null ;
            });
        }
    });
    
    app.factory('TreningData', function (dataService) {

        var data2 = {
            'lista': [
                {
                    "Power": 1,
                    'Duration': '4:00',
                    "Date": '2016-06-20',
                    "WakeUp": '07:30',
                    "SleepAt": '00:30',
                    "Trenings": [
                        {
                            "Type": "wspinaczka",
                            'Name': 'Crux',
                            'Czas': '4:00'
                        },
                        {
                            'Type': 'bieganie',
                            'Name': 'bieganie po mieście',
                            'Czas': '1:00'
                        }

                    ]
                },
                {
                    'Duration': '5:00',

                    "Power": 4,
                    'Date': '2016-06-19',
                    'WakeUp': '07:10',
                    'SleepAt': '00:30',
                    'Trenings': [
                        {
                            'Type': 'wspinaczka',
                            'Name': 'wgóre',
                            'Czas': '3:00'
                        },
                        {
                            'Type': 'siłownia',
                            'Name': 'domowa siłownia',
                            'Czas': '1:00'
                        }

                    ]
                },
                {
                    'Duration': '3:00',

                    "Power": 3,
                    'Date': '2016-06-18',
                    'WakeUp': '07:10',
                    'SleepAt': '00:30',
                    'Trenings': [
                        {
                            'Type': 'wspinaczka',
                            'Name': 'wgóre',
                            'Czas': '3:00'
                        },


                    ]
                }
            ]

        };

        return {
            'GetTreningTypes': function () {
                 return dataService.getTreningTypesData();
                // .then(function(response) {
                //      return response.data.list;
                // });
            },
            'GetTreningEntries': function () {
                return data2;
            }
        }

    });

}())