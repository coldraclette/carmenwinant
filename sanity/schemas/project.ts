export const project = {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'Title of the project',
    },
    {
      name: 'year',
      title: 'Year',
      type: 'string',
      description: 'Year of the project',
    },
    {
      name: 'items',
      title: 'Items',
      description: 'Add an image, a video or a textblock',
      type: 'array',
      of: [
        {
          name: 'textblock',
          type: 'object',
          title: 'Text block',
          fields: [
            {
              type: 'text',
              name: 'text',
              title: 'Text block',
            },
          ],
        },
        {
          name: 'image',
          type: 'image',
          fields: [{ name: 'caption', type: 'string', title: 'Caption' }],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'year',
      media: 'items',
    },
    prepare({ title, subtitle, media }: any) {
      return {
        title,
        subtitle,
        media: media ? media[0] : null,
      };
    },
  },
};
