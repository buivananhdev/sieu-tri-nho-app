/**
 * CHESS COGNITIVE ENGINE & GRANDMASTER MENTAL ALGORITHMS
 * Dữ liệu huấn luyện cờ vua thuật toán trí não theo phương pháp khoa học nhận thức
 * Tác giả: SuperMind Academy - Bách Khoa Toàn Thư Não Bộ
 */

const CHESS_COGNITIVE_TIERS = [
  {
    id: 1,
    elo: '1500 Elo',
    title: 'Bộ Lọc Triệt Tiêu Sai Lầm & Phanh An Toàn 3s C-C-T',
    subtitle: 'Zero-Blunder Radar & Cognitive Safety Brake',
    badge: 'TẦNG 1: NỀN TẢNG',
    accentColor: 'emerald',
    icon: 'shield-alert',
    overview: '90% các ván cờ dưới 1800 Elo bị định đoạt bởi "Blunder" (nước đi ngớ ngẩn do bỏ sót đe dọa của đối phương). Tầng 1 cài đặt phản xạ vô điều kiện: Phanh an toàn 3 giây quét liên tục chu kỳ C-C-T trước khi chạm tay vào quân cờ.',
    coreFormula: 'MỌI NƯỚC ĐI = [C: Checks (Chiếu)] + [C: Captures (Ăn quân)] + [T: Threats (Đe dọa bắt quân/vị trí)]',
    principles: [
      {
        name: 'Phanh An Toàn 3 Giây',
        desc: 'Khi nảy ra ý định đi một nước cờ, bắt buộc dừng lại 3 giây. Tự hỏi: "Nếu mình đi nước này, đối thủ có nước Chiếu (C), Ăn quân (C), hay Dọa bắt đôi/ghim (T) ngay lập tức không?"'
      },
      {
        name: 'Quét Quân Đang Bị Treo (Undefended Pieces)',
        desc: 'Não bộ đánh dấu bằng mắt tất cả các quân cờ trên bàn không có quân nào bảo vệ (cả quân ta lẫn quân địch). Quân treo chính là nguồn gốc của 95% đòn chiến thuật.'
      },
      {
        name: 'Triệt Tiêu Ảo Tưởng Nước Đi Đẹp',
        desc: 'Đừng say mê tấn công khi hàng phòng thủ nhà mình đang hở. Ưu tiên số 1 của 1500 Elo là không bao giờ tặng không bất kỳ quân cờ nào.'
      }
    ],
    mentalChecklist: [
      '1. Vua đối phương có đang bị chiếu được không?',
      '2. Quân nào của đối phương đang bị treo hoặc ít quân bảo vệ?',
      '3. Nước đi của đối phương vừa rồi mở đường cho quân nào tấn công ta?',
      '4. Quân mình định đi có bỏ quên vị trí phòng thủ quan trọng nào không?'
    ]
  },
  {
    id: 2,
    elo: '2000 Elo',
    title: 'Khối Nhận Diện Chiến Thuật Sát Thủ',
    subtitle: 'Tactical Pattern Matrix & Geometric Visualizer',
    badge: 'TẦNG 2: CHIẾN THUẬT',
    accentColor: 'amber',
    icon: 'zap',
    overview: 'Ở đẳng cấp 2000 Elo, người chơi không tính toán mò mẫm từng nước đơn lẻ mà não bộ tự động khớp các "hình học bàn cờ" (hình chéo, cột mở, chữ L) vào thư viện mẫu chiến thuật đã được lưu trong tiềm thức.',
    coreFormula: 'CHIẾN THUẬT = HÌNH HỌC BÀN CỜ + QUÂN BỊ QUÁ TẢI + ĐÒN BUỘC NƯỚC (FORCING MOVES)',
    principles: [
      {
        name: 'Đòn Chĩa Đôi (Fork / Double Attack)',
        desc: 'Một quân (đặc biệt là Mã hoặc Tốt) tấn công cùng lúc hai mục tiêu có giá trị cao hơn. Đối thủ chỉ có thể cứu 1 và mất 1.'
      },
      {
        name: 'Đòn Ghim (Absolute & Relative Pin)',
        desc: 'Tượng, Xe hoặc Hậu ghim quân đối phương vào Vua (ghim tuyệt đối - không được đi) hoặc vào quân giá trị cao (ghim tương đối - đi là mất quân to).'
      },
      {
        name: 'Đòn Xiên (Skewer / X-Ray Attack)',
        desc: 'Tấn công quân lớn phía trước buộc phải di chuyển, để lộ quân phòng thủ yếu hơn phía sau (ngược lại với ghim).'
      },
      {
        name: 'Đòn Mở Đường & Đòn Dẫn Dụ (Discovered Attack & Deflection)',
        desc: 'Di chuyển một quân để mở đường cho quân khác chiếu hoặc ăn, kèm theo mối đe dọa kép khiến đối phương tê liệt.'
      }
    ],
    mentalChecklist: [
      '1. Có quân nào của địch thẳng hàng trên cùng đường chéo/cột dọc với Vua/Hậu không?',
      '2. Quân bảo vệ chính của đối thủ có thể bị đuổi hoặc bị ăn để làm suy yếu quân khác không?',
      '3. Có nước thí quân nào buộc Vua địch phải bước ra vị trí chết chóc không?'
    ]
  },
  {
    id: 3,
    elo: '2400 Elo',
    title: 'Cung Điện Khai Cuộc & Tàn Cuộc Bất Tử',
    subtitle: 'Opening Palace & Endgame Geometric Theorems',
    badge: 'TẦNG 3: KIỆN TƯỚNG (IM)',
    accentColor: 'purple',
    icon: 'castle',
    overview: 'Kiện tướng quốc tế không ghi nhớ máy móc các nước đi, mà ghi nhớ "Cấu Trúc Tốt" (Pawn Structure) và các định lý tàn cuộc bất biến. Khai cuộc tốt đưa đến trung cuộc chủ động, và tàn cuộc chính xác chuyển hóa lợi thế nhỏ nhất thành chiến thắng.',
    coreFormula: 'TÀN CUỘC = ĐỐI KHÁNG VUA (OPPOSITION) + QUY TẮC HÌNH VUÔNG + VỊ TRÍ LUCENA / PHILIDOR',
    principles: [
      {
        name: 'Cung Điện Cấu Trúc Tốt Khai Cuộc',
        desc: 'Mỗi nước đẩy Tốt định hình toàn bộ không gian của trận đấu. Hiểu rõ cấu trúc Tốt Carlsbad, Isolani (Tốt cô lập d4), Tốt chồng (Doubled pawns) để bố trí quân tối ưu.'
      },
      {
        name: 'Quy Tắc Hình Vuông Trong Tàn Cuộc Tốt',
        desc: 'Vẽ hình vuông tưởng tượng từ Tốt đến hàng phong cấp. Nếu Vua địch nằm ngoài hình vuông, Tốt sẽ tự phong cấp thành công mà không cần Vua ta bảo vệ.'
      },
      {
        name: 'Vị Trí Lucena (Kỹ Thuật Xây Cầu Xe)',
        desc: 'Kỹ thuật chuyển hóa chiến thắng tối thượng trong tàn cuộc Xe + Tốt: Dùng Xe che chắn đường chiếu của Xe địch ở hàng ngang thứ 4 để Vua bước ra phong cấp.'
      },
      {
        name: 'Vị Trí Philidor (Kỹ Thuật Cắt Mặt Hòa Cờ)',
        desc: 'Kỹ thuật phòng thủ hòa cờ chuẩn xác trong tàn cuộc Xe: Giữ Xe ở hàng ngang thứ 6 để chặn Vua địch, khi Tốt đối phương đẩy lên hàng 6 thì lập tức đưa Xe xuống hàng 1/2 để chiếu liên tục từ phía sau.'
      }
    ],
    mentalChecklist: [
      '1. Vua của ta trong tàn cuộc đã được kích hoạt làm quân tấn công trung tâm chưa?',
      '2. Cấu trúc Tốt của mình có tạo ra ô yếu (outpost) vĩnh viễn cho quân Mã không?',
      '3. Việc đổi quân này đưa ván cờ về dạng tàn cuộc ta có ưu thế lý thuyết hay không?'
    ]
  },
  {
    id: 4,
    elo: '2800 Elo',
    title: 'Bất Đối Xứng Động & Bóp Nghẹt Không Gian (Magnus Carlsen)',
    subtitle: 'Dynamic Asymmetry, Prophylaxis & Space Asphyxiation',
    badge: 'TẦNG 4: SIÊU ĐẠI KIỆN TƯỚNG',
    accentColor: 'cyan',
    icon: 'activity',
    overview: 'Magnus Carlsen không cần những đòn tấn công liều lĩnh hào nhoáng. Phong cách đỉnh cao của ông là "Bóp nghẹt không gian": Tìm ra nước đi phòng ngừa (Prophylaxis) dập tắt kế hoạch của đối thủ từ 5 nước trước, biến những thế cờ tưởng như cân bằng thành sự đau khổ tột cùng cho đối phương (Zugzwang).',
    coreFormula: 'BÓP NGHẸT = NƯỚC ĐI PHÒNG NGỪA (PROPHYLAXIS) + TÍCH LŨY ƯU THẾ VI MÔ + DỒN ĐỐI THỦ VÀO ZUGZWANG',
    principles: [
      {
        name: 'Tư Duy Phòng Ngừa (Prophylaxis - Tigran Petrosian & Carlsen)',
        desc: 'Trước khi nghĩ đến việc ta muốn làm gì, hãy tự hỏi: "Kế hoạch sâu xa của đối thủ là gì? Họ muốn đặt quân vào ô nào đẹp nhất?". Đi một nước chặn đứng ô đó trước khi họ kịp nhận ra.'
      },
      {
        name: 'Bất Đối Xứng Động (Dynamic Asymmetry)',
        desc: 'Tạo ra sự mất cân bằng có kiểm soát: Đổi Tượng lấy Mã trong thế trận mở, hoặc tạo ra Tốt yếu nhưng đổi lại quân có tầm hoạt động vô song.'
      },
      {
        name: 'Thuật Ép Zugzwang (Bức Bách Nước Đi)',
        desc: 'Tước đoạt mọi nước đi hữu ích của đối phương. Đến mức mọi nước đi mà đối thủ bắt buộc phải thực hiện đều làm vị trí của họ tệ hơn.'
      },
      {
        name: 'Kiên Nhẫn Vô Hạn Trong Thế Cờ Nhỏ',
        desc: 'Sẵn sàng điều quân 30-40 nước vòng quanh để tìm kẽ hở tâm lý nhỏ nhất của đối thủ, không vội vàng phá vỡ cấu trúc khi chưa chín muồi.'
      }
    ],
    mentalChecklist: [
      '1. Quân nào của đối thủ đang khó chịu nhất? Làm sao vô hiệu hóa nó vĩnh viễn?',
      '2. Nếu đối thủ được đi 2 nước liên tiếp, họ sẽ làm gì? Ta hóa giải điều đó bằng cách nào?',
      '3. Làm thế nào để mọi quân cờ của ta phối hợp hài hòa mà không giẫm chân lên nhau?'
    ]
  },
  {
    id: 5,
    elo: '3000+ Elo',
    title: 'Trực Giác Lưới Đa Chiều (AlphaZero / Stockfish)',
    subtitle: 'Neural-Tensor Lattice & Non-Linear Evaluation',
    badge: 'TẦNG 5: SIÊU TRÍ TUỆ NHÂN TẠO',
    accentColor: 'indigo',
    icon: 'cpu',
    overview: 'Vượt qua định kiến con người suốt hàng trăm năm. AlphaZero chứng minh rằng các quy tắc sách vở (như Tốt giá trị 1 điểm, không đẩy Tốt h/a sớm) đều có thể bị phá vỡ. Giá trị thực sự của quân cờ không nằm ở tên gọi hay số điểm tĩnh, mà nằm ở "Năng Lượng Động" (Dynamic Activity) và "Áp Suất Bàn Cờ" (Board Pressure).',
    coreFormula: 'TRỰC GIÁC MÁY = TỔNG VECTƠ ÁP LỰC + TÍCH CỰC QUÂN TỐI ĐA (ACTIVITY OVER MATERIAL)',
    principles: [
      {
        name: 'Thí Quân Lấy Động Lực (Positional Sacrifice)',
        desc: 'Sẵn sàng thí 1 hoặc 2 Tốt, thậm chí thí Chất (Xe lấy Tượng/Mã) chỉ để khóa chặt Vua đối phương hoặc kẹt cứng quân Xe của họ trong góc.'
      },
      {
        name: 'Mũi Tên Tốt Biên (The h-pawn / a-pawn Thrust)',
        desc: 'Đẩy Tốt h4-h5 hoặc a4-a5 từ rất sớm để phá vỡ cấu trúc bảo vệ Vua đối phương, tạo điểm tựa mở cột tấn công tàn khốc.'
      },
      {
        name: 'Hòa Hợp Tổng Thể Thay Vì Quy Tắc Rời Rạc',
        desc: 'Không đánh giá vị trí theo điểm số cộng trừ đơn thuần. Đánh giá toàn bộ ma trận 64 ô cờ như một trường lực vật lý liên tục biến động.'
      }
    ],
    mentalChecklist: [
      '1. Quân cờ này của mình có đang phát huy tối đa công năng hình học không?',
      '2. Có nước cờ phi quy ước nào (thí quân, đẩy Tốt biên) tạo ra áp lực tê liệt không?',
      '3. Thế trận này thiên về tính toán chiến thuật cụ thể (concrete) hay biến chuyển thế trận (dynamic)?'
    ]
  }
];

const CHESS_BOT_PROFILES = [
  {
    level: 1,
    name: 'Học Viên Chiến Thuật',
    elo: 1500,
    title: 'Level 1: Zero-Blunder Candidate',
    avatar: 'target',
    badgeColor: 'emerald',
    description: 'Chơi theo nguyên lý cơ bản, đôi khi bỏ sót các đòn ghim hoặc tấn công đôi nếu bạn chủ động đặt bẫy CCT.',
    depth: 1,
    randomness: 0.25,
    aggressiveness: 0.3
  },
  {
    level: 2,
    name: 'Kiện Tướng Câu Lạc Bộ',
    elo: 2000,
    title: 'Level 2: Tactical Matrix Engine',
    avatar: 'zap',
    badgeColor: 'amber',
    description: 'Nhận diện nhạy bén đòn Chĩa đôi, Ghim quân, Xiên. Trừng phạt ngay lập tức nếu bạn để quân treo.',
    depth: 2,
    randomness: 0.1,
    aggressiveness: 0.5
  },
  {
    level: 3,
    name: 'Kiện Tướng Quốc Tế (IM)',
    elo: 2400,
    title: 'Level 3: International Master',
    avatar: 'castle',
    badgeColor: 'purple',
    description: 'Khai cuộc bài bản, điều động quân chặt chẽ, am hiểu sâu sắc kỹ thuật tàn cuộc và chuyển hóa ưu thế.',
    depth: 3,
    randomness: 0.03,
    aggressiveness: 0.65
  },
  {
    level: 4,
    name: 'Mô Phỏng Magnus Carlsen',
    elo: 2800,
    title: 'Level 4: Carlsen Space Asphyxiator',
    avatar: 'activity',
    badgeColor: 'cyan',
    description: 'Bóp nghẹt không gian, thi triển nước đi phòng ngừa Prophylaxis, kiên nhẫn tích lũy lợi thế vi mô đưa bạn vào Zugzwang.',
    depth: 3,
    randomness: 0.0,
    aggressiveness: 0.8
  },
  {
    level: 5,
    name: 'Động Cơ Alpha-Stockfish',
    elo: 3000,
    title: 'Level 5: Neural-Tensor Superintelligence',
    avatar: 'cpu',
    badgeColor: 'indigo',
    description: 'Độ chính xác tột đỉnh, tính toán cây tìm kiếm sâu, khai thác mọi kẽ hở nhỏ nhất với nhãn quan vị trí đa chiều.',
    depth: 4,
    randomness: 0.0,
    aggressiveness: 0.95
  }
];

const CHESS_TACTICAL_PUZZLES = [
  {
    id: 'puz-1',
    title: 'Đòn Chĩa Đôi Tử Thần (The Royal Fork)',
    theme: 'Chĩa Đôi (Fork)',
    tier: 2,
    difficulty: 'Căn Bản (1500-1800)',
    fen: 'r1bqk2r/pppp1ppp/2n5/4p3/2B1n3/2P2N2/PPP2PPP/R1BQK2R w KQkq - 0 6',
    toMove: 'w',
    solution: ['Qd5'], // White plays Qd5 threatening mate on f7 and attacking Ne4
    explanation: 'Hậu trắng nhảy lên d5 tạo ra đòn tấn công kép (Double Attack): Dọa chiếu hết ở f7 (Qxf7#) và đồng thời dọa ăn quân Mã e4 đang bị treo!',
    keyLesson: 'Luôn tìm kiếm các nước đi tấn công đồng thời Vua và một quân không được bảo vệ.'
  },
  {
    id: 'puz-2',
    title: 'Ghim Chết Hậu Trực Diện (Absolute Pin)',
    theme: 'Ghim Quân (Pin)',
    tier: 2,
    difficulty: 'Trung Cấp (1800-2000)',
    fen: 'r1b1k2r/pppp1ppp/8/4q3/1b6/2N5/PPP1BPPP/R1BQK2R w KQkq - 0 8',
    toMove: 'w',
    solution: ['O-O'],
    explanation: 'Trắng nhập thành an toàn O-O, giải phóng Vua khỏi đường ghim của Tượng b4 và chuẩn bị Re1 để ghim Hậu đen e5 thẳng vào Vua đen e8!',
    keyLesson: 'Giải ghim cho quân mình trước, sau đó đảo ngược thế cờ ghim quân đối phương trên cột mở.'
  },
  {
    id: 'puz-3',
    title: 'Đòn Chiếu Mở Đường Sát Thương (Discovered Check)',
    theme: 'Chiếu Mở (Discovered Attack)',
    tier: 2,
    difficulty: 'Nâng Cao (2000-2200)',
    fen: 'rn1qk2r/ppp2ppp/3b4/8/4n1b1/5N2/PPPP1PPP/RNBQKB1R w KQkq - 0 6',
    toMove: 'w',
    solution: ['Qe2'],
    explanation: 'Hậu Trắng lên e2 ghim Mã e4 vào Vua e8. Đen không thể chạy Mã vì Vua sẽ bị chiếu. Nước tiếp theo Trắng đẩy d3 hoặc di chuyển để ăn trắng quân Mã.',
    keyLesson: 'Cột mở đối diện Vua chưa nhập thành luôn là tử huyệt chiến thuật.'
  },
  {
    id: 'puz-4',
    title: 'Phối Hợp Chiếu Hết Bắt Buộc (Mating Net)',
    theme: 'Phối Hợp Sát Thủ',
    tier: 2,
    difficulty: 'Đại Kiện Tướng (2200+)',
    fen: '6k1/5ppp/8/8/8/8/1r3PPP/R5K1 w - - 0 1',
    toMove: 'w',
    solution: ['Ra8+'],
    explanation: 'Đòn chiếu hết hàng cuối (Back-Rank Mate): Xe trắng Ra8+ chiếu Vua. Đen chỉ có thể đỡ Rb8, sau đó Rxb8# kết liễu!',
    keyLesson: 'Vua đối phương bị nhốt sau hàng rào Tốt của chính mình mà không có ô thoát (Luft).'
  }
];

const CHESS_OPENINGS_BOOK = [
  {
    id: 'ruy-lopez',
    name: 'Khai Cuộc Ruy Lopez (Ván Cờ Tây Ban Nha)',
    eco: 'C60',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bb5'],
    strategicIdea: 'Trắng đưa Tượng lên b5 để gây áp lực gián tiếp lên ô e5 thông qua việc dọa triệt tiêu quân Mã c6 bảo vệ nó. Đây là khai cuộc kinh điển bậc nhất kiểm soát cấu trúc trung tâm bền bỉ.',
    carlsenTip: 'Magnus Carlsen rất ưa thích biến Berlin Defense (3... Nf6) và hệ thống Anti-Marshall để bóp nghẹt cấu trúc Tốt của đối thủ.'
  },
  {
    id: 'sicilian-defense',
    name: 'Phòng Thủ Sicilian (Sát Thủ Bất Đối Xứng)',
    eco: 'B20',
    moves: ['e4', 'c5'],
    strategicIdea: 'Đen ngay lập tức tạo ra thế trận bất đối xứng bằng việc đổi Tốt biên c lấy Tốt trung tâm d của Trắng, giành quyền kiểm soát cột nửa mở c.',
    carlsenTip: 'Tránh các biến lý thuyết quá sắc bén nếu bạn muốn ép thế trận positional; dùng các biến Rossolimo (3. Bb5) hoặc Alapin (2. c3).'
  },
  {
    id: 'queens-gambit',
    name: 'Gambit Hậu (Queen\'s Gambit)',
    eco: 'D06',
    moves: ['d4', 'd5', 'c4'],
    strategicIdea: 'Trắng tạm thời dâng Tốt c4 để lôi kéo Tốt d5 của Đen rời khỏi trung tâm, từ đó chiếm lĩnh hoàn toàn ô e4 và tạo trung tâm Tốt lý tưởng.',
    carlsenTip: 'Đừng vội ăn lại Tốt nếu Đen nhận gambit (QGA); ưu tiên phát triển quân nhanh chóng và kiểm soát không gian rộng lớn.'
  },
  {
    id: 'italian-game',
    name: 'Ván Cờ Ý (Italian Game - Giuoco Piano)',
    eco: 'C50',
    moves: ['e4', 'e5', 'Nf3', 'Nc6', 'Bc4'],
    strategicIdea: 'Tượng c4 nhắm thẳng vào điểm yếu f7 của Đen (điểm duy nhất chỉ được bảo vệ bởi Vua). Trắng linh hoạt chuyển đổi giữa tấn công sắc bén và xây dựng thế trận từ từ (Giuoco Pianissimo c3-d3).',
    carlsenTip: 'Xây dựng trung tâm vững chắc bằng c3 và d3, sau đó điều Mã từ b1 qua d2 sang f1 rồi nhảy vào f5 để bóp nghẹt cánh Vua.'
  }
];

const CHESS_ENDGAME_LESSONS = [
  {
    id: 'endgame-square-rule',
    title: 'Định Lý Hình Vuông Của Tốt (The Rule of the Square)',
    summary: 'Cách tính nhẩm trong 1 giây để biết Vua có đuổi kịp Tốt đối phương đang chạy xuống phong cấp hay không mà không cần tính từng nước đơn lẻ.',
    formula: 'Vẽ cạnh hình vuông từ vị trí Tốt đến hàng phong cấp. Nếu Vua địch nằm TRONG hình vuông (kể cả trên cạnh), Vua sẽ bắt được Tốt. Nếu Vua nằm NGOÀI hình vuông, Tốt sẽ tự phong cấp thành Hậu!'
  },
  {
    id: 'endgame-opposition',
    title: 'Thế Đối Kháng Vua (King Opposition)',
    summary: 'Hai Vua đối diện nhau cách nhau 1 ô trống. Bên nào KHÔNG PHẢI ĐI nước đó là bên NẮM QUYỀN ĐỐI KHÁNG, buộc Vua đối phương phải né sang một bên nhường đường.',
    formula: 'Vua ai nắm thế đối kháng, người đó làm chủ không gian và mở đường cho Tốt thâm nhập phong cấp.'
  },
  {
    id: 'endgame-lucena',
    title: 'Kỹ Thuật Xây Cầu Lucena (Xe + Tốt Thắng Xe)',
    summary: 'Thế cờ tàn cuộc cơ bản nhất để chuyển hóa 1 Tốt hơn thành chiến thắng tuyệt đối khi Vua ta đứng trước Tốt ở hàng 7.',
    formula: 'Đưa Xe lên hàng ngang thứ 4 (Bridge). Khi Vua ta bước ra khỏi hàng phong cấp, Xe địch sẽ chiếu liên tục. Xe ta ở hàng 4 sẽ chắn đường chiếu tại c4/d4/e4/f4, giải phóng Vua phong Hậu!'
  },
  {
    id: 'endgame-philidor',
    title: 'Phòng Thủ Philidor (Kỹ Thuật Cắt Mặt Hòa Cờ Của Xe)',
    summary: 'Cách phòng thủ hòa cờ 100% khi bên phòng ngự bị thua 1 Tốt.',
    formula: 'Giữ Xe ở hàng ngang thứ 6 để chặn Vua địch bước lên. Ngay khi Tốt đối phương đẩy lên hàng 6, lập tức lui Xe về hàng 1 và chiếu liên tục từ phía sau lưng!'
  }
];

window.CHESS_COGNITIVE_TIERS = CHESS_COGNITIVE_TIERS;
window.CHESS_BOT_PROFILES = CHESS_BOT_PROFILES;
window.CHESS_TACTICAL_PUZZLES = CHESS_TACTICAL_PUZZLES;
window.CHESS_OPENINGS_BOOK = CHESS_OPENINGS_BOOK;
window.CHESS_ENDGAME_LESSONS = CHESS_ENDGAME_LESSONS;
