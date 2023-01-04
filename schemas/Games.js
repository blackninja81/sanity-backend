export default {
    name: 'games',
    title: 'Games',
    type: 'document',
    fields: [
        {
        name: 'image',
        title: 'Image',
        type: 'array',
        of: [{type: 'image'}],
        options: {
            hotspot: true,
        }
    },
    {
        name: 'title',
        title: 'Title',
        type:'string'
    },
    {
        name: 'plartform',
        title: 'Plartform',
        type:'string'
    },
    {
        name: 'slug',
        title: 'slug',
        type:'string',
        options: {
            source: 'title',
            maxLength: 80
        }
    },
    {
        name: 'description',
        title: 'Description',
        type:'string'
    },
    {
        name: 'price',
        title: 'Price',
        type: 'number',
    },
]
}