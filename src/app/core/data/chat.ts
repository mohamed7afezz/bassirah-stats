/**
 * Group List
 */
const groupData = [
    {
        name: 'Landing Design',
        unread: '7'
    },
    {
      name: 'General'
    },
    {
      name: 'Project Tasks',
      unread: '3'
    },
    {
        name: 'Meeting'
    },
    {
        name: 'Reporting'
    },
  ];
  
  /**
   * Chat List
   */
   const chatData = [
    {
        image: 'assets/images/users/avatar-2.jpg',
        name: 'Ahmed abd Hamed',
        status: 'online'
    },
    {
      name: 'Abdallah Dahshan',
      status: 'away'
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Abdurraheem Ahmed',
        status: 'online'
    },
    {
        image: 'assets/images/users/avatar-5.jpg',
        name: 'Khaled Osman',
        status: 'online',
        unread: '5'
    },
    {
        image: 'assets/images/users/avatar-6.jpg',
        name: 'Fahed ben Ibarahim',
        status: 'away',
        unread: '2'
    },
    {
        name: 'Ziaad El Mahmoudy',
        status: 'online'
    },
  ];
  
  /**
   * Chat Message List
   */
   const MessagesData = [
    {
        profile: 'assets/images/users/avatar-2.jpg',
        message: 'Good morning 😊',
        time: '09:07 am'
    },
    {
        align: 'right',
        message: 'Good morning, How are you? What about our next meeting?',
        time: '09:08 am'
    },
    {
        profile: 'assets/images/users/avatar-2.jpg',
        message: `Hey, I'm going to meet a friend of mine at the department store. I have to buy some presents for my parents 🎁.`,
        time: '09:10 am'
    },
    {
        align: 'right',
        message: `Wow that's great`,
        time: '09:12 am'
    },
    {
        profile: 'assets/images/users/avatar-2.jpg',
        time: '09:30 am',
        image: ['assets/images/small/img-1.jpg', 'assets/images/small/img-2.jpg']
    },
    {
        align: 'right',
        replayName: "You",
        replaymsg: `Wow that's great`,
        message: 'Thanks',
        time: '09:08 am'
    },
  ];

  /**
   * Contact List
   */
  const contactData = [
    {
        title: 'A',
        contacts: [
            {
                profile : 'assets/images/users/avatar-2.jpg',
                name : 'Ahmed abd Hamed',
            },
            {
              profile : 'assets/images/users/avatar-3.jpg',
              name : 'Abdurraheem Ahmed',
            },
          ],
    },
    {
        title: 'K',
        contacts: [
           
            {
                name : 'Khaled Osman',
            },
        ],
    },
    {
        title: 'F',
        contacts: [
            
            {
                profile : 'assets/images/users/avatar-4.jpg',
                name : 'Fahed ben Ibarahim',
            },
        ],
    },
    {
        title: 'Z',
        contacts: [
            {
                profile : 'assets/images/users/avatar-5.jpg',
                name : 'Ziaad El Mahmoudy',
              },
        ],
    },
  ];
  
  export { groupData, chatData, MessagesData, contactData };
  