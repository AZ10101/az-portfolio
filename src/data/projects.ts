export type Project = {
  id: string
  name: string
  description: string
  image: string
  url?: string
  tags?: string[]
}

export const projects: Project[] = [
  {
    id: 'planter',
    name: 'PLANter',
    description:
      '「やりたい」をタネにして育てる、新感覚ウィッシュリスト。\n30日以内にやりたいことを植えて、忙しい毎日の中でも忘れないように。',
    image: '/projects/planter.png',
    url: 'https://planter-v0.vercel.app/',
    tags: ['ウィッシュリスト'],
  },
  {
    id: 'yonka-timer',
    name: '４科タイマー',
    description:
      '中学受験生向けのシンプルな集中タイマー。\n国語・算数・理科・社会の4科ごとに勉強時間を計測・集計できる。',
    image: '/projects/yonka-timer.jpg',
    url: 'https://yonka-timer.vercel.app/',
    tags: ['教育'],
  },
  {
    id: 'kigo-training',
    name: 'キゴトレ',
    description:
      '季語を知れば、俳句はもっと面白い。\n引いた季語カードで俳句を作る、作句力向上アプリ。',
    image: '/projects/kigo-training.png',
    url: 'https://kigo-training.vercel.app/',
    tags: ['俳句'],
  },
]
