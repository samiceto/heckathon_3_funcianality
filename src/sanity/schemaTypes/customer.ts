import { Rule } from '@sanity/types'

export default {
  name: 'customer',
  title: 'Customer',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email(),
    },
    {
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'address',
      title: 'Address',
      type: 'text',
      validation: (Rule: Rule) => Rule.optional(),
    },
  ],
};
