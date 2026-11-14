/**
 * SuperMind & SuperMemory Application Engine
 * Developed for buivananhdev/sieu-tri-nho-app
 */

// ==========================================
// 1. DATA REPOSITORY: MEMORY METHODS
// ==========================================
const MEMORY_METHODS = [
  {
    id: 'loci',
    title: 'Cung Điện Ký Ức (Method of Loci)',
    subtitle: 'Nền tảng của các kỷ lục gia thế giới',
    category: 'Không Gian & Liên Tưởng',
    color: 'from-purple-600 to-indigo-600',
    icon: 'building-2',
    desc: 'Biến không gian quen thuộc thành một ổ cứng sinh học khổng lồ để lưu trữ hàng nghìn dữ kiện không giới hạn.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">1. Nguyên lý thần kinh:</h4>
      <p class="mb-3">Bộ não tiến hóa để ghi nhớ vị trí địa lý, tìm đường và không gian sinh tồn (vùng hồi hải mã - Hippocampus). Khi bạn gắn dữ kiện trừu tượng vào một vị trí vật lý cụ thể, bộ não tự động lưu trữ dữ kiện đó vào trí nhớ dài hạn.</p>
      
      <h4 class="font-bold text-white text-base mb-2">2. Quy tắc 4 bước kiến tạo Cung Điện:</h4>
      <ol class="list-decimal pl-5 space-y-2 mb-4">
        <li><strong>Chọn địa điểm quen thuộc:</strong> Ngôi nhà bạn ở, lớp học, văn phòng hoặc con đường đi làm hàng ngày.</li>
        <li><strong>Xác định các trạm mốc (Loci):</strong> Đi theo một chiều duy nhất (từ trái qua phải, theo chiều kim đồng hồ) để tránh bỏ sót. Ví dụ: Cổng -> Sân -> Cửa chính -> Tủ giày -> Ghế sofa -> Tivi...</li>
        <li><strong>Neo giữ dữ kiện:</strong> Đặt thông tin cần nhớ vào từng trạm mốc.</li>
        <li><strong>Quy tắc V.E.E.A (Vivid - Exaggerated - Emotional - Action):</strong> Biến hình ảnh thành khổng lồ, chuyển động kịch tính, khôi hài hoặc có mùi vị/âm thanh mạnh mẽ.</li>
      </ol>

      <h4 class="font-bold text-white text-base mb-2">3. Ví dụ thực hành nhớ 5 việc cần làm:</h4>
      <ul class="list-disc pl-5 space-y-1 mb-2">
        <li><em>Cổng nhà:</em> Một con gà tây khổng lồ đang mổ chuông cửa (Nhớ mua gà nấu tối).</li>
        <li><em>Tủ giày:</em> Đôi giày đang bốc khói dữ dội vì cắm sạc laptop vào (Nhớ sạc pin máy tính).</li>
        <li><em>Sofa:</em> Một chồng hóa đơn điện biết nhảy múa trên ghế (Nhớ đóng tiền điện).</li>
      </ul>
    `
  },
  {
    id: 'major',
    title: 'Hệ Thống Major System (Mã Hóa Số)',
    subtitle: 'Chuyển đổi số khô khan thành hình ảnh',
    category: 'Kỹ Thuật Mã Hóa',
    color: 'from-amber-600 to-orange-600',
    icon: 'binary',
    desc: 'Quy chuẩn quốc tế chuyển đổi các con số từ 0 đến 9 thành phụ âm, từ đó ghép thành các từ ngữ và hình ảnh trực quan.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">1. Bản chất của Major System:</h4>
      <p class="mb-3">Não người rất khó nhớ chuỗi số vô nghĩa như <strong>894215</strong>, nhưng lại nhớ như in hình ảnh <strong>"Người phao - Rắn - Tên lửa"</strong>. Major System chính là cây cầu chuyển đổi số thành chữ.</p>

      <h4 class="font-bold text-white text-base mb-2">2. Bảng quy đổi âm chuẩn (Âm ngữ):</h4>
      <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 my-3 p-3 bg-slate-900 rounded-xl text-xs font-mono">
        <div><strong class="text-amber-400">0:</strong> S, X, Z (Zero)</div>
        <div><strong class="text-amber-400">1:</strong> T, Đ (1 gạch dọc)</div>
        <div><strong class="text-amber-400">2:</strong> N (2 nét)</div>
        <div><strong class="text-amber-400">3:</strong> M (3 nét)</div>
        <div><strong class="text-amber-400">4:</strong> R (Rõ rệt / 4)</div>
        <div><strong class="text-amber-400">5:</strong> L (Chữ L trong La Mã 50)</div>
        <div><strong class="text-amber-400">6:</strong> Ch, J, Sh (Sáu)</div>
        <div><strong class="text-amber-400">7:</strong> K, G (Số 7 giống cái cuốc)</div>
        <div><strong class="text-amber-400">8:</strong> V, F (Vần V-Tám)</div>
        <div><strong class="text-amber-400">9:</strong> P, B (9 lộn ngược thành b, p)</div>
      </div>

      <h4 class="font-bold text-white text-base mb-2">3. Ứng dụng ghi nhớ:</h4>
      <p>Số <strong>32</strong> = M + N => <em>Mỏ Neo</em>. Số <strong>14</strong> = T + R => <em>Tê Giác</em>. Xem chi tiết tab <strong>Mã Số 00-99</strong> trong ứng dụng để thuộc toàn bộ 100 hình ảnh chuẩn!</p>
    `
  },
  {
    id: 'srs',
    title: 'Lặp Lại Ngắt Quãng (Spaced Repetition)',
    subtitle: 'Đánh bại đường cong quên lãng Ebbinghaus',
    category: 'Khoa Học Trí Nhớ',
    color: 'from-emerald-600 to-teal-600',
    icon: 'repeat',
    desc: 'Lên lịch ôn tập chính xác vào khoảnh khắc não bộ chuẩn bị quên, giúp khắc sâu thông tin vào vỏ não vĩnh viễn.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">1. Đường cong quên lãng (Forgetting Curve):</h4>
      <p class="mb-3">Sau 24 giờ học điều mới, não người quên mất 70% nếu không ôn lại. Tuy nhiên, nếu bạn ôn lại đúng lúc đường cong sụt giảm, độ dốc của việc quên sẽ phẳng dần.</p>

      <h4 class="font-bold text-white text-base mb-2">2. Lịch trình ôn tập chuẩn khoa học:</h4>
      <ol class="list-decimal pl-5 space-y-1.5 mb-4">
        <li><strong>Lần 1:</strong> Ngay sau khi học 20 phút.</li>
        <li><strong>Lần 2:</strong> Sau 24 giờ (1 ngày).</li>
        <li><strong>Lần 3:</strong> Sau 3 ngày.</li>
        <li><strong>Lần 4:</strong> Sau 7 ngày (1 tuần).</li>
        <li><strong>Lần 5:</strong> Sau 30 ngày (1 tháng).</li>
        <li><strong>Lần 6:</strong> Sau 90 ngày (Trí nhớ dài hạn vĩnh viễn).</li>
      </ol>

      <h4 class="font-bold text-white text-base mb-2">3. Ứng dụng thực tế:</h4>
      <p>Sử dụng mục <strong>Thẻ Ghi Nhớ Ngắt Quãng (SRS Cards)</strong> ngay trong tab Luyện Tập để rèn luyện thói quen đánh giá mức độ ghi nhớ mỗi ngày.</p>
    `
  },
  {
    id: 'story',
    title: 'Kỹ Thuật Móc Xích Câu Chuyện (Story Method)',
    subtitle: 'Kết nối dữ liệu bằng phim ảnh cảm xúc',
    category: 'Tưởng Tượng Đột Phá',
    color: 'from-pink-600 to-rose-600',
    icon: 'film',
    desc: 'Ghép nối các dữ liệu rời rạc thành một chuỗi sự kiện liên hoàn, vô lý và hài hước để kích thích não phải.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">1. Tại sao truyện cười và phim ảnh dễ nhớ hơn công thức?</h4>
      <p class="mb-3">Não bộ tiết ra hormone Dopamine khi trải nghiệm những điều bất ngờ, giật gân, hài hước hoặc kỳ quặc. Khi xâu chuỗi thông tin thành phim hoạt hình vui nhộn, não bộ chụp lại toàn bộ câu chuyện.</p>

      <h4 class="font-bold text-white text-base mb-2">2. Ba quy tắc vàng của cốt truyện:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-3">
        <li><strong>Sự liên kết động:</strong> Vật A phải tác động trực tiếp vào vật B (ví dụ: quả dưa hấu nổ tung bắn trúng mặt chiếc đồng hồ).</li>
        <li><strong>Phi lý & phóng đại:</strong> Kích thước khổng lồ, màu sắc rực rỡ, âm thanh chát chúa.</li>
        <li><strong>Cảm giác ngũ quan:</strong> Cảm nhận được độ dính, mùi thơm hoặc cảm giác ớn lạnh của câu chuyện.</li>
      </ul>
    `
  },
  {
    id: 'peg',
    title: 'Hệ Thống Móc Treo Trí Nhớ (Peg System)',
    subtitle: 'Tủ hồ sơ có số thứ tự trong não bộ',
    category: 'Móc Neo Nhận Thức',
    color: 'from-blue-600 to-cyan-600',
    icon: 'anchor',
    desc: 'Tạo sẵn một danh sách các móc treo bất biến để khi cần nhớ bất kỳ mục nào theo số thứ tự, chỉ cần móc vào vật đó.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">1. Móc treo hình dạng số (Number-Shape Pegs):</h4>
      <p class="mb-2">Gán cho mỗi con số từ 1 đến 10 một hình dạng trực quan cố định:</p>
      <div class="grid grid-cols-2 gap-2 text-xs bg-slate-900 p-3 rounded-xl mb-3">
        <div><strong>1:</strong> Cây nến / Cây dù</div>
        <div><strong>2:</strong> Con thiên nga / Vịt</div>
        <div><strong>3:</strong> Trái tim / Cánh bướm</div>
        <div><strong>4:</strong> Cánh buồm / Cái ghế</div>
        <div><strong>5:</strong> Móc câu áo</div>
        <div><strong>6:</strong> Vỏ ốc sên / Ống sáo</div>
        <div><strong>7:</strong> Cái rìu / Bờ vực</div>
        <div><strong>8:</strong> Người tuyết / Đồng hồ cát</div>
        <div><strong>9:</strong> Quả bóng bay có dây</div>
        <div><strong>10:</strong> Cái nĩa và cái đĩa</div>
      </div>
      <p>Khi cần nhớ mục số 2 là "Ký hợp đồng", hãy tưởng tượng một con thiên nga đang ngậm chiếc bút lông vàng ký vào tập tài liệu.</p>
    `
  },
  {
    id: 'chunking',
    title: 'Kỹ Thuật Phân Khối (Chunking)',
    subtitle: 'Tối ưu hóa dung lượng RAM bộ não',
    category: 'Tối Ưu Tải Nhận Thức',
    color: 'from-teal-600 to-emerald-600',
    icon: 'boxes',
    desc: 'Gom các đơn vị thông tin nhỏ lẻ thành các cụm có ý nghĩa để vượt qua giới hạn 4-7 mục của bộ nhớ ngắn hạn.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">1. Giới hạn bộ nhớ ngắn hạn (Working Memory):</h4>
      <p class="mb-3">Theo định luật Miller, bộ nhớ làm việc của con người chỉ chứa được khoảng 4 ± 1 đơn vị dữ liệu cùng một lúc. Nếu không gom cụm, dữ liệu sẽ bị tràn và mất dấu.</p>
      <h4 class="font-bold text-white text-base mb-2">2. Ví dụ điển hình:</h4>
      <p class="mb-2">Một số điện thoại <strong>0912345678</strong> rất khó nhớ dưới dạng 10 chữ số riêng lẻ. Nhưng khi chunking thành:</p>
      <div class="p-3 bg-slate-900 rounded-xl text-center font-mono text-emerald-400 font-bold mb-3">
        [0912] - [345] - [678]
      </div>
      <p>Não bộ chỉ cần xử lý 3 khối dữ liệu thay vì 10 khối!</p>
    `
  }
];

// ==========================================
// 2. DATA REPOSITORY: SUPER INTELLIGENCE MODELS
// ==========================================
const INTELLIGENCE_MODELS = [
  {
    id: 'feynman',
    title: 'Kỹ Thuật Feynman (Feynman Technique)',
    subtitle: 'Học sâu & truyền đạt siêu đơn giản',
    category: 'Làm Chủ Tri Thức',
    color: 'from-cyan-600 to-blue-600',
    icon: 'sparkles',
    desc: 'Phương pháp tối thượng của nhà vật lý đoạt giải Nobel giúp bạn hiểu thấu đáo bất kỳ chủ đề hóc búa nào.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">Triết lý cốt lõi:</h4>
      <blockquote class="italic border-l-2 border-cyan-400 pl-3 text-slate-300 mb-3">
        "Nếu bạn không thể giải thích điều đó cho một đứa trẻ 10 tuổi hiểu, thì chính bạn cũng chưa thực sự hiểu nó."
      </blockquote>
      <h4 class="font-bold text-white text-base mb-2">Quy trình 4 bước thực hiện:</h4>
      <ol class="list-decimal pl-5 space-y-2 mb-3">
        <li><strong>Bước 1 - Chọn chủ đề:</strong> Viết tên khái niệm bạn muốn học lên đầu một trang giấy trắng.</li>
        <li><strong>Bước 2 - Giảng bài cho đứa trẻ 10 tuổi:</strong> Viết lời giải thích bằng ngôn ngữ đơn giản nhất, không dùng thuật ngữ chuyên môn phức tạp (jargon). Dùng ví dụ đời thường.</li>
        <li><strong>Bước 3 - Xác định lỗ hổng kiến thức:</strong> Khi bị nghẽn ở đoạn nào, quay lại tài liệu gốc để đọc lại cho đến khi giải thích trôi chảy.</li>
        <li><strong>Bước 4 - Tinh gọn & Ẩn dụ hóa:</strong> Đơn giản hóa hơn nữa, tạo ra các hình ảnh ẩn dụ (Analogy) sinh động.</li>
      </ol>
    `
  },
  {
    id: 'first-principles',
    title: 'Tư Duy Nguyên Lý Đầu Tiên (First Principles)',
    subtitle: 'Bí quyết đột phá của Elon Musk & Aristotle',
    category: 'Tư Duy Sáng Tạo',
    color: 'from-purple-600 to-pink-600',
    icon: 'atom',
    desc: 'Phân rã vấn đề đến những sự thật nền tảng không thể chối cãi, từ đó kiến tạo giải pháp hoàn toàn mới thay vì sao chép.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">So sánh hai cách tư duy:</h4>
      <p class="mb-2"><strong>1. Tư duy loại suy (Analogy):</strong> Làm theo những gì người khác đã làm ("Trước giờ mọi người vẫn làm vậy"). Dẫn đến những cải tiến nhỏ giọt.</p>
      <p class="mb-3"><strong>2. Tư duy nguyên lý đầu tiên:</strong> Hỏi "Sự thật cơ bản nhất ở đây là gì?" và xây dựng từ gốc rễ lên.</p>
      <h4 class="font-bold text-white text-base mb-2">Câu chuyện tên lửa SpaceX:</h4>
      <p>Khi Elon Musk muốn mua tên lửa sang sao Hỏa, các công ty hàng không chào giá 65 triệu USD. Musk đã phân tích: <em>"Tên lửa gồm những gì? Hợp kim nhôm cấp hàng không vũ trụ, titan, đồng và sợi carbon. Giá nguyên liệu thô trên sàn giao dịch là bao nhiêu?"</em> Kết quả là nguyên liệu chỉ chiếm 2% giá tên lửa! Từ đó ông tự chế tạo tên lửa với chi phí rẻ hơn 90%.</p>
    `
  },
  {
    id: 'inversion',
    title: 'Tư Duy Đảo Ngược (Inversion Thinking)',
    subtitle: 'Nghệ thuật tránh bẫy của Charlie Munger',
    category: 'Giải Quyết Vấn Đề',
    color: 'from-rose-600 to-amber-600',
    icon: 'rotate-ccw',
    desc: 'Thay vì tìm cách đạt thành công, hãy tự hỏi: "Làm thế nào để chắc chắn thất bại thảm hại?" rồi tránh xa những điều đó.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">Câu nói kinh điển của Charlie Munger:</h4>
      <blockquote class="italic border-l-2 border-rose-400 pl-3 text-slate-300 mb-3">
        "Tất cả những gì tôi muốn biết là tôi sẽ chết ở đâu, để tôi không bao giờ đến đó."
      </blockquote>
      <h4 class="font-bold text-white text-base mb-2">Cách áp dụng đảo ngược:</h4>
      <ul class="list-disc pl-5 space-y-2 mb-3">
        <li><strong>Mục tiêu:</strong> Muốn có một ngày làm việc siêu hiệu quả?</li>
        <li><strong>Đảo ngược câu hỏi:</strong> "Điều gì chắc chắn sẽ phá hủy ngày hôm nay của tôi?"</li>
        <li><strong>Câu trả lời:</strong> Lướt TikTok ngay khi mở mắt, ăn đồ ngọt nhiều đường gây buồn ngủ, để thông báo điện thoại bật liên tục, không có kế hoạch rõ ràng.</li>
        <li><strong>Hành động:</strong> Chỉ cần triệt tiêu 4 điều tiêu cực trên, ngày làm việc của bạn tự động đạt hiệu suất cao!</li>
      </ul>
    `
  },
  {
    id: 'second-brain',
    title: 'Xây Dựng Bộ Não Thứ Hai (Second Brain)',
    subtitle: 'Giải phóng nhận thức bằng hệ thống ghi chú liên kết',
    category: 'Quản Trị Tri Thức',
    color: 'from-emerald-600 to-teal-600',
    icon: 'hard-drive-download',
    desc: 'Phương pháp CODE & PARA của Tiago Forte giúp biến các công cụ ghi chú thành kho lưu trữ trí tuệ mở rộng.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">Bộ não sinh học dùng để tạo ý tưởng, không phải để lưu trữ:</h4>
      <p class="mb-3">Cố gắng nhớ mọi việc trong đầu gây ra stress và quá tải nhận thức. Bạn cần một hệ thống số bên ngoài để lưu giữ tri thức.</p>
      <h4 class="font-bold text-white text-base mb-2">Khung phương pháp C.O.D.E:</h4>
      <ol class="list-decimal pl-5 space-y-1.5 mb-3">
        <li><strong>Capture (Thu thập):</strong> Lưu lại những gì tạo cảm hứng cho bạn (trích dẫn, bài viết, ý tưởng bất chợt).</li>
        <li><strong>Organize (Tổ chức - theo PARA):</strong> Xếp vào Projects (Dự án đang làm), Areas (Trách nhiệm dài hạn), Resources (Tài nguyên tham khảo), Archives (Lưu trữ cũ).</li>
        <li><strong>Distill (Chắt lọc):</strong> Rút ra những gạch đầu dòng cốt lõi nhất.</li>
        <li><strong>Express (Thể hiện):</strong> Tạo ra sản phẩm cụ thể từ những ghi chú đó.</li>
      </ol>
    `
  },
  {
    id: 'ooda',
    title: 'Vòng Lặp OODA (OODA Loop)',
    subtitle: 'Tư duy phản xạ siêu tốc từ phi công quân sự',
    category: 'Chiến Lược & Ra Quyết Định',
    color: 'from-indigo-600 to-purple-600',
    icon: 'compass',
    desc: 'Khung ra quyết định trong điều kiện biến động và áp lực cao: Quan sát - Định hướng - Quyết định - Hành động.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">Được tạo ra bởi Đại tá không quân John Boyd:</h4>
      <p class="mb-3">Ai xoay vòng OODA nhanh hơn và chính xác hơn sẽ là người kiểm soát cuộc chơi và giành chiến thắng.</p>
      <div class="grid grid-cols-2 gap-2 text-xs bg-slate-900 p-3 rounded-xl mb-3">
        <div><strong>1. Observe (Quan sát):</strong> Thu thập dữ liệu khách quan từ môi trường xung quanh mà không có định kiến.</div>
        <div><strong>2. Orient (Định hướng):</strong> Bộ lọc quan trọng nhất! Phân tích dữ liệu dựa trên mô hình tư duy, kinh nghiệm và thực tế.</div>
        <div><strong>3. Decide (Quyết định):</strong> Chọn phương án hành động khả thi nhất mà không do dự.</div>
        <div><strong>4. Act (Hành động):</strong> Triển khai ngay lập tức và theo dõi kết quả để bắt đầu vòng quan sát mới.</div>
      </div>
    `
  },
  {
    id: 'deep-work',
    title: 'Deep Work & Trạng Thái Dòng Chảy (Flow)',
    subtitle: 'Tập trung sâu không gián đoạn',
    category: 'Năng Suất Đỉnh Cao',
    color: 'from-amber-600 to-yellow-600',
    icon: 'focus',
    desc: 'Làm chủ sự chú ý, loại bỏ phân tâm thời đại số để tạo ra những giá trị hiếm có và khó thay thế.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">Nghiên cứu về Attention Residue (Dư lượng chú ý):</h4>
      <p class="mb-3">Mỗi lần bạn liếc nhìn tin nhắn mạng xã hội dù chỉ 3 giây, não bộ mất từ 15 đến 23 phút mới quay trở lại được trạng thái tập trung sâu ban đầu!</p>
      <h4 class="font-bold text-white text-base mb-2">3 Quy tắc để kích hoạt Deep Work mỗi ngày:</h4>
      <ul class="list-disc pl-5 space-y-1.5 mb-3">
        <li><strong>Lập nghi thức không gian:</strong> Tách biệt điện thoại sang phòng khác, đeo tai nghe chống ồn.</li>
        <li><strong>Khối thời gian 90 phút (Ultradian Rhythm):</strong> Làm việc cật lực không xao nhãng trong 90 phút, sau đó nghỉ ngơi phục hồi 20 phút.</li>
        <li><strong>Theo dõi bảng số liệu:</strong> Đếm số giờ Deep Work thực tế bạn đạt được mỗi ngày.</li>
      </ul>
    `
  },
  {
    id: 'pareto',
    title: 'Quy Tắc Pareto 80/20 & Đòn Bẩy Trí Tuệ',
    subtitle: 'Tối ưu hóa nguồn lực cho kết quả vượt trội',
    category: 'Tối Ưu Hóa Năng Suất',
    color: 'from-emerald-600 to-green-600',
    icon: 'bar-chart-3',
    desc: 'Xác định 20% nguyên nhân tạo ra 80% kết quả để tập trung tuyệt đối vào những việc có đòn bẩy cao nhất.',
    content: `
      <h4 class="font-bold text-white text-base mb-2">Bản chất của đòn bẩy:</h4>
      <p class="mb-3">Không phải mọi nỗ lực đều có giá trị ngang nhau. 80% từ vựng trong giao tiếp hàng ngày chỉ xoay quanh 20% từ phổ biến nhất. 80% doanh thu thường đến từ 20% khách hàng cốt lõi.</p>
      <h4 class="font-bold text-white text-base mb-2">Ứng dụng vào học tập siêu tốc:</h4>
      <p>Khi học một kỹ năng mới (lập trình, ngoại ngữ, đầu tư), hãy tìm ra 20% khái niệm cốt lõi nhất được sử dụng trong 80% tình huống thực tế để học trước. Bạn sẽ đạt 80% năng lực chỉ trong 20% thời gian thông thường!</p>
    `
  }
];

// ==========================================
// 3. DATA REPOSITORY: MAJOR SYSTEM (00-99)
// ==========================================
const MAJOR_SYSTEM_DICTIONARY = [
  { num: '00', word: 'Ốc sên / Trứng ốp', icon: '🐌', tip: '0=S, 0=S -> Snail' },
  { num: '01', word: 'Mặt trời / Cây dù', icon: '☀️', tip: '0=S, 1=T -> Sun / Sao' },
  { num: '02', word: 'Ốc nhồi / Sông Son', icon: '🐚', tip: '0=S, 2=N -> Son / Sên' },
  { num: '03', word: 'Sao mai / Súng lục', icon: '⭐', tip: '0=S, 3=M -> Sâm / Súng' },
  { num: '04', word: 'Sừng hươu / Sầu riêng', icon: '🦌', tip: '0=S, 4=R -> Sừng' },
  { num: '05', word: 'Sao biển / Sư tử', icon: '🦁', tip: '0=S, 5=L -> Sư tử' },
  { num: '06', word: 'Sách vở / Xe kéo', icon: '📚', tip: '0=S, 6=Ch -> Sách' },
  { num: '07', word: 'Khẩu súng lục / Rìu', icon: '🔫', tip: '0=S, 7=K -> Súng' },
  { num: '08', word: 'Sô cô la / Sao chổi', icon: '🍫', tip: '0=S, 8=V -> Sâu / Sôcôla' },
  { num: '09', word: 'Súp bơ / Bàn tay', icon: '🍲', tip: '0=S, 9=B -> Súp / Báo' },
  { num: '10', word: 'Tiến sĩ / Táo đỏ', icon: '🍎', tip: '1=T, 0=S -> Táo / Taxi' },
  { num: '11', word: 'Tàu hỏa / Hai cây gậy', icon: '🚂', tip: '1=T, 1=T -> Tàu / Toot' },
  { num: '12', word: 'Tê giác / Trứng ngỗng', icon: '🦏', tip: '1=T, 2=N -> Tê giác / Tin' },
  { num: '13', word: 'Trái tim / Tôm sú', icon: '🦐', tip: '1=T, 3=M -> Tôm' },
  { num: '14', word: 'Thuyền buồm / Tê giác', icon: '⛵', tip: '1=T, 4=R -> Thuyền' },
  { num: '15', word: 'Tủ lạnh / Thỏ trắng', icon: '🐇', tip: '1=T, 5=L -> Tủ / Thỏ' },
  { num: '16', word: 'Túi xách / Thạch anh', icon: '👜', tip: '1=T, 6=Ch -> Túi / Tách' },
  { num: '17', word: 'Tắc kè hoa', icon: '🦎', tip: '1=T, 7=K -> Tắc kè' },
  { num: '18', word: 'Thước kẻ / Tivi', icon: '📺', tip: '1=T, 8=V -> Ti vi' },
  { num: '19', word: 'Tách trà / Bút chì', icon: '☕', tip: '1=T, 9=P/B -> Tách / Túp lều' },
  { num: '20', word: 'Nồi cơm điện', icon: '🍚', tip: '2=N, 0=S -> Nồi / Nón' },
  { num: '21', word: 'Nến lung linh', icon: '🕯️', tip: '2=N, 1=T -> Nến' },
  { num: '22', word: 'Con thiên nga đôi', icon: '🦢', tip: '2=N, 2=N -> Thiên nga' },
  { num: '23', word: 'Ngựa gỗ / Nấm rơm', icon: '🍄', tip: '2=N, 3=M -> Nấm' },
  { num: '24', word: 'Nơ hồng / Nhẫn vàng', icon: '💍', tip: '2=N, 4=R -> Nhẫn / Nơ' },
  { num: '25', word: 'Nón lá / Nải chuối', icon: '🍌', tip: '2=N, 5=L -> Nón / Nải' },
  { num: '26', word: 'Nồi chiên / Ngôi sao', icon: '🍳', tip: '2=N, 6=Ch -> Nồi chiên' },
  { num: '27', word: 'Nước ngọt / Ngọn núi', icon: '🏔️', tip: '2=N, 7=K -> Nước / Núi' },
  { num: '28', word: 'Nho tím / Nơ cà vạt', icon: '🍇', tip: '2=N, 8=V -> Nho' },
  { num: '29', word: 'Nạng chống / Nụ hoa', icon: '🌷', tip: '2=N, 9=B -> Nụ hoa' },
  { num: '30', word: 'Mèo máy Doraemon', icon: '🐱', tip: '3=M, 0=S -> Mèo / Mũ sắt' },
  { num: '31', word: 'Mũ bảo hiểm / Mắt kính', icon: '🥽', tip: '3=M, 1=T -> Mắt kính' },
  { num: '32', word: 'Mỏ neo tàu thủy', icon: '⚓', tip: '3=M, 2=N -> Mỏ neo' },
  { num: '33', word: 'Mẹ bồng con / Mật ong', icon: '🍯', tip: '3=M, 3=M -> Mật' },
  { num: '34', word: 'Máy bay phản lực', icon: '✈️', tip: '3=M, 4=R -> Mũi tên / Mưa' },
  { num: '35', word: 'Mặt nạ / Măng cụt', icon: '🎭', tip: '3=M, 5=L -> Mạ / Măng' },
  { num: '36', word: 'Mực ống biển', icon: '🦑', tip: '3=M, 6=Ch -> Mực' },
  { num: '37', word: 'Máy kéo nông trại', icon: '🚜', tip: '3=M, 7=K -> Máy kéo' },
  { num: '38', word: 'Mưa rào / Mặt trời', icon: '🌧️', tip: '3=M, 8=V -> Mưa' },
  { num: '39', word: 'Mũ cối bộ đội', icon: '🪖', tip: '3=M, 9=B -> Mũ cối' },
  { num: '40', word: 'Rùa biển mai vàng', icon: '🐢', tip: '4=R, 0=S -> Rùa' },
  { num: '41', word: 'Răng cá mập', icon: '🦷', tip: '4=R, 1=T -> Răng' },
  { num: '42', word: 'Rắn hổ mang', icon: '🐍', tip: '4=R, 2=N -> Rắn' },
  { num: '43', word: 'Rơm rạ / Râu ông già', icon: '🧔', tip: '4=R, 3=M -> Râu' },
  { num: '44', word: 'Rừng thông đại ngàn', icon: '🌲', tip: '4=R, 4=R -> Rừng' },
  { num: '45', word: 'Rổ hoa quả', icon: '🧺', tip: '4=R, 5=L -> Rổ' },
  { num: '46', word: 'Rìu bổ củi', icon: '🪓', tip: '4=R, 6=Ch -> Rìu' },
  { num: '47', word: 'Rùa rùa đá / Rương báu', icon: '📦', tip: '4=R, 7=K -> Rương' },
  { num: '48', word: 'Rồng phun lửa', icon: '🐉', tip: '4=R, 8=V -> Rồng' },
  { num: '49', word: 'Rau bắp cải', icon: '🥬', tip: '4=R, 9=B -> Rau bắp' },
  { num: '50', word: 'Lạc đà sa mạc', icon: '🐪', tip: '5=L, 0=S -> Lạc đà' },
  { num: '51', word: 'Lựu đạn nổ', icon: '💣', tip: '5=L, 1=T -> Lựu đạn' },
  { num: '52', word: 'Lông vũ thiên nga', icon: '🪶', tip: '5=L, 2=N -> Lông vũ' },
  { num: '53', word: 'Lưỡi liềm / Lươn', icon: '🌾', tip: '5=L, 3=M -> Lưỡi liềm' },
  { num: '54', word: 'Lá cờ đỏ sao vàng', icon: '🚩', tip: '5=L, 4=R -> Lá cờ' },
  { num: '55', word: 'Ly trà sữa đôi', icon: '🧋', tip: '5=L, 5=L -> Ly' },
  { num: '56', word: 'Lọ hoa pha lê', icon: '🏺', tip: '5=L, 6=Ch -> Lọ' },
  { num: '57', word: 'Lợn đất tiết kiệm', icon: '🐷', tip: '5=L, 7=K -> Lợn' },
  { num: '58', word: 'Lều cắm trại', icon: '⛺', tip: '5=L, 8=V -> Lều' },
  { num: '59', word: 'Lốp xe tải', icon: '🛞', tip: '5=L, 9=B -> Lốp xe' },
  { num: '60', word: 'Chổi quét nhà', icon: '🧹', tip: '6=Ch, 0=S -> Chổi' },
  { num: '61', word: 'Chuột bạch máy tính', icon: '🖱️', tip: '6=Ch, 1=T -> Chuột' },
  { num: '62', word: 'Chó cảnh tai dài', icon: '🐶', tip: '6=Ch, 2=N -> Chó' },
  { num: '63', word: 'Chim đại bàng', icon: '🦅', tip: '6=Ch, 3=M -> Chim' },
  { num: '64', word: 'Chảo chống dính', icon: '🍳', tip: '6=Ch, 4=R -> Chảo' },
  { num: '65', word: 'Chuối vàng chín', icon: '🍌', tip: '6=Ch, 5=L -> Chuối' },
  { num: '66', word: 'Chiếc chìa khóa thần', icon: '🗝️', tip: '6=Ch, 6=Ch -> Chìa' },
  { num: '67', word: 'Chuông vàng ngân vang', icon: '🔔', tip: '6=Ch, 7=K -> Chuông' },
  { num: '68', word: 'Chong chóng gió', icon: '🌀', tip: '6=Ch, 8=V -> Chong chóng' },
  { num: '69', word: 'Chén ngọc hoàng gia', icon: '🍵', tip: '6=Ch, 9=B -> Chén' },
  { num: '70', word: 'Kính râm thời trang', icon: '🕶️', tip: '7=K, 0=S -> Kính' },
  { num: '71', word: 'Kim tự tháp Ai Cập', icon: '🏛️', tip: '7=K, 1=T -> Kim tự tháp' },
  { num: '72', word: 'Kéo cắt tỉa hoa', icon: '✂️', tip: '7=K, 2=N -> Kéo' },
  { num: '73', word: 'Kẹo mút bảy màu', icon: '🍭', tip: '7=K, 3=M -> Kẹo' },
  { num: '74', word: 'Khỉ leo cây', icon: '🐒', tip: '7=K, 4=R -> Khỉ' },
  { num: '75', word: 'Khủng long bạo chúa', icon: '🦖', tip: '7=K, 5=L -> Khủng long' },
  { num: '76', word: 'Khăn len mùa đông', icon: '🧣', tip: '7=K, 6=Ch -> Khăn' },
  { num: '77', word: 'Kèn trumpet đồng', icon: '🎺', tip: '7=K, 7=K -> Kèn' },
  { num: '78', word: 'Khoai tây chiên giòn', icon: '🍟', tip: '7=K, 8=V -> Khoai' },
  { num: '79', word: 'Khinh khí cầu khổng lồ', icon: '🎈', tip: '7=K, 9=B -> Khí cầu' },
  { num: '80', word: 'Vỏ ốc biển khổng lồ', icon: '🐚', tip: '8=V, 0=S -> Vỏ ốc' },
  { num: '81', word: 'Vịt cao su vàng', icon: '🦆', tip: '8=V, 1=T -> Vịt' },
  { num: '82', word: 'Voi ma mút ngà dài', icon: '🐘', tip: '8=V, 2=N -> Voi' },
  { num: '83', word: 'Vương miện kim cương', icon: '👑', tip: '8=V, 3=M -> Vương miện' },
  { num: '84', word: 'Vẹt sặc sỡ biết nói', icon: '🦜', tip: '8=V, 4=R -> Vẹt' },
  { num: '85', word: 'Võ sĩ Samurai gươm báu', icon: '🤺', tip: '8=V, 5=L -> Võ sĩ' },
  { num: '86', word: 'Võng đu đưa trưa hè', icon: '🏝️', tip: '8=V, 6=Ch -> Võng' },
  { num: '87', word: 'Ví tiền da sang trọng', icon: '👛', tip: '8=V, 7=K -> Ví tiền' },
  { num: '88', word: 'Vượn tuyết thông thái', icon: '🦍', tip: '8=V, 8=V -> Vượn' },
  { num: '89', word: 'Ván trượt skateboard', icon: '🛹', tip: '8=V, 9=B -> Ván trượt' },
  { num: '90', word: 'Bánh sinh nhật nến lung linh', icon: '🎂', tip: '9=B, 0=S -> Bánh' },
  { num: '91', word: 'Bút máy mạ vàng', icon: '✒️', tip: '9=B, 1=T -> Bút' },
  { num: '92', word: 'Bình hoa gốm sứ', icon: '🏺', tip: '9=B, 2=N -> Bình' },
  { num: '93', word: 'Bướm khổng lồ lấp lánh', icon: '🦋', tip: '9=B, 3=M -> Bướm' },
  { num: '94', word: 'Bàn chân khủng long', icon: '🦶', tip: '9=B, 4=R -> Bàn chân' },
  { num: '95', word: 'Bóng đá World Cup', icon: '⚽', tip: '9=B, 5=L -> Bóng đá' },
  { num: '96', word: 'Bàn chải đánh răng', icon: '🪥', tip: '9=B, 6=Ch -> Bàn chải' },
  { num: '97', word: 'Bao tải vàng ròng', icon: '💰', tip: '9=B, 7=K -> Bao tiền' },
  { num: '98', word: 'Bia đá cổ khắc chữ', icon: '🪦', tip: '9=B, 8=V -> Bia đá' },
  { num: '99', word: 'Bong bóng xà phòng ngũ sắc', icon: '🫧', tip: '9=B, 9=B -> Bong bóng' }
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
    if (currentMajorCategory === '0-24' && (val < 0 || val > 24)) return false;
    if (currentMajorCategory === '25-49' && (val < 25 || val > 49)) return false;
    if (currentMajorCategory === '50-74' && (val < 50 || val > 74)) return false;
    if (currentMajorCategory === '75-99' && (val < 75 || val > 99)) return false;

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
    id: 'v_1',
    bookFloor: 1,
    bookCode: 'S',
    bookName: 'Sáng Thế Ký',
    chapter: 1,
    verse: 1,
    keyword: 'sáng tạo',
    secondaryKeyword: 'sáng tạo trời đất',
    text: 'Ban đầu Đức Chúa Trời sáng tạo trời và đất.'
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
    text: 'Đức Chúa Trời phán: “Phải có ánh sáng”; thì có ánh sáng.'
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
    text: 'Đức Chúa Trời phán với Môi-se: “TA LÀ ĐẤNG TỰ HỮU HẰNG HỮU.” Ngài lại phán: “Hãy nói với dân Y-sơ-ra-ên rằng: ‘ĐẤNG TỰ HỮU đã sai tôi đến với các anh chị em.’”'
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
    text: 'Chẳng phải Ta đã truyền phán cho con sao? Hãy mạnh dạn, can đảm! Đừng sợ hãi, đừng nản lòng, vì Giê-hô-va Đức Chúa Trời của con sẽ ở với con mọi nơi con đi.'
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
    text: 'Đức Giê-hô-va là Đấng chăn giữ tôi; tôi sẽ chẳng thiếu thốn gì.'
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
    text: 'Lời Chúa là ngọn đèn cho chân tôi, ánh sáng cho đường lối tôi.'
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
    text: 'Hãy hết lòng tin cậy Đức Giê-hô-va, đừng nương cậy nơi sự thông sáng của con.'
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
    text: 'Nhưng ai trông đợi Đức Giê-hô-va sẽ được sức mới, cất cánh bay cao như chim ưng; chạy mà không mệt nhọc, đi mà không mòn mỏi.'
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
    text: 'Đức Giê-hô-va phán: “Vì chính Ta biết ý tưởng Ta nghĩ đối với các con, đó là ý tưởng bình an chứ không phải tai họa, để ban cho các con một tương lai và một hy vọng.”'
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
    text: 'Nhưng trước hết, hãy tìm kiếm vương quốc Đức Chúa Trời và sự công chính của Ngài, thì Ngài sẽ cho thêm các con mọi điều ấy nữa.'
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
    text: 'Vì Đức Chúa Trời yêu thương thế gian, đến nỗi đã ban Con Một của Ngài, hầu cho hễ ai tin Con ấy không bị hư mất mà được sự sống đời đời.'
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
    text: 'Chúng ta biết rằng mọi sự hiệp lại làm ích cho những ai yêu mến Đức Chúa Trời, tức là cho những người được gọi theo mục đích của Ngài.'
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
    text: 'Tôi làm được mọi sự nhờ Đấng ban năng lực cho tôi.'
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
    text: 'Đức tin là thực thể của những điều đang hy vọng, là bằng chứng của những điều không thấy.'
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
    text: 'Ngài sẽ lau ráo hết nước mắt nơi mắt họ. Sẽ không còn sự chết, cũng không còn tang chế, than khóc, hay đau đớn nữa; vì những sự ban đầu đã qua rồi.'
  }
];

// LocalStorage helpers for custom user verses
const SCRIPTURE_STORAGE_KEY = 'supermind_scripture_custom_verses_v1';

function getAllScriptureVerses() {
  try {
    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    return [...INITIAL_SCRIPTURE_VERSES, ...custom];
  } catch (e) {
    return INITIAL_SCRIPTURE_VERSES;
  }
}

// Generates First-Letter Prompting tokens: e.g. "Ban đầu Đức Chúa Trời..." -> "B - Đ - C - T..."
function generateFirstLetters(text) {
  if (!text) return '';
  const clean = text.replace(/[“”,;.:!?()—"]/g, ' ');
  const words = clean.trim().split(/\s+/).filter(Boolean);
  return words.map(w => w.charAt(0).toUpperCase()).join(' - ');
}

// Current Tower State
let currentSelectedFloor = 1;
let currentSelectedRoom = 1;
let currentTowerFilter = 'all';

function initScriptureTower() {
  renderTowerFloors();
  selectFloor(1);
  populateBookDropdown();
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
  const filtered = allVerses.filter(v => v.bookFloor === currentSelectedFloor && v.chapter === currentSelectedRoom);

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="h-full flex flex-col items-center justify-center text-center p-8 text-slate-500 border border-dashed border-slate-800 rounded-2xl">
        <div class="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center text-amber-400 mb-3">
          <i data-lucide="bookmark" class="w-6 h-6"></i>
        </div>
        <div class="text-sm font-semibold text-slate-300 mb-1">Chưa có câu nào được lưu ở Phòng ${currentSelectedRoom}</div>
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
    return `
      <div class="p-5 rounded-2xl bg-slate-900 border border-slate-800 hover:border-amber-500/50 transition-all space-y-3">
        <div class="flex flex-wrap items-center justify-between gap-2">
          <div class="flex items-center gap-2">
            <span class="px-2.5 py-0.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-mono font-bold">
              ${v.bookCode} ${v.chapter}:${v.verse}
            </span>
            <span class="text-xs text-slate-400 font-medium">Câu ${v.verse}</span>
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
          </div>
        </div>

        <!-- Full Text (Bản 2010) -->
        <blockquote class="text-sm sm:text-base font-serif italic text-slate-100 border-l-2 border-amber-400 pl-4 py-1">
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
  document.getElementById('inputVerseBook').value = currentSelectedFloor;
  document.getElementById('inputVerseChapter').value = currentSelectedRoom;
  document.getElementById('inputVerseNumber').value = 1;
  document.getElementById('inputVerseKeyword').value = '';
  document.getElementById('inputVerseSecondaryKeyword').value = '';
  document.getElementById('inputVerseText').value = '';

  const modal = document.getElementById('addVerseModal');
  modal.classList.remove('hidden');
  modal.classList.add('flex');
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

  const floor = parseInt(document.getElementById('inputVerseBook').value, 10);
  const chapter = parseInt(document.getElementById('inputVerseChapter').value, 10);
  const verse = parseInt(document.getElementById('inputVerseNumber').value, 10);
  const keyword = document.getElementById('inputVerseKeyword').value.trim();
  const secondaryKeyword = document.getElementById('inputVerseSecondaryKeyword').value.trim();
  const text = document.getElementById('inputVerseText').value.trim();

  const book = BIBLE_66_BOOKS.find(b => b.floor === floor);

  const newVerse = {
    id: 'user_v_' + Date.now(),
    bookFloor: floor,
    bookCode: book ? book.code : 'S',
    bookName: book ? book.name : '',
    chapter: chapter,
    verse: verse,
    keyword: keyword,
    secondaryKeyword: secondaryKeyword,
    text: text
  };

  try {
    const raw = localStorage.getItem(SCRIPTURE_STORAGE_KEY);
    const custom = raw ? JSON.parse(raw) : [];
    custom.push(newVerse);
    localStorage.setItem(SCRIPTURE_STORAGE_KEY, JSON.stringify(custom));
  } catch (err) {
    console.error(err);
  }

  closeAddVerseModal();
  selectFloor(floor);
  selectRoom(chapter);
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
  const customView = document.getElementById('subjectCustomView');

  if (titleEl) {
    titleEl.innerHTML = `<i data-lucide="${subj.icon || 'book-open'}" class="w-4 h-4 text-amber-400"></i> ${subj.name}`;
  }
  if (badgeEl) {
    badgeEl.textContent = `• ${subj.badge || 'Cung Điện Ghi Nhớ'}`;
  }

  if (subj.type === 'bible' || subj.id === 'bibletower') {
    if (bibleView) bibleView.classList.remove('hidden');
    if (customView) customView.classList.add('hidden');
    initScriptureTower();
  } else {
    if (bibleView) bibleView.classList.add('hidden');
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
