const fs = require('fs');
const path = require('path');

const p1 = require('./data_philosophy_ancient.js');
const p2 = require('./data_philosophy_medieval_enlightenment.js');
const p3 = require('./data_philosophy_modern.js');
const p4 = require('./data_philosophy_east.js');

const allPillars = [
  ...p1.WEST_ANCIENT_PHILOSOPHY,
  ...p2.WEST_MEDIEVAL_ENLIGHTENMENT_PHILOSOPHY,
  ...p3.WEST_MODERN_PHILOSOPHY,
  ...p4.EAST_PHILOSOPHY
];

console.log(`Loaded total pillars: ${allPillars.length}`);

const fileContent = `// ĐẠI TOÀN THƯ TRIẾT HỌC 2.500 NĂM (70 CỘT TRỤ TƯ TƯỞNG TOÀN CẦU: ĐÔNG - TÂY HỢP BÍCH)
// Chuẩn Học Thuật Quốc Tế & Ma Trận 5 Chiều Đại Tư Duy

window.GLOBAL_PHILOSOPHY_DATA = ${JSON.stringify(allPillars, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'philosophy-data.js'), fileContent, 'utf-8');
console.log('Successfully generated philosophy-data.js!');
