import prepareMemberOptions from '.'

describe('Check Function [prepareMemberOptions] is working properly', () => {
  it('should prepare members to member options for select field properly', () => {
    const options: Array<IMembers> = [
      {
        id: '2',
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv',
        address: 'Victor Plains',
        phone: '010-692-6593 x09125',
        website: 'https://anastasia.net',
        occupation: 'Receptionist',
        profile_photo: {
          filename: 'sample-2.jpeg',
        },
      },
      {
        id: '3',
        name: 'Clementine Bauch',
        username: 'Samantha',
        email: 'Nathan@yesenia.net',
        address: 'Douglas Extension',
        phone: '1-463-123-4447',
        website: 'https://ramiro.info',
        occupation: 'Software Developer',
        profile_photo: {
          filename: 'sample-3.jpeg',
        },
      },
    ]

    const sampleDateOne = prepareMemberOptions(options)
    expect(sampleDateOne[0]).toEqual({
      value: options[0].id,
      label: `${options[0].name}, ${options[0].username}`,
    })
  })
})
