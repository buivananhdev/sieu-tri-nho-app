// ==========================================
// THƯ VIỆN SÁCH TINH HOA (7 NỐT NHẠC) - DATA REPOSITORY
// Chuẩn hóa tri thức theo phương pháp "Hút Cạn Tinh Hoa Trong 15 - 30 Phút"
// ==========================================

const BOOKS_GENRES = [
  { id: 'all', name: 'Tất Cả Thể Loại', icon: 'layers' },
  { id: 'finance', name: 'Tài Chính & Đầu Tư', icon: 'coins' },
  { id: 'psychology', name: 'Tâm Lý & Tư Duy', icon: 'brain' },
  { id: 'habits', name: 'Thói Quen & Hiệu Suất', icon: 'zap' },
  { id: 'strategy', name: 'Chiến Lược & Lãnh Đạo', icon: 'swords' }
];

const MASTER_BOOKS_DATA = [
  {
    id: 'rich_dad_poor_dad',
    title: 'Cha Giàu Cha Nghèo',
    subTitle: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    year: '1997',
    genreId: 'finance',
    genreName: 'Tài Chính & Đầu Tư',
    badge: 'Kinh Điển Khai Sáng Tài Chính',
    readingTime: '15 Phút',
    color: 'from-amber-600 via-yellow-600 to-amber-700',
    icon: 'wallet-cards',
    shortDesc: 'Cuốn sách đập tan ảo tưởng về lương bổng và định nghĩa lại bản chất của Tài sản vs Tiêu sản để đạt tự do tài chính đích thực.',
    
    // TẦNG 1: Ý NIỆM TỐI THƯỢNG
    bigIdea: 'Người nghèo và trung lưu làm việc vì tiền. Người giàu bắt tiền làm việc cật lực cho mình.',
    bigIdeaQuote: 'Người nghèo thường nói: "Tôi không mua nổi thứ đó." Người giàu tự hỏi: "Làm thế nào để tôi có thể mua được thứ đó?" - Một câu hỏi kích hoạt trí não tư duy, một câu nói đóng chặt cánh cửa tư duy.',

    // TẦNG 2: BỘ NỐT NHẠC NGUYÊN LÝ CỐT LÕI
    coreNotes: [
      {
        number: 1,
        title: 'Phân Biệt Sinh Tử: Tài Sản vs Tiêu Sản',
        rule: 'Tài sản là thứ đút tiền vào túi bạn. Tiêu sản là thứ rút tiền ra khỏi túi bạn.',
        explanation: 'Sai lầm chết người của đa số mọi người là coi căn nhà mình đang ở hay chiếc xe hơi trả góp là tài sản lớn nhất. Sự thật: Nếu một thứ bạn phải liên tục trả lãi, bảo dưỡng, đóng thuế mà không sinh ra một đồng tiền mặt nào ➔ Đó là Tiêu sản! Người giàu chỉ tập trung mua những thứ tự đẻ ra dòng tiền (Bất động sản cho thuê, cổ tức, trái phiếu, bản quyền).',
        realExample: 'Mua chiếc xe máy SH 100 triệu: Nếu mua để đi chơi, đổ xăng, bảo dưỡng ➔ Tiêu sản. Nhưng nếu mua chiếc xe tải 100 triệu cho thuê chạy hàng mỗi tháng thu về 5 triệu tiền lãi ròng ➔ Tài sản.'
      },
      {
        number: 2,
        title: 'Cái Bẫy "Vòng Chuột Chạy" (The Rat Race)',
        rule: 'Thu nhập tăng không giải quyết được vấn đề tài chính, nó chỉ phóng đại thói quen chi tiêu kém cỏi.',
        explanation: 'Khi lương 10 triệu, người ta chi tiêu 10 triệu. Khi lên chức lương 30 triệu, họ chuyển sang thuê nhà đẹp hơn, mua xe xịn hơn, ăn nhà hàng sang hơn và nợ thẻ tín dụng nhiều hơn. Cuối cùng, dù kiếm được bao nhiêu tiền họ vẫn phải thức dậy mỗi sáng đi cày để trả hóa đơn tháng sau. Họ bị kẹt trong chiếc lồng quay của chú chuột bạch.',
        realExample: 'Nhiều bác sĩ, kỹ sư kiếm hàng trăm triệu mỗi tháng nhưng vẫn luôn căng thẳng về tiền bạc vì chi phí sinh hoạt (tiêu sản) luôn tăng bằng hoặc vượt tốc độ tăng lương.'
      },
      {
        number: 3,
        title: 'Quy Luật Cột Tài Sản: Tập Trung Tích Lũy Gà Đẻ Trứng Vàng',
        rule: 'Đừng khoe Cột Thu Nhập (lương tháng), hãy nhìn vào Cột Tài Sản (thứ sinh tiền khi bạn đang ngủ).',
        explanation: 'Người thành công luôn áp dụng nguyên tắc: "Trả cho mình trước tiên" (Pay yourself first). Nhận được bất kỳ khoản tiền nào, họ trích ngay 20-30% đút thẳng vào Cột Tài Sản để mua tài sản sinh lời trước, sau đó mới xoay xở chi tiêu trong số còn lại. Người nghèo làm ngược lại: Chi tiêu hết cho các nhu cầu, nếu còn thừa mới đem tiết kiệm (thường là không bao giờ còn thừa).',
        realExample: 'Người giàu chỉ mua đồ xa xỉ (đồng hồ Rolex, siêu xe) bằng dòng tiền do Cột Tài Sản tạo ra (tiền lãi cho thuê nhà), tuyệt đối không bao giờ rút vốn hay dùng tiền lương cày cuốc để mua đồ xa xỉ.'
      },
      {
        number: 4,
        title: 'Trí Tuệ Tài Chính & Quyền Lực Của Doanh Nghiệp',
        rule: 'Người làm công: Kiếm tiền ➔ Đóng thuế ➔ Chi tiêu phần còn lại. Doanh nghiệp: Kiếm tiền ➔ Chi tiêu hợp lệ ➔ Đóng thuế trên phần còn lại.',
        explanation: 'Hiểu biết về luật pháp và thuế là vũ khí bí mật của người giàu. Bằng cách thành lập pháp nhân doanh nghiệp, họ chi trả các chi phí nghiên cứu, ăn uống tiếp khách, di chuyển phục vụ công việc trước, rồi mới nộp thuế trên khoản lợi nhuận ròng cuối cùng.',
        realExample: 'Cùng một bữa ăn đàm phán đối tác, cá nhân đi làm công phải trả bằng tiền lương sau thuế (đã bị khấu trừ thuế TNCN 20-35%), trong khi doanh nghiệp đưa vào chi phí hợp lý được khấu trừ thuế.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC
    actionAlgorithm: [
      {
        trigger: 'Khi chuẩn bị rút ví mua một món đồ tiêu dùng giá trị lớn (>10% thu nhập tháng)',
        action: 'Dừng lại 48 giờ và tự hỏi: "Thứ này sẽ đút tiền vào túi mình hay rút tiền ra khỏi túi mình?". Nếu rút tiền ra ➔ Từ chối hoặc chỉ mua khi Cột tài sản đã sinh đủ dòng tiền trang trải.'
      },
      {
        trigger: 'Vào ngày nhận lương/thu nhập mỗi tháng',
        action: 'Kích hoạt ngay lệnh tự động chuyển tối thiểu 20% sang tài khoản tích sản đầu tư (cổ phiếu cơ bản, quỹ chỉ số, vàng, đất), coi như khoản tiền này không hề tồn tại. Chi tiêu sinh hoạt trên 80% còn lại.'
      },
      {
        trigger: 'Khi muốn nâng cấp phong cách sống (mua xe mới, đổi điện thoại)',
        action: 'Ra điều kiện cho bản thân: Phải tạo ra một tài sản sinh lời mới có dòng tiền hàng tháng bằng đúng chi phí khấu hao/bảo dưỡng của món đồ đó trước khi được phép mua.'
      }
    ],

    // TẦNG 4: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Chiếc Ví Da Vàng Hai Van Nước',
      visualDescription: 'Hình dung một chiếc ví da màu vàng rực rỡ đặt trên bàn làm việc. Bên trái là một vòi nước bằng vàng tự động phun tiền ào ào vào ngăn ví (Tài sản). Bên phải là một lỗ thủng rỉ nước làm tiền rơi vãi xuống sàn (Tiêu sản).',
      lociLocation: 'Đặt tại Mặt Bàn Tiếp Khách trong Cung Điện Ký Ức của bạn.',
      sensoryCue: 'Cảm nhận sức nặng của thỏi vàng trong tay và nghe tiếng đồng xu vàng rơi leng keng vui tai.'
    }
  },

  {
    id: 'psychology_of_money',
    title: 'Tâm Lý Học Về Tiền',
    subTitle: 'The Psychology of Money',
    author: 'Morgan Housel',
    year: '2020',
    genreId: 'finance',
    genreName: 'Tài Chính & Đầu Tư',
    badge: 'Bestseller Toàn Cầu Về Hành Vi',
    readingTime: '15 Phút',
    color: 'from-emerald-600 via-teal-600 to-cyan-700',
    icon: 'coins',
    shortDesc: 'Lý giải vì sao thành công tài chính không phụ thuộc vào IQ hay bảng tính Excel, mà nằm ở khả năng kiểm soát lòng tham và nỗi sợ hãi.',

    // TẦNG 1: Ý NIỆM TỐI THƯỢNG
    bigIdea: 'Thành công tài chính không phải là một môn khoa học chính xác, mà là một kỹ năng mềm: Cách bạn hành xử quan trọng hơn nhiều so với việc bạn thông minh cỡ nào.',
    bigIdeaQuote: 'Giàu có là thứ bạn không nhìn thấy. Đó là những chiếc xe chưa mua, những chiếc đồng hồ chưa đeo, những chiếc vé máy bay hạng thương gia bị từ chối.',

    // TẦNG 2: BỘ NỐT NHẠC NGUYÊN LÝ CỐT LÕI
    coreNotes: [
      {
        number: 1,
        title: 'Không Ai Điên Cả (No One\'s Crazy)',
        rule: 'Mỗi người đưa ra quyết định tiền bạc dựa trên những trải nghiệm độc nhất trong đời họ.',
        explanation: 'Người lớn lên trong thời kỳ siêu lạm phát sẽ nhìn tiền khác với người lớn lên trong thời kỳ chứng khoán bùng nổ. Đừng phán xét quyết định của người khác là ngu ngốc hay điên rồ; họ chỉ đang phản xạ với góc nhìn thế giới mà họ đã trải qua. Hiểu điều này giúp bạn không bị đám đông lôi kéo.',
        realExample: 'Một người sinh năm 1970 chứng kiến thị trường chứng khoán tăng giá suốt tuổi 20-30 sẽ đầu tư rất hăng hái; trong khi người sinh năm 1950 chứng kiến khủng hoảng kinh tế sẽ cực kỳ sợ hãi cổ phiếu.'
      },
      {
        number: 2,
        title: 'Bí Mật Thực Sự Của Warren Buffett: Lãi Suất Kép & Thời Gian',
        rule: 'Không phải là tỷ suất sinh lời kỷ lục, mà là khả năng tồn tại bền bỉ qua thời gian dài.',
        explanation: 'Hơn 99% tài sản của Warren Buffett được tạo ra sau sinh nhật lần thứ 50 của ông. Kỹ năng vĩ đại nhất của Buffett không phải là chọn được cổ phiếu tăng trần, mà là ông bắt đầu đầu tư từ năm 10 tuổi và duy trì nó liên tục trong hơn 75 năm mà không bao giờ bị phá sản hay cháy tài khoản.',
        realExample: 'Nếu một nhà đầu tư đạt lợi nhuận 30%/năm nhưng chỉ chơi được 5 năm rồi cháy tài khoản, họ sẽ thua xa một người chỉ đạt 12%/năm nhưng đầu tư bền bỉ suốt 40 năm.'
      },
      {
        number: 3,
        title: 'Giàu Có (Wealth) Là Thứ Bạn KHÔNG Nhìn Thấy',
        rule: 'Tiêu tiền để khoe mình có tiền là cách nhanh nhất để có ít tiền đi.',
        explanation: 'Đa số mọi người nhầm lẫn giữa "Giàu có" (Wealth) và "Giàu sang bề nổi" (Rich). Người giàu sang bề nổi lái xe triệu đô và khoe đồ hiệu. Người giàu có thực sự sở hữu các tài sản vô hình: Tự do về thời gian, quyền được thức dậy mỗi sáng và nói: "Hôm nay tôi muốn làm gì thì làm". Tự do thời gian mới là cổ tức cao nhất mà tiền bạc mang lại.',
        realExample: 'Một người kiếm 10 tỷ/năm nhưng tiêu hết 10 tỷ cho biệt thự và tiệc tùng có tài chính mỏng manh hơn nhiều so với người kiếm 2 tỷ nhưng chỉ tiêu 500 triệu và cất 1,5 tỷ vào tài sản độc lập.'
      },
      {
        number: 4,
        title: 'Biên Độ An Toàn (Room for Error) & Định Nghĩa Chữ "Đủ"',
        rule: 'Phần quan trọng nhất của mọi kế hoạch là lên kế hoạch cho những việc diễn ra không theo kế hoạch.',
        explanation: 'Chữ "Đủ" là phanh hãm lòng tham. Khi không biết thế nào là đủ, bạn sẽ sẵn sàng đem những thứ quan trọng và không thể thay thế (gia đình, uy tín, tự do) đi đánh cược để lấy những thứ bạn chỉ thích mà không thực sự cần.',
        realExample: 'Các nhà tài phiệt phố Wall như Bernie Madoff hay Rajat Gupta đã có hàng trăm triệu USD nhưng vì không biết thế nào là đủ nên đã phạm tội lừa đảo và giao dịch nội gián để rồi kết thúc cuộc đời trong tù tội.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC
    actionAlgorithm: [
      {
        trigger: 'Khi so sánh bản thân với những người đang khoe xe sang, nhà to trên mạng xã hội',
        action: 'Tự nhắc nhở bản thân: "Tôi chỉ nhìn thấy số tiền họ đã tiêu đi, chứ không nhìn thấy số nợ của họ". Tự do tài chính của tôi nằm ở sự an tâm chứ không nằm ở sự ngưỡng mộ của người lạ.'
      },
      {
        trigger: 'Khi cân nhắc một phương án đầu tư có lợi nhuận cao nhưng rủi ro mất ngủ',
        action: 'Áp dụng "Quy tắc Giấc ngủ ngon": Chọn phương án tài chính giúp bạn ngủ ngon mỗi đêm, thay vì phương án tối đa hóa lợi nhuận trên giấy nhưng khiến bạn đau tim lo lắng.'
      },
      {
        trigger: 'Xây dựng quỹ dự phòng',
        action: 'Luôn duy trì một khoản tiền mặt dự phòng khẩn cấp đủ sống tối thiểu 6-12 tháng trong tài khoản an toàn tuyệt đối, coi đó là tấm đệm sinh tử giúp bạn không bao giờ phải bán rẻ tài sản trong khủng hoảng.'
      }
    ],

    // TẦNG 4: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Tảng Băng Trôi Khổng Lồ Giữa Đại Dương',
      visualDescription: 'Hình dung một tảng băng trôi giữa đại dương. Phần chóp nhỏ nổi trên mặt nước chỉ là chiếc ô tô bóng bẩy (tiêu xài). Nhưng phần thân khổng lồ chìm sâu dưới mặt nước biển mới là tài sản tự do đích thực nâng đỡ toàn bộ tảng băng.',
      lociLocation: 'Đặt bên Khung Cửa Sổ Hướng Biển trong Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận làn gió biển mát rượi và cảm giác bình yên không gì lay chuyển nổi.'
    }
  },

  {
    id: 'thinking_fast_slow',
    title: 'Tư Duy Nhanh Và Chậm',
    subTitle: 'Thinking, Fast and Slow',
    author: 'Daniel Kahneman (Giải Nobel Kinh Tế)',
    year: '2011',
    genreId: 'psychology',
    genreName: 'Tâm Lý & Tư Duy',
    badge: 'Công Trình Đột Phá Về Nhận Thức',
    readingTime: '20 Phút',
    color: 'from-purple-600 via-pink-600 to-indigo-700',
    icon: 'brain-circuit',
    shortDesc: 'Giải phẫu 2 hệ thống chi phối mọi quyết định của não bộ và cách bẻ gãy các cạm bẫy thiên kiến để suy nghĩ sáng suốt như thiên tài.',

    // TẦNG 1: Ý NIỆM TỐI THƯỢNG
    bigIdea: 'Bộ não con người bị chi phối bởi hai nhân vật: Hệ Thống 1 (bản năng, nhanh, đầy thiên kiến) và Hệ Thống 2 (logic, tính toán, nhưng cực kỳ lười biếng). Đa số sai lầm cuộc đời là do để Hệ thống 1 trả lời thay cho Hệ thống 2.',
    bigIdeaQuote: 'Sự tự tin thái quá của con người thường xuất phát từ việc chúng ta hoàn toàn mù quáng trước sự thiếu hiểu biết của chính mình.',

    // TẦNG 2: BỘ NỐT NHẠC NGUYÊN LÝ CỐT LÕI
    coreNotes: [
      {
        number: 1,
        title: 'Cuộc Chiến Giữa Hệ Thống 1 (Nhanh) và Hệ Thống 2 (Chậm)',
        rule: 'Hệ thống 1 vận hành tự động và nhanh chóng, ít hoặc không tốn nỗ lực. Hệ thống 2 đòi hỏi sự chú ý cao độ và tính toán có ý thức.',
        explanation: 'Nhìn mặt ai đó biết họ đang giận ➔ Hệ thống 1 phản xạ tức thì. Tính phép nhân 17 x 24 ➔ Hệ thống 2 phải bật lên, nhịp tim tăng, đồng tử giãn ra để tính toán. Vì não tiết kiệm năng lượng, Hệ thống 2 thường lười biếng giao phó mọi quyết định cho Hệ thống 1. Kết quả là chúng ta thường hành động theo cảm tính rồi sau đó mới dùng logic để ngụy biện!',
        realExample: 'Khi thấy dòng chữ "Giảm giá 50% chỉ hôm nay!", Hệ thống 1 giục ta mua ngay vì sợ bỏ lỡ. Phải ép Hệ thống 2 thức giấc để tính xem giá gốc có bị thổi phồng lên gấp đôi trước khi giảm không.'
      },
      {
        number: 2,
        title: 'Cái Bẫy WYSIATI: Điều Bạn Thấy Là Tất Cả Những Gì Tồn Tại',
        rule: 'What You See Is All There Is: Não bộ chỉ dùng thông tin hiện có để thêu dệt nên một câu chuyện mạch lạc, bỏ qua hoàn toàn những thứ không thấy.',
        explanation: 'Khi nghe một câu chuyện hấp dẫn, não lập tức tin sái cổ mà không hề tự hỏi: "Còn những dữ kiện quan trọng nào mà mình chưa được biết?". Đây là nguồn gốc của sự ngộ nhận và phán xét phiến diện.',
        realExample: 'Nghe tin một người bạn khởi nghiệp thành công kiếm tiền tỷ, ta lập tức nghĩ mở quán cà phê là hái ra tiền, bỏ qua sự thật rằng 95% quán cà phê khác đã âm thầm đóng cửa phá sản.'
      },
      {
        number: 3,
        title: 'Hiệu Ứng Mỏ Neo (Anchoring) & Hiệu Ứng Đóng Khung (Framing)',
        rule: 'Con số hoặc cách dùng từ đầu tiên bạn nghe thấy sẽ vô thức chi phối hoàn toàn quyết định tiếp theo của bạn.',
        explanation: 'Nếu một cái áo được niêm yết giá gốc 2 triệu rồi gạch đi bán 800k, con số 2 triệu là chiếc mỏ neo khiến bạn thấy 800k là món hời. Tương tự: Thịt ghi "90% nạc" nghe hấp dẫn hơn hẳn "10% mỡ", dù hai cách nói là một.',
        realExample: 'Trong đàm phán lương, người đưa ra con số đầu tiên thường là người nắm lợi thế neo tâm lý cho toàn bộ cuộc thương lượng.'
      },
      {
        number: 4,
        title: 'Lý Thuyết Triển Vọng: Nỗi Đau Mất Mát Lớn Gấp Đôi Niềm Vui Nhận Được',
        rule: 'Con người ghét mất mát (Loss Aversion) hơn rất nhiều so với niềm vui khi đạt được cùng một giá trị.',
        explanation: 'Cảm giác đau đớn khi mất 10 triệu đồng lớn gấp đôi cảm giác sung sướng khi nhặt được 10 triệu đồng. Nỗi sợ này khiến người ta thường giữ lại các cổ phiếu lỗ (ôm lỗ không chịu cắt) nhưng lại vội vã bán non cổ phiếu vừa có lãi chút đỉnh.',
        realExample: 'Chính sách "Dùng thử 30 ngày hoàn tiền 100%" khai thác triệt để tâm lý này: Khi món đồ đã nằm trong nhà bạn, việc trả lại nó mang lại cảm giác mất mát, khiến đa số người dùng chọn giữ lại.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC
    actionAlgorithm: [
      {
        trigger: 'Khi chuẩn bị đưa ra phán xét hoặc quyết định lớn (ký kết hợp đồng, mua nhà, đổi việc)',
        action: 'Dừng lại 10 giây, hít sâu và tự đặt câu hỏi phản biện: "Hệ thống 1 của mình đang bị cảm xúc nào dẫn dắt? Có dữ kiện quan trọng nào mình CHƯA THẤY không (WYSIATI)?".'
      },
      {
        trigger: 'Khi tham gia đàm phán giá cả',
        action: 'Nhận diện ngay con số đầu tiên đối phương đưa ra xem có phải là "Chiếc mỏ neo" gài bẫy không. Chủ động đưa ra mỏ neo hợp lý của mình trước nếu có thể.'
      },
      {
        trigger: 'Khi một dự án thất bại hoặc đang thua lỗ',
        action: 'Bỏ qua "Chi phí chìm" (Sunk Cost). Hãy tự hỏi: "Nếu hôm nay bắt đầu lại từ con số 0, mình có rót thêm tiền/thời gian vào dự án này nữa không?". Nếu không ➔ Cắt lỗ ngay lập tức!'
      }
    ],

    // TẦNG 4: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Chú Thỏ Siêu Tốc & Cụ Rùa Đeo Kính',
      visualDescription: 'Hình dung một chú thỏ lông trắng chạy nhanh như chớp (Hệ thống 1) đang lao về phía mép vực, nhưng bị một Cụ Rùa thông thái đeo kính cận (Hệ thống 2) từ tốn giẫm chân lên dây cương ghì chặt lại.',
      lociLocation: 'Đặt trước Chiếc Gương Lớn ở Sảnh Chính Cung Điện Ký Ức.',
      sensoryCue: 'Nghe tiếng gió rít bên tai của chú thỏ và cảm nhận sự vững chãi, chậm rãi của bàn chân cụ rùa.'
    }
  },

  {
    id: 'atomic_habits',
    title: 'Atomic Habits - Thói Quen Nguyên Tử',
    subTitle: 'Tiny Changes, Remarkable Results',
    author: 'James Clear',
    year: '2018',
    genreId: 'habits',
    genreName: 'Thói Quen & Hiệu Suất',
    badge: 'Bách Khoa Thay Đổi Hành Vi',
    readingTime: '15 Phút',
    color: 'from-cyan-600 via-blue-600 to-indigo-700',
    icon: 'zap',
    shortDesc: 'Phương pháp xây dựng thói quen tốt và từ bỏ thói quen xấu bằng các thay đổi vi mô 1% mỗi ngày dựa trên khoa học thần kinh.',

    // TẦNG 1: Ý NIỆM TỐI THƯỢNG
    bigIdea: 'Bạn không vươn lên tới tầm cao của mục tiêu, bạn rơi xuống mức độ của hệ thống vận hành. Tốt hơn 1% mỗi ngày sau 1 năm bạn sẽ giỏi gấp 37 lần.',
    bigIdeaQuote: 'Thói quen là lãi suất kép của sự tự hoàn thiện. Giống như tiền bạc sinh sôi nhờ lãi kép, hiệu quả của thói quen cũng nhân lên gấp bội khi bạn lặp lại chúng qua từng ngày.',

    // TẦNG 2: BỘ NỐT NHẠC NGUYÊN LÝ CỐT LÕI
    coreNotes: [
      {
        number: 1,
        title: 'Thói Quen Dựa Trên Bản Sắc (Identity-Based Habits)',
        rule: 'Thay đổi hành vi bền vững nhất bắt đầu từ việc thay đổi niềm tin về con người bạn muốn trở thành.',
        explanation: 'Có 3 tầng thay đổi: Thay đổi Kết quả (Tôi muốn giảm cân) ➔ Thay đổi Quy trình (Tôi tập gym mỗi ngày) ➔ Thay đổi Bản sắc (Tôi là người năng động yêu thể thao). Nếu bạn vẫn coi mình là người nghiện hút thuốc đang cố nhịn, bạn sẽ tái nghiện. Nhưng nếu bạn từ chối điếu thuốc bằng câu: "Không, tôi không phải là người hút thuốc", bản sắc mới sẽ bảo vệ bạn.',
        realExample: 'Mỗi hành động bạn làm là một lá phiếu bầu cho con người bạn muốn trở thành. Viết được 1 trang sách ➔ Bạn bầu 1 phiếu cho bản sắc "Tôi là một tác giả".'
      },
      {
        number: 2,
        title: 'Bốn Quy Luật Cốt Lõi Để Tạo Thói Quen Tốt',
        rule: '1. Khiến nó Rõ ràng. 2. Khiến nó Hấp dẫn. 3. Khiến nó Dễ dàng. 4. Khiến nó Thỏa mãn.',
        explanation: 'Mọi thói quen trong não đều chạy qua 4 bước: Tín hiệu ➔ Cơn thèm muốn ➔ Phản hồi ➔ Phần thưởng. Muốn tạo thói quen tốt: Để sách ngay trên bàn (Rõ ràng), bật nhạc êm dịu khi đọc (Hấp dẫn), đọc đúng 2 trang đầu tiên (Dễ dàng), đánh 1 dấu tích xanh hoàn thành (Thỏa mãn). Muốn phá thói quen xấu: Đảo ngược lại 4 quy luật (Ẩn đi, làm cho nhàm chán, làm cho cực khó, làm cho trừng phạt).',
        realExample: 'Muốn bỏ lướt điện thoại khi ngủ: Cất điện thoại ở phòng khách (Làm cho khó tiếp cận), tháo pin hoặc xóa app (Tăng ma sát).'
      },
      {
        number: 3,
        title: 'Quy Tắc 2 Phút: Làm Cho Thói Quen Dễ Dàng Đến Mức Không Thể Từ Chối',
        rule: 'Một thói quen mới chỉ nên mất dưới 2 phút để bắt đầu.',
        explanation: 'Đừng bắt đầu bằng mục tiêu to tát: "Mỗi ngày đọc sách 30 phút" ➔ Não sẽ lười và trì hoãn. Hãy thu nhỏ lại: "Mỗi tối mở cuốn sách ra đọc đúng 1 trang". "Mỗi ngày chạy 5km" ➔ Thu nhỏ lại: "Xỏ giày chạy vào chân". Khi đã bước qua cánh cổng 2 phút đầu tiên, quán tính hành động sẽ giúp bạn làm tiếp.',
        realExample: 'Người tập gym kiên trì nhất là người ban đầu chỉ đến phòng gym đúng 5 phút rồi đi về. Sau khi thói quen "đến phòng gym" đã được khóa chặt, việc tập 45 phút trở nên tự nhiên.'
      },
      {
        number: 4,
        title: 'Môi Trường Quan Trọng Hơn Ý Chí & Xếp Chồng Thói Quen',
        rule: 'Người có kỷ luật cao nhất thường là người ít phải dùng đến ý chí nhất vì họ thiết kế môi trường hoàn hảo.',
        explanation: 'Đừng trông chờ vào ý chí vì ý chí là nguồn pin cạn kiệt rất nhanh sau ngày làm việc. Hãy để môi trường dẫn dắt hành động. Kèm theo công thức Xếp Chồng Thói Quen (Habit Stacking): "Sau khi [THÓI QUEN HIỆN TẠI], tôi sẽ [THÓI QUEN MỚI NGAY LẬP TỨC]".',
        realExample: 'Sau khi rót tách cà phê buổi sáng (thói quen cũ có sẵn), tôi sẽ mở sổ tay viết 3 điều biết ơn (thói quen mới).'
      }
    ],

    // TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC
    actionAlgorithm: [
      {
        trigger: 'Khi muốn thiết lập một thói quen tích cực mới',
        action: 'Áp dụng công thức Xếp chồng: "Sau khi [Thói quen cũ], tôi sẽ làm [Thói quen mới trong vòng 2 phút]". Thiết kế vật dụng của thói quen đó lộ diện ngay tầm mắt.'
      },
      {
        trigger: 'Khi lười biếng hoặc không có thời gian',
        action: 'Không bao giờ được bỏ trống 2 ngày liên tiếp (Never miss twice). Nếu không thể tập gym 1 tiếng, hãy tập hít đất 5 cái. Duy trì chuỗi thói quen quan trọng hơn độ dài buổi tập.'
      },
      {
        trigger: 'Khi muốn loại bỏ một tật xấu (nghiện mạng xã hội, ăn vặt)',
        action: 'Tăng ma sát lên mức tối đa: Đặt mật khẩu cực dài, nhờ người khác giữ hộ, hoặc cất đồ ăn vặt vào tủ khóa trên gác xép.'
      }
    ],

    // TẦNG 4: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Viên Kim Cương Nguyên Tử Tỏa Hào Quang',
      visualDescription: 'Hình dung một viên kim cương tí hon cỡ hạt bụi (Atomic) nhưng phát sáng rực rỡ. Mỗi ngày một hạt bụi kim cương mới bay tới dính vào, sau 365 ngày nó nở bừng thành một ngọn tháp kim cương khổng lồ lấp lánh.',
      lociLocation: 'Đặt trên Chiếc Đèn Chùm Trung Tâm trong Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận ánh sáng lấp lánh chiếu rọi khắp căn phòng và độ sắc bén hoàn hảo của viên kim cương.'
    }
  },

  {
    id: 'art_of_war',
    title: 'Binh Pháp Tôn Tử',
    subTitle: 'The Art of War',
    author: 'Tôn Vũ (Sun Tzu)',
    year: '~500 TCN',
    genreId: 'strategy',
    genreName: 'Chiến Lược & Lãnh Đạo',
    badge: 'Đỉnh Cao Binh Pháp & Mưu Lược',
    readingTime: '20 Phút',
    color: 'from-red-600 via-rose-700 to-amber-800',
    icon: 'swords',
    shortDesc: 'Tuyệt tác quân sự 2500 năm tuổi đúc kết quy luật chiến thắng trong kinh doanh, đàm phán và vượt qua mọi đối thủ mà không tốn một giọt máu.',

    // TẦNG 1: Ý NIỆM TỐI THƯỢNG
    bigIdea: 'Đỉnh cao của nghệ thuật chiến tranh không phải là đánh trăm trận trăm thắng, mà là khuất phục quân địch mà không cần giao tranh (Bất chiến tự nhiên thành).',
    bigIdeaQuote: 'Biết người biết ta, trăm trận không nguy. Không biết người mà chỉ biết ta, một trận thắng một trận thua. Không biết người cũng không biết ta, mỗi trận giao tranh đều nắm chắc phần bại.',

    // TẦNG 2: BỘ NỐT NHẠC NGUYÊN LÝ CỐT LÕI
    coreNotes: [
      {
        number: 1,
        title: 'Thắng Trước Rồi Mới Đánh (Tiên Thắng Hậu Cầu Chiến)',
        rule: 'Bậc tướng giỏi chiến đấu trước hết tự đặt mình vào thế không thể bị đánh bại, rồi chờ đợi đối phương sơ hở để chiến thắng.',
        explanation: 'Người tầm thường lao vào cuộc chiến rồi mới cầu may mong tìm chiến thắng. Bậc mưu lược chuẩn bị lực lượng, thế trận, hậu cần và tính toán bàn cờ kỹ lưỡng đến mức phần thắng đã nằm chắc trong tay trước khi tiếng trống trận đầu tiên vang lên.',
        realExample: 'Steve Jobs khi ra mắt iPhone năm 2007 đã bí mật đàm phán độc quyền mạng với AT&T, chuẩn bị chuỗi cung ứng màn hình cảm ứng điện dung hoàn hảo khiến các đối thủ như Nokia, BlackBerry hoàn toàn không kịp trở tay.'
      },
      {
        number: 2,
        title: 'Binh Bất Yếm Trá & Biến Ảo Như Nước',
        rule: 'Binh pháp là nghệ thuật lừa dối. Binh vô thường thế, thủy vô thường hình (Nước không có hình dạng cố định, binh không có thế trận bất biến).',
        explanation: 'Khi có năng lực thì làm ra vẻ bất tài; khi chuẩn bị dùng binh thì làm ra vẻ bất động; khi ở gần thì khiến địch tưởng ở xa; khi ở xa thì khiến địch tưởng ở gần. Nước uốn mình theo địa hình để chảy xiết, người giỏi chiến lược biến đổi linh hoạt theo động thái của đối thủ chứ không rập khuôn giáo điều.',
        realExample: 'Doanh nghiệp khi thử nghiệm sản phẩm chiến lược mới thường thử dưới một thương hiệu con âm thầm, khiến các đối thủ đầu ngành mất cảnh giác không đề phòng.'
      },
      {
        number: 3,
        title: 'Đánh Vào Chỗ Sơ Hở, Phòng Ngự Nơi Địch Không Ngờ (Công Kỳ Vô Bị)',
        rule: 'Tránh chỗ thực, đánh chỗ hư. Nơi đối phương phòng thủ kiên cố nhất thì tránh ra, nơi đối phương lơ là buông lỏng nhất thì thọc sâu.',
        explanation: 'Đối đầu trực diện với kẻ mạnh trên sân nhà của họ là tự sát. Chiến lược thông minh là tạo ra bất ngờ: Đánh vào thị trường ngách mà đối thủ khinh suất bỏ qua, hoặc tấn công vào điểm yếu cốt tử không thể tự bảo vệ của họ.',
        realExample: 'Chiến lược "Đại dương xanh": Thay vì đối đầu trực diện trong đại dương đỏ đầy cá mập xâu xé giá rẻ, hãng xiếc Cirque du Soleil tạo ra một ngành giải trí hoàn toàn mới kết hợp giữa kịch nghệ và xiếc.'
      },
      {
        number: 4,
        title: 'Tướng Soái Và Thu Phục Lòng Người',
        rule: 'Tướng có 5 đức: Trí, Tín, Nhân, Dũng, Nghiêm. Thương yêu binh sĩ như con đỏ thì họ sẽ cùng ta vào sinh ra tử.',
        explanation: 'Sức mạnh lớn nhất của một đội ngũ không nằm ở vũ khí mà nằm ở sự đồng lòng (Đạo). Khi mục tiêu của lãnh đạo và cấp dưới hòa làm một, tổ chức đó trở nên bất khả chiến bại.',
        realExample: 'Các nhà lãnh đạo kiệt xuất luôn nhận trách nhiệm khi thất bại và chia sẻ toàn bộ chiến công, phần thưởng cho đồng đội khi chiến thắng.'
      }
    ],

    // TẦNG 3: THUẬT TOÁN HÀNH ĐỘNG ĐỜI THỰC
    actionAlgorithm: [
      {
        trigger: 'Trước khi bắt đầu bất kỳ cuộc cạnh tranh, đàm phán hoặc dự án mới',
        action: 'Lập ma trận phân tích: Điểm mạnh - Điểm yếu của ta vs Đối thủ. Đảm bảo phòng thủ vững chắc trước (Thế không thể thua) rồi mới tìm đòn bẩy tấn công.'
      },
      {
        trigger: 'Khi đối thủ mạnh hơn bạn về vốn và quy mô',
        action: 'Tuyệt đối không cạnh tranh về giá hoặc đâm đầu vào phân khúc sở trường của họ. Chuyển hướng đánh vào thị trường ngách siêu chuyên biệt nơi họ quá cồng kềnh không thể phục vụ.'
      },
      {
        trigger: 'Trong giao tiếp và quản trị',
        action: 'Giữ vẻ ngoài khiêm nhường, kín đáo về kế hoạch tương lai ("Lúc gần làm ra vẻ xa, lúc mạnh làm ra vẻ yếu"), dùng kết quả thực tế để nói chuyện thay vì khoa trương.'
      }
    ],

    // TẦNG 4: MỎ NEO CUNG ĐIỆN KÝ ỨC
    memoryPalaceAnchor: {
      symbol: 'Bàn Cờ Tướng Bằng Đồng Cổ & Chén Trà Bốc Khói',
      visualDescription: 'Hình dung một bàn cờ tướng bằng đồng cổ sáng bóng. Quân cờ đối phương tự động hạ vũ khí xếp hàng ngay ngắn trước một chén trà cổ đang bốc khói nghi ngút mà không tốn một giọt máu.',
      lociLocation: 'Đặt trên Bàn Trà ở Thư Phòng Cung Điện Ký Ức.',
      sensoryCue: 'Cảm nhận mùi thơm thanh tao của lá trà cổ thụ và sự tĩnh lặng tuyệt đối của một bậc kỳ tài định đoạt thiên hạ.'
    }
  }
];
