// =========================================================================
// THƯ VIỆN DỮ LIỆU ĐẠI TƯ DUY & NGHỆ THUẬT ĐẶT CÂU HỎI
// TỪ CĂN BẢN ĐẾN GIÁO SƯ KHỦNG (THE ART OF INQUIRY & MENTAL MODELS)
// =========================================================================

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

window.THINKING_MENTAL_MODELS_12 = [
  {
    id: "model_first_principles",
    name: "Tư Duy Nguyên Lý Đầu Tiên",
    origName: "First Principles Thinking",
    master: "Aristotle & Elon Musk",
    icon: "atom",
    badge: "Giải Phẫu Chân Lý",
    color: "from-blue-600 to-cyan-600",
    summary: "Bóc tách mọi vấn đề về những chân lý cơ bản nhất không thể nghi ngờ, rồi suy luận từ dưới lên thay vì bắt chước theo số đông.",
    triggerQuestion: "\"Điều gì ở đây chắc chắn đúng 100% về mặt vật lý/bản chất mà không cần phụ thuộc vào thói quen hay ai nói?\"",
    howToApply: "1. Liệt kê các giả định hiện tại. 2. Thẩm vấn từng giả định: 'Điều này có bắt buộc không?'. 3. Phân rã về các thành phần tối thiểu. 4. Tái cấu trúc giải pháp mới toanh từ con số 0.",
    fatalError: "Bị đánh lừa bởi thói quen xã hội 'người ta vẫn làm thế từ xưa tới nay'."
  },
  {
    id: "model_inversion",
    name: "Tư Duy Nghịch Đảo",
    origName: "Inversion Thinking",
    master: "Charlie Munger & Carl Jacobi",
    icon: "refresh-cw",
    badge: "Phòng Tránh Ngu Xuẩn",
    color: "from-purple-600 to-pink-600",
    summary: "Nghịch đảo, luôn luôn nghịch đảo! Muốn thành công, trước hết phải xác định tất cả những cách chắc chắn dẫn đến thất bại rồi né tránh chúng.",
    triggerQuestion: "\"Làm thế nào để chuyện này trở nên tồi tệ và thất bại thảm hại nhất có thể?\"",
    howToApply: "Thay vì hỏi 'Làm sao để khỏe mạnh?', hãy hỏi 'Những thói quen nào chắc chắn tàn phá sức khỏe nhanh nhất?'. Sau đó lập danh sách cấm kỵ (Not-to-do list) và tuân thủ kỷ luật sắt.",
    fatalError: "Chỉ tập trung mơ mộng về hào quang chiến thắng mà quên bịt các lỗ thủng chí tử đang dìm thuyền chìm."
  },
  {
    id: "model_second_order",
    name: "Tư Duy Hệ Quả Bậc Hai & Bậc Ba",
    origName: "Second-Order Thinking",
    master: "Howard Marks & Ray Dalio",
    icon: "network",
    badge: "Dự Phóng Tương Lai",
    color: "from-amber-500 to-orange-600",
    summary: "Tư duy bậc 1 đơn giản và ai cũng thấy: 'Hành động A dẫn đến kết quả B'. Tư duy bậc 2 đào sâu: 'Và rồi sau đó thì sao? Kết quả B sẽ gây ra hệ quả C, D, E gì sau 6 tháng, 2 năm?'.",
    triggerQuestion: "\"Và rồi sau đó thì sao? (And then what?)\"",
    howToApply: "Trước mọi quyết định quan trọng, vẽ nhánh cây hậu quả: 1. Ngay lập tức (Bậc 1). 2. Sau 6 tháng (Bậc 2). 3. Sau 3 năm (Bậc 3). Đảm bảo lợi ích ngắn hạn không phải là mồi nhử cho tai họa dài hạn.",
    fatalError: "Bị mờ mắt bởi viên kẹo ngọt trước mắt mà nuốt phải viên thuốc độc về sau."
  },
  {
    id: "model_socratic",
    name: "Vấn Đáp Socrates (6 Tầng Thẩm Vấn)",
    origName: "Socratic Questioning",
    master: "Socrates",
    icon: "help-circle",
    badge: "Lột Trần Ảo Tưởng",
    color: "from-emerald-500 to-teal-600",
    summary: "Phương pháp truy vấn biện chứng từng bước lột bỏ những ngụy biện, mâu thuẫn và giả định ngầm trong tâm trí để tiệm cận chân lý khách quan.",
    triggerQuestion: "\"Tại sao bạn lại tin điều đó là đúng? Bằng chứng nào chứng minh điều bạn vừa nói?\"",
    howToApply: "Sử dụng tuần tự 6 loại câu hỏi: 1. Làm rõ khái niệm. 2. Thăm dò giả định. 3. Thăm dò bằng chứng. 4. Thăm dò các góc nhìn thay thế. 5. Thăm dò hệ quả. 6. Đặt câu hỏi về chính câu hỏi.",
    fatalError: "Tranh cãi để giành phần thắng thay vì cùng nhau đi tìm chân lý."
  },
  {
    id: "model_feynman",
    name: "Kỹ Thuật Feynman",
    origName: "The Feynman Technique",
    master: "Richard Feynman",
    icon: "book-open",
    badge: "Hiểu Sâu Đơn Giản",
    color: "from-rose-500 to-red-600",
    summary: "Thước đo cao nhất của sự thông hiểu là khả năng giải thích khái niệm phức tạp cho một đứa trẻ 10 tuổi hiểu mà không dùng thuật ngữ đao to búa lớn.",
    triggerQuestion: "\"Làm sao để giải thích điều này bằng từ ngữ đời thường mộc mạc nhất mà một học sinh tiểu học cũng hiểu ngay?\"",
    howToApply: "1. Chọn khái niệm. 2. Dạy lại cho người không có chuyên môn. 3. Xác định chỗ bị vấp hoặc phải dùng từ chuyên môn (đây chính là lỗ hổng hiểu biết). 4. Quay lại tài liệu gốc đọc lại và đơn giản hóa bằng ẩn dụ.",
    fatalError: "Dùng biệt ngữ học thuật phức tạp để che giấu sự mơ hồ, nông cạn của chính mình."
  },
  {
    id: "model_circle_of_competence",
    name: "Vòng Tròn Năng Lực",
    origName: "Circle of Competence",
    master: "Warren Buffett & Charlie Munger",
    icon: "target",
    badge: "Biết Mình Biết Ta",
    color: "from-indigo-600 to-violet-600",
    summary: "Không quan trọng vòng tròn hiểu biết của bạn rộng bao nhiêu, quan trọng là bạn biết chính xác biên giới của nó nằm ở đâu để không bao giờ bước hớ chân ra ngoài.",
    triggerQuestion: "\"Tôi có thực sự hiểu sâu cơ chế của lĩnh vực này không, hay tôi chỉ đang bắt chước ý kiến của người khác?\"",
    howToApply: "Phân loại tri thức thành 3 vùng: 1. Vùng tôi thực sự hiểu thấu và có lợi thế cạnh tranh. 2. Vùng tôi tưởng mình hiểu nhưng không phải. 3. Vùng tôi hoàn toàn mù tịt. Tuyệt đối chỉ đặt cược lớn ở Vùng 1.",
    fatalError: "Nhầm lẫn giữa sự tự tin với năng lực thực sự (Hiệu ứng Dunning-Kruger)."
  },
  {
    id: "model_occams_razor",
    name: "Dao Cạo Occam & Dao Cạo Hanlon",
    origName: "Occam's & Hanlon's Razor",
    master: "William of Ockham & Robert Hanlon",
    icon: "scissors",
    badge: "Cắt Tỉa Rườm Rà",
    color: "from-cyan-600 to-teal-500",
    summary: "Khi có nhiều giả thuyết cùng giải thích một hiện tượng, giả thuyết nào đơn giản nhất và cần ít giả định nhất thường là giả thuyết đúng. Đừng quy cho ác ý những gì có thể giải thích bằng sự vụng về.",
    triggerQuestion: "\"Liệu có cách giải thích nào đơn giản, trực diện hơn mà không cần vẽ ra những âm mưu phức tạp không?\"",
    howToApply: "Loại bỏ những kịch bản giả tưởng phức tạp. Tập trung vào lời giải thích trực tiếp, ít biến số nhất.",
    fatalError: "Thích phức tạp hóa vấn đề để tỏ ra sâu sắc hoặc tự dọa dẫm bản thân bằng thuyết âm mưu."
  },
  {
    id: "model_pareto_eisenhower",
    name: "Ma Trận Eisenhower & Đòn Bẩy 80/20",
    origName: "Pareto & Eisenhower Leverage",
    master: "Vilfredo Pareto & Dwight Eisenhower",
    icon: "layout-grid",
    badge: "Tối Ưu Đòn Bẩy",
    color: "from-amber-600 to-yellow-500",
    summary: "80% kết quả bắt nguồn từ 20% nguyên nhân cốt lõi. Những việc quan trọng nhất thường không bao giờ khẩn cấp nhất.",
    triggerQuestion: "\"Đâu là việc duy nhất nếu tôi làm xong thì mọi việc khác sẽ trở nên dễ dàng hơn hoặc không còn cần thiết nữa?\"",
    howToApply: "Mỗi sáng chọn ra đúng 1-2 việc thuộc ô 'Quan trọng nhưng Không khẩn cấp' (Học tập sâu, Xây dựng hệ thống, Rèn luyện tư duy) và làm dứt điểm trước khi bị cuốn vào sự vụn vặt.",
    fatalError: "Luôn bận rộn cả ngày với những việc khẩn cấp nhưng vô giá trị dài hạn."
  },
  {
    id: "model_feedback_loops",
    name: "Vòng Lặp Phản Hồi Hệ Thống",
    origName: "Reinforcing & Balancing Loops",
    master: "Donella Meadows & Peter Senge",
    icon: "rotate-cw",
    badge: "Động Lực Học Hệ Thống",
    color: "from-teal-600 to-emerald-600",
    summary: "Mọi hệ thống sống đều vận hành bằng các vòng lặp: Vòng củng cố (Tăng trưởng theo cấp số nhân / Vòng xoáy ốc) và Vòng cân bằng (Ổn định / Kháng cự thay đổi).",
    triggerQuestion: "\"Hành động này kích hoạt vòng lặp củng cố tích cực hay đang bị kìm hãm bởi lực cản ngầm nào của hệ thống?\"",
    howToApply: "Tìm cách kết nối Đầu ra (Output) quay ngược lại nuôi dưỡng Đầu vào (Input) để tạo bánh đà tự sinh công mà không cần tiêu tốn thêm sức lực.",
    fatalError: "Đẩy một hệ thống đi nhanh hơn mà không tháo phanh của vòng lặp cân bằng."
  },
  {
    id: "model_map_territory",
    name: "Bản Đồ Không Phải Lãnh Thổ Thực",
    origName: "The Map is Not the Territory",
    master: "Alfred Korzybski",
    icon: "map",
    badge: "Vượt Thoát Khái Niệm",
    color: "from-sky-600 to-blue-700",
    summary: "Mọi mô hình, lý thuyết, cuốn sách hay lời nói chỉ là một bản đồ mô phỏng giản lược, tuyệt đối không phải là thực tại sống động bên ngoài.",
    triggerQuestion: "\"Mô hình này đang bỏ sót chi tiết thực tế sống động nào ở ngoài đời thực?\"",
    howToApply: "Luôn sẵn sàng xé bỏ bản đồ khi thực địa có sự thay đổi. Đừng ép thực tế phải uốn mình theo lý thuyết trên sách vở.",
    fatalError: "Tôn thờ mô hình lý thuyết một cách giáo điều và phớt lờ thực tế đang gào thét."
  },
  {
    id: "model_bayesian",
    name: "Tư Duy Cập Nhật Xác Suất Bayes",
    origName: "Bayesian Probabilistic Updating",
    master: "Thomas Bayes",
    icon: "trending-up",
    badge: "Tiến Hóa Nhận Thức",
    color: "from-violet-700 to-purple-800",
    summary: "Nhận thức không phải là trắng hay đen, đúng tuyệt đối hay sai tuyệt đối. Niềm tin là một xác suất (Probability) và bạn phải liên tục cập nhật xác suất đó khi có bằng chứng mới.",
    triggerQuestion: "\"Bằng chứng mới này làm tăng hay giảm độ tin cậy của tôi vào giả thuyết ban đầu, và thay đổi bao nhiêu phần trăm?\"",
    howToApply: "Thay vì khăng khăng 'Tôi chắc chắn đúng!', hãy nói: 'Dựa trên dữ liệu hiện tại, tôi tin 70%. Nếu có thêm bằng chứng X, tôi sẽ nâng lên 90% hoặc hạ xuống 20%'.",
    fatalError: "Cứng đầu bám chặt vào niềm tin cũ dù bằng chứng thực tế đã đảo chiều hoàn toàn."
  },
  {
    id: "model_regret_minimization",
    name: "Khung Giảm Thiểu Hối Tiếc Tuổi Già",
    origName: "Regret Minimization Framework",
    master: "Jeff Bezos",
    icon: "hourglass",
    badge: "Tầm Nhìn 80 Tuổi",
    color: "from-rose-600 to-fuchsia-600",
    summary: "Chiếu ống kính thời gian tới năm bạn 80 tuổi ngồi nhìn lại cuộc đời. Bạn sẽ hối tiếc vì đã dám dấn thân mà thất bại, hay hối tiếc vì đã hèn nhát không bao giờ dám thử?",
    triggerQuestion: "\"Năm tôi 80 tuổi ngồi trên ghế bập bênh nhìn lại, tôi có hối hận vì đã không dám đưa ra quyết định này không?\"",
    howToApply: "Dùng để vượt qua nỗi sợ hãi tê liệt và áp lực dư luận trước những ngã rẽ lớn của sự nghiệp và cuộc đời.",
    fatalError: "Để nỗi sợ hãi ngắn hạn lấn át mục đích sống thiêng liêng dài hạn."
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
