/**
 * BUILD SCRIPT FOR BIBLE MEMORIZATION ENHANCEMENTS
 * Upgrades sieu-tri-nho-app with:
 * 1. 58 Curated Scripture Verses (RVV2010) across Old & New Testament
 * 2. Personal Scripture Memorization Analytics Dashboard (Total, Mastered %, In Learning, Books mastered, Streak)
 * 3. Mastered Verses Notebook (Sổ Tay Câu Đã Thuộc Lòng) with fast search and review
 * 4. Fast Memorized Toggle, Speech Synthesis Audio, and Checkbox when adding custom verses
 */

const fs = require('fs');
const path = require('path');

const appPath = path.join(__dirname, 'app.js');
const indexPath = path.join(__dirname, 'index.html');

console.log('--- 1. PREPARING 58 SCRIPTURE VERSES ---');

const ALL_SCRIPTURE_VERSES = [
  // Cựu Ước (Old Testament)
  {
    id: 'v_1',
    bookFloor: 1,
    bookCode: 'S',
    bookName: 'Sáng Thế Ký',
    chapter: 1,
    verse: 1,
    keyword: 'sáng tạo',
    secondaryKeyword: 'sáng tạo trời đất',
    category: 'Sáng tạo & Quyền năng',
    text: 'Ban đầu Đức Chúa Trời sáng tạo trời và đất.'
  },
  {
    id: 'v_gen_1_2',
    bookFloor: 1,
    bookCode: 'S',
    bookName: 'Sáng Thế Ký',
    chapter: 1,
    verse: 2,
    keyword: 'đất không có hình dạng',
    secondaryKeyword: 'trống không và bóng tối',
    category: 'Sáng tạo & Quyền năng',
    text: 'Đất không có hình dạng và trống không, bóng tối bao trùm mặt vực, và Thần của Đức Chúa Trời vận hành trên mặt nước.'
  },
  {
    id: 'v_2',
    bookFloor: 1,
    bookCode: 'S',
    bookName: 'Sáng Thế Ký',
    chapter: 1,
    verse: 3,
    keyword: 'ánh sáng',
    secondaryKeyword: 'phải có ánh sáng',
    category: 'Sáng tạo & Quyền năng',
    text: 'Đức Chúa Trời phán: “Phải có ánh sáng”; thì có ánh sáng.'
  },
  {
    id: 'v_17',
    bookFloor: 1,
    bookCode: 'S',
    bookName: 'Sáng Thế Ký',
    chapter: 12,
    verse: 2,
    keyword: 'nguồn phước',
    secondaryKeyword: 'Ta sẽ ban phước cho con',
    category: 'Giao ước & Lời hứa',
    text: 'Ta sẽ làm cho con thành một dân lớn, Ta sẽ ban phước cho con, làm rạng rỡ danh con, và con sẽ thành một nguồn phước.'
  },
  {
    id: 'v_3',
    bookFloor: 2,
    bookCode: 'X',
    bookName: 'Xuất Ai Cập Ký',
    chapter: 3,
    verse: 14,
    keyword: 'ĐẤNG TỰ HỮU',
    secondaryKeyword: 'Đấng Tự Hữu Hằng Hữu',
    category: 'Bản tính Đức Chúa Trời',
    text: 'Đức Chúa Trời phán với Môi-se: “TA LÀ ĐẤNG TỰ HỮU HẰNG HỮU.” Ngài lại phán: “Hãy nói với dân Y-sơ-ra-ên rằng: ‘ĐẤNG TỰ HỮU đã sai tôi đến với các anh chị em.’”'
  },
  {
    id: 'v_18',
    bookFloor: 2,
    bookCode: 'X',
    bookName: 'Xuất Ai Cập Ký',
    chapter: 20,
    verse: 3,
    keyword: 'không có thần khác',
    secondaryKeyword: 'mười điều răn điều 1',
    category: 'Mười Điều Răn',
    text: 'Trước mặt Ta, con không được có các thần nào khác.'
  },
  {
    id: 'v_19',
    bookFloor: 5,
    bookCode: 'P',
    bookName: 'Phục Truyền Luật Lệ Ký',
    chapter: 6,
    verse: 5,
    keyword: 'hết lòng yêu mến',
    secondaryKeyword: 'hết linh hồn hết sức',
    category: 'Điều răn lớn nhất',
    text: 'Ngươi phải hết lòng, hết linh hồn, hết sức mình kính mến Giê-hô-va Đức Chúa Trời của ngươi.'
  },
  {
    id: 'v_4',
    bookFloor: 6,
    bookCode: 'GS',
    bookName: 'Giô-suê',
    chapter: 1,
    verse: 9,
    keyword: 'vững lòng bền chí',
    secondaryKeyword: 'mạnh dạn can đảm',
    category: 'Sức mạnh & Can đảm',
    text: 'Chẳng phải Ta đã truyền phán cho con sao? Hãy mạnh dạn, can đảm! Đừng sợ hãi, đừng nản lòng, vì Giê-hô-va Đức Chúa Trời của con sẽ ở với con mọi nơi con đi.'
  },
  {
    id: 'v_20',
    bookFloor: 6,
    bookCode: 'GS',
    bookName: 'Giô-suê',
    chapter: 24,
    verse: 15,
    keyword: 'tôi và gia đình tôi',
    secondaryKeyword: 'phụng sự Đức Giê-hô-va',
    category: 'Gia đình & Lòng trung thành',
    text: 'Nhưng tôi và gia đình tôi sẽ phụng sự Đức Giê-hô-va.'
  },
  {
    id: 'v_21',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 1,
    verse: 1,
    keyword: 'phước cho người',
    secondaryKeyword: 'không đi theo mưu kẻ ác',
    category: 'Phước hạnh',
    text: 'Phước cho người nào không đi theo mưu kế kẻ gian ác, không đứng trong đường tội nhân, không ngồi chung với kẻ nhạo báng.'
  },
  {
    id: 'v_22',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 1,
    verse: 2,
    keyword: 'suy ngẫm ngày đêm',
    secondaryKeyword: 'vui thích luật pháp Chúa',
    category: 'Lời Chúa',
    text: 'Nhưng vui thích về luật pháp của Đức Giê-hô-va, và suy ngẫm luật pháp ấy ngày và đêm.'
  },
  {
    id: 'v_5',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 23,
    verse: 1,
    keyword: 'người chăn',
    secondaryKeyword: 'Đấng chăn giữ tôi',
    category: 'Sự chăn dắt & Bình an',
    text: 'Đức Giê-hô-va là Đấng chăn giữ tôi; tôi sẽ chẳng thiếu thốn gì.'
  },
  {
    id: 'v_23',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 27,
    verse: 1,
    keyword: 'ánh sáng cứu rỗi',
    secondaryKeyword: 'tôi sẽ sợ ai',
    category: 'Sự bảo vệ & Can đảm',
    text: 'Đức Giê-hô-va là ánh sáng và sự cứu rỗi của tôi, tôi sẽ sợ ai? Đức Giê-hô-va là thành lũy của mạng sống tôi, tôi sẽ hãi hùng ai?'
  },
  {
    id: 'v_24',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 46,
    verse: 1,
    keyword: 'nơi nương náu',
    secondaryKeyword: 'giúp đỡ trong gian truân',
    category: 'Nương náu & Che chở',
    text: 'Đức Chúa Trời là nơi nương náu và sức mạnh của chúng tôi, Ngài hằng sẵn sàng giúp đỡ trong cơn gian truân.'
  },
  {
    id: 'v_25',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 91,
    verse: 1,
    keyword: 'nơi kín đáo',
    secondaryKeyword: 'bóng Đấng Toàn Năng',
    category: 'Bảo vệ & Bình an',
    text: 'Người nào ngụ nơi kín đáo của Đấng Chí Cao sẽ được an nghỉ dưới bóng của Đấng Toàn Năng.'
  },
  {
    id: 'v_26',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 103,
    verse: 2,
    keyword: 'chúc tụng linh hồn',
    secondaryKeyword: 'chớ quên ân huệ Ngài',
    category: 'Tạ ơn & Ngợi khen',
    text: 'Hỡi linh hồn ta, hãy chúc tụng Đức Giê-hô-va, chớ quên các ân huệ của Ngài.'
  },
  {
    id: 'v_27',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 119,
    verse: 11,
    keyword: 'giấu Lời Chúa',
    secondaryKeyword: 'không phạm tội cùng Chúa',
    category: 'Ghi nhớ Lời Chúa',
    text: 'Con giấu lời Chúa trong lòng con, để con không phạm tội cùng Chúa.'
  },
  {
    id: 'v_6',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 119,
    verse: 105,
    keyword: 'ngọn đèn',
    secondaryKeyword: 'ngọn đèn cho chân tôi',
    category: 'Sự dẫn dắt & Chân lý',
    text: 'Lời Chúa là ngọn đèn cho chân tôi, ánh sáng cho đường lối tôi.'
  },
  {
    id: 'v_28',
    bookFloor: 19,
    bookCode: 'TT',
    bookName: 'Thi Thiên',
    chapter: 139,
    verse: 14,
    keyword: 'dựng nên lạ lùng',
    secondaryKeyword: 'đáng sợ và diệu kỳ',
    category: 'Phẩm giá con người',
    text: 'Con cảm tạ Chúa vì con được dựng nên một cách đáng sợ và lạ lùng. Công việc Chúa thật quá diệu kỳ, lòng con biết rõ lắm.'
  },
  {
    id: 'v_29',
    bookFloor: 20,
    bookCode: 'CN',
    bookName: 'Châm Ngôn',
    chapter: 1,
    verse: 7,
    keyword: 'khởi đầu tri thức',
    secondaryKeyword: 'kính sợ Đức Giê-hô-va',
    category: 'Khôn ngoan & Tri thức',
    text: 'Kính sợ Đức Giê-hô-va là khởi đầu tri thức; còn kẻ ngu muội khinh dể sự khôn ngoan và lời khuyên dạy.'
  },
  {
    id: 'v_7',
    bookFloor: 20,
    bookCode: 'CN',
    bookName: 'Châm Ngôn',
    chapter: 3,
    verse: 5,
    keyword: 'hết lòng tin cậy',
    secondaryKeyword: 'đừng nương cậy sự thông sáng',
    category: 'Đức tin & Phục tùng',
    text: 'Hãy hết lòng tin cậy Đức Giê-hô-va, đừng nương cậy nơi sự thông sáng của con.'
  },
  {
    id: 'v_30',
    bookFloor: 20,
    bookCode: 'CN',
    bookName: 'Châm Ngôn',
    chapter: 4,
    verse: 23,
    keyword: 'giữ tấm lòng',
    secondaryKeyword: 'nguồn sự sống',
    category: 'Tâm trí & Đạo đức',
    text: 'Hãy cẩn thận giữ tấm lòng của con hơn hết, vì các nguồn sự sống do nơi nó mà ra.'
  },
  {
    id: 'v_31',
    bookFloor: 20,
    bookCode: 'CN',
    bookName: 'Châm Ngôn',
    chapter: 16,
    verse: 3,
    keyword: 'phó thác công việc',
    secondaryKeyword: 'kế hoạch thành công',
    category: 'Mục tiêu & Công việc',
    text: 'Hãy phó thác công việc mình cho Đức Giê-hô-va, thì các kế hoạch của con sẽ được thành công.'
  },
  {
    id: 'v_32',
    bookFloor: 20,
    bookCode: 'CN',
    bookName: 'Châm Ngôn',
    chapter: 17,
    verse: 22,
    keyword: 'phương thuốc hay',
    secondaryKeyword: 'lòng vui mừng',
    category: 'Sức khỏe & Tâm an',
    text: 'Lòng vui mừng là phương thuốc hay, còn tinh thần suy sụp làm xương cốt khô héo.'
  },
  {
    id: 'v_33',
    bookFloor: 21,
    bookCode: 'TĐ',
    bookName: 'Truyền Đạo',
    chapter: 3,
    verse: 1,
    keyword: 'thời điểm định kỳ',
    secondaryKeyword: 'mọi sự dưới trời có kỳ',
    category: 'Thời gian & Cuộc đời',
    text: 'Phàm sự gì có thời điểm, mọi việc dưới trời đều có định kỳ.'
  },
  {
    id: 'v_34',
    bookFloor: 21,
    bookCode: 'TĐ',
    bookName: 'Truyền Đạo',
    chapter: 12,
    verse: 13,
    keyword: 'bổn phận trọn vẹn',
    secondaryKeyword: 'kính sợ và vâng giữ',
    category: 'Lẽ sống đích thực',
    text: 'Lời kết luận cho mọi điều đã nghe là: Hãy kính sợ Đức Chúa Trời và vâng giữ các điều răn Ngài, vì đó là bổn phận trọn vẹn của con người.'
  },
  {
    id: 'v_35',
    bookFloor: 23,
    bookCode: 'ÊS',
    bookName: 'Ê-sai',
    chapter: 9,
    verse: 5,
    keyword: 'Chúa Bình An',
    secondaryKeyword: 'một Con Trẻ sinh cho chúng ta',
    category: 'Lời tiên tri về Đấng Mê-si-a',
    text: 'Vì một Con Trẻ sinh cho chúng ta, một Con Trai ban cho chúng ta; quyền cai trị sẽ đặt trên vai Ngài. Danh Ngài là: Đấng Cố Vấn Kỳ Diệu, Đức Chúa Trời Quyền Năng, Người Cha Đời Đời, Chúa Bình An.'
  },
  {
    id: 'v_8',
    bookFloor: 23,
    bookCode: 'ÊS',
    bookName: 'Ê-sai',
    chapter: 40,
    verse: 31,
    keyword: 'trông đợi',
    secondaryKeyword: 'cất cánh bay cao như chim ưng',
    category: 'Sức mạnh mới',
    text: 'Nhưng ai trông đợi Đức Giê-hô-va sẽ được sức mới, cất cánh bay cao như chim ưng; chạy mà không mệt nhọc, đi mà không mòn mỏi.'
  },
  {
    id: 'v_36',
    bookFloor: 23,
    bookCode: 'ÊS',
    bookName: 'Ê-sai',
    chapter: 41,
    verse: 10,
    keyword: 'đừng sợ vì Ta ở cùng',
    secondaryKeyword: 'tay hữu công chính',
    category: 'Sự an ủi & Bình an',
    text: 'Đừng sợ, vì Ta ở với con; đừng kinh khiếp, vì Ta là Đức Chúa Trời của con! Ta sẽ làm cho con mạnh mẽ; phải, Ta sẽ giúp đỡ con; Ta sẽ nâng đỡ con bằng tay hữu công chính của Ta.'
  },
  {
    id: 'v_37',
    bookFloor: 23,
    bookCode: 'ÊS',
    bookName: 'Ê-sai',
    chapter: 53,
    verse: 5,
    keyword: 'vì tội lỗi chúng ta',
    secondaryKeyword: 'lằn đòn chữa lành',
    category: 'Sự chuộc tội',
    text: 'Nhưng Người đã vì tội lỗi chúng ta mà bị vết, vì sự gian ác chúng ta mà bị thương. Bởi sự sửa phạt Người chịu mà chúng ta được bình an, bởi lằn đòn Người mang mà chúng ta được chữa lành.'
  },
  {
    id: 'v_9',
    bookFloor: 24,
    bookCode: 'GR',
    bookName: 'Giê-rê-mi',
    chapter: 29,
    verse: 11,
    keyword: 'ý tưởng bình an',
    secondaryKeyword: 'tương lai và hy vọng',
    category: 'Hy vọng & Tương lai',
    text: 'Đức Giê-hô-va phán: “Vì chính Ta biết ý tưởng Ta nghĩ đối với các con, đó là ý tưởng bình an chứ không phải tai họa, để ban cho các con một tương lai và một hy vọng.”'
  },
  {
    id: 'v_38',
    bookFloor: 24,
    bookCode: 'GR',
    bookName: 'Giê-rê-mi',
    chapter: 33,
    verse: 3,
    keyword: 'hãy kêu cầu Ta',
    secondaryKeyword: 'việc lớn và khó',
    category: 'Cầu nguyện',
    text: 'Hãy kêu cầu Ta, Ta sẽ trả lời con; Ta sẽ tỏ cho con những việc lớn và khó, là những việc con chưa từng biết.'
  },
  {
    id: 'v_39',
    bookFloor: 25,
    bookCode: 'CT',
    bookName: 'Ca Thương',
    chapter: 3,
    verse: 22,
    keyword: 'sự nhân từ chẳng dứt',
    secondaryKeyword: 'lòng thương xót không vơi',
    category: 'Sự thành tín của Chúa',
    text: 'Sự nhân từ của Đức Giê-hô-va chẳng hề dứt, lòng thương xót của Ngài không bao giờ vơi. Mỗi buổi sáng, lòng thương xót ấy lại mới luôn; sự thành tín Ngài lớn biết bao!'
  },
  {
    id: 'v_40',
    bookFloor: 33,
    bookCode: 'MC',
    bookName: 'Mi-chê',
    chapter: 6,
    verse: 8,
    keyword: 'làm điều công chính',
    secondaryKeyword: 'khiêm nhường bước đi',
    category: 'Đạo đức & Công chính',
    text: 'Hỡi người! Ngài đã tỏ cho ngươi điều gì là thiện. Điều mà Đức Giê-hô-va đòi hỏi nơi ngươi là làm điều công chính, ưa sự nhân từ, và bước đi cách khiêm nhường với Đức Chúa Trời của ngươi.'
  },

  // Tân Ước (New Testament)
  {
    id: 'v_41',
    bookFloor: 40,
    bookCode: 'MT',
    bookName: 'Ma-thi-ơ',
    chapter: 5,
    verse: 16,
    keyword: 'chiếu rọi ánh sáng',
    secondaryKeyword: 'thấy việc lành ca ngợi Cha',
    category: 'Sứ mạng người môn đồ',
    text: 'Cũng vậy, ánh sáng của các con phải chiếu rọi trước mặt mọi người, để họ thấy những việc lành của các con và ca ngợi Cha các con ở trên trời.'
  },
  {
    id: 'v_10',
    bookFloor: 40,
    bookCode: 'MT',
    bookName: 'Ma-thi-ơ',
    chapter: 6,
    verse: 33,
    keyword: 'tìm kiếm nước Đức Chúa Trời',
    secondaryKeyword: 'vương quốc Đức Chúa Trời',
    category: 'Ưu tiên cuộc sống',
    text: 'Nhưng trước hết, hãy tìm kiếm vương quốc Đức Chúa Trời và sự công chính của Ngài, thì Ngài sẽ cho thêm các con mọi điều ấy nữa.'
  },
  {
    id: 'v_42',
    bookFloor: 40,
    bookCode: 'MT',
    bookName: 'Ma-thi-ơ',
    chapter: 11,
    verse: 28,
    keyword: 'mệt mỏi gánh nặng',
    secondaryKeyword: 'Ta cho an nghỉ',
    category: 'Sự an nghỉ linh hồn',
    text: 'Hỡi tất cả những ai đang nhọc mệt và gánh nặng, hãy đến với Ta, Ta sẽ cho các con được an nghỉ.'
  },
  {
    id: 'v_43',
    bookFloor: 40,
    bookCode: 'MT',
    bookName: 'Ma-thi-ơ',
    chapter: 28,
    verse: 19,
    keyword: 'Đại Mạng Lệnh',
    secondaryKeyword: 'môn đồ hóa muôn dân',
    category: 'Đại Mạng Lệnh',
    text: 'Vậy, hãy đi môn đồ hóa muôn dân, làm báp-têm cho họ nhân danh Đức Chúa Cha, Đức Chúa Con và Đức Thánh Linh; dạy họ giữ mọi điều Ta đã truyền cho các con. Và này, Ta hằng ở cùng các con luôn cho đến tận thế.'
  },
  {
    id: 'v_44',
    bookFloor: 42,
    bookCode: 'LC',
    bookName: 'Lu-ca',
    chapter: 1,
    verse: 37,
    keyword: 'việc Chúa làm được',
    secondaryKeyword: 'không việc gì chẳng làm được',
    category: 'Quyền năng Đức Chúa Trời',
    text: 'Vì không có việc gì Đức Chúa Trời chẳng làm được.'
  },
  {
    id: 'v_45',
    bookFloor: 42,
    bookCode: 'LC',
    bookName: 'Lu-ca',
    chapter: 19,
    verse: 10,
    keyword: 'tìm và cứu',
    secondaryKeyword: 'kẻ bị hư mất',
    category: 'Mục đích của Chúa Cứu Thế',
    text: 'Vì Con Người đã đến để tìm và cứu kẻ bị hư mất.'
  },
  {
    id: 'v_11',
    bookFloor: 43,
    bookCode: 'G',
    bookName: 'Giăng',
    chapter: 1,
    verse: 1,
    keyword: 'Ngôi Lời',
    secondaryKeyword: 'ban đầu có Ngôi Lời',
    category: 'Chúa Jêsus là Đức Chúa Trời',
    text: 'Ban đầu có Ngôi Lời, Ngôi Lời ở với Đức Chúa Trời, và Ngôi Lời là Đức Chúa Trời.'
  },
  {
    id: 'v_12',
    bookFloor: 43,
    bookCode: 'G',
    bookName: 'Giăng',
    chapter: 3,
    verse: 16,
    keyword: 'yêu thương thế gian',
    secondaryKeyword: 'đã ban Con Một',
    category: 'Tin Lành Cứu Rỗi',
    text: 'Vì Đức Chúa Trời yêu thương thế gian, đến nỗi đã ban Con Một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.'
  },
  {
    id: 'v_46',
    bookFloor: 43,
    bookCode: 'G',
    bookName: 'Giăng',
    chapter: 8,
    verse: 32,
    keyword: 'chân lý giải phóng',
    secondaryKeyword: 'biết chân lý',
    category: 'Tự do & Chân lý',
    text: 'Các ngươi sẽ biết chân lý, và chân lý sẽ giải phóng các ngươi.'
  },
  {
    id: 'v_47',
    bookFloor: 43,
    bookCode: 'G',
    bookName: 'Giăng',
    chapter: 14,
    verse: 6,
    keyword: 'đường đi chân lý sự sống',
    secondaryKeyword: 'chẳng bởi Ta không ai đến với Cha',
    category: 'Con đường duy nhất',
    text: 'Đức Chúa Jêsus đáp: “Ta là đường đi, chân lý và sự sống; chẳng bởi Ta thì không ai đến được với Cha.”'
  },
  {
    id: 'v_48',
    bookFloor: 43,
    bookCode: 'G',
    bookName: 'Giăng',
    chapter: 15,
    verse: 5,
    keyword: 'cây nho và cành',
    secondaryKeyword: 'ngoài Ta không làm gì được',
    category: 'Kết nối với Chúa',
    text: 'Ta là cây nho, các con là cành. Ai cứ ở trong Ta và Ta trong người ấy thì sinh ra nhiều quả; vì ngoài Ta các con không làm gì được.'
  },
  {
    id: 'v_49',
    bookFloor: 44,
    bookCode: 'CV',
    bookName: 'Công Vụ Các Sứ Đồ',
    chapter: 1,
    verse: 8,
    keyword: 'quyền năng Thánh Linh',
    secondaryKeyword: 'chứng nhân cho Ta',
    category: 'Thánh Linh & Làm chứng',
    text: 'Nhưng khi Đức Thánh Linh giáng trên các con, các con sẽ nhận lãnh quyền năng và làm chứng nhân cho Ta tại thành Giê-ru-sa-lem, cả xứ Giu-đê, xứ Sa-ma-ri, cho đến cùng trái đất.'
  },
  {
    id: 'v_50',
    bookFloor: 44,
    bookCode: 'CV',
    bookName: 'Công Vụ Các Sứ Đồ',
    chapter: 4,
    verse: 12,
    keyword: 'chẳng có sự cứu rỗi',
    secondaryKeyword: 'không danh nào khác dưới trời',
    category: 'Sự cứu rỗi duy nhất',
    text: 'Chẳng có sự cứu rỗi trong ai khác, vì ở dưới trời chẳng có danh nào khác ban cho loài người để chúng ta phải nhờ đó mà được cứu.'
  },
  {
    id: 'v_51',
    bookFloor: 45,
    bookCode: 'RM',
    bookName: 'Rô-ma',
    chapter: 3,
    verse: 23,
    keyword: 'mọi người phạm tội',
    secondaryKeyword: 'thiếu mất vinh quang',
    category: 'Tội lỗi & Ân điển',
    text: 'Vì mọi người đều đã phạm tội, thiếu mất vinh quang của Đức Chúa Trời.'
  },
  {
    id: 'v_52',
    bookFloor: 45,
    bookCode: 'RM',
    bookName: 'Rô-ma',
    chapter: 6,
    verse: 23,
    keyword: 'tiền công tội lỗi',
    secondaryKeyword: 'sự ban cho sự sống đời đời',
    category: 'Sự sống đời đời',
    text: 'Vì tiền công của tội lỗi là sự chết, nhưng sự ban cho của Đức Chúa Trời là sự sống đời đời trong Đấng Christ Jêsus, Chúa chúng ta.'
  },
  {
    id: 'v_13',
    bookFloor: 45,
    bookCode: 'RM',
    bookName: 'Rô-ma',
    chapter: 8,
    verse: 28,
    keyword: 'vạn sự hiệp lại',
    secondaryKeyword: 'mọi sự hiệp lại làm ích',
    category: 'Ý chỉ tốt lành của Chúa',
    text: 'Chúng ta biết rằng mọi sự hiệp lại làm ích cho những ai yêu mến Đức Chúa Trời, tức là cho những người được gọi theo mục đích của Ngài.'
  },
  {
    id: 'v_53',
    bookFloor: 45,
    bookCode: 'RM',
    bookName: 'Rô-ma',
    chapter: 12,
    verse: 2,
    keyword: 'đừng rập khuôn',
    secondaryKeyword: 'đổi mới tâm trí',
    category: 'Đổi mới tâm trí',
    text: 'Đừng rập khuôn theo đời này, nhưng hãy được biến hóa bởi sự đổi mới của tâm trí, để phân biệt đâu là ý muốn tốt lành, đẹp lòng và trọn vẹn của Đức Chúa Trời.'
  },
  {
    id: 'v_54',
    bookFloor: 46,
    bookCode: '1CÔ',
    bookName: '1 Cô-rinh-tô',
    chapter: 13,
    verse: 4,
    keyword: 'yêu thương nhẫn nhục',
    secondaryKeyword: 'không ghen tị không kiêu ngạo',
    category: 'Tình yêu thương',
    text: 'Tình yêu thương hay nhẫn nhục, tình yêu thương hay nhân từ; tình yêu thương không ghen tị, không khoe mình, không kiêu ngạo.'
  },
  {
    id: 'v_55',
    bookFloor: 46,
    bookCode: '1CÔ',
    bookName: '1 Cô-rinh-tô',
    chapter: 13,
    verse: 13,
    keyword: 'đức tin hy vọng yêu thương',
    secondaryKeyword: 'lớn nhất là tình yêu thương',
    category: 'Ba điều còn lại',
    text: 'Bây giờ còn có ba điều này: đức tin, hy vọng, tình yêu thương; nhưng điều lớn nhất trong ba điều đó là tình yêu thương.'
  },
  {
    id: 'v_56',
    bookFloor: 47,
    bookCode: '2CÔ',
    bookName: '2 Cô-rinh-tô',
    chapter: 5,
    verse: 17,
    keyword: 'tạo vật mới',
    secondaryKeyword: 'mọi sự trở nên mới',
    category: 'Đời sống mới trong Chúa',
    text: 'Vậy, nếu ai ở trong Đấng Christ, người ấy là một tạo vật mới; những điều cũ đã qua đi, kìa, mọi sự đều trở nên mới!'
  },
  {
    id: 'v_57',
    bookFloor: 48,
    bookCode: 'GA',
    bookName: 'Ga-la-ti',
    chapter: 2,
    verse: 20,
    keyword: 'đóng đinh thập tự giá',
    secondaryKeyword: 'Đấng Christ sống trong tôi',
    category: 'Đời sống đầu phục',
    text: 'Tôi đã bị đóng đinh vào thập tự giá với Đấng Christ, mà tôi sống, không phải là tôi sống nữa, nhưng Đấng Christ sống trong tôi.'
  },
  {
    id: 'v_58',
    bookFloor: 48,
    bookCode: 'GA',
    bookName: 'Ga-la-ti',
    chapter: 5,
    verse: 22,
    keyword: 'trái của Thánh Linh',
    secondaryKeyword: 'yêu thương vui mừng bình an',
    category: 'Bản tính Thánh Linh',
    text: 'Nhưng trái của Thánh Linh là: yêu thương, vui mừng, bình an, nhịn nhục, nhân từ, hiền lành, trung tín, khiêm nhu, tiết độ.'
  },
  {
    id: 'v_59',
    bookFloor: 49,
    bookCode: 'ÊP',
    bookName: 'Ê-phê-sô',
    chapter: 2,
    verse: 8,
    keyword: 'nhờ ân điển bởi đức tin',
    secondaryKeyword: 'sự ban cho của Đức Chúa Trời',
    category: 'Sự cứu rỗi bởi ân điển',
    text: 'Vì nhờ ân điển, bởi đức tin mà anh em được cứu, điều này không đến từ anh em, bèn là sự ban cho của Đức Chúa Trời; cũng không phải bởi việc làm, để không ai có thể tự hào.'
  },
  {
    id: 'v_60',
    bookFloor: 50,
    bookCode: 'PL',
    bookName: 'Phi-líp',
    chapter: 4,
    verse: 6,
    keyword: 'đừng lo lắng gì cả',
    secondaryKeyword: 'cầu nguyện nài xin cảm tạ',
    category: 'Bình an & Cầu nguyện',
    text: 'Đừng lo lắng gì cả, nhưng trong mọi sự hãy dùng lời cầu nguyện, nài xin cùng sự cảm tạ mà trình dâng những nhu cầu của mình cho Đức Chúa Trời. Sự bình an của Đức Chúa Trời, vượt trên mọi sự hiểu biết, sẽ gìn giữ lòng và trí anh em trong Đấng Christ Jêsus.'
  },
  {
    id: 'v_14',
    bookFloor: 50,
    bookCode: 'PL',
    bookName: 'Phi-líp',
    chapter: 4,
    verse: 13,
    keyword: 'làm được mọi sự',
    secondaryKeyword: 'nhờ Đấng ban năng lực',
    category: 'Năng lực siêu nhiên',
    text: 'Tôi làm được mọi sự nhờ Đấng ban năng lực cho tôi.'
  },
  {
    id: 'v_61',
    bookFloor: 51,
    bookCode: 'CL',
    bookName: 'Cô-lô-se',
    chapter: 3,
    verse: 23,
    keyword: 'hết lòng mà làm',
    secondaryKeyword: 'làm như cho Chúa',
    category: 'Thái độ sống & Làm việc',
    text: 'Bất cứ làm việc gì, hãy hết lòng mà làm như làm cho Chúa, chứ không phải cho người ta.'
  },
  {
    id: 'v_62',
    bookFloor: 52,
    bookCode: '1TÊ',
    bookName: '1 Tê-sa-lô-ni-ca',
    chapter: 5,
    verse: 16,
    keyword: 'vui mừng mãi mãi',
    secondaryKeyword: 'cầu nguyện không thôi cảm tạ',
    category: 'Ý muốn Đức Chúa Trời',
    text: 'Hãy vui mừng mãi mãi, cầu nguyện không thôi, cảm tạ Chúa trong mọi hoàn cảnh, vì đây là ý muốn của Đức Chúa Trời đối với anh em trong Đấng Christ Jêsus.'
  },
  {
    id: 'v_63',
    bookFloor: 55,
    bookCode: '2TI',
    bookName: '2 Ti-mô-thê',
    chapter: 1,
    verse: 7,
    keyword: 'tinh thần mạnh mẽ',
    secondaryKeyword: 'không nhút nhát nhưng yêu thương',
    category: 'Lòng can đảm & Tình yêu',
    text: 'Vì Đức Chúa Trời chẳng ban cho chúng ta tinh thần nhút nhát, nhưng tinh thần mạnh mẽ, có tình yêu thương và tự chủ.'
  },
  {
    id: 'v_64',
    bookFloor: 55,
    bookCode: '2TI',
    bookName: '2 Ti-mô-thê',
    chapter: 3,
    verse: 16,
    keyword: 'Kinh Thánh soi dẫn',
    secondaryKeyword: 'huấn luyện trong công chính',
    category: 'Thẩm quyền Kinh Thánh',
    text: 'Cả Kinh Thánh đều được Đức Chúa Trời soi dẫn, có ích cho sự dạy dỗ, bẻ trách, sửa trị, và huấn luyện trong sự công chính.'
  },
  {
    id: 'v_65',
    bookFloor: 58,
    bookCode: 'HB',
    bookName: 'Hê-bơ-rơ',
    chapter: 4,
    verse: 12,
    keyword: 'sắc hơn gươm hai lưỡi',
    secondaryKeyword: 'Lời sống và linh nghiệm',
    category: 'Quyền năng Lời Chúa',
    text: 'Vì lời của Đức Chúa Trời là lời sống và linh nghiệm, sắc hơn gươm hai lưỡi, xuyên thấu đến nỗi phân chia hồn với linh, cốt với tủy, xét đoán các tư tưởng và ý định trong lòng.'
  },
  {
    id: 'v_15',
    bookFloor: 58,
    bookCode: 'HB',
    bookName: 'Hê-bơ-rơ',
    chapter: 11,
    verse: 1,
    keyword: 'bằng chứng thực tại',
    secondaryKeyword: 'đức tin là thực thể',
    category: 'Định nghĩa Đức Tin',
    text: 'Đức tin là thực thể của những điều đang hy vọng, là bằng chứng của những điều không thấy.'
  },
  {
    id: 'v_66',
    bookFloor: 60,
    bookCode: '1PR',
    bookName: '1 Phi-e-rơ',
    chapter: 5,
    verse: 7,
    keyword: 'trao mọi lo lắng',
    secondaryKeyword: 'Ngài luôn chăm sóc',
    category: 'Bình an & Chăm sóc',
    text: 'Hãy trao mọi điều lo lắng mình cho Ngài, vì Ngài luôn chăm sóc anh em.'
  },
  {
    id: 'v_67',
    bookFloor: 62,
    bookCode: '1G',
    bookName: '1 Giăng',
    chapter: 1,
    verse: 9,
    keyword: 'xưng tội mình',
    secondaryKeyword: 'thành tín công chính tha tội',
    category: 'Sự tha thứ',
    text: 'Còn nếu chúng ta xưng tội mình, thì Ngài là thành tín, công chính sẽ tha tội cho chúng ta và tẩy sạch chúng ta khỏi mọi điều bất chính.'
  },
  {
    id: 'v_68',
    bookFloor: 62,
    bookCode: '1G',
    bookName: '1 Giăng',
    chapter: 4,
    verse: 19,
    keyword: 'chúng ta yêu',
    secondaryKeyword: 'Ngài yêu chúng ta trước',
    category: 'Gốc rễ Tình yêu',
    text: 'Chúng ta yêu, vì Ngài đã yêu chúng ta trước.'
  },
  {
    id: 'v_69',
    bookFloor: 66,
    bookCode: 'KH',
    bookName: 'Khải Huyền',
    chapter: 3,
    verse: 20,
    keyword: 'đứng ngoài cửa gõ',
    secondaryKeyword: 'mở cửa Ta sẽ vào',
    category: 'Lời mời gọi thân mật',
    text: 'Này, Ta đứng ngoài cửa mà gõ; nếu ai nghe tiếng Ta mà mở cửa cho, Ta sẽ vào cùng người ấy, ăn bữa tối với người, và người với Ta.'
  },
  {
    id: 'v_16',
    bookFloor: 66,
    bookCode: 'KH',
    bookName: 'Khải Huyền',
    chapter: 21,
    verse: 4,
    keyword: 'lau ráo nước mắt',
    secondaryKeyword: 'không còn sự chết đau đớn',
    category: 'Trời Mới Đất Mới',
    text: 'Ngài sẽ lau ráo hết nước mắt nơi mắt họ. Sẽ không còn sự chết, cũng không còn tang chế, than khóc, hay đau đớn nữa; vì những sự ban đầu đã qua rồi.'
  }
];

console.log('Total Prepared Verses:', ALL_SCRIPTURE_VERSES.length);

console.log('--- 2. UPDATING app.js ---');
let appContent = fs.readFileSync(appPath, 'utf8');

// Replace INITIAL_SCRIPTURE_VERSES in app.js
const regexInitVerses = /const INITIAL_SCRIPTURE_VERSES = \[[\s\S]*?\n\];/;
const newVersesStr = `const INITIAL_SCRIPTURE_VERSES = ${JSON.stringify(ALL_SCRIPTURE_VERSES, null, 2)};`;

if (!regexInitVerses.test(appContent)) {
  console.error('Cannot match INITIAL_SCRIPTURE_VERSES in app.js');
  process.exit(1);
}

appContent = appContent.replace(regexInitVerses, newVersesStr);

// Add Bible memorization progress engine functions if not already present
const bibleEngineFunctions = `
// ==========================================
// 15B. HỆ THỐNG GHI NHỚ & THỐNG KÊ KINH THÁNH (SCRIPTURE MEMORIZATION ENGINE)
// ==========================================
const BIBLE_PROGRESS_KEY = 'supermind_bible_progress_v1';
let currentBibleFilterStatus = 'all'; // 'all', 'mastered', 'learning', 'unlearned'
let currentMasteredVerseSearch = '';

function getBibleProgressMap() {
  try {
    const raw = localStorage.getItem(BIBLE_PROGRESS_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function getBibleVerseProgress(verseId) {
  const map = getBibleProgressMap();
  const val = map[verseId];
  if (!val) return { status: 'unlearned', mastered: false, reviewCount: 0 };
  if (typeof val === 'boolean') {
    return { status: val ? 'mastered' : 'unlearned', mastered: val, reviewCount: val ? 1 : 0 };
  }
  return {
    status: val.status || (val.mastered ? 'mastered' : 'unlearned'),
    mastered: !!val.mastered,
    reviewCount: val.reviewCount || 0,
    lastReviewed: val.lastReviewed || null
  };
}

function setBibleVerseStatus(verseId, status) {
  const map = getBibleProgressMap();
  const current = getBibleVerseProgress(verseId);
  const isMastered = status === 'mastered';
  map[verseId] = {
    status: status,
    mastered: isMastered,
    reviewCount: (current.reviewCount || 0) + 1,
    lastReviewed: Date.now()
  };
  localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(map));
  updateBibleStatsDashboard();
  renderVersesInRoom();
  renderMasteredModalList();
}

function toggleBibleVerseMastered(verseId) {
  const current = getBibleVerseProgress(verseId);
  const newStatus = current.mastered ? 'learning' : 'mastered';
  setBibleVerseStatus(verseId, newStatus);
  playSound(newStatus === 'mastered' ? 'success' : 'click');
}

function isBibleVerseMastered(verseId) {
  return getBibleVerseProgress(verseId).mastered;
}

function calculateBibleStreak() {
  try {
    const today = new Date().toISOString().slice(0, 10);
    const lastDate = localStorage.getItem('bible_last_study_date');
    let streak = parseInt(localStorage.getItem('bible_study_streak') || '1', 10);
    if (!lastDate) {
      localStorage.setItem('bible_last_study_date', today);
      localStorage.setItem('bible_study_streak', '1');
      return 1;
    }
    if (lastDate === today) return streak;
    const diffDays = Math.round((new Date(today) - new Date(lastDate)) / (1000 * 3600 * 24));
    if (diffDays === 1) {
      streak += 1;
    } else if (diffDays > 1) {
      streak = 1;
    }
    localStorage.setItem('bible_last_study_date', today);
    localStorage.setItem('bible_study_streak', String(streak));
    return streak;
  } catch (e) {
    return 1;
  }
}

function updateBibleStatsDashboard() {
  const allVerses = getAllScriptureVerses();
  const total = allVerses.length;
  let masteredCount = 0;
  let learningCount = 0;
  const masteredBooksSet = new Set();

  allVerses.forEach(v => {
    const p = getBibleVerseProgress(v.id);
    if (p.mastered) {
      masteredCount++;
      masteredBooksSet.add(v.bookFloor);
    } else if (p.status === 'learning' || p.reviewCount > 0) {
      learningCount++;
    }
  });

  const unlearnedCount = Math.max(0, total - masteredCount - learningCount);
  const percent = total > 0 ? Math.round((masteredCount / total) * 100) : 0;

  const elTotal = document.getElementById('statTotalBibleVerses');
  const elMastered = document.getElementById('statMasteredBibleVerses');
  const elMasteredPct = document.getElementById('statMasteredBiblePercent');
  const elLearning = document.getElementById('statLearningBibleVerses');
  const elBooks = document.getElementById('statMasteredBibleBooks');
  const elBar = document.getElementById('statBibleProgressBarFill');
  const elBarText = document.getElementById('statBibleProgressBarText');
  const elStreak = document.getElementById('bibleStreakBadge');
  const elBtnMastered = document.getElementById('statBtnMasteredCount');

  if (elTotal) elTotal.textContent = total;
  if (elMastered) elMastered.textContent = masteredCount;
  if (elMasteredPct) elMasteredPct.textContent = \`(\${percent}%)\`;
  if (elLearning) elLearning.textContent = learningCount;
  if (elBooks) elBooks.textContent = \`\${masteredBooksSet.size} / 66\`;
  if (elBar) elBar.style.width = \`\${percent}%\`;
  if (elBarText) elBarText.textContent = \`\${percent}% (\${masteredCount}/\${total} câu đã thuộc)\`;
  if (elBtnMastered) elBtnMastered.textContent = masteredCount;

  const streak = calculateBibleStreak();
  if (elStreak) elStreak.textContent = \`🔥 \${streak} Ngày Thuộc Lòng\`;
}

function filterBibleProgressStatus(status) {
  playSound('click');
  currentBibleFilterStatus = status;
  document.querySelectorAll('.bible-stat-filter-btn').forEach(btn => {
    if (btn.getAttribute('data-status') === status) {
      btn.className = 'bible-stat-filter-btn px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold transition-all text-xs';
    } else {
      btn.className = 'bible-stat-filter-btn px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all text-xs';
    }
  });
  renderVersesInRoom();
}

function resetBibleProgressConfirm() {
  if (confirm('Bạn có chắc muốn đặt lại toàn bộ tiến độ ghi nhớ Kinh Thánh không? Dữ liệu các câu đã thuộc sẽ được hoàn tác để bạn rèn luyện lại từ đầu.')) {
    localStorage.removeItem(BIBLE_PROGRESS_KEY);
    updateBibleStatsDashboard();
    renderVersesInRoom();
    playSound('click');
    alert('Đã đặt lại tiến độ thuộc Kinh Thánh thành công!');
  }
}

function openMasteredBibleVersesModal() {
  playSound('click');
  renderMasteredModalList();
  const modal = document.getElementById('masteredBibleVersesModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
  }
}

function closeMasteredBibleVersesModal() {
  playSound('click');
  const modal = document.getElementById('masteredBibleVersesModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function filterMasteredVersesList(query) {
  currentMasteredVerseSearch = (query || '').toLowerCase().trim();
  renderMasteredModalList();
}

function renderMasteredModalList() {
  const container = document.getElementById('masteredVersesListContainer');
  const countBadge = document.getElementById('masteredModalCountBadge');
  if (!container) return;

  const allVerses = getAllScriptureVerses();
  const masteredVerses = allVerses.filter(v => isBibleVerseMastered(v.id));

  if (countBadge) countBadge.textContent = \`\${masteredVerses.length} Câu Đã Thuộc\`;

  const q = currentMasteredVerseSearch;
  const filtered = masteredVerses.filter(v => {
    if (!q) return true;
    const match = v.text.toLowerCase().includes(q) ||
                  v.keyword.toLowerCase().includes(q) ||
                  v.bookName.toLowerCase().includes(q) ||
                  \`\${v.bookCode} \${v.chapter}:\${v.verse}\`.toLowerCase().includes(q);
    return match;
  });

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div class="py-12 text-center text-slate-400 space-y-2">
        <div class="text-4xl">📖</div>
        <div class="text-sm font-bold text-white">\${masteredVerses.length === 0 ? 'Bạn chưa đánh dấu câu Kinh Thánh nào là đã thuộc!' : 'Không tìm thấy câu phù hợp với từ khóa tìm kiếm.'}</div>
        <p class="text-xs text-slate-500 max-w-sm mx-auto">
          \${masteredVerses.length === 0 ? 'Hãy duyệt qua Tòa Nhà 66 Tầng hoặc bấm "Thêm Câu" và tích chọn "Tôi đã thuộc lòng câu này" để tích lũy kho câu thuộc nhé!' : ''}
        </p>
      </div>
    \`;
    return;
  }

  container.innerHTML = filtered.map(v => {
    const firstLetters = generateFirstLetters(v.text);
    return \`
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-400/60 transition-all space-y-2.5 shadow-sm">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/40">
              \${v.bookName} (\${v.bookCode}) \${v.chapter}:\${v.verse}
            </span>
            <span class="text-[11px] text-amber-400 font-semibold">Tầng \${v.bookFloor}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="speakVerseText('\${v.text.replace(/'/g, "\\\\'")}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300" title="Nghe đọc">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="toggleBibleVerseMastered('\${v.id}')" class="px-2 py-1 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-500/40 text-rose-300 text-[10px] font-bold" title="Hủy đánh dấu thuộc">
              Bỏ Thuộc
            </button>
          </div>
        </div>

        <blockquote class="text-xs sm:text-sm font-serif italic text-white pl-3 border-l-2 border-amber-400">
          "\${v.text}"
        </blockquote>

        <div class="p-2 rounded-xl bg-slate-950 text-[11px] font-mono text-amber-300 flex items-center justify-between">
          <span>Chuỗi chữ đầu: <strong>\${firstLetters}</strong></span>
          <span class="text-[10px] text-slate-500">Mỏ neo: "\${v.keyword}"</span>
        </div>
      </div>
    \`;
  }).join('');

  lucide.createIcons();
}

function speakVerseText(text) {
  try {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'vi-VN';
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  } catch (e) {
    console.warn('Speech synthesis error:', e);
  }
}
`;

// Insert the functions if not present
if (!appContent.includes('BIBLE_PROGRESS_KEY')) {
  appContent = appContent.replace('function initScriptureTower() {', bibleEngineFunctions + '\nfunction initScriptureTower() {');
}

// Update initScriptureTower to call updateBibleStatsDashboard
appContent = appContent.replace(/function initScriptureTower\(\) \{[\s\S]*?renderTowerFloors\(\);[\s\S]*?selectFloor\(1\);[\s\S]*?populateBookDropdown\(\);[\s\S]*?\}/, `function initScriptureTower() {
  renderTowerFloors();
  selectFloor(1);
  populateBookDropdown();
  updateBibleStatsDashboard();
}`);

// Update renderVersesInRoom to include memorized toggle, speak button, status badge & filter
const newRenderVersesInRoom = `function renderVersesInRoom() {
  const container = document.getElementById('versesInRoomList');
  if (!container) return;

  const allVerses = getAllScriptureVerses();
  let filtered = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);

  // Áp dụng bộ lọc trạng thái ghi nhớ
  if (currentBibleFilterStatus === 'mastered') {
    filtered = filtered.filter(v => isBibleVerseMastered(v.id));
  } else if (currentBibleFilterStatus === 'learning') {
    filtered = filtered.filter(v => {
      const p = getBibleVerseProgress(v.id);
      return !p.mastered && (p.status === 'learning' || p.reviewCount > 0);
    });
  } else if (currentBibleFilterStatus === 'unlearned') {
    filtered = filtered.filter(v => {
      const p = getBibleVerseProgress(v.id);
      return !p.mastered && p.reviewCount === 0;
    });
  }

  if (filtered.length === 0) {
    container.innerHTML = \`
      <div class="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500 border border-dashed border-slate-800 rounded-2xl">
        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-3">
          <i data-lucide="bookmark" class="w-6 h-6"></i>
        </div>
        <div class="text-sm font-semibold text-slate-300 mb-1">\${currentBibleFilterStatus !== 'all' ? 'Không có câu nào khớp với bộ lọc này ở Phòng ' + currentSelectedRoom : 'Chưa có câu nào được lưu ở Phòng ' + currentSelectedRoom}</div>
        <p class="text-xs text-slate-400 max-w-sm mb-4">Bạn có thể bấm nút bên dưới để thêm câu Kinh Thánh Bản 2010 kèm từ khóa mỏ neo vào phòng này!</p>
        <button onclick="openAddVerseForCurrentFloor()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-1.5">
          <i data-lucide="plus" class="w-4 h-4"></i> Thêm Câu Vào Phòng Này
        </button>
      </div>
    \`;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(v => {
    const firstLetters = generateFirstLetters(v.text);
    const progress = getBibleVerseProgress(v.id);
    const isMastered = progress.mastered;

    return \`
      <div class="p-5 rounded-2xl bg-slate-900 border \${isMastered ? 'border-amber-500/60 ring-1 ring-amber-500/30' : 'border-slate-800 hover:border-amber-500/50'} transition-all space-y-3 shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
              \${v.bookCode} \${v.chapter}:\${v.verse}
            </span>
            <span class="text-xs text-slate-400 font-medium">Câu \${v.verse}</span>
            \${isMastered ? \`
              <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] font-bold flex items-center gap-1">
                <span>👑</span> ĐÃ THUỘC LÒNG
              </span>
            \` : (progress.reviewCount > 0 ? \`
              <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[10px] font-bold flex items-center gap-1">
                <span>⏳</span> ĐANG ÔN
              </span>
            \` : '')}
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1">
              <i data-lucide="key" class="w-3 h-3 text-amber-400"></i> Từ khóa: "\${v.keyword}"
            </span>
            \${v.secondaryKeyword ? \`
              <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] border border-slate-700">
                Phân biệt: "\${v.secondaryKeyword}"
              </span>
            \` : ''}
            <div class="flex items-center gap-1.5 ml-2">
              <button onclick="toggleBibleVerseMastered('\${v.id}')" class="px-2.5 py-1 rounded-lg \${isMastered ? 'bg-amber-500 text-slate-950 font-black shadow' : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700'} text-xs font-bold flex items-center gap-1 transition-all" title="\${isMastered ? 'Đã thuộc lòng câu này' : 'Đánh dấu đã thuộc lòng'}">
                <i data-lucide="\${isMastered ? 'check-circle-2' : 'award'}" class="w-3.5 h-3.5"></i>
                <span class="hidden sm:inline">\${isMastered ? 'Đã Thuộc' : 'Đánh Dấu Thuộc'}</span>
              </button>
              <button onclick="speakVerseText('\${v.text.replace(/'/g, "\\\\'")}')" title="Nghe đọc câu này" class="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs transition-all">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="editScriptureVerse('\${v.id}')" title="Sửa câu này" class="px-2 py-1 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-slate-700 hover:border-amber-400 text-xs font-bold flex items-center gap-1 transition-all shadow-sm">
                <i data-lucide="edit-3" class="w-3 h-3"></i> Sửa
              </button>
              <button onclick="deleteScriptureVerse('\${v.id}')" title="Xóa câu này" class="p-1 rounded-lg bg-slate-800 hover:bg-rose-900/60 hover:text-rose-300 text-slate-400 border border-slate-700 text-xs transition-all">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Full Text (Bản 2010) -->
        <blockquote class="text-sm sm:text-base font-serif italic text-slate-100 border-l-2 border-amber-400 pl-4 py-1">
          "\${v.text}"
        </blockquote>

        <!-- First-Letter Drill Bar -->
        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800/80 space-y-1.5">
          <div class="flex items-center justify-between text-[11px] text-slate-400">
            <span class="font-bold flex items-center gap-1 text-amber-400">
              <i data-lucide="sparkles" class="w-3 h-3"></i> Chuỗi Chữ Cái Đầu (Bí Quyết Thuộc Từng Từ):
            </span>
            <span class="text-[10px] text-slate-500">Đọc theo thứ tự để khóa từng chữ</span>
          </div>
          <div class="text-xs font-mono font-black text-amber-300 tracking-wider break-words">
            \${firstLetters}
          </div>
        </div>
      </div>
    \`;
  }).join('');

  lucide.createIcons();
}`;

// Replace renderVersesInRoom in appContent
const regexRenderVerses = /function renderVersesInRoom\(\) \{[\s\S]*?container\.innerHTML = filtered\.map[\s\S]*?lucide\.createIcons\(\);[\s\S]*?\}/;
appContent = appContent.replace(regexRenderVerses, newRenderVersesInRoom);

// Update saveCustomVerse to check if inputVerseIsMastered is checked
const saveVerseRegex = /const targetVerse = \{[\s\S]*?text: text\s*\};/;
const saveVerseReplacement = `const targetVerse = {
    id: editingId || ('user_v_' + Date.now()),
    bookFloor: floor,
    bookCode: book ? book.code : 'S',
    bookName: book ? book.name : '',
    chapter: chapter,
    verse: verse,
    keyword: keyword,
    secondaryKeyword: secondaryKeyword,
    text: text
  };

  const isMasteredChecked = document.getElementById('inputVerseIsMastered')?.checked;
  if (isMasteredChecked) {
    setBibleVerseStatus(targetVerse.id, 'mastered');
  }`;

appContent = appContent.replace(saveVerseRegex, saveVerseReplacement);

fs.writeFileSync(appPath, appContent, 'utf8');
console.log('Successfully updated app.js with Bible memorization engine & 58 verses!');

console.log('--- 3. UPDATING index.html ---');
let htmlContent = fs.readFileSync(indexPath, 'utf8');

// 1. Add Bible Stats Dashboard into subjectBibleView
const bibleStatsHtml = `
          <!-- BẢNG THỐNG KÊ TIẾN ĐỘ THUỘC KINH THÁNH (SCRIPTURE MEMORIZATION ANALYTICS) -->
          <div class="rounded-3xl bg-slate-900/90 border border-slate-800 p-5 sm:p-6 shadow-xl space-y-4">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 text-lg font-bold shadow-lg">
                  📊
                </div>
                <div>
                  <h3 class="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                    <span>Thống Kê Tiến Độ Thuộc Lòng Kinh Thánh (Bản 2010)</span>
                    <span id="bibleStreakBadge" class="text-[11px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono">🔥 1 Ngày Thuộc Lòng</span>
                  </h3>
                  <p class="text-xs text-slate-400">Theo dõi thời gian thực số lượng câu Kinh Thánh bạn đã thuộc lòng theo từng sách và tầng</p>
                </div>
              </div>
              <div class="flex items-center gap-2">
                <button onclick="openMasteredBibleVersesModal()" class="px-3 py-1.5 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 text-xs font-bold transition-all flex items-center gap-1.5 border border-amber-500/40">
                  <i data-lucide="book-marked" class="w-3.5 h-3.5"></i>
                  <span>Sổ Tay Đã Thuộc (<span id="statBtnMasteredCount">0</span>)</span>
                </button>
                <button onclick="resetBibleProgressConfirm()" class="px-2.5 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-300 text-[11px] transition-all flex items-center gap-1 border border-slate-700" title="Đặt lại tiến độ thuộc Kinh Thánh">
                  <i data-lucide="rotate-ccw" class="w-3.5 h-3.5"></i>
                  <span>Đặt Lại</span>
                </button>
              </div>
            </div>

            <!-- 4 Thẻ KPI Chỉ Số -->
            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
              <div class="p-4 rounded-2xl bg-cardBg border border-slate-800/80 hover:border-slate-700 transition-all">
                <div class="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Tổng Số Câu Trong Kho</span>
                  <i data-lucide="book" class="w-3.5 h-3.5 text-slate-500"></i>
                </div>
                <div class="text-2xl font-black text-white font-mono mt-1" id="statTotalBibleVerses">58</div>
                <div class="text-[10px] text-slate-500 mt-0.5">Mẫu RVV2010 + Câu tự thêm</div>
              </div>

              <div class="p-4 rounded-2xl bg-cardBg border border-amber-500/30 bg-amber-950/10 hover:border-amber-500/50 transition-all">
                <div class="text-[11px] text-amber-400 flex items-center justify-between">
                  <span>Đã Thuộc Lòng (Mastered)</span>
                  <i data-lucide="crown" class="w-3.5 h-3.5 text-amber-400"></i>
                </div>
                <div class="text-2xl font-black text-amber-300 font-mono mt-1 flex items-baseline gap-1.5">
                  <span id="statMasteredBibleVerses">0</span>
                  <span class="text-xs font-normal text-amber-400/80 font-sans" id="statMasteredBiblePercent">(0%)</span>
                </div>
                <div class="text-[10px] text-amber-400/70 mt-0.5">Đã khắc sâu vào trí nhớ</div>
              </div>

              <div class="p-4 rounded-2xl bg-cardBg border border-purple-500/30 bg-purple-950/10 hover:border-purple-500/50 transition-all">
                <div class="text-[11px] text-purple-400 flex items-center justify-between">
                  <span>Đang Luyện Tập</span>
                  <i data-lucide="clock" class="w-3.5 h-3.5 text-purple-400"></i>
                </div>
                <div class="text-2xl font-black text-purple-300 font-mono mt-1" id="statLearningBibleVerses">0</div>
                <div class="text-[10px] text-purple-400/70 mt-0.5">Cần nhắc lại ngắt quãng</div>
              </div>

              <div class="p-4 rounded-2xl bg-cardBg border border-slate-800/80 hover:border-slate-700 transition-all">
                <div class="text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Sách Đã Có Câu Thuộc</span>
                  <i data-lucide="building" class="w-3.5 h-3.5 text-slate-500"></i>
                </div>
                <div class="text-2xl font-black text-slate-300 font-mono mt-1" id="statMasteredBibleBooks">0 / 66</div>
                <div class="text-[10px] text-slate-500 mt-0.5">Tầng tòa nhà đã mở</div>
              </div>
            </div>

            <!-- Thanh Tiến Độ Tổng Thể -->
            <div class="space-y-1.5 pt-1">
              <div class="flex items-center justify-between text-xs font-semibold">
                <span class="text-slate-300 flex items-center gap-1.5">
                  <span>Mức Độ Thuộc Lòng Mục Tiêu:</span>
                  <span id="statBibleProgressBarText" class="text-amber-400 font-mono font-bold">0%</span>
                </span>
                <span class="text-[11px] text-slate-400">Mục tiêu: Đạt 100% các câu trọng tâm</span>
              </div>
              <div class="w-full h-3 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/60">
                <div id="statBibleProgressBarFill" class="h-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 transition-all duration-500 w-0"></div>
              </div>
            </div>

            <!-- Bộ lọc trạng thái câu -->
            <div class="flex flex-wrap items-center gap-2 pt-1 border-t border-slate-800/80 text-xs">
              <span class="text-slate-400 font-medium">Lọc câu trong phòng:</span>
              <button onclick="filterBibleProgressStatus('all')" class="bible-stat-filter-btn px-2.5 py-1 rounded-lg bg-amber-500 text-slate-950 font-bold transition-all text-xs" data-status="all">Tất Cả</button>
              <button onclick="filterBibleProgressStatus('mastered')" class="bible-stat-filter-btn px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all text-xs" data-status="mastered">👑 Đã Thuộc Lòng</button>
              <button onclick="filterBibleProgressStatus('learning')" class="bible-stat-filter-btn px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all text-xs" data-status="learning">⏳ Đang Ôn Luyện</button>
              <button onclick="filterBibleProgressStatus('unlearned')" class="bible-stat-filter-btn px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all text-xs" data-status="unlearned">⚪ Chưa Học</button>
            </div>
          </div>
`;

// Insert stats dashboard before Quick Fast Keyword Search
if (!htmlContent.includes('statTotalBibleVerses')) {
  htmlContent = htmlContent.replace('<!-- Quick Fast Keyword Search & Floor Filter -->', bibleStatsHtml + '\n          <!-- Quick Fast Keyword Search & Floor Filter -->');
}

// 2. Add Sổ Tay Đã Thuộc Button in Banner
const bannerBtnTarget = `<button onclick="openAddVerseModal()" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-all flex items-center gap-1.5 whitespace-nowrap">`;
const bannerBtnReplacement = `<button onclick="openMasteredBibleVersesModal()" class="px-3.5 py-2 rounded-xl bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-bold text-xs shadow transition-all flex items-center gap-1.5 whitespace-nowrap">
                <i data-lucide="book-marked" class="w-3.5 h-3.5"></i> Sổ Tay Đã Thuộc
              </button>
              <button onclick="openAddVerseModal()" class="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow transition-all flex items-center gap-1.5 whitespace-nowrap">`;

if (!htmlContent.includes('openMasteredBibleVersesModal()')) {
  htmlContent = htmlContent.replace(bannerBtnTarget, bannerBtnReplacement);
}

// 3. Add checkbox in addVerseModal
const addModalTarget = `<div class="pt-2 flex justify-end gap-2">
            <button type="button" onclick="closeAddVerseModal()"`;
const addModalReplacement = `<div class="flex items-center gap-2.5 p-3 rounded-2xl bg-amber-950/30 border border-amber-500/40 cursor-pointer" onclick="document.getElementById('inputVerseIsMastered').click()">
            <input type="checkbox" id="inputVerseIsMastered" onclick="event.stopPropagation()" class="w-4 h-4 text-amber-500 rounded border-slate-700 bg-slate-900 focus:ring-0">
            <label for="inputVerseIsMastered" onclick="event.stopPropagation()" class="text-xs font-bold text-amber-300 cursor-pointer flex items-center gap-1.5">
              <span>👑 Tôi đã thuộc lòng câu này (Cộng ngay vào Bảng Thống Kê)</span>
            </label>
          </div>

          <div class="pt-2 flex justify-end gap-2">
            <button type="button" onclick="closeAddVerseModal()"`;

if (!htmlContent.includes('inputVerseIsMastered')) {
  htmlContent = htmlContent.replace(addModalTarget, addModalReplacement);
}

// 4. Add Sổ Tay Modal below scriptureQuizModal
const masteredModalHtml = `
    <!-- MODAL: SỔ TAY CÂU KINH THÁNH ĐÃ THUỘC LÒNG -->
    <div id="masteredBibleVersesModal" class="fixed inset-0 z-50 bg-black/85 backdrop-blur-md hidden items-center justify-center p-3 sm:p-4">
      <div class="bg-cardBg border border-amber-500/40 rounded-3xl max-w-2xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <!-- Header -->
        <div class="p-5 border-b border-slate-800 bg-slate-900/80 flex items-center justify-between">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-2xl bg-gradient-to-tr from-amber-500 to-yellow-600 flex items-center justify-center text-slate-950 font-bold text-lg shadow-lg">
              👑
            </div>
            <div>
              <h3 class="text-base font-bold text-white flex items-center gap-2">
                <span>Sổ Tay Câu Kinh Thánh Đã Thuộc Lòng</span>
                <span id="masteredModalCountBadge" class="text-xs px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 font-mono font-bold">0 Câu</span>
              </h3>
              <p class="text-xs text-slate-400">Xem lại và ôn tập tất cả các câu kinh văn bạn đã ghi nhớ thành công</p>
            </div>
          </div>
          <button onclick="closeMasteredBibleVersesModal()" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <!-- Search in Mastered -->
        <div class="p-4 border-b border-slate-800 bg-slate-900/40">
          <div class="relative">
            <i data-lucide="search" class="w-4 h-4 text-amber-400 absolute left-3 top-1/2 -translate-y-1/2"></i>
            <input type="text" id="masteredVerseSearchInput" oninput="filterMasteredVersesList(this.value)" placeholder="Tìm kiếm trong danh sách đã thuộc (Tọa độ, từ khóa, nội dung)..." class="w-full bg-slate-900 border border-slate-700 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400">
          </div>
        </div>

        <!-- Mastered Verses List -->
        <div id="masteredVersesListContainer" class="p-4 space-y-3 overflow-y-auto flex-grow max-h-[60vh]">
          <!-- Rendered by JS -->
        </div>
      </div>
    </div>
`;

if (!htmlContent.includes('masteredBibleVersesModal')) {
  htmlContent = htmlContent.replace('<!-- MODAL: SCRIPTURE REFLEX QUIZ -->', masteredModalHtml + '\n    <!-- MODAL: SCRIPTURE REFLEX QUIZ -->');
}

fs.writeFileSync(indexPath, htmlContent, 'utf8');
console.log('Successfully updated index.html with Bible Stats Dashboard and Mastered Modal!');
