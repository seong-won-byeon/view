




// 메인 탭 슬라이드
// const tabSwiper = new Swiper('.tab-swiper', {
//   slidesPerView: 'auto',
//   spaceBetween: 8,
// });


// $('.tab-swiper .tab-item a').click(function (e) {
//   e.preventDefault();
//   var index = $(this).parent('li').index();
//   var goIndex = (index <= 3) ? 0 :index;
//   $('.tab-swiper .tab-item').removeClass('on');
//   $(this).parent().addClass('on');

//   tabSwiper.slideTo(goIndex, 300);
// });


function openCont(tabName) {
  document.querySelectorAll('.cnt, .tabs').forEach(function(el) {
      el.classList.remove('on');
  });
  document.getElementById(tabName).classList.add('on');
}




// 메인 배너슬라이드
const swiper = new Swiper('.banner', {
  direction: 'horizontal',
  loop: false,
  slidesPerView: 'auto',
  pagination: {
    el: '.banner .swiper-pagination',
    clickable: true,
  },
  spaceBetween: 12,
  observer: true,
  observeParents: true,
});


const HotSwiper = new Swiper(".hot-swiper", {
  slidesPerView: 2.3, // 2열 + 오른쪽 일부 노출
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 12,
});



// const HOTswiper = new Swiper(".hot-swiper", {
//   slidesPerView: 2.5,
//   spaceBetween: 15,
//   loop: true,
//   loopAdditionalSlides: 10, // 전체 슬라이드 수보다 여유 있게 설정
//   loopedSlides: 10, // loop 정상 동작을 위한 명시적 설정
//   slidesPerGroup: 1, // 그룹 단위 이동 설정 (없으면 꺾임 문제 발생 가능)
//   grid: {
//     rows: 2,
//     fill: 'column', // ✅ 'row'에서 'column'으로 바꾸면 흐름이 안정되는 경우가 많음
//   },
// });




// 쇼츠 슬라이드
const shortsSwiper = new Swiper(".shorts-swiper", {
  slidesPerView: 'auto',
  spaceBetween: 10,
  freeMode: true,
});



// 살짝 먼저 들어볼까요
const prevSwiper = new Swiper('.prev-swiper', {
  initialSlide: 0,
  // slidesPerView: 'auto',
  // slidesPerGroup: 1,
  spaceBetween: 20,
  loop:true,
  speed: 350,  
  loopAdditionalSlides: 1,
  observer: true,
  observeParents: true,
});



// 편하게 들어보세요
const recommSwiper = new Swiper('.recomm-swiper', {
  initialSlide: 0,
  slidesPerView: 'auto',
  // slidesPerGroup: 1,
  spaceBetween: 20,
  loop:true,
  loopAdditionalSlides: 2,
  speed: 350, 
  observer: true,
  observeParents: true,
});






document.addEventListener('DOMContentLoaded', () => {

  // 플로팅 버튼클릭시 최상단 이동
  const scrollTopBtn = document.getElementById("scrollTopBtn");
  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  
  // 메인 탭메뉴 클릭시 스타일
  const tabButtons = document.querySelectorAll('.tab');
  const loading = document.querySelector('.loading');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // 탭 상태 초기화
      tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.setAttribute('aria-selected', 'false');
      });
  
      // 클릭된 탭 활성화
      button.classList.add('active');
      button.setAttribute('aria-selected', 'true');
  
      // 로딩 화면 보여주기 (opacity: 1)
      loading.classList.add('fade-in');
      document.body.classList.add('hidden');

      // 0.5초 후 로딩 화면 감추기 (opacity: 0)
      setTimeout(() => {
        loading.classList.remove('fade-in');
        document.body.classList.remove('hidden');
      }, 500); // transition 시간과 맞춰야 함
    });
  });
  


  // 상세 가사 더보기 클릭시
  const togglelyrics = document.getElementById('togglelyrics');
  const lyrics = document.getElementById('lyrics');

  if (togglelyrics && lyrics) {
    togglelyrics.addEventListener('click', () => {
      const isOpen = lyrics.classList.toggle('open');
      togglelyrics.textContent = isOpen ? '가사 접기' : '가사 더보기';
    });
  }



  // 상세 주의사항 더보기 클릭시
  const noticeList = document.getElementById('noticeList');
  const toggleNotice = document.getElementById('toggleNotice');

  if (toggleNotice && toggleNotice) {
    toggleNotice.addEventListener('click', () => {
      const isOpen = noticeList.classList.toggle('open');
      toggleNotice.textContent = isOpen ? '주의사항 접기' : '주의사항 더보기';
    });
  }  



  // 상세 컨트롤러 토글
  const controller = document.querySelector('.controller');
  const iconImg = document.querySelector('.icon img');

  if(controller && iconImg) {
    controller.addEventListener('click', () => {
      controller.classList.toggle('active');
  
      // 이미지 교체
      const isActive = controller.classList.contains('active');
      iconImg.src = isActive
        ? '../assets/img/ico-pause.svg'
        : '../assets/img/ico-play.svg';
    });
  }
  



  // 고객센터 FAQ 아코디언 
  // 수정 후
  $(".contact-faq .ac-header").click(function() {
    $(this).next(".ac-cont").stop().slideToggle(300);
    $(this).toggleClass('active');
  });



  



  // 고객센터 바텀시트
  const openBtn = document.querySelector(".btn-contact"); 
  const bottomSheet = document.getElementById("bottomSheet");
  const closeBtn = document.getElementById("btnClose"); 
  const backdrop = document.getElementById("dimmed"); 
  const textarea = document.getElementById("defaultTextarea"); 
  const charCount = document.getElementById("charCount"); 
  const bodyCont = document.body;

  // 바텀시트 열기
  if(openBtn && bottomSheet && closeBtn && backdrop && textarea && charCount) {
    openBtn.addEventListener("click", () => {
      bottomSheet.classList.add("show");
      backdrop.classList.add("show");
      
      // body 고정
      const scrollY = window.scrollY;
      bodyCont.style.top = `-${scrollY}px`;
      bodyCont.classList.add("fixed");
      bodyCont.dataset.scrollY = scrollY;
    });
  
    // 바텀시트 닫기 (닫기 버튼)
    closeBtn.addEventListener("click", () => {
      bottomSheet.classList.remove("show");
      backdrop.classList.remove("show");

      // body 복원
      const scrollY = bodyCont.dataset.scrollY || 0;
      bodyCont.classList.remove("fixed");
      bodyCont.style.top = "";
      window.scrollTo(0, scrollY);
    });
  }




  // select box 드롭다운
  // const customSelect = document.getElementById('customSelect');
  // const dropdownList = customSelect.querySelector('.dropdown-list');
  // const placeholder = customSelect.querySelector('.placeholder');
  // const options = dropdownList.querySelectorAll('li');
  // const hiddenInput = document.getElementById('inquiryType');

  // customSelect.addEventListener('click', (e) => {
  //   e.stopPropagation();
  //   dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
  //   customSelect.classList.toggle('focus');
  // });

  // options.forEach(option => {
  //   option.addEventListener('click', (e) => {
  //     e.stopPropagation();
  //     const selectedValue = option.textContent;

  //     placeholder.textContent = selectedValue;
  //     placeholder.classList.add('selected');
  //     hiddenInput.value = selectedValue;

  //     options.forEach(opt => opt.classList.remove('selected'));
  //     option.classList.add('selected');

  //     dropdownList.style.display = 'none';
  //     customSelect.classList.remove('focus');
  //   });
  // });

  // document.addEventListener('click', () => {
  //   dropdownList.style.display = 'none';
  //   customSelect.classList.remove('focus');
  // });



  // const customText = document.getElementById("customText");

  // textarea.addEventListener("focus", () => {
  //   customText.classList.add("focus");
  // });

  // textarea.addEventListener("blur", () => {
  //   customText.classList.remove("focus");
  // });

  // textarea.addEventListener("input", () => {
  //   charCount.textContent = `${textarea.value.length}/200`;
  // });
  // textarea.addEventListener("input", () => {
  //   charCount.textContent = textarea.value.length;
  // });




  // const input = document.getElementById('useremail');
  // const customInput = document.getElementById('customInput');

  // input.addEventListener('focus', () => {
  //   customInput.classList.add('focus');
  // });

  // input.addEventListener('blur', () => {
  //   customInput.classList.remove('focus');
  // });





  // shorts 바텀시트
  const closeBot = document.querySelector('.bottom-sheet.shorts .close');
  const startBtn = document.querySelector('.bottom-sheet.shorts .startBtn');
  const dimmed = document.getElementById('dimmed'); 
  const shortsBot = document.getElementById('shortsBottom');
  const bodyshortCont = document.body;
  
  // ✅ 페이지 진입 시 바텀시트 자동 열기
  if (dimmed && shortsBot) {
    window.addEventListener('DOMContentLoaded', () => {
      // 바텀시트 show
      dimmed.classList.add('show');
      shortsBot.classList.add('show');

    });
  }
  
  // ✅ 공통 함수: 바텀시트 닫기
  function closeBottomSheet() {
    dimmed.classList.remove('show');
    shortsBot.classList.remove('show');

  }

  // ✅ 오늘은 그만 볼래요 클릭 시
  if (closeBot && dimmed && shortsBot) {
    closeBot.addEventListener('click', closeBottomSheet);
  }

  // ✅ 미션바로 시작 클릭 시
  if (startBtn && dimmed && shortsBot) {
    startBtn.addEventListener('click', closeBottomSheet);
  }







  // 메인 마감된 캠페인 클릭시 바텀시트
  const campcloseBot = document.querySelector('.bottom-sheet.finishCamp .close');
  const campstartBtn = document.querySelector('.bottom-sheet.finishCamp .startBtn');
  const campdimmed = document.getElementById('dimmed'); 
  const campBot = document.getElementById('finishBottom');

  // ✅ 페이지 진입 시 바텀시트 자동 열기
  if (campdimmed && campBot) {
    window.addEventListener('DOMContentLoaded', () => {
      // 바텀시트 show
      campdimmed.classList.add('show');
      campBot.classList.add('show');

    });
  }
  
  // ✅ 공통 함수: 바텀시트 닫기
  function closeBottomSheet() {
    campdimmed.classList.remove('show');
    campBot.classList.remove('show');

  }

  // ✅ 오늘은 그만 볼래요 클릭 시
  if (closeBot && campdimmed && campBot) {
    campcloseBot.addEventListener('click', closeBottomSheet);
  }

  // ✅ 미션바로 시작 클릭 시
  if (campstartBtn && campdimmed && campBot) {
    campstartBtn.addEventListener('click', closeBottomSheet);
  }

  




});
