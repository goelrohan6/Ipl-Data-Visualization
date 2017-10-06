(function() {
    'use strict';

    angular.module('app')
        .service('deliveries', [
            function() {
                var obj = {};
                obj.CSK = [
                    {
                        runs: "Zero",
                        count: 6192,
                        team: "CSK"
                    },
                    {
                        runs: "One",
                        count: 5877,
                        team: "CSK"
                    },
                    {
                        runs: "Two",
                        count: 1110,
                        team: "CSK"
                    },
                    {
                        runs: "Three",
                        count: 61,
                        team: "CSK"
                    },
                    {
                        runs: "Four",
                        count: 1770,
                        team: "CSK"
                    },
                    {
                        runs: "Five",
                        count: 2,
                        team: "CSK"
                    },
                    {
                        runs: "Six",
                        count: 742,
                        team: "CSK"
                    }
                ];
                obj.DC = 
                [
                    {
                        runs: "Zero",
                        count: 3673,
                        team: "DC"
                    },
                    {
                        runs: "One",
                        count: 3401,
                        team: "DC"
                    },
                    {
                        runs: "Two",
                        count: 563,
                        team: "DC"
                    },
                    {
                        runs: "Three",
                        count: 35,
                        team: "DC"
                    },
                    {
                        runs: "Four",
                        count: 957,
                        team: "DC"
                    },
                    {
                        runs: "Five",
                        count: 5,
                        team: "DC"
                    },
                    {
                        runs: "Six",
                        count: 400,
                        team: "DC"
                    }
                ];
                obj.DD = 
                [
                    {
                        runs: "Zero",
                        count: 6316,
                        team: "DD"
                    },
                    {
                        runs: "One",
                        count: 5790,
                        team: "DD"
                    },
                    {
                        runs: "Two",
                        count: 1009,
                        team: "DD"
                    },
                    {
                        runs: "Three",
                        count: 49,
                        team: "DD"
                    },
                    {
                        runs: "Four",
                        count: 1768,
                        team: "DD"
                    },
                    {
                        runs: "Five",
                        count: 4,
                        team: "DD"
                    },
                    {
                        runs: "Six",
                        count: 599,
                        team: "DD"
                    }
                ];
                obj.GL = 
                [
                    {
                        runs: "Zero",
                        count: 749,
                        team: "GL"
                    },
                    {
                        runs: "One",
                        count: 708,
                        team: "GL"
                    },
                    {
                        runs: "Two",
                        count: 123,
                        team: "GL"
                    },
                    {
                        runs: "Three",
                        count: 6,
                        team: "GL"
                    },
                    {
                        runs: "Four",
                        count: 242,
                        team: "GL"
                    },
                    {
                        runs: "Six",
                        count: 63,
                        team: "GL"
                    }
                ];
                obj.KXP = 
                [
                    {
                        runs: "Zero",
                        count: 6527,
                        team: "KXP"
                    },
                    {
                        runs: "One",
                        count: 5757,
                        team: "KXP"
                    },
                    {
                        runs: "Two",
                        count: 1078,
                        team: "KXP"
                    },
                    {
                        runs: "Three",
                        count: 55,
                        team: "KXP"
                    },
                    {
                        runs: "Four",
                        count: 1894,
                        team: "KXP"
                    },
                    {
                        runs: "Five",
                        count: 6,
                        team: "KXP"
                    },
                    {
                        runs: "Six",
                        count: 674,
                        team: "KXP"
                    }
                ];
                obj.KT = 
                [
                    {
                        runs: "Zero",
                        count: 696,
                        team: "KT"
                    },
                    {
                        runs: "One",
                        count: 572,
                        team: "KT"
                    },
                    {
                        runs: "Two",
                        count: 85,
                        team: "KT"
                    },
                    {
                        runs: "Three",
                        count: 6,
                        team: "KT"
                    },
                    {
                        runs: "Four",
                        count: 170,
                        team: "KT"
                    },
                    {
                        runs: "Six",
                        count: 53,
                        team: "KT"
                    }
                ];
                obj.KKR = 
                [
                    {
                        runs: "Zero",
                        count: 6353,
                        team: "KKR"
                    },
                    {
                        runs: "One",
                        count: 5780,
                        team: "KKR"
                    },
                    {
                        runs: "Two",
                        count: 948,
                        team: "KKR"
                    },
                    {
                        runs: "Three",
                        count: 51,
                        team: "KKR"
                    },
                    {
                        runs: "Four",
                        count: 1750,
                        team: "KKR"
                    },
                    {
                        runs: "Five",
                        count: 9,
                        team: "KKR"
                    },
                    {
                        runs: "Six",
                        count: 572,
                        team: "KKR"
                    }
                ];
                obj.MI = 
                [
                    {
                        runs: "Zero",
                        count: 7096,
                        team: "MI"
                    },
                    {
                        runs: "One",
                        count: 6059,
                        team: "MI"
                    },
                    {
                        runs: "Two",
                        count: 997,
                        team: "MI"
                    },
                    {
                        runs: "Three",
                        count: 53,
                        team: "MI"
                    },
                    {
                        runs: "Four",
                        count: 1920,
                        team: "MI"
                    },
                    {
                        runs: "Five",
                        count: 7,
                        team: "MI"
                    },
                    {
                        runs: "Six",
                        count: 758,
                        team: "MI"
                    }
                ];
                obj.PW = 
                [
                    {
                        runs: "Zero",
                        count: 2352,
                        team: "PW"
                    },
                    {
                        runs: "One",
                        count: 1999,
                        team: "PW"
                    },
                    {
                        runs: "Two",
                        count: 352,
                        team: "PW"
                    },
                    {
                        runs: "Three",
                        count: 17,
                        team: "PW"
                    },
                    {
                        runs: "Four",
                        count: 525,
                        team: "PW"
                    },
                    {
                        runs: "Five",
                        count: 2,
                        team: "PW"
                    },
                    {
                        runs: "Six",
                        count: 196,
                        team: "PW"
                    }
                ];
                obj.RR = 
                [
                    {
                        runs: "Zero",
                        count: 5783,
                        team: "RR"
                    },
                    {
                        runs: "One",
                        count: 4959,
                        team: "RR"
                    },
                    {
                        runs: "Two",
                        count: 939,
                        team: "RR"
                    },
                    {
                        runs: "Three",
                        count: 63,
                        team: "RR"
                    },
                    {
                        runs: "Four",
                        count: 1630,
                        team: "RR"
                    },
                    {
                        runs: "Five",
                        count: 2,
                        team: "RR"
                    },
                    {
                        runs: "Six",
                        count: 538,
                        team: "RR"
                    }
                ];
                obj.RP = 
                [
                 {
                     runs: "Zero",
                     count: 603,
                     team: "RP"
                 },
                 {
                     runs: "One",
                     count: 613,
                     team: "RP"
                 },
                 {
                     runs: "Two",
                     count: 118,
                     team: "RP"
                 },
                 {
                     runs: "Three",
                     count: 7,
                     team: "RP"
                 },
                 {
                     runs: "Four",
                     count: 171,
                     team: "RP"
                 },
                 {
                     runs: "Six",
                     count: 68,
                     team: "RP"
                 }   
                ];
                obj.RCB = 
                [
                    {
                        runs: "Zero",
                        count: 6598,
                        team: "RCB"
                    },
                    {
                        runs: "One",
                        count: 5790,
                        team: "RCB"
                    },
                    {
                        runs: "Two",
                        count: 1004,
                        team: "RCB"
                    },
                    {
                        runs: "Three",
                        count: 42,
                        team: "RCB"
                    },
                    {
                        runs: "Four",
                        count: 1845,
                        team: "RCB"
                    },
                    {
                        runs: "Five",
                        count: 4,
                        team: "RCB"
                    },
                    {
                        runs: "Six",
                        count: 860,
                        team: "RCB"
                    }
                ];
                obj.SH = 
                [
                    {
                        runs: "Zero",
                        count: 2956,
                        team: "SH"
                    },
                    {
                        runs: "One",
                        count: 2805,
                        team: "SH"
                    },
                    {
                        runs: "Two",
                        count: 516,
                        team: "SH"
                    },
                    {
                        runs: "Three",
                        count: 28,
                        team: "SH"
                    },
                    {
                        runs: "Four",
                        count: 779,
                        team: "SH"
                    },
                    {
                        runs: 5,
                        count: "One",
                        team: "SH"
                    },
                    {
                        runs: "Six",
                        count: 294,
                        team: "SH"
                    }
                ];
                return obj;
            }
        ]);
})();