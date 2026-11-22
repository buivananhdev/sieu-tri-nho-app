// =========================================================================
// BÁCH KHOA TOÀN THƯ TƯ DUY & NGHỆ THUẬT ĐẶT CÂU HỎI QUỐC TẾ (THINKING DATA)
// 34 CHUYÊN ĐỀ TƯ DUY HÀN LÂM CHUẨN XÁC 100% TỪ TÀI LIỆU GỐC THẾ GIỚI
// KÈM HỆ THỐNG 7 CẤP ĐỘ CÂU HỎI TỪ CĂN BẢN ĐẾN GIÁO SƯ KHỦNG
// =========================================================================

window.THINKING_TRACKS_7 = [
  {
    "id": "all",
    "name": "Tất Cả 34 Bài Học",
    "icon": "grid",
    "count": 34
  },
  {
    "id": "logic",
    "name": "I. Logic & Nguyên Lý Bản Chất",
    "icon": "atom",
    "count": 4
  },
  {
    "id": "strategy",
    "name": "II. Chiến Lược & Quyết Định Sinh Tử",
    "icon": "shield-alert",
    "count": 6
  },
  {
    "id": "probability",
    "name": "III. Xác Suất, Bayes & Bất Định",
    "icon": "dice-5",
    "count": 5
  },
  {
    "id": "systems",
    "name": "IV. Hệ Thống & Động Lực Học",
    "icon": "network",
    "count": 5
  },
  {
    "id": "critical",
    "name": "V. Phản Biện & Lọc Rác Nhận Thức",
    "icon": "eye",
    "count": 5
  },
  {
    "id": "creative",
    "name": "VI. Sáng Tạo & Đột Phá Phi Tuyến",
    "icon": "sparkles",
    "count": 5
  },
  {
    "id": "meta",
    "name": "VII. Học Nhanh & Siêu Nhận Thức",
    "icon": "brain",
    "count": 4
  }
];

window.THINKING_MASTER_LESSONS_34 = [
  {
    "id": "lesson_first_principles",
    "code": "LOGIC-01",
    "trackId": "logic",
    "trackName": "I. Logic & Nguyên Lý Bản Chất",
    "name": "Tư Duy Nguyên Lý Đầu Tiên",
    "origName": "First Principles Thinking (Reasoning from First Principles)",
    "master": "Aristotle (Physics, Metaphysics) & René Descartes (Discourse on Method) & Elon Musk",
    "academicSource": "Aristotle, Posterior Analytics; Descartes, Discourse on the Method (1637); Physics-based reasoning in aerospace engineering.",
    "icon": "atom",
    "color": "from-blue-600 via-indigo-600 to-cyan-500",
    "badge": "Giải Phẫu Chân Lý Tuyệt Đối",
    "axiom": "Một chân lý nền tảng là một tiên đề tự thân đúng đắn, không thể suy diễn từ bất kỳ điều gì khác và không thể phân rã thêm được nữa.",
    "summary": "Đập tan tư duy suy luận theo phép loại suy (bắt chước người khác). Tháo dỡ bài toán về các hạt sự thật cơ bản nhất của vật lý/toán học, rồi tự mình lắp ráp giải pháp từ con số 0.",
    "algorithm": [
      {
        "step": 1,
        "title": "Cô lập & Nghi vấn toàn bộ giả định",
        "desc": "Viết ra vấn đề và liệt kê mọi niềm tin hiện có. Với mỗi niềm tin, hỏi: 'Đây là sự thật vật lý bắt buộc hay chỉ là tập quán xã hội vì người ta làm vậy?'"
      },
      {
        "step": 2,
        "title": "Giải phẫu về các hạt cơ bản không thể chia cắt",
        "desc": "Tiếp tục phân rã cho đến khi chạm tới các định luật cơ bản nhất: chi phí vật liệu thô, định luật nhiệt động lực học, giới hạn thời gian thực tế."
      },
      {
        "step": 3,
        "title": "Thiết kế giải pháp mới từ số 0 (Zero-base synthesis)",
        "desc": "Không nhìn sang đối thủ hay tiền lệ. Tự hỏi: 'Chỉ với các viên gạch chân lý này, cách tối ưu nhất để kết hợp chúng lại thành kết quả là gì?'"
      },
      {
        "step": 4,
        "title": "Kiểm tra đòn bẩy vượt trội 10x",
        "desc": "So sánh giải pháp mới với phương thức truyền thống về tốc độ, chi phí và hiệu quả. Nếu không vượt trội gấp nhiều lần, tiếp tục bóc tách sâu hơn."
      }
    ],
    "powerQuestions": [
      "Nếu cả thế giới chưa từng ai giải bài toán này, mình sẽ bắt đầu từ sự thật vật lý cơ bản nào?",
      "Điều gì ở đây chỉ là ý kiến, thói quen hoặc giáo điều của số đông mà không hề có bằng chứng khoa học bắt buộc?",
      "Chi phí cấu thành tối thiểu thực sự của các thành phần nguyên tử ở đây là bao nhiêu?",
      "Làm sao để tạo ra kết quả này với chỉ 1/10 chi phí hiện tại?"
    ],
    "canonicalCase": {
      "title": "Cách Elon Musk chế tạo tên lửa Falcon 9 của SpaceX",
      "context": "Khi Musk muốn mua tên lửa sang Nga, người ta báo giá 65 triệu USD một quả. Mọi người đều nói ngành hàng không vũ trụ đắt đỏ là điều hiển nhiên.",
      "execution": "Musk dùng Nguyên lý đầu tiên: Một quả tên lửa gồm những vật liệu gì? Nhôm, titan, sợi carbon, đồng. Chi phí nguyên liệu thô trên sàn giao dịch kim loại là bao nhiêu? Chỉ khoảng 2% giá trị bán của tên lửa! 98% chi phí còn lại là do quy trình sản xuất cồng kềnh, quan liêu và thầu phụ của các tập đoàn cũ.",
      "result": "Musk quyết định tự mua nguyên liệu thô, tự dựng dây chuyền sản xuất tên lửa tại chỗ, hạ giá phóng tên lửa xuống 10 lần và thống trị ngành hàng không vũ trụ toàn cầu."
    },
    "fatalPitfall": "Lỗi suy luận theo loại suy (Reasoning by Analogy): 'Chúng tôi làm thế vì công ty X làm thế' hoặc 'Từ trước tới nay ngành này vẫn vận hành như vậy'.",
    "mindsetPractice": "Chọn một khoản chi phí hoặc một công việc bạn đang làm hàng ngày. Phân tách nó ra thành thời gian/vật liệu thô và tự hỏi: 'Nếu làm lại từ số 0, mình có thể cắt giảm 70% các bước thừa thãi không?'."
  },
  {
    "id": "lesson_deductive_reasoning",
    "code": "LOGIC-02",
    "trackId": "logic",
    "trackName": "I. Logic & Nguyên Lý Bản Chất",
    "name": "Tư Duy Diễn Dịch & Tam Đoạn Luận",
    "origName": "Deductive Reasoning & Syllogism",
    "master": "Aristotle (Prior Analytics - Bộ Organon) & Gottfried Wilhelm Leibniz",
    "academicSource": "Aristotle, Organon (Prior & Posterior Analytics); Formal Propositional Logic; Principia Mathematica (Russell & Whitehead).",
    "icon": "arrow-down-right",
    "color": "from-indigo-600 to-purple-600",
    "badge": "Tính Tất Yếu Tuyệt Đối",
    "axiom": "Nếu các tiền đề (Premises) đã đúng và cấu trúc lập luận hợp lệ (Valid), thì kết luận bắt buộc phải đúng 100%, không có bất kỳ ngoại lệ nào trong vũ trụ.",
    "summary": "Phương pháp tư duy đi từ chân lý phổ quát chung đến kết luận tất yếu cho trường hợp cá biệt. Giúp bộ não miễn nhiễm với sự lừa dối và ngụy biện.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định Tiền Đề Lớn (Major Premise)",
        "desc": "Tìm một quy luật phổ quát đã được chứng minh là đúng đắn không thể bàn cãi (Ví dụ: 'Mọi sinh vật sống đều cần năng lượng')."
      },
      {
        "step": 2,
        "title": "Xác định Tiền Đề Nhỏ (Minor Premise)",
        "desc": "Đặt đối tượng cụ thể đang xét vào không gian của Tiền đề lớn (Ví dụ: 'Con người là sinh vật sống')."
      },
      {
        "step": 3,
        "title": "Rút ra Kết Luận Tất Yếu (Necessary Conclusion)",
        "desc": "Áp quy luật của tiền đề lớn sang đối tượng (Ví dụ: 'Vậy con người chắc chắn cần năng lượng')."
      },
      {
        "step": 4,
        "title": "Kiểm tra tính Hợp Lệ (Validity) & Tính Chắc Chắn (Soundness)",
        "desc": "Soát lại: Cấu trúc logic có bị lỗi không? Các tiền đề ban đầu có thực sự đúng trong thế giới thực không?"
      }
    ],
    "powerQuestions": [
      "Nếu tiền đề lớn sai, toàn bộ kết luận của tôi có sụp đổ không?",
      "Tôi có đang nhầm lẫn giữa một lập luận nghe êm tai với một lập luận đúng đắn về mặt logic không?",
      "Có trường hợp cá biệt nào lọt ra ngoài phạm vi bao quát của tiền đề này không?"
    ],
    "canonicalCase": {
      "title": "Tam đoạn luận kinh điển về Socrates và tính bất biến toán học",
      "context": "Trước thời Aristotle, người ta tranh luận bằng thuật hùng biện cảm tính, ai to mồm hoặc nói bóng bẩy hơn thì thắng.",
      "execution": "Aristotle chuẩn hóa Tam đoạn luận: Tiền đề 1: 'Mọi con người đều phải chết'. Tiền đề 2: 'Socrates là con người'. Kết luận bất di bất dịch: 'Socrates chắc chắn phải chết'. Không ai có thể dùng lời nói hoa mỹ để bác bỏ được kết luận này.",
      "result": "Đặt nền móng cho toàn bộ hệ thống luật pháp phương Tây, chứng minh hình học Euclid và ngôn ngữ lập trình máy tính nhị phân ngày nay."
    },
    "fatalPitfall": "Lỗi tiền đề ngầm sai (False Premise): Tin vào một kết luận chỉ vì cấu trúc có vẻ logic, nhưng tiền đề ban đầu lại là một lời nói dối hoặc sự ngộ nhận.",
    "mindsetPractice": "Khi nghe ai đó thuyết phục bạn đầu tư hoặc làm một việc gì đó, hãy viết ra 2 tiền đề ngầm của họ. Nếu 1 trong 2 tiền đề đó lung lay, lập tức từ chối."
  },
  {
    "id": "lesson_inductive_reasoning",
    "code": "LOGIC-03",
    "trackId": "logic",
    "trackName": "I. Logic & Nguyên Lý Bản Chất",
    "name": "Tư Duy Quy Nạp Khoa Học",
    "origName": "Inductive Reasoning & Empirical Generalization",
    "master": "Francis Bacon (Novum Organum, 1620) & David Hume",
    "academicSource": "Francis Bacon, Novum Organum; David Hume, An Enquiry Concerning Human Understanding (Problem of Induction).",
    "icon": "trending-up",
    "color": "from-cyan-600 to-teal-600",
    "badge": "Quy Luật Thực Nghiệm",
    "axiom": "Từ việc quan sát nhiều trường hợp cá biệt lặp đi lặp lại trong thực nghiệm, não bộ tổng hợp nên một quy luật chung có độ xác thực cao để dự báo tương lai.",
    "summary": "Xương sống của phương pháp nghiên cứu khoa học thực nghiệm: không ngồi trong phòng kín suy đoán viển vông, mà bước ra đời thực thu thập dữ liệu, tìm mẫu hình và kiểm chứng giả thuyết.",
    "algorithm": [
      {
        "step": 1,
        "title": "Quan sát & Thu thập mẫu dữ liệu khách quan",
        "desc": "Ghi nhận các sự kiện thực tế diễn ra mà không đưa định kiến hay thiên kiến cá nhân vào."
      },
      {
        "step": 2,
        "title": "Phát hiện mẫu hình lặp lại (Pattern Recognition)",
        "desc": "Tìm ra điểm chung, xu hướng hoặc mối liên hệ xuất hiện xuyên suốt giữa các quan sát."
      },
      {
        "step": 3,
        "title": "Khái quát hóa thành giả thuyết quy luật",
        "desc": "Đưa ra một phát biểu quy luật giải thích tại sao hiện tượng đó lại lặp lại như vậy."
      },
      {
        "step": 4,
        "title": "Kiểm tra giới hạn & Điều kiện biên",
        "desc": "Luôn ghi nhớ bài học 'Thiên nga đen': dù quan sát 1.000 con thiên nga trắng, vẫn không thể khẳng định 100% không có thiên nga đen."
      }
    ],
    "powerQuestions": [
      "Mẫu quan sát của tôi có đủ lớn và đa dạng để rút ra kết luận chung này chưa?",
      "Tôi có đang nhìn thấy mối tương quan ngẫu nhiên (Correlation) rồi vội vã coi nó là quan hệ nhân quả (Causation) không?",
      "Dữ liệu nào xuất hiện sẽ lập tức lật đổ quy luật quy nạp này?"
    ],
    "canonicalCase": {
      "title": "Francis Bacon đập tan chủ nghĩa kinh viện thời Trung cổ",
      "context": "Thời Trung cổ, các học giả ngồi trong nhà thờ tranh cãi xem một con ngựa có bao nhiêu chiếc răng dựa trên sách cổ của Aristotle, mà không ai chịu mở miệng một con ngựa thật ra đếm.",
      "execution": "Bacon công bố Novum Organum: Muốn biết quy luật tự nhiên, phải trực tiếp quan sát tự nhiên. Thu thập hàng trăm mẫu thí nghiệm, phân tích sự tương đồng và khác biệt để tìm quy luật.",
      "result": "Khai sinh ra cuộc Cách mạng Khoa học hiện đại, dẫn tới sự bùng nổ của vật lý học, hóa học, y học thực nghiệm."
    },
    "fatalPitfall": "Bẫy quy nạp ngây thơ (Gà tây Lễ Tạ Ơn - Bertrand Russell): Con gà tây được cho ăn mỗi sáng trong 1.000 ngày liên tiếp, quy nạp rằng 'con người yêu thương mình', cho đến đúng ngày Lễ Tạ Ơn thì bị làm thịt.",
    "mindsetPractice": "Khi rút ra một quy luật trong công việc (ví dụ: khách hàng thích tính năng A), hãy tự hỏi: 'Mình quan sát được bao nhiêu người rồi? Có nhóm khách hàng nào hoàn toàn trái ngược mà mình chưa quan sát không?'."
  },
  {
    "id": "lesson_abductive_reasoning",
    "code": "LOGIC-04",
    "trackId": "logic",
    "trackName": "I. Logic & Nguyên Lý Bản Chất",
    "name": "Tư Duy Giả Định Hợp Lý Nhất",
    "origName": "Abductive Reasoning (Inference to the Best Explanation)",
    "master": "Charles Sanders Peirce (1839–1914) & Arthur Conan Doyle (Sherlock Holmes)",
    "academicSource": "C.S. Peirce, Collected Papers (Deduction, Induction, and Hypothesis); Peter Lipton, Inference to the Best Explanation (Routledge).",
    "icon": "search",
    "color": "from-sky-600 to-blue-700",
    "badge": "Trực Giác Thám Tử Thượng Thừa",
    "axiom": "Khi đối mặt với tập hợp dữ kiện không hoàn chỉnh, trí tuệ đỉnh cao chọn giả thuyết giải thích toàn bộ hiện tượng một cách đơn giản, mạch lạc và ít gượng ép nhất.",
    "summary": "Phương pháp suy luận của bác sĩ chẩn đoán bệnh nan y, thám tử điều tra hiện trường và nhà khoa học giải mã bí ẩn vũ trụ khi không có dữ liệu 100% trọn vẹn.",
    "algorithm": [
      {
        "step": 1,
        "title": "Tập hợp các mảnh vỡ hiện tượng kỳ lạ (Anomalies)",
        "desc": "Ghi nhận mọi dấu hiệu bất thường dù là nhỏ nhất mà các lý thuyết hiện tại không giải thích được."
      },
      {
        "step": 2,
        "title": "Lập danh sách tất cả các kịch bản khả dĩ",
        "desc": "Đưa ra 3-5 giả thuyết khác nhau có thể dẫn đến tập hợp hiện tượng này."
      },
      {
        "step": 3,
        "title": "Loại trừ điều bất khả thi",
        "desc": "'Khi bạn đã loại trừ những điều không thể xảy ra, thì điều còn lại, dù khó tin đến đâu, ắt hẳn phải là sự thật' (Sherlock Holmes)."
      },
      {
        "step": 4,
        "title": "Chọn giả thuyết giải thích thanh thoát nhất",
        "desc": "Giả thuyết nào giải thích được nhiều dữ kiện nhất với số lượng giả định phụ ít nhất sẽ được chọn làm hướng hành động."
      }
    ],
    "powerQuestions": [
      "Giả thuyết này có đòi hỏi quá nhiều sự trùng hợp ngẫu nhiên khó tin để trở thành hiện thực không?",
      "Nếu giả thuyết này đúng, thì điều gì tiếp theo bắt buộc phải xảy ra mà ta có thể đi kiểm tra ngay?"
    ],
    "canonicalCase": {
      "title": "Bác sĩ Joseph Bell chẩn đoán bệnh nhân chỉ qua quan sát 30 giây",
      "context": "Tiến sĩ Joseph Bell (hình mẫu ngoài đời của Sherlock Holmes) tại Đại học Edinburgh khiến sinh viên kinh ngạc khi nhìn một bệnh nhân và nói ngay: 'Anh là cựu binh đóng quân ở Barbados'.",
      "execution": "Ông bóc tách: Dáng đi thẳng đứng kiểu quân đội, da rám nắng vùng nhiệt đới nhưng không bị vàng mắt do sốt rét, một vết sẹo đặc thù ở cánh tay khớp với vũ khí bản địa vùng Caribe. Giả thuyết duy nhất giải thích đồng thời cả 4 dấu hiệu này là cựu binh tại Barbados.",
      "result": "Truyền cảm hứng cho Conan Doyle tạo ra nhân vật thám tử vĩ đại nhất văn học thế giới."
    },
    "fatalPitfall": "Nhảy vội tới kết luận (Jumping to Conclusions) do bị cảm xúc hoặc thành kiến cá nhân chi phối, bỏ qua các dữ kiện mâu thuẫn.",
    "mindsetPractice": "Khi gặp một hiện tượng bất thường (ví dụ: doanh số đột ngột giảm hoặc người thân thay đổi thái độ), đừng vội kết tội. Liệt kê 3 giả thuyết hợp lý nhất và đi tìm bằng chứng kiểm chứng."
  },
  {
    "id": "lesson_inversion",
    "code": "STRAT-05",
    "trackId": "strategy",
    "trackName": "II. Chiến Lược & Quyết Định Sinh Tử",
    "name": "Tư Duy Nghịch Đảo",
    "origName": "Inversion Thinking (Invert, Always Invert)",
    "master": "Carl Gustav Jacob Jacobi (Toán học Đức) & Charlie Munger (Berkshire Hathaway)",
    "academicSource": "C.G. Jacobi, Gesammelte Werke; Charlie Munger, Poor Charlie's Almanack (The Psychology of Human Misjudgment); Warren Buffett Annual Letters.",
    "icon": "rotate-ccw",
    "color": "from-amber-600 via-orange-600 to-red-600",
    "badge": "Phòng Thủ Sinh Tử Tuyệt Đối",
    "axiom": "Nhiều bài toán phức tạp trong vũ trụ và đời sống không thể giải quyết bằng cách đi thẳng về phía trước; bạn chỉ giải được khi lật ngược lại toàn bộ quá trình.",
    "summary": "Người tầm thường hỏi: 'Làm sao để thành công? Làm sao để giàu có?'. Đại sư tư duy lật ngược lại: 'Làm sao để chắc chắn thất bại, mất sạch tiền và bất hạnh?'. Sau đó, lập quy tắc sắt triệt tiêu toàn bộ những điều đó.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định mục tiêu và ĐẢO NGƯỢC đề bài 180 độ",
        "desc": "Nếu mục tiêu là 'Dự án thành công rực rỡ', lật ngược thành: 'Làm sao để dự án này nát bét và thất bại thảm hại nhất có thể?'."
      },
      {
        "step": 2,
        "title": "Lập Danh Sách Tử Thần (Death List)",
        "desc": "Liệt kê chi tiết 10 hành động ngu ngốc nhất, 10 sai lầm chí mạng dẫn thẳng tới sự sụp đổ đó."
      },
      {
        "step": 3,
        "title": "Thực hiện Kỹ thuật Pre-Mortem (Khám nghiệm tử thi dự án)",
        "desc": "Tưởng tượng 1 năm sau dự án đã chết. Tìm ra nguyên nhân số 1 giết chết nó là gì."
      },
      {
        "step": 4,
        "title": "Dựng rào chắn sinh tử (Anti-Failure Safeguards)",
        "desc": "Thiết lập hệ thống kiểm soát và nguyên tắc không bao giờ phạm phải các sai lầm trong danh sách tử thần."
      }
    ],
    "powerQuestions": [
      "Điều ngu ngốc nhất mình có thể làm lúc này là gì? (Sau đó tránh xa nó)",
      "Nếu muốn phá hỏng hoàn toàn sức khỏe, trí tuệ hoặc sự nghiệp của mình, mình sẽ làm gì mỗi ngày?",
      "Tôi muốn biết nơi nào tôi sẽ chết, để tôi không bao giờ bén mảng tới đó! (Charlie Munger)"
    ],
    "canonicalCase": {
      "title": "Triết lý đầu tư huyền thoại của Charlie Munger và Warren Buffett",
      "context": "Phố Wall đầy rẫy các thiên tài toán học và quỹ đầu cơ cố gắng tìm kiếm các cổ phiếu tăng trưởng đột biến 1.000%, nhưng đa số đều phá sản trong các đợt khủng hoảng.",
      "execution": "Munger & Buffett dùng Tư duy Nghịch đảo: Họ không tìm cách thông minh xuất chúng mỗi ngày. Họ chỉ tập trung vào việc: KHÔNG BAO GIỜ làm những việc ngu ngốc (không dùng đòn bẩy tài chính quá mức, không đầu tư vào thứ mình không hiểu, không hợp tác với người thiếu liêm chính).",
      "result": "Berkshire Hathaway đạt mức tăng trưởng hơn 4.000.000% trong 60 năm, vượt trội toàn bộ lịch sử tài chính nhân loại."
    },
    "fatalPitfall": "Lạc quan tếu (Blind Optimism): Chỉ mơ mộng về viễn cảnh màu hồng của chiến thắng mà phớt lờ hoàn toàn các rủi ro chết người hiển hiện trước mắt.",
    "mindsetPractice": "Mỗi khi lên kế hoạch cho một tuần mới, hãy dành 5 phút viết ra: 'Điều gì sẽ phá nát tuần làm việc này của mình?' (Ví dụ: thức khuya, lướt điện thoại 3 tiếng, sa đà tranh cãi). Đặt báo thức chặn đứng những hành vi đó."
  },
  {
    "id": "lesson_second_order_thinking",
    "code": "STRAT-06",
    "trackId": "strategy",
    "trackName": "II. Chiến Lược & Quyết Định Sinh Tử",
    "name": "Tư Duy Bậc Hai & Bậc Cao",
    "origName": "Second-Order & Higher-Order Thinking",
    "master": "Howard Marks (Oaktree Capital) & Garrett Hardin (Nhà sinh thái học)",
    "academicSource": "Howard Marks, The Most Important Thing: Uncommon Sense for the Thoughtful Investor; Garrett Hardin, Filters Against Folly; Frédéric Bastiat, That Which Is Seen, and That Which Is Not Seen (1850).",
    "icon": "git-branch",
    "color": "from-purple-600 to-pink-600",
    "badge": "Tầm Nhìn Xuyên Thời Gian",
    "axiom": "Hệ quả Bậc 1 thường hấp dẫn và ngay tức thì, nhưng hệ quả Bậc 2 và Bậc 3 mới là thứ thực sự quyết định vận mệnh dài hạn.",
    "summary": "Người bình thường chỉ nhìn thấy kết quả trước mắt (Hệ quả bậc 1). Người có tư duy bậc thầy luôn hỏi: 'Và rồi sau đó thì sao nữa?'. Họ sẵn sàng chịu đựng cái đau ngắn hạn để thu hoạch lợi ích khổng lồ dài hạn.",
    "algorithm": [
      {
        "step": 1,
        "title": "Nhận diện Hệ Quả Bậc 1 (First-order consequence)",
        "desc": "Xác định kết quả tức thì xuất hiện ngay sau khi ra quyết định (thường đem lại cảm giác dễ chịu hoặc giải quyết tạm thời)."
      },
      {
        "step": 2,
        "title": "Truy vấn Hệ Quả Bậc 2 (3 tháng - 1 năm)",
        "desc": "Hỏi: 'Khi kết quả Bậc 1 xảy ra, người khác sẽ phản ứng thế nào? Hệ thống sẽ tự điều chỉnh ra sao?'."
      },
      {
        "step": 3,
        "title": "Truy vấn Hệ Quả Bậc 3 (3 năm - 10 năm)",
        "desc": "Đánh giá tác động cộng dồn theo thời gian: Liệu quyết định này có tạo ra một quả bom nổ chậm trong tương lai không?"
      },
      {
        "step": 4,
        "title": "Lựa chọn phương án có Bậc 1 khó khăn nhưng Bậc 2 & 3 rực rỡ",
        "desc": "Quy luật thép: Mọi thứ gây nghiện và phá hủy con người đều có Bậc 1 ngọt ngào nhưng Bậc 2 đắng ngắt; ngược lại, việc rèn luyện kỷ luật có Bậc 1 vất vả nhưng Bậc 2 & 3 vinh quang."
      }
    ],
    "powerQuestions": [
      "Và rồi sau đó chuyện gì sẽ xảy ra? (And then what?)",
      "Quyết định giải quyết vấn đề hôm nay có vô tình tạo ra một vấn đề còn tồi tệ hơn vào năm sau không?",
      "Đối thủ, thị trường và con người sẽ thay đổi hành vi như thế nào để phản ứng lại nước đi này của tôi?"
    ],
    "canonicalCase": {
      "title": "Hiệu ứng Rắn Hổ Mang (The Cobra Effect) tại thuộc địa Ấn Độ",
      "context": "Chính quyền thực dân Anh ở Delhi muốn diệt rắn hổ mang vì chúng quá nhiều. Họ đưa ra chính sách: Cứ nộp 1 đuôi rắn hổ mang sẽ được nhận tiền thưởng (Hệ quả bậc 1: người dân tích cực săn rắn nộp).",
      "execution": "Nhưng Hệ quả bậc 2 bắt đầu phát tác: Người dân nhận ra đi săn trong rừng quá mệt, nên họ lập trang trại bí mật nuôi rắn hổ mang để cắt đuôi đổi tiền thưởng! Khi chính quyền phát hiện ra và hủy bỏ tiền thưởng, người nuôi rắn thả hàng triệu con rắn vô giá trị ra đường, khiến số lượng rắn hổ mang tăng gấp 10 lần trước đó.",
      "result": "Một quyết định tư duy bậc 1 nông cạn đã tạo ra thảm họa bậc 2 khổng lồ."
    },
    "fatalPitfall": "Cận thị nhận thức (Temporal Myopia): Đánh đổi tương lai dài hạn để đổi lấy sự thỏa mãn cảm xúc tầm thường trong 10 phút trước mắt.",
    "mindsetPractice": "Trước khi đưa ra bất kỳ quyết định lớn nào (mua sắm, ký hợp đồng, nói một câu quan trọng), dừng lại 30 giây và tự hỏi 3 mốc thời gian: 10 phút sau thế nào? 10 tháng sau thế nào? 10 năm sau thế nào? (Quy tắc 10/10/10)."
  },
  {
    "id": "lesson_game_theory",
    "code": "STRAT-07",
    "trackId": "strategy",
    "trackName": "II. Chiến Lược & Quyết Định Sinh Tử",
    "name": "Tư Duy Lý Thuyết Trò Chơi & Cân Bằng Nash",
    "origName": "Game Theory & Strategic Equilibrium",
    "master": "John von Neumann (1944) & John Nash (Nobel 1994) & Thomas Schelling (Nobel 2005)",
    "academicSource": "Von Neumann & Morgenstern, Theory of Games and Economic Behavior; John Nash, Equilibrium points in n-person games (PNAS 1950); Schelling, The Strategy of Conflict.",
    "icon": "swords",
    "color": "from-rose-600 via-pink-600 to-indigo-600",
    "badge": "Cờ Vua Nhận Thức Tối Thượng",
    "axiom": "Trong một tương tác chiến lược, kết quả của bạn không chỉ phụ thuộc vào nước đi của chính bạn, mà phụ thuộc vào việc bạn dự đoán chính xác nước đi của người khác và cách họ dự đoán nước đi của bạn.",
    "summary": "Nghệ thuật dự đoán hành vi con người và tìm ra chiến lược tối ưu trong các tình huống cạnh tranh, đàm phán, hợp tác hoặc đối đầu sinh tử.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định Người Chơi & Động Cơ Cốt Lõi",
        "desc": "Ai là các bên tham gia? Họ thực sự muốn gì? Lợi ích cốt lõi của họ là tiền bạc, quyền lực, danh tiếng hay sự an toàn?"
      },
      {
        "step": 2,
        "title": "Lập Ma Trận Lợi Ích (Payoff Matrix)",
        "desc": "Với mỗi nước đi khả dĩ của bạn (Hợp tác / Cạnh tranh), đối phương có những lựa chọn nào và kết quả nhận về của đôi bên là gì?"
      },
      {
        "step": 3,
        "title": "Tìm Chiến Lược Thống Trị (Dominant Strategy)",
        "desc": "Có nước cờ nào mà dù đối phương làm bất cứ điều gì, nó vẫn đem lại kết quả tốt nhất cho bạn không?"
      },
      {
        "step": 4,
        "title": "Thiết lập Trạng Thái Cân Bằng Nash (Nash Equilibrium)",
        "desc": "Điểm mà tại đó không ai có động cơ đơn phương thay đổi nước cờ nếu người kia giữ nguyên chiến lược."
      }
    ],
    "powerQuestions": [
      "Họ nghĩ rằng tôi sẽ làm gì? Và họ sẽ phản ứng ra sao dựa trên suy nghĩ đó?",
      "Trò chơi này là Trò Chơi Tổng Bằng Không (Zero-Sum - ta thắng người thua) hay Trò Chơi Hợp Tác Cùng Thắng (Positive-Sum)?",
      "Làm sao để thay đổi luật chơi hoặc cơ chế thưởng phạt để đối phương tự nguyện chọn hợp tác?"
    ],
    "canonicalCase": {
      "title": "Chiến lược 'Ăn Miếng Trả Miếng' (Tit for Tat) của Robert Axelrod",
      "context": "Giáo sư Robert Axelrod tại Đại học Michigan tổ chức giải đấu máy tính mô phỏng 'Thế lưỡng nan của tù nhân' (Prisoner's Dilemma) lặp lại nhiều vòng giữa các nhà toán học, kinh tế học và lý thuyết trò chơi hàng đầu thế giới.",
      "execution": "Chương trình đơn giản nhất của nhà tâm lý học Anatol Rapoport chiến thắng tuyệt đối: 1. Vòng 1 luôn chọn Hợp Tác; 2. Từ vòng 2 trở đi, làm y hệt nước cờ đối phương vừa làm ở vòng trước (đối phương hợp tác thì hợp tác, đối phương phản bội thì trừng phạt ngay lập tức, đối phương hối lỗi hợp tác lại thì tha thứ ngay).",
      "result": "Chứng minh quy luật toán học vĩnh cửu: Trong các mối quan hệ lâu dài, lòng tốt có nguyên tắc, rõ ràng và biết trừng phạt kẻ phản bội luôn đánh bại sự xảo quyệt."
    },
    "fatalPitfall": "Nhầm lẫn giữa Trò Chơi Một Lần (One-shot game) và Trò Chơi Lặp Lại Vô Hạn (Repeated game). Trò chơi lặp lại đòi hỏi uy tín và danh dự tuyệt đối.",
    "mindsetPractice": "Trong bất kỳ cuộc đàm phán nào, hãy đặt mình vào ghế của đối phương và tự hỏi: 'Nếu mình là họ, điều kiện nào bắt buộc phải có để mình chịu ký hợp đồng mà không cảm thấy bị ép uổng?'."
  },
  {
    "id": "lesson_circle_of_competence",
    "code": "STRAT-08",
    "trackId": "strategy",
    "trackName": "II. Chiến Lược & Quyết Định Sinh Tử",
    "name": "Tư Duy Vòng Tròn Năng Lực",
    "origName": "Circle of Competence",
    "master": "Warren Buffett & Charlie Munger (Berkshire Hathaway)",
    "academicSource": "Warren Buffett, 1996 Berkshire Hathaway Shareholder Letter; Tom Watson Sr. (Founder of IBM); Epictetus (Discourses).",
    "icon": "target",
    "color": "from-emerald-600 via-teal-600 to-cyan-700",
    "badge": "Tự Biết Mình - Vô Địch Tự Nhiên",
    "axiom": "Kích thước của vòng tròn năng lực không quan trọng; điều sinh tử quyết định thành bại là việc bạn biết chính xác ranh giới của nó nằm ở đâu và tuyệt đối ở yên bên trong.",
    "summary": "Người thông minh bình thường nghĩ mình biết tất cả và chết vì sự tự phụ. Bậc thầy tư duy phân biệt rõ như ban ngày giữa: 1. Những gì mình thực sự hiểu sâu đến tận tủy tủy; và 2. Những gì mình chỉ có chút kiến thức bề nổi vay mượn.",
    "algorithm": [
      {
        "step": 1,
        "title": "Vẽ ranh giới trung thực tuyệt đối",
        "desc": "Liệt kê những lĩnh vực bạn có kinh nghiệm thực chiến dày dạn, có thể giải thích chi tiết mọi cơ chế vận hành từ số 0 mà không cần tra cứu."
      },
      {
        "step": 2,
        "title": "Xác định Vùng Chết (Out-of-Circle)",
        "desc": "Thẳng thắn thừa nhận những lĩnh vực bạn chỉ mới đọc vài bài báo hoặc nghe người khác nói (tiền số, công nghệ mới, thị trường lạ)."
      },
      {
        "step": 3,
        "title": "Nói 3 từ quyền lực: 'TÔI KHÔNG BIẾT'",
        "desc": "Khi đối mặt với cơ hội nằm ngoài vòng tròn, không xấu hổ, từ chối ngay lập tức mà không sợ bỏ lỡ (No FOMO)."
      },
      {
        "step": 4,
        "title": "Mở rộng vòng tròn bằng kỷ luật sắt",
        "desc": "Chỉ mở rộng biên giới của vòng tròn thông qua hàng trăm giờ nghiên cứu sâu và thử nghiệm vi mô, không mở rộng bằng ảo tưởng."
      }
    ],
    "powerQuestions": [
      "Tôi có lợi thế cạnh tranh độc nhất nào trong lĩnh vực này so với 99% những người khác?",
      "Tôi thực sự hiểu sâu sắc điều này, hay tôi chỉ đang phát biểu lại ý kiến của một chuyên gia nào đó trên mạng?",
      "Nếu tôi sai ở đây, cái giá phải trả có làm tôi gục ngã không?"
    ],
    "canonicalCase": {
      "title": "Warren Buffett từ chối bong bóng Dot-com năm 1999",
      "context": "Năm 1999, cả Phố Wall phát cuồng vì các công ty internet mới thành lập, cổ phiếu tăng 500% chỉ sau một đêm. Các nhà báo chế giễu Buffett là 'ông già lỗi thời hết thời' vì không mua cổ phiếu công nghệ nào.",
      "execution": "Buffett bình thản tuyên bố: 'Tôi không hiểu công nghệ này sẽ kiếm ra dòng tiền thật như thế nào trong 10 năm tới. Nó nằm ngoài vòng tròn năng lực của tôi, nên tôi sẽ không bỏ 1 xu nào vào đó'.",
      "result": "Năm 2000-2001, bong bóng công nghệ nổ tung, hàng ngàn tỷ USD bốc hơi, vô số quỹ đầu tư phá sản. Trong khi đó, tài sản của Buffett vẫn an toàn tuyệt đối và tiếp tục tăng trưởng."
    },
    "fatalPitfall": "Bẫy tài xế của Max Planck (Chauffeur Knowledge): Kiến thức của tài xế thuộc lòng bài phát biểu nhưng không hiểu bản chất bên trong, dễ nhầm lẫn mình là chuyên gia.",
    "mindsetPractice": "Lập một danh sách 'Những điều tôi quyết định KHÔNG tham gia' (Not-To-Do List). Bất cứ cơ hội nào mời gọi nằm trong danh sách này, lập tức từ chối trong 3 giây."
  },
  {
    "id": "lesson_regret_minimization",
    "code": "STRAT-09",
    "trackId": "strategy",
    "trackName": "II. Chiến Lược & Quyết Định Sinh Tử",
    "name": "Khung Tối Thiểu Hóa Hối Tiếc",
    "origName": "Regret Minimization Framework",
    "master": "Jeff Bezos (Sáng lập Amazon) & Bronnie Ware (The Top Five Regrets of the Dying)",
    "academicSource": "Jeff Bezos, 1994 Princeton University Interview & Speech; Bronnie Ware, The Top Five Regrets of the Dying (Hay House); Daniel Kahneman on Regret Theory.",
    "icon": "compass",
    "color": "from-blue-700 via-indigo-700 to-amber-600",
    "badge": "La Bàn Cuộc Đời 80 Tuổi",
    "axiom": "Khi nhìn lại cuộc đời ở tuổi 80, con người hiếm khi hối hận vì những điều mình đã thử làm mà thất bại; họ hầu như luôn đau đớn tột cùng vì những điều mình đã KHÔNG DÁM THỬ LÀM.",
    "summary": "Công cụ ra quyết định mang tầm nhìn thế kỷ giúp gạt bỏ hoàn toàn nỗi sợ hãi vụn vặt ngắn hạn (sợ mất mặt, sợ mất việc, sợ người khác dị nghị) để dấn thân vào những sứ mệnh vĩ đại nhất.",
    "algorithm": [
      {
        "step": 1,
        "title": "Dự phóng tâm thức về tuổi 80",
        "desc": "Nhắm mắt lại, tưởng tượng bạn đã 80 tuổi, đang ngồi trên ghế bập bênh và nhìn lại toàn bộ quãng đời đã qua."
      },
      {
        "step": 2,
        "title": "Đặt lên bàn cân nỗi hối tiếc",
        "desc": "Hỏi: 'Nếu mình thử làm việc này và thất bại thê thảm, ở tuổi 80 mình có hối tiếc vì đã thử không?' (Đáp án hầu như luôn là KHÔNG)."
      },
      {
        "step": 3,
        "title": "Hỏi câu hỏi tử thần ngược lại",
        "desc": "Hỏi: 'Nếu mình KHÔNG BAO GIỜ dám làm việc này và để cả đời trôi qua trong an toàn tầm thường, ở tuổi 80 mình có hối hận đến cắn rứt lương tâm không?'."
      },
      {
        "step": 4,
        "title": "Hành động dứt khoát xóa tan tiếng ồn",
        "desc": "Nếu đáp án ở Bước 3 là CÓ, toàn bộ các nỗi sợ hãi hiện tại (tiền lương, sĩ diện) trở nên vô nghĩa. Ra quyết định hành động ngay."
      }
    ],
    "powerQuestions": [
      "Ở tuổi 80, tôi sẽ tự hào vì đã dũng cảm dấn thân hay sẽ cay đắng vì đã chọn sống an phận nhát gan?",
      "Nỗi sợ hiện tại của tôi là sợ mất tiền thật hay chỉ là sợ tổn thương cái tôi sĩ diện trước mắt người khác?",
      "Kịch bản tệ nhất nếu thất bại là gì? Tôi có thể chịu đựng được nó không?"
    ],
    "canonicalCase": {
      "title": "Khoảnh khắc Jeff Bezos quyết định bỏ Phố Wall để sáng lập Amazon (1994)",
      "context": "Bezos đang là Phó chủ tịch trẻ nhất của quỹ đầu tư D.E. Shaw danh giá ở New York với mức lương thưởng hàng triệu USD. Ông phát hiện internet tăng trưởng 2.300% mỗi năm và muốn mở hiệu sách online.",
      "execution": "Sếp của ông khuyên: 'Đó là ý tưởng hay cho một người chưa có việc làm tốt, nhưng cậu đang có sự nghiệp quá tuyệt vời'. Bezos dùng Khung Tối Thiểu Hóa Hối Tiếc: Ông biết ở tuổi 80, ông sẽ không bao giờ hối hận vì đã bỏ khoản thưởng cuối năm 1994, nhưng ông sẽ day dứt cả đời nếu không tham gia vào cuộc cách mạng Internet.",
      "result": "Ông nộp đơn xin nghỉ việc ngay trong tuần, bay sang Seattle mở Amazon và thay đổi toàn bộ nền thương mại điện tử thế giới."
    },
    "fatalPitfall": "Bẫy lồng vàng (Golden Handcuffs): Bị trói buộc bởi mức lương ổn định và sự tiện nghi giả tạo khiến bạn trì hoãn ước mơ lớn cho đến khi quá muộn.",
    "mindsetPractice": "Viết ra 1 điều bạn hằng khao khát thực hiện suốt 1 năm qua nhưng vẫn trì hoãn vì sợ rủi ro. Soi nó qua lăng kính tuổi 80 và lên lịch thực hiện bước đầu tiên ngay hôm nay."
  },
  {
    "id": "lesson_opportunity_sunk_cost",
    "code": "STRAT-10",
    "trackId": "strategy",
    "trackName": "II. Chiến Lược & Quyết Định Sinh Tử",
    "name": "Tư Duy Chi Phí Cơ Hội & Triệt Tiêu Chi Phí Chìm",
    "origName": "Opportunity Cost & Sunk Cost Fallacy Eraser",
    "master": "Kinh tế học cổ điển (Friedrich von Wieser) & Daniel Kahneman & Richard Thaler (Nobel 2017)",
    "academicSource": "Friedrich von Wieser, Theory of Social Economy (1914); Thaler, Toward a positive theory of consumer choice; Kahneman & Tversky, Prospect Theory.",
    "icon": "dollar-sign",
    "color": "from-amber-600 to-emerald-600",
    "badge": "Bộ Lọc Nguồn Lực Tối Thượng",
    "axiom": "1. Cái giá thực sự của bất cứ thứ gì là giá trị của sự lựa chọn tốt nhất tiếp theo mà bạn phải từ bỏ để có được nó. 2. Tiền bạc, thời gian và công sức đã đổ ra trong quá khứ là biến số không thể cứu vãn, không được phép đưa vào phương trình tính toán cho tương lai.",
    "summary": "Người dại dột tiếp tục ăn một bát phở thối chỉ vì 'đã lỡ trả tiền'. Bậc thầy kinh tế học cắt đứt ngay lập tức mọi chi phí chìm và chỉ nhìn về phía trước: 'Từng giây từng phút tiếp theo, đâu là nơi sinh lời cao nhất cho cuộc đời tôi?'",
    "algorithm": [
      {
        "step": 1,
        "title": "Nhận diện Chi Phí Chìm (Sunk Cost Identification)",
        "desc": "Khoanh vùng số tiền, công sức, thời gian đã đổ vào dự án/mối quan hệ/khoản đầu tư thất bại. Tự nhủ: 'Dù làm gì thì số này cũng vĩnh viễn không quay lại'."
      },
      {
        "step": 2,
        "title": "Xóa sạch quá khứ khỏi bảng tính",
        "desc": "Định giá dự án ở thời điểm hiện tại: Nếu hôm nay bạn chưa từng bỏ 1 xu nào vào đây, bạn có sẵn sàng bỏ tiền mua lại nó không?"
      },
      {
        "step": 3,
        "title": "Tính toán Chi Phí Cơ Hội (Opportunity Cost Calculation)",
        "desc": "Nếu rút toàn bộ thời gian/tiền bạc còn lại ra và đầu tư vào cơ hội tốt nhất tiếp theo, lợi nhuận kỳ vọng là bao nhiêu?"
      },
      {
        "step": 4,
        "title": "Cắt lỗ không cảm xúc (Cold Execution)",
        "desc": "Nếu cơ hội mới vượt trội, lập tức cắt bỏ dự án cũ trong 1 nốt nhạc mà không một chút tiếc nuối."
      }
    ],
    "powerQuestions": [
      "Tôi đang tiếp tục làm điều này vì nó thực sự có tương lai, hay chỉ vì tôi tiếc công sức đã bỏ ra trong quá khứ?",
      "Nếu dùng 2 giờ đồng hồ này / số tiền này vào cơ hội tốt nhất khác trên đời, tôi sẽ nhận được gì?",
      "Nếu người khác tiếp quản vị trí của tôi hôm nay mà không có gánh nặng tâm lý quá khứ, họ sẽ quyết định thế nào?"
    ],
    "canonicalCase": {
      "title": "Andy Grove và khoảnh khắc tái sinh tập đoàn Intel (1985)",
      "context": "Intel từng là vua của ngành chip nhớ (Memory Chips), nhưng bị các công ty Nhật Bản cạnh tranh khốc liệt và thua lỗ nặng nề suốt nhiều năm. Các nhà quản lý Intel không nỡ từ bỏ vì chip nhớ là nơi khai sinh ra công ty.",
      "execution": "CEO Andy Grove nhìn vào Chủ tịch Gordon Moore và hỏi: 'Nếu chúng ta bị sa thải và hội đồng quản trị thuê một CEO mới toanh về đây, ông ta sẽ làm gì?'. Moore đáp ngay: 'Ông ta sẽ đóng cửa mảng chip nhớ và chuyển 100% sang làm chip vi xử lý (Microprocessor)'. Grove nói: 'Vậy tại sao chúng ta không tự bước ra ngoài cửa, quay trở lại và làm chính xác điều đó?'.",
      "result": "Intel dũng cảm cắt bỏ toàn bộ chi phí chìm của mảng chip nhớ, dồn lực sang vi xử lý Pentium và trở thành tập đoàn bán dẫn vĩ đại nhất hành tinh."
    },
    "fatalPitfall": "Bẫy cam kết leo thang (Escalation of Commitment): Tiếp tục ném tiền tốt vào việc xấu để cố chứng minh rằng mình đã không sai lúc ban đầu.",
    "mindsetPractice": "Xem lại danh mục công việc hoặc mối quan hệ đang tiêu tốn năng lượng của bạn. Tự hỏi: 'Nếu hôm nay được bắt đầu lại từ số 0, mình có chọn dính vào việc này không?'. Nếu câu trả lời là không, lên kế hoạch thoái lui."
  },
  {
    "id": "lesson_bayesian_thinking",
    "code": "PROB-11",
    "trackId": "probability",
    "trackName": "III. Xác Suất, Bayes & Bất Định",
    "name": "Tư Duy Cập Nhật Xác Suất Bayes",
    "origName": "Bayesian Thinking (Belief Updating with Evidence)",
    "master": "Thomas Bayes (1763) & Pierre-Simon Laplace",
    "academicSource": "Thomas Bayes, An Essay towards solving a Problem in the Doctrine of Chances (Philosophical Transactions of the Royal Society, 1763); Laplace, Théorie analytique des probabilités.",
    "icon": "dice-5",
    "color": "from-blue-600 via-indigo-600 to-purple-600",
    "badge": "Toán Học Nhận Thức Đỉnh Cao",
    "axiom": "P(A|B) = [P(B|A) * P(A)] / P(B). Niềm tin của một bộ óc thông tuệ không phải là một giáo điều nhị nguyên đúng/sai tuyệt đối, mà là một xác suất tỷ lệ cược luôn được cập nhật linh hoạt mỗi khi có bằng chứng mới.",
    "summary": "Người bảo thủ bám chặt lấy niềm tin ban đầu dù sự thật đã đổi khác. Người tư duy theo Bayes luôn giữ tâm thế mở: 'Xác suất ban đầu của tôi là bao nhiêu? Bằng chứng mới này có độ tin cậy đến đâu? Tôi phải điều chỉnh lại niềm tin của mình ở mức độ nào?'",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác lập Xác Suất Tiền Nghiệm (Prior Probability)",
        "desc": "Trước khi có sự kiện mới, tỷ lệ nền (Base Rate) xảy ra của hiện tượng này trong tự nhiên là bao nhiêu %? (Đừng bỏ qua tỷ lệ nền!)."
      },
      {
        "step": 2,
        "title": "Thu thập & Đánh giá Trọng số Bằng Chứng Mới (Likelihood)",
        "desc": "Bằng chứng mới xuất hiện có sức nặng thế nào? Tỷ lệ dương tính giả (False Positive) là bao nhiêu?"
      },
      {
        "step": 3,
        "title": "Tính toán Xác Suất Hậu Nghiệm (Posterior Probability)",
        "desc": "Hợp nhất tỷ lệ nền với bằng chứng mới theo công thức Bayes để ra con số xác suất mới chính xác."
      },
      {
        "step": 4,
        "title": "Lặp lại chu trình (Continuous Recalibration)",
        "desc": "Xác suất hậu nghiệm hôm nay sẽ trở thành tiền nghiệm của ngày mai khi có bằng chứng tiếp theo xuất hiện."
      }
    ],
    "powerQuestions": [
      "Tỷ lệ nền trong thực tế cho trường hợp này là bao nhiêu?",
      "Nếu giả thuyết của tôi hoàn toàn sai, khả năng tôi vẫn nhìn thấy bằng chứng này là bao nhiêu %? (Khả năng trùng hợp ngẫu nhiên)",
      "Bằng chứng cụ thể nào nếu xuất hiện sẽ khiến tôi lập tức thay đổi quan điểm của mình?"
    ],
    "canonicalCase": {
      "title": "Nghịch lý xét nghiệm y tế và bẫy bỏ quên tỷ lệ nền (Base Rate Fallacy)",
      "context": "Một căn bệnh hiếm gặp ảnh hưởng đến 1/1.000 người (0,1%). Có một xét nghiệm độ chính xác 99% (người bệnh chắc chắn dương tính, người không bệnh có 1% bị dương tính giả). Một bệnh nhân nhận kết quả dương tính.",
      "execution": "99% bác sĩ và người thường sẽ kết luận: 'Bệnh nhân có 99% khả năng mắc bệnh'. Tư duy Bayes chỉ ra sự thật: Trong 100.000 người, chỉ có 100 người thực sự có bệnh (và cả 100 người này đều dương tính). Nhưng trong 99.900 người khỏe mạnh, có tới 1% bị dương tính giả = 999 người! Vậy trong tổng số 1099 người có kết quả dương tính, chỉ có 100 người thực sự có bệnh ➔ Xác suất thực tế chỉ là 100 / 1099 ≈ 9,1%!",
      "result": "Cứu hàng triệu người khỏi sự hoảng loạn và giúp các bác sĩ không phẫu thuật nhầm."
    },
    "fatalPitfall": "Bỏ quên tỷ lệ nền (Base Rate Neglect): Quá tập trung vào một câu chuyện giật gân trước mắt mà quên mất xác suất thống kê cơ bản của toàn xã hội.",
    "mindsetPractice": "Khi nghe một tin đồn giật gân hoặc một lời hứa hẹn làm giàu siêu nhanh, hãy tra cứu tỷ lệ nền: 'Trong 100.000 người thử việc này, có bao nhiêu người thực sự làm được?'."
  },
  {
    "id": "lesson_antifragility",
    "code": "PROB-12",
    "trackId": "probability",
    "trackName": "III. Xác Suất, Bayes & Bất Định",
    "name": "Tư Duy Chống Mong Manh",
    "origName": "Antifragility (Things That Gain from Disorder)",
    "master": "Nassim Nicholas Taleb (Nguyên giáo sư Đại học New York - Tác giả Incerto)",
    "academicSource": "Nassim Nicholas Taleb, Antifragile: Things That Gain from Disorder (Random House, 2012); Taleb, Skin in the Game.",
    "icon": "shield",
    "color": "from-emerald-600 via-teal-600 to-amber-600",
    "badge": "Hấp Thu Hỗn Loạn Để Vươn Lên",
    "axiom": "Bộ ba trạng thái của vạn vật: 1. Mong manh (Dễ vỡ khi bị va đập); 2. Kiên cường (Chống chịu được va đập nhưng không thay đổi); 3. Chống mong manh (Càng bị va đập, biến động, áp lực thì càng trở nên mạnh mẽ hơn).",
    "summary": "Đừng cố gắng dự đoán tương lai hay mong cầu một cuộc đời phẳng lặng không sóng gió. Hãy thiết kế chính bộ não, tài chính và sự nghiệp của bạn ở trạng thái Chống Mong Manh: biến mọi khủng hoảng, thất bại thành phân bón cho bước nhảy vọt tiếp theo.",
    "algorithm": [
      {
        "step": 1,
        "title": "Loại bỏ triệt để Điểm Yếu Gây Tử Vong (Eliminate Ruin Risk)",
        "desc": "Không bao giờ để bản thân rơi vào trạng thái nếu một biến cố xảy ra là mất sạch vốn hoặc mất mạng (Không vay nợ quá mức, không dính líu pháp lý)."
      },
      {
        "step": 2,
        "title": "Áp dụng Chiến Lược Quả Tạ (Barbell Strategy)",
        "desc": "90% nguồn lực đặt vào những thứ cực kỳ an toàn, bảo thủ; 10% còn lại đặt vào các thử nghiệm có tính bùng nổ vô hạn với rủi ro mất tối đa chỉ là 10% đó."
      },
      {
        "step": 3,
        "title": "Chấp nhận các áp lực vi mô để rèn luyện (Stressors as Information)",
        "desc": "Như cơ bắp cần bị xé rách nhẹ trong phòng gym để to ra, não bộ và tổ chức cần các thử thách liên tục để tôi luyện khả năng miễn dịch."
      },
      {
        "step": 4,
        "title": "Thu hoạch từ sự bất đối xứng lồi (Optionality)",
        "desc": "Xây dựng các quyền chọn mở: Khi thị trường biến động hỗn loạn, trong khi kẻ khác hoảng loạn thì bạn là người nắm tiền mặt đi thâu tóm tài sản giá rẻ."
      }
    ],
    "powerQuestions": [
      "Hệ thống của tôi có yếu tố nào nếu vỡ sẽ kéo sập toàn bộ cuộc chơi không? (Single Point of Failure)",
      "Nếu cuộc khủng hoảng tồi tệ nhất xảy ra vào ngày mai, tôi sẽ gục ngã hay tôi sẽ trở nên giàu có và mạnh mẽ hơn?",
      "Làm sao để cấu trúc công việc này sao cho: nếu tôi sai, tôi chỉ mất một chút; nhưng nếu tôi đúng, tôi ăn trọn vẹn cả một bầu trời?"
    ],
    "canonicalCase": {
      "title": "Hệ thống miễn dịch sinh học và triết lý đầu tư của Taleb năm 2008",
      "context": "Trước khủng hoảng tài chính 2008, toàn bộ hệ thống ngân hàng Phố Wall xây dựng các mô hình định lượng phức tạp nhưng cực kỳ mong manh vì dùng đòn bẩy quá cao.",
      "execution": "Taleb dùng Chiến lược Quả tạ (Barbell): Ông giữ phần lớn tài sản ở tín phiếu kho bạc Mỹ siêu an toàn, và dùng một lượng tiền nhỏ mua các hợp đồng quyền chọn bán (Puts) phòng ngừa sụp đổ thị trường.",
      "result": "Khi cuộc khủng hoảng nổ ra, các ngân hàng khổng lồ sụp đổ, còn quỹ của Taleb kiếm được hàng trăm triệu USD lợi nhuận khổng lồ. Ông chứng minh cho thế giới thấy sức mạnh của việc chống mong manh."
    },
    "fatalPitfall": "Sự ổn định giả tạo (Turkey Illusion): Tưởng rằng 10 năm qua bình yên thì ngày mai cũng sẽ bình yên; kìm nén biến động nhỏ sẽ tích tụ thành đại hồng thủy lớn.",
    "mindsetPractice": "Rà soát lại tài chính và kỹ năng của bạn. Nếu bạn chỉ có đúng 1 nguồn thu nhập từ 1 công ty, bạn đang ở trạng thái 'Cực kỳ mong manh'. Hãy bắt đầu xây dựng kỹ năng thứ 2 độc lập ngay."
  },
  {
    "id": "lesson_margin_of_safety",
    "code": "PROB-13",
    "trackId": "probability",
    "trackName": "III. Xác Suất, Bayes & Bất Định",
    "name": "Tư Duy Biên Độ An Toàn",
    "origName": "Margin of Safety (The Three Central Words of Investing)",
    "master": "Benjamin Graham (Cha đẻ của Đầu tư Giá trị) & David Dodd (Đại học Columbia)",
    "academicSource": "Benjamin Graham & David Dodd, Security Analysis (1934); Graham, The Intelligent Investor (Chương 20: 'Margin of Safety as the Central Concept of Investment').",
    "icon": "shield-check",
    "color": "from-amber-600 to-yellow-600",
    "badge": "Lá Chắn Chống Sai Số Thực Tế",
    "axiom": "Chức năng của biên độ an toàn là làm cho việc dự đoán tương lai một cách chính xác trở nên KHÔNG CẦN THIẾT.",
    "summary": "Kỹ sư xây cầu thiết kế một cây cầu chịu tải 30 tấn dù biết chỉ có xe 10 tấn chạy qua. Nhà tư duy vĩ đại luôn dự phòng một khoảng cách an toàn 30-50% cho sự dốt nát của chính mình, các sai số tính toán và sự bất định của cuộc đời.",
    "algorithm": [
      {
        "step": 1,
        "title": "Định giá giá trị thực tế theo kịch bản bảo thủ nhất",
        "desc": "Không bao giờ dùng kịch bản lạc quan để tính toán. Dùng kịch bản xấu nhất: Doanh thu giảm 30%, chi phí tăng 20%, tiến độ trễ 2 tháng."
      },
      {
        "step": 2,
        "title": "Yêu cầu khoảng chiết khấu an toàn tối thiểu 30-40%",
        "desc": "Chỉ hành động khi mức giá / nguồn lực đòi hỏi thấp hơn đáng kể so với giá trị thực bạn nhận về."
      },
      {
        "step": 3,
        "title": "Dự phòng vùng đệm chịu tải dự phòng (Buffer Zone)",
        "desc": "Về thời gian: dự án dự tính 1 tháng thì lên lịch 1,5 tháng. Về tài chính: dự trù ngân sách gấp 1,3 lần số tính toán."
      },
      {
        "step": 4,
        "title": "Sống sót để chiến thắng",
        "desc": "Nhờ có biên độ an toàn, ngay cả khi bạn tính toán sai 20%, bạn vẫn bình an vô sự và tiếp tục cuộc chơi."
      }
    ],
    "powerQuestions": [
      "Cây cầu này chịu được tải trọng gấp mấy lần xe cộ bình thường?",
      "Nếu mọi giả định của tôi đều sai lệch 30%, kết quả sẽ ra sao?",
      "Tôi có đang định giá mọi thứ quá sát ván đến mức không có chỗ cho một sai lầm nào không?"
    ],
    "canonicalCase": {
      "title": "Kỹ thuật hàng không vũ trụ của NASA trong tàu đổ bộ Mặt Trăng Apollo",
      "context": "Khi đưa các phi hành gia lên Mặt Trăng, một lỗi nhỏ bằng hạt bụi cũng có thể cướp đi sinh mạng của cả phi hành đoàn cách Trái Đất 384.000 km.",
      "execution": "NASA áp dụng Biên độ an toàn tuyệt đối thông qua Nguyên tắc Dự phòng Tam cấp (Triple Redundancy): Mọi hệ thống máy tính, cảm biến và động cơ quan trọng đều có 3 hệ thống độc lập chạy song song. Nếu hệ thống 1 hỏng, hệ thống 2 tự động kích hoạt; nếu hệ thống 2 hỏng, hệ thống 3 tiếp quản.",
      "result": "Chuyến bay Apollo 13 gặp tai nạn nổ bình oxy ngoài vũ trụ nhưng toàn bộ phi hành đoàn vẫn quay trở về Trái Đất an toàn nhờ các hệ thống dự phòng."
    },
    "fatalPitfall": "Lạc quan sát nút (Precision Trap): Tưởng rằng tính toán ra 2 chữ số thập phân là chính xác, để rồi một cơn gió nhẹ cũng làm sập toàn bộ công trình.",
    "mindsetPractice": "Khi lên kế hoạch đi máy bay hoặc gặp khách hàng quan trọng, luôn cộng thêm 45 phút 'Biên độ an toàn' cho tắc đường. Bạn sẽ không bao giờ biết đến cảm giác hoảng loạn trễ giờ."
  },
  {
    "id": "lesson_expected_value_kelly",
    "code": "PROB-14",
    "trackId": "probability",
    "trackName": "III. Xác Suất, Bayes & Bất Định",
    "name": "Giá Trị Kỳ Vọng & Tiêu Chuẩn Kelly",
    "origName": "Expected Value (EV) & Kelly Criterion (Optimal Sizing)",
    "master": "Blaise Pascal (1654) & John Larry Kelly Jr. (Bell Labs, 1956) & Edward O. Thorp",
    "academicSource": "J.L. Kelly, A New Interpretation of Information Rate (Bell System Technical Journal, 1956); Ed Thorp, Beat the Dealer & A Man for All Markets; Pascal's Wager.",
    "icon": "calculator",
    "color": "from-cyan-600 via-blue-700 to-indigo-800",
    "badge": "Công Thức Toán Học Của Vận May",
    "axiom": "1. EV = (Xác suất Thắng * Lợi Nhuận Thắng) - (Xác suất Thua * Mức Mất Khi Thua). 2. Công thức Kelly: f* = (bp - q) / b xác định chính xác tỷ lệ % nguồn lực bạn nên đặt cược để tối đa hóa tốc độ tăng trưởng tài sản mà không bao giờ bị phá sản.",
    "summary": "Người cờ bạc nghiệp dư đặt cược dựa trên cảm tính hên xui. Bậc thầy định lượng chỉ hành động khi Giá Trị Kỳ Vọng Dương (+EV), và dùng Tiêu Chuẩn Kelly để tính toán chính xác nên bỏ bao nhiêu tiền/thời gian vào cơ hội đó.",
    "algorithm": [
      {
        "step": 1,
        "title": "Định lượng Xác Suất (p & q)",
        "desc": "Xác định xác suất thành công (p) và xác suất thất bại (q = 1 - p) dựa trên dữ liệu thực tế."
      },
      {
        "step": 2,
        "title": "Xác định Tỷ Lệ Lợi Nhuận (b - Odds)",
        "desc": "Nếu thắng, bạn kiếm được gấp mấy lần số tiền/nguồn lực bạn bỏ ra? (Ví dụ: cược 1 ăn 3 thì b = 3)."
      },
      {
        "step": 3,
        "title": "Tính toán Giá Trị Kỳ Vọng (+EV)",
        "desc": "Nếu EV âm ➔ Tuyệt đối KHÔNG THAM GIA dù cơ hội có vẻ hấp dẫn thế nào. Chỉ tham gia khi EV dương rõ rệt."
      },
      {
        "step": 4,
        "title": "Áp dụng Công thức Kelly điều chỉnh (Fractional Kelly)",
        "desc": "Tính f* = (bp - q) / b. Khuyên dùng Half-Kelly (1/2 f*) để tránh rủi ro do sai số ước lượng xác suất."
      }
    ],
    "powerQuestions": [
      "Về mặt toán học dài hạn, nếu tôi lặp lại quyết định này 1.000 lần, tôi sẽ giàu lên hay tôi sẽ khánh kiệt?",
      "Tôi có đang cược quá lớn vào một cơ hội có xác suất thắng cao nhưng nếu thua là mất sạch toàn bộ không?",
      "Quy mô đặt cược tối ưu cho nước đi này là bao nhiêu % tổng vốn của tôi?"
    ],
    "canonicalCase": {
      "title": "Ed Thorp - Giáo sư toán học đánh bại sòng bạc Las Vegas và Phố Wall",
      "context": "Các sòng bạc luôn nắm giữ lợi thế toán học để người chơi chắc chắn thua về dài hạn. Trò Blackjack (Xì dách) từng được coi là bất khả chiến bại.",
      "execution": "Giáo sư Ed Thorp phát minh ra phương pháp đếm bài (Card Counting) để xác định thời điểm lợi thế nghiêng về phía người chơi (+EV). Khi EV dương, ông áp dụng Tiêu chuẩn Kelly để tăng mức cược, khi EV âm ông cược mức tối thiểu.",
      "result": "Ông bị các sòng bạc cấm cửa vì thắng quá nhiều tiền. Sau đó, ông áp dụng công thức này sang thị trường chứng khoán mở quỹ đầu cơ Princeton Newport Partners, đạt tỷ suất sinh lời liên tục 30 năm không có một năm nào lỗ."
    },
    "fatalPitfall": "Đặt cược quá tay (Overbetting): Ngay cả khi trò chơi có +EV khổng lồ, nếu bạn đặt cược quá mức quy định của công thức Kelly, sự biến động ngẫu nhiên chắc chắn sẽ đưa bạn về con số 0.",
    "mindsetPractice": "Mỗi khi đưa ra quyết định kinh doanh hoặc đầu tư, hãy viết ra 2 cột: 'Nếu đúng được bao nhiêu?' x 'Khả năng đúng' trừ đi 'Nếu sai mất bao nhiêu?' x 'Khả năng sai'. Không bao giờ làm việc có -EV."
  },
  {
    "id": "lesson_black_swan_extremistan",
    "code": "PROB-15",
    "trackId": "probability",
    "trackName": "III. Xác Suất, Bayes & Bất Định",
    "name": "Tư Duy Thiên Nga Đen & Đuôi Béo",
    "origName": "The Black Swan & Extremistan (Fat-Tailed Reality)",
    "master": "Nassim Nicholas Taleb (Tác giả The Black Swan)",
    "academicSource": "Nassim Nicholas Taleb, The Black Swan: The Impact of the Highly Improbable (Random House, 2007); Benoit Mandelbrot, The Fractal Geometry of Nature.",
    "icon": "alert-triangle",
    "color": "from-slate-800 via-zinc-700 to-red-950",
    "badge": "Giải Mã Thế Giới Phi Tuyến",
    "axiom": "Thế giới hiện đại không vận hành theo Phân Phối Chuẩn hình chuông (Mediocristan) nơi mọi thứ bị giới hạn bởi giá trị trung bình; thế giới vận hành theo Thế Giới Cực Đoan (Extremistan) nơi một sự kiện đơn lẻ bất thường có thể chi phối toàn bộ kết quả.",
    "summary": "Người tầm thường nhìn quá khứ 10 năm bình yên rồi ngây thơ tin rằng ngày mai cũng thế. Bậc thầy tư duy luôn đề phòng các biến cố 'Thiên nga đen': Không thể dự đoán chính xác thời điểm xảy ra, nhưng có tác động hủy diệt khổng lồ, và sau khi xảy ra người ta lại bịa ra lý do giải thích như thể nó rất dễ thấy.",
    "algorithm": [
      {
        "step": 1,
        "title": "Phân biệt Mediocristan vs Extremistan",
        "desc": "Hỏi: Lĩnh vực này có bị giới hạn vật lý không? (Cân nặng, chiều cao là Mediocristan; Doanh số sách, cổ phiếu, đại dịch, chiến tranh là Extremistan)."
      },
      {
        "step": 2,
        "title": "Không dự đoán thời điểm, hãy chuẩn bị cho tác động",
        "desc": "Đừng cố đoán xem bao giờ khủng hoảng nổ ra. Hãy đo lường xem: Nếu khủng hoảng nổ ra ngay bây giờ, mình có bị diệt vong không?"
      },
      {
        "step": 3,
        "title": "Lồi lõm hóa rủi ro (Convexity)",
        "desc": "Tránh các vị thế: Rủi ro vô hạn nhưng lợi nhuận hữu hạn (nhặt tiền xu trước đầu xe lu). Chỉ chọn vị thế: Rủi ro mất hữu hạn nhưng tiềm năng tăng trưởng vô hạn."
      },
      {
        "step": 4,
        "title": "Tôn trọng sự bất đối xứng của tri thức",
        "desc": "Những gì bạn KHÔNG BIẾT có sức mạnh lớn hơn gấp ngàn lần những gì bạn đã biết."
      }
    ],
    "powerQuestions": [
      "Có biến cố bất thường nào mà trong 100 năm qua chưa từng xảy ra, nhưng nếu xảy ra sẽ xóa sổ toàn bộ những gì tôi đang làm?",
      "Tôi có đang nhầm lẫn giữa 'chưa thấy bằng chứng về rủi ro' với 'bằng chứng là không có rủi ro' không?",
      "Làm sao để hưởng lợi lớn nhất nếu một sự kiện Thiên nga đen ập đến?"
    ],
    "canonicalCase": {
      "title": "Sự sụp đổ của Quỹ Long-Term Capital Management (LTCM) năm 1998",
      "context": "Quỹ LTCM quy tụ 2 nhà khoa học đoạt giải Nobel Kinh tế học (Myron Scholes và Robert Merton) cùng các bộ óc toán học thiên tài nhất thế giới, sử dụng các mô hình máy tính siêu tinh vi dựa trên phân phối chuẩn.",
      "execution": "Mô hình tính toán rằng xác suất thị trường Nga vỡ nợ là 1 phần tỷ tỷ (hầu như không thể xảy ra trong lịch sử vũ trụ). Nhưng cuộc khủng hoảng tài chính Nga năm 1998 nổ ra — một sự kiện Thiên nga đen đuôi béo.",
      "result": "Quỹ LTCM cháy sạch 4,6 tỷ USD chỉ trong vài tuần và suýt làm sụp đổ toàn bộ hệ thống tài chính toàn cầu, chứng minh rằng các mô hình toán học coi thường Thiên nga đen chỉ là ảo tưởng nguy hiểm."
    },
    "fatalPitfall": "Nhận thức muộn màng (Hindsight Bias): Sau khi một sự kiện kinh hoàng xảy ra, mọi người đều nói 'tôi đã biết trước điều đó', tạo ra ảo tưởng rằng tương lai rất dễ đoán.",
    "mindsetPractice": "Tự hỏi bản thân: 'Nếu internet bị cắt toàn cầu trong 1 tháng, hoặc ngành nghề của mình biến mất sau 1 đêm vì AI, mình sẽ sống sót thế nào?'. Luôn có một phương án dự phòng cho kịch bản cực đoan nhất."
  },
  {
    "id": "lesson_stocks_flows_delays",
    "code": "SYS-16",
    "trackId": "systems",
    "trackName": "IV. Hệ Thống & Động Lực Học",
    "name": "Bể Chứa, Dòng Chảy & Độ Trễ Thời Gian",
    "origName": "Stocks, Flows & System Delays",
    "master": "Jay Wright Forrester (MIT Sloan School of Management) & Donella Meadows",
    "academicSource": "Jay W. Forrester, Industrial Dynamics (1961); Donella Meadows, Thinking in Systems: A Primer (Chelsea Green Publishing, 2008).",
    "icon": "layers",
    "color": "from-blue-600 via-teal-600 to-emerald-600",
    "badge": "Giải Phẫu Động Cơ Hệ Thống",
    "axiom": "Bất kỳ hệ thống phức tạp nào trong vũ trụ đều được cấu thành từ 3 phần tử: 1. Bể Chứa (Stocks - tài nguyên tích lũy); 2. Dòng Chảy (Inflows/Outflows - tốc độ nạp/xả); và 3. Độ Trễ (Delays - thời gian cần thiết để thông tin và vật chất di chuyển).",
    "summary": "Người có tư duy phi hệ thống chỉ nhìn thấy hiện trạng tĩnh. Người có tư duy hệ thống nhìn thấy tốc độ dòng chảy và độ trễ. Họ biết rằng việc thay đổi một dòng chảy hôm nay có thể mất 6 tháng sau mới biểu hiện ra bể chứa, do đó họ không bao giờ phản ứng hoảng loạn quá đà.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định các Bể Chứa Cốt Lõi (Identify Stocks)",
        "desc": "Trong bài toán này, tài nguyên tích lũy là gì? (Kiến thức trong não, tiền trong tài khoản, lòng tin của khách hàng, năng lượng cơ thể)."
      },
      {
        "step": 2,
        "title": "Đo lường Dòng Nạp (Inflow) và Dòng Xả (Outflow)",
        "desc": "Bể chứa chỉ tăng lên khi Dòng nạp > Dòng xả. Nếu muốn tăng bể chứa, bạn có thể tăng dòng nạp HOẶC bịt các lỗ rò rỉ dòng xả (bịt rò rỉ thường dễ hơn nạp mới!)."
      },
      {
        "step": 3,
        "title": "Lập bản đồ Độ Trễ Thời Gian (Map Delays)",
        "desc": "Từ lúc bạn xoay van điều tiết đến khi mức nước trong bể thực sự thay đổi mất bao lâu? (Độ trễ học tập, độ trễ thị trường, độ trễ thể chất)."
      },
      {
        "step": 4,
        "title": "Duy trì tay lái ổn định, tránh điều chỉnh quá mức (Oversteering)",
        "desc": "Không vội vàng tăng ga hay phanh gấp khi thấy kết quả chưa thay đổi ngay tức thì. Tôn trọng thời gian trễ tự nhiên của hệ thống."
      }
    ],
    "powerQuestions": [
      "Bể chứa quan trọng nhất của tôi lúc này đang được nạp đầy hay đang bị rò rỉ ngầm?",
      "Độ trễ giữa hành động của tôi và kết quả thực tế là bao lâu?",
      "Tôi có đang rơi vào bẫy 'điều chỉnh vòi nước tắm' (chỉnh nóng quá rồi lại chỉnh lạnh quá vì nước trễ) không?"
    ],
    "canonicalCase": {
      "title": "Trò chơi Bia nổi tiếng của MIT (MIT Beer Distribution Game)",
      "context": "Giáo sư Jay Forrester tại MIT tổ chức một mô phỏng chuỗi cung ứng bia gồm 4 mắt xích: Nhà bán lẻ ➔ Nhà bán buôn ➔ Nhà phân phối ➔ Nhà máy sản xuất.",
      "execution": "Khi nhu cầu người tiêu dùng ngoài quán bar chỉ tăng nhẹ từ 4 thùng lên 8 thùng bia mỗi tuần, do độ trễ liên lạc và giao hàng mất vài tuần giữa các khâu, mỗi khâu đều hoảng sợ đặt dư hàng dự phòng (Hiệu ứng Bullwhip). Kết quả là nhà máy sản xuất vọt lên 40 thùng bia/tuần!",
      "result": "Chỉ sau vài tuần, kho hàng ở tất cả các khâu đều ứ đọng bia khổng lồ và toàn bộ chuỗi cung ứng rơi vào khủng hoảng thua lỗ nặng nề, chỉ vì không ai hiểu về độ trễ hệ thống."
    },
    "fatalPitfall": "Phản ứng giật cục với độ trễ (Overcompensating for Delays): Khi không thấy kết quả ngay tức khắc, người ta hoảng sợ tăng gấp đôi liều lượng khiến hệ thống bị sốc và vỡ trận.",
    "mindsetPractice": "Khi bắt đầu một thói quen mới (học ngoại ngữ, tập gym), hãy ghi nhớ: Bể chứa kiến thức/cơ bắp có độ trễ ít nhất 60-90 ngày. Đừng bao giờ phán xét hiệu quả chỉ sau 1 tuần."
  },
  {
    "id": "lesson_feedback_loops",
    "code": "SYS-17",
    "trackId": "systems",
    "trackName": "IV. Hệ Thống & Động Lực Học",
    "name": "Vòng Lặp Phản Hồi: Tăng Cường vs Cân Bằng",
    "origName": "Feedback Loops (Reinforcing vs Balancing Loops)",
    "master": "Norbert Wiener (Cha đẻ Điều khiển học - Cybernetics) & Peter Senge (MIT)",
    "academicSource": "Norbert Wiener, Cybernetics: Or Control and Communication in the Animal and the Machine (1948); Peter Senge, The Fifth Discipline: The Art & Practice of The Learning Organization.",
    "icon": "refresh-cw",
    "color": "from-purple-600 via-indigo-600 to-cyan-600",
    "badge": "Động Cơ Tự Nhân Bản Vô Hạn",
    "axiom": "Mọi sự sinh sôi hoặc suy vong trong vũ trụ đều được dẫn dắt bởi 2 loại vòng lặp: 1. Vòng lặp Tăng cường (Reinforcing - Khuếch đại theo hàm mũ); và 2. Vòng lặp Cân bằng (Balancing - Triệt tiêu sai lệch để giữ trạng thái ổn định).",
    "summary": "Người nghèo bị cuốn vào vòng lặp suy đồi (thiếu tiền ➔ căng thẳng ➔ quyết định sai ➔ càng nghèo). Bậc thầy tư duy biết cách thiết kế cho mình một Vòng lặp Tăng cường tích cực (Lãi kép tri thức: học giỏi ➔ làm tốt ➔ có uy tín ➔ có nhiều cơ hội học sâu hơn) và thiết lập các Vòng lặp Cân bằng để bảo vệ mình không bị trượt dốc.",
    "algorithm": [
      {
        "step": 1,
        "title": "Vẽ sơ đồ Nhân - Quả khép kín (Causal Loop Diagram)",
        "desc": "Thay vì tư duy theo đường thẳng A ➔ B, hãy tự hỏi: Kết quả B sau đó tác động ngược lại nguyên nhân A như thế nào?"
      },
      {
        "step": 2,
        "title": "Nhận diện Vòng Lặp Tăng Cường (Reinforcing Loop - Lãi kép)",
        "desc": "Tìm biến số mà khi nó tăng lên, nó làm cho các biến số khác tăng theo và quay lại kích nổ chính nó (Bánh đà - Flywheel)."
      },
      {
        "step": 3,
        "title": "Nhận diện Vòng Lặp Cân Bằng (Balancing Loop - Ổn nhiệt)",
        "desc": "Tìm lực cản tự nhiên hoặc cơ chế tự động giới hạn ngăn cản hệ thống phát triển (Ví dụ: sự mệt mỏi, phản ứng của đối thủ)."
      },
      {
        "step": 4,
        "title": "Tháo gỡ điểm nghẽn của Vòng Lặp Cân Bằng",
        "desc": "Cách tăng tốc bánh đà hiệu quả nhất không phải là đẩy mạnh hơn, mà là tháo bỏ các phanh hãm đang cản trở nó."
      }
    ],
    "powerQuestions": [
      "Hành động của tôi hôm nay đang kích hoạt một vòng lặp tự sinh sôi hay một vòng xoáy đi xuống?",
      "Cái phanh hãm lớn nhất đang ghìm chặt bánh đà phát triển của tôi là gì?",
      "Làm sao để biến một nỗ lực đơn lẻ thành một động cơ tự chạy mà không cần tôi phải đẩy mỗi ngày?"
    ],
    "canonicalCase": {
      "title": "Bánh đà tăng trưởng huyền thoại của Jeff Bezos tại Amazon (Flywheel Effect)",
      "context": "Jim Collins (tác giả Từ Tốt Đến Vĩ Đại) đến thăm Amazon và giúp Bezos vẽ sơ đồ vòng lặp phản hồi cốt lõi của công ty trên một chiếc khăn ăn.",
      "execution": "Bezos vẽ một vòng tròn khép kín: Giá thấp hơn ➔ Thu hút nhiều khách hàng hơn ➔ Thu hút nhiều người bán bên thứ ba ➔ Tăng doanh thu quy mô ➔ Giảm chi phí cố định trên mỗi đơn vị hàng ➔ Lại có tiền để hạ giá thấp hơn nữa!",
      "result": "Mỗi bộ phận trong Amazon không hoạt động riêng rẽ, mà toàn bộ công ty là một động cơ phản hồi khuếch đại tự đẩy lẫn nhau quay nhanh hơn sau mỗi năm."
    },
    "fatalPitfall": "Bẫy vòng xoáy tử thần (Vicious Cycle): Để mặc một thói quen xấu tích tụ, vòng lặp tiêu cực sẽ tự khuếch đại theo hàm mũ cho đến khi hủy hoại toàn bộ sự nghiệp.",
    "mindsetPractice": "Tìm ra 1 'Bánh đà cá nhân': Đọc sách 30 phút mỗi sáng ➔ Viết lại 1 bài học ➔ Ứng dụng vào công việc ➔ Đạt kết quả tốt ➔ Hưng phấn lại muốn đọc tiếp. Đưa nó vào lịch trình cố định."
  },
  {
    "id": "lesson_theory_of_constraints",
    "code": "SYS-18",
    "trackId": "systems",
    "trackName": "IV. Hệ Thống & Động Lực Học",
    "name": "Lý Thuyết Điểm Nghẽn / Nút Cổ Chai",
    "origName": "Theory of Constraints (TOC - Bottleneck Thinking)",
    "master": "Eliyahu M. Goldratt (Nhà vật lý học & Chuyên gia quản trị)",
    "academicSource": "Eliyahu M. Goldratt, The Goal: A Process of Ongoing Improvement (North River Press, 1984); Goldratt, It's Not Luck.",
    "icon": "filter",
    "color": "from-amber-600 via-orange-600 to-red-600",
    "badge": "Giải Phóng Toàn Bộ Sức Mạnh Hệ Thống",
    "axiom": "Một sợi dây xích chỉ khỏe bằng mắt xích yếu nhất của nó. Trong bất kỳ hệ thống phức tạp nào tại một thời điểm, chỉ có MỘT và CHỈ MỘT điểm nghẽn giới hạn toàn bộ sản lượng đầu ra.",
    "summary": "Người kém cỏi cố gắng tối ưu hóa tất cả mọi thứ cùng một lúc và kiệt sức. Bậc thầy tư duy biết rằng mọi nỗ lực cải tiến nằm ngoài Điểm Nghẽn đều là ẢO TƯỞNG và LÃNG PHÍ. Chỉ cần tìm đúng điểm nghẽn duy nhất và giải phóng nó, toàn bộ hệ thống sẽ tăng vọt công suất.",
    "algorithm": [
      {
        "step": 1,
        "title": "BƯỚC 1: Xác định Điểm Nghẽn (Identify the Constraint)",
        "desc": "Quan sát xem khâu nào trong quy trình đang có hàng ứ đọng nhiều nhất, khâu nào chạy chậm nhất kìm hãm toàn bộ các khâu khác?"
      },
      {
        "step": 2,
        "title": "BƯỚC 2: Khai thác tối đa Điểm Nghẽn (Exploit the Constraint)",
        "desc": "Điểm nghẽn không được phép lãng phí 1 giây nào! Loại bỏ mọi công việc vô bổ, giữ cho điểm nghẽn luôn hoạt động ở 100% công suất tối ưu."
      },
      {
        "step": 3,
        "title": "BƯỚC 3: Đồng bộ tất cả các khâu khác theo Điểm Nghẽn (Subordinate Everything Else)",
        "desc": "Các khâu chạy nhanh hơn không được chạy thừa mứa tạo thêm rác; toàn bộ hệ thống phải chạy theo nhịp điệu của điểm nghẽn (Cơ chế Trống - Đệm - Dây)."
      },
      {
        "step": 4,
        "title": "BƯỚC 4: Nâng cấp Điểm Nghẽn (Elevate the Constraint)",
        "desc": "Nếu đã khai thác hết công suất mà vẫn thiếu, đầu tư thêm tiền bạc, nhân sự hoặc công nghệ để mở rộng điểm nghẽn đó."
      },
      {
        "step": 5,
        "title": "BƯỚC 5: Lặp lại từ đầu, cảnh giác với quán tính (Repeat & Watch Inertia)",
        "desc": "Khi điểm nghẽn cũ bị phá vỡ, điểm nghẽn mới sẽ lập tức xuất hiện ở một khâu khác. Tuyệt đối không để quán tính ru ngủ."
      }
    ],
    "powerQuestions": [
      "Điểm nghẽn số 1 đang kìm hãm sự nghiệp, trí tuệ hoặc thu nhập của tôi lúc này là gì?",
      "Tôi có đang lãng phí thời gian tối ưu hóa những mắt xích phụ trong khi mắt xích yếu nhất vẫn đang nghẹt thở không?",
      "Nếu giải quyết được đúng mắt xích này, sản lượng toàn bộ cuộc đời tôi sẽ tăng lên gấp mấy lần?"
    ],
    "canonicalCase": {
      "title": "Nhà máy cơ khí của Alex Rogo trong cuốn tiểu thuyết kinh điển 'The Goal'",
      "context": "Một nhà máy sản xuất linh kiện sắp bị đóng cửa trong 3 tháng vì đơn hàng luôn bị trễ hạn, chi phí tồn kho khổng lồ dù họ vừa mua robot tự động hóa triệu đô.",
      "execution": "Nhà vật lý Jonah chỉ ra: Con robot chạy quá nhanh tạo ra hàng ngàn linh kiện tồn kho, trong khi máy nhiệt luyện NCX-10 ở khâu sau chạy cực chậm, tạo thành nút cổ chai nghẹt thở. Cả nhà máy chỉ giao hàng được bằng tốc độ của chiếc máy NCX-10!",
      "result": "Họ dừng việc sản xuất thừa mứa của robot, dồn toàn bộ thợ giỏi nhất và quy trình kiểm tra chất lượng lên phía trước máy NCX-10 để nó không bao giờ phải xử lý phôi lỗi. Nhà máy giao hàng đúng hạn 100% và trở nên siêu lợi nhuận."
    },
    "fatalPitfall": "Tối ưu hóa cục bộ (Local Optimization): Làm cho một bộ phận chạy cực nhanh nhưng không làm tăng sản lượng chung của toàn hệ thống, chỉ tạo thêm rác và tắc nghẽn.",
    "mindsetPractice": "Tự hỏi bản thân: 'Trong chuỗi học tập của mình: Thu thập tài liệu ➔ Đọc hiểu ➔ Ghi nhớ ➔ Thực hành ➔ Xuất ra kết quả, khâu nào đang là nút cổ chai nghẽn nhất?'. Dành 80% thời gian hôm nay khai thông khâu đó."
  },
  {
    "id": "lesson_12_leverage_points",
    "code": "SYS-19",
    "trackId": "systems",
    "trackName": "IV. Hệ Thống & Động Lực Học",
    "name": "12 Điểm Tựa Đòn Bẩy Can Thiệp Hệ Thống",
    "origName": "12 Leverage Points: Places to Intervene in a System",
    "master": "Donella Meadows (Nhà khoa học môi trường & Tiên phong tư duy hệ thống MIT)",
    "academicSource": "Donella Meadows, Leverage Points: Places to Intervene in a System (The Sustainability Institute, 1999); Whole Earth Review.",
    "icon": "anchor",
    "color": "from-teal-600 via-emerald-600 to-indigo-700",
    "badge": "Bản Đồ Can Thiệp Tối Thượng",
    "axiom": "Điểm tựa đòn bẩy là nơi mà một sự thay đổi nhỏ có thể tạo ra một sự chuyển biến khổng lồ trên toàn bộ hệ thống. Nhưng nghịch lý là 99% mọi người thường dồn sức vào những điểm tựa đòn bẩy yếu nhất.",
    "summary": "Donella Meadows xếp hạng 12 nấc thang can thiệp vào một hệ thống từ yếu nhất đến quyền năng nhất: Thay đổi các thông số con số (nấc 12 - yếu nhất) ➔ Thay đổi dòng thông tin ➔ Thay đổi luật chơi ➔ Thay đổi mục tiêu hệ thống ➔ Thay đổi Hệ Hình / Mô Thức Nhận Thức (Paradigm - nấc 1 - quyền năng tối thượng).",
    "algorithm": [
      {
        "step": 1,
        "title": "Thẩm định nấc can thiệp hiện tại",
        "desc": "Bạn có đang cố gắng giải quyết vấn đề bằng cách thay đổi các thông số vặt vãnh (tăng giờ làm, tăng tiền phạt - Đòn bẩy thấp)?"
      },
      {
        "step": 2,
        "title": "Tiến lên nấc Đòn Bẩy Thông Tin (Information Flows)",
        "desc": "Làm cho luồng thông tin phản hồi trở nên minh bạch và tức thì (Ví dụ: lắp đồng hồ đo điện ngay phòng khách khiến người ta tự động giảm 30% tiền điện)."
      },
      {
        "step": 3,
        "title": "Tiến lên nấc Đòn Bẩy Luật Chơi (Rules of the System)",
        "desc": "Ai nắm quyền thưởng phạt? Thay đổi các điều luật và ưu đãi cốt lõi chi phối hành vi con người."
      },
      {
        "step": 4,
        "title": "Kích hoạt Đòn Bẩy Tối Thượng: Thay Đổi Hệ Hình (Paradigm Shift)",
        "desc": "Đập tan thế giới quan cũ và cài đặt một hệ tư tưởng mới toanh. Khi hệ hình thay đổi, toàn bộ mục tiêu, luật chơi và cơ cấu hệ thống tự động đổi khác hoàn toàn."
      }
    ],
    "powerQuestions": [
      "Tôi có đang bận rộn vặn các con ốc nhỏ trong khi toàn bộ cỗ máy đang chạy theo một hướng sai lầm?",
      "Làm sao để đưa thông tin phản hồi về hậu quả đến tai người ra quyết định một cách tức thì?",
      "Giả định sâu xa nhất (Mô thức nhận thức) đang chi phối cách hệ thống này vận hành là gì?"
    ],
    "canonicalCase": {
      "title": "Chương trình kiểm soát vũ khí hạt nhân và đề xuất của Roger Fisher",
      "context": "Trong Chiến tranh Lạnh, các Tổng thống Mỹ có thể ra lệnh phóng tên lửa hạt nhân hủy diệt hàng trăm triệu người chỉ bằng một mật mã bấm nút từ xa.",
      "execution": "Giáo sư Roger Fisher (Đại học Harvard) đề xuất một Đòn bẩy Thông tin & Cảm xúc cực đoan: Cấy mật mã hạt nhân vào một chiếc viên nang nhỏ nằm cạnh tim của một sĩ quan cận vệ luôn đi cùng Tổng thống. Nếu Tổng thống muốn nhấn nút giết 100 triệu người vô tội, trước tiên ông phải tự tay cầm dao giết chết người cận vệ trẻ tuổi trung thành đứng cạnh mình để lấy mật mã.",
      "result": "Các nhà lãnh đạo Lầu Năm Góc từ chối đề xuất này vì họ thừa nhận: khi thông tin về cái chết trở nên trực diện và tức thì, không một Tổng thống nào dám bấm nút. Đó là minh chứng cho sức mạnh của việc thay đổi cấu trúc thông tin."
    },
    "fatalPitfall": "Đẩy đòn bẩy ngược chiều (Pushing in the wrong direction): Nhận diện đúng điểm đòn bẩy nhưng lại can thiệp theo trực giác nông cạn, khiến hệ thống phản ứng ngược lại còn tồi tệ hơn.",
    "mindsetPractice": "Khi muốn thay đổi một thói quen xấu của bản thân, đừng chỉ dùng ý chí tự ép buộc (Đòn bẩy thấp). Hãy thay đổi môi trường xung quanh và luật chơi (Đòn bẩy cao: giấu điện thoại ở phòng khác khi làm việc)."
  },
  {
    "id": "lesson_network_effects",
    "code": "SYS-20",
    "trackId": "systems",
    "trackName": "IV. Hệ Thống & Động Lực Học",
    "name": "Hiệu Ứng Mạng & Quy Luật Metcalfe",
    "origName": "Network Effects & Metcalfe's Law (Exponential Scalability)",
    "master": "Robert Metcalfe (Đồng sáng chế Ethernet) & W. Brian Arthur (Viện Santa Fe)",
    "academicSource": "Bob Metcalfe, Metcalfe's Law after 40 Years of Ethernet (IEEE Computer, 2013); W. Brian Arthur, Increasing Returns and Path Dependence in the Economy.",
    "icon": "share-2",
    "color": "from-blue-600 via-purple-600 to-pink-600",
    "badge": "Định Luật Tăng Trưởng Hàm Mũ",
    "axiom": "Giá trị của một mạng lưới tỷ lệ thuận với bình phương số lượng người dùng kết nối trong mạng lưới đó (V ∝ N²). Khi số nút mạng tăng tuyến tính, giá trị và sức mạnh phòng thủ của mạng lưới tăng phi tuyến theo cấp số nhân.",
    "summary": "Trong nền kinh tế cũ, thêm một khách hàng thì chi phí tăng theo. Trong kỷ nguyên số và tri thức, mỗi người dùng mới / mỗi mắt xích mới gia nhập sẽ tự động làm tăng giá trị cho TẤT CẢ những người dùng cũ mà không tốn thêm chi phí. Đây là hào bảo vệ kinh tế mạnh nhất hành tinh.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định bản chất Mạng Lưới (Direct vs Indirect)",
        "desc": "Mạng lưới trực tiếp (người dùng kết nối với người dùng như Facebook, điện thoại) hay Mạng lưới hai chiều (người mua kết nối người bán như Uber, Airbnb)?"
      },
      {
        "step": 2,
        "title": "Vượt qua Khối Lượng Tới Hạn (Critical Mass)",
        "desc": "Giai đoạn đầu mạng lưới có giá trị bằng 0. Phải tập trung toàn lực vào một ngách siêu nhỏ để xây dựng mật độ kết nối cao nhất trước khi lan tỏa."
      },
      {
        "step": 3,
        "title": "Gia tăng Chi Phí Chuyển Đổi (High Switching Costs)",
        "desc": "Mỗi khi người dùng tạo ra dữ liệu, mối quan hệ và lịch sử trên mạng lưới, chi phí từ bỏ để chuyển sang đối thủ trở nên quá đắt đỏ."
      },
      {
        "step": 4,
        "title": "Thiết lập vị thế 'Kẻ chiến thắng chiếm phần lớn' (Winner-Take-Most)",
        "desc": "Khi hiệu ứng mạng đã bùng nổ, đối thủ dù có nhiều tiền hơn gấp 10 lần cũng hầu như không thể lật đổ được."
      }
    ],
    "powerQuestions": [
      "Mỗi người dùng mới hoặc mỗi tri thức mới nạp vào có tự động làm tăng giá trị cho các phần còn lại không?",
      "Làm sao để vượt qua bài toán 'Con gà hay quả trứng' ở giai đoạn khởi đầu?",
      "Cơ chế nào giữ chân người dùng khiến họ không thể rời bỏ hệ sinh thái này?"
    ],
    "canonicalCase": {
      "title": "Sự thống trị của hệ điều hành Microsoft Windows và Bàn phím QWERTY",
      "context": "Apple Macintosh từng có giao diện đồ họa đẹp hơn và dễ dùng hơn Windows rất nhiều lần vào những năm 1980.",
      "execution": "Nhưng Bill Gates nắm rõ Hiệu ứng Mạng: Càng nhiều người dùng Windows ➔ Càng nhiều lập trình viên viết phần mềm cho Windows ➔ Càng nhiều phần mềm thì người dùng càng bắt buộc phải mua máy tính chạy Windows! Một vòng lặp củng cố tự tăng cường không thể ngăn cản.",
      "result": "Windows chiếm lĩnh hơn 90% thị phần máy tính cá nhân toàn cầu suốt nhiều thập kỷ, biến Bill Gates thành người giàu nhất thế giới."
    },
    "fatalPitfall": "Hiệu ứng mạng âm (Negative Network Effects): Khi mạng lưới quá đông đúc dẫn đến nghẽn mạng, nội dung rác và trải nghiệm người dùng bị suy giảm nếu không có thuật toán lọc chất lượng.",
    "mindsetPractice": "Xây dựng 'Hiệu ứng mạng tri thức cá nhân': Mỗi ghi chú hoặc bài học mới bạn học được phải được liên kết chéo với ít nhất 2 bài học cũ trong đầu. Càng nhiều liên kết, não bạn nhớ càng sâu và tư duy càng bén."
  },
  {
    "id": "lesson_socratic_method",
    "code": "CRIT-21",
    "trackId": "critical",
    "trackName": "V. Phản Biện & Lọc Rác Nhận Thức",
    "name": "Phương Pháp Vấn Đáp Socratic",
    "origName": "The Socratic Questioning Protocol (Elenchus)",
    "master": "Socrates & Plato (Đối thoại Hy Lạp cổ đại)",
    "academicSource": "Plato, Early Dialogues (Euthyphro, Apology, Crito, Meno); Richard Paul & Linda Elder, The Thinker's Guide to Socratic Questioning (Foundation for Critical Thinking).",
    "icon": "help-circle",
    "color": "from-purple-600 via-pink-600 to-rose-600",
    "badge": "Phẫu Thuật Nhận Thức Tận Gốc",
    "axiom": "Một cuộc đời không được tra vấn là một cuộc đời không đáng sống. Trí tuệ đích thực bắt đầu từ việc nhận thức sâu sắc rằng: 'Điều duy nhất tôi biết là tôi không biết gì cả'.",
    "summary": "Thay vì áp đặt ý kiến hay tranh cãi hơn thua, Socrates dùng chuỗi câu hỏi có kỷ luật để dẫn dắt người đối thoại (hoặc tự dẫn dắt chính mình) tự bóc trần những mâu thuẫn nội tại, làm sụp đổ các định kiến sai lầm và làm lộ ra chân lý bất biến.",
    "algorithm": [
      {
        "step": 1,
        "title": "Làm rõ khái niệm và tư tưởng (Clarification)",
        "desc": "Hỏi: 'Ý bạn thực sự là gì khi dùng từ X? Bạn có thể cho một ví dụ cụ thể không?'."
      },
      {
        "step": 2,
        "title": "Thẩm vấn các Giả Định Ngầm (Probing Assumptions)",
        "desc": "Hỏi: 'Bạn đang ngầm giả định điều gì ở đây? Điều gì khiến bạn tin rằng giả định đó luôn luôn đúng?'."
      },
      {
        "step": 3,
        "title": "Đòi hỏi Bằng Chứng & Lý Lẽ (Probing Evidence)",
        "desc": "Hỏi: 'Dữ liệu hoặc sự kiện thực tế nào chứng minh cho kết luận này? Có lý do nào để nghi ngờ nguồn tin này không?'."
      },
      {
        "step": 4,
        "title": "Khám phá các Góc Nhìn Đối Lập (Alternative Perspectives)",
        "desc": "Hỏi: 'Một người thông minh với quan điểm hoàn toàn ngược lại sẽ phản biện điều này thế nào?'."
      },
      {
        "step": 5,
        "title": "Khám phá Hệ Quả & Tác Động (Consequences & Implications)",
        "desc": "Hỏi: 'Nếu khẳng định của bạn là đúng, thì điều gì tiếp theo sẽ xảy ra? Nó có dẫn đến nghịch lý nào không?'."
      },
      {
        "step": 6,
        "title": "Chất vấn chính Câu Hỏi Ban Đầu (Questioning the Question)",
        "desc": "Hỏi: 'Tại sao câu hỏi này lại quan trọng? Bản chất cốt lõi mà chúng ta đang thực sự tìm kiếm là gì?'."
      }
    ],
    "powerQuestions": [
      "Tại sao tôi lại tin vào điều này? Niềm tin này đến từ tư duy độc lập hay từ việc bị người khác nhồi sọ?",
      "Điều gì sẽ xảy ra nếu giả định cốt lõi của tôi hoàn toàn sai bét?",
      "Làm sao tôi có thể tự kiểm chứng điều này mà không cần dựa vào lời nói của bất kỳ ai?"
    ],
    "canonicalCase": {
      "title": "Cuộc đối thoại giữa Socrates và Tướng quân Euthyphro về Lòng Thành Kính",
      "context": "Euthyphro đang trên đường đi kiện chính cha đẻ của mình ra tòa và tự hào rằng mình là người hiểu rõ nhất thế nào là 'Lòng thành kính trước các vị thần'.",
      "execution": "Socrates không hề phản đối. Ông chỉ hỏi một câu Socratic kinh điển (Thế lưỡng nan Euthyphro): 'Điều gì được các thần yêu thích vì tự thân nó là điều tốt đẹp, hay nó trở thành điều tốt đẹp CHỈ VÌ được các thần yêu thích?'.",
      "result": "Euthyphro choáng váng vì nhận ra định nghĩa của mình hoàn toàn mâu thuẫn và rỗng tuếch, buộc phải suy nghĩ lại từ đầu về đạo đức và chân lý."
    },
    "fatalPitfall": "Tự mãn tri thức (Intellectual Arrogance): Nghĩ rằng mình đã hiểu hết một vấn đề, từ đó đóng chặt cửa não bộ và từ chối mọi câu hỏi chất vấn.",
    "mindsetPractice": "Mỗi khi bạn có một niềm tin mạnh mẽ về một chủ đề (chính trị, làm ăn, lối sống), hãy tự đóng vai Socrates và đặt 3 câu hỏi chất vấn tàn nhẫn nhất vào chính niềm tin đó."
  },
  {
    "id": "lesson_falsificationism",
    "code": "CRIT-22",
    "trackId": "critical",
    "trackName": "V. Phản Biện & Lọc Rác Nhận Thức",
    "name": "Thuyết Khả Bác & Tiêu Chuẩn Bác Bỏ",
    "origName": "Falsificationism (The Criterion of Demarcation)",
    "master": "Sir Karl Popper (Nhà triết học khoa học vĩ đại thế kỷ 20)",
    "academicSource": "Karl Popper, Logik der Forschung (The Logic of Scientific Discovery, 1934); Conjectures and Refutations (1963).",
    "icon": "x-circle",
    "color": "from-red-600 via-rose-600 to-indigo-700",
    "badge": "Tiêu Chuẩn Vàng Của Khoa Học Chân Chính",
    "axiom": "Một lý thuyết chỉ được coi là khoa học khi và chỉ khi nó có thể đưa ra các dự đoán cụ thể có khả năng bị chứng minh là SAI trong thực nghiệm. Một lý thuyết giải thích được mọi thứ thì thực chất KHÔNG GIẢI THÍCH ĐƯỢC BẤT CỨ ĐIỀU GÌ.",
    "summary": "Người ngụy khoa học luôn tìm kiếm các bằng chứng để khẳng định mình đúng (Thiên kiến xác nhận). Nhà khoa học chân chính làm điều ngược lại: Họ liên tục cố gắng BÁC BỎ giả thuyết của chính mình. Nếu một ý tưởng vượt qua được mọi nỗ lực bác bỏ tàn nhẫn nhất, nó mới tạm thời được coi là chân lý.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định rõ ràng Giả Thuyết Khẳng Định",
        "desc": "Phát biểu ý tưởng của bạn thành một mệnh đề cụ thể, rõ ràng, không mập mờ nước đôi."
      },
      {
        "step": 2,
        "title": "Xác lập Tiêu Chuẩn Bác Bỏ (Falsification Criteria)",
        "desc": "Đặt câu hỏi tử thần: 'Sự kiện, số liệu hoặc bằng chứng cụ thể nào nếu xuất hiện sẽ CHỨNG MINH TÔI HOÀN TOÀN SAI?'."
      },
      {
        "step": 3,
        "title": "Chủ động tấn công vào điểm yếu nhất của mình",
        "desc": "Không đi tìm kiếm lời khen ngợi hay các dữ liệu đồng thuận. Thiết kế các thử nghiệm tàn nhẫn nhất để bắn phá giả thuyết của chính bạn."
      },
      {
        "step": 4,
        "title": "Chấp nhận sự thật khi bị bác bỏ",
        "desc": "Nếu dữ liệu thực tế chứng minh bạn sai, lập tức vứt bỏ giả thuyết cũ mà không tiếc nuối và tiến hóa lên một giả thuyết mới hoàn thiện hơn."
      }
    ],
    "powerQuestions": [
      "Điều gì có thể chứng minh là tôi đang sai lầm hoàn toàn ở đây?",
      "Ý tưởng của tôi có đưa ra được một dự đoán cụ thể nào có thể kiểm chứng được không, hay nó nói nước đôi kiểu gì cũng đúng?",
      "Tôi có đang vô thức né tránh các dữ kiện trái tai mâu thuẫn với niềm tin của mình không?"
    ],
    "canonicalCase": {
      "title": "Thuyết Tương Đối của Albert Einstein và Nhật thực năm 1919 của Arthur Eddington",
      "context": "Einstein công bố Thuyết Tương Đối Rộng (1915), cho rằng lực hấp dẫn là sự uốn cong của không-thời gian và ánh sáng sẽ bị bẻ cong khi đi qua một vật thể khổng lồ như Mặt Trời.",
      "execution": "Einstein đưa ra một tiêu chuẩn khả bác cực kỳ chính xác: Trong đợt nhật thực toàn phần năm 1919, vị trí của các ngôi sao phía sau Mặt Trời sẽ bị dịch chuyển đúng 1,75 giây cung. Nếu quan sát thực tế không dịch chuyển đúng con số này, Thuyết Tương Đối coi như vứt sọt rác!",
      "result": "Arthur Eddington dẫn đoàn thám hiểm tới đảo Príncipe đo đạc và xác nhận con số khớp hoàn hảo với phương trình của Einstein. Thuyết của Einstein trở thành chân lý khoa học đỉnh cao chính vì nó dám đối mặt với tiêu chuẩn bác bỏ tàn nhẫn."
    },
    "fatalPitfall": "Giả thuyết miễn nhiễm (Unfalsifiable Claims): Những lý thuyết bói toán, ngụy khoa học luôn tự bảo vệ bằng cách nói: 'Nếu bạn không tin thì nó không linh nghiệm' — những thứ không thể bị bác bỏ là những thứ vô giá trị nhất.",
    "mindsetPractice": "Khi đưa ra một chiến lược làm ăn, hãy viết ra sẵn: 'Nếu sau 3 tháng mà chỉ số X không đạt mức Y, mình sẽ thừa nhận chiến lược này đã sai và dừng lại ngay, không cố đấm ăn xôi'."
  },
  {
    "id": "lesson_mental_razors",
    "code": "CRIT-23",
    "trackId": "critical",
    "trackName": "V. Phản Biện & Lọc Rác Nhận Thức",
    "name": "Bộ Ba Dao Cạo Nhận Thức",
    "origName": "Mental Razors (Occam's Razor & Hanlon's Razor)",
    "master": "William of Ockham (1287–1347) & Robert J. Hanlon (1980)",
    "academicSource": "William of Ockham, Summa Logicae; Robert J. Hanlon in Arthur Bloch's Murphy's Law Book Two; Alder's Razor (Newton's Flaming Laser Sword).",
    "icon": "scissors",
    "color": "from-blue-600 via-indigo-600 to-amber-600",
    "badge": "Lưỡi Dao Cắt Bỏ Mọi Ảo Tưởng",
    "axiom": "1. Dao cạo Occam: Trong các giả thuyết cạnh tranh cùng giải thích một hiện tượng, giả thuyết nào đòi hỏi ít giả định phụ nhất thường là giả thuyết đúng nhất. 2. Dao cạo Hanlon: Đừng bao giờ quy cho ác ý điều có thể giải thích thỏa đáng bằng sự vụng về, vô tâm hoặc ngu ngốc của con người.",
    "summary": "Bộ não con người rất thích vẽ ra các thuyết âm mưu phức tạp và tưởng tượng rằng cả thế giới đang rắp tâm hãm hại mình. Bộ Ba Dao Cạo là những lưỡi kiếm sắc bén cắt phăng những suy diễn thừa thãi, giúp bạn lấy lại sự thanh thản và phán đoán chuẩn xác chỉ trong vài giây.",
    "algorithm": [
      {
        "step": 1,
        "title": "Nhận diện sự suy diễn rườm rà (Over-complication)",
        "desc": "Khi thấy mình hoặc người khác đang vẽ ra một kịch bản phức tạp với hàng tá động cơ bí mật và giả định ly kỳ."
      },
      {
        "step": 2,
        "title": "Vung Dao Cạo Occam (Occam's Razor)",
        "desc": "Gọt sạch các thực thể không cần thiết. Cách giải thích trực diện, đơn giản và ít bước trung gian nhất là gì?"
      },
      {
        "step": 3,
        "title": "Vung Dao Cạo Hanlon (Hanlon's Razor)",
        "desc": "Khi ai đó làm bạn tổn thương hoặc làm hỏng việc, dừng ngay ý nghĩ 'họ cố tình hại mình'. Hỏi: 'Có phải họ chỉ vì đãng trí, vụng về, mệt mỏi hoặc thiếu hiểu biết mà làm vậy không?'."
      },
      {
        "step": 4,
        "title": "Vung Thanh Kiếm Laser của Alder (Newton's Flaming Laser Sword)",
        "desc": "Nếu một cuộc tranh cãi không thể được giải quyết bằng bất kỳ thử nghiệm thực tế nào, hãy coi nó là vô nghĩa và ngừng tranh cãi ngay lập tức."
      }
    ],
    "powerQuestions": [
      "Có cách giải thích nào đơn giản hơn nhiều mà tôi đang phớt lờ để theo đuổi một thuyết âm mưu không?",
      "Hành động này của đối phương là do ác ý thâm sâu hay chỉ là do sự bất cẩn và năng lực kém cỏi?",
      "Cuộc tranh cãi này có đem lại kết quả thực tế nào đo lường được không, hay chỉ là đấu võ mồm vô bổ?"
    ],
    "canonicalCase": {
      "title": "Lời giải thích cho hiện tượng 'Vòng tròn trên cánh đồng' (Crop Circles)",
      "context": "Thập niên 1980, hàng trăm vòng tròn hình học kỳ lạ xuất hiện qua đêm trên các cánh đồng lúa mì ở Anh. Dư luận và báo chí đồn ầm lên rằng đây là dấu vết tàu vũ trụ của người ngoài hành tinh hoặc từ trường bí ẩn của Trái Đất.",
      "execution": "Áp dụng Dao cạo Occam: Giả thuyết 1: Người ngoài hành tinh vượt hàng triệu năm ánh sáng đến Trái Đất chỉ để giẫm đổ vài bông lúa mì rồi bay về mà không để lại dấu vết gì. Giả thuyết 2: Hai người đàn ông tinh nghịch cầm ván gỗ và dây thừng đi giẫm lúa vào ban đêm.",
      "result": "Năm 1991, hai nghệ sĩ người Anh Doug Bower và Dave Chorley bước ra thú nhận họ chính là tác giả của các vòng tròn đó bằng ván gỗ và dây thừng. Giả thuyết đơn giản nhất luôn là sự thật!"
    },
    "fatalPitfall": "Bẫy tự biến mình thành nạn nhân (Victim Mentality): Luôn nghĩ đồng nghiệp hoặc sếp ghét bỏ, trù dập mình trong khi thực chất họ chỉ đang quá bận rộn và vụng về với công việc của chính họ.",
    "mindsetPractice": "Mỗi khi có ai đó gửi tin nhắn chậm hoặc tỏ thái độ cộc lốc với bạn, hãy tự nhủ bằng Dao cạo Hanlon: 'Họ không ghét mình đâu, chắc họ đang bận việc hoặc vừa bị đau đầu đấy thôi'. Tâm bạn sẽ thanh thản ngay lập tức."
  },
  {
    "id": "lesson_map_is_not_territory",
    "code": "CRIT-24",
    "trackId": "critical",
    "trackName": "V. Phản Biện & Lọc Rác Nhận Thức",
    "name": "Bản Đồ Không Phải Là Vùng Đất",
    "origName": "The Map Is Not the Territory",
    "master": "Alfred Korzybski (Nhà ngữ nghĩa học đại cương, 1931)",
    "academicSource": "Alfred Korzybski, Science and Sanity: An Introduction to Non-Aristotelian Systems and General Semantics (1933); Gregory Bateson, Steps to an Ecology of Mind.",
    "icon": "map",
    "color": "from-emerald-700 via-teal-700 to-cyan-800",
    "badge": "Phân Tách Mô Hình Khỏi Thực Tại",
    "axiom": "1. Bản đồ không phải là vùng đất (The map is not the territory). 2. Bản đồ không đại diện cho toàn bộ vùng đất. 3. Bản đồ luôn mang theo góc nhìn và định kiến của người vẽ ra nó.",
    "summary": "Mọi cuốn sách giáo khoa, mô hình kinh tế, bằng cấp, bản kế hoạch hay lý thuyết quản trị chỉ là một 'Bản đồ thu nhỏ' được trừu tượng hóa để tiện sử dụng, nó KHÔNG PHẢI là đời thực bên ngoài. Người ngu dốt tin vào bản đồ đến mức khi bản đồ chỉ vào vách đá, họ vẫn tiếp tục lao xuống. Bậc thầy tư duy luôn ngẩng đầu lên nhìn vùng đất thực tế.",
    "algorithm": [
      {
        "step": 1,
        "title": "Nhận thức rõ mô hình bạn đang sử dụng",
        "desc": "Xác định rõ bản kế hoạch, bảng số liệu hoặc lý thuyết bạn đang cầm trên tay là một sự rút gọn có chủ ý của thực tại."
      },
      {
        "step": 2,
        "title": "Tìm kiếm các chi tiết bị lược bỏ (Omissions)",
        "desc": "Người vẽ bản đồ này đã cố tình bỏ qua những yếu tố nào của đời thực? (Thời tiết, cảm xúc con người, văn hóa địa phương)?"
      },
      {
        "step": 3,
        "title": "Đối chiếu trực tiếp với địa hình thực tế",
        "desc": "Bước ra khỏi phòng máy lạnh, nói chuyện trực tiếp với khách hàng, nhân viên tuyến đầu và trải nghiệm thực địa."
      },
      {
        "step": 4,
        "title": "Cập nhật bản đồ liên tục",
        "desc": "Khi địa hình thực tế và bản đồ mâu thuẫn nhau, địa hình thực tế LUÔN LUÔN ĐÚNG. Bản đồ phải bị vẽ lại ngay lập tức."
      }
    ],
    "powerQuestions": [
      "Tôi có đang nhầm lẫn bản kế hoạch trên giấy với diễn biến hỗn loạn của chiến trường thực tế không?",
      "Mô hình này đã lỗi thời bao nhiêu năm rồi so với sự biến đổi của thế giới bên ngoài?",
      "Điều gì đang xảy ra ngoài đời thực mà không có một con số nào trong báo cáo phản ánh được?"
    ],
    "canonicalCase": {
      "title": "Tập đoàn máy ảnh Kodak phá sản vì bám chặt vào 'Bản đồ phim nhựa'",
      "context": "Kodak từng là đế chế số 1 thế giới về nhiếp ảnh. Các kỹ sư Kodak thực ra đã phát minh ra chiếc máy ảnh kỹ thuật số đầu tiên trên thế giới vào năm 1975.",
      "execution": "Nhưng ban lãnh đạo Kodak nhìn vào 'Bản đồ tài chính' cũ: 90% lợi nhuận khổng lồ của họ đến từ việc bán cuộn phim nhựa và dịch vụ tráng rọi ảnh. Họ sợ máy ảnh kỹ thuật số sẽ phá hủy doanh số phim nhựa, nên họ giấu nhẹm phát minh đó đi và tiếp tục tin vào bản đồ phim nhựa.",
      "result": "Vùng đất thực tế đã thay đổi hoàn toàn: người tiêu dùng thế giới chuyển sạch sang ảnh số. Kodak nộp đơn phá sản năm 2012, trở thành bài học kinh điển về việc chết vì bám vào tấm bản đồ đã rách."
    },
    "fatalPitfall": "Nhầm lẫn nhãn dán với thực thể (Confusing the label with the thing): Đánh giá một con người chỉ qua cái mác trường đại học hoặc chức danh trên danh thiếp thay vì năng lực thực chiến.",
    "mindsetPractice": "Khi đọc một bản báo cáo số liệu kinh doanh đẹp đẽ, hãy dành nửa ngày đi nói chuyện trực tiếp với 5 khách hàng thật ngoài đời. Bạn sẽ thấy vùng đất thực tế khác xa bản báo cáo."
  },
  {
    "id": "lesson_cognitive_biases_audit",
    "code": "CRIT-25",
    "trackId": "critical",
    "trackName": "V. Phản Biện & Lọc Rác Nhận Thức",
    "name": "Kiểm Toán 25 Bẫy Nhận Thức Của Não Bộ",
    "origName": "The 25 Cognitive Biases Audit (Psychology of Human Misjudgment)",
    "master": "Daniel Kahneman (Nobel 2002) & Amos Tversky & Charlie Munger",
    "academicSource": "Daniel Kahneman, Thinking, Fast and Slow (Farrar, Straus and Giroux, 2011); Charlie Munger, The Psychology of Human Misjudgment (Speech at Harvard University, 1995).",
    "icon": "alert-octagon",
    "color": "from-rose-700 via-purple-700 to-indigo-900",
    "badge": "Quét Sạch Điểm Mù Sinh Học Của Bộ Não",
    "axiom": "Bộ não con người tiến hóa trong hàng triệu năm ở thảo nguyên châu Phi để tồn tại trước thú dữ chứ không phải để ra quyết định tài chính hay khoa học hiện đại. Kết quả là nó bị cài đặt sẵn hàng chục thuật toán lối tắt (Heuristics) dẫn đến những sai lầm nhận thức có hệ thống.",
    "summary": "Charlie Munger gọi đây là 'Bộ máy gây ra những phán đoán sai lầm của con người'. Bạn không thể loại bỏ hoàn toàn các bẫy này vì chúng nằm trong gen di truyền, nhưng bạn có thể lập một Bảng Kiểm Toán (Checklist) để quét sạch chúng trước mỗi quyết định quan trọng.",
    "algorithm": [
      {
        "step": 1,
        "title": "Dừng lại trước khi kích hoạt Hệ Thống 1 (Tư duy nhanh)",
        "desc": "Khi đối mặt với quyết định lớn, kìm hãm ngay phản xạ trực giác cảm tính ban đầu."
      },
      {
        "step": 2,
        "title": "Chạy Bảng Kiểm Toán 5 Bẫy Nguy Hiểm Nhất",
        "desc": "1. Bẫy Thiên vị xác nhận (Chỉ đọc tin mình thích); 2. Bẫy Hiệu ứng mỏ neo (Bị giá đầu tiên mê hoặc); 3. Bẫy Bầy đàn (Làm theo đám đông); 4. Bẫy Sợ mất mát (Ghét mất hơn thích được gấp đôi); 5. Bẫy Thích/Ghét (Yêu ai thì thấy cái gì của họ cũng tốt)."
      },
      {
        "step": 3,
        "title": "Nhận diện Hiệu ứng Lollapalooza",
        "desc": "Cực kỳ cảnh giác khi có 3-4 bẫy nhận thức cùng kích hoạt một lúc theo cùng một hướng — nó sẽ biến một người thông minh thành một kẻ mất trí hoàn toàn (như trong các vụ lừa đảo Ponzi)."
      },
      {
        "step": 4,
        "title": "Sử dụng Cơ chế Phản Biện Độc Lập (Red Team)",
        "desc": "Thuê hoặc nhờ một người thông minh có nhiệm vụ duy nhất là chỉ ra tất cả các điểm ngu ngốc trong kế hoạch của bạn."
      }
    ],
    "powerQuestions": [
      "Tôi đang muốn tin vào điều này vì nó là sự thật, hay chỉ vì nó làm cho cái tôi của tôi cảm thấy dễ chịu?",
      "Tôi có đang bị ảnh hưởng bởi những người xung quanh chỉ vì sợ bị cô lập khỏi bầy đàn không?",
      "Có bao nhiêu bẫy tâm lý đang cùng lúc tác động vào tôi trong thương vụ này?"
    ],
    "canonicalCase": {
      "title": "Hiệu ứng Lollapalooza trong các buổi đấu giá công khai",
      "context": "Charlie Munger chỉ ra tại sao những người giàu có, thông minh lại thường trả những mức giá điên rồ cao gấp 5 lần giá trị thực của một món hàng tại các buổi đấu giá.",
      "execution": "Một loạt bẫy tâm lý cùng nổ tung: 1. Hiệu ứng bầy đàn (Thấy người khác giơ biển nên nghĩ món đồ rất quý); 2. Bẫy cam kết và nhất quán (Đã lỡ giơ biển thì không muốn dừng lại); 3. Bẫy ghét mất mát (Không chịu nổi cảm giác bị người khác cướp mất món hàng trước mũi); 4. Bẫy khan hiếm (Thời gian đếm ngược tích tắc ép não bộ không kịp tư duy logic).",
      "result": "Người thắng cuộc sau đó phải chịu 'Lời nguyền của kẻ chiến thắng' (Winner's Curse) — mua được món đồ nhưng ôm một khoản lỗ thảm khốc."
    },
    "fatalPitfall": "Bẫy điểm mù thiên kiến (Bias Blind Spot): Nghĩ rằng mọi người xung quanh đều bị dính bẫy tâm lý, còn riêng bản thân mình thì hoàn toàn khách quan và lý trí.",
    "mindsetPractice": "In danh sách 5 bẫy nhận thức lớn dán ngay trước bàn làm việc. Trước khi chuyển tiền hoặc ký hợp đồng, tự tích dấu V vào từng mục để bảo đảm mình không bị dính bẫy."
  },
  {
    "id": "lesson_lateral_thinking",
    "code": "CREAT-26",
    "trackId": "creative",
    "trackName": "VI. Sáng Tạo & Đột Phá Phi Tuyến",
    "name": "Tư Duy Đa Chiều / Tư Duy Ngang",
    "origName": "Lateral Thinking (Breaking Vertical Logic Patterns)",
    "master": "Edward de Bono (Bác sĩ, Nhà tâm lý học Oxford & Cambridge)",
    "academicSource": "Edward de Bono, Lateral Thinking: Creativity Step by Step (Harper & Row, 1970); de Bono, The Mechanism of Mind.",
    "icon": "sparkles",
    "color": "from-pink-600 via-rose-600 to-amber-600",
    "badge": "Bước Nhảy Nhận Thức Cách Mạng",
    "axiom": "Tư duy logic dọc (Vertical thinking) đào sâu thêm vào cùng một cái hố cũ; Tư duy ngang (Lateral thinking) đi đào một cái hố hoàn toàn mới ở một mảnh đất chưa ai từng nghĩ tới.",
    "summary": "Logic thông thường chỉ cho phép bạn đi từng bước hợp lý nối tiếp nhau, điều này khiến bạn bị nhốt vĩnh viễn trong cái hộp cũ. Tư duy ngang cố tình đưa vào các kích thích ngẫu nhiên phi lý (Provocation - PO) để phá vỡ cấu trúc tự tổ chức của não bộ, tạo ra bước nhảy vọt sáng tạo thiên tài.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định Lối Mòn Nhận Thức (The Dominant Idea)",
        "desc": "Mọi người từ trước tới nay luôn nhìn vấn đề này theo khuôn mẫu cứng nhắc nào? Viết rõ khuôn mẫu đó ra."
      },
      {
        "step": 2,
        "title": "Kích hoạt Khiêu Khích Phi Lý (Provocation Operation - PO)",
        "desc": "Đưa ra một phát biểu cố tình sai lệch, phi lý hoặc đảo lộn (Ví dụ: 'Ô tô không có bánh xe' hoặc 'Khách hàng phải trả tiền để được dọn bàn')."
      },
      {
        "step": 3,
        "title": "Sử dụng Cơ chế Chuyển Động (Movement)",
        "desc": "Không phán xét đúng/sai về câu nói phi lý đó. Hỏi: 'Từ ý tưởng điên rồ này, nó dẫn tâm trí tôi nhảy sang giải pháp hữu ích nào?'."
      },
      {
        "step": 4,
        "title": "Thu hoạch & Tái hợp nhất logic",
        "desc": "Khi đã nhảy sang được một vùng đất mới, quay lại dùng logic truyền thống để hiện thực hóa ý tưởng đột phá đó."
      }
    ],
    "powerQuestions": [
      "Nếu phương án hiển nhiên thông thường bị cấm tuyệt đối, tôi bắt buộc phải làm cách nào khác?",
      "Làm sao để kết hợp hai thứ dường như hoàn toàn đối nghịch và không liên quan gì lại với nhau?",
      "Điều gì sẽ xảy ra nếu tôi đảo ngược hoàn toàn quy tắc quan trọng nhất của ngành này?"
    ],
    "canonicalCase": {
      "title": "Cách cuộc đua nhảy cao Thế vận hội bị thay đổi vĩnh viễn bởi Dick Fosbury (1968)",
      "context": "Suốt 70 năm lịch sử nhảy cao, tất cả các vận động viên thế giới đều dùng kỹ thuật nhảy úp bụng hoặc bước qua xà (Tư duy dọc: cố gắng tối ưu hóa việc nhìn về phía trước khi nhảy).",
      "execution": "Dick Fosbury dùng Tư duy ngang: Tại sao cứ phải nhìn vào xà khi nhảy? Điều gì xảy ra nếu tôi quay lưng lại với xà và nhảy ngửa đầu ra sau? Mọi người đều chế giễu ông là kẻ điên khùng và kỳ dị.",
      "result": "Tại Olympic Mexico 1968, Fosbury phá kỷ lục thế giới và giành huy chương vàng với cú nhảy ngửa lưng (Fosbury Flop). Ngày nay, 100% vận động viên nhảy cao trên hành tinh đều bắt buộc phải dùng kỹ thuật này."
    },
    "fatalPitfall": "Phán xét vội vàng (Premature Judgment): Tiêu diệt một ý tưởng non nớt ngay từ khi nó mới xuất hiện chỉ vì nghe có vẻ lạ tai hoặc khác thường.",
    "mindsetPractice": "Mở từ điển chọn ngẫu nhiên một từ bất kỳ (ví dụ: 'Quả dưa hấu'). Cố gắng tìm ra 3 mối liên hệ giữa 'Quả dưa hấu' và công việc bạn đang làm. Não bạn sẽ học được phản xạ kết nối phi tuyến."
  },
  {
    "id": "lesson_six_thinking_hats",
    "code": "CREAT-27",
    "trackId": "creative",
    "trackName": "VI. Sáng Tạo & Đột Phá Phi Tuyến",
    "name": "Phân Tách 6 Chiếc Nón Tư Duy",
    "origName": "Six Thinking Hats Protocol (Parallel Thinking)",
    "master": "Edward de Bono (1985)",
    "academicSource": "Edward de Bono, Six Thinking Hats (Little, Brown and Company, 1985); Parallel Thinking vs Adversarial Thinking.",
    "icon": "hard-hat",
    "color": "from-blue-600 via-emerald-600 to-amber-600",
    "badge": "Tối Ưu Hóa Trạng Thái Não Bộ",
    "axiom": "Trở ngại lớn nhất của tư duy là sự hỗn loạn: não bộ cố gắng xử lý cảm xúc, dữ liệu, logic, sự lạc quan, nỗi sợ hãi và tính sáng tạo CÙNG MỘT LÚC. Phương pháp 6 Nón tách bạch từng chế độ tư duy để cả nhóm (hoặc cá nhân) cùng soi một hướng.",
    "summary": "Chấm dứt việc tranh cãi hơn thua. Mỗi chiếc nón là một màu sắc đại diện cho một trạng thái nhận thức tinh khiết: Nón Trắng (Dữ liệu), Nón Đỏ (Trực giác/Cảm xúc), Nón Đen (Rủi ro/Phản biện), Nón Vàng (Lợi ích/Cơ hội), Nón Xanh Lá (Sáng tạo đột phá), Nón Xanh Dương (Điều phối tổng thể).",
    "algorithm": [
      {
        "step": 1,
        "title": "Đội Nón Xanh Dương: Thiết lập mục tiêu & Lộ trình",
        "desc": "Xác định rõ ràng: Bài toán hôm nay cần giải quyết là gì? Thứ tự các nón cần đội là như thế nào?"
      },
      {
        "step": 2,
        "title": "Đội Nón Trắng: Thu thập dữ liệu thuần khiết",
        "desc": "Liệt kê tất cả các con số, sự kiện đã được kiểm chứng. Không đưa cảm xúc hay ý kiến cá nhân vào."
      },
      {
        "step": 3,
        "title": "Đội Nón Vàng (Lạc quan) rồi sang Nón Đen (Cảnh giác)",
        "desc": "Tìm kiếm mọi tiềm năng rực rỡ nhất (Vàng), sau đó chuyển sang lùng sục mọi rủi ro và cạm bẫy chết người (Đen)."
      },
      {
        "step": 4,
        "title": "Đội Nón Xanh Lá (Đột phá) & Nón Đỏ (Cảm xúc chốt hạ)",
        "desc": "Nảy sinh các ý tưởng mới để vượt qua rủi ro của nón đen. Cuối cùng, trực giác và trái tim bạn mách bảo điều gì?"
      }
    ],
    "powerQuestions": [
      "Nếu chỉ nhìn vào số liệu thuần túy mà không có cảm xúc, sự thật là gì? (Nón Trắng)",
      "Điểm yếu chí mạng của kế hoạch này là gì mà chúng ta đang lờ đi? (Nón Đen)",
      "Có giải pháp điên rồ nào chưa ai từng thử nghiệm không? (Nón Xanh Lá)"
    ],
    "canonicalCase": {
      "title": "Tập đoàn viễn thông Statoil và cuộc họp giảm 75% thời gian tranh cãi",
      "context": "Các cuộc họp hội đồng quản trị của các tập đoàn dầu khí đa quốc gia thường kéo dài hàng chục tiếng đồng hồ vì các phe phái công kích cá nhân lẫn nhau.",
      "execution": "Họ áp dụng phương pháp 6 Chiếc Nón của de Bono: Khi người chủ trì nói 'Tất cả cùng đội Nón Đen', ngay cả người lạc quan nhất cũng phải tìm ra 2 rủi ro; khi chuyển sang 'Nón Vàng', ngay cả người hay chỉ trích nhất cũng phải tìm ra 2 điểm tốt.",
      "result": "Thời gian các cuộc họp ra quyết định giảm từ 3 ngày xuống còn 45 phút, loại bỏ hoàn toàn các vụ xung đột cái tôi cá nhân và đưa ra các quyết định có độ chuẩn xác vượt bậc."
    },
    "fatalPitfall": "Lạm dụng nón đen (Chronic Black Hat): Luôn chỉ trích, bới lông tìm vết và dập tắt mọi ngọn lửa sáng tạo mới nhen nhóm bằng sự hoài nghi yếm thế.",
    "mindsetPractice": "Khi đứng trước một bài toán nan giải một mình, hãy lấy 6 mảnh giấy tương ứng 6 màu nón. Dành đúng 3 phút cho mỗi nón để viết suy nghĩ ra giấy. Bạn sẽ thấy giải pháp hiện ra sáng tỏ."
  },
  {
    "id": "lesson_dialectical_synthesis",
    "code": "CREAT-28",
    "trackId": "creative",
    "trackName": "VI. Sáng Tạo & Đột Phá Phi Tuyến",
    "name": "Tư Duy Biện Chứng: Luận Đề - Phản Đề - Hợp Đề",
    "origName": "Dialectical Synthesis (Thesis - Antithesis - Synthesis)",
    "master": "Georg Wilhelm Friedrich Hegel & Karl Marx",
    "academicSource": "G.W.F. Hegel, Phenomenology of Spirit (1807); Science of Logic (1812); F. Scott Fitzgerald ('The test of a first-rate intelligence').",
    "icon": "infinity",
    "color": "from-indigo-700 via-purple-700 to-amber-600",
    "badge": "Đỉnh Cao Dung Hòa Mâu Thuẫn",
    "axiom": "Thước đo của một trí tuệ siêu việt là khả năng nắm giữ hai ý tưởng hoàn toàn trái ngược nhau trong tâm trí cùng một lúc, mà vẫn duy trì được năng lực hành động hiệu quả. Chân lý không nằm ở cực A, cũng không nằm ở cực B, mà nằm ở Hợp Đề C ở tầm vóc cao hơn.",
    "summary": "Người có trí tuệ tầm thường luôn bị kẹt trong tư duy nhị nguyên: hoặc đúng hoặc sai, hoặc đen hoặc trắng. Bậc thầy tư duy biện chứng nhìn thấy trong Luận Đề (Ý kiến A) luôn ẩn chứa hạt mầm của Phản Đề (Ý kiến chống đối B), và họ dùng mâu thuẫn đó làm động cơ để sinh ra Hợp Đề C — một giải pháp dung hòa và thâu tóm tinh hoa của cả hai bên.",
    "algorithm": [
      {
        "step": 1,
        "title": "Xác định Luận Đề (Thesis)",
        "desc": "Mô tả một quan điểm, một chiến lược hoặc một chân lý ban đầu đang được tin tưởng."
      },
      {
        "step": 2,
        "title": "Kích hoạt Phản Đề (Antithesis)",
        "desc": "Tìm kiếm quan điểm hoàn toàn đối lập với luận đề trên: Tại sao luận đề kia lại sai lầm? Mặt tối của nó là gì?"
      },
      {
        "step": 3,
        "title": "Từ chối thỏa hiệp nửa vời (Reject False Compromise)",
        "desc": "Không chọn cách 'cưa đôi' 50/50 bình dân tầm thường. Giữ nguyên năng lượng căng thẳng của cả hai thái cực."
      },
      {
        "step": 4,
        "title": "Thăng hoa lên Hợp Đề (Synthesis - Aufheben)",
        "desc": "Tìm một phát kiến ở tầng nhận thức cao hơn có thể giữ lại toàn bộ ưu điểm của A và B mà đồng thời triệt tiêu toàn bộ khuyết điểm của cả hai."
      }
    ],
    "powerQuestions": [
      "Tại sao một người thông minh, tử tế và có đạo đức lại có thể kịch liệt phản đối quan điểm này của tôi?",
      "Làm sao tôi có thể vừa giữ được tốc độ siêu nhanh (A) mà lại vừa bảo đảm được chất lượng tuyệt đối không tì vết (B)?",
      "Khung nhận thức cấp cao nào có thể hóa giải mâu thuẫn dường như không thể hàn gắn này?"
    ],
    "canonicalCase": {
      "title": "Steve Jobs và phát minh ra iPhone: Hợp nhất giữa Nghệ Thuật và Công Nghệ",
      "context": "Trước năm 2007, thế giới công nghệ bị chia rẽ giữa 2 thái cực: 1. Luận đề: Các kỹ sư thuần túy đòi hỏi bàn phím cứng đầy đủ, máy tính thô kệch nhiều nút bấm (BlackBerry, Nokia); 2. Phản đề: Các nhà thiết kế nghệ thuật muốn vẻ đẹp tối giản nhưng lại thiếu công năng thực tế.",
      "execution": "Steve Jobs dùng Tư duy Biện chứng để tạo ra Hợp Đề: Một màn hình kính cảm ứng đa điểm hoàn toàn phẳng — vừa là phần cứng công nghệ tối tân, vừa là tác phẩm nghệ thuật tối giản không một nút bấm thừa.",
      "result": "Tạo ra sản phẩm tiêu dùng thành công nhất trong lịch sử nhân loại, đưa Apple trở thành tập đoàn 3.000 tỷ USD đầu tiên của thế giới."
    },
    "fatalPitfall": "Nhị nguyên cực đoan (False Dichotomy): Bị giam cầm trong suy nghĩ 'Chỉ có thể chọn 1 trong 2' (Hoặc chất lượng hoặc giá rẻ, hoặc gia đình hoặc sự nghiệp). Bậc đại sư luôn tìm cách có cả hai ở tầm vóc cao hơn.",
    "mindsetPractice": "Khi gặp một thế tiến thoái lưỡng nan: 'Nên chọn A hay B?', hãy cấm bản thân đưa ra lựa chọn ngay. Tự ép não bộ nghĩ ra phương án C dung hòa được tinh hoa của cả A lẫn B."
  },
  {
    "id": "lesson_reverse_engineering",
    "code": "CREAT-29",
    "trackId": "creative",
    "trackName": "VI. Sáng Tạo & Đột Phá Phi Tuyến",
    "name": "Tư Duy Kỹ Thuật Đảo Ngược",
    "origName": "Reverse Engineering (Deconstruction & Reconstruction)",
    "master": "Kỹ thuật quân sự, Tình báo công nghệ & Charlie Munger",
    "academicSource": "Eldon Y. Li, Software Reverse Engineering; Chikofsky & Cross, Reverse Engineering and Design Recovery (IEEE Software, 1990).",
    "icon": "cpu",
    "color": "from-blue-600 via-cyan-600 to-indigo-800",
    "badge": "Giải Mã Tuyệt Tác & Tái Cấu Trúc",
    "axiom": "Mọi sản phẩm, hệ thống hay con người thành công vượt bậc trên thế giới đều để lại dấu vết cấu trúc bên trong. Bằng cách tháo rời thành phẩm từ ngoài vào trong, bạn có thể giải mã được bản thiết kế gốc và tạo ra một phiên bản tốt hơn.",
    "summary": "Người bình thường chỉ nhìn thấy thành quả hào nhoáng bên ngoài của người khác và ghen tị hoặc trầm trồ. Bậc thầy tư duy đảo ngược nhìn vào thành phẩm như một cỗ máy: Họ tháo tung từng con ốc, giải mã từng mạch điện, hiểu rõ nguyên lý vận hành bên trong, rồi tự tay lắp ráp lại theo cách riêng của mình.",
    "algorithm": [
      {
        "step": 1,
        "title": "Chọn một Mục Tiêu Xuất Chúng (Target Selection)",
        "desc": "Chọn một bài viết xuất sắc, một sản phẩm phần mềm triệu đô, hoặc một mô hình kinh doanh thành công rực rỡ mà bạn muốn học hỏi."
      },
      {
        "step": 2,
        "title": "Bóc tách từng lớp bề mặt (Layer Deconstruction)",
        "desc": "Tháo dỡ thành phẩm thành các khối thành phần nhỏ: Cấu trúc dàn ý là gì? Các móc câu tâm lý nằm ở đâu? Cơ chế kiếm tiền vận hành ra sao?"
      },
      {
        "step": 3,
        "title": "Vẽ lại Bản Thiết Kế Gốc (Blueprinting)",
        "desc": "Tái hiện lại sơ đồ tư duy mà người tác giả ban đầu đã sử dụng để tạo ra sản phẩm đó."
      },
      {
        "step": 4,
        "title": "Cải tiến và Tái cấu trúc (Reconstruction with Leverage)",
        "desc": "Không sao chép y nguyên. Tìm ra điểm yếu của bản gốc và đưa vào các nâng cấp độc đáo của riêng bạn."
      }
    ],
    "powerQuestions": [
      "Tác giả của kiệt tác này đã giải quyết những bài toán kỹ thuật ngầm nào mà người ngoài không nhìn thấy?",
      "Cơ chế cốt lõi tạo nên sự hấp dẫn chết người của sản phẩm này là gì?",
      "Làm sao tôi có thể học được cấu trúc của họ nhưng thể hiện nó bằng một nội dung hoàn toàn mới của riêng tôi?"
    ],
    "canonicalCase": {
      "title": "Cách Compaq giải mã BIOS của IBM để khai sinh kỷ nguyên máy tính cá nhân tương thích",
      "context": "Đầu thập niên 1980, IBM độc quyền thị trường máy tính cá nhân nhờ chip BIOS độc quyền. Không ai có thể sản xuất máy tính tương thích với IBM mà không bị kiện vi phạm bản quyền.",
      "execution": "Ba kỹ sư sáng lập Compaq áp dụng Kỹ thuật Đảo ngược 'Phòng Sạch' (Clean Room Reverse Engineering): Nhóm 1 dịch ngược toàn bộ mã BIOS của IBM thành tài liệu mô tả thông số kỹ thuật thuần túy. Nhóm 2 (chưa từng nhìn thấy mã IBM) dựa trên tài liệu mô tả đó tự tay viết lại một hệ thống BIOS mới toanh từ đầu.",
      "result": "Compaq tạo ra chiếc máy tính di động tương thích IBM 100% đầu tiên, thắng kiện trước tòa và mở toang cánh cửa cho toàn bộ ngành công nghiệp máy tính cá nhân toàn cầu."
    },
    "fatalPitfall": "Đạo nhái nông cạn (Plagiarism): Sao chép cái vỏ bề ngoài mà không hiểu cơ chế kỹ thuật bên trong, dẫn đến sản phẩm rác và vi phạm đạo đức.",
    "mindsetPractice": "Mỗi khi thấy một bài viết hoặc video triệu view trên mạng, đừng lướt qua. Hãy dành 10 phút tháo dỡ: Tiêu đề dùng kỹ thuật gì? 3 giây đầu giữ chân người xem bằng cách nào? Cấu trúc kể chuyện gồm mấy phần?"
  },
  {
    "id": "lesson_pareto_power_law",
    "code": "CREAT-30",
    "trackId": "creative",
    "trackName": "VI. Sáng Tạo & Đột Phá Phi Tuyến",
    "name": "Đòn Bẩy Bất Đối Xứng Pareto 80/20 & Luật Lũy Thừa",
    "origName": "The Pareto Principle & Power Law Distributions",
    "master": "Vilfredo Pareto (1896) & Richard Koch & Peter Thiel",
    "academicSource": "Vilfredo Pareto, Cours d'économie politique; Richard Koch, The 80/20 Principle; Peter Thiel, Zero to One (Chapter 7: Follow the Money).",
    "icon": "zap",
    "color": "from-amber-500 via-orange-600 to-red-600",
    "badge": "Đòn Bẩy Bất Đối Xứng Tối Thượng",
    "axiom": "Trong vũ trụ, sự phân phối kết quả hầu như không bao giờ bình đẳng: 20% nỗ lực tạo ra 80% kết quả; và trong 20% đó, lại có 20% cốt lõi (4% tạo ra 64% kết quả). Trong đầu tư mạo hiểm và tri thức, quy luật lũy thừa (Power Law) ngự trị: Một thành công lớn duy nhất sẽ vượt trội hơn TỔNG CỘNG của TẤT CẢ các thành công khác gộp lại.",
    "summary": "Người tầm thường chia đều thời gian và sức lực cho tất cả các đầu việc một cách ngây thơ. Bậc thầy tư duy săn lùng sự bất đối xứng: Họ kiên quyết cắt bỏ 80% râu ria vô bổ, dồn 100% tinh lực vào 20% nhiệm vụ cốt tử mang lại bước nhảy vọt cuộc đời.",
    "algorithm": [
      {
        "step": 1,
        "title": "Kiểm toán Danh mục Đầu vào & Đầu ra",
        "desc": "Liệt kê tất cả các hoạt động bạn làm trong tuần và đo lường kết quả thực tế tạo ra từ từng hoạt động."
      },
      {
        "step": 2,
        "title": "Cô lập 'Nhóm 20% Hoàng Kim' (Identify the Vital Few)",
        "desc": "Tìm ra 1-2 hành động, 1-2 mối quan hệ hoặc 1-2 kỹ năng đóng góp vào phần lớn hạnh phúc và thu nhập của bạn."
      },
      {
        "step": 3,
        "title": "Cắt bỏ hoặc Ủy quyền 'Nhóm 80% Tầm Thường' (The Trivial Many)",
        "desc": "Can đảm nói KHÔNG với các cuộc họp vô bổ, các công việc hành chính lặt vặt tiêu tốn năng lượng mà không sinh ra giá trị đòn bẩy."
      },
      {
        "step": 4,
        "title": "Tái áp dụng 80/20 vào chính nhóm 20% (Fractal 80/20)",
        "desc": "Tiếp tục đào sâu: Trong số 20% việc quan trọng nhất, đâu là 4% tinh túy nhất mang lại 64% thành quả tối thượng?"
      }
    ],
    "powerQuestions": [
      "Hôm nay, hành động duy nhất nào nếu tôi hoàn thành sẽ khiến cho tất cả các việc khác trở nên dễ dàng hơn hoặc không còn cần thiết nữa?",
      "Tôi có đang bận rộn giả tạo với 80% việc lặt vặt để trốn tránh 20% việc khó khăn nhưng quyết định thành bại không?",
      "20% khách hàng nào đang đem lại 80% lợi nhuận cho tôi? Và 20% khách hàng nào đang gây ra 80% đau đầu cho tôi?"
    ],
    "canonicalCase": {
      "title": "Steve Jobs giải cứu Apple khỏi bờ vực phá sản năm 1997 bằng quy tắc 80/20",
      "context": "Khi Steve Jobs quay trở lại Apple năm 1997, công ty đang trên bờ vực phá sản trong 90 ngày với một danh mục sản phẩm hỗn loạn gồm hàng chục mẫu máy tính, máy in và thiết bị cầm tay khác nhau.",
      "execution": "Jobs triệu tập cuộc họp ban lãnh đạo, bước lên bảng trắng và vẽ một ma trận 2x2 đơn giản: Cột gồm 'Người dùng cá nhân' và 'Chuyên gia'; Dòng gồm 'Máy để bàn' và 'Máy xách tay'. Ông tuyên bố: 'Chúng ta sẽ khai tử 70% các dự án thừa thãi, chỉ tập trung làm đúng 4 chiếc máy tính vĩ đại nhất thế giới!'.",
      "result": "Quyết định cắt bỏ tàn nhẫn này đã cứu sống Apple, tập trung toàn bộ kỹ sư giỏi nhất vào iMac và iBook, tạo tiền đề cho sự phục hưng vĩ đại nhất lịch sử kinh doanh."
    },
    "fatalPitfall": "Ảo tưởng bận rộn (Action Bias): Nhầm lẫn giữa sự bận rộn tay chân với hiệu quả thực tế; làm rất nhiều việc nhưng toàn là những việc không quan trọng.",
    "mindsetPractice": "Mỗi buổi sáng thức dậy, chỉ viết ra đúng 1 ĐẦU VIỆC QUAN TRỌNG NHẤT (The One Thing). Dốc toàn lực giải quyết xong việc đó trước 11h trưa trước khi mở email hay lướt mạng xã hội."
  },
  {
    "id": "lesson_feynman_technique",
    "code": "META-31",
    "trackId": "meta",
    "trackName": "VII. Học Nhanh & Siêu Nhận Thức",
    "name": "Kỹ Thuật Feynman Về Bản Chất Tri Thức",
    "origName": "The Feynman Mental Protocol (Ultimate Test of Understanding)",
    "master": "Richard Feynman (Nobel Vật lý 1965 - 'Nhà giải thích vĩ đại')",
    "academicSource": "Richard Feynman, Surely You're Joking, Mr. Feynman!; The Feynman Lectures on Physics (Caltech); James Gleick, Genius: The Life and Science of Richard Feynman.",
    "icon": "book-open",
    "color": "from-cyan-600 via-blue-600 to-indigo-700",
    "badge": "Thước Đo Hiểu Sâu Tuyệt Đối",
    "axiom": "Nếu bạn không thể giải thích một khái niệm phức tạp cho một đứa trẻ 10 tuổi hiểu được bằng ngôn ngữ đời thường giản dị, điều đó chứng minh rằng CHÍNH BẠN CŨNG CHƯA THỰC SỰ HIỂU NÓ.",
    "summary": "Người học vẹt thường trốn đằng sau các thuật ngữ chuyên môn đao to búa lớn để che giấu sự rỗng tuếch bên trong. Kỹ thuật Feynman là cỗ máy giải phẫu nhận thức 4 bước: buộc bạn phải bóc trần sự thật, tìm ra chính xác chỗ đứt gãy trong hiểu biết của mình và vá nó lại bằng ngôn ngữ bản chất.",
    "algorithm": [
      {
        "step": 1,
        "title": "Viết tên khái niệm lên một trang giấy trắng",
        "desc": "Chọn bất kỳ chủ đề hoặc nguyên lý khó nào bạn vừa học được."
      },
      {
        "step": 2,
        "title": "Giảng dạy lại cho một đứa trẻ 10 tuổi (Teach it to a Child)",
        "desc": "Viết lời giải thích bằng những từ ngữ đơn giản nhất, sử dụng các hình ảnh ẩn dụ đời thường. CẤM TUYỆT ĐỐI không dùng thuật ngữ chuyên môn phức tạp!"
      },
      {
        "step": 3,
        "title": "Xác định điểm tắc nghẽn & Đứt gãy tri thức",
        "desc": "Chỗ nào bạn bị ngắc ngứ, chỗ nào bạn buộc phải dùng từ hoa mỹ để lấp liếm? Đó chính là LỖ HỔNG TO ĐÙNG trong não bạn!"
      },
      {
        "step": 4,
        "title": "Quay lại tài liệu gốc để nghiên cứu sâu & Tinh lọc lại",
        "desc": "Mở sách gốc ra đọc lại đúng chỗ bị hổng cho đến khi bạn có thể giải thích nó trôi chảy, trong sáng và giản dị."
      }
    ],
    "powerQuestions": [
      "Làm sao tôi có thể giải thích nguyên lý này cho bà nội hoặc một đứa trẻ lớp 4 hiểu được?",
      "Nếu bị cấm dùng 3 thuật ngữ chuyên môn này, tôi sẽ mô tả bản chất của nó bằng hình ảnh đời thường nào?",
      "Tôi thực sự hiểu cơ chế vận hành bên trong của nó, hay tôi chỉ đang thuộc lòng cái tên của nó?"
    ],
    "canonicalCase": {
      "title": "Feynman giải mã thảm họa tàu con thoi Challenger bằng một cốc nước đá (1986)",
      "context": "Tàu con thoi Challenger của NASA bị nổ tung sau 73 giây phóng năm 1986. Các quan chức NASA và nhà thầu đưa ra hàng ngàn trang báo cáo kỹ thuật phức tạp với các thuật ngữ khó hiểu để đùn đẩy trách nhiệm.",
      "execution": "Trong buổi điều trần truyền hình trực tiếp, Feynman lấy một mẩu vòng cao su O-ring nhỏ dùng trong tên lửa, kẹp nó vào một chiếc kìm rồi thả vào cốc nước đá trước mặt. Vài phút sau, ông rút miếng cao su ra và chứng minh trước mắt cả nước Mỹ: cao su mất hoàn toàn độ đàn hồi khi gặp lạnh!",
      "result": "Một thí nghiệm đơn giản không tốn một xu đã bóc trần nguyên nhân thảm họa: thời tiết băng giá buổi sáng phóng tàu đã làm hỏng vòng đệm O-ring. Cả thế giới nghiêng mình thán phục trước phương pháp Feynman."
    },
    "fatalPitfall": "Thuộc tên thay vì hiểu bản chất (The Illusion of Explanatory Depth): Biết tên một loài chim trong 5 thứ tiếng khác nhau nhưng hoàn toàn không biết gì về tập tính sinh học của nó.",
    "mindsetPractice": "Mỗi khi đọc xong một cuốn sách hay một bài học, hãy gấp sách lại và tưởng tượng bạn đang giải thích cho một người bạn không chuyên ngành trong vòng 2 phút. Chỗ nào ngắc ngứ, mở sách xem lại ngay."
  },
  {
    "id": "lesson_chunking_schemas",
    "code": "META-32",
    "trackId": "meta",
    "trackName": "VII. Học Nhanh & Siêu Nhận Thức",
    "name": "Đóng Khung Cấu Trúc Khái Niệm",
    "origName": "Chunking & Cognitive Schemas (Mastering Working Memory)",
    "master": "George A. Miller (Đại học Harvard, 1956) & Herbert Simon (Nobel 1978)",
    "academicSource": "George A. Miller, The Magical Number Seven, Plus or Minus Two: Some Limits on Our Capacity for Processing Information (Psychological Review, 1956); Herbert Simon on Chess Expertise.",
    "icon": "boxes",
    "color": "from-indigo-600 via-purple-600 to-teal-700",
    "badge": "Mở Rộng Dung Lượng Bộ Nhớ Não Bộ",
    "axiom": "Bộ nhớ làm việc (Working Memory) của não người có dung lượng cực kỳ hạn chế (chỉ xử lý được khoảng 4-7 đơn vị thông tin rời rạc một lúc). Bằng cách nén nhiều chi tiết nhỏ thành các Khối Khái Niệm lớn (Chunks), bạn có thể xử lý lượng thông tin khổng lồ với tốc độ ánh sáng như một đại kiện tướng.",
    "summary": "Người mới chơi cờ nhìn bàn cờ thấy 64 ô vuông và 32 quân cờ rời rạc (não bị quá tải ngay lập tức). Đại kiện tướng quốc tế nhìn bàn cờ chỉ thấy 2 'Thế trận' lớn (đã được đóng khung sẵn trong đầu). Nắm vững kỹ thuật đóng khung khái niệm giúp bạn học nhanh bất kỳ môn học nào gấp 10 lần người bình thường.",
    "algorithm": [
      {
        "step": 1,
        "title": "Phân rã tài liệu thành các đơn vị thông tin vi mô",
        "desc": "Khi tiếp cận một lượng kiến thức khổng lồ, tách rời nó ra thành các mảnh dữ liệu nhỏ."
      },
      {
        "step": 2,
        "title": "Tìm kiếm mẫu hình tương đồng và nguyên lý liên kết",
        "desc": "Những mảnh dữ liệu nào có cùng bản chất, cùng phục vụ một mục đích hoặc thuộc cùng một nhóm quy luật?"
      },
      {
        "step": 3,
        "title": "Nén thành một Khối Khái Niệm duy nhất (Create a Chunk)",
        "desc": "Đặt một cái tên đại diện hoặc một mô hình biểu tượng cho toàn bộ nhóm thông tin đó (như cách nén file zip)."
      },
      {
        "step": 4,
        "title": "Xây dựng Cây Nhận Thức (Cognitive Schema Hierarchy)",
        "desc": "Gắn kết các khối lớn lại với nhau thành một mạng lưới tri thức hoàn chỉnh trong bộ não dài hạn."
      }
    ],
    "powerQuestions": [
      "Làm sao tôi có thể gom 20 chi tiết rời rạc này thành 3 khối khái niệm cốt lõi?",
      "Cấu trúc cây tri thức (Thân cây ➔ Cành lớn ➔ Nhánh nhỏ) của môn học này trông như thế nào?",
      "Mẫu hình quen thuộc nào đã có trong đầu tôi mà tôi có thể dùng để liên kết với kiến thức mới này?"
    ],
    "canonicalCase": {
      "title": "Nghiên cứu kinh điển của Adriaan de Groot và Herbert Simon về trí nhớ các Đại kiện tướng cờ vua",
      "context": "Người ta cho các Đại kiện tướng và người chơi cờ nghiệp dư nhìn một thế cờ thực tế trong đúng 5 giây, sau đó che lại và yêu cầu xếp lại toàn bộ quân cờ.",
      "execution": "Đại kiện tướng xếp lại chính xác gần như 100% vị trí của 25 quân cờ, trong khi người nghiệp dư chỉ nhớ được 5-6 quân cờ rời rạc. Tuy nhiên, khi các nhà khoa học xếp các quân cờ một cách HOÀN TOÀN NGẪU NHIÊN vô nghĩa, Đại kiện tướng cũng chỉ nhớ được 5-6 quân y hệt người nghiệp dư!",
      "result": "Chứng minh rằng các chuyên gia không hề có bộ não siêu phàm bẩm sinh; họ siêu phàm là vì họ đã tích lũy hàng ngàn 'Khối Khái Niệm' (Chunks) trong đầu giúp họ nhận diện thế trận ngay lập tức."
    },
    "fatalPitfall": "Nhồi nhét dữ liệu thô (Raw Memorization): Cố gắng học thuộc lòng hàng ngàn con số hoặc câu chữ rời rạc mà không đóng khung chúng vào bất kỳ cấu trúc logic nào.",
    "mindsetPractice": "Khi học bất kỳ cuốn sách nào, hãy dành 15 phút đầu tiên đọc Mục Lục và vẽ sơ đồ cây tri thức của cuốn sách. Khi cái khung đã vững, việc nạp các chi tiết sau đó sẽ nhanh như gió."
  },
  {
    "id": "lesson_metacognition",
    "code": "META-33",
    "trackId": "meta",
    "trackName": "VII. Học Nhanh & Siêu Nhận Thức",
    "name": "Siêu Nhận Thức: Tư Duy Về Chính Tư Duy",
    "origName": "Metacognition (Thinking About Thinking / The Third-Person Observer)",
    "master": "John H. Flavell (Đại học Stanford, 1979) & Daniel Kahneman",
    "academicSource": "John H. Flavell, Metacognition and cognitive monitoring: A new area of cognitive-developmental inquiry (American Psychologist, 1979); Metacognitive awareness inventory (Schraw & Dennison).",
    "icon": "eye",
    "color": "from-purple-600 via-indigo-600 to-pink-700",
    "badge": "Ngọn Hải Đăng Giám Sát Não Bộ",
    "axiom": "Bạn không phải là dòng suy nghĩ của bạn; bạn là NGƯỜI QUAN SÁT dòng suy nghĩ đó. Siêu nhận thức là năng lực tách tâm thức ra ở ngôi thứ ba để theo dõi, đánh giá và điều khiển chính các thuật toán tư duy của não bộ mình trong thời gian thực.",
    "summary": "Người bình thường bị dòng xoáy cảm xúc và suy nghĩ cuốn đi như một chiếc lá giữa dòng nước xiết. Người làm chủ Siêu Nhận Thức giống như một người ngồi trên bờ sông nhìn dòng nước trôi: Khi thấy não mình sắp giận dữ, sắp kiêu ngạo, hoặc sắp đưa ra quyết định sai lầm, họ lập tức bấm nút dừng lại và điều chỉnh thuật toán.",
    "algorithm": [
      {
        "step": 1,
        "title": "Kích hoạt Người Quan Sát Ngôi Thứ Ba (The Silent Observer)",
        "desc": "Trong các tình huống căng thẳng, lùi lại một bước trong tâm trí và tự hỏi: 'Cái tâm trí của mình lúc này đang nghĩ gì thế nhỉ? Cảm xúc nào đang chi phối nó?'."
      },
      {
        "step": 2,
        "title": "Đo lường Độ Hiệu Chuẩn Nhận Thức (Calibration)",
        "desc": "Tự chất vấn: 'Mức độ tự tin của mình vào quyết định này là 90%, nhưng xác suất thực tế khách quan là bao nhiêu? Mình có đang tự huyễn hoặc bản thân không?'."
      },
      {
        "step": 3,
        "title": "Nhận diện Lỗ Hổng Chiến Lược Nhận Thức",
        "desc": "Quan sát xem phương pháp giải quyết vấn đề mình đang dùng có hiệu quả không? Tại sao làm việc này mãi không xong? Có nên đổi công cụ tư duy khác không?"
      },
      {
        "step": 4,
        "title": "Can thiệp & Tái định tuyến suy nghĩ (Cognitive Steering)",
        "desc": "Như người thuyền trưởng bẻ lái con tàu, chủ động tắt các dòng suy nghĩ tiêu cực vô bổ và kích hoạt các mô hình tư duy chuẩn xác."
      }
    ],
    "powerQuestions": [
      "Tại sao não tôi lại vừa nảy sinh suy nghĩ đó? Động cơ ngầm sâu xa bên dưới là gì?",
      "Tôi có đang thực sự tư duy độc lập hay tôi chỉ đang phản xạ vô điều kiện theo thói quen cũ?",
      "Nếu một người thông tuệ gấp 10 lần tôi đang nhìn vào cách tôi suy nghĩ lúc này, họ sẽ cho tôi lời khuyên gì?"
    ],
    "canonicalCase": {
      "title": "Ray Dalio và phương pháp 'Tự quan sát bản thân từ trên cao' (Looking Down from Above)",
      "context": "Ray Dalio từng đưa quỹ Bridgewater tới bờ vực phá sản năm 1982 vì sự tự phụ mù quáng khi dự đoán sai cuộc khủng hoảng nợ của Mexico.",
      "execution": "Sau cú ngã suýt mất mạng, Dalio rèn luyện Siêu Nhận Thức: Ông tập thói quen tách mình ra khỏi cơ thể, đứng ở góc nhìn của một nhà thiết kế hệ thống nhìn xuống chính mình (con người Ray Dalio chỉ là một cỗ máy trong bức tranh lớn). Khi thấy 'Ray Dalio' có dấu hiệu cái tôi nổi lên, ông lập tức tham vấn người khác và ghi chép lại các Nguyên tắc (Principles).",
      "result": "Bridgewater Associates vươn lên trở thành quỹ đầu cơ lớn nhất hành tinh quản lý hơn 150 tỷ USD."
    },
    "fatalPitfall": "Tự động lái trong vô thức (Mindless Autopilot): Sống và làm việc cả ngày như một cỗ máy lập trình sẵn, để cảm xúc bốc đồng điều khiển toàn bộ hành vi mà không hề có sự tỉnh thức.",
    "mindsetPractice": "Cài đặt chuông nhắc nhở ngẫu nhiên 3 lần mỗi ngày. Khi chuông kêu, dừng lại 10 giây và tự hỏi: 'Đúng lúc này, tâm trí mình đang suy nghĩ điều gì? Suy nghĩ đó có đang phục vụ cho mục tiêu lớn của cuộc đời mình không?'."
  },
  {
    "id": "lesson_dichotomy_of_control",
    "code": "META-34",
    "trackId": "meta",
    "trackName": "VII. Học Nhanh & Siêu Nhận Thức",
    "name": "Phân Đôi Quyền Kiểm Soát Khắc Kỷ",
    "origName": "Stoic Dichotomy of Control (The Ultimate Inner Fortress)",
    "master": "Epictetus (Enchiridion) & Marcus Aurelius (Hoàng đế La Mã - Meditations)",
    "academicSource": "Epictetus, Discourses and Selected Writings; Marcus Aurelius, Meditations (Book IV & VIII); Pierre Hadot, The Inner Citadel: The Meditations of Marcus Aurelius.",
    "icon": "shield",
    "color": "from-amber-600 via-orange-600 to-slate-900",
    "badge": "Pháo Đài Bất Khả Xâm Phạm Của Tâm Trí",
    "axiom": "Trong vũ trụ, mọi sự việc chỉ thuộc về đúng 2 loại: 1. Những thứ NẰM TRONG quyền kiểm soát tuyệt đối của bạn (suy nghĩ, niềm tin, đạo đức, hành động và nỗ lực của chính bạn); và 2. Những thứ NẰM NGOÀI quyền kiểm soát của bạn (thời tiết, thị trường, danh tiếng, suy nghĩ của người khác, kết quả cuối cùng). Đem bình yên của mình giao cho những thứ ngoài tầm kiểm soát là nguồn gốc của mọi sự đau khổ và thất bại trên đời.",
    "summary": "Người yếu đuối lãng phí 90% sinh lực để lo lắng, bực bội và oán trách những thứ họ không thể thay đổi (thời tiết, nền kinh tế, lời bàn tán của thiên hạ). Bậc đại sư Khắc kỷ buông bỏ 100% sự gắn kết cảm xúc với những thứ bên ngoài, dồn toàn bộ 100% năng lượng tinh hoa vào những gì mình làm chủ.",
    "algorithm": [
      {
        "step": 1,
        "title": "Kẻ 2 Cột Trên Giấy: Cột A (Kiểm Soát) vs Cột B (Không Kiểm Soát)",
        "desc": "Mỗi khi đối mặt với một vấn đề gây lo âu, viết chi tiết mọi khía cạnh vào 2 cột."
      },
      {
        "step": 2,
        "title": "Xóa sổ hoàn toàn Cột B khỏi tâm trí",
        "desc": "Tự nói với chính mình: 'Điều này nằm ngoài quyền hạn của tôi, việc tôi lo lắng hay tức giận cũng không thay đổi được 1 milimet nào của nó. Tôi buông tay'."
      },
      {
        "step": 3,
        "title": "Chuyển hóa mục tiêu từ Ngoại cảnh sang Nội tâm (Internalize the Goal)",
        "desc": "Thay vì đặt mục tiêu 'Phải thắng trận đấu' (nằm ngoài kiểm soát vì phụ thuộc vào trọng tài và đối thủ), hãy đặt mục tiêu 'Tôi sẽ thi đấu với 100% phong độ và kỷ luật tốt nhất của mình' (hoàn toàn trong tầm kiểm soát)."
      },
      {
        "step": 4,
        "title": "Hành động kiên cường không gì lay chuyển",
        "desc": "Tập trung tuyệt đối vào hành vi của bản thân trong từng giây phút hiện tại. Khi bạn không còn bận tâm đến phán xét của ngoại cảnh, bạn trở nên bất khả chiến bại."
      }
    ],
    "powerQuestions": [
      "Điều này có nằm trong quyền kiểm soát trực tiếp 100% của tôi lúc này không?",
      "Nếu câu trả lời là KHÔNG, tại sao tôi lại để nó cướp đi sự bình an và năng lượng quý báu của mình?",
      "Hành động tốt nhất mà TÔI CÓ THỂ TỰ TAY LÀM NGAY BÂY GIỜ để cải thiện tình hình là gì?"
    ],
    "canonicalCase": {
      "title": "Cuộc đời của Epictetus từ người nô lệ tàn tật thành bậc thầy của Hoàng đế La Mã",
      "context": "Epictetus sinh ra là một nô lệ bị xiềng xích ở Hy Lạp cổ đại, bị chủ nhân đánh đập đến gãy chân và mang thương tật suốt đời.",
      "execution": "Ông nhận ra một chân lý vĩ đại: 'Chủ nhân có thể xích chân ta, bỏ tù thân xác ta, nhưng không một ai trên trần gian có thể xiềng xích được tâm trí, ý chí và sự tự do lựa chọn thái độ của ta'. Ông áp dụng triệt để Phân đôi quyền kiểm soát: chấp nhận hoàn toàn hoàn cảnh nô lệ và thể xác tàn tật, nhưng giữ cho phẩm cách và trí tuệ của mình thanh khiết tuyệt đối.",
      "result": "Sau khi được trả tự do, ông mở trường triết học tại Hy Lạp, thu hút các quý tộc và chính Hoàng đế La Mã Hadrian đến thụ giáo. Tư tưởng của ông trở thành nền tảng soi sáng cho Hoàng đế Marcus Aurelius lãnh đạo đế chế La Mã qua các cuộc chiến tranh và đại dịch."
    },
    "fatalPitfall": "Cố kiểm soát điều bất khả (The Illusion of Control): Cố gắng uốn nắn suy nghĩ, cảm xúc và tình cảm của người khác; khi thất bại thì rơi vào cay đắng, trầm cảm và oán hận cuộc đời.",
    "mindsetPractice": "Mỗi khi cảm thấy bực tức hoặc lo âu, hãy thở sâu một nhịp và tự hỏi: 'Việc này thuộc Cột A hay Cột B?'. Nếu thuộc Cột B, nhún vai mỉm cười và quay lại làm việc của mình."
  }
];

// Giữ lại alias cho tương thích ngược
window.THINKING_MENTAL_MODELS_12 = window.THINKING_MASTER_LESSONS_34.slice(0, 12);

window.THINKING_LEVELS_7 = [
  {
    level: 1,
    id: "level_1_factual",
    title: "Cấp Độ 1: Sự Thật & Mô Tả Thực Tại",
    subtitle: "Factual & Descriptive Inquiry (Căn Bản Nhập Môn)",
    badge: "Level 1 • Sự Thật Thô",
    color: "from-emerald-500 to-teal-600",
    border: "border-emerald-500/40",
    bgBadge: "bg-emerald-500/20 text-emerald-300",
    icon: "clipboard-list",
    target: "Thu thập dữ kiện khách quan, làm rõ định nghĩa và kiểm chứng sự thật không pha trộn cảm xúc.",
    coreMindset: "Trước khi vội vàng phán xét hay tìm giải pháp, hãy xác định xem thực tế CHÍNH XÁC điều gì đang xảy ra. 90% sự hiểu lầm và thất bại bắt nguồn từ việc tranh cãi về những định nghĩa mơ hồ hoặc dữ liệu sai lệch.",
    coreQuestions: [
      { q: "Chính xác thì điều gì đang xảy ra ở đây?", note: "Tách bạch hành vi thực tế ra khỏi suy đoán." },
      { q: "Dữ liệu, con số hoặc bằng chứng cụ thể chứng minh điều này là gì?", note: "Đo lường định lượng thay vì cảm tính định tính." },
      { q: "Định nghĩa chuẩn xác của khái niệm chúng ta đang bàn là gì?", note: "Khóa chặt ngữ nghĩa để tránh cãi nhau vì bất đồng thuật ngữ." },
      { q: "Sự việc này xảy ra ở đâu, khi nào và những ai trực tiếp liên quan?", note: "Thiết lập bối cảnh không gian - thời gian chuẩn xác." }
    ],
    beforeAfter: {
      weak: "Sao dạo này công ty làm ăn chán thế nhỉ?",
      elevated: "Doanh thu và biên lợi nhuận ròng của công ty tháng này giảm bao nhiêu phần trăm so với cùng kỳ năm ngoái, và sụt giảm ở nhóm khách hàng nào?"
    },
    cognitiveTrap: "Bẫy Ngụy Biên Cảm Tính (Affect Heuristic): Nhầm lẫn cảm xúc cá nhân hoặc tin đồn với dữ liệu thực tế đã được kiểm chứng.",
    masterQuote: "\"Không có dữ liệu, bạn chỉ là một người nữa mang theo ý kiến cá nhân.\" — W. Edwards Deming"
  },
  {
    level: 2,
    id: "level_2_causal",
    title: "Cấp Độ 2: Cơ Chế & Chuỗi Nhân Quả",
    subtitle: "Causal & Mechanism Inquiry (Phân Tích Căn Nguyên)",
    badge: "Level 2 • Cơ Chế Vận Hành",
    color: "from-cyan-500 to-blue-600",
    border: "border-cyan-500/40",
    bgBadge: "bg-cyan-500/20 text-cyan-300",
    icon: "git-commit",
    target: "Truy tìm mắt xích nguyên nhân gốc rễ, phân biệt nguyên nhân bề mặt và đòn bẩy kích hoạt.",
    coreMindset: "Một triệu chứng chỉ là vết thương ngoài da. Người có tư duy sắc bén không dừng lại ở câu hỏi 'Chuyện gì' mà liên tục truy vấn 'Tại sao' để tìm ra guồng máy cơ học đang vận hành bên dưới.",
    coreQuestions: [
      { q: "Nguyên nhân bề mặt (Proximate Cause) là gì và Nguyên nhân gốc rễ (Root Cause) là gì?", note: "Tránh chữa cháy tạm thời khiến vấn đề tái phát." },
      { q: "Kỹ thuật 5 Whys: Tại sao điều đó lại xảy ra? (Hỏi sâu 5 lần liên tiếp)", note: "Đào qua 5 tầng nguyên nhân để chạm tới bản chất cơ cấu." },
      { q: "Biến số nào nếu thay đổi sẽ kéo theo toàn bộ kết quả thay đổi?", note: "Xác định biến độc lập trọng yếu (Key Driver)." },
      { q: "Cơ chế nào kết nối giữa hành động X và hậu quả Y?", note: "Làm rõ đường truyền động lực học thay vì giả định tương quan là nhân quả." }
    ],
    beforeAfter: {
      weak: "Tại sao tôi học mãi mà không nhớ được từ vựng?",
      elevated: "Cơ chế mã hóa thông tin của não bộ tôi đang thiếu bước nào: thiếu hình ảnh mỏ neo, thiếu truy hồi chủ động (Active Recall), hay khoảng cách ngắt quãng (Spaced Repetition) chưa đúng nhịp?"
    },
    cognitiveTrap: "Bẫy Tương Quan Nhầm Nhân Quả (Cum Hoc Ergo Propter Hoc): Thấy hai sự việc xảy ra cùng lúc thì vội kết luận cái này sinh ra cái kia.",
    masterQuote: "\"Để giải quyết một vấn đề vĩnh viễn, bạn phải tiêu diệt nguyên nhân gốc rễ, không phải cắt tỉa những chiếc lá triệu chứng.\" — Sakichi Toyoda"
  },
  {
    level: 3,
    id: "level_3_first_principles",
    title: "Cấp Độ 3: Tư Duy Nguyên Lý Đầu Tiên",
    subtitle: "First Principles Inquiry (Tước Bỏ Giả Định Vay Mượn)",
    badge: "Level 3 • Nguyên Lý Sơ Khởi",
    color: "from-blue-600 to-indigo-600",
    border: "border-blue-500/40",
    bgBadge: "bg-blue-500/20 text-blue-300",
    icon: "atom",
    target: "Phân rã vấn đề về các sự thật nền tảng không thể bẻ gãy, đoạn tuyệt với việc bắt chước máy móc.",
    coreMindset: "Hầu hết mọi người suy nghĩ theo phép tương tự (Reasoning by Analogy): 'Người ta làm thế nào thì mình làm thế ấy'. Bậc thầy tư duy nguyên lý đầu tiên tước bỏ toàn bộ quy ước xã hội, bóc tách về các định luật vật lý và chân lý tối thiểu để tái thiết từ con số 0.",
    coreQuestions: [
      { q: "Điều gì ở đây chắc chắn đúng 100% về mặt bản chất mà không phụ thuộc vào ý kiến của bất kỳ ai?", note: "Xác định các tiên đề cứng (Hard Axioms)." },
      { q: "Chúng ta đang ngầm thừa nhận những giả định nào mà chưa bao giờ tự mình kiểm chứng lại?", note: "Lôi những 'niềm tin mù quáng' ra ánh sáng phản biện." },
      { q: "Nếu phân rã toàn bộ vấn đề này thành các thành phần nguyên tử nhỏ nhất, chúng bao gồm những gì và giá vốn thực của chúng là bao nhiêu?", note: "Cách Elon Musk giảm giá thành pin Tesla và tên lửa Falcon 9." },
      { q: "Tại sao người ta lại làm theo cách này? Do bản chất bắt buộc hay chỉ là thói quen kế thừa từ quá khứ?", note: "Giải phóng tư duy khỏi sức ỳ lịch sử." }
    ],
    beforeAfter: {
      weak: "Làm sao để mở chuỗi cà phê cạnh tranh được với Highlands hay Starbucks?",
      elevated: "Bản chất tối thượng của một tách cà phê về mặt sinh hóa và trải nghiệm con người là gì (Caffeine + Không gian làm việc + Trạng thái kích thích não bộ)? Làm sao cung cấp trải nghiệm đó với chi phí cận biên bằng 0 mà không cần thuê mặt bằng đắt đỏ?"
    },
    cognitiveTrap: "Bẫy Lối Mòn Nhận Thức (Status Quo Bias): Cho rằng cách làm hiện tại là tối ưu chỉ vì nó đã tồn tại từ lâu.",
    masterQuote: "\"Hãy đun sôi vấn đề xuống những chân lý cơ bản nhất, và lập luận đi lên từ đó, thay vì lý luận theo kiểu bắt chước.\" — Elon Musk & Aristotle"
  },
  {
    level: 4,
    id: "level_4_inversion",
    title: "Cấp Độ 4: Tư Duy Đảo Ngược & Vấn Đáp Socratic",
    subtitle: "Inversion & Socratic Dialectic (Lật Ngược Thế Cờ)",
    badge: "Level 4 • Đảo Ngược Vấn Đề",
    color: "from-purple-600 to-pink-600",
    border: "border-purple-500/40",
    bgBadge: "bg-purple-500/20 text-purple-300",
    icon: "refresh-cw",
    target: "Tìm kiếm sự thành công bằng cách tránh né triệt để thất bại; dùng phương pháp thẩm vấn Socrates để làm lung lay sự tự mãn.",
    coreMindset: "\"Nghịch đảo, luôn luôn nghịch đảo!\" — Carl Jacobi & Charlie Munger. Thay vì cố gắng trở nên thông minh phi thường, hãy học cách không làm những điều ngu xuẩn. Đi kèm là nghệ thuật vấn đáp Socrates: đặt câu hỏi để đối phương tự nhận ra lỗ hổng trong niềm tin của chính mình.",
    coreQuestions: [
      { q: "Nếu tôi muốn dự án/cuộc đời này thất bại thảm hại nhất có thể, tôi sẽ phải làm những điều ngu xuẩn nào?", note: "Lập danh sách tử huyệt và tránh xa chúng bằng mọi giá." },
      { q: "Bằng chứng hoặc dữ liệu nào xuất hiện sẽ lập tức chứng minh giả thuyết của tôi hoàn toàn sai?", note: "Tư duy kiểm chứng giả thuyết của Karl Popper (Falsifiability)." },
      { q: "Nếu giả thiết ngược lại hoàn toàn đúng thì thế giới sẽ trông như thế nào?", note: "Phá vỡ góc nhìn một chiều." },
      { q: "Tại sao người thông minh nhất lại không đồng ý với tôi trong vấn đề này? Luận điểm mạnh nhất của họ là gì?", note: "Thử thách Tư duy Người rơm (Steel-manning the opposition)." }
    ],
    beforeAfter: {
      weak: "Làm sao để duy trì hôn nhân hạnh phúc bền lâu?",
      elevated: "Những hành vi, thói quen và lời nói nào chắc chắn 100% sẽ phá nát một cuộc hôn nhân nhanh nhất, và làm sao để chúng tôi tuyệt đối loại trừ những điều đó mỗi ngày?"
    },
    cognitiveTrap: "Bẫy Thiên Lệch Xác Nhận (Confirmation Bias): Chỉ tìm kiếm bằng chứng củng cố định kiến có sẵn và phớt lờ các dấu hiệu cảnh báo ngược lại.",
    masterQuote: "\"Tất cả những gì tôi muốn biết là tôi sẽ chết ở đâu, để tôi không bao giờ bước chân tới đó.\" — Charlie Munger"
  },
  {
    level: 5,
    id: "level_5_systems",
    title: "Cấp Độ 5: Tư Duy Cấp Hệ Thống & Tác Động Bậc Cao",
    subtitle: "Systems Thinking & Second-Order Effects (Nhìn Thấu Mạng Lưới)",
    badge: "Level 5 • Hiệu Ứng Bậc 2, 3",
    color: "from-amber-500 to-orange-600",
    border: "border-amber-500/40",
    bgBadge: "bg-amber-500/20 text-amber-300",
    icon: "network",
    target: "Nhìn thấu mạng lưới đa biến số, dự phóng hậu quả ngoài dự tính và tìm kiếm điểm đòn bẩy thay đổi hệ thống.",
    coreMindset: "Người tầm thường chỉ thấy tác động bậc 1 (First-order effect): 'Nếu làm X thì được Y ngay trước mắt'. Bậc thầy hệ thống nhìn thấu tác động bậc 2, bậc 3 và vòng lặp phản hồi (Feedback Loops) sau 6 tháng, 3 năm: 'Và rồi sau đó thì sao?' (And then what?).",
    coreQuestions: [
      { q: "Và rồi sau đó thì sao? (And then what?): Hậu quả bậc 2 và bậc 3 của quyết định này sau 1 năm, 5 năm là gì?", note: "Ngăn chặn bẫy ngắn hạn hại dài hạn." },
      { q: "Hành động này có tạo ra Hiệu Ứng Ngược (Cobra Effect - muốn diệt rắn lại làm rắn sinh sôi) không?", note: "Nhận diện hậu quả ngoài ý muốn (Unintended Consequences)." },
      { q: "Đâu là Vòng lặp củng cố (Reinforcing Loop) tạo đà và Vòng lặp cân bằng (Balancing Loop) kìm hãm?", note: "Phân tích lực cản và đà tăng trưởng của hệ thống." },
      { q: "Đâu là Điểm đòn bẩy cao nhất (High Leverage Point) chỉ cần tác động một lực nhỏ nhưng xoay chuyển toàn bộ cục diện?", note: "Nguyên lý đòn bẩy Archimedes trong quản trị và tư duy." }
    ],
    beforeAfter: {
      weak: "Chúng ta giảm giá sốc 50% để đánh bại đối thủ và giành thị phần!",
      elevated: "Nếu giảm giá 50%, đối thủ sẽ phản ứng ra sao (tác động bậc 2)? Biên lợi nhuận toàn ngành bị bào mòn thế nào? Liệu có thu hút tệp khách hàng độc hại chỉ hám rẻ làm hủy hoại giá trị thương hiệu dài hạn không (tác động bậc 3)?"
    },
    cognitiveTrap: "Bẫy Tư Duy Cận Thị Bậc 1: Thỏa mãn tức thì với lợi ích trước mắt mà không thấy quả bom nổ chậm ở phía sau.",
    masterQuote: "\"Hầu hết các vấn đề phức tạp ngày nay đều xuất phát từ những giải pháp đơn giản của ngày hôm qua.\" — Peter Senge"
  },
  {
    level: 6,
    id: "level_6_reframing",
    title: "Cấp Độ 6: Tái Cấu Trúc Khung Nhìn & Đột Phá Giả Thuyết",
    subtitle: "Reframing & Lateral Paradigm Shift (Chuyển Dịch Góc Nhìn)",
    badge: "Level 6 • Tái Đóng Khung",
    color: "from-rose-600 to-red-600",
    border: "border-rose-500/40",
    bgBadge: "bg-rose-500/20 text-rose-300",
    icon: "maximize-2",
    target: "Phát hiện ra bài toán đang giải vốn là bài toán sai; chuyển hóa điểm yếu chí tử thành lợi thế độc tôn.",
    coreMindset: "Cách bạn đóng khung câu hỏi quyết định 99% không gian giải pháp. Nếu đóng khung hẹp, bạn chỉ tìm thấy giải pháp tầm thường. Thay đổi câu hỏi là thay đổi toàn bộ luật chơi.",
    coreQuestions: [
      { q: "Liệu chúng ta có đang hùng hục đi giải đúng đáp án cho một CÂU HỎI SAI không?", note: "Thử thách giá trị của chính bài toán hiện tại." },
      { q: "Nếu rào cản lớn nhất này biến mất hoàn toàn, bài toán thực sự sẽ trở thành gì?", note: "Giải phóng trí tưởng tượng khỏi các giới hạn giả tạo." },
      { q: "Làm thế nào để biến chính điểm yếu lớn nhất của chúng ta thành vũ khí cạnh tranh độc tôn không ai sao chép được?", note: "Nghệ thuật Nhu đạo trong kinh doanh và chiến lược." },
      { q: "Sự thật quan trọng nào mà hầu như rất ít người đồng ý với bạn? (Peter Thiel's Question)", note: "Khai quật mỏ vàng bí mật của thời đại." }
    ],
    beforeAfter: {
      weak: "Làm sao để làm cái thang máy này chạy nhanh hơn khi người ta liên tục phàn nàn là thang quá chậm?",
      elevated: "Vấn đề thực sự không phải là tốc độ thang máy, mà là sự sốt ruột và buồn chán của người đứng đợi. Làm sao để thời gian chờ đợi trở nên thú vị và hữu ích? (Giải pháp: Lắp gương lớn và màn hình tin tức vào sảnh thang máy!)."
    },
    cognitiveTrap: "Bẫy Đóng Khung Hẹp (Narrow Framing): Mắc kẹt trong lựa chọn nhị nguyên 'Làm A hay không làm A' thay vì mở rộng sang 'Làm sao để đạt được cả A và B'."
    ,masterQuote: "\"Nếu tôi có một giờ để cứu hành tinh, tôi sẽ dành 55 phút để xác định đúng câu hỏi và 5 phút để giải nó.\" — Albert Einstein"
  },
  {
    level: 7,
    id: "level_7_monster_prof",
    title: "Cấp Độ 7: Cấp Độ Giáo Sư Khủng / Đại Thụ Học Thuật",
    subtitle: "Monster Professor & Epistemic Frontier (Biên Giới Bản Thể & Nhận Thức Luận)",
    badge: "Level 7 • ĐẠI GIÁO SƯ KHỦNG 👑",
    color: "from-amber-400 via-rose-500 to-purple-600",
    border: "border-amber-400/60 shadow-amber-500/20 shadow-lg",
    bgBadge: "bg-gradient-to-r from-amber-500/30 to-purple-500/30 text-amber-200 border border-amber-400/50 font-black",
    icon: "crown",
    target: "Truy vấn hệ tiên đề sâu nhất của khoa học và tư tưởng; liên kết cấu trúc đồng hình giữa các đại ngành; tạo ra bước nhảy chuyển dịch hệ hình (Paradigm Shift).",
    coreMindset: "Ở đẳng cấp cao nhất của trí tuệ con người, câu hỏi không còn nhằm mục đích 'giải quyết vấn đề' mà nhằm 'khai sinh ra vũ trụ tư tưởng mới'. Đây là câu hỏi của Einstein khi cưỡi chùm ánh sáng, của Gödel khi chứng minh định lý bất toàn, của Newton khi nhìn quả táo rơi nối với Mặt Trăng.",
    coreQuestions: [
      { q: "Hệ tiên đề (Axioms) và giả định bản thể luận (Ontology) nào đang ngầm đỡ dưới toàn bộ lý thuyết này, và điều gì xảy ra nếu hệ tiên đề đó không hoàn chỉnh?", note: "Tư duy đục thủng bức tường tiên đề (như Hình học phi-Euclid)." },
      { q: "Đâu là Cấu trúc sâu bất biến (Deep Invariant Isomorphism) liên kết giữa ba ngành khoa học tưởng chừng hoàn toàn đối lập (Sinh học, Kinh tế học, Khoa học Máy tính)?", note: "Tư duy siêu liên ngành (Polymathic Synthesis)." },
      { q: "Câu hỏi nào nếu được giải quyết sẽ làm sụp đổ toàn bộ mô hình tư duy hiện có và mở ra một cuộc cách mạng khoa học mới?", note: "Điểm kỳ dị nhận thức (Epistemological Singularity)." },
      { q: "Giới hạn của chính công cụ đo lường và cấu trúc ngôn ngữ của chúng ta trong việc mô tả thực tại này là gì?", note: "Tư duy siêu nhận thức (Metacognition & Wittgenstein's limits of language)." }
    ],
    beforeAfter: {
      weak: "Làm sao tối ưu hóa công thức trọng lực của Newton để tính quỹ đạo sao Thủy chuẩn xác hơn?",
      elevated: "Điều gì sẽ xảy ra nếu Trọng Lực hoàn toàn KHÔNG PHẢI là một lực hút như Newton giả định, mà thực chất là độ cong hình học của chính không gian - thời gian do năng lượng và khối lượng uốn nắn nên? (Thuyết Tương Đối Tổng Quát Einstein)."
    },
    cognitiveTrap: "Bẫy Ngạo Mạn Học Thuật & Độc Đoán Giáo Điều: Tin rằng hệ thống tri thức hiện tại đã hoàn hảo và không gì có thể vượt qua nó.",
    masterQuote: "\"Người thông minh có câu trả lời hay. Người có trí tuệ vĩ đại biết đặt CÂU HỎI KHAI SÁNG THẾ GIỚI.\" — Khuyết danh"
  }
];


window.THINKING_QUESTION_ELEVATOR_CASES = [
  {
    id: "case_wealth",
    topic: "Tài Chính & Khởi Nghiệp",
    icon: "coins",
    originalQuestion: "Làm sao để tôi kiếm được nhiều tiền hơn bây giờ?",
    levels: [
      { level: 1, title: "Level 1 (Sự thật):", q: "Chính xác thì thu nhập hàng tháng từ các nguồn hiện tại của tôi là bao nhiêu, chi tiêu cố định là bao nhiêu, và tôi có kỹ năng cụ thể nào đo lường được trên thị trường?" },
      { level: 2, title: "Level 2 (Cơ chế):", q: "Tiền thực chất là gì? Tiền là thước đo giá trị trao đổi mà thị trường trả cho giải pháp của bạn. Hiện tại giải pháp của tôi đang phục vụ được cho bao nhiêu người và giải quyết nỗi đau lớn cỡ nào?" },
      { level: 3, title: "Level 3 (Nguyên lý đầu tiên):", q: "Thu nhập = [Giá trị tạo ra cho mỗi người] x [Số lượng người được phục vụ] x [Khả năng giữ lại giá trị]. Làm sao phân rã 3 biến số này và loại bỏ hoàn toàn việc bán thời gian lấy tiền lương 1-1?" },
      { level: 4, title: "Level 4 (Đảo ngược Munger):", q: "Những hành vi nào chắc chắn 100% sẽ đẩy tôi vào cảnh khánh kiệt, nợ nần và mất khả năng thanh toán? (Chi tiêu vượt thu, đòn bẩy tài chính quá mức, đầu tư vào thứ không hiểu). Làm sao để triệt tiêu toàn bộ những nguy cơ đó trước tiên?" },
      { level: 5, title: "Level 5 (Hệ thống & Bậc cao):", q: "Nếu tôi tăng thu nhập gấp 10 lần nhờ đòn bẩy công nghệ/mã nguồn, hậu quả bậc 2 đối với sức khỏe, quan hệ gia đình và cơ cấu thuế là gì? Đâu là cỗ máy tự vận hành (flywheel) có thể tiếp tục sinh dòng tiền kể cả khi tôi đang ngủ?" },
      { level: 6, title: "Level 6 (Tái cấu trúc khung):", q: "Thay vì hỏi 'Làm sao kiếm tiền cho bản thân', hãy hỏi: 'Vấn đề nhức nhối nhất của 10.000 doanh nghiệp vừa và nhỏ mà chưa ai thèm giải quyết tử tế là gì?' Khi giải quyết được việc đó, tiền tự động chảy về như một phụ phẩm tất yếu." },
      { level: 7, title: "Level 7 (Giáo sư khủng):", q: "Cấu trúc sâu của giá trị trong kỷ nguyên AI và tự động hóa là gì? Khi chi phí biên của thông tin và trí tuệ nhân tạo giảm về 0, đâu là tài sản bản thể duy nhất mà con người sẵn sàng đánh đổi sự khan hiếm để sở hữu (Sự tin cậy tuyệt đối, Danh tiếng đạo đức, hay Trải nghiệm hiện sinh không thể sao chép)?" }
    ]
  },
  {
    id: "case_memory",
    topic: "Siêu Trí Nhớ & Học Tập",
    icon: "brain",
    originalQuestion: "Làm sao để học thuộc nhanh và nhớ lâu không bị quên?",
    levels: [
      { level: 1, title: "Level 1 (Sự thật):", q: "Chính xác thì tài liệu tôi cần nhớ dài bao nhiêu trang/bao nhiêu câu, thời hạn kiểm tra là khi nào, và phương pháp hiện tại tôi đang dùng là đọc vẹt lặp đi lặp lại hay có ghi chép?" },
      { level: 2, title: "Level 2 (Cơ chế):", q: "Bộ não sinh học ghi nhớ thông qua cơ chế khớp thần kinh (Synapses) và trí nhớ làm việc (Working Memory). Quá trình chuyển từ trí nhớ ngắn hạn sang dài hạn qua hồi hải mã (Hippocampus) cần những tín hiệu kích thích cụ thể nào?" },
      { level: 3, title: "Level 3 (Nguyên lý đầu tiên):", q: "Bản chất tiến hóa hàng triệu năm của não người là chỉ ưu tiên nhớ: Vị trí không gian (để tìm thức ăn), Hình ảnh ấn tượng/cảm xúc mạnh (để tránh thú dữ), và Cấu trúc liên kết. Làm sao dịch chuyển mọi văn bản trừu tượng thành Tọa độ không gian (Cung điện Loci) và Hình ảnh cảm xúc cường điệu?" },
      { level: 4, title: "Level 4 (Đảo ngược):", q: "Cách nhanh nhất để một người quên sạch 100% kiến thức vừa đọc sau 24 giờ là gì? (Đọc thụ động, không kiểm tra lại, lướt điện thoại ngay sau khi học, thiếu ngủ). Làm sao loại trừ toàn bộ các hành vi này?" },
      { level: 5, title: "Level 5 (Hệ thống & Bậc cao):", q: "Hệ thống nhịp ngắt quãng (Spaced Repetition: 1 ngày - 3 ngày - 7 ngày - 30 ngày) tác động thế nào tới Đường cong quên lãng Ebbinghaus? Làm sao xây dựng vòng lặp phản hồi tự động nhắc lại những câu yếu nhất mà không tốn công ôn lại câu đã thuộc?" },
      { level: 6, title: "Level 6 (Tái cấu trúc khung):", q: "Thay vì 'Cố gắng nhét kiến thức vào não', hãy chuyển thành 'Tìm cách rút thông tin ra khỏi não (Active Retrieval)' và 'Dạy lại cho một đứa trẻ 10 tuổi (Feynman Technique)'. Khi bạn không thể giải thích đơn giản, bạn chưa hiểu bản chất." },
      { level: 7, title: "Level 7 (Giáo sư khủng):", q: "Bản chất của tri thức con người có phải là việc lưu trữ dữ liệu cô lập không, hay là việc kiến tạo một 'Ma trận Mạng lưới Ý niệm' (Conceptual Semantic Web)? Làm sao để một câu Kinh Thánh hay một nguyên lý triết học trở thành một mắt xích mỏ neo kết nối và chiếu sáng toàn bộ hành vi, quyết định và nhân sinh quan trong đời thực?" }
    ]
  },
  {
    id: "case_conflict",
    topic: "Lãnh Đạo & Xung Đột Con Người",
    icon: "users",
    originalQuestion: "Làm sao để nhân viên/đối tác nghe lời và làm đúng ý tôi?",
    levels: [
      { level: 1, title: "Level 1 (Sự thật):", q: "Chính xác thì họ đã làm sai quy trình nào? Tiêu chuẩn công việc đã được văn bản hóa cụ thể bằng KPI rõ ràng chưa hay chỉ là kỳ vọng ngầm trong đầu tôi?" },
      { level: 2, title: "Level 2 (Cơ chế):", q: "Động lực nào chi phối hành vi của họ lúc này: Họ không biết cách làm (thiếu kỹ năng), không thể làm (thiếu tài nguyên), hay không muốn làm (thiếu động lực lợi ích)?" },
      { level: 3, title: "Level 3 (Nguyên lý đầu tiên):", q: "Con người không bao giờ hành động vì mục tiêu của người khác, họ chỉ hành động vì lợi ích và giá trị bản thân họ tin tưởng. Mục tiêu của tôi có thực sự trùng khớp với động lực nội tại (Intrinsic Motivation) của họ không?" },
      { level: 4, title: "Level 4 (Đảo ngược):", q: "Làm thế nào để biến đội ngũ này thành những kẻ chống đối ngầm, bất mãn và tìm cách phá hoại công việc nhanh nhất? (Độc đoán, kiểm soát vi mô, cướp công, chỉ trích công khai). Tôi có đang vô tình phạm phải điều nào trong số đó không?" },
      { level: 5, title: "Level 5 (Hệ thống):", q: "Cơ cấu khen thưởng và phạt hiện tại đang khuyến khích hành vi nào? (Hiệu ứng Peltzman: Thưởng cái gì người ta sẽ tối ưu hóa cái đó, kể cả gian lận). Làm sao thiết kế luật chơi để việc làm đúng luôn mang lại lợi ích lớn nhất cho họ?" },
      { level: 6, title: "Level 6 (Tái cấu trúc khung):", q: "Đừng cố biến họ thành bản sao nghe lời răm rắp. Câu hỏi đúng là: 'Làm thế nào để tạo ra một bối cảnh (Context) mà ở đó họ có đủ quyền tự chủ, năng lực và trách nhiệm để tự đưa ra quyết định còn xuất sắc hơn cả tôi?'" },
      { level: 7, title: "Level 7 (Giáo sư khủng):", q: "Bản chất quyền lực trong tổ chức là gì nếu không phải là sự tự nguyện ủy thác niềm tin? Làm sao xây dựng một hệ thống văn hóa tự tiến hóa (Self-Organizing Complex Adaptive System) nơi mà trí tuệ tập thể vượt xa giới hạn nhận thức của bất kỳ cá nhân lãnh đạo đơn lẻ nào?" }
    ]
  }
];


window.THINKING_PRACTICE_SCENARIOS = [
  {
    id: "scen_1",
    title: "Tình huống 1: Cơ Hội Đầu Tư Siêu Lợi Nhuận",
    context: "Một người quen giới thiệu cho bạn một dự án ủy thác cam kết lợi nhuận 30%/tháng với công nghệ AI giao dịch tự động không bao giờ lỗ.",
    questionToAsk: "Để lột trần bản chất sự việc, câu hỏi nào mang sức mạnh tư duy cao nhất?",
    options: [
      { text: "Dự án này cần nạp tối thiểu bao nhiêu tiền và rút lãi vào thứ mấy hàng tuần?", level: 1, explanation: "Đây là câu hỏi Level 1 (Sự thật thô) nhưng quá ngây thơ, đã vội vàng chấp nhận tiền đề của kẻ lừa đảo." },
      { text: "Các nhà đầu tư trước đó đã kiếm được bao nhiêu tiền rồi, có ảnh chụp màn hình chuyển khoản không?", level: 1, explanation: "Vẫn là Level 1, dễ dàng bị thao túng bởi bằng chứng giả mạo và tâm lý bầy đàn." },
      { text: "Nếu thuật toán này thực sự kiếm được 30%/tháng không rủi ro, theo lãi kép sau 3 năm họ sẽ giàu hơn cả Warren Buffett và Apple, vậy TẠI SAO họ phải đi huy động vài triệu bạc lẻ từ người ngoài thay vì tự vay ngân hàng với lãi 1%/tháng để ôm trọn?", level: 3, isBest: true, explanation: "XUẤT SẮC! Đây là câu hỏi Level 3 & Level 4 (Nguyên lý đầu tiên + Đảo ngược Munger). Nó đánh thẳng vào mâu thuẫn cốt tử của mô hình lừa đảo ponzi." },
      { text: "Công ty của bạn có giấy phép đăng ký kinh doanh ở đâu?", level: 1, explanation: "Giấy phép kinh doanh có thể mua hoặc thành lập giả ở nước ngoài rất dễ dàng, không chứng minh được tính xác thực của thuật toán." }
    ]
  },
  {
    id: "scen_2",
    title: "Tình huống 2: Bế Tắc Học Tập & Trí Nhớ",
    context: "Bạn chuẩn bị bước vào kỳ thi quan trọng với 500 trang kiến thức chuyên ngành phức tạp, hiện tại bạn chỉ còn 2 tuần và cảm thấy quá tải trầm trọng.",
    questionToAsk: "Câu hỏi nào giúp bạn xoay chuyển tình thế ngay lập tức?",
    options: [
      { text: "Làm sao để uống thuốc bổ não hay thức trắng đêm uống bò húc để học được 18 tiếng mỗi ngày?", level: 1, explanation: "Câu hỏi bề mặt tai hại, chỉ chuốc lấy sự suy sụp thể chất và não bộ tê liệt." },
      { text: "Theo nguyên lý Pareto 80/20 và First Principles: Đâu là 20% cấu trúc lõi mang tính trụ cột quyết định 80% điểm số của kỳ thi này, và làm sao chuyển chúng thành Cung Điện Không Gian để ôn truy hồi ngắt quãng?", level: 5, isBest: true, explanation: "CHÍNH XÁC! Kết hợp giữa Pareto (Level 5), Nguyên lý đầu tiên (Level 3) và Kỹ thuật Siêu trí nhớ thực chiến để tạo đòn bẩy tối thượng." },
      { text: "Tại sao giáo viên lại ra đề khó và ác với sinh viên như vậy?", level: 1, explanation: "Câu hỏi than vãn đóng vai nạn nhân, không tạo ra bất kỳ giá trị hành động nào." },
      { text: "Có bạn nào trong lớp có tóm tắt sẵn không cho mình xin với?", level: 2, explanation: "Dựa dẫm vào tóm tắt của người khác mà không tự xử lý dữ liệu qua não mình thì vào phòng thi sẽ quên sạch." }
    ]
  },
  {
    id: "scen_3",
    title: "Tình huống 3: Bẫy Chi Phí Chìm (Sunk Cost Fallacy)",
    context: "Bạn đã đổ 3 năm thanh xuân và 500 triệu vào một dự án kinh doanh thua lỗ liên tục. Nhóm của bạn đang bàn xem có nên vay thêm 200 triệu để 'gỡ gạc' tiếp không.",
    questionToAsk: "Câu hỏi sắc bén nào của Charlie Munger sẽ cứu mạng bạn lúc này?",
    options: [
      { text: "Chúng ta đã bỏ ra 500 triệu rồi, giờ bỏ thì mất trắng à?", level: 1, explanation: "Đây chính là triệu chứng kinh điển của Bẫy chi phí chìm: để quá khứ đã mất quyết định tương lai." },
      { text: "Nếu ngày hôm nay tôi hoàn toàn mới tinh bước vào công ty này với tư cách CEO mới được thuê ngoài và KHÔNG HỀ CÓ bất kỳ ràng buộc cảm xúc nào với số tiền 500 triệu đã mất: Liệu tôi có bỏ ra 200 triệu để đầu tư vào mô hình này không?", level: 4, isBest: true, explanation: "BẬC THẦY ĐẢO NGƯỢC! Đây là câu hỏi kinh điển mà Andy Grove đã hỏi Gordon Moore khi cứu sống tập đoàn Intel năm 1985 để dũng cảm từ bỏ mảng thẻ nhớ sang chip vi xử lý." },
      { text: "Làm sao để vay được ngân hàng lãi suất thấp nhất?", level: 2, explanation: "Chỉ là câu hỏi kỹ thuật bề mặt, tiếp tục nuôi dưỡng một con tàu đắm." },
      { text: "Thầy bói bảo năm nay tôi tam tai, có nên cúng giải hạn không?", level: 0, explanation: "Né tránh trách nhiệm và buông xuôi tư duy lý tính." }
    ]
  }
];

