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
const SCRIPTURE_DELETED_KEY = 'supermind_scripture_deleted_verses_v1';

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

    return [...activeInitials, ...userAdded];
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
            <div class="flex items-center gap-1.5 ml-2">
              <button onclick="editScriptureVerse('${v.id}')" title="Sửa câu này" class="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-amber-500 hover:text-slate-950 text-amber-300 border border-slate-700 hover:border-amber-400 text-xs font-bold flex items-center gap-1 transition-all shadow-sm">
                <i data-lucide="edit-3" class="w-3 h-3"></i> Sửa
              </button>
              <button onclick="deleteScriptureVerse('${v.id}')" title="Xóa câu này" class="p-1 rounded-lg bg-slate-800 hover:bg-rose-900/60 hover:text-rose-300 text-slate-400 border border-slate-700 text-xs transition-all">
                <i data-lucide="trash-2" class="w-3 h-3"></i>
              </button>
            </div>
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
  const keyword = document.getElementById('inputVerseKeyword').value.trim();
  const secondaryKeyword = document.getElementById('inputVerseSecondaryKeyword').value.trim();
  const text = document.getElementById('inputVerseText').value.trim();

  const book = BIBLE_66_BOOKS.find(b => b.floor === floor);

  const targetVerse = {
    id: editingId || ('user_v_' + Date.now()),
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
    let custom = raw ? JSON.parse(raw) : [];
    if (editingId) {
      const idx = custom.findIndex(item => item.id === editingId);
      if (idx >= 0) {
        custom[idx] = targetVerse;
      } else {
        custom.push(targetVerse);
      }
    } else {
      custom.push(targetVerse);
    }
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

const PHILOSOPHY_STORAGE_KEY = 'supermind_custom_philosophy_v1';
let currentPhiloEraFilter = 'all';
let currentPhiloSearchQuery = '';

const DEFAULT_PHILOSOPHY_LESSONS = [
  {
    id: 'thales',
    name: 'Thales xứ Miletus',
    era: 'ancient',
    eraLabel: '🏛️ Cổ Đại',
    lifespan: 'khoảng 624 – 546 TCN',
    role: 'Cha Đẻ Triết Học Phương Tây • Cột Mốc Số 0 Của Sự Kinh Ngạc (Thaumazein)',
    anchorKeyword: 'NƯỚC (ARCHE)',
    pegCode: '62 Robot + 04 Ngôi sao',
    isMilestoneZero: true,
    d1_shock: 'CÚ SỐC TỪ THẦN THOẠI (MYTHOS) SANG LÝ TÍNH (LOGOS): Hàng vạn năm trước đó, con người tin rằng động đất do Poseidon rung bờ, sấm sét do Zeus nổi giận. Thales là người đầu tiên trong lịch sử nhân loại đứng lên kinh ngạc tự vấn: "Không! Đằng sau mọi biến thiên hỗn mang của vũ trụ, phải có một QUY LUẬT TỰ NHIÊN (Logos) mà trí óc con người giải mã được!". Tiếng nổ này khai sinh ra triết học và khoa học toàn cầu.',
    d2_principle: 'CÔNG THỨC GỐC: [ĐA DẠNG = 1 CHẤT LIỆU BẢN NGUYÊN (ARCHE)]. Chất liệu tối hậu đó là NƯỚC (Hydor). Nước ở thể lỏng chảy nuôi sống vạn vật, bốc hơi thành khí, ngưng tụ thành băng rắn. Mọi hạt mầm sự sống đều ẩm ướt; Trái Đất trôi trên đại dương như khúc gỗ. Đây là lần đầu tiên tư duy Quy giản (Reductionism) xuất hiện: Tìm sự thống nhất tuyệt đối trong cái đa tạp bề ngoài.',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (THALES >< ANAXIMANDER):\n• Luận điểm Thales: Nước là khởi thủy và kết thúc của muôn loài.\n• Phản biện búa tạ (Anaximander - học trò phản pháo): "Nếu nước là bản nguyên duy nhất, tại sao LỬA lại tồn tại mà không bị tiêu diệt hoàn toàn? Bản nguyên tối hậu không thể là một nguyên tố vật chất hữu hạn cụ thể, mà phải là cái VÔ ĐỊNH HÌNH & BẤT TẬN (Apeiron) - cái nôi sinh thành và dung nạp mọi cặp đối lập nóng/lạnh, ướt/khô!"',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 624 TCN): 62 (🤖 Robot) + 04 (⭐ Ngôi sao).\n• Cung điện ký ức: Cửa vòm bến cảng Miletus hướng ra biển. Một chú ROBOT (62) mải ngửa cổ ngắm NGÔI SAO (04) lấp lánh thì trượt chân ngã ùm xuống một GIẾNG NƯỚC sâu ngập tràn Nước (Arche). Cô tỳ nữ xứ Thrace cười giòn giã. Nhưng sau đó chú Robot dùng thiên văn thuê bao toàn bộ máy ép dầu olive ở đảo, trúng mùa đại thắng, chứng minh triết gia không hề nghèo khó!\n🔑 Từ Khóa Mỏ Neo: NƯỚC (ARCHE).',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [TƯ DUY TRUY TÌM BẢN CHẤT GỐC (ROOT-CAUSE / FIRST PRINCIPLES)].\nKhi doanh nghiệp hoặc cuộc sống gặp khủng hoảng hỗn loạn hàng trăm triệu chứng bề mặt: Đừng vội dập lửa vụn vặt! Hãy hít một hơi sâu và bật công tắc Thales: "Arche (chất liệu/nguyên nhân gốc rễ duy nhất) chi phối toàn bộ hệ thống này là gì?". Khi nắm trúng Arche, mọi biến số xung quanh tự động rơi vào trật tự.'
  },
  {
    id: 'socrates',
    name: 'Socrates',
    era: 'ancient',
    eraLabel: '🏛️ Cổ Đại',
    lifespan: '469 – 399 TCN',
    role: 'Bậc Thầy Khai Phóng • Kẻ Đỡ Đẻ Của Tư Tưởng (Maieutics)',
    anchorKeyword: 'HỎI VẶN (SẢN NHI)',
    pegCode: '46 Trái Đất + 09 Sao Diêm Vương',
    isMilestoneZero: false,
    d1_shock: 'CÚ SỐC THỨC TỈNH: "Tôi chỉ biết một điều duy nhất: là tôi không biết gì cả!" (Scio me nihil scire). Đền Delphi phán ông là kẻ thông thái nhất Hy Lạp. Socrates ngỡ ngàng đi phỏng vấn các chính trị gia, nhà thơ, tướng lĩnh xuất chúng nhất và phát hiện: Họ chỉ TƯỞNG mình biết, còn ông ít nhất nhận biết được giới hạn vô minh của chính mình.',
    d2_principle: 'CÔNG THỨC: [TRI THỨC = SINH RA TỪ PHẢN TỈNH NỘI TẠI (KHÔNG PHẢI NHỒI NHÉT NGOẠI LAI)]. Phương pháp Sản Nhi: Socrates coi mình như bà đỡ đẻ (mẹ ông là bà đỡ Phaenarete), không nhét tư tưởng vào đầu người khác mà dùng chuỗi câu hỏi lật ngửa giả định sai lầm, giúp người đối thoại tự sinh nở ra chân lý.',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (SOCRATES >< PHÁI NGỤY BIỆN SOPHIST):\n• Luận điểm Socrates: Có chân lý đạo đức khách quan vĩnh cửu. Tri thức chính là đức hạnh (làm điều ác chỉ vì vô minh).\n• Phản biện búa tạ (Protagoras & Thrasymachus): "Không có chân lý khách quan nào cả! Con người là thước đo vạn vật. Kẻ mạnh tạo ra công lý; công lý chỉ là ý chí của kẻ cầm quyền!"',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 469 TCN): 46 (🌍 Quả Đất) + 09 (🪐 Sao Diêm Vương).\n• Cung điện ký ức: Giữa chợ Agora Athens, Socrates cầm QUẢ ĐẤT (46) đối diện SAO DIÊM VƯƠNG (09 - biểu tượng cõi chết), bình thản uống cạn chén độc cần (hemlock) trước mặt học trò, khẳng định: "Một cuộc đời không được xem xét, tra vấn thì không đáng sống!".\n🔑 Từ Khóa Mỏ Neo: HỎI VẶN (SẢN NHI).',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [KỸ THUẬT HỎI TRUY SÂU TRONG ĐÀM PHÁN & GIẢI QUYẾT BẤT ĐỒNG].\nKhi ai đó khẳng định chắc nịch một định kiến ("Khách hàng không bao giờ mua", "Phương án này bất khả thi"): Không phản bác thô bạo! Bật công tắc Socrates: "Anh dựa trên tiền đề nào để khẳng định điều đó? Nếu giả định ngược lại xảy ra thì sao? Điều gì sẽ chứng minh giả định của anh là sai?". Giúp họ tự nhận ra lỗ hổng của mình mà không mất mặt.'
  },
  {
    id: 'plato',
    name: 'Plato',
    era: 'ancient',
    eraLabel: '🏛️ Cổ Đại',
    lifespan: '427 – 347 TCN',
    role: 'Kiến Trúc Sư Thế Giới Ý Niệm (Theory of Forms) • Học Viện Academy',
    anchorKeyword: 'HANG ĐÁ Ý NIỆM',
    pegCode: '42 Đại Dương + 27 Phản Ứng Hóa Học',
    isMilestoneZero: false,
    d1_shock: 'CÚ SỐC ẨN DỤ HANG ĐÁ (ALLEGORY OF THE CAVE): Con người từ nhỏ bị xích cổ trong hang tối, chỉ nhìn vào vách đá trước mặt. Phía sau có đốm lửa và những con rối. Họ nhìn chiếc bóng nhảy múa trên vách đá và đinh ninh rằng: Chiếc bóng đó là toàn bộ sự thật của thế giới!',
    d2_principle: 'CÔNG THỨC: [THẾ GIỚI CẢM TÍNH = BẢN SAO KHIẾM KHUYẾT CỦA THẾ GIỚI Ý NIỆM (FORMS)]. Mọi vật thể trần gian (cái bàn, con ngựa, con người) đều sẽ hư hao tàn hoại. Chỉ có Bản mẫu hoàn hảo vĩnh cửu (Idea/Form) trong cảnh giới thuần khiết của lý trí mới là thực tại đích thực.',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (PLATO >< ARISTOTLE):\n• Luận điểm Plato: Chân lý tối hậu ngự trị ở thế giới Ý niệm siêu hình tách biệt thế giới vật chất.\n• Phản biện búa tạ (Aristotle - học trò 20 năm): "Amicus Plato, sed magis amica veritas (Yêu thầy Plato, nhưng yêu Chân lý hơn). Ý niệm không thể bay lơ lửng ngoài vũ trụ! Bản chất của quả táo nằm ngay bên trong cấu trúc của quả táo, không thể tách rời vật chất!"',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 427 TCN): 42 (🌊 Đại Dương) + 27 (🧪 Phản Ứng Hóa Học).\n• Cung điện ký ức: Đáy ĐẠI DƯƠNG (42) sâu thẳm như lòng hang, một PHẢN ỨNG HÓA HỌC (27) bốc cháy tạo ra bóng đổ lung linh. Plato giật đứt dây xích, kéo nhân loại bơi ngược lên mặt nước ngắm vầng mặt trời rực rỡ của Ý Niệm Thiện (Form of the Good).\n🔑 Từ Khóa Mỏ Neo: HANG ĐÁ Ý NIỆM.',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [BÓC TÁCH CÁI BÓNG TRUYỀN THÔNG & TÌM MÔ THỨC GỐC (ARCHETYPE)].\nTrong thời đại mạng xã hội và thông tin ảo: Đừng để những "cái bóng trên vách đá" (lượt like, phông bạt, tin đồn giật gân) dắt mũi. Hãy tự hỏi: "Bản chất ý niệm lõi của dự án/sản phẩm này là gì? Đâu là giá trị nguyên bản bất biến không thể bị lỗi thời?".'
  },
  {
    id: 'aristotle',
    name: 'Aristotle',
    era: 'ancient',
    eraLabel: '🏛️ Cổ Đại',
    lifespan: '384 – 322 TCN',
    role: 'Nhà Đa Trí Tuệ Vĩ Đại Nhất Thời Cổ • Cha Đẻ Của Logic & Khoa Học Thực Nghiệm',
    anchorKeyword: 'TỨ NHÂN (CỨU CÁNH)',
    pegCode: '38 Rừng Sinh Thái + 84 Năng Lượng Hạt Nhân',
    isMilestoneZero: false,
    d1_shock: 'CÚ SỐC MỤC ĐÍCH LUẬN (TELEOLOGY): "Tự nhiên không làm điều gì thừa thãi!". Mọi vật thể sinh ra đều có một CỨU CÁNH TỐI HẬU (Telos) đang chờ nó hiện thực hóa. Hạt sồi có thôi thúc thành cây sồi đại thụ; con người sinh ra có thôi thúc đạt tới Eudaimonia (Hạnh phúc thăng hoa đạo đức).',
    d2_principle: 'CÔNG THỨC TỨ NHÂN (4 CAUSES): Để giải mã bất kỳ sự vật nào, phải trả lời 4 câu hỏi:\n1. Nhân chất liệu (Material): Nó làm bằng gì?\n2. Nhân hình thức (Formal): Cấu trúc, thiết kế của nó là gì?\n3. Nhân động lực (Efficient): Lực nào tạo ra nó?\n4. Nhân cứu cánh (Final / Telos): Nó tồn tại nhằm mục đích tối hậu gì?',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (ARISTOTLE >< KHOA HỌC HIỆN ĐẠI):\n• Luận điểm Aristotle: Vũ trụ có mục đích tối thượng và chuyển động nhờ Động Cơ Bất Động (Unmoved Mover).\n• Phản biện búa tạ (Galileo, Newton & Darwin): Vũ trụ tự nhiên vận hành theo quy luật cơ học mù quáng (nhân quả cơ giới), sinh vật biến đổi do chọn lọc tự nhiên và đột biến gen chứ không hề có một "ý chí cứu cánh" nào xếp đặt trước!',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 384 TCN): 38 (🌲 Rừng Sinh Thái) + 84 (⚡ Năng Lượng Hạt Nhân).\n• Cung điện ký ức: Giữa RỪNG SINH THÁI (38), Aristotle cầm quả cầu NĂNG LƯỢNG HẠT NHÂN (84) mổ xẻ từng loài cây cỏ, chia thành 4 ngăn rõ rệt đại diện cho Tứ Nhân (Chất liệu, Hình thức, Động lực, Cứu cánh).\n🔑 Từ Khóa Mỏ Neo: TỨ NHÂN (CỨU CÁNH).',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [ĐỊNH VỊ TELOS (MỤC ĐÍCH TỐI THƯỢNG) TRƯỚC KHI BẮT ĐẦU MỌI HÀNH ĐỘNG].\nKhi khởi động một công việc, tự vấn theo 4 nguyên nhân: Tôi có nguyên liệu gì (Chất liệu)? Kế hoạch bài bản ra sao (Hình thức)? Ai/cái gì thúc đẩy (Động lực)? Và quan trọng nhất: Cứu cánh tối hậu của hành động này là gì (Telos)? Tránh rơi vào bẫy bận rộn mù quáng không đích đến.'
  },
  {
    id: 'descartes',
    name: 'René Descartes',
    era: 'enlightenment',
    eraLabel: '💡 Cận Đại',
    lifespan: '1596 – 1650',
    role: 'Khai Mở Triết Học Cận Đại • Phụ Thân Chủ Nghĩa Duy Lý (Rationalism)',
    anchorKeyword: 'TÔI TƯ DUY (COGITO)',
    pegCode: '15 Kính Hiển Vi + 96 Không Thời Gian',
    isMilestoneZero: false,
    d1_shock: 'CÚ SỐC CON QUỶ GIAN ÁC (MALICIOUS DEMON): Giác quan con người cực kỳ dễ bị đánh lừa (nhìn chiếc đũa cắm trong nước tưởng bị gãy). Descartes kinh hoàng tự hỏi: "Nếu tồn tại một con quỷ quyền năng tối thượng liên tục cấy vào tâm trí tôi những ảo giác về thế giới, thì có điều gì trên đời này là chắc chắn 100% không?"',
    d2_principle: 'CÔNG THỨC: [HOÀI NGHI PHƯƠNG PHÁP LUẬN $\rightarrow$ ĐIỂM TỰA ARCHIMEDES TƯ DUY]. Ta có thể hoài nghi thể xác, vũ trụ, thậm chí toán học. Nhưng ta KHÔNG THỂ HOÀI NGHI SỰ THỰC RẰNG TA ĐANG HOÀI NGHI. Mà hoài nghi chính là tư duy! $\rightarrow$ "Cogito, ergo sum" (Tôi tư duy, nên tôi tồn tại).',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (DESCARTES >< SPINOZA & KHOA HỌC THẦN KINH):\n• Luận điểm Descartes: Thuyết Nhị Nguyên (Dualism) - Tâm trí phi vật chất (Res cogitans) hoàn toàn độc lập với Thể xác vật chất (Res extensa), gặp nhau ở tuyến tùng não bộ.\n• Phản biện búa tạ (Spinoza & Khoa học hiện đại): Tâm trí và thể xác chỉ là hai mặt biểu hiện của MỘT THỰC THỂ DUY NHẤT. Làm sao một linh hồn phi vật thể lại có thể tác động lực vật lý học đẩy dịch các nơ-ron não bộ?',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 1596): 15 (🔍 Kính Hiển Vi) + 96 (🌌 Không Thời Gian).\n• Cung điện ký ức: Trong căn phòng kín có lò sưởi, Descartes ghé mắt vào KÍNH HIỂN VI (15) nhìn xuyên qua toàn bộ KHÔNG THỜI GIAN (96) xóa sạch mọi định kiến, chỉ còn lại ngọn lửa tư duy đang bừng cháy trong tâm trí.\n🔑 Từ Khóa Mỏ Neo: TÔI TƯ DUY (COGITO).',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [XÓA SẠCH GIẢ ĐỊNH & XÂY DỰNG TỪ ĐIỂM TỰA CỨNG (FIRST PRINCIPLES)].\nBật công tắc Descartes khi đối mặt với một vấn đề bế tắc: Tạm thời gạt bỏ toàn bộ ý kiến số đông, thói quen cũ ("xưa nay người ta vẫn làm thế"). Tìm ra một sự thật duy nhất không thể bác bỏ, rồi từ chân lý đó suy luận bắc cầu từng bước để tạo ra giải pháp đột phá mới.'
  },
  {
    id: 'kant',
    name: 'Immanuel Kant',
    era: 'enlightenment',
    eraLabel: '💡 Khai Sáng',
    lifespan: '1724 – 1804',
    role: 'Đỉnh Cao Khai Sáng Đức • Cuộc Cách Mạng Copernicus Triết Học',
    anchorKeyword: 'MỆNH LỆNH TUYỆT ĐỐI',
    pegCode: '17 Trọng Lực + 24 Axit Phản Ứng',
    isMilestoneZero: false,
    d1_shock: 'CÚ SỐC THỨC TỈNH: "David Hume đã đánh thức tôi khỏi giấc ngủ giáo điều!". Nếu mọi tri thức chỉ đến từ kinh nghiệm giác quan (Hume), thì luật nhân quả chỉ là thói quen liên tưởng của bộ não, nền móng khoa học sụp đổ! Kant tạo ra cú sốc đảo chiều: Không phải tâm trí con người thụ động xoay quanh thế giới, mà chính THẾ GIỚI HIỆN TƯỢNG PHẢI ĐIỀU CHỈNH THEO KHUNG TRÍ TUỆ CỦA CON NGƯỜI.',
    d2_principle: 'CÔNG THỨC: [NHẬN THỨC = DỮ LIỆU CẢM GIÁC + KHUNG TIÊN NGHIỆM (A PRIORI: Không Gian, Thời Gian, 12 Phạm Trù)]. Ta chỉ biết thế giới hiện tượng (Phenomena), không bao giờ chạm được "Vật tự thân" (Noumena / Ding an sich).\nVề Đạo Đức: [MỆNH LỆNH TUYỆT ĐỐI (Categorical Imperative)]: Hãy hành động sao cho quy tắc hành vi của bạn có thể trở thành quy luật phổ quát cho toàn nhân loại!',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (KANT >< THUYẾT VỊ LỢI UTILITARIANISM):\n• Luận điểm Kant: Đạo đức nghĩa vụ luận tuyệt đối (Deontology) - Không bao giờ được nói dối trong bất kỳ hoàn cảnh nào, kể cả kẻ sát nhân hỏi bạn người bạn của bạn đang trốn ở đâu.\n• Phản biện búa tạ (Bentham & John Stuart Mill): Đạo đức phi nhân bản và giáo điều! Hành động đạo đức phải đo bằng HỆ QUẢ THỰC TẾ (tổng lượng hạnh phúc hay khổ đau mang lại cho muôn người). Nói thật để kẻ sát nhân giết bạn mình là hành vi tàn nhẫn gián tiếp!',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 1724): 17 (🧲 Từ Trường) + 24 (🧪 Axit Phản Ứng).\n• Cung điện ký ức: Kant đi dạo ở Königsberg chuẩn giờ như kim đồng hồ. TỪ TRƯỜNG (17) gắn một chiếc kính lọc đa chiều lên mắt ông, đổ AXIT PHẢN ỨNG (24) rã rời mọi định kiến cảm tính để giữ lại Mệnh Lệnh Tuyệt Đối bất hoại.\n🔑 Từ Khóa Mỏ Neo: MỆNH LỆNH TUYỆT ĐỐI.',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [NGUYÊN TẮC: CON NGƯỜI LUÔN LÀ CỨU CÁNH, KHÔNG BAO GIỜ LÀ PHƯƠNG TIỆN].\nTrong lãnh đạo, kinh doanh và ứng xử gia đình: Tuyệt đối không bao giờ coi con người khác chỉ là một CÔNG CỤ / PHƯƠNG TIỆN để ta kiếm tiền hay giải tỏa cảm xúc. Hãy tôn trọng nhân phẩm và quyền tự quyết của họ như một mục đích tự thân tối thượng.'
  },
  {
    id: 'nietzsche',
    name: 'Friedrich Nietzsche',
    era: 'nineteenth',
    eraLabel: '⚙️ Thế Kỷ 19',
    lifespan: '1844 – 1900',
    role: 'Nhà Khảo Cổ Giá Trị • Triết Gia Triết Lý Bằng Cây Búa',
    anchorKeyword: 'AMOR FATI (SIÊU NHÂN)',
    pegCode: '18 Lượng Tử + 44 Núi Lửa',
    isMilestoneZero: false,
    d1_shock: 'CÚ SỐC VỰC THẲM HƯ VÔ (NIHILISM): "Gott ist tot (Thượng đế đã chết)! Và chính chúng ta đã giết chết Ngài!". Khi khoa học phá vỡ các thần tượng tôn giáo cũ, nhân loại bỗng rơi tự do vào khoảng không vô nghĩa: Không còn thiên đường, không còn điểm tựa tuyệt đối, con người sống vì điều gì?',
    d2_principle: 'CÔNG THỨC: [Ý CHÍ QUYỀN LỰC (WILL TO POWER) $\rightarrow$ SIÊU NHÂN (ÜBERMENSCH) $\rightarrow$ AMOR FATI]. Hãy vứt bỏ đạo đức nô lệ (than thân trách phận, đố kỵ người mạnh). Con người Siêu nhân tự đứng trên đôi chân mình, tự kiến tạo bảng giá trị riêng và can đảm đón nhận Vòng Lặp Vĩnh Cửu (Eternal Recurrence) — yêu trọn vẹn số phận (Amor Fati) cả nỗi đau lẫn vinh quang!',
    d3_combat: '⚔️ ĐẤU TRƯỜNG PHẢN BIỆN (NIETZSCHE >< CHỦ NGHĨA NHÂN ĐẠO & BÌNH ĐẲNG BẦY ĐÀN):\n• Luận điểm Nietzsche: Xã hội bình quân chủ nghĩa làm suy đồi nhân loại, triệt tiêu những cá nhân kiệt xuất và tinh hoa sáng tạo.\n• Phản biện búa tạ: Tư tưởng nguy hiểm có nguy cơ bị bóp méo thành chủ nghĩa phát-xít, phân biệt đẳng cấp tàn bạo, chối bỏ lòng trắc ẩn và sự bao bọc người yếu thế - sợi dây gắn kết hòa bình của nền văn minh loài người.',
    d4_memory: '🧠 KHÓA TRÍ NHỚ VĨNH CỬU:\n• Mã số 00-99 (Năm 1844): 18 (🔬 Lượng Tử) + 44 (🌋 Núi Lửa).\n• Cung điện ký ức: Đứng trên miệng NÚI LỬA (44) phun trào dòng nham thạch rực sáng của hạt LƯỢNG TỬ (18), Nietzsche vung búa đập vỡ mọi tượng thần giáo điều mục nát, cất tiếng gầm hào sảng: "Amor Fati - Hãy yêu định mệnh của ngươi!".\n🔑 Từ Khóa Mỏ Neo: AMOR FATI (SIÊU NHÂN).',
    d5_switch: '🕹️ CÔNG TẮC ĐỜI THỰC: [TÍNH BẤT KHẢ DỄ VỠ (ANTI-FRAGILE) & BIẾN NGHỊCH CẢNH THÀNH ĐÒN BẨY].\n"Cái gì không giết chết được tôi sẽ làm tôi mạnh mẽ hơn!". Khi gặp khủng hoảng, mất mát hay thất bại: Tuyệt đối không đóng vai nạn nhân than khóc! Bật công tắc Nietzsche: Coi cơn bão này là lò luyện kim để trui rèn bản lĩnh vô song và nâng cấp nhận thức lên một tầm cao mới.'
  }
];

function getStoredPhilosophyLessons() {
  try {
    const raw = localStorage.getItem(PHILOSOPHY_STORAGE_KEY);
    if (!raw) return DEFAULT_PHILOSOPHY_LESSONS;
    const custom = JSON.parse(raw);
    if (!Array.isArray(custom) || custom.length === 0) return DEFAULT_PHILOSOPHY_LESSONS;

    // Merge default with custom/updated
    const lessonMap = new Map();
    DEFAULT_PHILOSOPHY_LESSONS.forEach(l => lessonMap.set(l.id, l));
    custom.forEach(l => lessonMap.set(l.id, l));
    return Array.from(lessonMap.values());
  } catch (e) {
    console.error('Error loading philosophy lessons:', e);
    return DEFAULT_PHILOSOPHY_LESSONS;
  }
}

function saveStoredPhilosophyLessons(lessons) {
  try {
    localStorage.setItem(PHILOSOPHY_STORAGE_KEY, JSON.stringify(lessons));
  } catch (e) {
    console.error('Error saving philosophy lessons:', e);
  }
}

function filterPhilosophyEra(era) {
  playSound('click');
  currentPhiloEraFilter = era;

  // Update button active states
  const buttons = document.querySelectorAll('.philo-era-btn');
  buttons.forEach(btn => {
    const bEra = btn.getAttribute('data-era');
    if (bEra === era) {
      btn.className = 'philo-era-btn px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap bg-indigo-600 text-white shadow transition-all';
    } else {
      btn.className = 'philo-era-btn px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap bg-slate-800 hover:bg-slate-700 text-slate-300 transition-all';
    }
  });

  renderPhilosophyView();
}

function searchPhilosophy(query) {
  currentPhiloSearchQuery = (query || '').toLowerCase().trim();
  renderPhilosophyView();
}

function renderPhilosophyView() {
  const container = document.getElementById('philosophyCardsContainer');
  if (!container) return;

  const allLessons = getStoredPhilosophyLessons();

  const filtered = allLessons.filter(lesson => {
    // Era filter
    if (currentPhiloEraFilter !== 'all' && lesson.era !== currentPhiloEraFilter) {
      return false;
    }
    // Search query
    if (currentPhiloSearchQuery) {
      const q = currentPhiloSearchQuery;
      const haystack = [
        lesson.name,
        lesson.role,
        lesson.anchorKeyword,
        lesson.pegCode,
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

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="p-12 text-center rounded-2xl bg-cardBg border border-slate-800 space-y-3">
        <div class="text-3xl text-indigo-400">🔍</div>
        <h4 class="text-sm font-bold text-white">Không tìm thấy triết gia hoặc nội dung phù hợp</h4>
        <p class="text-xs text-slate-400">Hãy thử đổi từ khóa tìm kiếm hoặc chọn kỷ nguyên "Tất Cả (Toàn Thư)".</p>
        <button onclick="filterPhilosophyEra('all'); document.getElementById('philosophySearchInput').value=''; currentPhiloSearchQuery='';" class="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-indigo-300 text-xs font-semibold">
          Xóa Bộ Lọc
        </button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(lesson => {
    const isZero = !!lesson.isMilestoneZero;
    const cardBorder = isZero
      ? 'border-2 border-amber-500/70 shadow-[0_0_30px_rgba(245,158,11,0.2)] bg-gradient-to-b from-amber-950/20 via-cardBg to-slate-900/90'
      : 'border border-slate-800 hover:border-indigo-500/40 bg-cardBg';

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
                <span class="px-2.5 py-0.5 rounded-full bg-slate-800 text-indigo-300 border border-slate-700 text-[10px] font-semibold">
                  ${lesson.eraLabel || 'Kỷ Nguyên'}
                </span>
              `}
              <span class="px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-800 text-[10px] font-mono">
                📅 ${lesson.lifespan}
              </span>
            </div>
            <h3 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
              <span>${lesson.name}</span>
            </h3>
            <p class="text-xs text-slate-400 font-medium">${lesson.role || ''}</p>
          </div>

          <!-- Mỏ neo & Nút bấm quản lý -->
          <div class="flex flex-col sm:items-end gap-2">
            <div class="flex items-center gap-2">
              <span class="px-3 py-1.5 rounded-xl bg-amber-500/10 border border-amber-500/40 text-amber-300 text-xs font-black shadow-inner flex items-center gap-1.5">
                <i data-lucide="key" class="w-3.5 h-3.5 text-amber-400"></i>
                <span>${lesson.anchorKeyword}</span>
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
                <span>Mã 00-99: <strong>${lesson.pegCode}</strong></span>
              </div>
            ` : ''}
          </div>
        </div>

        <!-- BỘ KHUNG 5 CHIỀU ĐẠI TƯ DUY -->
        <div class="grid grid-cols-1 gap-4" id="philo-details-${lesson.id}">
          
          <!-- CHIỀU 1: CÚ SỐC KINH NGẠC -->
          <div class="p-4 rounded-2xl bg-yellow-950/20 border border-yellow-600/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-amber-300 uppercase tracking-wide">
              <span>⚡ Chiều 1: Cú Sốc Kinh Ngạc (The Epistemic Shock / Wonder Question)</span>
            </div>
            <p class="text-xs sm:text-sm text-amber-100/90 leading-relaxed font-sans">
              ${escapeHtml(lesson.d1_shock)}
            </p>
          </div>

          <!-- CHIỀU 2: RÃ MÁY NGUYÊN LÝ GỐC -->
          <div class="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-cyan-300 uppercase tracking-wide">
              <span>🔬 Chiều 2: Rã Máy Nguyên Lý Gốc (First Principles Formula)</span>
            </div>
            <p class="text-xs sm:text-sm text-cyan-100/90 leading-relaxed font-sans">
              ${escapeHtml(lesson.d2_principle)}
            </p>
          </div>

          <!-- CHIỀU 3: ĐẤU TRƯỜNG PHẢN BIỆN -->
          <div class="p-4 rounded-2xl bg-rose-950/20 border border-rose-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-rose-300 uppercase tracking-wide">
              <span>⚔️ Chiều 3: Đấu Trường Phản Biện (Socratic Combat: Luận Điểm vs Phản Bác)</span>
            </div>
            <p class="text-xs sm:text-sm text-rose-100/90 leading-relaxed font-sans whitespace-pre-line">
              ${escapeHtml(lesson.d3_combat)}
            </p>
          </div>

          <!-- CHIỀU 4: KHÓA TRÍ NHỚ VĨNH CỬU -->
          <div class="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-1.5">
            <div class="flex items-center gap-2 text-xs font-black text-purple-300 uppercase tracking-wide">
              <span>🧠 Chiều 4: Khóa Trí Nhớ Vĩnh Cửu (Memory Peg 00-99 & Cung Điện Ký Ức)</span>
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

        <!-- QUICK ACTIVE RECALL TOGGLE BUTTON -->
        <div class="pt-2 flex items-center justify-between border-t border-slate-800/80">
          <button onclick="togglePhiloDrillMode('${lesson.id}')" class="px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-indigo-300 hover:text-white border border-slate-700 text-xs font-medium flex items-center gap-2 transition-all">
            <i data-lucide="eye" class="w-3.5 h-3.5 text-indigo-400"></i>
            <span id="drill-toggle-label-${lesson.id}">Chế Độ Thử Thách Trí Nhớ (Ẩn/Hiện Đáp Án)</span>
          </button>
          <span class="text-[11px] text-slate-500 italic hidden sm:inline">
            Khóa não: Nhìn từ khóa "<strong>${lesson.anchorKeyword}</strong>" $\rightarrow$ Tự tái hiện đủ 5 chiều
          </span>
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
