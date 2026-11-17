/**
 * PHƯƠNG PHÁP SIÊU TRÍ NHỚ & MÔ HÌNH SIÊU TRÍ TUỆ TOÀN THƯ (MASTERCLASS)
 */

/**
 * NỘI DUNG TOÀN THƯ: 6 PHƯƠNG PHÁP SIÊU TRÍ NHỚ
 * Mỗi phương pháp là một bài giảng masterclass đầy đủ
 * Bao gồm: Lịch sử, Khoa học thần kinh, Quy trình từng bước, Ví dụ thực hành, Bài tập
 */

window.GLOBAL_MEMORY_METHODS = [
  {
    id: 'loci',
    title: 'Cung Điện Ký Ức (Method of Loci)',
    subtitle: 'Nền tảng của các kỷ lục gia thế giới',
    category: 'Không Gian & Liên Tưởng',
    color: 'from-purple-600 to-indigo-600',
    icon: 'building-2',
    desc: 'Biến không gian quen thuộc thành một ổ cứng sinh học khổng lồ để lưu trữ hàng nghìn dữ kiện không giới hạn.',
    content: `
      <div class="space-y-5">
        <!-- PHẦN 1: LỊCH SỬ -->
        <div class="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">📜 PHẦN 1: LỊCH SỬ & NGUỒN GỐC</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Năm 477 trước Công Nguyên</strong>, nhà thơ Hy Lạp <strong class="text-purple-300">Simonides xứ Ceos</strong> tham dự một bữa tiệc tại cung điện của quý tộc Scopas ở Thessaly. Giữa buổi tiệc, Simonides được gọi ra ngoài. Đúng lúc ông vừa bước ra, trần nhà sập xuống, giết chết toàn bộ khách mời. Thi thể bị nghiền nát không thể nhận dạng.
          </p>
          <p class="text-slate-300 leading-relaxed mb-3">
            Simonides đã làm điều phi thường: ông <strong class="text-white">nhắm mắt lại và đi lại trong trí nhớ</strong> qua từng vị trí bàn tiệc, nhớ chính xác ai ngồi ở đâu, từ đó giúp nhận dạng từng thi thể. Từ bi kịch này, ông phát hiện nguyên lý nền tảng: <em class="text-purple-300">bộ não ghi nhớ vị trí không gian tốt hơn bất kỳ loại thông tin nào khác.</em>
          </p>
          <p class="text-slate-300 leading-relaxed">
            Phương pháp này sau đó trở thành công cụ bí mật của các nhà hùng biện La Mã như <strong class="text-white">Cicero</strong> và <strong class="text-white">Quintilian</strong>, giúp họ phát biểu hàng giờ liền mà không cần ghi chú. Cuốn sách <em>Rhetorica ad Herennium</em> (khoảng 90 TCN) là tài liệu cổ nhất ghi chép chi tiết phương pháp này.
          </p>
        </div>

        <!-- PHẦN 2: KHOA HỌC THẦN KINH -->
        <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🧠 PHẦN 2: KHOA HỌC THẦN KINH</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Vùng hồi hải mã (Hippocampus)</strong> — cấu trúc hình con cá ngựa nằm sâu trong thùy thái dương — là trung tâm xử lý trí nhớ không gian và điều hướng. Đây là vùng não tiến hóa hàng triệu năm để giúp tổ tiên chúng ta ghi nhớ nơi tìm thức ăn, nước uống và đường thoát hiểm khỏi thú dữ.
          </p>
          <div class="bg-slate-900/60 rounded-lg p-3 mb-3">
            <p class="text-sm text-cyan-300 font-semibold mb-2">🔬 Nghiên cứu khoa học quan trọng:</p>
            <ul class="text-sm text-slate-300 space-y-2">
              <li>• <strong>Nghiên cứu tài xế taxi London (Maguire, 2000):</strong> Tài xế London có vùng hồi hải mã lớn hơn 25% so với người bình thường, chứng minh não bộ phát triển khi luyện tập trí nhớ không gian.</li>
              <li>• <strong>Nghiên cứu Vận động viên trí nhớ (Dresler, 2017):</strong> fMRI cho thấy 93% nhà vô địch trí nhớ thế giới sử dụng Method of Loci. Não của họ kích hoạt mạng lưới không gian (spatial navigation network) giống hệt khi đang thực sự đi bộ.</li>
              <li>• <strong>Thí nghiệm 6 tuần (Dresler, 2017):</strong> Người bình thường sau 6 tuần luyện tập Method of Loci có thể nhớ gấp đôi số từ so với trước, và hiệu quả duy trì sau 4 tháng không luyện tập.</li>
            </ul>
          </div>
          <p class="text-slate-300 leading-relaxed">
            <strong class="text-white">Tại sao nó hoạt động?</strong> Khi bạn gắn thông tin trừu tượng (công thức, từ vựng, con số) vào một vị trí không gian cụ thể trong trí tưởng tượng, bạn kích hoạt đồng thời 3 vùng não: hồi hải mã (không gian), vỏ não thị giác (hình ảnh), và hạch hạnh nhân (cảm xúc). Ba vùng não kết hợp tạo ra dấu vết trí nhớ mạnh gấp 3-5 lần so với chỉ đọc lại.
          </p>
        </div>

        <!-- PHẦN 3: QUY TRÌNH 10 BƯỚC -->
        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">🎯 PHẦN 3: QUY TRÌNH 10 BƯỚC KIẾN TẠO CUNG ĐIỆN</h3>
          <div class="space-y-3">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 1: Chọn Cung Điện Đầu Tiên</p>
              <p class="text-slate-300 text-sm">Chọn một nơi bạn biết RẤT RÕ — ngôi nhà bạn đang ở là lý tưởng nhất. Bạn phải có thể nhắm mắt và "đi bộ" trong trí tưởng tượng qua từng ngóc ngách.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 2: Xác Định Tuyến Đường Cố Định</p>
              <p class="text-slate-300 text-sm">Đi theo MỘT CHIỀU duy nhất (ví dụ: từ cổng vào → phòng khách → bếp → phòng ngủ → ban công). Luôn đi theo chiều kim đồng hồ hoặc từ trái sang phải. KHÔNG BAO GIỜ thay đổi thứ tự.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 3: Đánh Dấu 10 Trạm Mốc (Loci)</p>
              <p class="text-slate-300 text-sm">Mỗi trạm mốc là một vật thể cố định, nổi bật: cánh cổng, chậu cây, tủ giày, ghế sofa, tivi, bàn ăn, tủ lạnh, bồn rửa, giường ngủ, ban công. Bắt đầu với 10 trạm, sau đó mở rộng lên 20, 50, 100.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 4: "Đi Bộ Khô" 3 Lần</p>
              <p class="text-slate-300 text-sm">Nhắm mắt, tưởng tượng bạn đang thực sự đi từ trạm 1 → 2 → ... → 10. Lặp lại 3 lần cho đến khi tuyến đường trở nên tự động như phản xạ. Phải thấy rõ từng chi tiết: màu sắc, chất liệu, ánh sáng.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 5: Quy Tắc V.E.E.A — Chìa Khóa Vàng</p>
              <div class="text-slate-300 text-sm mt-1">
                <p class="mb-1"><strong class="text-amber-400">V</strong>ivid (Sinh động): Hình ảnh phải có màu sắc rực rỡ, kích thước khổng lồ.</p>
                <p class="mb-1"><strong class="text-amber-400">E</strong>xaggerated (Phóng đại): Làm cho mọi thứ to gấp 100 lần hoặc nhỏ xíu bất thường.</p>
                <p class="mb-1"><strong class="text-amber-400">E</strong>motional (Cảm xúc): Gắn với sợ hãi, hài hước, ghê tởm, hoặc sung sướng.</p>
                <p><strong class="text-amber-400">A</strong>ction (Hành động): Hình ảnh phải ĐANG CHUYỂN ĐỘNG — nổ tung, chảy máu, nhảy múa, bay lên.</p>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 6: Neo Giữ Thông Tin Vào Trạm</p>
              <p class="text-slate-300 text-sm">Biến mỗi thông tin cần nhớ thành một HÌNH ẢNH CỤ THỂ theo quy tắc V.E.E.A, rồi đặt hình ảnh đó vào trạm mốc tương ứng. Hình ảnh phải TƯƠNG TÁC với trạm mốc (không chỉ đặt bên cạnh).</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 7: Kích Hoạt Đa Giác Quan</p>
              <p class="text-slate-300 text-sm">Khi đặt hình ảnh, hãy tưởng tượng: bạn NGHE thấy gì? NGỬI thấy gì? SỜ cảm giác gì? Nóng hay lạnh? Trơn hay nhám? Càng nhiều giác quan, dấu vết trí nhớ càng sâu.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 8: Truy Xuất (Recall Walk)</p>
              <p class="text-slate-300 text-sm">Nhắm mắt và "đi bộ" lại qua cung điện. Tại mỗi trạm, hỏi: "Có gì ở đây?" Hình ảnh sẽ tự động hiện ra. Nếu trạm nào bị trống, quay lại Bước 6 và tạo hình ảnh V.E.E.A mạnh hơn.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 9: Ôn Tập Ngắt Quãng (SRS)</p>
              <p class="text-slate-300 text-sm">Đi lại cung điện sau 20 phút → 1 ngày → 3 ngày → 7 ngày → 30 ngày. Kết hợp với lịch SRS trong ứng dụng để không quên lịch ôn.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold text-sm">Bước 10: Mở Rộng & Nâng Cấp</p>
              <p class="text-slate-300 text-sm">Khi thành thạo nhà riêng, mở rộng sang: trường học, văn phòng, siêu thị, con đường đi làm, quán cafe quen. Mỗi địa điểm mới = 10-20 trạm mốc mới. Nhà vô địch thế giới có hàng TRĂM cung điện!</p>
            </div>
          </div>
        </div>

        <!-- PHẦN 4: VÍ DỤ THỰC HÀNH -->
        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 4: VÍ DỤ THỰC HÀNH — NHỚ 10 QUỐC GIA ĐÔNG NAM Á</h3>
          <p class="text-slate-300 text-sm mb-3">Cung điện: Ngôi nhà của bạn. 10 trạm mốc. 10 quốc gia ASEAN:</p>
          <div class="space-y-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">1. Cổng nhà:</span>
              <span class="text-slate-300"><strong class="text-white">Việt Nam</strong> — Một con rồng vàng khổng lồ cuộn quanh cổng nhà, phun lửa vào bầu trời, áo dài đỏ bay phấp phới trên lưng rồng.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">2. Chậu cây:</span>
              <span class="text-slate-300"><strong class="text-white">Lào</strong> — Một con voi trắng khổng lồ đang tắm bùn trong chậu cây, nước bùn bắn tung tóe lên tường.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">3. Tủ giày:</span>
              <span class="text-slate-300"><strong class="text-white">Campuchia</strong> — Ngôi đền Angkor Wat thu nhỏ mọc ra từ bên trong tủ giày, ánh sáng vàng rực chiếu ra từ khe cửa.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">4. Sofa:</span>
              <span class="text-slate-300"><strong class="text-white">Thái Lan</strong> — Một võ sĩ Muay Thai đang đá vào ghế sofa, ghế bay tung lên trần nhà rồi rơi xuống nổ tung bông gòn.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">5. Tivi:</span>
              <span class="text-slate-300"><strong class="text-white">Myanmar</strong> — Một ngôi chùa vàng Shwedagon bằng vàng ròng đâm xuyên qua màn hình tivi, tia sáng vàng chói lóa phát ra.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">6. Bàn ăn:</span>
              <span class="text-slate-300"><strong class="text-white">Malaysia</strong> — Tòa tháp đôi Petronas bằng chocolate đặt giữa bàn ăn, đang tan chảy nhỏ giọt chocolate nóng xuống đĩa.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">7. Tủ lạnh:</span>
              <span class="text-slate-300"><strong class="text-white">Singapore</strong> — Tượng sư tử biển Merlion đang phun nước đá lạnh từ bên trong tủ lạnh ra sàn nhà, sàn đóng băng.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">8. Bồn rửa:</span>
              <span class="text-slate-300"><strong class="text-white">Indonesia</strong> — Núi lửa Krakatoa thu nhỏ đang phun dung nham đỏ rực từ trong bồn rửa, nước sôi sùng sục.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">9. Giường:</span>
              <span class="text-slate-300"><strong class="text-white">Philippines</strong> — Hàng ngàn con cá hề Nemo đang bơi lội trên mặt giường, biến giường thành rạn san hô đầy màu sắc.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5 flex gap-3">
              <span class="text-amber-400 font-bold whitespace-nowrap">10. Ban công:</span>
              <span class="text-slate-300"><strong class="text-white">Brunei</strong> — Một cung điện vàng ròng thu nhỏ trên ban công, lóng lánh dưới ánh mặt trời, có ông vua đeo vương miện kim cương vẫy tay.</span>
            </div>
          </div>
        </div>

        <!-- PHẦN 5: BÀI TẬP -->
        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 5: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Xây Cung Điện Phòng Ngủ</p>
              <p>Vẽ sơ đồ phòng ngủ của bạn. Đánh dấu 10 vật thể cố định theo chiều kim đồng hồ. Nhắm mắt và đi lại 5 lần. Kiểm tra: bạn có thể kể tên 10 trạm theo thứ tự ngược không?</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Nhớ Danh Sách Mua Sắm 10 Món</p>
              <p>Danh sách: Trứng, Sữa, Bánh mì, Cà chua, Thịt bò, Dầu ăn, Tỏi, Ớt, Muối, Nước mắm. Đặt mỗi món vào 1 trạm bằng quy tắc V.E.E.A. Sau 1 giờ kiểm tra lại — bạn nhớ được bao nhiêu?</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 3: Nhớ 10 Từ Vựng Tiếng Anh</p>
              <p>Chọn 10 từ tiếng Anh mới, biến mỗi từ thành hình ảnh V.E.E.A, đặt vào 10 trạm mốc. Ví dụ: "Ubiquitous" (ở khắp nơi) → tưởng tượng hàng triệu bản sao của bạn xuất hiện ở khắp nhà.</p>
            </div>
          </div>
        </div>

        <!-- PHẦN 6: THÀNH TÍCH & KỶ LỤC -->
        <div class="bg-gradient-to-r from-yellow-900/40 to-amber-900/40 rounded-xl p-4 border border-yellow-700/30">
          <h3 class="text-lg font-bold text-yellow-300 mb-3 flex items-center gap-2">🏆 KỶ LỤC THẾ GIỚI VỚI METHOD OF LOCI</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3 text-center">
              <p class="text-2xl font-bold text-yellow-400">1,000+</p>
              <p class="text-slate-400">Chữ số Pi được nhớ bởi nhà vô địch thế giới Alex Mullen</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 text-center">
              <p class="text-2xl font-bold text-yellow-400">21.19 giây</p>
              <p class="text-slate-400">Kỷ lục nhớ bộ bài 52 lá (Shijir-Erdene Bat-Enkh)</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 text-center">
              <p class="text-2xl font-bold text-yellow-400">93%</p>
              <p class="text-slate-400">Nhà vô địch trí nhớ sử dụng Method of Loci</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 text-center">
              <p class="text-2xl font-bold text-yellow-400">6 tuần</p>
              <p class="text-slate-400">Thời gian để người thường đạt trình độ gấp đôi</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <!-- LỊCH SỬ -->
        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">📜 PHẦN 1: LỊCH SỬ & NGUỒN GỐC</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Hệ thống Major System được phát triển bởi <strong class="text-white">Johann Martin Zacharias Dase</strong> (nhà toán học thiên tài Đức, thế kỷ 17) và được hoàn thiện bởi <strong class="text-white">Aimé Paris</strong> (nhà sư phạm Pháp, thế kỷ 19). Tên "Major System" đến từ <strong class="text-white">Major Beniowski</strong>, người phổ biến rộng rãi hệ thống này ở châu Âu.
          </p>
          <p class="text-slate-300 leading-relaxed">
            Nguyên lý cốt lõi: <em class="text-amber-300">Bộ não con người xử lý hình ảnh nhanh hơn 60.000 lần so với văn bản và số.</em> Major System là cây cầu chuyển đổi từ "ngôn ngữ số trừu tượng" sang "ngôn ngữ hình ảnh cụ thể" mà não phải có thể xử lý tức thì.
          </p>
        </div>

        <!-- BẢNG QUY ĐỔI -->
        <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🔑 PHẦN 2: BẢNG QUY ĐỔI ÂM CHUẨN QUỐC TẾ</h3>
          <p class="text-slate-300 text-sm mb-3">Mỗi chữ số từ 0-9 được gán cho một hoặc nhiều PHỤ ÂM. Nguyên âm (A, E, I, O, U) và các phụ âm H, W, Y KHÔNG có giá trị — chúng là "chất đệm" để tạo từ có nghĩa.</p>
          <div class="grid grid-cols-1 gap-2 text-sm">
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">0</span>
              <span class="text-white font-bold">S, X, Z</span>
              <span class="text-slate-400">Lý do: "Zero" bắt đầu bằng Z. Chữ S là ký hiệu phổ biến nhất.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">1</span>
              <span class="text-white font-bold">T, Đ, D</span>
              <span class="text-slate-400">Lý do: Chữ T có 1 nét kẻ dọc. Âm lưỡi chạm răng.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">2</span>
              <span class="text-white font-bold">N</span>
              <span class="text-slate-400">Lý do: Chữ N viết thường có 2 nét chân.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">3</span>
              <span class="text-white font-bold">M</span>
              <span class="text-slate-400">Lý do: Chữ M viết thường có 3 nét chân. Lật số 3 ngang = chữ m.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">4</span>
              <span class="text-white font-bold">R</span>
              <span class="text-slate-400">Lý do: Số 4 kết thúc bằng âm "r" (four). Chữ R lật ngược giống số 4.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">5</span>
              <span class="text-white font-bold">L</span>
              <span class="text-slate-400">Lý do: Trong La Mã, L = 50. Bàn tay trái xòe ra = hình chữ L = 5 ngón.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">6</span>
              <span class="text-white font-bold">Ch, J, Sh</span>
              <span class="text-slate-400">Lý do: Lật ngược số 6 trông giống chữ J. Âm "sáu" gần với "sh".</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">7</span>
              <span class="text-white font-bold">K, G, C cứng</span>
              <span class="text-slate-400">Lý do: Hai số 7 xếp lại giống chữ K. Âm cuống họng.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">8</span>
              <span class="text-white font-bold">V, F, PH</span>
              <span class="text-slate-400">Lý do: Viết tay chữ f giống số 8. Âm răng-môi.</span>
            </div>
            <div class="bg-slate-900/60 rounded-lg p-3 grid grid-cols-[60px_80px_1fr] items-center gap-3">
              <span class="text-3xl font-bold text-amber-400 text-center">9</span>
              <span class="text-white font-bold">P, B</span>
              <span class="text-slate-400">Lý do: Lật ngược số 9 = chữ P. Âm môi nổ.</span>
            </div>
          </div>
        </div>

        <!-- CÁCH GHÉP TỪ -->
        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">🔧 PHẦN 3: CÁCH GHÉP SỐ THÀNH HÌNH ẢNH</h3>
          <p class="text-slate-300 text-sm mb-3">Ghép 2 phụ âm (từ 2 chữ số) + thêm nguyên âm = một TỪ CÓ NGHĨA = một HÌNH ẢNH CỤ THỂ.</p>
          <div class="space-y-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <span class="text-emerald-400 font-bold">14</span> → T + R → <strong class="text-white">TRâu</strong> 🐃 → Hình ảnh: Con trâu khổng lồ
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <span class="text-emerald-400 font-bold">32</span> → M + N → <strong class="text-white">Mỏ Neo</strong> ⚓ → Hình ảnh: Chiếc mỏ neo sắt rỉ
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <span class="text-emerald-400 font-bold">75</span> → K + L → <strong class="text-white">KèN Lá</strong> 🎺 → Hình ảnh: Cái kèn bằng lá chuối
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <span class="text-emerald-400 font-bold">91</span> → P + T → <strong class="text-white">PúT</strong> (Cú đánh golf) 🏌️ → Hình ảnh: Người đánh golf
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <span class="text-emerald-400 font-bold">27</span> → N + K → <strong class="text-white">Nước Khoáng</strong> 💧 → Hình ảnh: Chai nước khoáng phun tung tóe
            </div>
          </div>
        </div>

        <!-- ỨNG DỤNG THỰC TẾ -->
        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">💡 PHẦN 4: ỨNG DỤNG THỰC TẾ</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Nhớ Số Điện Thoại: 0912-345-678</p>
              <p>09 = Tên lửa 🚀 | 12 = Từ trường 🧲 | 34 = Tim ❤️ | 56 = Thước đo góc 📐 | 78 = Lò phản ứng hạt nhân ☢️</p>
              <p class="text-amber-400 mt-1">→ Câu chuyện: "Tên lửa bị từ trường hút ngược về trái tim, va vào thước đo rồi nổ tung như lò phản ứng hạt nhân!"</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Nhớ Năm Sinh: 1879 (Einstein ra đời)</p>
              <p>18 = Trọng lực ⚖️ | 79 = Đèn dầu 🪔</p>
              <p class="text-amber-400 mt-1">→ "Trọng lực kéo chiếc đèn dầu rơi xuống, bóng đèn vỡ tung sinh ra Einstein!"</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Nhớ Mật Khẩu Số: 4821</p>
              <p>48 = Lốc xoáy 🌪️ | 21 = Bình hóa học ⚗️</p>
              <p class="text-amber-400 mt-1">→ "Lốc xoáy cuốn bay bình hóa học, acid tràn ra hòa tan mọi thứ!"</p>
            </div>
          </div>
        </div>

        <!-- BÀI TẬP -->
        <div class="bg-gradient-to-r from-violet-900/40 to-purple-900/40 rounded-xl p-4 border border-violet-700/30">
          <h3 class="text-lg font-bold text-violet-300 mb-3 flex items-center gap-2">✏️ PHẦN 5: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-violet-400 font-bold mb-1">Bài tập 1: Thuộc Bảng Âm</p>
              <p>Viết bảng 0-9 lên giấy, nhắm mắt đọc lại 5 lần. Kiểm tra: ai đó đọc số ngẫu nhiên, bạn phải nói ngay phụ âm tương ứng trong 1 giây.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-violet-400 font-bold mb-1">Bài tập 2: Mã Hóa 10 Số Đầu</p>
              <p>Mã hóa 00-09 thành hình ảnh cụ thể. Vào tab "Mã Số 00-99" để kiểm tra.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-violet-400 font-bold mb-1">Bài tập 3: Combo Loci + Major</p>
              <p>Mã hóa số Pi (3.14159265) thành hình ảnh, đặt vào cung điện phòng ngủ.</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <!-- LỊCH SỬ -->
        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">📜 PHẦN 1: LỊCH SỬ & NGUỒN GỐC</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Năm <strong class="text-white">1885</strong>, nhà tâm lý học Đức <strong class="text-emerald-300">Hermann Ebbinghaus</strong> đã thực hiện thí nghiệm trên chính bản thân ông: học thuộc hàng trăm chuỗi âm tiết vô nghĩa (DAX, BUP, ZOL...) rồi đo lường tốc độ quên theo thời gian.
          </p>
          <p class="text-slate-300 leading-relaxed mb-3">
            Phát hiện gây choáng: <em class="text-emerald-300">Con người quên 56% sau 1 giờ, 66% sau 1 ngày, và 75% sau 6 ngày</em> nếu không ôn tập. Ông vẽ ra "Đường cong Quên lãng" (Forgetting Curve) — một trong những phát hiện quan trọng nhất trong khoa học nhận thức.
          </p>
          <p class="text-slate-300 leading-relaxed">
            Nhưng Ebbinghaus cũng phát hiện điều kỳ diệu: <strong class="text-white">mỗi lần ôn tập, đường cong quên lãng trở nên phẳng hơn</strong>. Nghĩa là sau mỗi lần ôn, bạn nhớ lâu hơn trước. Đây là nền tảng khoa học của Spaced Repetition.
          </p>
        </div>

        <!-- KHOA HỌC THẦN KINH -->
        <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🧠 PHẦN 2: KHOA HỌC THẦN KINH — TẠI SAO NÃO QUÊN?</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <p>Khi bạn học điều mới, não tạo ra kết nối synapse (khớp thần kinh) giữa các neuron. Nhưng kết nối này ban đầu rất yếu — giống như vẽ đường trên cát ướt.</p>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-cyan-400 font-bold mb-1">Quá trình Củng cố trí nhớ (Memory Consolidation):</p>
              <p><strong class="text-white">1. Mã hóa (Encoding):</strong> Thông tin mới được ghi vào hồi hải mã (RAM ngắn hạn).</p>
              <p><strong class="text-white">2. Lưu trữ (Storage):</strong> Qua giấc ngủ và ôn tập, thông tin được chuyển sang vỏ não (ổ cứng dài hạn).</p>
              <p><strong class="text-white">3. Truy xuất (Retrieval):</strong> Mỗi lần bạn CỐ GẮNG nhớ lại (không nhìn đáp án), synapse được tái cấu trúc mạnh hơn.</p>
            </div>
            <p><strong class="text-white">Hiệu ứng Testing Effect:</strong> Nghiên cứu của Roediger & Butler (2011) chứng minh rằng TỰ KIỂM TRA (cố nhớ lại) hiệu quả gấp 2.5 lần so với ĐỌC LẠI. Đây là lý do flashcard hiệu quả hơn gạch chân sách.</p>
          </div>
        </div>

        <!-- LỊCH TRÌNH ÔN TẬP -->
        <div class="bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">📅 PHẦN 3: LỊCH TRÌNH ÔN TẬP CHUẨN KHOA HỌC</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3 grid grid-cols-[80px_1fr] gap-3 items-center">
              <span class="text-center"><span class="text-2xl font-bold text-purple-400">Lần 1</span></span>
              <div>
                <p class="text-white font-bold">Ngay sau 20 phút</p>
                <p class="text-slate-400">Độ nhớ sụt từ 100% xuống ~58%. Ôn tập ngay lúc này kéo lên 100% và giữ lâu hơn.</p>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 grid grid-cols-[80px_1fr] gap-3 items-center">
              <span class="text-center"><span class="text-2xl font-bold text-purple-400">Lần 2</span></span>
              <div>
                <p class="text-white font-bold">Sau 24 giờ (1 ngày)</p>
                <p class="text-slate-400">Nếu không ôn, mất 66%. Ôn vào đây giúp đường cong phẳng đi rõ rệt.</p>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 grid grid-cols-[80px_1fr] gap-3 items-center">
              <span class="text-center"><span class="text-2xl font-bold text-purple-400">Lần 3</span></span>
              <div>
                <p class="text-white font-bold">Sau 3 ngày</p>
                <p class="text-slate-400">Lần ôn thứ 3 bắt đầu chuyển thông tin từ hồi hải mã sang vỏ não.</p>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 grid grid-cols-[80px_1fr] gap-3 items-center">
              <span class="text-center"><span class="text-2xl font-bold text-purple-400">Lần 4</span></span>
              <div>
                <p class="text-white font-bold">Sau 7 ngày (1 tuần)</p>
                <p class="text-slate-400">Synapse đã được myelin hóa (bọc lớp cách điện), tín hiệu truyền nhanh hơn 100 lần.</p>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 grid grid-cols-[80px_1fr] gap-3 items-center">
              <span class="text-center"><span class="text-2xl font-bold text-purple-400">Lần 5</span></span>
              <div>
                <p class="text-white font-bold">Sau 30 ngày (1 tháng)</p>
                <p class="text-slate-400">Thông tin chính thức nằm trong trí nhớ dài hạn. Chỉ cần ôn nhẹ 3-6 tháng/lần.</p>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3 grid grid-cols-[80px_1fr] gap-3 items-center">
              <span class="text-center"><span class="text-2xl font-bold text-purple-400">Lần 6</span></span>
              <div>
                <p class="text-white font-bold">Sau 90 ngày (3 tháng)</p>
                <p class="text-slate-400">Trí nhớ vĩnh viễn! Giống như bạn nhớ tên mình — không bao giờ quên.</p>
              </div>
            </div>
          </div>
        </div>

        <!-- THUẬT TOÁN SRS -->
        <div class="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">⚙️ PHẦN 4: THUẬT TOÁN SM-2 (Anki/SuperMemo)</h3>
          <p class="text-slate-300 text-sm mb-3">
            Phần mềm SRS hiện đại (Anki, SuperMemo) sử dụng thuật toán SM-2 do <strong class="text-white">Piotr Woźniak</strong> (Ba Lan) phát minh năm 1987:
          </p>
          <div class="bg-slate-900/60 rounded-lg p-3 text-sm text-slate-300 space-y-2">
            <p><strong class="text-amber-400">Sau mỗi lần ôn, bạn tự đánh giá:</strong></p>
            <p>😰 <strong>Lại (Again)</strong> — Quên hoàn toàn → Quay lại ngày mai</p>
            <p>😐 <strong>Khó (Hard)</strong> — Nhớ được nhưng rất khó khăn → Khoảng cách × 1.2</p>
            <p>🙂 <strong>Tốt (Good)</strong> — Nhớ được sau vài giây suy nghĩ → Khoảng cách × 2.5</p>
            <p>😎 <strong>Dễ (Easy)</strong> — Nhớ ngay tức thì → Khoảng cách × 3.5</p>
          </div>
          <p class="text-slate-300 text-sm mt-3">
            Ví dụ: Nếu bạn nhớ flashcard sau 3 ngày và đánh giá "Tốt", lần ôn tiếp theo sẽ là sau 3 × 2.5 = <strong class="text-white">7.5 ngày</strong>. Nếu tiếp tục "Tốt", lần sau = 19 ngày, rồi 47 ngày...
          </p>
        </div>

        <!-- BÀI TẬP -->
        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 5: THỰC HÀNH NGAY</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Dùng SRS Flashcard trong ứng dụng</p>
              <p>Vào tab "Luyện Tập" → mục "Thẻ Ghi Nhớ Ngắt Quãng". Ôn 5 thẻ/ngày. Đánh giá trung thực mức độ nhớ.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Tạo Lịch Ôn Thủ Công</p>
              <p>Viết 10 kiến thức mới lên 10 flashcard giấy. Dán lịch ôn trên tường: Hôm nay → Ngày mai → 3 ngày → 7 ngày → 30 ngày. Mỗi ngày lật thẻ và tự kiểm tra.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 3: Combo SRS + Loci + Major</p>
              <p>Mã hóa 20 số đầu (00-19) thành hình ảnh, đặt vào cung điện, rồi ôn theo lịch SRS. Sau 30 ngày bạn sẽ nhớ vĩnh viễn.</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <!-- KHOA HỌC -->
        <div class="bg-gradient-to-r from-pink-900/40 to-rose-900/40 rounded-xl p-4 border border-pink-700/30">
          <h3 class="text-lg font-bold text-pink-300 mb-3 flex items-center gap-2">🧠 PHẦN 1: TẠI SAO NÃO YÊU CÂU CHUYỆN?</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Loài người đã kể chuyện suốt <strong class="text-white">100.000 năm</strong> — từ những bức tranh hang động Lascaux đến phim Hollywood. Não bộ tiến hóa để xử lý thông tin dưới dạng câu chuyện (narrative), không phải danh sách.
          </p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm space-y-2 text-slate-300">
            <p><strong class="text-white">3 cơ chế thần kinh:</strong></p>
            <p>🔸 <strong class="text-pink-300">Dopamine:</strong> Khi câu chuyện có tình tiết bất ngờ, não tiết hormone Dopamine — chất tạo cảm giác hưng phấn và ghi nhớ.</p>
            <p>🔸 <strong class="text-pink-300">Oxytocin:</strong> Khi câu chuyện gây cảm động, não tiết Oxytocin — chất tạo kết nối cảm xúc sâu sắc.</p>
            <p>🔸 <strong class="text-pink-300">Cortisol:</strong> Khi câu chuyện gây căng thẳng (kinh dị, kịch tính), Cortisol giúp não tập trung cao độ và khắc ghi thông tin.</p>
          </div>
          <p class="text-slate-300 text-sm mt-3">
            <strong>Hiệu ứng Von Restorff:</strong> Điều gì NỔI BẬT nhất, KỲ LẠ nhất, PHI LÝ nhất sẽ được nhớ lâu nhất. Đây là lý do bạn nhớ sự kiện hài hước suốt đời nhưng quên bài giảng khô khan sau 5 phút.
          </p>
        </div>

        <!-- QUY TẮC -->
        <div class="bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">🎯 PHẦN 2: 5 QUY TẮC VÀNG CỦA CÂU CHUYỆN GHI NHỚ</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Quy tắc 1: Liên kết HÀNH ĐỘNG trực tiếp</p>
              <p class="text-slate-300">Vật A phải TÁC ĐỘNG VẬT LÝ lên vật B. Không phải "A ở gần B" mà là "A đâm xuyên qua B", "A nổ tung biến thành B", "A ăn nuốt B".</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Quy tắc 2: PHI LÝ & Phóng đại</p>
              <p class="text-slate-300">Kích thước khổng lồ (con kiến cao bằng tòa nhà), màu sắc rực rỡ (con gà tây bằng vàng ròng), tốc độ siêu nhanh hoặc siêu chậm.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Quy tắc 3: ĐA GIÁC QUAN</p>
              <p class="text-slate-300">Thêm âm thanh (tiếng nổ, tiếng hét), mùi vị (thối hoắc, thơm phức), cảm giác (nóng bỏng, lạnh cóng, nhớt nhầy).</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Quy tắc 4: CẢM XÚC MẠNH</p>
              <p class="text-slate-300">Hài hước sảng khoái, ghê tởm rợn người, kinh dị sởn gai ốc, lãng mạn ngọt ngào. Càng cực đoan càng nhớ lâu.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Quy tắc 5: CHUYỂN ĐỘNG liên tục</p>
              <p class="text-slate-300">Câu chuyện phải như phim hoạt hình — mọi thứ đều đang di chuyển, biến đổi, nổ tung, chảy, bay, rơi.</p>
            </div>
          </div>
        </div>

        <!-- VÍ DỤ THỰC HÀNH -->
        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 3: VÍ DỤ — NHỚ 10 NGUYÊN TỐ ĐẦU BẢNG TUẦN HOÀN</h3>
          <p class="text-slate-300 text-sm mb-3">H, He, Li, Be, B, C, N, O, F, Ne (Hydrogen, Helium, Lithium, Beryllium, Boron, Carbon, Nitrogen, Oxygen, Fluorine, Neon)</p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm text-slate-300 leading-relaxed">
            <p class="text-amber-400 font-semibold mb-2">🎬 Bộ phim bom tấn trong đầu bạn:</p>
            <p class="mb-2">Một quả bom <strong class="text-white">Hydrogen (H)</strong> khổng lồ nổ BÙNG trên bầu trời, bắn ra hàng triệu quả bóng bay <strong class="text-white">Helium (He)</strong> bay lên cao...</p>
            <p class="mb-2">Mỗi quả bóng rơi xuống đập vào cục pin <strong class="text-white">Lithium (Li)</strong> → pin nổ tung bắn ra hàng nghìn viên <strong class="text-white">đá quý Beryllium (Be)</strong> lấp lánh...</p>
            <p class="mb-2">Đá quý rơi trúng một đống <strong class="text-white">Boron (B) — bột giặt</strong> trắng xóa, tạo thành đám mây bột → bột hòa tan thành <strong class="text-white">Carbon (C) — kim cương</strong> đen lấp lánh...</p>
            <p class="mb-2">Kim cương rơi xuống đống phân bón <strong class="text-white">Nitrogen (N)</strong> thối hoắc (mũi bạn ngửi thấy mùi) → phân bón bốc cháy thành lửa cần <strong class="text-white">Oxygen (O)</strong>...</p>
            <p>Lửa cháy sáng rực rồi bị một ống <strong class="text-white">Fluorine (F) — kem đánh răng</strong> khổng lồ phun tắt → bọt kem bay lên trời biến thành đèn <strong class="text-white">Neon (Ne)</strong> nhấp nháy đủ màu!</p>
          </div>
        </div>

        <!-- SO SÁNH VỚI LOCI -->
        <div class="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl p-4 border border-cyan-700/30">
          <h3 class="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">⚡ PHẦN 4: STORY METHOD vs METHOD OF LOCI</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-cyan-400 font-bold mb-2">📖 Story Method</p>
              <p class="text-slate-300">✅ Nhanh hơn, không cần chuẩn bị cung điện</p>
              <p class="text-slate-300">✅ Phù hợp danh sách ngắn (5-15 mục)</p>
              <p class="text-slate-300">❌ Dễ bị rối nếu > 20 mục</p>
              <p class="text-slate-300">❌ Khó truy xuất mục ở giữa danh sách</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold mb-2">🏛️ Method of Loci</p>
              <p class="text-slate-300">✅ Có thể nhớ hàng trăm, hàng nghìn mục</p>
              <p class="text-slate-300">✅ Truy xuất bất kỳ mục nào theo số thứ tự</p>
              <p class="text-slate-300">❌ Cần thời gian xây dựng cung điện</p>
              <p class="text-slate-300">❌ Phức tạp hơn cho người mới bắt đầu</p>
            </div>
          </div>
          <p class="text-slate-300 text-sm mt-3">💡 <strong class="text-white">Combo tối ưu:</strong> Dùng Story Method để tạo câu chuyện cho mỗi TRẠM trong cung điện Loci. Cung Điện = khung xương, Câu Chuyện = thịt da!</p>
        </div>

        <!-- BÀI TẬP -->
        <div class="bg-gradient-to-r from-emerald-900/40 to-green-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">✏️ PHẦN 5: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Bài tập 1: Nhớ Danh Sách Mua Sắm</p>
              <p>Viết 10 món cần mua. Tạo câu chuyện phi lý nối 10 món theo chuỗi. Sau 2 giờ kiểm tra — bạn nhớ được bao nhiêu?</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Bài tập 2: Nhớ 7 Lục Địa</p>
              <p>Châu Á → Châu Phi → Bắc Mỹ → Nam Mỹ → Nam Cực → Châu Âu → Châu Úc. Tạo câu chuyện hành động liên kết 7 lục địa.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Bài tập 3: Nhớ 12 Con Giáp</p>
              <p>Tý, Sửu, Dần, Mão, Thìn, Tỵ, Ngọ, Mùi, Thân, Dậu, Tuất, Hợi. Tạo bộ phim hoạt hình hài hước trong 2 phút.</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <!-- NGUYÊN LÝ -->
        <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">📜 PHẦN 1: NGUYÊN LÝ HOẠT ĐỘNG</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Peg System (Hệ thống Móc treo) được phát triển bởi <strong class="text-white">Henry Herdson</strong> vào năm 1651, là một trong những kỹ thuật ghi nhớ cổ xưa nhất. Nguyên lý: <em class="text-blue-300">tạo sẵn một bộ "móc treo" cố định trong não, mỗi móc gắn với một con số. Khi cần nhớ danh sách, chỉ cần "treo" thông tin mới lên các móc đã có sẵn.</em>
          </p>
          <p class="text-slate-300 leading-relaxed">
            <strong class="text-white">Ưu điểm vượt trội so với Story Method:</strong> Bạn có thể truy xuất BẤT KỲ mục nào theo số thứ tự mà không cần đi qua toàn bộ danh sách. Hỏi "mục số 7 là gì?" — trả lời ngay tức thì.
          </p>
        </div>

        <!-- 3 HỆ THỐNG PEG -->
        <div class="bg-gradient-to-r from-purple-900/40 to-indigo-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">🔑 PHẦN 2: 3 HỆ THỐNG PEG PHỔ BIẾN</h3>
          
          <div class="mb-4">
            <p class="text-purple-400 font-bold text-sm mb-2">Hệ thống 1: MÓC TREO HÌNH DẠNG (Number-Shape)</p>
            <p class="text-slate-400 text-xs mb-2">Mỗi số giống hình dạng một vật:</p>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🕯️</span><br><strong class="text-white">1</strong> = Cây nến</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🦢</span><br><strong class="text-white">2</strong> = Con thiên nga</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">❤️</span><br><strong class="text-white">3</strong> = Trái tim</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">⛵</span><br><strong class="text-white">4</strong> = Cánh buồm</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🪝</span><br><strong class="text-white">5</strong> = Móc câu</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🐌</span><br><strong class="text-white">6</strong> = Con ốc sên</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🪓</span><br><strong class="text-white">7</strong> = Cái rìu</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">⛄</span><br><strong class="text-white">8</strong> = Người tuyết</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🎈</span><br><strong class="text-white">9</strong> = Bóng bay</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🍽️</span><br><strong class="text-white">10</strong> = Nĩa + đĩa</div>
            </div>
          </div>

          <div class="mb-4">
            <p class="text-purple-400 font-bold text-sm mb-2">Hệ thống 2: MÓC TREO HIỆP VẦN (Number-Rhyme)</p>
            <p class="text-slate-400 text-xs mb-2">Mỗi số vần với một từ:</p>
            <div class="grid grid-cols-2 sm:grid-cols-5 gap-2 text-xs">
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🌞</span><br><strong class="text-white">Một</strong> = Mặt trời (nhất)</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">👟</span><br><strong class="text-white">Hai</strong> = Đôi giày</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🌳</span><br><strong class="text-white">Ba</strong> = Cái cây (ba cành)</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🚪</span><br><strong class="text-white">Bốn</strong> = Cái cửa</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🐝</span><br><strong class="text-white">Năm</strong> = Con ong (năm)</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🧱</span><br><strong class="text-white">Sáu</strong> = Viên gạch</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🌈</span><br><strong class="text-white">Bảy</strong> = Cầu vồng (bảy sắc)</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">⛩️</span><br><strong class="text-white">Tám</strong> = Cổng (tám)</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🍷</span><br><strong class="text-white">Chín</strong> = Rượu (chín)</div>
              <div class="bg-slate-900/40 rounded-lg p-2 text-center"><span class="text-2xl">🐔</span><br><strong class="text-white">Mười</strong> = Con gà (mười)</div>
            </div>
          </div>

          <div>
            <p class="text-purple-400 font-bold text-sm mb-2">Hệ thống 3: MÓC TREO MAJOR (00-99)</p>
            <p class="text-slate-400 text-xs">Nâng cấp lên 100 móc treo bằng Major System! Vào tab <strong class="text-white">"Mã Số 00-99"</strong> trong ứng dụng để xem đầy đủ 100 hình ảnh chuẩn.</p>
          </div>
        </div>

        <!-- VÍ DỤ -->
        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 3: VÍ DỤ — NHỚ 10 QUỐC GIA DÂN SỐ ĐÔNG NHẤT</h3>
          <p class="text-slate-300 text-sm mb-3">Dùng Peg Hình dạng, nhớ 10 nước dân số đông nhất thế giới (theo thứ tự):</p>
          <div class="space-y-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-2.5">
              <span class="text-amber-400 font-bold">1. Cây nến 🕯️ +</span>
              <span class="text-slate-300"><strong class="text-white">Ấn Độ</strong> — Cây nến khổng lồ cắm trên đỉnh đền Taj Mahal, lửa cháy rực chiếu sáng cả bầu trời.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5">
              <span class="text-amber-400 font-bold">2. Thiên nga 🦢 +</span>
              <span class="text-slate-300"><strong class="text-white">Trung Quốc</strong> — Con thiên nga đang bay qua Vạn Lý Trường Thành, cánh vỗ thổi bay hàng triệu viên gạch.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5">
              <span class="text-amber-400 font-bold">3. Trái tim ❤️ +</span>
              <span class="text-slate-300"><strong class="text-white">Mỹ</strong> — Trái tim khổng lồ bằng sao vạch (cờ Mỹ) đang đập thình thịch trên tượng Nữ thần Tự do.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5">
              <span class="text-amber-400 font-bold">4. Cánh buồm ⛵ +</span>
              <span class="text-slate-300"><strong class="text-white">Indonesia</strong> — Cánh buồm làm bằng lá chuối, thuyền chở hàng triệu hòn đảo nhỏ xíu trôi trên biển.</span>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-2.5">
              <span class="text-amber-400 font-bold">5. Móc câu 🪝 +</span>
              <span class="text-slate-300"><strong class="text-white">Pakistan</strong> — Móc câu bằng vàng câu được một quả bóng cricket khổng lồ từ sông Ấn Hà.</span>
            </div>
          </div>
        </div>

        <!-- BÀI TẬP -->
        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Thuộc 10 Móc Hình Dạng</p>
              <p>Viết 10 móc (1=Nến, 2=Thiên nga...) lên giấy. Nhắm mắt đọc 5 lần. Kiểm tra: ai đó nói số ngẫu nhiên, bạn trả lời hình ảnh trong 1 giây.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Nhớ 10 Việc Cần Làm Hôm Nay</p>
              <p>Viết to-do list 10 mục. Treo từng mục lên từng peg. Sau 3 giờ kiểm tra — đặc biệt thử hỏi "mục số 7 là gì?" để test truy xuất ngẫu nhiên.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 3: Nhớ 10 Tổng Thống Mỹ Đầu Tiên</p>
              <p>Washington, Adams, Jefferson, Madison, Monroe, Adams, Jackson, Van Buren, Harrison, Tyler. Treo mỗi người lên mỗi peg.</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <!-- KHOA HỌC -->
        <div class="bg-gradient-to-r from-teal-900/40 to-emerald-900/40 rounded-xl p-4 border border-teal-700/30">
          <h3 class="text-lg font-bold text-teal-300 mb-3 flex items-center gap-2">🧠 PHẦN 1: KHOA HỌC — ĐỊNH LUẬT MILLER</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Năm <strong class="text-white">1956</strong>, nhà tâm lý học <strong class="text-teal-300">George A. Miller</strong> (Đại học Princeton) công bố bài báo nổi tiếng nhất trong lịch sử tâm lý học nhận thức: <em>"The Magical Number Seven, Plus or Minus Two"</em> (Con số kỳ diệu 7 ± 2).
          </p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
            <p class="text-teal-400 font-bold mb-2">Phát hiện gây chấn động:</p>
            <p>Bộ nhớ làm việc (Working Memory / RAM não) chỉ chứa được khoảng <strong class="text-white">4 ± 1 đơn vị</strong> (nghiên cứu cập nhật của Cowan, 2001) cùng một lúc. Nếu cố nhồi thêm, thông tin cũ sẽ bị "đẩy ra" mất.</p>
            <p class="mt-2"><strong class="text-white">NHƯNG:</strong> Mỗi "đơn vị" có thể là 1 chữ cái, HOẶC 1 từ, HOẶC 1 cụm từ có nghĩa, HOẶC 1 khái niệm phức tạp. Chunking = gom nhiều mảnh nhỏ thành 1 "đơn vị lớn" có ý nghĩa.</p>
          </div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
            <div class="bg-red-900/20 rounded-lg p-3 border border-red-800/30">
              <p class="text-red-400 font-bold mb-1">❌ Không chunking (10 đơn vị):</p>
              <p class="text-slate-300 font-mono">0-9-1-2-3-4-5-6-7-8</p>
              <p class="text-red-400 text-xs mt-1">→ Quá tải! Não xử lý 10 mục riêng lẻ</p>
            </div>
            <div class="bg-emerald-900/20 rounded-lg p-3 border border-emerald-800/30">
              <p class="text-emerald-400 font-bold mb-1">✅ Có chunking (3 đơn vị):</p>
              <p class="text-slate-300 font-mono">[0912] - [345] - [678]</p>
              <p class="text-emerald-400 text-xs mt-1">→ Thoải mái! Não chỉ xử lý 3 cụm</p>
            </div>
          </div>
        </div>

        <!-- CÁC LOẠI CHUNKING -->
        <div class="bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">🔑 PHẦN 2: 4 KIỂU CHUNKING</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold mb-1">1. Chunking Theo Nhóm Có Nghĩa</p>
              <p class="text-slate-300">Gom theo ý nghĩa chung. VD: Học 20 từ vựng → gom thành 4 nhóm 5 từ theo chủ đề (Thực phẩm, Động vật, Màu sắc, Cảm xúc).</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold mb-1">2. Chunking Theo Pattern (Mẫu)</p>
              <p class="text-slate-300">Tìm quy luật ẩn. VD: Dãy số 149162536 trông ngẫu nhiên nhưng thực ra là 1-4-9-16-25-36 = bình phương của 1,2,3,4,5,6!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold mb-1">3. Chunking Phân Cấp (Hierarchical)</p>
              <p class="text-slate-300">Tạo cấu trúc cây. VD: Lịch sử VN → Thời kỳ (Bắc thuộc/Phong kiến/Cận đại) → Triều đại → Sự kiện. Mỗi nhánh = 1 chunk.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold mb-1">4. Chunking Chuyên Gia (Expert Chunking)</p>
              <p class="text-slate-300">Kỳ thủ cờ vua nhìn bàn cờ 5 giây rồi nhớ vị trí tất cả quân cờ. Người thường chỉ nhớ 4-5 quân. Bí mật: kỳ thủ nhìn thấy "thế cờ quen thuộc" (chunk), không nhìn từng quân riêng lẻ.</p>
            </div>
          </div>
        </div>

        <!-- ỨNG DỤNG -->
        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 3: ỨNG DỤNG THỰC TẾ</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Học Ngoại Ngữ</p>
              <p>Thay vì học 50 từ riêng lẻ → Gom thành 10 câu mẫu (mỗi câu chứa 5 từ mới). Mỗi câu = 1 chunk. Não chỉ xử lý 10 đơn vị thay vì 50!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Học Lịch Sử</p>
              <p>100 sự kiện → 10 giai đoạn lịch sử → Mỗi giai đoạn có 10 sự kiện. Nhớ khung 10 giai đoạn trước (10 chunk), rồi đi sâu từng giai đoạn.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Viết Chữ Viết Tắt (Acronym)</p>
              <p>7 màu cầu vồng: Đỏ-Cam-Vàng-Lục-Lam-Chàm-Tím → <strong class="text-white">"Đi Chơi Với Lão Lãm Chàng Trai"</strong> → 1 câu = 1 chunk!</p>
            </div>
          </div>
        </div>

        <!-- BÀI TẬP -->
        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Chunk Số Pi</p>
              <p>3.14159265358979 → Chunk thành [3.14] [159] [265] [358] [979]. Chỉ 5 chunk thay vì 15 chữ số!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Chunk Bảng Tuần Hoàn</p>
              <p>118 nguyên tố → 7 chu kỳ → Nhóm theo tính chất (Kim loại kiềm, Khí hiếm...). Vẽ sơ đồ cây phân cấp.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 3: Chunk + Loci + Major</p>
              <p>Dãy 20 số ngẫu nhiên → Chunk thành 10 cặp 2 số → Mã hóa Major → Đặt vào 10 trạm Loci. Combo 3 kỹ thuật!</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];


/**
 * NỘI DUNG TOÀN THƯ: 7 MÔ HÌNH SIÊU TRÍ TUỆ
 * Mỗi mô hình là một bài giảng masterclass đầy đủ
 */

window.GLOBAL_INTELLIGENCE_MODELS = [
  {
    id: 'feynman',
    title: 'Kỹ Thuật Feynman (Feynman Technique)',
    subtitle: 'Học sâu & truyền đạt siêu đơn giản',
    category: 'Làm Chủ Tri Thức',
    color: 'from-cyan-600 to-blue-600',
    icon: 'sparkles',
    desc: 'Phương pháp tối thượng của nhà vật lý đoạt giải Nobel giúp bạn hiểu thấu đáo bất kỳ chủ đề hóc búa nào.',
    content: `
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-cyan-900/40 to-blue-900/40 rounded-xl p-4 border border-cyan-700/30">
          <h3 class="text-lg font-bold text-cyan-300 mb-3 flex items-center gap-2">📜 PHẦN 1: RICHARD FEYNMAN LÀ AI?</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Richard Phillips Feynman (1918–1988)</strong> là nhà vật lý lý thuyết người Mỹ, đoạt <strong class="text-cyan-300">giải Nobel Vật lý 1965</strong> cho nghiên cứu điện động lực học lượng tử (QED). Ông được mệnh danh là "The Great Explainer" — người giải thích vĩ đại nhất — vì khả năng biến những lý thuyết vật lý phức tạp nhất thành ngôn ngữ ai cũng hiểu.
          </p>
          <p class="text-slate-300 leading-relaxed mb-3">
            Feynman không chỉ là nhà khoa học thiên tài mà còn là nghệ sĩ, nhạc công bongo, chuyên gia bẻ khóa két sắt, và nhà phiêu lưu. Ông tham gia Dự án Manhattan (chế tạo bom nguyên tử) khi mới 24 tuổi.
          </p>
          <blockquote class="italic border-l-4 border-cyan-400 pl-4 text-slate-300 bg-slate-900/40 rounded-r-lg p-3">
            "Nếu bạn không thể giải thích điều đó cho một đứa trẻ 10 tuổi hiểu, thì chính bạn cũng chưa thực sự hiểu nó." — Richard Feynman
          </blockquote>
        </div>

        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">🎯 PHẦN 2: QUY TRÌNH 4 BƯỚC FEYNMAN</h3>
          <div class="space-y-3">
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">1</span>
                <p class="text-emerald-400 font-bold text-base">CHỌN CHỦ ĐỀ</p>
              </div>
              <p class="text-slate-300 text-sm">Viết tên khái niệm bạn muốn hiểu lên đầu một trang giấy trắng. Ví dụ: "Lạm phát", "Quang hợp", "Blockchain", "Triết học Khắc kỷ".</p>
              <p class="text-slate-400 text-xs mt-2">💡 Tip: Chọn đề tài bạn NGHĨ bạn đã hiểu — Feynman Technique sẽ phơi bày những lỗ hổng ẩn.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">2</span>
                <p class="text-emerald-400 font-bold text-base">GIẢNG BÀI CHO ĐỨA TRẺ 10 TUỔI</p>
              </div>
              <p class="text-slate-300 text-sm mb-2">Bên dưới tiêu đề, viết lời giải thích bằng ngôn ngữ ĐƠN GIẢN NHẤT CÓ THỂ:</p>
              <ul class="text-slate-300 text-sm space-y-1">
                <li>• KHÔNG dùng thuật ngữ chuyên ngành (jargon)</li>
                <li>• KHÔNG copy paste từ sách giáo khoa</li>
                <li>• CHỈ dùng từ ngữ hàng ngày và ví dụ đời thường</li>
                <li>• Dùng phép so sánh (analogy): "Lạm phát giống như khi tất cả mọi người trong lớp đều có nhiều kẹo — mỗi viên kẹo trở nên kém giá trị hơn"</li>
              </ul>
              <p class="text-slate-400 text-xs mt-2">💡 Tip: Nói to thành lời hoặc giảng cho gấu bông / con mèo / bức tường. Nếu bạn ấp úng = bạn chưa hiểu!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">3</span>
                <p class="text-emerald-400 font-bold text-base">XÁC ĐỊNH LỖ HỔNG KIẾN THỨC</p>
              </div>
              <p class="text-slate-300 text-sm mb-2">Khi bạn bị nghẽn ở chỗ nào — viết không trôi, dùng thuật ngữ chuyên môn vì không biết diễn đạt đơn giản — ĐÓ CHÍNH LÀ LỖ HỔNG.</p>
              <p class="text-slate-300 text-sm">Đánh dấu lỗ hổng bằng bút đỏ → Quay lại tài liệu gốc (sách, video, bài giảng) → Đọc lại CHỈ phần đó → Thử giải thích lại cho đến khi trôi chảy.</p>
              <p class="text-slate-400 text-xs mt-2">💡 Đây là bước quan trọng nhất! Hầu hết mọi người bỏ qua bước này và tự lừa bản thân rằng mình đã hiểu.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-lg">4</span>
                <p class="text-emerald-400 font-bold text-base">TINH GỌN & ẨN DỤ HÓA</p>
              </div>
              <p class="text-slate-300 text-sm mb-2">Đơn giản hóa hơn nữa. Rút gọn toàn bộ giải thích thành 1-2 câu cốt lõi. Tạo ẩn dụ (analogy) hoặc hình ảnh sinh động:</p>
              <div class="bg-slate-900/60 rounded-lg p-3 text-sm">
                <p class="text-cyan-400 font-semibold mb-1">Ví dụ Ẩn dụ hóa:</p>
                <p class="text-slate-300"><strong>"DNA"</strong> → "DNA là cuốn sách hướng dẫn xây nhà (cơ thể). Mỗi chương (gene) chứa hướng dẫn xây một phòng (protein). Toàn bộ cuốn sách có 20.000 chương."</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 3: VÍ DỤ THỰC HÀNH — GIẢI THÍCH "BLOCKCHAIN"</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Bước 1: Chủ đề = Blockchain</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Bước 2: Giải thích cho trẻ 10 tuổi</p>
              <p>"Tưởng tượng cả lớp có một cuốn sổ ghi chép ai cho ai bao nhiêu kẹo. Nhưng thay vì cô giáo giữ sổ (ngân hàng), MỖI BẠN đều có một bản sao GIỐNG HỆT NHAU. Khi Minh cho Lan 3 viên kẹo, TẤT CẢ 30 bạn đều ghi vào sổ của mình cùng lúc. Nếu ai đó muốn gian lận (sửa sổ), thì 29 bạn còn lại sẽ nói: 'Sai rồi! Sổ của tao ghi khác!' Không ai lừa được vì ai cũng có bản sao."</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Bước 3: Lỗ hổng</p>
              <p class="text-red-400">"Nhưng khoan... làm sao 30 bạn ghi cùng lúc được? Cơ chế đồng thuận (consensus) hoạt động thế nào?" → Quay lại đọc về Proof of Work / Proof of Stake.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">Bước 4: Ẩn dụ tinh gọn</p>
              <p class="text-emerald-400">"Blockchain = Cuốn sổ kế toán mà AI CŨNG CÓ BẢN SAO, KHÔNG AI XÓA ĐƯỢC, và tất cả phải ĐỒNG Ý trước khi ghi thêm dòng mới."</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Feynman một khái niệm triết học</p>
              <p>Chọn 1 trụ cột triết học trong tab Triết Học (ví dụ: "Khắc kỷ"). Giải thích cho đứa trẻ 10 tuổi. Viết ra giấy hoặc ghi âm.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Feynman một kỹ năng bạn đang học</p>
              <p>Nấu ăn, lập trình, đầu tư... Giải thích 1 khái niệm cốt lõi cho "đứa trẻ 10 tuổi". Tìm 3 lỗ hổng.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 3: Dạy lại cho người khác</p>
              <p>Feynman nói: "Cách tốt nhất để học là dạy." Chọn 1 người bạn/gia đình và giảng bài cho họ. Nếu họ hiểu = bạn đã master!</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-purple-900/40 to-pink-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">📜 PHẦN 1: NGUỒN GỐC — ARISTOTLE (384-322 TCN)</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Aristotle</strong> — triết gia Hy Lạp vĩ đại nhất — đã định nghĩa First Principles (Nguyên lý đầu tiên) là: <em class="text-purple-300">"Nền tảng đầu tiên mà từ đó một sự vật được biết đến"</em> (Metaphysics, 1013a). Đó là những sự thật CƠ BẢN NHẤT, KHÔNG THỂ phân rã thêm, KHÔNG THỂ chứng minh từ sự thật nào khác.
          </p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm mb-3">
            <p class="text-slate-300"><strong class="text-white">So sánh hai cách tư duy:</strong></p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
              <div class="bg-red-900/20 rounded-lg p-3 border border-red-800/30">
                <p class="text-red-400 font-bold mb-1">❌ Tư duy Loại suy (Analogy)</p>
                <p class="text-slate-400">"Người khác làm vậy, tôi cũng làm vậy."</p>
                <p class="text-slate-400">"Trước giờ luôn như thế."</p>
                <p class="text-slate-400">"Mọi người đều nói..."</p>
                <p class="text-red-400 text-xs mt-1">→ Chỉ tạo ra cải tiến 10%</p>
              </div>
              <div class="bg-emerald-900/20 rounded-lg p-3 border border-emerald-800/30">
                <p class="text-emerald-400 font-bold mb-1">✅ Tư duy Nguyên lý Đầu tiên</p>
                <p class="text-slate-400">"Sự thật cơ bản nhất là gì?"</p>
                <p class="text-slate-400">"Bỏ hết giả định, còn lại gì?"</p>
                <p class="text-slate-400">"Từ gốc rễ, xây lại từ đầu."</p>
                <p class="text-emerald-400 text-xs mt-1">→ Tạo ra đột phá 10x</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">🎯 PHẦN 2: QUY TRÌNH 5 BƯỚC</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 1: Xác định vấn đề/giả định</p>
              <p class="text-slate-300">Viết ra tất cả những điều "ai cũng nghĩ là đúng" về vấn đề. Ví dụ: "Xe điện phải đắt vì pin đắt."</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 2: Phân rã (Deconstruct)</p>
              <p class="text-slate-300">Tách vấn đề thành các thành phần nhỏ nhất. "Pin gồm gì? Cobalt, Nickel, Lithium, bao bì nhôm, chất kết dính polyme..."</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 3: Hỏi "5 Tại Sao?" (5 Whys)</p>
              <p class="text-slate-300">Tại sao đắt? → Vì nhà cung cấp bán đắt. Tại sao? → Vì ít người sản xuất. Tại sao? → Vì công nghệ cũ. Tại sao? → Vì chưa ai đầu tư R&D... → Đây mới là gốc rễ!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 4: Kiểm chứng sự thật cơ bản</p>
              <p class="text-slate-300">Kiểm tra giá nguyên liệu thô trên sàn giao dịch. Cobalt = X$/kg, Nickel = Y$/kg. Tổng nguyên liệu = Z$. So với giá bán = 10Z$. Vậy 90% là chi phí trung gian!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 5: Xây dựng lại từ gốc</p>
              <p class="text-slate-300">Bỏ qua toàn bộ cách làm cũ. Thiết kế giải pháp mới DỰA TRÊN sự thật cơ bản. Musk: "Mua nguyên liệu thô và tự sản xuất pin" → Tesla Gigafactory!</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 3: 3 CÂU CHUYỆN KINH ĐIỂN</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">🚀 SpaceX — Tên lửa giá rẻ</p>
              <p>Giả định cũ: "Tên lửa phải tốn 65 triệu USD" → First Principles: Nguyên liệu thô chỉ tốn 2% → Tự sản xuất → SpaceX giảm giá 90% → Tái sử dụng tên lửa (điều "bất khả thi").</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">📱 iPhone — Steve Jobs</p>
              <p>Giả định cũ: "Điện thoại phải có bàn phím vật lý" → First Principles: "Người dùng cần TƯƠNG TÁC với máy, không cần phím cố định" → Màn hình cảm ứng → Thay đổi thế giới.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">🏠 Áp dụng vào đời thường</p>
              <p>Giả định: "Muốn giàu phải đi làm văn phòng 8h/ngày" → First Principles: "Tiền đến từ giá trị bạn tạo ra, không từ thời gian ngồi" → Xây hệ thống tạo giá trị tự động (sản phẩm số, đầu tư, kinh doanh).</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP TỰ LUYỆN</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Phân rã một niềm tin</p>
              <p>Viết ra 1 điều bạn tin là đúng (VD: "Phải tốt nghiệp đại học mới thành công"). Hỏi 5 Tại sao. Tìm sự thật cơ bản.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Phân rã chi phí</p>
              <p>Chọn 1 sản phẩm bạn mua hàng ngày (cà phê, bữa ăn). Phân rã thành nguyên liệu gốc. Tính giá thực.</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-rose-900/40 to-amber-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">📜 PHẦN 1: NGUỒN GỐC & TRIẾT LÝ</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Tư duy đảo ngược bắt nguồn từ nhà toán học Đức <strong class="text-white">Carl Gustav Jacob Jacobi (1804-1851)</strong>, nổi tiếng với câu nói: <em class="text-rose-300">"Invert, always invert"</em> (Đảo ngược, luôn luôn đảo ngược). Jacobi phát hiện rằng nhiều bài toán khó nếu giải xuôi thì bế tắc, nhưng nếu ĐẢO NGƯỢC câu hỏi thì đáp án hiện ra rõ ràng.
          </p>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Charlie Munger</strong> — phó chủ tịch tập đoàn Berkshire Hathaway, cánh tay phải của Warren Buffett, đã biến nguyên lý toán học này thành công cụ tư duy hàng ngày:
          </p>
          <blockquote class="italic border-l-4 border-rose-400 pl-4 text-slate-300 bg-slate-900/40 rounded-r-lg p-3">
            "Tất cả những gì tôi muốn biết là tôi sẽ chết ở đâu, để tôi không bao giờ đến đó." — Charlie Munger
          </blockquote>
        </div>

        <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🧠 PHẦN 2: TẠI SAO ĐẢO NGƯỢC HIỆU QUẢ?</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">1. Thiên kiến Tích cực (Positivity Bias)</p>
              <p>Con người có xu hướng tự nhiên chỉ nghĩ về điều tốt đẹp. Đảo ngược buộc não xem xét cả mặt tiêu cực — nơi thường ẩn chứa rủi ro lớn nhất.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">2. Bất đối xứng Thất bại - Thành công</p>
              <p>Thường dễ liệt kê "cách thất bại" hơn "cách thành công". Có vô số cách để nổi bật, nhưng chỉ vài điều cốt lõi giúp thành công.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">3. Pre-mortem Analysis</p>
              <p>Thay vì phân tích SAU khi thất bại (postmortem), hãy tưởng tượng TRƯỚC rằng dự án đã thất bại hoàn toàn, rồi tìm nguyên nhân. Nghiên cứu cho thấy pre-mortem giúp dự đoán rủi ro chính xác hơn 30%.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">🎯 PHẦN 3: QUY TRÌNH ÁP DỤNG</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 1: Xác định mục tiêu xuôi</p>
              <p class="text-slate-300">"Tôi muốn có sức khỏe tốt" / "Tôi muốn công ty thành công" / "Tôi muốn học giỏi"</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 2: ĐẢO NGƯỢC câu hỏi</p>
              <p class="text-slate-300">"Nếu tôi muốn CHẮC CHẮN bị bệnh tật, tôi sẽ làm gì?" / "Nếu muốn công ty PHÁ SẢN, tôi nên làm gì?" / "Nếu muốn THI TRƯỢT, tôi nên sống thế nào?"</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 3: Liệt kê TOÀN BỘ cách thất bại</p>
              <p class="text-slate-300">VD để chắc chắn bệnh: Ăn nhiều đường, không tập thể dục, thức khuya, hút thuốc, uống rượu, stress liên tục, không khám sức khỏe...</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold">Bước 4: TRÁNH XA tất cả những điều trên</p>
              <p class="text-slate-300">Chỉ cần triệt tiêu danh sách thất bại → Bạn tự động đi đúng hướng mà không cần tìm "công thức thành công" phức tạp.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 4: 3 VÍ DỤ THỰC TẾ</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">📚 Học Tập</p>
              <p><strong class="text-white">Xuôi:</strong> "Làm sao để học giỏi?" → Khó trả lời.</p>
              <p><strong class="text-white">Ngược:</strong> "Làm sao để CHẮC CHẮN thi trượt?" → Dễ: Không đọc bài, lướt TikTok khi học, nhồi nhét đêm trước thi, không làm bài tập, ngồi cuối lớp nói chuyện.</p>
              <p class="text-emerald-400 mt-1">→ Chỉ cần TRÁNH 5 điều trên = Tự động học tốt hơn 90% người.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">💼 Sự Nghiệp</p>
              <p><strong class="text-white">Ngược:</strong> "Làm gì để bị sa thải?" → Đi trễ, không hoàn thành deadline, nói xấu đồng nghiệp, không học kỹ năng mới, tránh trách nhiệm.</p>
              <p class="text-emerald-400 mt-1">→ Tránh xa = Tự động thăng tiến.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">💰 Đầu Tư (Buffett & Munger)</p>
              <p><strong class="text-white">Ngược:</strong> "Làm gì để MẤT SẠCH tiền?" → All-in 1 cổ phiếu, dùng đòn bẩy cao, theo đám đông FOMO, không nghiên cứu, panic sell khi giảm.</p>
              <p class="text-emerald-400 mt-1">→ Quy tắc 1 Buffett: "Đừng bao giờ mất tiền." Quy tắc 2: "Đừng quên quy tắc 1."</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 5: BÀI TẬP</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập: Pre-mortem Cuộc Đời</p>
              <p>Viết ra: "10 năm nữa, cuộc đời tôi hoàn toàn thất bại. Tại sao?" Liệt kê ít nhất 10 nguyên nhân. Rồi kiểm tra: bạn đang phạm bao nhiêu lỗi trong danh sách?</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">📜 PHẦN 1: TẠI SAO CẦN BỘ NÃO THỨ HAI?</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Tiago Forte</strong> — nhà tư vấn năng suất người Mỹ — đã phát triển khái niệm "Building a Second Brain" (BASB) dựa trên nghiên cứu của David Allen (Getting Things Done) và Niklas Luhmann (hệ thống Zettelkasten).
          </p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
            <p class="text-emerald-400 font-bold mb-2">Vấn đề của thời đại thông tin:</p>
            <p>• Mỗi ngày chúng ta tiếp nhận <strong class="text-white">34 GB dữ liệu</strong> (tương đương đọc 174 tờ báo).</p>
            <p>• Bộ nhớ ngắn hạn chỉ chứa <strong class="text-white">4 ± 1 đơn vị</strong> cùng lúc.</p>
            <p>• 90% những gì bạn đọc/xem sẽ bị quên trong vòng 48 giờ.</p>
            <p class="mt-2 text-white font-semibold">→ Giải pháp: Dùng hệ thống SỐ bên ngoài não để lưu trữ, tổ chức và truy xuất tri thức.</p>
          </div>
          <blockquote class="italic border-l-4 border-emerald-400 pl-4 text-slate-300 bg-slate-900/40 rounded-r-lg p-3">
            "Bộ não sinh học được thiết kế để TẠO RA ý tưởng, không phải để LƯU TRỮ chúng." — David Allen
          </blockquote>
        </div>

        <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🔑 PHẦN 2: KHUNG C.O.D.E — 4 BƯỚC XÂY DỰNG</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">C</span>
                <p class="text-blue-400 font-bold text-base">CAPTURE — Thu thập</p>
              </div>
              <p class="text-slate-300">Lưu lại MỌI THỨ tạo cảm hứng: trích dẫn hay, ý tưởng bất chợt, bài viết quan trọng, lời khuyên từ mentor, đoạn podcast thú vị.</p>
              <p class="text-slate-400 text-xs mt-2">🛠️ Công cụ: Notion, Obsidian, Apple Notes, Google Keep, Evernote.</p>
              <p class="text-amber-400 text-xs mt-1">💡 Quy tắc: Chỉ lưu những gì THỰC SỰ cộng hưởng với bạn (resonance). Không lưu bừa bãi!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">O</span>
                <p class="text-blue-400 font-bold text-base">ORGANIZE — Tổ chức theo P.A.R.A</p>
              </div>
              <p class="text-slate-300 mb-2">Phân loại mọi ghi chú vào 4 thư mục:</p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <div class="bg-slate-800/60 rounded-lg p-2">
                  <p class="text-purple-400 font-bold">📁 Projects (Dự án)</p>
                  <p class="text-slate-400 text-xs">Có deadline, có kết quả cụ thể. VD: "Viết báo cáo Q4", "Học React trong 30 ngày"</p>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-2">
                  <p class="text-blue-400 font-bold">📁 Areas (Lĩnh vực)</p>
                  <p class="text-slate-400 text-xs">Trách nhiệm dài hạn, không có deadline. VD: "Sức khỏe", "Tài chính", "Phát triển bản thân"</p>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-2">
                  <p class="text-emerald-400 font-bold">📁 Resources (Tài nguyên)</p>
                  <p class="text-slate-400 text-xs">Chủ đề bạn quan tâm. VD: "Triết học", "AI/ML", "Nấu ăn Nhật Bản"</p>
                </div>
                <div class="bg-slate-800/60 rounded-lg p-2">
                  <p class="text-slate-400 font-bold">📁 Archives (Lưu trữ)</p>
                  <p class="text-slate-400 text-xs">Dự án đã xong, lĩnh vực không còn hoạt động. Không xóa, chỉ lưu trữ.</p>
                </div>
              </div>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">D</span>
                <p class="text-blue-400 font-bold text-base">DISTILL — Chắt lọc</p>
              </div>
              <p class="text-slate-300 mb-2">Áp dụng "Progressive Summarization" (Tóm tắt lũy tiến):</p>
              <p class="text-slate-400 text-xs">Lớp 1: Ghi chú gốc (highlight) → Lớp 2: In đậm điểm chính → Lớp 3: Highlight riêng cốt lõi → Lớp 4: Viết tóm tắt 1-2 câu bằng lời của bạn.</p>
              <p class="text-amber-400 text-xs mt-2">💡 Mỗi lần mở lại ghi chú = 1 lớp chắt lọc. Sau 3-4 lần, bạn thấy ngay ý chính trong 5 giây.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">E</span>
                <p class="text-blue-400 font-bold text-base">EXPRESS — Thể hiện</p>
              </div>
              <p class="text-slate-300">Biến ghi chú thành SẢN PHẨM cụ thể: bài viết, bài thuyết trình, video, dự án kinh doanh, bài giảng. Ghi chú không được sử dụng = ghi chú chết.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 3: BÀI TẬP</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Tạo 4 thư mục P.A.R.A</p>
              <p>Mở ứng dụng ghi chú (Notion/Obsidian/Google Keep). Tạo 4 thư mục: Projects, Areas, Resources, Archives. Di chuyển tất cả ghi chú hiện có vào đúng thư mục.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Capture 10 ý tưởng trong tuần</p>
              <p>Mỗi ngày lưu ít nhất 1-2 ý tưởng/trích dẫn/insight vào hệ thống. Cuối tuần review: điều nào CÓ ÍCH NHẤT?</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-indigo-900/40 to-purple-900/40 rounded-xl p-4 border border-indigo-700/30">
          <h3 class="text-lg font-bold text-indigo-300 mb-3 flex items-center gap-2">📜 PHẦN 1: NGUỒN GỐC — ĐẠI TÁ JOHN BOYD</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Đại tá John Richard Boyd (1927-1997)</strong> — phi công chiến đấu huyền thoại trong Chiến tranh Triều Tiên, người được mệnh danh là <em class="text-indigo-300">"Forty Second Boyd"</em> vì ông cam kết đánh bại BẤT KỲ phi công nào trong vòng 40 giây không chiến.
          </p>
          <p class="text-slate-300 leading-relaxed mb-3">
            Boyd đã phân tích hàng nghìn trận không chiến và phát hiện: <strong class="text-white">Phi công chiến thắng KHÔNG phải người bay nhanh hơn hay có máy bay tốt hơn, mà là người RA QUYẾT ĐỊNH NHANH HƠN.</strong> Ai xoay vòng Quan sát→Định hướng→Quyết định→Hành động nhanh hơn sẽ kiểm soát cuộc chiến.
          </p>
          <p class="text-slate-300 leading-relaxed">
            OODA Loop sau đó được áp dụng rộng rãi trong chiến lược quân sự, kinh doanh, thể thao, và cuộc sống hàng ngày.
          </p>
        </div>

        <div class="bg-gradient-to-r from-blue-900/40 to-cyan-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🎯 PHẦN 2: 4 GIAI ĐOẠN CHI TIẾT</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-lg">O</span>
                <p class="text-blue-400 font-bold text-base">OBSERVE — Quan sát</p>
              </div>
              <p class="text-slate-300 mb-2">Thu thập dữ liệu KHÁCH QUAN từ môi trường mà KHÔNG có định kiến. Dùng tất cả các giác quan. Không phán xét, chỉ ghi nhận.</p>
              <p class="text-slate-400 text-xs">VD kinh doanh: Đọc số liệu bán hàng, lắng nghe phản hồi khách, theo dõi đối thủ, đo lường KPI.</p>
              <p class="text-amber-400 text-xs mt-1">⚠️ Sai lầm phổ biến: Chỉ quan sát những gì XÁC NHẬN niềm tin hiện tại (Confirmation Bias).</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-purple-600 text-white font-bold flex items-center justify-center text-lg">O</span>
                <p class="text-purple-400 font-bold text-base">ORIENT — Định hướng (QUAN TRỌNG NHẤT!)</p>
              </div>
              <p class="text-slate-300 mb-2">Đây là BỘ LỌC QUAN TRỌNG NHẤT — nơi bạn phân tích dữ liệu thông qua:</p>
              <ul class="text-slate-300 space-y-1">
                <li>• Kinh nghiệm quá khứ</li>
                <li>• Mô hình tư duy (mental models)</li>
                <li>• Giá trị văn hóa và cá nhân</li>
                <li>• Kiến thức chuyên môn</li>
                <li>• Khả năng phân tích & tổng hợp</li>
              </ul>
              <p class="text-amber-400 text-xs mt-2">⭐ Boyd nói: "Orient là giai đoạn quyết định — bạn thắng hay thua phụ thuộc vào BỘ LỌC của bạn tốt đến đâu."</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-lg">D</span>
                <p class="text-indigo-400 font-bold text-base">DECIDE — Quyết định</p>
              </div>
              <p class="text-slate-300 mb-2">Chọn phương án hành động TỐT NHẤT có thể với thông tin hiện có. Không cần hoàn hảo — chỉ cần đủ tốt và NHANH.</p>
              <p class="text-slate-400 text-xs">Nguyên tắc 70%: Nếu bạn có 70% thông tin cần thiết → Quyết định ngay. Chờ 100% = chậm hơn đối thủ.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-4">
              <div class="flex items-center gap-3 mb-2">
                <span class="w-10 h-10 rounded-full bg-rose-600 text-white font-bold flex items-center justify-center text-lg">A</span>
                <p class="text-rose-400 font-bold text-base">ACT — Hành động</p>
              </div>
              <p class="text-slate-300 mb-2">Triển khai NGAY LẬP TỨC. Theo dõi kết quả. Kết quả trở thành đầu vào cho vòng Observe tiếp theo.</p>
              <p class="text-slate-400 text-xs">Vòng lặp KHÔNG BAO GIỜ dừng. Mỗi hành động tạo ra phản hồi mới → Quan sát mới → Định hướng mới → Quyết định mới...</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-amber-900/40 to-orange-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">💡 PHẦN 3: ỨNG DỤNG THỰC TẾ</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">🏀 Thể thao</p>
              <p>Cầu thủ bóng rổ: Observe (đối thủ dàn hàng phòng thủ) → Orient (họ yếu bên trái) → Decide (đột phá bên trái) → Act (dribbel + layup) → Vòng mới trong 0.5 giây!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">📈 Startup</p>
              <p>Observe (users complaint) → Orient (phân tích data + so sánh đối thủ) → Decide (pivot tính năng X) → Act (ship MVP trong 1 tuần) → Measure → Lặp lại.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-amber-400 font-bold mb-1">📚 Học tập</p>
              <p>Observe (kết quả bài kiểm tra) → Orient (yếu ở phần nào?) → Decide (tập trung ôn 3 chương yếu nhất) → Act (ôn 2h/ngày) → Test lại → Lặp vòng.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập: OODA Journal</p>
              <p>Mỗi tối, viết vào nhật ký: 1 tình huống hôm nay bạn đã áp dụng OODA (hoặc nên áp dụng). Phân tích 4 giai đoạn. Bạn bị nghẽn ở đâu?</p>
            </div>
          </div>
        </div>
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
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-amber-900/40 to-yellow-900/40 rounded-xl p-4 border border-amber-700/30">
          <h3 class="text-lg font-bold text-amber-300 mb-3 flex items-center gap-2">📜 PHẦN 1: CAL NEWPORT & DEEP WORK</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            <strong class="text-white">Cal Newport</strong> — Giáo sư Khoa học Máy tính tại Georgetown University — đã viết cuốn sách đột phá <em class="text-amber-300">"Deep Work: Rules for Focused Success in a Distracted World"</em> (2016), định nghĩa:
          </p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm mb-3">
            <p class="text-amber-400 font-bold mb-2">Hai loại công việc:</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div class="bg-emerald-900/20 rounded-lg p-3 border border-emerald-800/30">
                <p class="text-emerald-400 font-bold">🎯 Deep Work (Việc Sâu)</p>
                <p class="text-slate-300 text-xs">Hoạt động nhận thức đòi hỏi tập trung TUYỆT ĐỐI, không gián đoạn, tạo ra giá trị MỚI khó thay thế.</p>
                <p class="text-slate-400 text-xs mt-1">VD: Viết sách, nghiên cứu, lập trình, thiết kế, học kỹ năng mới</p>
              </div>
              <div class="bg-red-900/20 rounded-lg p-3 border border-red-800/30">
                <p class="text-red-400 font-bold">📱 Shallow Work (Việc Nông)</p>
                <p class="text-slate-300 text-xs">Nhiệm vụ hậu cần không đòi hỏi nhận thức cao, dễ bị sao chép, thường xuyên bị gián đoạn.</p>
                <p class="text-slate-400 text-xs mt-1">VD: Check email, họp, trả lời tin nhắn, lướt mạng xã hội</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🧠 PHẦN 2: KHOA HỌC THẦN KINH</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">Attention Residue (Dư lượng Chú ý)</p>
              <p>Nghiên cứu của Sophie Leroy (2009): Mỗi lần chuyển đổi tác vụ (xem tin nhắn 3 giây), não mất <strong class="text-white">15-23 phút</strong> để quay lại trạng thái tập trung sâu. Liếc điện thoại 10 lần/ngày = mất 2.5-3.8 giờ!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">Myelin hóa (Myelination)</p>
              <p>Khi tập trung sâu lặp đi lặp lại, não bọc lớp myelin quanh sợi thần kinh liên quan. Myelin giúp tín hiệu truyền nhanh hơn 100 lần. Đây là cơ chế sinh học của "luyện tập có chủ đích".</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">Trạng thái Dòng Chảy (Flow State)</p>
              <p>Mihaly Csikszentmihalyi phát hiện: Khi bạn tập trung sâu vào nhiệm vụ VỪA ĐỦ KHÓ (không quá dễ → chán, không quá khó → lo lắng), não tiết ra cocktail hormone: dopamine + norepinephrine + endorphins + serotonin + anandamide. Kết quả: năng suất tăng <strong class="text-white">500%</strong> (McKinsey).</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-emerald-900/40 to-teal-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">🎯 PHẦN 3: 4 QUY TẮC DEEP WORK</h3>
          <div class="space-y-3 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Quy tắc 1: Lập Nghi Thức Không Gian</p>
              <p class="text-slate-300">Tạo môi trường BẮT BUỘC tập trung: Để điện thoại SANG PHÒNG KHÁC (không phải lật úp — phải ĐI KHỎI!). Đeo tai nghe chống ồn. Dọn bàn trống trơn. Đóng tất cả tab trình duyệt. Tắt WiFi nếu không cần.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Quy tắc 2: Khối Thời Gian 90 Phút (Ultradian Rhythm)</p>
              <p class="text-slate-300 mb-1">Cơ thể vận hành theo chu kỳ 90 phút. Làm việc sâu 90 phút → Nghỉ 20 phút (đi bộ, uống nước, nhắm mắt, KHÔNG lướt điện thoại).</p>
              <p class="text-amber-400 text-xs">Lịch trình mẫu: 6:00-7:30 (Deep 1) → 7:50-9:20 (Deep 2) → 9:40-11:10 (Deep 3) = 4.5 giờ Deep Work/ngày = TOP 1% thế giới!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Quy tắc 3: Theo Dõi Bảng Điểm</p>
              <p class="text-slate-300">Mỗi ngày ghi lại: "Hôm nay tôi đạt được ____ giờ Deep Work." Dán bảng điểm lên tường. Mục tiêu: 3-4 giờ/ngày làm việc, 1-2 giờ/ngày khi học.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-emerald-400 font-bold mb-1">Quy tắc 4: Tập Làm Quen Với Nhàm Chán</p>
              <p class="text-slate-300">Mỗi khi xếp hàng, chờ đợi, đi bộ — ĐỪNG rút điện thoại. Để não "nhàm chán". Não cần khoảng lặng để xử lý thông tin và sáng tạo. Điện thoại phá hủy khả năng chịu đựng nhàm chán của bạn.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Thử Thách 90 Phút</p>
              <p>Ngày mai, dành 90 phút KHÔNG điện thoại, KHÔNG Internet, CHỈ tập trung vào 1 nhiệm vụ quan trọng. Ghi lại cảm giác và kết quả.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Audit Thời Gian 1 Ngày</p>
              <p>Ghi lại MỌI THỨ bạn làm trong 1 ngày theo từng khối 30 phút. Phân loại Deep vs Shallow. Tính tỷ lệ. Hầu hết mọi người sốc khi thấy 80%+ là Shallow!</p>
            </div>
          </div>
        </div>
      </div>
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
      <div class="space-y-5">
        <div class="bg-gradient-to-r from-emerald-900/40 to-green-900/40 rounded-xl p-4 border border-emerald-700/30">
          <h3 class="text-lg font-bold text-emerald-300 mb-3 flex items-center gap-2">📜 PHẦN 1: NGUỒN GỐC — VILFREDO PARETO</h3>
          <p class="text-slate-300 leading-relaxed mb-3">
            Năm <strong class="text-white">1896</strong>, nhà kinh tế học người Ý <strong class="text-emerald-300">Vilfredo Pareto (1848-1923)</strong> phát hiện rằng <strong class="text-white">80% đất đai ở Ý thuộc sở hữu của 20% dân số</strong>. Ông tiếp tục nghiên cứu và phát hiện quy luật tương tự xuất hiện ở KHẮP NƠI trong tự nhiên và xã hội.
          </p>
          <div class="bg-slate-900/40 rounded-lg p-3 text-sm text-slate-300 mb-3">
            <p class="text-emerald-400 font-bold mb-2">Quy luật 80/20 xuất hiện ở đâu?</p>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
              <p>📊 80% doanh thu đến từ 20% khách hàng</p>
              <p>📊 80% bug đến từ 20% code</p>
              <p>📊 80% khiếu nại đến từ 20% sản phẩm</p>
              <p>📊 80% từ vựng giao tiếp = 20% tổng từ</p>
              <p>📊 80% kết quả đến từ 20% nỗ lực</p>
              <p>📊 80% tài sản thuộc 20% dân số</p>
            </div>
          </div>
          <p class="text-slate-300 leading-relaxed">
            Lưu ý: Tỷ lệ KHÔNG PHẢI luôn chính xác 80/20 — có thể là 90/10, 70/30, thậm chí 99/1. Điểm cốt lõi: <em class="text-emerald-300">Phân phối KHÔNG đều — một phần nhỏ nguyên nhân tạo ra phần lớn kết quả.</em>
          </p>
        </div>

        <div class="bg-gradient-to-r from-blue-900/40 to-indigo-900/40 rounded-xl p-4 border border-blue-700/30">
          <h3 class="text-lg font-bold text-blue-300 mb-3 flex items-center gap-2">🎯 PHẦN 2: ÁP DỤNG VÀO HỌC TẬP</h3>
          <div class="space-y-3 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">📚 Học Ngoại Ngữ</p>
              <p>Tiếng Anh có ~170.000 từ trong từ điển. Nhưng <strong class="text-white">1.000 từ phổ biến nhất</strong> chiếm 85% mọi cuộc hội thoại hàng ngày. Học 1.000 từ này TRƯỚC = giao tiếp được 85% tình huống chỉ với 0.6% tổng từ!</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">💻 Học Lập Trình</p>
              <p>80% ứng dụng sử dụng 20% tính năng ngôn ngữ. Học if/else, loop, function, array/object TRƯỚC. Đừng lao vào design patterns, generics, metaprogramming ngay.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">🎵 Học Nhạc Cụ</p>
              <p>80% bài hát phổ biến sử dụng 4-5 hợp âm cơ bản (C, G, Am, F, Em). Thuộc 5 hợp âm = chơi được hầu hết bài hát.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-blue-400 font-bold mb-1">📖 Đọc Sách</p>
              <p>80% giá trị của một cuốn sách nằm trong 20% nội dung cốt lõi. Đọc mục lục → Đọc chương quan trọng → Đọc đoạn key → Ghi chú 1 trang tóm tắt.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-purple-900/40 to-violet-900/40 rounded-xl p-4 border border-purple-700/30">
          <h3 class="text-lg font-bold text-purple-300 mb-3 flex items-center gap-2">⚡ PHẦN 3: QUY TRÌNH TÌM 20% ĐÒN BẨY</h3>
          <div class="space-y-2 text-sm">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Bước 1: Liệt kê TẤT CẢ hoạt động/đầu vào</p>
              <p class="text-slate-300">Viết ra mọi thứ bạn làm trong 1 tuần (học tập, công việc, quan hệ, giải trí...).</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Bước 2: Đo lường KẾT QUẢ từng hoạt động</p>
              <p class="text-slate-300">Mỗi hoạt động tạo ra kết quả gì? Xếp hạng theo tác động.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Bước 3: Xác định TOP 20%</p>
              <p class="text-slate-300">20% hoạt động nào tạo ra 80% giá trị? Đánh dấu chúng = ĐÒN BẨY.</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-purple-400 font-bold">Bước 4: TẬP TRUNG vào đòn bẩy, LOẠI BỎ phần còn lại</p>
              <p class="text-slate-300">Dồn thời gian và năng lượng vào 20% đòn bẩy. Giảm thiểu hoặc outsource 80% còn lại.</p>
            </div>
          </div>
        </div>

        <div class="bg-gradient-to-r from-rose-900/40 to-pink-900/40 rounded-xl p-4 border border-rose-700/30">
          <h3 class="text-lg font-bold text-rose-300 mb-3 flex items-center gap-2">✏️ PHẦN 4: BÀI TẬP</h3>
          <div class="space-y-2 text-sm text-slate-300">
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 1: Pareto Thời Gian 1 Tuần</p>
              <p>Liệt kê 10 hoạt động chiếm nhiều thời gian nhất tuần qua. Xếp hạng theo giá trị tạo ra. 2 hoạt động nào (20%) tạo nhiều giá trị nhất?</p>
            </div>
            <div class="bg-slate-900/40 rounded-lg p-3">
              <p class="text-rose-400 font-bold mb-1">Bài tập 2: Pareto Môn Học</p>
              <p>Nếu đang học 1 môn, liệt kê tất cả chủ đề/chương. 20% chương nào xuất hiện trong 80% đề thi? Tập trung vào đó trước.</p>
            </div>
          </div>
        </div>
      </div>
    `
  }
];
