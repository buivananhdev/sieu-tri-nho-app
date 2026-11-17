const fs = require('fs');
const path = require('path');

const p1 = require('./data_philosophy_ancient.js');
const p1_ext = require('./data_philosophy_ancient_ext.js');
const p2 = require('./data_philosophy_medieval_enlightenment.js');
const p2_ext = require('./data_philosophy_medieval_ext.js');
const p3 = require('./data_philosophy_modern.js');
const p3_ext = require('./data_philosophy_modern_ext.js');
const p4 = require('./data_philosophy_east.js');
const p4_ext = require('./data_philosophy_east_ext.js');

const allPillars = [
  ...p1.WEST_ANCIENT_PHILOSOPHY,
  ...p1_ext.WEST_ANCIENT_PHILOSOPHY_EXT,
  ...p2.WEST_MEDIEVAL_ENLIGHTENMENT_PHILOSOPHY,
  ...p2_ext.WEST_MEDIEVAL_ENLIGHTENMENT_PHILOSOPHY_EXT,
  ...p3.WEST_MODERN_PHILOSOPHY,
  ...p3_ext.WEST_MODERN_PHILOSOPHY_EXT,
  ...p4.EAST_PHILOSOPHY,
  ...p4_ext.EAST_PHILOSOPHY_EXT
];

console.log(`Loaded total pillars: ${allPillars.length}`);

const fileContent = `// ĐẠI TOÀN THƯ TRIẾT HỌC 2.500 NĂM (100 CỘT TRỤ TƯ TƯỞNG TOÀN CẦU: ĐÔNG - TÂY HỢP BÍCH)
// Chuẩn Học Thuật Quốc Tế & Ma Trận 5 Chiều Đại Tư Duy

window.GLOBAL_PHILOSOPHY_DATA = ${JSON.stringify(allPillars, null, 2)};
`;

fs.writeFileSync(path.join(__dirname, 'philosophy-data.js'), fileContent, 'utf-8');
console.log('Successfully generated philosophy-data.js with 100 pillars!');
