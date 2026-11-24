// =========================================================================
// THƯ VIỆN SÁCH TINH HOA - BỘ CHUẨN MỰC HỌC THUẬT 100% (7 NỐT NHẠC)
// Đúc kết từ các công trình kinh điển: Syntopical Reading (Mortimer Adler),
// 3-Pass Rule (GS. S. Keshav - ĐH Waterloo), Zettelkasten (Niklas Luhmann)
// và Thuyết Tải Nhận Thức (Cognitive Load Theory - GS. John Sweller).
// =========================================================================

window.BOOKS_METHODOLOGY_GUIDE = {
  title: 'Phương Pháp Luận "7 Nốt Nhạc" Của Các Giáo Sư Đỉnh Cao',
  subtitle: 'Hút Cạn Khung Xương Tri Thức Của Một Cuốn Sách 300 Trang Trong 15 - 30 Phút',
  scientificBasis: [
    {
      name: 'Thuyết Tải Nhận Thức (Cognitive Load Theory)',
      author: 'GS. John Sweller & Định luật George Miller',
      summary: 'Vùng nhớ tạm (Working Memory) chỉ chứa được tối đa 4 - 7 đơn vị thông tin. Cố đọc 300 trang sẽ gây quá tải và quên 95%. Nén thành 7 nốt nhạc tạo thành Khung Nhận Thức (Schema) giúp nhớ vĩnh viễn.'
    },
    {
      name: 'Quy Tắc 3-Pass Method',
      author: 'GS. Srinivasan Keshav (Đại học Waterloo - ACM SIGCOMM)',
      summary: 'Pass 1 (5-10p): Sàng lọc 5 chữ C. Pass 2 (1h): Bóc tách sơ đồ, bảng biểu, số liệu. Pass 3 (chỉ bài nòng cốt): Tái lập và chất vấn các giả định ẩn.'
    },
    {
      name: 'Đọc Đồng Chủ Đề (Syntopical Reading)',
      author: 'Mortimer J. Adler (Đại học Chicago - How to Read a Book)',
      summary: 'Không làm nô lệ cho tác giả. Gom 5-10 cuốn sách cùng chủ đề, bắt các tác giả đối thoại để tìm điểm đồng thuận (chân lý) và điểm xung đột (ranh giới phát kiến mới).'
    },
    {
      name: 'Mạng Thẻ Tri Thức (Zettelkasten)',
      author: 'Xã hội học gia Niklas Luhmann & TS. Sönke Ahrens',
      summary: 'Chuyển hóa sách thành các mẩu thẻ nguyên tử (Atomic Notes) bằng chính lời văn của mình, nối dây liên ngành như mạng nơ-ron não bộ (Second Brain).'
    }
  ],
  the7CanonicalNotesGuide: [
    { note: 1, name: 'Bối Cảnh & Vấn Đề Nhức Nhối', role: 'Hiểu động cơ sâu xa: Cuốn sách sinh ra để giải quyết nỗi đau/bế tắc nào của nhân loại?' },
    { note: 2, name: 'Ý Niệm Tối Thượng (The Central Thesis)', role: 'Chân lý bất biến nếu tác giả chỉ được nói đúng 1 câu trước khi qua đời.' },
    { note: 3, name: 'Cái Bẫy Nhận Thức Phổ Quát', role: 'Chỉ điểm sai lầm/ảo tưởng chí mạng mà 99% người bình thường đang mắc phải.' },
    { note: 4, name: 'Nguyên Lý Nền Tảng #1 (First Principle)', role: 'Quy luật tự nhiên/tâm lý gốc rễ chi phối toàn bộ cuộc chơi.' },
    { note: 5, name: 'Nguyên Lý Nền Tảng #2 (First Principle)', role: 'Cơ chế vận hành đòn bẩy để chuyển hóa từ thua thành thắng.' },
    { note: 6, name: 'Mô Hình Chiến Lược Toàn Diện', role: 'Khung kiến trúc giải pháp tổng thể để áp dụng vào thực tế.' },
    { note: 7, name: 'Giới Hạn & Điểm Phản Biện (Counter-View)', role: 'Tư duy đa chiều: Khi nào cuốn sách này SAI hoặc không áp dụng được?' }
  ]
};

window.BOOKS_GENRES = [
  { id: 'all', name: 'Tất Cả Thể Loại', icon: 'layers' },
  { id: 'finance', name: 'Tài Chính & Kinh Tế', icon: 'coins' },
  { id: 'psychology', name: 'Tâm Lý & Nhận Thức', icon: 'brain' },
  { id: 'habits', name: 'Thói Quen & Hiệu Suất', icon: 'zap' },
  { id: 'strategy', name: 'Chiến Lược & Mưu Lược', icon: 'swords' }
];

window.MASTER_BOOKS_DATA = [
  // 1. CHA GIÀU CHA NGHÈO
  {
    id: 'rich_dad_poor_dad',
    title: 'Cha Giàu Cha Nghèo',
    origTitle: 'Rich Dad Poor Dad: What the Rich Teach Their Kids About Money That the Poor and Middle Class Do Not!',
    author: 'Robert T. Kiyosaki & Sharon Lechter',
    year: '1997',
    genreId: 'finance',
    genreName: 'Tài Chính & Kinh Tế',
    readingTime: '15 - 20 Phút',
    badge: 'Kinh Điển Khai Sáng Tư Duy Tài Chính',
    color: 'from-amber-600 via-yellow-600 to-amber-700',
    icon: 'wallet-cards',
    academicSource: 'Warner Books (1997), Cashflow Technologies, Stanford Financial Literacy References.',
    shortDesc: 'Tác phẩm phá bỏ hoàn toàn ảo tưởng về thu nhập từ lương, vạch trần cạm bẫy The Rat Race và định nghĩa lại bản chất của Tài sản vs Tiêu sản.',

    // TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (AXIOM / THE BIG IDEA)
    axiom: 'Người nghèo và tầng lớp trung lưu bán thời gian và sức lao động để đổi lấy tiền. Người giàu xây dựng hệ thống tài sản để bắt tiền bạc làm việc cật lực cho mình.',
    masterQuote: 'Người nghèo nói: "Tôi không có tiền để mua thứ đó." Người giàu tự vấn: "Làm thế nào để tôi có thể tạo ra dòng tiền sở hữu thứ đó?" — Câu khẳng định đóng chặt bộ não, câu hỏi kích hoạt tư duy tài chính.',

    // TẦNG 2: HỆ THỐNG ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN
    the7Notes: [
      {
        note: 1,
        title: 'Bối Cảnh & Vấn Đề Nhức Nhối',
        rule: 'Hệ thống giáo dục truyền thống chỉ đào tạo ra những người làm công xuất sắc, hoàn toàn mù mờ về trí tuệ tài chính.',
        explanation: 'Nhà trường dạy người ta học giỏi để đi xin việc, làm công ăn lương và trả thuế suốt đời. Họ không dạy cách tiền vận hành, cách kiểm soát nợ và cách đầu tư. Kết quả là hàng triệu kỹ sư, bác sĩ, tiến sĩ kiếm nhiều tiền nhưng vẫn rơi vào bế tắc tài chính.',
        keyInsight: 'Tài chính không phải là môn toán học tính toán, mà là một môn khoa học về hành vi và làm chủ dòng tiền.'
      },
      {
        note: 2,
        title: 'Ý Niệm Tối Thượng: Định Nghĩa Lại Tài Sản vs Tiêu Sản',
        rule: 'Tài sản đút tiền vào túi bạn. Tiêu sản rút tiền ra khỏi túi bạn.',
        explanation: 'Sai lầm chết người của 99% mọi người là coi căn nhà mình đang ở hay chiếc xe hơi trả góp là "tài sản lớn nhất". Sự thật: Nếu thứ đó liên tục đòi hỏi chi phí bảo dưỡng, đóng thuế, trả lãi ngân hàng mà không sinh ra một đồng tiền mặt nào ➔ Đó là Tiêu sản! Người giàu chỉ dồn vốn mua những thứ tự sinh ra dòng tiền ròng.',
        keyInsight: 'Đừng hỏi món đồ giá bao nhiêu. Hãy hỏi: "Món này sinh ra tiền hay nuốt mất tiền của tôi mỗi tháng?".'
      },
      {
        note: 3,
        title: 'Cái Bẫy Nhận Thức: Vòng Chuột Chạy (The Rat Race)',
        rule: 'Tăng lương không giải quyết được nghèo đói; nó chỉ phóng đại thói quen chi tiêu yếu kém.',
        explanation: 'Lương 10 triệu tiêu 10 triệu. Lên lương 30 triệu thì đổi xe mới, thuê nhà sang hơn, nợ thẻ tín dụng nhiều hơn ➔ Chi phí sinh hoạt tăng bằng tốc độ tăng lương. Cuối cùng, người lao động bị kẹt vào cái lồng quay: Thức dậy ➔ Đi làm ➔ Trả hóa đơn ➔ Thức dậy ➔ Đi làm.',
        keyInsight: 'Nỗi sợ hãi mất việc và lòng tham tiêu xài xa xỉ là hai sợi dây xích trói chặt con người vào Vòng Chuột Chạy.'
      },
      {
        note: 4,
        title: 'Nguyên Lý Nền Tảng #1: Tập Trung Vào Cột Tài Sản',
        rule: 'Đừng khoe Cột Thu Nhập (lương tháng), hãy nhìn vào quy mô của Cột Tài Sản (thứ nuôi sống bạn khi bạn đang ngủ).',
        explanation: 'Người thành công luôn áp dụng nguyên tắc: "Trả cho mình trước tiên" (Pay yourself first). Khi có tiền, họ trích ngay 20-30% đút thẳng vào Cột Tài Sản (bất động sản dòng tiền, cổ tức, trái phiếu, bản quyền) trước khi thanh toán bất kỳ hóa đơn nào.',
        keyInsight: 'Chỉ mua đồ xa xỉ bằng dòng tiền do Cột Tài Sản sinh ra, tuyệt đối không dùng tiền lương cày cuốc để mua đồ xa xỉ.'
      },
      {
        note: 5,
        title: 'Nguyên Lý Nền Tảng #2: Quyền Lực Của Pháp Nhân Doanh Nghiệp',
        rule: 'Người làm công: Kiếm tiền ➔ Đóng thuế ➔ Chi tiêu phần còn lại. Doanh nghiệp: Kiếm tiền ➔ Chi tiêu hợp lệ ➔ Đóng thuế trên phần còn lại.',
        explanation: 'Hiểu biết luật pháp và thuế khóa là lá chắn lớn nhất của người giàu. Doanh nghiệp cho phép khấu trừ chi phí vận hành, nghiên cứu, di chuyển phục vụ công việc trước, sau đó mới nộp thuế thu nhập trên khoản lãi ròng cuối cùng.',
        keyInsight: 'Mù mờ về luật thuế là cách nhanh nhất để tài sản của bạn bị bào mòn hợp pháp mỗi ngày.'
      },
      {
        note: 6,
        title: 'Mô Hình Chiến Lược: Kim Tứ Đồ Dòng Tiền (Cashflow Quadrant)',
        rule: 'Chuyển dịch bản sắc từ Bán Thời Gian (Làm công E & Tự doanh S) sang Sở Hữu Hệ Thống (Chủ doanh nghiệp B & Nhà đầu tư I).',
        explanation: 'Ở nhóm E (Employee) và S (Self-employed), bạn nghỉ làm là tiền ngừng chảy. Ở nhóm B (Business Owner) và I (Investor), bạn xây dựng một cỗ máy hoặc ủy thác vốn cho cỗ máy để nó tự sinh lời độc lập với sự hiện diện thể xác của bạn.',
        keyInsight: 'Tự do tài chính chỉ bắt đầu khi dòng tiền thụ động từ Cột Tài Sản lớn hơn tổng chi phí sinh hoạt hàng tháng.'
      },
      {
        note: 7,
        title: 'Giới Hạn & Điểm Phản Biện Đa Chiều (Counter-View)',
        rule: 'Đòn bẩy nợ (Debt) là con dao hai lưỡi; quá khích lệ đầu cơ bất động sản có thể dẫn đến phá sản khi chu kỳ kinh tế sụp đổ.',
        explanation: 'Robert Kiyosaki cổ xúy mạnh mẽ việc dùng nợ ngân hàng (Good Debt) để mua bất động sản. Tuy nhiên, trong thời kỳ lãi suất tăng vọt hoặc khủng hoảng thanh khoản (như năm 2008), đòn bẩy nợ cao sẽ bóp nghẹt nhà đầu tư trước khi kịp nhìn thấy lãi suất kép.',
        keyInsight: 'Cần kết hợp tư duy Kiyosaki với biên độ an toàn (Margin of Safety) của Warren Buffett để không bao giờ bị đứt gãy dòng tiền.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC
    algorithm: [
      {
        step: 1,
        title: 'Kiểm toán cá nhân & Phân loại dòng tiền',
        desc: 'Lập bảng Excel liệt kê mọi thứ bạn sở hữu. Gắn nhãn đỏ cho Tiêu sản (những thứ rút tiền hàng tháng) và nhãn xanh cho Tài sản (những thứ đút tiền vào túi).'
      },
      {
        step: 2,
        title: 'Thiết lập cơ chế "Trả cho mình trước tiên"',
        desc: 'Cài đặt lệnh tự động: Vào ngày nhận thu nhập, trích tối thiểu 20% chuyển ngay vào tài khoản tích sản độc lập trước khi thanh toán bất kỳ chi phí nào.'
      },
      {
        step: 3,
        title: 'Cắt giảm chi phí vô hình & Dừng Vòng Chuột Chạy',
        desc: 'Đóng băng các khoản nâng cấp phong cách sống khi được tăng lương. Dành toàn bộ khoản tăng thêm đó để nạp vào Cột Tài Sản.'
      },
      {
        step: 4,
        title: 'Quy tắc mua đồ xa xỉ bằng dòng tiền phụ',
        desc: 'Chỉ được phép mua một món đồ xa xỉ khi đã tạo ra một tài sản sinh lời có dòng tiền hàng tháng đủ trả chi phí khấu hao của món đồ đó.'
      }
    ],

    // TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG
    powerQuestions: [
      'Nếu ngày mai bạn mất việc hoặc ngừng làm việc hoàn toàn, bạn và gia đình có thể sống sót được bao nhiêu tháng bằng dòng tiền hiện tại?',
      'Thứ đắt tiền nhất bạn vừa mua tháng trước là một Tài sản đút tiền vào túi bạn, hay một Tiêu sản đang âm thầm móc túi bạn mỗi ngày?',
      'Bạn đang dành bao nhiêu giờ mỗi tuần để gia tăng Cột Thu Nhập (đổi thời gian lấy tiền) so với thời gian xây dựng Cột Tài Sản (hệ thống tự sinh tiền)?',
      'Khoản chi tiêu nào trong cuộc sống của bạn đang xuất phát từ áp lực muốn thể hiện sự giàu sang với những người bạn thậm chí không thích?'
    ],

    // TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI
    caseStudy: {
      subject: 'Cặp đôi kỹ sư Thung lũng Silicon vs Nhà đầu tư tích sản tinh gọn',
      context: 'Hai kỹ sư tại San Francisco đạt tổng thu nhập 400.000 USD/năm nhưng mua biệt thự 2 triệu USD trả góp và 2 chiếc xe Tesla sang trọng.',
      outcome: 'Khi làn sóng cắt giảm công nghệ nổ ra, chi phí lãi vay và sinh hoạt 25.000 USD/tháng khiến họ kiệt quệ tài chính chỉ sau 4 tháng mất việc. Ngược lại, một lập trình viên thu nhập 120.000 USD duy trì lối sống tinh gọn, tích lũy 5 căn hộ cho thuê tạo dòng tiền 6.000 USD/tháng đã đạt tự do tài chính ở tuổi 35.',
      lesson: 'Sự giàu có thực sự được đo bằng Thời Gian bạn có thể sống tự do, chứ không đo bằng con số thu nhập trên giấy.'
    },

    // TẦNG 6: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Chiếc Ví Da Vàng Hai Van Nước',
      visualDescription: 'Một chiếc ví da màu vàng rực rỡ đặt trên bàn làm việc. Bên trái là van nước bằng vàng tự động phun tiền ào ào vào ngăn ví (Tài sản). Bên phải là đáy ví thủng rò rỉ làm tiền rơi vãi xuống sàn (Tiêu sản).',
      lociLocation: 'Đặt tại Mặt Bàn Làm Việc ở Cung Điện Phòng Khách của bạn.',
      sensoryCue: 'Cảm nhận sức nặng của thỏi vàng trong tay và nghe tiếng đồng xu vàng rơi leng keng vui tai.'
    },

    // FLASH RECALL DRILL CARDS (TRUY HỒI CHỦ ĐỘNG ĐO LƯỜNG THẤU HIỂU)
    recallCards: [
      {
        question: 'Sự khác biệt sinh tử giữa "Tài Sản" và "Tiêu Sản" theo định nghĩa của Robert Kiyosaki là gì?',
        hint: 'Nghĩ về hướng đi của dòng tiền (vào túi hay ra khỏi túi).',
        answer: 'Tài sản là thứ đút tiền vào túi bạn (bất động sản cho thuê, cổ phiếu chia cổ tức, bản quyền). Tiêu sản là thứ rút tiền ra khỏi túi bạn (nhà mua trả góp để ở, xe hơi cá nhân, đồ hiệu tiêu dùng).'
      },
      {
        question: 'Bản chất của cạm bẫy "Vòng Chuột Chạy" (The Rat Race) là gì và vì sao tăng lương không giải quyết được?',
        hint: 'Mối quan hệ giữa tăng thu nhập và nâng cấp mức sống chi tiêu.',
        answer: 'Khi lương tăng, người ta có xu hướng nâng cấp chi phí sinh hoạt và vay nợ nhiều hơn, khiến chi phí tăng bằng hoặc vượt tốc độ tăng lương. Người lao động bị trói chặt vào chiếc lồng quay: Đi làm ➔ Nhận lương ➔ Trả nợ ➔ Tiếp tục đi làm.'
      },
      {
        question: 'Quy tắc "Trả cho mình trước tiên" (Pay Yourself First) được thực thi như thế nào?',
        hint: 'Thời điểm và tỷ lệ trích dòng tiền vào Cột Tài Sản.',
        answer: 'Vào ngày nhận thu nhập, trích ngay tối thiểu 20% chuyển thẳng vào Cột Tài Sản để mua tài sản sinh lời trước, sau đó mới xoay xở chi tiêu trong số còn lại. Tuyệt đối không chi tiêu hết rồi mới tiết kiệm phần thừa.'
      },
      {
        question: 'Biểu tượng Mỏ Neo Ký Ức để khóa chặt cuốn sách này vào Cung Điện là gì?',
        hint: 'Hình dung đồ vật đặt trên bàn phòng khách.',
        answer: 'Chiếc ví da vàng 2 van nước: Van vàng bên trái tự động rót tiền vào (Tài sản), van thủng bên phải rỉ nước làm rơi tiền ra sàn (Tiêu sản).'
      }
    ]
  },

  // 2. TÂM LÝ HỌC VỀ TIỀN
  {
    id: 'psychology_of_money',
    title: 'Tâm Lý Học Về Tiền',
    origTitle: 'The Psychology of Money: Timeless Lessons on Wealth, Greed, and Happiness',
    author: 'Morgan Housel',
    year: '2020',
    genreId: 'finance',
    genreName: 'Tài Chính & Kinh Tế',
    readingTime: '15 - 20 Phút',
    badge: 'Bestseller Toàn Cầu Về Khoa Học Hành Vi',
    color: 'from-emerald-600 via-teal-600 to-cyan-700',
    icon: 'coins',
    academicSource: 'Harriman House (2020), Collaborative Fund, Behavioral Economics Research.',
    shortDesc: 'Khám phá vì sao thành công tài chính không nằm ở trí thông minh IQ hay bảng tính Excel, mà phụ thuộc hoàn toàn vào cách bạn làm chủ cảm xúc tham lam và sợ hãi.',

    // TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (AXIOM)
    axiom: 'Thành công tài chính không phải là một môn khoa học chính xác dựa trên công thức toán học, mà là một kỹ năng mềm: Cách bạn hành xử quan trọng hơn nhiều so với những gì bạn biết.',
    masterQuote: 'Giàu có là thứ bạn không nhìn thấy. Đó là những chiếc xe chưa mua, những chiếc đồng hồ chưa đeo, những chiếc vé máy bay hạng nhất bị từ chối. Giàu có là sự tự do được lựa chọn.',

    // TẦNG 2: BỘ ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN
    the7Notes: [
      {
        note: 1,
        title: 'Bối Cảnh & Vấn Đề Nhức Nhối',
        rule: 'Con người thường đối xử với tiền bạc như môn vật lý (áp dụng công thức), trong khi nó vận hành như tâm lý học (bị cảm xúc dẫn dắt).',
        explanation: 'Các mô hình kinh tế học luôn giả định con người là những cỗ máy lý trí tối ưu hóa lợi ích. Nhưng trong thực tế, các quyết định tiền bạc được đưa ra trên bàn ăn tối, dưới áp lực của lòng tự ái, sự ghen tị, nỗi sợ hãi và niềm kiêu hãnh cá nhân.',
        keyInsight: 'Bạn có thể có bằng tiến sĩ tài chính nhưng vẫn phá sản nếu không kiểm soát được lòng tham.'
      },
      {
        note: 2,
        title: 'Ý Niệm Tối Thượng: Sự Khác Biệt Giữa "Rich" (Giàu Sang) và "Wealth" (Giàu Có)',
        rule: 'Tiêu tiền để khoe mình có tiền là cách nhanh nhất để bạn có ít tiền đi.',
        explanation: 'Người giàu sang bề nổi (Rich) là người có thu nhập cao và tiêu xài phô trương (xe sang, đồ hiệu). Người giàu có thực sự (Wealthy) là người sở hữu các tài sản vô hình chưa bị tiêu xài: Đó là quyền tự do quyết định làm gì, với ai, vào lúc nào và trong bao lâu.',
        keyInsight: 'Cổ tức cao nhất mà tiền bạc mang lại chính là Tự Do Thời Gian, không phải là sự ngưỡng mộ của người lạ.'
      },
      {
        note: 3,
        title: 'Cái Bẫy Nhận Thức: Cột Gôn Luôn Bị Dời Đi (The Moving Goalpost)',
        rule: 'Khi bạn không biết thế nào là "Đủ", bạn sẽ đem thứ mình cần đi đánh cược để lấy thứ mình chỉ muốn.',
        explanation: 'Chủ nghĩa so sánh xã hội khiến con người khi kiếm được 1 tỷ lại muốn 10 tỷ, có 10 tỷ lại muốn 100 tỷ. Việc liên tục dời cột gôn khiến bạn chấp nhận những rủi ro điên rồ, dẫn đến thảm kịch mất đi gia đình, tự do và danh dự.',
        keyInsight: 'Kỹ năng tài chính khó nhất không phải là kiếm tiền, mà là giữ cho lòng tham không vượt quá sự bình an tâm trí.'
      },
      {
        note: 4,
        title: 'Nguyên Lý Nền Tảng #1: Bí Mật Thực Sự Của Warren Buffett Là THỜI GIAN',
        rule: 'Hơn 99% tài sản của Warren Buffett được tích lũy sau sinh nhật lần thứ 50 của ông.',
        explanation: 'Kỹ năng vĩ đại nhất của Buffett không phải là chọn được cổ phiếu có tỷ suất sinh lời cao nhất, mà là ông bắt đầu đầu tư từ năm 10 tuổi và kiên trì không gián đoạn suốt hơn 75 năm. Bản chất của lãi suất kép đòi hỏi sự bền bỉ, không đòi hỏi sự liều mạng.',
        keyInsight: 'Một tỷ suất sinh lời trung bình được duy trì trong thời gian phi thường sẽ đánh bại tỷ suất sinh lời phi thường chỉ duy trì trong thời gian ngắn ngủi.'
      },
      {
        note: 5,
        title: 'Nguyên Lý Nền Tảng #2: Biên Độ An Toàn & Kế Hoạch Cho Điều Bất Định',
        rule: 'Phần quan trọng nhất của mọi kế hoạch là lên kế hoạch cho những việc diễn ra không đúng theo kế hoạch.',
        explanation: 'Biên độ an toàn (Margin of Safety / Room for Error) không phải là sự bảo thủ, mà là sự thừa nhận khiêm nhường rằng tương lai luôn chứa đựng những sự kiện "Thiên nga đen" không thể đoán trước. Dự phòng tiền mặt lớn giúp bạn tồn tại qua mọi cuộc sụp đổ thị trường.',
        keyInsight: 'Chỉ cần bạn không bị loại khỏi cuộc chơi trong những ngày tồi tệ nhất, thời gian sẽ tự động đưa bạn về đích.'
      },
      {
        note: 6,
        title: 'Mô Hình Chiến Lược: Tối Ưu Hóa "Giấc Ngủ Ngon" Thay Vì Tối Ưu Lợi Nhuận',
        rule: 'Chiến lược tài chính tốt nhất là chiến lược giúp bạn ngủ ngon mỗi đêm mà không bị hoảng loạn bán tháo.',
        explanation: 'Trên bảng tính Excel, việc vay nợ tối đa để đòn bẩy chứng khoán có thể cho con số lợi nhuận lý thuyết cao nhất. Nhưng ngoài đời thực, khi thị trường giảm 40%, áp lực tâm lý sẽ ép bạn cắt lỗ đúng đáy. Hãy chọn phương án đầu tư có vẻ kém tối ưu trên giấy nhưng giúp bạn bình thản vượt qua bão giông.',
        keyInsight: 'Mục tiêu tài chính tối hậu là đạt được sự độc lập, không phải là chiến thắng mọi người khác trong cuộc đua lợi suất.'
      },
      {
        note: 7,
        title: 'Giới Hạn & Điểm Phản Biện Đa Chiều',
        rule: 'Quá thận trọng và dự phòng tiền mặt quá mức có thể khiến bạn bị lạm phát bào mòn sức mua trong dài hạn.',
        explanation: 'Morgan Housel giữ tỷ lệ tiền mặt rất cao để an tâm. Tuy nhiên, đối với người trẻ đang ở giai đoạn đầu tích lũy tài sản, việc nắm giữ quá nhiều tiền mặt trong bối cảnh tiền tệ mất giá sẽ làm mất đi cơ hội hưởng lợi từ đà tăng trưởng của các tài sản thực.',
        keyInsight: 'Tỷ lệ an toàn phải được cân bằng tương ứng với độ tuổi và năng lực chịu đựng rủi ro cá nhân.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC
    algorithm: [
      {
        step: 1,
        title: 'Xác định định nghĩa cá nhân về chữ "Đủ"',
        desc: 'Viết ra giấy mức chi tiêu sinh hoạt thỏa mãn sự hạnh phúc nội tại của bạn. Cố định mức này để không bị cuốn vào vòng xoáy nâng cấp lối sống đua đòi.'
      },
      {
        step: 2,
        title: 'Xây dựng pháo đài quỹ khẩn cấp 12 tháng',
        desc: 'Tách biệt một khoản tiền mặt đủ duy trì cuộc sống từ 6 đến 12 tháng trong tài khoản thanh khoản cao, tuyệt đối không dùng để đầu cơ.'
      },
      {
        step: 3,
        title: 'Chiến lược đầu tư tích lũy chỉ số dài hạn',
        desc: 'Ủy thác phần lớn vốn tích lũy vào các quỹ chỉ số toàn diện (Index Funds / ETF) hoặc cổ phiếu nền tảng, duy trì đều đặn bất chấp thị trường lên hay xuống.'
      },
      {
        step: 4,
        title: 'Thực hành bài kiểm tra "Giấc ngủ ngon"',
        desc: 'Trước khi giải ngân vốn vào bất kỳ kênh đầu tư nào, tự hỏi: "Nếu tài sản này giảm giá 50% vào ngày mai, mình có ngủ ngon không?". Nếu câu trả lời là không ➔ Giảm quy mô vị thế.'
      }
    ],

    // TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG
    powerQuestions: [
      'Bạn đang tiết kiệm tiền để mua sắm vật chất phô trương, hay tiết kiệm để mua lấy Quyền Tự Do Thời Gian của chính cuộc đời mình?',
      'Định nghĩa chữ "Đủ" của bạn là gì, hay cột gôn của bạn vẫn đang liên tục bị dịch chuyển mỗi khi tài khoản của bạn tăng lên?',
      'Trong các quyết định tài chính của bạn, có bao nhiêu quyết định được đưa ra vì lý trí thực sự, và bao nhiêu quyết định chỉ để giải tỏa sự ghen tị với người khác?',
      'Bạn đã chuẩn bị một Biên độ an toàn đủ vững chắc để sống sót nếu nền kinh tế rơi vào suy thoái kéo dài 3 năm chưa?'
    ],

    // TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI
    caseStudy: {
      subject: 'Ronald Read (Nhân viên quét dọn) vs Richard Fuscone (Giám đốc Merrill Lynch)',
      context: 'Ronald Read là một nhân viên quét dọn trạm xăng tại vùng nông thôn nước Mỹ, sống giản dị và mua cổ phiếu cơ bản tích lũy suốt 50 năm. Richard Fuscone tốt nghiệp Harvard, là giám đốc ngân hàng đầu tư Merrill Lynch kiếm hàng triệu USD mỗi năm nhưng vay nợ xây biệt thự 11 phòng ngủ.',
      outcome: 'Năm 2008, Fuscone phá sản hoàn toàn vì đòn bẩy nợ. Trong khi đó, khi Ronald Read qua đời năm 2014, ông để lại khối tài sản hơn 8 triệu USD, quyên góp phần lớn cho thư viện và bệnh viện địa phương.',
      lesson: 'Thành công tài chính không phụ thuộc vào trường lớp bạn tốt nghiệp, mà phụ thuộc vào việc bạn có kiên nhẫn kiểm soát bản thân suốt đời hay không.'
    },

    // TẦNG 6: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Tảng Băng Trôi Khổng Lồ Giữa Đại Dương',
      visualDescription: 'Một tảng băng trôi hùng vĩ giữa biển khơi. Phần nổi trên mặt nước chỉ là chiếc siêu xe bóng bẩy (tiêu xài). Nhưng phần thân khổng lồ chìm sâu dưới đáy đại dương mới là khối tài sản tự do đích thực nâng đỡ toàn bộ tảng băng.',
      lociLocation: 'Đặt bên Khung Cửa Sổ Hướng Biển trong Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận làn gió biển mát rượi và cảm giác thanh thản, tự do tuyệt đối không ai lay chuyển được.'
    },

    // FLASH RECALL DRILL CARDS
    recallCards: [
      {
        question: 'Vì sao Morgan Housel khẳng định thành công tài chính không phụ thuộc vào IQ mà phụ thuộc vào kỹ năng mềm?',
        hint: 'Nghĩ về sự khác nhau giữa công thức toán học và cảm xúc con người.',
        answer: 'Vì các quyết định tiền bạc ngoài đời thực bị chi phối bởi cảm xúc (tham lam, sợ hãi, ghen tị, tự ái). Một người có IQ thiên tài vẫn phá sản nếu không kiềm chế được lòng tham.'
      },
      {
        question: 'Sự khác biệt cốt tử giữa "Rich" (Giàu sang) và "Wealth" (Giàu có) là gì?',
        hint: 'Cái nhìn thấy được bằng mắt vs Cái vô hình.',
        answer: '"Rich" là thu nhập hiện tại và những thứ bạn đã tiêu xài phô trương (xe sang, đồ hiệu). "Wealth" là những tài sản chưa bị tiêu xài, mang lại quyền tự do làm chủ thời gian của chính mình.'
      },
      {
        question: 'Bí mật thực sự lớn nhất tạo nên khối tài sản của Warren Buffett là gì?',
        hint: 'Không phải là tỷ suất sinh lời cao nhất, mà là yếu tố nào?',
        answer: 'Yếu tố Thời Gian & Bền Bỉ. Hơn 99% tài sản của Buffett được tạo ra sau tuổi 50 nhờ duy trì lợi suất trung bình ổn định liên tục suốt hơn 75 năm mà không bao giờ bị phá sản.'
      },
      {
        question: 'Biểu tượng Mỏ Neo Cung Điện để nhớ cuốn sách này là gì?',
        hint: 'Hình ảnh giữa đại dương đặt bên cửa sổ.',
        answer: 'Tảng băng trôi khổng lồ: Phần chóp nổi là tiêu xài hào nhoáng, phần thân chìm khổng lồ dưới biển là tài sản tự do vững chãi.'
      }
    ]
  },

  // 3. TƯ DUY NHANH VÀ CHẬM
  {
    id: 'thinking_fast_slow',
    title: 'Tư Duy Nhanh Và Chậm',
    origTitle: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman (Giải Nobel Kinh Tế 2002)',
    year: '2011',
    genreId: 'psychology',
    genreName: 'Tâm Lý & Nhận Thức',
    readingTime: '20 - 25 Phút',
    badge: 'Đột Phá Lịch Sử Khoa Học Nhận Thức',
    color: 'from-purple-600 via-pink-600 to-indigo-700',
    icon: 'brain-circuit',
    academicSource: 'Farrar, Straus and Giroux (2011), Nobel Prize in Economic Sciences Lecture, Behavioral Economics Foundation.',
    shortDesc: 'Giải phẫu toàn diện 2 hệ thống chi phối mọi quyết định của não bộ và bóc trần các cạm bẫy thiên kiến nhận thức khiến con người ngộ nhận.',

    // TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (AXIOM)
    axiom: 'Tâm trí con người bị giằng xé bởi hai nhân vật: Hệ Thống 1 (bản năng, nhanh, đầy ảo tưởng thiên kiến) và Hệ Thống 2 (logic, chậm chạp, nhưng cực kỳ lười biếng). Phần lớn sai lầm cuộc đời sinh ra do để Hệ Thống 1 quyết định thay cho Hệ Thống 2.',
    masterQuote: 'Sự tự tin thái quá của con người thường xuất phát từ việc chúng ta hoàn toàn mù quáng trước sự thiếu hiểu biết của chính mình.',

    // TẦNG 2: BỘ ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN
    the7Notes: [
      {
        note: 1,
        title: 'Bối Cảnh & Vấn Đề Nhức Nhối',
        rule: 'Con người luôn tin rằng mình là sinh vật duy lý, nhưng thực chất 95% quyết định hàng ngày được đưa ra hoàn toàn bằng tiềm thức cảm tính.',
        explanation: 'Nhà kinh tế học truyền thống coi con người là "Homo Economicus" luôn tính toán tối ưu. Daniel Kahneman và Amos Tversky đã dùng hàng trăm thí nghiệm chứng minh điều ngược lại: Não bộ đầy rẫy các điểm mù có hệ thống (Cognitive Biases).',
        keyInsight: 'Sai lầm của chúng ta không phải là ngẫu nhiên, mà là những sai lầm có tính quy luật lặp đi lặp lại.'
      },
      {
        note: 2,
        title: 'Ý Niệm Tối Thượng: Cuộc Chiến Giữa Hệ Thống 1 và Hệ Thống 2',
        rule: 'Hệ thống 1 vận hành tự động không tốn nỗ lực; Hệ thống 2 đòi hỏi sự tập trung cao độ và tiêu hao năng lượng lớn.',
        explanation: 'Hệ thống 1 giúp bạn né một chiếc xe đang lao tới trong 0.1 giây. Hệ thống 2 giúp bạn giải bài toán 17 x 24. Vì não người luôn tìm cách tiết kiệm calo, Hệ thống 2 thường lười biếng chấp nhận phán quyết vội vã của Hệ thống 1 mà không hề kiểm tra lại.',
        keyInsight: 'Chúng ta thường hành động theo cảm tính của Hệ thống 1 rồi sau đó mới dùng logic của Hệ thống 2 để ngụy biện.'
      },
      {
        note: 3,
        title: 'Cái Bẫy Nhận Thức: Ảo Tưởng WYSIATI (Điều Bạn Thấy Là Tất Cả Những Gì Tồn Tại)',
        rule: 'What You See Is All There Is: Não bộ chỉ sử dụng thông tin đang có trước mắt để dệt nên một câu chuyện mạch lạc, phớt lờ hoàn toàn những dữ kiện còn thiếu.',
        explanation: 'Khi nghe một câu chuyện nghe có vẻ hợp lý, não lập tức tin sái cổ mà không hề tự hỏi: "Còn những dữ kiện quan trọng nào mà mình chưa được biết?". Đây là gốc rễ của sự quy chụp và phán xét phiến diện.',
        keyInsight: 'Sự mạch lạc của câu chuyện đánh lừa não bộ rằng đó là sự thật khách quan.'
      },
      {
        note: 4,
        title: 'Nguyên Lý Nền Tảng #1: Hiệu Ứng Mỏ Neo (Anchoring Effect)',
        rule: 'Bất kỳ con số hay thông tin đầu tiên nào lọt vào tai bạn sẽ vô thức trở thành mỏ neo chi phối toàn bộ phán đoán tiếp theo.',
        explanation: 'Nếu một chiếc áo niêm yết giá gốc 2 triệu rồi giảm còn 800k, mỏ neo 2 triệu khiến bạn thấy 800k là món hời, dù chiếc áo đó chỉ có giá trị thực 300k. Trong đàm phán, người ra giá đầu tiên thường là người nắm thế chủ động.',
        keyInsight: 'Hãy luôn chất vấn con số khởi điểm để không bị trói vào mỏ neo của người khác.'
      },
      {
        note: 5,
        title: 'Nguyên Lý Nền Tảng #2: Lý Thuyết Triển Vọng & Nỗi Đau Mất Mát (Loss Aversion)',
        rule: 'Cảm giác đau đớn khi mất mát một tài sản lớn gấp đôi cảm giác sung sướng khi nhận được tài sản tương đương.',
        explanation: 'Mất 10 triệu đồng đau đớn gấp 2-2.5 lần niềm vui khi nhặt được 10 triệu đồng. Tâm lý sợ mất mát này khiến con người thường gồng lỗ mù quáng trong đầu tư (không dám cắt lỗ vì sợ thừa nhận mất mát) nhưng lại vội vã chốt lời non khi vừa có chút lãi.',
        keyInsight: 'Nỗi sợ mất mát giam cầm con người trong sự an toàn giả tạo và bóp nghẹt khả năng bứt phá.'
      },
      {
        note: 6,
        title: 'Mô Hình Chiến Lược: Kỹ Thuật Đóng Khung & Phản Biện Khung (Framing)',
        rule: 'Cách thức thông tin được trình bày (khung tích cực vs khung tiêu cực) quyết định phản xạ lựa chọn của con người.',
        explanation: 'Một ca phẫu thuật được giới thiệu: "Tỷ lệ sống sót sau 1 tháng là 90%" sẽ khiến 84% bệnh nhân đồng ý. Nhưng nếu giới thiệu: "Tỷ lệ tử vong sau 1 tháng là 10%", tỷ lệ đồng ý giảm xuống chỉ còn 50%, dù hai cách nói hoàn toàn giống nhau về mặt toán học.',
        keyInsight: 'Bậc thầy giao tiếp và chiến lược luôn biết cách tái cấu trúc chiếc khung (Re-framing) để xoay chuyển cục diện.'
      },
      {
        note: 7,
        title: 'Giới Hạn & Điểm Phản Biện Đa Chiều',
        rule: 'Không thể loại bỏ hoàn toàn Hệ thống 1; việc lạm dụng Hệ thống 2 vào mọi việc nhỏ nhặt sẽ dẫn đến tê liệt quyết định (Analysis Paralysis).',
        explanation: 'Hệ thống 1 với các trực giác tích lũy qua kinh nghiệm thực chiến (như trực giác của đại kiện tướng cờ vua hay lính cứu hỏa lão luyện) cực kỳ giá trị trong môi trường có tính quy luật cao. Cố gắng tính toán logic cho mọi việc vụn vặt sẽ làm cạn kiệt năng lượng não bộ.',
        keyInsight: 'Dùng Hệ thống 1 để sống linh hoạt hàng ngày; chỉ đánh thức Hệ thống 2 khi đứng trước các quyết định sinh tử.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC
    algorithm: [
      {
        step: 1,
        title: 'Quy tắc "Dừng 10 giây" để đánh thức Hệ Thống 2',
        desc: 'Mỗi khi đứng trước một quyết định quan trọng, hít một hơi sâu và dừng lại tối thiểu 10 giây để ngăn chặn Hệ thống 1 phản xạ cảm tính tức thì.'
      },
      {
        step: 2,
        title: 'Kiểm tra bẫy WYSIATI bằng câu hỏi đảo chiều',
        desc: 'Tự hỏi: "Nếu câu chuyện này hoàn toàn ngược lại thì sao? Dữ kiện quan trọng nào đang bị giấu kín hoặc chưa xuất hiện trên bàn?".'
      },
      {
        step: 3,
        title: 'Bẻ gãy mỏ neo tâm lý trong đàm phán',
        desc: 'Khi đối phương đưa ra một con số mỏ neo vô lý, không tranh luận quanh con số đó. Hãy dứt khoát xóa bỏ mỏ neo và thiết lập một căn cứ hoàn toàn mới.'
      },
      {
        step: 4,
        title: 'Thực hiện kỹ thuật "Khám nghiệm trước tử thi" (Premortem)',
        desc: 'Trước khi bấm nút triển khai dự án, giả định rằng: "Bây giờ là 1 năm sau và dự án đã thất bại thảm hại. Hãy viết ra tất cả những lý do khiến nó thất bại!".'
      }
    ],

    // TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG
    powerQuestions: [
      'Phán đoán vừa rồi của bạn xuất phát từ sự thật khách quan đã được chứng minh, hay chỉ là phản xạ tự động của Hệ Thống 1 dựa trên cảm xúc nhất thời?',
      'Bạn có đang bị đóng khung tâm lý (Framing) bởi cách dùng từ ngữ của người bán hàng hay truyền thông hay không?',
      'Nếu bạn bắt đầu lại từ con số 0 vào ngày hôm nay, bạn có tiếp tục đầu tư tiền và thời gian vào mối quan hệ hoặc dự án đang bế tắc này nữa không?',
      'Bạn đang tìm kiếm bằng chứng để chứng minh mình ĐÚNG, hay dũng cảm tìm kiếm bằng chứng để phát hiện mình SAI?'
    ],

    // TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI
    caseStudy: {
      subject: 'Thảm kịch sáp nhập Daimler-Benz và Chrysler (1998)',
      context: 'Tập đoàn ô tô Đức Daimler-Benz chi 36 tỷ USD sáp nhập với Chrysler của Mỹ với niềm tin thái quá vào sự cộng hưởng kinh tế (Synergy).',
      outcome: 'Các giám đốc cấp cao bị rơi vào bẫy WYSIATI và Thiên kiến xác nhận, phớt lờ hoàn toàn sự xung đột văn hóa sâu sắc giữa phong cách kỹ thuật cứng nhắc của Đức và văn hóa bán hàng linh hoạt của Mỹ. Thương vụ sụp đổ thảm hại, gây thiệt hại hàng chục tỷ USD và phải bán tháo Chrysler với giá chỉ bằng một phần nhỏ vào năm 2007.',
      lesson: 'Sự tự tin mù quáng của các chuyên gia hàng đầu thường nguy hiểm hơn sự thiếu hiểu biết của người mới bắt đầu.'
    },

    // TẦNG 6: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Chú Thỏ Siêu Tốc & Cụ Rùa Đeo Kính',
      visualDescription: 'Một chú thỏ trắng chạy nhanh như chớp (Hệ thống 1) đang lao vun vút về phía mép vực thẳm, nhưng bị một Cụ Rùa thông thái đeo kính cận (Hệ thống 2) từ tốn giẫm chân lên dây cương ghì chặt lại.',
      lociLocation: 'Đặt trước Chiếc Gương Lớn ở Sảnh Chính Cung Điện Ký Ức.',
      sensoryCue: 'Nghe tiếng gió rít bên tai của chú thỏ và cảm nhận sự vững chãi, chậm rãi của bàn chân cụ rùa.'
    },

    // FLASH RECALL DRILL CARDS
    recallCards: [
      {
        question: 'Đặc tính khác nhau cơ bản giữa Hệ Thống 1 và Hệ Thống 2 là gì?',
        hint: 'Nghĩ về tốc độ, cảm xúc, năng lượng tiêu hao.',
        answer: 'Hệ thống 1: Nhanh, tự động, cảm tính, tiêu tốn ít năng lượng. Hệ thống 2: Chậm, logic, nỗ lực tính toán, nhưng lười biếng. Sai lầm xảy ra khi Hệ thống 1 trả lời thay cho Hệ thống 2.'
      },
      {
        question: 'Ảo tưởng WYSIATI (What You See Is All There Is) đánh lừa não bộ như thế nào?',
        hint: 'Não chỉ dùng thông tin hiện có để làm gì?',
        answer: 'Não bộ chỉ sử dụng những dữ kiện trước mắt để dệt nên một câu chuyện mạch lạc và coi đó là sự thật tuyệt đối, phớt lờ hoàn toàn những dữ kiện còn thiếu hoặc chưa nhìn thấy.'
      },
      {
        question: 'Lý thuyết Triển vọng giải thích tại sao con người ghét mất mát (Loss Aversion)?',
        hint: 'So sánh mức độ đau đớn khi mất tiền vs niềm vui khi nhận tiền.',
        answer: 'Nỗi đau đớn khi mất mát tài sản lớn gấp 2 đến 2.5 lần niềm vui khi nhận được tài sản tương đương, khiến con người hay gồng lỗ mù quáng và sợ hãi rủi ro quá mức.'
      },
      {
        question: 'Kỹ thuật "Khám nghiệm trước tử thi" (Premortem) được thực hiện như thế nào trước khi ra quyết định?',
        hint: 'Tưởng tượng về tương lai 1 năm sau.',
        answer: 'Giả định rằng dự án đã thất bại thảm hại trong tương lai, sau đó yêu cầu mọi người viết ra tất cả những nguyên nhân sâu xa dẫn đến thảm họa đó để phòng ngừa trước.'
      }
    ]
  },

  // 4. ATOMIC HABITS
  {
    id: 'atomic_habits',
    title: 'Atomic Habits - Thói Quen Nguyên Tử',
    origTitle: 'Atomic Habits: An Easy & Proven Way to Build Good Habits & Break Bad Ones',
    author: 'James Clear',
    year: '2018',
    genreId: 'habits',
    genreName: 'Thói Quen & Hiệu Suất',
    readingTime: '15 - 20 Phút',
    badge: 'Bách Khoa Thay Đổi Hành Vi Bằng Khoa Học Não Bộ',
    color: 'from-cyan-600 via-blue-600 to-indigo-700',
    icon: 'zap',
    academicSource: 'Avery / Penguin Random House (2018), Neuroscience and Behavioral Conditioning Studies.',
    shortDesc: 'Phương pháp kiến tạo thói quen tốt và triệt tiêu thói quen xấu thông qua các thay đổi vi mô 1% mỗi ngày dựa trên cơ chế vòng lặp thần kinh học.',

    // TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (AXIOM)
    axiom: 'Bạn không vươn lên tới tầm cao của mục tiêu bạn đặt ra; bạn rơi xuống mức độ của hệ thống vận hành bạn thiết lập. Tốt hơn 1% mỗi ngày sau 365 ngày bạn sẽ tiến bộ gấp 37 lần.',
    masterQuote: 'Thói quen là lãi suất kép của sự tự hoàn thiện. Giống như tiền bạc sinh sôi nhờ lãi kép, hiệu quả của thói quen cũng nhân lên gấp bội khi bạn lặp lại chúng qua từng ngày.',

    // TẦNG 2: BỘ ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN
    the7Notes: [
      {
        note: 1,
        title: 'Bối Cảnh & Vấn Đề Nhức Nhối',
        rule: 'Con người thường cố gắng thay đổi cuộc đời bằng những bước nhảy vọt hoành tráng nhưng thất bại vì không chống lại được ma sát tâm lý.',
        explanation: 'Người ta đặt mục tiêu giảm 10kg, đọc 50 cuốn sách một năm, rồi dồn hết ý chí cày cuốc trong 1 tuần để rồi kiệt sức và từ bỏ hoàn toàn. Họ bị ám ảnh bởi Kết quả mà quên mất rằng Kết quả chỉ là hệ quả tất yếu của Hệ Thống thói quen hàng ngày.',
        keyInsight: 'Hãy quên mục tiêu đi, hãy tập trung vào xây dựng hệ thống vận hành trơn tru.'
      },
      {
        note: 2,
        title: 'Ý Niệm Tối Thượng: Thói Quen Dựa Trên Bản Sắc (Identity-Based Habits)',
        rule: 'Sự thay đổi hành vi bền vững nhất bắt đầu từ việc thay đổi niềm tin cốt lõi về con người bạn muốn trở thành.',
        explanation: 'Có 3 tầng thay đổi: 1. Thay đổi Kết quả (Mục tiêu) ➔ 2. Thay đổi Quy trình (Hành động) ➔ 3. Thay đổi Bản sắc (Niềm tin cốt lõi). Nếu bạn coi mình là người lười biếng đang cố gắng dậy sớm, bạn sẽ thất bại. Nhưng nếu bạn xây dựng bản sắc: "Tôi là một người có kỷ luật thép", hành động sẽ tự động tuân theo bản sắc.',
        keyInsight: 'Mỗi hành động bạn làm là một lá phiếu bầu cho con người bạn muốn trở thành trong tương lai.'
      },
      {
        note: 3,
        title: 'Cái Bẫy Nhận Thức: Thung Lũng Thất Vọng (The Valley of Disappointment)',
        rule: 'Kết quả của thói quen luôn có độ trễ lớn; người ta bỏ cuộc vì không nhìn thấy sự tiến bộ ngay trước mắt.',
        explanation: 'Băng tan ở 0°C. Từ -10°C lên -1°C, nhiệt độ tăng 9 độ nhưng cục băng vẫn trơ trơ không suy suyển. Đến khi chạm ngưỡng 0°C, chỉ 1 độ tăng thêm làm cả khối băng tan chảy. Những nỗ lực đầu tiên không hề bị lãng phí, nó đang được tích lũy vào kho năng lượng tiềm năng.',
        keyInsight: 'Kiên nhẫn vượt qua Thung lũng thất vọng là phẩm chất phân định người xuất chúng và kẻ tầm thường.'
      },
      {
        note: 4,
        title: 'Nguyên Lý Nền Tảng #1: Vòng Lặp Phản Xạ 4 Bước Của Não Bộ',
        rule: 'Mọi thói quen đều chạy qua: Tín Hiệu (Cue) ➔ Cơn Thèm Muốn (Craving) ➔ Phản Hồi (Response) ➔ Phần Thưởng (Reward).',
        explanation: 'Não bộ là cỗ máy dò tìm phần thưởng tiết kiệm năng lượng. Muốn tạo thói quen tốt: 1. Làm cho nó Rõ ràng. 2. Làm cho nó Hấp dẫn. 3. Làm cho nó Dễ dàng. 4. Làm cho nó Thỏa mãn. Muốn diệt thói quen xấu: Đảo ngược lại 4 quy luật (Ẩn đi, làm cho nhàm chán, làm cho cực khó, làm cho trừng phạt).',
        keyInsight: 'Kiểm soát Tín hiệu đầu vào là bạn đã kiểm soát được 80% hành vi đầu ra.'
      },
      {
        note: 5,
        title: 'Nguyên Lý Nền Tảng #2: Quy Tắc 2 Phút (The Two-Minute Rule)',
        rule: 'Khi bạn bắt đầu một thói quen mới, nó phải mất dưới 2 phút để thực hiện.',
        explanation: 'Đừng bắt đầu bằng: "Đọc sách 30 phút mỗi tối" ➔ Não sẽ lười biếng. Hãy thu nhỏ nó lại thành: "Đọc đúng 1 trang sách". "Chạy bộ 5km" ➔ Thu nhỏ thành: "Xỏ giày vào chân". Mục tiêu của bước đầu không phải là hoàn thành việc lớn, mà là thành thạo kỹ năng "Xuất hiện".',
        keyInsight: 'Bạn không thể tối ưu hóa một thói quen mà bản thân bạn chưa hề bắt đầu.'
      },
      {
        note: 6,
        title: 'Mô Hình Chiến Lược: Xếp Chồng Thói Quen & Thiết Kế Môi Trường',
        rule: 'Môi trường là bàn tay vô hình nhào nặn hành vi con người. Người kỷ luật nhất là người ít phải dùng đến ý chí nhất.',
        explanation: 'Đừng để đồ ngọt trên bàn nếu muốn giảm cân. Hãy để sách trên gối nếu muốn đọc sách. Áp dụng công thức Xếp Chồng (Habit Stacking): "Sau khi [THÓI QUEN CŨ ĐÃ CÓ], tôi sẽ làm [THÓI QUEN MỚI NGAY LẬP TỨC]".',
        keyInsight: 'Ý chí là nguồn tài nguyên cạn kiệt; môi trường thông minh là nguồn đòn bẩy vĩnh cửu.'
      },
      {
        note: 7,
        title: 'Giới Hạn & Điểm Phản Biện Đa Chiều',
        rule: 'Sự tối ưu hóa vi mô 1% chỉ hiệu quả khi bạn đã chọn ĐÚNG PHƯƠNG HƯỚNG chiến lược.',
        explanation: 'Tốt hơn 1% mỗi ngày trên một con tàu đang chạy sai hướng chỉ đưa bạn đến thảm họa nhanh hơn. Trước khi tối ưu hóa thói quen (Execution), bạn phải dùng tư duy nguyên lý đầu tiên để chọn đúng mục tiêu có đòn bẩy lớn nhất (Strategy).',
        keyInsight: 'Hiệu quả (Efficiency) là làm việc đúng cách; Hiệu lực (Effectiveness) là làm đúng việc.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC
    algorithm: [
      {
        step: 1,
        title: 'Thiết kế thẻ nhận diện Bản sắc mới',
        desc: 'Viết ra tuyên ngôn bản sắc: "Tôi là người [đặc tính bạn muốn]". Mỗi ngày, tự hỏi: "Một người như vậy sẽ đưa ra quyết định gì trong tình huống này?".'
      },
      {
        step: 2,
        title: 'Áp dụng công thức Xếp chồng thói quen',
        desc: 'Gắn thói quen mới vào hành vi tự nhiên hàng ngày: "Sau khi rót ly nước buổi sáng, tôi sẽ mở sách đọc đúng 1 trang".'
      },
      {
        step: 3,
        title: 'Thiết kế môi trường không ma sát',
        desc: 'Giảm số bước tiếp cận thói quen tốt xuống dưới 20 giây; tăng số bước tiếp cận thói quen xấu lên trên 3 phút (rút phích cắm TV, cất điện thoại vào ngăn kéo).'
      },
      {
        step: 4,
        title: 'Quy tắc "Không bao giờ bỏ lỡ 2 lần liên tiếp"',
        desc: 'Nếu hôm nay bạn lỡ bỏ một buổi tập, ngày mai bắt buộc phải tập dù chỉ 2 phút. Bỏ lỡ một lần là sự cố; bỏ lỡ hai lần là khởi đầu của một thói quen xấu mới.'
      }
    ],

    // TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG
    powerQuestions: [
      'Hành động bạn vừa thực hiện hôm nay đang bỏ một lá phiếu bầu cho con người lý tưởng bạn muốn trở thành, hay cho con người bạn muốn từ bỏ?',
      'Môi trường xung quanh bạn (phòng ngủ, bàn làm việc, điện thoại) đang khuyến khích bạn làm việc sâu, hay đang liên tục mời gọi bạn sa vào xao nhãng?',
      'Bạn có thể thu nhỏ thói quen quan trọng nhất của mình về phiên bản dưới 2 phút như thế nào để đảm bảo bạn không bao giờ bỏ lỡ?',
      'Bạn đang kiên trì tích lũy trong Thung lũng thất vọng, hay chuẩn bị bỏ cuộc chỉ vì kết quả chưa hiện ra ngay tức thì?'
    ],

    // TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI
    caseStudy: {
      subject: 'Đội tuyển xe đạp lòng chảo Vương quốc Anh (British Cycling)',
      context: 'Từ năm 1908 đến 2003, đội đua xe đạp Anh chỉ giành được duy nhất 1 huy chương vàng Olympic và là nỗi thất vọng của giới thể thao châu Âu.',
      outcome: 'Năm 2003, Dave Brailsford lên làm Giám đốc hiệu suất và áp dụng triết lý "Tích lũy các cải thiện cận biên 1%" (Aggregating marginal gains): Thiết kế lại yên xe cho thoải mái hơn, cồn lau bánh xe để bám đường hơn, chọn loại gối ngủ giúp vận động viên hồi phục nhanh hơn. Kết quả: Trong 10 năm từ 2007 đến 2017, đội tuyển Anh thống trị hoàn toàn, giành 66 huy chương vàng Olympic và 5 lần vô địch Tour de France.',
      lesson: 'Những cải tiến nhỏ 1% tưởng chừng vô nghĩa khi được kết hợp lại sẽ tạo ra sự thống trị tuyệt đối.'
    },

    // TẦNG 6: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Viên Kim Cương Nguyên Tử Tỏa Hào Quang',
      visualDescription: 'Một viên kim cương nhỏ xíu cỡ hạt bụi (Atomic) nhưng phát ra ánh hào quang rực rỡ. Mỗi ngày một hạt bụi kim cương mới bay tới dính vào, sau 365 ngày nó nở bừng thành một ngọn tháp kim cương khổng lồ chiếu sáng rực rỡ.',
      lociLocation: 'Đặt trên Chiếc Đèn Chùm Trung Tâm trong Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận ánh sáng lấp lánh chiếu rọi khắp căn phòng và độ sắc bén hoàn hảo của viên kim cương.'
    },

    // FLASH RECALL DRILL CARDS
    recallCards: [
      {
        question: 'Tại sao thói quen dựa trên Bản Sắc (Identity-Based Habits) lại vượt trội hơn thói quen dựa trên Mục Tiêu?',
        hint: 'Nghĩ về câu: "Tôi không phải là người hút thuốc" vs "Tôi đang cố bỏ thuốc".',
        answer: 'Mục tiêu chỉ là kết quả tạm thời bên ngoài. Bản sắc là niềm tin cốt lõi về con người bạn muốn trở thành. Khi một hành vi ăn sâu vào bản sắc, nó trở thành phản xạ tự nhiên không cần tốn ý chí đấu tranh.'
      },
      {
        question: 'Bốn quy luật cốt lõi để tạo dựng thói quen tốt là gì?',
        hint: 'Tín hiệu ➔ Cơn thèm ➔ Phản hồi ➔ Phần thưởng.',
        answer: '1. Khiến nó Rõ ràng (Cue). 2. Khiến nó Hấp dẫn (Craving). 3. Khiến nó Dễ dàng (Response). 4. Khiến nó Thỏa mãn (Reward).'
      },
      {
        question: 'Quy tắc 2 Phút (The Two-Minute Rule) giải quyết vấn đề trì hoãn như thế nào?',
        hint: 'Thu nhỏ thói quen lúc bắt đầu.',
        answer: 'Bắt đầu thói quen mới bằng phiên bản dưới 2 phút (chỉ đọc 1 trang, chỉ xỏ giày). Mục tiêu không phải là hoàn thành việc lớn, mà là thành thạo kỹ năng "Xuất hiện" để tạo đà quán tính.'
      },
      {
        question: 'Quy tắc "Không bao giờ bỏ lỡ 2 lần liên tiếp" (Never Miss Twice) có ý nghĩa sống còn gì?',
        hint: 'Sự khác biệt giữa sự cố ngẫu nhiên và sự hình thành thói quen xấu.',
        answer: 'Bỏ lỡ một buổi tập là sự cố ngoài ý muốn; nhưng bỏ lỡ lần thứ hai liên tiếp là khởi đầu của một thói quen xấu mới. Bắt buộc phải duy trì chuỗi dù chỉ làm 2 phút.'
      }
    ]
  },

  // 5. BINH PHÁP TÔN TỬ
  {
    id: 'art_of_war',
    title: 'Binh Pháp Tôn Tử',
    origTitle: 'The Art of War (Sun Tzu)',
    author: 'Tôn Vũ (Sun Tzu)',
    year: '~500 TCN',
    genreId: 'strategy',
    genreName: 'Chiến Lược & Mưu Lược',
    readingTime: '20 - 25 Phút',
    badge: 'Đỉnh Cao Chiến Lược Quân Sự & Đàm Phán Cổ Đại',
    color: 'from-red-600 via-rose-700 to-amber-800',
    icon: 'swords',
    academicSource: '13 Thiên Binh Pháp Cổ Đại, Oxford World\'s Classics Translation, Strategic Military Studies.',
    shortDesc: 'Tuyệt tác mưu lược quân sự 2500 năm tuổi đúc kết quy luật chiến thắng tuyệt đối trong kinh doanh, đàm phán và vượt qua mọi đối thủ mà không tốn một giọt máu.',

    // TẦNG 1: TIÊN ĐỀ CHÂN LÝ TUYỆT ĐỐI (AXIOM)
    axiom: 'Đỉnh cao tối thượng của nghệ thuật chiến tranh không phải là đánh trăm trận trăm thắng, mà là khuất phục quân địch mà không cần giao tranh (Bất chiến tự nhiên thành).',
    masterQuote: 'Biết người biết ta, trăm trận không nguy. Không biết người mà chỉ biết ta, một trận thắng một trận thua. Không biết người cũng không biết ta, mỗi trận giao tranh đều nắm chắc phần bại.',

    // TẦNG 2: BỘ ĐỦ ĐÚNG 7 NỐT NHẠC BẤT BIẾN
    the7Notes: [
      {
        note: 1,
        title: 'Bối Cảnh & Vấn Đề Nhức Nhối',
        rule: 'Binh giả quốc chi đại sự, tử sinh chi địa, tồn vong chi đạo, bất khả bất sát dã (Chiến tranh là việc lớn của quốc gia, là đất sống chết, đạo tồn vong, không thể không xét kỹ).',
        explanation: 'Khởi chiến là việc nguy hiểm và tốn kém nhất. Những kẻ háo chiến lao vào xung đột chỉ vì sự tức giận nhất thời sẽ dẫn quốc gia đến bờ vực diệt vong. Bậc minh tướng coi chiến tranh là hạ sách cuối cùng, luôn đặt sự sống còn lên trên hư vinh.',
        keyInsight: 'Mục đích của chiến lược là bảo toàn lực lượng của mình chứ không phải là hủy diệt đối phương bằng mọi giá.'
      },
      {
        note: 2,
        title: 'Ý Niệm Tối Thượng: Thắng Trước Rồi Mới Đánh (Tiên Thắng Hậu Cầu Chiến)',
        rule: 'Thắng binh tiên thắng nhi hậu cầu chiến, bại binh tiên chiến nhi hậu cầu thắng.',
        explanation: 'Quân đội chiến thắng luôn tính toán thế trận, hậu cần, địa hình, thời tiết và lòng dân chu toàn đến mức phần thắng đã nằm chắc 100% trong tay rồi mới nổ súng. Quân đội thất bại thì lao vào cuộc chiến rồi mới cầu may mong tìm được chiến thắng.',
        keyInsight: 'Chiến thắng được định đoạt trong phòng tham mưu trước giờ xuất trận, không phải trên bãi chiến trường.'
      },
      {
        note: 3,
        title: 'Cái Bẫy Nhận Thức: Đối Đầu Trực Diện Vào Sở Trường Của Kẻ Mạnh',
        rule: 'Tránh chỗ thực, đánh chỗ hư (Tỵ thực kích hư).',
        explanation: 'Đối đầu trực diện với đối thủ mạnh trên chính sân nhà kiên cố nhất của họ là tự sát. Kẻ ngốc nghếch luôn muốn chứng minh mình mạnh hơn bằng cách húc đầu vào đá; bậc mưu lược né tránh điểm mạnh nhất và chỉ tấn công vào ngách yếu sơ hở nhất của đối phương.',
        keyInsight: 'Đừng bao giờ tranh đấu ở nơi đối thủ đã chuẩn bị sẵn bàn cờ.'
      },
      {
        note: 4,
        title: 'Nguyên Lý Nền Tảng #1: Binh Bất Yếm Trá (Chiến Lược Là Nghệ Thuật Ẩn Mình)',
        rule: 'Năng nhi thị chi bất năng, dụng nhi thị chi bất dụng, cận nhi thị chi viễn, viễn nhi thị chi cận.',
        explanation: 'Khi có thực lực thì làm ra vẻ bất tài; khi chuẩn bị ra đòn thì làm ra vẻ bất động; khi ở gần thì khiến địch tưởng ở xa; khi ở xa thì khiến địch tưởng ở gần. Che giấu ý đồ thực sự và đánh lừa phán đoán của đối phương là bản chất của mưu lược.',
        keyInsight: 'Để đối phương tự rơi vào bẫy ảo tưởng do chính họ dựng nên.'
      },
      {
        note: 5,
        title: 'Nguyên Lý Nền Tảng #2: Biến Ảo Như Nước (Binh Vô Thường Thế, Thủy Vô Thường Hình)',
        rule: 'Nước uốn mình theo địa hình để chảy xiết; quân đội thích ứng linh hoạt theo động thái của kẻ thù để giành chiến thắng.',
        explanation: 'Không có chiến thuật nào là bất biến vĩnh cửu. Người cứng nhắc rập khuôn giáo điều sẽ nhanh chóng bị đối phương bắt bài. Phải liên tục thay đổi hình thái, mềm mỏng khi cần và cứng rắn sấm sét khi thời cơ chín muồi.',
        keyInsight: 'Sức mạnh tối cao nằm ở khả năng thích nghi phi thường trước mọi biến cố.'
      },
      {
        note: 6,
        title: 'Mô Hình Chiến Lược: Ngũ Sự & Thất Kế (Khung Đánh Giá Bàn Cờ 5 Trụ Cột)',
        rule: 'Đánh giá cục diện chiến tranh qua 5 yếu tố: Đạo (Lòng người) • Thiên (Thời cơ) • Địa (Địa thế) • Tướng (Năng lực lãnh đạo) • Pháp (Kỷ luật & Tổ chức).',
        explanation: 'Trước khi bước vào bất kỳ cuộc cạnh tranh nào, hãy cân đo 5 yếu tố này: Ai chiếm được lòng dân? Ai nắm được thời thế? Ai thông thuộc địa bàn? Ai có tướng lĩnh tài đức hơn? Ai có kỷ luật nghiêm minh hơn? Có được câu trả lời là biết trước ai sẽ thắng.',
        keyInsight: 'Chiến lược không phải là trực giác mơ hồ, mà là một phép tính toán xác suất có hệ thống.'
      },
      {
        note: 7,
        title: 'Giới Hạn & Điểm Phản Biện Đa Chiều',
        rule: 'Mưu lược quá độ có thể biến thành sự tráo trở, đánh mất niềm tin đạo đức và tinh thần thượng võ lâu dài.',
        explanation: 'Nếu áp dụng triết lý "Binh bất yếm trá" vào quan hệ gia đình, bạn bè hoặc đối tác tin cậy lâu dài, bạn sẽ tạo ra sự nghi kỵ hủy diệt. Binh pháp chỉ áp dụng trong cuộc chiến sinh tử và cạnh tranh chiến lược, không thể thay thế cho lòng chân thành trong xây dựng văn hóa tổ chức.',
        keyInsight: 'Dùng Mưu để tự vệ và chiến thắng đối thủ; dùng Đạo và Tín để giữ gìn đồng đội và xây dựng đế chế bền vững.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN THỰC THI 4 BƯỚC
    algorithm: [
      {
        step: 1,
        title: 'Lập ma trận Ngũ Sự (Đạo, Thiên, Địa, Tướng, Pháp)',
        desc: 'Trước khi khởi động dự án hay đàm phán, so sánh 5 yếu tố cốt tử giữa ta và đối thủ. Nếu chưa chiếm ưu thế tối thiểu 3/5 yếu tố ➔ Hoãn lại để củng cố lực lượng.'
      },
      {
        step: 2,
        title: 'Thiết lập "Thế bất khả chiến bại" (Self-defense First)',
        desc: 'Bảo vệ dòng tiền và nguồn lực cốt lõi để đảm bảo dù tình huống xấu nhất xảy ra, doanh nghiệp của bạn vẫn không thể bị đánh sập.'
      },
      {
        step: 3,
        title: 'Dò tìm điểm hở (Tỵ thực kích hư)',
        desc: 'Khảo sát thị trường để tìm ra phân khúc ngách mà đối thủ khinh suất bỏ qua. Dồn toàn bộ nguồn lực tinh nhuệ đánh sâu vào khoảng trống đó.'
      },
      {
        step: 4,
        title: 'Bảo mật thông tin & Tác chiến thần tốc',
        desc: 'Giữ kín tuyệt đối kế hoạch ra mắt; khi nổ phát súng đầu tiên, hành động dứt khoát nhanh như chớp khiến đối thủ không kịp phản ứng.'
      }
    ],

    // TẦNG 4: BỘ CÂU HỎI SOCRATIC KHAI SÁNG
    powerQuestions: [
      'Bạn đang lao vào cuộc chiến này vì mục tiêu chiến lược thực sự, hay chỉ vì cái tôi nóng giận muốn hạ bệ đối thủ?',
      'Bạn đã tính toán kỹ lưỡng để nắm chắc phần thắng trước khi xuất trận (Tiên thắng hậu cầu chiến), hay đang liều mạng cầu may?',
      'Đâu là điểm "Hư" (yếu nhất, ít phòng bị nhất) của đối thủ mà bạn có thể khai thác mà không cần đối đầu trực diện?',
      'Nếu cuộc xung đột này kéo dài gấp đôi thời gian dự kiến, nguồn lực hậu cần của bạn có đủ sức chịu đựng hay sẽ sụp đổ trước?'
    ],

    // TẦNG 5: CASE STUDY THỰC CHIẾN THẾ GIỚI
    caseStudy: {
      subject: 'Chiến lược đánh chiếm thị trường của Netflix vs Blockbuster (2000-2010)',
      context: 'Năm 2000, Blockbuster là gã khổng lồ cho thuê băng đĩa với 9.000 cửa hàng và hàng tỷ USD doanh thu. Netflix là công ty khởi nghiệp gửi đĩa DVD qua bưu điện còn non trẻ.',
      outcome: 'Netflix không đối đầu trực diện với hệ thống cửa hàng bán lẻ của Blockbuster (Tỵ thực kích hư). Thay vào đó, họ đánh vào điểm nhức nhối của khách hàng: Xóa bỏ hoàn toàn phí phạt trả muộn (điều tạo ra 16% doanh thu của Blockbuster) và chuyển đổi sang mô hình xem phim trực tuyến (Streaming). Blockbuster vì quá nặng nề với hệ thống cửa hàng truyền thống đã không kịp thích nghi và nộp đơn phá sản vào năm 2010.',
      lesson: 'Kẻ chiến thắng không phải là kẻ to lớn nhất, mà là kẻ biết né chỗ thực, đánh chỗ hư và biến ảo linh hoạt như nước.'
    },

    // TẦNG 6: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Bàn Cờ Tướng Bằng Đồng Cổ & Chén Trà Bốc Khói',
      visualDescription: 'Một bàn cờ tướng bằng đồng cổ sáng bóng. Quân cờ đối phương tự động hạ vũ khí xếp hàng ngay ngắn trước một chén trà cổ đang bốc khói nghi ngút mà không tốn một giọt máu.',
      lociLocation: 'Đặt trên Bàn Trà ở Thư Phòng Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận mùi thơm thanh tao của lá trà cổ thụ và sự tĩnh lặng tuyệt đối của một bậc kỳ tài định đoạt thiên hạ.'
    },

    // FLASH RECALL DRILL CARDS
    recallCards: [
      {
        question: 'Ý nghĩa cốt tử của nguyên lý "Tiên Thắng Hậu Cầu Chiến" là gì?',
        hint: 'Thời điểm định đoạt chiến thắng (trước hay sau khi nổ súng).',
        answer: 'Chiến thắng phải được tính toán và chuẩn bị chu toàn trong phòng tham mưu đến mức chắc chắn 100% trước khi ra trận. Kẻ tầm thường lao vào chiến đấu rồi mới cầu may mong tìm được thắng lợi.'
      },
      {
        question: 'Nguyên lý "Tỵ Thực Kích Hư" (Tránh chỗ thực, đánh chỗ hư) khuyên ta điều gì trong cạnh tranh?',
        hint: 'Cách xử lý khi đối đầu với kẻ mạnh.',
        answer: 'Tuyệt đối không đối đầu trực diện vào sở trường kiên cố nhất của đối thủ. Hãy né tránh điểm mạnh của họ và dồn toàn lực đánh vào thị trường ngách hoặc điểm yếu sơ hở mà họ bỏ ngỏ.'
      },
      {
        question: 'Năm yếu tố "Ngũ Sự" để đo lường cục diện trước khi xuất binh là gì?',
        hint: 'Đạo, Thiên, Địa...',
        answer: '1. Đạo (Lòng dân, sự đồng lòng). 2. Thiên (Thời cơ, thời thế). 3. Địa (Địa thế, không gian). 4. Tướng (Năng lực, đạo đức lãnh đạo). 5. Pháp (Kỷ luật, tổ chức hậu cần).'
      },
      {
        question: 'Biểu tượng Mỏ Neo Cung Điện để nhớ Binh Pháp Tôn Tử là gì?',
        hint: 'Hình ảnh đặt trên bàn trà ở thư phòng.',
        answer: 'Bàn cờ tướng bằng đồng cổ: Quân cờ đối phương tự động hạ vũ khí xếp hàng quỳ phục trước một chén trà cổ đang bốc khói nghi ngút mà không tốn một giọt máu.'
      }
    ]
  }
];
