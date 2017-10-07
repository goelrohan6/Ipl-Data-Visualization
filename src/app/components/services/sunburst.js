(function() {
    'use strict';

    angular.module('app')
        .service('sunburst', [
            function() {
                var obj = {};
                obj.data = [{
                    "name": "Total Runs",
                    "children": [{
                            "name": "RP",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 408
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 684
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 613
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 236
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 21
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 60
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 6
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 28
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 7
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "PW",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 1176
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 2100
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 1999
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 704
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 51
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 169
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 19
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 106
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 24
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "CSK",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 4452
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 7080
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 5877
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 2220
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 183
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 585
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 75
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 349
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 68
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DD",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 3594
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 7072
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 5790
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 2018
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 147
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 20
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 617
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 69
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 332
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 65
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 10
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "RR",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 3228
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 6520
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 4959
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 1878
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 189
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 10
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 494
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 55
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 296
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 74
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "MI",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 4548
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 7680
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 6059
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 1994
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 159
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 35
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 700
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 78
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 391
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 77
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "DC",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 2400
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 3828
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 3401
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 1126
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 105
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 25
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 279
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 50
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 200
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 49
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "KKR",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 3432
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 7000
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 5780
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 1896
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 153
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 45
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 638
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 99
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 369
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 69
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "SH",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 1764
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 3116
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 2805
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 1032
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 84
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 5
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 270
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 39
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 158
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 30
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "KT",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 318
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 680
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 572
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 170
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 18
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 89
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 7
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 36
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 11
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "KXP",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 4044
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 7576
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 5757
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 2156
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 165
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 30
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 568
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 113
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 403
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 49
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "GL",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 378
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 968
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 708
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 246
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 18
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 0
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 84
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 4
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 37
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 7
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "RCB",
                            "children": [{
                                    "name": "Batsman Runs",
                                    "children": [{
                                            "name": "Boundries",
                                            "children": [{
                                                    "name": "Sixes",
                                                    "size": 5160
                                                },
                                                {
                                                    "name": "Fours",
                                                    "size": 7380
                                                }
                                            ]
                                        },
                                        {
                                            "name": "Non Boundries",
                                            "children": [{
                                                    "name": "1",
                                                    "size": 5790
                                                },
                                                {
                                                    "name": "2",
                                                    "size": 2008
                                                },
                                                {
                                                    "name": "3",
                                                    "size": 126
                                                },
                                                {
                                                    "name": "5",
                                                    "size": 20
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    "name": "Extras",
                                    "children": [{
                                            "name": "wide_runs",
                                            "size": 608
                                        },
                                        {
                                            "name": "bye_runs",
                                            "size": 66
                                        },
                                        {
                                            "name": "legbye_runs",
                                            "size": 351
                                        },
                                        {
                                            "name": "noball_runs",
                                            "size": 82
                                        },
                                        {
                                            "name": "penalty_runs",
                                            "size": 0
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }];
                return obj;
            }
        ]);
})();