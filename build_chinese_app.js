// Generator script for comprehensive Chinese Learning Application Data
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

// 3. COMPLETE 214 KANGXI RADICALS
const KANGXI_RADICALS_RAW = [
  // 1 NÉT
  { no: 1, char: '一', pinyin: 'yī', hanviet: 'NHẤT', strokes: 1, meaning: 'Số một, khởi đầu của vạn vật', alt: '' },
  { no: 2, char: '丨', pinyin: 'gǔn', hanviet: 'CỔN', strokes: 1, meaning: 'Nét sổ dọc xuyên suốt từ trên xuống', alt: '' },
  { no: 3, char: '丶', pinyin: 'zhǔ', hanviet: 'CHỦ', strokes: 1, meaning: 'Nét chấm, điểm dừng', alt: '' },
  { no: 4, char: '丿', pinyin: 'piě', hanviet: 'PHIỆT', strokes: 1, meaning: 'Nét phẩy, uốn cong sang trái', alt: '' },
  { no: 5, char: '乙', pinyin: 'yǐ', hanviet: 'ẤT', strokes: 1, meaning: 'Vị trí thứ hai trong Thiên Can, uốn lượn', alt: '⺄, 乚' },
  { no: 6, char: '亅', pinyin: 'jué', hanviet: 'QUYẾT', strokes: 1, meaning: 'Nét sổ có móc ngược lên', alt: '' },
  // 2 NÉT
  { no: 7, char: '二', pinyin: 'èr', hanviet: 'NHỊ', strokes: 2, meaning: 'Số hai, âm dương tương đối', alt: '' },
  { no: 8, char: '亠', pinyin: 'tóu', hanviet: 'ĐẦU', strokes: 2, meaning: 'Nắp đậy ở trên đầu', alt: '' },
  { no: 9, char: '人', pinyin: 'rén', hanviet: 'NHÂN', strokes: 2, meaning: 'Con người, dáng người đi', alt: '亻' },
  { no: 10, char: '儿', pinyin: 'ér', hanviet: 'NHI', strokes: 2, meaning: 'Trẻ con, đôi chân người đứng', alt: '' },
  { no: 11, char: '入', pinyin: 'rù', hanviet: 'NHẬP', strokes: 2, meaning: 'Đi vào, tiến vào trong', alt: '' },
  { no: 12, char: '八', pinyin: 'bā', hanviet: 'BÁT', strokes: 2, meaning: 'Số tám, tách rời sang hai bên', alt: '丷' },
  { no: 13, char: '冂', pinyin: 'jiōng', hanviet: 'QUYNH', strokes: 2, meaning: 'Vùng đất biên ải, trống trải', alt: '' },
  { no: 14, char: '冖', pinyin: 'mì', hanviet: 'MỊCH', strokes: 2, meaning: 'Khăn trùm, che phủ lên trên', alt: '' },
  { no: 15, char: '冫', pinyin: 'bīng', hanviet: 'BĂNG', strokes: 2, meaning: 'Nước đóng băng, lạnh buốt', alt: '' },
  { no: 16, char: '几', pinyin: 'jī', hanviet: 'KỶ', strokes: 2, meaning: 'Cái bàn nhỏ, ghế nhỏ tựa', alt: '' },
  { no: 17, char: '凵', pinyin: 'kǎn', hanviet: 'KHẢM', strokes: 2, meaning: 'Cái hố trũng, đồ đựng rỗng', alt: '' },
  { no: 18, char: '刀', pinyin: 'dāo', hanviet: 'ĐAO', strokes: 2, meaning: 'Con dao, vũ khí chém cắt', alt: '刂' },
  { no: 19, char: '力', pinyin: 'lì', hanviet: 'LỰC', strokes: 2, meaning: 'Sức mạnh cơ bắp, bắp tay cuồn cuộn', alt: '' },
  { no: 20, char: '勹', pinyin: 'bāo', hanviet: 'BAO', strokes: 2, meaning: 'Bao bọc, ôm lấy', alt: '' },
  { no: 21, char: '匕', pinyin: 'bǐ', hanviet: 'CHỦY', strokes: 2, meaning: 'Cái thìa, muỗng múc canh', alt: '' },
  { no: 22, char: '匚', pinyin: 'fāng', hanviet: 'PHƯƠNG', strokes: 2, meaning: 'Cái tủ đựng, hòm vuông để đồ', alt: '' },
  { no: 23, char: '匸', pinyin: 'xì', hanviet: 'HỆ', strokes: 2, meaning: 'Chỗ cất giấu kín đáo', alt: '' },
  { no: 24, char: '十', pinyin: 'shí', hanviet: 'THẬP', strokes: 2, meaning: 'Số mười, trọn vẹn thập toàn thập mỹ', alt: '' },
  { no: 25, char: '卜', pinyin: 'bǔ', hanviet: 'BỐC', strokes: 2, meaning: 'Xem bói, vết nứt mai rùa bói toán', alt: '' },
  { no: 26, char: '卩', pinyin: 'jié', hanviet: 'TIẾT', strokes: 2, meaning: 'Khớp xương, đốt tre, ấn tín', alt: '⺋' },
  { no: 27, char: '厂', pinyin: 'hǎn', hanviet: 'HÁN', strokes: 2, meaning: 'Sườn núi, vách đá dựng đứng', alt: '' },
  { no: 28, char: '厶', pinyin: 'sī', hanviet: 'KHỨ / TƯ', strokes: 2, meaning: 'Riêng tư, kín đáo của bản thân', alt: '' },
  { no: 29, char: '又', pinyin: 'yòu', hanviet: 'HỰU', strokes: 2, meaning: 'Lại nữa, bàn tay phải nắm bắt', alt: '' },
  // 3 NÉT
  { no: 30, char: '口', pinyin: 'kǒu', hanviet: 'KHẨU', strokes: 3, meaning: 'Cái miệng, ăn uống, nói năng, cổng', alt: '' },
  { no: 31, char: '囗', pinyin: 'wéi', hanviet: 'VI', strokes: 3, meaning: 'Vây quanh bốn phía, biên giới bao bọc', alt: '' },
  { no: 32, char: '土', pinyin: 'tǔ', hanviet: 'THỔ', strokes: 3, meaning: 'Đất đai, thổ nhưỡng, gò đất', alt: '' },
  { no: 33, char: '士', pinyin: 'shì', hanviet: 'SĨ', strokes: 3, meaning: 'Kẻ sĩ, người tài giỏi, học trò', alt: '' },
  { no: 34, char: '夂', pinyin: 'zhǐ', hanviet: 'TRĨ', strokes: 3, meaning: 'Đi chậm chạp từ phía sau tới', alt: '' },
  { no: 35, char: '夊', pinyin: 'suī', hanviet: 'TUY', strokes: 3, meaning: 'Bước đi kéo lê chân chậm rãi', alt: '' },
  { no: 36, char: '夕', pinyin: 'xī', hanviet: 'TỊCH', strokes: 3, meaning: 'Buổi chiều tối, đêm tối, mặt trăng khuyết', alt: '' },
  { no: 37, char: '大', pinyin: 'dà', hanviet: 'ĐẠI', strokes: 3, meaning: 'To lớn, người dang rộng tay chân', alt: '' },
  { no: 38, char: '女', pinyin: 'nǚ', hanviet: 'NỮ', strokes: 3, meaning: 'Người phụ nữ, con gái, dịu dàng', alt: '' },
  { no: 39, char: '子', pinyin: 'zǐ', hanviet: 'TỬ', strokes: 3, meaning: 'Đứa con, con nít, học trò', alt: '' },
  { no: 40, char: '宀', pinyin: 'mián', hanviet: 'MIÊN', strokes: 3, meaning: 'Mái nhà, gian nhà che chở bên trên', alt: '' },
  { no: 41, char: '寸', pinyin: 'cùn', hanviet: 'THỐN', strokes: 3, meaning: 'Tấc, đơn vị đo, khoảng cách đốt ngón tay', alt: '' },
  { no: 42, char: '小', pinyin: 'xiǎo', hanviet: 'TIỂU', strokes: 3, meaning: 'Nhỏ bé, ít ỏi', alt: '⺌' },
  { no: 43, char: '尢', pinyin: 'wāng', hanviet: 'UÔNG', strokes: 3, meaning: 'Chân bị què, tật nguyền', alt: '尣' },
  { no: 44, char: '尸', pinyin: 'shī', hanviet: 'THI', strokes: 3, meaning: 'Xác chết, thi thể, người ngồi', alt: '' },
  { no: 45, char: '屮', pinyin: 'chè', hanviet: 'TRIỆT', strokes: 3, meaning: 'Mầm cây non mới nhú lên khỏi đất', alt: '' },
  { no: 46, char: '山', pinyin: 'shān', hanviet: 'SƠN', strokes: 3, meaning: 'Núi non trùng điệp, ba ngọn núi nhô cao', alt: '' },
  { no: 47, char: '巛', pinyin: 'chuān', hanviet: 'XUYÊN', strokes: 3, meaning: 'Dòng sông uốn lượn, nước chảy', alt: '川' },
  { no: 48, char: '工', pinyin: 'gōng', hanviet: 'CÔNG', strokes: 3, meaning: 'Công cụ thợ mộc, công việc, tay nghề', alt: '' },
  { no: 49, char: '己', pinyin: 'jǐ', hanviet: 'KỶ', strokes: 3, meaning: 'Bản thân mình, thứ sáu hàng Can', alt: '已, 巳' },
  { no: 50, char: '巾', pinyin: 'jīn', hanviet: 'CÂN', strokes: 3, meaning: 'Cái khăn lau, mảnh vải che', alt: '' },
  { no: 51, char: '干', pinyin: 'gān', hanviet: 'CAN', strokes: 3, meaning: 'Cái khiên chắn, phạm vào, can thiệp', alt: '' },
  { no: 52, char: '幺', pinyin: 'yāo', hanviet: 'YÊU', strokes: 3, meaning: 'Nhỏ bé, sợi chỉ tơ mỏng mảnh', alt: '' },
  { no: 53, char: '广', pinyin: 'guǎng', hanviet: 'QUẢNG', strokes: 3, meaning: 'Mái nhà rộng lớn tựa vào sườn đồi', alt: '' },
  { no: 54, char: '廴', pinyin: 'yǐn', hanviet: 'DẪN', strokes: 3, meaning: 'Bước dài chân, dẫn đường', alt: '' },
  { no: 55, char: '廾', pinyin: 'gǒng', hanviet: 'CỦNG', strokes: 3, meaning: 'Chắp hai tay cung kính nâng vật', alt: '' },
  { no: 56, char: '弋', pinyin: 'yì', hanviet: 'DẶC', strokes: 3, meaning: 'Cọc cắm neo, mũi tên có buộc dây', alt: '' },
  { no: 57, char: '弓', pinyin: 'gōng', hanviet: 'CUNG', strokes: 3, meaning: 'Cây cung uốn cong để bắn tên', alt: '' },
  { no: 58, char: '彐', pinyin: 'jì', hanviet: 'KÊ', strokes: 3, meaning: 'Đầu con heo, mõm con lợn lòi', alt: '彑' },
  { no: 59, char: '彡', pinyin: 'shān', hanviet: 'TAM', strokes: 3, meaning: 'Lông dài óng mượt, nét hoa văn đẹp', alt: '' },
  { no: 60, char: '彳', pinyin: 'chì', hanviet: 'XÍCH', strokes: 3, meaning: 'Bước chân trái, nửa bên trái của chữ Hành', alt: '' },
  // 4 NÉT
  { no: 61, char: '心', pinyin: 'xīn', hanviet: 'TÂM', strokes: 4, meaning: 'Trái tim, tâm tư, tấm lòng, suy nghĩ', alt: '忄, ⺗' },
  { no: 62, char: '戈', pinyin: 'gē', hanviet: 'QUA', strokes: 4, meaning: 'Cây giáo dài, vũ khí chiến đấu cổ đại', alt: '' },
  { no: 63, char: '戶', pinyin: 'hù', hanviet: 'HỘ', strokes: 4, meaning: 'Cánh cửa một cánh, hộ gia đình', alt: '户, 门' },
  { no: 64, char: '手', pinyin: 'shǒu', hanviet: 'THỦ', strokes: 4, meaning: 'Bàn tay con người, cầm nắm', alt: '扌' },
  { no: 65, char: '支', pinyin: 'zhī', hanviet: 'CHI', strokes: 4, meaning: 'Cành cây, chi nhánh, chia ra', alt: '' },
  { no: 66, char: '攴', pinyin: 'pū', hanviet: 'PHÁC', strokes: 4, meaning: 'Đánh khẽ, gõ nhẹ bằng que', alt: '攵' },
  { no: 67, char: '文', pinyin: 'wén', hanviet: 'VĂN', strokes: 4, meaning: 'Hoa văn, chữ nghĩa, văn chương', alt: '' },
  { no: 68, char: '斗', pinyin: 'dǒu', hanviet: 'ĐẨU', strokes: 4, meaning: 'Cái đấu đong thóc gạo, sao Bắc Đẩu', alt: '' },
  { no: 69, char: '斤', pinyin: 'jīn', hanviet: 'CÂN', strokes: 4, meaning: 'Cái rìu đốn củi, đơn vị cân lạng', alt: '' },
  { no: 70, char: '方', pinyin: 'fāng', hanviet: 'PHƯƠNG', strokes: 4, meaning: 'Vuông vắn, hướng phương hướng, chiếc thuyền kép', alt: '' },
  { no: 71, char: '无', pinyin: 'wú', hanviet: 'VÔ', strokes: 4, meaning: 'Không có gì, hư không', alt: '旡' },
  { no: 72, char: '日', pinyin: 'rì', hanviet: 'NHẬT', strokes: 4, meaning: 'Mặt trời, ngày, ánh sáng ban ngày', alt: '' },
  { no: 73, char: '曰', pinyin: 'yuē', hanviet: 'VIẾT', strokes: 4, meaning: 'Nói rằng, phát ra lời nói', alt: '' },
  { no: 74, char: '月', pinyin: 'yuè', hanviet: 'NGUYỆT', strokes: 4, meaning: 'Mặt trăng khuyết, tháng, cơ bắp thịt (bộ nhục)', alt: '⺝' },
  { no: 75, char: '木', pinyin: 'mù', hanviet: 'MỘC', strokes: 4, meaning: 'Cây cối, gỗ lim, rừng rú', alt: '' },
  { no: 76, char: '欠', pinyin: 'qiàn', hanviet: 'KHIẾM', strokes: 4, meaning: 'Há miệng ngáp, thiếu thốn, nợ nần', alt: '' },
  { no: 77, char: '止', pinyin: 'zhǐ', hanviet: 'CHỈ', strokes: 4, meaning: 'Dừng lại, bàn chân đặt xuống đất', alt: '' },
  { no: 78, char: '歹', pinyin: 'dǎi', hanviet: 'ĐÃI', strokes: 4, meaning: 'Xương tàn vỡ, chết chóc, tồi tệ ác độc', alt: '歺' },
  { no: 79, char: '殳', pinyin: 'shū', hanviet: 'THÙ', strokes: 4, meaning: 'Cây gậy tre không mũi nhọn, đập gõ', alt: '' },
  { no: 80, char: '毋', pinyin: 'wú', hanviet: 'VÔ', strokes: 4, meaning: 'Chớ, đừng, mẹ hiền', alt: '母' },
  { no: 81, char: '比', pinyin: 'bǐ', hanviet: 'TỶ', strokes: 4, meaning: 'So sánh, hai người đứng sát nhau cạnh tranh', alt: '' },
  { no: 82, char: '毛', pinyin: 'máo', hanviet: 'MAO', strokes: 4, meaning: 'Lông động vật, sợi tóc mỏng', alt: '' },
  { no: 83, char: '氏', pinyin: 'shì', hanviet: 'THỊ', strokes: 4, meaning: 'Dòng họ, thị tộc, phụ nữ', alt: '' },
  { no: 84, char: '气', pinyin: 'qì', hanviet: 'KHÍ', strokes: 4, meaning: 'Khí quyển, hơi nước bốc lên trời, không khí', alt: '' },
  { no: 85, char: '水', pinyin: 'shuǐ', hanviet: 'THỦY', strokes: 4, meaning: 'Nước, sông suối, chất lỏng cuộn trào', alt: '氵, 氺' },
  { no: 86, char: '火', pinyin: 'huǒ', hanviet: 'HỎA', strokes: 4, meaning: 'Ngọn lửa bốc cháy từ đống củi', alt: '灬' },
  { no: 87, char: '爪', pinyin: 'zhǎo', hanviet: 'TRẢO', strokes: 4, meaning: 'Móng vuốt thú dữ, cào cấu', alt: '爫' },
  { no: 88, char: '父', pinyin: 'fù', hanviet: 'PHỤ', strokes: 4, meaning: 'Người cha, người trụ cột gia đình', alt: '' },
  { no: 89, char: '爻', pinyin: 'yáo', hanviet: 'HÀO', strokes: 4, meaning: 'Quẻ bói kinh dịch đan chéo nhau', alt: '' },
  { no: 90, char: '爿', pinyin: 'pán', hanviet: 'TƯỜNG', strokes: 4, meaning: 'Mảnh gỗ chẻ ra, ván giường', alt: '丬' },
  { no: 91, char: '片', pinyin: 'piàn', hanviet: 'PHIẾN', strokes: 4, meaning: 'Mảnh ván mỏng, lá con, tấm bưu thiếp', alt: '' },
  { no: 92, char: '牙', pinyin: 'yá', hanviet: 'NHA', strokes: 4, meaning: 'Răng hàm lớn, ngà voi gài vào nhau', alt: '' },
  { no: 93, char: '牛', pinyin: 'niú', hanviet: 'NGƯU', strokes: 4, meaning: 'Con trâu, con bò có hai sừng', alt: '牜' },
  { no: 94, char: '犬', pinyin: 'quǎn', hanviet: 'KHUYỂN', strokes: 4, meaning: 'Con chó, loài săn mồi bốn chân', alt: '犭' },
  // 5 NÉT
  { no: 95, char: '玄', pinyin: 'xuán', hanviet: 'HUYỀN', strokes: 5, meaning: 'Màu đen sâu thẳm, huyền bí kỳ diệu', alt: '' },
  { no: 96, char: '玉', pinyin: 'yù', hanviet: 'NGỌC', strokes: 5, meaning: 'Ngọc bích quý giá xâu thành chuỗi', alt: '王' },
  { no: 97, char: '瓜', pinyin: 'guā', hanviet: 'QUA', strokes: 5, meaning: 'Quả dưa leo, dây leo leo bám', alt: '' },
  { no: 98, char: '瓦', pinyin: 'wǎ', hanviet: 'NGÕA', strokes: 5, meaning: 'Ngói lợp nhà nung bằng đất sét, đồ gốm', alt: '' },
  { no: 99, char: '甘', pinyin: 'gān', hanviet: 'CAM', strokes: 5, meaning: 'Vị ngọt ngào trong miệng ngậm', alt: '' },
  { no: 100, char: '生', pinyin: 'shēng', hanviet: 'SINH', strokes: 5, meaning: 'Sinh sôi nảy nở, mọc lên sự sống', alt: '' },
  { no: 101, char: '用', pinyin: 'yòng', hanviet: 'DỤNG', strokes: 5, meaning: 'Sử dụng, ứng dụng, chiếc xô', alt: '' },
  { no: 102, char: '田', pinyin: 'tián', hanviet: 'ĐIỀN', strokes: 5, meaning: 'Thửa ruộng bốn ô bờ vuông vắn', alt: '' },
  { no: 103, char: '疋', pinyin: 'pǐ', hanviet: 'SƠ / THẤT', strokes: 5, meaning: 'Cuộn vải lụa, đôi chân chạy', alt: '⺪' },
  { no: 104, char: '疒', pinyin: 'nè', hanviet: 'NẠCH', strokes: 5, meaning: 'Bệnh tật, người ốm nằm trên giường', alt: '' },
  { no: 105, char: '癶', pinyin: 'bō', hanviet: 'BÁT', strokes: 5, meaning: 'Hai chân dang ra bước đi', alt: '' },
  { no: 106, char: '白', pinyin: 'bái', hanviet: 'BẠCH', strokes: 5, meaning: 'Màu trắng tinh khiết, sáng tỏ', alt: '' },
  { no: 107, char: '皮', pinyin: 'pí', hanviet: 'BÌ', strokes: 5, meaning: 'Làn da người, tấm da lột của thú', alt: '' },
  { no: 108, char: '皿', pinyin: 'mǐn', hanviet: 'MÃNH', strokes: 5, meaning: 'Cái đĩa, bát đĩa đựng đồ ăn', alt: '' },
  { no: 109, char: '目', pinyin: 'mù', hanviet: 'MỤC', strokes: 5, meaning: 'Con mắt tròn có con ngươi ngắm nhìn', alt: '' },
  { no: 110, char: '矛', pinyin: 'máo', hanviet: 'MÂU', strokes: 5, meaning: 'Cây giáo mác dài nhọn đâm thủng', alt: '' },
  { no: 111, char: '矢', pinyin: 'shǐ', hanviet: 'THỈ', strokes: 5, meaning: 'Mũi tên nhọn bay vút trúng đích', alt: '' },
  { no: 112, char: '石', pinyin: 'shí', hanviet: 'THẠCH', strokes: 5, meaning: 'Hòn đá tảng dưới chân vách núi', alt: '' },
  { no: 113, char: '示', pinyin: 'shì', hanviet: 'THỊ', strokes: 5, meaning: 'Bàn thờ cúng thần linh, điềm báo', alt: '礻' },
  { no: 114, char: '禸', pinyin: 'róu', hanviet: 'NHỰU', strokes: 5, meaning: 'Dấu chân thú hoang dẫm trên đất', alt: '' },
  { no: 115, char: '禾', pinyin: 'hé', hanviet: 'HÒA', strokes: 5, meaning: 'Cây lúa trĩu hạt vàng óng ả', alt: '' },
  { no: 116, char: '穴', pinyin: 'xué', hanviet: 'HUYỆT', strokes: 5, meaning: 'Hang đá khoét sâu, huyệt đạo', alt: '' },
  { no: 117, char: '立', pinyin: 'lì', hanviet: 'LẬP', strokes: 5, meaning: 'Đứng vững vàng trên mặt đất', alt: '' },
  // 6 NÉT
  { no: 118, char: '竹', pinyin: 'zhú', hanviet: 'TRÚC', strokes: 6, meaning: 'Cây tre trúc dẻo dai kiên cường', alt: '⺮' },
  { no: 119, char: '米', pinyin: 'mǐ', hanviet: 'MỄ', strokes: 6, meaning: 'Hạt gạo trắng ngọc, lúa gạo nuôi người', alt: '' },
  { no: 120, char: '糸', pinyin: 'mì', hanviet: 'MỊCH', strokes: 6, meaning: 'Sợi tơ cuộn tròn dệt vải', alt: '纟' },
  { no: 121, char: '缶', pinyin: 'fǒu', hanviet: 'PHẪU', strokes: 6, meaning: 'Đồ gốm sành nung đựng rượu nước', alt: '' },
  { no: 122, char: '网', pinyin: 'wǎng', hanviet: 'VÕNG', strokes: 6, meaning: 'Tấm lưới đánh bắt cá chim', alt: '罒, ⺲' },
  { no: 123, char: '羊', pinyin: 'yáng', hanviet: 'DƯƠNG', strokes: 6, meaning: 'Con cừu dê hiền lành có hai sừng', alt: '⺶' },
  { no: 124, char: '羽', pinyin: 'yǔ', hanviet: 'VŨ', strokes: 6, meaning: 'Lông vũ chim chóc bay lượn', alt: '' },
  { no: 125, char: '老', pinyin: 'lǎo', hanviet: 'LÃO', strokes: 6, meaning: 'Cụ già tóc bạc chống gậy đi', alt: '耂' },
  { no: 126, char: '而', pinyin: 'ér', hanviet: 'NHI', strokes: 6, meaning: 'Râu ria dưới cằm, liên từ mà/và', alt: '' },
  { no: 127, char: '耒', pinyin: 'lěi', hanviet: 'LỖI', strokes: 6, meaning: 'Cái bắp cày cày xới đất nông nghiệp', alt: '' },
  { no: 128, char: '耳', pinyin: 'ěr', hanviet: 'NHĨ', strokes: 6, meaning: 'Cái tai để lắng nghe âm thanh', alt: '' },
  { no: 129, char: '聿', pinyin: 'yù', hanviet: 'DUẬT', strokes: 6, meaning: 'Bàn tay cầm bút lông viết chữ', alt: '⺻' },
  { no: 130, char: '肉', pinyin: 'ròu', hanviet: 'NHỤC', strokes: 6, meaning: 'Miếng thịt nạc mỡ, thân thể', alt: '⺼' },
  { no: 131, char: '臣', pinyin: 'chén', hanviet: 'THẦN', strokes: 6, meaning: 'Quan đại thần cúi mắt phục tùng vua', alt: '' },
  { no: 132, char: '自', pinyin: 'zì', hanviet: 'TỰ', strokes: 6, meaning: 'Cái mũi, tự bản thân mình từ đâu', alt: '' },
  { no: 133, char: '至', pinyin: 'zhì', hanviet: 'CHÍ', strokes: 6, meaning: 'Mũi tên cắm xuống đất tới nơi, cực độ', alt: '' },
  { no: 134, char: '臼', pinyin: 'jiù', hanviet: 'CỮU', strokes: 6, meaning: 'Cái cối giã gạo có lòng trũng', alt: '' },
  { no: 135, char: '舌', pinyin: 'shé', hanviet: 'THIỆT', strokes: 6, meaning: 'Chiếc lưỡi nếm vị thè ra từ miệng', alt: '' },
  { no: 136, char: '舛', pinyin: 'chuǎn', hanviet: 'SUYỄN', strokes: 6, meaning: 'Hai bàn chân quay ngược chiều, sai lầm', alt: '' },
  { no: 137, char: '舟', pinyin: 'zhōu', hanviet: 'CHU', strokes: 6, meaning: 'Chiếc thuyền gỗ lướt trên sông', alt: '' },
  { no: 138, char: '艮', pinyin: 'gèn', hanviet: 'CẤN', strokes: 6, meaning: 'Quẻ Cấn bền vững dừng lại, mắt trừng', alt: '' },
  { no: 139, char: '色', pinyin: 'sè', hanviet: 'SẮC', strokes: 6, meaning: 'Màu sắc vẻ mặt, dung nhan', alt: '' },
  { no: 140, char: '艸', pinyin: 'cǎo', hanviet: 'THẢO', strokes: 6, meaning: 'Cỏ cây hoa lá mọc xanh mượt', alt: '艹' },
  { no: 141, char: '虍', pinyin: 'hū', hanviet: 'HỔ', strokes: 6, meaning: 'Vằn da con hổ chúa sơn lâm', alt: '' },
  { no: 142, char: '虫', pinyin: 'chóng', hanviet: 'TRÙNG', strokes: 6, meaning: 'Côn trùng sâu bọ uốn éo bò', alt: '' },
  { no: 143, char: '血', pinyin: 'xuè', hanviet: 'HUYẾT', strokes: 6, meaning: 'Giọt máu hiến tế trong chiếc đĩa', alt: '' },
  { no: 144, char: '行', pinyin: 'xíng', hanviet: 'HÀNH', strokes: 6, meaning: 'Ngã tư đường xá giao nhau, bước đi', alt: '' },
  { no: 145, char: '衣', pinyin: 'yī', hanviet: 'Y', strokes: 6, meaning: 'Áo mặc che thân ấm áp', alt: '衤' },
  { no: 146, char: '襾', pinyin: 'yà', hanviet: 'Á', strokes: 6, meaning: 'Nắp đậy úp lên che kín, phương tây', alt: '覀' },
  // 7 NÉT
  { no: 147, char: '見', pinyin: 'jiàn', hanviet: 'KIẾN', strokes: 7, meaning: 'Nhìn thấy, mắt to trên đôi chân', alt: '见' },
  { no: 148, char: '角', pinyin: 'jiǎo', hanviet: 'GIÁC', strokes: 7, meaning: 'Cặp sừng thú nhọn, góc cạnh', alt: '' },
  { no: 149, char: '言', pinyin: 'yán', hanviet: 'NGÔN', strokes: 7, meaning: 'Lời nói phát ra từ miệng, ngôn ngữ', alt: '讠' },
  { no: 150, char: '谷', pinyin: 'gǔ', hanviet: 'CỐC', strokes: 7, meaning: 'Thung lũng lòng suối chảy ra', alt: '' },
  { no: 151, char: '豆', pinyin: 'dòu', hanviet: 'ĐẬU', strokes: 7, meaning: 'Hạt đỗ đậu bùi béo, cái mâm bồng', alt: '' },
  { no: 152, char: '豕', pinyin: 'shǐ', hanviet: 'THỈ', strokes: 7, meaning: 'Con lợn ỉ bụng to đuôi ngắn', alt: '' },
  { no: 153, char: '豸', pinyin: 'zhì', hanviet: 'TRĨ', strokes: 7, meaning: 'Loài thú bò sát rình mồi không sừng', alt: '' },
  { no: 154, char: '貝', pinyin: 'bèi', hanviet: 'BỐI', strokes: 7, meaning: 'Vỏ sò tiền tệ trao đổi cổ đại, quý báu', alt: '贝' },
  { no: 155, char: '赤', pinyin: 'chì', hanviet: 'XÍCH', strokes: 7, meaning: 'Màu đỏ thắm rực rỡ như lửa lớn', alt: '' },
  { no: 156, char: '走', pinyin: 'zǒu', hanviet: 'TẨU', strokes: 7, meaning: 'Chạy nhanh vung tay sải chân', alt: '' },
  { no: 157, char: '足', pinyin: 'zú', hanviet: 'TÚC', strokes: 7, meaning: 'Bàn chân bước, đầy đủ no ấm', alt: '⻊' },
  { no: 158, char: '身', pinyin: 'shēn', hanviet: 'THÂN', strokes: 7, meaning: 'Thân mình người phụ nữ có thai', alt: '' },
  { no: 159, char: '車', pinyin: 'chē', hanviet: 'XA', strokes: 7, meaning: 'Cỗ xe ngựa lăn bánh có hai bánh hai bên', alt: '车' },
  { no: 160, char: '辛', pinyin: 'xīn', hanviet: 'TÂN', strokes: 7, meaning: 'Vị cay xè lưỡi, gian nan cay đắng', alt: '' },
  { no: 161, char: '辰', pinyin: 'chén', hanviet: 'THẦN', strokes: 7, meaning: 'Con sò nhô đầu đón mưa xuân, chi Thìn', alt: '' },
  { no: 162, char: '辵', pinyin: 'chuò', hanviet: 'SƯỚC', strokes: 7, meaning: 'Vừa đi vừa dừng trên đường dài', alt: '辶' },
  { no: 163, char: '邑', pinyin: 'yì', hanviet: 'ẤP', strokes: 7, meaning: 'Thôn ấp xóm làng quần cư đông đúc', alt: '阝(bên phải)' },
  { no: 164, char: '酉', pinyin: 'yǒu', hanviet: 'DẬU', strokes: 7, meaning: 'Hũ rượu lên men thơm nồng, chi Dậu', alt: '' },
  { no: 165, char: '釆', pinyin: 'biàn', hanviet: 'BIỆN', strokes: 7, meaning: 'Phân biệt dấu vết móng vuốt', alt: '' },
  { no: 166, char: '里', pinyin: 'lǐ', hanviet: 'LÝ', strokes: 7, meaning: 'Làng xóm, dặm đường, bên trong ruột', alt: '' },
  // 8 NÉT
  { no: 167, char: '金', pinyin: 'jīn', hanviet: 'KIM', strokes: 8, meaning: 'Vàng ròng quý giá, kim loại đúc', alt: '钅' },
  { no: 168, char: '長', pinyin: 'cháng', hanviet: 'TRƯỜNG', strokes: 8, meaning: 'Dài dằng dặc, mái tóc dài thướt tha, trưởng thượng', alt: '长' },
  { no: 169, char: '門', pinyin: 'mén', hanviet: 'MÔN', strokes: 8, meaning: 'Hai cánh cổng lớn mở ra khép vào', alt: '门' },
  { no: 170, char: '阜', pinyin: 'fù', hanviet: 'PHỤ', strokes: 8, meaning: 'Gò đất cao đắp tầng bực', alt: '阝(bên trái)' },
  { no: 171, char: '隶', pinyin: 'dài', hanviet: 'ĐÃI', strokes: 8, meaning: 'Đuổi bắt kịp, kẻ nô bộc theo hầu', alt: '' },
  { no: 172, char: '隹', pinyin: 'zhuī', hanviet: 'CHUY', strokes: 8, meaning: 'Chim đuôi ngắn đậu cành', alt: '' },
  { no: 173, char: '雨', pinyin: 'yǔ', hanviet: 'VŨ', strokes: 8, meaning: 'Mưa từ mây trên trời rơi những hạt ngọc', alt: '' },
  { no: 174, char: '靑', pinyin: 'qīng', hanviet: 'THANH', strokes: 8, meaning: 'Màu xanh lục của cây non mới nhú', alt: '青' },
  { no: 175, char: '非', pinyin: 'fēi', hanviet: 'PHI', strokes: 8, meaning: 'Không phải, cánh chim dang sang hai bên trái ngược', alt: '' },
  // 9 NÉT
  { no: 176, char: '面', pinyin: 'miàn', hanviet: 'DIỆN', strokes: 9, meaning: 'Khuôn mặt người, bề mặt phẳng', alt: '' },
  { no: 177, char: '革', pinyin: 'gé', hanviet: 'CÁCH', strokes: 9, meaning: 'Bộ da thú đã cạo sạch lông thuộc lại', alt: '' },
  { no: 178, char: '韋', pinyin: 'wéi', hanviet: 'VI', strokes: 9, meaning: 'Da dẻo bao bọc thành lũy quanh co', alt: '韦' },
  { no: 179, char: '韭', pinyin: 'jiǔ', hanviet: 'CỬU', strokes: 9, meaning: 'Cây rau hẹ xanh thơm nồng', alt: '' },
  { no: 180, char: '音', pinyin: 'yīn', hanviet: 'ÂM', strokes: 9, meaning: 'Âm thanh giai điệu nhịp nhàng từ miệng phát ra', alt: '' },
  { no: 181, char: '頁', pinyin: 'yè', hanviet: 'HIỆP', strokes: 9, meaning: 'Cái đầu người, trang sách mỏng', alt: '页' },
  { no: 182, char: '風', pinyin: 'fēng', hanviet: 'PHONG', strokes: 9, meaning: 'Gió thổi cuốn bay lá trùng sinh sôi', alt: '风' },
  { no: 183, char: '飛', pinyin: 'fēi', hanviet: 'PHI', strokes: 9, meaning: 'Chim vỗ cánh bay liệng lên trời cao', alt: '飞' },
  { no: 184, char: '食', pinyin: 'shí', hanviet: 'THỰC', strokes: 9, meaning: 'Thức ăn nắp đậy trong bát dĩa ngon lành', alt: '饣' },
  { no: 185, char: '首', pinyin: 'shǒu', hanviet: 'THỦ', strokes: 9, meaning: 'Cái đầu, người đứng đầu lãnh đạo', alt: '' },
  { no: 186, char: '香', pinyin: 'xiāng', hanviet: 'HƯƠNG', strokes: 9, meaning: 'Hương thơm hạt lúa chín thơm ngào ngạt', alt: '' },
  // 10 NÉT
  { no: 187, char: '馬', pinyin: 'mǎ', hanviet: 'MÃ', strokes: 10, meaning: 'Ngựa phi đường trường bốn chân có bờm dài', alt: '马' },
  { no: 188, char: '骨', pinyin: 'gǔ', hanviet: 'CỐT', strokes: 10, meaning: 'Khung xương nâng đỡ cơ thể con người', alt: '' },
  { no: 189, char: '高', pinyin: 'gāo', hanviet: 'CAO', strokes: 10, meaning: 'Tòa tháp cao chót vót vươn lên mây', alt: '' },
  { no: 190, char: '髟', pinyin: 'biāo', hanviet: 'TIÊU', strokes: 10, meaning: 'Mái tóc dài buông xõa bồng bềnh', alt: '' },
  { no: 191, char: '鬥', pinyin: 'dòu', hanviet: 'ĐẤU', strokes: 10, meaning: 'Hai người cầm vũ khí lao vào quyết chiến', alt: '' },
  { no: 192, char: '鬯', pinyin: 'chàng', hanviet: 'SƯỞNG', strokes: 10, meaning: 'Rượu thơm cúng tế nấu từ hạt kê', alt: '' },
  { no: 193, char: '鬲', pinyin: 'lì', hanviet: 'CÁCH', strokes: 10, meaning: 'Cái đỉnh ba chân rỗng đáy đun sôi', alt: '' },
  { no: 194, char: '鬼', pinyin: 'guǐ', hanviet: 'QUỶ', strokes: 10, meaning: 'Hồn ma bóng quế đầu to chân cong lượn', alt: '' },
  // 11 NÉT
  { no: 195, char: '魚', pinyin: 'yú', hanviet: 'NGƯ', strokes: 11, meaning: 'Con cá bơi lội dưới nước có vảy vây', alt: '鱼' },
  { no: 196, char: '鳥', pinyin: 'niǎo', hanviet: 'ĐIỂU', strokes: 11, meaning: 'Loài chim có mỏ nhọn và đuôi dài', alt: '鸟' },
  { no: 197, char: '鹵', pinyin: 'lǔ', hanviet: 'LỖ', strokes: 11, meaning: 'Đất mặn chứa muối kết tinh', alt: '卤' },
  { no: 198, char: '鹿', pinyin: 'lù', hanviet: 'LỘC', strokes: 11, meaning: 'Con hươu sao có cặp sừng đẹp chạy nhanh', alt: '' },
  { no: 199, char: '麥', pinyin: 'mài', hanviet: 'MẠCH', strokes: 11, meaning: 'Cây lúa mạch có râu mọc trên đồng', alt: '麦' },
  { no: 200, char: '麻', pinyin: 'má', hanviet: 'MA', strokes: 11, meaning: 'Cây gai đay xe sợi dưới mái nhà', alt: '' },
  // 12 NÉT
  { no: 201, char: '黃', pinyin: 'huáng', hanviet: 'HOÀNG', strokes: 12, meaning: 'Màu vàng rực rỡ như đất màu mỡ phù sa', alt: '黄' },
  { no: 202, char: '黍', pinyin: 'shǔ', hanviet: 'THỬ', strokes: 12, meaning: 'Cây kê dẻo nấu rượu nếp', alt: '' },
  { no: 203, char: '黑', pinyin: 'hēi', hanviet: 'HẮC', strokes: 12, meaning: 'Màu đen muội than khói lò bốc lên', alt: '' },
  { no: 204, char: '黹', pinyin: 'zhǐ', hanviet: 'CHỈ', strokes: 12, meaning: 'Đường thêu hoa may vá khéo léo', alt: '' },
  // 13 NÉT
  { no: 205, char: '黽', pinyin: 'mǐn', hanviet: 'MÃNH', strokes: 13, meaning: 'Con ếch nhái bụng to sống nơi đầm lầy', alt: '黾' },
  { no: 206, char: '鼎', pinyin: 'dǐng', hanviet: 'ĐỈNH', strokes: 13, meaning: 'Cái đỉnh đồng ba chân vững chắc đun tế lễ', alt: '' },
  { no: 207, char: '鼓', pinyin: 'gǔ', hanviet: 'CỔ', strokes: 13, meaning: 'Cái trống da gõ vang dội tưng bừng', alt: '' },
  { no: 208, char: '鼠', pinyin: 'shǔ', hanviet: 'THỬ', strokes: 13, meaning: 'Con chuột lắt lủi răng nhọn gặm nhấm', alt: '' },
  // 14 NÉT
  { no: 209, char: '鼻', pinyin: 'bí', hanviet: 'TỊ', strokes: 14, meaning: 'Chiếc mũi hít thở khí thở vào ra', alt: '' },
  { no: 210, char: '齊', pinyin: 'qí', hanviet: 'TỀ', strokes: 14, meaning: 'Bông lúa mọc đều tăm tắp, chỉnh tề', alt: '齐' },
  // 15 NÉT
  { no: 211, char: '齒', pinyin: 'chǐ', hanviet: 'XỈ', strokes: 15, meaning: 'Hàm răng trắng đều nhai cắn thức ăn', alt: '齿' },
  // 16 NÉT
  { no: 212, char: '龍', pinyin: 'lóng', hanviet: 'LONG', strokes: 16, meaning: 'Con rồng thần thoại uốn lượn uy nghi trên trời', alt: '龙' },
  { no: 213, char: '龜', pinyin: 'guī', hanviet: 'QUY', strokes: 16, meaning: 'Con rùa trường thọ cõng mai rùa vững vàng', alt: '龟' },
  // 17 NÉT
  { no: 214, char: '龠', pinyin: 'yuè', hanviet: 'DƯỢC', strokes: 17, meaning: 'Cây sáo trúc ba lỗ hòa tấu nhã nhạc hoàng cung', alt: '' }
];

// 4. ESSENTIAL HSK 1 COMPLETE VOCABULARY (150 WORDS)
const HSK1_VOCAB_LIST = [
  // CHỦ ĐỀ 1: CHÀO HỎI & XÃ GIAO (8 từ)
  { id: 'hsk1_nihao', char: '你好', pinyin: 'nǐ hǎo', hanviet: 'NHĨ HẢO', meaning: 'Xin chào', pos: 'Thán từ', topic: 'social', strokeCount: 13, radicals: '亻+ 尔 | 女 + 子', story: 'Bạn (你) gặp ai cũng mong họ tốt lành đẹp đẽ (好), lời chúc xuất phát từ đáy lòng.', example: '你好，很高兴认识你！', examplePinyin: 'Nǐ hǎo, hěn gāoxìng rènshí nǐ!', exampleVi: 'Xin chào, rất vui được làm quen với bạn!' },
  { id: 'hsk1_zaijian', char: '再见', pinyin: 'zàijiàn', hanviet: 'TÁI KIẾN', meaning: 'Tạm biệt, hẹn gặp lại', pos: 'Thán từ', topic: 'social', strokeCount: 10, radicals: '再 + 见', story: 'Hẹn một lần nữa (再) lại nhìn thấy (见) mặt nhau.', example: '明天见，再见！', examplePinyin: 'Míngtiān jiàn, zàijiàn!', exampleVi: 'Mai gặp lại nhé, tạm biệt!' },
  { id: 'hsk1_xiexie', char: '谢谢', pinyin: 'xièxie', hanviet: 'TẠ TẠ', meaning: 'Cảm ơn', pos: 'Động từ', topic: 'social', strokeCount: 24, radicals: '讠+ 身 + 寸', story: 'Dùng lời nói (讠) từ tận thân mình (身) biểu thị sự khiêm tốn (寸) để tạ ơn người khác.', example: '太谢谢你了！', examplePinyin: 'Tài xièxie nǐ le!', exampleVi: 'Cảm ơn bạn rất nhiều!' },
  { id: 'hsk1_bukeqi', char: '不客气', pinyin: 'bú kèqi', hanviet: 'BẤT KHÁCH KHÍ', meaning: 'Đừng khách sáo, không có chi', pos: 'Cụm từ', topic: 'social', strokeCount: 22, radicals: '不 + 客 + 气', story: 'Không (不) cần xem nhau như khách lạ (客) mà sinh ra khoảng cách e ngại (气).', example: '别客气，随便坐！', examplePinyin: 'Bié kèqi, suíbiàn zuò!', exampleVi: 'Đừng khách sáo, cứ ngồi tự nhiên nhé!' },
  { id: 'hsk1_duibuqi', char: '对不起', pinyin: 'duìbuqǐ', hanviet: 'ĐỐI BẤT KHỞI', meaning: 'Xin lỗi', pos: 'Cụm từ', topic: 'social', strokeCount: 17, radicals: '对 + 不 + 起', story: 'Làm điều có lỗi thì mặt đối mặt (对) không ngẩng lên nổi (不起).', example: '对不起，我迟到了。', examplePinyin: 'Duìbuqǐ, wǒ chídào le.', exampleVi: 'Xin lỗi, tôi đến muộn mất rồi.' },
  { id: 'hsk1_meiguanxi', char: '没关系', pinyin: 'méi guānxi', hanviet: 'MỘT QUAN HỆ', meaning: 'Không sao đâu, không có gì', pos: 'Cụm từ', topic: 'social', strokeCount: 20, radicals: '氵+ 殳 | 关 + 系', story: 'Không (没) có liên can tổn hại gì đến mối quan hệ (关系) cả, bỏ qua đi!', example: '没关系，下次注意就好。', examplePinyin: 'Méi guānxi, xià cì zhùyì jiù hǎo.', exampleVi: 'Không sao đâu, lần sau chú ý là được rồi.' },
  { id: 'hsk1_qing', char: '请', pinyin: 'qǐng', hanviet: 'THỈNH', meaning: 'Mời, xin vui lòng', pos: 'Động từ', topic: 'social', strokeCount: 10, radicals: '讠+ 青', story: 'Dùng lời nói (讠) trong sáng thanh nhã (青) để mời mọc cầu xin tôn kính.', example: '请进，请喝茶！', examplePinyin: 'Qǐng jìn, qǐng hē chá!', exampleVi: 'Mời vào, mời uống trà!' },
  { id: 'hsk1_huanying', char: '欢迎', pinyin: 'huānyíng', hanviet: 'HOAN NGHÊNH', meaning: 'Hoan nghênh, chào đón', pos: 'Động từ', topic: 'social', strokeCount: 13, radicals: '又 + 欠 | 辶 + 卬', story: 'Vui mừng hớn hở (欢) bước chân ra đón chào (迎) khách quý phương xa tới.', example: '欢迎来到中国！', examplePinyin: 'Huānyíng lái dào Zhōngguó!', exampleVi: 'Nhiệt liệt chào đón bạn đến với Trung Quốc!' },

  // CHỦ ĐỀ 2: ĐẠI TỪ & NGHI VẤN (14 từ)
  { id: 'hsk1_wo', char: '我', pinyin: 'wǒ', hanviet: 'NGÃ', meaning: 'Tôi, mình, ta', pos: 'Đại từ', topic: 'pronoun', strokeCount: 7, radicals: '手 + 戈', story: 'Bàn tay (手) nắm chặt cây giáo (戈) bảo vệ cái tôi bản ngã của chính mình.', example: '我是学生。', examplePinyin: 'Wǒ shì xuésheng.', exampleVi: 'Tôi là học sinh.' },
  { id: 'hsk1_ni', char: '你', pinyin: 'nǐ', hanviet: 'NHĨ', meaning: 'Bạn, anh, chị, em', pos: 'Đại từ', topic: 'pronoun', strokeCount: 7, radicals: '亻+ 尔', story: 'Một người đứng (亻) đối diện trò chuyện cùng bạn (尔).', example: '你是哪国人？', examplePinyin: 'Nǐ shì nǎ guó rén?', exampleVi: 'Bạn là người nước nào?' },
  { id: 'hsk1_ta_he', char: '他', pinyin: 'tā', hanviet: 'THA', meaning: 'Anh ấy, ông ấy, cậu ấy', pos: 'Đại từ', topic: 'pronoun', strokeCount: 5, radicals: '亻+ 也', story: 'Người đàn ông (亻) kia cũng (也) là một người bạn tốt của chúng ta.', example: '他是我的老师。', examplePinyin: 'Tā shì wǒ de lǎoshī.', exampleVi: 'Thầy ấy là giáo viên của tôi.' },
  { id: 'hsk1_ta_she', char: '她', pinyin: 'tā', hanviet: 'THA (NỮ)', meaning: 'Cô ấy, bà ấy, chị ấy', pos: 'Đại từ', topic: 'pronoun', strokeCount: 6, radicals: '女 + 也', story: 'Người phụ nữ (女) duyên dáng ấy cũng (也) rất xinh đẹp tài năng.', example: '她很漂亮。', examplePinyin: 'Tā hěn piàoliang.', exampleVi: 'Cô ấy rất xinh đẹp.' },
  { id: 'hsk1_women', char: '我们', pinyin: 'wǒmen', hanviet: 'NGÃ MÔN', meaning: 'Chúng tôi, chúng ta', pos: 'Đại từ', topic: 'pronoun', strokeCount: 12, radicals: '我 + 们', story: 'Tôi (我) cùng với nhiều người bên cánh cửa (们) tạo thành chúng ta.', example: '我们都是好朋友。', examplePinyin: 'Wǒmen dōu shì hǎo péngyou.', exampleVi: 'Tất cả chúng tôi đều là bạn tốt.' },
  { id: 'hsk1_zhe', char: '这', pinyin: 'zhè', hanviet: 'GIÁ', meaning: 'Đây, này', pos: 'Đại từ', topic: 'pronoun', strokeCount: 7, radicals: '辶 + 文', story: 'Bước chân (辶) đến tận nơi nhìn tận mắt văn tự hoa văn (文) ở ngay ĐÂY.', example: '这是什么书？', examplePinyin: 'Zhè shì shénme shū?', exampleVi: 'Đây là sách gì thế?' },
  { id: 'hsk1_na', char: '那', pinyin: 'nà', hanviet: 'NA', meaning: 'Kia, đó', pos: 'Đại từ', topic: 'pronoun', strokeCount: 6, radicals: '阝+ 刀 + 二', story: 'Chỉ tay về phía gò đất thôn ấp xa xăm (阝) ở đằng KIA.', example: '那是我的电脑。', examplePinyin: 'Nà shì wǒ de diànnǎo.', exampleVi: 'Kia là máy tính của tôi.' },
  { id: 'hsk1_shei', char: '谁', pinyin: 'shéi / shuí', hanviet: 'THÙY', meaning: 'Ai, người nào', pos: 'Đại từ', topic: 'pronoun', strokeCount: 10, radicals: '讠+ 隹', story: 'Cất tiếng hỏi (讠) xem con chim nhỏ (隹) đứng ở đằng xa kia là AI thế?', example: '他是谁？', examplePinyin: 'Tā shì shéi?', exampleVi: 'Cậu ấy là ai vậy?' },
  { id: 'hsk1_shenme', char: '什么', pinyin: 'shénme', hanviet: 'THẬP MA', meaning: 'Cái gì, cái nào', pos: 'Đại từ', topic: 'pronoun', strokeCount: 7, radicals: '亻+ 十 | 么', story: 'Mười người (亻+ 十) chụm đầu cùng tò mò hỏi xem đây là CÁI GÌ (么).', example: '你叫什么名字？', examplePinyin: 'Nǐ jiào shénme míngzi?', exampleVi: 'Bạn tên là gì?' },
  { id: 'hsk1_na_which', char: '哪', pinyin: 'nǎ', hanviet: 'NẢ', meaning: 'Nào, cái nào', pos: 'Đại từ', topic: 'pronoun', strokeCount: 9, radicals: '口 + 那', story: 'Mở miệng (口) hỏi xem ở tận nơi nào (那) trong số các phương án.', example: '你想买哪个？', examplePinyin: 'Nǐ xiǎng mǎi nǎ gè?', exampleVi: 'Bạn muốn mua cái nào?' },
  { id: 'hsk1_nar', char: '哪儿', pinyin: 'nǎr', hanviet: 'NẢ NHI', meaning: 'Ở đâu, chỗ nào', pos: 'Đại từ', topic: 'pronoun', strokeCount: 11, radicals: '哪 + 儿', story: 'Hỏi han vị trí phương hướng nơi chốn ở đâu.', example: '你要去哪儿？', examplePinyin: 'Nǐ yào qù nǎr?', exampleVi: 'Bạn muốn đi đâu đấy?' },
  { id: 'hsk1_ji', char: '几', pinyin: 'jǐ', hanviet: 'KỶ', strokes: 2, meaning: 'Mấy (dưới 10)', pos: 'Đại từ', topic: 'pronoun', strokeCount: 2, radicals: '几', story: 'Hình cái bàn nhỏ có MẤY chân chống.', example: '现在几点了？', examplePinyin: 'Xiànzài jǐ diǎn le?', exampleVi: 'Bây giờ là mấy giờ rồi?' },
  { id: 'hsk1_duoshao', char: '多少', pinyin: 'duōshao', hanviet: 'ĐA THIỂU', meaning: 'Bao nhiêu (trên 10)', pos: 'Đại từ', topic: 'pronoun', strokeCount: 10, radicals: '多 + 少', story: 'Ghép giữa Nhiều (多) và Ít (少) để hỏi về số lượng BAO NHIÊU.', example: '这个苹果多少钱？', examplePinyin: 'Zhè gè píngguǒ duōshao qián?', exampleVi: 'Quả táo này bao nhiêu tiền?' },
  { id: 'hsk1_zenme', char: '怎么', pinyin: 'zěnme', hanviet: 'CHẨM MA', meaning: 'Làm sao, thế nào, sao lại', pos: 'Đại từ', topic: 'pronoun', strokeCount: 12, radicals: '乍 + 心 | 么', story: 'Trong lòng (心) bất chợt (乍) lo lắng không hiểu sao lại THẾ NÀO.', example: '你怎么了？', examplePinyin: 'Nǐ zěnme le?', exampleVi: 'Bạn sao thế, có chuyện gì vậy?' },

  // CHỦ ĐỀ 3: SỐ ĐẾM & LƯỢNG TỪ (16 từ)
  { id: 'hsk1_yi', char: '一', pinyin: 'yī', hanviet: 'NHẤT', meaning: 'Số một', pos: 'Số từ', topic: 'number', strokeCount: 1, radicals: '一', story: 'Một nét ngang duy nhất, khởi nguyên của chữ viết và vũ trụ.', example: '一个人 (yí gè rén: một người)', examplePinyin: 'Yí gè rén', exampleVi: 'Một người' },
  { id: 'hsk1_er', char: '二', pinyin: 'èr', hanviet: 'NHỊ', meaning: 'Số hai', pos: 'Số từ', topic: 'number', strokeCount: 2, radicals: '二', story: 'Hai nét ngang song song biểu thị trời bên trên và đất bên dưới.', example: '十二 (shí\'èr: số 12)', examplePinyin: 'Shí\'èr', exampleVi: 'Số mười hai' },
  { id: 'hsk1_san', char: '三', pinyin: 'sān', hanviet: 'TAM', meaning: 'Số ba', pos: 'Số từ', topic: 'number', strokeCount: 3, radicals: '三', story: 'Ba nét ngang: Trời - Người - Đất hội tụ.', example: '三个人 (sān gè rén: 3 người)', examplePinyin: 'Sān gè rén', exampleVi: 'Ba người' },
  { id: 'hsk1_si', char: '四', pinyin: 'sì', hanviet: 'TỨ', meaning: 'Số bốn', pos: 'Số từ', topic: 'number', strokeCount: 5, radicals: '囗 + 儿', story: 'Bốn bức tường vây quanh (囗) hai chân chạy (儿) ở bốn hướng.', example: '星期四 (xīngqīsì: thứ năm)', examplePinyin: 'Xīngqīsì', exampleVi: 'Thứ Năm' },
  { id: 'hsk1_wu', char: '五', pinyin: 'wǔ', hanviet: 'NGŨ', meaning: 'Số năm', pos: 'Số từ', topic: 'number', strokeCount: 4, radicals: '五', story: 'Năm ngón tay trên một bàn tay, giao thoa giữa trời và đất.', example: '五月 (wǔ yuè: tháng 5)', examplePinyin: 'Wǔ yuè', exampleVi: 'Tháng Năm' },
  { id: 'hsk1_liu', char: '六', pinyin: 'liù', hanviet: 'LỤC', meaning: 'Số sáu', pos: 'Số từ', topic: 'number', strokeCount: 4, radicals: '亠 + 八', story: 'Mái nhà (亠) có hai chân choãi ra (八) vững chãi sáu cõi.', example: '六点 (liù diǎn: 6 giờ)', examplePinyin: 'Liù diǎn', exampleVi: 'Sáu giờ' },
  { id: 'hsk1_qi', char: '七', pinyin: 'qī', hanviet: 'THẤT', meaning: 'Số bảy', pos: 'Số từ', topic: 'number', strokeCount: 2, radicals: '一 + 乚', story: 'Nét ngang cắt qua nét móc uốn cong.', example: '七天 (qī tiān: 7 ngày)', examplePinyin: 'Qī tiān', exampleVi: 'Bảy ngày' },
  { id: 'hsk1_ba', char: '八', pinyin: 'bā', hanviet: 'BÁT', meaning: 'Số tám, phát tài', pos: 'Số từ', topic: 'number', strokeCount: 2, radicals: '八', story: 'Hai nét mở toạc sang hai bên như cửa đón tài lộc phát đạt.', example: '八月 (bā yuè: tháng 8)', examplePinyin: 'Bā yuè', exampleVi: 'Tháng Tám' },
  { id: 'hsk1_jiu', char: '九', pinyin: 'jiǔ', hanviet: 'CỬU', meaning: 'Số chín, trường tồn', pos: 'Số từ', topic: 'number', strokeCount: 2, radicals: '丿 + 乙', story: 'Số lớn nhất trong hàng đơn vị, nét cong móc mạnh mẽ.', example: '九点 (jiǔ diǎn: 9 giờ)', examplePinyin: 'Jiǔ diǎn', exampleVi: 'Chín giờ' },
  { id: 'hsk1_shi', char: '十', pinyin: 'shí', hanviet: 'THẬP', meaning: 'Số mười, trọn vẹn', pos: 'Số từ', topic: 'number', strokeCount: 2, radicals: '十', story: 'Một nét ngang và một nét dọc tạo thành dấu thập hoàn hảo mười phân vẹn mười.', example: '十分 (shífēn: vô cùng, 10 phần)', examplePinyin: 'Shífēn', exampleVi: 'Vô cùng, mười phần' },
  { id: 'hsk1_ling', char: '零', pinyin: 'líng', hanviet: 'LINH', meaning: 'Số không (0)', pos: 'Số từ', topic: 'number', strokeCount: 13, radicals: '雨 + 令', story: 'Cơn mưa (雨) rơi từng hạt nhỏ li ti rơi về số 0.', example: '二零二六年 (èr líng èr liù nián)', examplePinyin: 'Èr líng èr liù nián', exampleVi: 'Năm 2026' },
  { id: 'hsk1_ge', char: '个', pinyin: 'gè', hanviet: 'CÁ', meaning: 'Cái, chiếc, con, người (lượng từ chung)', pos: 'Lượng từ', topic: 'number', strokeCount: 3, radicals: '人 + 丨', story: 'Từng người từng cái một đứng tách riêng.', example: '一个人，三个苹果。', examplePinyin: 'Yí gè rén, sān gè píngguǒ.', exampleVi: 'Một người, ba quả táo.' },
  { id: 'hsk1_sui', char: '岁', pinyin: 'suì', hanviet: 'TUẾ', meaning: 'Tuổi', pos: 'Lượng từ', topic: 'number', strokeCount: 6, radicals: '山 + 夕', story: 'Bao nhiêu lần trăng tối (夕) lặn qua ngọn núi (山) là bấy nhiêu tuổi đời.', example: '你今年几岁？', examplePinyin: 'Nǐ jīnnián jǐ suì?', exampleVi: 'Năm nay bạn mấy tuổi?' },
  { id: 'hsk1_ben', char: '本', pinyin: 'běn', hanviet: 'BẢN', meaning: 'Quyển, cuốn (sách)', pos: 'Lượng từ', topic: 'number', strokeCount: 5, radicals: '木 + 一', story: 'Gốc cây (木) đánh dấu một nét ngang dưới rễ (一) là nguồn gốc, từ gỗ làm thành sách vở.', example: '一本书 (yì běn shū: một cuốn sách)', examplePinyin: 'Yì běn shū', exampleVi: 'Một quyển sách' },
  { id: 'hsk1_kuai', char: '块', pinyin: 'kuài', hanviet: 'KHỐI', meaning: 'Đồng, tệ, miếng, cục', pos: 'Lượng từ', topic: 'number', strokeCount: 7, radicals: '土 + 夬', story: 'Cục đất (土) hay đồng tiền tiêu dùng hàng ngày.', example: '五块钱 (wǔ kuài qián: 5 tệ)', examplePinyin: 'Wǔ kuài qián', exampleVi: 'Năm tệ / năm đồng' },
  { id: 'hsk1_xie', char: '些', pinyin: 'xiē', hanviet: 'TIÊU', meaning: 'Một vài, một ít', pos: 'Lượng từ', topic: 'number', strokeCount: 8, radicals: '此 + 二', story: 'Chỉ một vài vật nhỏ nhặt ở nơi đây.', example: '这些东西是谁的？', examplePinyin: 'Zhèxiē dōngxi shì shéi de?', exampleVi: 'Những món đồ này là của ai?' },

  // CHỦ ĐỀ 4: GIA ĐÌNH & CON NGƯỜI (12 từ)
  { id: 'hsk1_baba', char: '爸爸', pinyin: 'bàba', hanviet: 'BÁ BÁ', meaning: 'Bố, cha', pos: 'Danh từ', topic: 'people', strokeCount: 16, radicals: '父 + 巴', story: 'Người cha (父) luôn là điểm tựa (巴) vững chãi cho cả nhà.', example: '我爸爸是医生。', examplePinyin: 'Wǒ bàba shì yīshēng.', exampleVi: 'Bố tôi là bác sĩ.' },
  { id: 'hsk1_mama', char: '妈妈', pinyin: 'māma', hanviet: 'MA MA', meaning: 'Mẹ', pos: 'Danh từ', topic: 'people', strokeCount: 12, radicals: '女 + 马', story: 'Người phụ nữ (女) tảo tần làm lụng vất vả như chú ngựa dũng cảm (马) vì con.', example: '我爱我妈妈。', examplePinyin: 'Wǒ ài wǒ māma.', exampleVi: 'Tôi yêu mẹ tôi.' },
  { id: 'hsk1_erzi', char: '儿子', pinyin: 'érzi', hanviet: 'NHI TỬ', meaning: 'Con trai', pos: 'Danh từ', topic: 'people', strokeCount: 5, radicals: '儿 + 子', story: 'Đứa con trai nhỏ bé của gia đình.', example: '他儿子今年八岁。', examplePinyin: 'Tā érzi jīnnián bā suì.', exampleVi: 'Con trai anh ấy năm nay 8 tuổi.' },
  { id: 'hsk1_nver', char: '女儿', pinyin: 'nǚ\'ér', hanviet: 'NỮ NHI', meaning: 'Con gái', pos: 'Danh từ', topic: 'people', strokeCount: 5, radicals: '女 + 儿', story: 'Bé gái con gái đáng yêu xinh xắn.', example: '我有一个女儿。', examplePinyin: 'Wǒ yǒu yí gè nǚ\'ér.', exampleVi: 'Tôi có một cô con gái.' },
  { id: 'hsk1_laoshi', char: '老师', pinyin: 'lǎoshī', hanviet: 'LÃO SƯ', meaning: 'Thầy giáo, cô giáo', pos: 'Danh từ', topic: 'people', strokeCount: 12, radicals: '老 + 师', story: 'Bậc tiền bối giàu kinh nghiệm (老) dẫn dắt và dạy dỗ học trò (师).', example: '李老师教我们汉语。', examplePinyin: 'Lǐ lǎoshī jiào wǒmen Hànyǔ.', exampleVi: 'Thầy Lý dạy chúng tôi tiếng Trung.' },
  { id: 'hsk1_xuesheng', char: '学生', pinyin: 'xuésheng', hanviet: 'HỌC SINH', meaning: 'Học sinh, sinh viên', pos: 'Danh từ', topic: 'people', strokeCount: 13, radicals: '学 + 生', story: 'Người học hỏi (学) để sinh tồn và phát triển kiến thức (生).', example: '他是北京大学的学生。', examplePinyin: 'Tā shì Běijīng Dàxué de xuésheng.', exampleVi: 'Cậu ấy là sinh viên Đại học Bắc Kinh.' },
  { id: 'hsk1_tongxue', char: '同学', pinyin: 'tóngxué', hanviet: 'ĐỒNG HỌC', meaning: 'Bạn cùng lớp, bạn học', pos: 'Danh từ', topic: 'people', strokeCount: 14, radicals: '同 + 学', story: 'Cùng nhau (同) cắp sách học tập chung một mái trường (学).', example: '他们都是我的同学。', examplePinyin: 'Tāmen dōu shì wǒ de tóngxué.', exampleVi: 'Họ đều là bạn cùng lớp của tôi.' },
  { id: 'hsk1_pengyou', char: '朋友', pinyin: 'péngyou', hanviet: 'BẰNG HỮU', meaning: 'Bạn bè', pos: 'Danh từ', topic: 'people', strokeCount: 12, radicals: '朋 + 友', story: 'Hai vầng trăng soi rọi song hành (朋) nắm chặt tay nhau thân ái (友).', example: '我们是好朋友。', examplePinyin: 'Wǒmen dōu shì hǎo péngyou.', exampleVi: 'Chúng tôi là những người bạn tốt.' },
  { id: 'hsk1_yisheng', char: '医生', pinyin: 'yīshēng', hanviet: 'Y SINH', meaning: 'Bác sĩ', pos: 'Danh từ', topic: 'people', strokeCount: 12, radicals: '匚 + 矢 | 生', story: 'Thầy thuốc chữa bệnh cứu sống sinh mạng (生).', example: '去医院看医生。', examplePinyin: 'Qù yīyuàn kàn yīshēng.', exampleVi: 'Đến bệnh viện khám bác sĩ.' },
  { id: 'hsk1_xiansheng', char: '先生', pinyin: 'xiānsheng', hanviet: 'TIÊN SINH', meaning: 'Quý ông, ngài, chồng', pos: 'Danh từ', topic: 'people', strokeCount: 11, radicals: '先 + 生', story: 'Người sinh ra trước (先) được tôn xưng lễ phép là Tiên sinh.', example: '王先生，早上好！', examplePinyin: 'Wáng xiānsheng, zǎoshang hǎo!', exampleVi: 'Chào buổi sáng ông Vương!' },
  { id: 'hsk1_xiaojie', char: '小姐', pinyin: 'xiǎojiě', hanviet: 'TIỂU THƯ', meaning: 'Cô gái, tiểu thư', pos: 'Danh từ', topic: 'people', strokeCount: 11, radicals: '小 + 姐', story: 'Xưng hô lịch sự với cô gái trẻ.', example: '张小姐，请坐！', examplePinyin: 'Zhāng xiǎojiě, qǐng zuò!', exampleVi: 'Mời cô Trương ngồi!' },
  { id: 'hsk1_ren', char: '人', pinyin: 'rén', hanviet: 'NHÂN', meaning: 'Con người, người', pos: 'Danh từ', topic: 'people', strokeCount: 2, radicals: '人', story: 'Hình tượng một người đang tự tin sải bước đi.', example: '中国人 (Zhōngguó rén: người Trung Quốc)', examplePinyin: 'Zhōngguó rén', exampleVi: 'Người Trung Quốc' },

  // CHỦ ĐỀ 5: THỜI GIAN, NGÀY THÁNG & THỜI TIẾT (15 từ)
  { id: 'hsk1_nian', char: '年', pinyin: 'nián', hanviet: 'NIÊN', meaning: 'Năm', pos: 'Danh từ', topic: 'time', strokeCount: 6, radicals: '干 + 人', story: 'Mỗi vụ lúa chín thu hoạch là trọn vẹn một năm.', example: '今年是2026年。', examplePinyin: 'Jīnnián shì èr líng èr liù nián.', exampleVi: 'Năm nay là năm 2026.' },
  { id: 'hsk1_yue', char: '月', pinyin: 'yuè', hanviet: 'NGUYỆT', meaning: 'Tháng, mặt trăng', pos: 'Danh từ', topic: 'time', strokeCount: 4, radicals: '月', story: 'Chu kỳ mặt trăng tròn khuyết trong đúng một tháng.', example: '一月 (yī yuè: tháng 1)', examplePinyin: 'Yī yuè', exampleVi: 'Tháng Một' },
  { id: 'hsk1_ri_hao', char: '日', pinyin: 'rì', hanviet: 'NHẬT', meaning: 'Ngày, mặt trời', pos: 'Danh từ', topic: 'time', strokeCount: 4, radicals: '日', story: 'Vầng thái dương mọc lên là một ngày mới bắt đầu.', example: '十月一日 (shí yuè yī rì: ngày 1 tháng 10)', examplePinyin: 'Shí yuè yī rì', exampleVi: 'Ngày mùng 1 tháng 10' },
  { id: 'hsk1_hao', char: '号', pinyin: 'hào', hanviet: 'HIỆU', meaning: 'Ngày (văn nói), số', pos: 'Danh từ', topic: 'time', strokeCount: 5, radicals: '口 + 丂', story: 'Số hiệu ghi chép ngày tháng trong giao tiếp thường ngày.', example: '今天几号？(Jīntiān jǐ hào: Hôm nay mùng mấy?)', examplePinyin: 'Jīntiān jǐ hào?', exampleVi: 'Hôm nay là ngày mấy?' },
  { id: 'hsk1_xingqi', char: '星期', pinyin: 'xīngqī', hanviet: 'TINH KỲ', meaning: 'Tuần, thứ', pos: 'Danh từ', topic: 'time', strokeCount: 21, radicals: '日 + 生 | 其 + 月', story: 'Chu kỳ các vì sao (星) quay theo từng tuần lễ (期).', example: '星期天 (xīngqītiān: Chủ Nhật)', examplePinyin: 'Xīngqītiān', exampleVi: 'Chủ Nhật' },
  { id: 'hsk1_dian', char: '点', pinyin: 'diǎn', hanviet: 'ĐIỂM', meaning: 'Giờ, dấu chấm, gọi món', pos: 'Danh từ', topic: 'time', strokeCount: 9, radicals: '占 + 灬', story: 'Mỗi giờ trôi qua được điểm dấu kim đồng hồ.', example: '现在三点了。', examplePinyin: 'Xiànzài sān diǎn le.', exampleVi: 'Bây giờ là 3 giờ rồi.' },
  { id: 'hsk1_fenzhong', char: '分钟', pinyin: 'fēnzhōng', hanviet: 'PHÂN CHUNG', meaning: 'Phút', pos: 'Danh từ', topic: 'time', strokeCount: 16, radicals: '八 + 刀 | 钅+ 中', story: 'Phút giây chia nhỏ (分) trên mặt chiếc chuông đồng hồ (钟).', example: '等我十分钟。', examplePinyin: 'Děng wǒ shí fēnzhōng.', exampleVi: 'Đợi tôi 10 phút nhé.' },
  { id: 'hsk1_xianzai', char: '现在', pinyin: 'xiànzài', hanviet: 'HIỆN TẠI', meaning: 'Bây giờ, hiện tại', pos: 'Danh từ', topic: 'time', strokeCount: 14, radicals: '王 + 见 | 在', story: 'Ngay khoảnh khắc đang hiện hữu ngay trước mắt (见).', example: '你现在在哪儿？', examplePinyin: 'Nǐ xiànzài zài nǎr?', exampleVi: 'Bây giờ bạn đang ở đâu?' },
  { id: 'hsk1_jintian', char: '今天', pinyin: 'jīntiān', hanviet: 'KIM THIÊN', meaning: 'Hôm nay', pos: 'Danh từ', topic: 'time', strokeCount: 8, radicals: '今 + 天', story: 'Bầu trời (天) của ngày hôm nay (今).', example: '今天天气很好。', examplePinyin: 'Jīntiān tiānqì hěn hǎo.', exampleVi: 'Thời tiết hôm nay rất đẹp.' },
  { id: 'hsk1_mingtian', char: '明天', pinyin: 'míngtiān', hanviet: 'MINH THIÊN', meaning: 'Ngày mai', pos: 'Danh từ', topic: 'time', strokeCount: 12, radicals: '日 + 月 | 天', story: 'Khi ánh sáng rực rỡ (明) của ngày mới ló rạng.', example: '明天见！', examplePinyin: 'Míngtiān jiàn!', exampleVi: 'Ngày mai gặp lại!' },
  { id: 'hsk1_zuotian', char: '昨天', pinyin: 'zuótiān', hanviet: 'TÁC THIÊN', meaning: 'Hôm qua', pos: 'Danh từ', topic: 'time', strokeCount: 13, radicals: '日 + 乍 | 天', story: 'Ngày (日) vừa mới vụt qua ngày hôm qua (昨).', example: '昨天你去哪儿了？', examplePinyin: 'Zuótiān nǐ qù nǎr le?', exampleVi: 'Hôm qua bạn đã đi đâu thế?' },
  { id: 'hsk1_shangwu', char: '上午', pinyin: 'shàngwǔ', hanviet: 'THƯỢNG NGỌ', meaning: 'Buổi sáng (trước 12h)', pos: 'Danh từ', topic: 'time', strokeCount: 7, radicals: '上 + 午', story: 'Thời gian nằm ở phía trên trước giờ chính ngọ (午).', example: '上午九点开会。', examplePinyin: 'Shàngwǔ jiǔ diǎn kāihuì.', exampleVi: '9 giờ sáng họp.' },
  { id: 'hsk1_zhongwu', char: '中午', pinyin: 'zhōngwǔ', hanviet: 'TRUNG NGỌ', meaning: 'Buổi trưa (12h)', pos: 'Danh từ', topic: 'time', strokeCount: 8, radicals: '中 + 午', story: 'Chính giữa đỉnh đầu mặt trời buổi trưa tròn bóng.', example: '中午一起吃午饭吧！', examplePinyin: 'Zhōngwǔ yìqǐ chī wǔfàn ba!', exampleVi: 'Buổi trưa cùng nhau ăn cơm trưa nhé!' },
  { id: 'hsk1_xiawu', char: '下午', pinyin: 'xiàwǔ', hanviet: 'HẠ NGỌ', meaning: 'Buổi chiều (sau 12h)', pos: 'Danh từ', topic: 'time', strokeCount: 7, radicals: '下 + 午', story: 'Mặt trời đã ngả bóng xuống sau giờ chính ngọ.', example: '下午我去图书馆。', examplePinyin: 'Xiàwǔ wǒ qù túshūguǎn.', exampleVi: 'Buổi chiều tôi đi thư viện.' },
  { id: 'hsk1_tianqi', char: '天气', pinyin: 'tiānqì', hanviet: 'THIÊN KHÍ', meaning: 'Thời tiết', pos: 'Danh từ', topic: 'time', strokeCount: 8, radicals: '天 + 气', story: 'Khí hậu và mây gió của bầu trời bao la.', example: '今天天气怎么样？', examplePinyin: 'Jīntiān tiānqì zěnmeyàng?', exampleVi: 'Thời tiết hôm nay thế nào?' },

  // CHỦ ĐỀ 6: ẨM THỰC & MUA SẮM (12 từ)
  { id: 'hsk1_chi', char: '吃', pinyin: 'chī', hanviet: 'CẬT', meaning: 'Ăn', pos: 'Động từ', topic: 'food', strokeCount: 6, radicals: '口 + 乞', story: 'Mở miệng (口) đón lấy thức ăn đưa vào dạ dày.', example: '你吃米饭吗？', examplePinyin: 'Nǐ chī mǐfàn ma?', exampleVi: 'Bạn có ăn cơm không?' },
  { id: 'hsk1_he', char: '喝', pinyin: 'hē', hanviet: 'HÁT', meaning: 'Uống', pos: 'Động từ', topic: 'food', strokeCount: 12, radicals: '口 + 曷', story: 'Mở miệng (口) uống nước giải khát dưới nắng.', example: '我想喝茶。', examplePinyin: 'Wǒ xiǎng hē chá.', exampleVi: 'Tôi muốn uống trà.' },
  { id: 'hsk1_shui', char: '水', pinyin: 'shuǐ', hanviet: 'THỦY', meaning: 'Nước, chất lỏng', pos: 'Danh từ', topic: 'food', strokeCount: 4, radicals: '水', story: 'Dòng nước trong mát tuôn chảy nuôi sống muôn loài.', example: '喝多点水。(Hē duō diǎn shuǐ: Uống nhiều nước chút.)', examplePinyin: 'Hē duō diǎn shuǐ.', exampleVi: 'Hãy uống nhiều nước hơn một chút.' },
  { id: 'hsk1_cha', char: '茶', pinyin: 'chá', hanviet: 'TRÀ', meaning: 'Trà, chè', pos: 'Danh từ', topic: 'food', strokeCount: 9, radicals: '艹 + 人 + 木', story: 'Búp lá cây cỏ thảo dược (艹) được con người (人) hái từ trên cây gỗ (木) về sao thành trà ngon.', example: '中国茶很好喝。', examplePinyin: 'Zhōngguó chá hěn hǎohē.', exampleVi: 'Trà Trung Quốc uống rất ngon.' },
  { id: 'hsk1_mifan', char: '米饭', pinyin: 'mǐfàn', hanviet: 'MỄ PHẠN', meaning: 'Cơm trắng', pos: 'Danh từ', topic: 'food', strokeCount: 13, radicals: '米 + 饣+ 反', story: 'Hạt gạo dẻo (米) được nấu chín thành món ăn ấm bụng (饭).', example: '吃一碗米饭。', examplePinyin: 'Chī yì wǎn mǐfàn.', exampleVi: 'Ăn một bát cơm trắng.' },
  { id: 'hsk1_cai', char: '菜', pinyin: 'cài', hanviet: 'THÁI', meaning: 'Món ăn, rau củ', pos: 'Danh từ', topic: 'food', strokeCount: 11, radicals: '艹 + 爫 + 木', story: 'Rau xanh (艹) được bàn tay hái (爫) từ ruộng vườn chế biến thành món ăn.', example: '这个菜很好吃！', examplePinyin: 'Zhè gè cài hěn hǎochī!', exampleVi: 'Món này ăn ngon lắm!' },
  { id: 'hsk1_pingguo', char: '苹果', pinyin: 'píngguǒ', hanviet: 'BÌNH QUẢ', meaning: 'Quả táo', pos: 'Danh từ', topic: 'food', strokeCount: 16, radicals: '艹 + 平 | 田 + 木', story: 'Loại quả ngọt lành biểu trưng cho sự bình an (平).', example: '一个大红苹果。', examplePinyin: 'Yí gè dà hóng píngguǒ.', exampleVi: 'Một quả táo đỏ to.' },
  { id: 'hsk1_mai', char: '买', pinyin: 'mǎi', hanviet: 'MÃI', meaning: 'Mua', pos: 'Động từ', topic: 'food', strokeCount: 6, radicals: '乛+ 头', story: 'Bỏ tiền ra mua đồ đạc đội lên đầu mang về.', example: '你想买什么？', examplePinyin: 'Nǐ xiǎng mǎi shénme?', exampleVi: 'Bạn muốn mua gì thế?' },
  { id: 'hsk1_qian', char: '钱', pinyin: 'qián', hanviet: 'TIỀN', meaning: 'Tiền bạc', pos: 'Danh từ', topic: 'food', strokeCount: 10, radicals: '钅+ 戋', story: 'Đồng tiền đúc bằng kim loại quý (钅).', example: '多少钱？(Duōshao qián: Bao nhiêu tiền?)', examplePinyin: 'Duōshao qián?', exampleVi: 'Bao nhiêu tiền vậy?' },
  { id: 'hsk1_beizi', char: '杯子', pinyin: 'bēizi', hanviet: 'BÔI TỬ', meaning: 'Cái ly, cái cốc', pos: 'Danh từ', topic: 'food', strokeCount: 11, radicals: '木 + 不 | 子', story: 'Chiếc cốc uống trà bằng gỗ hoặc sứ.', example: '杯子里有水。', examplePinyin: 'Bēizi lǐ yǒu shuǐ.', exampleVi: 'Trong cốc có nước.' },

  // CHỦ ĐỀ 7: NƠI CHỐN & PHƯƠNG HƯỚNG (12 từ)
  { id: 'hsk1_jia', char: '家', pinyin: 'jiā', hanviet: 'GIA', meaning: 'Nhà, gia đình', pos: 'Danh từ', topic: 'place', strokeCount: 10, radicals: '宀 + 豕', story: 'Dưới mái ấm gia đình (宀) có nuôi bầy heo ấm no (豕).', example: '我家在北京。', examplePinyin: 'Wǒ jiā zài Běijīng.', exampleVi: 'Nhà tôi ở Bắc Kinh.' },
  { id: 'hsk1_xuexiao', char: '学校', pinyin: 'xuéxiào', hanviet: 'HỌC HIỆU', meaning: 'Trường học', pos: 'Danh từ', topic: 'place', strokeCount: 18, radicals: '学 + 木 + 交', story: 'Nơi giao lưu học hỏi tri thức dưới bóng mát học đường.', example: '我们学校很大。', examplePinyin: 'Wǒmen xuéxiào hěn dà.', exampleVi: 'Trường học của chúng tôi rất lớn.' },
  { id: 'hsk1_fandian', char: '饭店', pinyin: 'fàndiàn', hanviet: 'PHẠN ĐIẾM', meaning: 'Nhà hàng, khách sạn', pos: 'Danh từ', topic: 'place', strokeCount: 15, radicals: '饭 + 店', story: 'Cửa tiệm kinh doanh ẩm thực và lưu trú.', example: '去饭店吃饭。', examplePinyin: 'Qù fàndiàn chīfàn.', exampleVi: 'Đến nhà hàng ăn cơm.' },
  { id: 'hsk1_shangdian', char: '商店', pinyin: 'shāngdiàn', hanviet: 'THƯƠNG ĐIẾM', meaning: 'Cửa hàng, tiệm tạp hóa', pos: 'Danh từ', topic: 'place', strokeCount: 19, radicals: '商 + 店', story: 'Nơi người thương nhân bày hàng hóa buôn bán.', example: '我去商店买东西。', examplePinyin: 'Wǒ qù shāngdiàn mǎi dōngxi.', exampleVi: 'Tôi ra cửa hàng mua đồ.' },
  { id: 'hsk1_yiyuan', char: '医院', pinyin: 'yīyuàn', hanviet: 'Y VIỆN', meaning: 'Bệnh viện', pos: 'Danh từ', topic: 'place', strokeCount: 16, radicals: '医 + 院', story: 'Khu viện chữa trị bệnh tật cho nhân dân.', example: '他在医院工作。', examplePinyin: 'Tā zài yīyuàn gōngzuò.', exampleVi: 'Anh ấy làm việc ở bệnh viện.' },
  { id: 'hsk1_huochezhan', char: '火车站', pinyin: 'huǒchēzhàn', hanviet: 'HỎA XA TRẠM', meaning: 'Ga tàu hỏa', pos: 'Danh từ', topic: 'place', strokeCount: 18, radicals: '火 + 车 + 站', story: 'Trạm dừng chân của đoàn tàu chạy bằng động cơ.', example: '我去火车站接朋友。', examplePinyin: 'Wǒ qù huǒchēzhàn jiē péngyou.', exampleVi: 'Tôi ra ga xe lửa đón bạn bè.' },
  { id: 'hsk1_zhongguo', char: '中国', pinyin: 'Zhōngguó', hanviet: 'TRUNG QUỐC', meaning: 'Trung Quốc', pos: 'Danh từ', topic: 'place', strokeCount: 12, radicals: '中 + 囗 + 玉', story: 'Đất nước ở trung tâm (中), có biên cương vững vàng (囗) gìn giữ ngọc ngà (玉).', example: '中国文化很有趣。', examplePinyin: 'Zhōngguó wénhuà hěn yǒuqù.', exampleVi: 'Văn hóa Trung Quốc rất thú vị.' },
  { id: 'hsk1_beijing', char: '北京', pinyin: 'Běijīng', hanviet: 'BẮC KINH', meaning: 'Bắc Kinh (thủ đô)', pos: 'Danh từ', topic: 'place', strokeCount: 13, radicals: '北 + 京', story: 'Kinh đô tráng lệ nằm ở phương bắc.', example: '北京的秋天很美。', examplePinyin: 'Běijīng de qiūtiān hěn měi.', exampleVi: 'Mùa thu Bắc Kinh rất đẹp.' },
  { id: 'hsk1_shang', char: '上', pinyin: 'shàng', hanviet: 'THƯỢNG', meaning: 'Trên, lên', pos: 'Phương vị', topic: 'place', strokeCount: 3, radicals: '一 + 丨', story: 'Chỉ dấu hiệu vươn lên trên mặt phẳng ngang.', example: '桌子上 (zhuōzi shang: trên bàn)', examplePinyin: 'Zhuōzi shang', exampleVi: 'Ở trên mặt bàn' },
  { id: 'hsk1_xia', char: '下', pinyin: 'xià', hanviet: 'HẠ', meaning: 'Dưới, xuống', pos: 'Phương vị', topic: 'place', strokeCount: 3, radicals: '一 + 丨', story: 'Nét chấm chỉ xuống phía dưới mặt phẳng ngang.', example: '椅子下 (yǐzi xia: dưới ghế)', examplePinyin: 'Yǐzi xia', exampleVi: 'Ở dưới gầm ghế' },
  { id: 'hsk1_qianmian', char: '前面', pinyin: 'qiánmiàn', hanviet: 'TIỀN DIỆN', meaning: 'Phía trước', pos: 'Phương vị', topic: 'place', strokeCount: 18, radicals: '前 + 面', story: 'Hướng nhìn thẳng trước khuôn mặt.', example: '他在我前面。', examplePinyin: 'Tā zài wǒ qiánmiàn.', exampleVi: 'Anh ấy ở phía trước tôi.' },
  { id: 'hsk1_li', char: '里', pinyin: 'lǐ', hanviet: 'LÝ', meaning: 'Bên trong, trong', pos: 'Phương vị', topic: 'place', strokeCount: 7, radicals: '田 + 土', story: 'Bên trong thửa ruộng bờ đất xóm làng.', example: '家里有人吗？', examplePinyin: 'Jiā lǐ yǒu rén ma?', exampleVi: 'Trong nhà có ai không?' },

  // CHỦ ĐỀ 8: ĐỘNG TỪ HÀNH ĐỘNG HÀNG NGÀY (18 từ)
  { id: 'hsk1_kan', char: '看', pinyin: 'kàn', hanviet: 'KHÁN', meaning: 'Xem, nhìn, đọc', pos: 'Động từ', topic: 'action', strokeCount: 9, radicals: '手 + 目', story: 'Bàn tay (手) che lên trên đôi mắt (目) để phóng tầm mắt nhìn thật xa.', example: '我看书，他看电视。', examplePinyin: 'Wǒ kàn shū, tā kàn diànshì.', exampleVi: 'Tôi đọc sách, anh ấy xem ti vi.' },
  { id: 'hsk1_ting', char: '听', pinyin: 'tīng', hanviet: 'THÍNH', meaning: 'Nghe', pos: 'Động từ', topic: 'action', strokeCount: 7, radicals: '口 + 斤', story: 'Lắng tai nghe từng lời thốt ra từ miệng.', example: '你听，这是什么音乐？', examplePinyin: 'Nǐ tīng, zhè shì shénme yīnyuè?', exampleVi: 'Bạn nghe này, đây là nhạc gì vậy?' },
  { id: 'hsk1_shuo', char: '说', pinyin: 'shuō', hanviet: 'THUYẾT', meaning: 'Nói', pos: 'Động từ', topic: 'action', strokeCount: 9, radicals: '讠+ 兑', story: 'Dùng lời nói (讠) làm vui lòng (兑) người đối diện.', example: '你会说汉语吗？', examplePinyin: 'Nǐ huì shuō Hànyǔ ma?', exampleVi: 'Bạn biết nói tiếng Trung không?' },
  { id: 'hsk1_du', char: '读', pinyin: 'dú', hanviet: 'ĐỘC', meaning: 'Đọc to, học tập', pos: 'Động từ', topic: 'action', strokeCount: 10, radicals: '讠+ 卖', story: 'Phát ra lời nói (讠) xướng to bài học.', example: '跟我读：你好！', examplePinyin: 'Gēn wǒ dú: Nǐ hǎo!', exampleVi: 'Đọc to theo tôi: Nǐ hǎo!' },
  { id: 'hsk1_xie', char: '写', pinyin: 'xiě', hanviet: 'TẢ', meaning: 'Viết', pos: 'Động từ', topic: 'action', strokeCount: 5, radicals: '冖 + 与', story: 'Cầm bút viết chữ dưới mái bàn giấy.', example: '写汉字很有意思。', examplePinyin: 'Xiě Hànzì hěn yǒuyìsi.', exampleVi: 'Viết chữ Hán rất thú vị.' },
  { id: 'hsk1_zuo_do', char: '做', pinyin: 'zuò', hanviet: 'TÁC', meaning: 'Làm, chế tạo', pos: 'Động từ', topic: 'action', strokeCount: 11, radicals: '亻+ 故', story: 'Con người (亻) bắt tay hành động làm nên việc lớn.', example: '你在做什么？', examplePinyin: 'Nǐ zài zuò shénme?', exampleVi: 'Bạn đang làm gì đấy?' },
  { id: 'hsk1_jiao', char: '叫', pinyin: 'jiào', hanviet: 'KHIẾU', meaning: 'Gọi là, tên là', pos: 'Động từ', topic: 'action', strokeCount: 5, radicals: '口 + 丩', story: 'Mở miệng (口) gọi tên ai đó to rõ ràng.', example: '我叫李明。', examplePinyin: 'Wǒ jiào Lǐ Míng.', exampleVi: 'Tôi tên là Lý Minh.' },
  { id: 'hsk1_shi_verb', char: '是', pinyin: 'shì', hanviet: 'THỊ', meaning: 'Là, đúng', pos: 'Động từ', topic: 'action', strokeCount: 9, radicals: '日 + 正', story: 'Mặt trời (日) ngay thẳng chính trực (正), chân lý đích thị là vậy.', example: '我是越南人。', examplePinyin: 'Wǒ shì Yuènán rén.', exampleVi: 'Tôi là người Việt Nam.' },
  { id: 'hsk1_you', char: '有', pinyin: 'yǒu', hanviet: 'HỮU', meaning: 'Có, tồn tại', pos: 'Động từ', topic: 'action', strokeCount: 6, radicals: '月 + 又', story: 'Bàn tay (又) nắm chắc miếng thịt (月), có của ăn của để.', example: '我有两本书。', examplePinyin: 'Wǒ yǒu liǎng běn shū.', exampleVi: 'Tôi có hai cuốn sách.' },
  { id: 'hsk1_qu', char: '去', pinyin: 'qù', hanviet: 'KHỨ', meaning: 'Đi, rời khỏi', pos: 'Động từ', topic: 'action', strokeCount: 5, radicals: '土 + 厶', story: 'Rời mảnh đất chôn nhau cắt rốn bước đi xa.', example: '你想去哪儿？', examplePinyin: 'Nǐ xiǎng qù nǎr?', exampleVi: 'Bạn muốn đi đâu?' },
  { id: 'hsk1_lai', char: '来', pinyin: 'lái', hanviet: 'LAI', meaning: 'Đến, tới', pos: 'Động từ', topic: 'action', strokeCount: 7, radicals: '木 + 丷', story: 'Bông lúa từ phương xa tới mùa gặt hái.', example: '他今天来我家。', examplePinyin: 'Tā jīntiān lái wǒ jiā.', exampleVi: 'Hôm nay anh ấy đến nhà tôi chơi.' },
  { id: 'hsk1_hui', char: '回', pinyin: 'huí', hanviet: 'HỒI', meaning: 'Về, quay lại', pos: 'Động từ', topic: 'action', strokeCount: 6, radicals: '囗 + 口', story: 'Khung lớn bao bọc khung nhỏ, vòng quay trở về chốn xưa.', example: '我要回家了。', examplePinyin: 'Wǒ yào huí jiā le.', exampleVi: 'Tôi phải về nhà rồi.' },
  { id: 'hsk1_zhu', char: '住', pinyin: 'zhù', hanviet: 'TRÚ', meaning: 'Ở, cư trú', pos: 'Động từ', topic: 'action', strokeCount: 7, radicals: '亻+ 主', story: 'Người (亻) làm chủ (主) ngôi nhà an cư lạc nghiệp.', example: '你住在哪里？', examplePinyin: 'Nǐ zhù zài nǎlǐ?', exampleVi: 'Bạn sống ở đâu?' },
  { id: 'hsk1_zuo_sit', char: '坐', pinyin: 'zuò', hanviet: 'TỌA', meaning: 'Ngồi, đi (tàu, xe)', pos: 'Động từ', topic: 'action', strokeCount: 7, radicals: '人 + 人 + 土', story: 'Hai người (人 人) cùng ngồi đối thoại trên mô đất (土).', example: '请坐！请喝茶！', examplePinyin: 'Qǐng zuò! Qǐng hē chá!', exampleVi: 'Mời ngồi! Mời uống trà!' },
  { id: 'hsk1_kai', char: '开', pinyin: 'kāi', hanviet: 'KHAI', meaning: 'Mở, lái (xe), nở (hoa)', pos: 'Động từ', topic: 'action', strokeCount: 4, radicals: '一 + 廾', story: 'Hai tay gỡ then cửa mở toang cánh cửa đón ánh sáng.', example: '开门 (kāi mén: mở cửa) • 开车 (kāichē: lái xe)', examplePinyin: 'Kāi mén • Kāi chē', exampleVi: 'Mở cửa • Lái xe' },
  { id: 'hsk1_gongzuo', char: '工作', pinyin: 'gōngzuò', hanviet: 'CÔNG TÁC', meaning: 'Làm việc, công việc', pos: 'Động từ / Danh từ', topic: 'action', strokeCount: 10, radicals: '工 + 作', story: 'Dùng tay nghề khéo léo (工) tạo nên giá trị hữu ích (作).', example: '我很喜欢我的工作。', examplePinyin: 'Wǒ hěn xǐhuan wǒ de gōngzuò.', exampleVi: 'Tôi rất thích công việc của tôi.' },
  { id: 'hsk1_xuexi', char: '学习', pinyin: 'xuéxí', hanviet: 'HỌC TẬP', meaning: 'Học tập, rèn luyện', pos: 'Động từ', topic: 'action', strokeCount: 11, radicals: '学 + 习', story: 'Học kiến thức mới (学) và ngày ngày vỗ cánh luyện tập (习).', example: '好好学习，天天向上。', examplePinyin: 'Hǎohǎo xuéxí, tiāntiān xiàngshàng.', exampleVi: 'Học tập thật tốt, mỗi ngày một tiến bộ.' },
  { id: 'hsk1_shuijiao', char: '睡觉', pinyin: 'shuì jiào', hanviet: 'THỤY GIÁC', meaning: 'Đi ngủ', pos: 'Động từ', topic: 'action', strokeCount: 20, radicals: '目 + 垂 | 觉', story: 'Đôi mi mắt (目) rũ xuống (垂) say giấc nồng.', example: '太晚了，去睡觉吧。', examplePinyin: 'Tài wǎn le, qù shuìjiào ba.', exampleVi: 'Muộn quá rồi, đi ngủ thôi nào.' },

  // CHỦ ĐỀ 9: TÍNH TỪ, TRẠNG THÁI & CẢM XÚC (14 từ)
  { id: 'hsk1_hao', char: '好', pinyin: 'hǎo', hanviet: 'HẢO', meaning: 'Tốt, đẹp, hay, ngon', pos: 'Tính từ', topic: 'state', strokeCount: 6, radicals: '女 + 子', story: 'Mẹ (女) bồng con (子) trong lòng: Tốt đẹp viên mãn nhất thế gian.', example: '很好！太好了！', examplePinyin: 'Hěn hǎo! Tài hǎo le!', exampleVi: 'Rất tốt! Tuyệt vời quá!' },
  { id: 'hsk1_da', char: '大', pinyin: 'dà', hanviet: 'ĐẠI', meaning: 'To lớn', pos: 'Tính từ', topic: 'state', strokeCount: 3, radicals: '大', story: 'Người dang rộng cả hai tay hai chân vươn hết cỡ to lớn.', example: '这个西瓜很大。', examplePinyin: 'Zhè gè xīguā hěn dà.', exampleVi: 'Quả dưa hấu này rất to.' },
  { id: 'hsk1_xiao', char: '小', pinyin: 'xiǎo', hanviet: 'TIỂU', meaning: 'Nhỏ bé', pos: 'Tính từ', topic: 'state', strokeCount: 3, radicals: '小', story: 'Một vật nhỏ phân tách thành hai mảnh bé tí tẹo.', example: '猫很小，很可爱。', examplePinyin: 'Māo hěn xiǎo, hěn kě\'ài.', exampleVi: 'Con mèo nhỏ xíu, rất đáng yêu.' },
  { id: 'hsk1_duo', char: '多', pinyin: 'duō', hanviet: 'ĐA', meaning: 'Nhiều', pos: 'Tính từ', topic: 'state', strokeCount: 6, radicals: '夕 + 夕', story: 'Nhiều đêm tối (夕 + 夕) nối tiếp nhau qua đi.', example: '这里有很多书。', examplePinyin: 'Zhèlǐ yǒu hěn duō shū.', exampleVi: 'Ở đây có rất nhiều sách.' },
  { id: 'hsk1_shao', char: '少', pinyin: 'shǎo', hanviet: 'THIỂU', meaning: 'Ít', pos: 'Tính từ', topic: 'state', strokeCount: 4, radicals: '小 + 丿', story: 'Đã nhỏ bé (小) lại còn bị phẩy cắt bớt nữa nên rất ít.', example: '他的话很少。', examplePinyin: 'Tā de huà hěn shǎo.', exampleVi: 'Anh ấy rất ít nói.' },
  { id: 'hsk1_leng', char: '冷', pinyin: 'lěng', hanviet: 'LÃNH', meaning: 'Lạnh buốt', pos: 'Tính từ', topic: 'state', strokeCount: 7, radicals: '冫+ 令', story: 'Băng tuyết rơi (冫) truyền hiệu lệnh giá buốt mùa đông.', example: '今天有点儿冷。', examplePinyin: 'Jīntiān yǒudiǎnr lěng.', exampleVi: 'Hôm nay trời hơi lạnh một chút.' },
  { id: 'hsk1_re', char: '热', pinyin: 'rè', hanviet: 'NHIỆT', meaning: 'Nóng, nhiệt tình', pos: 'Tính từ', topic: 'state', strokeCount: 10, radicals: '扌+ 丸 + 灬', story: 'Đất đá bị nung nấu trên bốn chấm lửa bốc hỏa (灬).', example: '天气太热了！', examplePinyin: 'Tiānqì tài rè le!', exampleVi: 'Thời tiết nóng bức quá!' },
  { id: 'hsk1_gaoxing', char: '高兴', pinyin: 'gāoxìng', hanviet: 'CAO HỨNG', meaning: 'Vui vẻ, hân hoan', pos: 'Tính từ', topic: 'state', strokeCount: 16, radicals: '高 + 兴', story: 'Tâm trạng hứng khởi (兴) bay bổng lên tận mây cao (高).', example: '认识你很高兴！', examplePinyin: 'Rènshí nǐ hěn gāoxìng!', exampleVi: 'Rất vui được làm quen với bạn!' },
  { id: 'hsk1_piaoliang', char: '漂亮', pinyin: 'piàoliang', hanviet: 'PHIÊU LƯỢNG', meaning: 'Xinh đẹp, tuyệt vời', pos: 'Tính từ', topic: 'state', strokeCount: 20, radicals: '氵+ 票 | 亠 + 亢', story: 'Gió nước phiêu bồng (漂) hòa cùng ánh sáng lung linh rạng rỡ (亮).', example: '她穿这件衣服很漂亮。', examplePinyin: 'Tā chuān zhè jiàn yīfu hěn piàoliang.', exampleVi: 'Cô ấy mặc bộ quần áo này rất đẹp.' },
  { id: 'hsk1_ai', char: '爱', pinyin: 'ài', hanviet: 'ÁI', meaning: 'Yêu thương', pos: 'Động từ', topic: 'state', strokeCount: 10, radicals: '爫 + 冖 + 友', story: 'Dành tình bạn chân thành (友) che chở nâng niu bằng tất cả trái tim.', example: '我爱你。', examplePinyin: 'Wǒ ài nǐ.', exampleVi: 'Tôi yêu bạn / Anh yêu em.' },
  { id: 'hsk1_xihuan', char: '喜欢', pinyin: 'xǐhuan', hanviet: 'HỈ HOAN', meaning: 'Thích thú', pos: 'Động từ', topic: 'state', strokeCount: 18, radicals: '喜 + 欢', story: 'Vừa mừng vui như đám cưới (喜) vừa hân hoan đón nhận (欢).', example: '你喜欢中国菜吗？', examplePinyin: 'Nǐ xǐhuan Zhōngguó cài ma?', exampleVi: 'Bạn có thích món ăn Trung Quốc không?' },
  { id: 'hsk1_xiang', char: '想', pinyin: 'xiǎng', hanviet: 'TƯỞNG', meaning: 'Muốn, nhớ, suy nghĩ', pos: 'Động từ', topic: 'state', strokeCount: 13, radicals: '相 + 心', story: 'Trong trái tim (心) luôn khắc ghi hình bóng của đối phương (相).', example: '我想学汉语。', examplePinyin: 'Wǒ xiǎng xué Hànyǔ.', exampleVi: 'Tôi muốn học tiếng Trung.' },
  { id: 'hsk1_hui_can', char: '会', pinyin: 'huì', hanviet: 'HỘI', meaning: 'Biết (qua học hỏi), sẽ', pos: 'Động từ năng nguyện', topic: 'state', strokeCount: 6, radicals: '人 + 云', story: 'Con người (人) hội tụ tích lũy kỹ năng như mây (云) tụ lại.', example: '我会说一点儿汉语。', examplePinyin: 'Wǒ huì shuō yìdiǎnr Hànyǔ.', exampleVi: 'Tôi biết nói một chút tiếng Trung.' },
  { id: 'hsk1_neng', char: '能', pinyin: 'néng', hanviet: 'NĂNG', meaning: 'Có thể (năng lực, điều kiện)', pos: 'Động từ năng nguyện', topic: 'state', strokeCount: 10, radicals: '厶 + 月 + 匕 + 匕', story: 'Năng lực tài năng như chú gấu mạnh mẽ.', example: '我能坐在这里吗？', examplePinyin: 'Wǒ néng zuò zài zhèlǐ ma?', exampleVi: 'Tôi có thể ngồi ở đây được không?' },

  // CHỦ ĐỀ 10: TRỢ TỪ, PHÓ TỪ & CÔNG CỤ (17 từ)
  { id: 'hsk1_bu', char: '不', pinyin: 'bù', hanviet: 'BẤT', meaning: 'Không (phủ định hiện tại/tương lai)', pos: 'Phó từ', topic: 'grammar', strokeCount: 4, radicals: '不', story: 'Hình cánh chim bay vút lên trời không chịu đậu xuống.', example: '我不是老师。', examplePinyin: 'Wǒ bú shì lǎoshī.', exampleVi: 'Tôi không phải là giáo viên.' },
  { id: 'hsk1_mei', char: '没', pinyin: 'méi', hanviet: 'MỘT', meaning: 'Không có, chưa (phủ định quá khứ / 有)', pos: 'Phó từ', topic: 'grammar', strokeCount: 7, radicals: '氵+ 殳', story: 'Nước cuốn trôi chìm lấp mất không còn gì nữa.', example: '我没有钱。', examplePinyin: 'Wǒ méiyǒu qián.', exampleVi: 'Tôi không có tiền.' },
  { id: 'hsk1_hen', char: '很', pinyin: 'hěn', hanviet: 'HẨN', meaning: 'Rất', pos: 'Phó từ', topic: 'grammar', strokeCount: 9, radicals: '彳+ 艮', story: 'Bước chân dứt khoát vượt trội hơn hẳn mọi người.', example: '他汉语很好。', examplePinyin: 'Tā Hànyǔ hěn hǎo.', exampleVi: 'Tiếng Trung của anh ấy rất tốt.' },
  { id: 'hsk1_tai', char: '太', pinyin: 'tài', hanviet: 'THÁI', meaning: 'Quá, lắm', pos: 'Phó từ', topic: 'grammar', strokeCount: 4, radicals: '大 + 丶', story: 'Đã to lớn (大) rồi lại còn thêm một dấu chấm dôi dư nữa: Quá đỗi!', example: '太好了！(Tài hǎo le: Quá tốt rồi!)', examplePinyin: 'Tài hǎo le!', exampleVi: 'Tuyệt vời quá rồi!' },
  { id: 'hsk1_dou', char: '都', pinyin: 'dōu', hanviet: 'ĐÔ', meaning: 'Đều, tất cả', pos: 'Phó từ', topic: 'grammar', strokeCount: 10, radicals: '者 + 阝', story: 'Toàn bộ cư dân khắp xóm ấp kinh đô đều như vậy.', example: '我们都是学生。', examplePinyin: 'Wǒmen dōu shì xuésheng.', exampleVi: 'Tất cả chúng tôi đều là học sinh.' },
  { id: 'hsk1_ye', char: '也', pinyin: 'yě', hanviet: 'DÃ', meaning: 'Cũng', pos: 'Phó từ', topic: 'grammar', strokeCount: 3, radicals: '也', story: 'Nét uốn lượn liên kết ý này cũng giống ý kia.', example: '我也喜欢喝茶。', examplePinyin: 'Wǒ yě xǐhuan hē chá.', exampleVi: 'Tôi cũng thích uống trà.' },
  { id: 'hsk1_he_conj', char: '和', pinyin: 'hé', hanviet: 'HÒA', meaning: 'Và, cùng', pos: 'Liên từ', topic: 'grammar', strokeCount: 8, radicals: '禾 + 口', story: 'Lúa gạo (禾) đủ cho muôn miệng ăn (口) thì thiên hạ thái bình hòa thuận.', example: '我和你 (wǒ hé nǐ: tôi và bạn)', examplePinyin: 'Wǒ hé nǐ', exampleVi: 'Tôi và bạn' },
  { id: 'hsk1_zai_prep', char: '在', pinyin: 'zài', hanviet: 'TẠI', meaning: 'Ở, tại, đang', pos: 'Giới từ / Phó từ', topic: 'grammar', strokeCount: 6, radicals: '土 + 𠂇', story: 'Cây cối sinh sôi bám rễ vững chãi trên đất mẹ (土).', example: '他在学校。/ 他在看书。', examplePinyin: 'Tā zài xuéxiào. / Tā zài kàn shū.', exampleVi: 'Anh ấy ở trường. / Anh ấy đang đọc sách.' },
  { id: 'hsk1_de_particle', char: '的', pinyin: 'de', hanviet: 'ĐÍCH', meaning: 'Của, trợ từ định ngữ', pos: 'Trợ từ', topic: 'grammar', strokeCount: 8, radicals: '白 + 勺', story: 'Chiếc thìa trắng nhắm thẳng đích đến làm rõ sở hữu.', example: '我的书 (wǒ de shū: sách của tôi)', examplePinyin: 'Wǒ de shū', exampleVi: 'Sách của tôi' },
  { id: 'hsk1_le_particle', char: '了', pinyin: 'le', hanviet: 'LIỄU', meaning: 'Rồi, trợ từ hoàn thành / thay đổi', pos: 'Trợ từ', topic: 'grammar', strokeCount: 2, radicals: '了', story: 'Mọi việc đã kết thúc xong xuôi trọn vẹn.', example: '下雨了！(Xià yǔ le: Mưa rồi!)', examplePinyin: 'Xià yǔ le!', exampleVi: 'Mưa rồi!' },
  { id: 'hsk1_ma_particle', char: '吗', pinyin: 'ma', hanviet: 'MA', meaning: 'Không? (trợ từ câu hỏi có/không)', pos: 'Trợ từ', topic: 'grammar', strokeCount: 6, radicals: '口 + 马', story: 'Mở miệng (口) chất vấn như tiếng ngựa hý hỏi xem có đúng không.', example: '你好吗？(Nǐ hǎo ma? - Bạn khỏe không?)', examplePinyin: 'Nǐ hǎo ma?', exampleVi: 'Bạn có khỏe không?' },
  { id: 'hsk1_ne_particle', char: '呢', pinyin: 'ne', hanviet: 'NIÊ', meaning: 'Còn...thì sao? (trợ từ nghi vấn nối tiếp)', pos: 'Trợ từ', topic: 'grammar', strokeCount: 8, radicals: '口 + 尸 + 匕', story: 'Mở miệng (口) hỏi vặn lại còn ai kia thì thế nào.', example: '我很好，你呢？', examplePinyin: 'Wǒ hěn hǎo, nǐ ne?', exampleVi: 'Tôi rất khỏe, còn bạn thì sao?' },
  { id: 'hsk1_diannao', char: '电脑', pinyin: 'diànnǎo', hanviet: 'ĐIỆN NÃO', meaning: 'Máy vi tính', pos: 'Danh từ', topic: 'device', strokeCount: 16, radicals: '电 + 脑', story: 'Bộ não (脑) vận hành bằng điện năng (电) xử lý siêu tốc.', example: '用电脑学中文。', examplePinyin: 'Yòng diànnǎo xué Zhōngwén.', exampleVi: 'Dùng máy tính học tiếng Trung.' },
  { id: 'hsk1_dianshi', char: '电视', pinyin: 'diànshì', hanviet: 'ĐIỆN THỊ', meaning: 'Tivi, truyền hình', pos: 'Danh từ', topic: 'device', strokeCount: 13, radicals: '电 + 视', story: 'Màn hình nhìn ngắm (视) phát bằng sóng điện (电).', example: '看电视 (kàn diànshì: xem tivi)', examplePinyin: 'Kàn diànshì', exampleVi: 'Xem tivi' },
  { id: 'hsk1_dianying', char: '电影', pinyin: 'diànyǐng', hanviet: 'ĐIỆN ẢNH', meaning: 'Phim, điện ảnh', pos: 'Danh từ', topic: 'device', strokeCount: 20, radicals: '电 + 影', story: 'Hình bóng (影) chuyển động nhờ ánh sáng bóng đèn chiếu.', example: '看电影 (kàn diànyǐng: xem phim)', examplePinyin: 'Kàn diànyǐng', exampleVi: 'Xem phim chiếu rạp' },
  { id: 'hsk1_feiji', char: '飞机', pinyin: 'fēijī', hanviet: 'PHI CƠ', meaning: 'Máy bay', pos: 'Danh từ', topic: 'device', strokeCount: 9, radicals: '飞 + 机', story: 'Cỗ máy bay lượn trên trời xanh vươn khắp năm châu.', example: '坐飞机去北京。', examplePinyin: 'Zuò fēijī qù Běijīng.', exampleVi: 'Đi máy bay đến Bắc Kinh.' },
  { id: 'hsk1_chuzuche', char: '出租车', pinyin: 'chūzūchē', hanviet: 'XUẤT TÔ XA', meaning: 'Xe taxi', pos: 'Danh từ', topic: 'device', strokeCount: 19, radicals: '出 + 租 + 车', story: 'Cỗ xe cho thuê chở khách theo chặng đường.', example: '坐出租车回家。', examplePinyin: 'Zuò chūzūchē huí jiā.', exampleVi: 'Bắt xe taxi về nhà.' }
];

// 5. COMPREHENSIVE GRAMMAR DATA
const CHINESE_GRAMMAR_DATA = [
  {
    id: 'grammar_order',
    title: '1. Trật tự ngữ pháp câu cơ bản trong tiếng Trung',
    formula: 'Chủ ngữ + [Thời gian] + [Địa điểm] + Vị ngữ (Động từ) + Tân ngữ',
    explanation: 'Tiếng Trung có cấu trúc cốt lõi là SVO giống tiếng Việt và tiếng Anh. Điểm khác biệt quan trọng nhất là Thời gian và Địa điểm luôn đứng TRƯỚC Động từ hành động, không đặt ở cuối câu như tiếng Việt!',
    examples: [
      { zh: '我明天去学校。', pinyin: 'Wǒ míngtiān qù xuéxiào.', vi: 'Ngày mai tôi đi học. (Thời gian "ngày mai" đứng trước "đi")' },
      { zh: '他在家看书。', pinyin: 'Tā zài jiā kàn shū.', vi: 'Anh ấy đọc sách ở nhà. (Địa điểm "ở nhà" đứng trước "đọc sách")' },
      { zh: '我们晚上在饭店吃中国菜。', pinyin: 'Wǒmen wǎnshang zài fàndiàn chī Zhōngguó cài.', vi: 'Tối nay chúng tôi ăn món Trung Quốc ở nhà hàng.' }
    ]
  },
  {
    id: 'grammar_shi',
    title: '2. Câu vị ngữ danh từ với 是 (shì: là)',
    formula: 'Khẳng định: A + 是 + B | Phủ định: A + 不是 (bú shì) + B',
    explanation: 'Dùng để nối hai danh từ hoặc đại từ nhằm biểu thị mối quan hệ bằng nhau, định danh nghề nghiệp, quốc tịch, thân phận. Chú ý: Trước tính từ KHÔNG dùng 是!',
    examples: [
      { zh: '我是越南人。', pinyin: 'Wǒ shì Yuènán rén.', vi: 'Tôi là người Việt Nam.' },
      { zh: '他不是老师，他是医生。', pinyin: 'Tā bú shì lǎoshī, tā shì yīshēng.', vi: 'Anh ấy không phải là giáo viên, anh ấy là bác sĩ.' },
      { zh: '这是我的汉语书。', pinyin: 'Zhè shì wǒ de Hànyǔ shū.', vi: 'Đây là sách tiếng Trung của tôi.' }
    ]
  },
  {
    id: 'grammar_you',
    title: '3. Câu biểu thị sở hữu và tồn tại với 有 (yǒu: có)',
    formula: 'Khẳng định: S + 有 + O | Phủ định: S + 没有 (méiyǒu) + O',
    explanation: 'Tuyệt đối chú ý: Phủ định của 有 bắt buộc phải dùng 没有 (méiyǒu), không bao giờ được dùng 不有!',
    examples: [
      { zh: '我有两只猫。', pinyin: 'Wǒ yǒu liǎng zhī māo.', vi: 'Tôi có hai con mèo.' },
      { zh: '他没有汉语字典。', pinyin: 'Tā méiyǒu Hànyǔ zìdiǎn.', vi: 'Anh ấy không có từ điển tiếng Trung.' },
      { zh: '学校里有一家商店。', pinyin: 'Xuéxiào lǐ yǒu yì jiā shāngdiàn.', vi: 'Trong trường học có một cửa hàng tiện lợi.' }
    ]
  },
  {
    id: 'grammar_questions_ma_ne',
    title: '4. Trợ từ nghi vấn 吗 (ma) & 呢 (ne)',
    formula: 'Câu trần thuật + 吗？ | Danh từ / Đại từ + 呢？',
    explanation: '吗 dùng cho câu hỏi Có/Không (Yes/No). 呢 dùng cho câu hỏi rút gọn "Còn...thì sao?" hoặc hỏi về nơi chốn tung tích.',
    examples: [
      { zh: '你是中国人吗？', pinyin: 'Nǐ shì Zhōngguó rén ma?', vi: 'Bạn có phải là người Trung Quốc không?' },
      { zh: '我很好，你呢？', pinyin: 'Wǒ hěn hǎo, nǐ ne?', vi: 'Tôi rất khỏe, còn bạn thì sao?' },
      { zh: '我的手机呢？', pinyin: 'Wǒ de shǒujī ne?', vi: 'Điện thoại của tôi đâu rồi?' }
    ]
  },
  {
    id: 'grammar_interrogative',
    title: '5. Các đại từ nghi vấn quan trọng (Wh-questions)',
    formula: 'Từ nghi vấn thay thế đúng vào vị trí thành phần muốn hỏi trong câu',
    explanation: 'Trong tiếng Trung, khi đặt câu hỏi với từ nghi vấn (Ai, Cái gì, Ở đâu...), KHÔNG đảo từ nghi vấn lên đầu câu, mà giữ nguyên trật tự câu và thay từ nghi vấn vào vị trí của câu trả lời!',
    examples: [
      { zh: '这是什么？➔ 这是书。', pinyin: 'Zhè shì shénme? ➔ Zhè shì shū.', vi: 'Đây là cái gì? ➔ Đây là sách.' },
      { zh: '他是谁？➔ 他是我的朋友。', pinyin: 'Tā shì shéi? ➔ Tā shì wǒ de péngyou.', vi: 'Cậu ấy là ai? ➔ Cậu ấy là bạn của tôi.' },
      { zh: '你去哪儿？➔ 我去学校。', pinyin: 'Nǐ qù nǎr? ➔ Wǒ qù xuéxiào.', vi: 'Bạn đi đâu đấy? ➔ Tôi đi đến trường.' }
    ]
  },
  {
    id: 'grammar_de',
    title: '6. Trợ từ kết cấu 的 (de: của, quan hệ bổ nghĩa)',
    formula: 'Định ngữ + 的 + Trung tâm ngữ (Danh từ chính)',
    explanation: 'Trong tiếng Trung, phần bổ nghĩa (sở hữu, tính chất) luôn đứng TRƯỚC chữ 的, còn sự vật chính đứng SAU chữ 的 (ngược với tiếng Việt!). Ví dụ: "Sách của tôi" ➔ "Tôi 的 Sách" (我的书).',
    examples: [
      { zh: '这是老师的书。', pinyin: 'Zhè shì lǎoshī de shū.', vi: 'Đây là sách của thầy giáo.' },
      { zh: '漂亮的衣服。', pinyin: 'Piàoliang de yīfu.', vi: 'Bộ quần áo xinh đẹp.' },
      { zh: '北京的秋天很美。', pinyin: 'Běijīng de qiūtiān hěn měi.', vi: 'Mùa thu của Bắc Kinh rất đẹp.' }
    ]
  },
  {
    id: 'grammar_hen_adj',
    title: '7. Câu vị ngữ tính từ với 很 (hěn)',
    formula: 'Chủ ngữ + 很 + Tính từ (Khẳng định) | Chủ ngữ + 不 + Tính từ (Phủ định)',
    explanation: 'Trong câu khẳng định tính từ đơn, bắt buộc phải có phó từ 很 đứng trước tính từ để tạo thế cân bằng ngữ pháp, lúc này 很 mang nghĩa trung tính "rất" hoặc không dịch.',
    examples: [
      { zh: '今天很热。', pinyin: 'Jīntiān hěn rè.', vi: 'Hôm nay trời nóng.' },
      { zh: '这个苹果很大。', pinyin: 'Zhè gè píngguǒ hěn dà.', vi: 'Quả táo này to.' },
      { zh: '今天不冷。', pinyin: 'Jīntiān bù lěng.', vi: 'Hôm nay không lạnh (phủ định dùng 不, bỏ 很).' }
    ]
  },
  {
    id: 'grammar_optative',
    title: '8. Động từ năng nguyện: 会 (huì), 想 (xiǎng), 能 (néng)',
    formula: 'S + 会 / 想 / 能 + Động từ + O',
    explanation: '会: Biết làm gì nhờ qua rèn luyện học tập (nói tiếng Trung, lái xe, bơi). 想: Muốn, nhớ, suy nghĩ. 能: Có khả năng làm được trong hoàn cảnh cho phép.',
    examples: [
      { zh: '我会说汉语。', pinyin: 'Wǒ huì shuō Hànyǔ.', vi: 'Tôi biết nói tiếng Trung (do học mà biết).' },
      { zh: '我想去中国旅游。', pinyin: 'Wǒ xiǎng qù Zhōngguó lǚyóu.', vi: 'Tôi muốn đi du lịch Trung Quốc.' },
      { zh: '我今天能来。', pinyin: 'Wǒ jīntiān néng lái.', vi: 'Hôm nay tôi có thể đến được (hoàn cảnh cho phép).' }
    ]
  },
  {
    id: 'grammar_zai_action',
    title: '9. Câu chữ 在 (zài: đang làm gì / ở đâu)',
    formula: 'Biểu thị đang diễn ra: S + 在 + Động từ | Biểu thị nơi chốn: S + 在 + Địa điểm + Động từ',
    explanation: '在 đứng trước động từ biểu thị hành động đang tiếp diễn (tương tự thì Hiện tại tiếp diễn). Khi kết hợp địa điểm: "Ở đâu + làm gì".',
    examples: [
      { zh: '我正在学习汉语。', pinyin: 'Wǒ zhèngzài xuéxí Hànyǔ.', vi: 'Tôi đang học tiếng Trung.' },
      { zh: '妈妈在厨房做饭。', pinyin: 'Māma zài chúfáng zuòfàn.', vi: 'Mẹ đang nấu cơm trong bếp.' },
      { zh: '你在听什么？', pinyin: 'Nǐ zài tīng shénme?', vi: 'Bạn đang nghe cái gì đấy?' }
    ]
  },
  {
    id: 'grammar_ye_dou',
    title: '10. Phó từ 也 (yě: cũng) và 都 (dōu: đều)',
    formula: 'S + 也 + V/Adj | S (số nhiều) + 都 + V/Adj | S + 也 + 都 + V/Adj',
    explanation: 'Cả 也 và 都 đều là phó từ, bắt buộc phải đứng TRƯỚC Động từ hoặc Tính từ. Khi đi cùng nhau: 也 đứng trước, 都 đứng sau!',
    examples: [
      { zh: '我也是越南人。', pinyin: 'Wǒ yě shì Yuènán rén.', vi: 'Tôi cũng là người Việt Nam.' },
      { zh: '他们都是我的朋友。', pinyin: 'Tāmen dōu shì wǒ de péngyou.', vi: 'Họ đều là bạn bè của tôi.' },
      { zh: '我们也都想去。', pinyin: 'Wǒmen yě dōu xiǎng qù.', vi: 'Tất cả chúng tôi cũng đều muốn đi.' }
    ]
  },
  {
    id: 'grammar_time_expression',
    title: '11. Quy tắc diễn đạt Thời gian & Giờ giấc (Lớn trước bé sau)',
    formula: 'Năm (年) ➔ Tháng (月) ➔ Ngày (日/号) ➔ Buổi (上午/下午) ➔ Giờ (点) ➔ Phút (分)',
    explanation: 'Người Trung Quốc tư duy thời gian từ bao quát đến chi tiết: Đơn vị lớn đứng trước, đơn vị nhỏ đứng sau (hoàn toàn ngược với tiếng Việt!).',
    examples: [
      { zh: '2026年11月18号', pinyin: 'Èr líng èr liù nián shíyī yuè shíbā hào', vi: 'Ngày 18 tháng 11 năm 2026' },
      { zh: '明天下午三点半', pinyin: 'Míngtiān xiàwǔ sān diǎn bàn', vi: '3 giờ rưỡi chiều mai' },
      { zh: '星期一上午八点', pinyin: 'Xīngqīyī shàngwǔ bā diǎn', vi: '8 giờ sáng thứ Hai' }
    ]
  },
  {
    id: 'grammar_classifiers',
    title: '12. Cấu trúc Lượng từ trong tiếng Trung: Số + Lượng + Danh',
    formula: 'Số từ + Lượng từ + Danh từ (Bắt buộc phải có Lượng từ ở giữa!)',
    explanation: 'Trong tiếng Trung, danh từ không đứng trực tiếp sau số từ mà bắt buộc phải có một Lượng từ thích hợp ở giữa. Lượng từ phổ biến nhất là 个 (gè), sách dùng 本 (běn), vật phẳng dùng 张 (zhāng), con vật nhỏ dùng 只 (zhī)...',
    examples: [
      { zh: '一个人 (yí gè rén)', pinyin: 'Yí gè rén', vi: 'Một người (個 - lượng từ cho người/đồ vật)' },
      { zh: '三本书 (sān běn shū)', pinyin: 'Sān běn shū', vi: 'Ba cuốn sách (本 - lượng từ cho sách)' },
      { zh: '两张纸 (liǎng zhāng zhǐ)', pinyin: 'Liǎng zhāng zhǐ', vi: 'Hai tờ giấy (张 - lượng từ cho vật mỏng, phẳng)' }
    ]
  }
];

// 6. ASSEMBLE COMPLETE CHINESE REPOSITORY FOR CANVAS & REPOSITORY
const CHINESE_DATA_REPOSITORY = [];

// Thêm các bộ thủ tiêu biểu nhất vào Repository
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

// Thêm toàn bộ từ HSK1 vào Repository
HSK1_VOCAB_LIST.forEach((vocab) => {
  CHINESE_DATA_REPOSITORY.push({
    id: vocab.id,
    char: vocab.char,
    alt: vocab.char,
    pinyin: vocab.pinyin,
    hanviet: vocab.hanviet,
    meaning: vocab.meaning,
    pos: vocab.pos,
    level: 'HSK 1',
    strokeCount: vocab.strokeCount,
    category: 'hsk1',
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
 * 2. 8 Nét Cơ Bản & 7 Quy Tắc Bút Thuận
 * 3. Đầy đủ 214 Bộ Thủ Khang Hy (từ 1 nét đến 17 nét)
 * 4. Toàn bộ 150 Từ Vựng Chuẩn HSK 1 theo 10 Chủ đề
 * 5. 12 Bài Học Ngữ Pháp Cơ Bản Thực Chiến
 * 6. Tổng hợp Kho Hán Tự Canvas và Quiz
 */

const CHINESE_PINYIN_DATA = ${JSON.stringify(CHINESE_PINYIN_DATA, null, 2)};

const CHINESE_STROKES_DATA = ${JSON.stringify(CHINESE_STROKES_DATA, null, 2)};

const CHINESE_RADICALS_DATA = ${JSON.stringify(KANGXI_RADICALS_RAW, null, 2)};

const CHINESE_HSK_VOCAB_DATA = ${JSON.stringify(HSK1_VOCAB_LIST, null, 2)};

const CHINESE_GRAMMAR_DATA = ${JSON.stringify(CHINESE_GRAMMAR_DATA, null, 2)};

const CHINESE_DATA_REPOSITORY = ${JSON.stringify(CHINESE_DATA_REPOSITORY, null, 2)};

if (typeof window !== 'undefined') {
  window.CHINESE_PINYIN_DATA = CHINESE_PINYIN_DATA;
  window.CHINESE_STROKES_DATA = CHINESE_STROKES_DATA;
  window.CHINESE_RADICALS_DATA = CHINESE_RADICALS_DATA;
  window.CHINESE_HSK_VOCAB_DATA = CHINESE_HSK_VOCAB_DATA;
  window.CHINESE_GRAMMAR_DATA = CHINESE_GRAMMAR_DATA;
  window.CHINESE_DATA_REPOSITORY = CHINESE_DATA_REPOSITORY;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    CHINESE_PINYIN_DATA,
    CHINESE_STROKES_DATA,
    CHINESE_RADICALS_DATA,
    CHINESE_HSK_VOCAB_DATA,
    CHINESE_GRAMMAR_DATA,
    CHINESE_DATA_REPOSITORY
  };
}
`;

fs.writeFileSync(path.join(__dirname, 'chinese-data.js'), outputContent, 'utf-8');
console.log('Successfully generated chinese-data.js!');
console.log('Total Kangxi Radicals:', KANGXI_RADICALS_RAW.length);
console.log('Total HSK1 Vocabulary:', HSK1_VOCAB_LIST.length);
console.log('Total Characters in Repository:', CHINESE_DATA_REPOSITORY.length);
console.log('Total Grammar Lessons:', CHINESE_GRAMMAR_DATA.length);
