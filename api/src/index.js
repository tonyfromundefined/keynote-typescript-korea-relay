const cors = require('cors')
const express = require('express')

const app = express()

const PORT = 7777

app.use(cors())

app.get('/users', (req, res) => {
  res.json({
    data: {
      users: [
        {
          id: '55827',
          displayName: 'Millie Francis',
          username: 'millie_francis'
        },
        {
          id: '50265',
          displayName: 'Milton Gibson',
          username: 'milton_gibson'
        },
        {
          id: '18337',
          displayName: 'Violet Griffin',
          username: 'violet_griffin'
        },
        {
          id: '47910',
          displayName: 'Cecilia Davidson',
          username: 'cecilia_davidson'
        },
        {
          id: '25509',
          displayName: 'Jennie Hamilton',
          username: 'jennie_hamilton'
        },
        {
          id: '18496',
          displayName: 'Rhoda Marsh',
          username: 'rhoda_marsh'
        },
      ]
    }
  })
})

app.get('/articles', (req, res) => {
  res.json({
    data: {
      articles: [
        {
          id: '34519',
          user: {
            id: '47910',
            displayName: 'Cecilia Davidson',
            username: 'cecilia_davidson'
          },
          title: 'Incididunt do pariatur do ea elit deserunt reprehenderit duis duis aute eiusmod sunt dolore.',
          content: 'Veniam cillum reprehenderit exercitation velit officia sit. Consequat eu mollit nisi mollit ipsum duis. Tempor exercitation adipisicing irure cillum voluptate pariatur voluptate ea nisi. Sit fugiat laboris amet ipsum culpa veniam. Mollit minim ipsum qui fugiat minim id sint sit amet adipisicing amet enim. Anim consequat nisi reprehenderit eu mollit voluptate qui reprehenderit occaecat aliqua ad sit pariatur esse. Nostrud consectetur aute aliqua laboris ipsum laborum ad reprehenderit sint labore ex qui Lorem ipsum.',
          commentNum: 201,
        },
        {
          id: '7699',
          user: {
            id: '18337',
            displayName: 'Violet Griffin',
            username: 'violet_griffin'
          },
          title: 'Amet nostrud quis culpa nostrud aute deserunt id voluptate anim excepteur Lorem ullamco.',
          content: 'Cillum do sit adipisicing voluptate est occaecat qui. Nulla id est ad deserunt velit eu nisi. Ipsum est irure et non cupidatat eu irure minim. Duis do laborum id anim ad aliqua voluptate sit ad nostrud. Voluptate aliquip fugiat voluptate id.',
          commentNum: 176,
        },
        {
          id: '23926',
          user: {
            id: '50265',
            displayName: 'Milton Gibson',
            username: 'milton_gibson'
          },
          title: 'Quis ex irure elit minim ipsum.',
          content: 'Quis id labore ipsum excepteur ad fugiat cillum consectetur. Adipisicing quis eu ad consectetur labore ipsum. Occaecat cupidatat sit amet consectetur labore nulla commodo in officia ut et dolore. Nostrud enim aliquip est exercitation voluptate ut sunt. Sint nulla veniam officia nostrud cupidatat. Id velit ad nostrud officia officia nulla velit elit.',
          commentNum: 102,
        },
        {
          id: '4772',
          user: {
            id: '18496',
            displayName: 'Rhoda Marsh',
            username: 'rhoda_marsh'
          },
          title: 'Excepteur irure anim nulla Lorem enim aliquip tempor quis ea voluptate.',
          content: 'Ad officia in proident labore nostrud tempor eu excepteur dolore officia do eu elit aliquip. Sint laboris ullamco reprehenderit quis aute. Et fugiat est proident est occaecat velit consequat sunt proident esse qui veniam ex dolore. Ut sit esse mollit pariatur pariatur sit sit quis ipsum pariatur occaecat nisi.',
          commentNum: 106,
        },
        {
          id: '5582',
          user: {
            id: '18496',
            displayName: 'Rhoda Marsh',
            username: 'rhoda_marsh'
          },
          title: 'Reprehenderit veniam esse dolor Lorem culpa ex mollit elit magna.',
          content: 'Exercitation incididunt non enim aute ipsum ut enim nulla est dolor voluptate sit ea esse. Laborum ex enim magna commodo incididunt nulla dolore. Ex laboris nulla quis fugiat. In mollit consequat velit excepteur sit. Adipisicing culpa elit ut id minim est. Officia sunt nostrud culpa excepteur ut ipsum culpa ullamco qui. Eu consequat non veniam nulla exercitation dolor amet duis ad pariatur reprehenderit commodo.',
          commentNum: 108,
        },
        {
          id: '23437',
          user: {
            id: '55827',
            displayName: 'Millie Francis',
            username: 'millie_francis'
          },
          title: 'Excepteur ipsum ex do amet excepteur sint sint quis.',
          content: 'In pariatur do incididunt sint irure dolor ea magna et amet Lorem aliqua proident. Sint ex irure adipisicing cillum ea ut quis incididunt. Fugiat aliqua ullamco adipisicing commodo ullamco dolor ad dolore irure reprehenderit.',
          commentNum: 72,
        },
        {
          id: '58890',
          user: {
            id: '25509',
            displayName: 'Jennie Hamilton',
            username: 'jennie_hamilton'
          },
          title: 'Id Lorem eiusmod aliquip et ad cupidatat est Lorem sunt.',
          content: 'Aute do amet non officia dolor ad quis veniam. Sint excepteur in adipisicing dolore eu amet exercitation laboris proident voluptate cillum magna. Consequat aliqua nulla minim officia elit officia excepteur ea anim sint in reprehenderit magna duis.',
          commentNum: 228,
        },
      ],
    },
  })
})

app.listen(PORT, () => {
  console.log('Hello TypeScript Korea! This API is running on http://localhost:' + PORT)
})
