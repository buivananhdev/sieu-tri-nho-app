// =========================================================================
// ENGLISH MASTERY OS - EXPANDED FOUNDATIONAL DATABASE (V2)
// Hệ điều hành học tập & phát triển năng lực tiếng Anh toàn diện 10 Engine
// Đầy đủ Ngữ pháp thực tế, Từ vựng theo chủ đề, Bài nghe phân cấp & Điểm danh đọc
// =========================================================================

window.ENGLISH_OS_CONFIG = {
  version: '2.0.0',
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
// ENGINE 1: LONDON MEMORY PALACE (Cung Điện Trí Nhớ London)
// -------------------------------------------------------------------------
window.LONDON_MEMORY_PALACE = {
  name: 'London Memory Palace City',
  description: 'Thành phố trí nhớ London chia thành 6 khu vực chủ đề kinh điển với các địa danh nổi tiếng thế giới để mã hóa không gian từ vựng, ngữ pháp và tình huống hội thoại.',
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
// ENGINE 2: VOCABULARY INTELLIGENCE (Kho Từ Vựng Toàn Diện Theo Chủ Đề)
// -------------------------------------------------------------------------
window.VOCABULARY_THEMATIC_PACKS = [
  {
    "id": "pack_daily_life",
    "name": "Giao Tiếp & Đời Sống Thường Ngày",
    "icon": "coffee",
    "badge": "Đời Sống • Giao Tiếp • Bắt Buộc",
    "color": "from-amber-600 to-yellow-600",
    "words": [
      {
        "id": "w_commute",
        "word": "commute",
        "pos": "v / n",
        "ipa": "/kəˈmjuːt/",
        "level": "B1",
        "vn": "Đi lại hàng ngày giữa nhà và nơi làm việc",
        "collocations": "daily commute, long commute",
        "example": "It takes me 40 minutes to commute to the office by metro."
      },
      {
        "id": "w_errand",
        "word": "errand",
        "pos": "noun",
        "ipa": "/ˈerənd/",
        "level": "B1",
        "vn": "Việc vặt cần chạy ra ngoài làm (đi chợ, gửi bưu điện)",
        "collocations": "run an errand, have errands to do",
        "example": "I need to run a few errands before the supermarkets close."
      },
      {
        "id": "w_groceries",
        "word": "groceries",
        "pos": "noun pl.",
        "ipa": "/ˈɡrəʊsəriz/",
        "level": "A2",
        "vn": "Thực phẩm và hàng bách hóa sinh hoạt",
        "collocations": "buy groceries, grocery store",
        "example": "She spent fifty dollars on weekly groceries at the local market."
      },
      {
        "id": "w_catch_up",
        "word": "catch up",
        "pos": "phrasal v",
        "ipa": "/kætʃ ʌp/",
        "level": "B1",
        "vn": "Gặp gỡ hàn huyên, cập nhật tin tức sau thời gian dài",
        "collocations": "catch up with someone, catch up over coffee",
        "example": "Let’s grab lunch this Saturday to catch up on everything!"
      },
      {
        "id": "w_convenient",
        "word": "convenient",
        "pos": "adj",
        "ipa": "/kənˈviːniənt/",
        "level": "A2",
        "vn": "Tiện lợi, thuận tiện cho sinh hoạt",
        "collocations": "highly convenient, convenient location",
        "example": "Living near a subway station is extremely convenient for my schedule."
      },
      {
        "id": "w_exhausted",
        "word": "exhausted",
        "pos": "adj",
        "ipa": "/ɪɡˈzɔːstɪd/",
        "level": "B1",
        "vn": "Kiệt sức hoàn toàn, mệt rã rời",
        "collocations": "physically exhausted, feel exhausted",
        "example": "After working 12 hours straight, he was completely exhausted."
      },
      {
        "id": "w_punctual",
        "word": "punctual",
        "pos": "adj",
        "ipa": "/ˈpʌŋktʃuəl/",
        "level": "B1",
        "vn": "Đúng giờ, không bao giờ trễ hẹn",
        "collocations": "strictly punctual, punctual arrival",
        "example": "He is always punctual for business appointments."
      },
      {
        "id": "w_spontaneous",
        "word": "spontaneous",
        "pos": "adj",
        "ipa": "/spɒnˈteɪniəs/",
        "level": "B2",
        "vn": "Tự phát, ngẫu hứng, không lên kế hoạch trước",
        "collocations": "spontaneous decision, spontaneous applause",
        "example": "We took a spontaneous weekend road trip to the coast."
      },
      {
        "id": "w_mundane",
        "word": "mundane",
        "pos": "adj",
        "ipa": "/mʌnˈdeɪn/",
        "level": "B2",
        "vn": "Tầm thường, lặp đi lặp lại tẻ nhạt hàng ngày",
        "collocations": "mundane tasks, mundane daily routine",
        "example": "I listen to educational podcasts while doing mundane household chores."
      },
      {
        "id": "w_leisure",
        "word": "leisure",
        "pos": "noun",
        "ipa": "/ˈleʒər/",
        "level": "B1",
        "vn": "Thời gian rảnh rỗi để thư giãn, giải trí",
        "collocations": "leisure activities, at your leisure",
        "example": "You can read this comprehensive guide at your leisure this weekend."
      },
      {
        "id": "w_chores",
        "word": "chores",
        "pos": "noun pl.",
        "ipa": "/tʃɔːrz/",
        "level": "A2",
        "vn": "Công việc vặt trong nhà (dọn dẹp, rửa bát)",
        "collocations": "do household chores, daily chores",
        "example": "Sharing household chores keeps family relationships harmonious."
      },
      {
        "id": "w_routine",
        "word": "routine",
        "pos": "noun",
        "ipa": "/ruːˈtiːn/",
        "level": "A2",
        "vn": "Lề thói sinh hoạt, lịch trình quen thuộc hàng ngày",
        "collocations": "morning routine, daily routine",
        "example": "A consistent morning routine sets a calm tone for the whole day."
      },
      {
        "id": "w_socialize",
        "word": "socialize",
        "pos": "verb",
        "ipa": "/ˈsəʊʃəlaɪz/",
        "level": "B1",
        "vn": "Giao lưu kết bạn, hòa nhập cộng đồng",
        "collocations": "socialize with colleagues, like to socialize",
        "example": "It is important to socialize with friends after a stressful work week."
      },
      {
        "id": "w_acquaintance",
        "word": "acquaintance",
        "pos": "noun",
        "ipa": "/əˈkweɪntəns/",
        "level": "B2",
        "vn": "Người quen (biết mặt nhưng chưa phải bạn thân)",
        "collocations": "casual acquaintance, mutual acquaintance",
        "example": "He is not a close friend, just a business acquaintance."
      },
      {
        "id": "w_cozy",
        "word": "cozy",
        "pos": "adj",
        "ipa": "/ˈkəʊzi/",
        "level": "B1",
        "vn": "Ấm cúng, tiện nghi và dễ chịu",
        "collocations": "cozy atmosphere, cozy coffee shop",
        "example": "We sat in a cozy café enjoying hot chocolate on a rainy day."
      },
      {
        "id": "w_hygiene",
        "word": "hygiene",
        "pos": "noun",
        "ipa": "/ˈhaɪdʒiːn/",
        "level": "B1",
        "vn": "Vệ sinh cá nhân và môi trường sống",
        "collocations": "personal hygiene, food hygiene",
        "example": "Good dental hygiene prevents tooth decay and gum disease."
      },
      {
        "id": "w_hectic",
        "word": "hectic",
        "pos": "adj",
        "ipa": "/ˈhektɪk/",
        "level": "B2",
        "vn": "Bận rộn điên cuồng, dồn dập nhiều việc",
        "collocations": "hectic schedule, hectic lifestyle",
        "example": "Despite her hectic schedule, she always makes time for meditation."
      },
      {
        "id": "w_unwind",
        "word": "unwind",
        "pos": "verb",
        "ipa": "/ʌnˈwaɪnd/",
        "level": "B2",
        "vn": "Thả lỏng, xả hơi sau những giờ làm việc căng thẳng",
        "collocations": "unwind after work, a great way to unwind",
        "example": "Listening to classical music helps me unwind after a long day."
      },
      {
        "id": "w_versatile",
        "word": "versatile",
        "pos": "adj",
        "ipa": "/ˈvɜːrsətaɪl/",
        "level": "B2",
        "vn": "Đa năng, linh hoạt thích ứng với nhiều tình huống",
        "collocations": "versatile tool, highly versatile person",
        "example": "Eggs are one of the most versatile ingredients in cooking."
      },
      {
        "id": "w_procrastinate",
        "word": "procrastinate",
        "pos": "verb",
        "ipa": "/prəʊˈkræstɪneɪt/",
        "level": "B2",
        "vn": "Trì hoãn, chần chừ không chịu làm ngay",
        "collocations": "tend to procrastinate, stop procrastinating",
        "example": "Do not procrastinate on your goals; take action right now."
      },
      {
        "id": "w_neighborhood",
        "word": "neighborhood",
        "pos": "noun",
        "ipa": "/ˈneɪbərhʊd/",
        "level": "A2",
        "vn": "Khu dân cư, xóm giềng xung quanh",
        "collocations": "safe neighborhood, quiet neighborhood",
        "example": "We moved to a quiet, family-friendly neighborhood."
      },
      {
        "id": "w_appliance",
        "word": "appliance",
        "pos": "noun",
        "ipa": "/əˈplaɪəns/",
        "level": "B1",
        "vn": "Thiết bị đồ gia dụng trong gia đình",
        "collocations": "home appliances, kitchen appliances",
        "example": "Modern kitchen appliances save us a great deal of cooking time."
      },
      {
        "id": "w_hospitality",
        "word": "hospitality",
        "pos": "noun",
        "ipa": "/ˌhɒspɪˈtæləti/",
        "level": "B2",
        "vn": "Lòng hiếu khách, sự đón tiếp nồng hậu",
        "collocations": "warm hospitality, show hospitality",
        "example": "We deeply appreciated the warm hospitality of our Vietnamese hosts."
      },
      {
        "id": "w_reluctant",
        "word": "reluctant",
        "pos": "adj",
        "ipa": "/rɪˈlʌktənt/",
        "level": "B2",
        "vn": "Lưỡng lự, miễn cưỡng không muốn làm",
        "collocations": "reluctant to do sth, feel reluctant",
        "example": "He was reluctant to leave the party because he was having so much fun."
      },
      {
        "id": "w_habitual",
        "word": "habitual",
        "pos": "adj",
        "ipa": "/həˈbɪtʃuəl/",
        "level": "B2",
        "vn": "Theo thói quen quen thuộc, thường xuyên",
        "collocations": "habitual behavior, habitual latecomer",
        "example": "His habitual morning walk keeps him energetic throughout the day."
      },
      {
        "id": "w_multitask",
        "word": "multitask",
        "pos": "verb",
        "ipa": "/ˌmʌltiˈtɑːsk/",
        "level": "B1",
        "vn": "Làm nhiều việc cùng một lúc",
        "collocations": "ability to multitask, multitask effectively",
        "example": "Trying to multitask often reduces the overall quality of deep work."
      },
      {
        "id": "w_tidy",
        "word": "tidy",
        "pos": "adj / v",
        "ipa": "/ˈtaɪdi/",
        "level": "A2",
        "vn": "Gọn gàng, ngăn nắp; dọn dẹp",
        "collocations": "tidy room, keep things tidy",
        "example": "Keeping your study desk tidy sharpens mental clarity."
      },
      {
        "id": "w_cherish",
        "word": "cherish",
        "pos": "verb",
        "ipa": "/ˈtʃerɪʃ/",
        "level": "B2",
        "vn": "Trân trọng, yêu quý và nâng niu từng kỷ niệm",
        "collocations": "cherish memories, cherish every moment",
        "example": "I will always cherish the precious time we spent together."
      }
    ]
  },
  {
    "id": "pack_food_dining",
    "name": "Ẩm Thực, Nhà Hàng & Nấu Nướng",
    "icon": "utensils",
    "badge": "Ẩm Thực • Nhà Hàng • Đời Sống",
    "color": "from-orange-600 to-amber-600",
    "words": [
      {
        "id": "w_beverage",
        "word": "beverage",
        "pos": "noun",
        "ipa": "/ˈbevərɪdʒ/",
        "level": "B1",
        "vn": "Đồ uống (thức uống các loại ngoài nước lọc)",
        "collocations": "alcoholic beverage, hot beverage",
        "example": "A wide selection of refreshing beverages is served at the bar."
      },
      {
        "id": "w_recipe",
        "word": "recipe",
        "pos": "noun",
        "ipa": "/ˈresəpi/",
        "level": "A2",
        "vn": "Công thức nấu ăn; bí quyết thành công",
        "collocations": "secret recipe, follow a recipe",
        "example": "This traditional soup recipe has been kept in the family for decades."
      },
      {
        "id": "w_ingredient",
        "word": "ingredient",
        "pos": "noun",
        "ipa": "/ɪnˈɡriːdiənt/",
        "level": "B1",
        "vn": "Nguyên liệu thực phẩm, thành phần cấu tạo",
        "collocations": "fresh ingredients, key ingredient",
        "example": "Always use fresh organic ingredients for the best culinary flavor."
      },
      {
        "id": "w_savor",
        "word": "savor",
        "pos": "verb",
        "ipa": "/ˈseɪvər/",
        "level": "B2",
        "vn": "Thưởng thức chậm rãi, nhấm nháp dư vị tuyệt vời",
        "collocations": "savor the moment, savor every bite",
        "example": "He closed his eyes to savor every bite of the artisan steak."
      },
      {
        "id": "w_exquisite",
        "word": "exquisite",
        "pos": "adj",
        "ipa": "/ɪkˈskwɪzɪt/",
        "level": "C1",
        "vn": "Tinh xảo, tuyệt mỹ, hương vị thượng hạng",
        "collocations": "exquisite taste, exquisite meal",
        "example": "The dessert was an exquisite blend of dark chocolate and vanilla."
      },
      {
        "id": "w_cuisine",
        "word": "cuisine",
        "pos": "noun",
        "ipa": "/kwɪˈziːn/",
        "level": "B1",
        "vn": "Nền ẩm thực đặc trưng của một quốc gia hay vùng miền",
        "collocations": "Italian cuisine, Vietnamese cuisine",
        "example": "Traditional Vietnamese cuisine is renowned for its fresh herbs and balance."
      },
      {
        "id": "w_delicacy",
        "word": "delicacy",
        "pos": "noun",
        "ipa": "/ˈdelɪkəsi/",
        "level": "B2",
        "vn": "Sơn hào hải vị, đặc sản hiếm có",
        "collocations": "local delicacy, culinary delicacy",
        "example": "Smoked salmon is considered a gourmet delicacy in this region."
      },
      {
        "id": "w_appetizer",
        "word": "appetizer",
        "pos": "noun",
        "ipa": "/ˈæpɪtaɪzər/",
        "level": "B1",
        "vn": "Món khai vị kích thích vị giác trước bữa chính",
        "collocations": "serve as an appetizer, hot appetizer",
        "example": "We ordered crispy spring rolls as an appetizer before our main course."
      },
      {
        "id": "w_gourmet",
        "word": "gourmet",
        "pos": "adj / n",
        "ipa": "/ˈɡʊəmeɪ/",
        "level": "B2",
        "vn": "Đẳng cấp ẩm thực sành điệu, chất lượng cao cấp",
        "collocations": "gourmet coffee, gourmet chef",
        "example": "This boutique supermarket offers imported gourmet cheeses and wines."
      },
      {
        "id": "w_seasoned",
        "word": "seasoned",
        "pos": "adj",
        "ipa": "/ˈsiːznd/",
        "level": "B1",
        "vn": "Được tẩm ướp gia vị đậm đà; dày dặn kinh nghiệm",
        "collocations": "well seasoned, seasoned meat",
        "example": "The steak was perfectly seasoned with cracked black pepper and sea salt."
      },
      {
        "id": "w_portion",
        "word": "portion",
        "pos": "noun",
        "ipa": "/ˈpɔːrʃn/",
        "level": "B1",
        "vn": "Khẩu phần ăn một bữa; phần chia",
        "collocations": "generous portion, portion size",
        "example": "The restaurant is famous for serving very generous portions at modest prices."
      },
      {
        "id": "w_dietary",
        "word": "dietary",
        "pos": "adj",
        "ipa": "/ˈdaɪətəri/",
        "level": "B2",
        "vn": "Thuộc về chế độ ăn uống dinh dưỡng",
        "collocations": "dietary requirements, dietary fiber",
        "example": "Please notify the flight attendants in advance of any special dietary needs."
      },
      {
        "id": "w_allergic",
        "word": "allergic",
        "pos": "adj",
        "ipa": "/əˈlɜːrdʒɪk/",
        "level": "B1",
        "vn": "Bị dị ứng với thực phẩm hoặc chất nào đó",
        "collocations": "allergic to peanuts, allergic reaction",
        "example": "I am severely allergic to shellfish, so please omit shrimp from the salad."
      },
      {
        "id": "w_ambiance",
        "word": "ambiance",
        "pos": "noun",
        "ipa": "/ˈæmbiəns/",
        "level": "B2",
        "vn": "Không gian, bầu không khí và cảm xúc của quán ăn",
        "collocations": "cozy ambiance, romantic ambiance",
        "example": "Soft jazz lighting created a warm, inviting ambiance in the bistro."
      },
      {
        "id": "w_fermented",
        "word": "fermented",
        "pos": "adj",
        "ipa": "/fərˈmentɪd/",
        "level": "B2",
        "vn": "Lên men vi sinh tự nhiên (kimchi, dưa chua, sữa chua)",
        "collocations": "fermented food, naturally fermented",
        "example": "Fermented foods contain probiotics that greatly enhance gut health."
      },
      {
        "id": "w_culinary",
        "word": "culinary",
        "pos": "adj",
        "ipa": "/ˈkʌlɪnəri/",
        "level": "B2",
        "vn": "Thuộc về nghệ thuật nấu nướng và ẩm thực",
        "collocations": "culinary skills, culinary arts",
        "example": "She enrolled in culinary school to pursue her lifelong passion for baking."
      },
      {
        "id": "w_banquet",
        "word": "banquet",
        "pos": "noun",
        "ipa": "/ˈbæŋkwɪt/",
        "level": "B2",
        "vn": "Đại tiệc long trọng, quốc yến",
        "collocations": "wedding banquet, lavish banquet",
        "example": "Hundreds of prestigious guests attended the annual charity banquet."
      },
      {
        "id": "w_condiment",
        "word": "condiment",
        "pos": "noun",
        "ipa": "/ˈkɒndɪmənt/",
        "level": "B2",
        "vn": "Gia vị chấm hoặc nêm kèm trên bàn ăn",
        "collocations": "condiments like mustard, ketchup and condiments",
        "example": "The waiter brought a wooden tray of various condiments and chili sauces."
      },
      {
        "id": "w_scrumptious",
        "word": "scrumptious",
        "pos": "adj",
        "ipa": "/ˈskrʌmpʃəs/",
        "level": "B2",
        "vn": "Ngon tuyệt cú mèo, thơm lừng ngây ngất",
        "collocations": "scrumptious dessert, taste scrumptious",
        "example": "My grandmother baked a scrumptious apple pie for Sunday dinner."
      },
      {
        "id": "w_palatable",
        "word": "palatable",
        "pos": "adj",
        "ipa": "/ˈpælətəbl/",
        "level": "C1",
        "vn": "Vừa miệng, hợp khẩu vị; có thể chấp nhận được",
        "collocations": "highly palatable, make it palatable",
        "example": "A dash of lemon juice made the herbal medicine much more palatable."
      }
    ]
  },
  {
    "id": "pack_travel_hotel",
    "name": "Du Lịch, Sân Bay & Khách Sạn",
    "icon": "plane",
    "badge": "Du Lịch • Khám Phá • Khách Sạn",
    "color": "from-sky-600 to-blue-600",
    "words": [
      {
        "id": "w_itinerary",
        "word": "itinerary",
        "pos": "noun",
        "ipa": "/aɪˈtɪnərəri/",
        "level": "B1",
        "vn": "Lịch trình chuyến đi chi tiết theo từng ngày",
        "collocations": "travel itinerary, detailed itinerary",
        "example": "Our 5-day travel itinerary includes Tokyo, Kyoto, and Osaka."
      },
      {
        "id": "w_destination",
        "word": "destination",
        "pos": "noun",
        "ipa": "/ˌdestɪˈneɪʃn/",
        "level": "A2",
        "vn": "Điểm đến du lịch, đích đến cuối cùng",
        "collocations": "popular destination, holiday destination",
        "example": "Da Nang is a premier beach destination for international travelers."
      },
      {
        "id": "w_boarding_pass",
        "word": "boarding pass",
        "pos": "noun",
        "ipa": "/ˈbɔːrdɪŋ pæs/",
        "level": "A2",
        "vn": "Thẻ lên máy bay hoặc tàu cao tốc",
        "collocations": "show your boarding pass, digital boarding pass",
        "example": "Have your passport and boarding pass ready at the departure gate."
      },
      {
        "id": "w_accommodation",
        "word": "accommodation",
        "pos": "noun",
        "ipa": "/əˌkɒməˈdeɪʃn/",
        "level": "B1",
        "vn": "Chỗ ở, phòng nghỉ khách sạn hoặc căn hộ lưu trú",
        "collocations": "book accommodation, luxury accommodation",
        "example": "We booked affordable seaside accommodation six months in advance."
      },
      {
        "id": "w_breathtaking",
        "word": "breathtaking",
        "pos": "adj",
        "ipa": "/ˈbreθteɪkɪŋ/",
        "level": "B2",
        "vn": "Ngoạn mục, đẹp đến nghẹt thở",
        "collocations": "breathtaking view, breathtaking scenery",
        "example": "The view of the sunrise from the mountain summit was breathtaking."
      },
      {
        "id": "w_landmark",
        "word": "landmark",
        "pos": "noun",
        "ipa": "/ˈlændmɑːrk/",
        "level": "B1",
        "vn": "Địa danh biểu tượng, công trình nổi tiếng",
        "collocations": "historic landmark, famous landmark",
        "example": "Big Ben and the Tower of London are world-famous landmarks."
      },
      {
        "id": "w_jet_lag",
        "word": "jet lag",
        "pos": "noun",
        "ipa": "/ˈdʒet læɡ/",
        "level": "B1",
        "vn": "Hội chứng lệch múi giờ sau chuyến bay dài",
        "collocations": "suffer from jet lag, overcome jet lag",
        "example": "It took him three days to overcome the jet lag after flying from New York."
      },
      {
        "id": "w_picturesque",
        "word": "picturesque",
        "pos": "adj",
        "ipa": "/ˌpɪktʃəˈresk/",
        "level": "B2",
        "vn": "Đẹp như tranh vẽ, thơ mộng",
        "collocations": "picturesque village, picturesque harbor",
        "example": "They spent the holiday strolling around a picturesque coastal town."
      },
      {
        "id": "w_hospitable",
        "word": "hospitable",
        "pos": "adj",
        "ipa": "/hɒˈspɪtəbl/",
        "level": "B2",
        "vn": "Hiếu khách, nồng hậu đón tiếp khách phương xa",
        "collocations": "warmly hospitable, hospitable locals",
        "example": "The local villagers were incredibly friendly and hospitable."
      },
      {
        "id": "w_layover",
        "word": "layover",
        "pos": "noun",
        "ipa": "/ˈleɪoʊvər/",
        "level": "B1",
        "vn": "Thời gian quá cảnh giữa các chặng bay",
        "collocations": "three-hour layover, transit layover",
        "example": "We had a four-hour layover in Singapore airport before our connecting flight."
      },
      {
        "id": "w_excursion",
        "word": "excursion",
        "pos": "noun",
        "ipa": "/ɪkˈskɜːrʒn/",
        "level": "B2",
        "vn": "Chuyến tham quan dã ngoại ngắn ngày có tổ chức",
        "collocations": "day excursion, guided excursion",
        "example": "The hotel arranges daily boat excursions to the nearby coral islands."
      },
      {
        "id": "w_wanderlust",
        "word": "wanderlust",
        "pos": "noun",
        "ipa": "/ˈwɒndərlʌst/",
        "level": "C1",
        "vn": "Khao khát mãnh liệt được đi chu du khắp thế giới",
        "collocations": "filled with wanderlust, travel wanderlust",
        "example": "Her wanderlust led her to backpack across forty countries in five years."
      },
      {
        "id": "w_customs",
        "word": "customs",
        "pos": "noun pl.",
        "ipa": "/ˈkʌstəmz/",
        "level": "B1",
        "vn": "Hải quan sân bay kiểm tra hàng hóa xuất nhập cảnh",
        "collocations": "pass through customs, customs declaration",
        "example": "You must declare foreign currency and agricultural items at customs."
      },
      {
        "id": "w_baggage_claim",
        "word": "baggage claim",
        "pos": "noun",
        "ipa": "/ˈbæɡɪdʒ kleɪm/",
        "level": "A2",
        "vn": "Khu vực băng chuyền lấy hành lý ký gửi tại sân bay",
        "collocations": "wait at baggage claim, baggage claim area",
        "example": "We waited thirty minutes at carousel four in the baggage claim area."
      },
      {
        "id": "w_concierge",
        "word": "concierge",
        "pos": "noun",
        "ipa": "/kɒn.siˈeərʒ/",
        "level": "B2",
        "vn": "Nhân viên hỗ trợ dịch vụ đặc biệt tại sảnh khách sạn 5 sao",
        "collocations": "hotel concierge, ask the concierge",
        "example": "The hotel concierge booked premium theater tickets for our anniversary."
      }
    ]
  },
  {
    "id": "pack_shopping_finance",
    "name": "Mua Sắm, Tiền Bạc & Chi Tiêu",
    "icon": "shopping-bag",
    "badge": "Chi Tiêu • Ngân Sách • Tài Chính",
    "color": "from-pink-600 to-rose-600",
    "words": [
      {
        "id": "w_bargain",
        "word": "bargain",
        "pos": "noun / verb",
        "ipa": "/ˈbɑːrɡɪn/",
        "level": "B1",
        "vn": "Món hời giá rẻ; mặc cả trả giá",
        "collocations": "good bargain, bargain hunter, drive a hard bargain",
        "example": "At ten dollars, this leather jacket was an absolute bargain!"
      },
      {
        "id": "w_refund",
        "word": "refund",
        "pos": "noun / verb",
        "ipa": "/ˈriːfʌnd/",
        "level": "B1",
        "vn": "Khoản tiền hoàn lại; hoàn trả tiền cho khách",
        "collocations": "full refund, request a refund",
        "example": "If the product is defective, you are entitled to a full refund."
      },
      {
        "id": "w_warranty",
        "word": "warranty",
        "pos": "noun",
        "ipa": "/ˈwɔːrənti/",
        "level": "B1",
        "vn": "Phiếu hoặc chính sách bảo hành chính hãng",
        "collocations": "two-year warranty, under warranty",
        "example": "This laptop comes with a comprehensive two-year manufacturer warranty."
      },
      {
        "id": "w_affordable",
        "word": "affordable",
        "pos": "adj",
        "ipa": "/əˈfɔːrdəbl/",
        "level": "A2",
        "vn": "Hợp túi tiền, giá cả phải chăng cho số đông",
        "collocations": "affordable price, affordable housing",
        "example": "We provide high-quality English education at an affordable price."
      },
      {
        "id": "w_receipt",
        "word": "receipt",
        "pos": "noun",
        "ipa": "/rɪˈsiːt/",
        "level": "A2",
        "vn": "Hóa đơn, biên lai thu tiền thanh toán",
        "collocations": "keep the receipt, sales receipt",
        "example": "Make sure to keep your receipt in case you want to exchange the shirt."
      },
      {
        "id": "w_discount",
        "word": "discount",
        "pos": "noun",
        "ipa": "/ˈdɪskaʊnt/",
        "level": "A2",
        "vn": "Khoản giảm giá, chiết khấu phần trăm",
        "collocations": "special discount, 20% discount",
        "example": "Students and senior citizens receive a 15% discount on all books."
      },
      {
        "id": "w_installment",
        "word": "installment",
        "pos": "noun",
        "ipa": "/ɪnˈstɔːlmənt/",
        "level": "B2",
        "vn": "Khoản trả góp định kỳ hàng tháng",
        "collocations": "monthly installments, pay in installments",
        "example": "He bought the new smartphone in twelve interest-free monthly installments."
      },
      {
        "id": "w_frugal",
        "word": "frugal",
        "pos": "adj",
        "ipa": "/ˈfruːɡl/",
        "level": "B2",
        "vn": "Chi tiêu tiết kiệm, thông minh, không phung phí",
        "collocations": "frugal lifestyle, frugal living",
        "example": "Her frugal habits allowed her to save enough money to buy an apartment."
      },
      {
        "id": "w_surcharge",
        "word": "surcharge",
        "pos": "noun",
        "ipa": "/ˈsɜːrtʃɑːrdʒ/",
        "level": "B2",
        "vn": "Khoản phụ phí tính thêm ngoài giá gốc",
        "collocations": "credit card surcharge, peak-hour surcharge",
        "example": "There is a small surcharge for payments processed via international cards."
      },
      {
        "id": "w_voucher",
        "word": "voucher",
        "pos": "noun",
        "ipa": "/ˈvaʊtʃər/",
        "level": "B1",
        "vn": "Phiếu quà tặng, mã giảm giá mua sắm",
        "collocations": "gift voucher, discount voucher",
        "example": "Enter your promo voucher code at checkout to claim free shipping."
      },
      {
        "id": "w_exorbitant",
        "word": "exorbitant",
        "pos": "adj",
        "ipa": "/ɪɡˈzɔːrbɪtənt/",
        "level": "C1",
        "vn": "Đắt đỏ cắt cổ, giá cao quá mức hợp lý",
        "collocations": "exorbitant prices, exorbitant fees",
        "example": "Tourists were shocked by the exorbitant taxi fares near the airport."
      },
      {
        "id": "w_impulsive",
        "word": "impulsive",
        "pos": "adj",
        "ipa": "/ɪmˈpʌlsɪv/",
        "level": "B2",
        "vn": "Bốc đồng, mua sắm theo cảm xúc nhất thời",
        "collocations": "impulsive buying, impulsive decision",
        "example": "Creating a strict shopping list helps curb impulsive spending."
      }
    ]
  },
  {
    "id": "pack_work_career",
    "name": "Công Sở, Phỏng Vấn & Sự Nghiệp",
    "icon": "briefcase",
    "badge": "Sự Nghiệp • Đàm Phán • Chuyên Nghiệp",
    "color": "from-blue-600 to-indigo-600",
    "words": [
      {
        "id": "w_deadline",
        "word": "deadline",
        "pos": "noun",
        "ipa": "/ˈdedlaɪn/",
        "level": "B1",
        "vn": "Hạn chót hoàn thành nhiệm vụ",
        "collocations": "meet a deadline, miss a deadline, tight deadline",
        "example": "The whole engineering team worked overtime to meet the client’s deadline."
      },
      {
        "id": "w_collaborate",
        "word": "collaborate",
        "pos": "verb",
        "ipa": "/kəˈlæbəreɪt/",
        "level": "B2",
        "vn": "Hợp tác chặt chẽ cùng nhau thực hiện dự án",
        "collocations": "collaborate with sb, collaborate on a project",
        "example": "Designers and developers must collaborate closely to build seamless apps."
      },
      {
        "id": "w_negotiate",
        "word": "negotiate",
        "pos": "verb",
        "ipa": "/nɪˈɡəʊʃieɪt/",
        "level": "B2",
        "vn": "Thương lượng, đàm phán quyền lợi hoặc giá cả",
        "collocations": "negotiate a contract, negotiate a higher salary",
        "example": "She successfully negotiated a 20% salary increase during her annual review."
      },
      {
        "id": "w_delegate",
        "word": "delegate",
        "pos": "verb",
        "ipa": "/ˈdelɪɡeɪt/",
        "level": "B2",
        "vn": "Ủy quyền, giao việc cho cấp dưới",
        "collocations": "delegate tasks, delegate authority",
        "example": "An effective manager knows how to delegate routine tasks to focus on strategy."
      },
      {
        "id": "w_competence",
        "word": "competence",
        "pos": "noun",
        "ipa": "/ˈkɒmpɪtəns/",
        "level": "C1",
        "vn": "Năng lực chuyên môn vững vàng, khả năng thành thạo công việc",
        "collocations": "core competence, professional competence",
        "example": "His technical competence was demonstrated during the live coding interview."
      },
      {
        "id": "w_probation",
        "word": "probation",
        "pos": "noun",
        "ipa": "/prəʊˈbeɪʃn/",
        "level": "B2",
        "vn": "Giai đoạn thử việc trước khi ký hợp đồng chính thức",
        "collocations": "probation period, pass probation",
        "example": "After a successful three-month probation, she received a full-time contract."
      },
      {
        "id": "w_workload",
        "word": "workload",
        "pos": "noun",
        "ipa": "/ˈwɜːrkləʊd/",
        "level": "B1",
        "vn": "Khối lượng công việc phải xử lý",
        "collocations": "heavy workload, manage workload",
        "example": "Prioritizing important tasks helps reduce stress from a heavy workload."
      },
      {
        "id": "w_consensus",
        "word": "consensus",
        "pos": "noun",
        "ipa": "/kənˈsensəs/",
        "level": "C1",
        "vn": "Sự đồng thuận nhất trí của toàn bộ tập thể",
        "collocations": "reach a consensus, broad consensus",
        "example": "After three hours of debate, the board reached a consensus on the new budget."
      },
      {
        "id": "w_productivity",
        "word": "productivity",
        "pos": "noun",
        "ipa": "/ˌprɒdʌkˈtɪvəti/",
        "level": "B2",
        "vn": "Năng suất lao động, hiệu suất làm việc",
        "collocations": "boost productivity, high productivity",
        "example": "Eliminating unnecessary meetings drastically boosts team productivity."
      },
      {
        "id": "w_severance",
        "word": "severance",
        "pos": "noun",
        "ipa": "/ˈsevərəns/",
        "level": "B2",
        "vn": "Khoản trợ cấp thôi việc đền bù hợp đồng",
        "collocations": "severance package, severance pay",
        "example": "Laid-off employees were offered a generous six-month severance package."
      },
      {
        "id": "w_synergy",
        "word": "synergy",
        "pos": "noun",
        "ipa": "/ˈsɪnərdʒi/",
        "level": "C1",
        "vn": "Hiệu ứng cộng hưởng (1 + 1 > 2 khi kết hợp năng lực)",
        "collocations": "create synergy, powerful synergy",
        "example": "The merger of the two tech firms created powerful operational synergies."
      },
      {
        "id": "w_initiative",
        "word": "initiative",
        "pos": "noun",
        "ipa": "/ɪˈnɪʃətɪv/",
        "level": "B2",
        "vn": "Sự chủ động, sáng kiến mới giải quyết vấn đề",
        "collocations": "take the initiative, new initiative",
        "example": "Great leaders always take the initiative rather than waiting for instructions."
      },
      {
        "id": "w_appraisal",
        "word": "appraisal",
        "pos": "noun",
        "ipa": "/əˈpreɪzl/",
        "level": "B2",
        "vn": "Sự đánh giá định kỳ hiệu quả công việc nhân viên",
        "collocations": "performance appraisal, annual appraisal",
        "example": "Employees set clear quarterly objectives prior to their annual performance appraisal."
      },
      {
        "id": "w_burnout",
        "word": "burnout",
        "pos": "noun",
        "ipa": "/ˈbɜːrnaʊt/",
        "level": "B1",
        "vn": "Tình trạng kiệt sức, suy sụp tinh thần do làm việc quá tải",
        "collocations": "suffer from burnout, prevent burnout",
        "example": "Encouraging regular vacations prevents mental and physical employee burnout."
      },
      {
        "id": "w_remuneration",
        "word": "remuneration",
        "pos": "noun",
        "ipa": "/rɪˌmjuːnəˈreɪʃn/",
        "level": "C1",
        "vn": "Thù lao, tiền lương thưởng và chế độ đãi ngộ tổng thể",
        "collocations": "financial remuneration, generous remuneration",
        "example": "The executive role offers highly competitive financial remuneration and stock options."
      }
    ]
  },
  {
    "id": "pack_business_strategy",
    "name": "Kinh Doanh, Khởi Nghiệp & Quản Trị",
    "icon": "briefcase-business",
    "badge": "Quản Trị • Doanh Nghiệp • Chiến Lược",
    "color": "from-indigo-600 to-violet-600",
    "words": [
      {
        "id": "w_entrepreneurship",
        "word": "entrepreneurship",
        "pos": "noun",
        "ipa": "/ˌɒntrəprəˈnɜːrʃɪp/",
        "level": "B2",
        "vn": "Tinh thần khởi nghiệp, sáng lập doanh nghiệp",
        "collocations": "foster entrepreneurship, young entrepreneurship",
        "example": "Universities should encourage innovation and entrepreneurship among students."
      },
      {
        "id": "w_monopoly",
        "word": "monopoly",
        "pos": "noun",
        "ipa": "/məˈnɒpəli/",
        "level": "B2",
        "vn": "Độc quyền thị trường, kiểm soát hoàn toàn một ngành",
        "collocations": "break a monopoly, state monopoly",
        "example": "Antitrust laws are designed to prevent tech monopolies from crushing competitors."
      },
      {
        "id": "w_market_share",
        "word": "market share",
        "pos": "noun",
        "ipa": "/ˈmɑːrkɪt ʃeər/",
        "level": "B2",
        "vn": "Thị phần của một doanh nghiệp trong ngành",
        "collocations": "gain market share, dominant market share",
        "example": "By cutting prices, the company gained a 15% market share in six months."
      },
      {
        "id": "w_revenue",
        "word": "revenue",
        "pos": "noun",
        "ipa": "/ˈrevənjuː/",
        "level": "B2",
        "vn": "Tổng doanh thu tiền về trước khi trừ chi phí",
        "collocations": "annual revenue, generate revenue",
        "example": "Subscription models generate predictable recurring revenue for software companies."
      },
      {
        "id": "w_benchmark",
        "word": "benchmark",
        "pos": "noun / verb",
        "ipa": "/ˈbentʃmɑːrk/",
        "level": "B2",
        "vn": "Tiêu chuẩn đánh giá chuẩn mực; mốc so sánh",
        "collocations": "industry benchmark, set a benchmark",
        "example": "Their stellar customer satisfaction score is the benchmark for the entire industry."
      },
      {
        "id": "w_pivot",
        "word": "pivot",
        "pos": "verb / noun",
        "ipa": "/ˈpɪvət/",
        "level": "B2",
        "vn": "Xoay trục chiến lược kinh doanh khi hướng đi cũ không hiệu quả",
        "collocations": "strategic pivot, pivot to AI",
        "example": "The company decided to pivot from hardware manufacturing to cloud software services."
      },
      {
        "id": "w_acquisition",
        "word": "acquisition",
        "pos": "noun",
        "ipa": "/ˌækwɪˈzɪʃn/",
        "level": "B2",
        "vn": "Thương vụ mua lại, sáp nhập doanh nghiệp",
        "collocations": "target of acquisition, major acquisition",
        "example": "The tech giant expanded into gaming through the acquisition of indie studios."
      },
      {
        "id": "w_feasibility",
        "word": "feasibility",
        "pos": "noun",
        "ipa": "/ˌfiːzəˈbɪləti/",
        "level": "C1",
        "vn": "Tính khả thi thực tế của một dự án",
        "collocations": "feasibility study, economic feasibility",
        "example": "Engineers conducted a thorough feasibility study before breaking ground."
      },
      {
        "id": "w_stakeholder",
        "word": "stakeholder",
        "pos": "noun",
        "ipa": "/ˈsteɪkhoʊldər/",
        "level": "B2",
        "vn": "Các bên liên quan (cổ đông, nhân viên, khách hàng, chính quyền)",
        "collocations": "key stakeholders, stakeholder engagement",
        "example": "Corporate decisions must balance the interests of all key stakeholders."
      },
      {
        "id": "w_venture_capital",
        "word": "venture capital",
        "pos": "noun",
        "ipa": "/ˈventʃər ˈkæpɪtl/",
        "level": "B2",
        "vn": "Vốn đầu tư mạo hiểm cho các công ty khởi nghiệp tăng trưởng nhanh",
        "collocations": "raise venture capital, venture capital firm",
        "example": "The artificial intelligence startup secured $20 million in venture capital funding."
      },
      {
        "id": "w_turnover",
        "word": "turnover",
        "pos": "noun",
        "ipa": "/ˈtɜːrnoʊvər/",
        "level": "B2",
        "vn": "Doanh số luân chuyển; hoặc tỷ lệ thay thế nhân sự",
        "collocations": "high staff turnover, annual turnover",
        "example": "A toxic workplace culture invariably results in high staff turnover."
      },
      {
        "id": "w_disruptive",
        "word": "disruptive",
        "pos": "adj",
        "ipa": "/dɪsˈrʌptɪv/",
        "level": "C1",
        "vn": "Có tính đột phá làm đảo lộn cấu trúc thị trường truyền thống",
        "collocations": "disruptive technology, disruptive innovation",
        "example": "Smartphones were a disruptive innovation that completely displaced film cameras."
      }
    ]
  },
  {
    "id": "pack_wealth_investing",
    "name": "Tài Chính, Đầu Tư & Dòng Tiền",
    "icon": "coins",
    "badge": "Chuyên Ngành • Dòng Tiền • Làm Giàu",
    "color": "from-emerald-600 to-teal-700",
    "words": [
      {
        "id": "w_asset",
        "word": "asset",
        "pos": "noun",
        "ipa": "/ˈæset/",
        "level": "B1",
        "vn": "Tài sản sinh ra dòng tiền hoặc gia tăng giá trị",
        "collocations": "income-generating asset, liquid assets",
        "example": "Real estate that produces positive cash flow is considered a valuable asset."
      },
      {
        "id": "w_liability",
        "word": "liability",
        "pos": "noun",
        "ipa": "/ˌlaɪəˈbɪləti/",
        "level": "B2",
        "vn": "Tiêu sản hoặc khoản nợ rút tiền ra khỏi túi",
        "collocations": "short-term liability, personal liabilities",
        "example": "Car payments and high-interest credit card debts are dangerous liabilities."
      },
      {
        "id": "w_compound_interest",
        "word": "compound interest",
        "pos": "noun",
        "ipa": "/ˌkɒmpaʊnd ˈɪntrəst/",
        "level": "B2",
        "vn": "Lãi suất kép (kỳ quan tài chính sinh sôi lợi nhuận)",
        "collocations": "power of compound interest, earn compound interest",
        "example": "Starting to invest at age twenty allows you to fully harness compound interest."
      },
      {
        "id": "w_diversify",
        "word": "diversify",
        "pos": "verb",
        "ipa": "/daɪˈvɜːsɪfaɪ/",
        "level": "B2",
        "vn": "Đa dạng hóa danh mục đầu tư để giảm thiểu rủi ro",
        "collocations": "diversify your portfolio, diversify investments",
        "example": "Do not put all your eggs in one basket; diversify across index funds and cash."
      },
      {
        "id": "w_dividend",
        "word": "dividend",
        "pos": "noun",
        "ipa": "/ˈdɪvɪdend/",
        "level": "B2",
        "vn": "Cổ tức (phần lợi nhuận chi trả cho cổ đông)",
        "collocations": "quarterly dividend, dividend yield",
        "example": "He reinvested all stock dividends to accelerate the compounding of his portfolio."
      },
      {
        "id": "w_liquidity",
        "word": "liquidity",
        "pos": "noun",
        "ipa": "/lɪˈkwɪdəti/",
        "level": "B2",
        "vn": "Tính thanh khoản (khả năng chuyển đổi thành tiền mặt tức thì)",
        "collocations": "high liquidity, liquidity crisis",
        "example": "Cash and Treasury bills offer the highest liquidity during economic downturns."
      },
      {
        "id": "w_volatility",
        "word": "volatility",
        "pos": "noun",
        "ipa": "/ˌvɒləˈtɪləti/",
        "level": "C1",
        "vn": "Mức độ biến động giá dữ dội của thị trường tài chính",
        "collocations": "market volatility, price volatility",
        "example": "Long-term index investors ignore short-term market volatility."
      },
      {
        "id": "w_net_worth",
        "word": "net worth",
        "pos": "noun",
        "ipa": "/ˌnet ˈwɜːrθ/",
        "level": "B1",
        "vn": "Giá trị tài sản ròng (Tổng tài sản trừ đi Tổng nợ)",
        "collocations": "high net worth, calculate net worth",
        "example": "To increase your net worth, buy real assets and ruthlessly reduce liabilities."
      },
      {
        "id": "w_inflation",
        "word": "inflation",
        "pos": "noun",
        "ipa": "/ɪnˈfleɪʃn/",
        "level": "B1",
        "vn": "Lạm phát (sự sụt giảm sức mua của đồng tiền theo thời gian)",
        "collocations": "combat inflation, soaring inflation",
        "example": "Leaving all your savings in cash guarantees losing purchasing power to inflation."
      },
      {
        "id": "w_amortization",
        "word": "amortization",
        "pos": "noun",
        "ipa": "/əˌmɔːrtɪˈzeɪʃn/",
        "level": "C1",
        "vn": "Khấu hao nợ gốc hoặc tài sản vô hình theo thời gian",
        "collocations": "loan amortization, amortization schedule",
        "example": "Reviewing the bank amortization schedule reveals how much interest you pay upfront."
      },
      {
        "id": "w_capital_gain",
        "word": "capital gain",
        "pos": "noun",
        "ipa": "/ˈkæpɪtl ɡeɪn/",
        "level": "B2",
        "vn": "Lợi nhuận vốn thu được khi bán tài sản với giá cao hơn giá mua",
        "collocations": "long-term capital gain, tax on capital gains",
        "example": "Holding investments for more than a year qualifies for lower capital gains tax rates."
      }
    ]
  },
  {
    "id": "pack_tech_ai_data",
    "name": "Công Nghệ Thông Tin & Trí Tuệ Nhân Tạo (AI)",
    "icon": "binary",
    "badge": "Chuyên Ngành • AI • Kỷ Nguyên Số",
    "color": "from-cyan-600 to-blue-700",
    "words": [
      {
        "id": "w_algorithm",
        "word": "algorithm",
        "pos": "noun",
        "ipa": "/ˈælɡərɪðəm/",
        "level": "B1",
        "vn": "Thuật toán xử lý dữ liệu và giải quyết bài toán",
        "collocations": "search algorithm, machine learning algorithm",
        "example": "Recommendation algorithms analyze user behavior to suggest relevant content."
      },
      {
        "id": "w_automate",
        "word": "automate",
        "pos": "verb",
        "ipa": "/ˈɔːtəmeɪt/",
        "level": "B1",
        "vn": "Tự động hóa quy trình lặp đi lặp lại bằng code",
        "collocations": "automate repetitive tasks, fully automated",
        "example": "We can automate data entry workflows to save hundreds of work hours."
      },
      {
        "id": "w_neural_network",
        "word": "neural network",
        "pos": "noun",
        "ipa": "/ˈnjʊərəl ˈnetwɜːk/",
        "level": "B2",
        "vn": "Mạng nơ-ron nhân tạo mô phỏng cấu trúc não bộ",
        "collocations": "deep neural network, train a neural network",
        "example": "Modern LLMs are powered by multi-layered transformer neural networks."
      },
      {
        "id": "w_infrastructure",
        "word": "infrastructure",
        "pos": "noun",
        "ipa": "/ˈɪnfrəstrʌktʃər/",
        "level": "B2",
        "vn": "Hạ tầng máy chủ mạng, hệ thống nền tảng phần mềm",
        "collocations": "cloud infrastructure, robust infrastructure",
        "example": "Migrating infrastructure to AWS drastically reduced operational downtime."
      },
      {
        "id": "w_scalable",
        "word": "scalable",
        "pos": "adj",
        "ipa": "/ˈskeɪləbl/",
        "level": "B2",
        "vn": "Có khả năng mở rộng quy mô linh hoạt khi lưu lượng tăng vọt",
        "collocations": "scalable architecture, scalable system",
        "example": "The architecture must be scalable to handle ten million concurrent users."
      },
      {
        "id": "w_latency",
        "word": "latency",
        "pos": "noun",
        "ipa": "/ˈleɪtənsi/",
        "level": "B2",
        "vn": "Độ trễ truyền dữ liệu mạng hoặc phản hồi máy chủ",
        "collocations": "ultra-low latency, network latency",
        "example": "Edge computing reduces network latency for real-time video streaming."
      },
      {
        "id": "w_cybersecurity",
        "word": "cybersecurity",
        "pos": "noun",
        "ipa": "/ˌsaɪbərsɪˈkjʊərəti/",
        "level": "B2",
        "vn": "An ninh mạng, bảo mật thông tin và chống tin tặc",
        "collocations": "cybersecurity protocol, threat to cybersecurity",
        "example": "Companies invest heavily in cybersecurity to protect customer data from breaches."
      },
      {
        "id": "w_parameter",
        "word": "parameter",
        "pos": "noun",
        "ipa": "/pəˈræmɪtər/",
        "level": "C1",
        "vn": "Tham số mô hình; biến số điều khiển giới hạn tính toán",
        "collocations": "billions of parameters, configuration parameter",
        "example": "The new generative AI model was trained on over 70 billion parameters."
      },
      {
        "id": "w_cryptography",
        "word": "cryptography",
        "pos": "noun",
        "ipa": "/krɪpˈtɒɡrəfi/",
        "level": "C1",
        "vn": "Mật mã học, kỹ thuật mã hóa dữ liệu đầu cuối",
        "collocations": "public-key cryptography, modern cryptography",
        "example": "End-to-end messaging apps rely on advanced asymmetric cryptography."
      },
      {
        "id": "w_dataset",
        "word": "dataset",
        "pos": "noun",
        "ipa": "/ˈdeɪtəset/",
        "level": "B2",
        "vn": "Bộ tập hợp dữ liệu huấn luyện hoặc phân tích",
        "collocations": "massive dataset, clean dataset",
        "example": "Training accurate machine learning models requires high-quality, diverse datasets."
      },
      {
        "id": "w_deployment",
        "word": "deployment",
        "pos": "noun",
        "ipa": "/dɪˈplɔɪmənt/",
        "level": "B2",
        "vn": "Sự triển khai đưa phần mềm lên môi trường máy chủ sản xuất (production)",
        "collocations": "continuous deployment, cloud deployment",
        "example": "Automated CI/CD pipelines enable smooth zero-downtime deployment."
      },
      {
        "id": "w_inference",
        "word": "inference",
        "pos": "noun",
        "ipa": "/ˈɪnfərəns/",
        "level": "C1",
        "vn": "Quá trình mô hình AI suy luận và tạo câu trả lời khi nhận đầu vào",
        "collocations": "model inference, inference latency",
        "example": "Optimizing inference speed allows AI models to run directly on mobile devices."
      }
    ]
  },
  {
    "id": "pack_health_medicine",
    "name": "Y Tế, Thể Chất & Sức Khỏe Tinh Thần",
    "icon": "heart-pulse",
    "badge": "Sức Khỏe • Y Khoa • Thể Chất",
    "color": "from-rose-600 to-pink-600",
    "words": [
      {
        "id": "w_symptom",
        "word": "symptom",
        "pos": "noun",
        "ipa": "/ˈsɪmptəm/",
        "level": "B1",
        "vn": "Triệu chứng bệnh lý cảnh báo cơ thể",
        "collocations": "early symptoms, flu symptoms",
        "example": "Fatigue and mild headaches are often the first symptoms of dehydration."
      },
      {
        "id": "w_prescription",
        "word": "prescription",
        "pos": "noun",
        "ipa": "/prɪˈskrɪpʃn/",
        "level": "B1",
        "vn": "Đơn thuốc kê toa chính thức của bác sĩ",
        "collocations": "fill a prescription, doctor’s prescription",
        "example": "These antibiotics can only be dispensed with an official medical prescription."
      },
      {
        "id": "w_diagnosis",
        "word": "diagnosis",
        "pos": "noun",
        "ipa": "/ˌdaɪəɡˈnəʊsɪs/",
        "level": "B2",
        "vn": "Sự chẩn đoán chính xác căn bệnh",
        "collocations": "accurate diagnosis, early diagnosis",
        "example": "Early diagnosis of cardiovascular diseases significantly improves survival rates."
      },
      {
        "id": "w_chronic",
        "word": "chronic",
        "pos": "adj",
        "ipa": "/ˈkrɒnɪk/",
        "level": "B2",
        "vn": "Mãn tính, kéo dài dai dẳng nhiều năm tháng",
        "collocations": "chronic pain, chronic illness",
        "example": "Regular exercise and a clean diet help prevent chronic metabolic illnesses."
      },
      {
        "id": "w_immune_system",
        "word": "immune system",
        "pos": "noun",
        "ipa": "/ɪˈmjuːn ˌsɪstəm/",
        "level": "B1",
        "vn": "Hệ thống miễn dịch phòng vệ của cơ thể",
        "collocations": "boost the immune system, strong immune system",
        "example": "Adequate deep sleep is fundamental for keeping your immune system robust."
      },
      {
        "id": "w_sedentary",
        "word": "sedentary",
        "pos": "adj",
        "ipa": "/ˈsedntri/",
        "level": "B2",
        "vn": "Ngồi nhiều một chỗ, lười vận động thể chất",
        "collocations": "sedentary lifestyle, sedentary job",
        "example": "A sedentary lifestyle is as harmful to cardiac health as smoking cigarettes."
      },
      {
        "id": "w_stamina",
        "word": "stamina",
        "pos": "noun",
        "ipa": "/ˈstæmɪnə/",
        "level": "B2",
        "vn": "Sức bền, độ dẻo dai thể lực và tinh thần",
        "collocations": "build stamina, physical stamina",
        "example": "Long-distance running builds both cardiovascular stamina and mental grit."
      },
      {
        "id": "w_hypertension",
        "word": "hypertension",
        "pos": "noun",
        "ipa": "/ˌhaɪpəˈtenʃn/",
        "level": "C1",
        "vn": "Bệnh cao huyết áp",
        "collocations": "suffer from hypertension, arterial hypertension",
        "example": "Reducing sodium intake helps manage and lower arterial hypertension."
      },
      {
        "id": "w_rehabilitation",
        "word": "rehabilitation",
        "pos": "noun",
        "ipa": "/ˌriːhəˌbɪlɪˈteɪʃn/",
        "level": "B2",
        "vn": "Quá trình phục hồi chức năng thể chất sau chấn thương",
        "collocations": "physical rehabilitation, rehabilitation center",
        "example": "The athlete underwent six months of rigorous physical rehabilitation following knee surgery."
      },
      {
        "id": "w_placebo",
        "word": "placebo",
        "pos": "noun",
        "ipa": "/pləˈsiːboʊ/",
        "level": "C1",
        "vn": "Giả dược (thuốc vờ dùng trong thí nghiệm mù đôi y học)",
        "collocations": "placebo effect, placebo group",
        "example": "Half of the clinical trial participants received the active vaccine while others received a placebo."
      }
    ]
  },
  {
    "id": "pack_education_science",
    "name": "Giáo Dục, Khoa Học & Học Thuật",
    "icon": "graduation-cap",
    "badge": "Học Thuật • Nghiên Cứu • Tri Thức",
    "color": "from-purple-600 to-indigo-700",
    "words": [
      {
        "id": "w_curriculum",
        "word": "curriculum",
        "pos": "noun",
        "ipa": "/kəˈrɪkjələm/",
        "level": "B2",
        "vn": "Khung chương trình giảng dạy toàn diện",
        "collocations": "school curriculum, core curriculum",
        "example": "The university updated its curriculum to include modern artificial intelligence."
      },
      {
        "id": "w_hypothesis",
        "word": "hypothesis",
        "pos": "noun",
        "ipa": "/haɪˈpɒθəsɪs/",
        "level": "B2",
        "vn": "Giả thuyết khoa học đặt ra để kiểm chứng",
        "collocations": "formulate a hypothesis, test a hypothesis",
        "example": "Scientists conducted controlled experiments to test their hypothesis."
      },
      {
        "id": "w_empirical",
        "word": "empirical",
        "pos": "adj",
        "ipa": "/ɪmˈpɪrɪkl/",
        "level": "C1",
        "vn": "Thực nghiệm, dựa trên số liệu quan sát thực tế",
        "collocations": "empirical evidence, empirical data",
        "example": "Any philosophical theory must be supported by verifiable empirical evidence."
      },
      {
        "id": "w_methodology",
        "word": "methodology",
        "pos": "noun",
        "ipa": "/ˌmeθəˈdɒlədʒi/",
        "level": "B2",
        "vn": "Phương pháp luận nghiên cứu có hệ thống",
        "collocations": "research methodology, rigorous methodology",
        "example": "The researchers explained their rigorous sampling methodology in chapter three."
      },
      {
        "id": "w_plagiarism",
        "word": "plagiarism",
        "pos": "noun",
        "ipa": "/ˈpleɪdʒərɪzəm/",
        "level": "B2",
        "vn": "Hành vi đạo văn, sao chép ý tưởng không trích dẫn",
        "collocations": "accused of plagiarism, avoid plagiarism",
        "example": "Academic institutions enforce strict penalties for any intentional plagiarism."
      },
      {
        "id": "w_paradigm",
        "word": "paradigm",
        "pos": "noun",
        "ipa": "/ˈpærədaɪm/",
        "level": "C1",
        "vn": "Mô hình mẫu mực; hệ hình tư duy khoa học",
        "collocations": "paradigm shift, new paradigm",
        "example": "Quantum computing represents a fundamental paradigm shift in computer science."
      },
      {
        "id": "w_synthesize",
        "word": "synthesize",
        "pos": "verb",
        "ipa": "/ˈsɪnθəsaɪz/",
        "level": "C1",
        "vn": "Tổng hợp, đúc kết các thông tin đa nguồn thành một",
        "collocations": "synthesize information, synthesize findings",
        "example": "A great scholar can synthesize complex research data into clear insights."
      },
      {
        "id": "w_peer_review",
        "word": "peer review",
        "pos": "noun",
        "ipa": "/ˈpɪər rɪvjuː/",
        "level": "B2",
        "vn": "Quy trình bình duyệt học thuật bởi các chuyên gia đầu ngành",
        "collocations": "peer-reviewed journal, undergo peer review",
        "example": "Scientific papers must pass rigorous peer review before being published."
      },
      {
        "id": "w_dissertation",
        "word": "dissertation",
        "pos": "noun",
        "ipa": "/ˌdɪsəˈteɪʃn/",
        "level": "C1",
        "vn": "Luận văn tiến sĩ hoặc công trình nghiên cứu sau đại học",
        "collocations": "write a dissertation, defend a dissertation",
        "example": "She successfully defended her doctoral dissertation on neural plasticity."
      }
    ]
  },
  {
    "id": "pack_environment_nature",
    "name": "Môi Trường, Biến Đổi Khí Hậu & Năng Lượng",
    "icon": "leaf",
    "badge": "Môi Trường • Bền Vững • Sinh Thái",
    "color": "from-emerald-700 to-green-600",
    "words": [
      {
        "id": "w_sustainability",
        "word": "sustainability",
        "pos": "noun",
        "ipa": "/səˌsteɪnəˈbɪləti/",
        "level": "B2",
        "vn": "Sự phát triển bền vững không gây tổn hại tương lai",
        "collocations": "environmental sustainability, long-term sustainability",
        "example": "Enterprises must prioritize environmental sustainability alongside profit."
      },
      {
        "id": "w_renewable",
        "word": "renewable",
        "pos": "adj",
        "ipa": "/rɪˈnjuːəbl/",
        "level": "B1",
        "vn": "Tái tạo được (năng lượng mặt trời, gió, nước)",
        "collocations": "renewable energy, renewable resources",
        "example": "Transitioning to renewable energy is vital to halt irreversible global warming."
      },
      {
        "id": "w_carbon_footprint",
        "word": "carbon footprint",
        "pos": "noun",
        "ipa": "/ˈkɑːrbən ˈfʊtprɪnt/",
        "level": "B2",
        "vn": "Lượng khí thải carbon cá nhân hay tổ chức thải ra",
        "collocations": "reduce carbon footprint, calculate carbon footprint",
        "example": "Cycling and taking public transit drastically reduce your personal carbon footprint."
      },
      {
        "id": "w_biodiversity",
        "word": "biodiversity",
        "pos": "noun",
        "ipa": "/ˌbaɪəʊdaɪˈvɜːrsəti/",
        "level": "B2",
        "vn": "Sự đa dạng sinh học của các loài sinh vật",
        "collocations": "rich biodiversity, preserve biodiversity",
        "example": "Tropical rainforests house over half of the global terrestrial biodiversity."
      },
      {
        "id": "w_deforestation",
        "word": "deforestation",
        "pos": "noun",
        "ipa": "/diːˌfɒrɪˈsteɪʃn/",
        "level": "B2",
        "vn": "Nạn phá rừng bừa bãi làm mất nơi cư trú",
        "collocations": "combat deforestation, rate of deforestation",
        "example": "Deforestation in the Amazon basin threatens global climate stability."
      },
      {
        "id": "w_deplete",
        "word": "deplete",
        "pos": "verb",
        "ipa": "/dɪˈpliːt/",
        "level": "C1",
        "vn": "Làm cạn kiệt nguồn tài nguyên thiên nhiên",
        "collocations": "deplete natural resources, severely depleted",
        "example": "Overfishing has severely depleted marine populations across the Atlantic."
      },
      {
        "id": "w_ecosystem",
        "word": "ecosystem",
        "pos": "noun",
        "ipa": "/ˈiːkəʊsɪstəm/",
        "level": "B1",
        "vn": "Hệ sinh thái tự nhiên hài hòa",
        "collocations": "fragile ecosystem, marine ecosystem",
        "example": "Pollution and rising ocean temperatures damage delicate coral reef ecosystems."
      },
      {
        "id": "w_conservation",
        "word": "conservation",
        "pos": "noun",
        "ipa": "/ˌkɒnsəˈveɪʃn/",
        "level": "B2",
        "vn": "Sự bảo tồn động thực vật hoang dã và môi trường sống",
        "collocations": "wildlife conservation, energy conservation",
        "example": "National parks play a pivotal role in global wildlife conservation."
      }
    ]
  },
  {
    "id": "pack_emotions_mindset",
    "name": "Cảm Xúc, Tâm Lý & Tính Cách Con Người",
    "icon": "smile",
    "badge": "Tâm Lý • Cảm Xúc • Tính Cách",
    "color": "from-violet-600 to-purple-700",
    "words": [
      {
        "id": "w_resilient",
        "word": "resilient",
        "pos": "adj",
        "ipa": "/rɪˈzɪliənt/",
        "level": "B2",
        "vn": "Kiên cường, bền bỉ đứng dậy sau thất bại và nghịch cảnh",
        "collocations": "highly resilient, resilient mind",
        "example": "A resilient mindset turns unexpected failures into valuable life lessons."
      },
      {
        "id": "w_empathy",
        "word": "empathy",
        "pos": "noun",
        "ipa": "/ˈempəθi/",
        "level": "B2",
        "vn": "Sự thấu cảm, khả năng đặt mình vào vị trí người khác",
        "collocations": "show empathy, deep empathy",
        "example": "Practicing genuine empathy builds deep trust in human relationships."
      },
      {
        "id": "w_gratitude",
        "word": "gratitude",
        "pos": "noun",
        "ipa": "/ˈɡrætɪtjuːd/",
        "level": "B1",
        "vn": "Lòng biết ơn chân thành đối với cuộc sống",
        "collocations": "express gratitude, feeling of gratitude",
        "example": "Writing down three things you are thankful for cultivates profound gratitude."
      },
      {
        "id": "w_overwhelmed",
        "word": "overwhelmed",
        "pos": "adj",
        "ipa": "/ˌəʊvərˈwelmd/",
        "level": "B1",
        "vn": "Bị choáng ngợp, quá tải cảm xúc hoặc áp lực",
        "collocations": "feel overwhelmed, emotionally overwhelmed",
        "example": "Take a deep breath whenever you feel overwhelmed by too many demands."
      },
      {
        "id": "w_compassionate",
        "word": "compassionate",
        "pos": "adj",
        "ipa": "/kəmˈpæʃənət/",
        "level": "B2",
        "vn": "Giàu lòng trắc ẩn, nhân ái với mọi người",
        "collocations": "compassionate leader, deeply compassionate",
        "example": "A compassionate doctor treats patients with dignity and warmth."
      },
      {
        "id": "w_assertive",
        "word": "assertive",
        "pos": "adj",
        "ipa": "/əˈsɜːrtɪv/",
        "level": "B2",
        "vn": "Quyết đoán, thẳng thắn bày tỏ ý kiến mà vẫn lịch sự",
        "collocations": "be assertive, assertive communication",
        "example": "Being assertive means standing up for your rights without being aggressive."
      },
      {
        "id": "w_mindfulness",
        "word": "mindfulness",
        "pos": "noun",
        "ipa": "/ˈmaɪndflnəs/",
        "level": "B2",
        "vn": "Chánh niệm, sự chú tâm trọn vẹn vào khoảnh khắc hiện tại",
        "collocations": "practice mindfulness, mindfulness meditation",
        "example": "Daily mindfulness practice reduces anxiety and sharpens cognitive focus."
      },
      {
        "id": "w_serenity",
        "word": "serenity",
        "pos": "noun",
        "ipa": "/səˈrenəti/",
        "level": "C1",
        "vn": "Sự bình an thanh thản tuyệt đối nơi tâm hồn",
        "collocations": "inner serenity, state of serenity",
        "example": "Walking silently in the misty pine forest brought him total inner serenity."
      },
      {
        "id": "w_optimism",
        "word": "optimism",
        "pos": "noun",
        "ipa": "/ˈɒptɪmɪzəm/",
        "level": "B1",
        "vn": "Tinh thần lạc quan, luôn nhìn về tương lai tích cực",
        "collocations": "cautious optimism, sense of optimism",
        "example": "Her infectious optimism inspired the entire team during difficult times."
      },
      {
        "id": "w_temperament",
        "word": "temperament",
        "pos": "noun",
        "ipa": "/ˈtemprəmənt/",
        "level": "B2",
        "vn": "Khí chất, tính khí tự nhiên của một con người",
        "collocations": "calm temperament, artistic temperament",
        "example": "A calm temperament is invaluable when making high-stakes financial decisions."
      }
    ]
  }
];

// -------------------------------------------------------------------------
// ENGINE 3: PHONETIC AND PRONUNCIATION (Âm Vị Học 44 IPA)
// -------------------------------------------------------------------------
window.PHONETIC_IPA_DATA = {
  consonantsKey: [
    { ipa: '/θ/', name: 'Voiceless Dental Fricative', example: 'think, thought, bath', vnMistake: 'Người Việt hay đọc thành âm "th" hoặc "t" tiếng Việt. Cách sửa: Cắn nhẹ đầu lưỡi giữa hai hàm răng và đẩy luồng hơi ra ngoài, không rung cổ họng.' },
    { ipa: '/ð/', name: 'Voiced Dental Fricative', example: 'this, that, mother', vnMistake: 'Hay đọc thành "đ" hoặc "d". Cách sửa: Đặt lưỡi giữa hai răng như /θ/ nhưng làm rung mạnh dây thanh quản.' },
    { ipa: '/ʃ/', name: 'Voiceless Postalveolar', example: 'she, ship, action', vnMistake: 'Hay đọc nhẹ như "s" tiếng Việt thay vì chu môi tròn và đẩy luồng hơi mạnh.' },
    { ipa: '/ʒ/', name: 'Voiced Postalveolar', example: 'vision, measure, pleasure', vnMistake: 'Âm rung hiếm gặp trong tiếng Việt, cần giữ khẩu hình chu môi như /ʃ/ và làm rung dây thanh.' },
    { ipa: '/tʃ/', name: 'Voiceless Affricate', example: 'church, watch, match', vnMistake: 'Hay quên bật âm đuôi /tʃ/ ở cuối từ.' },
    { ipa: '/dʒ/', name: 'Voiced Affricate', example: 'judge, joy, age', vnMistake: 'Hay đọc nhầm thành "d" hoặc "gi", thiếu độ bật nén hơi.' }
  ]
};

// -------------------------------------------------------------------------
// ENGINE 4: GRAMMAR AND SENTENCE LABORATORY (15 Trụ Cột Đầy Đủ Thực Tế)
// -------------------------------------------------------------------------
window.GRAMMAR_15_PILLARS = [
  {
    id: 1,
    name: 'Hiện Tại Đơn vs Hiện Tại Tiếp Diễn (Routines vs Right Now)',
    formula: 'Simple: S + V(s/es) | Continuous: S + am/is/are + V-ing',
    summary: 'Phân định dứt khoát giữa Sự thật hiển nhiên / Thói quen lâu dài (Simple) với Hành động đang xảy ra tạm thời ngay lúc nói (Continuous).',
    coreInsight: 'Người Việt hay dùng lẫn lộn: "I am living in Hanoi" (tạm thời) vs "I live in Hanoi" (quê hương ổn định lâu dài).',
    realLifeContext: 'Dùng khi tự giới thiệu bản thân trong phỏng vấn xin việc hoặc giải thích công việc thường ngày của bạn.',
    mnemonicHook: 'Thói quen lặp lại ➔ Dùng Đơn; Đang làm lúc này ➔ Dùng Tiếp Diễn.',
    wrongVsRight: [
      { wrong: 'I am work at a software company.', right: 'I work at a software company.', reason: 'Công việc ổn định lâu dài là sự thật, phải dùng Hiện tại đơn và không dùng động từ to-be thừa.' },
      { wrong: 'Look! The bus comes.', right: 'Look! The bus is coming.', reason: 'Có từ chỉ dấu "Look!" báo hiệu hành động đang diễn ra trước mắt ➔ Bắt buộc dùng Tiếp diễn.' }
    ],
    practicalExamples: [
      { en: 'I wake up at 6 AM every weekday, but today I am sleeping in because it is Sunday.', vn: 'Tôi thức dậy lúc 6 giờ sáng mỗi ngày trong tuần, nhưng hôm nay tôi ngủ nướng vì là Chủ nhật.' },
      { en: 'Water boils at 100 degrees Celsius.', vn: 'Nước sôi ở 100 độ C (chân lý tự nhiên).' }
    ]
  },
  {
    id: 2,
    name: 'Hiện Tại Hoàn Thành (The Bridge from Past to Now)',
    formula: 'S + have/has + V3 (Past Participle) + [since / for / already / yet]',
    summary: 'Cây cầu nối từ quá khứ kéo dài đến hiện tại, hoặc kinh nghiệm trải nghiệm cuộc đời tính đến thời điểm nói.',
    coreInsight: 'Không bao giờ đi kèm mốc thời gian đã chấm dứt hoàn toàn trong quá khứ (như "yesterday", "in 2010").',
    realLifeContext: 'Dùng để khoe kinh nghiệm làm việc: "I have worked as a developer for 5 years" (vẫn đang làm việc đó đến nay).',
    mnemonicHook: 'Quá khứ bắt đầu ➔ Kéo đến bây giờ ➔ Dùng Have/Has + V3.',
    wrongVsRight: [
      { wrong: 'I lived in London for 3 years (nghĩa là bây giờ đã chuyển đi nơi khác).', right: 'I have lived in London for 3 years (nghĩa là bây giờ vẫn đang sống ở London).', reason: 'Hiện tại hoàn thành biểu thị hành động vẫn đang tiếp tục ở hiện tại.' },
      { wrong: 'I have seen that movie yesterday.', right: 'I saw that movie yesterday.', reason: 'Có mốc thời gian quá khứ cụ thể "yesterday" ➔ Bắt buộc dùng Quá khứ đơn.' }
    ],
    practicalExamples: [
      { en: 'Have you ever visited London?', vn: 'Bạn đã từng đến London bao giờ chưa (kinh nghiệm sống)?' },
      { en: 'I have already finished my project report.', vn: 'Tôi đã hoàn thành xong bản báo cáo dự án rồi (kết quả còn giá trị ở hiện tại).' }
    ]
  },
  {
    id: 3,
    name: 'Quá Khứ Đơn vs Quá Khứ Tiếp Diễn (Storytelling in Action)',
    formula: 'Past Simple: S + V2/ed | Past Continuous: S + was/were + V-ing',
    summary: 'Hành động đang diễn ra làm nền (Continuous) thì có một hành động khác bất ngờ xen vào cắt ngang (Simple).',
    coreInsight: 'Cặp liên từ vàng: WHEN + Quá khứ đơn (hành động xen vào); WHILE + Quá khứ tiếp diễn (hành động nền đang chạy).',
    realLifeContext: 'Dùng khi kể lại sự cố bất ngờ hoặc giải thích lý do đi muộn: "While I was driving, my car broke down."',
    mnemonicHook: 'Đang làm việc êm đềm (V-ing) thì biến cố ập tới (V2/ed).',
    wrongVsRight: [
      { wrong: 'While I cooked, the phone was ringing.', right: 'While I was cooking, the phone rang.', reason: 'Nấu ăn là hành động nền kéo dài (was cooking), điện thoại reo là hành động ngắn cắt ngang (rang).' }
    ],
    practicalExamples: [
      { en: 'I was walking to the train station when it suddenly started raining heavily.', vn: 'Tôi đang đi bộ đến nhà ga thì trời bỗng nhiên đổ mưa như trút nước.' }
    ]
  },
  {
    id: 4,
    name: 'Câu Bị Động Tự Nhiên (Passive Voice in Professional Context)',
    formula: 'Object (được đôn lên làm Chủ ngữ) + Be (chia theo thì) + V3 + [by Agent]',
    summary: 'Dùng khi tác nhân gây ra hành động không quan trọng, hiển nhiên hoặc khi muốn nhấn mạnh kết quả khách quan.',
    coreInsight: 'Văn phong báo chí và học thuật luôn ưu tiên bị động để tránh cảm tính cá nhân.',
    realLifeContext: 'Dùng khi viết email công việc: "Your order has been dispatched" (Đơn hàng của bạn đã được gửi đi) thay vì "We dispatched your order".',
    mnemonicHook: 'Vật chịu tác động đứng đầu ➔ BE + V3.',
    wrongVsRight: [
      { wrong: 'The window was break yesterday.', right: 'The window was broken yesterday.', reason: 'Động từ trong câu bị động bắt buộc phải ở dạng Quá khứ phân từ V3 (broken).' }
    ],
    practicalExamples: [
      { en: 'All personal data is encrypted to protect user confidentiality.', vn: 'Tất cả dữ liệu cá nhân đều được mã hóa để bảo vệ tính bảo mật của người dùng.' }
    ]
  },
  {
    id: 5,
    name: 'Câu Điều Kiện (Conditionals: Type 1, 2, 3)',
    formula: 'Type 1: If + Hiện tại, Will + V | Type 2: If + Quá khứ, Would + V | Type 3: If + Had V3, Would have V3',
    summary: 'Type 1: Có thể xảy ra ở tương lai. Type 2: Giả định trái ngược hiện tại (ước gì). Type 3: Hối tiếc quá khứ (giá như).',
    coreInsight: 'Type 2 động từ to-be chia là "were" cho mọi ngôi (If I were you, I would take that offer).',
    realLifeContext: 'Dùng khi đưa ra lời khuyên tế nhị hoặc phân tích rủi ro trong cuộc họp.',
    mnemonicHook: 'Type 1: Có thật; Type 2: Ước hiện tại; Type 3: Hối tiếc quá khứ.',
    wrongVsRight: [
      { wrong: 'If I will have time, I will call you.', right: 'If I have time, I will call you.', reason: 'Mệnh đề If ở Type 1 không bao giờ dùng "will", chỉ dùng Hiện tại đơn.' }
    ],
    practicalExamples: [
      { en: 'If you practice speaking 15 minutes a day, you will become fluent within six months.', vn: 'Nếu bạn luyện nói 15 phút mỗi ngày, bạn sẽ nói trôi chảy trong vòng 6 tháng (Type 1).' },
      { en: 'If I had studied computer science earlier, I would have developed this app sooner.', vn: 'Nếu trước đây tôi học khoa học máy tính sớm hơn, tôi đã phát triển ứng dụng này sớm hơn rồi (Type 3 hối tiếc).' }
    ]
  },
  {
    id: 6,
    name: 'Mệnh Đề Quan Hệ (Relative Clauses: Who, Which, That, Whose)',
    formula: 'Main Clause + [Who (người) / Which (vật) / That (người hoặc vật) / Whose (sở hữu)] + Clause',
    summary: 'Công cụ đắc lực nhất để ghép 2 câu đơn vụn vặt thành một câu ghép sắc sảo, tự nhiên.',
    coreInsight: 'Mệnh đề có dấu phẩy (Non-defining) không được dùng "That", chỉ dùng "Who" hoặc "Which".',
    realLifeContext: 'Dùng khi mô tả đồng nghiệp hoặc đối tác: "The manager who hired me has 15 years of experience."',
    mnemonicHook: 'Người thì Who; Vật thì Which; Sở hữu thì Whose.',
    wrongVsRight: [
      { wrong: 'The car who was stolen was found.', right: 'The car which was stolen was found.', reason: 'Chiếc xe là vật, phải dùng which hoặc that, không dùng who.' }
    ],
    practicalExamples: [
      { en: 'She is the doctor whose research transformed modern cardiology.', vn: 'Cô ấy là vị bác sĩ mà nghiên cứu của cô đã làm thay đổi ngành tim mạch học hiện đại.' }
    ]
  },
  {
    id: 7,
    name: 'Động Từ Khuyết Thiếu & Suy Đoán (Modals of Deduction)',
    formula: 'Must be (Chắc chắn là) / Might be (Có thể là) / Can’t be (Chắc chắn không thể là)',
    summary: 'Diễn tả mức độ chắc chắn của bạn khi quan sát một hiện tượng thực tế.',
    coreInsight: 'Suy đoán quá khứ: Must have + V3 (Chắc hẳn là đã): "She looks thrilled; she must have passed the exam."',
    realLifeContext: 'Dùng khi phán đoán tình huống trong công việc khi chưa đủ 100% dữ liệu.',
    mnemonicHook: 'Chắc chắn 99% ➔ Must; 50% mơ hồ ➔ Might/Could; Bất khả thi ➔ Can’t.',
    wrongVsRight: [
      { wrong: 'He doesn’t answer the phone. He must be sleep.', right: 'He must be sleeping (hoặc asleep).', reason: 'Sau must be là tính từ hoặc V-ing.' }
    ],
    practicalExamples: [
      { en: 'The lights are off and the door is locked; they must have left the office already.', vn: 'Đèn đã tắt và cửa đã khóa; chắc chắn là họ đã rời văn phòng rồi.' }
    ]
  },
  {
    id: 8,
    name: 'Gerunds vs Infinitives (V-ing vs To-V)',
    formula: 'Enjoy / Mind / Suggest + V-ing vs Decide / Hope / Plan + To-V',
    summary: 'Quy tắc vàng khi hai động từ đứng liền nhau. Một số động từ đổi nghĩa hoàn toàn khi đổi đuôi.',
    coreInsight: 'Remember to lock (Nhớ phải khóa - tương lai) vs Remember locking (Nhớ là đã khóa rồi - quá khứ).',
    realLifeContext: 'Dùng khi bày tỏ sở thích hoặc cam kết kế hoạch hành động.',
    mnemonicHook: 'Hành động đã qua hoặc liên tục ➔ V-ing; Hành động hướng tới tương lai ➔ To-V.',
    wrongVsRight: [
      { wrong: 'I look forward to meet you.', right: 'I look forward to meeting you.', reason: '"To" ở đây là giới từ, sau giới từ bắt buộc là danh động từ V-ing.' }
    ],
    practicalExamples: [
      { en: 'I stopped smoking 5 years ago, but on long drives I often stop to drink a coffee.', vn: 'Tôi đã bỏ hẳn hút thuốc 5 năm trước (stopped smoking), nhưng trên những chuyến đi xa tôi thường dừng xe lại để uống cà phê (stop to drink).' }
    ]
  },
  {
    id: 9,
    name: 'Trật Tự Tính Từ Trong Tiếng Anh (OSASCOMP Formula)',
    formula: 'Opinion ➔ Size ➔ Age ➔ Shape ➔ Color ➔ Origin ➔ Material ➔ Purpose + Noun',
    summary: 'Khi có nhiều tính từ bổ nghĩa cho một danh từ, bắt buộc phải xếp theo trật tự chuẩn xác.',
    coreInsight: 'Người bản xứ cảm nhận trật tự này bằng phản xạ tự nhiên. Xếp sai sẽ nghe rất chói tai.',
    realLifeContext: 'Dùng khi miêu tả sản phẩm, quà tặng hoặc đồ vật trong mua bán đàm phán.',
    mnemonicHook: 'Câu thần chú: Ông (Opinion) Sáu (Size) Ăn (Age) Súp (Shape) Cua (Color) Ở (Origin) Mới (Material) Phát (Purpose).',
    wrongVsRight: [
      { wrong: 'A leather Italian beautiful jacket.', right: 'A beautiful Italian leather jacket.', reason: 'Opinion (beautiful) ➔ Origin (Italian) ➔ Material (leather).' }
    ],
    practicalExamples: [
      { en: 'She wore a stunning long vintage black silk evening dress.', vn: 'Cô ấy mặc một chiếc váy dạ hội lụa đen cổ điển, dài và lộng lẫy.' }
    ]
  },
  {
    id: 10,
    name: 'Mạo Từ A, An, The & Zero Article (Quy Tắc Sinh Tử)',
    formula: 'A/An (Một thứ chưa xác định) | The (Thứ cả người nói và nghe đều biết rõ) | Zero (Chung chung số nhiều)',
    summary: 'Danh từ đếm được số ít KHÔNG BAO GIỜ được đứng trơ trọi một mình.',
    coreInsight: 'Nói về loài chung chung: "Dogs are loyal" (Zero article) thay vì "The dogs are loyal" (những con chó cụ thể này).',
    realLifeContext: 'Dùng trong mọi câu nói hàng ngày, phân biệt giữa một thứ bất kỳ và một thứ duy nhất.',
    mnemonicHook: 'Lần đầu nhắc tới ➔ Dùng A/An; Lần thứ hai nhắc lại ➔ Dùng The.',
    wrongVsRight: [
      { wrong: 'I have cat. Cat is cute.', right: 'I have a cat. The cat is cute.', reason: 'Lần 1 dùng a cat, lần 2 nhắc lại con mèo đó đã xác định nên dùng The cat.' }
    ],
    practicalExamples: [
      { en: 'Life is beautiful, but the life of a professional athlete requires extreme discipline.', vn: 'Cuộc sống nói chung thì tươi đẹp (Zero article), nhưng cuộc đời của một vận động viên cụ thể đòi hỏi kỷ luật sắt thép (The life).' }
    ]
  },
  {
    id: 11,
    name: 'Câu Gián Tiếp & Tường Thuật (Reported Speech)',
    formula: 'S + said (that) + Lùi một thì + Đổi đại từ + Đổi trạng từ thời gian',
    summary: 'Thuật lại lời nói của người khác mà không dùng trích dẫn nguyên văn.',
    coreInsight: 'Hiện tại đơn ➔ Lùi thành Quá khứ đơn; Can ➔ Lùi thành Could; Will ➔ Lùi thành Would.',
    realLifeContext: 'Dùng trong cuộc họp khi báo cáo lại ý kiến của khách hàng hoặc sếp.',
    mnemonicHook: 'Tường thuật lại chuyện cũ ➔ Luôn luôn lùi thì về quá khứ.',
    wrongVsRight: [
      { wrong: 'He said he will come tomorrow.', right: 'He said he would come the next day.', reason: 'Said ở quá khứ ➔ Will phải lùi thành would, tomorrow thành the next day.' }
    ],
    practicalExamples: [
      { en: 'The client confirmed that they had received our proposal and would sign the contract on Monday.', vn: 'Khách hàng đã xác nhận rằng họ đã nhận được đề xuất và sẽ ký hợp đồng vào thứ Hai.' }
    ]
  },
  {
    id: 12,
    name: 'Liên Từ & Từ Nối Mạch Lạc (Transitions & Cohesion)',
    formula: 'Contrast: However, Although, Despite | Cause: Therefore, Because, Due to',
    summary: 'Chất keo dính kết nối các mệnh đề và ý tưởng thành một mạch văn liền lạc, chặt chẽ.',
    coreInsight: 'Tuyệt đối không dùng cả "Although" lẫn "But" trong cùng một câu (Lỗi phổ biến nhất của người Việt).',
    realLifeContext: 'Dùng khi viết email xin việc, lập luận đàm phán hoặc trình bày thuyết trình.',
    mnemonicHook: 'Có Although thì KHÔNG có But; Có Because thì KHÔNG có So.',
    wrongVsRight: [
      { wrong: 'Although it was raining, but we still went out.', right: 'Although it was raining, we still went out.', reason: 'Chỉ được dùng 1 liên từ nối giữa 2 mệnh đề.' }
    ],
    practicalExamples: [
      { en: 'Despite facing fierce market competition, the startup achieved a 40% growth in revenue.', vn: 'Mặc dù đối mặt với sự cạnh tranh khốc liệt trên thị trường, công ty khởi nghiệp vẫn đạt mức tăng trưởng 40% doanh thu.' }
    ]
  },
  {
    id: 13,
    name: 'Cấu Trúc Đảo Ngữ Để Nhấn Mạnh (Inversion for Dramatic Effect)',
    formula: 'Negative Adverb (Never / Rarely / Seldom / Not only) + Trợ động từ + S + V',
    summary: 'Đưa trạng từ phủ định lên đầu câu và đảo trợ động từ lên trước chủ ngữ để tạo điểm nhấn kịch tính.',
    coreInsight: 'Biến câu văn bình thường thành câu văn đỉnh cao học thuật mang tầm vóc diễn giả.',
    realLifeContext: 'Dùng trong các bài thuyết trình truyền cảm hứng hoặc bài viết luận C1.',
    mnemonicHook: 'Trạng từ phủ định đứng đầu ➔ Lập tức đảo trợ động từ lên trước chủ ngữ.',
    wrongVsRight: [
      { wrong: 'Rarely I have seen such dedication.', right: 'Rarely have I seen such dedication.', reason: 'Rarely đứng đầu câu bắt buộc phải đảo trợ động từ "have" lên trước "I".' }
    ],
    practicalExamples: [
      { en: 'Not only did she achieve top marks in her exams, but she also founded an educational non-profit.', vn: 'Cô ấy không những đạt điểm số cao nhất trong các kỳ thi, mà còn sáng lập một tổ chức phi lợi nhuận giáo dục.' }
    ]
  },
  {
    id: 14,
    name: 'Phân Từ & Mệnh Đề Rút Gọn (Participle Clauses)',
    formula: 'V-ing (Chủ động) hoặc V3/ed (Bị động) thay thế cho mệnh đề phụ',
    summary: 'Công cụ rút gọn câu đỉnh cao của các nhà văn bản xứ: Biến câu dài dòng thành câu ngắn gọn, tinh tế.',
    coreInsight: 'Hai hành động phải có CÙNG CHỦ NGỮ mới được phép rút gọn.',
    realLifeContext: 'Dùng khi viết báo cáo tài chính hoặc bài báo khoa học súc tích.',
    mnemonicHook: 'Chủ động làm ➔ Dùng V-ing; Bị tác động ➔ Dùng V3/ed.',
    wrongVsRight: [
      { wrong: 'Walking down the street, a car hit him (sai vì người đi dạo là he, không phải chiếc xe).', right: 'Walking down the street, he was hit by a car.', reason: 'Chủ ngữ sau dấu phẩy phải là chủ thể thực hiện hành động walking.' }
    ],
    practicalExamples: [
      { en: 'Having finished the annual financial audit, the accounting team celebrated with a dinner.', vn: 'Sau khi đã hoàn thành cuộc kiểm toán tài chính hàng năm, đội ngũ kế toán đã ăn mừng bằng một bữa tối thịnh soạn.' }
    ]
  },
  {
    id: 15,
    name: 'Câu Chẻ Nhấn Mạnh (Cleft Sentences: It was X that...)',
    formula: 'It is/was + [Thành phần cần nhấn mạnh] + that/who + [Phần còn lại]',
    summary: 'Chiếu đèn pha vào đúng đối tượng hoặc nguyên nhân mà bạn muốn người nghe chú ý tuyệt đối.',
    coreInsight: '"John broke the window" ➔ Nhấn mạnh John: "It was John who broke the window!" (Chính John chứ không phải ai khác).',
    realLifeContext: 'Dùng khi đính chính hiểu lầm hoặc bảo vệ quan điểm trong tranh luận.',
    mnemonicHook: 'Muốn chiếu đèn vào ai ➔ Đặt người đó vào giữa: It is/was [AI ĐÓ] that...',
    wrongVsRight: [
      { wrong: 'It was yesterday when I called you.', right: 'It was yesterday that I called you.', reason: 'Trong cấu trúc câu chẻ, dùng "that" làm từ nối chuẩn mực.' }
    ],
    practicalExamples: [
      { en: 'It is through deliberate daily practice that true mastery of the English language is attained.', vn: 'Chính thông qua việc luyện tập có chủ đích mỗi ngày mà sự tinh thông tiếng Anh đích thực mới đạt được.' }
    ]
  }
];

// -------------------------------------------------------------------------
// ENGINE 5: LISTENING INTELLIGENCE (Kho Bài Nghe Đa Tầng Từ Cơ Bản Đến Nâng Cao)
// -------------------------------------------------------------------------
window.LISTENING_LIBRARY_DATA = [
  // CẤP ĐỘ 1: CƠ BẢN (A1-A2) - GIAO TIẾP HÀNG NGÀY
  {
    id: 'listen_daily_coffee',
    title: 'Ordering at a London Coffee Shop',
    titleVn: 'Gọi Đồ Uống & Bánh Tại Quán Cà Phê London',
    category: 'daily',
    categoryName: 'Giao Tiếp Hàng Ngày',
    level: 'A1 - A2',
    duration: '1:10',
    audioText: "Good morning! Can I get an oat milk latte to go, please? And could you add a shot of hazelnut syrup? Also, I would like to know if that blueberry muffin is fresh today. Great, I will take one of those as well. Can I pay by contactless card? Perfect, keep the change and have a wonderful day!",
    speedOptions: [0.75, 1.0, 1.25],
    dictationSentences: [
      { text: "Can I get an oat milk latte to go, please?", hint: "Cụm gọi đồ: 'to go' (mang đi)." },
      { text: "Can I pay by contactless card?", hint: "Thanh toán chạm: 'contactless card'." }
    ],
    questions: [
      {
        question: "What kind of milk does the customer request?",
        options: ["Cow milk", "Oat milk", "Soy milk", "Almond milk"],
        correctIndex: 1
      },
      {
        question: "How does the customer prefer to pay?",
        options: ["Cash in pounds", "Contactless card", "Bank transfer", "Cryptocurrency"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'listen_daily_airport',
    title: 'Navigating Heathrow Airport & Boarding Gate',
    titleVn: 'Làm Thủ Tục Check-in & Lên Máy Bay Tại Sân Bay',
    category: 'daily',
    categoryName: 'Giao Tiếp Hàng Ngày',
    level: 'A1 - A2',
    duration: '1:25',
    audioText: "Good afternoon, here is my passport and boarding pass. I only have one carry-on backpack, so I do not need to check any luggage today. Could you please confirm if this flight is boarding at gate twenty-four? Also, is there any delay due to the weather? Thank you so much for your assistance, I appreciate your help.",
    speedOptions: [0.75, 1.0, 1.25],
    dictationSentences: [
      { text: "I only have one carry-on backpack today.", hint: "Hành lý xách tay: 'carry-on backpack'." },
      { text: "Thank you so much for your assistance.", hint: "Cảm ơn lịch sự: 'assistance'." }
    ],
    questions: [
      {
        question: "How many pieces of checked luggage does the passenger have?",
        options: ["Two large suitcases", "None, only a carry-on backpack", "One bag", "Three bags"],
        correctIndex: 1
      }
    ]
  },

  // CẤP ĐỘ 2: TRUNG CẤP (B1-B2) - CÔNG SỞ & ĐÀM PHÁN
  {
    id: 'listen_work_interview',
    title: 'Job Interview & Salary Negotiation',
    titleVn: 'Phỏng Vấn Xin Việc & Đàm Phán Thu Nhập Tại Công Ty Tech',
    category: 'career',
    categoryName: 'Công Sở & Sự Nghiệp',
    level: 'B1 - B2',
    duration: '1:40',
    audioText: "Thank you for this opportunity. Over the past four years, I have successfully led a cross-functional software team to deliver high-impact web applications. My core strength lies in bridging technical architecture with user experience. Regarding compensation, based on current industry benchmarks and the responsibilities of this leadership position, I am seeking an annual base salary in the range of ninety to one hundred thousand dollars, alongside performance incentives.",
    speedOptions: [0.75, 1.0, 1.25],
    dictationSentences: [
      { text: "My core strength lies in bridging technical architecture with user experience.", hint: "Cụm 'core strength lies in'." },
      { text: "I am seeking an annual base salary based on industry benchmarks.", hint: "Thu nhập hàng năm: 'annual base salary'." }
    ],
    questions: [
      {
        question: "What is the candidate's primary strength?",
        options: ["Graphic illustration", "Bridging technical architecture with user experience", "Financial accounting", "Customer support calls"],
        correctIndex: 1
      }
    ]
  },

  // CẤP ĐỘ 3: NÂNG CAO (B2-C1) - CHUYÊN NGÀNH CÔNG NGHỆ AI & TÀI CHÍNH
  {
    id: 'listen_spec_agi',
    title: 'The Evolutionary Leap toward Artificial General Intelligence (AGI)',
    titleVn: 'Bước Nhảy Vọt Hướng Tới Trí Tuệ Nhân Tạo Tổng Hợp (AGI)',
    category: 'tech',
    categoryName: 'Chuyên Ngành: AI & Công Nghệ',
    level: 'B2 - C1',
    duration: '1:50',
    audioText: "The transition from narrow machine learning models to Artificial General Intelligence represents a profound inflection point in human civilization. Rather than merely optimizing discrete pattern recognition tasks, next-generation frontier models synthesize multi-modal reasoning, autonomous tool-use, and long-horizon strategic planning. However, computer scientists emphasize that robust alignment mechanisms must be rigorously verified to ensure these autonomous agents remain benevolent and accountable to human values.",
    speedOptions: [0.75, 1.0, 1.25],
    dictationSentences: [
      { text: "Next-generation models synthesize multi-modal reasoning and strategic planning.", hint: "Cụm 'multi-modal reasoning'." },
      { text: "Robust alignment mechanisms must be rigorously verified.", hint: "Cụm 'rigorously verified'." }
    ],
    questions: [
      {
        question: "What must be rigorously verified according to computer scientists?",
        options: ["Cryptocurrency mining speeds", "Robust alignment mechanisms to human values", "Advertising click-through rates", "Hardware manufacturing costs"],
        correctIndex: 1
      }
    ]
  },
  {
    id: 'listen_spec_finance',
    title: 'Behavioral Economics & High-Frequency Liquidity',
    titleVn: 'Kinh Tế Học Hành Vi & Thanh Khoản Thị Trường Thuật Toán',
    category: 'finance',
    categoryName: 'Chuyên Ngành: Kinh Tế & Tài Chính',
    level: 'B2 - C1',
    duration: '1:45',
    audioText: "Traditional macroeconomic equilibrium models assume rational market participants operating with symmetrical information. Yet, empirical evidence from modern financial crises reveals that asset prices are overwhelmingly dictated by behavioral heuristics, such as loss aversion and herd mentality. In microsecond algorithmic trading, an abrupt evaporation of liquidity can trigger cascading margin calls, turning a minor valuation discrepancy into systemic flash crashes.",
    speedOptions: [0.75, 1.0, 1.25],
    dictationSentences: [
      { text: "Asset prices are overwhelmingly dictated by behavioral heuristics.", hint: "Thuật ngữ 'behavioral heuristics'." },
      { text: "An abrupt evaporation of liquidity can trigger cascading margin calls.", hint: "Cụm 'evaporation of liquidity'." }
    ],
    questions: [
      {
        question: "What dictates asset prices during market crises according to empirical evidence?",
        options: ["Perfect rational calculations", "Behavioral heuristics like loss aversion and herd mentality", "Government decrees alone", "Zero-sum lotteries"],
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
// ENGINE 7: READING INTELLIGENCE (Thư Viện Bài Đọc & Điểm Danh Đọc Mỗi Ngày)
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
  },
  {
    id: 'read_2',
    title: 'The Psychology of Deep Work in a Distracted World',
    level: 'B2',
    wordCount: 210,
    genre: 'Psychology & Productivity',
    text: `In an era dominated by instantaneous notifications and algorithmically driven algorithmic feeds, the ability to perform deep work is becoming increasingly rare and simultaneously exceedingly valuable. Deep work, as defined by cognitive scientists, refers to professional activities performed in a state of distraction-free concentration that push your cognitive capabilities to their limits.

When you switch tasks rapidly—checking an email while attempting to write a complex analytical document—your attention does not immediately follow. A cognitive residue remains stuck thinking about the previous message. Over time, chronic multitasking severely degrades your working memory capacity and prevents the synthesis of original, high-value insights. True intellectual breakthroughs require deliberate, scheduled blocks of monastic solitude.`,
    vocabularyPicks: [
      { word: 'cognitive residue', ipa: '/ˈkɒɡnətɪv ˈrezɪdjuː/', meaning: 'Dư lượng nhận thức (sự phân tâm còn vương lại từ việc trước)' },
      { word: 'solitude', ipa: '/ˈsɒlətjuːd/', meaning: 'Sự tĩnh lặng một mình để chiêm nghiệm' },
      { word: 'exceedingly', ipa: '/ɪkˈsiːdɪŋli/', meaning: 'Cực kỳ, tột bậc' }
    ],
    questions: [
      {
        question: 'What is deep work?',
        options: ['Working overtime late at night', 'Distraction-free concentration pushing cognitive limits', 'Checking emails constantly', 'Surfing scientific articles'],
        correctIndex: 1
      }
    ]
  }
];

// -------------------------------------------------------------------------
// ENGINE 8: WRITING INTELLIGENCE (Lộ Trình Viết Thực Chiến & Sửa Câu)
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
      title: 'Viết email công việc: Xin phép nghỉ ốm chuyên nghiệp',
      prompt: 'Viết một email ngắn gửi cho người quản lý xin nghỉ 1 ngày vì bị cảm sốt và bàn giao công việc khẩn cấp cho đồng nghiệp.',
      hint: 'Cần có: Lời chào lịch sự, lý do vắng mặt, người hỗ trợ thay thế, cam kết cập nhật tiến độ.',
      sampleModel: 'Dear Mr. Davies,\n\nI am writing to let you know that I am feeling unwell with a high fever today and will not be able to attend the office. I have briefed Sarah to handle any urgent client inquiries in my absence. I will monitor my email periodically and expect to return tomorrow.\n\nBest regards,\nAlex Nguyen'
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
    listeningTarget: 'listen_daily_coffee',
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
    listeningTarget: 'listen_daily_coffee',
    speakingPrompt: 'Explain how to make your favorite beverage or meal.',
    writingTask: 'Write a short restaurant review using 3 new food collocations.'
  },
  {
    dayNumber: 3,
    dayOfWeek: 'Thursday (Thứ Năm)',
    theme: 'Career, Job Interview & Professional Negotiation',
    focusDistrict: 'the_city_london',
    vocabTarget: ['deadline', 'negotiate', 'collaborate', 'competence'],
    grammarFocus: 'Modal Verbs of Deduction & Professional Politeness',
    listeningTarget: 'listen_work_interview',
    speakingPrompt: 'Explain your greatest professional achievement during an interview.',
    writingTask: 'Draft a short polite follow-up email after an interview.'
  },
  {
    dayNumber: 4,
    dayOfWeek: 'Saturday (Thứ Bảy)',
    theme: 'Technology, AI & Future of Civilization',
    focusDistrict: 'ucl_university',
    vocabTarget: ['algorithm', 'automate', 'infrastructure', 'scalable'],
    grammarFocus: 'Conditionals Type 1, 2, 3 & Complex Transitions',
    listeningTarget: 'listen_spec_agi',
    speakingPrompt: 'Discuss whether artificial intelligence will empower or replace knowledge workers.',
    writingTask: 'Construct an academic paragraph explaining the societal impact of automation.'
  }
];
