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
    id: 'pack_daily_life',
    name: 'Giao Tiếp & Sinh Hoạt Thường Ngày',
    icon: 'coffee',
    badge: 'Đời Sống • Giao Tiếp • Bắt Buộc',
    color: 'from-amber-600 to-yellow-600',
    words: [
      { id: 'w_commute', word: 'commute', pos: 'v / n', ipa: '/kəˈmjuːt/', vn: 'Đi lại hàng ngày giữa nhà và nơi làm việc', collocations: 'daily commute, long commute', example: 'It takes me 40 minutes to commute to the office by metro.' },
      { id: 'w_errand', word: 'errand', pos: 'noun', ipa: '/ˈerənd/', vn: 'Việc vặt cần chạy ra ngoài làm (đi chợ, gửi bưu điện, đón con)', collocations: 'run an errand, have errands to do', example: 'I need to run a few errands before the supermarkets close.' },
      { id: 'w_groceries', word: 'groceries', pos: 'noun pl.', ipa: '/ˈɡrəʊsəriz/', vn: 'Thực phẩm và hàng bách hóa sinh hoạt', collocations: 'buy groceries, grocery store', example: 'She spent fifty dollars on weekly groceries at the local market.' },
      { id: 'w_catch_up', word: 'catch up', pos: 'phrasal verb', ipa: '/kætʃ ʌp/', vn: 'Gặp gỡ hàn huyên, cập nhật tin tức sau thời gian dài không gặp', collocations: 'catch up with someone, catch up over coffee', example: 'Let’s grab lunch this Saturday to catch up on everything!' },
      { id: 'w_convenient', word: 'convenient', pos: 'adjective', ipa: '/kənˈviːniənt/', vn: 'Tiện lợi, thuận tiện cho sinh hoạt', collocations: 'highly convenient, convenient location', example: 'Living near a subway station is extremely convenient for my schedule.' },
      { id: 'w_exhausted', word: 'exhausted', pos: 'adjective', ipa: '/ɪɡˈzɔːstɪd/', vn: 'Kiệt sức hoàn toàn, mệt rã rời', collocations: 'physically exhausted, feel exhausted', example: 'After working 12 hours straight, he was completely exhausted.' }
    ]
  },
  {
    id: 'pack_work_career',
    name: 'Công Sở, Phỏng Vấn & Đàm Phán',
    icon: 'briefcase',
    badge: 'Sự Nghiệp • Đàm Phán • Chuyên Nghiệp',
    color: 'from-blue-600 to-indigo-600',
    words: [
      { id: 'w_deadline', word: 'deadline', pos: 'noun', ipa: '/ˈdedlaɪn/', vn: 'Hạn chót hoàn thành nhiệm vụ', collocations: 'meet a deadline, miss a deadline, tight deadline', example: 'The whole engineering team worked overtime to meet the client’s deadline.' },
      { id: 'w_collaborate', word: 'collaborate', pos: 'verb', ipa: '/kəˈlæbəreɪt/', vn: 'Hợp tác chặt chẽ cùng nhau thực hiện dự án', collocations: 'collaborate with sb, collaborate on a project', example: 'Designers and developers must collaborate closely to build seamless apps.' },
      { id: 'w_negotiate', word: 'negotiate', pos: 'verb', ipa: '/nɪˈɡəʊʃieɪt/', vn: 'Thương lượng, đàm phán quyền lợi hoặc giá cả', collocations: 'negotiate a contract, negotiate a higher salary', example: 'She successfully negotiated a 20% salary increase during her annual review.' },
      { id: 'w_delegate', word: 'delegate', pos: 'verb', ipa: '/ˈdelɪɡeɪt/', vn: 'Ủy quyền, giao việc cho cấp dưới', collocations: 'delegate tasks, delegate authority', example: 'An effective manager knows how to delegate routine tasks to focus on strategy.' },
      { id: 'w_competence', word: 'competence', pos: 'noun', ipa: '/ˈkɒmpɪtəns/', vn: 'Năng lực chuyên môn vững vàng, khả năng hoàn thành công việc', collocations: 'core competence, professional competence', example: 'His technical competence was demonstrated during the live coding interview.' }
    ]
  },
  {
    id: 'pack_tech_ai',
    name: 'Công Nghệ Thông Tin & Trí Tuệ Nhân Tạo (AI)',
    icon: 'binary',
    badge: 'Chuyên Ngành • AI • Kỷ Nguyên Số',
    color: 'from-cyan-600 to-blue-700',
    words: [
      { id: 'w_algorithm', word: 'algorithm', pos: 'noun', ipa: '/ˈælɡərɪðəm/', vn: 'Thuật toán xử lý dữ liệu và bài toán tính toán', collocations: 'search algorithm, machine learning algorithm', example: 'Recommendation algorithms analyze your viewing habits to suggest videos.' },
      { id: 'w_automate', word: 'automate', pos: 'verb', ipa: '/ˈɔːtəmeɪt/', vn: 'Tự động hóa quy trình bằng phần mềm hoặc máy móc', collocations: 'automate repetitive tasks, fully automated', example: 'We can automate invoice processing to save 20 hours each week.' },
      { id: 'w_neural_network', word: 'neural network', pos: 'noun', ipa: '/ˈnjʊərəl ˈnetwɜːk/', vn: 'Mạng nơ-ron nhân tạo mô phỏng não bộ', collocations: 'deep neural network, train a neural network', example: 'Modern chatbots are powered by transformer-based neural networks.' },
      { id: 'w_infrastructure', word: 'infrastructure', pos: 'noun', ipa: '/ˈɪnfrəstrʌktʃər/', vn: 'Cơ sở hạ tầng máy chủ và mạng lưới', collocations: 'cloud infrastructure, critical infrastructure', example: 'Migrating our infrastructure to cloud servers drastically reduced downtime.' },
      { id: 'w_scalable', word: 'scalable', pos: 'adjective', ipa: '/ˈskeɪləbl/', vn: 'Có khả năng mở rộng quy mô linh hoạt khi người dùng tăng vọt', collocations: 'scalable architecture, scalable business model', example: 'The architecture must be scalable to handle millions of simultaneous users.' }
    ]
  },
  {
    id: 'pack_finance_wealth',
    name: 'Tài Chính, Đầu Tư & Kinh Doanh',
    icon: 'coins',
    badge: 'Chuyên Ngành • Dòng Tiền • Làm Giàu',
    color: 'from-emerald-600 to-teal-700',
    words: [
      { id: 'w_asset', word: 'asset', pos: 'noun', ipa: '/ˈæset/', vn: 'Tài sản sinh ra dòng tiền hoặc gia tăng giá trị', collocations: 'income-generating asset, liquid assets', example: 'Real estate that produces positive cash flow is considered a valuable asset.' },
      { id: 'w_liability', word: 'liability', pos: 'noun', ipa: '/ˌlaɪəˈbɪləti/', vn: 'Tiêu sản hoặc khoản nợ rút tiền ra khỏi túi hàng tháng', collocations: 'short-term liability, personal liabilities', example: 'Car payments and high-interest credit card debts are dangerous liabilities.' },
      { id: 'w_compound_interest', word: 'compound interest', pos: 'noun', ipa: '/ˌkɒmpaʊnd ˈɪntrəst/', vn: 'Lãi suất kép (tiền lãi sinh ra tiền lãi theo thời gian)', collocations: 'power of compound interest, earn compound interest', example: 'Starting to invest at age twenty allows you to fully harness compound interest.' },
      { id: 'w_diversify', word: 'diversify', pos: 'verb', ipa: '/daɪˈvɜːsɪfaɪ/', vn: 'Đa dạng hóa danh mục đầu tư để giảm thiểu rủi ro', collocations: 'diversify your portfolio, diversify investments', example: 'Do not put all your eggs in one basket; diversify across index funds and cash.' },
      { id: 'w_dividend', word: 'dividend', pos: 'noun', ipa: '/ˈdɪvɪdend/', vn: 'Cổ tức (lợi nhuận doanh nghiệp chi trả cho cổ đông)', collocations: 'quarterly dividend, dividend yield', example: 'He reinvested all stock dividends to accelerate the growth of his portfolio.' }
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
