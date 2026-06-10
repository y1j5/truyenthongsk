const diseases = [

  {

    id: "dot-quy",

    title: "Đột quỵ não",

    category: "Cấp cứu thần kinh",

    hero: {

      colorStart: "#c62828",

      colorEnd: "#ef5350",

      badge:
        "Cấp cứu thần kinh",

      shortDesc:
        "Nhận biết sớm dấu hiệu đột quỵ có thể cứu sống người bệnh và giảm nguy cơ tàn phế vĩnh viễn.",

      buttons: [

        {
          text: "Nhận biết nhanh",
          target: "#nhan-biet",
          type: "primary"
        },

        {
          text: "Xử trí cấp cứu",
          target: "#xu-tri",
          type: "secondary"
        }

      ]

    },

    seo: {

      title:
        "Thông tin Đột quỵ",

      description:
        "Thông tin nhận biết sớm đột quỵ, dấu hiệu cảnh báo, xử trí cấp cứu và phòng ngừa."

    },

    sections: [

      {

        type: "overview",

        title:
          "Đột quỵ là gì?",

        content:
          "Đột quỵ (tai biến mạch máu não) xảy ra khi lưu lượng máu đến não bị gián đoạn hoặc mạch máu não bị vỡ khiến tế bào não tổn thương nhanh chóng.",

        infoBox:
          "Mỗi phút trôi qua trong đột quỵ có thể mất hàng triệu tế bào não. Điều trị càng sớm khả năng hồi phục càng cao."

      },









      {

        id: "nhan-biet",

        type: "symptoms-grid",

        title:
          "Dấu hiệu nhận biết FAST",

        items: [

          {
            title: "F - Face",
            desc:
              "Méo miệng, lệch mặt, nhân trung lệch."
          },

          {
            title: "A - Arm",
            desc:
              "Yếu hoặc liệt tay chân một bên."
          },

          {
            title: "S - Speech",
            desc:
              "Nói khó, nói đớ, không hiểu lời."
          },

          {
            title: "T - Time",
            desc:
              "Gọi cấp cứu ngay lập tức."
          }

        ],

        warning:
          "Dấu hiệu nguy hiểm khác: đau đầu dữ dội, mất thăng bằng, nhìn mờ, hôn mê hoặc co giật."

      },









      {

        id: "xu-tri",

        type: "steps",

        title:
          "Xử trí cấp cứu ban đầu",

        items: [

          {

            title:
              "Gọi cấp cứu",

            desc:
              "Liên hệ cấp cứu hoặc đưa người bệnh đến cơ sở y tế có điều trị đột quỵ."

          },

          {

            title:
              "Đặt nằm an toàn",

            desc:
              "Cho bệnh nhân nằm nghiêng nếu nôn ói, nới lỏng quần áo."

          },

          {

            title:
              "Không tự cho uống thuốc",

            desc:
              "Không tự dùng aspirin hoặc thuốc hạ huyết áp nếu chưa có chỉ định bác sĩ."

          },

          {

            title:
              "Ghi nhớ thời gian khởi phát",

            desc:
              "Đây là thông tin rất quan trọng để quyết định điều trị tiêu sợi huyết."

          }

        ]

      },









      {

        type: "list",

        title:
          "Yếu tố nguy cơ",

        items: [

          "Tăng huyết áp",

          "Đái tháo đường",

          "Rối loạn mỡ máu",

          "Hút thuốc lá",

          "Béo phì, ít vận động",

          "Rung nhĩ, bệnh tim mạch"

        ]

      },









      {

        type: "list",

        title:
          "Phòng ngừa đột quỵ",

        items: [

          "Kiểm soát huyết áp định kỳ",

          "Tập thể dục tối thiểu 30 phút/ngày",

          "Ăn nhạt, giảm mỡ động vật",

          "Ngưng hút thuốc và hạn chế rượu bia",

          "Khám sức khỏe định kỳ"

        ]

      }

    ],

    updatedAt:
      "2026-06-10"

  }

];
