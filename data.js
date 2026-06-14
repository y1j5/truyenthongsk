const diseases = [
/* =======================================================
   1. ĐỘT QUỴ
======================================================= */

{
  id: "dot-quy",

  seoTitle:
    "Thông tin Đột quỵ",

  seoDescription:
    "Nhận biết sớm đột quỵ, dấu hiệu FAST và xử trí cấp cứu.",

  title:
    "Đột quỵ não",

  hero: {
    badge: "Cấp cứu thần kinh",
    color1: "#c62828",
    color2: "#ef5350",

    desc:
      "Nhận biết sớm dấu hiệu đột quỵ giúp tăng khả năng cứu sống và giảm nguy cơ tàn phế."
  },

  overview: {
    title: "Đột quỵ là gì?",

    content:
      "Đột quỵ xảy ra khi dòng máu nuôi não bị tắc nghẽn hoặc mạch máu não bị vỡ.",

    info:
      "Đột quỵ cần cấp cứu càng sớm càng tốt để bảo tồn tế bào não."
  },

  symptoms: {
    title: "Dấu hiệu FAST",

    warning:
      "Đau đầu dữ dội, méo miệng, yếu tay chân là dấu hiệu nguy hiểm.",

    items: [

      {
        title: "F - Face",
        desc:
          "Méo miệng, lệch mặt."
      },

      {
        title: "A - Arm",
        desc:
          "Yếu hoặc liệt tay chân."
      },

      {
        title: "S - Speech",
        desc:
          "Nói khó, nói đớ."
      },

      {
        title: "T - Time",
        desc:
          "Gọi cấp cứu ngay."
      }

    ]
  },

  emergency: {
    title: "Xử trí ban đầu",

    items: [

      {
        title: "Gọi cấp cứu",
        desc:
          "Đưa bệnh nhân đến cơ sở có điều trị đột quỵ."
      },

      {
        title: "Không cho ăn uống",
        desc:
          "Tránh sặc đường thở."
      },

      {
        title: "Ghi nhớ thời gian",
        desc:
          "Quan trọng cho điều trị tiêu sợi huyết."
      }

    ]
  },

  risks: {
    title: "Yếu tố nguy cơ",

    items: [
      "Tăng huyết áp",
      "Đái tháo đường",
      "Hút thuốc lá",
      "Bệnh tim mạch"
    ]
  },

  prevention: {
    title: "Phòng ngừa",

    items: [
      "Kiểm soát huyết áp",
      "Tập thể dục",
      "Ăn giảm muối",
      "Khám định kỳ"
    ]
  },
   hospitalSuggestion:{
  title:"Khuyến nghị thăm khám",

  items:[

    {
      level:"Khẩn cấp",

      time:"Trong vài phút đến dưới 1 giờ",

      text:
        "Nếu xuất hiện méo miệng, yếu tay chân hoặc nói khó cần gọi cấp cứu và nhập viện ngay để đánh giá đột quỵ.",

      exam:
        [
          "CT não",
          "MRI não",
          "Xét nghiệm đông máu",
          "Đường huyết"
        ]
    },

    {
      level:"Nên khám sớm",

      time:"Trong 24–72 giờ",

      text:
        "Người đau đầu kéo dài, tăng huyết áp hoặc chóng mặt tái diễn nên khám chuyên khoa thần kinh hoặc tim mạch.",

      exam:
        [
          "Đo huyết áp",
          "Điện tim",
          "Siêu âm mạch máu"
        ]
    },

    {
      level:"Tầm soát định kỳ",

      time:"Mỗi 6–12 tháng",

      text:
        "Người có bệnh nền như tăng huyết áp, tiểu đường hoặc rối loạn mỡ máu nên kiểm tra định kỳ để giảm nguy cơ đột quỵ.",

      exam:
        [
          "Mỡ máu",
          "HbA1c",
          "Siêu âm tim"
        ]
    }

  ],

  guidelineSource:[
    "American Heart Association (AHA)",
    "World Stroke Organization",
    "Bộ Y tế Việt Nam"
  ]
}

},

/* =======================================================
   2. TĂNG HUYẾT ÁP
======================================================= */

{
  id: "tang-huyet-ap",

  seoTitle:
    "Thông tin Tăng huyết áp",

  seoDescription:
    "Thông tin tăng huyết áp, triệu chứng và phòng ngừa.",

  title:
    "Tăng huyết áp",

  hero: {
    badge: "Tim mạch",
    color1: "#1565c0",
    color2: "#42a5f5",

    desc:
      "Tăng huyết áp kéo dài làm tăng nguy cơ đột quỵ và bệnh tim."
  },

  overview: {
    title: "Tăng huyết áp là gì?",

    content:
      "Là tình trạng áp lực máu trong động mạch tăng cao kéo dài.",

    info:
      "Nhiều trường hợp không có triệu chứng rõ ràng."
  },

  symptoms: {
    title: "Triệu chứng thường gặp",

    warning:
      "Tăng huyết áp nặng có thể gây đau ngực hoặc khó thở.",

    items: [

      {
        title: "Đau đầu",
        desc:
          "Đau vùng chẩm hoặc buổi sáng."
      },

      {
        title: "Chóng mặt",
        desc:
          "Mất thăng bằng hoặc choáng."
      },

      {
        title: "Ù tai",
        desc:
          "Nghe tiếng ù kéo dài."
      },

      {
        title: "Mệt mỏi",
        desc:
          "Giảm tập trung."
      }

    ]
  },

  emergency: {
    title: "Xử trí",

    items: [

      {
        title: "Đo huyết áp",
        desc:
          "Theo dõi bằng máy đo chuẩn."
      },

      {
        title: "Nghỉ ngơi",
        desc:
          "Tránh gắng sức."
      },

      {
        title: "Đi khám",
        desc:
          "Nếu huyết áp tăng quá cao."
      }

    ]
  },

  risks: {
    title: "Yếu tố nguy cơ",

    items: [
      "Ăn mặn",
      "Stress",
      "Béo phì",
      "Ít vận động"
    ]
  },

  prevention: {
    title: "Phòng ngừa",

    items: [
      "Ăn nhạt",
      "Tập thể dục",
      "Ngủ đủ giấc",
      "Giảm stress"
    ]
  },
   hospitalSuggestion:{
  title:"Khuyến nghị thăm khám",

  items:[

    {
      level:"Khẩn cấp",

      time:"Trong vài giờ",

      text:
        "Nếu huyết áp tăng rất cao kèm đau ngực, khó thở hoặc đau đầu dữ dội cần đến cơ sở y tế ngay.",

      exam:[
        "Điện tim",
        "Xét nghiệm tim mạch",
        "CT não nếu nghi đột quỵ"
      ]
    },

    {
      level:"Nên khám sớm",

      time:"Trong 1–2 tuần",

      text:
        "Người có huyết áp ≥140/90 mmHg đo nhiều lần nên khám chuyên khoa tim mạch.",

      exam:[
        "Đo huyết áp",
        "Mỡ máu",
        "Đường huyết",
        "Chức năng thận"
      ]
    },

    {
      level:"Theo dõi định kỳ",

      time:"Mỗi 3–6 tháng",

      text:
        "Người đã được chẩn đoán tăng huyết áp cần tái khám định kỳ để kiểm soát biến chứng.",

      exam:[
        "Điện tim",
        "Siêu âm tim",
        "Xét nghiệm nước tiểu"
      ]
    }

  ],

  guidelineSource:[
    "European Society of Cardiology (ESC)",
    "American College of Cardiology (ACC)",
    "Bộ Y tế Việt Nam"
  ]
}
},


/* =======================================================
   
======================================================= */

{
  id: "dau-nua-dau",

  seoTitle:
    "Thông tin đau nửa đầu Migraine",

  seoDescription:
    "Tìm hiểu nguyên nhân, dấu hiệu nhận biết và cách kiểm soát đau nửa đầu migraine hiệu quả.",

  title:
    "Đau nửa đầu Migraine",

  hero: {
    badge: "Thần kinh - Đau đầu",
    color1: "#7b1fa2",
    color2: "#ab47bc",

    desc:
      "Đau nửa đầu migraine là tình trạng đau đầu tái diễn có thể ảnh hưởng lớn đến sinh hoạt và chất lượng cuộc sống."
  },

  overview: {
    title: "Đau nửa đầu là gì?",

    content:
      "Migraine là một dạng đau đầu nguyên phát thường gây đau theo cơn, thường xuất hiện ở một bên đầu và có thể kèm buồn nôn hoặc nhạy cảm với ánh sáng.",

    info:
      "Bệnh có liên quan đến rối loạn hoạt động thần kinh và mạch máu não."
  },

  symptoms: {
    title: "Triệu chứng thường gặp",

    warning:
      "Đau đầu dữ dội kéo dài, buồn nôn hoặc sợ ánh sáng cần được theo dõi và đánh giá y khoa.",

    items: [

      {
        title: "Đau theo cơn",
        desc:
          "Cơn đau có thể kéo dài vài giờ đến vài ngày."
      },

      {
        title: "Đau một bên đầu",
        desc:
          "Thường đau kiểu giật hoặc nhói theo nhịp mạch."
      },

      {
        title: "Buồn nôn",
        desc:
          "Một số người có cảm giác buồn nôn hoặc nôn."
      },

      {
        title: "Nhạy cảm ánh sáng",
        desc:
          "Khó chịu khi tiếp xúc ánh sáng mạnh hoặc tiếng ồn."
      }

    ]
  },

  emergency: {
    title: "Khi nào cần đi khám?",

    items: [

      {
        title: "Đau đầu đột ngột dữ dội",
        desc:
          "Có thể liên quan bệnh lý thần kinh nguy hiểm cần cấp cứu."
      },

      {
        title: "Kèm yếu liệt",
        desc:
          "Tê yếu tay chân hoặc nói khó cần loại trừ đột quỵ."
      },

      {
        title: "Đau kéo dài",
        desc:
          "Cơn đau tái diễn thường xuyên ảnh hưởng sinh hoạt nên khám chuyên khoa."
      }

    ]
  },

  risks: {
    title: "Yếu tố làm tăng nguy cơ",

    items: [
      "Stress kéo dài",
      "Thiếu ngủ",
      "Rối loạn nội tiết",
      "Tiền sử gia đình migraine"
    ]
  },

  prevention: {
    title: "Cách phòng ngừa",

    items: [
      "Ngủ đủ giấc",
      "Hạn chế căng thẳng",
      "Uống đủ nước",
      "Theo dõi thực phẩm kích thích đau đầu"
    ]
  },

  hospitalSuggestion:{
    title:"Khuyến nghị thăm khám",

    items:[

      {
        level:"Khẩn cấp",

        time:"Trong vài giờ",

        text:
          "Nếu đau đầu dữ dội đột ngột, co giật hoặc rối loạn ý thức cần nhập viện ngay để loại trừ xuất huyết não hoặc đột quỵ.",

        exam:
          [
            "CT não",
            "MRI não",
            "Khám thần kinh",
            "Xét nghiệm máu"
          ]
      },

      {
        level:"Nên khám sớm",

        time:"Trong vài ngày",

        text:
          "Người đau nửa đầu tái diễn nhiều lần hoặc ảnh hưởng công việc nên khám chuyên khoa thần kinh để đánh giá migraine.",

        exam:
          [
            "Đo huyết áp",
            "Khám thần kinh",
            "Đánh giá yếu tố khởi phát"
          ]
      },

      {
        level:"Theo dõi định kỳ",

        time:"Mỗi 6–12 tháng",

        text:
          "Người có migraine mạn tính nên tái khám định kỳ để điều chỉnh thuốc và kiểm soát tần suất cơn đau.",

        exam:
          [
            "Theo dõi triệu chứng",
            "Đánh giá giấc ngủ",
            "Kiểm tra tim mạch"
          ]
      }

    ],

    guidelineSource:[
      "American Migraine Foundation",
      "World Health Organization (WHO)",
      "Bộ Y tế Việt Nam"
    ]
  }

},



   
/* =======================================================
   
======================================================= */

{
  id: "hen-suyen",

  seoTitle:
    "Thông tin bệnh hen suyễn",

  seoDescription:
    "Tìm hiểu dấu hiệu, nguyên nhân và cách kiểm soát hen suyễn để hạn chế cơn khó thở nguy hiểm.",

  title:
    "Hen suyễn",

  hero: {
    badge: "Hô hấp - Phế quản",
    color1: "#1565c0",
    color2: "#42a5f5",

    desc:
      "Hen suyễn là bệnh hô hấp mạn tính gây viêm và co thắt đường thở, có thể làm người bệnh khó thở từng cơn."
  },

  overview: {
    title: "Hen suyễn là gì?",

    content:
      "Hen suyễn hay hen phế quản là tình trạng viêm mạn tính đường hô hấp khiến phế quản trở nên nhạy cảm và dễ co thắt.",

    info:
      "Bệnh có thể tái phát nhiều lần nhưng hoàn toàn có thể kiểm soát nếu điều trị và theo dõi đúng cách."
  },

  symptoms: {
    title: "Triệu chứng thường gặp",

    warning:
      "Khò khè, khó thở hoặc tức ngực kéo dài cần được đánh giá sớm để tránh cơn hen cấp.",

    items: [

      {
        title: "Khó thở",
        desc:
          "Cảm giác hụt hơi, khó hít sâu hoặc thở nhanh."
      },

      {
        title: "Khò khè",
        desc:
          "Âm thanh rít khi thở ra, thường xuất hiện ban đêm."
      },

      {
        title: "Ho kéo dài",
        desc:
          "Ho nhiều về đêm hoặc khi thay đổi thời tiết."
      },

      {
        title: "Tức ngực",
        desc:
          "Cảm giác nặng hoặc siết chặt vùng ngực."
      }

    ]
  },

  emergency: {
    title: "Khi nào cần cấp cứu?",

    items: [

      {
        title: "Khó thở dữ dội",
        desc:
          "Người bệnh thở gấp, tím môi hoặc không nói được thành câu."
      },

      {
        title: "Không đáp ứng thuốc",
        desc:
          "Triệu chứng không cải thiện sau khi dùng thuốc cắt cơn."
      },

      {
        title: "Cơn hen kéo dài",
        desc:
          "Khò khè hoặc khó thở kéo dài cần nhập viện theo dõi."
      }

    ]
  },

  risks: {
    title: "Yếu tố nguy cơ",

    items: [
      "Tiền sử dị ứng",
      "Khói thuốc lá",
      "Ô nhiễm không khí",
      "Tiền sử gia đình mắc hen"
    ]
  },

  prevention: {
    title: "Cách phòng ngừa",

    items: [
      "Tránh khói thuốc",
      "Giữ môi trường sạch bụi",
      "Dùng thuốc đúng hướng dẫn",
      "Tiêm phòng cúm định kỳ"
    ]
  },

  hospitalSuggestion:{
    title:"Khuyến nghị thăm khám",

    items:[

      {
        level:"Khẩn cấp",

        time:"Ngay khi xuất hiện cơn hen nặng",

        text:
          "Người bệnh khó thở nhiều, tím tái hoặc không đáp ứng thuốc hít cần đến cơ sở y tế cấp cứu ngay.",

        exam:
          [
            "Đo SpO2",
            "Khí máu động mạch",
            "X-quang phổi",
            "Đánh giá hô hấp"
          ]
      },

      {
        level:"Nên khám sớm",

        time:"Trong vài ngày",

        text:
          "Người ho kéo dài, khò khè tái diễn hoặc khó thở về đêm nên khám chuyên khoa hô hấp.",

        exam:
          [
            "Đo chức năng hô hấp",
            "Khám hô hấp",
            "Test dị ứng"
          ]
      },

      {
        level:"Theo dõi định kỳ",

        time:"Mỗi 3–6 tháng",

        text:
          "Người mắc hen suyễn cần tái khám định kỳ để kiểm soát cơn hen và điều chỉnh thuốc phù hợp.",

        exam:
          [
            "Hô hấp ký",
            "Theo dõi đáp ứng thuốc",
            "Đánh giá kiểm soát hen"
          ]
      }

    ],

    guidelineSource:[
      "Global Initiative for Asthma (GINA)",
      "World Health Organization (WHO)",
      "Bộ Y tế Việt Nam"
    ]
  }

},


   
/* =======================================================
   
======================================================= */

{
  id: "benh-alzheimer",

  seoTitle:
    "Thông tin bệnh Alzheimer",

  seoDescription:
    "Tìm hiểu dấu hiệu sớm, nguyên nhân và cách chăm sóc người mắc bệnh Alzheimer.",

  title:
    "Bệnh Alzheimer",

  hero: {
    badge: "Thần kinh - Sa sút trí tuệ",
    color1: "#5e35b1",
    color2: "#7e57c2",

    desc:
      "Alzheimer là nguyên nhân phổ biến gây sa sút trí tuệ ở người lớn tuổi, ảnh hưởng đến trí nhớ và khả năng sinh hoạt hằng ngày."
  },

  overview: {
    title: "Alzheimer là gì?",

    content:
      "Alzheimer là bệnh lý thoái hóa thần kinh tiến triển, gây suy giảm trí nhớ, khả năng tư duy và thay đổi hành vi theo thời gian.",

    info:
      "Bệnh thường tiến triển chậm nhưng có thể ảnh hưởng nghiêm trọng đến chất lượng cuộc sống và khả năng tự chăm sóc."
  },

  symptoms: {
    title: "Dấu hiệu thường gặp",

    warning:
      "Hay quên kéo dài, mất định hướng hoặc thay đổi tính cách ở người lớn tuổi cần được đánh giá sớm.",

    items: [

      {
        title: "Suy giảm trí nhớ",
        desc:
          "Quên thông tin mới hoặc lặp lại câu hỏi nhiều lần."
      },

      {
        title: "Mất tập trung",
        desc:
          "Khó theo dõi công việc hoặc cuộc trò chuyện."
      },

      {
        title: "Rối loạn định hướng",
        desc:
          "Dễ nhầm thời gian, địa điểm hoặc đường đi quen thuộc."
      },

      {
        title: "Thay đổi hành vi",
        desc:
          "Có thể cáu gắt, lo âu hoặc giảm tương tác xã hội."
      }

    ]
  },

  emergency: {
    title: "Khi nào cần khám ngay?",

    items: [

      {
        title: "Sa sút nhanh",
        desc:
          "Trí nhớ và khả năng sinh hoạt giảm nhanh trong thời gian ngắn."
      },

      {
        title: "Rối loạn hành vi nặng",
        desc:
          "Kích động, hoang tưởng hoặc mất kiểm soát cảm xúc."
      },

      {
        title: "Nguy cơ té ngã",
        desc:
          "Mất định hướng hoặc đi lạc cần được theo dõi y tế."
      }

    ]
  },

  risks: {
    title: "Yếu tố nguy cơ",

    items: [
      "Tuổi cao",
      "Tiền sử gia đình",
      "Tăng huyết áp",
      "Đái tháo đường"
    ]
  },

  prevention: {
    title: "Cách giảm nguy cơ",

    items: [
      "Tập thể dục đều đặn",
      "Duy trì hoạt động trí não",
      "Kiểm soát bệnh tim mạch",
      "Ngủ đủ giấc"
    ]
  },

  hospitalSuggestion:{
    title:"Khuyến nghị thăm khám",

    items:[

      {
        level:"Nên khám sớm",

        time:"Trong vài tuần đầu có triệu chứng",

        text:
          "Người lớn tuổi xuất hiện quên nhiều, giảm khả năng giao tiếp hoặc mất định hướng nên khám chuyên khoa thần kinh sớm.",

        exam:
          [
            "Đánh giá trí nhớ",
            "Khám thần kinh",
            "MRI não",
            "Xét nghiệm máu"
          ]
      },

      {
        level:"Theo dõi định kỳ",

        time:"Mỗi 3–6 tháng",

        text:
          "Người đã được chẩn đoán Alzheimer cần tái khám để theo dõi tiến triển và điều chỉnh điều trị.",

        exam:
          [
            "Đánh giá nhận thức",
            "Theo dõi hành vi",
            "Đánh giá khả năng sinh hoạt"
          ]
      },

      {
        level:"Hỗ trợ chăm sóc",

        time:"Liên tục",

        text:
          "Gia đình và người chăm sóc nên được hướng dẫn cách hỗ trợ sinh hoạt và phòng nguy cơ té ngã hoặc đi lạc.",

        exam:
          [
            "Đánh giá dinh dưỡng",
            "Đánh giá vận động",
            "Tư vấn chăm sóc"
          ]
      }

    ],

    guidelineSource:[
      "Alzheimer's Association",
      "World Health Organization (WHO)",
      "National Institute on Aging"
    ]
  }

},

   
/* =======================================================
   
======================================================= */

{
  id: "tieu-duong-typ-2",

  seoTitle:
    "Thông tin tiểu đường type 2",

  seoDescription:
    "Tìm hiểu dấu hiệu, yếu tố nguy cơ và cách kiểm soát bệnh tiểu đường type 2 hiệu quả.",

  title:
    "Tiểu đường type 2",

  hero: {
    badge: "Nội tiết - Chuyển hóa",
    color1: "#ef6c00",
    color2: "#ff9800",

    desc:
      "Tiểu đường type 2 là bệnh rối loạn chuyển hóa phổ biến làm tăng đường huyết kéo dài và có thể gây biến chứng nguy hiểm."
  },

  overview: {
    title: "Tiểu đường type 2 là gì?",

    content:
      "Tiểu đường type 2 xảy ra khi cơ thể giảm đáp ứng với insulin hoặc không sản xuất đủ insulin để kiểm soát đường huyết.",

    info:
      "Bệnh tiến triển âm thầm nhưng có thể ảnh hưởng tim mạch, thận, mắt và thần kinh nếu kiểm soát kém."
  },

  symptoms: {
    title: "Dấu hiệu thường gặp",

    warning:
      "Khát nước nhiều, tiểu nhiều hoặc sụt cân bất thường cần được kiểm tra đường huyết sớm.",

    items: [

      {
        title: "Khát nước",
        desc:
          "Cảm giác khô miệng và uống nước nhiều hơn bình thường."
      },

      {
        title: "Tiểu nhiều",
        desc:
          "Đi tiểu thường xuyên, đặc biệt vào ban đêm."
      },

      {
        title: "Mệt mỏi",
        desc:
          "Cơ thể thiếu năng lượng và dễ kiệt sức."
      },

      {
        title: "Vết thương lâu lành",
        desc:
          "Tổn thương da hoặc nhiễm trùng khó hồi phục."
      }

    ]
  },

  emergency: {
    title: "Khi nào cần đi khám?",

    items: [

      {
        title: "Đường huyết tăng cao",
        desc:
          "Xuất hiện chóng mặt, buồn nôn hoặc mệt nhiều cần đánh giá y tế."
      },

      {
        title: "Biến chứng bàn chân",
        desc:
          "Loét hoặc tê bì chân cần được kiểm tra sớm."
      },

      {
        title: "Mờ mắt",
        desc:
          "Giảm thị lực có thể liên quan biến chứng võng mạc do tiểu đường."
      }

    ]
  },

  risks: {
    title: "Yếu tố nguy cơ",

    items: [
      "Thừa cân béo phì",
      "Ít vận động",
      "Tiền sử gia đình",
      "Tăng huyết áp"
    ]
  },

  prevention: {
    title: "Cách phòng ngừa",

    items: [
      "Kiểm soát cân nặng",
      "Ăn giảm đường tinh luyện",
      "Tập thể dục đều đặn",
      "Khám sức khỏe định kỳ"
    ]
  },

  hospitalSuggestion:{
    title:"Khuyến nghị thăm khám",

    items:[

      {
        level:"Nên khám sớm",

        time:"Trong vài ngày đến vài tuần",

        text:
          "Người có khát nhiều, tiểu nhiều hoặc tiền sử gia đình mắc tiểu đường nên khám nội tiết để kiểm tra đường huyết.",

        exam:
          [
            "Đường huyết đói",
            "HbA1c",
            "Xét nghiệm nước tiểu",
            "Mỡ máu"
          ]
      },

      {
        level:"Theo dõi định kỳ",

        time:"Mỗi 3–6 tháng",

        text:
          "Người mắc tiểu đường type 2 cần tái khám định kỳ để kiểm soát đường huyết và phát hiện biến chứng sớm.",

        exam:
          [
            "HbA1c",
            "Kiểm tra chức năng thận",
            "Đo huyết áp",
            "Khám mắt"
          ]
      },

      {
        level:"Tầm soát biến chứng",

        time:"Ít nhất mỗi năm",

        text:
          "Người bệnh nên kiểm tra tim mạch, mắt và thần kinh định kỳ để giảm nguy cơ biến chứng lâu dài.",

        exam:
          [
            "Điện tim",
            "Khám võng mạc",
            "Đánh giá thần kinh ngoại biên"
          ]
      }

    ],

    guidelineSource:[
      "American Diabetes Association (ADA)",
      "World Health Organization (WHO)",
      "Bộ Y tế Việt Nam"
    ]
  }

},

   
/* =======================================================
   
======================================================= */
{
  id: "benh-phoi-tac-nghen-man-tinh",

  seoTitle:
    "Thông tin bệnh phổi tắc nghẽn mạn tính COPD",

  seoDescription:
    "Tìm hiểu dấu hiệu, nguyên nhân và cách kiểm soát bệnh phổi tắc nghẽn mạn tính COPD.",

  title:
    "Bệnh phổi tắc nghẽn mạn tính",

  hero: {
    badge: "Hô hấp - COPD",
    color1: "#455a64",
    color2: "#78909c",

    desc:
      "COPD là bệnh hô hấp mạn tính gây hạn chế luồng khí thở, thường tiến triển âm thầm và ảnh hưởng lâu dài đến chức năng phổi."
  },

  overview: {
    title: "COPD là gì?",

    content:
      "Bệnh phổi tắc nghẽn mạn tính (COPD) là tình trạng viêm và hẹp đường thở kéo dài làm người bệnh khó thở và giảm khả năng hô hấp.",

    info:
      "Bệnh thường liên quan hút thuốc lá hoặc tiếp xúc lâu dài với khói bụi, ô nhiễm không khí."
  },

  symptoms: {
    title: "Triệu chứng thường gặp",

    warning:
      "Ho kéo dài, khạc đờm và khó thở tăng dần là dấu hiệu cần được khám hô hấp sớm.",

    items: [

      {
        title: "Khó thở",
        desc:
          "Ban đầu xuất hiện khi gắng sức, sau có thể khó thở cả lúc nghỉ."
      },

      {
        title: "Ho mạn tính",
        desc:
          "Ho kéo dài nhiều tuần hoặc nhiều tháng."
      },

      {
        title: "Khạc đờm",
        desc:
          "Đờm thường xuất hiện vào buổi sáng."
      },

      {
        title: "Mệt mỏi",
        desc:
          "Giảm khả năng vận động và dễ kiệt sức."
      }

    ]
  },

  emergency: {
    title: "Khi nào cần cấp cứu?",

    items: [

      {
        title: "Khó thở nặng",
        desc:
          "Thở gấp, tím môi hoặc giảm oxy máu cần nhập viện ngay."
      },

      {
        title: "Đờm đổi màu",
        desc:
          "Đờm vàng xanh hoặc sốt có thể gợi ý nhiễm trùng hô hấp."
      },

      {
        title: "Lơ mơ hoặc mệt nhiều",
        desc:
          "Có thể liên quan suy hô hấp cần xử trí khẩn cấp."
      }

    ]
  },

  risks: {
    title: "Yếu tố nguy cơ",

    items: [
      "Hút thuốc lá",
      "Ô nhiễm không khí",
      "Tiếp xúc khói bụi nghề nghiệp",
      "Tiền sử bệnh hô hấp"
    ]
  },

  prevention: {
    title: "Cách phòng ngừa",

    items: [
      "Ngừng hút thuốc",
      "Đeo khẩu trang khi tiếp xúc bụi",
      "Tiêm phòng cúm và phế cầu",
      "Tập phục hồi chức năng hô hấp"
    ]
  },

  hospitalSuggestion:{
    title:"Khuyến nghị thăm khám",

    items:[

      {
        level:"Khẩn cấp",

        time:"Ngay khi khó thở tăng nhanh",

        text:
          "Người bệnh khó thở dữ dội, tím tái hoặc nghi suy hô hấp cần đến cơ sở y tế cấp cứu ngay.",

        exam:
          [
            "Đo SpO2",
            "Khí máu động mạch",
            "X-quang phổi",
            "Đánh giá hô hấp"
          ]
      },

      {
        level:"Nên khám sớm",

        time:"Trong vài ngày đến vài tuần",

        text:
          "Người ho kéo dài, khạc đờm hoặc khó thở khi vận động nên khám chuyên khoa hô hấp để tầm soát COPD.",

        exam:
          [
            "Đo chức năng hô hấp",
            "X-quang phổi",
            "CT ngực",
            "Khám hô hấp"
          ]
      },

      {
        level:"Theo dõi định kỳ",

        time:"Mỗi 3–6 tháng",

        text:
          "Người mắc COPD cần tái khám định kỳ để đánh giá chức năng phổi và điều chỉnh điều trị phù hợp.",

        exam:
          [
            "Hô hấp ký",
            "Đánh giá oxy máu",
            "Theo dõi triệu chứng"
          ]
      }

    ],

    guidelineSource:[
      "Global Initiative for Chronic Obstructive Lung Disease (GOLD)",
      "World Health Organization (WHO)",
      "Bộ Y tế Việt Nam"
    ]
  }

}
];
