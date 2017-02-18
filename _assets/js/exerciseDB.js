angular.module('exerciseDB', [])
    .factory('exerciseDbFAC', [function () {
        return function(){
            return{
                ENGLISH: [
                    {
                        title: 'Use This and That in sentence',
                        id: 1,
                        type: 'block'
                    },
                    {
                        title: 'Use a, an in sentence',
                        id: 2,
                        type: 'block'
                    },
                    {
                        title: 'Check picture and write what is that?',
                        id: 3,
                        type: 'block'
                    },
                    {
                        title: 'Missing alphabet (Small, Capital or Cursive Letter)?',
                        id: 4,
                        type: 'block'
                    },
                    {
                        title: 'Missing alphabet (Small and Capital letter set)?',
                        id: 5,
                        type: 'block'
                    },
                    {
                        title: 'What comes before/After Alphabet?',
                        id: 6,
                        type: 'block'
                    },
                    {
                        title: 'Write first letter of the Picture shown?',
                        id: 7,
                        type: 'block'
                    },
                    {
                        title: 'Identify picture and write the name?',
                        id: 8,
                        type: 'block'
                    },
                    {
                        title: 'Identify picture and Write missing vowel in word?',
                        id: 9,
                        type: 'block'
                    },
                    {
                        title: 'Look at the picture and answer question in Yes/No?',
                        id: 10,
                        type: 'block'
                    },
                    {
                        title: 'Use These/Those in sentence?',
                        id: 11,
                        type: 'block'
                    }
                ],
                MATHS: [
                    {
                        title: 'Ascending Missing Numbers',
                        id: 1,
                        type: 'block'
                    },
                    {
                        title: 'Descending Missing Numbers',
                        id: 2,
                        type: 'block'
                    },
                    {
                        title: 'Draw Shapes for Numbers',
                        id: 3
                    },
                    {
                        title: 'Count shapes and Write the Number',
                        id: 4,
                        type: 'image'
                    },
                    {
                        title: 'Less/Greater then by reading number',
                        id: 5,
                        type: 'number-compare'
                    },
                    {
                        title: 'Less/Greater then after Counting Shapes',
                        id: 6,
                        type: 'image-compare'
                    },
                    {
                        title: 'Count objects and match to right number',
                        id: 7,
                        type: 'image-number-compare'
                    },
                    {
                        title: 'Circle the nth object',
                        id: 8,
                        type: 'random-number'
                    },
                    {
                        title: 'Write 10s Forward',
                        id: 9,
                        type: ''
                    },
                    {
                        title: 'Cross the right number of shapes',
                        id: 10,

                    },
                    {
                        title: 'Check if series is ascneding/descending',
                        id: 11,
                        type: 'random-number'
                    },
                    {
                        title: 'Circle the biggest and smallest number',
                        id: 12,
                        type: 'random-number'
                    },
                    {
                        title: 'Match right ordinal like third to 3',
                        id: 13,
                        type: 'number-ordinal-compare'
                    },
                    {
                        title: 'Circle the biggest and cross smallest number',
                        id: 14,
                        type: 'random-number'
                    }
                ]
            };
        };
    }]);