export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '609572486cb8e69b8e6511fd',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-29uinw7h',
                  apiId: '6099c545-849f-470d-b98c-4cc19d7ed352'
                },
                {
                  buildHookId: '60957249ffcf1a94989b042a',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dc5m2zyv',
                  apiId: '641067d6-e19b-45d4-84bd-1d8a102e0991'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MindfulWebs/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dc5m2zyv.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
