import { Rule } from '@sanity/types'

export default {
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    {
      name: 'customer',
      title: 'Customer',
      type: 'reference',
      to: [{ type: 'customer' }],
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'items',
      title: 'Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'product_name',
              title: 'Product Name',
              type: 'string',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'product_price',
              title: 'Product Price',
              type: 'number',
              validation: (Rule: Rule) => Rule.required(),
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
              validation: (Rule: Rule) => Rule.required().min(1),
            },
          ],
        },
      ],
      validation: (Rule: Rule) => Rule.required().min(1),
    },
    {
      name: 'order_date',
      title: 'Order Date',
      type: 'datetime',
      validation: (Rule: Rule) => Rule.required(),
    },
  ],
};
