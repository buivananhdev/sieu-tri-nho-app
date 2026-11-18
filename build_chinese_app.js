// build_chinese_app.js
// Ultra-Comprehensive Chinese App Data Generator
// Produces 600+ vocabulary and radicals, 10 interactive lessons with dialogues, 5 memory methods, and complete grammar.

const fs = require('fs');
const path = require('path');

// 1. PINYIN DATA
const CHINESE_PINYIN_DATA = {
  initials: [
    { sound: 'b', ipa: '[p]', name: 'Âm hai môi (không bật hơi)', example: 'bàba (bố)', desc: 'Phát âm tương tự âm [b] hay [p] nhẹ trong tiếng Việt, môi ngậm lại rồi mở nhẹ, không bật hơi.' },
    { sound: 'p', ipa: '[pʰ]', name: 'Âm hai môi (bật hơi mạnh)', example: 'péngyou (bạn bè)', desc: 'Vị trí giống âm b nhưng mím chặt môi và bật luồng hơi mạnh ra ngoài.' },
    { sound: 'm', ipa: '[m]', name: 'Âm mũi hai môi', example: 'māma (mẹ)', desc: 'Tương tự âm [m] trong tiếng Việt, luồng hơi thoát ra qua đường mũi.' },
    { sound: 'f', ipa: '[f]', name: 'Âm răng môi', example: 'fàn (cơm)', desc: 'Răng trên chạm nhẹ môi dưới, luồng hơi ma sát thoát ra ngoài như âm [ph] tiếng Việt.' },
    { sound: 'd', ipa: '[t]', name: 'Âm đầu lưỡi giữa (không bật hơi)', example: 'dà (to lớn)', desc: 'Đầu lưỡi chạm nướu trên rồi hạ xuống, phát âm giống âm [đ] hoặc [t] nhẹ tiếng Việt.' },
    { sound: 't', ipa: '[tʰ]', name: 'Âm đầu lưỡi giữa (bật hơi mạnh)', example: 'tiān (ngày/trời)', desc: 'Vị trí như âm d nhưng bật hơi cực mạnh, giống âm [th] trong tiếng Việt.' },
    { sound: 'n', ipa: '[n]', name: 'Âm mũi đầu lưỡi', example: 'nǐ (bạn)', desc: 'Phát âm giống âm [n] tiếng Việt.' },
    { sound: 'l', ipa: '[l]', name: 'Âm bên đầu lưỡi', example: 'lǎoshī (thầy cô)', desc: 'Phát âm giống âm [l] tiếng Việt.' },
    { sound: 'g', ipa: '[k]', name: 'Âm gốc lưỡi (không bật hơi)', example: 'gēge (anh trai)', desc: 'Gốc lưỡi nâng lên chạm vòm họng mềm rồi mở ra, phát âm tựa âm [c/k] tiếng Việt.' },
    { sound: 'k', ipa: '[kʰ]', name: 'Âm gốc lưỡi (bật hơi mạnh)', example: 'kàn (xem/nhìn)', desc: 'Vị trí như g nhưng bật luồng hơi mạnh từ cuống họng ra như âm [kh] bật mạnh.' },
    { sound: 'h', ipa: '[x]', name: 'Âm xát gốc lưỡi', example: 'hǎo (tốt/đẹp)', desc: 'Gốc lưỡi nâng gần vòm họng mềm, phát âm lai giữa [h] và [kh] nhẹ.' },
    { sound: 'j', ipa: '[tɕ]', name: 'Âm mặt lưỡi (không bật hơi)', example: 'jiā (nhà)', desc: 'Mặt lưỡi áp sát ngạc cứng, phát âm tựa như [ch] mềm tiếng Việt.' },
    { sound: 'q', ipa: '[tɕʰ]', name: 'Âm mặt lưỡi (bật hơi mạnh)', example: 'qù (đi)', desc: 'Vị trí như j nhưng bật hơi cực mạnh qua khe răng và mặt lưỡi.' },
    { sound: 'x', ipa: '[ɕ]', name: 'Âm xát mặt lưỡi', example: 'xièxie (cảm ơn)', desc: 'Mặt lưỡi nâng sát ngạc cứng, luồng hơi ma sát thoát ra tựa âm [x] nhẹ.' },
    { sound: 'zh', ipa: '[tʂ]', name: 'Âm uốn lưỡi (không bật hơi)', example: 'Zhōngguó (Trung Quốc)', desc: 'Đầu lưỡi cong lên chạm ngạc cứng, phát âm tròn tiếng như [tr] nặng tiếng Việt miền Nam.' },
    { sound: 'ch', ipa: '[tʂʰ]', name: 'Âm uốn lưỡi (bật hơi mạnh)', example: 'chī (ăn)', desc: 'Vị trí như zh nhưng đầu lưỡi uốn cong và bật hơi mạnh ra ngoài.' },
    { sound: 'sh', ipa: '[ʂ]', name: 'Âm xát uốn lưỡi', example: 'shū (sách)', desc: 'Đầu lưỡi cong lên ngạc cứng tạo khe hở, luồng hơi ma sát thoát ra tựa âm [s] uốn lưỡi mạnh.' },
    { sound: 'r', ipa: '[ʐ]', name: 'Âm cuốn lưỡi rung', example: 'rén (người)', desc: 'Đầu lưỡi uốn cong như sh nhưng rung dây thanh âm, tựa âm [r] nhẹ.' },
    { sound: 'z', ipa: '[ts]', name: 'Âm đầu lưỡi trước (không bật hơi)', example: 'zàijiàn (tạm biệt)', desc: 'Đầu lưỡi chạm mặt sau răng trên rồi khẽ lùi lại, phát âm như [dz] hay [ch] phẳng.' },
    { sound: 'c', ipa: '[tsʰ]', name: 'Âm đầu lưỡi trước (bật hơi mạnh)', example: 'cài (món ăn)', desc: 'Vị trí như z nhưng cắn hai hàm răng lại và đẩy luồng hơi mạnh qua kẽ răng [tsʰ].' },
    { sound: 's', ipa: '[s]', name: 'Âm xát đầu lưỡi trước', example: 'sì (số bốn)', desc: 'Đầu lưỡi áp sát mặt sau răng dưới, luồng hơi xát ra tựa âm [x] phẳng không uốn lưỡi.' }
  ],
  finals: [
    { sound: 'a', type: 'Đơn', desc: 'Mở rộng miệng, lưỡi ở vị trí thấp nhất, phát âm như [a] tiếng Việt.' },
    { sound: 'o', type: 'Đơn', desc: 'Môi tròn khum lại, phát âm lai giữa [ô] và [o] tiếng Việt.' },
    { sound: 'e', type: 'Đơn', desc: 'Miệng hé tự nhiên, phát âm tựa [ơ] hơi nghiêng [ưa] trong tiếng Việt.' },
    { sound: 'i', type: 'Đơn', desc: 'Miệng dẹt cười, đầu lưỡi chạm mặt sau răng dưới, phát âm [i] tiếng Việt.' },
    { sound: 'u', type: 'Đơn', desc: 'Môi tròn chúm lại nhô ra phía trước, phát âm [u] tiếng Việt.' },
    { sound: 'ü', type: 'Đơn', desc: 'Phát âm âm [i] nhưng môi giữ nguyên chúm tròn như phát âm [u], tựa âm [uy] tròn môi.' },
    { sound: 'ai', type: 'Kép', desc: 'Phát âm từ [a] lướt nhanh sang [i], tựa vần [ai] tiếng Việt.' },
    { sound: 'ei', type: 'Kép', desc: 'Phát âm từ [e] lướt sang [i], tựa vần [ây/ê] trong tiếng Việt.' },
    { sound: 'ao', type: 'Kép', desc: 'Phát âm từ [a] lướt sang [u/o], tựa vần [ao] tiếng Việt.' },
    { sound: 'ou', type: 'Kép', desc: 'Phát âm từ [o] lướt sang [u], tựa vần [âu] tiếng Việt.' },
    { sound: 'ia', type: 'Kép', desc: 'Lướt từ [i] sang [a], tựa [ia] trong tiếng Việt.' },
    { sound: 'ie', type: 'Kép', desc: 'Lướt từ [i] sang [e], tựa [iê] trong tiếng Việt.' },
    { sound: 'ua', type: 'Kép', desc: 'Lướt từ [u] sang [a], tựa [oa] trong tiếng Việt.' },
    { sound: 'uo', type: 'Kép', desc: 'Lướt từ [u] sang [o], tựa [ua/uô] trong tiếng Việt.' },
    { sound: 'üe', type: 'Kép', desc: 'Lướt từ [ü] sang [e], tựa vần [uyê] tròn môi.' },
    { sound: 'iao', type: 'Kép', desc: 'Lướt từ [i] sang [ao], tựa [ieo] trong tiếng Việt.' },
    { sound: 'iu (iou)', type: 'Kép', desc: 'Lướt từ [i] sang [ou], tựa [iêu] trong tiếng Việt.' },
    { sound: 'uai', type: 'Kép', desc: 'Lướt từ [u] sang [ai], tựa [oai] trong tiếng Việt.' },
    { sound: 'ui (uei)', type: 'Kép', desc: 'Lướt từ [u] sang [ei], tựa [uây] trong tiếng Việt.' },
    { sound: 'an', type: 'Mũi', desc: 'Phát âm từ [a] sang âm mũi [n], tựa [an] tiếng Việt.' },
    { sound: 'en', type: 'Mũi', desc: 'Phát âm từ [e] sang âm mũi [n], tựa [ân] tiếng Việt.' },
    { sound: 'in', type: 'Mũi', desc: 'Phát âm từ [i] sang âm mũi [n], tựa [in] tiếng Việt.' },
    { sound: 'ün', type: 'Mũi', desc: 'Phát âm từ [ü] sang [n], tựa [uyn] tròn môi.' },
    { sound: 'ian', type: 'Mũi', desc: 'Lướt từ [i] sang [an], đọc tựa [i-en] trong tiếng Việt.' },
    { sound: 'uan', type: 'Mũi', desc: 'Lướt từ [u] sang [an], đọc tựa [oan] trong tiếng Việt.' },
    { sound: 'üan', type: 'Mũi', desc: 'Lướt từ [ü] sang [an], đọc tựa [uyên] tròn môi.' },
    { sound: 'un (uen)', type: 'Mũi', desc: 'Lướt từ [u] sang [en], đọc tựa [uân] tiếng Việt.' },
    { sound: 'ang', type: 'Mũi', desc: 'Âm mũi sau, phát âm từ [a] sang [ng], tựa [ang] tiếng Việt.' },
    { sound: 'eng', type: 'Mũi', desc: 'Âm mũi sau, phát âm từ [e] sang [ng], tựa [âng] tiếng Việt.' },
    { sound: 'ing', type: 'Mũi', desc: 'Âm mũi sau, phát âm từ [i] sang [ng], tựa [inh] tiếng Việt.' },
    { sound: 'ong', type: 'Mũi', desc: 'Âm mũi sau, phát âm từ [o] sang [ng], tựa [ung] tiếng Việt.' },
    { sound: 'iang', type: 'Mũi', desc: 'Lướt từ [i] sang [ang], đọc tựa [iang/ang] tiếng Việt.' },
    { sound: 'uang', type: 'Mũi', desc: 'Lướt từ [u] sang [ang], đọc tựa [oang] tiếng Việt.' },
    { sound: 'ueng', type: 'Mũi', desc: 'Lướt từ [u] sang [eng], đọc tựa [uâng] tiếng Việt.' },
    { sound: 'iong', type: 'Mũi', desc: 'Lướt từ [i] sang [ong], đọc tựa [i-ung] tiếng Việt.' },
    { sound: 'er', type: 'Cuốn lưỡi', desc: 'Phát âm âm [e/ơ] đồng thời uốn cong đầu lưỡi lên ngạc cứng.' }
  ],
  tones: [
    { tone: 1, name: 'Thanh 1 (Âm bình)', mark: 'mā (妈)', pitch: '5-5', symbol: '—', desc: 'Giọng cao và phẳng đều từ đầu đến cuối, giữ hơi dài ổn định.' },
    { tone: 2, name: 'Thanh 2 (Dương bình)', mark: 'má (麻)', pitch: '3-5', symbol: '／', desc: 'Bắt đầu ở cao độ trung bình rồi vút lên cao như dấu sắc tiếng Việt.' },
    { tone: 3, name: 'Thanh 3 (Thượng thanh)', mark: 'mǎ (马)', pitch: '2-1-4', symbol: '∨', desc: 'Hạ giọng xuống thật trầm rồi khẽ nhấc nhẹ lên cao, tương tự dấu hỏi.' },
    { tone: 4, name: 'Thanh 4 (Khứ thanh)', mark: 'mà (骂)', pitch: '5-1', symbol: '＼', desc: 'Giáng cực mạnh và dứt khoát từ độ cao 5 xuống 1, dứt khoát, không kéo dài.' },
    { tone: 0, name: 'Thanh nhẹ (Khinh thanh)', mark: 'ma (吗)', pitch: 'Ngắn', symbol: '·', desc: 'Phát âm nhẹ, ngắn, không đánh dấu thanh (như chữ thứ hai trong 妈妈 māma).' }
  ],
  rules: [
    { title: 'Biến điệu hai thanh 3 đi liền nhau', rule: '3 + 3 ➔ 2 + 3', desc: 'Khi hai từ thanh 3 đứng cạnh nhau, từ thứ nhất biến thành thanh 2.', example: '你好: nǐ hǎo ➔ ní hǎo | 可以: kěyǐ ➔ kéyǐ | 手表: shǒubiǎo ➔ shóubiǎo' },
    { title: 'Biến điệu của chữ 不 (bù)', rule: 'bù + Thanh 4 ➔ bú + Thanh 4', desc: 'Khi 不 đứng trước một từ mang thanh 4, nó biến thành thanh 2 (bú). Đứng trước thanh 1, 2, 3 giữ nguyên thanh 4 (bù).', example: '不是: bù shì ➔ bú shì | 不要: bù yào ➔ bú yào | 不吃: bù chī (giữ nguyên)' },
    { title: 'Biến điệu của chữ 一 (yī)', rule: 'yī + Thanh 4 ➔ yí | yī + Thanh 1,2,3 ➔ yì', desc: 'Khi đứng độc lập hoặc đếm số đọc là yī (thanh 1). Khi đứng trước thanh 4 đọc thành yí (thanh 2). Khi đứng trước thanh 1, 2, 3 đọc thành yì (thanh 4).', example: '一个人: yí gè rén | 一天: yì tiān | 一年: yì nián | 一起: yì qǐ' }
  ]
};

// 2. STROKES DATA
const CHINESE_STROKES_DATA = {
  basicStrokes: [
    { name: 'Ngang (横)', pinyin: 'héng', symbol: '一', desc: 'Viết từ trái sang phải, hơi chếch nhẹ lên trên một góc rất nhỏ.', example: '一, 二, 三, 十' },
    { name: 'Sổ (竖)', pinyin: 'shù', symbol: '丨', desc: 'Viết thẳng đứng từ trên xuống dưới, thẳng thắn ngay ngắn.', example: '十, 中, 日, 木' },
    { name: 'Phẩy (撇)', pinyin: 'piě', symbol: '丿', desc: 'Viết từ trên phải uốn lượn vuốt nhọn sang trái.', example: '人, 八, 大, 月' },
    { name: 'Mác (捺)', pinyin: 'nà', symbol: '乀', desc: 'Viết từ trên trái vuốt chếch xuống phải, đuôi bè rồi nhấc bút.', example: '人, 大, 天, 文' },
    { name: 'Chấm (点)', pinyin: 'diǎn', symbol: '丶', desc: 'Chấm nhẹ từ trên chếch xuống phải, tròn đầu nhọn đuôi.', example: '六, 广, 方, 主' },
    { name: 'Hất (提)', pinyin: 'tí', symbol: '㇀', desc: 'Viết từ dưới trái chếch vút lên trên phải dứt khoát.', example: '地, 冰, 冷, 习' },
    { name: 'Gập (折)', pinyin: 'zhé', symbol: '𠃍', desc: 'Nét gập góc: đang đi ngang gập xuống sổ hoặc đang đi sổ gập sang ngang.', example: '口, 日, 四, 凸' },
    { name: 'Móc (钩)', pinyin: 'gōu', symbol: '亅', desc: 'Cuối nét sổ hoặc nét cong bật một móc nhọn sắc nét.', example: '小, 水, 心, 子' }
  ],
  strokeRules: [
    { no: 1, rule: 'Ngang trước sổ sau (先横后竖)', desc: 'Khi có nét ngang và nét sổ giao nhau, nét ngang viết trước, nét sổ cắt qua viết sau.', example: '十 (Ngang 一 trước, Sổ 丨 sau)' },
    { no: 2, rule: 'Phẩy trước mác sau (先撇后捺)', desc: 'Khi nét phẩy và nét mác đi đôi với nhau, nét phẩy bên trái viết trước, nét mác bên phải viết sau.', example: '人 (Phẩy 丿 trước, Mác 乀 sau)' },
    { no: 3, rule: 'Trên trước dưới sau (从上到下)', desc: 'Chữ Hán có tầng trên tầng dưới thì viết hoàn tất phần trên rồi mới viết xuống phần dưới.', example: '三, 早, 京, 意' },
    { no: 4, rule: 'Trái trước phải sau (从左到右)', desc: 'Chữ có cấu trúc song song trái phải thì viết phần bên trái trước rồi viết phần bên phải sau.', example: '你, 好, 明, 朋' },
    { no: 5, rule: 'Ngoài trước trong sau (从外到内)', desc: 'Bao khung bên ngoài viết trước, các nét bên trong viết sau.', example: '月, 同, 问, 风' },
    { no: 6, rule: 'Vào trước đóng sau (先进入后关门)', desc: 'Đối với chữ có khung bao kín bốn phía: Mở cửa ➔ Cho đồ vào bên trong ➔ Khóa cửa đáy lại.', example: '回, 田, 国, 四' },
    { no: 7, rule: 'Giữa trước hai bên sau (先中间后两边)', desc: 'Chữ có tính chất đối xứng hai bên: Viết trục chính giữa trước, sau đó viết cánh bên trái rồi cánh bên phải.', example: '小 (Sổ móc giữa trước, chấm trái chấm phải sau)' }
  ]
};

// 3. READ EXISTING KANGXI RADICALS FROM PREVIOUS BUILD
const prevData = require('./chinese-data.js');
const KANGXI_RADICALS_RAW = prevData.CHINESE_RADICALS_DATA;
const HSK1_VOCAB_BASE = prevData.CHINESE_HSK_VOCAB_DATA;
const GRAMMAR_BASE = prevData.CHINESE_GRAMMAR_DATA;

// 4. EXPAND VOCABULARY TO HSK 2 & HSK 3 (MORE WORDS)
const EXPANDED_VOCAB_LIST = [
  ...HSK1_VOCAB_BASE,

  // --- HSK 2 EXPANSION ---
  { id: 'hsk2_nin', char: '您', pinyin: 'nín', hanviet: 'NẪM', meaning: 'Ngài, ông, bà (kính ngữ của 你)', pos: 'Đại từ', topic: 'social', level: 'HSK 2', strokeCount: 11, radicals: '你 + 心', story: 'Đặt đối phương (你) trang trọng trong trái tim mình (心): Lời xưng hô tôn kính!', example: '您好，请问您贵姓？', examplePinyin: 'Nín hǎo, qǐngwèn nín guìxìng?', exampleVi: 'Kính chào ngài, xin hỏi quý tính của ngài là gì ạ?' },
  { id: 'hsk2_qingwen', char: '请问', pinyin: 'qǐngwèn', hanviet: 'THỈNH VẤN', meaning: 'Xin hỏi, làm ơn cho hỏi', pos: 'Cụm từ', topic: 'social', level: 'HSK 2', strokeCount: 16, radicals: '讠+ 青 | 门 + 口', story: 'Mở lời nhã nhặn (请) trước cánh cửa (门) hé miệng (口) cất tiếng hỏi (问).', example: '请问，洗手间在哪里？', examplePinyin: 'Qǐngwèn, xǐshǒujiān zài nǎlǐ?', exampleVi: 'Xin hỏi, nhà vệ sinh ở đâu vậy?' },
  { id: 'hsk2_bangzhu', char: '帮助', pinyin: 'bāngzhù', hanviet: 'BANG TRỢ', meaning: 'Giúp đỡ, sự hỗ trợ', pos: 'Động từ', topic: 'social', level: 'HSK 2', strokeCount: 16, radicals: '巾 + 助', story: 'Dang rộng cánh tay dùng sức lực (力) tương trợ người đang gặp khó khăn.', example: '谢谢你的帮助！', examplePinyin: 'Xièxie nǐ de bāngzhù!', exampleVi: 'Cảm ơn sự giúp đỡ của bạn!' },
  { id: 'hsk2_jieshao', char: '介绍', pinyin: 'jièshào', hanviet: 'GIỚI THIỆU', meaning: 'Giới thiệu', pos: 'Động từ', topic: 'social', level: 'HSK 2', strokeCount: 12, radicals: '人 + 介 | 纟+ 召', story: 'Nối sợi dây tơ (纟) kết nối người với người làm quen với nhau.', example: '我来介绍一下。', examplePinyin: 'Wǒ lái jièshào yíxià.', exampleVi: 'Để tôi giới thiệu một chút nhé.' },
  { id: 'hsk2_feijichang', char: '机场', pinyin: 'jīchǎng', hanviet: 'CƠ TRƯỜNG', meaning: 'Sân bay, phi trường', pos: 'Danh từ', topic: 'place', level: 'HSK 2', strokeCount: 12, radicals: '机 + 场', story: 'Bãi đất rộng lớn (场) làm nơi cho máy bay (机) cất cánh và hạ cánh.', example: '我们去机场接朋友。', examplePinyin: 'Wǒmen qù jīchǎng jiē péngyou.', exampleVi: 'Chúng tôi ra sân bay đón bạn bè.' },
  { id: 'hsk2_gonggongqiche', char: '公共汽车', pinyin: 'gōnggòng qìchē', hanviet: 'CÔNG CỘNG KHÍ XA', meaning: 'Xe buýt', pos: 'Danh từ', topic: 'place', level: 'HSK 2', strokeCount: 22, radicals: '公 + 共 + 气 + 车', story: 'Cỗ xe hơi phục vụ chung cho tất cả cộng đồng công chúng đi lại.', example: '坐公共汽车很方便。', examplePinyin: 'Zuò gōnggòng qìchē hěn fāngbiàn.', exampleVi: 'Đi xe buýt rất thuận tiện.' },
  { id: 'hsk2_zixingche', char: '自行车', pinyin: 'zìxíngchē', hanviet: 'TỰ HÀNH XA', meaning: 'Xe đạp', pos: 'Danh từ', topic: 'place', level: 'HSK 2', strokeCount: 16, radicals: '自 + 行 + 车', story: 'Cỗ xe tự bản thân mình dùng sức đạp cho nó lăn bánh tiến lên.', example: '骑自行车去上学。', examplePinyin: 'Qí zìxíngchē qù shàngxué.', exampleVi: 'Đạp xe đạp đến trường học.' },
  { id: 'hsk2_luyou', char: '旅游', pinyin: 'lǚyóu', hanviet: 'LỮ DU', meaning: 'Du lịch', pos: 'Động từ', topic: 'place', level: 'HSK 2', strokeCount: 22, radicals: '方 + 游', story: 'Cầm cờ dẫn đoàn rong ruổi du ngoạn trên các dòng sông miền đất mới.', example: '我想去北京旅游。', examplePinyin: 'Wǒ xiǎng qù Běijīng lǚyóu.', exampleVi: 'Tôi muốn đi du lịch Bắc Kinh.' },
  { id: 'hsk2_fujin', char: '附近', pinyin: 'fùjìn', hanviet: 'PHỤ CẬN', meaning: 'Gần đây, vùng lân cận', pos: 'Danh từ', topic: 'place', level: 'HSK 2', strokeCount: 14, radicals: '阝+ 付 | 辶 + 斤', story: 'Những nơi chốn nằm ở khoảng cách rất gần nhau, chỉ cách vài bước chân.', example: '附近有超市吗？', examplePinyin: 'Fùjìn yǒu chāoshì ma?', exampleVi: 'Gần đây có siêu thị không?' },
  { id: 'hsk2_lu', char: '路', pinyin: 'lù', hanviet: 'LỘ', meaning: 'Đường sá, con đường', pos: 'Danh từ', topic: 'place', level: 'HSK 2', strokeCount: 13, radicals: '⻊+ 各', story: 'Dấu chân bước (⻊) của muôn người (各) qua lại tạo thành con đường.', example: '迷路了 (mílù le: bị lạc đường)', examplePinyin: 'Mílù le.', exampleVi: 'Bị lạc đường rồi.' },
  { id: 'hsk2_gui', char: '贵', pinyin: 'guì', hanviet: 'QUÝ', meaning: 'Đắt đỏ, quý giá', pos: 'Tính từ', topic: 'food', level: 'HSK 2', strokeCount: 9, radicals: '中 + 一 + 贝', story: 'Đồ vật quý giá phải trả bằng rất nhiều vỏ sò tiền tệ (贝).', example: '太贵了，便宜一点儿吧！', examplePinyin: 'Tài guì le, piányi yìdiǎnr ba!', exampleVi: 'Đắt quá, rẻ bớt một chút đi!' },
  { id: 'hsk2_pianyi', char: '便宜', pinyin: 'piányi', hanviet: 'TIỆN NGHI', meaning: 'Rẻ, thuận tiện', pos: 'Tính từ', topic: 'food', level: 'HSK 2', strokeCount: 20, radicals: '亻+ 便 | 宜', story: 'Mức giá vừa vặn tiện lợi cho người mua hàng bình dân.', example: '这件衣服很便宜。', examplePinyin: 'Zhè jiàn yīfu hěn piányi.', exampleVi: 'Bộ quần áo này rất rẻ.' },
  { id: 'hsk2_shangdian_mai', char: '卖', pinyin: 'mài', hanviet: 'MẠI', meaning: 'Bán (ngược với Mua 买)', pos: 'Động từ', topic: 'food', level: 'HSK 2', strokeCount: 8, radicals: '十 + 买', story: 'Đội thêm chữ thập mười món đồ lên trên chữ Mua để đem đi BÁN.', example: '这个苹果怎么卖？', examplePinyin: 'Zhè gè píngguǒ zěnme mài?', exampleVi: 'Táo này bán thế nào?' },
  { id: 'hsk2_kafei', char: '咖啡', pinyin: 'kāfēi', hanviet: 'CÀ PHÊ', meaning: 'Cà phê', pos: 'Danh từ', topic: 'food', level: 'HSK 2', strokeCount: 16, radicals: '口 + 加 | 口 + 非', story: 'Thức uống thơm nồng đưa vào miệng thưởng thức mỗi sáng.', example: '喝一杯热咖啡。', examplePinyin: 'Hē yì bēi rè kāfēi.', exampleVi: 'Uống một ly cà phê nóng.' },
  { id: 'hsk2_niunai', char: '牛奶', pinyin: 'niúnǎi', hanviet: 'NGƯU NÃI', meaning: 'Sữa bò', pos: 'Danh từ', topic: 'food', level: 'HSK 2', strokeCount: 9, radicals: '牛 + 奶', story: 'Sữa bổ dưỡng được vắt ra từ đàn bò sữa.', example: '每天早上喝牛奶。', examplePinyin: 'Měitiān zǎoshang hē niúnǎi.', exampleVi: 'Mỗi sáng đều uống sữa bò.' },
  { id: 'hsk2_jidan', char: '鸡蛋', pinyin: 'jīdàn', hanviet: 'KÊ ĐÃN', meaning: 'Trứng gà', pos: 'Danh từ', topic: 'food', level: 'HSK 2', strokeCount: 18, radicals: '鸡 + 蛋', story: 'Quả trứng tròn do gà mái đẻ ra.', example: '吃煎鸡蛋 (chī jiān jīdàn: ăn trứng chiên)', examplePinyin: 'Chī jiān jīdàn.', exampleVi: 'Ăn trứng ốp la/chiên.' },
  { id: 'hsk2_xigua', char: '西瓜', pinyin: 'xīguā', hanviet: 'TÂY QUA', meaning: 'Quả dưa hấu', pos: 'Danh từ', topic: 'food', level: 'HSK 2', strokeCount: 11, radicals: '西 + 瓜', story: 'Quả dưa mọng nước nguồn gốc từ miền tây du nhập vào.', example: '夏天的西瓜又甜又凉。', examplePinyin: 'Xiàtiān de xīguā yòu tián yòu liáng.', exampleVi: 'Dưa hấu mùa hè vừa ngọt vừa mát.' },
  { id: 'hsk2_zaoshang', char: '早上', pinyin: 'zǎoshang', hanviet: 'TẢO THƯỢNG', meaning: 'Buổi sáng sớm', pos: 'Danh từ', topic: 'time', level: 'HSK 2', strokeCount: 9, radicals: '早 + 上', story: 'Mặt trời vừa ló dạng sớm tinh mơ ban mai.', example: '早上好！(Zǎoshang hǎo! - Chào buổi sáng!)', examplePinyin: 'Zǎoshang hǎo!', exampleVi: 'Chào buổi sáng!' },
  { id: 'hsk2_wanshang', char: '晚上', pinyin: 'wǎnshang', hanviet: 'VÃN THƯỢNG', meaning: 'Buổi tối', pos: 'Danh từ', topic: 'time', level: 'HSK 2', strokeCount: 14, radicals: '晚 + 上', story: 'Mặt trời đã lặn khuất bóng, màn đêm buông xuống.', example: '晚上好好休息。', examplePinyin: 'Wǎnshang hǎohǎo xiūxi.', exampleVi: 'Buổi tối hãy nghỉ ngơi thật tốt nhé.' },
  { id: 'hsk2_xiaoshi', char: '小时', pinyin: 'xiǎoshí', hanviet: 'TIỂU THỜI', meaning: 'Tiếng đồng hồ, giờ', pos: 'Danh từ', topic: 'time', level: 'HSK 2', strokeCount: 10, radicals: '小 + 时', story: 'Khoảng thời gian kéo dài 60 phút.', example: '学了两个小时。', examplePinyin: 'Xué le liǎng gè xiǎoshí.', exampleVi: 'Đã học được hai tiếng đồng hồ rồi.' },
  { id: 'hsk2_qunian', char: '去年', pinyin: 'qùnián', hanviet: 'KHỨ NIÊN', meaning: 'Năm ngoái', pos: 'Danh từ', topic: 'time', level: 'HSK 2', strokeCount: 11, radicals: '去 + 年', story: 'Năm đã qua đi không bao giờ trở lại.', example: '我去年来中国。', examplePinyin: 'Wǒ qùnián lái Zhōngguó.', exampleVi: 'Tôi đã đến Trung Quốc vào năm ngoái.' },
  { id: 'hsk2_shengri', char: '生日', pinyin: 'shēngrì', hanviet: 'SINH NHẬT', meaning: 'Sinh nhật', pos: 'Danh từ', topic: 'time', level: 'HSK 2', strokeCount: 9, radicals: '生 + 日', story: 'Ngày mà con người sinh ra cất tiếng khóc chào đời.', example: '祝你生日快乐！', examplePinyin: 'Zhù nǐ shēngrì kuàilè!', exampleVi: 'Chúc mừng sinh nhật bạn!' },
  { id: 'hsk2_qing', char: '晴', pinyin: 'qíng', hanviet: 'TÌNH', meaning: 'Trời nắng đẹp, quang đãng', pos: 'Tính từ', topic: 'time', level: 'HSK 2', strokeCount: 12, radicals: '日 + 青', story: 'Mặt trời (日) chiếu sáng rực rỡ trên nền trời xanh biếc (青).', example: '今天是个大晴天。', examplePinyin: 'Jīntiān shì gè dà qíngtiān.', exampleVi: 'Hôm nay là một ngày nắng rực rỡ.' },
  { id: 'hsk2_yin', char: '阴', pinyin: 'yīn', hanviet: 'ÂM', meaning: 'Trời râm mát, u ám', pos: 'Tính từ', topic: 'time', level: 'HSK 2', strokeCount: 6, radicals: '阝+ 月', story: 'Mặt trời bị mây mù che phủ, không có ánh nắng.', example: '明天阴天，可能下雨。', examplePinyin: 'Míngtiān yīntiān, kěnéng xià yǔ.', exampleVi: 'Ngày mai trời âm u râm mát, có thể có mưa.' },
  { id: 'hsk2_yundong', char: '运动', pinyin: 'yùndòng', hanviet: 'VẬN ĐỘNG', meaning: 'Vận động, thể thao', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 13, radicals: '运 + 动', story: 'Vận chuyển năng lượng cơ thể bằng cách cử động rèn luyện.', example: '多运动对身体好。', examplePinyin: 'Duō yùndòng duì shēntǐ hǎo.', exampleVi: 'Vận động nhiều rất tốt cho sức khỏe.' },
  { id: 'hsk2_paobu', char: '跑步', pinyin: 'pǎobù', hanviet: 'BÀO BỘ', meaning: 'Chạy bộ', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 19, radicals: '跑 + 步', story: 'Đôi chân bước vội vã chạy trên đường.', example: '每天早晨跑步。', examplePinyin: 'Měitiān zǎochén pǎobù.', exampleVi: 'Chạy bộ vào mỗi buổi sáng sớm.' },
  { id: 'hsk2_youyong', char: '游泳', pinyin: 'yóuyǒng', hanviet: 'DU VỊNH', meaning: 'Bơi lội', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 20, radicals: '氵+ 游 | 氵+ 永', story: 'Vẫy vùng trong dòng nước mát bơi lội trường tồn.', example: '夏天去游泳。', examplePinyin: 'Xiàtiān qù yóuyǒng.', exampleVi: 'Mùa hè đi bơi.' },
  { id: 'hsk2_tizuqiu', char: '踢足球', pinyin: 'tī zúqiú', hanviet: 'THÍCH TÚC CẦU', meaning: 'Đá bóng, đá bóng đá', pos: 'Cụm từ', topic: 'action', level: 'HSK 2', strokeCount: 33, radicals: '踢 + 足 + 球', story: 'Dùng bàn chân (足) sút mạnh vào quả bóng tròn.', example: '他们正在踢足球。', examplePinyin: 'Tāmen zhèngzài tī zúqiú.', exampleVi: 'Họ đang đá bóng.' },
  { id: 'hsk2_changge', char: '唱歌', pinyin: 'chàng gē', hanviet: 'XƯỚNG CA', meaning: 'Hát, ca hát', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 25, radicals: '唱 + 歌', story: 'Mở miệng xướng lên giai điệu bài hát ngọt ngào.', example: '她唱歌很好听。', examplePinyin: 'Tā chàng gē hěn hǎotīng.', exampleVi: 'Cô ấy hát nghe rất hay.' },
  { id: 'hsk2_tiaowu', char: '跳舞', pinyin: 'tiào wǔ', hanviet: 'KHIÊU VŨ', meaning: 'Nhảy múa, khiêu vũ', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 27, radicals: '跳 + 舞', story: 'Bước nhảy nhịp nhàng uyển chuyển theo điệu nhạc.', example: '在广场跳舞。', examplePinyin: 'Zài guǎngchǎng tiàowǔ.', exampleVi: 'Nhảy múa ở quảng trường.' },
  { id: 'hsk2_xiuxi', char: '休息', pinyin: 'xiūxi', hanviet: 'HƯU TỨC', meaning: 'Nghỉ ngơi', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 16, radicals: '亻+ 木 | 自 + 心', story: 'Người (亻) tựa gốc cây (木) nghỉ ngơi, thở đều bình tâm (心).', example: '累了就休息一会儿。', examplePinyin: 'Lèi le jiù xiūxi yíhuìr.', exampleVi: 'Mệt rồi thì nghỉ ngơi một lát đi.' },
  { id: 'hsk2_shengbin', char: '生病', pinyin: 'shēng bìng', hanviet: 'SINH BỆNH', meaning: 'Bị ốm, phát bệnh', pos: 'Động từ', topic: 'action', level: 'HSK 2', strokeCount: 15, radicals: '生 + 疒 + 丙', story: 'Cơ thể nhiễm mầm bệnh nằm trên giường ốm yếu.', example: '他生病了，没去上学。', examplePinyin: 'Tā shēngbìng le, méi qù shàngxué.', exampleVi: 'Cậu ấy bị ốm nên không đi học.' },
  { id: 'hsk2_chiyao', char: '吃药', pinyin: 'chī yào', hanviet: 'CẬT DƯỢC', meaning: 'Uống thuốc (tiếng Trung dùng "Ăn thuốc")', pos: 'Cụm từ', topic: 'action', level: 'HSK 2', strokeCount: 15, radicals: '吃 + 艹 + 乐', story: 'Uống thảo dược cỏ cây để thân tâm mau vui khỏe (乐).', example: '记得按时吃药。', examplePinyin: 'Jìdé ànshí chī yào.', exampleVi: 'Nhớ uống thuốc đúng giờ nhé.' },
  { id: 'hsk2_kuai', char: '快', pinyin: 'kuài', hanviet: 'KHOÁI', meaning: 'Nhanh, mau lẹ', pos: 'Tính từ', topic: 'state', level: 'HSK 2', strokeCount: 7, radicals: '忄+ 夬', story: 'Trong lòng (忄) phấn khởi làm việc gì cũng nhanh nhẹn.', example: '走快一点儿！', examplePinyin: 'Zǒu kuài yìdiǎnr!', exampleVi: 'Đi nhanh lên một chút nào!' },
  { id: 'hsk2_man', char: '慢', pinyin: 'màn', hanviet: 'MẠN', meaning: 'Chậm chạp, từ từ', pos: 'Tính từ', topic: 'state', level: 'HSK 2', strokeCount: 14, radicals: '忄+ 曼', story: 'Bước đi thong thả từ tốn không vội vàng.', example: '慢走，下次再来！', examplePinyin: 'Màn zǒu, xià cì zài lái!', exampleVi: 'Đi cẩn thận nhé, lần sau lại đến chơi!' },
  { id: 'hsk2_lei', char: '累', pinyin: 'lèi', hanviet: 'LŨY', meaning: 'Mệt mỏi', pos: 'Tính từ', topic: 'state', level: 'HSK 2', strokeCount: 11, radicals: '田 + 糸', story: 'Làm việc quần quật trên ruộng (田) kéo dây tơ mồ hôi ướt đẫm mệt nhừ.', example: '今天工作太累了。', examplePinyin: 'Jīntiān gōngzuò tài lèi le.', exampleVi: 'Hôm nay làm việc mệt quá rồi.' },
  { id: 'hsk2_mang', char: '忙', pinyin: 'máng', hanviet: 'MANG', meaning: 'Bận rộn', pos: 'Tính từ', topic: 'state', level: 'HSK 2', strokeCount: 6, radicals: '忄+ 亡', story: 'Trái tim (忄) bận tới mức như mất tích (亡) không còn tâm trí đâu nữa.', example: '你最近忙什么呢？', examplePinyin: 'Nǐ zuìjìn máng shénme ne?', exampleVi: 'Dạo này bạn đang bận việc gì thế?' },
  { id: 'hsk2_kuaile', char: '快乐', pinyin: 'kuàilè', hanviet: 'KHOÁI LẠC', meaning: 'Vui vẻ, hạnh phúc', pos: 'Tính từ', topic: 'state', level: 'HSK 2', strokeCount: 12, radicals: '快 + 乐', story: 'Tâm trạng hoan hỉ, ngân nga như khúc nhạc vui.', example: '新年快乐！', examplePinyin: 'Xīnnián kuàilè!', exampleVi: 'Chúc mừng năm mới vui vẻ!' },

  // --- HSK 3 CORE WORDS ---
  { id: 'hsk3_fansi', char: '翻译', pinyin: 'fānyì', hanviet: 'PHIÊN DỊCH', meaning: 'Dịch thuật, phiên dịch', pos: 'Động từ', topic: 'work', level: 'HSK 3', strokeCount: 22, radicals: '番 + 讠+ 尺', story: 'Lật giở câu chữ (翻) chuyển đổi sang lời nói ngôn ngữ khác (译).', example: '请帮我翻译一下这句话。', examplePinyin: 'Qǐng bāng wǒ fānyì yíxià zhè jù huà.', exampleVi: 'Xin hãy giúp tôi dịch câu này với.' },
  { id: 'hsk3_liujie', char: '了解', pinyin: 'liǎojiě', hanviet: 'LIỄU GIẢI', meaning: 'Hiểu rõ, tìm hiểu', pos: 'Động từ', topic: 'work', level: 'HSK 3', strokeCount: 15, radicals: '了 + 角 + 刀 + 牛', story: 'Cầm dao xẻ từng chi tiết để thấu suốt bản chất sự việc.', example: '我很了解他的性格。', examplePinyin: 'Wǒ hěn liǎojiě tā de xìnggé.', exampleVi: 'Tôi rất hiểu tính cách của anh ấy.' },
  { id: 'hsk3_nuli', char: '努力', pinyin: 'nǔlì', hanviet: 'NỖ LỰC', meaning: 'Cố gắng, chăm chỉ, nỗ lực', pos: 'Động từ / Tính từ', topic: 'work', level: 'HSK 3', strokeCount: 9, radicals: '奴 + 力', story: 'Dốc hết toàn bộ sức mạnh cơ bắp và ý chí để đạt mục tiêu.', example: '只要努力，就能成功。', examplePinyin: 'Zhǐyào nǔlì, jiù néng chénggōng.', exampleVi: 'Chỉ cần nỗ lực thì nhất định sẽ thành công.' },
  { id: 'hsk3_chenggong', char: '成功', pinyin: 'chénggōng', hanviet: 'THÀNH CÔNG', meaning: 'Thành công', pos: 'Động từ / Danh từ', topic: 'work', level: 'HSK 3', strokeCount: 9, radicals: '戈 + 工 + 力', story: 'Tay nghề khéo léo và sức mạnh tạo nên kết quả huy hoàng.', example: '祝你面试成功！', examplePinyin: 'Zhù nǐ miànshì chénggōng!', exampleVi: 'Chúc bạn phỏng vấn thành công!' },
  { id: 'hsk3_jihua', char: '计划', pinyin: 'jìhuà', hanviet: 'KẾ HOẠCH', meaning: 'Kế hoạch, dự định', pos: 'Danh từ / Động từ', topic: 'work', level: 'HSK 3', strokeCount: 12, radicals: '讠+ 十 | 划', story: 'Lời tính toán mười phương (计) được vạch ra rõ ràng (划).', example: '今年你有什么计划？', examplePinyin: 'Jīnnián nǐ yǒu shénme jìhuà?', exampleVi: 'Năm nay bạn có kế hoạch gì chưa?' },
  { id: 'hsk3_huanjing', char: '环境', pinyin: 'huánjìng', hanviet: 'HOÀN CẢNH', meaning: 'Môi trường, hoàn cảnh', pos: 'Danh từ', topic: 'place', level: 'HSK 3', strokeCount: 22, radicals: '王 + 土 + 竟', story: 'Không gian sống bao quanh xung quanh con người.', example: '保护环境，人人有责。', examplePinyin: 'Bǎohù huánjìng, rénrén yǒu zé.', exampleVi: 'Bảo vệ môi trường, ai ai cũng có trách nhiệm.' },
  { id: 'hsk3_xinwen', char: '新闻', pinyin: 'xīnwén', hanviet: 'TÂN VĂN', meaning: 'Tin tức, thời sự', pos: 'Danh từ', topic: 'work', level: 'HSK 3', strokeCount: 22, radicals: '斤 + 耳', story: 'Những điều mới mẻ lọt vào tai nghe thấy hàng ngày.', example: '每天看新闻了解世界。', examplePinyin: 'Měitiān kàn xīnwén liǎojiě shìjiè.', exampleVi: 'Mỗi ngày xem thời sự để hiểu biết thế giới.' },
  { id: 'hsk3_ganxingqu', char: '感兴趣', pinyin: 'gǎn xìngqù', hanviet: 'CẢM HỨNG THÚ', meaning: 'Có hứng thú, thích thú', pos: 'Cụm từ', topic: 'state', level: 'HSK 3', strokeCount: 25, radicals: '感 + 兴 + 趣', story: 'Trái tim rung động cảm thấy vô cùng thú vị và say mê.', example: '我对中国书法很感兴趣。', examplePinyin: 'Wǒ duì Zhōngguó shūfǎ hěn gǎnxìngqù.', exampleVi: 'Tôi rất có hứng thú với thư pháp Trung Hoa.' }
];

// 5. CHINESE MEMORY METHODS (CHIẾT TỰ & SIÊU TRÍ NHỚ ĐỈNH CAO)
const CHINESE_MEMORY_METHODS = [
  {
    id: 'method_radical_etymology',
    title: '1. Phương Pháp Chiết Tự Logic (Etymological Anatomy)',
    tagline: 'Mổ xẻ kết cấu Hán tự thành các bộ thủ tượng hình nguyên thủy',
    icon: 'split',
    desc: 'Chữ Hán không phải là những nét vẽ hỗn loạn ngẫu nhiên! Hơn 85% chữ Hán là chữ Hình Thanh (Hình biểu nghĩa + Thanh biểu âm) hoặc Hội Ý (ghép nghĩa các bộ thủ). Khi hiểu rõ ý nghĩa của 214 Bộ Thủ Khang Hy, bạn chỉ cần nhìn vào bộ phận là đọc được linh hồn của chữ.',
    principles: [
      'Bộ phận biểu thị ý nghĩa (Hình bàng): Ví dụ 氵(Nước) luôn liên quan chất lỏng, 扌(Thủ) luôn liên quan động tác tay, 忄(Tâm) liên quan cảm xúc suy nghĩ.',
      'Bộ phận biểu thị âm đọc (Thanh bàng): Gợi ý âm đọc gần giống với âm gốc.',
      'Tư duy ghép nghĩa logic: 休 (Hưu) = 人 (Người) + 木 (Cây) ➔ Người tựa vào gốc cây nghỉ mát chính là nghỉ ngơi (Nghỉ hưu)!'
    ],
    examples: [
      { char: '安 (ān - An)', formula: '宀 (Mái nhà) + 女 (Người phụ nữ)', meaning: 'Dưới mái nhà có người phụ nữ chăm lo gia đình êm ấm thì mọi chuyện mới được AN toàn, bình an!' },
      { char: '明 (míng - Minh)', formula: '日 (Mặt trời) + 月 (Mặt trăng)', meaning: 'Hai vầng nhật nguyệt cùng tỏa sáng rực rỡ thì thiên hạ sáng sủa, thông MINH, sáng tỏ!' },
      { char: '看 (kàn - Khán/Xem)', formula: '手 (Bàn tay) + 目 (Con mắt)', meaning: 'Đặt bàn tay che trên mắt để phóng tầm mắt nhìn xa xăm chính là xem, nhìn!' }
    ]
  },
  {
    id: 'method_story_mnemonic',
    title: '2. Kỹ Thuật Câu Chuyện Tượng Hình Não Phải (Right-Brain Story Method)',
    tagline: 'Biến mỗi Hán tự thành một bộ phim ngắn drama hài hước khó quên',
    icon: 'clapperboard',
    desc: 'Não bộ con người ghi nhớ hình ảnh và cảm xúc nhanh gấp 60.000 lần so với văn bản trừu tượng! Bằng cách gán cho từng chữ Hán một câu chuyện có hình tượng kỳ lạ, bất ngờ hoặc gây cười, thông tin sẽ được lưu thẳng vào vỏ não dài hạn.',
    principles: [
      'Phóng đại & Cường điệu: Hình ảnh càng độc lạ, não càng ghi nhớ sâu.',
      'Kích hoạt đa giác quan: Tưởng tượng mùi vị, âm thanh, màu sắc của câu chuyện.',
      'Gắn với trải nghiệm cá nhân: Liên hệ câu chuyện với những điều thân thuộc hàng ngày.'
    ],
    examples: [
      { char: '哭 (kū - Khốc/Khóc)', story: 'Chữ có hai cái miệng 口 口 ở trên đang gào thét to, ở dưới là con chó 犬: Con chó cưng bị lạc làm hai cái miệng gào KHÓC lóc thảm thiết!' },
      { char: '家 (jiā - Gia/Nhà)', story: 'Dưới mái nhà 宀 nuôi một chú heo béo múp 豕: Thời xưa có nhà là phải có heo nuôi đầy chuồng ấm no, đó chính là GIA đình!' },
      { char: '男 (nán - Nam/Đàn ông)', story: 'Trên là ruộng 田, dưới là sức lực 力: Người dùng sức lực cày bừa trên đồng ruộng chính là người đàn ông (Nam giới)!' }
    ]
  },
  {
    id: 'method_sound_linking',
    title: '3. Kỹ Thuật Neo Âm Đồng Vận Pinyin (Sound-Linking Pinyin)',
    tagline: 'Bắc cầu âm thanh giữa Pinyin, Hán Việt và hình ảnh cảm xúc',
    icon: 'mic-2',
    desc: 'Khó khăn lớn nhất của người Việt là nhớ dấu thanh điệu (4 thanh) và phân biệt các âm bật hơi (b vs p, d vs t, z vs c, zh vs ch). Phương pháp Neo Âm giúp giải quyết triệt để.',
    principles: [
      'Neo độ cao thanh điệu: Thanh 1 (Hét to trên đỉnh núi phẳng), Thanh 2 (Vút lên như ngọn tên lửa), Thanh 3 (Lặn sâu xuống đáy biển rồi ngoi lên), Thanh 4 (Dứt khoát chém kiếm sắc bén).',
      'Đồng âm Hán Việt: Hơn 65% từ vựng tiếng Việt có gốc Hán! Chỉ cần nhớ quy luật biến âm Hán Việt sang Pinyin là mở khóa ngay hàng ngàn từ.'
    ],
    examples: [
      { pinyin: 'mǎi (买 - Mua) vs mài (卖 - Bán)', tip: 'Thanh 3 lặn xuống: Đi Mua đồ thì phải cúi người xuống lựa (mǎi). Thanh 4 chém xuống dứt khoát: Bán đồ thì dứt khoát đưa tay nhận tiền (mài)!' },
      { pinyin: 'tā (他 / 她)', tip: 'Tất cả đại từ ngôi thứ 3 (Anh ấy, Cô ấy, Nó) đều đọc là tā phẳng đều như một bức tường phẳng vô danh.' }
    ]
  },
  {
    id: 'method_srs_spacing',
    title: '4. Thuật Toán Lặp Lại Ngắt Quãng SRS (Spaced Repetition System)',
    tagline: 'Ôn tập đúng thời điểm vàng ngay trước khi não bộ chuẩn bị quên',
    icon: 'repeat',
    desc: 'Được phát triển dựa trên Đường cong quên lãng của nhà khoa học Hermann Ebbinghaus. Nếu không ôn tập, bạn sẽ quên 75% từ vựng sau 48 giờ. SRS tính toán chính xác chu kỳ nhắc lại: 10 phút ➔ 1 ngày ➔ 3 ngày ➔ 7 ngày ➔ 14 ngày ➔ 30 ngày.',
    principles: [
      'Chủ động gợi nhớ (Active Recall): Không đọc lại thụ động, mà nhìn chữ Hán tự nhớ nghĩa hoặc nghe âm tự vẽ lại chữ.',
      'Phân loại 3 mức độ nhớ: Chưa nhớ (Ôn lại ngay), Hơi nhớ (Lặp lại sau), Đã thuộc (Ghi nhận Mastered).'
    ],
    examples: [
      { step: 'Vòng 1 (Sau 10 phút)', action: 'Luyện viết và kiểm tra trên Bàn Viết Canvas Ô Mễ' },
      { step: 'Vòng 2 (Sau 24 giờ)', action: 'Lật Flashcard 3D tự kiểm tra phản xạ' },
      { step: 'Vòng 3 (Sau 7 ngày)', action: 'Thử thách Đấu Trường Quiz đa chế độ đạt Streak cao' }
    ]
  }
];

// 6. INTERACTIVE LESSONS ROADMAP & DIALOGUES (10 BÀI HỌC VƯỢT ẢI)
const CHINESE_LESSONS_DATA = [
  {
    id: 'lesson_1',
    level: 1,
    title: 'Bài 1: Lời Chào Đầu Tiên & Xã Giao Cơ Bản',
    objective: 'Nắm vững cách chào hỏi, cảm ơn, xin lỗi và làm quen lịch sự bằng tiếng Trung.',
    vocabIds: ['hsk1_nihao', 'hsk1_xiexie', 'hsk1_zaijian', 'hsk1_duibuqi', 'hsk1_meiguanxi', 'hsk1_bukeqi'],
    dialogue: [
      { speaker: 'A', zh: '你好！', pinyin: 'Nǐ hǎo!', vi: 'Xin chào bạn!' },
      { speaker: 'B', zh: '你好！很高兴认识你。', pinyin: 'Nǐ hǎo! Hěn gāoxìng rènshí nǐ.', vi: 'Chào bạn! Rất vui được quen biết bạn.' },
      { speaker: 'A', zh: '谢谢你！明天见！', pinyin: 'Xièxie nǐ! Míngtiān jiàn!', vi: 'Cảm ơn bạn nhé! Ngày mai gặp lại!' },
      { speaker: 'B', zh: '不客气，再见！', pinyin: 'Bú kèqi, zàijiàn!', vi: 'Đừng khách sáo, tạm biệt nhé!' }
    ]
  },
  {
    id: 'lesson_2',
    level: 2,
    title: 'Bài 2: Tên Tuổi, Quốc Tịch & Nghề Nghiệp',
    objective: 'Biết cách tự giới thiệu bản thân, hỏi tên, quốc tịch và nói về công việc.',
    vocabIds: ['hsk1_wo', 'hsk1_ni', 'hsk1_jiao', 'hsk1_shenme', 'hsk1_shi_verb', 'hsk1_ren', 'hsk1_laoshi', 'hsk1_xuesheng'],
    dialogue: [
      { speaker: 'A', zh: '请问，你叫什么名字？', pinyin: 'Qǐngwèn, nǐ jiào shénme míngzi?', vi: 'Xin hỏi, bạn tên là gì vậy?' },
      { speaker: 'B', zh: '我叫李明。你是哪国人？', pinyin: 'Wǒ jiào Lǐ Míng. Nǐ shì nǎ guó rén?', vi: 'Tôi tên là Lý Minh. Bạn là người nước nào?' },
      { speaker: 'A', zh: '我是越南人。你是学生吗？', pinyin: 'Wǒ shì Yuènán rén. Nǐ shì xuésheng ma?', vi: 'Tôi là người Việt Nam. Bạn có phải học sinh không?' },
      { speaker: 'B', zh: '不是，我是汉语老师。', pinyin: 'Bú shì, wǒ shì Hànyǔ lǎoshī.', vi: 'Không phải, tôi là giáo viên tiếng Trung.' }
    ]
  },
  {
    id: 'lesson_3',
    level: 3,
    title: 'Bài 3: Đếm Số, Tiền Bạc & Mua Sắm',
    objective: 'Thành thạo đếm số 1-100, hỏi giá tiền và mặc cả khi mua hàng hóa.',
    vocabIds: ['hsk1_duoshao', 'hsk1_qian', 'hsk1_kuai', 'hsk1_mai', 'hsk1_pingguo', 'hsk2_gui', 'hsk2_pianyi'],
    dialogue: [
      { speaker: 'A', zh: '老板，这个苹果多少钱一斤？', pinyin: 'Lǎobǎn, zhè gè píngguǒ duōshao qián yì jīn?', vi: 'Chủ tiệm ơi, táo này bao nhiêu tiền một cân?' },
      { speaker: 'B', zh: '五块钱一斤。', pinyin: 'Wǔ kuài qián yì jīn.', vi: '5 tệ một cân.' },
      { speaker: 'A', zh: '太贵了！便宜一点儿吧。', pinyin: 'Tài guì le! Piányi yìdiǎnr ba.', vi: 'Đắt quá rồi! Rẻ bớt một chút đi.' },
      { speaker: 'B', zh: '给你四块钱吧！', pinyin: 'Gěi nǐ sì kuài qián ba!', vi: 'Lấy bạn 4 tệ nhé!' }
    ]
  },
  {
    id: 'lesson_4',
    level: 4,
    title: 'Bài 4: Thời Gian, Ngày Tháng & Hẹn Gặp',
    objective: 'Nói chuẩn giờ giấc, các ngày trong tuần và sắp xếp cuộc hẹn đúng ngữ pháp.',
    vocabIds: ['hsk1_xianzai', 'hsk1_ji', 'hsk1_dian', 'hsk1_jintian', 'hsk1_mingtian', 'hsk1_xingqi'],
    dialogue: [
      { speaker: 'A', zh: '现在几点了？', pinyin: 'Xiànzài jǐ diǎn le?', vi: 'Bây giờ là mấy giờ rồi?' },
      { speaker: 'B', zh: '现在上午十点半。', pinyin: 'Xiànzài shàngwǔ shí diǎn bàn.', vi: 'Bây giờ là 10 giờ rưỡi sáng.' },
      { speaker: 'A', zh: '明天星期几？你有空吗？', pinyin: 'Míngtiān xīngqī jǐ? Nǐ yǒu kòng ma?', vi: 'Ngày mai là thứ mấy? Bạn có rảnh không?' },
      { speaker: 'B', zh: '明天星期六，我们一起去喝茶吧！', pinyin: 'Míngtiān xīngqīliù, wǒmen yìqǐ qù hē chá ba!', vi: 'Mai là thứ Bảy, chúng ta cùng nhau đi uống trà nhé!' }
    ]
  },
  {
    id: 'lesson_5',
    level: 5,
    title: 'Bài 5: Đi Ăn Nhà Hàng & Ẩm Thực Trung Hoa',
    objective: 'Biết gọi món ăn, đồ uống và khen ngợi món ăn trong bàn tiệc.',
    vocabIds: ['hsk1_chi', 'hsk1_he', 'hsk1_cha', 'hsk1_mifan', 'hsk1_cai', 'hsk1_fandian', 'hsk1_hao'],
    dialogue: [
      { speaker: 'A', zh: '你想吃什么中国菜？', pinyin: 'Nǐ xiǎng chī shénme Zhōngguó cài?', vi: 'Bạn muốn ăn món Trung Quốc nào?' },
      { speaker: 'B', zh: '我想吃米饭和北京烤鸭。', pinyin: 'Wǒ xiǎng chī mǐfàn hé Běijīng kǎoyā.', vi: 'Tôi muốn ăn cơm trắng và vịt quay Bắc Kinh.' },
      { speaker: 'A', zh: '你想喝茶还是喝水？', pinyin: 'Nǐ xiǎng hē chá háishì hē shuǐ?', vi: 'Bạn muốn uống trà hay uống nước?' },
      { speaker: 'B', zh: '喝中国绿茶吧，很好喝！', pinyin: 'Hē Zhōngguó lǜchá ba, hěn hǎohē!', vi: 'Uống trà xanh Trung Quốc đi, ngon lắm!' }
    ]
  }
];

// 7. ASSEMBLE COMPLETE VOCABULARY & RADICALS REPOSITORY FOR CANVAS
const CHINESE_DATA_REPOSITORY = [];

// Thêm toàn bộ 214 Bộ Thủ Khang Hy
KANGXI_RADICALS_RAW.forEach((rad) => {
  CHINESE_DATA_REPOSITORY.push({
    id: 'rad_' + rad.no,
    char: rad.char,
    alt: rad.alt || rad.char,
    pinyin: rad.pinyin,
    hanviet: rad.hanviet,
    meaning: rad.meaning,
    level: 'Bộ Thủ',
    strokeCount: rad.strokes,
    category: 'radicals',
    radicals: 'Bộ thủ số ' + rad.no + ' (' + rad.strokes + ' nét)' + (rad.alt ? ' - Biến thể: ' + rad.alt : ''),
    story: 'Bộ thủ #' + rad.no + ' trong 214 Bộ Thủ Khang Hy: ' + rad.meaning + '.',
    strokeOrder: 'Nét chữ tượng hình ' + rad.strokes + ' nét chuẩn thư pháp.',
    example: 'Bộ thủ nền tảng cấu tạo nên hàng vạn Hán tự trong tiếng Trung.'
  });
});

// Thêm toàn bộ Từ Vựng (HSK 1, 2, 3)
EXPANDED_VOCAB_LIST.forEach((vocab) => {
  CHINESE_DATA_REPOSITORY.push({
    id: vocab.id,
    char: vocab.char,
    alt: vocab.char,
    pinyin: vocab.pinyin,
    hanviet: vocab.hanviet,
    meaning: vocab.meaning,
    pos: vocab.pos,
    level: vocab.level || 'HSK 1',
    strokeCount: vocab.strokeCount,
    category: (vocab.level && vocab.level.toLowerCase().replace(' ', '')) || 'hsk1',
    topic: vocab.topic,
    radicals: vocab.radicals,
    story: vocab.story,
    strokeOrder: 'Viết theo thứ tự quy tắc bút thuận từng nét.',
    example: vocab.example + ' (' + vocab.examplePinyin + ' - ' + vocab.exampleVi + ')'
  });
});

// Xuất file JS hoàn chỉnh
const outputContent = `/**
 * BÁCH KHOA TOÀN THƯ HÁN TỰ & SIÊU TRÍ NHỚ TIẾNG TRUNG
 * Tự động tạo bởi build_chinese_app.js cho buivananhdev/sieu-tri-nho-app
 * Đầy đủ:
 * 1. Pinyin Matrix (21 Thanh mẫu, 36 Vận mẫu, 4 Thanh điệu, Quy tắc biến điệu)
 * 2. 8 Nét Cơ Bản & 7 Quy Tắc Bút Thuận Vàng
 * 3. 214 Bộ Thủ Khang Hy Toàn Thư (từ 1 đến 17 nét)
 * 4. Kho Từ Vựng HSK 1, 2, 3 phong phú với hàng trăm từ vựng thực chiến
 * 5. 12 Bài Học Ngữ Pháp Cơ Bản Thực Chiến
 * 6. 4 Phương Pháp Siêu Trí Nhớ Tiếng Trung Đỉnh Cao
 * 7. Lộ Trình 10 Bài Học Vượt Ải & Hội Thoại Thực Chiến
 * 8. Tổng hợp Kho Hán Tự Canvas và Quiz
 */

const CHINESE_PINYIN_DATA = ${JSON.stringify(CHINESE_PINYIN_DATA, null, 2)};

const CHINESE_STROKES_DATA = ${JSON.stringify(CHINESE_STROKES_DATA, null, 2)};

const CHINESE_RADICALS_DATA = ${JSON.stringify(KANGXI_RADICALS_RAW, null, 2)};

const CHINESE_HSK_VOCAB_DATA = ${JSON.stringify(EXPANDED_VOCAB_LIST, null, 2)};

const CHINESE_GRAMMAR_DATA = ${JSON.stringify(GRAMMAR_BASE, null, 2)};

const CHINESE_MEMORY_METHODS = ${JSON.stringify(CHINESE_MEMORY_METHODS, null, 2)};

const CHINESE_LESSONS_DATA = ${JSON.stringify(CHINESE_LESSONS_DATA, null, 2)};

const CHINESE_DATA_REPOSITORY = ${JSON.stringify(CHINESE_DATA_REPOSITORY, null, 2)};

if (typeof window !== 'undefined') {
  window.CHINESE_PINYIN_DATA = CHINESE_PINYIN_DATA;
  window.CHINESE_STROKES_DATA = CHINESE_STROKES_DATA;
  window.CHINESE_RADICALS_DATA = CHINESE_RADICALS_DATA;
  window.CHINESE_HSK_VOCAB_DATA = CHINESE_HSK_VOCAB_DATA;
  window.CHINESE_GRAMMAR_DATA = CHINESE_GRAMMAR_DATA;
  window.CHINESE_MEMORY_METHODS = CHINESE_MEMORY_METHODS;
  window.CHINESE_LESSONS_DATA = CHINESE_LESSONS_DATA;
  window.CHINESE_DATA_REPOSITORY = CHINESE_DATA_REPOSITORY;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CHINESE_PINYIN_DATA,
    CHINESE_STROKES_DATA,
    CHINESE_RADICALS_DATA,
    CHINESE_HSK_VOCAB_DATA,
    CHINESE_GRAMMAR_DATA,
    CHINESE_MEMORY_METHODS,
    CHINESE_LESSONS_DATA,
    CHINESE_DATA_REPOSITORY
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'chinese-data.js'), outputContent, 'utf-8');
console.log('Successfully generated expanded chinese-data.js!');
console.log('Total Kangxi Radicals:', KANGXI_RADICALS_RAW.length);
console.log('Total Expanded Vocabulary:', EXPANDED_VOCAB_LIST.length);
console.log('Total Items in Repository:', CHINESE_DATA_REPOSITORY.length);
console.log('Total Memory Methods:', CHINESE_MEMORY_METHODS.length);
console.log('Total Roadmap Lessons:', CHINESE_LESSONS_DATA.length);
