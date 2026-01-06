export const policyContent = {
  en: {
    appName: "Schedoryn",
    title: "Privacy Policy",
    effectiveDate: "Effective Date: January 6, 2026",

    introduction: {
      title: "Introduction",
      content: [
        "Welcome to Schedoryn. We are committed to protecting your privacy and ensuring transparency about how we collect, use, and safeguard your personal information. This Privacy Policy explains our practices regarding data collection and usage when you use our travel itinerary planning application.",
        "By using Schedoryn, you agree to the collection and use of information in accordance with this policy.",
      ],
    },

    informationCollect: {
      title: "Information We Collect",
      intro:
        "We collect several types of information to provide and improve our services:",
      sections: [
        {
          title: "1. Account Information",
          content:
            "When you create an account using Google Sign-In, we collect:",
          items: [
            "Your name",
            "Your email address",
            "Profile information provided by Google",
          ],
        },
        {
          title: "2. Location Data",
          content:
            "We collect location data only when you enable location-based features. This helps us:",
          items: [
            "Suggest nearby destinations and attractions",
            "Provide location-specific travel recommendations",
            "Enhance your travel planning experience",
          ],
          note: "You can disable location access at any time through your device settings.",
        },
        {
          title: "3. User-Generated Content",
          content:
            "We store the travel plans and itineraries you create, including:",
          items: [
            "Trip schedules and destinations",
            "Travel notes and preferences",
            "Saved locations and bookmarks",
          ],
        },
        {
          title: "4. Usage and Analytics Data",
          content:
            "To improve app performance and user experience, we collect:",
          items: [
            "App usage patterns and feature interactions",
            "Device information (model, operating system version)",
            "Performance metrics and loading times",
          ],
        },
        {
          title: "5. Crash and Diagnostic Data",
          content:
            "We automatically collect crash reports and diagnostic information to identify and fix bugs, including:",
          items: [
            "Error logs and stack traces",
            "Device state at the time of crashes",
            "App version and configuration details",
          ],
        },
      ],
    },

    howWeUse: {
      title: "How We Use Your Information",
      intro: "We use the collected information for the following purposes:",
      items: [
        {
          label: "Account Management:",
          text: "To create and authenticate your account",
        },
        {
          label: "Core Features:",
          text: "To provide travel planning and itinerary management functionality",
        },
        {
          label: "Personalization:",
          text: "To customize your experience based on your preferences and location",
        },
        {
          label: "App Improvement:",
          text: "To analyze usage patterns and enhance app performance",
        },
        {
          label: "Bug Fixes:",
          text: "To identify, diagnose, and resolve technical issues",
        },
        {
          label: "Communication:",
          text: "To send important updates about the app (with your consent)",
        },
      ],
    },

    thirdParty: {
      title: "Third-Party Services",
      intro:
        "Schedoryn integrates with the following third-party services to provide functionality:",
      services: [
        {
          name: "Google Sign-In",
          description:
            "Used for secure account authentication. Google's privacy practices are governed by their own Privacy Policy, available at",
          link: "https://policies.google.com/privacy",
        },
        {
          name: "Google Play Services",
          description: "Provides essential Android functionality and services.",
        },
        {
          name: "Firebase Crashlytics",
          description:
            "Collects crash reports to help us identify and fix bugs quickly, ensuring a stable app experience.",
        },
      ],
      note: "These third-party services may collect information used to identify you. We encourage you to review their privacy policies.",
    },

    dataSecurity: {
      title: "Data Storage and Security",
      intro:
        "We take your data security seriously and implement industry-standard measures to protect your information:",
      items: [
        "Your data is stored securely on cloud servers with encryption",
        "We use secure communication protocols (HTTPS/TLS) for data transmission",
        "Access to personal data is restricted to authorized personnel only",
        "We regularly review and update our security practices",
      ],
      note: "However, please note that no method of electronic storage or transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.",
    },

    yourRights: {
      title: "Your Rights and Choices",
      intro:
        "You have the following rights regarding your personal information:",
      sections: [
        {
          title: "Access and Correction",
          content:
            "You can access and update your account information at any time through the app settings.",
        },
        {
          title: "Data Deletion",
          content:
            "You can request deletion of your personal data by contacting us at",
          email: "schedoryn@gmail.com",
          suffix: ". We will process your request within 30 days.",
        },
        {
          title: "Account Deletion",
          content:
            "To delete your account entirely, please contact our support team at",
          email: "schedoryn@gmail.com",
          suffix:
            ". This will remove all your personal data and travel plans from our servers.",
        },
        {
          title: "Location Permissions",
          content:
            "You can enable or disable location access at any time through your device settings. Disabling location will limit certain features but won't affect core functionality.",
        },
        {
          title: "Marketing Communications",
          content:
            "You can opt out of promotional emails by following the unsubscribe link in any marketing email or by contacting us directly.",
        },
      ],
    },

    dataRetention: {
      title: "Data Retention",
      intro:
        "We retain your personal information only for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. Specifically:",
      items: [
        {
          label: "Account Data:",
          text: "Retained while your account is active",
        },
        {
          label: "Travel Plans:",
          text: "Retained until you delete them or close your account",
        },
        {
          label: "Analytics Data:",
          text: "Aggregated and anonymized after 26 months",
        },
        {
          label: "Crash Reports:",
          text: "Retained for up to 90 days for debugging purposes",
        },
      ],
      note: "After account deletion, we may retain certain information as required by law or for legitimate business purposes (e.g., fraud prevention, dispute resolution).",
    },

    childrenPrivacy: {
      title: "Children's Privacy",
      content: [
        "Schedoryn is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.",
        "If you are a parent or guardian and believe your child has provided us with personal information, please contact us at",
        ", and we will promptly delete such information from our servers.",
      ],
      email: "schedoryn@gmail.com",
    },

    internationalTransfers: {
      title: "International Data Transfers",
      content: [
        "Your information may be transferred to and processed on servers located outside your country of residence. These countries may have different data protection laws than your jurisdiction.",
        "By using Schedoryn, you consent to the transfer of your information to our facilities and third-party service providers, wherever they are located.",
      ],
    },

    policyChanges: {
      title: "Changes to This Privacy Policy",
      intro:
        "We may update this Privacy Policy from time to time to reflect changes in our practices or for legal and regulatory reasons. When we make changes:",
      items: [
        'We will update the "Effective Date" at the top of this policy',
        "We will notify you through the app or via email for significant changes",
        "Your continued use of Schedoryn after changes constitutes acceptance of the updated policy",
      ],
      note: "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.",
    },

    contact: {
      title: "Contact Us",
      intro:
        "If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:",
      email: "schedoryn@gmail.com",
      appName: "Schedoryn",
      response: "We will respond to your inquiry within 7 business days.",
    },

    compliance: {
      title: "Google Play Data Safety Compliance",
      content:
        "This Privacy Policy is designed to comply with Google Play's Data Safety requirements. For more information about how we handle data as required by Google Play, please refer to our Data Safety section in the Google Play Store.",
    },

    footer: {
      copyright: "© 2026 Schedoryn. All rights reserved.",
      lastUpdated: "Last updated: January 6, 2026",
    },
  },

  vi: {
    appName: "Schedoryn",
    title: "Chính Sách Bảo Mật",
    effectiveDate: "Ngày hiệu lực: 6 tháng 1, 2026",

    introduction: {
      title: "Giới Thiệu",
      content: [
        "Chào mừng bạn đến với Schedoryn. Chúng tôi cam kết bảo vệ quyền riêng tư của bạn và đảm bảo tính minh bạch về cách chúng tôi thu thập, sử dụng và bảo vệ thông tin cá nhân của bạn. Chính Sách Bảo Mật này giải thích các thực hành của chúng tôi liên quan đến việc thu thập và sử dụng dữ liệu khi bạn sử dụng ứng dụng lập kế hoạch hành trình du lịch của chúng tôi.",
        "Bằng cách sử dụng Schedoryn, bạn đồng ý với việc thu thập và sử dụng thông tin theo chính sách này.",
      ],
    },

    informationCollect: {
      title: "Thông Tin Chúng Tôi Thu Thập",
      intro:
        "Chúng tôi thu thập một số loại thông tin để cung cấp và cải thiện dịch vụ của mình:",
      sections: [
        {
          title: "1. Thông Tin Tài Khoản",
          content:
            "Khi bạn tạo tài khoản bằng Google Sign-In, chúng tôi thu thập:",
          items: [
            "Tên của bạn",
            "Địa chỉ email của bạn",
            "Thông tin hồ sơ do Google cung cấp",
          ],
        },
        {
          title: "2. Dữ Liệu Vị Trí",
          content:
            "Chúng tôi chỉ thu thập dữ liệu vị trí khi bạn bật các tính năng dựa trên vị trí. Điều này giúp chúng tôi:",
          items: [
            "Đề xuất các điểm đến và điểm tham quan gần đó",
            "Cung cấp đề xuất du lịch dựa trên vị trí",
            "Nâng cao trải nghiệm lập kế hoạch du lịch của bạn",
          ],
          note: "Bạn có thể tắt quyền truy cập vị trí bất cứ lúc nào thông qua cài đặt thiết bị của mình.",
        },
        {
          title: "3. Nội Dung Do Người Dùng Tạo",
          content:
            "Chúng tôi lưu trữ các kế hoạch du lịch và lịch trình mà bạn tạo, bao gồm:",
          items: [
            "Lịch trình chuyến đi và điểm đến",
            "Ghi chú và sở thích du lịch",
            "Vị trí và dấu trang đã lưu",
          ],
        },
        {
          title: "4. Dữ Liệu Sử Dụng và Phân Tích",
          content:
            "Để cải thiện hiệu suất ứng dụng và trải nghiệm người dùng, chúng tôi thu thập:",
          items: [
            "Mẫu sử dụng ứng dụng và tương tác tính năng",
            "Thông tin thiết bị (model, phiên bản hệ điều hành)",
            "Số liệu hiệu suất và thời gian tải",
          ],
        },
        {
          title: "5. Dữ Liệu Sự Cố và Chẩn Đoán",
          content:
            "Chúng tôi tự động thu thập báo cáo sự cố và thông tin chẩn đoán để xác định và sửa lỗi, bao gồm:",
          items: [
            "Nhật ký lỗi và stack traces",
            "Trạng thái thiết bị tại thời điểm xảy ra sự cố",
            "Chi tiết phiên bản ứng dụng và cấu hình",
          ],
        },
      ],
    },

    howWeUse: {
      title: "Cách Chúng Tôi Sử Dụng Thông Tin Của Bạn",
      intro: "Chúng tôi sử dụng thông tin thu thập được cho các mục đích sau:",
      items: [
        {
          label: "Quản Lý Tài Khoản:",
          text: "Để tạo và xác thực tài khoản của bạn",
        },
        {
          label: "Tính Năng Cốt Lõi:",
          text: "Để cung cấp chức năng lập kế hoạch du lịch và quản lý lịch trình",
        },
        {
          label: "Cá Nhân Hóa:",
          text: "Để tùy chỉnh trải nghiệm của bạn dựa trên sở thích và vị trí",
        },
        {
          label: "Cải Thiện Ứng Dụng:",
          text: "Để phân tích mẫu sử dụng và nâng cao hiệu suất ứng dụng",
        },
        {
          label: "Sửa Lỗi:",
          text: "Để xác định, chẩn đoán và giải quyết các vấn đề kỹ thuật",
        },
        {
          label: "Liên Lạc:",
          text: "Để gửi các cập nhật quan trọng về ứng dụng (với sự đồng ý của bạn)",
        },
      ],
    },

    thirdParty: {
      title: "Dịch Vụ Bên Thứ Ba",
      intro:
        "Schedoryn tích hợp với các dịch vụ bên thứ ba sau để cung cấp chức năng:",
      services: [
        {
          name: "Google Sign-In",
          description:
            "Được sử dụng để xác thực tài khoản an toàn. Các thực hành bảo mật của Google được điều chỉnh bởi Chính Sách Bảo Mật riêng của họ, có sẵn tại",
          link: "https://policies.google.com/privacy",
        },
        {
          name: "Google Play Services",
          description: "Cung cấp chức năng và dịch vụ Android thiết yếu.",
        },
        {
          name: "Firebase Crashlytics",
          description:
            "Thu thập báo cáo sự cố để giúp chúng tôi xác định và sửa lỗi nhanh chóng, đảm bảo trải nghiệm ứng dụng ổn định.",
        },
      ],
      note: "Các dịch vụ bên thứ ba này có thể thu thập thông tin được sử dụng để xác định bạn. Chúng tôi khuyến khích bạn xem xét các chính sách bảo mật của họ.",
    },

    dataSecurity: {
      title: "Lưu Trữ và Bảo Mật Dữ Liệu",
      intro:
        "Chúng tôi coi trọng bảo mật dữ liệu của bạn và thực hiện các biện pháp tiêu chuẩn ngành để bảo vệ thông tin của bạn:",
      items: [
        "Dữ liệu của bạn được lưu trữ an toàn trên các máy chủ đám mây có mã hóa",
        "Chúng tôi sử dụng các giao thức truyền thông an toàn (HTTPS/TLS) để truyền dữ liệu",
        "Quyền truy cập vào dữ liệu cá nhân chỉ giới hạn cho nhân viên được ủy quyền",
        "Chúng tôi thường xuyên xem xét và cập nhật các thực hành bảo mật của mình",
      ],
      note: "Tuy nhiên, xin lưu ý rằng không có phương pháp lưu trữ điện tử hoặc truyền qua internet nào an toàn 100%. Mặc dù chúng tôi cố gắng bảo vệ dữ liệu của bạn, chúng tôi không thể đảm bảo bảo mật tuyệt đối.",
    },

    yourRights: {
      title: "Quyền và Lựa Chọn Của Bạn",
      intro: "Bạn có các quyền sau liên quan đến thông tin cá nhân của mình:",
      sections: [
        {
          title: "Truy Cập và Sửa Đổi",
          content:
            "Bạn có thể truy cập và cập nhật thông tin tài khoản của mình bất cứ lúc nào thông qua cài đặt ứng dụng.",
        },
        {
          title: "Xóa Dữ Liệu",
          content:
            "Bạn có thể yêu cầu xóa dữ liệu cá nhân của mình bằng cách liên hệ với chúng tôi tại",
          email: "schedoryn@gmail.com",
          suffix: ". Chúng tôi sẽ xử lý yêu cầu của bạn trong vòng 30 ngày.",
        },
        {
          title: "Xóa Tài Khoản",
          content:
            "Để xóa hoàn toàn tài khoản của bạn, vui lòng liên hệ với đội ngũ hỗ trợ của chúng tôi tại",
          email: "schedoryn@gmail.com",
          suffix:
            ". Điều này sẽ xóa tất cả dữ liệu cá nhân và kế hoạch du lịch của bạn khỏi máy chủ của chúng tôi.",
        },
        {
          title: "Quyền Truy Cập Vị Trí",
          content:
            "Bạn có thể bật hoặc tắt quyền truy cập vị trí bất cứ lúc nào thông qua cài đặt thiết bị của mình. Việc tắt vị trí sẽ hạn chế một số tính năng nhưng không ảnh hưởng đến chức năng cốt lõi.",
        },
        {
          title: "Liên Lạc Tiếp Thị",
          content:
            "Bạn có thể từ chối nhận email quảng cáo bằng cách nhấp vào liên kết hủy đăng ký trong bất kỳ email tiếp thị nào hoặc liên hệ trực tiếp với chúng tôi.",
        },
      ],
    },

    dataRetention: {
      title: "Lưu Giữ Dữ Liệu",
      intro:
        "Chúng tôi chỉ lưu giữ thông tin cá nhân của bạn trong thời gian cần thiết để cung cấp dịch vụ và thực hiện các mục đích được nêu trong Chính Sách Bảo Mật này. Cụ thể:",
      items: [
        {
          label: "Dữ Liệu Tài Khoản:",
          text: "Được lưu giữ khi tài khoản của bạn còn hoạt động",
        },
        {
          label: "Kế Hoạch Du Lịch:",
          text: "Được lưu giữ cho đến khi bạn xóa chúng hoặc đóng tài khoản",
        },
        {
          label: "Dữ Liệu Phân Tích:",
          text: "Được tổng hợp và ẩn danh sau 26 tháng",
        },
        {
          label: "Báo Cáo Sự Cố:",
          text: "Được lưu giữ tối đa 90 ngày cho mục đích gỡ lỗi",
        },
      ],
      note: "Sau khi xóa tài khoản, chúng tôi có thể lưu giữ một số thông tin nhất định theo yêu cầu của pháp luật hoặc cho các mục đích kinh doanh hợp pháp (ví dụ: ngăn chặn gian lận, giải quyết tranh chấp).",
    },

    childrenPrivacy: {
      title: "Quyền Riêng Tư Của Trẻ Em",
      content: [
        "Schedoryn không dành cho trẻ em dưới 13 tuổi. Chúng tôi không cố ý thu thập thông tin cá nhân từ trẻ em dưới 13 tuổi.",
        "Nếu bạn là cha mẹ hoặc người giám hộ và tin rằng con bạn đã cung cấp thông tin cá nhân cho chúng tôi, vui lòng liên hệ với chúng tôi tại",
        ", và chúng tôi sẽ nhanh chóng xóa thông tin đó khỏi máy chủ của chúng tôi.",
      ],
      email: "schedoryn@gmail.com",
    },

    internationalTransfers: {
      title: "Chuyển Giao Dữ Liệu Quốc Tế",
      content: [
        "Thông tin của bạn có thể được chuyển đến và xử lý trên các máy chủ nằm ngoài quốc gia cư trú của bạn. Các quốc gia này có thể có luật bảo vệ dữ liệu khác với khu vực pháp lý của bạn.",
        "Bằng cách sử dụng Schedoryn, bạn đồng ý với việc chuyển giao thông tin của bạn đến các cơ sở và nhà cung cấp dịch vụ bên thứ ba của chúng tôi, bất kể họ ở đâu.",
      ],
    },

    policyChanges: {
      title: "Thay Đổi Chính Sách Bảo Mật Này",
      intro:
        "Chúng tôi có thể cập nhật Chính Sách Bảo Mật này theo thời gian để phản ánh các thay đổi trong thực hành của chúng tôi hoặc vì lý do pháp lý và quy định. Khi chúng tôi thực hiện thay đổi:",
      items: [
        'Chúng tôi sẽ cập nhật "Ngày hiệu lực" ở đầu chính sách này',
        "Chúng tôi sẽ thông báo cho bạn thông qua ứng dụng hoặc qua email đối với các thay đổi quan trọng",
        "Việc bạn tiếp tục sử dụng Schedoryn sau khi có thay đổi đồng nghĩa với việc chấp nhận chính sách đã cập nhật",
      ],
      note: "Chúng tôi khuyến khích bạn xem xét Chính Sách Bảo Mật này định kỳ để luôn được thông báo về cách chúng tôi bảo vệ thông tin của bạn.",
    },

    contact: {
      title: "Liên Hệ Với Chúng Tôi",
      intro:
        "Nếu bạn có bất kỳ câu hỏi, thắc mắc hoặc yêu cầu nào liên quan đến Chính Sách Bảo Mật này hoặc các thực hành dữ liệu của chúng tôi, vui lòng liên hệ với chúng tôi:",
      email: "schedoryn@gmail.com",
      appName: "Schedoryn",
      response:
        "Chúng tôi sẽ phản hồi yêu cầu của bạn trong vòng 7 ngày làm việc.",
    },

    compliance: {
      title: "Tuân Thủ An Toàn Dữ Liệu Google Play",
      content:
        "Chính Sách Bảo Mật này được thiết kế để tuân thủ các yêu cầu về An toàn Dữ liệu của Google Play. Để biết thêm thông tin về cách chúng tôi xử lý dữ liệu theo yêu cầu của Google Play, vui lòng tham khảo phần An toàn Dữ liệu của chúng tôi trong Google Play Store.",
    },

    footer: {
      copyright: "© 2026 Schedoryn. Tất cả quyền được bảo lưu.",
      lastUpdated: "Cập nhật lần cuối: 6 tháng 1, 2026",
    },
  },
};

export type Language = "en" | "vi";
