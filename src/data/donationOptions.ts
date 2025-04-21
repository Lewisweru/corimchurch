import { DonationOption } from '../types';

export const donationOptions: DonationOption[] = [
  {
    id: '1',
    title: 'General Fund',
    description: 'Support the ongoing operations and ministries of our church including worship services, staff, facilities, and daily operations.',
    icon: 'church'
  },
  {
    id: '2',
    title: 'Building Fund',
    description: 'Contribute to renovations, expansions, and maintenance of our church facilities to support our growing community.',
    icon: 'building'
  },
  {
    id: '3',
    title: 'Outreach & Missions',
    description: 'Help us serve our local community and support missions around the world through various outreach programs and partnerships.',
    icon: 'heart-handshake'
  },
  {
    id: '4',
    title: 'Youth Ministry',
    description: 'Invest in the future by supporting our youth programs, camps, retreats, and special events for children and teens.',
    icon: 'users'
  }
];