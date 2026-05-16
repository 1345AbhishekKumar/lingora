const fs = require('fs');
let data = fs.readFileSync('data/lessons.ts', 'utf8');

const langs = ['ru', 'ar', 'hi', 'tr', 'nl', 'se', 'vn', 'pt'];
langs.forEach(lang => {
  const regex = new RegExp('{ id: "l\\\\d+-' + lang + '",', 'g');
  const matches = data.match(regex);
  if (matches && matches.length < 2) {
    const unitId = 'unit-1-' + lang;
    const newLessons = [
      { id: 'l2-'+lang, unitId, title: 'Greetings 2', description: 'More greetings', order: 2, goals: ['Greet more'], activities: [] },
      { id: 'l3-'+lang, unitId, title: 'Numbers', description: '1 to 10', order: 3, goals: ['Count'], activities: [] },
      { id: 'l4-'+lang, unitId, title: 'Family', description: 'Mother and Father', order: 4, goals: ['Family'], activities: [] },
      { id: 'l5-'+lang, unitId, title: 'Food', description: 'Basic food items', order: 5, goals: ['Food'], activities: [] },
      { id: 'l6-'+lang, unitId, title: 'Travel', description: 'Directions', order: 6, goals: ['Travel'], activities: [] }
    ];
    let toInsert = '';
    newLessons.forEach(l => {
        toInsert += '  { id: "' + l.id + '", unitId: "' + l.unitId + '", title: "' + l.title + '", description: "' + l.description + '", order: ' + l.order + ', goals: ' + JSON.stringify(l.goals) + ', activities: ' + JSON.stringify(l.activities) + ' },\n';
    });
    
    const firstLessonRegex = new RegExp('  { id: "l1-' + lang + '".*?},?\\n');
    const firstMatch = data.match(firstLessonRegex);
    if (firstMatch) {
       data = data.replace(firstLessonRegex, firstMatch[0] + toInsert);
    }
  }
});

fs.writeFileSync('data/lessons.ts', data);
console.log('Done');
