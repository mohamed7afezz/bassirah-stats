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
        name: 'KAZIM Majid',
        status: 'online'
    },
    {
        image: 'assets/images/users/avatar-3.jpg',
        name: 'Majid Ahmed',
        status: 'online',
        unread: '8'
    },
    {
      name: 'Zishan Majid',
      status: 'away'
    },
    {
        image: 'assets/images/users/avatar-4.jpg',
        name: 'Abdurraheem Ahmet',
        status: 'online'
    },
    {
        image: 'assets/images/users/avatar-5.jpg',
        name: 'Iraku Ahmet',
        status: 'online',
        unread: '5'
    },
    {
        image: 'assets/images/users/avatar-6.jpg',
        name: 'Abdu Ahmet',
        status: 'away',
        unread: '2'
    },
    {
        name: 'Mustafa  Osama',
        status: 'online'
    },
    {
        name: 'Osama Mustafa',
        status: 'away'
    },
    {
        image: 'assets/images/users/avatar-7.jpg',
        name: 'Saud Omr',
        status: 'away'
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
                name: 'khalil Arafat',
            }
          ],
    },
    {
        title: 'B',
        contacts: [
            {
                name: 'Ahmad khalil',
                profile:'assets/images/users/avatar-4.jpg'
            }
        ],
    },
    {
        title: 'C',
        contacts: [
            {
                name: 'Iraku Ahmad',
            },
            {
                name: 'Kadi Iraku',
            }
        ],
    },
    {
        title: 'E',
        contacts: [
            {
                name: 'Momtaz Kadi',
            }
        ],
    },
    {
        title: 'F',
        contacts: [
            {
                name: 'Majid Momtaz',
                profile:'assets/images/users/avatar-3.jpg'
            }
        ],
    },
    {
        title: 'G',
        contacts: [
            {
                name: 'Gilbert Beer'
            }
        ],
    },
    {
        title: 'J',
        contacts: [
            {
                name: 'Mustafa Ahmad',
                profile:'assets/images/users/avatar-4.jpg'
            },
            {
                name: 'Ahmad Omr',
                profile:'assets/images/users/avatar-7.jpg'
            },
            {
                name: 'Omr Ahmad',
                profile:'assets/images/users/avatar-1.jpg'
            }
        ],
    },
    {
        title: 'K',
        contacts: [
            {
                name: 'Arafat',
                profile:'assets/images/users/avatar-5.jpg'
            }
        ],
    },
    {
        title: 'L',
        contacts: [
            {
                name: 'Abdullah Asad',
                profile:'assets/images/users/avatar-2.jpg'
            }
        ],
    },
    {
        title: 'M',
        contacts: [
            {
                name: 'Asad Nasser'
            }
        ],
    },
    {
        title: 'N',
        contacts: [
            {
                name: 'Hkim abdullah',
                profile:'assets/images/users/avatar-6.jpg'
            }
        ],
    },
    {
        title: 'R',
        contacts: [
            {
                name: 'Inam Hamza'
            }
        ],
    },
    {
        title: 'S',
        contacts: [
            {
                name: 'Sarah Beattie',
                profile:'assets/images/users/avatar-5.jpg'
            }
        ],
    },
    {
        title: 'V',
        contacts: [
            {
                name: 'Victor Beahan',
                profile:'assets/images/users/avatar-10.jpg'
            }
        ],
    },
    {
        title: 'W',
        contacts: [
            {
                name: 'Nasser Asad',
                profile:'assets/images/users/avatar-2.jpg'
            }
        ],
    },
  ];
  
  export { groupData, chatData, MessagesData, contactData };
  