(function() {
    'use strict';

    angular.module('app')
        .service('boxPlotTeams', [
            function() {
                var obj = {};
                obj.teams = [{
                        label: "CSK",
                        values: {
                            whisker_high: 246,
                            whisker_low: 55,
                            Q1: 141,
                            Q2: 160,
                            Q3: 180
                        }
                    },
                    {
                        label: "DC",
                        values: {
                            whisker_high: 214,
                            whisker_low: 82,
                            Q1: 137,
                            Q2: 151,
                            Q3: 169
                        }
                    },
                    {
                        label: "DD",
                        values: {
                            whisker_high: 231,
                            whisker_low: 56,
                            Q1: 132,
                            Q2: 150,
                            Q3: 167
                        }
                    },
                    {
                        label: "GL",
                        values: {
                            whisker_high: 196,
                            whisker_low: 104,
                            Q1: 131,
                            Q2: 158,
                            Q3: 164
                        }
                    },
                    {
                        label: "KXP",
                        values: {
                            whisker_high: 232,
                            whisker_low: 88,
                            Q1: 130,
                            Q2: 157,
                            Q3: 176
                        }
                    },
                    {
                        label: "KT",
                        values: {
                            whisker_high: 184,
                            whisker_low: 74,
                            Q1: 109,
                            Q2: 135,
                            Q3: 148
                        }
                    },
                    {
                        label: "KKR",
                        values: {
                            whisker_high: 222,
                            whisker_low: 61,
                            Q1: 132,
                            Q2: 150,
                            Q3: 165
                        }
                    },
                    {
                        label: "MI",
                        values: {
                            whisker_high: 218,
                            whisker_low: 68,
                            Q1: 141,
                            Q2: 159,
                            Q3: 174
                        }
                    },
                    {
                        label: "PW",
                        values: {
                            whisker_high: 192,
                            whisker_low: 99,
                            Q1: 118,
                            Q2: 139,
                            Q3: 156
                        }
                    },
                    {
                        label: "RR",
                        values: {
                            whisker_high: 223,
                            whisker_low: 58,
                            Q1: 132,
                            Q2: 147,
                            Q3: 170
                        }
                    },
                    {
                        label: "RP",
                        values: {
                            whisker_high: 195,
                            whisker_low: 76,
                            Q1: 103,
                            Q2: 159,
                            Q3: 166
                        }
                    },
                    {
                        label: "RCB",
                        values: {
                            whisker_high: 263,
                            whisker_low: 2,
                            Q1: 135,
                            Q2: 157,
                            Q3: 176
                        }
                    },
                    {
                        label: "SH",
                        values: {
                            whisker_high: 208,
                            whisker_low: 44,
                            Q1: 132,
                            Q2: 146,
                            Q3: 163
                        }
                    }
                ];
                return obj;
            }
        ]);
})();