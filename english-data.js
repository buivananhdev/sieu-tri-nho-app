// =========================================================================
// ENGLISH MASTERY OS - FOUNDATIONAL INTELLIGENCE DATABASE
// Hệ điều hành học tập & phát triển năng lực tiếng Anh toàn diện 10 Engine
// Input -> Understanding -> Encoding -> Retrieval -> Application -> Feedback -> Optimization
// =========================================================================

window.ENGLISH_OS_CONFIG = {
  version: '1.0.0',
  defaultSchedule: {
    sessionsPerWeek: 4,
    days: ['Monday', 'Tuesday', 'Thursday', 'Saturday'],
    timeSlot: '12:15 - 12:50',
    durationMinutes: 35,
    structure: [
      { minute: 5, name: 'Ôn tập chủ động (Active Recall)', engine: 'srs' },
      { minute: 8, name: 'Tiếp nhận nội dung mới (Encoding)', engine: 'vocab_palace' },
      { minute: 7, name: 'Luyện nghe và đọc (Input)', engine: 'listening_reading' },
      { minute: 8, name: 'Luyện nói hoặc viết (Output)', engine: 'speaking_writing' },
      { minute: 5, name: 'Kiểm tra và phản hồi (Feedback)', engine: 'adaptive' }
    ]
  },
  cefrLevels: [
    { code: 'A1-A2', name: 'Nền Tảng Cơ Bản (Elementary)', targetVocab: 1200, color: 'emerald' },
    { code: 'B1', name: 'Độc Lập Trung Cấp (Intermediate)', targetVocab: 2500, color: 'cyan' },
    { code: 'B2', name: 'Vận Dụng Chuyên Sâu (Upper-Intermediate)', targetVocab: 4000, color: 'blue' },
    { code: 'C1', name: 'Tinh Thông Học Thuật (Advanced)', targetVocab: 6000, color: 'purple' }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 1: LONDON MEMORY PALACE (Cung Điện Trí Nhớ Không Gian London)
// -------------------------------------------------------------------------
window.LONDON_MEMORY_PALACE = {
  name: 'London Memory Palace City',
  description: 'Thành phố trí nhớ London chia thành 6 khu vực chủ đề kinh điển với các địa điểm nổi tiếng thế giới để mã hóa không gian từ vựng, ngữ pháp và tình huống hội thoại.',
  districts: [
    {
      id: 'kings_cross',
      name: "King's Cross Station",
      theme: 'Transportation & Journey',
      themeVn: 'Giao Thông, Di Chuyển & Hành Trình',
      icon: 'train',
      color: 'from-amber-600 to-yellow-600',
      coords: { x: 48, y: 18 },
      desc: 'Nhà ga cổ kính biểu tượng kết nối London với thế giới. Nơi neo giữ các từ vựng về di chuyển, vé tàu, lịch trình và phương hướng.',
      loci: [
        {
          id: 'kx_platform',
          name: 'Platform 9¾ & Ticket Barrier',
          nameVn: 'Sân Ga & Cổng Soát Vé',
          anchor: 'Chiếc barrier quét vé tự động phát sáng màu xanh',
          word: 'commute',
          ipa: '/kəˈmjuːt/',
          pos: 'verb / noun',
          meaning: 'Di chuyển đều đặn hàng ngày giữa nhà và nơi làm việc; quãng đường đi lại',
          visualStory: 'Hình dung bạn đứng trước cổng soát vé King’s Cross, mỗi sáng chiếc cổng này lại nuốt một chiếc thẻ vàng để bạn bước lên chuyến tàu đi làm.',
          collocations: ['daily commute', 'commute to work', 'long commute'],
          example: 'She commutes from Oxford to London every day by express train.',
          exampleVn: 'Cô ấy đi lại hàng ngày từ Oxford đến London bằng tàu cao tốc.'
        },
        {
          id: 'kx_concourse',
          name: 'Main Departure Concourse',
          nameVn: 'Đại Sảnh Bảng Điện Tử Khởi Hành',
          anchor: 'Bảng điện tử khổng lồ lật cánh lách cách báo giờ tàu chạy',
          word: 'punctual',
          ipa: '/ˈpʌŋktʃuəl/',
          pos: 'adjective',
          meaning: 'Đúng giờ, không bao giờ trễ hẹn',
          visualStory: 'Chiếc kim đồng hồ khổng lồ giữa sảnh King’s Cross nhảy đúng từng tích tắc, một hành khách đeo đồng hồ vàng luôn bước lên tàu trước 5 phút.',
          collocations: ['be punctual for sth', 'punctual arrival', 'punctual person'],
          example: 'British trains are expected to be strictly punctual during peak hours.',
          exampleVn: 'Tàu điện ở Anh được kỳ vọng phải chạy hoàn toàn đúng giờ trong giờ cao điểm.'
        }
      ]
    },
    {
      id: 'savoy_restaurant',
      name: 'The Savoy & Covent Garden',
      theme: 'Food, Drinks & Hospitality',
      themeVn: 'Ẩm Thực, Nhà Hàng & Giao Tiếp Bàn Ăn',
      icon: 'utensils',
      color: 'from-emerald-600 to-teal-600',
      coords: { x: 52, y: 45 },
      desc: 'Nhà hàng sang trọng bên bờ sông Thames. Nơi neo giữ từ vựng về ẩm thực, gọi món, mùi vị và phép lịch sự giao tiếp.',
      loci: [
        {
          id: 'savoy_dining',
          name: 'The Grand Dining Room',
          nameVn: 'Phòng Tiệc Hoàng Gia',
          anchor: 'Bàn ăn trải khăn trắng muốt với bộ dao nĩa bằng bạc sáng bóng',
          word: 'beverage',
          ipa: '/ˈbevərɪdʒ/',
          pos: 'noun',
          meaning: 'Đồ uống (bất kỳ loại thức uống nào ngoài nước lọc thông thường)',
          visualStory: 'Người bồi bàn tại The Savoy bưng khay bạc đựng 7 chiếc ly pha lê chứa 7 loại nước uống màu sắc lấp lánh thơm ngát.',
          collocations: ['alcoholic beverage', 'refreshing beverage', 'beverage menu'],
          example: 'A wide selection of hot and cold beverages is served after the main course.',
          exampleVn: 'Nhiều lựa chọn đồ uống nóng và lạnh được phục vụ sau món ăn chính.'
        },
        {
          id: 'savoy_kitchen',
          name: "Chef's Open Kitchen",
          nameVn: 'Bếp Mở Trưởng Bếp',
          anchor: 'Ngọn lửa bốc lên từ chảo đồng xào gia vị ngào ngạt',
          word: 'recipe',
          ipa: '/ˈresəpi/',
          pos: 'noun',
          meaning: 'Công thức nấu ăn; bí quyết thành công',
          visualStory: 'Quyển sách bìa da cổ của bếp trưởng mở ra trang vàng óng ghi công thức bí mật để làm món súp nấm trứ danh.',
          collocations: ['recipe for success', 'secret recipe', 'follow a recipe'],
          example: 'This ancient family recipe has been handed down through four generations.',
          exampleVn: 'Công thức gia truyền cổ xưa này đã được truyền lại qua bốn thế hệ.'
        }
      ]
    },
    {
      id: 'st_thomas_hospital',
      name: "St Thomas' Hospital",
      theme: 'Health, Medicine & Well-being',
      themeVn: 'Sức Khỏe, Y Tế & Chăm Sóc Thể Chất',
      icon: 'heart-pulse',
      color: 'from-rose-600 to-pink-600',
      coords: { x: 45, y: 62 },
      desc: 'Bệnh viện lịch sử đối diện Tòa nhà Quốc hội. Nơi neo giữ từ vựng về triệu chứng, điều trị, cơ thể và tinh thần.',
      loci: [
        {
          id: 'sth_emergency',
          name: 'Emergency Reception',
          nameVn: 'Khu Vực Tiếp Đón Khẩn Cấp',
          anchor: 'Chiếc đèn cấp cứu xoay ánh đỏ cùng tiếng xe cứu thương',
          word: 'symptom',
          ipa: '/ˈsɪmptəm/',
          pos: 'noun',
          meaning: 'Triệu chứng (dấu hiệu của bệnh tật hoặc vấn đề xã hội)',
          visualStory: 'Bác sĩ cầm ống nghe áp vào ngực bệnh nhân và ghi lại từng triệu chứng sốt và ho vào bảng điện tử phát sáng.',
          collocations: ['early symptoms', 'flu symptoms', 'alleviate symptoms'],
          example: 'Fatigue and mild headaches are often the first symptoms of dehydration.',
          exampleVn: 'Mệt mỏi và đau đầu nhẹ thường là những triệu chứng đầu tiên của tình trạng mất nước.'
        },
        {
          id: 'sth_pharmacy',
          name: 'The Hospital Pharmacy',
          nameVn: 'Quầy Dược & Kê Đơn',
          anchor: 'Tủ kính chứa hàng trăm lọ thuốc có dán nhãn chuẩn xác',
          word: 'prescription',
          ipa: '/prɪˈskrɪpʃn/',
          pos: 'noun',
          meaning: 'Đơn thuốc của bác sĩ; toa thuốc',
          visualStory: 'Dược sĩ dùng kính lúp soi kỹ chữ ký trên tờ đơn thuốc màu xanh trước khi lấy hộp thuốc kháng sinh.',
          collocations: ['fill a prescription', 'prescription medicine', 'doctor’s prescription'],
          example: 'These powerful painkillers are only available with a valid doctor’s prescription.',
          exampleVn: 'Những viên thuốc giảm đau liều mạnh này chỉ có thể mua khi có đơn thuốc hợp lệ của bác sĩ.'
        }
      ]
    },
    {
      id: 'ucl_university',
      name: 'University College London (UCL)',
      theme: 'Education, Science & Research',
      themeVn: 'Giáo Dục, Nghiên Cứu & Học Thuật',
      icon: 'graduation-cap',
      color: 'from-blue-600 to-indigo-600',
      coords: { x: 42, y: 25 },
      desc: 'Khuôn viên đại học danh tiếng với giảng đường mái vòm. Nơi neo giữ từ vựng học thuật, nghiên cứu, luận điểm và bằng chứng.',
      loci: [
        {
          id: 'ucl_library',
          name: 'The Octagon Library',
          nameVn: 'Thư Viện Bát Giác Cổ Kính',
          anchor: 'Bàn gỗ sồi tròn dưới mái vòm lớn với hàng ngàn cuốn bách khoa toàn thư',
          word: 'hypothesis',
          ipa: '/haɪˈpɒθəsɪs/',
          pos: 'noun',
          meaning: 'Giả thuyết khoa học (cần được chứng minh bằng thực nghiệm)',
          visualStory: 'Nhà khoa học đứng trước bảng phấn vẽ sơ đồ kiểm chứng giả thuyết bằng một kính hiển vi đặt ngay giữa bàn.',
          collocations: ['formulate a hypothesis', 'test a hypothesis', 'working hypothesis'],
          example: 'The experimental results strongly supported their initial hypothesis.',
          exampleVn: 'Các kết quả thực nghiệm đã ủng hộ mạnh mẽ giả thuyết ban đầu của họ.'
        },
        {
          id: 'ucl_auditorium',
          name: 'Main Lecture Hall',
          nameVn: 'Giảng Đường Lớn',
          anchor: 'Bục giảng bằng gỗ với máy chiếu chiếu biểu đồ thống kê đa chiều',
          word: 'comprehensive',
          ipa: '/ˌkɒmprɪˈhensɪv/',
          pos: 'adjective',
          meaning: 'Toàn diện, bao quát mọi khía cạnh',
          visualStory: 'Giáo sư giơ cao một bản báo cáo dày 500 trang bao quát toàn bộ dữ liệu kinh tế của thế kỷ.',
          collocations: ['comprehensive study', 'comprehensive review', 'comprehensive understanding'],
          example: 'The university offers a comprehensive curriculum covering both theory and practical application.',
          exampleVn: 'Trường đại học cung cấp một chương trình giảng dạy toàn diện bao gồm cả lý thuyết lẫn ứng dụng thực tiễn.'
        }
      ]
    },
    {
      id: 'westminster_abbey',
      name: 'Westminster Abbey & Parliament',
      theme: 'Faith, Governance & Society',
      themeVn: 'Tư Tưởng, Quản Trị Xã Hội & Đức Tin',
      icon: 'church',
      color: 'from-purple-600 to-amber-600',
      coords: { x: 46, y: 70 },
      desc: 'Tu viện Gothic cổ kính nơi đăng quang của các vị vua. Nơi neo giữ các từ vựng triết học, đạo đức, đức tin và quản trị.',
      loci: [
        {
          id: 'wa_sanctuary',
          name: 'The High Altar & Coronation Chair',
          nameVn: 'Bàn Thờ Cả & Chiếc Ghế Đăng Quang',
          anchor: 'Chiếc ghế gỗ sồi 700 năm tuổi phát ra ánh sáng vàng uy nghiêm',
          word: 'covenant',
          ipa: '/ˈkʌvənənt/',
          pos: 'noun',
          meaning: 'Giao ước thiêng liêng, thỏa thuận bất khả xâm phạm',
          visualStory: 'Hai vị vua cùng đặt tay lên một cuộn giấy da cổ có ấn tín bằng sáp đỏ cam kết gìn giữ hòa bình muôn đời.',
          collocations: ['solemn covenant', 'break a covenant', 'divine covenant'],
          example: 'The agreement was signed not as a mere contract, but as a binding covenant between nations.',
          exampleVn: 'Thỏa thuận được ký kết không phải như một hợp đồng đơn thuần, mà là một giao ước ràng buộc giữa các quốc gia.'
        },
        {
          id: 'wa_cloisters',
          name: 'The Great Cloister Walkway',
          nameVn: 'Hành Lang Vòm Tu Viện',
          anchor: 'Dãy cột đá vòm đón ánh nắng chiều thanh tịnh',
          word: 'humility',
          ipa: '/hjuːˈmɪləti/',
          pos: 'noun',
          meaning: 'Sự khiêm nhường, đức khiêm tốn',
          visualStory: 'Một vị học giả râu tóc bạc phơ cúi đầu chào một đứa trẻ đang ngồi đọc sách bên chân cột đá.',
          collocations: ['genuine humility', 'with deep humility', 'learn humility'],
          example: 'True intellectual greatness is always accompanied by genuine humility.',
          exampleVn: 'Sự vĩ đại đích thực về trí tuệ luôn luôn đi đôi với đức khiêm nhường chân thành.'
        }
      ]
    },
    {
      id: 'the_city_london',
      name: 'The City of London (Square Mile)',
      theme: 'Work, Business & Technology',
      themeVn: 'Kinh Doanh, Doanh Nghiệp & Đổi Mới Công Nghệ',
      icon: 'briefcase',
      color: 'from-cyan-600 to-blue-700',
      coords: { x: 68, y: 38 },
      desc: 'Trung tâm tài chính toàn cầu với các tòa tháp kính The Gherkin và The Shard. Nơi neo giữ từ vựng về đàm phán, chiến lược, thị trường và công nghệ.',
      loci: [
        {
          id: 'city_boardroom',
          name: 'High-rise Executive Boardroom',
          nameVn: 'Phòng Họp Hội Đồng Quản Trị Tầng 40',
          anchor: 'Bàn kính nhìn toàn cảnh London với màn hình hiển thị biểu đồ dòng tiền',
          word: 'leverage',
          ipa: '/ˈliːvərɪdʒ/',
          pos: 'noun / verb',
          meaning: 'Đòn bẩy; tận dụng triệt để nguồn lực để đạt kết quả tối đa',
          visualStory: 'Một doanh nhân dùng một chiếc đòn bẩy bằng titan nhẹ nhàng nhấc bổng cả một khối vàng nặng 10 tấn.',
          collocations: ['financial leverage', 'leverage technology', 'strategic leverage'],
          example: 'Startups must leverage modern artificial intelligence to compete with established corporations.',
          exampleVn: 'Các công ty khởi nghiệp phải tận dụng đòn bẩy trí tuệ nhân tạo hiện đại để cạnh tranh với các tập đoàn lâu đời.'
        },
        {
          id: 'city_trading_floor',
          name: 'Algorithmic Trading Center',
          nameVn: 'Sàn Giao Dịch Thuật Toán',
          anchor: 'Hàng trăm màn hình xanh đỏ nhảy số với tốc độ ánh sáng',
          word: 'fluctuate',
          ipa: '/ˈflʌktʃueɪt/',
          pos: 'verb',
          meaning: 'Dao động, biến động liên tục không ngừng',
          visualStory: 'Đường sóng biển màu xanh neon nhấp nhô lên xuống liên tục trên màn hình trước mắt người phân tích.',
          collocations: ['fluctuate wildly', 'fluctuate between A and B', 'prices fluctuate'],
          example: 'Currency exchange rates fluctuate constantly based on international interest rates and inflation.',
          exampleVn: 'Tỷ giá hối đoái tiền tệ biến động liên tục dựa trên lãi suất quốc tế và lạm phát.'
        }
      ]
    }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 2: VOCABULARY INTELLIGENCE (Mạng Lưới Từ Vựng & Gốc Từ)
// -------------------------------------------------------------------------
window.VOCABULARY_INTELLIGENCE_DATA = {
  rootFamilies: [
    {
      root: 'VELOP / VOLV',
      meaning: 'Cuộn lại, bao bọc, mở ra (to roll, unroll, unfold)',
      origin: 'Latin / Old French',
      family: [
        { word: 'develop', pos: 'v', ipa: '/dɪˈveləp/', def: 'Phát triển, mở rộng, tiến triển' },
        { word: 'development', pos: 'n', ipa: '/dɪˈveləpmənt/', def: 'Sự phát triển, khu đô thị mới' },
        { word: 'developer', pos: 'n', ipa: '/dɪˈveləpər/', def: 'Lập trình viên, nhà phát triển bất động sản' },
        { word: 'developing', pos: 'adj', ipa: '/dɪˈveləpɪŋ/', def: 'Đang phát triển (nền kinh tế)' },
        { word: 'undeveloped', pos: 'adj', ipa: '/ˌʌndɪˈveləpt/', def: 'Chưa khai phá, chưa phát triển' }
      ],
      collocations: ['develop a skill', 'develop a relationship', 'economic development', 'software developer'],
      sampleSentence: 'Consistent deliberate practice helps you develop fluency in conversational English.'
    },
    {
      root: 'STRUCT',
      meaning: 'Xây dựng, lắp ráp (to build, assemble)',
      origin: 'Latin (struere)',
      family: [
        { word: 'construct', pos: 'v', ipa: '/kənˈstrʌkt/', def: 'Xây dựng, kiến tạo' },
        { word: 'structure', pos: 'n', ipa: '/ˈstrʌktʃər/', def: 'Cấu trúc, kết cấu' },
        { word: 'instruction', pos: 'n', ipa: '/ɪnˈstrʌkʃn/', def: 'Lời hướng dẫn, sự chỉ đạo' },
        { word: 'destructive', pos: 'adj', ipa: '/dɪˈstrʌktɪv/', def: 'Có tính phá hoại, hủy diệt' },
        { word: 'infrastructure', pos: 'n', ipa: '/ˈɪnfrəstrʌktʃər/', def: 'Cơ sở hạ tầng' }
      ],
      collocations: ['sentence structure', 'constructive feedback', 'social infrastructure'],
      sampleSentence: 'Understanding grammatical structure is essential before constructing complex sentences.'
    },
    {
      root: 'PORT',
      meaning: 'Mang, vác, chở (to carry, bear)',
      origin: 'Latin (portare)',
      family: [
        { word: 'transport', pos: 'v / n', ipa: '/ˈtrænspɔːt/', def: 'Vận chuyển, giao thông vận tải' },
        { word: 'import', pos: 'v / n', ipa: '/ˈɪmpɔːt/', def: 'Nhập khẩu, mang vào' },
        { word: 'export', pos: 'v / n', ipa: '/ˈekspɔːt/', def: 'Xuất khẩu, gửi ra ngoài' },
        { word: 'portable', pos: 'adj', ipa: '/ˈpɔːtəbl/', def: 'Di động, dễ mang theo' },
        { word: 'opportunity', pos: 'n', ipa: '/ˌɒpəˈtjuːnəti/', def: 'Cơ hội (thuyền vào cảng thuận lợi)' }
      ],
      collocations: ['public transport', 'golden opportunity', 'portable device'],
      sampleSentence: 'Reading books provides a portable opportunity to explore the greatest minds in history.'
    }
  ],
  idiomsEssential: [
    {
      idiom: 'hit the nail on the head',
      meaning: 'Nói trúng phóc, chỉ ra đúng bản chất cốt lõi của vấn đề',
      context: 'Khi phân tích một ý tưởng hoặc giải thích nguyên nhân',
      example: 'His explanation of the financial crisis really hit the nail on the head.'
    },
    {
      idiom: 'bite the bullet',
      meaning: 'Cắn răng chịu đựng, dũng cảm làm một việc khó khăn mà không trốn tránh',
      context: 'Khi đối mặt với thử thách hoặc quyết định sinh tử',
      example: 'I decided to bite the bullet and practice speaking English in front of the whole class.'
    },
    {
      idiom: 'break the ice',
      meaning: 'Phá vỡ bầu không khí gượng gạo ban đầu trong giao tiếp',
      context: 'Bắt đầu cuộc trò chuyện với người mới quen',
      example: 'He told a lighthearted joke to break the ice before starting the formal presentation.'
    }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 3: PHONETIC AND PRONUNCIATION (Âm Vị Học 44 IPA & Lỗi Người Việt)
// -------------------------------------------------------------------------
window.PHONETIC_IPA_DATA = {
  vowels: {
    monophthongs: [
      { ipa: '/iː/', type: 'Long Vowel', example: 'see, feel, machine', vnMistake: 'Người Việt hay phát âm ngắn như /ɪ/ trong "sit", thiếu độ căng của khóe miệng kéo dài.' },
      { ipa: '/ɪ/', type: 'Short Vowel', example: 'sit, hit, myth', vnMistake: 'Hay đọc thành "i" tiếng Việt sắc nhọn thay vì thả lỏng quai hàm.' },
      { ipa: '/ʊ/', type: 'Short Vowel', example: 'good, put, book', vnMistake: 'Hay đọc thành "u" tiếng Việt tròn môi quá mức.' },
      { ipa: '/uː/', type: 'Long Vowel', example: 'two, blue, goose', vnMistake: 'Cần chu môi tròn và kéo dài âm.' },
      { ipa: '/e/', type: 'Short Vowel', example: 'bed, head, said', vnMistake: 'Tương đối chuẩn, mở miệng tự nhiên.' },
      { ipa: '/ə/', type: 'Schwa (The King of English)', example: 'about, banana, computer', vnMistake: 'Lỗi chí mạng nhất của người Việt: Đọc rõ các âm không nhấn thay vì lướt nhẹ thành âm /ə/ yếu.' },
      { ipa: '/ɜː/', type: 'Long Vowel', example: 'bird, learn, word', vnMistake: 'Hay bỏ qua việc uốn lưỡi nhẹ về sau.' },
      { ipa: '/ɔː/', type: 'Long Vowel', example: 'door, saw, walk', vnMistake: 'Kéo dài và tròn môi sâu trong họng.' },
      { ipa: '/æ/', type: 'Short Vowel (A bẹt)', example: 'cat, apple, black', vnMistake: 'Hay đọc thành "a" hoặc "e", trong khi chuẩn phải mở rộng quai hàm hạ cằm tối đa.' },
      { ipa: '/ʌ/', type: 'Short Vowel', example: 'cup, sun, love', vnMistake: 'Âm "á" ngắn, dứt khoát không kéo dài.' },
      { ipa: '/ɑː/', type: 'Long Vowel', example: 'car, father, calm', vnMistake: 'Mở sâu trong vòm họng.' },
      { ipa: '/ɒ/', type: 'Short Vowel', example: 'hot, rock, stop', vnMistake: 'Âm "o" tròn ngắn trong British English.' }
    ],
    diphthongs: [
      { ipa: '/eɪ/', example: 'face, day, break', tip: 'Trượt mượt mà từ /e/ sang /ɪ/.' },
      { ipa: '/aɪ/', example: 'price, high, try', tip: 'Mở rộng /a/ rồi khép nhẹ về /ɪ/.' },
      { ipa: '/ɔɪ/', example: 'choice, boy, noise', tip: 'Tròn môi /ɔ/ rồi kéo sang /ɪ/.' },
      { ipa: '/aʊ/', example: 'mouth, now, town', tip: 'Mở /a/ rồi chu môi về /ʊ/.' },
      { ipa: '/əʊ/', example: 'go, home, slow', tip: 'Bắt đầu từ âm schwa rồi khép về /ʊ/.' },
      { ipa: '/ɪə/', example: 'near, here, deer', tip: 'Trượt từ /ɪ/ sang /ə/.' },
      { ipa: '/eə/', example: 'square, fair, care', tip: 'Mở /e/ rồi đưa về /ə/.' },
      { ipa: '/ʊə/', example: 'poor, tour, cure', tip: 'Âm trượt từ /ʊ/ về /ə/.' }
    ]
  },
  consonantsKey: [
    { ipa: '/θ/', name: 'Voiceless Dental Fricative', example: 'think, thought, bath', vnMistake: 'Người Việt hay đọc thành âm "th" hoặc "t" tiếng Việt. Cách sửa: Cắn nhẹ đầu lưỡi giữa hai hàm răng và đẩy luồng hơi ra ngoài, không phát ra tiếng rung dây thanh.' },
    { ipa: '/ð/', name: 'Voiced Dental Fricative', example: 'this, that, mother', vnMistake: 'Hay đọc thành "đ" hoặc "d". Cách sửa: Đặt lưỡi giữa hai răng như /θ/ nhưng làm rung cổ họng.' },
    { ipa: '/ʃ/', name: 'Voiceless Postalveolar', example: 'she, ship, action', vnMistake: 'Hay đọc nhẹ như "s" tiếng Việt thay vì chu môi và đẩy luồng hơi mạnh.' },
    { ipa: '/ʒ/', name: 'Voiced Postalveolar', example: 'vision, measure, pleasure', vnMistake: 'Âm rung hiếm gặp trong tiếng Việt, cần giữ khẩu hình như /ʃ/ và làm rung dây thanh.' },
    { ipa: '/tʃ/', name: 'Voiceless Affricate', example: 'church, watch, match', vnMistake: 'Hay quên bật âm đuôi /tʃ/ ở cuối từ.' },
    { ipa: '/dʒ/', name: 'Voiced Affricate', example: 'judge, joy, age', vnMistake: 'Hay đọc nhầm thành "d" hoặc "gi", thiếu độ bật nén hơi.' }
  ],
  connectedSpeechRules: [
    {
      title: 'Nối âm Phụ âm sang Nguyên âm (Consonant to Vowel Linking)',
      rule: 'Khi một từ kết thúc bằng phụ âm và từ kế tiếp bắt đầu bằng nguyên âm, phụ âm tự động nối sang nguyên âm kế tiếp.',
      example: 'Hold on ➔ /həʊld ɒn/ nghe như "Hol-don". Pick it up ➔ nghe như "Pi-ki-tup".'
    },
    {
      title: 'Dạng âm yếu của Trợ động từ & Giới từ (Weak Forms)',
      rule: 'Trong câu nói tự nhiên, các từ chức năng (to, for, can, and, of) hầu như không bao giờ được nhấn mạnh mà bị ép về âm schwa /ə/.',
      example: '"I can do it" không đọc là /kæn/, mà đọc lướt thành /kən/: "I /kən/ do it".'
    },
    {
      title: 'Nuốt âm (Elision)',
      rule: 'Âm /t/ và /d/ ở giữa hai phụ âm thường biến mất hoàn toàn trong giao tiếp tự nhiên.',
      example: '"Next door" đọc thành "Nex-door"; "Last night" đọc thành "Las-night".'
    }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 4: GRAMMAR AND SENTENCE LABORATORY (15 Trụ Cột Ngữ Pháp)
// -------------------------------------------------------------------------
window.GRAMMAR_15_PILLARS = [
  {
    id: 1,
    name: 'Parts of Speech (8 Từ Loại Cốt Lõi)',
    formula: 'Noun + Pronoun + Verb + Adjective + Adverb + Preposition + Conjunction + Interjection',
    summary: 'Mọi câu tiếng Anh được cấu thành từ 8 khối gạch nền tảng. Xác định đúng từ loại quyết định 80% độ chính xác ngữ pháp.',
    coreInsight: 'Một từ có thể đổi từ loại tùy vào vị trí trong câu (VD: "water the plant" - verb vs "drink fresh water" - noun).'
  },
  {
    id: 2,
    name: 'Sentence Structure & Word Order (S-V-O Slot System)',
    formula: 'Subject (S) + Verb (V) + Object (O) + [Manner] + [Place] + [Time]',
    summary: 'Trật tự từ cố định là linh hồn của tiếng Anh. Không được đảo lộn tùy hứng như tiếng Việt.',
    coreInsight: 'Người Việt hay dịch theo chữ ("Yesterday I at home ate rice") thay vì chuẩn trật tự: "I ate rice at home yesterday".'
  },
  {
    id: 3,
    name: 'Subject and Predicate (Chủ Ngữ & Vị Ngữ Độc Lập)',
    formula: 'Complete Sentence = Complete Subject + Complete Finite Verb',
    summary: 'Một câu hoàn chỉnh bắt buộc phải có chủ ngữ và động từ chia thì độc lập. Không được viết phân mảnh (Fragment).',
    coreInsight: 'Tránh lỗi câu cụt: "Because he was tired." ➔ Phải nối: "Because he was tired, he went to bed early."'
  },
  {
    id: 4,
    name: 'Nouns & Determiners (Danh Từ Đếm Được & Mạo Từ a/an/the)',
    formula: 'Singular Count Noun BẮT BUỘC có Determiner (a/an/the/my)',
    summary: 'Quy tắc vàng: Danh từ đếm được số ít không bao giờ được đứng trơ trọi một mình.',
    coreInsight: 'Không bao giờ nói: "I have car." Phải là: "I have a car" hoặc "I have cars".'
  },
  {
    id: 5,
    name: 'Verbs & Verb Forms (Động Từ Thường vs Động Từ Khiếm Khuyết)',
    formula: 'Base (V0) ➔ Past (V2) ➔ Past Participle (V3) ➔ Present Participle (V-ing)',
    summary: 'Nắm vững 3 dạng biến đổi của động từ bất quy tắc và sự phối hợp giữa Trợ động từ và Động từ chính.',
    coreInsight: 'Trợ động từ gánh thì và phủ định; động từ chính giữ nguyên nghĩa cốt lõi.'
  },
  {
    id: 6,
    name: 'The 12 Tenses & Aspects (Thời & Thể Trong Tiếng Anh)',
    formula: 'Time (Past, Present, Future) × Aspect (Simple, Continuous, Perfect, Perfect Continuous)',
    summary: 'Thì không phải là mốc thời gian trừu tượng, mà phản ánh góc nhìn của người nói về tính trọn vẹn của hành động.',
    coreInsight: 'Hiện tại hoàn thành (Present Perfect) nối quá khứ với hiện tại: "I have lived here for 5 years" (vẫn đang ở).'
  },
  {
    id: 7,
    name: 'Modal Verbs (Động Từ Tình Thái & Mức Độ Chắc Chắn)',
    formula: 'Subject + Modal (can/could/may/might/must/should) + V_bare',
    summary: 'Biểu thị khả năng, bổn phận, lời khuyên và mức độ suy đoán xác suất (Deduction).',
    coreInsight: 'Suy đoán quá khứ: "He must have forgotten his keys" (Chắc chắn anh ấy đã quên chìa khóa).'
  },
  {
    id: 8,
    name: 'Passive Voice (Câu Bị Động & Trọng Tâm Chuyển Dịch)',
    formula: 'Subject (Patient) + Be (chia theo thì) + Past Participle (V3) + [by Agent]',
    summary: 'Dùng khi tác nhân gây ra hành động không quan trọng, không rõ, hoặc muốn nhấn mạnh vào đối tượng chịu tác động.',
    coreInsight: 'Trong văn phong học thuật và báo chí, câu bị động tạo ra tính khách quan phi cảm tính.'
  },
  {
    id: 9,
    name: 'Conditionals (Câu Điều Kiện Loại 0, 1, 2, 3 & Mixed)',
    formula: 'Type 1 (Real): If + Present, will + V | Type 2 (Unreal): If + Past, would + V',
    summary: 'Thiết lập các kịch bản thực tế, giả định trái ngược hiện tại hoặc nuối tiếc trong quá khứ.',
    coreInsight: 'Type 3 hối tiếc quá khứ: "If I had studied harder, I would have passed the exam."'
  },
  {
    id: 10,
    name: 'Relative Clauses (Mệnh Đề Quan Hệ Xác Định & Không Xác Định)',
    formula: 'Main Clause + [who / which / that / where / whose] + Clause',
    summary: 'Công cụ đắc lực nhất để ghép 2 câu đơn vụn vặt thành một câu phức sắc sảo, liền mạch.',
    coreInsight: 'Dấu phẩy trong mệnh đề không xác định: "My brother, who lives in London, is a doctor."'
  },
  {
    id: 11,
    name: 'Gerunds vs Infinitives (Danh Động Từ V-ing vs Động Từ To-V)',
    formula: 'Verb + V-ing (enjoy, avoid, suggest) vs Verb + To-V (decide, hope, plan)',
    summary: 'Quy tắc phân định khi hai động từ đi liền nhau. Nhận diện các động từ đổi nghĩa khi đổi dạng (remember, stop, try).',
    coreInsight: '"Stop smoking" (Dừng hút thuốc) vs "Stop to smoke" (Dừng lại để hút thuốc).'
  },
  {
    id: 12,
    name: 'Conjunctions & Transitions (Liên Từ & Từ Nối Mạch Lạc)',
    formula: 'Coordinating (FANBOYS) + Subordinating (Although, Because) + Transitions (However, Therefore)',
    summary: 'Chất keo dính kết nối tư duy logic giữa các mệnh đề và các đoạn văn học thuật.',
    coreInsight: 'Không dùng cả "Although" lẫn "But" trong cùng một câu (Lỗi phổ biến nhất của người Việt).'
  },
  {
    id: 13,
    name: 'Complex Sentences (Cấu Trúc Câu Phức & Câu Ghép)',
    formula: 'Independent Clause + Dependent Clause (Adverbial, Noun, Adjective clauses)',
    summary: 'Nâng cấp tư duy từ viết câu đơn ngô nghê sang diễn đạt đa tầng tư duy học thuật.',
    coreInsight: 'Cân bằng giữa các câu ngắn gọn dứt khoát và câu phức đòn bẩy để tạo nhịp điệu (Rhythm).'
  },
  {
    id: 14,
    name: 'Direct & Indirect Speech (Câu Trực Tiếp & Câu Tường Thuật)',
    formula: 'Reported Speech = Lùi thì + Đổi đại từ + Đổi trạng từ thời gian/nơi chốn',
    summary: 'Thuật lại lời nói, quan điểm của chuyên gia và thông điệp của người khác một cách chính xác.',
    coreInsight: '"He said he was tired" thay vì giữ nguyên "He said I am tired".'
  },
  {
    id: 15,
    name: 'Paragraph Construction (Cấu Trúc Đoạn Văn Chuẩn Học Thuật)',
    formula: 'Topic Sentence (Ý chủ đạo) ➔ Supporting Sentences (Giải thích & Bằng chứng) ➔ Concluding Sentence',
    summary: 'Quy tắc một đoạn văn chỉ trình bày duy nhất một ý tưởng trung tâm (Unity, Coherence & Development).',
    coreInsight: 'Một đoạn văn chuẩn không bao giờ nhảy cóc từ chủ đề này sang chủ đề khác mà không có từ nối chuyển ý.'
  }
];

// -------------------------------------------------------------------------
// ENGINE 5: LISTENING INTELLIGENCE (Hội Thoại & Âm Thanh Tự Nhiên)
// -------------------------------------------------------------------------
window.LISTENING_LIBRARY_DATA = [
  {
    id: 'listen_routine_1',
    title: 'Morning Routine of an Oxford Scholar',
    level: 'A2 - B1',
    duration: '1:15',
    audioText: "Every morning, I wake up at precisely six o'clock before the city comes alive. I never check my smartphone first thing. Instead, I walk straight to the kitchen to prepare a pot of green tea. While the water is boiling, I sit by the window and review my active vocabulary cards for ten minutes. This simple habit clears my mind and prepares me for deep work throughout the day.",
    speedOptions: [0.75, 1.0, 1.25],
    transcriptChunks: [
      { start: 0, text: "Every morning, I wake up at precisely six o'clock before the city comes alive." },
      { start: 5, text: "I never check my smartphone first thing." },
      { start: 9, text: "Instead, I walk straight to the kitchen to prepare a pot of green tea." },
      { start: 15, text: "While the water is boiling, I sit by the window and review my active vocabulary cards for ten minutes." },
      { start: 22, text: "This simple habit clears my mind and prepares me for deep work throughout the day." }
    ],
    dictationSentences: [
      { text: "Every morning, I wake up at precisely six o'clock.", hint: "Chú ý trạng từ 'precisely'." },
      { text: "I review my active vocabulary cards for ten minutes.", hint: "Cụm 'active vocabulary cards'." }
    ],
    questions: [
      {
        question: "What is the very first thing the speaker does in the morning?",
        options: ["Checks smartphone messages", "Prepares green tea", "Goes for a 5km run", "Reads news online"],
        correctIndex: 1
      },
      {
        question: "How long does the speaker spend reviewing vocabulary cards?",
        options: ["30 minutes", "5 minutes", "10 minutes", "1 hour"],
        correctIndex: 2
      }
    ]
  },
  {
    id: 'listen_tech_2',
    title: 'The AI Revolution in London Finance',
    level: 'B2 - C1',
    duration: '1:45',
    audioText: "In the heart of the City of London, algorithmic trading platforms now process millions of market transactions in mere microseconds. Traditional stockbrokers are increasingly being replaced by quantitative developers who understand how to leverage machine learning models. However, experienced hedge fund managers argue that human intuition and ethical judgment can never be completely replicated by automated algorithms during sudden market shocks.",
    speedOptions: [0.75, 1.0, 1.25],
    dictationSentences: [
      { text: "Startups must leverage modern artificial intelligence to compete effectively.", hint: "Động từ 'leverage'." }
    ],
    questions: [
      {
        question: "Who is replacing traditional stockbrokers in London finance?",
        options: ["Junior interns", "Quantitative developers", "Government regulators", "Foreign diplomats"],
        correctIndex: 1
      }
    ]
  }
];

// -------------------------------------------------------------------------
// ENGINE 6: SPEAKING AND RESPONSE PROMPTS
// -------------------------------------------------------------------------
window.SPEAKING_STUDIO_DATA = {
  modes: [
    { id: 'repeat', name: 'Repeat After Me (Lặp Lại Mẫu)', desc: 'Lắng nghe phát âm chuẩn của người bản xứ và lặp lại chính xác từng ngữ điệu.' },
    { id: 'shadowing', name: 'Shadowing (Nói Đuổi Tốc Độ Cao)', desc: 'Nói đuổi ngay sau người bản xứ với độ trễ 0.5 giây để tôi luyện phản xạ cơ miệng.' },
    { id: 'qa', name: 'Instant Q&A (Phản Xạ Bất Ngờ)', desc: 'Nghe câu hỏi ngẫu nhiên và phải trả lời thành câu hoàn chỉnh trong vòng 10 giây.' },
    { id: 'retell', name: 'Story Retelling (Kể Lại Câu Chuyện)', desc: 'Dùng từ vựng đã học để tự thuật lại câu chuyện trong 60 giây bằng chính lời văn của bạn.' }
  ],
  prompts: [
    {
      id: 'spk_1',
      topic: 'Daily Routine & Productivity',
      question: 'Can you describe your ideal morning routine and explain why it helps you stay focused?',
      guideKeywords: ['wake up', 'commute', 'deliberate practice', 'leverage', 'consistent'],
      sampleAnswer: 'My ideal morning routine begins at 6 AM. I start with a glass of water and 10 minutes of active recall review. This consistent habit helps me clear my mind and leverage my peak energy hours for deep intellectual work.'
    },
    {
      id: 'spk_2',
      topic: 'Money & Wealth Wisdom',
      question: 'What is the most important financial habit a young person should develop early?',
      guideKeywords: ['assets', 'liabilities', 'budget', 'emergency fund', 'compound interest'],
      sampleAnswer: 'The most essential financial habit is learning to pay yourself first. By consistently allocating at least twenty percent of your income into productive assets rather than liabilities, you harness the power of compound interest.'
    }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 7: READING INTELLIGENCE (Thư Viện Bài Đọc Chuẩn CEFR)
// -------------------------------------------------------------------------
window.READING_STUDIO_DATA = [
  {
    id: 'read_1',
    title: 'The Architecture of London: A Tale of Resilience',
    level: 'B1',
    wordCount: 185,
    genre: 'Culture & History',
    text: `London is not merely a modern metropolis; it is an architectural palimpsest where two thousand years of human resilience are etched into every cobblestone. In 1666, the Great Fire devoured four-fifths of the medieval wooden city within just four days. Yet, out of the ashes arose Sir Christopher Wren's masterpiece, St Paul's Cathedral, crowned with its magnificent dome that survived the relentless Blitz bombings of World War II.

Today, walking through the City of London reveals a fascinating juxtaposition. Ancient Roman walls stand side by side with cutting-edge glass skyscrapers like The Gherkin and The Shard. This blend illustrates the British philosophy of continuous evolution: embracing technological innovation while revering foundational traditions. For students of the English language, navigating this urban landscape provides an unforgettable lesson in how history shapes vocabulary and cultural identity.`,
    vocabularyPicks: [
      { word: 'resilience', ipa: '/rɪˈzɪliəns/', meaning: 'Khả năng phục hồi kiên cường sau nghịch cảnh' },
      { word: 'juxtaposition', ipa: '/ˌdʒʌkstəpəˈzɪʃn/', meaning: 'Sự đặt hai yếu tố tương phản cạnh nhau' },
      { word: 'metropolis', ipa: '/məˈtrɒpəlɪs/', meaning: 'Đô thị lớn sầm uất' }
    ],
    questions: [
      {
        question: 'What happened to medieval London in 1666?',
        options: ['It was conquered by Rome', 'A great fire destroyed most of the wooden city', 'The first skyscraper was constructed', 'St Paul’s Cathedral collapsed'],
        correctIndex: 1
      },
      {
        question: 'What does the coexistence of Roman walls and glass skyscrapers represent?',
        options: ['Lack of urban planning', 'Continuous evolution balancing innovation and tradition', 'Poverty after the Blitz', 'Total destruction of history'],
        correctIndex: 1
      }
    ]
  }
];

// -------------------------------------------------------------------------
// ENGINE 8: WRITING INTELLIGENCE (Lộ Trình Viết 10 Bước)
// -------------------------------------------------------------------------
window.WRITING_STUDIO_DATA = {
  stages: [
    { step: 1, name: 'Words & Parts of Speech' },
    { step: 2, name: 'Collocation & Phrases' },
    { step: 3, name: 'Simple Sentences (SVO)' },
    { step: 4, name: 'Sentence Expansion (Modifiers)' },
    { step: 5, name: 'Complex Sentences (Subordination)' },
    { step: 6, name: 'Academic Paragraph (Topic + Evidence)' },
    { step: 7, name: 'Descriptive Writing' },
    { step: 8, name: 'Narrative Storytelling' },
    { step: 9, name: 'Professional Email' },
    { step: 10, name: 'Argumentative Essay' }
  ],
  practiceTasks: [
    {
      id: 'write_task_1',
      level: 'A2 - B1',
      title: 'Mở rộng câu đơn thành câu phức giàu thông tin',
      prompt: 'Hãy mở rộng câu đơn sau bằng cách thêm thời gian, địa điểm và lý do: "She reads books."',
      hint: 'Gợi ý: Dùng từ nối "because", "every evening", "at the London library".',
      sampleModel: 'Every evening, she reads academic books at the quiet London library because she wants to expand her intellectual horizons.'
    },
    {
      id: 'write_task_2',
      level: 'B1 - B2',
      title: 'Viết đoạn văn nêu quan điểm (Opinion Paragraph)',
      prompt: 'Viết một đoạn văn 4-5 câu trả lời câu hỏi: "Should students learn English through Memory Palaces?"',
      hint: 'Cấu trúc: Topic sentence ➔ Lý do 1 ➔ Lý do 2 ➔ Concluding sentence.',
      sampleModel: 'Learning English through Memory Palaces is dramatically more effective than traditional rote memorization. First, our brains are biologically wired to remember spatial locations and vivid visual imagery. Second, anchoring abstract vocabulary into familiar urban landmarks prevents the natural degradation of memory over time. Therefore, adopting spatial mnemonics is an essential strategy for serious language learners.'
    }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 9 & 10: INTEGRATED CURRICULUM (Lộ Trình 4 Buổi / Tuần - 35 Phút)
// -------------------------------------------------------------------------
window.ENGLISH_DAILY_CURRICULUM = [
  {
    dayNumber: 1,
    dayOfWeek: 'Monday (Thứ Hai)',
    theme: 'Transportation & Daily Commute',
    focusDistrict: 'kings_cross',
    vocabTarget: ['commute', 'punctual', 'transit', 'destination'],
    grammarFocus: 'Present Simple vs Present Continuous for Routines',
    listeningTarget: 'listen_routine_1',
    speakingPrompt: 'Describe how you travel to work or school every day.',
    writingTask: 'Write 3 compound sentences about public transportation in your city.'
  },
  {
    dayNumber: 2,
    dayOfWeek: 'Tuesday (Thứ Ba)',
    theme: 'Food Culture & Table Manners',
    focusDistrict: 'savoy_restaurant',
    vocabTarget: ['beverage', 'recipe', 'appetite', 'hospitality'],
    grammarFocus: 'Countable vs Uncountable Nouns with Determiners (a/an/some/any)',
    listeningTarget: 'listen_routine_1',
    speakingPrompt: 'Explain how to make your favorite beverage or meal.',
    writingTask: 'Write a short restaurant review using 3 new food collocations.'
  },
  {
    dayNumber: 3,
    dayOfWeek: 'Thursday (Thứ Năm)',
    theme: 'Health, Habits & Physical Resilience',
    focusDistrict: 'st_thomas_hospital',
    vocabTarget: ['symptom', 'prescription', 'vitality', 'remedy'],
    grammarFocus: 'Modal Verbs for Health Advice (should, must, ought to)',
    listeningTarget: 'listen_tech_2',
    speakingPrompt: 'Give health advice to someone who often feels exhausted.',
    writingTask: 'Draft a short health guide on preventing burnout.'
  },
  {
    dayNumber: 4,
    dayOfWeek: 'Saturday (Thứ Bảy)',
    theme: 'Education, Science & Deep Thinking',
    focusDistrict: 'ucl_university',
    vocabTarget: ['hypothesis', 'comprehensive', 'empirical', 'methodology'],
    grammarFocus: 'Cause and Effect Transitions (therefore, consequently, due to)',
    listeningTarget: 'listen_tech_2',
    speakingPrompt: 'Discuss why scientific thinking is critical in the age of misinformation.',
    writingTask: 'Construct an academic paragraph explaining the benefits of spaced repetition.'
  }
];
