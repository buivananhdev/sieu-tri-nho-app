/**
 * SuperMind & SuperMemory Application Engine
 * Developed for buivananhdev/sieu-tri-nho-app
 */

// ==========================================
// 1. DATA REPOSITORY: MEMORY METHODS (MASTERCLASS TOÀN THƯ)
// ==========================================
const MEMORY_METHODS = (typeof window !== 'undefined' && window.GLOBAL_MEMORY_METHODS && window.GLOBAL_MEMORY_METHODS.length)
  ? window.GLOBAL_MEMORY_METHODS
  : [
      {
        id: 'loci',
        title: 'Cung Điện Ký Ức (Method of Loci)',
        subtitle: 'Nền tảng của các kỷ lục gia thế giới',
        category: 'Không Gian & Liên Tưởng',
        color: 'from-purple-600 to-indigo-600',
        icon: 'building-2',
        desc: 'Biến không gian quen thuộc thành một ổ cứng sinh học khổng lồ để lưu trữ hàng nghìn dữ kiện không giới hạn.',
        content: '<p>Vui lòng nạp methods-data.js để xem trọn vẹn bài giảng Masterclass.</p>'
      }
    ];

// ==========================================
// 2. DATA REPOSITORY: SUPER INTELLIGENCE MODELS (MASTERCLASS TOÀN THƯ)
// ==========================================
const INTELLIGENCE_MODELS = (typeof window !== 'undefined' && window.GLOBAL_INTELLIGENCE_MODELS && window.GLOBAL_INTELLIGENCE_MODELS.length)
  ? window.GLOBAL_INTELLIGENCE_MODELS
  : [
      {
        id: 'feynman',
        title: 'Kỹ Thuật Feynman (Feynman Technique)',
        subtitle: 'Học sâu & truyền đạt siêu đơn giản',
        category: 'Làm Chủ Tri Thức',
        color: 'from-cyan-600 to-blue-600',
        icon: 'sparkles',
        desc: 'Phương pháp tối thượng của nhà vật lý đoạt giải Nobel giúp bạn hiểu thấu đáo bất kỳ chủ đề hóc búa nào.',
        content: '<p>Vui lòng nạp methods-data.js để xem trọn vẹn bài giảng Masterclass.</p>'
      }
    ];

// ==========================================
// 3. DATA REPOSITORY: 100 BIỂU TƯỢNG SỐ 00-99 (KHOA HỌC & TỰ NHIÊN)
// ==========================================
const MAJOR_SYSTEM_DICTIONARY = [
  // Nhóm 00–09 = Vũ trụ 🌌
  { num: '00', word: 'Mặt Trời', icon: '☀️', tip: '00–09: Vũ trụ' },
  { num: '01', word: 'Mặt Trăng', icon: '🌙', tip: '00–09: Vũ trụ' },
  { num: '02', word: 'Trái Đất', icon: '🌍', tip: '00–09: Vũ trụ' },
  { num: '03', word: 'Hành tinh', icon: '🪐', tip: '00–09: Vũ trụ' },
  { num: '04', word: 'Ngôi sao', icon: '⭐', tip: '00–09: Vũ trụ' },
  { num: '05', word: 'Sao chổi', icon: '☄️', tip: '00–09: Vũ trụ' },
  { num: '06', word: 'Thiên hà', icon: '🌌', tip: '00–09: Vũ trụ' },
  { num: '07', word: 'Hố đen', icon: '🕳️', tip: '00–09: Vũ trụ' },
  { num: '08', word: 'Vệ tinh', icon: '🛰️', tip: '00–09: Vũ trụ' },
  { num: '09', word: 'Tên lửa', icon: '🚀', tip: '00–09: Vũ trụ' },

  // Nhóm 10–19 = Vật lý ⚛️
  { num: '10', word: 'Nguyên tử', icon: '⚛️', tip: '10–19: Vật lý' },
  { num: '11', word: 'Điện', icon: '⚡', tip: '10–19: Vật lý' },
  { num: '12', word: 'Từ trường', icon: '🧲', tip: '10–19: Vật lý' },
  { num: '13', word: 'Ánh sáng', icon: '💡', tip: '10–19: Vật lý' },
  { num: '14', word: 'Nhiệt', icon: '🔥', tip: '10–19: Vật lý' },
  { num: '15', word: 'Sóng', icon: '🌊', tip: '10–19: Vật lý' },
  { num: '16', word: 'Lực', icon: '🪨', tip: '10–19: Vật lý' },
  { num: '17', word: 'Chuyển động', icon: '🏃', tip: '10–19: Vật lý' },
  { num: '18', word: 'Trọng lực', icon: '⚖️', tip: '10–19: Vật lý' },
  { num: '19', word: 'Thời gian', icon: '⏱️', tip: '10–19: Vật lý' },

  // Nhóm 20–29 = Hóa học 🧪
  { num: '20', word: 'Ống nghiệm', icon: '🧪', tip: '20–29: Hóa học' },
  { num: '21', word: 'Bình hóa học', icon: '⚗️', tip: '20–29: Hóa học' },
  { num: '22', word: 'Phân tử', icon: '🧬', tip: '20–29: Hóa học' },
  { num: '23', word: 'Nguyên tố', icon: '⚛️', tip: '20–29: Hóa học' },
  { num: '24', word: 'Kính hiển vi', icon: '🔬', tip: '20–29: Hóa học' },
  { num: '25', word: 'Nước', icon: '💧', tip: '20–29: Hóa học' },
  { num: '26', word: 'Muối', icon: '🧂', tip: '20–29: Hóa học' },
  { num: '27', word: 'Kim loại', icon: '🧱', tip: '20–29: Hóa học' },
  { num: '28', word: 'Tinh thể', icon: '💎', tip: '20–29: Hóa học' },
  { num: '29', word: 'Phản ứng hóa học', icon: '🧯', tip: '20–29: Hóa học' },

  // Nhóm 30–39 = Sinh học 🧬
  { num: '30', word: 'DNA', icon: '🧬', tip: '30–39: Sinh học' },
  { num: '31', word: 'Vi khuẩn', icon: '🦠', tip: '30–39: Sinh học' },
  { num: '32', word: 'Virus', icon: '🦠', tip: '30–39: Sinh học' },
  { num: '33', word: 'Tế bào', icon: '🧫', tip: '30–39: Sinh học' },
  { num: '34', word: 'Tim', icon: '🫀', tip: '30–39: Sinh học' },
  { num: '35', word: 'Não', icon: '🧠', tip: '30–39: Sinh học' },
  { num: '36', word: 'Phổi', icon: '🫁', tip: '30–39: Sinh học' },
  { num: '37', word: 'Thực vật', icon: '🌱', tip: '30–39: Sinh học' },
  { num: '38', word: 'Động vật', icon: '🐾', tip: '30–39: Sinh học' },
  { num: '39', word: 'Con người', icon: '👤', tip: '30–39: Sinh học' },

  // Nhóm 40–49 = Trái Đất 🌍
  { num: '40', word: 'Núi lửa', icon: '🌋', tip: '40–49: Trái Đất' },
  { num: '41', word: 'Núi', icon: '⛰️', tip: '40–49: Trái Đất' },
  { num: '42', word: 'Biển', icon: '🌊', tip: '40–49: Trái Đất' },
  { num: '43', word: 'Sông', icon: '🏞️', tip: '40–49: Trái Đất' },
  { num: '44', word: 'Đảo', icon: '🏝️', tip: '40–49: Trái Đất' },
  { num: '45', word: 'Sa mạc', icon: '🏜️', tip: '40–49: Trái Đất' },
  { num: '46', word: 'Rừng', icon: '🌲', tip: '40–49: Trái Đất' },
  { num: '47', word: 'Băng', icon: '🧊', tip: '40–49: Trái Đất' },
  { num: '48', word: 'Lốc xoáy', icon: '🌪️', tip: '40–49: Trái Đất' },
  { num: '49', word: 'Bản đồ', icon: '🌍', tip: '40–49: Trái Đất' },

  // Nhóm 50–59 = Toán học 🔢
  { num: '50', word: 'Con số', icon: '🔢', tip: '50–59: Toán học' },
  { num: '51', word: 'Dấu cộng', icon: '➕', tip: '50–59: Toán học' },
  { num: '52', word: 'Dấu trừ', icon: '➖', tip: '50–59: Toán học' },
  { num: '53', word: 'Dấu nhân', icon: '✖️', tip: '50–59: Toán học' },
  { num: '54', word: 'Dấu chia', icon: '➗', tip: '50–59: Toán học' },
  { num: '55', word: 'Dấu bằng', icon: '🟰', tip: '50–59: Toán học' },
  { num: '56', word: 'Thước đo góc', icon: '📐', tip: '50–59: Toán học' },
  { num: '57', word: 'Tam giác', icon: '🔺', tip: '50–59: Toán học' },
  { num: '58', word: 'Hình tròn', icon: '⭕', tip: '50–59: Toán học' },
  { num: '59', word: 'Biểu đồ', icon: '📊', tip: '50–59: Toán học' },

  // Nhóm 60–69 = Công nghệ 💻
  { num: '60', word: 'Máy tính', icon: '💻', tip: '60–69: Công nghệ' },
  { num: '61', word: 'Điện thoại', icon: '📱', tip: '60–69: Công nghệ' },
  { num: '62', word: 'Robot', icon: '🤖', tip: '60–69: Công nghệ' },
  { num: '63', word: 'Bánh răng', icon: '⚙️', tip: '60–69: Công nghệ' },
  { num: '64', word: 'Pin', icon: '🔋', tip: '60–69: Công nghệ' },
  { num: '65', word: 'Phích cắm điện', icon: '🔌', tip: '60–69: Công nghệ' },
  { num: '66', word: 'Màn hình', icon: '🖥️', tip: '60–69: Công nghệ' },
  { num: '67', word: 'Bàn phím', icon: '⌨️', tip: '60–69: Công nghệ' },
  { num: '68', word: 'Máy in', icon: '🖨️', tip: '60–69: Công nghệ' },
  { num: '69', word: 'Máy bay không người lái', icon: '🚁', tip: '60–69: Công nghệ' },

  // Nhóm 70–79 = Năng lượng ⚡
  { num: '70', word: 'Ngọn lửa', icon: '🔥', tip: '70–79: Năng lượng' },
  { num: '71', word: 'Tia sét', icon: '⚡', tip: '70–79: Năng lượng' },
  { num: '72', word: 'Tấm pin mặt trời', icon: '☀️', tip: '70–79: Năng lượng' },
  { num: '73', word: 'Tuabin gió', icon: '🌬️', tip: '70–79: Năng lượng' },
  { num: '74', word: 'Thác nước', icon: '💧', tip: '70–79: Năng lượng' },
  { num: '75', word: 'Khúc củi', icon: '🪵', tip: '70–79: Năng lượng' },
  { num: '76', word: 'Thùng dầu', icon: '🛢️', tip: '70–79: Năng lượng' },
  { num: '77', word: 'Than đá', icon: '🪨', tip: '70–79: Năng lượng' },
  { num: '78', word: 'Lò phản ứng hạt nhân', icon: '☢️', tip: '70–79: Năng lượng' },
  { num: '79', word: 'Đèn dầu', icon: '🪔', tip: '70–79: Năng lượng' },

  // Nhóm 80–89 = Không gian 🚀
  { num: '80', word: 'Phi hành gia', icon: '👨‍🚀', tip: '80–89: Không gian' },
  { num: '81', word: 'Bộ đồ vũ trụ', icon: '🧑‍🚀', tip: '80–89: Không gian' },
  { num: '82', word: 'Đĩa bay', icon: '🛸', tip: '80–89: Không gian' },
  { num: '83', word: 'Sao băng', icon: '🌠', tip: '80–89: Không gian' },
  { num: '84', word: 'Sao Thổ có vành đai', icon: '🪐', tip: '80–89: Không gian' },
  { num: '85', word: 'Nguyệt thực', icon: '🌑', tip: '80–89: Không gian' },
  { num: '86', word: 'Nhật thực', icon: '🌘', tip: '80–89: Không gian' },
  { num: '87', word: 'Trạm vũ trụ', icon: '🛰️', tip: '80–89: Không gian' },
  { num: '88', word: 'Kính thiên văn không gian', icon: '🔭', tip: '80–89: Không gian' },
  { num: '89', word: 'Tinh vân', icon: '🌌', tip: '80–89: Không gian' },

  // Nhóm 90–99 = Quy luật tự nhiên 🌿
  { num: '90', word: 'Cầu vồng', icon: '🌈', tip: '90–99: Tự nhiên' },
  { num: '91', word: 'Bông tuyết', icon: '❄️', tip: '90–99: Tự nhiên' },
  { num: '92', word: 'Đám mây mưa', icon: '🌧️', tip: '90–99: Tự nhiên' },
  { num: '93', word: 'Sóng thần', icon: '🌊', tip: '90–99: Tự nhiên' },
  { num: '94', word: 'Lốc xoáy', icon: '🌪️', tip: '90–99: Tự nhiên' },
  { num: '95', word: 'Động đất', icon: '🌋', tip: '90–99: Tự nhiên' },
  { num: '96', word: 'Hạt giống nảy mầm', icon: '🌱', tip: '90–99: Tự nhiên' },
  { num: '97', word: 'Lá rụng', icon: '🍂', tip: '90–99: Tự nhiên' },
  { num: '98', word: 'Thủy triều', icon: '🌊', tip: '90–99: Tự nhiên' },
  { num: '99', word: 'Chu kỳ ngày và đêm', icon: '🌍', tip: '90–99: Tự nhiên' }
];

// ==========================================
// 4. DATA REPOSITORY: SRS FLASHCARDS
// ==========================================
const DEFAULT_FLASHCARDS = [
  {
    category: 'SIÊU TRÍ NHỚ',
    question: 'Phương pháp Cung Điện Ký Ức (Method of Loci) vận dụng cơ chế sinh học nào của não bộ?',
    answer: 'Vận dụng vùng hồi hải mã (Hippocampus) chuyên trách trí nhớ không gian và cảm xúc, giúp lưu trữ dữ liệu trừu tượng vào các vị trí vật lý cụ thể.'
  },
  {
    category: 'SIÊU TRÍ NHỚ',
    question: 'Tại sao lại cần chuyển các con số thành hình ảnh theo Major System?',
    answer: 'Vì bán cầu não phải ghi nhớ hình ảnh, màu sắc và cảm xúc nhanh gấp hàng trăm lần so với các ký tự số trừu tượng của bán cầu não trái.'
  },
  {
    category: 'KHOA HỌC NÃO BỘ',
    question: 'Đường cong quên lãng Ebbinghaus chỉ ra điều gì sau 24 giờ nếu không ôn tập?',
    answer: 'Con người có thể quên tới 70-75% lượng thông tin mới tiếp nhận nếu không có chu kỳ ôn tập ngắt quãng (Spaced Repetition).'
  },
  {
    category: 'SIÊU TRÍ TUỆ',
    question: 'Bản chất 4 bước của Kỹ thuật Feynman là gì?',
    answer: '1. Chọn chủ đề -> 2. Giải thích cho đứa trẻ 10 tuổi -> 3. Tìm lỗ hổng hiểu biết rồi đọc lại tài liệu -> 4. Tinh giản và dùng hình ảnh ẩn dụ.'
  },
  {
    category: 'SIÊU TRÍ TUỆ',
    question: 'Tư duy Nguyên lý Đầu tiên (First Principles) khác gì với Tư duy Loại suy (Analogy)?',
    answer: 'Tư duy loại suy là sao chép cách người khác đã làm. Tư duy nguyên lý đầu tiên phân rã vấn đề về bản chất vật lý/chân lý cơ bản nhất rồi tái lập lại giải pháp mới.'
  },
  {
    category: 'TƯ DUY ĐỈNH CAO',
    question: 'Tư duy Đảo ngược (Inversion Thinking) giúp giải quyết vấn đề như thế nào?',
    answer: 'Thay vì nghĩ cách để thành công, hãy liệt kê mọi cách chắc chắn dẫn đến thất bại thảm hại, sau đó tránh xa tất cả những cạm bẫy đó.'
  },
  {
    category: 'NĂNG SUẤT NÃO BỘ',
    question: 'Hiện tượng "Dư lượng chú ý" (Attention Residue) là gì?',
    answer: 'Khi bạn chuyển đổi giữa các tác vụ (ví dụ liếc xem tin nhắn điện thoại), một phần dung lượng nhận thức của não bộ vẫn bị kẹt lại ở việc cũ, làm giảm sút năng suất đến 20 phút sau đó.'
  },
  {
    category: 'MÔ HÌNH TƯ DUY',
    question: 'Vòng lặp OODA gồm 4 giai đoạn nào?',
    answer: 'Observe (Quan sát) -> Orient (Định hướng/Lọc qua mô hình tinh thần) -> Decide (Quyết định dứt khoát) -> Act (Hành động ngay lập tức).'
  }
];

// ==========================================
// 5. DATA REPOSITORY: 30-DAY MASTER CHALLENGE
// ==========================================
const ROADMAP_30_DAYS = [
  { day: 1, title: 'Kiến Tạo Cung Điện Đầu Tiên', desc: 'Chọn phòng ngủ của bạn, xác định đúng 5 trạm mốc (Loci) theo chiều kim đồng hồ.' },
  { day: 2, title: 'Làm Chủ 10 Số Đầu (00 - 09)', desc: 'Học thuộc hình ảnh của 10 con số từ 00 đến 09 trong bảng Major System.' },
  { day: 3, title: 'Thử Thách Nhớ 10 Món Siêu Thị', desc: 'Dùng Cung Điện Ký Ức ngày 1 để nhớ danh sách 10 món đồ mà không cần nhìn sổ.' },
  { day: 4, title: 'Làm Chủ Số 10 - 19', desc: 'Thuộc lòng hình ảnh trực quan của các số từ 10 đến 19.' },
  { day: 5, title: 'Thực Hành Kỹ Thuật Feynman', desc: 'Chọn một khái niệm phức tạp bạn vừa học và giải thích nó cho một người bạn hoặc tự ghi âm.' },
  { day: 6, title: 'Làm Chủ Số 20 - 29', desc: 'Nhớ 10 hình ảnh: Nồi cơm điện (20), Nến (21), Thiên nga (22)...' },
  { day: 7, title: 'Ôn Tập Ngắt Quãng Lần 1 (SRS)', desc: 'Ôn lại toàn bộ 30 số đầu tiên và cung điện phòng ngủ của tuần 1.' },
  { day: 8, title: 'Mở Rộng Cung Điện: Cả Ngôi Nhà', desc: 'Tạo thêm 10 trạm mốc ở phòng khách và phòng bếp (Tổng cộng 15 trạm).' },
  { day: 9, title: 'Làm Chủ Số 30 - 39', desc: 'Thuộc hình ảnh từ Mèo (30), Mắt kính (31), Mỏ neo (32)...' },
  { day: 10, title: 'Áp Dụng Tư Duy Đảo Ngược', desc: 'Viết ra 5 thói quen đang phá hủy trí nhớ và sự tập trung của bạn, rồi loại bỏ 1 thói quen ngay hôm nay.' },
  { day: 11, title: 'Làm Chủ Số 40 - 49', desc: 'Nhớ hình ảnh: Rùa biển (40), Răng cá mập (41), Rắn hổ mang (42)...' },
  { day: 12, title: 'Thử Thách Nhớ Số Điện Thoại', desc: 'Mã hóa số điện thoại của người thân quan trọng thành 3 hình ảnh liên hoàn.' },
  { day: 13, title: 'Làm Chủ Số 50 - 59', desc: 'Nhớ: Lạc đà (50), Lựu đạn (51), Lông vũ (52), Lá cờ (54)...' },
  { day: 14, title: 'Ôn Tập Tổng Kết 2 Tuần', desc: 'Luyện tập chế độ "Nhớ Số Ngẫu Nhiên" 8 số trên ứng dụng đạt điểm tuyệt đối.' },
  { day: 15, title: 'Cung Điện Tuyến Đường Đi Làm', desc: 'Thiết lập 10 trạm mốc dọc trên con đường từ nhà đến nơi làm việc/trường học.' },
  { day: 16, title: 'Làm Chủ Số 60 - 69', desc: 'Nhớ: Chổi (60), Chuột (61), Chó cảnh (62), Chuối vàng (65)...' },
  { day: 17, title: 'Thực Hành Deep Work 90 Phút', desc: 'Tắt toàn bộ thông báo điện thoại, tập trung học hoặc làm việc sâu đúng 90 phút.' },
  { day: 18, title: 'Làm Chủ Số 70 - 79', desc: 'Nhớ: Kính râm (70), Kim tự tháp (71), Kẹo mút (73), Khủng long (75)...' },
  { day: 19, title: 'Nhớ Danh Sách 15 Từ Ngẫu Nhiên', desc: 'Vào tab Luyện Tập, vượt qua thử thách 10 từ và đạt 10/10 điểm.' },
  { day: 20, title: 'Làm Chủ Số 80 - 89', desc: 'Nhớ: Vỏ ốc (80), Vịt cao su (81), Voi ma mút (82), Vương miện (83)...' },
  { day: 21, title: 'Xây Dựng Cấu Trúc Second Brain', desc: 'Tạo 4 thư mục P.A.R.A trên máy tính hoặc ứng dụng ghi chú của bạn.' },
  { day: 22, title: 'Làm Chủ 10 Số Cuối Cùng (90 - 99)', desc: 'Hoàn thành 100 con số: Bánh sinh nhật (90), Bút máy (91), Bong bóng (99)!' },
  { day: 23, title: 'Bắn Tỉa Phản Xạ Số 00-99', desc: 'Lướt ngẫu nhiên 20 số trong tab Tra Mã Số và đọc tên hình ảnh trong 1 giây.' },
  { day: 24, title: 'Tư Duy Nguyên Lý Đầu Tiên', desc: 'Áp dụng vào 1 bài toán bế tắc trong công việc: phân rã thành sự thật cơ bản nhất.' },
  { day: 25, title: 'Thử Thách Nhớ 12 Con Số Ngẫu Nhiên', desc: 'Dùng phòng luyện tập, nhớ dãy 12 số và nhập lại chính xác 100%.' },
  { day: 26, title: 'Mã Hóa Ngày Tháng Lịch Sử', desc: 'Chọn 5 sự kiện lịch sử hoặc ngày sinh nhật quan trọng và mã hóa thành hình ảnh.' },
  { day: 27, title: 'Vòng Lặp OODA Trong Thực Tế', desc: 'Quan sát và đưa ra quyết định nhanh cho 3 tình huống bất ngờ trong ngày.' },
  { day: 28, title: 'Thử Thách Nhớ Bộ Bài Tây (Tùy Chọn)', desc: 'Tập mã hóa 10 lá bài đầu tiên theo chất và số thành câu chuyện liên hoàn.' },
  { day: 29, title: 'Thử Thách 20 Chữ Số Master', desc: 'Chinh phục mức cao nhất 20 số ngẫu nhiên trong phòng luyện tập.' },
  { day: 30, title: 'Tốt Nghiệp Não Bộ Siêu Đẳng', desc: 'Xem lại hành trình 30 ngày: Bạn đã sở hữu cung điện ký ức và kho 100 hình ảnh phản xạ!' }
];

// ==========================================
// 6. APPLICATION STATE & SOUND ENGINE
// ==========================================
let currentTab = 'overview';
let soundEnabled = true;
let currentFlashcardIdx = 0;
let isCardFlipped = false;
let userFlashcards = [...DEFAULT_FLASHCARDS];

// Sound Synth (Web Audio API - No external dependencies)
let audioCtx = null;
function playSound(type) {
  if (!soundEnabled) return;
  try {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);

    const now = audioCtx.currentTime;

    if (type === 'click') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(600, now);
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
      osc.start(now);
      osc.stop(now + 0.08);
    } else if (type === 'success') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'error') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.setValueAtTime(160, now + 0.1);
      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.25);
      osc.start(now);
      osc.stop(now + 0.25);
    } else if (type === 'flip') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.exponentialRampToValueAtTime(800, now + 0.1);
      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);
      osc.start(now);
      osc.stop(now + 0.1);
    }
  } catch (e) {
    console.warn('Audio not available:', e);
  }
}

function toggleAudio() {
  soundEnabled = !soundEnabled;
  const icon = document.getElementById('soundIcon');
  if (soundEnabled) {
    icon.setAttribute('data-lucide', 'volume-2');
    playSound('click');
  } else {
    icon.setAttribute('data-lucide', 'volume-x');
  }
  lucide.createIcons();
}

// ==========================================
// 7. TAB NAVIGATION
// ==========================================
function switchTab(tabId) {
  currentTab = tabId;
  playSound('click');

  // Hide all contents
  document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
  document.querySelectorAll('.tab-content').forEach(el => el.classList.remove('block'));

  // Show active tab
  const target = document.getElementById(`tab-${tabId}`);
  if (target) {
    target.classList.remove('hidden');
    target.classList.add('block');
  }

  if (tabId === 'subjects') {
    renderSubjectsGrid();
    updateProgressDashboard();
    updateOverviewPhiloMetrics();
    renderPhilosophyView();
  }

  if (tabId === 'chinese' && typeof initChineseHub === 'function') {
    initChineseHub();
  }

  // Update desktop navigation active states
  document.querySelectorAll('.nav-tab').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Update mobile nav states
  document.querySelectorAll('.mobile-nav-btn').forEach(btn => {
    if (btn.dataset.tab === tabId) {
      btn.classList.remove('text-slate-400');
      btn.classList.add('text-brand-400');
    } else {
      btn.classList.add('text-slate-400');
      btn.classList.remove('text-brand-400');
    }
  });

  // Scroll to top of window smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 8. RENDER METHOD CARDS & POPUP
// ==========================================
function renderMemoryCards() {
  const container = document.getElementById('memoryMethodsList');
  if (!container) return;

  container.innerHTML = MEMORY_METHODS.map(m => `
    <div class="rounded-2xl bg-cardBg border border-slate-800 p-6 flex flex-col justify-between hover:border-amber-500/40 transition-all hover:scale-[1.01] group cursor-pointer shadow-lg" onclick="openDetailModal('memory', '${m.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${m.color} text-white flex items-center justify-center shadow-md">
            <i data-lucide="${m.icon}" class="w-6 h-6"></i>
          </div>
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${m.category}</span>
        </div>
        <h3 class="text-lg font-bold text-white group-hover:text-amber-300 transition-colors mb-1">${m.title}</h3>
        <p class="text-xs text-amber-400/90 font-medium mb-3">${m.subtitle}</p>
        <p class="text-slate-400 text-xs leading-relaxed line-clamp-3">${m.desc}</p>
      </div>
      <div class="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400">
        <span>Chi tiết phương pháp & ví dụ</span>
        <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  `).join('');
}

function renderIntelligenceCards() {
  const container = document.getElementById('intelligenceList');
  if (!container) return;

  container.innerHTML = INTELLIGENCE_MODELS.map(m => `
    <div class="rounded-2xl bg-cardBg border border-slate-800 p-6 flex flex-col justify-between hover:border-cyan-500/40 transition-all hover:scale-[1.01] group cursor-pointer shadow-lg" onclick="openDetailModal('intelligence', '${m.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-tr ${m.color} text-white flex items-center justify-center shadow-md">
            <i data-lucide="${m.icon}" class="w-6 h-6"></i>
          </div>
          <span class="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">${m.category}</span>
        </div>
        <h3 class="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-1">${m.title}</h3>
        <p class="text-xs text-cyan-400/90 font-medium mb-3">${m.subtitle}</p>
        <p class="text-slate-400 text-xs leading-relaxed line-clamp-3">${m.desc}</p>
      </div>
      <div class="pt-5 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400">
        <span>Xem nguyên lý & bước làm</span>
        <i data-lucide="chevron-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
      </div>
    </div>
  `).join('');
}

function openDetailModal(type, id) {
  playSound('click');
  const item = (type === 'memory') 
    ? MEMORY_METHODS.find(m => m.id === id)
    : INTELLIGENCE_MODELS.find(m => m.id === id);

  if (!item) return;

  document.getElementById('modalTitle').textContent = item.title;
  document.getElementById('modalCategory').textContent = `${item.category} • ${item.subtitle}`;
  document.getElementById('modalBody').innerHTML = item.content;

  const iconContainer = document.getElementById('modalIconContainer');
  iconContainer.className = `w-10 h-10 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white`;
  iconContainer.innerHTML = `<i data-lucide="${item.icon}" class="w-5 h-5"></i>`;

  const modal = document.getElementById('detailModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeModal() {
  playSound('click');
  const modal = document.getElementById('detailModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

// ==========================================
// 9. MAJOR SYSTEM NUMBER GRID & FILTER
// ==========================================
let currentMajorCategory = 'all';

function renderMajorGrid() {
  const container = document.getElementById('majorNumberGrid');
  if (!container) return;

  const query = (document.getElementById('majorSearchInput')?.value || '').toLowerCase().trim();

  let filtered = MAJOR_SYSTEM_DICTIONARY.filter(item => {
    // category filter
    const val = parseInt(item.num, 10);
    if (currentMajorCategory !== 'all') {
      const [start, end] = currentMajorCategory.split('-').map(n => parseInt(n, 10));
      if (val < start || val > end) return false;
    }

    // search filter
    if (query) {
      return item.num.includes(query) || 
             item.word.toLowerCase().includes(query) || 
             item.tip.toLowerCase().includes(query);
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-12 text-center text-slate-500 text-sm">
        Không tìm thấy số hoặc hình ảnh khớp với từ khóa "${query}".
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => `
    <div class="p-4 rounded-2xl bg-cardBg border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-800/60 transition-all flex items-center gap-3 group">
      <div class="w-12 h-12 rounded-xl bg-slate-900 border border-slate-700/80 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform shadow-inner">
        ${item.icon}
      </div>
      <div class="min-w-0">
        <div class="flex items-center gap-1.5">
          <span class="font-mono font-black text-lg text-emerald-400">${item.num}</span>
        </div>
        <div class="text-xs font-bold text-white truncate">${item.word}</div>
        <div class="text-[10px] text-slate-400 font-mono mt-0.5 truncate">${item.tip}</div>
      </div>
    </div>
  `).join('');
}

function filterMajorNumbers() {
  renderMajorGrid();
}

function filterMajorCategory(cat) {
  playSound('click');
  currentMajorCategory = cat;
  document.querySelectorAll('.major-filter-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  event.target.classList.add('active');
  renderMajorGrid();
}

// ==========================================
// 10. GAME 1: NUMBER RECALL ARENA
// ==========================================
let chosenNumberLen = 4;
let targetNumberSequence = '';
let numberTimerInterval = null;
let numberTimeRemaining = 10;

function switchGameMode(mode) {
  playSound('click');
  const panels = ['number', 'words', 'flashcards'];
  panels.forEach(p => {
    const el = document.getElementById(`game-${p}-panel`);
    const btn = document.getElementById(`btnGame${p.charAt(0).toUpperCase() + p.slice(1)}`);
    if (p === mode) {
      el.classList.remove('hidden');
      btn.classList.add('active', 'bg-brand-600', 'text-white');
      btn.classList.remove('bg-slate-800', 'text-slate-300');
    } else {
      el.classList.add('hidden');
      btn.classList.remove('active', 'bg-brand-600', 'text-white');
      btn.classList.add('bg-slate-800', 'text-slate-300');
    }
  });
}

function setNumberLength(len) {
  playSound('click');
  chosenNumberLen = len;
  document.querySelectorAll('.num-len-btn').forEach(btn => {
    if (parseInt(btn.dataset.len) === len) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  // Calculate recommended timer
  let secs = len * 2;
  if (len === 20) secs = 30;
  document.getElementById('numberTimerVal').textContent = `${secs}s`;
}

function startNumberGame() {
  playSound('click');
  // Generate random digits
  let seq = '';
  for (let i = 0; i < chosenNumberLen; i++) {
    seq += Math.floor(Math.random() * 10).toString();
  }
  targetNumberSequence = seq;

  // Set timer based on difficulty
  numberTimeRemaining = chosenNumberLen * 2;
  if (chosenNumberLen === 20) numberTimeRemaining = 35;
  const totalTime = numberTimeRemaining;

  // UI state
  document.getElementById('numberGameSetup').classList.add('hidden');
  document.getElementById('numberGameMemorize').classList.remove('hidden');
  document.getElementById('numberGameRecall').classList.add('hidden');
  document.getElementById('numberGameResult').classList.add('hidden');

  // Format sequence in chunks of 2 for easy Major System visualization
  let chunked = '';
  for (let i = 0; i < seq.length; i += 2) {
    chunked += seq.substring(i, i + 2) + ' ';
  }
  document.getElementById('displayNumberSequence').textContent = chunked.trim();

  const progressBar = document.getElementById('numberTimeProgress');
  progressBar.style.width = '100%';

  clearInterval(numberTimerInterval);
  numberTimerInterval = setInterval(() => {
    numberTimeRemaining--;
    const percent = (numberTimeRemaining / totalTime) * 100;
    progressBar.style.width = `${percent}%`;

    if (numberTimeRemaining <= 0) {
      clearInterval(numberTimerInterval);
      finishMemorizeEarly();
    }
  }, 1000);
}

function finishMemorizeEarly() {
  clearInterval(numberTimerInterval);
  playSound('click');
  document.getElementById('numberGameMemorize').classList.add('hidden');
  document.getElementById('numberGameRecall').classList.remove('hidden');

  const input = document.getElementById('numberRecallInput');
  input.value = '';
  input.focus();
}

function submitNumberRecall() {
  const userInput = document.getElementById('numberRecallInput').value.replace(/\s+/g, '');
  const isCorrect = userInput === targetNumberSequence;

  document.getElementById('numberGameRecall').classList.add('hidden');
  const resultPanel = document.getElementById('numberGameResult');
  resultPanel.classList.remove('hidden');

  const icon = document.getElementById('numberResultIcon');
  const title = document.getElementById('numberResultTitle');
  const details = document.getElementById('numberResultDetails');

  if (isCorrect) {
    playSound('success');
    icon.textContent = '🎉';
    icon.className = 'w-16 h-16 mx-auto rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-3xl';
    title.textContent = 'Chính Xác 100%! Trí Não Siêu Đẳng!';
  } else {
    playSound('error');
    icon.textContent = '⚡';
    icon.className = 'w-16 h-16 mx-auto rounded-full bg-rose-500/20 text-rose-400 flex items-center justify-center text-3xl';
    title.textContent = 'Chưa Hoàn Toàn Chính Xác!';
  }

  // Decompose pairs into Major System hints
  let breakdownHtml = `
    <div class="mb-2"><strong>Dãy số gốc:</strong> <span class="font-mono text-amber-300 font-bold">${targetNumberSequence}</span></div>
    <div class="mb-3"><strong>Bạn đã nhập:</strong> <span class="font-mono ${isCorrect ? 'text-emerald-400' : 'text-rose-400'} font-bold">${userInput || '(Trống)'}</span></div>
    <div class="border-t border-slate-800 pt-2 text-xs text-slate-400">
      <div class="font-bold text-slate-300 mb-1">💡 Gợi ý chuỗi hình ảnh liên tưởng (Major System):</div>
      <div class="flex flex-wrap gap-2 justify-center">
  `;

  for (let i = 0; i < targetNumberSequence.length; i += 2) {
    const pair = targetNumberSequence.substring(i, i + 2);
    const item = MAJOR_SYSTEM_DICTIONARY.find(d => d.num === pair);
    if (item) {
      breakdownHtml += `
        <span class="px-2.5 py-1 bg-slate-800 border border-slate-700 rounded-lg text-emerald-300 flex items-center gap-1">
          <span class="font-mono font-bold">${pair}</span>: ${item.icon} ${item.word}
        </span>
      `;
    }
  }
  breakdownHtml += `</div></div>`;
  details.innerHTML = breakdownHtml;
}

function resetNumberGame() {
  playSound('click');
  document.getElementById('numberGameSetup').classList.remove('hidden');
  document.getElementById('numberGameMemorize').classList.add('hidden');
  document.getElementById('numberGameRecall').classList.add('hidden');
  document.getElementById('numberGameResult').classList.add('hidden');
}

// ==========================================
// 11. GAME 2: MEMORY PALACE (10 WORDS)
// ==========================================
const WORD_BANK = [
  'Con voi ma mút', 'Quả bóng bay tím', 'Chiếc tivi cổ', 'Cái xô nước đá', 'Bó hoa hướng dương',
  'Ngọn đuốc rực lửa', 'Cây đàn ghi-ta', 'Ổ bánh mì nướng', 'Con cá heo xanh', 'Chiếc nhẫn kim cương',
  'Khẩu súng nước', 'Cái đồng hồ cát', 'Cặp kính cận', 'Đôi giày thể thao', 'Bình trà nóng',
  'Bộ bài tây vàng', 'Tảng băng trôi', 'Cây chổi bay', 'Vương miện công chúa', 'Bức tượng đá',
  'Túi tiền xu', 'Cái gương thần', 'Quả chuối phát sáng', 'Bình chữa cháy', 'Khăn quàng len đỏ'
];

let currentWordList = [];

function startWordGame() {
  playSound('click');
  // Pick 10 unique words
  const shuffled = [...WORD_BANK].sort(() => 0.5 - Math.random());
  currentWordList = shuffled.slice(0, 10);

  document.getElementById('wordsGameSetup').classList.add('hidden');
  document.getElementById('wordsGameMemorize').classList.remove('hidden');
  document.getElementById('wordsGameRecall').classList.add('hidden');
  document.getElementById('wordsGameResult').classList.add('hidden');

  const grid = document.getElementById('wordsGridList');
  grid.innerHTML = currentWordList.map((w, idx) => `
    <div class="p-3 bg-slate-900 border border-slate-800 rounded-xl flex items-center gap-3">
      <span class="w-6 h-6 rounded-full bg-purple-600/30 text-purple-300 text-xs font-bold flex items-center justify-center">${idx + 1}</span>
      <span class="font-medium text-white text-sm">${w}</span>
    </div>
  `).join('');
}

function finishWordsMemorize() {
  playSound('click');
  document.getElementById('wordsGameMemorize').classList.add('hidden');
  document.getElementById('wordsGameRecall').classList.remove('hidden');

  const inputsContainer = document.getElementById('wordsRecallInputs');
  inputsContainer.innerHTML = currentWordList.map((_, idx) => `
    <div class="flex items-center gap-2">
      <span class="w-6 text-xs font-bold text-slate-400 text-right">${idx + 1}.</span>
      <input type="text" id="wordInput_${idx}" placeholder="Từ thứ ${idx + 1}..." class="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-purple-500">
    </div>
  `).join('');
}

function submitWordsRecall() {
  let score = 0;
  let breakdown = '';

  for (let i = 0; i < currentWordList.length; i++) {
    const userVal = (document.getElementById(`wordInput_${i}`)?.value || '').trim().toLowerCase();
    const targetVal = currentWordList[i].toLowerCase();
    const isCorrect = userVal && targetVal.includes(userVal);

    if (isCorrect) score++;

    breakdown += `
      <div class="flex items-center justify-between text-xs py-1 border-b border-slate-800">
        <div><strong class="text-slate-400">${i + 1}.</strong> Gốc: <span class="text-white font-medium">${currentWordList[i]}</span></div>
        <div class="${isCorrect ? 'text-emerald-400 font-bold' : 'text-rose-400'}">
          ${isCorrect ? '✓ Đúng (' + userVal + ')' : '✗ Bạn điền: ' + (userVal || 'bỏ trống')}
        </div>
      </div>
    `;
  }

  document.getElementById('wordsGameRecall').classList.add('hidden');
  document.getElementById('wordsGameResult').classList.remove('hidden');

  const title = document.getElementById('wordsResultTitle');
  const details = document.getElementById('wordsResultDetails');

  if (score >= 8) {
    playSound('success');
    title.textContent = `Tuyệt Vời! Đạt ${score}/10 Điểm!`;
  } else {
    playSound('error');
    title.textContent = `Kết Quả: ${score}/10 Điểm`;
  }

  details.innerHTML = breakdown;
}

function resetWordsGame() {
  playSound('click');
  document.getElementById('wordsGameSetup').classList.remove('hidden');
  document.getElementById('wordsGameMemorize').classList.add('hidden');
  document.getElementById('wordsGameRecall').classList.add('hidden');
  document.getElementById('wordsGameResult').classList.add('hidden');
}

// ==========================================
// 12. GAME 3: SRS FLASHCARDS
// ==========================================
function updateFlashcardUI() {
  const card = userFlashcards[currentFlashcardIdx];
  if (!card) return;

  const cardElement = document.getElementById('flashcardElement');
  const cat = document.getElementById('cardCategory');
  const content = document.getElementById('cardContentText');
  const counter = document.getElementById('flashcardCounter');

  isCardFlipped = false;
  cardElement.classList.remove('flipped');

  cat.textContent = card.category;
  content.textContent = card.question;
  counter.textContent = `${currentFlashcardIdx + 1} / ${userFlashcards.length}`;
}

function flipFlashcard() {
  playSound('flip');
  const cardElement = document.getElementById('flashcardElement');
  const content = document.getElementById('cardContentText');
  const card = userFlashcards[currentFlashcardIdx];

  isCardFlipped = !isCardFlipped;

  if (isCardFlipped) {
    cardElement.classList.add('flipped');
    setTimeout(() => {
      content.textContent = card.answer;
      content.classList.add('text-indigo-200');
    }, 150);
  } else {
    cardElement.classList.remove('flipped');
    setTimeout(() => {
      content.textContent = card.question;
      content.classList.remove('text-indigo-200');
    }, 150);
  }
}

function rateFlashcard(rating) {
  if (rating === 'easy') playSound('success');
  else if (rating === 'hard') playSound('error');
  else playSound('click');

  // Next card
  nextFlashcard();
}

function nextFlashcard() {
  currentFlashcardIdx = (currentFlashcardIdx + 1) % userFlashcards.length;
  updateFlashcardUI();
}

function prevFlashcard() {
  playSound('click');
  currentFlashcardIdx = (currentFlashcardIdx - 1 + userFlashcards.length) % userFlashcards.length;
  updateFlashcardUI();
}

// ==========================================
// 13. 30-DAY ROADMAP & LOCALSTORAGE
// ==========================================
const ROADMAP_STORAGE_KEY = 'supermind_roadmap_progress_v1';

function getRoadmapProgress() {
  try {
    const raw = localStorage.getItem(ROADMAP_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function toggleRoadmapDay(day) {
  playSound('click');
  const current = getRoadmapProgress();
  current[day] = !current[day];
  try {
    localStorage.setItem(ROADMAP_STORAGE_KEY, JSON.stringify(current));
  } catch (e) {}

  renderRoadmap();
  updateProgressMetrics();
}

function resetRoadmapProgress() {
  if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ 30 ngày không?')) {
    playSound('click');
    localStorage.removeItem(ROADMAP_STORAGE_KEY);
    renderRoadmap();
    updateProgressMetrics();
  }
}

function renderRoadmap() {
  const container = document.getElementById('roadmapDaysGrid');
  if (!container) return;

  const progress = getRoadmapProgress();

  container.innerHTML = ROADMAP_30_DAYS.map(item => {
    const done = !!progress[item.day];
    return `
      <div onclick="toggleRoadmapDay(${item.day})" class="roadmap-item ${done ? 'completed' : ''} p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-indigo-500/40 cursor-pointer flex flex-col justify-between group">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold px-2.5 py-0.5 rounded-full ${done ? 'bg-emerald-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-300 border border-slate-700'}">
              Ngày ${item.day}
            </span>
            <div class="w-6 h-6 rounded-full border ${done ? 'bg-emerald-500 border-emerald-400 text-slate-950' : 'border-slate-600 group-hover:border-indigo-400 text-transparent'} flex items-center justify-center text-xs transition-colors">
              <i data-lucide="check" class="w-3.5 h-3.5 ${done ? 'block' : 'hidden'}"></i>
            </div>
          </div>
          <h4 class="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors mb-1.5 ${done ? 'line-through text-slate-400' : ''}">${item.title}</h4>
          <p class="text-xs text-slate-400 leading-relaxed">${item.desc}</p>
        </div>
        <div class="pt-3 mt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] ${done ? 'text-emerald-400 font-bold' : 'text-slate-500'}">
          <span>${done ? 'Đã Hoàn Thành ✓' : 'Bấm để đánh dấu hoàn thành'}</span>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateProgressMetrics() {
  const progress = getRoadmapProgress();
  const completedCount = Object.values(progress).filter(Boolean).length;
  const percent = Math.round((completedCount / ROADMAP_30_DAYS.length) * 100);

  // Update Overview metrics
  const ovPercent = document.getElementById('overviewProgress');
  const ovDays = document.getElementById('overviewProgressDays');
  if (ovPercent) ovPercent.textContent = `${percent}%`;
  if (ovDays) ovDays.textContent = `${completedCount} / 30 ngày hoàn thành`;

  // Update Roadmap metrics
  const rmPercent = document.getElementById('roadmapPercentText');
  const rmDays = document.getElementById('roadmapDaysDoneText');
  const rmBar = document.getElementById('roadmapProgressBar');

  if (rmPercent) rmPercent.textContent = `${percent}%`;
  if (rmDays) rmDays.textContent = `${completedCount} / 30 ngày hoàn thành`;
  if (rmBar) rmBar.style.width = `${percent}%`;
}

// ==========================================
// 14. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderMemoryCards();
  renderIntelligenceCards();
  renderMajorGrid();
  renderRoadmap();
  updateFlashcardUI();
  updateProgressMetrics();
  initScriptureTower();
  renderSubjectsGrid();
  updateProgressDashboard();
  updateOverviewPhiloMetrics();
  renderPhilosophyView();

  if (typeof initChineseHub === 'function') {
    initChineseHub();
  }

  // Initialize Lucide icons
  lucide.createIcons();
});

// ==========================================
// 15. TÒA NHÀ KINH THÁNH 66 TẦNG (BẢN 2010)
// ==========================================

const BIBLE_66_BOOKS = [
  // Cựu Ước (Tầng 1 - 39)
  { floor: 1, name: 'Sáng Thế Ký', code: 'S', testament: 'old', chapters: 50 },
  { floor: 2, name: 'Xuất Ai Cập Ký', code: 'X', testament: 'old', chapters: 40 },
  { floor: 3, name: 'Lê-vi Ký', code: 'L', testament: 'old', chapters: 27 },
  { floor: 4, name: 'Dân Số Ký', code: 'D', testament: 'old', chapters: 36 },
  { floor: 5, name: 'Phục Truyền Luật Lệ Ký', code: 'P', testament: 'old', chapters: 34 },
  { floor: 6, name: 'Giô-suê', code: 'GS', testament: 'old', chapters: 24 },
  { floor: 7, name: 'Các Quan Xét', code: 'C', testament: 'old', chapters: 21 },
  { floor: 8, name: 'Ru-tơ', code: 'R', testament: 'old', chapters: 4 },
  { floor: 9, name: '1 Sa-mu-ên', code: '1S', testament: 'old', chapters: 31 },
  { floor: 10, name: '2 Sa-mu-ên', code: '2S', testament: 'old', chapters: 24 },
  { floor: 11, name: '1 Các Vua', code: '1V', testament: 'old', chapters: 22 },
  { floor: 12, name: '2 Các Vua', code: '2V', testament: 'old', chapters: 25 },
  { floor: 13, name: '1 Sử Ký', code: '1SK', testament: 'old', chapters: 29 },
  { floor: 14, name: '2 Sử Ký', code: '2SK', testament: 'old', chapters: 36 },
  { floor: 15, name: 'E-sơ-ra', code: 'E', testament: 'old', chapters: 10 },
  { floor: 16, name: 'Nê-hê-mi', code: 'N', testament: 'old', chapters: 13 },
  { floor: 17, name: 'Ê-xơ-tê', code: 'ET', testament: 'old', chapters: 10 },
  { floor: 18, name: 'Gióp', code: 'GP', testament: 'old', chapters: 42 },
  { floor: 19, name: 'Thi Thiên', code: 'TT', testament: 'old', chapters: 150 },
  { floor: 20, name: 'Châm Ngôn', code: 'CN', testament: 'old', chapters: 31 },
  { floor: 21, name: 'Truyền Đạo', code: 'TĐ', testament: 'old', chapters: 12 },
  { floor: 22, name: 'Nhã Ca', code: 'NC', testament: 'old', chapters: 8 },
  { floor: 23, name: 'Ê-sai', code: 'ÊS', testament: 'old', chapters: 66 },
  { floor: 24, name: 'Giê-rê-mi', code: 'GR', testament: 'old', chapters: 52 },
  { floor: 25, name: 'Ca Thương', code: 'CT', testament: 'old', chapters: 5 },
  { floor: 26, name: 'Ê-xê-chi-ên', code: 'ÊZ', testament: 'old', chapters: 48 },
  { floor: 27, name: 'Đa-ni-ên', code: 'ĐN', testament: 'old', chapters: 12 },
  { floor: 28, name: 'Ô-sê', code: 'ÔS', testament: 'old', chapters: 14 },
  { floor: 29, name: 'Giô-ên', code: 'GÊ', testament: 'old', chapters: 3 },
  { floor: 30, name: 'A-mốt', code: 'AM', testament: 'old', chapters: 9 },
  { floor: 31, name: 'Ô-ba-đia', code: 'ÔB', testament: 'old', chapters: 1 },
  { floor: 32, name: 'Giô-na', code: 'GN', testament: 'old', chapters: 4 },
  { floor: 33, name: 'Mi-chê', code: 'MC', testament: 'old', chapters: 7 },
  { floor: 34, name: 'Na-hum', code: 'NA', testament: 'old', chapters: 3 },
  { floor: 35, name: 'Ha-ba-cúc', code: 'HB', testament: 'old', chapters: 3 },
  { floor: 36, name: 'Xô-phô-ni', code: 'XP', testament: 'old', chapters: 3 },
  { floor: 37, name: 'A-ghê', code: 'AG', testament: 'old', chapters: 2 },
  { floor: 38, name: 'Xa-cha-ri', code: 'XC', testament: 'old', chapters: 14 },
  { floor: 39, name: 'Ma-la-chi', code: 'ML', testament: 'old', chapters: 4 },

  // Tân Ước (Tầng 40 - 66)
  { floor: 40, name: 'Ma-thi-ơ', code: 'MT', testament: 'new', chapters: 28 },
  { floor: 41, name: 'Mác', code: 'MC', testament: 'new', chapters: 16 },
  { floor: 42, name: 'Lu-ca', code: 'LC', testament: 'new', chapters: 24 },
  { floor: 43, name: 'Giăng', code: 'G', testament: 'new', chapters: 21 },
  { floor: 44, name: 'Công Vụ Các Sứ Đồ', code: 'CV', testament: 'new', chapters: 28 },
  { floor: 45, name: 'Rô-ma', code: 'RM', testament: 'new', chapters: 16 },
  { floor: 46, name: '1 Cô-rinh-tô', code: '1CÔ', testament: 'new', chapters: 16 },
  { floor: 47, name: '2 Cô-rinh-tô', code: '2CÔ', testament: 'new', chapters: 13 },
  { floor: 48, name: 'Ga-la-ti', code: 'GA', testament: 'new', chapters: 6 },
  { floor: 49, name: 'Ê-phê-sô', code: 'ÊP', testament: 'new', chapters: 6 },
  { floor: 50, name: 'Phi-líp', code: 'PL', testament: 'new', chapters: 4 },
  { floor: 51, name: 'Cô-lô-se', code: 'CL', testament: 'new', chapters: 4 },
  { floor: 52, name: '1 Tê-sa-lô-ni-ca', code: '1TÊ', testament: 'new', chapters: 5 },
  { floor: 53, name: '2 Tê-sa-lô-ni-ca', code: '2TÊ', testament: 'new', chapters: 3 },
  { floor: 54, name: '1 Ti-mô-thê', code: '1TI', testament: 'new', chapters: 6 },
  { floor: 55, name: '2 Ti-mô-thê', code: '2TI', testament: 'new', chapters: 4 },
  { floor: 56, name: 'Tít', code: 'TÍT', testament: 'new', chapters: 3 },
  { floor: 57, name: 'Phi-lê-môn', code: 'PM', testament: 'new', chapters: 1 },
  { floor: 58, name: 'Hê-bơ-rơ', code: 'HB', testament: 'new', chapters: 13 },
  { floor: 59, name: 'Gia-cơ', code: 'GC', testament: 'new', chapters: 5 },
  { floor: 60, name: '1 Phi-e-rơ', code: '1PR', testament: 'new', chapters: 5 },
  { floor: 61, name: '2 Phi-e-rơ', code: '2PR', testament: 'new', chapters: 3 },
  { floor: 62, name: '1 Giăng', code: '1G', testament: 'new', chapters: 5 },
  { floor: 63, name: '2 Giăng', code: '2G', testament: 'new', chapters: 1 },
  { floor: 64, name: '3 Giăng', code: '3G', testament: 'new', chapters: 1 },
  { floor: 65, name: 'Giu-đe', code: 'GĐ', testament: 'new', chapters: 1 },
  { floor: 66, name: 'Khải Huyền', code: 'KH', testament: 'new', chapters: 22 }
];

// Danh mục câu Kinh Thánh mẫu (Bản Hiệu Đính 2010 - RVV2010)
const INITIAL_SCRIPTURE_VERSES = [
  {
    "id": "v_1",
    "bookFloor": 1,
    "bookCode": "S",
    "bookName": "Sáng Thế Ký",
    "chapter": 1,
    "verse": 1,
    "keyword": "sáng tạo",
    "secondaryKeyword": "sáng tạo trời đất",
    "category": "Sáng tạo & Quyền năng",
    "text": "Ban đầu Đức Chúa Trời sáng tạo trời và đất."
  },
  {
    "id": "v_gen_1_2",
    "bookFloor": 1,
    "bookCode": "S",
    "bookName": "Sáng Thế Ký",
    "chapter": 1,
    "verse": 2,
    "keyword": "đất không có hình dạng",
    "secondaryKeyword": "trống không và bóng tối",
    "category": "Sáng tạo & Quyền năng",
    "text": "Đất không có hình dạng và trống không, bóng tối bao trùm mặt vực, và Thần của Đức Chúa Trời vận hành trên mặt nước."
  },
  {
    "id": "v_2",
    "bookFloor": 1,
    "bookCode": "S",
    "bookName": "Sáng Thế Ký",
    "chapter": 1,
    "verse": 3,
    "keyword": "ánh sáng",
    "secondaryKeyword": "phải có ánh sáng",
    "category": "Sáng tạo & Quyền năng",
    "text": "Đức Chúa Trời phán: “Phải có ánh sáng”; thì có ánh sáng."
  },
  {
    "id": "v_17",
    "bookFloor": 1,
    "bookCode": "S",
    "bookName": "Sáng Thế Ký",
    "chapter": 12,
    "verse": 2,
    "keyword": "nguồn phước",
    "secondaryKeyword": "Ta sẽ ban phước cho con",
    "category": "Giao ước & Lời hứa",
    "text": "Ta sẽ làm cho con thành một dân lớn, Ta sẽ ban phước cho con, làm rạng rỡ danh con, và con sẽ thành một nguồn phước."
  },
  {
    "id": "v_3",
    "bookFloor": 2,
    "bookCode": "X",
    "bookName": "Xuất Ai Cập Ký",
    "chapter": 3,
    "verse": 14,
    "keyword": "ĐẤNG TỰ HỮU",
    "secondaryKeyword": "Đấng Tự Hữu Hằng Hữu",
    "category": "Bản tính Đức Chúa Trời",
    "text": "Đức Chúa Trời phán với Môi-se: “TA LÀ ĐẤNG TỰ HỮU HẰNG HỮU.” Ngài lại phán: “Hãy nói với dân Y-sơ-ra-ên rằng: ‘ĐẤNG TỰ HỮU đã sai tôi đến với các anh chị em.’”"
  },
  {
    "id": "v_18",
    "bookFloor": 2,
    "bookCode": "X",
    "bookName": "Xuất Ai Cập Ký",
    "chapter": 20,
    "verse": 3,
    "keyword": "không có thần khác",
    "secondaryKeyword": "mười điều răn điều 1",
    "category": "Mười Điều Răn",
    "text": "Trước mặt Ta, con không được có các thần nào khác."
  },
  {
    "id": "v_19",
    "bookFloor": 5,
    "bookCode": "P",
    "bookName": "Phục Truyền Luật Lệ Ký",
    "chapter": 6,
    "verse": 5,
    "keyword": "hết lòng yêu mến",
    "secondaryKeyword": "hết linh hồn hết sức",
    "category": "Điều răn lớn nhất",
    "text": "Ngươi phải hết lòng, hết linh hồn, hết sức mình kính mến Giê-hô-va Đức Chúa Trời của ngươi."
  },
  {
    "id": "v_4",
    "bookFloor": 6,
    "bookCode": "GS",
    "bookName": "Giô-suê",
    "chapter": 1,
    "verse": 9,
    "keyword": "vững lòng bền chí",
    "secondaryKeyword": "mạnh dạn can đảm",
    "category": "Sức mạnh & Can đảm",
    "text": "Chẳng phải Ta đã truyền phán cho con sao? Hãy mạnh dạn, can đảm! Đừng sợ hãi, đừng nản lòng, vì Giê-hô-va Đức Chúa Trời của con sẽ ở với con mọi nơi con đi."
  },
  {
    "id": "v_20",
    "bookFloor": 6,
    "bookCode": "GS",
    "bookName": "Giô-suê",
    "chapter": 24,
    "verse": 15,
    "keyword": "tôi và gia đình tôi",
    "secondaryKeyword": "phụng sự Đức Giê-hô-va",
    "category": "Gia đình & Lòng trung thành",
    "text": "Nhưng tôi và gia đình tôi sẽ phụng sự Đức Giê-hô-va."
  },
  {
    "id": "v_21",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 1,
    "verse": 1,
    "keyword": "phước cho người",
    "secondaryKeyword": "không đi theo mưu kẻ ác",
    "category": "Phước hạnh",
    "text": "Phước cho người nào không đi theo mưu kế kẻ gian ác, không đứng trong đường tội nhân, không ngồi chung với kẻ nhạo báng."
  },
  {
    "id": "v_22",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 1,
    "verse": 2,
    "keyword": "suy ngẫm ngày đêm",
    "secondaryKeyword": "vui thích luật pháp Chúa",
    "category": "Lời Chúa",
    "text": "Nhưng vui thích về luật pháp của Đức Giê-hô-va, và suy ngẫm luật pháp ấy ngày và đêm."
  },
  {
    "id": "v_5",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 23,
    "verse": 1,
    "keyword": "người chăn",
    "secondaryKeyword": "Đấng chăn giữ tôi",
    "category": "Sự chăn dắt & Bình an",
    "text": "Đức Giê-hô-va là Đấng chăn giữ tôi; tôi sẽ chẳng thiếu thốn gì."
  },
  {
    "id": "v_23",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 27,
    "verse": 1,
    "keyword": "ánh sáng cứu rỗi",
    "secondaryKeyword": "tôi sẽ sợ ai",
    "category": "Sự bảo vệ & Can đảm",
    "text": "Đức Giê-hô-va là ánh sáng và sự cứu rỗi của tôi, tôi sẽ sợ ai? Đức Giê-hô-va là thành lũy của mạng sống tôi, tôi sẽ hãi hùng ai?"
  },
  {
    "id": "v_24",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 46,
    "verse": 1,
    "keyword": "nơi nương náu",
    "secondaryKeyword": "giúp đỡ trong gian truân",
    "category": "Nương náu & Che chở",
    "text": "Đức Chúa Trời là nơi nương náu và sức mạnh của chúng tôi, Ngài hằng sẵn sàng giúp đỡ trong cơn gian truân."
  },
  {
    "id": "v_25",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 91,
    "verse": 1,
    "keyword": "nơi kín đáo",
    "secondaryKeyword": "bóng Đấng Toàn Năng",
    "category": "Bảo vệ & Bình an",
    "text": "Người nào ngụ nơi kín đáo của Đấng Chí Cao sẽ được an nghỉ dưới bóng của Đấng Toàn Năng."
  },
  {
    "id": "v_26",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 103,
    "verse": 2,
    "keyword": "chúc tụng linh hồn",
    "secondaryKeyword": "chớ quên ân huệ Ngài",
    "category": "Tạ ơn & Ngợi khen",
    "text": "Hỡi linh hồn ta, hãy chúc tụng Đức Giê-hô-va, chớ quên các ân huệ của Ngài."
  },
  {
    "id": "v_27",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 119,
    "verse": 11,
    "keyword": "giấu Lời Chúa",
    "secondaryKeyword": "không phạm tội cùng Chúa",
    "category": "Ghi nhớ Lời Chúa",
    "text": "Con giấu lời Chúa trong lòng con, để con không phạm tội cùng Chúa."
  },
  {
    "id": "v_6",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 119,
    "verse": 105,
    "keyword": "ngọn đèn",
    "secondaryKeyword": "ngọn đèn cho chân tôi",
    "category": "Sự dẫn dắt & Chân lý",
    "text": "Lời Chúa là ngọn đèn cho chân tôi, ánh sáng cho đường lối tôi."
  },
  {
    "id": "v_28",
    "bookFloor": 19,
    "bookCode": "TT",
    "bookName": "Thi Thiên",
    "chapter": 139,
    "verse": 14,
    "keyword": "dựng nên lạ lùng",
    "secondaryKeyword": "đáng sợ và diệu kỳ",
    "category": "Phẩm giá con người",
    "text": "Con cảm tạ Chúa vì con được dựng nên một cách đáng sợ và lạ lùng. Công việc Chúa thật quá diệu kỳ, lòng con biết rõ lắm."
  },
  {
    "id": "v_29",
    "bookFloor": 20,
    "bookCode": "CN",
    "bookName": "Châm Ngôn",
    "chapter": 1,
    "verse": 7,
    "keyword": "khởi đầu tri thức",
    "secondaryKeyword": "kính sợ Đức Giê-hô-va",
    "category": "Khôn ngoan & Tri thức",
    "text": "Kính sợ Đức Giê-hô-va là khởi đầu tri thức; còn kẻ ngu muội khinh dể sự khôn ngoan và lời khuyên dạy."
  },
  {
    "id": "v_7",
    "bookFloor": 20,
    "bookCode": "CN",
    "bookName": "Châm Ngôn",
    "chapter": 3,
    "verse": 5,
    "keyword": "hết lòng tin cậy",
    "secondaryKeyword": "đừng nương cậy sự thông sáng",
    "category": "Đức tin & Phục tùng",
    "text": "Hãy hết lòng tin cậy Đức Giê-hô-va, đừng nương cậy nơi sự thông sáng của con."
  },
  {
    "id": "v_30",
    "bookFloor": 20,
    "bookCode": "CN",
    "bookName": "Châm Ngôn",
    "chapter": 4,
    "verse": 23,
    "keyword": "giữ tấm lòng",
    "secondaryKeyword": "nguồn sự sống",
    "category": "Tâm trí & Đạo đức",
    "text": "Hãy cẩn thận giữ tấm lòng của con hơn hết, vì các nguồn sự sống do nơi nó mà ra."
  },
  {
    "id": "v_31",
    "bookFloor": 20,
    "bookCode": "CN",
    "bookName": "Châm Ngôn",
    "chapter": 16,
    "verse": 3,
    "keyword": "phó thác công việc",
    "secondaryKeyword": "kế hoạch thành công",
    "category": "Mục tiêu & Công việc",
    "text": "Hãy phó thác công việc mình cho Đức Giê-hô-va, thì các kế hoạch của con sẽ được thành công."
  },
  {
    "id": "v_32",
    "bookFloor": 20,
    "bookCode": "CN",
    "bookName": "Châm Ngôn",
    "chapter": 17,
    "verse": 22,
    "keyword": "phương thuốc hay",
    "secondaryKeyword": "lòng vui mừng",
    "category": "Sức khỏe & Tâm an",
    "text": "Lòng vui mừng là phương thuốc hay, còn tinh thần suy sụp làm xương cốt khô héo."
  },
  {
    "id": "v_33",
    "bookFloor": 21,
    "bookCode": "TĐ",
    "bookName": "Truyền Đạo",
    "chapter": 3,
    "verse": 1,
    "keyword": "thời điểm định kỳ",
    "secondaryKeyword": "mọi sự dưới trời có kỳ",
    "category": "Thời gian & Cuộc đời",
    "text": "Phàm sự gì có thời điểm, mọi việc dưới trời đều có định kỳ."
  },
  {
    "id": "v_34",
    "bookFloor": 21,
    "bookCode": "TĐ",
    "bookName": "Truyền Đạo",
    "chapter": 12,
    "verse": 13,
    "keyword": "bổn phận trọn vẹn",
    "secondaryKeyword": "kính sợ và vâng giữ",
    "category": "Lẽ sống đích thực",
    "text": "Lời kết luận cho mọi điều đã nghe là: Hãy kính sợ Đức Chúa Trời và vâng giữ các điều răn Ngài, vì đó là bổn phận trọn vẹn của con người."
  },
  {
    "id": "v_35",
    "bookFloor": 23,
    "bookCode": "ÊS",
    "bookName": "Ê-sai",
    "chapter": 9,
    "verse": 5,
    "keyword": "Chúa Bình An",
    "secondaryKeyword": "một Con Trẻ sinh cho chúng ta",
    "category": "Lời tiên tri về Đấng Mê-si-a",
    "text": "Vì một Con Trẻ sinh cho chúng ta, một Con Trai ban cho chúng ta; quyền cai trị sẽ đặt trên vai Ngài. Danh Ngài là: Đấng Cố Vấn Kỳ Diệu, Đức Chúa Trời Quyền Năng, Người Cha Đời Đời, Chúa Bình An."
  },
  {
    "id": "v_8",
    "bookFloor": 23,
    "bookCode": "ÊS",
    "bookName": "Ê-sai",
    "chapter": 40,
    "verse": 31,
    "keyword": "trông đợi",
    "secondaryKeyword": "cất cánh bay cao như chim ưng",
    "category": "Sức mạnh mới",
    "text": "Nhưng ai trông đợi Đức Giê-hô-va sẽ được sức mới, cất cánh bay cao như chim ưng; chạy mà không mệt nhọc, đi mà không mòn mỏi."
  },
  {
    "id": "v_36",
    "bookFloor": 23,
    "bookCode": "ÊS",
    "bookName": "Ê-sai",
    "chapter": 41,
    "verse": 10,
    "keyword": "đừng sợ vì Ta ở cùng",
    "secondaryKeyword": "tay hữu công chính",
    "category": "Sự an ủi & Bình an",
    "text": "Đừng sợ, vì Ta ở với con; đừng kinh khiếp, vì Ta là Đức Chúa Trời của con! Ta sẽ làm cho con mạnh mẽ; phải, Ta sẽ giúp đỡ con; Ta sẽ nâng đỡ con bằng tay hữu công chính của Ta."
  },
  {
    "id": "v_37",
    "bookFloor": 23,
    "bookCode": "ÊS",
    "bookName": "Ê-sai",
    "chapter": 53,
    "verse": 5,
    "keyword": "vì tội lỗi chúng ta",
    "secondaryKeyword": "lằn đòn chữa lành",
    "category": "Sự chuộc tội",
    "text": "Nhưng Người đã vì tội lỗi chúng ta mà bị vết, vì sự gian ác chúng ta mà bị thương. Bởi sự sửa phạt Người chịu mà chúng ta được bình an, bởi lằn đòn Người mang mà chúng ta được chữa lành."
  },
  {
    "id": "v_9",
    "bookFloor": 24,
    "bookCode": "GR",
    "bookName": "Giê-rê-mi",
    "chapter": 29,
    "verse": 11,
    "keyword": "ý tưởng bình an",
    "secondaryKeyword": "tương lai và hy vọng",
    "category": "Hy vọng & Tương lai",
    "text": "Đức Giê-hô-va phán: “Vì chính Ta biết ý tưởng Ta nghĩ đối với các con, đó là ý tưởng bình an chứ không phải tai họa, để ban cho các con một tương lai và một hy vọng.”"
  },
  {
    "id": "v_38",
    "bookFloor": 24,
    "bookCode": "GR",
    "bookName": "Giê-rê-mi",
    "chapter": 33,
    "verse": 3,
    "keyword": "hãy kêu cầu Ta",
    "secondaryKeyword": "việc lớn và khó",
    "category": "Cầu nguyện",
    "text": "Hãy kêu cầu Ta, Ta sẽ trả lời con; Ta sẽ tỏ cho con những việc lớn và khó, là những việc con chưa từng biết."
  },
  {
    "id": "v_39",
    "bookFloor": 25,
    "bookCode": "CT",
    "bookName": "Ca Thương",
    "chapter": 3,
    "verse": 22,
    "keyword": "sự nhân từ chẳng dứt",
    "secondaryKeyword": "lòng thương xót không vơi",
    "category": "Sự thành tín của Chúa",
    "text": "Sự nhân từ của Đức Giê-hô-va chẳng hề dứt, lòng thương xót của Ngài không bao giờ vơi. Mỗi buổi sáng, lòng thương xót ấy lại mới luôn; sự thành tín Ngài lớn biết bao!"
  },
  {
    "id": "v_40",
    "bookFloor": 33,
    "bookCode": "MC",
    "bookName": "Mi-chê",
    "chapter": 6,
    "verse": 8,
    "keyword": "làm điều công chính",
    "secondaryKeyword": "khiêm nhường bước đi",
    "category": "Đạo đức & Công chính",
    "text": "Hỡi người! Ngài đã tỏ cho ngươi điều gì là thiện. Điều mà Đức Giê-hô-va đòi hỏi nơi ngươi là làm điều công chính, ưa sự nhân từ, và bước đi cách khiêm nhường với Đức Chúa Trời của ngươi."
  },
  {
    "id": "v_41",
    "bookFloor": 40,
    "bookCode": "MT",
    "bookName": "Ma-thi-ơ",
    "chapter": 5,
    "verse": 16,
    "keyword": "chiếu rọi ánh sáng",
    "secondaryKeyword": "thấy việc lành ca ngợi Cha",
    "category": "Sứ mạng người môn đồ",
    "text": "Cũng vậy, ánh sáng của các con phải chiếu rọi trước mặt mọi người, để họ thấy những việc lành của các con và ca ngợi Cha các con ở trên trời."
  },
  {
    "id": "v_10",
    "bookFloor": 40,
    "bookCode": "MT",
    "bookName": "Ma-thi-ơ",
    "chapter": 6,
    "verse": 33,
    "keyword": "tìm kiếm nước Đức Chúa Trời",
    "secondaryKeyword": "vương quốc Đức Chúa Trời",
    "category": "Ưu tiên cuộc sống",
    "text": "Nhưng trước hết, hãy tìm kiếm vương quốc Đức Chúa Trời và sự công chính của Ngài, thì Ngài sẽ cho thêm các con mọi điều ấy nữa."
  },
  {
    "id": "v_42",
    "bookFloor": 40,
    "bookCode": "MT",
    "bookName": "Ma-thi-ơ",
    "chapter": 11,
    "verse": 28,
    "keyword": "mệt mỏi gánh nặng",
    "secondaryKeyword": "Ta cho an nghỉ",
    "category": "Sự an nghỉ linh hồn",
    "text": "Hỡi tất cả những ai đang nhọc mệt và gánh nặng, hãy đến với Ta, Ta sẽ cho các con được an nghỉ."
  },
  {
    "id": "v_43",
    "bookFloor": 40,
    "bookCode": "MT",
    "bookName": "Ma-thi-ơ",
    "chapter": 28,
    "verse": 19,
    "keyword": "Đại Mạng Lệnh",
    "secondaryKeyword": "môn đồ hóa muôn dân",
    "category": "Đại Mạng Lệnh",
    "text": "Vậy, hãy đi môn đồ hóa muôn dân, làm báp-têm cho họ nhân danh Đức Chúa Cha, Đức Chúa Con và Đức Thánh Linh; dạy họ giữ mọi điều Ta đã truyền cho các con. Và này, Ta hằng ở cùng các con luôn cho đến tận thế."
  },
  {
    "id": "v_44",
    "bookFloor": 42,
    "bookCode": "LC",
    "bookName": "Lu-ca",
    "chapter": 1,
    "verse": 37,
    "keyword": "việc Chúa làm được",
    "secondaryKeyword": "không việc gì chẳng làm được",
    "category": "Quyền năng Đức Chúa Trời",
    "text": "Vì không có việc gì Đức Chúa Trời chẳng làm được."
  },
  {
    "id": "v_45",
    "bookFloor": 42,
    "bookCode": "LC",
    "bookName": "Lu-ca",
    "chapter": 19,
    "verse": 10,
    "keyword": "tìm và cứu",
    "secondaryKeyword": "kẻ bị hư mất",
    "category": "Mục đích của Chúa Cứu Thế",
    "text": "Vì Con Người đã đến để tìm và cứu kẻ bị hư mất."
  },
  {
    "id": "v_11",
    "bookFloor": 43,
    "bookCode": "G",
    "bookName": "Giăng",
    "chapter": 1,
    "verse": 1,
    "keyword": "Ngôi Lời",
    "secondaryKeyword": "ban đầu có Ngôi Lời",
    "category": "Chúa Jêsus là Đức Chúa Trời",
    "text": "Ban đầu có Ngôi Lời, Ngôi Lời ở với Đức Chúa Trời, và Ngôi Lời là Đức Chúa Trời."
  },
  {
    "id": "v_12",
    "bookFloor": 43,
    "bookCode": "G",
    "bookName": "Giăng",
    "chapter": 3,
    "verse": 16,
    "keyword": "yêu thương thế gian",
    "secondaryKeyword": "đã ban Con Một",
    "category": "Tin Lành Cứu Rỗi",
    "text": "Vì Đức Chúa Trời yêu thương thế gian, đến nỗi đã ban Con Một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời."
  },
  {
    "id": "v_46",
    "bookFloor": 43,
    "bookCode": "G",
    "bookName": "Giăng",
    "chapter": 8,
    "verse": 32,
    "keyword": "chân lý giải phóng",
    "secondaryKeyword": "biết chân lý",
    "category": "Tự do & Chân lý",
    "text": "Các ngươi sẽ biết chân lý, và chân lý sẽ giải phóng các ngươi."
  },
  {
    "id": "v_47",
    "bookFloor": 43,
    "bookCode": "G",
    "bookName": "Giăng",
    "chapter": 14,
    "verse": 6,
    "keyword": "đường đi chân lý sự sống",
    "secondaryKeyword": "chẳng bởi Ta không ai đến với Cha",
    "category": "Con đường duy nhất",
    "text": "Đức Chúa Jêsus đáp: “Ta là đường đi, chân lý và sự sống; chẳng bởi Ta thì không ai đến được với Cha.”"
  },
  {
    "id": "v_48",
    "bookFloor": 43,
    "bookCode": "G",
    "bookName": "Giăng",
    "chapter": 15,
    "verse": 5,
    "keyword": "cây nho và cành",
    "secondaryKeyword": "ngoài Ta không làm gì được",
    "category": "Kết nối với Chúa",
    "text": "Ta là cây nho, các con là cành. Ai cứ ở trong Ta và Ta trong người ấy thì sinh ra nhiều quả; vì ngoài Ta các con không làm gì được."
  },
  {
    "id": "v_49",
    "bookFloor": 44,
    "bookCode": "CV",
    "bookName": "Công Vụ Các Sứ Đồ",
    "chapter": 1,
    "verse": 8,
    "keyword": "quyền năng Thánh Linh",
    "secondaryKeyword": "chứng nhân cho Ta",
    "category": "Thánh Linh & Làm chứng",
    "text": "Nhưng khi Đức Thánh Linh giáng trên các con, các con sẽ nhận lãnh quyền năng và làm chứng nhân cho Ta tại thành Giê-ru-sa-lem, cả xứ Giu-đê, xứ Sa-ma-ri, cho đến cùng trái đất."
  },
  {
    "id": "v_50",
    "bookFloor": 44,
    "bookCode": "CV",
    "bookName": "Công Vụ Các Sứ Đồ",
    "chapter": 4,
    "verse": 12,
    "keyword": "chẳng có sự cứu rỗi",
    "secondaryKeyword": "không danh nào khác dưới trời",
    "category": "Sự cứu rỗi duy nhất",
    "text": "Chẳng có sự cứu rỗi trong ai khác, vì ở dưới trời chẳng có danh nào khác ban cho loài người để chúng ta phải nhờ đó mà được cứu."
  },
  {
    "id": "v_51",
    "bookFloor": 45,
    "bookCode": "RM",
    "bookName": "Rô-ma",
    "chapter": 3,
    "verse": 23,
    "keyword": "mọi người phạm tội",
    "secondaryKeyword": "thiếu mất vinh quang",
    "category": "Tội lỗi & Ân điển",
    "text": "Vì mọi người đều đã phạm tội, thiếu mất vinh quang của Đức Chúa Trời."
  },
  {
    "id": "v_52",
    "bookFloor": 45,
    "bookCode": "RM",
    "bookName": "Rô-ma",
    "chapter": 6,
    "verse": 23,
    "keyword": "tiền công tội lỗi",
    "secondaryKeyword": "sự ban cho sự sống đời đời",
    "category": "Sự sống đời đời",
    "text": "Vì tiền công của tội lỗi là sự chết, nhưng sự ban cho của Đức Chúa Trời là sự sống đời đời trong Đấng Christ Jêsus, Chúa chúng ta."
  },
  {
    "id": "v_13",
    "bookFloor": 45,
    "bookCode": "RM",
    "bookName": "Rô-ma",
    "chapter": 8,
    "verse": 28,
    "keyword": "vạn sự hiệp lại",
    "secondaryKeyword": "mọi sự hiệp lại làm ích",
    "category": "Ý chỉ tốt lành của Chúa",
    "text": "Chúng ta biết rằng mọi sự hiệp lại làm ích cho những ai yêu mến Đức Chúa Trời, tức là cho những người được gọi theo mục đích của Ngài."
  },
  {
    "id": "v_53",
    "bookFloor": 45,
    "bookCode": "RM",
    "bookName": "Rô-ma",
    "chapter": 12,
    "verse": 2,
    "keyword": "đừng rập khuôn",
    "secondaryKeyword": "đổi mới tâm trí",
    "category": "Đổi mới tâm trí",
    "text": "Đừng rập khuôn theo đời này, nhưng hãy được biến hóa bởi sự đổi mới của tâm trí, để phân biệt đâu là ý muốn tốt lành, đẹp lòng và trọn vẹn của Đức Chúa Trời."
  },
  {
    "id": "v_54",
    "bookFloor": 46,
    "bookCode": "1CÔ",
    "bookName": "1 Cô-rinh-tô",
    "chapter": 13,
    "verse": 4,
    "keyword": "yêu thương nhẫn nhục",
    "secondaryKeyword": "không ghen tị không kiêu ngạo",
    "category": "Tình yêu thương",
    "text": "Tình yêu thương hay nhẫn nhục, tình yêu thương hay nhân từ; tình yêu thương không ghen tị, không khoe mình, không kiêu ngạo."
  },
  {
    "id": "v_55",
    "bookFloor": 46,
    "bookCode": "1CÔ",
    "bookName": "1 Cô-rinh-tô",
    "chapter": 13,
    "verse": 13,
    "keyword": "đức tin hy vọng yêu thương",
    "secondaryKeyword": "lớn nhất là tình yêu thương",
    "category": "Ba điều còn lại",
    "text": "Bây giờ còn có ba điều này: đức tin, hy vọng, tình yêu thương; nhưng điều lớn nhất trong ba điều đó là tình yêu thương."
  },
  {
    "id": "v_56",
    "bookFloor": 47,
    "bookCode": "2CÔ",
    "bookName": "2 Cô-rinh-tô",
    "chapter": 5,
    "verse": 17,
    "keyword": "tạo vật mới",
    "secondaryKeyword": "mọi sự trở nên mới",
    "category": "Đời sống mới trong Chúa",
    "text": "Vậy, nếu ai ở trong Đấng Christ, người ấy là một tạo vật mới; những điều cũ đã qua đi, kìa, mọi sự đều trở nên mới!"
  },
  {
    "id": "v_57",
    "bookFloor": 48,
    "bookCode": "GA",
    "bookName": "Ga-la-ti",
    "chapter": 2,
    "verse": 20,
    "keyword": "đóng đinh thập tự giá",
    "secondaryKeyword": "Đấng Christ sống trong tôi",
    "category": "Đời sống đầu phục",
    "text": "Tôi đã bị đóng đinh vào thập tự giá với Đấng Christ, mà tôi sống, không phải là tôi sống nữa, nhưng Đấng Christ sống trong tôi."
  },
  {
    "id": "v_58",
    "bookFloor": 48,
    "bookCode": "GA",
    "bookName": "Ga-la-ti",
    "chapter": 5,
    "verse": 22,
    "keyword": "trái của Thánh Linh",
    "secondaryKeyword": "yêu thương vui mừng bình an",
    "category": "Bản tính Thánh Linh",
    "text": "Nhưng trái của Thánh Linh là: yêu thương, vui mừng, bình an, nhịn nhục, nhân từ, hiền lành, trung tín, khiêm nhu, tiết độ."
  },
  {
    "id": "v_59",
    "bookFloor": 49,
    "bookCode": "ÊP",
    "bookName": "Ê-phê-sô",
    "chapter": 2,
    "verse": 8,
    "keyword": "nhờ ân điển bởi đức tin",
    "secondaryKeyword": "sự ban cho của Đức Chúa Trời",
    "category": "Sự cứu rỗi bởi ân điển",
    "text": "Vì nhờ ân điển, bởi đức tin mà anh em được cứu, điều này không đến từ anh em, bèn là sự ban cho của Đức Chúa Trời; cũng không phải bởi việc làm, để không ai có thể tự hào."
  },
  {
    "id": "v_60",
    "bookFloor": 50,
    "bookCode": "PL",
    "bookName": "Phi-líp",
    "chapter": 4,
    "verse": 6,
    "keyword": "đừng lo lắng gì cả",
    "secondaryKeyword": "cầu nguyện nài xin cảm tạ",
    "category": "Bình an & Cầu nguyện",
    "text": "Đừng lo lắng gì cả, nhưng trong mọi sự hãy dùng lời cầu nguyện, nài xin cùng sự cảm tạ mà trình dâng những nhu cầu của mình cho Đức Chúa Trời. Sự bình an của Đức Chúa Trời, vượt trên mọi sự hiểu biết, sẽ gìn giữ lòng và trí anh em trong Đấng Christ Jêsus."
  },
  {
    "id": "v_14",
    "bookFloor": 50,
    "bookCode": "PL",
    "bookName": "Phi-líp",
    "chapter": 4,
    "verse": 13,
    "keyword": "làm được mọi sự",
    "secondaryKeyword": "nhờ Đấng ban năng lực",
    "category": "Năng lực siêu nhiên",
    "text": "Tôi làm được mọi sự nhờ Đấng ban năng lực cho tôi."
  },
  {
    "id": "v_61",
    "bookFloor": 51,
    "bookCode": "CL",
    "bookName": "Cô-lô-se",
    "chapter": 3,
    "verse": 23,
    "keyword": "hết lòng mà làm",
    "secondaryKeyword": "làm như cho Chúa",
    "category": "Thái độ sống & Làm việc",
    "text": "Bất cứ làm việc gì, hãy hết lòng mà làm như làm cho Chúa, chứ không phải cho người ta."
  },
  {
    "id": "v_62",
    "bookFloor": 52,
    "bookCode": "1TÊ",
    "bookName": "1 Tê-sa-lô-ni-ca",
    "chapter": 5,
    "verse": 16,
    "keyword": "vui mừng mãi mãi",
    "secondaryKeyword": "cầu nguyện không thôi cảm tạ",
    "category": "Ý muốn Đức Chúa Trời",
    "text": "Hãy vui mừng mãi mãi, cầu nguyện không thôi, cảm tạ Chúa trong mọi hoàn cảnh, vì đây là ý muốn của Đức Chúa Trời đối với anh em trong Đấng Christ Jêsus."
  },
  {
    "id": "v_63",
    "bookFloor": 55,
    "bookCode": "2TI",
    "bookName": "2 Ti-mô-thê",
    "chapter": 1,
    "verse": 7,
    "keyword": "tinh thần mạnh mẽ",
    "secondaryKeyword": "không nhút nhát nhưng yêu thương",
    "category": "Lòng can đảm & Tình yêu",
    "text": "Vì Đức Chúa Trời chẳng ban cho chúng ta tinh thần nhút nhát, nhưng tinh thần mạnh mẽ, có tình yêu thương và tự chủ."
  },
  {
    "id": "v_64",
    "bookFloor": 55,
    "bookCode": "2TI",
    "bookName": "2 Ti-mô-thê",
    "chapter": 3,
    "verse": 16,
    "keyword": "Kinh Thánh soi dẫn",
    "secondaryKeyword": "huấn luyện trong công chính",
    "category": "Thẩm quyền Kinh Thánh",
    "text": "Cả Kinh Thánh đều được Đức Chúa Trời soi dẫn, có ích cho sự dạy dỗ, bẻ trách, sửa trị, và huấn luyện trong sự công chính."
  },
  {
    "id": "v_65",
    "bookFloor": 58,
    "bookCode": "HB",
    "bookName": "Hê-bơ-rơ",
    "chapter": 4,
    "verse": 12,
    "keyword": "sắc hơn gươm hai lưỡi",
    "secondaryKeyword": "Lời sống và linh nghiệm",
    "category": "Quyền năng Lời Chúa",
    "text": "Vì lời của Đức Chúa Trời là lời sống và linh nghiệm, sắc hơn gươm hai lưỡi, xuyên thấu đến nỗi phân chia hồn với linh, cốt với tủy, xét đoán các tư tưởng và ý định trong lòng."
  },
  {
    "id": "v_15",
    "bookFloor": 58,
    "bookCode": "HB",
    "bookName": "Hê-bơ-rơ",
    "chapter": 11,
    "verse": 1,
    "keyword": "bằng chứng thực tại",
    "secondaryKeyword": "đức tin là thực thể",
    "category": "Định nghĩa Đức Tin",
    "text": "Đức tin là thực thể của những điều đang hy vọng, là bằng chứng của những điều không thấy."
  },
  {
    "id": "v_66",
    "bookFloor": 60,
    "bookCode": "1PR",
    "bookName": "1 Phi-e-rơ",
    "chapter": 5,
    "verse": 7,
    "keyword": "trao mọi lo lắng",
    "secondaryKeyword": "Ngài luôn chăm sóc",
    "category": "Bình an & Chăm sóc",
    "text": "Hãy trao mọi điều lo lắng mình cho Ngài, vì Ngài luôn chăm sóc anh em."
  },
  {
    "id": "v_67",
    "bookFloor": 62,
    "bookCode": "1G",
    "bookName": "1 Giăng",
    "chapter": 1,
    "verse": 9,
    "keyword": "xưng tội mình",
    "secondaryKeyword": "thành tín công chính tha tội",
    "category": "Sự tha thứ",
    "text": "Còn nếu chúng ta xưng tội mình, thì Ngài là thành tín, công chính sẽ tha tội cho chúng ta và tẩy sạch chúng ta khỏi mọi điều bất chính."
  },
  {
    "id": "v_68",
    "bookFloor": 62,
    "bookCode": "1G",
    "bookName": "1 Giăng",
    "chapter": 4,
    "verse": 19,
    "keyword": "chúng ta yêu",
    "secondaryKeyword": "Ngài yêu chúng ta trước",
    "category": "Gốc rễ Tình yêu",
    "text": "Chúng ta yêu, vì Ngài đã yêu chúng ta trước."
  },
  {
    "id": "v_69",
    "bookFloor": 66,
    "bookCode": "KH",
    "bookName": "Khải Huyền",
    "chapter": 3,
    "verse": 20,
    "keyword": "đứng ngoài cửa gõ",
    "secondaryKeyword": "mở cửa Ta sẽ vào",
    "category": "Lời mời gọi thân mật",
    "text": "Này, Ta đứng ngoài cửa mà gõ; nếu ai nghe tiếng Ta mà mở cửa cho, Ta sẽ vào cùng người ấy, ăn bữa tối với người, và người với Ta."
  },
  {
    "id": "v_16",
    "bookFloor": 66,
    "bookCode": "KH",
    "bookName": "Khải Huyền",
    "chapter": 21,
    "verse": 4,
    "keyword": "lau ráo nước mắt",
    "secondaryKeyword": "không còn sự chết đau đớn",
    "category": "Trời Mới Đất Mới",
    "text": "Ngài sẽ lau ráo hết nước mắt nơi mắt họ. Sẽ không còn sự chết, cũng không còn tang chế, than khóc, hay đau đớn nữa; vì những sự ban đầu đã qua rồi."
  }
];

// LocalStorage helpers for custom user verses
const SCRIPTURE_STORAGE_KEY = 'supermind_scripture_custom_verses_v1';
const SCRIPTURE_DELETED_KEY = 'supermind_scripture_deleted_verses_v1';


// ==========================================
// CHUẨN HÓA TIẾNG VIỆT & SẮP XẾP CÂU KINH THÁNH
// ==========================================
function cleanVietnameseScriptureText(str) {
  if (!str) return '';
  let s = String(str);
  // Loại bỏ zero-width space, BOM
  s = s.replace(/[\u200B-\u200D\uFEFF]/g, '');
  // Loại bỏ khoảng trắng xung quanh dấu thanh rời rạc (combining diacritics)
  s = s.replace(/\s+([\u0300-\u036f])/g, '$1');
  // Chuẩn hóa Unicode về dạng dựng sẵn (NFC - Precomposed)
  s = s.normalize('NFC');
  // Xử lý các âm tiết bị tách rời do bộ gõ hoặc copy-paste:
  // Ví dụ: 'Đấ  t' -> 'Đất', 'trố  ng' -> 'trống', 'tố  i' -> 'tối', 'Thầ  n' -> 'Thần'
  s = s.replace(/([A-Za-z\u00C0-\u1EF9]+)\s+([cntmpioy]|ng|nh|ch)(?=[\s,.;:!?\"“”)]|$)/gi, (m, p1, p2) => {
    if (/[aeiouy\u00E0-\u1EF9]$/i.test(p1)) {
      return p1 + p2;
    }
    return m;
  });
  // Thu gọn nhiều khoảng trắng thành 1
  s = s.replace(/[ \t]+/g, ' ');
  return s.trim();
}

function sanitizeVerseObject(v) {
  if (!v) return v;
  return {
    ...v,
    bookFloor: Number(v.bookFloor) || 1,
    chapter: Number(v.chapter) || 1,
    verse: Number(v.verse) || 1,
    bookName: cleanVietnameseScriptureText(v.bookName || ''),
    bookCode: (v.bookCode || '').trim(),
    keyword: cleanVietnameseScriptureText(v.keyword || ''),
    secondaryKeyword: cleanVietnameseScriptureText(v.secondaryKeyword || ''),
    category: cleanVietnameseScriptureText(v.category || ''),
    text: cleanVietnameseScriptureText(v.text || '')
  };
}

function sortVersesAscending(a, b) {
  const floorA = Number(a.bookFloor) || 0;
  const floorB = Number(b.bookFloor) || 0;
  if (floorA !== floorB) return floorA - floorB;

  const chapA = Number(a.chapter) || 0;
  const chapB = Number(b.chapter) || 0;
  if (chapA !== chapB) return chapA - chapB;

  const verseA = Number(a.verse) || 0;
  const verseB = Number(b.verse) || 0;
  return verseA - verseB;
}

function migrateAndSanitizeBibleStorage() {
  try {
    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    if (!raw) return;
    const custom = JSON.parse(raw);
    if (Array.isArray(custom)) {
      const sanitized = custom.map(v => sanitizeVerseObject(v));
      sanitized.sort(sortVersesAscending);
      localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(sanitized));
    }
  } catch (err) {
    console.error('Error migrating bible storage:', err);
  }
}

function getAllScriptureVerses() {
  try {
    const rawDeleted = localStorage.getItem(SCRIPTURE_DELETED_KEY);
    const deletedIds = rawDeleted ? JSON.parse(rawDeleted) : [];

    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    const custom = raw ? JSON.parse(raw) : [];

    const customMap = new Map(custom.map(v => [v.id, v]));

    const activeInitials = INITIAL_SCRIPTURE_VERSES
      .filter(v => !deletedIds.includes(v.id))
      .map(v => customMap.has(v.id) ? customMap.get(v.id) : v);

    const userAdded = custom.filter(v => !INITIAL_SCRIPTURE_VERSES.some(iv => iv.id === v.id));

    // Khử trùng lặp theo tọa độ (bookFloor, chapter, verse)
    const result = [];
    const seenCoords = new Set();

    // Ưu tiên các câu do người dùng tùy chỉnh/thêm
    for (const v of userAdded) {
      const coord = `${v.bookFloor}_${v.chapter}_${v.verse}`;
      seenCoords.add(coord);
      result.push(sanitizeVerseObject(v));
    }

    for (const iv of activeInitials) {
      const coord = `${iv.bookFloor}_${iv.chapter}_${iv.verse}`;
      if (!seenCoords.has(coord)) {
        seenCoords.add(coord);
        result.push(sanitizeVerseObject(iv));
      }
    }

    // Sắp xếp tăng dần từ thấp lên cao theo Tầng -> Chương -> Câu
    return result.sort(sortVersesAscending);
  } catch (e) {
    return INITIAL_SCRIPTURE_VERSES.map(sanitizeVerseObject).sort(sortVersesAscending);
  }
}

// Generates First-Letter Prompting tokens: e.g. "Ban đầu Đức Chúa Trời..." -> "B - Đ - C - T..."
function generateFirstLetters(text) {
  if (!text) return '';
  const clean = cleanVietnameseScriptureText(text).replace(/[“”,;.:!?()—"]/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean);
  return words.map(w => w.charAt(0).toUpperCase()).join(' - ');
}

// Current Tower State
let currentSelectedFloor = 1;
let currentSelectedRoom = 1;
let currentTowerFilter = 'all';


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
  if (elMasteredPct) elMasteredPct.textContent = `(${percent}%)`;
  if (elLearning) elLearning.textContent = learningCount;
  if (elBooks) elBooks.textContent = `${masteredBooksSet.size} / 66`;
  if (elBar) elBar.style.width = `${percent}%`;
  if (elBarText) elBarText.textContent = `${percent}% (${masteredCount}/${total} câu đã thuộc)`;
  if (elBtnMastered) elBtnMastered.textContent = masteredCount;

  const streak = calculateBibleStreak();
  if (elStreak) elStreak.textContent = `🔥 ${streak} Ngày Thuộc Lòng`;
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
  const masteredVerses = allVerses.filter(v => isBibleVerseMastered(v.id)).sort(sortVersesAscending);

  if (countBadge) countBadge.textContent = `${masteredVerses.length} Câu Đã Thuộc`;

  const q = (currentMasteredVerseSearch || '').toLowerCase().trim();
  const filtered = masteredVerses.filter(v => {
    if (!q) return true;
    const match = v.text.toLowerCase().includes(q) ||
                  v.keyword.toLowerCase().includes(q) ||
                  v.bookName.toLowerCase().includes(q) ||
                  `${v.bookCode} ${v.chapter}:${v.verse}`.toLowerCase().includes(q);
    return match;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="py-12 text-center text-slate-400 space-y-2">
        <div class="text-4xl">📖</div>
        <div class="text-sm font-bold text-white">${masteredVerses.length === 0 ? 'Bạn chưa đánh dấu câu Kinh Thánh nào là đã thuộc!' : 'Không tìm thấy câu phù hợp với từ khóa tìm kiếm.'}</div>
        <p class="text-xs text-slate-500 max-w-sm mx-auto">
          ${masteredVerses.length === 0 ? 'Hãy duyệt qua Tòa Nhà 66 Tầng hoặc bấm "Thêm Câu" và tích chọn "Tôi đã thuộc lòng câu này" để tích lũy kho câu thuộc nhé!' : ''}
        </p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(v => {
    const firstLetters = generateFirstLetters(v.text);
    return `
      <div class="p-4 rounded-2xl bg-slate-900/90 border border-amber-500/30 hover:border-amber-400/60 transition-all space-y-2.5 shadow-sm">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-lg bg-amber-500/20 text-amber-300 font-mono font-bold text-xs border border-amber-500/40">
              ${v.bookName} (${v.bookCode}) ${v.chapter}:${v.verse}
            </span>
            <span class="text-[11px] text-amber-400 font-semibold">Tầng ${v.bookFloor}</span>
          </div>
          <div class="flex items-center gap-1.5">
            <button onclick="speakVerseText('${v.text.replace(/'/g, "\\'")}')" class="p-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300" title="Nghe đọc">
              <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
            </button>
            <button onclick="toggleBibleVerseMastered('${v.id}')" class="px-2 py-1 rounded-lg bg-rose-950/60 hover:bg-rose-900 border border-rose-500/40 text-rose-300 text-[10px] font-bold" title="Hủy đánh dấu thuộc">
              Bỏ Thuộc
            </button>
          </div>
        </div>

        <blockquote class="text-xs sm:text-sm bible-quote text-white pl-3 border-l-2 border-amber-400">
          "${v.text}"
        </blockquote>

        <div class="p-2 rounded-xl bg-slate-950 text-[11px] font-mono text-amber-300 flex items-center justify-between">
          <span class="font-bold">Từ khóa: "${v.keyword}"</span>
          <span class="text-[10px] text-slate-500">Chuỗi: ${firstLetters.substring(0, 30)}${firstLetters.length > 30 ? '...' : ''}</span>
        </div>
      </div>
    `;
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

function initScriptureTower() {
  migrateAndSanitizeBibleStorage();
  renderTowerFloors();
  selectFloor(1);
  populateBookDropdown();
  updateBibleStatsDashboard();
}

function filterTowerSection(sec) {
  playSound('click');
  currentTowerFilter = sec;
  document.querySelectorAll('.tower-sec-btn').forEach(btn => {
    if (btn.dataset.sec === sec) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  renderTowerFloors();
}

function renderTowerFloors() {
  const container = document.getElementById('floorsElevatorList');
  if (!container) return;

  let filtered = BIBLE_66_BOOKS;
  if (currentTowerFilter === 'old') {
    filtered = BIBLE_66_BOOKS.filter(b => b.testament === 'old');
  } else if (currentTowerFilter === 'new') {
    filtered = BIBLE_66_BOOKS.filter(b => b.testament === 'new');
  }

  const badge = document.getElementById('floorCountBadge');
  if (badge) badge.textContent = `${filtered.length} Tầng`;

  container.innerHTML = filtered.map(b => {
    const isActive = b.floor === currentSelectedFloor;
    return `
      <div onclick="selectFloor(${b.floor})" class="floor-item ${isActive ? 'active' : ''} p-2.5 rounded-xl border border-slate-800 hover:border-amber-500/40 cursor-pointer flex items-center justify-between transition-all group">
        <div class="flex items-center gap-2.5">
          <span class="font-mono text-xs font-black ${isActive ? 'text-amber-400' : 'text-slate-400 group-hover:text-amber-300'} w-8">
            T.${b.floor}
          </span>
          <span class="font-mono text-[11px] font-bold px-1.5 py-0.5 rounded ${isActive ? 'bg-amber-400 text-slate-950' : 'bg-slate-800 text-amber-300 border border-slate-700'}">
            ${b.code}
          </span>
          <span class="text-xs font-bold text-white group-hover:text-amber-200 truncate">
            ${b.name}
          </span>
        </div>
        <span class="text-[10px] text-slate-400 font-mono">${b.chapters}p</span>
      </div>
    `;
  }).join('');
}

function selectFloor(floorNum) {
  playSound('click');
  currentSelectedFloor = floorNum;
  currentSelectedRoom = 1;

  const book = BIBLE_66_BOOKS.find(b => b.floor === floorNum);
  if (!book) return;

  // Update header badges
  const fb = document.getElementById('activeFloorBadge');
  const cb = document.getElementById('activeFloorCodeBadge');
  const title = document.getElementById('activeFloorTitle');
  const sub = document.getElementById('activeFloorSubtitle');

  if (fb) fb.textContent = `TẦNG ${book.floor}`;
  if (cb) cb.textContent = `Mã: ${book.code}`;
  if (title) title.textContent = book.name;
  if (sub) sub.textContent = `${book.testament === 'old' ? 'Cựu Ước' : 'Tân Ước'} • ${book.chapters} Chương (Phòng)`;

  // Update active elevator item
  renderTowerFloors();

  // Render Rooms (Chapters)
  renderRooms(book.chapters);

  // Render Verses
  renderVersesInRoom();
}

function renderRooms(chapterCount) {
  const container = document.getElementById('roomsChipList');
  if (!container) return;

  let chipsHtml = '';
  for (let ch = 1; ch <= chapterCount; ch++) {
    const isActive = ch === currentSelectedRoom;
    chipsHtml += `
      <button onclick="selectRoom(${ch})" class="room-chip ${isActive ? 'active' : ''} px-3 py-1 rounded-lg text-xs font-semibold whitespace-nowrap border transition-all ${isActive ? '' : 'bg-slate-800 text-slate-300 border-slate-700 hover:bg-slate-700'}">
        Phòng ${ch}
      </button>
    `;
  }
  container.innerHTML = chipsHtml;
}

function selectRoom(roomNum) {
  playSound('click');
  currentSelectedRoom = roomNum;
  const book = BIBLE_66_BOOKS.find(b => b.floor === currentSelectedFloor);
  if (book) renderRooms(book.chapters);
  renderVersesInRoom();
}

function renderVersesInRoom() {
  const container = document.getElementById('versesInRoomList');
  if (!container) return;

  const allVerses = getAllScriptureVerses();
  let filtered = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);

  // LUÔN LUÔN SẮP XẾP THỨ TỰ TỪ THẤP ĐẾN CAO (CÂU 1 -> CÂU 2 -> CÂU 3...)
  filtered.sort((a, b) => (Number(a.verse) || 0) - (Number(b.verse) || 0));

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
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500 border border-dashed border-slate-800 rounded-2xl">
        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-3">
          <i data-lucide="bookmark" class="w-6 h-6"></i>
        </div>
        <div class="text-sm font-semibold text-slate-300 mb-1">${currentBibleFilterStatus !== 'all' ? 'Không có câu nào khớp với bộ lọc này ở Phòng ' + currentSelectedRoom : 'Chưa có câu nào được lưu ở Phòng ' + currentSelectedRoom}</div>
        <p class="text-xs text-slate-400 max-w-sm mb-4">Bạn có thể bấm nút bên dưới để thêm câu Kinh Thánh Bản 2010 kèm từ khóa mỏ neo vào phòng này!</p>
        <button onclick="openAddVerseForCurrentFloor()" class="px-4 py-2 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition-all flex items-center gap-1.5">
          <i data-lucide="plus" class="w-4 h-4"></i> Thêm Câu Vào Phòng Này
        </button>
      </div>
    `;
    lucide.createIcons();
    return;
  }

  container.innerHTML = filtered.map(v => {
    const firstLetters = generateFirstLetters(v.text);
    const progress = getBibleVerseProgress(v.id);
    const isMastered = progress.mastered;

    return `
      <div class="p-5 rounded-2xl bg-slate-900 border ${isMastered ? 'border-amber-500/60 ring-1 ring-amber-500/30' : 'border-slate-800 hover:border-amber-500/50'} transition-all space-y-3 shadow-md">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
              ${v.bookCode} ${v.chapter}:${v.verse}
            </span>
            <span class="text-xs text-slate-400 font-medium">Câu ${v.verse}</span>
            ${isMastered ? `
              <span class="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] font-bold flex items-center gap-1">
                <span>👑</span> ĐÃ THUỘC LÒNG
              </span>
            ` : (progress.reviewCount > 0 ? `
              <span class="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/40 text-[10px] font-bold flex items-center gap-1">
                <span>⏳</span> ĐANG ÔN
              </span>
            ` : '')}
          </div>
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold flex items-center gap-1">
              <i data-lucide="key" class="w-3 h-3 text-amber-400"></i> Từ khóa: "${v.keyword}"
            </span>
            ${v.secondaryKeyword ? `
              <span class="hidden sm:inline-block px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 text-[10px] border border-slate-700">
                Phân biệt: "${v.secondaryKeyword}"
              </span>
            ` : ''}
            <div class="flex items-center gap-1.5 ml-2">
              <button onclick="toggleBibleVerseMastered('${v.id}')" class="px-2.5 py-1 rounded-lg ${isMastered ? 'bg-amber-500 text-slate-950 font-black shadow' : 'bg-slate-800 hover:bg-slate-700 text-amber-300 border border-slate-700'} text-xs font-bold flex items-center gap-1 transition-all" title="${isMastered ? 'Đã thuộc lòng câu này' : 'Đánh dấu đã thuộc lòng'}">
                <i data-lucide="${isMastered ? 'check-circle-2' : 'award'}" class="w-3.5 h-3.5"></i>
                <span class="hidden sm:inline">${isMastered ? 'Đã Thuộc' : 'Đánh Dấu Thuộc'}</span>
              </button>
              <button onclick="speakVerseText('${v.text.replace(/'/g, "\\'")}')" title="Nghe đọc câu này" class="p-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-cyan-300 border border-slate-700 text-xs transition-all">
                <i data-lucide="volume-2" class="w-3.5 h-3.5"></i>
              </button>
              <button onclick="editScriptureVerse('${v.id}')" title="Sửa câu này" class="px-2 py-1 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-slate-700 hover:border-amber-400 text-xs font-bold flex items-center gap-1 transition-all shadow-sm">
                <i data-lucide="edit-3" class="w-3 h-3"></i> Sửa
              </button>
              <button onclick="deleteScriptureVerse('${v.id}')" title="Xóa câu này" class="p-1 rounded-lg bg-slate-800 hover:bg-rose-900/60 hover:text-rose-300 text-slate-400 border border-slate-700 text-xs transition-all">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Full Text (Bản 2010) với font Lora chống lỗi dấu và khoảng cách -->
        <blockquote class="text-sm sm:text-base bible-quote text-slate-100 border-l-2 border-amber-400 pl-4 py-1.5 leading-relaxed">
          "${v.text}"
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
            ${firstLetters}
          </div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// Fast Search by Anchor Keyword or Coordinate
function handleScriptureSearch() {
  const query = (document.getElementById('scriptureSearchInput')?.value || '').toLowerCase().trim();
  const resultContainer = document.getElementById('scriptureSearchResults');
  const list = document.getElementById('scriptureSearchList');

  if (!query) {
    resultContainer.classList.add('hidden');
    return;
  }

  const allVerses = getAllScriptureVerses();
  const matches = allVerses.filter(v => {
    const qKw = v.keyword.toLowerCase();
    const qSec = (v.secondaryKeyword || '').toLowerCase();
    const qCoord = `${v.bookCode} ${v.chapter}:${v.verse}`.toLowerCase();
    const qFullCoord = `${v.bookName} ${v.chapter}:${v.verse}`.toLowerCase();
    const qText = v.text.toLowerCase();

    return qKw.includes(query) || qSec.includes(query) || qCoord.includes(query) || qFullCoord.includes(query) || qText.includes(query);
  });

  resultContainer.classList.remove('hidden');

  if (matches.length === 0) {
    list.innerHTML = `<div class="col-span-full py-4 text-xs text-slate-500">Không tìm thấy từ khóa hoặc câu khớp với "${query}".</div>`;
    return;
  }

  list.innerHTML = matches.slice(0, 6).map(v => `
    <div onclick="jumpToVerse(${v.bookFloor}, ${v.chapter})" class="p-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-amber-400 cursor-pointer transition-all space-y-1">
      <div class="flex items-center justify-between text-xs">
        <span class="font-mono font-bold text-amber-400">${v.bookName} (${v.bookCode}) ${v.chapter}:${v.verse}</span>
        <span class="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 font-bold text-[10px]">Từ khóa: "${v.keyword}"</span>
      </div>
      <p class="text-xs text-slate-300 line-clamp-2">"${v.text}"</p>
    </div>
  `).join('');
}

function jumpToVerse(floor, chapter) {
  playSound('click');
  currentSelectedFloor = floor;
  currentSelectedRoom = chapter;
  selectFloor(floor);
  selectRoom(chapter);
  // Clear search
  document.getElementById('scriptureSearchInput').value = '';
  document.getElementById('scriptureSearchResults').classList.add('hidden');
}

// Populate Add Verse Select Dropdown
function populateBookDropdown() {
  const select = document.getElementById('inputVerseBook');
  if (!select) return;

  select.innerHTML = BIBLE_66_BOOKS.map(b => `
    <option value="${b.floor}">Tầng ${b.floor}: ${b.name} (${b.code})</option>
  `).join('');
}

function openAddVerseModal() {
  playSound('click');
  populateBookDropdown();
  const idInput = document.getElementById('inputEditingVerseId');
  if (idInput) idInput.value = '';
  document.getElementById('inputVerseBook').value = currentSelectedFloor;
  document.getElementById('inputVerseChapter').value = currentSelectedRoom;
  document.getElementById('inputVerseNumber').value = 1;
  document.getElementById('inputVerseKeyword').value = '';
  document.getElementById('inputVerseSecondaryKeyword').value = '';
  document.getElementById('inputVerseText').value = '';

  const title = document.getElementById('addVerseModalTitle');
  if (title) title.innerHTML = `<i data-lucide="bookmark-plus" class="w-5 h-5 text-amber-400"></i> Thêm Câu Kinh Thánh (Tòa Nhà 66 Tầng)`;
  const submitBtn = document.getElementById('addVerseSubmitBtn');
  if (submitBtn) submitBtn.textContent = 'Lưu Vào Tòa Nhà';

  const modal = document.getElementById('addVerseModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function editScriptureVerse(verseId) {
  playSound('click');
  const all = getAllScriptureVerses();
  const v = all.find(item => item.id === verseId);
  if (!v) return;

  populateBookDropdown();
  const idInput = document.getElementById('inputEditingVerseId');
  if (idInput) idInput.value = v.id;

  document.getElementById('inputVerseBook').value = v.bookFloor;
  document.getElementById('inputVerseChapter').value = v.chapter;
  document.getElementById('inputVerseNumber').value = v.verse;
  document.getElementById('inputVerseKeyword').value = v.keyword;
  document.getElementById('inputVerseSecondaryKeyword').value = v.secondaryKeyword || '';
  document.getElementById('inputVerseText').value = v.text;

  const title = document.getElementById('addVerseModalTitle');
  if (title) title.innerHTML = `<i data-lucide="edit-3" class="w-5 h-5 text-amber-400"></i> Sửa Câu: ${v.bookCode} ${v.chapter}:${v.verse}`;
  const submitBtn = document.getElementById('addVerseSubmitBtn');
  if (submitBtn) submitBtn.textContent = 'Cập Nhật Câu Này';

  const modal = document.getElementById('addVerseModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function deleteScriptureVerse(verseId) {
  playSound('click');
  const all = getAllScriptureVerses();
  const v = all.find(item => item.id === verseId);
  const coord = v ? `${v.bookName} (${v.bookCode}) ${v.chapter}:${v.verse}` : 'câu này';
  if (!confirm(`Bạn có chắc chắn muốn xóa ${coord} không?`)) return;

  try {
    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    let custom = raw ? JSON.parse(raw) : [];
    custom = custom.filter(item => item.id !== verseId);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(custom));

    if (INITIAL_SCRIPTURE_VERSES.some(iv => iv.id === verseId)) {
      const rawDel = localStorage.getItem(SCRIPTURE_DELETED_KEY);
      let deleted = rawDel ? JSON.parse(rawDel) : [];
      if (!deleted.includes(verseId)) deleted.push(verseId);
      localStorage.setItem(SCRIPTURE_DELETED_KEY, JSON.stringify(deleted));
    }
  } catch (err) {
    console.error(err);
  }

  playSound('success');
  renderVersesInRoom();
}

function openAddVerseForCurrentFloor() {
  openAddVerseModal();
}

function closeAddVerseModal() {
  playSound('click');
  const modal = document.getElementById('addVerseModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function saveCustomVerse(e) {
  e.preventDefault();
  playSound('success');

  const editingId = document.getElementById('inputEditingVerseId')?.value || '';
  const floor = parseInt(document.getElementById('inputVerseBook').value, 10);
  const chapter = parseInt(document.getElementById('inputVerseChapter').value, 10);
  const verse = parseInt(document.getElementById('inputVerseNumber').value, 10);
  const keyword = cleanVietnameseScriptureText(document.getElementById('inputVerseKeyword').value);
  const secondaryKeyword = cleanVietnameseScriptureText(document.getElementById('inputVerseSecondaryKeyword').value);
  const text = cleanVietnameseScriptureText(document.getElementById('inputVerseText').value);

  const book = BIBLE_66_BOOKS.find(b => b.floor === floor);

  const targetVerse = {
    id: editingId || ('user_v_' + Date.now()),
    bookFloor: floor,
    bookCode: book ? book.code : 'S',
    bookName: book ? cleanVietnameseScriptureText(book.name) : '',
    chapter: chapter,
    verse: verse,
    keyword: keyword,
    secondaryKeyword: secondaryKeyword,
    text: text
  };

  const isMasteredChecked = document.getElementById('inputVerseIsMastered')?.checked;
  if (isMasteredChecked) {
    setBibleVerseStatus(targetVerse.id, 'mastered');
  }

  try {
    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    let custom = raw ? JSON.parse(raw) : [];
    if (editingId) {
      const idx = custom.findIndex(item => item.id === editingId);
      if (idx >= 0) {
        custom[idx] = targetVerse;
      } else {
        custom.push(targetVerse);
      }
    } else {
      // Nếu đã có câu cùng tọa độ, cập nhật đè thay vì tạo câu trùng
      const existingIdx = custom.findIndex(item => item.bookFloor === floor && item.chapter === chapter && item.verse === verse);
      if (existingIdx >= 0) {
        custom[existingIdx] = targetVerse;
      } else {
        custom.push(targetVerse);
      }
    }
    // Sắp xếp custom verses theo thứ tự tăng dần
    custom.sort(sortVersesAscending);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(custom));
  } catch (err) {
    console.error(err);
  }

  closeAddVerseModal();
  selectFloor(floor);
  selectRoom(chapter);
  renderVersesInRoom();
  updateBibleStatsDashboard();
}

// SCRIPTURE REFLEX QUIZ MODAL
let currentQuizVerse = null;
let quizRevealed = false;

function openScriptureQuizModal() {
  playSound('click');
  const allVerses = getAllScriptureVerses();
  if (allVerses.length === 0) return;

  currentQuizVerse = allVerses[Math.floor(Math.random() * allVerses.length)];
  quizRevealed = false;

  renderQuizCard();

  const modal = document.getElementById('scriptureQuizModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
}

function closeScriptureQuizModal() {
  playSound('click');
  const modal = document.getElementById('scriptureQuizModal');
  modal.classList.add('hidden');
  modal.classList.remove('flex');
}

function renderQuizCard() {
  const container = document.getElementById('scriptureQuizBody');
  if (!container || !currentQuizVerse) return;

  const firstLetters = generateFirstLetters(currentQuizVerse.text);

  if (!quizRevealed) {
    container.innerHTML = `
      <div class="text-center space-y-4 py-4">
        <span class="text-xs font-bold uppercase tracking-widest text-slate-400">TỪ KHÓA MỎ NEO KÍCH HOẠT:</span>
        <div class="text-3xl font-black text-amber-400 bg-slate-900 border border-amber-500/30 rounded-2xl py-6 px-4 shadow-inner">
          "${currentQuizVerse.keyword}"
        </div>
        <p class="text-xs text-slate-300">
          Hãy phản xạ ngay trong đầu: <strong>Từ khóa này thuộc Tầng nào (Sách), Phòng mấy (Chương), Câu số mấy?</strong> Và đọc to toàn bộ câu theo Bản 2010!
        </p>
        <button onclick="revealQuizAnswer()" class="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-400 text-slate-950 font-bold text-sm shadow-md hover:from-amber-400 hover:to-yellow-300">
          Lật Xem Tọa Độ & Toàn Văn Câu
        </button>
      </div>
    `;
  } else {
    container.innerHTML = `
      <div class="space-y-4 py-2">
        <div class="p-4 rounded-xl bg-slate-900 border border-amber-500/40 text-center space-y-1">
          <div class="text-xs text-slate-400 font-bold uppercase">TỌA ĐỘ CHÍNH XÁC:</div>
          <div class="text-2xl font-black text-amber-400 font-mono">
            Tầng ${currentQuizVerse.bookFloor}: ${currentQuizVerse.bookName} (${currentQuizVerse.bookCode}) ${currentQuizVerse.chapter}:${currentQuizVerse.verse}
          </div>
        </div>

        <blockquote class="text-sm font-serif italic text-white border-l-2 border-amber-400 pl-4 py-1">
          "${currentQuizVerse.text}"
        </blockquote>

        <div class="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs font-mono text-amber-300">
          <span class="text-slate-400 block text-[10px] mb-1">Chuỗi Chữ Cái Đầu:</span>
          ${firstLetters}
        </div>

        <button onclick="openScriptureQuizModal()" class="w-full py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-sm border border-slate-700">
          Thử Thách Từ Khóa Khác
        </button>
      </div>
    `;
  }

  lucide.createIcons();
}

function revealQuizAnswer() {
  playSound('success');
  quizRevealed = true;
  renderQuizCard();
}


// ==========================================
// 16. KHO CÁC MÔN HỌC CÁ NHÂN (SUBJECTS HUB)
// ==========================================

const DEFAULT_SUBJECTS = [
  {
    id: 'bibletower',
    name: 'Kinh Thánh (Tòa Nhà 66 Tầng)',
    badge: 'Bản 2010 • 66 Tầng',
    desc: 'Mã hóa 66 sách thành 66 tầng, chương là phòng, câu là nội dung trong phòng, kích hoạt bằng Từ Khóa Mỏ Neo.',
    icon: 'building-2',
    color: 'from-amber-600 to-yellow-600',
    type: 'bible'
  },
  {
    id: 'philosophy',
    name: 'Triết Học Toàn Thư (Gốc Rễ Đến Đỉnh Cao)',
    badge: 'Chuẩn Giáo Sư • Ma Trận 5D',
    desc: 'Bắt đầu từ Cột mốc số 0 (Thales & Sự kinh ngạc) qua 5 thời kỳ lịch sử tư tưởng bằng Bộ Khung 5 Chiều Đại Tư Duy.',
    icon: 'sparkles',
    color: 'from-indigo-600 via-purple-600 to-amber-500',
    type: 'philosophy'
  },
  {
    id: 'english',
    name: 'Tiếng Anh Siêu Tốc',
    badge: 'Ngoại Ngữ',
    desc: 'Cung điện 1000 từ vựng cốt lõi theo phương pháp Âm Thanh Tương Tự (Sound-alike) & liên tưởng cảm xúc cao.',
    icon: 'languages',
    color: 'from-blue-600 to-cyan-600',
    type: 'custom',
    topics: [
      { title: 'Chủ đề 1: Giao Tiếp & Ẩm Thực (20 từ)', notes: 'Neo vào Cung điện Phòng bếp của bạn' },
      { title: 'Chủ đề 2: Du Lịch & Sân Bay (30 từ)', notes: 'Neo vào Sảnh sân bay Nội Bài / Tân Sơn Nhất' }
    ]
  },
  {
    id: 'law',
    name: 'Pháp Luật & Điều Khoản Cốt Lõi',
    badge: 'Hệ Thống Luật',
    desc: 'Mã hóa số điều luật theo Major System và gắn các tình huống thực tiễn vào Cung Điện Tòa Án.',
    icon: 'scale',
    color: 'from-emerald-600 to-teal-600',
    type: 'custom',
    topics: [
      { title: 'Chương 1: Các Nguyên Tắc Cơ Bản', notes: 'Gắn Điều 1 đến Điều 15 vào Cổng vào và Hành lang' }
    ]
  }
];

const SUBJECTS_STORAGE_KEY = 'supermind_custom_user_subjects_v1';
let currentActiveSubjectId = 'bibletower';

function getStoredSubjects() {
  try {
    const raw = localStorage.getItem(SUBJECTS_STORAGE_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    return [...DEFAULT_SUBJECTS, ...custom];
  } catch (e) {
    return DEFAULT_SUBJECTS;
  }
}

function renderSubjectsGrid() {
  const container = document.getElementById('subjectsCardsContainer');
  if (!container) return;

  const subjects = getStoredSubjects();

  let html = subjects.map(s => {
    return `
      <div onclick="openSubjectDetail('${s.id}')" class="p-5 rounded-2xl bg-cardBg border border-slate-800 hover:border-amber-500/60 hover:bg-slate-900/60 cursor-pointer flex flex-col justify-between transition-all group shadow-md">
        <div>
          <div class="flex items-center justify-between mb-3">
            <div class="w-10 h-10 rounded-xl bg-gradient-to-tr ${s.color || 'from-purple-600 to-indigo-600'} text-white flex items-center justify-center text-sm shadow">
              <i data-lucide="${s.icon || 'book-open'}" class="w-5 h-5"></i>
            </div>
            <span class="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700">
              ${s.badge || 'Môn học'}
            </span>
          </div>
          <h4 class="text-sm font-bold text-white group-hover:text-amber-300 transition-colors mb-1.5">${s.name}</h4>
          <p class="text-xs text-slate-400 leading-relaxed line-clamp-2">${s.desc}</p>
        </div>
        <div class="pt-3 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-amber-400 group-hover:text-amber-300">
          <span>Vào học môn này</span>
          <i data-lucide="arrow-right" class="w-4 h-4 group-hover:translate-x-1 transition-transform"></i>
        </div>
      </div>
    `;
  }).join('');

  // Add "+" card to prompt adding custom subjects
  html += `
    <div onclick="openAddSubjectModal()" class="p-5 rounded-2xl border border-dashed border-slate-700 hover:border-amber-400/60 bg-slate-900/40 hover:bg-slate-900 cursor-pointer flex flex-col items-center justify-center text-center transition-all group min-h-[160px]">
      <div class="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-amber-400 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
        <i data-lucide="plus" class="w-5 h-5"></i>
      </div>
      <div class="text-xs font-bold text-white group-hover:text-amber-300 mb-1">+ Thêm Môn Học Mới Của Bạn</div>
      <p class="text-[11px] text-slate-400">Tạo Cung điện / Tòa nhà riêng cho bất kỳ môn học nào</p>
    </div>
  `;

  container.innerHTML = html;
  lucide.createIcons();
}

// Khi bấm vào 1 môn học -> Mới mở toàn bộ không gian của môn đó ra!
function openSubjectDetail(subjectId) {
  playSound('click');
  currentActiveSubjectId = subjectId;

  const listScreen = document.getElementById('subjectsListScreen');
  const detailScreen = document.getElementById('subjectDetailScreen');

  if (listScreen) listScreen.classList.add('hidden');
  if (detailScreen) detailScreen.classList.remove('hidden');

  selectSubject(subjectId);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Khi bấm nút "Quay Lại Danh Mục Môn Học"
function backToSubjectsList() {
  playSound('click');
  const listScreen = document.getElementById('subjectsListScreen');
  const detailScreen = document.getElementById('subjectDetailScreen');

  if (detailScreen) detailScreen.classList.add('hidden');
  if (listScreen) listScreen.classList.remove('hidden');

  renderSubjectsGrid();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectSubject(subjectId) {
  currentActiveSubjectId = subjectId;

  const subjects = getStoredSubjects();
  const subj = subjects.find(s => s.id === subjectId) || subjects[0];

  const titleEl = document.getElementById('activeSubjectName');
  const badgeEl = document.getElementById('activeSubjectBadge');
  const bibleView = document.getElementById('subjectBibleView');
  const philoView = document.getElementById('subjectPhilosophyView');
  const customView = document.getElementById('subjectCustomView');

  if (titleEl) {
    titleEl.innerHTML = `<i data-lucide="${subj.icon || 'book-open'}" class="w-4 h-4 text-amber-400"></i> ${subj.name}`;
  }
  if (badgeEl) {
    badgeEl.textContent = `• ${subj.badge || 'Cung Điện Ghi Nhớ'}`;
  }

  if (subj.type === 'bible' || subj.id === 'bibletower') {
    if (bibleView) bibleView.classList.remove('hidden');
    if (philoView) philoView.classList.add('hidden');
    if (customView) customView.classList.add('hidden');
    initScriptureTower();
  } else if (subj.type === 'philosophy' || subj.id === 'philosophy') {
    if (bibleView) bibleView.classList.add('hidden');
    if (philoView) philoView.classList.remove('hidden');
    if (customView) customView.classList.add('hidden');
    renderPhilosophyView();
  } else {
    if (bibleView) bibleView.classList.add('hidden');
    if (philoView) philoView.classList.add('hidden');
    if (customView) customView.classList.remove('hidden');

    document.getElementById('customSubjectTitle').textContent = subj.name;
    document.getElementById('customSubjectDesc').textContent = subj.desc;

    // Render topics if any
    const topicsContainer = document.getElementById('customSubjectTopicsList');
    if (topicsContainer) {
      const topics = subj.topics || [];
      if (topics.length === 0) {
        topicsContainer.innerHTML = `
          <div class="col-span-full py-6 text-center text-xs text-slate-500">
            Chưa có bài học nào trong môn này. Hãy bấm nút "+ Thêm Bài Học / Chủ Đề Mới" ở trên để bắt đầu!
          </div>
        `;
      } else {
        topicsContainer.innerHTML = topics.map((t, idx) => `
          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
            <div class="text-xs font-bold text-amber-400">${idx + 1}. ${t.title}</div>
            <p class="text-xs text-slate-300">${t.notes}</p>
          </div>
        `).join('');
      }
    }
  }

  lucide.createIcons();
}

function openAddSubjectModal() {
  playSound('click');
  const modal = document.getElementById('addSubjectModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  }
}

function closeAddSubjectModal() {
  playSound('click');
  const modal = document.getElementById('addSubjectModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function saveCustomSubject(e) {
  e.preventDefault();
  playSound('success');

  const name = document.getElementById('inputSubjectName').value.trim();
  const model = document.getElementById('inputSubjectModel').value.trim();
  const desc = document.getElementById('inputSubjectDesc').value.trim();

  const newSubj = {
    id: 'subj_' + Date.now(),
    name: name,
    badge: model || 'Cung Điện Riêng',
    desc: desc || `Ứng dụng phương pháp ${model} để ghi nhớ môn ${name}.`,
    icon: 'book-open',
    color: 'from-purple-600 to-indigo-600',
    type: 'custom',
    topics: []
  };

  try {
    const raw = localStorage.getItem(SUBJECTS_STORAGE_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    custom.push(newSubj);
    localStorage.setItem(SUBJECTS_STORAGE_KEY, JSON.stringify(custom));
  } catch (err) {
    console.error(err);
  }

  closeAddSubjectModal();
  renderSubjectsGrid();
  selectSubject(newSubj.id);
}

function openAddTopicToCustomSubject() {
  const title = prompt('Nhập tên Chủ đề / Bài học mới:');
  if (!title) return;
  const notes = prompt('Nhập ghi chú Cung điện / Mốc vị trí / Từ khóa cần nhớ:') || '';

  const subjects = getStoredSubjects();
  const subj = subjects.find(s => s.id === currentActiveSubjectId);
  if (subj) {
    if (!subj.topics) subj.topics = [];
    subj.topics.push({ title, notes });

    try {
      const raw = localStorage.getItem(SUBJECTS_STORAGE_KEY);
      const custom = raw ? JSON.parse(raw) : [];
      const target = custom.find(s => s.id === currentActiveSubjectId);
      if (target) {
        if (!target.topics) target.topics = [];
        target.topics.push({ title, notes });
        localStorage.setItem(SUBJECTS_STORAGE_KEY, JSON.stringify(custom));
      }
    } catch (e) {}

    selectSubject(currentActiveSubjectId);
  }
}

// ==========================================
// 17. TRIẾT HỌC TOÀN THƯ (BỘ KHUNG 5 CHIỀU ĐẠI TƯ DUY - CHUẨN GIÁO SƯ)
// ==========================================

function escapeHtml(str) {
  if (str === null || str === undefined) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const PHILOSOPHY_STORAGE_KEY = 'supermind_custom_philosophy_v1';
let currentPhiloCivFilter = 'all';
let currentPhiloEraFilter = 'all';
let currentPhiloBranchFilter = 'all';
let currentPhiloSearchQuery = '';

const DEFAULT_PHILOSOPHY_LESSONS = [];

function getStoredPhilosophyLessons() {
  const defaultList = (typeof window !== 'undefined' && window.GLOBAL_PHILOSOPHY_DATA && window.GLOBAL_PHILOSOPHY_DATA.length > 0)
    ? window.GLOBAL_PHILOSOPHY_DATA
    : [];

  try {
    const raw = localStorage.getItem(PHILOSOPHY_STORAGE_KEY);
    if (!raw) return defaultList;
    const custom = JSON.parse(raw);
    if (!Array.isArray(custom) || custom.length === 0) return defaultList;

    // Merge default with custom/updated
    const lessonMap = new Map();
    defaultList.forEach(l => lessonMap.set(l.id, l));
    custom.forEach(l => {
      if (l.isCustom) {
        lessonMap.set(l.id, l);
      } else if (lessonMap.has(l.id)) {
        // Overlay user modifications without wiping new fields
        lessonMap.set(l.id, { ...lessonMap.get(l.id), ...l });
      }
    });
    return Array.from(lessonMap.values());
  } catch (e) {
    console.error('Error loading philosophy lessons:', e);
    return defaultList;
  }
}

function saveStoredPhilosophyLessons(lessons) {
  try {
    localStorage.setItem(PHILOSOPHY_STORAGE_KEY, JSON.stringify(lessons));
  } catch (e) {
    console.error('Error saving philosophy lessons:', e);
  }
}

function filterPhilosophyCivilization(civ) {
  playSound('click');
  currentPhiloCivFilter = civ;

  const buttons = document.querySelectorAll('.philo-civ-btn');
  buttons.forEach(btn => {
    const bCiv = btn.getAttribute('data-civ');
    if (bCiv === civ) {
      btn.className = 'philo-civ-btn px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all bg-indigo-600 text-white shadow';
    } else {
      btn.className = 'philo-civ-btn px-3.5 py-1.5 rounded-lg text-xs font-medium text-slate-400 hover:text-white transition-all';
    }
  });

  renderPhilosophyView();
}

function filterPhilosophyEra(era) {
  playSound('click');
  currentPhiloEraFilter = era;

  const buttons = document.querySelectorAll('.philo-era-btn');
  buttons.forEach(btn => {
    const bEra = btn.getAttribute('data-era');
    if (bEra === era) {
      btn.className = 'philo-era-btn px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap bg-indigo-600 text-white shadow transition-all';
    } else {
      btn.className = 'philo-era-btn px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all';
    }
  });

  renderPhilosophyView();
}

function filterPhilosophyBranch(branch) {
  playSound('click');
  currentPhiloBranchFilter = branch;

  const buttons = document.querySelectorAll('.philo-branch-btn');
  buttons.forEach(btn => {
    const bBranch = btn.getAttribute('data-branch');
    if (bBranch === branch) {
      btn.className = 'philo-branch-btn px-2.5 py-1 rounded-lg text-[11px] font-bold whitespace-nowrap bg-slate-700 text-white transition-all';
    } else {
      btn.className = 'philo-branch-btn px-2.5 py-1 rounded-lg text-[11px] font-medium whitespace-nowrap bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 transition-all';
    }
  });

  renderPhilosophyView();
}

function searchPhilosophy(query) {
  currentPhiloSearchQuery = (query || '').toLowerCase().trim();
  renderPhilosophyView();
}


// ==========================================
// 16. PROGRESS TRACKING & MASTERCLASS ENGINE (100 CỘT TRỤ)
// ==========================================
const PROGRESS_STORAGE_KEY = 'supermind_learning_progress_v1';
let currentPhiloProgressFilter = 'all'; // 'all' | 'read' | 'memorized' | 'mastered' | 'unread'
let currentMasterclassLessonId = null;

function getLearningProgressMap() {
  try {
    const raw = localStorage.getItem(PROGRESS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch (e) {
    return {};
  }
}

function getLessonProgress(lessonId) {
  const map = getLearningProgressMap();
  return map[lessonId] || { status: 'none', timestamp: 0 };
}

function setLessonProgress(lessonId, status) {
  const map = getLearningProgressMap();
  map[lessonId] = {
    status: status, // 'none' | 'read' | 'memorized' | 'mastered'
    timestamp: Date.now()
  };
  localStorage.setItem(PROGRESS_STORAGE_KEY, JSON.stringify(map));
  
  if (status === 'mastered') {
    playSound('success');
  } else {
    playSound('click');
  }

  updateProgressDashboard();
  updateOverviewPhiloMetrics();
  updateMasterclassModalStatusUI(lessonId);
  renderPhilosophyView();
}

function getProgressStats() {
  const allLessons = getStoredPhilosophyLessons();
  const map = getLearningProgressMap();
  let readCount = 0;
  let memorizedCount = 0;
  let masteredCount = 0;

  allLessons.forEach(l => {
    const p = map[l.id];
    if (p) {
      if (p.status === 'read') readCount++;
      else if (p.status === 'memorized') memorizedCount++;
      else if (p.status === 'mastered') masteredCount++;
    }
  });

  const total = allLessons.length;
  const started = readCount + memorizedCount + masteredCount;
  const percent = total > 0 ? Math.round(((masteredCount * 1.0 + memorizedCount * 0.7 + readCount * 0.3) / total) * 100) : 0;

  return { total, started, readCount, memorizedCount, masteredCount, percent };
}

function updateProgressDashboard() {
  const stats = getProgressStats();
  
  const percentEl = document.getElementById('philoProgressPercentText');
  const barEl = document.getElementById('philoProgressBar');
  const totalEl = document.getElementById('statTotalCount');
  const readEl = document.getElementById('statReadCount');
  const memEl = document.getElementById('statMemorizedCount');
  const mastEl = document.getElementById('statMasteredCount');

  if (percentEl) percentEl.textContent = stats.percent + '%';
  if (barEl) barEl.style.width = Math.min(100, Math.max(0, stats.percent)) + '%';
  if (totalEl) totalEl.textContent = stats.total;
  if (readEl) readEl.textContent = stats.readCount;
  if (memEl) memEl.textContent = stats.memorizedCount;
  if (mastEl) mastEl.textContent = stats.masteredCount;
}

function updateOverviewPhiloMetrics() {
  const stats = getProgressStats();
  const progEl = document.getElementById('overviewPhiloProgress');
  const percEl = document.getElementById('overviewPhiloPercent');
  if (progEl) progEl.textContent = (stats.masteredCount + stats.memorizedCount) + ' / ' + stats.total;
  if (percEl) percEl.textContent = stats.percent + '% Tinh Thông';
}

function filterPhilosophyProgress(status) {
  playSound('click');
  currentPhiloProgressFilter = status;

  const btnMap = {
    'all': 'btnProgFilterAll',
    'read': 'btnProgFilterRead',
    'memorized': 'btnProgFilterMemorized',
    'mastered': 'btnProgFilterMastered'
  };

  Object.entries(btnMap).forEach(([k, id]) => {
    const el = document.getElementById(id);
    if (!el) return;
    if (k === status) {
      el.className = 'philo-prog-btn p-2.5 rounded-xl bg-indigo-950/80 border border-indigo-400 text-left transition-all shadow-md';
    } else {
      el.className = 'philo-prog-btn p-2.5 rounded-xl bg-slate-900/60 border border-slate-800 text-left transition-all hover:bg-slate-800';
    }
  });

  renderPhilosophyView();
}

function openPhilosophyMasterclass(lessonId) {
  playSound('click');
  currentMasterclassLessonId = lessonId;
  const allLessons = getStoredPhilosophyLessons();
  const lesson = allLessons.find(l => l.id === lessonId);
  if (!lesson) return;

  const modal = document.getElementById('philosophyMasterclassModal');
  if (!modal) return;

  // Header tags
  const isEast = lesson.civilization === 'east';
  const iconBadge = document.getElementById('masterclassIconBadge');
  if (iconBadge) {
    iconBadge.innerHTML = isEast ? '☯️' : '🏛️';
    iconBadge.className = isEast 
      ? 'w-12 h-12 rounded-2xl bg-gradient-to-tr from-amber-600 to-emerald-600 flex items-center justify-center text-white shadow-lg text-xl font-bold'
      : 'w-12 h-12 rounded-2xl bg-gradient-to-tr from-indigo-600 to-cyan-600 flex items-center justify-center text-white shadow-lg text-xl font-bold';
  }

  const titleEl = document.getElementById('masterclassTitle');
  if (titleEl) titleEl.textContent = lesson.name;

  const roleEl = document.getElementById('masterclassRole');
  if (roleEl) roleEl.textContent = (lesson.role || '') + (lesson.majorWorks ? ' • Tác phẩm: ' + lesson.majorWorks : '');

  const eraTag = document.getElementById('masterclassEraTag');
  if (eraTag) eraTag.textContent = lesson.eraLabel || 'Thời Kỳ';

  const branchTag = document.getElementById('masterclassBranchTag');
  if (branchTag) branchTag.textContent = lesson.branchLabel || 'Chuyên Ngành';

  // Pagination indicator
  const idx = allLessons.findIndex(l => l.id === lessonId);
  const pagEl = document.getElementById('masterclassPagination');
  if (pagEl) pagEl.textContent = 'Cột Trụ ' + (idx + 1) + ' / ' + allLessons.length;

  // Update Status UI inside modal
  updateMasterclassModalStatusUI(lessonId);

  // Render 7 parts of Masterclass
  const bodyEl = document.getElementById('masterclassContentBody');
  if (bodyEl) {
    bodyEl.innerHTML = generateMasterclassLessonHTML(lesson);
  }

  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closePhilosophyMasterclass() {
  playSound('click');
  const modal = document.getElementById('philosophyMasterclassModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function navigateMasterclass(delta) {
  const allLessons = getStoredPhilosophyLessons();
  if (allLessons.length === 0) return;
  let idx = allLessons.findIndex(l => l.id === currentMasterclassLessonId);
  if (idx === -1) idx = 0;
  idx = (idx + delta + allLessons.length) % allLessons.length;
  openPhilosophyMasterclass(allLessons[idx].id);
}

function handleSetCurrentMasterclassStatus(status) {
  if (!currentMasterclassLessonId) return;
  setLessonProgress(currentMasterclassLessonId, status);
}

function updateMasterclassModalStatusUI(lessonId) {
  const p = getLessonProgress(lessonId);
  const status = p.status || 'none';

  const statusTag = document.getElementById('masterclassProgressTag');
  if (statusTag) {
    if (status === 'mastered') {
      statusTag.className = 'text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 flex items-center gap-1';
      statusTag.innerHTML = '<span>👑</span> ĐÃ TINH THÔNG';
    } else if (status === 'memorized') {
      statusTag.className = 'text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/50 flex items-center gap-1';
      statusTag.innerHTML = '<span>🧠</span> ĐÃ THUỘC LOCI';
    } else if (status === 'read') {
      statusTag.className = 'text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/50 flex items-center gap-1';
      statusTag.innerHTML = '<span>📖</span> ĐÃ ĐỌC BÀI';
    } else {
      statusTag.className = 'text-[10px] font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 flex items-center gap-1';
      statusTag.innerHTML = '<span>⚪</span> CHƯA HỌC';
    }
  }

  // Cập nhật trạng thái active của 4 nút
  const btnNone = document.getElementById('btnSetStatusNone');
  const btnRead = document.getElementById('btnSetStatusRead');
  const btnMem = document.getElementById('btnSetStatusMemorized');
  const btnMast = document.getElementById('btnSetStatusMastered');

  if (btnNone) btnNone.className = (status === 'none')
    ? 'px-2.5 py-1 rounded-lg border border-slate-600 bg-slate-700 text-white font-bold text-[11px]'
    : 'px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-white text-[11px]';

  if (btnRead) btnRead.className = (status === 'read')
    ? 'px-2.5 py-1 rounded-lg border border-blue-500 bg-blue-600/30 text-blue-200 font-bold text-[11px]'
    : 'px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-blue-300 text-[11px]';

  if (btnMem) btnMem.className = (status === 'memorized')
    ? 'px-2.5 py-1 rounded-lg border border-purple-500 bg-purple-600/30 text-purple-200 font-bold text-[11px]'
    : 'px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-purple-300 text-[11px]';

  if (btnMast) btnMast.className = (status === 'mastered')
    ? 'px-2.5 py-1 rounded-lg border border-amber-500 bg-amber-500/30 text-amber-200 font-bold text-[11px] shadow'
    : 'px-2.5 py-1 rounded-lg border border-slate-800 bg-slate-900 text-slate-400 hover:text-amber-300 text-[11px]';
}

function practiceActiveRecallCurrentLesson() {
  if (!currentMasterclassLessonId) return;
  closePhilosophyMasterclass();
  const allLessons = getStoredPhilosophyLessons();
  const idx = allLessons.findIndex(l => l.id === currentMasterclassLessonId);
  if (idx !== -1) {
    currentPhiloQuizList = [allLessons[idx]];
    currentPhiloQuizIndex = 0;
    openPhilosophyQuizModal();
  }
}

function generateMasterclassLessonHTML(lesson) {
  const isEast = lesson.civilization === 'east';
  const accentColor = isEast ? 'amber' : 'indigo';

  return `
    <div class="space-y-6 font-sans">

      <!-- MỞ ĐẦU: TỔNG QUAN ĐẠI TRỤ CỘT -->
      <div class="p-4 rounded-2xl bg-gradient-to-r from-${accentColor}-950/40 via-cardBg to-slate-900 border border-${accentColor}-500/30 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <span class="text-[10px] font-mono uppercase tracking-wider text-amber-400 font-bold">Tọa độ tư tưởng • Đại Toàn Thư</span>
          <h4 class="text-lg font-black text-white mt-0.5">${escapeHtml(lesson.name)} (${escapeHtml(lesson.lifespan || 'Cổ Đại')})</h4>
          <p class="text-xs text-slate-300 mt-1">${escapeHtml(lesson.role || '')}</p>
        </div>
        <div class="flex items-center gap-2">
          <span class="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-black shadow-inner flex items-center gap-1.5">
            <i data-lucide="key" class="w-3.5 h-3.5 text-amber-400"></i>
            <span>Mỏ Neo: ${escapeHtml(lesson.anchorKeyword || '')}</span>
          </span>
        </div>
      </div>

      <!-- PHẦN 1: BỐI CẢNH LỊCH SỬ & CÚ SỐC NHẬN THỨC -->
      <div class="p-5 rounded-2xl bg-yellow-950/20 border border-yellow-600/30 space-y-2">
        <div class="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-amber-500/20 text-amber-400">⚡ PHẦN 1</span>
          <span>Bối Cảnh Lịch Sử & Cú Sốc Nhận Thức (Epistemic Wonder)</span>
        </div>
        <p class="text-sm text-amber-100/90 leading-relaxed font-sans whitespace-pre-line pt-1">
          ${escapeHtml(lesson.d1_shock)}
        </p>
        ${lesson.majorWorks ? `
          <div class="mt-2 pt-2 border-t border-yellow-800/30 text-xs text-amber-300/80 italic font-serif">
            📖 <strong>Tác phẩm & Văn bản gốc:</strong> ${escapeHtml(lesson.majorWorks)}
          </div>
        ` : ''}
      </div>

      <!-- PHẦN 2: RÃ MÁY NGUYÊN LÝ GỐC (FIRST PRINCIPLES) -->
      <div class="p-5 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-2">
        <div class="flex items-center gap-2 text-xs font-black text-cyan-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-cyan-500/20 text-cyan-400">🔬 PHẦN 2</span>
          <span>Rã Máy Nguyên Lý Gốc (First Principles Formula & Bản Đồ Khái Niệm)</span>
        </div>
        <p class="text-sm text-cyan-100/90 leading-relaxed font-sans whitespace-pre-line pt-1">
          ${escapeHtml(lesson.d2_principle)}
        </p>
      </div>

      <!-- PHẦN 3: KỸ THUẬT FEYNMAN — GIẢI THÍCH CHO ĐỨA TRẺ 10 TUỔI -->
      <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-3">
        <div class="flex items-center gap-2 text-xs font-black text-emerald-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">🧸 PHẦN 3</span>
          <span>Kỹ Thuật Feynman: Giảng Giải Cho Đứa Trẻ 10 Tuổi (Jargon-Free Analogy)</span>
        </div>
        <div class="p-3.5 rounded-xl bg-slate-900/80 border border-emerald-800/40 text-xs text-slate-200 leading-relaxed space-y-2">
          <p class="font-bold text-emerald-400">💡 Ẩn dụ cốt lõi đời thường:</p>
          <p>
            Tưởng tượng tư tưởng của <strong>${escapeHtml(lesson.name)}</strong> giống như một quy luật trong một trò chơi thân thuộc. 
            Nếu bạn tước bỏ mọi thuật ngữ cổ ngữ phức tạp, điều triết gia muốn nhắn nhủ thế giới tóm gọn lại là:
          </p>
          <blockquote class="italic border-l-2 border-emerald-400 pl-3 text-emerald-200">
            "Hãy nhìn vào mỏ neo '<strong>${escapeHtml(lesson.anchorKeyword)}</strong>': Cuộc sống xung quanh dẫu có hàng vạn biến chuyển hỗn loạn, nếu bạn nắm được mắt xích gốc này thì toàn bộ câu đố sẽ tự động có lời giải."
          </blockquote>
        </div>
      </div>

      <!-- PHẦN 4: TƯ DUY ĐẢO NGƯỢC (INVERSION) & ĐẤU TRƯỜNG PHẢN BIỆN -->
      <div class="p-5 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-2">
        <div class="flex items-center gap-2 text-xs font-black text-rose-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-rose-500/20 text-rose-400">⚔️ PHẦN 4</span>
          <span>Tư Duy Đảo Ngược (Inversion) & Đấu Trường Phản Biện (Combat Debate)</span>
        </div>
        <p class="text-sm text-rose-100/90 leading-relaxed font-sans whitespace-pre-line pt-1">
          ${escapeHtml(lesson.d3_combat)}
        </p>
        <div class="mt-2 p-3 rounded-xl bg-rose-950/40 border border-rose-800/40 text-xs text-rose-200">
          ⚠️ <strong>Cạm bẫy tư duy cần tránh (Inversion Warning):</strong> Đừng bao giờ biến tư tưởng này thành giáo điều cực đoan mù quáng! Hãy luôn lật ngược câu hỏi: "Trong tình huống nào thì nguyên lý này sẽ sụp đổ?".
        </div>
      </div>

      <!-- PHẦN 5: KHÓA SIÊU TRÍ NHỚ VĨNH CỬU (CUNG ĐIỆN LOCI & MAJOR CODE 00-99) -->
      <div class="p-5 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-3">
        <div class="flex items-center gap-2 text-xs font-black text-purple-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-purple-500/20 text-purple-400">🧠 PHẦN 5</span>
          <span>Khóa Siêu Trí Nhớ Vĩnh Cửu: Cung Điện Ký Ức (Loci) & Mã Số Major (00-99)</span>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-slate-900/80 border border-purple-800/40">
            <span class="text-purple-400 font-bold block mb-1">🔢 Mã Số Major System 00-99:</span>
            <span class="font-mono text-white text-sm font-bold">${escapeHtml(lesson.pegCode || 'Mã chuyên biệt')}</span>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/80 border border-purple-800/40">
            <span class="text-purple-400 font-bold block mb-1">🔑 Từ Khóa Mỏ Neo Kích Hoạt Não:</span>
            <span class="text-amber-300 font-bold text-sm">${escapeHtml(lesson.anchorKeyword || '')}</span>
          </div>
        </div>
        <div class="p-3 rounded-xl bg-purple-900/30 border border-purple-700/40 text-xs text-purple-100 leading-relaxed">
          <p class="font-bold text-purple-300 mb-1">🏛️ Hoạt cảnh Cung Điện Ký Ức (V.E.E.A Rule):</p>
          <p class="whitespace-pre-line">${escapeHtml(lesson.d4_memory)}</p>
        </div>
      </div>

      <!-- PHẦN 6: VẤN ĐÁP BIỆN CHỨNG SOCRATIC & ACTIVE RECALL FLASHCARD -->
      <div class="p-5 rounded-2xl bg-blue-950/20 border border-blue-500/30 space-y-3">
        <div class="flex items-center gap-2 text-xs font-black text-blue-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-blue-500/20 text-blue-400">❓ PHẦN 6</span>
          <span>Vấn Đáp Biện Chứng Socratic & Tự Kiểm Tra Phản Xạ (Active Recall)</span>
        </div>
        <div class="space-y-2 text-xs">
          <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <p class="font-bold text-cyan-300">1. Câu hỏi Bản Thể Luận:</p>
            <p class="text-slate-300 mt-0.5">Theo ${escapeHtml(lesson.name)}, thực tại cốt lõi đằng sau những hiện tượng biến thiên là gì?</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <p class="font-bold text-cyan-300">2. Câu hỏi Phản Đề Đối Lập:</p>
            <p class="text-slate-300 mt-0.5">Nếu một người phản bác lại quan điểm này, vũ khí lý luận mạnh nhất của họ là gì?</p>
          </div>
          <div class="p-3 rounded-xl bg-slate-900/80 border border-slate-800">
            <p class="font-bold text-cyan-300">3. Câu hỏi Ứng Dụng Đời Thực:</p>
            <p class="text-slate-300 mt-0.5">Làm thế nào để áp dụng tư tưởng này vào giải quyết một bế tắc cá nhân trong tuần này?</p>
          </div>
        </div>
      </div>

      <!-- PHẦN 7: CÔNG TẮC ĐỜI THỰC & ỨNG DỤNG THỰC CHIẾN -->
      <div class="p-5 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-2">
        <div class="flex items-center gap-2 text-xs font-black text-emerald-300 uppercase tracking-wide">
          <span class="p-1 rounded-lg bg-emerald-500/20 text-emerald-400">🕹️ PHẦN 7</span>
          <span>Công Tắc Đời Thực & Ứng Dụng Thực Chiến (Actionable Superpower)</span>
        </div>
        <p class="text-sm text-emerald-100/90 leading-relaxed font-sans whitespace-pre-line pt-1">
          ${escapeHtml(lesson.d5_switch)}
        </p>
      </div>

    </div>
  `;
}

function renderPhilosophyView() {
  const container = document.getElementById('philosophyCardsContainer');
  if (!container) return;

  const allLessons = getStoredPhilosophyLessons();

  const filtered = allLessons.filter(lesson => {
    // Civilization filter (all | west | east)
    if (currentPhiloCivFilter !== 'all' && lesson.civilization !== currentPhiloCivFilter) {
      return false;
    }
    // Era filter
    if (currentPhiloEraFilter !== 'all') {
      if (currentPhiloEraFilter === 'vietnam') {
        if (!lesson.civilizationLabel || !lesson.civilizationLabel.includes('Đại Việt')) return false;
      } else if (lesson.era !== currentPhiloEraFilter) {
        return false;
      }
    }
    // Branch filter
    if (currentPhiloBranchFilter !== 'all' && lesson.branch !== currentPhiloBranchFilter) {
      return false;
    }
    // Progress filter
    if (currentPhiloProgressFilter !== 'all') {
      const prog = getLessonProgress(lesson.id);
      const status = prog.status || 'none';
      if (currentPhiloProgressFilter === 'unread' && status !== 'none') return false;
      if (currentPhiloProgressFilter !== 'unread' && status !== currentPhiloProgressFilter) return false;
    }
    // Search query
    if (currentPhiloSearchQuery) {
      const q = currentPhiloSearchQuery;
      const haystack = [
        lesson.name,
        lesson.role,
        lesson.anchorKeyword,
        lesson.pegCode,
        lesson.civilizationLabel || '',
        lesson.branchLabel || '',
        lesson.majorWorks || '',
        lesson.d1_shock,
        lesson.d2_principle,
        lesson.d3_combat,
        lesson.d4_memory,
        lesson.d5_switch
      ].join(' ').toLowerCase();
      if (!haystack.includes(q)) return false;
    }
    return true;
  });

  // Dynamic counter badge
  const badgeEl = document.getElementById('philoCountBadge');
  if (badgeEl) {
    badgeEl.textContent = '📚 ' + filtered.length + ' / ' + allLessons.length + ' Cột Trụ Toàn Cầu';
  }

  // Update progress dashboard
  updateProgressDashboard();
  updateOverviewPhiloMetrics();

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center rounded-2xl bg-cardBg border border-slate-800 space-y-3">
        <div class="text-3xl text-indigo-400">🔍</div>
        <h4 class="text-sm font-bold text-white">Không tìm thấy triết gia hoặc nội dung phù hợp bộ lọc</h4>
        <p class="text-xs text-slate-400">Hãy thử đổi từ khóa tìm kiếm hoặc bấm nút dưới đây để hiện toàn bộ 100 cột trụ.</p>
        <button onclick="currentPhiloCivFilter='all'; currentPhiloEraFilter='all'; currentPhiloBranchFilter='all'; currentPhiloProgressFilter='all'; currentPhiloSearchQuery=''; if(document.getElementById('philosophySearchInput')) document.getElementById('philosophySearchInput').value=''; filterPhilosophyCivilization('all'); filterPhilosophyEra('all'); filterPhilosophyBranch('all'); filterPhilosophyProgress('all');" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold">
          Xóa Bộ Lọc (Hiện Toàn Bộ 100 Cột Trụ)
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(lesson => {
    const isZero = !!lesson.isMilestoneZero;
    const isEast = lesson.civilization === 'east';
    const isVN = lesson.civilizationLabel && lesson.civilizationLabel.includes('Đại Việt');

    const cardBorder = isZero
      ? 'border-2 border-amber-500/70 shadow-[0_0_30px_rgba(245,158,11,0.2)] bg-gradient-to-b from-amber-950/20 via-cardBg to-slate-900/90'
      : (isVN
          ? 'border border-red-500/40 hover:border-amber-400/70 bg-gradient-to-b from-red-950/10 via-cardBg to-slate-900/90'
          : (isEast
              ? 'border border-amber-500/30 hover:border-amber-400/60 bg-cardBg'
              : 'border border-slate-800 hover:border-indigo-500/40 bg-cardBg'));

    const civBadge = isVN
      ? `<span class="px-2.5 py-0.5 rounded-full bg-red-950/60 text-amber-300 border border-red-500/40 text-[10px] font-bold">🇻🇳 Đại Việt</span>`
      : (isEast
          ? `<span class="px-2.5 py-0.5 rounded-full bg-amber-950/60 text-amber-300 border border-amber-500/40 text-[10px] font-semibold">☯️ ${escapeHtml(lesson.civilizationLabel || 'Phương Đông')}</span>`
          : `<span class="px-2.5 py-0.5 rounded-full bg-blue-950/60 text-blue-300 border border-blue-500/40 text-[10px] font-semibold">🏛️ ${escapeHtml(lesson.civilizationLabel || 'Phương Tây')}</span>`);

    const branchBadge = lesson.branchLabel
      ? `<span class="px-2.5 py-0.5 rounded-full bg-purple-950/60 text-purple-300 border border-purple-500/40 text-[10px] font-medium">${escapeHtml(lesson.branchLabel)}</span>`
      : '';

    // Trạng thái tiến độ
    const prog = getLessonProgress(lesson.id);
    const status = prog.status || 'none';
    let progressBadge = '';
    if (status === 'mastered') {
      progressBadge = `<span class="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 text-[10px] font-bold flex items-center gap-1"><span>👑</span> TINH THÔNG</span>`;
    } else if (status === 'memorized') {
      progressBadge = `<span class="px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/50 text-[10px] font-bold flex items-center gap-1"><span>🧠</span> ĐÃ NHỚ LOCI</span>`;
    } else if (status === 'read') {
      progressBadge = `<span class="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/50 text-[10px] font-bold flex items-center gap-1"><span>📖</span> ĐÃ ĐỌC BÀI</span>`;
    } else {
      progressBadge = `<span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700 text-[10px] font-medium">⚪ CHƯA HỌC</span>`;
    }

    return `
      <div id="philo-card-${lesson.id}" class="rounded-3xl ${cardBorder} p-6 sm:p-7 space-y-6 transition-all duration-300">
        
        <!-- CARD HEADER -->
        <div class="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 border-b border-slate-800/80">
          <div class="space-y-1.5">
            <div class="flex flex-wrap items-center gap-2">
              ${isZero ? `
                <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-yellow-500/20 border border-amber-500/40 text-amber-300 text-[11px] font-black uppercase tracking-wider animate-pulse">
                  ⭐ CỘT MỐC SỐ 0: CỘI NGUỒN SỰ KINH NGẠC (THAUMAZEIN)
                </span>
              ` : `
                ${civBadge}
                <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700 text-[10px] font-semibold">
                  ${escapeHtml(lesson.eraLabel || 'Kỷ Nguyên')}
                </span>
                ${branchBadge}
              `}
              <span class="px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-mono">
                📅 ${escapeHtml(lesson.lifespan || '')}
              </span>
              ${progressBadge}
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>${escapeHtml(lesson.name)}</span>
            </h3>
            <p class="text-xs text-slate-400 font-medium">${escapeHtml(lesson.role || '')}</p>
            ${lesson.majorWorks ? `
              <p class="text-xs text-slate-300/90 bible-quote pt-0.5">
                <span class="not-italic font-sans text-[10px] font-bold text-amber-400 uppercase tracking-wider">Tác phẩm / Luận điển gốc:</span> ${escapeHtml(lesson.majorWorks)}
              </p>
            ` : ''}
          </div>

          <!-- Mỏ neo & Nút bấm quản lý -->
          <div class="flex flex-col sm:items-end gap-2">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-black shadow-inner flex items-center gap-1.5">
                <i data-lucide="key" class="w-3.5 h-3.5 text-amber-400"></i>
                <span>${escapeHtml(lesson.anchorKeyword || '')}</span>
              </span>
              <button onclick="editPhilosophyLesson('${lesson.id}')" title="Chỉnh sửa bài học này" class="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-amber-400 border border-slate-700 text-xs transition-colors">
                <i data-lucide="edit-3" class="w-4 h-4"></i>
              </button>
              <button onclick="deletePhilosophyLesson('${lesson.id}')" title="Xóa bài học này" class="p-2 rounded-xl bg-slate-800 hover:bg-rose-900/40 text-slate-300 hover:text-rose-400 border border-slate-700 text-xs transition-colors">
                <i data-lucide="trash-2" class="w-4 h-4"></i>
              </button>
            </div>
            ${lesson.pegCode ? `
              <div class="text-[11px] font-mono text-indigo-300 flex items-center gap-1.5">
                <i data-lucide="cpu" class="w-3.5 h-3.5 text-indigo-400"></i>
                <span>Mã 00-99: <strong>${escapeHtml(lesson.pegCode)}</strong></span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- BỘ KHUNG 5 CHIỀU ĐẠI TƯ DUY -->
        <div class="grid grid-cols-1 gap-4" id="philo-details-${lesson.id}">
          
          <!-- CHIỀU 1: CÚ SỐC KINH NGẠC -->
          <div class="p-4 rounded-2xl bg-yellow-950/20 border border-yellow-600/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wide">
              <span>⚡ Chiều 1: Cú Sốc Kinh Ngạc (Epistemic Wonder Shock & Khởi Thủy Câu Hỏi)</span>
            </div>
            <p class="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans whitespace-pre-line">
              ${escapeHtml(lesson.d1_shock)}
            </p>
          </div>

          <!-- CHIỀU 2: RÃ MÁY NGUYÊN LÝ GỐC -->
          <div class="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-cyan-300 uppercase tracking-wide">
              <span>🔬 Chiều 2: Rã Máy Nguyên Lý Gốc (First Principles Formula & Bản Đồ Khái Niệm)</span>
            </div>
            <p class="text-xs sm:text-sm text-cyan-100/90 leading-relaxed font-sans whitespace-pre-line">
              ${escapeHtml(lesson.d2_principle)}
            </p>
          </div>

          <!-- CHIỀU 3: ĐẤU TRƯỜNG PHẢN BIỆN -->
          <div class="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-rose-300 uppercase tracking-wide">
              <span>⚔️ Chiều 3: Đấu Trường Phản Biện (Biện Chứng Luận Chiến: Luận Điểm vs Phản Đề)</span>
            </div>
            <p class="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-sans whitespace-pre-line">
              ${escapeHtml(lesson.d3_combat)}
            </p>
          </div>

          <!-- CHIỀU 4: KHÓA TRÍ NHỚ VĨNH CỬU -->
          <div class="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-purple-300 uppercase tracking-wide">
              <span>🧠 Chiều 4: Khóa Trí Nhớ Vĩnh Cửu (Hình Tượng Dị Thường + Móc Mốc Cung Điện Ký Ức)</span>
            </div>
            <p class="text-xs sm:text-sm text-purple-100/90 leading-relaxed font-sans whitespace-pre-line">
              ${escapeHtml(lesson.d4_memory)}
            </p>
          </div>

          <!-- CHIỀU 5: CÔNG TẮC ĐỜI THỰC -->
          <div class="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-emerald-300 uppercase tracking-wide">
              <span>🕹️ Chiều 5: Công Tắc Đời Thực (Real-Life Superpower & Ra Quyết Định)</span>
            </div>
            <p class="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-sans whitespace-pre-line">
              ${escapeHtml(lesson.d5_switch)}
            </p>
          </div>

        </div>

        <!-- CÔNG CỤ MASTERCLASS & ĐIỀU KHIỂN TIẾN ĐỘ THỰC HỌC -->
        <div class="pt-4 border-t border-slate-800/80 flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          <!-- NÚT MỞ BÀI GIẢNG MASTERCLASS -->
          <div class="flex flex-wrap items-center gap-2">
            <button onclick="openPhilosophyMasterclass('${lesson.id}')" class="px-4 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-brand-600 hover:from-indigo-500 hover:to-brand-500 text-white font-bold text-xs shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all hover:scale-[1.02]">
              <i data-lucide="book-open-check" class="w-4 h-4 text-amber-300"></i>
              <span>📖 Mở Bài Giảng Toàn Thư (Masterclass 7 Phần)</span>
            </button>
            <button onclick="togglePhiloDrillMode('${lesson.id}')" class="px-3 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-1.5 transition-all">
              <i data-lucide="eye" class="w-3.5 h-3.5 text-indigo-400"></i>
              <span id="drill-toggle-label-${lesson.id}">Thử Thách 5D</span>
            </button>
          </div>

          <!-- BỘ NÚT ĐÁNH DẤU TIẾN ĐỘ NHANH TRÊN CARD -->
          <div class="flex items-center gap-1 p-1 bg-slate-950 rounded-xl border border-slate-800 text-[11px]">
            <span class="text-slate-500 text-[10px] font-bold px-2">TIẾN ĐỘ:</span>
            <button onclick="setLessonProgress('${lesson.id}', 'none')" title="Đánh dấu Chưa học" class="px-2 py-1 rounded-lg transition-all ${status === 'none' ? 'bg-slate-700 text-white font-bold' : 'text-slate-500 hover:text-slate-300'}">
              ⚪
            </button>
            <button onclick="setLessonProgress('${lesson.id}', 'read')" title="Đánh dấu Đã đọc" class="px-2.5 py-1 rounded-lg transition-all ${status === 'read' ? 'bg-blue-600 text-white font-bold shadow' : 'text-slate-400 hover:text-blue-300'}">
              📖 Đã đọc
            </button>
            <button onclick="setLessonProgress('${lesson.id}', 'memorized')" title="Đánh dấu Đã nhớ Loci/Major" class="px-2.5 py-1 rounded-lg transition-all ${status === 'memorized' ? 'bg-purple-600 text-white font-bold shadow' : 'text-slate-400 hover:text-purple-300'}">
              🧠 Đã nhớ
            </button>
            <button onclick="setLessonProgress('${lesson.id}', 'mastered')" title="Đánh dấu Tinh thông" class="px-2.5 py-1 rounded-lg transition-all ${status === 'mastered' ? 'bg-amber-500 text-slate-950 font-black shadow' : 'text-slate-400 hover:text-amber-300'}">
              👑 Tinh thông
            </button>
          </div>

        </div>

      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function togglePhiloDrillMode(id) {
  playSound('click');
  const detailsEl = document.getElementById(`philo-details-${id}`);
  const labelEl = document.getElementById(`drill-toggle-label-${id}`);
  if (!detailsEl || !labelEl) return;

  const isHidden = detailsEl.classList.contains('drill-hidden');
  if (isHidden) {
    detailsEl.classList.remove('drill-hidden');
    // Show all children
    Array.from(detailsEl.children).forEach((child, idx) => {
      child.style.display = 'block';
    });
    labelEl.textContent = 'Chế Độ Thử Thách Não Bộ (Ẩn Đáp Án Để Tự Nhớ)';
  } else {
    detailsEl.classList.add('drill-hidden');
    // Keep only Dimension 1 (Shock) visible, hide Dimensions 2, 3, 4, 5 to force brain retrieval!
    Array.from(detailsEl.children).forEach((child, idx) => {
      if (idx > 0) child.style.display = 'none';
    });
    labelEl.textContent = 'Hiện Lại Toàn Bộ 5 Chiều Ma Trận';
  }
}

// MODAL ADD / EDIT PHILOSOPHY
function openAddPhilosophyModal() {
  playSound('click');
  document.getElementById('philoEditId').value = '';
  document.getElementById('philoModalTitle').innerHTML = `
    <i data-lucide="sparkles" class="w-5 h-5 text-indigo-400"></i> Thêm Triết Gia / Khái Niệm Mới (Ma Trận 5 Chiều)
  `;
  document.getElementById('philoSubmitBtn').textContent = 'Lưu Bài Học 5 Chiều';

  document.getElementById('philoInputName').value = '';
  document.getElementById('philoInputEra').value = 'ancient';
  document.getElementById('philoInputLifespan').value = '';
  document.getElementById('philoInputRole').value = '';
  document.getElementById('philoInputAnchor').value = '';
  document.getElementById('philoInputPeg').value = '';
  document.getElementById('philoInputD1').value = '';
  document.getElementById('philoInputD2').value = '';
  document.getElementById('philoInputD3').value = '';
  document.getElementById('philoInputD4').value = '';
  document.getElementById('philoInputD5').value = '';

  const modal = document.getElementById('addPhilosophyModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
  }
}

function closeAddPhilosophyModal() {
  playSound('click');
  const modal = document.getElementById('addPhilosophyModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function editPhilosophyLesson(id) {
  playSound('click');
  const allLessons = getStoredPhilosophyLessons();
  const lesson = allLessons.find(l => l.id === id);
  if (!lesson) return;

  document.getElementById('philoEditId').value = lesson.id;
  document.getElementById('philoModalTitle').innerHTML = `
    <i data-lucide="edit" class="w-5 h-5 text-amber-400"></i> Sửa Bài Học: ${lesson.name}
  `;
  document.getElementById('philoSubmitBtn').textContent = 'Cập Nhật Thay Đổi';

  document.getElementById('philoInputName').value = lesson.name || '';
  document.getElementById('philoInputEra').value = lesson.era || 'ancient';
  document.getElementById('philoInputLifespan').value = lesson.lifespan || '';
  document.getElementById('philoInputRole').value = lesson.role || '';
  document.getElementById('philoInputAnchor').value = lesson.anchorKeyword || '';
  document.getElementById('philoInputPeg').value = lesson.pegCode || '';
  document.getElementById('philoInputD1').value = lesson.d1_shock || '';
  document.getElementById('philoInputD2').value = lesson.d2_principle || '';
  document.getElementById('philoInputD3').value = lesson.d3_combat || '';
  document.getElementById('philoInputD4').value = lesson.d4_memory || '';
  document.getElementById('philoInputD5').value = lesson.d5_switch || '';

  const modal = document.getElementById('addPhilosophyModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
  }
}

function savePhilosophyLesson(event) {
  event.preventDefault();
  playSound('success');

  const editId = document.getElementById('philoEditId').value.trim();
  const name = document.getElementById('philoInputName').value.trim();
  const era = document.getElementById('philoInputEra').value;
  const lifespan = document.getElementById('philoInputLifespan').value.trim();
  const role = document.getElementById('philoInputRole').value.trim();
  const anchorKeyword = document.getElementById('philoInputAnchor').value.trim();
  const pegCode = document.getElementById('philoInputPeg').value.trim();
  const d1_shock = document.getElementById('philoInputD1').value.trim();
  const d2_principle = document.getElementById('philoInputD2').value.trim();
  const d3_combat = document.getElementById('philoInputD3').value.trim();
  const d4_memory = document.getElementById('philoInputD4').value.trim();
  const d5_switch = document.getElementById('philoInputD5').value.trim();

  const eraLabels = {
    ancient: '🏛️ Cổ Đại',
    medieval: '⛪ Trung Cổ',
    enlightenment: '💡 Cận Đại & Khai Sáng',
    nineteenth: '⚙️ Thế Kỷ 19',
    modern: '🌐 TK 20 & Đương Đại'
  };

  const allLessons = getStoredPhilosophyLessons();

  if (editId) {
    // Update existing
    const idx = allLessons.findIndex(l => l.id === editId);
    if (idx !== -1) {
      allLessons[idx] = {
        ...allLessons[idx],
        name,
        era,
        eraLabel: eraLabels[era] || 'Kỷ Nguyên',
        lifespan,
        role,
        anchorKeyword,
        pegCode,
        d1_shock,
        d2_principle,
        d3_combat,
        d4_memory,
        d5_switch
      };
    }
  } else {
    // Add new
    const newId = 'philo_' + Date.now();
    allLessons.push({
      id: newId,
      name,
      era,
      eraLabel: eraLabels[era] || 'Kỷ Nguyên',
      lifespan,
      role,
      anchorKeyword,
      pegCode,
      isMilestoneZero: false,
      d1_shock,
      d2_principle,
      d3_combat,
      d4_memory,
      d5_switch
    });
  }

  saveStoredPhilosophyLessons(allLessons);
  closeAddPhilosophyModal();
  renderPhilosophyView();
}

function deletePhilosophyLesson(id) {
  const allLessons = getStoredPhilosophyLessons();
  const target = allLessons.find(l => l.id === id);
  if (!target) return;

  if (target.isMilestoneZero) {
    alert('Thales xứ Miletus là "Cột Mốc Số 0" cội nguồn triết học, không nên xóa! Bạn có thể chọn Chỉnh sửa (✏️) để cập nhật nội dung.');
    return;
  }

  if (!confirm(`Bạn có chắc muốn xóa bài học triết học "${target.name}"?`)) return;

  playSound('click');
  const remaining = allLessons.filter(l => l.id !== id);
  saveStoredPhilosophyLessons(remaining);
  renderPhilosophyView();
}

// 5D REFLEX QUIZ FOR PHILOSOPHY
let currentPhiloQuizIndex = 0;
let currentPhiloQuizList = [];

function openPhilosophyQuizModal() {
  playSound('click');
  const allLessons = getStoredPhilosophyLessons();
  if (allLessons.length === 0) return;

  // Shuffle lessons for testing
  currentPhiloQuizList = [...allLessons].sort(() => Math.random() - 0.5);
  currentPhiloQuizIndex = 0;

  const modal = document.getElementById('philosophyQuizModal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    renderPhilosophyQuizQuestion();
    lucide.createIcons();
  }
}

function closePhilosophyQuizModal() {
  playSound('click');
  const modal = document.getElementById('philosophyQuizModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function renderPhilosophyQuizQuestion() {
  const container = document.getElementById('philosophyQuizBody');
  if (!container || currentPhiloQuizList.length === 0) return;

  if (currentPhiloQuizIndex >= currentPhiloQuizList.length) {
    container.innerHTML = `
      <div class="text-center py-8 space-y-4">
        <div class="text-4xl">🎉</div>
        <h4 class="text-lg font-bold text-white">Xuất Sắc! Bạn Đã Hoàn Thành Vòng Ôn Luyện!</h4>
        <p class="text-xs text-slate-300">Toàn bộ các tư tưởng cốt lõi và mỏ neo đã được kích hoạt trong não bộ.</p>
        <button onclick="openPhilosophyQuizModal()" class="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-xs shadow-md">
          Luyện Thêm Lần Nữa
        </button>
      </div>
    `;
    return;
  }

  const lesson = currentPhiloQuizList[currentPhiloQuizIndex];

  container.innerHTML = `
    <div class="space-y-4">
      <div class="flex items-center justify-between text-xs text-slate-400">
        <span>Câu hỏi ${currentPhiloQuizIndex + 1} / ${currentPhiloQuizList.length}</span>
        <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-amber-300 border border-slate-700 font-mono">
          ${lesson.lifespan}
        </span>
      </div>

      <div class="p-5 rounded-2xl bg-gradient-to-tr from-indigo-950/40 via-cardBg to-slate-900 border border-indigo-500/30 text-center space-y-3">
        <span class="text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/30">
          🔑 Từ Khóa Mỏ Neo: "${lesson.anchorKeyword}"
        </span>
        <h3 class="text-xl font-black text-white mt-2">${lesson.name}</h3>
        <p class="text-xs text-slate-400">${lesson.role || ''}</p>
        
        <div class="mt-4 p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-left space-y-1">
          <div class="text-[11px] font-bold text-amber-300">⚡ Cú sốc kinh ngạc khơi nguồn:</div>
          <p class="text-xs text-slate-200 leading-relaxed">${escapeHtml(lesson.d1_shock)}</p>
        </div>

        <p class="text-xs text-amber-300 font-semibold pt-2">
          👉 Hãy tự lục tìm trong não: Nguyên lý gốc là gì? Đấu trường phản biện ra sao? Mã 00-99 là gì?
        </p>
      </div>

      <div id="quizAnswerContainer" class="hidden space-y-3">
        <div class="p-4 rounded-2xl bg-slate-900 border border-slate-800 space-y-3 text-xs">
          <div>
            <div class="font-bold text-cyan-400">🔬 Chiều 2: Nguyên Lý Gốc:</div>
            <p class="text-slate-300 mt-0.5">${escapeHtml(lesson.d2_principle)}</p>
          </div>
          <div>
            <div class="font-bold text-rose-400">⚔️ Chiều 3: Đấu Trường Phản Biện:</div>
            <p class="text-slate-300 mt-0.5 whitespace-pre-line">${escapeHtml(lesson.d3_combat)}</p>
          </div>
          <div>
            <div class="font-bold text-purple-400">🧠 Chiều 4: Khóa Trí Nhớ (Mã 00-99):</div>
            <p class="text-slate-300 mt-0.5">${escapeHtml(lesson.d4_memory)}</p>
          </div>
          <div>
            <div class="font-bold text-emerald-400">🕹️ Chiều 5: Công Tắc Đời Thực:</div>
            <p class="text-slate-300 mt-0.5">${escapeHtml(lesson.d5_switch)}</p>
          </div>
        </div>
      </div>

      <div class="flex items-center justify-between pt-2">
        <button id="btnRevealPhiloAnswer" onclick="revealPhilosophyQuizAnswer()" class="w-full px-5 py-2.5 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white font-bold text-xs shadow-md">
          Lật Mở Toàn Bộ 5 Chiều Ma Trận
        </button>
        <div id="quizNextControls" class="hidden w-full flex gap-2">
          <button onclick="nextPhilosophyQuiz(false)" class="flex-1 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold">
            Chưa Nhớ Kịp 🤔
          </button>
          <button onclick="nextPhilosophyQuiz(true)" class="flex-1 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow">
            Đã Thuộc Lòng 🔥
          </button>
        </div>
      </div>
    </div>
  `;

  lucide.createIcons();
}

function revealPhilosophyQuizAnswer() {
  playSound('cardFlip');
  const ans = document.getElementById('quizAnswerContainer');
  const btnReveal = document.getElementById('btnRevealPhiloAnswer');
  const nextControls = document.getElementById('quizNextControls');

  if (ans) ans.classList.remove('hidden');
  if (btnReveal) btnReveal.classList.add('hidden');
  if (nextControls) {
    nextControls.classList.remove('hidden');
    nextControls.classList.add('flex');
  }
}

function nextPhilosophyQuiz(mastered) {
  playSound(mastered ? 'success' : 'click');
  currentPhiloQuizIndex++;
  renderPhilosophyQuizQuestion();
}


// ==========================================
// 15C. HỆ THỐNG ĐỒNG BỘ DỮ LIỆU ĐA THIẾT BỊ (MÁY TÍNH ⇄ ĐIỆN THOẠI)
// ==========================================

let activeSyncQrInstance = null;
let pendingIncomingSyncPayload = null;

function browserUtf8ToBase64(str) {
  try {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function(match, p1) {
      return String.fromCharCode(parseInt(p1, 16));
    }));
  } catch (e) {
    console.error('Base64 encode error:', e);
    return '';
  }
}

function browserBase64ToUtf8(b64) {
  try {
    const binary = atob(b64);
    const percentEncoded = Array.from(binary).map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join('');
    return decodeURIComponent(percentEncoded);
  } catch (e) {
    console.error('Base64 decode error:', e);
    return null;
  }
}

function generateSyncPacket() {
  const bibleProgress = localStorage.getItem('supermind_bible_progress_v1');
  const bibleCustom = localStorage.getItem('supermind_scripture_custom_verses_v1');
  const bibleDeleted = localStorage.getItem('supermind_scripture_deleted_verses_v1');
  const chineseProgress = localStorage.getItem('supermind_chinese_progress_v1');
  const chineseCustom = localStorage.getItem('supermind_chinese_custom_vocab_v1');
  const majorProgress = localStorage.getItem('supermind_major_system_progress_v1');

  const progressMap = getBibleProgressMap();
  const masteredCount = Object.values(progressMap).filter(v => v.mastered || v === true).length;
  const customList = bibleCustom ? JSON.parse(bibleCustom) : [];

  return {
    v: 1,
    app: 'supermind',
    timestamp: Date.now(),
    dateStr: new Date().toLocaleString('vi-VN'),
    stats: {
      bibleMasteredCount: masteredCount,
      bibleCustomCount: customList.length
    },
    data: {
      supermind_bible_progress_v1: progressMap,
      supermind_scripture_custom_verses_v1: customList,
      supermind_scripture_deleted_verses_v1: bibleDeleted ? JSON.parse(bibleDeleted) : [],
      supermind_chinese_progress_v1: chineseProgress ? JSON.parse(chineseProgress) : {},
      supermind_chinese_custom_vocab_v1: chineseCustom ? JSON.parse(chineseCustom) : [],
      supermind_major_system_progress_v1: majorProgress ? JSON.parse(majorProgress) : {}
    }
  };
}

function getSyncUrl() {
  const packet = generateSyncPacket();
  const json = JSON.stringify(packet);
  const base64 = browserUtf8ToBase64(json);
  // Dùng base URL của site (GitHub Pages hoặc host hiện tại)
  const base = window.location.origin + window.location.pathname;
  return base + '#sync=' + base64;
}

function openSyncModal(scope = 'bible') {
  playSound('click');
  const modal = document.getElementById('syncBackupModal');
  if (!modal) return;

  const packet = generateSyncPacket();

  // Cập nhật thống kê xem trước
  const elMastered = document.getElementById('syncPreviewMasteredCount');
  const elCustom = document.getElementById('syncPreviewCustomCount');
  if (elMastered) elMastered.textContent = packet.stats.bibleMasteredCount + ' Câu';
  if (elCustom) elCustom.textContent = packet.stats.bibleCustomCount + ' Câu';

  // Hiển thị mã văn bản
  const codeArea = document.getElementById('syncExportCodeArea');
  if (codeArea) {
    codeArea.value = browserUtf8ToBase64(JSON.stringify(packet));
  }

  // Tạo mã QR Code
  const qrContainer = document.getElementById('syncQrCodeContainer');
  if (qrContainer) {
    qrContainer.innerHTML = '';
    const syncUrl = getSyncUrl();
    try {
      if (typeof QRCode !== 'undefined') {
        activeSyncQrInstance = new QRCode(qrContainer, {
          text: syncUrl,
          width: 200,
          height: 200,
          colorDark: '#0b0f19',
          colorLight: '#ffffff',
          correctLevel: QRCode.CorrectLevel.M
        });
      } else {
        qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(syncUrl)}" alt="QR Code" class="w-[200px] h-[200px] rounded-lg" />`;
      }
    } catch (err) {
      console.warn('QR Code generation fallback:', err);
      qrContainer.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(syncUrl)}" alt="QR Code" class="w-[200px] h-[200px] rounded-lg" />`;
    }
  }

  switchSyncTab('qr');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
  lucide.createIcons();
}

function closeSyncModal() {
  playSound('click');
  const modal = document.getElementById('syncBackupModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function switchSyncTab(tab) {
  playSound('click');
  const tabs = ['cloud', 'qr', 'code', 'file'];
  tabs.forEach(t => {
    const btn = document.getElementById('syncTabBtn' + t.charAt(0).toUpperCase() + t.slice(1));
    const content = document.getElementById('syncTabContent' + t.charAt(0).toUpperCase() + t.slice(1));
    if (t === tab) {
      btn?.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/40');
      btn?.classList.remove('text-slate-400');
      content?.classList.remove('hidden');
    } else {
      btn?.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border', 'border-cyan-500/40');
      btn?.classList.add('text-slate-400');
      content?.classList.add('hidden');
    }
  });
  lucide.createIcons();
}

function copySyncLinkToClipboard() {
  const syncUrl = getSyncUrl();
  navigator.clipboard.writeText(syncUrl).then(() => {
    playSound('success');
    const btnText = document.getElementById('copySyncLinkBtnText');
    if (btnText) {
      const orig = btnText.textContent;
      btnText.textContent = '✓ ĐÃ SAO CHÉP LINK VÀO BỘ NHỚ ĐỆM!';
      setTimeout(() => { btnText.textContent = orig; }, 2500);
    }
    alert('Đã sao chép link đồng bộ! Bạn chỉ cần gửi link này qua Zalo hoặc Messenger của bạn rồi mở trên điện thoại nhé.');
  }).catch(() => {
    prompt('Hãy sao chép đường link đồng bộ này và mở trên điện thoại:', syncUrl);
  });
}

function copySyncCodeToClipboard() {
  const codeArea = document.getElementById('syncExportCodeArea');
  if (codeArea && codeArea.value) {
    navigator.clipboard.writeText(codeArea.value).then(() => {
      playSound('success');
      alert('Đã sao chép mã đồng bộ vào bộ nhớ đệm!');
    });
  }
}

function applySyncCodeFromInput() {
  const input = document.getElementById('syncImportCodeArea')?.value.trim();
  if (!input) {
    alert('Vui lòng dán mã đồng bộ vào ô trống trước khi nạp!');
    return;
  }

  try {
    const jsonStr = browserBase64ToUtf8(input);
    if (!jsonStr) throw new Error('Mã đồng bộ không hợp lệ');
    const packet = JSON.parse(jsonStr);
    mergeSyncDataIntoLocalStorage(packet);
    closeSyncModal();
    alert(`Đồng bộ thành công! Đã nạp ${packet.stats?.bibleMasteredCount || 0} câu thuộc lòng và ${packet.stats?.bibleCustomCount || 0} câu tự thêm vào thiết bị này!`);
  } catch (err) {
    alert('Lỗi: Mã đồng bộ không hợp lệ hoặc đã bị lỗi ký tự!');
    console.error(err);
  }
}

function exportBackupJsonFile() {
  playSound('success');
  const packet = generateSyncPacket();
  const blob = new Blob([JSON.stringify(packet, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const dateStr = new Date().toISOString().slice(0, 10);
  a.download = `supermind_backup_${dateStr}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function importBackupJsonFile(e) {
  const file = e.target?.files?.[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (event) => {
    try {
      const packet = JSON.parse(event.target.result);
      mergeSyncDataIntoLocalStorage(packet);
      closeSyncModal();
      alert('Phục hồi dữ liệu từ file backup thành công!');
    } catch (err) {
      alert('Lỗi: File JSON không đúng định dạng!');
      console.error(err);
    }
  };
  reader.readAsText(file);
}

function mergeSyncDataIntoLocalStorage(packet) {
  if (!packet || !packet.data) return;

  const d = packet.data;

  // 1. Merge Bible Progress
  if (d.supermind_bible_progress_v1) {
    const existing = getBibleProgressMap();
    const merged = { ...existing, ...d.supermind_bible_progress_v1 };
    localStorage.setItem(BIBLE_PROGRESS_KEY, JSON.stringify(merged));
  }

  // 2. Merge Custom Verses
  if (Array.isArray(d.supermind_scripture_custom_verses_v1)) {
    const rawExisting = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    const existingList = rawExisting ? JSON.parse(rawExisting) : [];
    const map = new Map(existingList.map(v => [v.id, v]));

    for (const v of d.supermind_scripture_custom_verses_v1) {
      const sanitized = sanitizeVerseObject(v);
      map.set(sanitized.id, sanitized);
    }

    const mergedList = Array.from(map.values()).sort(sortVersesAscending);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(mergedList));
  }

  // 3. Merge Chinese Progress
  if (d.supermind_chinese_progress_v1) {
    const raw = localStorage.getItem('supermind_chinese_progress_v1');
    const existing = raw ? JSON.parse(raw) : {};
    const merged = { ...existing, ...d.supermind_chinese_progress_v1 };
    localStorage.setItem('supermind_chinese_progress_v1', JSON.stringify(merged));
  }

  // 4. Merge Chinese Custom
  if (Array.isArray(d.supermind_chinese_custom_vocab_v1)) {
    const raw = localStorage.getItem('supermind_chinese_custom_vocab_v1');
    const existing = raw ? JSON.parse(raw) : [];
    const map = new Map(existing.map(v => [v.id, v]));
    for (const v of d.supermind_chinese_custom_vocab_v1) map.set(v.id, v);
    localStorage.setItem('supermind_chinese_custom_vocab_v1', JSON.stringify(Array.from(map.values())));
  }

  // Run cleanup and refresh UI
  migrateAndSanitizeBibleStorage();
  updateBibleStatsDashboard();
  renderVersesInRoom();
  if (typeof renderMasteredModalList === 'function') renderMasteredModalList();
  if (typeof renderChineseOverviewStats === 'function') renderChineseOverviewStats();
  playSound('success');
}

// ==========================================
// AUTO-DETECT INCOMING SYNC FROM URL HASH
// ==========================================
function checkIncomingSyncFromUrl() {
  const hash = window.location.hash || '';
  if (!hash.startsWith('#sync=')) return;

  const b64 = hash.replace('#sync=', '').trim();
  if (!b64) return;

  try {
    const json = browserBase64ToUtf8(b64);
    if (!json) return;
    const packet = JSON.parse(json);
    if (!packet || packet.app !== 'supermind') return;

    pendingIncomingSyncPayload = packet;

    // Show prompt modal
    const modal = document.getElementById('incomingSyncPromptModal');
    if (!modal) return;

    const elMastered = document.getElementById('incomingMasteredCount');
    const elCustom = document.getElementById('incomingCustomCount');
    const elDate = document.getElementById('incomingDateStr');

    if (elMastered) elMastered.textContent = (packet.stats?.bibleMasteredCount || 0) + ' Câu';
    if (elCustom) elCustom.textContent = (packet.stats?.bibleCustomCount || 0) + ' Câu';
    if (elDate) elDate.textContent = packet.dateStr || 'Gần đây';

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    lucide.createIcons();
    playSound('success');
  } catch (err) {
    console.warn('Invalid sync hash payload:', err);
  }
}

function acceptIncomingSync() {
  if (pendingIncomingSyncPayload) {
    mergeSyncDataIntoLocalStorage(pendingIncomingSyncPayload);
    pendingIncomingSyncPayload = null;
  }
  // Clear hash from URL
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } else {
    window.location.hash = '';
  }

  const modal = document.getElementById('incomingSyncPromptModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }

  alert('Đã đồng bộ thành công vào điện thoại của bạn!');
}

function rejectIncomingSync() {
  pendingIncomingSyncPayload = null;
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } else {
    window.location.hash = '';
  }

  const modal = document.getElementById('incomingSyncPromptModal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

// Auto-listen for sync hash changes & initial load
window.addEventListener('hashchange', checkIncomingSyncFromUrl);
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(checkIncomingSyncFromUrl, 300);
} else {
  document.addEventListener('DOMContentLoaded', () => {
    setTimeout(checkIncomingSyncFromUrl, 300);
  });
}


// ==========================================
// 15D. HỆ THỐNG ĐỒNG BỘ ĐÁM MÂY THỜI GIAN THỰC (REALTIME CLOUD SYNC)
// ==========================================
const CLOUD_SYNC_CONFIG_KEY = 'supermind_cloud_sync_config_v1';
let cloudEventSourceInstance = null;
let cloudPollingIntervalId = null;

function getCloudSyncConfig() {
  try {
    const raw = localStorage.getItem(CLOUD_SYNC_CONFIG_KEY);
    return raw ? JSON.parse(raw) : {
      enabled: false,
      roomKey: 'buivananhdev',
      dbUrl: ''
    };
  } catch (e) {
    return { enabled: false, roomKey: 'buivananhdev', dbUrl: '' };
  }
}

function saveCloudSyncConfig(cfg) {
  try {
    localStorage.setItem(CLOUD_SYNC_CONFIG_KEY, JSON.stringify(cfg));
  } catch (e) {
    console.error(e);
  }
}

function updateCloudSyncBadgeUI() {
  const cfg = getCloudSyncConfig();
  const badge = document.getElementById('cloudSyncStatusBadge');
  if (!badge) return;

  if (cfg.enabled && cfg.dbUrl) {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono font-bold flex items-center gap-1';
    badge.innerHTML = '<span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> Đang Kết Nối Mây';
  } else {
    badge.className = 'text-[10px] px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 font-mono';
    badge.textContent = 'Chưa Kết Nối Mây';
  }

  const inputRoom = document.getElementById('inputCloudRoomKey');
  const inputUrl = document.getElementById('inputCloudDbUrl');
  const checkAuto = document.getElementById('checkCloudAutoSync');
  if (inputRoom && !inputRoom.value) inputRoom.value = cfg.roomKey || 'buivananhdev';
  if (inputUrl && !inputUrl.value && cfg.dbUrl) inputUrl.value = cfg.dbUrl;
  if (checkAuto) checkAuto.checked = !!cfg.enabled;
}

async function saveAndConnectCloudSync() {
  playSound('click');
  const roomKey = (document.getElementById('inputCloudRoomKey')?.value || 'buivananhdev').trim().toLowerCase().replace(/[^a-z0-9_-]/g, '');
  let dbUrl = (document.getElementById('inputCloudDbUrl')?.value || '').trim();
  const enabled = document.getElementById('checkCloudAutoSync')?.checked ?? true;

  if (dbUrl.endsWith('/')) dbUrl = dbUrl.slice(0, -1);

  const cfg = {
    enabled: enabled,
    roomKey: roomKey || 'buivananhdev',
    dbUrl: dbUrl
  };

  saveCloudSyncConfig(cfg);
  updateCloudSyncBadgeUI();

  if (cfg.enabled && cfg.dbUrl) {
    // Thử đẩy dữ liệu hiện tại lên và kích hoạt lắng nghe
    const ok = await pushToCloud(true);
    if (ok) {
      initCloudRealtimeListener();
      alert('Kết nối Đám Mây thành công! Kể từ bây giờ, mọi câu bạn thuộc hoặc thêm mới sẽ tự động đồng bộ trực tiếp giữa máy tính và điện thoại!');
    } else {
      alert('Đã lưu cấu hình! Tuy nhiên kiểm tra kết nối tới Database chưa thành công, vui lòng kiểm tra lại URL Firebase hoặc quyền đọc/ghi.');
    }
  } else {
    alert('Đã lưu cấu hình mã phòng!');
  }
}

// Đẩy dữ liệu hiện tại lên Cloud
async function pushToCloud(isInitial = false) {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) return false;

  try {
    const packet = generateSyncPacket();
    const endpoint = `${cfg.dbUrl}/sync/${cfg.roomKey}.json`;

    const res = await fetch(endpoint, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(packet)
    });

    if (res.ok) {
      console.log('Push to cloud success:', cfg.roomKey);
      return true;
    } else {
      console.warn('Push to cloud failed, status:', res.status);
      return false;
    }
  } catch (err) {
    console.warn('Push to cloud error:', err);
    return false;
  }
}

// Kéo dữ liệu từ Cloud về máy
async function pullFromCloud(silent = false) {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) {
    if (!silent) alert('Vui lòng nhập đường dẫn Cloud Database (Firebase) trước khi kéo dữ liệu!');
    return false;
  }

  try {
    const endpoint = `${cfg.dbUrl}/sync/${cfg.roomKey}.json`;
    const res = await fetch(endpoint);
    if (!res.ok) throw new Error('Không thể tải từ đám mây, mã lỗi: ' + res.status);

    const packet = await res.json();
    if (!packet || packet.app !== 'supermind') {
      if (!silent) alert('Chưa tìm thấy dữ liệu trên mây ở phòng này.');
      return false;
    }

    mergeSyncDataIntoLocalStorage(packet);
    if (!silent) {
      alert(`Kéo dữ liệu từ mây thành công! Đã cập nhật ${packet.stats?.bibleMasteredCount || 0} câu đã thuộc và ${packet.stats?.bibleCustomCount || 0} câu tự thêm!`);
    }
    return true;
  } catch (err) {
    console.warn('Pull from cloud error:', err);
    if (!silent) alert('Lỗi kéo dữ liệu từ mây: ' + err.message);
    return false;
  }
}

async function triggerManualCloudPush() {
  playSound('click');
  const ok = await pushToCloud(false);
  if (ok) alert('Đã đẩy toàn bộ tiến độ hiện tại lên Đám Mây thành công!');
  else alert('Đẩy lên mây thất bại. Hãy kiểm tra URL Cloud Database trong cấu hình.');
}

async function triggerManualCloudPull() {
  playSound('click');
  await pullFromCloud(false);
}

// Lắng nghe dữ liệu thời gian thực từ Cloud
function initCloudRealtimeListener() {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) return;

  // 1. Thử EventSource (Firebase Server-Sent Events - Realtime Streaming)
  try {
    if (cloudEventSourceInstance) {
      cloudEventSourceInstance.close();
      cloudEventSourceInstance = null;
    }

    const sseUrl = `${cfg.dbUrl}/sync/${cfg.roomKey}.json`;
    cloudEventSourceInstance = new EventSource(sseUrl);

    cloudEventSourceInstance.addEventListener('put', (e) => {
      try {
        const payload = JSON.parse(e.data);
        if (payload && payload.data && payload.data.app === 'supermind') {
          // Bỏ qua nếu dữ liệu vừa được đẩy từ chính tab này trong vòng 2 giây
          const diff = Date.now() - (payload.data.timestamp || 0);
          if (diff > 1500) {
            mergeSyncDataIntoLocalStorage(payload.data);
            console.log('Realtime update received from cloud!');
          }
        }
      } catch (err) {
        console.warn('SSE parse error:', err);
      }
    });

    cloudEventSourceInstance.onerror = () => {
      // Nếu EventSource không kết nối được, fallback sang Polling
      setupCloudPollingFallback();
    };
  } catch (e) {
    setupCloudPollingFallback();
  }
}

function setupCloudPollingFallback() {
  if (cloudPollingIntervalId) clearInterval(cloudPollingIntervalId);
  // Kiểm tra định kỳ mỗi 8 giây khi tab hoạt động
  cloudPollingIntervalId = setInterval(() => {
    if (document.visibilityState === 'visible') {
      pullFromCloud(true);
    }
  }, 8000);
}

// Tự động đẩy lên mây sau khi có thay đổi (Debounce)
let cloudPushDebounceTimer = null;
function autoNotifyCloudSync() {
  const cfg = getCloudSyncConfig();
  if (!cfg.enabled || !cfg.dbUrl) return;

  if (cloudPushDebounceTimer) clearTimeout(cloudPushDebounceTimer);
  cloudPushDebounceTimer = setTimeout(() => {
    pushToCloud(false);
  }, 1000);
}
